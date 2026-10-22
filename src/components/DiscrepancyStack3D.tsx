"use client";

import React, { useState } from "react";
import { Check, Copy, AlertTriangle, Layers, FileCode2, ChevronRight, Shield } from "lucide-react";

interface DiscrepancyItem {
  id: string;
  type: "MODIFIED" | "MISSING" | "EXTRA" | "UNRESOLVED";
  recordId: string;
  source: string;
  evidence: string;
  before?: string;
  after?: string;
  delta?: string;
  priority: "CRITICAL" | "HIGH" | "AUDIT";
  confidence: "EXACT" | "HIGH";
  payload: object;
}

const ITEMS: DiscrepancyItem[] = [
  {
    id: "mod-1",
    type: "MODIFIED",
    recordId: "C24580",
    source: "Switch vs Settlement File",
    before: "1230.00",
    after: "1150.00",
    delta: "-80.00",
    evidence: "Value delta -80.00 detected in post-processing batch. Attributed to promotional MDR rebate.",
    priority: "CRITICAL",
    confidence: "EXACT",
    payload: {
      status: "modified",
      record_id: "C24580",
      field: "amount",
      before: "1230.00",
      after: "1150.00",
      delta: "-80.00",
      rule_candidate: "RULE_MDR_80_REBATE",
      confidence: "exact",
      hash: "sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069"
    },
  },
  {
    id: "mis-2",
    type: "MISSING",
    recordId: "A12345",
    source: "System A (POS Gateway Log)",
    evidence: "Captured on terminal POS at 14:22:01 UTC. Absent in clearing settlement batch. Network timeout flag.",
    priority: "HIGH",
    confidence: "EXACT",
    payload: {
      status: "missing",
      record_id: "A12345",
      source: "System A (POS Gateway)",
      target: "System B (Settlement Batch)",
      evidence: "Not found in System B",
      remedy: "Issue clearing query to issuer bank",
      confidence: "exact"
    },
  },
  {
    id: "ext-3",
    type: "EXTRA",
    recordId: "B67990",
    source: "System B (Bank Statement)",
    evidence: "Unmatched credit posting of $540.00 with no originating gateway auth ID. Possible direct NEFT remittance.",
    priority: "HIGH",
    confidence: "HIGH",
    payload: {
      status: "extra",
      record_id: "B67990",
      source: "System B (Bank Statement)",
      amount: "540.00",
      evidence: "No match in System A",
      audit_flag: "MANUAL_ALLOCATION_REQUIRED"
    },
  },
  {
    id: "unr-4",
    type: "UNRESOLVED",
    recordId: "C12304",
    source: "Disputed Chargeback Queue",
    evidence: "Ambiguous transformation candidate; candidate rule budget exceeded. Residual flagged for human reviewer.",
    priority: "AUDIT",
    confidence: "HIGH",
    payload: {
      status: "unresolved",
      record_id: "C12304",
      priority: "high",
      evidence: "PGDS rule budget exhausted; 14 candidates evaluated with inconclusive invariant coverage",
      residual: true
    },
  },
];

export function DiscrepancyStack3D() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeCard = ITEMS[activeIndex];

  const copyJson = (data: object) => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getTypeStyle = (type: DiscrepancyItem["type"]) => {
    switch (type) {
      case "MODIFIED":
        return "text-[#E1252D] bg-[#E1252D]/15 border-[#E1252D]/40";
      case "MISSING":
        return "text-amber-400 bg-amber-500/15 border-amber-500/40";
      case "EXTRA":
        return "text-cyan-400 bg-cyan-500/15 border-cyan-500/40";
      case "UNRESOLVED":
        return "text-purple-400 bg-purple-500/15 border-purple-500/40";
    }
  };

  return (
    <section className="py-24 lg:py-36 bg-[#050608] border-b border-[#222733]/60 relative overflow-hidden">
      {/* Dynamic Lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[350px] bg-[#E1252D]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E1252D]" />
            <span className="font-mono text-xs text-[#E1252D] font-bold tracking-widest uppercase">
              CHAPTER 04 · DIMENSIONAL EVIDENCE ARTIFACTS
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05]">
            Floating Discrepancy & Evidence Cards<span className="text-[#E1252D]">.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9AA0A6] leading-relaxed">
            Rather than emitting monolithic CSV diff dumps that crash spreadsheets, Rift isolates every mismatch into a typed, structured evidence packet with cryptographic hash provenance.
          </p>
        </div>

        {/* 3D Stack Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 3D Stack Navigator (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-mono uppercase text-[#5F6368] block mb-2">
              SELECT DISCREPANCY ARTIFACT
            </span>

            {ITEMS.map((item, idx) => {
              const isActive = activeIndex === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all card-3d ${
                    isActive
                      ? "bg-[#10141D] border-[#E1252D] shadow-xl shadow-[#E1252D]/15 translate-x-2"
                      : "bg-[#0A0D13]/60 border-[#222733] hover:border-[#3D465C] opacity-75 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-1.5">
                    <span className="font-bold text-white tracking-wide">
                      RECORD: {item.recordId}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-black border ${getTypeStyle(item.type)}`}>
                      {item.type}
                    </span>
                  </div>
                  <div className="text-xs text-[#9AA0A6] truncate font-mono">
                    {item.source}
                  </div>
                </div>
              );
            })}

            <div className="pt-4 flex items-center gap-2 text-xs font-mono text-[#5F6368]">
              <Layers className="w-3.5 h-3.5 text-[#E1252D]" />
              <span>Perspective transform · Dimensional stack active</span>
            </div>
          </div>

          {/* Right: Focused 3D Card Display & JSON Inspector (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow rounded-2xl p-6 sm:p-8 space-y-6 relative transition-all duration-300">
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(255,255,255,0.08)] pb-4">
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-md text-xs font-mono font-black border ${getTypeStyle(activeCard.type)}`}>
                    {activeCard.type}
                  </span>
                  <span className="font-mono text-lg font-bold text-white">
                    {activeCard.recordId}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#0A0D14] border border-[#222733] text-[10px] font-mono text-[#5F6368]">
                    CONFIDENCE: {activeCard.confidence}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-[#0A0D14] border border-[#222733] text-[10px] font-mono text-[#E1252D]">
                    {activeCard.priority}
                  </span>
                </div>
              </div>

              {/* Amount Delta Inspection (if modified) */}
              {activeCard.type === "MODIFIED" && (
                <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-[#090C12] border border-[#222733] text-center font-mono">
                  <div>
                    <span className="text-[10px] text-[#5F6368] block uppercase">BEFORE (SOURCE)</span>
                    <span className="text-sm font-bold text-[#9AA0A6]">{activeCard.before}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#E1252D] block uppercase">AFTER (TARGET)</span>
                    <span className="text-sm font-bold text-white">{activeCard.after}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-400 block uppercase">EXACT DELTA</span>
                    <span className="text-sm font-bold text-emerald-400">{activeCard.delta}</span>
                  </div>
                </div>
              )}

              {/* Attribution Context */}
              <div className="space-y-1.5 font-mono text-xs">
                <span className="text-[10px] uppercase text-[#5F6368] tracking-wider block">
                  ORIGINATING SOURCE PATH
                </span>
                <div className="text-white p-2.5 rounded-lg bg-[#090C12] border border-[#222733]">
                  {activeCard.source}
                </div>
              </div>

              <div className="space-y-1.5 text-xs">
                <span className="text-[10px] font-mono uppercase text-[#5F6368] tracking-wider block">
                  ATTRIBUTED EVIDENCE & INVARIANT
                </span>
                <p className="text-[#9AA0A6] leading-relaxed bg-[#090C12] p-3 rounded-lg border border-[#222733]">
                  {activeCard.evidence}
                </p>
              </div>

              {/* JSON Payload Preview */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#5F6368]">
                  <span className="flex items-center gap-1.5 text-white">
                    <FileCode2 className="w-3.5 h-3.5 text-[#E1252D]" />
                    <span>EMITTED EVIDENCE JSON</span>
                  </span>
                  <button
                    onClick={() => copyJson(activeCard.payload)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#10141D] hover:bg-[#181F2C] border border-[#222733] text-[11px] text-[#9AA0A6] hover:text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy JSON</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="p-3.5 rounded-xl bg-[#07090E] border border-[#222733] font-mono text-xs text-[#E2E8F0] overflow-x-auto leading-relaxed">
                  {JSON.stringify(activeCard.payload, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
