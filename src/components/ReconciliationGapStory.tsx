"use client";

import React, { useState, useEffect, useRef } from "react";
import { AlertCircle, CheckCircle2, RefreshCw, Zap, Database, ArrowRight } from "lucide-react";

export function ReconciliationGapStory() {
  const [stage, setStage] = useState<0 | 1 | 2>(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!autoPlay) return;
    const element = containerRef.current;
    if (!element) return;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = false;
    const update = () => {
      frame = 0;
      if (!visible || document.hidden || motionQuery.matches) return;
      const bounds = element.getBoundingClientRect();
      const viewport = window.innerHeight;
      // Divide the visible scroll journey into three deliberate narrative beats.
      const travel = Math.max(1, bounds.height + viewport);
      const progress = Math.max(0, Math.min(0.999, (viewport - bounds.top) / travel));
      const next = Math.min(2, Math.floor(progress * 3)) as 0 | 1 | 2;
      setStage(prev => prev === next ? prev : next);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule();
    }, { rootMargin: "15% 0px" });
    observer.observe(element);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [autoPlay]);

  return (
    <section className="py-24 lg:py-36 bg-[#080A0E] border-b border-[#222733]/60 relative overflow-hidden" ref={containerRef}>
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E1252D]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E1252D]" />
            <span className="font-mono text-xs text-[#E1252D] font-bold tracking-widest uppercase">
              CHAPTER 02 · THE RECONCILIATION GAP
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05]">
            A finished pipeline is not proof of correct data<span className="text-[#E1252D]">.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9AA0A6] leading-relaxed">
            Transaction exports, settlement files, and banking ledgers often diverge. Asynchronous batch windows, format differences, and micro-deltas multiply. Watch how records fragment across operational systems:
          </p>
        </div>

        {/* Narrative Interactive Controller */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-[#222733] pb-4">
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => {
                setStage(0);
                setAutoPlay(false);
              }}
              className={`px-3 py-1.5 rounded transition-all ${
                stage === 0
                  ? "bg-[#E1252D] text-white font-bold"
                  : "bg-[#0D1017] border border-[#222733] text-[#9AA0A6] hover:text-white"
              }`}
            >
              01. Independent Streams
            </button>
            <button
              onClick={() => {
                setStage(1);
                setAutoPlay(false);
              }}
              className={`px-3 py-1.5 rounded transition-all ${
                stage === 1
                  ? "bg-[#E1252D] text-white font-bold"
                  : "bg-[#0D1017] border border-[#222733] text-[#9AA0A6] hover:text-white"
              }`}
            >
              02. Divergence & Conflict
            </button>
            <button
              onClick={() => {
                setStage(2);
                setAutoPlay(false);
              }}
              className={`px-3 py-1.5 rounded transition-all ${
                stage === 2
                  ? "bg-emerald-600 text-white font-bold"
                  : "bg-[#0D1017] border border-[#222733] text-[#9AA0A6] hover:text-white"
              }`}
            >
              03. RIFT Deterministic Lock
            </button>
          </div>

          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="flex items-center gap-1.5 text-xs font-mono text-[#5F6368] hover:text-white"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${autoPlay ? "animate-spin" : ""}`} />
            <span>{autoPlay ? "Scroll-linked" : "Resume Scroll Sync"}</span>
          </button>
        </div>

        {/* Interactive Stream Simulation Stage */}
        <div className="glass-panel-glow rounded-2xl p-6 sm:p-10 relative overflow-hidden min-h-[460px] flex flex-col justify-between">
          {/* Stage 0: Independent Streams */}
          {stage === 0 && (
            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[rgba(255,255,255,0.08)] pb-4">
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                    PHASE 01: INITIAL INGESTION
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    Isolated Ingest Pipelines (Apparent Success)
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#5F6368]">Status: Jobs reporting success</span>
              </div>

              {/* 3 Streams Visual */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#0B0D13] border border-[#222733] flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                    <div>
                      <div className="text-white font-semibold">STREAM A: TRANSACTION DATA (JSONL)</div>
                      <div className="text-[#5F6368] text-[11px]">1,248,761 auth records from POS & Gateway</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 text-xs">FLOWING SMOOTH</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0D13] border border-[#222733] flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-amber-400 animate-pulse" />
                    <div>
                      <div className="text-white font-semibold">STREAM B: SETTLEMENT DATA (PARQUET)</div>
                      <div className="text-[#5F6368] text-[11px]">1,246,420 switch settlement entries</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 text-xs">FLOWING SMOOTH</span>
                </div>

                <div className="p-4 rounded-xl bg-[#0B0D13] border border-[#222733] flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
                    <div>
                      <div className="text-white font-semibold">STREAM C: BANK STATEMENT (CSV)</div>
                      <div className="text-[#5F6368] text-[11px]">EOD Nostro clearing ledger balances</div>
                    </div>
                  </div>
                  <span className="text-emerald-400 text-xs">FLOWING SMOOTH</span>
                </div>
              </div>

              <div className="text-xs font-mono text-[#9AA0A6] bg-[#0A0D14]/80 p-3 rounded-lg border border-[#222733]">
                “Each individual pipeline reports completion. But are the records identical?”
              </div>
            </div>
          )}

          {/* Stage 1: The Divergence Gap */}
          {stage === 1 && (
            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[rgba(255,255,255,0.08)] pb-4">
                <div>
                  <span className="text-xs font-mono text-[#E1252D] font-bold uppercase">
                    PHASE 02: THE RECONCILIATION GAP
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    Unresolved Discrepancies Multiply
                  </h3>
                </div>
                <span className="text-xs font-mono text-[#E1252D] font-bold">2,341 MISMATCHES DETECTED</span>
              </div>

              {/* Chaos Visual with Discrepancy Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl bg-[#120B0D] border border-[#E1252D]/40 space-y-2">
                  <div className="text-xs font-mono font-bold text-[#E1252D] flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>MODIFIED VALUES</span>
                  </div>
                  <div className="text-2xl font-display font-black text-white">1,902 RECORDS</div>
                  <p className="text-xs text-[#9AA0A6] leading-relaxed">
                    MDR fee subtractions, interchange rounding drift, and currency exchange micro-deltas.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#120B0D] border border-amber-500/40 space-y-2">
                  <div className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>MISSING IN TARGET</span>
                  </div>
                  <div className="text-2xl font-display font-black text-white">310 RECORDS</div>
                  <p className="text-xs text-[#9AA0A6] leading-relaxed">
                    Network dropouts and timeout retries present in Gateway but dropped before settlement batch.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#120B0D] border border-cyan-500/40 space-y-2">
                  <div className="text-xs font-mono font-bold text-cyan-400 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4" />
                    <span>EXTRA IN TARGET</span>
                  </div>
                  <div className="text-2xl font-display font-black text-white">129 RECORDS</div>
                  <p className="text-xs text-[#9AA0A6] leading-relaxed">
                    Unmatched bank credit postings with no originating authorization transaction trace.
                  </p>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#14080B] border border-[#E1252D]/50 text-xs font-mono text-[#FF858B] flex items-center justify-between">
                <span>Traditional response: Senior engineers spend 3 days running manual SQL diffs.</span>
                <span className="text-white font-bold">Time lost. Risk increases.</span>
              </div>
            </div>
          )}

          {/* Stage 2: RIFT Deterministic Lock */}
          {stage === 2 && (
            <div className="space-y-8 animate-in fade-in zoom-in-95 duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[rgba(255,255,255,0.08)] pb-4">
                <div>
                  <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                    PHASE 03: RIFT RESOLUTION
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    Deterministic Alignment & PGDS Invariant Discovery
                  </h3>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold">100% EXPLAINED IN 2.03s</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#09110E] border border-emerald-500/40 space-y-3">
                  <div className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>EXACT CANONICAL ALIGNMENT</span>
                  </div>
                  <p className="text-xs text-[#9AA0A6] leading-relaxed">
                    Rift’s external sort/merge reconciler matches records by primary key in 2.03 seconds. Memory is strictly bounded to 64 MB sorter budget, stabilizing RSS at ~98 MB.
                  </p>
                  <div className="text-xs font-mono text-white">
                    Exact matches: <span className="text-emerald-400 font-bold">997,659 (99.77%)</span>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-[#0B0E14] border border-[#222733] space-y-3">
                  <div className="text-xs font-mono text-[#E1252D] font-bold flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    <span>PGDS RULE GENERATION</span>
                  </div>
                  <p className="text-xs text-[#9AA0A6] leading-relaxed">
                    Instead of dumping 1,902 raw diffs, PGDS discovers invariant: <code className="text-white">target = source - 80.00 (MSW_UPI)</code>. Explained in milliseconds.
                  </p>
                  <div className="text-xs font-mono text-[#9AA0A6]">
                    Artifact emitted: <span className="text-[#E1252D] font-bold">results.json + proof packet</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-[#06120C] border border-emerald-500/50 text-xs font-mono text-emerald-300 flex items-center justify-between">
                <span>Result: Settlement team resolves exceptions instantly with auditable mathematical proof.</span>
                <span className="text-white font-bold">Exit Code: 1 (Handled)</span>
              </div>
            </div>
          )}

          {/* Stepper Progress Indicator */}
          <div className="pt-6 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between text-xs font-mono text-[#5F6368]">
            <div className="flex items-center gap-3">
              <span className={`w-2.5 h-2.5 rounded-full ${stage === 0 ? "bg-[#E1252D]" : "bg-[#222733]"}`} />
              <span className={`w-2.5 h-2.5 rounded-full ${stage === 1 ? "bg-[#E1252D]" : "bg-[#222733]"}`} />
              <span className={`w-2.5 h-2.5 rounded-full ${stage === 2 ? "bg-emerald-500" : "bg-[#222733]"}`} />
            </div>
            <span>Click tabs above to step through each phase</span>
          </div>
        </div>
      </div>
    </section>
  );
}
