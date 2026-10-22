"use client";

import React, { useState } from "react";
import { Terminal, Copy, Check, Play, RefreshCw } from "lucide-react";

interface TerminalScenario {
  id: string;
  title: string;
  description: string;
  command: string;
  output: string[];
  exitCode: number;
}

const SCENARIOS: TerminalScenario[] = [
  {
    id: "compare-parquet",
    title: "Exact Reconciliation",
    description: "Reconcile 1,000,000 transactions across Parquet & CSV with an external sort engine.",
    command: "rift compare source.parquet target.csv --schema schema.json --key id --engine external --memory-limit-mb 64",
    output: [
      "[INFO] Rift v0.1.1 — Deterministic Exact Reconciliation Engine",
      "[INFO] Loading canonical schema: schema.json (5 fields, PK: id)",
      "[INFO] Engine mode: External Sort/Merge (Sorter budget: 64 MB, Disk limit: 50 GB)",
      "[INFO] Source A: source.parquet (1,000,000 records)",
      "[INFO] Target B: target.csv (1,000,000 records)",
      ".............................................................. [100%]",
      "",
      "--- RECONCILIATION SUMMARY ---",
      "  Total records processed:      1,000,000",
      "  Exact matches:                  997,659 (99.77%)",
      "  Discrepancies detected:           2,341 ( 0.23%)",
      "    - Modified values:              1,902",
      "    - Missing in target:              310",
      "    - Extra in target:                129",
      "",
      "--- EXECUTION METRICS ---",
      "  Total elapsed time:               2.03s",
      "  Engine throughput:              492,610 rows/s",
      "  Peak Resident Memory (RSS):       97.3 MB",
      "  Spill disk written:               48.2 MB",
      "",
      "[RESULT] Discrepancies detected. Exit code: 1"
    ],
    exitCode: 1,
  },
  {
    id: "explain-pgds",
    title: "PGDS Divergence Investigation",
    description: "Automatically search for mathematical transformation rules explaining observed delta.",
    command: "rift explain source.parquet target.parquet --schema schema.json --key id",
    output: [
      "[INFO] Rift PGDS — Parameterized Graph Discrepancy Search",
      "[INFO] Analyzing 2,341 observed divergence instances...",
      "[STAGE A-H] Candidate invariant discovery...",
      "[STAGE I] Contrastive classification: 14 candidates generated",
      "[STAGE N] Witness prediction & authoritative D1 verification...",
      "",
      "--- VERIFIED EXPLANATION CANDIDATES ---",
      "  Candidate #1 (VERIFIED):",
      "    Rule: target.amount = source.amount - 80.00",
      "    Guard: source.gateway_code == 'MSW_UPI' && source.tx_type == 'REFUND'",
      "    Coverage: 1,902 of 2,341 records (81.2% explained)",
      "    Status: VerifiedObservationConsistentExplanation",
      "",
      "  Residual Divergence:",
      "    Unexplained records: 439 (Missing/Extra network anomalies)",
      "",
      "[RESULT] Partial explanation verified. Artifacts written to explanation.json. Exit code: 1"
    ],
    exitCode: 1,
  },
  {
    id: "capabilities-json",
    title: "Agent Capabilities Discovery",
    description: "Emit machine-readable capabilities on stdout for CI/CD and AI agent integration.",
    command: "rift capabilities --output json --non-interactive",
    output: [
      "{",
      '  "version": "0.1.1",',
      '  "engine": "rift-core-rust",',
      '  "supported_formats": [',
      '    "jsonl",',
      '    "ndjson",',
      '    "json_array",',
      '    "csv",',
      '    "tsv",',
      '    "parquet",',
      '    "postgres_table"',
      "  ],",
      '  "engines": ["in_memory", "external_sort_merge"],',
      '  "key_modes": ["primary_key", "composite_key", "unkeyed_multiset"],',
      '  "canonical_types": [',
      '    "string",',
      '    "int64",',
      '    "exact_decimal",',
      '    "timestamp",',
      '    "boolean",',
      '    "nullable"',
      "  ],",
      '  "exit_codes": {',
      '    "0": "exact_match_zero_discrepancy",',
      '    "1": "discrepancies_detected_or_partial_explanation",',
      '    "2": "operational_syntax_error"',
      "  }",
      "}"
    ],
    exitCode: 0,
  },
];

export function TerminalDemo() {
  const [selectedScenario, setSelectedScenario] = useState<TerminalScenario>(SCENARIOS[0]);
  const [copied, setCopied] = useState(false);

  const copyCommand = (cmd: string) => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-[#08090B] border border-[#222733] rounded-xl overflow-hidden shadow-2xl">
      {/* Top Chrome Bar */}
      <div className="bg-[#0F1115] border-b border-[#222733] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-3">
            <span className="w-3 h-3 rounded-full bg-[#E1252D]/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono font-semibold text-[#8E929B] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#E1252D]" />
            rift-cli v0.1.1 (x86_64 / aarch64)
          </span>
        </div>

        {/* Scenario Switcher Tabs */}
        <div className="flex flex-wrap gap-1.5">
          {SCENARIOS.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedScenario(s)}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                selectedScenario.id === s.id
                  ? "bg-[#14171E] text-white border border-[#2D3343] font-semibold"
                  : "text-[#8E929B] hover:text-[#F4F4F6]"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto bg-[#08090B]">
        {/* Command Line Prompt */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#222733]/60">
          <div className="flex items-center gap-2 text-[#F4F4F6]">
            <span className="text-[#E1252D] font-black">$</span>
            <span className="text-[#F4F4F6] font-medium">{selectedScenario.command}</span>
          </div>

          <button
            onClick={() => copyCommand(selectedScenario.command)}
            className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#14171E] border border-[#222733] text-[11px] text-[#8E929B] hover:text-white transition-colors"
            title="Copy command"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-emerald-400" />
                <span>Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Output lines */}
        <div className="space-y-0.5 text-[#8E929B]">
          {selectedScenario.output.map((line, idx) => {
            const isHeader = line.startsWith("---");
            const isInfo = line.startsWith("[INFO]");
            const isResult = line.startsWith("[RESULT]");
            const isCandidate = line.includes("Candidate #") || line.includes("VERIFIED");

            return (
              <div
                key={idx}
                className={
                  isHeader
                    ? "text-[#F4F4F6] font-bold mt-2"
                    : isResult
                    ? selectedScenario.exitCode === 0
                      ? "text-emerald-400 font-bold mt-2"
                      : "text-amber-400 font-bold mt-2"
                    : isCandidate
                    ? "text-emerald-300 font-semibold"
                    : isInfo
                    ? "text-[#5E6370]"
                    : "text-[#8E929B]"
                }
              >
                {line || "\u00A0"}
              </div>
            );
          })}
        </div>

        {/* Exit Status Footer */}
        <div className="mt-4 pt-3 border-t border-[#222733] flex items-center justify-between text-[11px] text-[#5E6370]">
          <span>Exit status: {selectedScenario.exitCode}</span>
          <span>Deterministic execution · No LLM required for reconciliation</span>
        </div>
      </div>
    </div>
  );
}
