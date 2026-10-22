import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Database, ArrowRight, CheckCircle2, Cpu, Zap, GitBranch } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Engineering & Pipeline Verification",
  description:
    "Verify ETL pipelines, database migrations, and Parquet data lakes before corrupted or incomplete records propagate downstream.",
};

export default function DataEngineeringSolutionPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#222733]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#14171E] border border-[#2D3343] text-xs font-mono text-[#E1252D]">
              <span>SOLUTIONS · DATA PLATFORMS & MLOPS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#F4F4F6] tracking-tight leading-[1.1]">
              A finished pipeline is not proof of correct data.
            </h1>
            <p className="text-lg text-[#8E929B] leading-relaxed">
              Automated data workflows often complete with status <code className="text-emerald-400 font-mono">SUCCESS</code> while silently dropping records, truncating strings, or corrupting key metrics. Rift introduces independent, deterministic data verification for modern engineering stacks.
            </p>
          </div>
        </div>
      </section>

      {/* 3 Pipeline Verification Challenges */}
      <section className="py-20 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl font-black text-[#F4F4F6]">
              Silent ETL & Warehouse Regressions
            </h2>
            <p className="mt-3 text-base text-[#8E929B]">
              Standard data observability monitors job runtimes, row counts, and CPU spikes. But row-count equality does not verify that row contents match the agreed reference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <span className="text-xs font-mono text-[#E1252D] font-bold uppercase">SCENARIO 01</span>
              <h3 className="text-lg font-bold text-[#F4F4F6]">Database & Warehouse Migrations</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Migrating from PostgreSQL or Oracle to modern cloud data lakes? Rift compares live source tables against target Parquet files record-by-record, verifying 100% data fidelity before switching live queries.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <span className="text-xs font-mono text-[#E1252D] font-bold uppercase">SCENARIO 02</span>
              <h3 className="text-lg font-bold text-[#F4F4F6]">PySpark / dbt Model Transformation Drift</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Refactoring dbt SQL transformations or updating PySpark jobs? Run Rift as a validation step in CI/CD to compare staging outputs against production snapshots. Catch logic regressions before merge.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <span className="text-xs font-mono text-[#E1252D] font-bold uppercase">SCENARIO 03</span>
              <h3 className="text-lg font-bold text-[#F4F4F6]">Unkeyed Staging Table Reconciliation</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Raw event streams frequently lack unique primary keys. Rift’s <code className="text-[#E1252D] font-mono">--unkeyed</code> multiset reconciler uses optimized hashing to verify multiset equality in $O(N)$ time without $O(N^2)$ quadratic freezes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CI/CD & Airflow Integration */}
      <section className="py-20 border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono text-[#E1252D] uppercase font-bold tracking-wider">
                ORCHESTRATION ARCHITECTURE
              </span>
              <h2 className="text-3xl font-black text-[#F4F4F6]">
                Native CLI Automation
              </h2>
              <p className="text-sm text-[#8E929B] leading-relaxed">
                Rift requires no daemon, no persistent control plane, and no database credentials stored in external SaaS clouds. Invoke it directly as a step inside Apache Airflow, Prefect, GitHub Actions, or Kubernetes Jobs.
              </p>
              <div className="space-y-2.5 font-mono text-xs text-[#8E929B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Exit Code 0: Exact match, pipeline proceeds</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Exit Code 1: Discrepancies surfaced, job alerts team</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Exit Code 2: Schema or operational error</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 p-6 rounded-xl bg-[#0F1115] border border-[#222733] font-mono text-xs">
              <div className="text-[#5E6370] pb-2 border-b border-[#222733] mb-3">
                # Sample Airflow / Bash Verification Step
              </div>
              <pre className="text-[#F4F4F6] overflow-x-auto leading-relaxed">
{`# Execute read-only verification before publishing table
rift compare \\
  s3://lake/raw/staging_20261022.parquet \\
  postgres://prod_db/curated_events.json \\
  --schema /opt/rift/schema.json \\
  --key event_id,timestamp \\
  --engine external \\
  --memory-limit-mb 64 \\
  --output json > /tmp/reconcile_report.json

# Exit code 0 ensures clean propagation
if [ $? -eq 0 ]; then
  echo "Data verification passed. Publishing to warehouse."
fi`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B0C10]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-black text-[#F4F4F6]">
            Integrate verification into your data platform
          </h2>
          <p className="text-sm text-[#8E929B]">
            Benchmark Rift on your largest Parquet and database extracts under an engineering evaluation agreement.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/contact?intent=evaluation"
              className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] transition-colors inline-block"
            >
              Request Evaluation Access
            </Link>
            <Link
              href="/developers"
              className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-[#8E929B] hover:text-white bg-[#14171E] border border-[#222733] transition-colors inline-block"
            >
              Review CLI Specs
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
