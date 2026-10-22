import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TerminalDemo } from "@/components/TerminalDemo";
import { 
  Terminal, 
  Code2, 
  FileCode, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Copy 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Developer Documentation & CLI Reference",
  description:
    "Comprehensive CLI documentation for RIFT: exact reconciliation syntax, schema JSON structure, exit codes, supported formats, and automation integration.",
};

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#222733]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#14171E] border border-[#2D3343] text-xs font-mono text-[#E1252D]">
              <Terminal className="w-3.5 h-3.5" />
              <span>DEVELOPER GUIDE & CLI REFERENCE</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#F4F4F6] tracking-tight leading-[1.1]">
              CLI-first reconciliation. <br />
              Zero overhead.
            </h1>
            <p className="text-lg text-[#8E929B] leading-relaxed">
              Rift runs as a self-contained, statically compiled binary or containerized job. No background daemons, no database write access, and no permanent application tier required.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Interactive Terminal */}
      <section className="py-16 border-b border-[#222733]/60 bg-[#0B0C10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#F4F4F6]">
              Interactive Command Line Simulator
            </h2>
            <p className="text-xs font-mono text-[#8E929B] mt-1">
              Select commands below to inspect real outputs, exit codes, and JSON payloads.
            </p>
          </div>
          <TerminalDemo />
        </div>
      </section>

      {/* CLI Command Reference */}
      <section className="py-20 border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Command 1: compare */}
          <div className="space-y-6">
            <div className="border-b border-[#222733] pb-4">
              <span className="text-xs font-mono text-[#E1252D] uppercase font-bold tracking-wider">
                CORE COMMAND
              </span>
              <h2 className="text-3xl font-black text-[#F4F4F6] font-mono mt-1">
                rift compare &lt;SOURCE&gt; &lt;TARGET&gt;
              </h2>
              <p className="text-sm text-[#8E929B] mt-1">
                Compare two datasets exactly and surface discrepancies without full-table diff dumps.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3 font-mono text-xs">
                <div className="text-[#F4F4F6] font-bold">Key CLI Flags:</div>
                <ul className="space-y-2 text-[#8E929B]">
                  <li>
                    <code className="text-[#E1252D]">-s, --schema &lt;FILE&gt;</code>: Path to canonical schema JSON file.
                  </li>
                  <li>
                    <code className="text-[#E1252D]">-k, --key &lt;COLUMNS&gt;</code>: Primary key column name(s). Comma-separate for composite keys (e.g. <code className="text-white">--key org_id,user_id</code>).
                  </li>
                  <li>
                    <code className="text-[#E1252D]">--unkeyed</code>: Reconcile datasets as unkeyed multisets (using hash multisets).
                  </li>
                  <li>
                    <code className="text-[#E1252D]">--engine &lt;MODE&gt;</code>: Execution engine (<code className="text-white">in-memory</code> or <code className="text-white">external</code>). Default: <code className="text-white">in-memory</code>.
                  </li>
                  <li>
                    <code className="text-[#E1252D]">--memory-limit-mb &lt;MB&gt;</code>: Sorter buffer allocation budget for external sort (default: 256 MB).
                  </li>
                  <li>
                    <code className="text-[#E1252D]">-o, --output &lt;FORMAT&gt;</code>: Output format (<code className="text-white">text</code> or <code className="text-white">json</code>).
                  </li>
                  <li>
                    <code className="text-[#E1252D]">--non-interactive</code>: Disable interactive prompts (recommended for CI/CD and AI agents).
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-[#08090B] border border-[#222733] font-mono text-xs space-y-3">
                <div className="text-[#F4F4F6] font-bold">Verified Command Examples:</div>
                <div className="p-3 rounded bg-[#0F1115] border border-[#222733] text-[#8E929B] overflow-x-auto space-y-2">
                  <div>
                    <span className="text-[#5E6370]"># Reconcile Parquet against CSV with composite key</span>
                    <br />
                    <span className="text-[#F4F4F6]">rift compare tx.parquet st.csv -s schema.json -k org_id,tx_id</span>
                  </div>
                  <div>
                    <span className="text-[#5E6370]"># Reconcile 5M rows with 64MB memory limit</span>
                    <br />
                    <span className="text-[#F4F4F6]">rift compare a.parquet b.parquet -s schema.json -k id --engine external --memory-limit-mb 64</span>
                  </div>
                  <div>
                    <span className="text-[#5E6370]"># Emit machine-readable JSON for agents/scripts</span>
                    <br />
                    <span className="text-[#F4F4F6]">rift compare a.parquet b.parquet -s s.json -k id -o json --non-interactive</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Command 2: explain */}
          <div className="space-y-6">
            <div className="border-b border-[#222733] pb-4">
              <span className="text-xs font-mono text-[#E1252D] uppercase font-bold tracking-wider">
                INVESTIGATION ENGINE
              </span>
              <h2 className="text-3xl font-black text-[#F4F4F6] font-mono mt-1">
                rift explain &lt;SOURCE&gt; &lt;TARGET&gt;
              </h2>
              <p className="text-sm text-[#8E929B] mt-1">
                Automatically discover candidate RTL explanations from observed dataset differences.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-4">
              <p className="text-sm text-[#8E929B] leading-relaxed">
                When datasets diverge, <code className="text-[#E1252D] font-mono">rift explain</code> initiates a multi-stage Parameterized Graph Discrepancy Search. It discovers candidate invariants across divergent attributes (e.g., fee subtractions, percentage discounts, status transitions) and verifies candidate rules via an authoritative verification pass.
              </p>
              <div className="p-4 rounded-lg bg-[#08090B] border border-[#222733] font-mono text-xs text-[#F4F4F6]">
                $ rift explain source.parquet target.parquet --schema schema.json --key id -o json
              </div>
            </div>
          </div>

          {/* Schema JSON Specification */}
          <div className="space-y-6">
            <div className="border-b border-[#222733] pb-4">
              <span className="text-xs font-mono text-[#E1252D] uppercase font-bold tracking-wider">
                DATA CONTRACT
              </span>
              <h2 className="text-3xl font-black text-[#F4F4F6] font-mono mt-1">
                Canonical Schema JSON Specification
              </h2>
              <p className="text-sm text-[#8E929B] mt-1">
                Rift requires an explicit schema JSON declaring fields and canonical primitive types.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-[#08090B] border border-[#222733] font-mono text-xs overflow-x-auto">
                <div className="text-[#5E6370] pb-2 border-b border-[#222733] mb-3">
                  // schema.json format
                </div>
                <pre className="text-[#F4F4F6] leading-relaxed">
{`{
  "fields": [
    {
      "name": "id",
      "type": "string"
    },
    {
      "name": "amount",
      "type": "decimal",
      "precision": 18,
      "scale": 2
    },
    {
      "name": "account_id",
      "type": "int64"
    },
    {
      "name": "created_at",
      "type": "timestamp"
    },
    {
      "name": "is_settled",
      "type": "boolean"
    }
  ],
  "primary_key": ["id"]
}`}
                </pre>
              </div>

              <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-4">
                <h4 className="text-sm font-mono font-bold text-[#F4F4F6]">
                  Supported Primitive Types
                </h4>
                <ul className="space-y-2 text-xs font-mono text-[#8E929B]">
                  <li>
                    <strong className="text-white">string</strong>: UTF-8 encoded text.
                  </li>
                  <li>
                    <strong className="text-white">int64</strong>: Signed 64-bit integer values.
                  </li>
                  <li>
                    <strong className="text-white">decimal</strong>: Arbitrary precision fixed-point decimal (prevents float rounding drift).
                  </li>
                  <li>
                    <strong className="text-white">timestamp</strong>: ISO 8601 formatted datetime with microsecond precision.
                  </li>
                  <li>
                    <strong className="text-white">boolean</strong>: True / false flags.
                  </li>
                  <li>
                    <strong className="text-white">float</strong>: 64-bit IEEE-754 bit-preserving float.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exit Codes Table */}
          <div className="space-y-6">
            <div className="border-b border-[#222733] pb-4">
              <span className="text-xs font-mono text-[#E1252D] uppercase font-bold tracking-wider">
                CI/CD SPECIFICATION
              </span>
              <h2 className="text-3xl font-black text-[#F4F4F6] font-mono mt-1">
                Deterministic Exit Codes
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-[#222733] text-[#5E6370] uppercase">
                    <th className="py-3 px-3">Exit Code</th>
                    <th className="py-3 px-3">Constant Name</th>
                    <th className="py-3 px-3">Semantics & Behavior</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#222733]/60 text-[#8E929B]">
                  <tr>
                    <td className="py-3 px-3 text-emerald-400 font-bold">0</td>
                    <td className="py-3 px-3 text-[#F4F4F6]">EXIT_OK</td>
                    <td className="py-3 px-3">Datasets match exactly (zero discrepancies detected) or 100% verified explanation.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-amber-400 font-bold">1</td>
                    <td className="py-3 px-3 text-[#F4F4F6]">EXIT_DISCREPANCIES</td>
                    <td className="py-3 px-3">One or more discrepancies found (INSERTED, DELETED, MODIFIED) or partial explanation.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-[#E1252D] font-bold">2</td>
                    <td className="py-3 px-3 text-[#F4F4F6]">EXIT_ERROR</td>
                    <td className="py-3 px-3">Operational or user input error occurred (file not found, schema mismatch, invalid syntax).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing & Access Notice */}
      <section className="py-16 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-xl font-bold text-[#F4F4F6]">
            Licensing & Binary Distribution
          </h3>
          <p className="text-xs text-[#8E929B] leading-relaxed max-w-2xl mx-auto">
            Rift is proprietary commercial software developed and licensed by Eagle Eye Research and Deployment Labs Private Limited. Binaries and registry access are distributed privately under enterprise evaluation or commercial licensing agreements. Prior Apache-2.0 grants on historical releases (v0.1.1 and earlier) remain valid for those historical artifacts.
          </p>
          <div className="pt-2">
            <Link
              href="/contact?intent=evaluation"
              className="px-5 py-2.5 rounded bg-[#E1252D] hover:bg-[#FF333D] text-xs font-mono font-bold uppercase text-white transition-colors inline-block"
            >
              Request Developer Access
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
