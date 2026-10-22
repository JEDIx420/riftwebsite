"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RefreshCw, CheckCircle2, AlertTriangle, FileCode2 } from "lucide-react";

interface RecordPacket {
  id: string;
  key: string;
  source: string;
  status: "match" | "modified" | "missing" | "extra";
  details?: string;
}

export function ReconciliationAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [selectedRecord, setSelectedRecord] = useState<RecordPacket | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { rootMargin: "10% 0px" });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (!isPlaying || prefersReducedMotion || !isVisible) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 6);
    }, 1800);
    return () => clearInterval(interval);
  }, [isPlaying, prefersReducedMotion, isVisible]);

  const sampleDiscrepancies: RecordPacket[] = [
    {
      id: "rec_01",
      key: "TX_489201",
      source: "Gateway vs Settlement",
      status: "modified",
      details: 'field: "fee", before: 12.50, after: 15.00 (delta: +2.50)',
    },
    {
      id: "rec_02",
      key: "TX_489202",
      source: "Gateway Stream",
      status: "missing",
      details: "Present in Source A (JSONL), absent in Target (Parquet)",
    },
    {
      id: "rec_03",
      key: "TX_489203",
      source: "Bank Feed",
      status: "extra",
      details: "Present in Target (Postgres), unmatched in Source A",
    },
    {
      id: "rec_04",
      key: "TX_489204",
      source: "Composite (acc, seq)",
      status: "match",
      details: "Exact 1:1 schema alignment, 0 delta",
    },
  ];

  return (
    <div ref={containerRef} className="w-full bg-[#0F1115] border border-[#222733] rounded-xl p-5 md:p-8 relative overflow-hidden red-glow-subtle">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Top Header & Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10 border-b border-[#222733] pb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E1252D] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#F4F4F6] font-semibold">
              RIFT ENGINE PIPELINE VISUALIZATION
            </span>
          </div>
          <span className="hidden sm:inline-block text-[11px] font-mono text-[#5E6370] bg-[#14171E] px-2 py-0.5 rounded border border-[#222733]">
            Mode: External Sort/Merge (64MB Sorter Budget)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {!prefersReducedMotion && (
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded bg-[#14171E] border border-[#222733] text-[#8E929B] hover:text-white transition-colors"
              title={isPlaying ? "Pause Stream" : "Play Stream"}
              aria-label={isPlaying ? "Pause Stream" : "Play Stream"}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            </button>
          )}
          <button
            onClick={() => setActiveStep((prev) => (prev + 1) % 6)}
            className="p-1.5 rounded bg-[#14171E] border border-[#222733] text-[#8E929B] hover:text-white transition-colors"
            title="Next Step"
            aria-label="Next Step"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Pipeline Diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
        {/* Source Inputs (3 Cols) */}
        <div className="lg:col-span-3 space-y-3">
          <div className="text-xs font-mono uppercase text-[#8E929B] flex items-center justify-between">
            <span>INPUT STREAMS</span>
            <span className="text-[#5E6370]">READ-ONLY</span>
          </div>

          <div
            className={`p-3.5 rounded-lg border transition-all ${
              activeStep % 2 === 0
                ? "bg-[#14171E] border-[#E1252D]/60 text-white"
                : "bg-[#14171E]/60 border-[#222733] text-[#8E929B]"
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-semibold text-[#F4F4F6]">SOURCE A: TRANSACTIONS</span>
              <span className="text-[10px] text-[#E1252D]">JSONL / 1.2M</span>
            </div>
            <div className="mt-1 font-mono text-[11px] text-[#5E6370] truncate">
              {`{"id":"TX_489201","amt":1230.00,"ts":171000...}`}
            </div>
          </div>

          <div
            className={`p-3.5 rounded-lg border transition-all ${
              activeStep % 2 === 1
                ? "bg-[#14171E] border-[#E1252D]/60 text-white"
                : "bg-[#14171E]/60 border-[#222733] text-[#8E929B]"
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="font-semibold text-[#F4F4F6]">SOURCE B: SETTLEMENT</span>
              <span className="text-[10px] text-amber-500">PARQUET / 1.2M</span>
            </div>
            <div className="mt-1 font-mono text-[11px] text-[#5E6370] truncate">
              {`rowgroup_0: [TX_489201, 1150.00, verified]`}
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#14171E]/40 border border-[#222733]/60 text-xs font-mono text-[#5E6370]">
            <span>ADAPTER: Zero database mutation</span>
          </div>
        </div>

        {/* Center: RIFT ENGINE Core (5 Cols) */}
        <div className="lg:col-span-5 relative">
          <div className="p-6 rounded-xl bg-[#08090B] border-2 border-[#2D3343] relative red-border-glow">
            {/* Engine Header */}
            <div className="flex items-center justify-between border-b border-[#222733] pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="font-mono text-xs font-bold text-[#F4F4F6] tracking-wide">
                  RIFT CORE RECONCILER
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#E1252D] bg-[#E1252D]/10 px-2 py-0.5 rounded">
                DETERMINISTIC
              </span>
            </div>

            {/* Core Processing Steps */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between p-2 rounded bg-[#0F1115] border border-[#222733]">
                <span className="text-[#8E929B]">1. Composite Key Hash</span>
                <span className="text-emerald-400 font-semibold">1:1 MATCHED</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-[#0F1115] border border-[#222733]">
                <span className="text-[#8E929B]">2. Decimal & Value Diff</span>
                <span className="text-[#E1252D] font-semibold">DELTA DETECTED</span>
              </div>

              <div className="flex items-center justify-between p-2 rounded bg-[#0F1115] border border-[#222733]">
                <span className="text-[#8E929B]">3. PGDS Rule Discovery</span>
                <span className="text-amber-400 font-semibold">RULE CANDIDATE</span>
              </div>
            </div>

            {/* Engine Live Stats */}
            <div className="mt-4 pt-3 border-t border-[#222733] grid grid-cols-3 gap-2 text-center font-mono">
              <div>
                <div className="text-[10px] text-[#5E6370]">THROUGHPUT</div>
                <div className="text-xs font-semibold text-[#F4F4F6]">492K rows/s</div>
              </div>
              <div>
                <div className="text-[10px] text-[#5E6370]">PEAK RSS</div>
                <div className="text-xs font-semibold text-[#F4F4F6]">97.3 MB</div>
              </div>
              <div>
                <div className="text-[10px] text-[#5E6370]">EXIT STATUS</div>
                <div className="text-xs font-semibold text-[#E1252D]">CODE 1 (DIFF)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Output: Structured Evidence (4 Cols) */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-mono uppercase text-[#8E929B] flex items-center justify-between">
            <span>EVIDENCE ARTIFACTS</span>
            <span className="text-emerald-500">MACHINE-READABLE</span>
          </div>

          {/* Discrepancy Stream Items */}
          <div className="space-y-2">
            {sampleDiscrepancies.map((rec) => (
              <div
                key={rec.id}
                onClick={() => setSelectedRecord(rec)}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  selectedRecord?.id === rec.id
                    ? "bg-[#14171E] border-[#E1252D]"
                    : "bg-[#14171E]/60 border-[#222733] hover:border-[#3D465C]"
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-semibold text-[#F4F4F6]">{rec.key}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase ${
                      rec.status === "match"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : rec.status === "modified"
                        ? "bg-[#E1252D]/10 text-[#E1252D]"
                        : rec.status === "missing"
                        ? "bg-amber-500/10 text-amber-400"
                        : "bg-purple-500/10 text-purple-400"
                    }`}
                  >
                    {rec.status}
                  </span>
                </div>
                <div className="mt-1 text-[11px] text-[#8E929B] font-mono truncate">
                  {rec.details}
                </div>
              </div>
            ))}
          </div>

          <div className="p-2.5 rounded bg-[#14171E]/40 border border-[#222733] flex items-center justify-between text-[11px] font-mono text-[#5E6370]">
            <span className="flex items-center gap-1.5">
              <FileCode2 className="w-3.5 h-3.5 text-[#E1252D]" />
              Emit: results.json
            </span>
            <span className="text-[#8E929B]">Auditable Trail</span>
          </div>
        </div>
      </div>

      {/* Detail Inspector when clicked */}
      {selectedRecord && (
        <div className="mt-6 p-4 rounded-lg bg-[#08090B] border border-[#E1252D]/40 font-mono text-xs relative animate-in fade-in duration-150">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#E1252D] font-bold">
              INSPECTING EVIDENCE PACKET: {selectedRecord.key}
            </span>
            <button
              onClick={() => setSelectedRecord(null)}
              className="text-[#8E929B] hover:text-white"
            >
              ✕
            </button>
          </div>
          <pre className="text-[#F4F4F6] overflow-x-auto p-2 bg-[#0F1115] rounded border border-[#222733]">
{JSON.stringify(
  {
    record_id: selectedRecord.key,
    status: selectedRecord.status,
    source: selectedRecord.source,
    evidence: selectedRecord.details,
    timestamp: "2026-10-22T08:14:00Z",
    hash_verified: true,
  },
  null,
  2
)}
          </pre>
        </div>
      )}
    </div>
  );
}
