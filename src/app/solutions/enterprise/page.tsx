import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Briefcase, ArrowRight, CheckCircle2, ShieldCheck, FileCheck, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise Finance & ERP Reconciliation",
  description:
    "Accelerate financial close, automate cross-ERP journal reconciliation, and produce audit-ready evidence with RIFT.",
};

export default function EnterpriseFinanceSolutionPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#222733]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#14171E] border border-[#2D3343] text-xs font-mono text-[#E1252D]">
              <span>SOLUTIONS · ENTERPRISE FINANCE & AUDIT</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#F4F4F6] tracking-tight leading-[1.1]">
              Automate Enterprise Financial Close
            </h1>
            <p className="text-lg text-[#8E929B] leading-relaxed">
              Eliminate manual spreadsheet reconciliation, shorten end-of-month closing cycles, and deliver mathematically verifiable variance evidence for internal and external auditors.
            </p>
          </div>
        </div>
      </section>

      {/* Core Enterprise Use Cases */}
      <section className="py-20 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl font-black text-[#F4F4F6]">
              Eliminating the Manual Close Bottleneck
            </h2>
            <p className="mt-3 text-base text-[#8E929B]">
              Large enterprises operating across global subsidiaries frequently use disparate ERP instances (SAP S/4HANA, Oracle ERP Cloud, Microsoft Dynamics). Reconciling intercompany accounts and journal entries creates significant operational friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <span className="text-xs font-mono text-[#E1252D] font-bold uppercase">CAPABILITY 01</span>
              <h3 className="text-lg font-bold text-[#F4F4F6]">Intercompany Journal Elimination</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Automatically align reciprocal transactions between parent and subsidiary entities. Highlight currency conversion timing lags and missing counterparty journal entries instantly.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <span className="text-xs font-mono text-[#E1252D] font-bold uppercase">CAPABILITY 02</span>
              <h3 className="text-lg font-bold text-[#F4F4F6]">ERP Migration Cutover Verification</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                During multi-year ERP replatforming, verify that historical general ledgers, fixed asset schedules, and accounts payable balances migrate with 100% field-by-field parity before system retirement.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <span className="text-xs font-mono text-[#E1252D] font-bold uppercase">CAPABILITY 03</span>
              <h3 className="text-lg font-bold text-[#F4F4F6]">SOX & Statutory Audit Evidence Packs</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Export verifiable, tamper-evident discrepancy reports detailing every matched and unmatched transaction, drastically reducing statutory audit preparation from weeks to hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-20 border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733]">
              <FileCheck className="w-8 h-8 text-[#E1252D] mb-4" />
              <h4 className="text-base font-bold text-[#F4F4F6] mb-2">Immutable Traceability</h4>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Cryptographic SHA-256 fingerprinting of input records and reconciliation outputs guarantees that results have not been altered post-execution.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733]">
              <ShieldCheck className="w-8 h-8 text-emerald-400 mb-4" />
              <h4 className="text-base font-bold text-[#F4F4F6] mb-2">Zero Cloud Exfiltration</h4>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Rift runs locally on your servers or private VPC. Highly sensitive general ledger numbers and payroll data never leave your protected security boundary.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733]">
              <Layers className="w-8 h-8 text-[#E1252D] mb-4" />
              <h4 className="text-base font-bold text-[#F4F4F6] mb-2">High-Volume Capacity</h4>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Compare multi-million-row transaction logs without spreadsheet row caps or memory allocation exceptions using Rift’s external sort engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B0C10]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-black text-[#F4F4F6]">
            Discuss an enterprise reconciliation PoC
          </h2>
          <p className="text-sm text-[#8E929B]">
            Learn how enterprise finance teams evaluate Rift on complex general ledger cutover files.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?intent=poc"
              className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] transition-colors inline-block"
            >
              Discuss a Finance PoC
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
