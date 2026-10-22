import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Calendar, Clock, User, Share2, CheckCircle2 } from "lucide-react";

interface ArticleData {
  title: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  summary: string;
  content: string[];
}

const ARTICLES_MAP: Record<string, ArticleData> = {
  "deterministic-reconciliation-at-scale": {
    title: "Deterministic Reconciliation at Scale: Eliminating Floating-Point Drift and Quadratic Freezes",
    date: "October 18, 2026",
    readTime: "8 min read",
    author: "Systems Architecture Group",
    category: "Architecture & Systems",
    summary:
      "Why standard in-memory diff tools suffer quadratic lockups on unkeyed datasets, and how fixed-point decimal canonical types prevent rounding corruption in multi-million record reconciliations.",
    content: [
      "In high-throughput enterprise architectures, comparing datasets is often treated as an afterthought—implemented as an ad-hoc SQL `FULL OUTER JOIN`, a Python Pandas dataframe diff, or a custom script. At low row counts, these naive approaches appear to work. But as dataset volumes cross millions of records or unkeyed event streams, catastrophic scaling bottlenecks emerge.",
      "### The Quadratic Pitfall of Unkeyed Datasets",
      "When records possess a stable, unique primary key, record matching operates in O(N) or O(N log N) time via hash tables or sorted key alignment. However, in raw banking feeds, staging logs, and event queues, unique primary keys are frequently absent. Naive reconcilers attempt cross-product comparisons, resulting in pathological O(N² log N) complexity.",
      "During our engine consolidation audits on 1M-record unkeyed datasets, traditional multi-pass set comparators suffered total process freezes. In contrast, Rift's unkeyed multiset reconciler transforms multiset equality into a single-pass streaming hash multiset with deterministic collision handling, running in strictly linear time.",
      "### Eliminating IEEE-754 Floating-Point Corruption",
      "Standard floating-point numbers cannot accurately represent base-10 fractions. In financial reconciliation, a transaction of $1,230.10 compared against an engine storing $1,230.0999999999999 triggers spurious delta alerts. These false positives erode operational trust.",
      "Rift solves this by enforcing fixed-point arbitrary precision decimal arithmetic across all numeric comparison paths. Values are parsed directly into typed decimal representations preserving exact scale and precision, guaranteeing that identical monetary amounts evaluate to zero delta regardless of the source database representation.",
      "### Memory Bounding Through External Sort/Merge",
      "When comparing multi-gigabyte Parquet or PostgreSQL tables, loading both datasets into physical RAM inevitably triggers out-of-memory (OOM) killer terminations. Rift's external sort/merge engine splits input batches into ordered chunks on NVMe disk, executing a streaming K-way merge run that strictly bounds sorter allocation to the user's configured budget (e.g. 64 MB).",
      "Empirical kernel accounting demonstrates that peak resident memory (RSS) stabilizes at ~97 MB even when processing 5,000,000 records. For enterprise engineering teams, this guarantees predictable container scheduling inside Kubernetes with zero OOM risk."
    ],
  },
  "why-rust-cli-beats-dashboards-for-etl-verification": {
    title: "Why a Compiled Rust CLI Beats Always-On Dashboards for Data Pipeline Verification",
    date: "October 12, 2026",
    readTime: "6 min read",
    author: "Infrastructure Engineering",
    category: "Data Engineering",
    summary:
      "A completed ETL job is not proof of correct data. Why ephemeral, read-only CLI verifiers with deterministic exit codes integrate into Airflow and Kubernetes pipelines with zero persistent infrastructure overhead.",
    content: [
      "The modern enterprise data stack is saturated with observability platforms. Teams pay hundreds of thousands of dollars annually for real-time dashboards monitoring pipeline runtimes, warehouse query latencies, and row-count metrics. Yet, silent data corruption remains one of the most pervasive failure modes in enterprise engineering.",
      "### The Illusion of Pipeline Success",
      "A completed DAG run in Apache Airflow or Prefect with an exit status of `SUCCESS` merely verifies that the execution worker did not crash and returned exit code 0. It does not verify that the data produced in the destination table matches the source reference.",
      "A schema migration that silently truncates strings, a timezone misconfiguration that shifts timestamps by 5.5 hours, or a faulty join condition that duplicates 0.5% of rows will all report `SUCCESS` in standard orchestrators. Without record-by-record verification, corrupted data propagates downstream to financial reporting and production ML models.",
      "### The Cost of Persistent Dashboard Overhead",
      "Traditional data validation platforms require running persistent cloud services, deploying heavy agent daemons, storing database credentials in external SaaS clouds, and routing raw data across network perimeters. This creates significant security, compliance, and infrastructure overhead.",
      "Rift inverts this model: reconciliation does not require an always-on dashboard or persistent web server. Rift is an ephemeral, read-only CLI binary compiled in native Rust. It can be invoked directly as a step inside an existing Airflow DAG or Kubernetes Job.",
      "### Deterministic Exit Codes and JSON Artifacts",
      "By adhering to standard UNIX conventions, Rift integrates seamlessly into automated workflows:",
      "- **Exit Code 0:** Clean run. Datasets match 100% or observed differences are fully explained. The pipeline safely proceeds.",
      "- **Exit Code 1:** Discrepancies detected. Rift emits a structured `results.json` artifact detailing exact modified, missing, and extra records, triggering an alert or routing to an exception queue.",
      "- **Exit Code 2:** Operational error (missing files, malformed schema, syntax error).",
      "Because Rift operates in read-only mode and outputs machine-readable JSON on stdout, data platform teams achieve complete audit readiness without introducing new permanent infrastructure."
    ],
  },
  "pgds-automated-divergence-investigation": {
    title: "Parameterized Graph Discrepancy Search: Moving Beyond Raw Diff Dumps",
    date: "October 05, 2026",
    readTime: "10 min read",
    author: "Eagle Eye Research Labs",
    category: "Algorithms & Research",
    summary:
      "Raw diff dumps tell you that records differ, but fail to explain why. An inside look at Rift’s PGDS algorithm: discovering candidate invariant rules and verifying them via authoritative witness caching.",
    content: [
      "In enterprise data operations, detecting that two datasets differ is only the first step. The true bottleneck lies in investigation: determining *why* 2,341 records out of 1,000,000 failed to match. Today, this triage process forces senior engineers and settlement analysts to spend days manually running exploratory SQL queries.",
      "### The Limitations of Raw Diff Dumps",
      "Traditional tools like UNIX `diff`, SQL `EXCEPT`, or Git-style delta viewers output massive lists of altered rows. If a payment processor introduces an unexpected $2.50 regulatory fee across 10,000 transactions, a raw diff dump simply reports 10,000 modified records. It provides zero insight into the underlying mathematical pattern.",
      "### Introducing Parameterized Graph Discrepancy Search (PGDS)",
      "Rift introduces PGDS—an automated divergence investigation engine integrated directly into the reconciliation loop. Rather than terminating at discrepancy identification, PGDS analyzes the structural delta between paired records across multiple stages:",
      "1. **Contrastive Classification:** Groups divergent records by categorical attributes (e.g. gateway code, currency, transaction type) to isolate candidate invariant subsets.",
      "2. **Atom Generation:** Formulates candidate arithmetic transformation rules (e.g. `target.amount = source.amount - 2.50` or `target.status = 'COMPLETED' WHERE source.status = 'SETTLED'`).",
      "3. **Authoritative Witness Verification:** Evaluates candidate rules against ground-truth dataset pairs using an isolated D1 verification pass. Candidates that successfully explain divergent subsets are verified and accepted.",
      "4. **Residual Divergence Isolation:** Unexplained records that fail to match any verified invariant are flagged as true anomalous residuals, requiring prioritized human review.",
      "### Operational Impact",
      "In enterprise proof-of-concept tests, PGDS reduces exception investigation time from days to seconds. Operations teams receive a structured explanation packet: 81.2% of differences explained by an identified fee rule, leaving only 439 true network drop anomalies for manual review.",
      "By bridging the gap between exact record comparison and automated triage, PGDS delivers verifiable assurance for modern data-intensive enterprises."
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(ARTICLES_MAP).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES_MAP[slug];
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES_MAP[slug];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#8E929B] hover:text-[#E1252D] transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>

          {/* Header */}
          <div className="space-y-4 border-b border-[#222733] pb-8 mb-10">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#5E6370]">
              <span className="text-[#E1252D] font-bold">{article.category}</span>
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

            <h1 className="text-3xl sm:text-5xl font-black text-[#F4F4F6] tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="flex items-center gap-2 text-xs font-mono text-[#8E929B] pt-2">
              <User className="w-4 h-4 text-[#E1252D]" />
              <span>Authored by {article.author} · Eagle Eye Research Labs</span>
            </div>
          </div>

          {/* Content Body */}
          <div className="space-y-6 text-[#8E929B] text-base leading-relaxed font-sans">
            {article.content.map((paragraph, idx) => {
              if (paragraph.startsWith("### ")) {
                return (
                  <h3
                    key={idx}
                    className="text-2xl font-bold text-[#F4F4F6] pt-6 pb-1 tracking-tight"
                  >
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }

              if (paragraph.startsWith("- **")) {
                return (
                  <div key={idx} className="p-3 rounded-lg bg-[#0F1115] border border-[#222733] font-mono text-xs text-[#F4F4F6]">
                    {paragraph}
                  </div>
                );
              }

              return (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Post Article Call to Action */}
          <div className="mt-14 p-8 rounded-xl bg-[#0F1115] border border-[#222733] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-[#F4F4F6]">
                Evaluate Rift on your reconciliation workflows
              </h4>
              <p className="text-xs text-[#8E929B] mt-1">
                Contact Eagle Eye to evaluate the CLI and PGDS engine under an enterprise PoC.
              </p>
            </div>
            <Link
              href="/contact?intent=poc"
              className="px-5 py-2.5 rounded bg-[#E1252D] hover:bg-[#FF333D] text-xs font-mono font-bold uppercase text-white transition-colors shrink-0"
            >
              Discuss a PoC
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
