import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  Building2, 
  ExternalLink, 
  ShieldCheck, 
  Award, 
  MapPin, 
  Mail, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Company & Developer Relationship",
  description:
    "Learn about Eagle Eye Research and Deployment Labs Private Limited, the deep-tech engineering and deployment organization developing RIFT.",
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-[#222733]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#14171E] border border-[#2D3343] text-xs font-mono text-[#E1252D]">
              <Building2 className="w-3.5 h-3.5" />
              <span>CORPORATE PROFILE & RESEARCH LABS</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#F4F4F6] tracking-tight leading-[1.1]">
              Deep-tech systems for critical data operations.
            </h1>
            <p className="text-lg text-[#8E929B] leading-relaxed">
              RIFT is developed, patented, and commercially deployed by{" "}
              <strong className="text-[#F4F4F6]">
                Eagle Eye Research and Deployment Labs Private Limited
              </strong>
              , an enterprise deep-tech research corporation specializing in deterministic data infrastructure, computational reconciliation, and high-performance systems engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Identity & Link */}
      <section className="py-20 bg-[#0B0C10] border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono text-[#E1252D] uppercase font-bold tracking-wider">
                LEGAL & OPERATING ENTITY
              </span>
              <h2 className="text-3xl font-black text-[#F4F4F6]">
                Eagle Eye Research and Deployment Labs Private Limited
              </h2>
              <p className="text-sm text-[#8E929B] leading-relaxed">
                Eagle Eye operates as an independent research laboratory and commercial software vendor. We build low-level, high-assurance software systems for high-stakes enterprise environments including banking, payment clearing, and automated data pipelines.
              </p>
              <p className="text-sm text-[#8E929B] leading-relaxed">
                Our engineering teams focus on formal verification, memory safety in Rust, deterministic algorithms, and low-latency data processing.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="https://eagleeyesystems.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] transition-colors flex items-center gap-2 shadow-lg shadow-[#E1252D]/20"
                >
                  <span>Visit eagleeyesystems.in</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-[#8E929B] hover:text-white bg-[#14171E] border border-[#222733] transition-colors"
                >
                  Contact Leadership
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-xl bg-[#0F1115] border border-[#222733] space-y-4 font-mono text-xs">
              <div className="text-[#5E6370] uppercase pb-2 border-b border-[#222733]">
                Corporate Verification Details
              </div>

              <div className="space-y-3 text-[#8E929B]">
                <div>
                  <span className="text-[#5E6370] block">LEGAL ENTITY:</span>
                  <span className="text-[#F4F4F6] font-semibold">Eagle Eye Research and Deployment Labs Private Limited</span>
                </div>
                <div>
                  <span className="text-[#5E6370] block">OFFICIAL DOMAIN:</span>
                  <a href="https://eagleeyesystems.in" target="_blank" rel="noopener noreferrer" className="text-[#E1252D] underline">
                    https://eagleeyesystems.in
                  </a>
                </div>
                <div>
                  <span className="text-[#5E6370] block">OFFICIAL CONTACT EMAIL:</span>
                  <a href="mailto:jay@eagleeyesystems.in" className="text-[#F4F4F6]">
                    jay@eagleeyesystems.in
                  </a>
                </div>
                <div>
                  <span className="text-[#5E6370] block">OPERATIONAL HUBS:</span>
                  <span className="text-[#F4F4F6]">Bangalore · Kerala · India</span>
                </div>
                <div>
                  <span className="text-[#5E6370] block">PRODUCT FOCUS:</span>
                  <span className="text-[#F4F4F6]">RIFT (Verifiable Reconciliation Infrastructure)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Principles */}
      <section className="py-20 border-b border-[#222733]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-black text-[#F4F4F6]">
              Our Engineering Principles
            </h2>
            <p className="text-sm text-[#8E929B] mt-2">
              How Eagle Eye approaches infrastructure software design:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <div className="text-xs font-mono text-[#E1252D] font-bold">PRINCIPLE 01</div>
              <h3 className="text-lg font-bold text-[#F4F4F6]">Mathematical Determinism</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Software operating on financial ledgers and regulatory datasets must produce identical outputs given identical inputs. We reject probabilistic guesswork in core reconciliation logic.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <div className="text-xs font-mono text-[#E1252D] font-bold">PRINCIPLE 02</div>
              <h3 className="text-lg font-bold text-[#F4F4F6]">Bounded Compute & Memory</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Infrastructure must not fail silently when scaled. We design bounded external memory models that guarantee reliable execution even under severe hardware resource constraints.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] space-y-3">
              <div className="text-xs font-mono text-[#E1252D] font-bold">PRINCIPLE 03</div>
              <h3 className="text-lg font-bold text-[#F4F4F6]">Non-Invasive Modularity</h3>
              <p className="text-xs text-[#8E929B] leading-relaxed">
                Enterprise adoption requires respect for existing environments. Our tools integrate as read-only CLI or containerized jobs without requiring costly database architecture rewrites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B0C10]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-black text-[#F4F4F6]">
            Connect with Eagle Eye Labs
          </h2>
          <p className="text-sm text-[#8E929B]">
            We invite prospective technology partners, research collaborators, and enterprise clients to discuss collaboration opportunities.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] transition-colors inline-block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
