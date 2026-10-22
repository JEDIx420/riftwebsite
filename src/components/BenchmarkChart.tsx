"use client";

import React, { useState } from "react";
import { Cpu, HardDrive, Zap, Info, CheckCircle2 } from "lucide-react";

interface BenchmarkRow {
  workload: string;
  engine: string;
  runtime: string;
  peakRss: string;
  throughput: string;
  notes: string;
}

const BENCHMARK_DATA: BenchmarkRow[] = [
  {
    workload: "100,000 Records (Parquet)",
    engine: "In-memory (Optimized)",
    runtime: "0.113s",
    peakRss: "42.1 MB",
    throughput: "884,955 rows/s",
    notes: "2.83× speedup over un-warmed baseline (0.320s median). Warm protocol.",
  },
  {
    workload: "1,000,000 Records (Parquet)",
    engine: "In-memory Reference",
    runtime: "4.05s",
    peakRss: "2,803 MB",
    throughput: "246,913 rows/s",
    notes: "Baseline in-memory key-indexed hash table; full dataset retained in RAM.",
  },
  {
    workload: "1,000,000 Records (Parquet)",
    engine: "External Sort/Merge (64MB)",
    runtime: "2.03s",
    peakRss: "98.0 MB",
    throughput: "492,610 rows/s",
    notes: "64MB sorter budget; streaming chunk spill to NVMe; 96.5% lower RSS.",
  },
  {
    workload: "5,000,000 Records (Parquet)",
    engine: "External Sort/Merge (64MB)",
    runtime: "10.19s",
    peakRss: "97.3 MB",
    throughput: "490,677 rows/s",
    notes: "Constant bounded memory footprint despite 5× dataset volume scaling.",
  },
];

export function BenchmarkChart() {
  const [activeTab, setActiveTab] = useState<"table" | "memory-model">("table");

  return (
    <div className="w-full bg-[#0F1115] border border-[#222733] rounded-xl p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-mono text-xs text-emerald-400 font-bold tracking-widest uppercase">
              EMPIRICAL REPRODUCIBLE MEASUREMENTS
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#F4F4F6] tracking-tight">
            Performance & Memory Accounting Framework
          </h3>
          <p className="text-sm text-[#8E929B] mt-1">
            Empirical benchmark harness metrics measured via isolated OS kernel accounting (<code className="text-[#F4F4F6]">/usr/bin/time -l</code>).
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <button
            onClick={() => setActiveTab("table")}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeTab === "table"
                ? "bg-[#E1252D] text-white font-semibold"
                : "bg-[#14171E] border border-[#222733] text-[#8E929B] hover:text-white"
            }`}
          >
            Measured Trials
          </button>
          <button
            onClick={() => setActiveTab("memory-model")}
            className={`px-3 py-1.5 rounded transition-colors ${
              activeTab === "memory-model"
                ? "bg-[#E1252D] text-white font-semibold"
                : "bg-[#14171E] border border-[#222733] text-[#8E929B] hover:text-white"
            }`}
          >
            Memory Model & Accounting
          </button>
        </div>
      </div>

      {/* Tab 1: Table */}
      {activeTab === "table" ? (
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b border-[#222733] text-[#5E6370] uppercase">
                <th className="py-3 px-3">Workload</th>
                <th className="py-3 px-3">Engine Mode</th>
                <th className="py-3 px-3">Runtime</th>
                <th className="py-3 px-3">Peak RSS</th>
                <th className="py-3 px-3">Throughput</th>
                <th className="py-3 px-3">Notes & Conditions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#222733]/60 text-[#8E929B]">
              {BENCHMARK_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#14171E]/50 transition-colors">
                  <td className="py-3.5 px-3 text-[#F4F4F6] font-semibold">{row.workload}</td>
                  <td className="py-3.5 px-3">
                    <span className="px-2 py-0.5 rounded bg-[#14171E] border border-[#222733] text-[11px] text-[#F4F4F6]">
                      {row.engine}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-emerald-400 font-bold">{row.runtime}</td>
                  <td className="py-3.5 px-3 text-[#E1252D] font-bold">{row.peakRss}</td>
                  <td className="py-3.5 px-3 text-[#F4F4F6]">{row.throughput}</td>
                  <td className="py-3.5 px-3 text-[11px] text-[#8E929B] max-w-xs">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Hardware Conditions Footer */}
          <div className="mt-5 pt-4 border-t border-[#222733] grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono text-[#5E6370]">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#E1252D]" />
              <span>Apple M4 (10 cores: 4P + 6E) · 16GB RAM</span>
            </div>
            <div className="flex items-center gap-2">
              <HardDrive className="w-3.5 h-3.5 text-[#E1252D]" />
              <span>APFS NVMe Solid State (~5000 MB/s)</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>rustc 1.96.1 · opt-level = 3 · LTO enabled</span>
            </div>
          </div>
        </div>
      ) : (
        /* Tab 2: Memory Model */
        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-[#14171E] border border-[#222733] text-sm text-[#8E929B] leading-relaxed">
            <h4 className="text-sm font-mono font-bold text-[#F4F4F6] mb-2 flex items-center gap-2">
              <Info className="w-4 h-4 text-[#E1252D]" />
              Understanding Sorter Allocation Budget vs Process RSS
            </h4>
            <p>
              A fundamental principle of Rift’s architecture is that <code className="text-[#E1252D] font-mono">--memory-limit-mb</code> is the <strong>sorter allocation budget</strong>, NOT an artificial process-wide RSS ceiling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-[#08090B] border border-[#222733]">
              <span className="text-[11px] font-mono text-[#5E6370] block uppercase">Layer 1</span>
              <span className="text-sm font-mono font-bold text-[#F4F4F6] block mt-1">Sorter Budget</span>
              <p className="text-xs text-[#8E929B] mt-1.5">
                Caps the in-memory sorting & K-way merge run buffers (e.g. 64 MB).
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#08090B] border border-[#222733]">
              <span className="text-[11px] font-mono text-[#5E6370] block uppercase">Layer 2</span>
              <span className="text-sm font-mono font-bold text-[#F4F4F6] block mt-1">Input Buffers</span>
              <p className="text-xs text-[#8E929B] mt-1.5">
                Arrow RecordBatches (64K rowgroups) & PostgreSQL cursors (~18 MB).
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#08090B] border border-[#222733]">
              <span className="text-[11px] font-mono text-[#5E6370] block uppercase">Layer 3</span>
              <span className="text-sm font-mono font-bold text-[#F4F4F6] block mt-1">Runtime Overhead</span>
              <p className="text-xs text-[#8E929B] mt-1.5">
                Base compiled binary image & system allocator metadata (~10 MB).
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#08090B] border border-[#E1252D]/40">
              <span className="text-[11px] font-mono text-[#E1252D] block uppercase">Measured RSS</span>
              <span className="text-sm font-mono font-bold text-white block mt-1">~97.3 MB Peak</span>
              <p className="text-xs text-[#8E929B] mt-1.5">
                Sum of Sorter + Reader + Runtime accounting under OS kernel monitoring.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[#08090B] border border-[#222733] font-mono text-xs text-[#8E929B]">
            <div className="text-[#F4F4F6] font-bold mb-1">Mathematical Accounting:</div>
            <div>Process RSS = Sorter Budget (40 MB active) + Input Stream Buffers (18 MB) + Binary/Runtime (10 MB) ≈ 68–98 MB.</div>
          </div>
        </div>
      )}
    </div>
  );
}
