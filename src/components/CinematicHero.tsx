"use client";

import React from "react";
import Link from "next/link";
import { DataStreamCanvas } from "./DataStreamCanvas";
import { ArrowRight, ChevronDown, Terminal, Shield, CheckCircle2 } from "lucide-react";

export function CinematicHero() {
  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden border-b border-[#222733]/50">
      {/* 3D Data Stream Canvas */}
      <DataStreamCanvas />

      {/* Atmospheric Radial Gradient Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#E1252D]/12 rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[300px] bg-[#E1252D]/8 rounded-full blur-[140px] pointer-events-none z-0" />

      {/* Main Center Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto text-center space-y-8">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#0D1017]/80 backdrop-blur-md border border-[rgba(255,255,255,0.08)] shadow-lg shadow-black/60">
          <span className="w-2 h-2 rounded-full bg-[#E1252D] animate-ping" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#F8F9FA] font-medium">
            RIFT ENGINE v0.1.1
          </span>
          <span className="text-[rgba(255,255,255,0.2)]">/</span>
          <span className="text-xs font-mono text-[#9AA0A6] hidden sm:inline">
            EAGLE EYE DEEP-TECH
          </span>
        </div>

        {/* Massive RIFT Wordmark & Display Headline */}
        <div className="space-y-3">
          <div className="font-display font-black text-6xl sm:text-8xl lg:text-[10rem] tracking-tighter text-white uppercase leading-[0.88] select-none">
            RIFT<span className="text-[#E1252D] drop-shadow-[0_0_35px_rgba(225,37,45,0.6)]">.</span>
          </div>

          <h1 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#E2E8F0] max-w-4xl mx-auto leading-tight">
            Complex data<span className="text-[#E1252D]">.</span> Clear answers<span className="text-[#E1252D]">.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-[#9AA0A6] max-w-2xl mx-auto font-normal leading-relaxed">
          Reconcile complex datasets, investigate discrepancies, and produce verifiable evidence with a lightweight, high-performance Rust-native engine.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            href="/product"
            className="w-full sm:w-auto px-8 py-4 rounded-lg font-mono text-xs uppercase font-bold tracking-widest text-white bg-[#E1252D] hover:bg-[#FF333D] transition-all shadow-xl shadow-[#E1252D]/30 flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore RIFT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact?intent=poc"
            className="w-full sm:w-auto px-8 py-4 rounded-lg font-mono text-xs uppercase font-bold tracking-widest text-[#F8F9FA] bg-[#0E1219]/90 hover:bg-[#151B26] border border-[rgba(255,255,255,0.12)] hover:border-[#E1252D]/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Discuss a PoC</span>
          </Link>
        </div>

        {/* Telemetry Bar */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-[rgba(255,255,255,0.06)] text-left font-mono">
          <div className="p-2.5 rounded bg-[#090C12]/60 border border-[rgba(255,255,255,0.04)]">
            <span className="text-[10px] text-[#5F6368] block uppercase">ENGINE</span>
            <span className="text-xs text-[#F8F9FA] font-bold">Native Rust Core</span>
          </div>
          <div className="p-2.5 rounded bg-[#090C12]/60 border border-[rgba(255,255,255,0.04)]">
            <span className="text-[10px] text-[#5F6368] block uppercase">100K BENCHMARK</span>
            <span className="text-xs text-emerald-400 font-bold">0.113s Runtime</span>
          </div>
          <div className="p-2.5 rounded bg-[#090C12]/60 border border-[rgba(255,255,255,0.04)]">
            <span className="text-[10px] text-[#5F6368] block uppercase">5M PEAK RSS</span>
            <span className="text-xs text-[#E1252D] font-bold">97.3 MB Bounded</span>
          </div>
          <div className="p-2.5 rounded bg-[#090C12]/60 border border-[rgba(255,255,255,0.04)]">
            <span className="text-[10px] text-[#5F6368] block uppercase">INTEGRATION</span>
            <span className="text-xs text-[#F8F9FA] font-bold">Read-Only CLI</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="relative z-10 text-center flex flex-col items-center gap-1.5 text-xs font-mono text-[#5F6368] pt-8">
        <span className="tracking-widest uppercase text-[10px]">SCROLL TO EXPLORE RECONCILIATION GAP</span>
        <ChevronDown className="w-4 h-4 text-[#E1252D] animate-bounce" />
      </div>
    </section>
  );
}
