import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BenchmarkChart } from "@/components/BenchmarkChart";
import { 
  BarChart3, 
  Cpu, 
  HardDrive, 
  Layers, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  Zap 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Controlled Benchmarks & Performance Accounting",
  description:
    "Empirical benchmarks for RIFT across 100K to 5M records on Apple Silicon M4. Sorter allocation budget vs process RSS memory model.",
};

export default function BenchmarksPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#222733]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#14171E] border border-[#2D3343] text-xs font-mono text-emerald-400">
              <BarChart3 className="w-3.5 h-3.5" />
              <span>EMPIRICAL PERFORMANCE & SCALING REPORT</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#F4F4F6] tracking-tight leading-[1.1]">
              Controlled benchmarks. <br />
              Zero invented claims.
            </h1>
            <p className="text-lg text-[#8E929B] leading-relaxed">
              Every measurement published here was captured on isolated physical hardware using native OS kernel accounting (<code className="text-[#F4F4F6] font-mono">/usr/bin/time -l</code>). We publish full methodology, memory breakdowns, and hardware configurations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Benchmark Component */}
      <section className="py-20 border-b border-[#222733]/60 bg-[#0B0C10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BenchmarkChart />
        </div>
      </section>

      {/* Rigorous Warm vs Cold Methodology Disclosure */}
      <section className="py-20 border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl">
            <span className="text-xs font-mono text-[#E1252D] uppercase font-bold tracking-wider">
              SCIENTIFIC RIGOR
            </span>
            <h2 className="text-3xl font-black text-[#F4F4F6] mt-1">
              Methodology & Measurement Protocol
            </h2>
            <p className="text-sm text-[#8E929B] mt-2 leading-relaxed">
              Too many benchmarks in data infrastructure rely on cherry-picked un-warmed cold runs or unverified synthetic comparisons. Rift follows strict peer-reviewable auditing guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <div className="text-xs font-mono text-[#E1252D] font-bold uppercase">
                01. Warm vs Cold Protocol
              </div>
              <h3 className="text-base font-bold text-[#F4F4F6]">
                Identical Warmup Discard
              </h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Initial runs that include OS page faults and dynamic linker resolution are explicitly recorded and discarded. Across 5 identical measured trials, optimized 100K Parquet reconciliation achieves a median runtime of 0.113s, reflecting a 2.83× representative speedup over baseline (0.320s).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <div className="text-xs font-mono text-[#E1252D] font-bold uppercase">
                02. Operating System Accounting
              </div>
              <h3 className="text-base font-bold text-[#F4F4F6]">
                Isolated Kernel Accounting
              </h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                We avoid in-process heap sampling, which can overlook external C/Arrow allocator fragmentation. Peak RSS is captured through OS kernel process accounting (<code className="text-[#F4F4F6] font-mono">/usr/bin/time -l</code> maximum resident set size).
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <div className="text-xs font-mono text-[#E1252D] font-bold uppercase">
                03. Deterministic Workloads
              </div>
              <h3 className="text-base font-bold text-[#F4F4F6]">
                Fixed LCG Seed Generation
              </h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                All benchmark records are generated deterministically using a fixed random seed (<code className="text-[#F4F4F6] font-mono">seed = 42</code>) generating 5 realistic enterprise columns: <code className="text-[#8E929B]">id (Int64 PK), account_id, amount (exact decimal), timestamp, is_settled (bool)</code>.
              </p>
            </div>
          </div>

          {/* Test Environment Box */}
          <div className="p-6 rounded-xl bg-[#08090B] border border-[#222733] font-mono text-xs">
            <h4 className="text-[#F4F4F6] font-bold mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#E1252D]" />
              Controlled Hardware Specification:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-[#8E929B]">
              <div>
                <span className="text-[#5E6370] block">PROCESSOR:</span>
                <span className="text-[#F4F4F6]">Apple Silicon M4 (10 cores)</span>
              </div>
              <div>
                <span className="text-[#5E6370] block">MEMORY:</span>
                <span className="text-[#F4F4F6]">16 GB Unified LPDDR5X</span>
              </div>
              <div>
                <span className="text-[#5E6370] block">STORAGE:</span>
                <span className="text-[#F4F4F6]">APFS NVMe Solid State</span>
              </div>
              <div>
                <span className="text-[#5E6370] block">TOOLCHAIN:</span>
                <span className="text-[#F4F4F6]">rustc 1.96.1 · opt-level = 3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B0C10]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-black text-[#F4F4F6]">
            Reproduce benchmarks on your infrastructure
          </h2>
          <p className="text-sm text-[#8E929B]">
            We provide our benchmark harness scripts to prospective enterprise evaluators to reproduce identical measurements on your target Linux or macOS hosts.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?intent=evaluation"
              className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] transition-colors inline-block"
            >
              Request Benchmark Suite
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
