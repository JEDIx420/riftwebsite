import React from "react";
import Link from "next/link";
import { Terminal, Shield, ExternalLink, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#08090B] border-t border-[#222733] text-[#8E929B] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#222733]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#14171E] border border-[#2D3343] flex items-center justify-center">
                <span className="font-mono font-black text-sm text-[#E1252D]">R</span>
              </div>
              <span className="text-xl font-black tracking-wider text-[#F4F4F6]">
                RIFT<span className="text-[#E1252D]">.</span>
              </span>
            </Link>
            <p className="text-sm text-[#8E929B] leading-relaxed max-w-sm">
              Verifiable Reconciliation Infrastructure. Deterministic exact comparison, PGDS divergence investigation, and machine-readable evidence for mission-critical enterprise data operations.
            </p>
            <div className="pt-2 text-xs font-mono text-[#5E6370] space-y-1">
              <div>ENGINE: Compiled Native Rust (v0.1.1+)</div>
              <div>DEPLOYMENT: Read-only CLI / Container / Job</div>
              <div>ARCHITECTURE: In-memory & External Sort/Merge</div>
            </div>
          </div>

          {/* Solutions Col */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F4F4F6] mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions/payments" className="hover:text-white transition-colors">
                  Payment Settlement
                </Link>
              </li>
              <li>
                <Link href="/solutions/banking" className="hover:text-white transition-colors">
                  Banking & Ledgers
                </Link>
              </li>
              <li>
                <Link href="/solutions/data-engineering" className="hover:text-white transition-colors">
                  Data Engineering & ETL
                </Link>
              </li>
              <li>
                <Link href="/solutions/enterprise" className="hover:text-white transition-colors">
                  Enterprise Finance
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors text-xs font-mono text-[#E1252D]">
                  View all solutions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform & Engineering */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F4F4F6] mb-4">
              Engineering
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/product" className="hover:text-white transition-colors">
                  Product Architecture
                </Link>
              </li>
              <li>
                <Link href="/developers" className="hover:text-white transition-colors">
                  CLI Reference
                </Link>
              </li>
              <li>
                <Link href="/benchmarks" className="hover:text-white transition-colors">
                  Controlled Benchmarks
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Technical Insights
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-white transition-colors">
                  Security Model
                </Link>
              </li>
            </ul>
          </div>

          {/* Organization & Legal */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F4F4F6] mb-4">
              Organization
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/company" className="hover:text-white transition-colors">
                  About Eagle Eye
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:text-white transition-colors">
                  Investor Centre
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Discuss a PoC
                </Link>
              </li>
              <li>
                <Link href="/licensing" className="hover:text-white transition-colors">
                  Licensing Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Corporate Attribution */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#5E6370]">
          <div className="space-y-1">
            <p>
              RIFT is developed by{" "}
              <a
                href="https://eagleeyesystems.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8E929B] hover:text-[#F4F4F6] underline decoration-[#3D465C] underline-offset-4 inline-flex items-center gap-1 font-medium"
              >
                Eagle Eye Research and Deployment Labs Private Limited
                <ArrowUpRight className="w-3 h-3 text-[#E1252D]" />
              </a>
            </p>
            <p>
              © {new Date().getFullYear()} Eagle Eye Research and Deployment Labs Private Limited. All rights reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-[#8E929B]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Deterministic Core
            </span>
            <span className="inline-flex items-center gap-1.5 text-[#8E929B]">
              <Shield className="w-3.5 h-3.5 text-[#E1252D]" />
              Read-Only Integration
            </span>
            <span className="font-mono text-[11px] text-[#5E6370]">
              M4 Tested · Rust Native
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
