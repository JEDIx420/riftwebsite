"use client";

import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; z: number; speed: number; phase: number; red: boolean };

export function DataStreamCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;
    const ctx = context;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const intersection = { visible: true };
    let running = true;
    let raf = 0;
    let last = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let pointerX = 0;
    let pointerY = 0;
    let frameNumber = 0;

    const resetParticles = () => {
      const mobile = width < 768;
      particles = Array.from({ length: mobile ? 35 : 90 }, () => ({
        x: (Math.random() - .5) * width * 1.4,
        y: (Math.random() - .5) * height * 1.4,
        z: Math.random() * 900 + 100,
        speed: Math.random() * 3 + 2,
        phase: Math.random() * Math.PI * 2,
        red: Math.random() > .38,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      resetParticles();
      ctx.fillStyle = "#050608";
      ctx.fillRect(0, 0, width, height);
    };

    const render = (now: number) => {
      raf = 0;
      if (!running || document.hidden || !intersection.visible || reduceMotion.matches) return;
      // Limit animation to 30 FPS; avoids continuous high-DPI shadow rendering.
      if (now - last < 33) { raf = requestAnimationFrame(render); return; }
      const delta = Math.min((now - (last || now)) / 33, 2);
      last = now;
      frameNumber++;
      ctx.fillStyle = "rgba(5,6,8,0.38)";
      ctx.fillRect(0, 0, width, height);
      const cx = width * .5 + pointerX;
      const cy = height * .5 + pointerY;
      const focal = Math.min(width, height) * .7;
      for (const p of particles) {
        p.z -= p.speed * delta;
        p.x += Math.sin(frameNumber * .012 + p.phase) * .3 * delta;
        if (p.z < 35) {
          p.z = 1000;
          p.x = (Math.random() - .5) * width * 1.4;
          p.y = (Math.random() - .5) * height * 1.4;
        }
        const headX = cx + p.x / p.z * focal;
        const headY = cy + p.y / p.z * focal;
        const tailX = cx + p.x / (p.z + 30) * focal;
        const tailY = cy + p.y / (p.z + 30) * focal;
        const alpha = Math.max(.05, Math.min(.7, (1000 - p.z) / 900));
        ctx.strokeStyle = p.red ? `rgba(225,37,45,${alpha})` : `rgba(244,246,249,${alpha})`;
        ctx.lineWidth = Math.min(2.2, Math.max(.5, (1000 - p.z) / 500));
        ctx.beginPath();
        ctx.moveTo(headX, headY);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
      }
      raf = requestAnimationFrame(render);
    };

    const sync = () => {
      const shouldRun = !document.hidden && intersection.visible && !reduceMotion.matches;
      if (!shouldRun) { cancelAnimationFrame(raf); raf = 0; last = 0; return; }
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onPointer = (event: PointerEvent) => {
      pointerX = (event.clientX / Math.max(width, 1) - .5) * 22;
      pointerY = (event.clientY / Math.max(height, 1) - .5) * 22;
    };
    const observer = new IntersectionObserver(([entry]) => {
      intersection.visible = entry.isIntersecting;
      sync();
    }, { threshold: 0 });
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    observer.observe(canvas);
    document.addEventListener("visibilitychange", sync);
    reduceMotion.addEventListener("change", sync);
    window.addEventListener("pointermove", onPointer, { passive: true });
    resize();
    sync();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
      resizeObserver.disconnect();
      document.removeEventListener("visibilitychange", sync);
      reduceMotion.removeEventListener("change", sync);
      window.removeEventListener("pointermove", onPointer);
    };
  }, []);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none z-0" aria-hidden="true" />;
}
