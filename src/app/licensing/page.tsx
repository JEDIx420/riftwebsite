import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Scale, CheckCircle2, AlertCircle, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Licensing & Commercial Terms",
  description:
    "Review RIFT's commercial software licensing model, historical v0.1.1 Apache-2.0 grants, and enterprise evaluation terms.",
};

export default function LicensingPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4 border-b border-[#222733] pb-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#14171E] border border-[#2D3343] text-xs font-mono text-[#E1252D]">
              <Scale className="w-3.5 h-3.5" />
              <span>LEGAL TERMS & SOFTWARE DISTRIBUTION</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#F4F4F6] tracking-tight">
              Software Licensing Policy
            </h1>
            <p className="text-base text-[#8E929B] leading-relaxed">
              Clear, transparent governance governing RIFT commercial deployments, enterprise evaluation agreements, and historical releases.
            </p>
          </div>

          <div className="space-y-8 text-sm text-[#8E929B] leading-relaxed">
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <h2 className="text-lg font-bold text-[#F4F4F6]">
                1. Rift Proprietary Commercial Software License
              </h2>
              <p>
                As of October 17, 2026, RIFT is licensed under the <strong>Rift Proprietary Commercial Software License</strong> owned by <strong>Eagle Eye Research and Deployment Labs Private Limited</strong>. Commercial deployment, production execution, and access to private repository builds require an executed commercial license agreement with Eagle Eye.
              </p>
              <p>
                Unauthorized source code redistribution, sublicensing, public mirroring, or commercial exploitation without an executed agreement is strictly prohibited.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <h2 className="text-lg font-bold text-[#F4F4F6]">
                2. Historical Open-Source Releases (v0.1.1)
              </h2>
              <p>
                Prior Apache License 2.0 grants on historical releases (version v0.1.1 and earlier) remain valid for those historical artifacts subject to their original terms. Later engine improvements, runtime components, PGDS algorithmic additions, and console tools are proprietary commercial assets.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <h2 className="text-lg font-bold text-[#F4F4F6]">
                3. Enterprise Evaluation & Proof of Concept (PoC)
              </h2>
              <p>
                Qualified enterprise engineering, finance, and settlement teams may receive time-bounded, non-exclusive evaluation licenses to benchmark RIFT against internal datasets. Evaluation licenses are governed by mutual non-disclosure and evaluation terms.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact?intent=poc"
                  className="text-xs font-mono font-bold text-[#E1252D] hover:underline"
                >
                  Request an enterprise evaluation license →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
