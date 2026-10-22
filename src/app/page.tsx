import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ReconciliationAnimation } from "@/components/ReconciliationAnimation";
import { DiscrepancyViewer } from "@/components/DiscrepancyViewer";
import { TerminalDemo } from "@/components/TerminalDemo";
import { BenchmarkChart } from "@/components/BenchmarkChart";
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  FileText, 
  Database, 
  CreditCard, 
  Building2, 
  Binary, 
  Terminal, 
  CheckCircle2, 
  Layers, 
  Cpu, 
  ExternalLink 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      {/* SECTION 1 — HERO */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden border-b border-[#222733]/60">
        {/* Subtle Background Glow & Grid */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#E1252D]/10 rounded-full blur-[140px] pointer-events-none" />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Engineering Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14171E] border border-[#2D3343] text-xs font-mono text-[#8E929B] animate-in fade-in duration-300">
              <span className="w-2 h-2 rounded-full bg-[#E1252D] animate-ping" />
              <span className="text-[#F4F4F6] font-medium">RIFT v0.1.1</span>
              <span className="text-[#5E6370]">·</span>
              <span>Compiled Native Rust Reconciler</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#F4F4F6] leading-[1.08]">
              Complex data. <br />
              <span className="text-[#E1252D]">Clear answers.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#8E929B] max-w-2xl mx-auto font-normal leading-relaxed">
              Reconcile complex datasets, investigate discrepancies, and produce verifiable evidence with a lightweight, high-performance Rust-native engine.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/product"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] transition-all shadow-lg shadow-[#E1252D]/25 flex items-center justify-center gap-2"
              >
                <span>Explore RIFT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact?intent=poc"
                className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#F4F4F6] bg-[#14171E] hover:bg-[#1A1E28] border border-[#2D3343] hover:border-[#3D465C] transition-all flex items-center justify-center gap-2"
              >
                <span>Discuss a PoC</span>
              </Link>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#5E6370]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Read-Only Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Deterministic Hash Alignment
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                No Database Mutation
              </span>
            </div>
          </div>

          {/* Signature Animated Reconciliation Visualization */}
          <div className="mt-14 lg:mt-20">
            <ReconciliationAnimation />
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM */}
      <section className="py-20 lg:py-28 bg-[#0B0C10] border-b border-[#222733]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E1252D]" />
              <span className="font-mono text-xs text-[#E1252D] font-bold tracking-widest uppercase">
                THE RECONCILIATION GAP
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F4F4F6] tracking-tight">
              A finished pipeline is not proof of correct data.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#8E929B] leading-relaxed">
              Transaction exports, settlement logs, and banking records frequently diverge. Mismatches multiply across asynchronous batch windows, schema shifts, and intermediary switches. Operations teams drown in manual triage and ad-hoc SQL diff scripts.
            </p>
          </div>

          {/* 3 Core Divergence Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-xl bg-[#0F1115] border border-[#222733] hover:border-[#3D465C] transition-colors relative">
              <div className="w-10 h-10 rounded-lg bg-[#14171E] border border-[#222733] flex items-center justify-center text-[#E1252D] mb-5 font-mono text-base font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-[#F4F4F6] mb-2">
                Format & Type Fragmentation
              </h3>
              <p className="text-sm text-[#8E929B] leading-relaxed">
                Source data arrives as JSONL, settlement arrives as Parquet, and bank statements arrive as CSV. Differing timestamp precision, floating-point rounding errors, and null representations trigger false alarms.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#0F1115] border border-[#222733] hover:border-[#3D465C] transition-colors relative">
              <div className="w-10 h-10 rounded-lg bg-[#14171E] border border-[#222733] flex items-center justify-center text-[#E1252D] mb-5 font-mono text-base font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-[#F4F4F6] mb-2">
                Unbounded Memory & Scale Freezes
              </h3>
              <p className="text-sm text-[#8E929B] leading-relaxed">
                Conventional in-memory diff tools suffer quadratic $O(N^2 \log N)$ freezes or trigger OS out-of-memory crashes when matching millions of unkeyed records or multi-gigabyte datasets.
              </p>
            </div>

            <div className="p-7 rounded-xl bg-[#0F1115] border border-[#222733] hover:border-[#3D465C] transition-colors relative">
              <div className="w-10 h-10 rounded-lg bg-[#14171E] border border-[#222733] flex items-center justify-center text-[#E1252D] mb-5 font-mono text-base font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-[#F4F4F6] mb-2">
                Unexplained Residuals & Audit Risk
              </h3>
              <p className="text-sm text-[#8E929B] leading-relaxed">
                Simple diffs show that a discrepancy exists, but cannot explain why. Finance and engineering spend days reverse-engineering fee adjustments, timing lags, and network timeouts by hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — WHAT RIFT DOES */}
      <section className="py-20 lg:py-28 border-b border-[#222733]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DiscrepancyViewer />
        </div>
      </section>

      {/* SECTION 4 — WHY RIFT (VERIFIED TECHNICAL ADVANTAGES) */}
      <section className="py-20 lg:py-28 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E1252D]" />
              <span className="font-mono text-xs text-[#E1252D] font-bold tracking-widest uppercase">
                WHY RIFT
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F4F4F6] tracking-tight">
              Built for computational precision. <br />
              No always-on dashboard required.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#8E929B]">
              Rift was engineered from the ground up in native Rust to serve as a focused, deterministic comparison engine that drops into existing environments without replacing your data stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] hover:border-[#3D465C] transition-all">
              <Cpu className="w-8 h-8 text-[#E1252D] mb-4" />
              <h4 className="text-base font-bold text-[#F4F4F6] mb-1.5">Rust-Native Performance</h4>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Zero garbage collection pauses. Processes 100K records in 0.113s and millions of records at ~490K rows/s throughput on standard hardware.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] hover:border-[#3D465C] transition-all">
              <Zap className="w-8 h-8 text-[#E1252D] mb-4" />
              <h4 className="text-base font-bold text-[#F4F4F6] mb-1.5">Bounded Memory Footprint</h4>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                External sort/merge engine operates within a configurable sorter budget (e.g. 64 MB), stabilizing peak RSS at ~97 MB even across 5M rows.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] hover:border-[#3D465C] transition-all">
              <Binary className="w-8 h-8 text-[#E1252D] mb-4" />
              <h4 className="text-base font-bold text-[#F4F4F6] mb-1.5">Deterministic Exactness</h4>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Exact fixed-point decimals, bit-preserving floats, and policy-driven key matching prevent silent rounding corruption.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] hover:border-[#3D465C] transition-all">
              <Terminal className="w-8 h-8 text-[#E1252D] mb-4" />
              <h4 className="text-base font-bold text-[#F4F4F6] mb-1.5">CLI-First Composition</h4>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Standard inputs, clean exit codes (0, 1, 2), and machine-readable JSON payloads allow seamless execution inside Docker, cron, or Airflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW IT FITS (READ-ONLY ARCHITECTURE) */}
      <section className="py-20 lg:py-28 border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="font-mono text-xs text-emerald-400 font-bold tracking-widest uppercase">
                INTEGRATION PATTERN
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F4F4F6] tracking-tight">
              Fits your existing enterprise architecture
            </h2>
            <p className="mt-4 text-base text-[#8E929B]">
              A non-invasive, read-only analysis layer designed to work alongside existing data teams and operational systems without requiring new database write permissions.
            </p>
          </div>

          {/* Workflow Diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] text-center flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#5E6370] uppercase">STAGE 01</span>
                <h4 className="text-base font-bold text-[#F4F4F6] mt-1 mb-2">Enterprise Sources</h4>
                <p className="text-xs text-[#8E929B] leading-relaxed">
                  Transaction exports, settlement batches, core banking dumps, or database views (Parquet, CSV, PostgreSQL).
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#222733] text-[11px] font-mono text-emerald-400">
                Read-Only Snapshots
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#14171E] border-2 border-[#E1252D] text-center flex flex-col justify-between red-border-glow">
              <div>
                <span className="text-[11px] font-mono text-[#E1252D] uppercase font-bold">STAGE 02 · CORE</span>
                <h4 className="text-base font-bold text-[#F4F4F6] mt-1 mb-2">RIFT Engine</h4>
                <p className="text-xs text-[#8E929B] leading-relaxed">
                  Scheduled CLI run or ephemeral container executes deterministic reconciliation and PGDS explanation search.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#222733] text-[11px] font-mono text-[#F4F4F6]">
                Zero Persistent State
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] text-center flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#5E6370] uppercase">STAGE 03</span>
                <h4 className="text-base font-bold text-[#F4F4F6] mt-1 mb-2">Structured Evidence</h4>
                <p className="text-xs text-[#8E929B] leading-relaxed">
                  Pristine JSON delta payloads, candidate explanation rules, and machine-readable audit artifacts.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#222733] text-[11px] font-mono text-emerald-400">
                Auditable JSON Packets
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] text-center flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#5E6370] uppercase">STAGE 04</span>
                <h4 className="text-base font-bold text-[#F4F4F6] mt-1 mb-2">Operations & Review</h4>
                <p className="text-xs text-[#8E929B] leading-relaxed">
                  Finance teams, settlement desks, and incident engineers resolve exceptions with exact proof in hand.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#222733] text-[11px] font-mono text-[#8E929B]">
                Faster Exception Triage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — INDUSTRIES */}
      <section className="py-20 lg:py-28 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#E1252D]" />
                <span className="font-mono text-xs text-[#E1252D] font-bold tracking-widest uppercase">
                  ENTERPRISE SOLUTIONS
                </span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-[#F4F4F6] tracking-tight">
                Precision across high-stakes domains
              </h2>
            </div>
            <Link
              href="/solutions"
              className="text-xs font-mono uppercase text-[#E1252D] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>Explore all solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/solutions/payments"
              className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] hover:border-[#E1252D]/60 transition-all group flex flex-col justify-between"
            >
              <div>
                <CreditCard className="w-6 h-6 text-[#E1252D] mb-4" />
                <h3 className="text-lg font-bold text-[#F4F4F6] group-hover:text-white mb-2">
                  Payment Settlement
                </h3>
                <p className="text-xs text-[#8E929B] leading-relaxed">
                  Reconcile POS gateway transactions against switch logs, bank statements, and chargeback evidence files.
                </p>
              </div>
              <span className="mt-6 text-xs font-mono text-[#E1252D] flex items-center gap-1">
                View solution <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/solutions/banking"
              className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] hover:border-[#E1252D]/60 transition-all group flex flex-col justify-between"
            >
              <div>
                <Building2 className="w-6 h-6 text-[#E1252D] mb-4" />
                <h3 className="text-lg font-bold text-[#F4F4F6] group-hover:text-white mb-2">
                  Banking & Ledgers
                </h3>
                <p className="text-xs text-[#8E929B] leading-relaxed">
                  Automate cross-ledger nostro/vostro reconciliation and inter-system account balances with deterministic exactness.
                </p>
              </div>
              <span className="mt-6 text-xs font-mono text-[#E1252D] flex items-center gap-1">
                View solution <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/solutions/data-engineering"
              className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] hover:border-[#E1252D]/60 transition-all group flex flex-col justify-between"
            >
              <div>
                <Database className="w-6 h-6 text-[#E1252D] mb-4" />
                <h3 className="text-lg font-bold text-[#F4F4F6] group-hover:text-white mb-2">
                  Data Engineering & ETL
                </h3>
                <p className="text-xs text-[#8E929B] leading-relaxed">
                  Verify database migrations, warehouse syncs, and Parquet pipeline stages before corrupt data propagates downstream.
                </p>
              </div>
              <span className="mt-6 text-xs font-mono text-[#E1252D] flex items-center gap-1">
                View solution <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>

            <Link
              href="/solutions/enterprise"
              className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] hover:border-[#E1252D]/60 transition-all group flex flex-col justify-between"
            >
              <div>
                <Layers className="w-6 h-6 text-[#E1252D] mb-4" />
                <h3 className="text-lg font-bold text-[#F4F4F6] group-hover:text-white mb-2">
                  Enterprise Finance & ERP
                </h3>
                <p className="text-xs text-[#8E929B] leading-relaxed">
                  Verify multi-entity ERP journal migrations and generate cryptographic audit packs for external regulators.
                </p>
              </div>
              <span className="mt-6 text-xs font-mono text-[#E1252D] flex items-center gap-1">
                View solution <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7 — REAL CLI TERMINAL DEMO */}
      <section className="py-20 lg:py-28 border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#E1252D]" />
              <span className="font-mono text-xs text-[#E1252D] font-bold tracking-widest uppercase">
                ENGINEERING SPECIFICATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#F4F4F6] tracking-tight">
              Real CLI. Deterministic syntax.
            </h2>
            <p className="mt-4 text-base text-[#8E929B]">
              Explore actual Rift CLI syntax verified against the latest engine codebase. No fabricated parameters or unverified claims.
            </p>
          </div>

          <TerminalDemo />
        </div>
      </section>

      {/* SECTION 8 — PERFORMANCE & EVIDENCE */}
      <section className="py-20 lg:py-28 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BenchmarkChart />
        </div>
      </section>

      {/* SECTION 9 — INVESTOR CENTRE PREVIEW */}
      <section className="py-20 lg:py-24 border-b border-[#222733]/60 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#14171E] to-[#0A0B0E] border border-[#2D3343] relative">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#08090B] border border-[#222733] text-xs font-mono text-[#E1252D]">
                <span>INSTITUTIONAL BRIEFING</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#F4F4F6] tracking-tight">
                The Infrastructure Opportunity in Verifiable Data Operations
              </h2>
              <p className="text-sm sm:text-base text-[#8E929B] leading-relaxed">
                As global enterprises transition to real-time payments, distributed cloud architectures, and automated intelligence pipelines, the cost of undetected data divergence escalates exponentially. Explore Eagle Eye’s long-term commercialization strategy, research milestones, and institutional investment thesis.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/investors"
                  className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] transition-colors flex items-center gap-2"
                >
                  <span>Explore Investor Centre</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact?intent=investor"
                  className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-[#8E929B] hover:text-white bg-[#08090B] border border-[#222733] transition-colors"
                >
                  Investor Enquiries
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10 — CALL TO ACTION */}
      <section className="py-20 lg:py-28 bg-[#08090B] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-[#F4F4F6] tracking-tight">
            Ready to evaluate RIFT on your datasets?
          </h2>
          <p className="text-base sm:text-lg text-[#8E929B] max-w-2xl mx-auto leading-relaxed">
            Begin with a scoped, read-only proof of concept. Validate detection accuracy, memory boundaries, and investigation velocity against your existing reconciliation methods.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?intent=poc"
              className="w-full sm:w-auto px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] transition-all shadow-xl shadow-[#E1252D]/25"
            >
              Discuss a Scoped PoC
            </Link>
            <Link
              href="/developers"
              className="w-full sm:w-auto px-8 py-4 rounded-lg text-sm font-semibold uppercase tracking-wider text-[#8E929B] hover:text-white bg-[#14171E] border border-[#222733] hover:border-[#3D465C] transition-all"
            >
              Review CLI Documentation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
