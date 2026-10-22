"use client";

import React, { useState } from "react";
import { Database, ShieldCheck, Cpu, FileCheck, ArrowRight, Layers, Lock, CheckCircle2 } from "lucide-react";

interface ArchNode {
  id: string;
  category: "SOURCES" | "ENGINE" | "EVIDENCE" | "OPERATIONS";
  title: string;
  subtitle: string;
  description: string;
  protocols: string[];
  securityNote: string;
}

const NODES: ArchNode[] = [
  {
    id: "src",
    category: "SOURCES",
    title: "1. Enterprise Data Sources",
    subtitle: "Read-Only Snapshots & Exports",
    description: "POS gateways, settlement batches, core banking transactions, and staging tables. Ingested via native Parquet, JSONL, CSV, TSV, or PostgreSQL table/view readers.",
    protocols: ["Arrow RecordBatches", "Parquet RowGroups", "Postgres Cursor (read-only)"],
    securityNote: "Zero write permissions required; no database schema alteration.",
  },
  {
    id: "engine",
    category: "ENGINE",
    title: "2. RIFT Execution Core",
    subtitle: "Compiled Rust Reconciler",
    description: "Runs as an ephemeral container, scheduled job, or CLI binary. Executes dual-engine reconciliation (in-memory or external sort/merge) within user-configured sorter budgets.",
    protocols: ["External Sort / K-Way Merge", "Exact Decimal Normalization", "PGDS Invariant Search"],
    securityNote: "Runs locally within customer VPC; zero data exfiltration.",
  },
  {
    id: "evidence",
    category: "EVIDENCE",
    title: "3. Structured Evidence Packets",
    subtitle: "Deterministic JSON Outputs",
    description: "Generates cryptographic SHA-256 execution hashes, exact discrepancy classifications (Modified, Missing, Extra), and verified PGDS candidate explanations.",
    protocols: ["results.json", "explanation.json", "Audit Trail Envelopes"],
    securityNote: "Tamper-evident mathematical proof for SOX & regulatory compliance.",
  },
  {
    id: "ops",
    category: "OPERATIONS",
    title: "4. Human Review & Automation",
    subtitle: "Settlement Desk & Workflows",
    description: "Settlement desks, dispute resolution queues, and SIEM monitoring pipelines ingest structured results directly to resolve exceptions in seconds.",
    protocols: ["Airflow / Dagster Hooks", "Webhook Queues", "Dispute Resolution Desks"],
    securityNote: "Reduces exception triage research overhead from days to minutes.",
  },
];

export function EnterpriseArchitectureMap() {
  const [selectedNode, setSelectedNode] = useState<ArchNode>(NODES[1]);

  return (
    <section className="py-24 lg:py-36 bg-[#050608] border-b border-[#222733]/60 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/3 w-[700px] h-[350px] bg-[#E1252D]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#E1252D]" />
            <span className="font-mono text-xs text-[#E1252D] font-bold tracking-widest uppercase">
              CHAPTER 06 · ENTERPRISE INTEGRATION
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05]">
            Non-Invasive Architecture<span className="text-[#E1252D]">.</span> Zero Disruption<span className="text-[#E1252D]">.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9AA0A6] leading-relaxed">
            Rift operates as a focused read-only analysis layer designed to complement existing settlement systems and data lakes without requiring architectural overhauls.
          </p>
        </div>

        {/* 4-Node Interactive Architecture Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {NODES.map((node) => {
            const isSelected = selectedNode.id === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all card-3d ${
                  isSelected
                    ? "bg-[#121622] border-[#E1252D] shadow-xl shadow-[#E1252D]/15 scale-[1.02]"
                    : "bg-[#090C12]/80 border-[#222733] hover:border-[#3D465C] opacity-80 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#5F6368]">
                    {node.category}
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#E1252D] animate-ping" />}
                </div>

                <h3 className="font-display font-bold text-lg text-white uppercase tracking-tight mb-1">
                  {node.title}
                </h3>
                <div className="text-xs font-mono text-[#E1252D] mb-3">
                  {node.subtitle}
                </div>
                <p className="text-xs text-[#9AA0A6] leading-relaxed line-clamp-3">
                  {node.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Selected Node Detailed Blueprint */}
        <div className="glass-panel-glow rounded-2xl p-6 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(255,255,255,0.08)] pb-5">
            <div>
              <span className="text-xs font-mono text-[#E1252D] font-bold uppercase tracking-widest">
                INSPECTING TOPOLOGY COMPONENT: {selectedNode.category}
              </span>
              <h4 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-1">
                {selectedNode.title} — {selectedNode.subtitle}
              </h4>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4" />
              <span>{selectedNode.securityNote}</span>
            </div>
          </div>

          <p className="text-sm text-[#9AA0A6] leading-relaxed max-w-4xl">
            {selectedNode.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {selectedNode.protocols.map((proto, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-[#07090F] border border-[#222733] font-mono text-xs text-white flex items-center gap-2"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#E1252D]" />
                <span>{proto}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
