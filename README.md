# RIFT Official Website (`rift.lt`)

> Verifiable Reconciliation Infrastructure — Production Marketing & Technical Documentation Portal.

This repository powers the official website and developer portal for **RIFT**, developed by **Eagle Eye Research and Deployment Labs Private Limited**.

- **Production Domain:** [https://rift.lt](https://rift.lt)
- **Cloudflare Pages Production URL:** [https://riftwebsite.pages.dev](https://riftwebsite.pages.dev)
- **Corporate Entity:** Eagle Eye Research and Deployment Labs Private Limited ([https://eagleeyesystems.in](https://eagleeyesystems.in))
- **Engine Repository:** [https://github.com/JEDIx420/rift](https://github.com/JEDIx420/rift)

---

## 🛠 Technology Stack

- **Framework:** Next.js 16 (App Router)
- **UI & Runtime:** React 19, TypeScript
- **Styling & Design System:** Tailwind CSS v4, Lucide Icons, Custom Signal Red & Obsidian palette
- **Animation:** Lightweight SVG/CSS pipeline visualization with `prefers-reduced-motion` compliance
- **Hosting & Edge Delivery:** Cloudflare Pages (Static Export)
- **SEO & AI Search:** Pre-rendered HTML routes, dynamic `sitemap.xml`, `robots.txt`, Open Graph metadata, `llms.txt`

---

## 📂 Site Architecture & Page Inventory

- `/` — Homepage: Full-viewport hero, signature reconciliation animation, the reconciliation gap, real CLI terminal demo, verified M4 benchmarks, and conversion flows.
- `/product` — Product architecture deep dive: Dual execution engines, canonical type system, PGDS investigation, machine-readable JSON outputs, and audited capability matrix.
- `/solutions` — Enterprise solutions overview.
  - `/solutions/payments` — Payment settlement, switch logs, gateway divergence, and chargeback evidence preparation.
  - `/solutions/banking` — Core banking ledgers, nostro/vostro accounts, and regulatory audit trails.
  - `/solutions/data-engineering` — ETL pipeline verification, database migrations, and Parquet data lakes.
  - `/solutions/enterprise` — Multi-entity ERP journal reconciliation (SAP, Oracle) and statutory close acceleration.
- `/developers` — Comprehensive CLI documentation: `rift compare`, `rift explain`, `rift capabilities`, schema JSON specification, and exit codes (0, 1, 2).
- `/benchmarks` — Empirical reproducible benchmark measurements captured on Apple Silicon M4 under isolated OS kernel accounting (`/usr/bin/time -l`), warm vs cold protocols, and memory accounting framework.
- `/investors` — Dedicated Investor Centre: Investment thesis, structural tailwinds, technology defensibility, development milestones, and institutional diligence enquiry flow.
- `/insights` — Engineering research papers:
  - `/insights/deterministic-reconciliation-at-scale`
  - `/insights/why-rust-cli-beats-dashboards-for-etl-verification`
  - `/insights/pgds-automated-divergence-investigation`
- `/company` — About Eagle Eye Research and Deployment Labs Private Limited, governance, and verified corporate links.
- `/contact` — Multi-intent enquiry form (PoC scoping, Technical access, Investor inquiries).
- `/security` — Read-only integration model, local execution, zero cloud exfiltration, and cryptographic verification.
- `/licensing` — Rift Proprietary Commercial Software License and historical v0.1.1 Apache-2.0 grants.
- `/privacy` & `/terms` — Legal terms and data privacy policies.

---

## 🚀 Local Development

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Generate production static export
npm run build
```

---

## 🌐 Cloudflare Pages Deployment

The static output is generated into `/out` and deployed to Cloudflare Pages:

```bash
npx wrangler pages deploy out --project-name riftwebsite
```

Custom domain: `rift.lt` is routed to `riftwebsite.pages.dev` with DNS managed on Cloudflare.

---

© 2026 Eagle Eye Research and Deployment Labs Private Limited. All rights reserved.
