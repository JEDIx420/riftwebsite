import React, { Suspense } from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { 
  Building2, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  Lock, 
  ArrowRight, 
  ExternalLink, 
  FileCheck 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Investor Centre & Institutional Briefing",
  description:
    "Institutional investment thesis, deep-tech differentiation, market opportunity, and commercialization roadmap for RIFT and Eagle Eye Research and Deployment Labs.",
};

const MILESTONES = [
  {
    period: "2024 – 2025",
    title: "Core Reconciliation Engine & Grammar",
    status: "Completed",
    description:
      "Design and implementation of the compiled Rust reconciliation core, canonical schema system, and exact fixed-point decimal type representation. Initial distributed releases (v0.1.1).",
  },
  {
    period: "Q1 – Q3 2026",
    title: "PGDS Investigation & Memory Bounding",
    status: "Completed",
    description:
      "Development of Parameterized Graph Discrepancy Search (PGDS) for candidate divergence discovery. Implementation of the external sort/merge engine with strict sorter budget (--memory-limit-mb), stabilizing peak RSS at ~97 MB.",
  },
  {
    period: "October 2026",
    title: "Huddle Global 2026 & Enterprise Showcases",
    status: "Active",
    description:
      "Enterprise showcase briefings with major payment networks (Mswipe) and enterprise AI infrastructure partners (JioGenNext) at Huddle Global 2026. Transition to proprietary commercial licensing under Eagle Eye Labs.",
  },
  {
    period: "Roadmap (2027+)",
    title: "Native Cloud Connectors & Private-Set Intersection",
    status: "Research / Roadmap",
    description:
      "Direct authorized connectors for Snowflake, BigQuery, and ClickHouse; privacy-preserving private-set intersection (PSI) for cross-organizational data reconciliation without raw data sharing.",
  },
];

export default function InvestorsPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#222733]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#14171E] border border-[#2D3343] text-xs font-mono text-[#E1252D]">
              <span>INSTITUTIONAL BRIEFING · EAGLE EYE LABS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#F4F4F6] tracking-tight leading-[1.1]">
              The Verifiable Data Infrastructure Opportunity
            </h1>
            <p className="text-lg text-[#8E929B] leading-relaxed">
              As global enterprises automate transaction settlement, core banking, and autonomous data pipelines, the financial and regulatory exposure of undetected data divergence multiplies. RIFT is designed to capture this critical verification layer.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Investment Thesis */}
      <section className="py-20 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-[#E1252D] font-bold uppercase tracking-wider">
              INVESTMENT THESIS
            </span>
            <h2 className="text-3xl font-black text-[#F4F4F6] mt-1">
              Why Reconciliation Infrastructure Matters
            </h2>
            <p className="mt-3 text-base text-[#8E929B] leading-relaxed">
              Every modern enterprise operates a fragmented data estate: transaction gateways, legacy relational databases, cloud data lakes (Parquet/Arrow), and external banking partners. Today, reconciling these systems depends almost entirely on brittle SQL scripts, manual spreadsheets, or bloated generic dashboards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <div className="text-xs font-mono text-[#E1252D] font-bold">STRUCTURAL TAILWIND 01</div>
              <h3 className="text-lg font-bold text-[#F4F4F6]">Exponential Velocity & Volume</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Instant payment networks (UPI, FedNow, SEPA Instant) process billions of micro-transactions daily. Asynchronous settlement creates continuous timing divergence that cannot be inspected by hand.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <div className="text-xs font-mono text-[#E1252D] font-bold">STRUCTURAL TAILWIND 02</div>
              <h3 className="text-lg font-bold text-[#F4F4F6]">Regulatory & Audit Pressure</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Central banks and statutory auditors increasingly demand mathematically provable, tamper-evident reconciliation trails rather than sample-based periodic audits.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <div className="text-xs font-mono text-[#E1252D] font-bold">STRUCTURAL TAILWIND 03</div>
              <h3 className="text-lg font-bold text-[#F4F4F6]">AI & Automated Pipeline Integrity</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Enterprises deploying autonomous AI workflows require deterministic verification gates before synthetic outputs or training datasets propagate into production operational databases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Technology Moat */}
      <section className="py-20 border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-[#E1252D] font-bold uppercase tracking-wider">
              TECHNOLOGY DIFFERENTIATION
            </span>
            <h2 className="text-3xl font-black text-[#F4F4F6] mt-1">
              Engineering Defensibility
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 rounded-xl bg-[#0F1115] border border-[#222733] space-y-4">
              <h3 className="text-xl font-bold text-[#F4F4F6] flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#E1252D]" />
                Compiled Native Rust Core
              </h3>
              <p className="text-sm text-[#8E929B] leading-relaxed">
                Unlike Java/JVM-based data tools prone to garbage collection pauses or Python tools constrained by the GIL, Rift is compiled native code with zero runtime dependency. It processes millions of records in seconds while strictly bounding memory through its disk-backed external sort engine.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#0F1115] border border-[#222733] space-y-4">
              <h3 className="text-xl font-bold text-[#F4F4F6] flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-[#E1252D]" />
                Automated PGDS Investigation
              </h3>
              <p className="text-sm text-[#8E929B] leading-relaxed">
                Generic diff tools report that rows differ; Rift discovers <em>why</em>. Parameterized Graph Discrepancy Search searches for mathematical transformation invariants across observed discrepancies and verifies candidates against ground truth, cutting manual research overhead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Commercialization Strategy */}
      <section className="py-20 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-[#E1252D] font-bold uppercase tracking-wider">
              GO-TO-MARKET & MONETIZATION
            </span>
            <h2 className="text-3xl font-black text-[#F4F4F6] mt-1">
              Commercialization Strategy
            </h2>
            <p className="mt-3 text-base text-[#8E929B]">
              Eagle Eye employs a focused, high-leverage enterprise distribution model:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <div className="text-xs font-mono text-[#F4F4F6] font-bold uppercase">TIER 01</div>
              <h3 className="text-base font-bold text-[#F4F4F6]">Direct Enterprise Licensing</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Annual node-based or volume-tiered commercial licenses for banks, payment aggregators, and enterprise finance teams running Rift on private infrastructure.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <div className="text-xs font-mono text-[#F4F4F6] font-bold uppercase">TIER 02</div>
              <h3 className="text-base font-bold text-[#F4F4F6]">OEM & Platform Embedding</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Embedding the core reconciler and console into third-party fintech SaaS platforms, core banking suites, and ETL orchestration vendors under private distribution agreements.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <div className="text-xs font-mono text-[#F4F4F6] font-bold uppercase">TIER 03</div>
              <h3 className="text-base font-bold text-[#F4F4F6]">Custom Connector Development</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                High-margin integration engagements to develop and validate custom native adapters for proprietary enterprise mainframes, closed APIs, and specialized banking switches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Substantiated Development Milestones */}
      <section className="py-20 border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono text-[#E1252D] font-bold uppercase tracking-wider">
              DEVELOPMENT TIMELINE
            </span>
            <h2 className="text-3xl font-black text-[#F4F4F6] mt-1">
              Substantiated Research & Product Milestones
            </h2>
            <p className="text-sm text-[#8E929B] mt-2">
              Our engineering progress reflects real commits, benchmark harnesses, and verified technical consolidation passes.
            </p>
          </div>

          <div className="space-y-6">
            {MILESTONES.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[#E1252D]">
                      {m.period}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#14171E] border border-[#222733] text-[#8E929B]">
                      {m.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#F4F4F6]">{m.title}</h3>
                  <p className="text-xs text-[#8E929B] leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Corporate Entity Attribution */}
      <section className="py-16 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-xl bg-[#0F1115] border border-[#222733] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono text-[#5E6370] uppercase">OPERATING COMPANY</span>
              <h3 className="text-xl font-bold text-[#F4F4F6]">
                Eagle Eye Research and Deployment Labs Private Limited
              </h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                RIFT is developed, patented, and commercially licensed by Eagle Eye Research and Deployment Labs Private Limited, a deep-tech research corporation registered in India.
              </p>
            </div>

            <a
              href="https://eagleeyesystems.in"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded bg-[#14171E] hover:bg-[#1A1E28] border border-[#2D3343] text-xs font-mono text-[#F4F4F6] flex items-center gap-1.5 shrink-0"
            >
              <span>Visit Corporate Site</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#E1252D]" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 6: Confidential Materials Notice & Enquiry Form */}
      <section className="py-20" id="enquiries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#14171E] border border-[#222733] text-xs font-mono text-[#8E929B]">
              <Lock className="w-3.5 h-3.5 text-[#E1252D]" />
              <span>CONFIDENTIAL DILIGENCE UNDER MUTUAL NDA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F4F6]">
              Institutional & Strategic Enquiries
            </h2>
            <p className="text-sm text-[#8E929B] leading-relaxed">
              In accordance with corporate governance rules, capitalization tables, detailed financial statements, and confidential research decks are disclosed exclusively to verified institutional syndicates and strategic partners under executed NDA.
            </p>
          </div>

          <Suspense fallback={<div className="text-center py-12 text-[#8E929B] font-mono text-xs">Loading form...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </section>

      <Footer />
    </div>
  );
}
