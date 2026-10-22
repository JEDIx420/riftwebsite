import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CinematicHero } from "@/components/CinematicHero";
import { ReconciliationGapStory } from "@/components/ReconciliationGapStory";
import { ReconciliationAnimation } from "@/components/ReconciliationAnimation";
import { DiscrepancyStack3D } from "@/components/DiscrepancyStack3D";
import { CinematicTerminal } from "@/components/CinematicTerminal";
import { EnterpriseArchitectureMap } from "@/components/EnterpriseArchitectureMap";
import { IndustryShowcaseStory } from "@/components/IndustryShowcaseStory";
import { BenchmarkChart } from "@/components/BenchmarkChart";
import { CinematicFinalCta } from "@/components/CinematicFinalCta";
import { ArrowRight, Lock, ExternalLink, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050608] text-[#F8F9FA] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      {/* SCENE 01: CINEMATIC RIFT HERO */}
      <CinematicHero />

      {/* SCENE 02: THE RECONCILIATION GAP */}
      <ReconciliationGapStory />

      {/* SCENE 03: RIFT IN ACTION (ENGINE PIPELINE) */}
      <section className="py-24 lg:py-36 bg-[#050608] border-b border-[#222733]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E1252D]" />
              <span className="font-mono text-xs text-[#E1252D] font-bold tracking-widest uppercase">
                CHAPTER 03 · RIFT IN ACTION
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05]">
              Deterministic Engine Core<span className="text-[#E1252D]">.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#9AA0A6] leading-relaxed">
              Watch multiple abstract data streams enter the central engine, undergo composite-key alignment, and branch cleanly into verified matches and auditable exception artifacts.
            </p>
          </div>

          <ReconciliationAnimation />
        </div>
      </section>

      {/* SCENE 04: FLOATING 3D EVIDENCE CARDS */}
      <DiscrepancyStack3D />

      {/* SCENE 05: ENGINEERING PRECISION (RUST CLI) */}
      <CinematicTerminal />

      {/* SCENE 06: ENTERPRISE ARCHITECTURE INTEGRATION */}
      <EnterpriseArchitectureMap />

      {/* SCENE 07: INDUSTRY SHOWCASE */}
      <IndustryShowcaseStory />

      {/* SCENE 08: CONTROLLED BENCHMARKS & MEMORY MODEL */}
      <section className="py-24 lg:py-36 bg-[#050608] border-b border-[#222733]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs text-emerald-400 font-bold tracking-widest uppercase">
                CHAPTER 08 · AUDITED BENCHMARKS
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05]">
              Empirical Performance Evidence<span className="text-[#E1252D]">.</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#9AA0A6] leading-relaxed">
              Measured under isolated operating system kernel accounting (<code className="text-white font-mono">/usr/bin/time -l</code>) on Apple Silicon M4. Sorter allocation budget strictly separated from process resident memory (RSS).
            </p>
          </div>

          <BenchmarkChart />
        </div>
      </section>

      {/* SCENE 09: INVESTOR CENTRE EDITORIAL BRIEFING */}
      <section className="py-24 lg:py-36 bg-[#080A0E] border-b border-[#222733]/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="glass-panel-glow rounded-3xl p-8 sm:p-16 border border-[#2D3343]">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#090C12] border border-[#222733] text-xs font-mono text-[#E1252D]">
                <Lock className="w-3.5 h-3.5" />
                <span>INSTITUTIONAL BRIEFING · INVESTOR CENTRE</span>
              </div>

              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05]">
                The Infrastructure Opportunity in Verifiable Data Operations<span className="text-[#E1252D]">.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#9AA0A6] leading-relaxed">
                As global payment processors, digital banks, and autonomous AI data platforms scale, the economic damage of undetected data divergence escalates exponentially. Explore Eagle Eye’s long-term commercialization strategy, research milestones, and institutional investment thesis.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/investors"
                  className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-widest text-white bg-[#E1252D] hover:bg-[#FF333D] transition-colors flex items-center gap-2 cursor-pointer shadow-xl shadow-[#E1252D]/25"
                >
                  <span>Explore Investor Centre</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/contact?intent=investor"
                  className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-widest text-[#9AA0A6] hover:text-white bg-[#0A0D14] border border-[#222733] transition-colors cursor-pointer"
                >
                  Request Diligence Materials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCENE 10: MEMORABLE VISUAL CALLBACK & FINAL CTA */}
      <CinematicFinalCta />

      <Footer />
    </div>
  );
}
