"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Play, Cpu, Zap, HardDrive, Shield } from "lucide-react";

interface TerminalCommand {
  label: string;
  command: string;
  flags: string;
  summary: string;
  output: string[];
  metrics: {
    runtime: string;
    throughput: string;
    memoryRss: string;
    exitCode: string;
  };
}

const COMMANDS: TerminalCommand[] = [
  {
    label: "1. Exact Parquet vs CSV Comparison",
    command: "rift compare source.parquet target.csv --schema schema.json --key id --engine external --memory-limit-mb 64",
    flags: "--engine external --memory-limit-mb 64",
    summary: "Reconcile 1,000,000 transactions across heterogeneous formats with bounded external sort buffers.",
    output: [
      "[INFO] Rift v0.1.1 — Deterministic Exact Data Reconciliation Engine",
      "[INFO] Loading canonical schema: schema.json (5 fields, PK: id)",
      "[INFO] Engine mode: External Sort/Merge (Sorter budget: 64 MB, Disk limit: 50 GB)",
      "[INFO] Ingesting Source A: source.parquet (Arrow rowgroups, 1,000,000 records)",
      "[INFO] Ingesting Target B: target.csv (Buffered stream, 1,000,000 records)",
      "[SORT] Writing sorted partition chunks to NVMe scratchpad...",
      "[MERGE] K-way merge run active (sorter RAM allocated: 40.2 MB)...",
      "................................................................ [100%]",
      "",
      "--- RECONCILIATION AUDIT SUMMARY ---",
      "  Total records processed:      1,000,000",
      "  Exact matches:                  997,659 (99.77%)",
      "  Discrepancies detected:           2,341 ( 0.23%)",
      "    • MODIFIED values:              1,902",
      "    • MISSING in target:              310",
      "    • EXTRA in target:                129",
      "",
      "--- OS KERNEL ACCOUNTING ---",
      "  Total wall time:                  2.03s",
      "  Throughput:                     492,610 rows/s",
      "  Peak Resident Memory (RSS):       98.0 MB",
      "  Spill disk written:               48.2 MB",
      "",
      "[RESULT] Exit code: 1 (Discrepancies surfaced to results.json)"
    ],
    metrics: {
      runtime: "2.03s",
      throughput: "492K rows/s",
      memoryRss: "98.0 MB",
      exitCode: "1 (DIFF)",
    },
  },
  {
    label: "2. PGDS Invariant Rule Discovery",
    command: "rift explain source.parquet target.parquet --schema schema.json --key id",
    flags: "contrastive search + D1 verification",
    summary: "Search for mathematical rules explaining observed deltas instead of drowning in raw row diffs.",
    output: [
      "[INFO] Rift PGDS — Parameterized Graph Discrepancy Search",
      "[INFO] Analyzing 2,341 divergence instances from primary key alignment...",
      "[STAGE A-H] Extracting candidate invariants across categorical dimensions...",
      "[STAGE I] Contrastive classification: 14 candidate transformation rules generated",
      "[STAGE N] Witness prediction & authoritative D1 ground-truth verification...",
      "",
      "--- VERIFIED EXPLANATION INVARIANTS ---",
      "  Rule Candidate #1 (VERIFIED):",
      "    Transformation: target.amount = source.amount - 80.00",
      "    Guard Condition: source.gateway_code == 'MSW_UPI' && source.tx_type == 'REFUND'",
      "    Coverage: 1,902 of 2,341 records (81.2% explained)",
      "    Status: VerifiedObservationConsistentExplanation",
      "",
      "  Residual Anomalies (Prioritized for Human Audit):",
      "    Unexplained Records: 439 (Missing/Extra network timeouts)",
      "",
      "[RESULT] Explanation packet written to explanation.json. Exit code: 1"
    ],
    metrics: {
      runtime: "0.84s",
      throughput: "PGDS Search",
      memoryRss: "44.2 MB",
      exitCode: "1 (EXPLAINED)",
    },
  },
  {
    label: "3. Machine-Readable Agent Discovery",
    command: "rift capabilities --output json --non-interactive",
    flags: "--output json --non-interactive",
    summary: "Dynamic capability discovery for autonomous AI coding agents and CI/CD orchestrators.",
    output: [
      "{",
      '  "version": "0.1.1",',
      '  "engine": "rift-core-rust",',
      '  "supported_formats": ["jsonl", "ndjson", "json_array", "csv", "tsv", "parquet", "postgres"],',
      '  "engines": ["in_memory", "external_sort_merge"],',
      '  "key_modes": ["primary_key", "composite_key", "unkeyed_multiset"],',
      '  "canonical_types": ["string", "int64", "exact_decimal", "timestamp", "boolean", "nullable"],',
      '  "exit_codes": {',
      '    "0": "exact_match_zero_discrepancy",',
      '    "1": "discrepancies_detected_or_partial_explanation",',
      '    "2": "operational_syntax_error"',
      '  }',
      "}"
    ],
    metrics: {
      runtime: "0.01s",
      throughput: "Instant stdout",
      memoryRss: "10.4 MB",
      exitCode: "0 (CLEAN)",
    },
  },
];

export function CinematicTerminal() {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const selected = COMMANDS[activeTab];

  const copyCmd = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 lg:py-36 bg-[#080A0E] border-b border-[#222733]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E1252D]" />
            <span className="font-mono text-xs text-[#E1252D] font-bold tracking-widest uppercase">
              CHAPTER 05 · ENGINEERING PRECISION
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05]">
            Real Rust CLI. Bounded Footprint<span className="text-[#E1252D]">.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9AA0A6] leading-relaxed">
            Rift is engineered as a compiled native binary. No runtime JVM warmup, no Python GIL lockups, and no permanent application tier required.
          </p>
        </div>

        {/* Tab Switchers */}
        <div className="flex flex-wrap gap-2 mb-6">
          {COMMANDS.map((c, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-3.5 py-2 rounded-lg font-mono text-xs font-semibold transition-all cursor-pointer ${
                activeTab === idx
                  ? "bg-[#E1252D] text-white shadow-lg shadow-[#E1252D]/20"
                  : "bg-[#0D1017] border border-[#222733] text-[#9AA0A6] hover:text-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Cinematic Terminal Window */}
        <div className="glass-panel-glow rounded-2xl overflow-hidden border border-[#2D3343] shadow-2xl relative">
          {/* Top Chassis Bar */}
          <div className="bg-[#0A0D14] border-b border-[#222733] px-5 py-3.5 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#E1252D]/90 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs font-mono text-white font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#E1252D]" />
                rift-cli v0.1.1 — aarch64-apple-darwin / x86_64-unknown-linux-gnu
              </span>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-[#5F6368]">
              <span>PID: 49820</span>
              <span>·</span>
              <span className="text-emerald-400">JEMALLOC ACTIVE</span>
            </div>
          </div>

          {/* Prompt Bar with Copy */}
          <div className="bg-[#06080C] px-5 py-3 border-b border-[#222733]/60 flex items-center justify-between gap-4 font-mono text-xs">
            <div className="flex items-center gap-2 overflow-x-auto text-white">
              <span className="text-[#E1252D] font-bold select-none">$</span>
              <span className="font-semibold">{selected.command}</span>
            </div>
            <button
              onClick={() => copyCmd(selected.command)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#121620] hover:bg-[#1A202C] border border-[#222733] text-[11px] font-mono text-[#9AA0A6] hover:text-white transition-colors shrink-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          {/* Terminal Output Stream */}
          <div className="p-6 font-mono text-xs leading-relaxed bg-[#05060A] text-[#9AA0A6] max-h-[420px] overflow-y-auto space-y-0.5">
            {selected.output.map((line, i) => {
              const isHeader = line.startsWith("---");
              const isInfo = line.startsWith("[INFO]");
              const isResult = line.startsWith("[RESULT]");
              const isHighlight = line.includes("VERIFIED") || line.includes("Rule Candidate");

              return (
                <div
                  key={i}
                  className={
                    isHeader
                      ? "text-white font-bold mt-2 pt-2 border-t border-[rgba(255,255,255,0.06)]"
                      : isResult
                      ? "text-emerald-400 font-bold mt-2"
                      : isHighlight
                      ? "text-emerald-300 font-semibold"
                      : isInfo
                      ? "text-[#5F6368]"
                      : "text-[#9AA0A6]"
                  }
                >
                  {line || "\u00A0"}
                </div>
              );
            })}
          </div>

          {/* Telemetry Footer */}
          <div className="bg-[#0A0D14] border-t border-[#222733] p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono text-xs">
            <div className="p-2 rounded bg-[#06080C] border border-[#222733]/60">
              <span className="text-[10px] text-[#5F6368] block uppercase">RUNTIME</span>
              <span className="text-emerald-400 font-bold">{selected.metrics.runtime}</span>
            </div>
            <div className="p-2 rounded bg-[#06080C] border border-[#222733]/60">
              <span className="text-[10px] text-[#5F6368] block uppercase">THROUGHPUT</span>
              <span className="text-white font-bold">{selected.metrics.throughput}</span>
            </div>
            <div className="p-2 rounded bg-[#06080C] border border-[#222733]/60">
              <span className="text-[10px] text-[#5F6368] block uppercase">PEAK RESIDENT RSS</span>
              <span className="text-[#E1252D] font-bold">{selected.metrics.memoryRss}</span>
            </div>
            <div className="p-2 rounded bg-[#06080C] border border-[#222733]/60">
              <span className="text-[10px] text-[#5F6368] block uppercase">EXIT CODE</span>
              <span className="text-amber-400 font-bold">{selected.metrics.exitCode}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
