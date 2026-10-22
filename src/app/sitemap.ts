import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rift.lt";
  const now = new Date();

  const routes = [
    "",
    "/product",
    "/solutions",
    "/solutions/payments",
    "/solutions/banking",
    "/solutions/data-engineering",
    "/solutions/enterprise",
    "/developers",
    "/benchmarks",
    "/investors",
    "/insights",
    "/insights/deterministic-reconciliation-at-scale",
    "/insights/why-rust-cli-beats-dashboards-for-etl-verification",
    "/insights/pgds-automated-divergence-investigation",
    "/company",
    "/contact",
    "/security",
    "/licensing",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: now,
    changeFrequency: route === "" || route.startsWith("/insights") ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/solutions") || route === "/product" ? 0.9 : 0.8,
  }));
}
