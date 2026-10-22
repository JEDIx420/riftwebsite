import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  CreditCard, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  Layers, 
  AlertTriangle 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Payment Settlement Reconciliation",
  description:
    "Reconcile payment gateway transactions, switch batches, bank settlement statements, and chargeback evidence with RIFT's deterministic Rust engine.",
};

export default function PaymentsSolutionPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#222733]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#14171E] border border-[#2D3343] text-xs font-mono text-[#E1252D]">
              <span>SOLUTIONS · PAYMENT INFRASTRUCTURE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#F4F4F6] tracking-tight leading-[1.1]">
              Payment Settlement & Dispute Reconciliation
            </h1>
            <p className="text-lg text-[#8E929B] leading-relaxed">
              Resolve payment gateway divergence, switch settlement mismatches, and bank statement gaps with a lightweight, read-only Rust engine.
            </p>
          </div>
        </div>
      </section>

      {/* The Payment Reconciliation Gap */}
      <section className="py-20 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl font-black text-[#F4F4F6]">
              Where Payment Records Diverge
            </h2>
            <p className="mt-3 text-base text-[#8E929B]">
              In high-volume payment processing across UPI, cards, and payment gateways, transactions move through multiple intermediary hops before final settlement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733]">
              <div className="text-xs font-mono text-[#E1252D] uppercase font-bold mb-3">
                CHALLENGE 01
              </div>
              <h3 className="text-lg font-bold text-[#F4F4F6] mb-2">
                Settlement Fee & Amount Mismatches
              </h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Merchant discounts (MDR), interchange fees, and split payouts calculated across differing rounding policies lead to micro-deltas that compound into substantial reconciliation variance.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733]">
              <div className="text-xs font-mono text-[#E1252D] uppercase font-bold mb-3">
                CHALLENGE 02
              </div>
              <h3 className="text-lg font-bold text-[#F4F4F6] mb-2">
                Missing Credits & Duplicate Entries
              </h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Network drops, timeout retries, and asynchronous webhook delivery create orphan transactions that appear in gateway logs but fail to post to merchant settlement batches.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733]">
              <div className="text-xs font-mono text-[#E1252D] uppercase font-bold mb-3">
                CHALLENGE 03
              </div>
              <h3 className="text-lg font-bold text-[#F4F4F6] mb-2">
                Dispute & Chargeback Evidence Preparation
              </h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Responding to issuer chargebacks within tight regulatory windows requires assembling exact chronological transaction traces from separate authorization, clearing, and refund files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Read-Only Integration Workflow */}
      <section className="py-20 border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase text-[#E1252D] font-bold tracking-wider">
              NON-INVASIVE ARCHITECTURE
            </span>
            <h2 className="text-3xl font-black text-[#F4F4F6] mt-1">
              Read-Only Integration for Payment Operations
            </h2>
            <p className="text-sm text-[#8E929B] mt-2">
              Rift operates as a focused analysis engine adjacent to existing switch infrastructure. It requires zero database write access and introduces no latency to active payment authorization flows.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#0F1115] border border-[#222733]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#5E6370]">SOURCE DATA</div>
                <div className="p-4 rounded-lg bg-[#14171E] border border-[#222733] font-mono text-xs text-[#F4F4F6]">
                  POS Gateway Logs<br />
                  Settlement Batches<br />
                  Bank Account Feeds
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-[#E1252D] font-bold">RIFT CLI JOB</div>
                <div className="p-4 rounded-lg bg-[#14171E] border-2 border-[#E1252D] font-mono text-xs text-[#F4F4F6] red-border-glow">
                  Exact Match by RRN/Key<br />
                  Fixed-Point Decimal Diff<br />
                  PGDS Fee Invariant Search
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-emerald-400 font-bold">STRUCTURED OUTPUT</div>
                <div className="p-4 rounded-lg bg-[#14171E] border border-[#222733] font-mono text-xs text-[#F4F4F6]">
                  results.json<br />
                  Verified Discrepancy Pack<br />
                  Cryptographic Run Hash
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-[#5E6370]">OPERATIONS TRIAGE</div>
                <div className="p-4 rounded-lg bg-[#14171E] border border-[#222733] font-mono text-xs text-[#F4F4F6]">
                  Settlement Desk Triage<br />
                  Merchant Dispute Filing<br />
                  Automated Queue Push
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Metrics & Call to Action */}
      <section className="py-20 bg-[#0B0C10]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-black text-[#F4F4F6]">
            Validate on your settlement files
          </h2>
          <p className="text-sm text-[#8E929B] leading-relaxed">
            Evaluate Rift’s detection speed, memory boundaries, and exception triage completeness on historical payment batches.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?intent=poc"
              className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] transition-colors inline-block"
            >
              Discuss a Payment PoC
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
