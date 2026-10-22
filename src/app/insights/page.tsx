import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookOpen, Calendar, Clock, ArrowRight, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Technical Insights & Engineering Research",
  description:
    "Peer-reviewed engineering research and architectural papers on deterministic data reconciliation, external sort memory accounting, and automated discrepancy discovery.",
};

export const INSIGHTS = [
  {
    slug: "deterministic-reconciliation-at-scale",
    title: "Deterministic Reconciliation at Scale: Eliminating Floating-Point Drift and Quadratic Freezes",
    date: "October 18, 2026",
    readTime: "8 min read",
    author: "Systems Architecture Group",
    summary:
      "Why standard in-memory diff tools suffer $O(N^2 \\log N)$ quadratic lockups on unkeyed datasets, and how fixed-point decimal canonical types prevent rounding corruption in multi-million record reconciliations.",
    category: "Architecture & Systems",
  },
  {
    slug: "why-rust-cli-beats-dashboards-for-etl-verification",
    title: "Why a Compiled Rust CLI Beats Always-On Dashboards for Data Pipeline Verification",
    date: "October 12, 2026",
    readTime: "6 min read",
    author: "Infrastructure Engineering",
    summary:
      "A completed ETL job is not proof of correct data. Why ephemeral, read-only CLI verifiers with deterministic exit codes integrate into Airflow and Kubernetes pipelines with zero persistent infrastructure overhead.",
    category: "Data Engineering",
  },
  {
    slug: "pgds-automated-divergence-investigation",
    title: "Parameterized Graph Discrepancy Search: Moving Beyond Raw Diff Dumps",
    date: "October 05, 2026",
    readTime: "10 min read",
    author: "Eagle Eye Research Labs",
    summary:
      "Raw diff dumps tell you that records differ, but fail to explain why. An inside look at Rift’s PGDS algorithm: discovering candidate invariant rules and verifying them via authoritative witness caching.",
    category: "Algorithms & Research",
  },
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#222733]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#14171E] border border-[#2D3343] text-xs font-mono text-[#E1252D]">
              <BookOpen className="w-3.5 h-3.5" />
              <span>TECHNICAL PAPERS & RESEARCH</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#F4F4F6] tracking-tight leading-[1.1]">
              Engineering Insights
            </h1>
            <p className="text-lg text-[#8E929B] leading-relaxed">
              Source-backed technical articles addressing computational reconciliation architecture, bounded memory accounting, mathematical auditability, and enterprise pipeline integration.
            </p>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-20 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {INSIGHTS.map((article) => (
            <article
              key={article.slug}
              className="p-8 rounded-xl bg-[#0F1115] border border-[#222733] hover:border-[#E1252D]/60 transition-all group"
            >
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#5E6370] mb-3">
                <span className="text-[#E1252D] font-semibold">{article.category}</span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {article.date}
                </span>
                <span>·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {article.readTime}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-[#F4F4F6] group-hover:text-white transition-colors mb-3">
                <Link href={`/insights/${article.slug}`}>
                  {article.title}
                </Link>
              </h2>

              <p className="text-sm text-[#8E929B] leading-relaxed mb-6">
                {article.summary}
              </p>

              <div className="pt-4 border-t border-[#222733] flex items-center justify-between">
                <span className="text-xs font-mono text-[#5E6370] flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  {article.author}
                </span>

                <Link
                  href={`/insights/${article.slug}`}
                  className="text-xs font-mono font-bold uppercase tracking-wider text-[#E1252D] group-hover:text-[#FF333D] flex items-center gap-1.5"
                >
                  <span>Read Paper</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
