import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  CreditCard, 
  Building2, 
  Database, 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Shield 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Solutions & Industry Applications",
  description:
    "Explore how RIFT reconciles complex datasets across payment settlement, core banking, data engineering, and enterprise finance.",
};

const SOLUTIONS = [
  {
    title: "Payment Settlement & Gateway Triage",
    href: "/solutions/payments",
    icon: CreditCard,
    subtitle: "Resolve gateway vs bank statement divergence & dispute preparation",
    description:
      "Modern payment processors, POS gateways, and aggregators handle millions of high-velocity transactions daily. Rift compares gateway auth logs against switch batches and bank settlement files to isolate missing credits, fee discrepancies, and chargebacks.",
    metrics: ["Cross-system batch matching", "Fee delta isolation", "Chargeback evidence prep"],
  },
  {
    title: "Core Banking & Inter-Ledger Matching",
    href: "/solutions/banking",
    icon: Building2,
    subtitle: "Deterministic nostro/vostro & multi-entity ledger parity",
    description:
      "Banks and financial institutions must balance complex multi-currency ledgers against external correspondent accounts. Rift provides exact fixed-point decimal reconciliation and composite-key tracking across legacy core banking systems and modern payment rails.",
    metrics: ["Nostro/Vostro verification", "Multi-currency rounding parity", "Auditable exception logs"],
  },
  {
    title: "Data Engineering & Pipeline Integrity",
    href: "/solutions/data-engineering",
    icon: Database,
    subtitle: "Verify ETL migrations, Parquet pipelines, and warehouse integrity",
    description:
      "A completed pipeline job is not proof of correct data. Rift integrates into Airflow, Dagster, and containerized CI/CD pipelines to compare source databases against target Parquet or data lake files, catching ETL regressions before downstream consumption.",
    metrics: ["Parquet & PostgreSQL parity", "Unkeyed multiset comparison", "Bounded 97MB RSS execution"],
  },
  {
    title: "Enterprise Finance & ERP Migration",
    href: "/solutions/enterprise",
    icon: Briefcase,
    subtitle: "Cross-ERP journal reconciliation & regulatory audit readiness",
    description:
      "Enterprise finance teams managing SAP, Oracle, or NetSuite migrations face massive ledger reconciliation overhead. Rift reconciles journal exports and subsidiary balances, producing cryptographic audit trails and structured variance reports.",
    metrics: ["ERP migration validation", "Variance threshold reporting", "Regulator-ready artifacts"],
  },
];

export default function SolutionsOverviewPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#14171E] border border-[#2D3343] text-xs font-mono text-[#E1252D]">
              <span>SOLUTIONS OVERVIEW</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#F4F4F6] tracking-tight leading-[1.1]">
              Engineered for data-intensive operations.
            </h1>
            <p className="text-lg text-[#8E929B] leading-relaxed">
              From payment networks settling millions of transactions to data platforms validating high-scale Parquet pipelines, RIFT delivers deterministic reconciliation without operational disruption.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SOLUTIONS.map((sol) => {
              const IconComp = sol.icon;
              return (
                <div
                  key={sol.title}
                  className="p-8 rounded-xl bg-[#0F1115] border border-[#222733] hover:border-[#E1252D]/60 transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-[#14171E] border border-[#222733] flex items-center justify-center text-[#E1252D] group-hover:border-[#E1252D]/40 transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-[#F4F4F6] group-hover:text-white">
                        {sol.title}
                      </h2>
                      <div className="text-xs font-mono text-[#E1252D] mt-1">
                        {sol.subtitle}
                      </div>
                    </div>
                    <p className="text-sm text-[#8E929B] leading-relaxed">
                      {sol.description}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {sol.metrics.map((m) => (
                        <span
                          key={m}
                          className="px-2.5 py-1 rounded bg-[#14171E] border border-[#222733] text-[11px] font-mono text-[#8E929B]"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[#222733] flex items-center justify-between">
                    <Link
                      href={sol.href}
                      className="text-xs font-mono font-bold uppercase tracking-wider text-[#E1252D] group-hover:text-[#FF333D] flex items-center gap-1.5"
                    >
                      <span>Explore detailed use case</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PoC Evaluation Callout */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h3 className="text-3xl font-black text-[#F4F4F6]">
            Start with a focused proof of concept
          </h3>
          <p className="text-sm text-[#8E929B] max-w-xl mx-auto">
            We work with prospective enterprise partners to evaluate RIFT against agreed datasets and historical exceptions under mutual NDA.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?intent=poc"
              className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] transition-colors inline-block"
            >
              Discuss a PoC
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
