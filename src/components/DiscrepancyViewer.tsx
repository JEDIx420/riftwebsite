"use client";

import React, { useState } from "react";
import { Check, Copy, AlertCircle, FileDiff, Database, Layers } from "lucide-react";

interface DiscrepancyCard {
  id: string;
  status: "MODIFIED" | "MISSING" | "EXTRA" | "UNRESOLVED";
  recordId: string;
  field?: string;
  before?: string;
  after?: string;
  source: string;
  evidence: string;
  priority?: "high" | "medium" | "low";
  confidence: "high" | "exact";
  jsonPayload: object;
}

const DISCREPANCIES: DiscrepancyCard[] = [
  {
    id: "card-1",
    status: "MODIFIED",
    recordId: "C24580",
    field: "amount",
    before: "1230.00",
    after: "1150.00",
    source: "Switch vs Settlement File",
    evidence: "Value delta -80.00 detected in post-processing reconciliation.",
    confidence: "exact",
    jsonPayload: {
      status: "modified",
      record_id: "C24580",
      field: "amount",
      before: "1230.00",
      after: "1150.00",
      delta: "-80.00",
      source: "Switch vs Settlement File",
      confidence: "exact",
    },
  },
  {
    id: "card-2",
    status: "MISSING",
    recordId: "A12345",
    source: "System A (POS Gateway)",
    evidence: "Captured on merchant POS, not found in downstream Settlement Batch B.",
    confidence: "high",
    priority: "high",
    jsonPayload: {
      status: "missing",
      record_id: "A12345",
      source: "System A (POS Gateway)",
      evidence: "Not found in System B",
      confidence: "high",
      priority: "high",
    },
  },
  {
    id: "card-3",
    status: "EXTRA",
    recordId: "B67990",
    source: "System B (Bank Statement)",
    evidence: "Present in bank statement credit log with no originating gateway auth ID.",
    confidence: "high",
    priority: "high",
    jsonPayload: {
      status: "extra",
      record_id: "B67990",
      source: "System B (Bank Statement)",
      evidence: "No match in System A",
      confidence: "high",
    },
  },
  {
    id: "card-4",
    status: "UNRESOLVED",
    recordId: "C12304",
    source: "Disputed Chargeback",
    evidence: "Ambiguous transformation candidate; candidate rule budget exceeded.",
    confidence: "high",
    priority: "high",
    jsonPayload: {
      status: "unresolved",
      record_id: "C12304",
      evidence: "PGDS candidate rule budget exceeded; residual divergence flagged for audit.",
      priority: "high",
    },
  },
];

export function DiscrepancyViewer() {
  const [activeCard, setActiveCard] = useState<DiscrepancyCard>(DISCREPANCIES[0]);
  const [copied, setCopied] = useState(false);

  const copyJson = (obj: object) => {
    navigator.clipboard.writeText(JSON.stringify(obj, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusBadge = (status: DiscrepancyCard["status"]) => {
    switch (status) {
      case "MODIFIED":
        return "bg-[#E1252D]/15 text-[#E1252D] border-[#E1252D]/30";
      case "MISSING":
        return "bg-amber-500/15 text-amber-400 border-amber-500/30";
      case "EXTRA":
        return "bg-cyan-500/15 text-cyan-400 border-cyan-500/30";
      case "UNRESOLVED":
        return "bg-purple-500/15 text-purple-400 border-purple-500/30";
    }
  };

  return (
    <div className="w-full bg-[#0F1115] border border-[#222733] rounded-xl p-6 lg:p-8">
      {/* Title & Description */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#E1252D]"></span>
            <span className="font-mono text-xs text-[#E1252D] font-bold tracking-widest uppercase">
              INTERACTIVE DISCREPANCY PANELS
            </span>
          </div>
          <h3 className="text-2xl font-bold text-[#F4F4F6] tracking-tight">
            Deterministic Classification & Evidence Capture
          </h3>
          <p className="text-sm text-[#8E929B] mt-1 max-w-xl">
            Rift isolates the exact mathematical divergence across records instead of dumping full-table diffs. Click each category below to examine the structured evidence packet.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-2">
          {DISCREPANCIES.map((card) => (
            <button
              key={card.id}
              onClick={() => setActiveCard(card)}
              className={`px-3 py-1.5 rounded text-xs font-mono font-bold tracking-wider uppercase border transition-all ${
                activeCard.id === card.id
                  ? getStatusBadge(card.status) + " shadow-sm"
                  : "bg-[#14171E] border-[#222733] text-[#8E929B] hover:text-[#F4F4F6]"
              }`}
            >
              {card.status}
            </button>
          ))}
        </div>
      </div>

      {/* Main Card View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Visual Inspection Box (7 Cols) */}
        <div className="lg:col-span-7 bg-[#14171E] border border-[#222733] rounded-xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-[#222733] pb-4 mb-5">
              <div className="flex items-center gap-3">
                <span
                  className={`px-2.5 py-1 rounded text-xs font-mono font-black border ${getStatusBadge(
                    activeCard.status
                  )}`}
                >
                  {activeCard.status}
                </span>
                <span className="font-mono text-sm font-semibold text-[#F4F4F6]">
                  RECORD ID: {activeCard.recordId}
                </span>
              </div>
              <span className="text-xs font-mono text-[#5E6370]">
                CONFIDENCE: {activeCard.confidence.toUpperCase()}
              </span>
            </div>

            <div className="space-y-4">
              {activeCard.status === "MODIFIED" && (
                <div className="grid grid-cols-2 gap-4 p-4 rounded-lg bg-[#08090B] border border-[#222733]">
                  <div>
                    <span className="text-[11px] font-mono text-[#5E6370] block">
                      SOURCE VALUE (BEFORE)
                    </span>
                    <span className="text-base font-mono font-semibold text-[#8E929B]">
                      {activeCard.field}: {activeCard.before}
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-[#E1252D] block">
                      TARGET VALUE (AFTER)
                    </span>
                    <span className="text-base font-mono font-semibold text-[#F4F4F6]">
                      {activeCard.field}: {activeCard.after}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-3.5 rounded-lg bg-[#08090B]/60 border border-[#222733] space-y-1">
                <span className="text-[11px] font-mono uppercase text-[#5E6370] block">
                  SOURCE CONTEXT
                </span>
                <span className="text-xs text-[#F4F4F6] font-mono">
                  {activeCard.source}
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-[#08090B]/60 border border-[#222733] space-y-1">
                <span className="text-[11px] font-mono uppercase text-[#5E6370] block">
                  EVIDENCE ATTRIBUTION
                </span>
                <p className="text-xs text-[#8E929B] leading-relaxed">
                  {activeCard.evidence}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#222733] flex items-center justify-between text-xs font-mono text-[#5E6370]">
            <span>Exit Code: 1 (Discrepancy Detected)</span>
            <span className="text-[#8E929B]">No false positive inferred</span>
          </div>
        </div>

        {/* JSON Artifact (5 Cols) */}
        <div className="lg:col-span-5 bg-[#08090B] border border-[#222733] rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#222733]">
              <span className="text-xs font-mono uppercase text-[#8E929B] flex items-center gap-2">
                <FileDiff className="w-3.5 h-3.5 text-[#E1252D]" />
                CLI JSON OUTPUT
              </span>
              <button
                onClick={() => copyJson(activeCard.jsonPayload)}
                className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#14171E] border border-[#222733] text-[11px] font-mono text-[#8E929B] hover:text-white transition-colors"
                title="Copy JSON Payload"
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy JSON</span>
                  </>
                )}
              </button>
            </div>

            <pre className="font-mono text-xs text-[#F4F4F6] p-3 rounded bg-[#0F1115] border border-[#222733] overflow-x-auto">
              {JSON.stringify(activeCard.jsonPayload, null, 2)}
            </pre>
          </div>

          <div className="mt-4 pt-3 border-t border-[#222733] text-[11px] font-mono text-[#5E6370] leading-snug">
            Emitted via <code className="text-[#E1252D]">--output json</code> for zero-friction ingestion by internal audit queues, Slack webhooks, or SIEM pipelines.
          </div>
        </div>
      </div>
    </div>
  );
}
