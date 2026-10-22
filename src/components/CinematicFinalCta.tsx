"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Shield, CheckCircle2 } from "lucide-react";

export function CinematicFinalCta() {
  return (
    <section className="py-28 lg:py-40 bg-[#050608] relative overflow-hidden border-t border-[#222733]/60">
      {/* Converging Luminous Streams & Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#E1252D]/12 rounded-full blur-[170px] pointer-events-none" />

      {/* Converging Lines Pattern */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
        <svg className="w-full h-full max-w-6xl" viewBox="0 0 1000 400" fill="none">
          <path
            d="M 50 50 C 350 50, 450 200, 500 200 C 550 200, 650 50, 950 50"
            stroke="rgba(225, 37, 45, 0.4)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <path
            d="M 50 350 C 350 350, 450 200, 500 200 C 550 200, 650 350, 950 350"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <circle cx="500" cy="200" r="8" fill="#E1252D" />
          <circle cx="500" cy="200" r="24" stroke="rgba(225,37,45,0.4)" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10141D] border border-[#222733] text-xs font-mono text-[#E1252D]">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>SCOPED PROOF-OF-CONCEPT EVALUATIONS</span>
        </div>

        <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-white uppercase tracking-tight leading-[0.95]">
          Complex data<span className="text-[#E1252D]">.</span> <br />
          Clear answers<span className="text-[#E1252D]">.</span>
        </h2>

        <p className="text-base sm:text-lg lg:text-xl text-[#9AA0A6] max-w-2xl mx-auto leading-relaxed">
          Benchmark RIFT against your existing reconciliation methods under a read-only, non-disclosure evaluation agreement.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            href="/contact?intent=poc"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs uppercase font-bold tracking-widest text-white bg-[#E1252D] hover:bg-[#FF333D] transition-all shadow-2xl shadow-[#E1252D]/35 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Discuss a Scoped PoC</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/developers"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-mono text-xs uppercase font-bold tracking-widest text-[#F8F9FA] bg-[#0E1219]/90 hover:bg-[#151B26] border border-[rgba(255,255,255,0.12)] hover:border-[#E1252D]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Review CLI Reference</span>
          </Link>
        </div>

        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#5F6368]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Zero database mutations
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Runs in your VPC
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Bounded 64MB memory sort
          </span>
        </div>
      </div>
    </section>
  );
}
