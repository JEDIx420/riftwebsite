"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CreditCard, Building2, Database, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

interface IndustryItem {
  id: string;
  category: string;
  title: string;
  headline: string;
  href: string;
  description: string;
  metrics: { label: string; value: string }[];
  schemaExample: string;
  icon: React.ElementType;
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: "payments",
    category: "FINTECH & ACQUIRING",
    title: "Payment Settlement & Switch Reconciliation",
    headline: "Reconcile millions of daily card, UPI, and POS authorizations against switch clearing batches.",
    href: "/solutions/payments",
    icon: CreditCard,
    description: "In high-velocity merchant acquiring, asynchronous settlement batches diverge constantly. Rift isolates fee micro-deltas, timing lags, and missing refund credits in seconds.",
    metrics: [
      { label: "Throughput", value: "492K rows/s" },
      { label: "Memory Peak", value: "97 MB RSS" },
      { label: "Triage Acceleration", value: "81% Explained" },
    ],
    schemaExample: `rift compare pos_tx.jsonl switch_batch.parquet -s payment_schema.json -k rrn,auth_code`,
  },
  {
    id: "banking",
    category: "CORE BANKING & LEDGERS",
    title: "Nostro/Vostro & Inter-Ledger Balancing",
    headline: "Deterministic multi-currency ledger matching across legacy mainframes and real-time payment rails.",
    href: "/solutions/banking",
    icon: Building2,
    description: "Banking ledgers cannot tolerate floating-point rounding drift. Rift’s canonical fixed-point decimal arithmetic guarantees exact scale balance across millions of accounts.",
    metrics: [
      { label: "Precision", value: "18.4 Decimals" },
      { label: "Multi-Currency", value: "ISO-4217" },
      { label: "Audit Fingerprint", value: "SHA-256" },
    ],
    schemaExample: `rift compare general_ledger.csv nostro_mt940.csv -s banking_schema.json -k account,ccy`,
  },
  {
    id: "data-eng",
    category: "DATA PLATFORMS & MLOPS",
    title: "Data Pipeline & Warehouse Integrity",
    headline: "Independent verification gates before unverified data enters production warehouse models.",
    href: "/solutions/data-engineering",
    icon: Database,
    description: "A pipeline reporting SUCCESS is not proof of correct data. Run Rift inside Airflow, Dagster, or Kubernetes to compare raw staging files against transformed tables.",
    metrics: [
      { label: "Formats", value: "Parquet / Arrow" },
      { label: "Unkeyed Mode", value: "O(N) Multiset" },
      { label: "Exit Codes", value: "0, 1, 2" },
    ],
    schemaExample: `rift compare staging.parquet prod.parquet -s etl_schema.json --unkeyed --engine external`,
  },
  {
    id: "enterprise",
    category: "ENTERPRISE FINANCE & ERP",
    title: "ERP Migration & Statutory Close",
    headline: "Eliminate manual spreadsheet close cycles and generate auditor-ready evidence packs.",
    href: "/solutions/enterprise",
    icon: Briefcase,
    description: "Verify multi-subsidiary intercompany journals during SAP, Oracle, or NetSuite migrations without exposing sensitive ledger records outside your firewall.",
    metrics: [
      { label: "Close Cycle", value: "Hours vs Weeks" },
      { label: "SOX Ready", value: "100% Trace" },
      { label: "Exfiltration", value: "Zero Cloud" },
    ],
    schemaExample: `rift compare sap_gl.csv oracle_sub.parquet -s erp_schema.json -k journal_id`,
  },
];

export function IndustryShowcaseStory() {
  const [activeTab, setActiveTab] = useState(0);
  const activeIndustry = INDUSTRIES[activeTab];
  const IconComponent = activeIndustry.icon;

  return (
    <section className="py-24 lg:py-36 bg-[#080A0E] border-b border-[#222733]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E1252D]" />
              <span className="font-mono text-xs text-[#E1252D] font-bold tracking-widest uppercase">
                CHAPTER 07 · INDUSTRY USE CASES
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05]">
              Purpose-Built For High-Stakes Operations<span className="text-[#E1252D]">.</span>
            </h2>
          </div>

          <Link
            href="/solutions"
            className="text-xs font-mono font-bold uppercase tracking-wider text-[#E1252D] hover:underline flex items-center gap-1.5 shrink-0"
          >
            <span>Explore All Industry Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Industry Nav Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {INDUSTRIES.map((ind, idx) => (
            <button
              key={ind.id}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-[#E1252D] text-white shadow-xl shadow-[#E1252D]/20 font-bold"
                  : "bg-[#0D1017] border border-[#222733] text-[#9AA0A6] hover:text-white"
              }`}
            >
              {ind.category}
            </button>
          ))}
        </div>

        {/* Active Industry Showcase Card */}
        <div className="glass-panel-glow rounded-2xl p-6 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="w-12 h-12 rounded-xl bg-[#141822] border border-[#222733] flex items-center justify-center text-[#E1252D]">
              <IconComponent className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-mono text-[#E1252D] uppercase font-bold tracking-widest block mb-1">
                {activeIndustry.category}
              </span>
              <h3 className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight">
                {activeIndustry.title}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-[#E2E8F0] font-medium leading-relaxed">
              {activeIndustry.headline}
            </p>

            <p className="text-xs sm:text-sm text-[#9AA0A6] leading-relaxed">
              {activeIndustry.description}
            </p>

            <div className="pt-2">
              <Link
                href={activeIndustry.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E1252D] hover:bg-[#FF333D] text-xs font-mono font-bold uppercase tracking-wider text-white transition-colors"
              >
                <span>Read Full Technical Solution</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4 font-mono text-xs">
            {/* Metrics Grid */}
            <div className="grid grid-cols-3 gap-2 text-center">
              {activeIndustry.metrics.map((m, i) => (
                <div key={i} className="p-3 rounded-xl bg-[#080B10] border border-[#222733]">
                  <span className="text-[10px] text-[#5F6368] block uppercase truncate">{m.label}</span>
                  <span className="text-sm font-bold text-white mt-1 block truncate">{m.value}</span>
                </div>
              ))}
            </div>

            {/* Code Snippet Box */}
            <div className="p-4 rounded-xl bg-[#06080C] border border-[#222733] space-y-2">
              <div className="text-[11px] text-[#5F6368] uppercase pb-1 border-b border-[#222733]/60 flex items-center justify-between">
                <span>VERIFIED CLI WORKFLOW</span>
                <span className="text-emerald-400">READY</span>
              </div>
              <pre className="text-white text-[11px] overflow-x-auto p-2 bg-[#0A0D14] rounded border border-[#222733] leading-relaxed">
                {activeIndustry.schemaExample}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
