import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Lock, FileCode, CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Security Model & Enterprise Architecture",
  description:
    "Review RIFT's security posture: read-only access guarantees, zero cloud exfiltration, memory safety in Rust, and cryptographic auditability.",
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4 border-b border-[#222733] pb-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#14171E] border border-[#2D3343] text-xs font-mono text-emerald-400">
              <Shield className="w-3.5 h-3.5" />
              <span>SECURITY ARCHITECTURE & DATA INTEGRITY</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#F4F4F6] tracking-tight">
              Enterprise Security Model
            </h1>
            <p className="text-base text-[#8E929B] leading-relaxed">
              Designed from first principles to operate securely within strictly regulated enterprise and banking environments.
            </p>
          </div>

          <div className="space-y-8 text-sm text-[#8E929B] leading-relaxed">
            {/* Section 1 */}
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <h2 className="text-lg font-bold text-[#F4F4F6] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                1. Read-Only Data Integration
              </h2>
              <p>
                Rift never requires write access to production database tables, core banking systems, or financial transaction logs. All database readers (e.g. PostgreSQL) execute strictly read-only cursor queries or consume pre-exported snapshots (Parquet, CSV, JSONL). Rift has no mechanism to mutate, update, or delete customer source data.
              </p>
            </div>

            {/* Section 2 */}
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <h2 className="text-lg font-bold text-[#F4F4F6] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                2. Zero Cloud Exfiltration & Local Execution
              </h2>
              <p>
                Rift executes entirely within the customer’s controlled infrastructure—whether on a bare-metal server, private cloud container, or air-gapped staging host. No customer dataset records, column values, or business identifiers are ever transmitted to Eagle Eye servers or third-party cloud APIs.
              </p>
            </div>

            {/* Section 3 */}
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <h2 className="text-lg font-bold text-[#F4F4F6] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                3. Memory Safety & Static Compilation
              </h2>
              <p>
                Rift is authored in 100% safe, compiled Rust without garbage collection overhead. This completely eliminates common memory corruption classes such as buffer overflows, use-after-free vulnerabilities, and uninitialized memory access that plague legacy C/C++ data engines.
              </p>
            </div>

            {/* Section 4 */}
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <h2 className="text-lg font-bold text-[#F4F4F6] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                4. Cryptographic Hash Fingerprinting
              </h2>
              <p>
                Every reconciliation execution produces SHA-256 integrity fingerprints over input data schemas, engine policies, and generated output discrepancy sets. This ensures that reconciliation evidence is auditable and tamper-evident for internal risk review and external regulatory compliance.
              </p>
            </div>

            {/* Vulnerability Reporting */}
            <div className="p-6 rounded-xl bg-[#08090B] border border-[#222733] space-y-2 font-mono text-xs">
              <h3 className="text-[#F4F4F6] font-bold">Vulnerability Disclosure & Security Contact:</h3>
              <p className="text-[#8E929B]">
                To report potential vulnerabilities or discuss security compliance questions, please contact our security team directly at:{" "}
                <a href="mailto:jay@eagleeyesystems.in" className="text-[#E1252D] underline">
                  jay@eagleeyesystems.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
