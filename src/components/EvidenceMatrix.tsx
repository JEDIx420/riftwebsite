import React from "react";
import { CheckCircle2, Clock, AlertCircle, ShieldAlert } from "lucide-react";

interface CapabilityRow {
  area: string;
  implemented: string;
  boundary: string;
  status: "verified" | "integration-target" | "experimental";
}

const CAPABILITIES: CapabilityRow[] = [
  {
    area: "Input Formats & Readers",
    implemented: "Native readers for JSONL, NDJSON, JSON array, CSV, TSV, Parquet, and PostgreSQL tables/views.",
    boundary: "Warehouses (Snowflake, BigQuery, ClickHouse) are supported via approved exports or custom adapter development; not shipped native direct connectors.",
    status: "verified",
  },
  {
    area: "Exact Record Matching",
    implemented: "Primary & composite keys, explicit duplicate-key policies, unkeyed multiset comparison, column-level delta.",
    boundary: "Schema and comparison policy must be explicitly specified; no implicit financial materiality or business tolerance is assumed.",
    status: "verified",
  },
  {
    area: "Canonical Data Types",
    implemented: "Exact decimals (fixed-point), typed ISO timestamps, bit-preserving IEEE-754 floats, strings, booleans, and typed nulls.",
    boundary: "Unicode, NaN, and negative-zero normalization is policy-controlled, not silently universal.",
    status: "verified",
  },
  {
    area: "Execution Engines",
    implemented: "In-memory reference engine and external sort/merge engine with strict sorter budget (--memory-limit-mb).",
    boundary: "Bounded to single machine / container host; no distributed multi-node cluster execution.",
    status: "verified",
  },
  {
    area: "PGDS Investigation",
    implemented: "Parameterized Graph Discrepancy Search candidate rule discovery, contrastive classification, and witness cache verification.",
    boundary: "Discovers and independently verifies mathematical transformation rules; does not claim historical causation.",
    status: "verified",
  },
  {
    area: "Runtime & Integration",
    implemented: "Read-only access, immutable captures, local outbox delivery, CLI exit codes (0, 1, 2), and machine-readable JSON payloads.",
    boundary: "Single-customer state boundary; no multi-tenant cloud SaaS or direct remote administration.",
    status: "verified",
  },
];

export function EvidenceMatrix() {
  return (
    <div className="w-full bg-[#0F1115] border border-[#222733] rounded-xl p-6 lg:p-8">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-[#E1252D]"></span>
          <span className="font-mono text-xs text-[#E1252D] font-bold tracking-widest uppercase">
            AUDITED CAPABILITY & EVIDENCE MATRIX
          </span>
        </div>
        <h3 className="text-2xl font-bold text-[#F4F4F6] tracking-tight">
          Strict Engineering Verification & Boundaries
        </h3>
        <p className="text-sm text-[#8E929B] mt-1 max-w-2xl">
          In accordance with Eagle Eye’s rigorous scientific standards, we clearly separate what the RIFT engine demonstrates today from external integration boundaries and future engineering goals.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left font-mono text-xs">
          <thead>
            <tr className="border-b border-[#222733] text-[#5E6370] uppercase">
              <th className="py-3 px-3">System Area</th>
              <th className="py-3 px-3">Implemented & Verified Behavior</th>
              <th className="py-3 px-3">Operational Boundary & Limitations</th>
              <th className="py-3 px-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#222733]/60 text-[#8E929B]">
            {CAPABILITIES.map((row, idx) => (
              <tr key={idx} className="hover:bg-[#14171E]/50 transition-colors">
                <td className="py-4 px-3 text-[#F4F4F6] font-semibold whitespace-nowrap">
                  {row.area}
                </td>
                <td className="py-4 px-3 text-[#F4F4F6] leading-relaxed max-w-md">
                  {row.implemented}
                </td>
                <td className="py-4 px-3 text-[#8E929B] leading-relaxed max-w-md">
                  {row.boundary}
                </td>
                <td className="py-4 px-3 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 pt-4 border-t border-[#222733] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#5E6370]">
        <span>Repository: github.com/JEDIx420/rift · Crate: rift-cli / rift-core</span>
        <span>Audit Ref: ENTERPRISE-CONSOLIDATION-REPORT.md</span>
      </div>
    </div>
  );
}
