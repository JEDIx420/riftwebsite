import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EvidenceMatrix } from "@/components/EvidenceMatrix";
import { TerminalDemo } from "@/components/TerminalDemo";
import { 
  Cpu, 
  Database, 
  Layers, 
  Binary, 
  Search, 
  ShieldCheck, 
  ArrowRight, 
  FileCode2, 
  Workflow, 
  CheckCircle2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Product Architecture & Engine Specification",
  description:
    "Explore RIFT's modular Rust reconciliation engine, external sort/merge execution model, PGDS divergence investigation, and canonical type system.",
};

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#222733]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#14171E] border border-[#2D3343] text-xs font-mono text-[#E1252D]">
              <span>RIFT ARCHITECTURE DEEP DIVE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#F4F4F6] tracking-tight leading-[1.1]">
              Engineered for mathematical determinism.
            </h1>
            <p className="text-lg text-[#8E929B] leading-relaxed">
              Rift is an enterprise-grade reconciliation and discrepancy investigation engine written in compiled native Rust. It decouples high-throughput record alignment from underlying storage, enabling deterministic verification without full-table diffs.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Architectural Pillars */}
      <section className="py-20 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1 */}
            <div className="p-8 rounded-xl bg-[#0F1115] border border-[#222733] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#14171E] border border-[#222733] flex items-center justify-center text-[#E1252D]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F6]">
                1. Dual Execution Engines
              </h3>
              <p className="text-sm text-[#8E929B] leading-relaxed">
                Rift features two execution models: an ultra-fast in-memory reference engine for datasets fitting comfortably into available RAM, and an external sort/merge engine for massive datasets. The external reconciler sorts datasets into streaming chunk files on disk and executes a K-way merge, strictly respecting the user-configured <code className="text-[#E1252D] font-mono">--memory-limit-mb</code> sorter allocation budget.
              </p>
              <div className="pt-2 text-xs font-mono text-[#5E6370]">
                Throughput: ~490K rows/s · Memory ceiling: ~97 MB RSS
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-8 rounded-xl bg-[#0F1115] border border-[#222733] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#14171E] border border-[#222733] flex items-center justify-center text-[#E1252D]">
                <Binary className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F6]">
                2. Canonical Type Normalization
              </h3>
              <p className="text-sm text-[#8E929B] leading-relaxed">
                Differing database representations are mapped to Rift’s canonical type model: exact fixed-point decimals (preventing binary float inaccuracies), microsecond-precision ISO timestamps, bit-preserving IEEE-754 floats, UTF-8 strings, booleans, and explicit typed nullability. Normalization of Unicode, zero-values, and NaNs is policy-controlled.
              </p>
              <div className="pt-2 text-xs font-mono text-[#5E6370]">
                Zero silent decimal drift · Precise financial rounding
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-8 rounded-xl bg-[#0F1115] border border-[#222733] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#14171E] border border-[#222733] flex items-center justify-center text-[#E1252D]">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F6]">
                3. PGDS Automated Investigation
              </h3>
              <p className="text-sm text-[#8E929B] leading-relaxed">
                Parameterized Graph Discrepancy Search (PGDS) transforms reconciliation from mere discrepancy reporting into automated triage. When records diverge, PGDS discovers candidate transformation rules (such as constant fee deductions, tax rate additions, or status remappings) and evaluates them via an authoritative D1 verification pass to isolate true anomalies.
              </p>
              <div className="pt-2 text-xs font-mono text-[#5E6370]">
                Discovers mathematical invariants · Leaves unexplained residuals
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-8 rounded-xl bg-[#0F1115] border border-[#222733] space-y-4">
              <div className="w-10 h-10 rounded-lg bg-[#14171E] border border-[#222733] flex items-center justify-center text-[#E1252D]">
                <FileCode2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F6]">
                4. Machine-Readable Audit Outputs
              </h3>
              <p className="text-sm text-[#8E929B] leading-relaxed">
                Rift avoids proprietary black-box formats. Every run emits structured JSON artifacts detailing total processed records, exact match counts, delta attributes, and candidate verification reports. Exit codes (0 for clean match, 1 for discrepancies detected, 2 for operational errors) allow instant orchestration inside Airflow, cron, or GitHub Actions.
              </p>
              <div className="pt-2 text-xs font-mono text-[#5E6370]">
                Native stdout JSON · CI/CD exit code conventions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terminal Section */}
      <section className="py-20 border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-black text-[#F4F4F6]">
              Execution in Practice
            </h2>
            <p className="text-sm text-[#8E929B] mt-1">
              Explore how Rift CLI commands run against sample datasets.
            </p>
          </div>
          <TerminalDemo />
        </div>
      </section>

      {/* Audited Capability & Evidence Matrix */}
      <section className="py-20 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EvidenceMatrix />
        </div>
      </section>

      {/* Conversion Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-black text-[#F4F4F6]">
            Validate Rift on your infrastructure
          </h2>
          <p className="text-sm text-[#8E929B] leading-relaxed">
            We provide structured, read-only proof-of-concept evaluations for qualified enterprise engineering and settlement teams.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/contact?intent=poc"
              className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] transition-colors"
            >
              Discuss a PoC
            </Link>
            <Link
              href="/developers"
              className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-[#8E929B] hover:text-white bg-[#14171E] border border-[#222733] transition-colors"
            >
              CLI Reference
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
