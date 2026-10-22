import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Building2, ArrowRight, CheckCircle2, Shield, Binary, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "Core Banking & Inter-Ledger Reconciliation",
  description:
    "Deterministic multi-system ledger matching, nostro/vostro verification, and audit-ready discrepancy investigation for banks and regulated financial institutions.",
};

export default function BankingSolutionPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#222733]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#14171E] border border-[#2D3343] text-xs font-mono text-[#E1252D]">
              <span>SOLUTIONS · BANKING & FINANCIAL INSTITUTIONS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#F4F4F6] tracking-tight leading-[1.1]">
              Core Banking & Inter-Ledger Parity
            </h1>
            <p className="text-lg text-[#8E929B] leading-relaxed">
              Verify multi-currency ledger balances, reconcile nostro/vostro correspondent accounts, and satisfy stringent regulatory audit mandates with deterministic exactness.
            </p>
          </div>
        </div>
      </section>

      {/* Core Banking Challenges */}
      <section className="py-20 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl font-black text-[#F4F4F6]">
              Complex Banking Ledger Topology
            </h2>
            <p className="mt-3 text-base text-[#8E929B]">
              Banking architectures frequently combine core legacy COBOL/AS400 mainframe databases with modern event-driven payment microservices and external clearing houses (SWIFT, Fedwire, RTGS).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <span className="text-xs font-mono text-[#E1252D] font-bold uppercase">USE CASE 01</span>
              <h3 className="text-lg font-bold text-[#F4F4F6]">Nostro / Vostro Shadow Accounting</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Compare internal mirror accounts against daily statement messages (MT940/MT950) from foreign correspondent banks. Catch value-date discrepancies and foreign exchange rounding variances instantly.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <span className="text-xs font-mono text-[#E1252D] font-bold uppercase">USE CASE 02</span>
              <h3 className="text-lg font-bold text-[#F4F4F6]">General Ledger to Sub-Ledger Balancing</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Perform end-of-day deterministic reconciliations between deposit sub-ledgers, loan accounting engines, and the central general ledger across millions of individual accounts.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <span className="text-xs font-mono text-[#E1252D] font-bold uppercase">USE CASE 03</span>
              <h3 className="text-lg font-bold text-[#F4F4F6]">Regulatory Audit Trails & Traceability</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Produce mathematically verified, immutable execution fingerprints for internal audit, statutory auditors, and central bank compliance bodies without disclosing sensitive cardholder or account data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-20 border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-mono text-[#E1252D] uppercase font-bold tracking-wider">
                FINANCIAL PRECISION
              </span>
              <h2 className="text-3xl font-black text-[#F4F4F6] mt-2 mb-4">
                Exact Fixed-Point Decimal Arithmetic
              </h2>
              <p className="text-sm text-[#8E929B] leading-relaxed mb-6">
                Standard double-precision IEEE-754 floating point numbers cannot accurately represent currency fractions (e.g. 0.1 + 0.2 ≠ 0.3). Rift’s canonical type system handles exact fixed-point decimals, preventing false positives and ensuring every paisa or cent balances to zero.
              </p>
              <div className="space-y-3 font-mono text-xs text-[#8E929B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Exact scale & precision preserving decimal type</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Composite keys (e.g. branch_code, account_no, currency)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Explicit policy-controlled duplicate key resolution</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] font-mono text-xs">
              <div className="text-[#5E6370] pb-2 border-b border-[#222733] mb-3">
                // Sample Banking Schema Excerpt
              </div>
              <pre className="text-[#F4F4F6] overflow-x-auto leading-relaxed">
{`{
  "fields": [
    {"name": "account_number", "type": "string"},
    {"name": "currency", "type": "string"},
    {"name": "ledger_balance", "type": "decimal", "precision": 18, "scale": 4},
    {"name": "posted_at", "type": "timestamp"},
    {"name": "reconciliation_batch", "type": "string"}
  ],
  "primary_key": ["account_number", "currency"]
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B0C10]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-black text-[#F4F4F6]">
            Schedule an institutional technical briefing
          </h2>
          <p className="text-sm text-[#8E929B]">
            Discuss how RIFT can be deployed within your secure banking environment or private cloud infrastructure.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?intent=poc"
              className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] transition-colors inline-block"
            >
              Discuss a Banking PoC
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
