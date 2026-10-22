const { chromium } = require("playwright");
const http = require("http");
const fs = require("fs");
const path = require("path");

// Simple static file server for out/
function createStaticServer(outDir, port = 3333) {
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
    ".txt": "text/plain",
    ".xml": "application/xml",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
  };

  const server = http.createServer((req, res) => {
    let reqPath = req.url.split("?")[0];
    if (reqPath.endsWith("/")) reqPath += "index.html";
    let filePath = path.join(outDir, reqPath);

    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, "index.html");
    }

    if (!fs.existsSync(filePath)) {
      if (fs.existsSync(filePath + ".html")) {
        filePath = filePath + ".html";
      } else {
        const notFoundPath = path.join(outDir, "404.html");
        if (fs.existsSync(notFoundPath)) {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(fs.readFileSync(notFoundPath));
          return;
        }
        res.writeHead(404);
        res.end("Not Found");
        return;
      }
    }

    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": contentType });
    res.end(fs.readFileSync(filePath));
  });

  return new Promise((resolve) => {
    server.listen(port, () => resolve(server));
  });
}

async function runProfile() {
  const outDir = path.resolve(__dirname, "../out");
  const server = await createStaticServer(outDir, 3333);
  console.log("Static server running on http://localhost:3333");

  const browser = await chromium.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const viewports = [
    { name: "Desktop (1440x900)", width: 1440, height: 900, isMobile: false },
    { name: "Mobile (390x844)", width: 390, height: 844, isMobile: true },
  ];

  const results = {};

  for (const vp of viewports) {
    console.log(`\n=== PROFILING: ${vp.name} ===`);
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      isMobile: vp.isMobile,
      hasTouch: vp.isMobile,
      deviceScaleFactor: 2,
    });

    const page = await context.newPage();

    const consoleErrors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    page.on("pageerror", (err) => consoleErrors.push(err.message));

    // Inject performance observer for long tasks and layout shifts
    await page.addInitScript(() => {
      window.__longTasks = [];
      window.__layoutShifts = [];
      window.__frameDurations = [];

      try {
        const ltObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            window.__longTasks.push({
              duration: entry.duration,
              startTime: entry.startTime,
            });
          }
        });
        ltObserver.observe({ entryTypes: ["longtask"] });
      } catch (e) {}

      try {
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              window.__layoutShifts.push(entry.value);
            }
          }
        });
        clsObserver.observe({ type: "layout-shift", buffered: true });
      } catch (e) {}

      // Measure animation frame durations
      let lastTime = performance.now();
      function measureFrames(now) {
        const diff = now - lastTime;
        lastTime = now;
        window.__frameDurations.push(diff);
        requestAnimationFrame(measureFrames);
      }
      requestAnimationFrame(measureFrames);
    });

    const startTime = Date.now();
    await page.goto("http://localhost:3333/", { waitUntil: "networkidle" });
    const loadTime = Date.now() - startTime;

    // Wait for hero canvas to initialize
    await page.waitForTimeout(500);

    // Scroll through the entire page smoothly
    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    const step = vp.isMobile ? 120 : 180;
    const steps = Math.ceil(scrollHeight / step);

    for (let i = 0; i <= steps; i++) {
      await page.evaluate((top) => window.scrollTo(0, top), i * step);
      await page.waitForTimeout(16); // ~60fps cadence
    }

    // Scroll back to top
    for (let i = steps; i >= 0; i -= 2) {
      await page.evaluate((top) => window.scrollTo(0, top), i * step);
      await page.waitForTimeout(12);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);

    // Capture telemetry from page
    const metrics = await page.evaluate(() => {
      const frames = window.__frameDurations || [];
      // Discard initial warmup frames
      const activeFrames = frames.slice(10);
      const avgFrame = activeFrames.length ? activeFrames.reduce((a, b) => a + b, 0) / activeFrames.length : 16.6;
      const fps = avgFrame > 0 ? 1000 / avgFrame : 60;
      const droppedFrames = activeFrames.filter(d => d > 33.3).length; // < 30fps
      const cls = (window.__layoutShifts || []).reduce((a, b) => a + b, 0);
      const longTasks = window.__longTasks || [];

      return {
        totalFrames: activeFrames.length,
        avgFrameMs: avgFrame.toFixed(2),
        estimatedFps: Math.min(60, fps).toFixed(1),
        droppedFrames,
        cls: cls.toFixed(4),
        longTaskCount: longTasks.length,
        maxLongTaskMs: longTasks.length ? Math.max(...longTasks.map(t => t.duration)).toFixed(1) : 0,
      };
    });

    results[vp.name] = {
      loadTimeMs: loadTime,
      ...metrics,
      consoleErrorsCount: consoleErrors.length,
      consoleErrors,
    };

    console.log(`Results for ${vp.name}:`, results[vp.name]);

    // Capture visual screenshot
    const screenshotDir = path.resolve(__dirname, "../screenshots");
    if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });
    await page.screenshot({ path: path.join(screenshotDir, `${vp.isMobile ? "mobile" : "desktop"}-full.png`), fullPage: true });

    await context.close();
  }

  // Also test subroutes for clean loading and zero console errors
  const subroutes = ["/product", "/solutions/payments", "/benchmarks", "/investors", "/developers", "/contact"];
  console.log("\n=== VERIFYING SUBROUTES ===");
  const subrouteResults = {};
  for (const route of subroutes) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await context.newPage();
    const routeErrors = [];
    page.on("console", (msg) => { if (msg.type() === "error") routeErrors.push(msg.text()); });
    page.on("pageerror", (err) => routeErrors.push(err.message));

    const res = await page.goto(`http://localhost:3333${route}`, { waitUntil: "networkidle" });
    const status = res.status();
    subrouteResults[route] = { status, errorCount: routeErrors.length, errors: routeErrors };
    console.log(`Route ${route}: status ${status}, errors: ${routeErrors.length}`);
    await context.close();
  }

  await browser.close();
  server.close();

  console.log("\n================ FULL PERFORMANCE REPORT ================");
  console.log(JSON.stringify({ viewports: results, routes: subrouteResults }, null, 2));
}

runProfile().catch((err) => {
  console.error("Profile failed:", err);
  process.exit(1);
});
