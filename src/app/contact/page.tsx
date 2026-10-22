import React, { Suspense } from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Building2, MapPin, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Enterprise PoC Scoping",
  description:
    "Request an enterprise proof-of-concept evaluation, discuss technical integration, or submit an institutional investor enquiry to Eagle Eye Labs.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#14171E] border border-[#2D3343] text-xs font-mono text-[#E1252D]">
              <Mail className="w-3.5 h-3.5" />
              <span>ENGAGEMENT & EVALUATION</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-[#F4F4F6] tracking-tight leading-[1.1]">
              Discuss a scoped PoC.
            </h1>
            <p className="text-base sm:text-lg text-[#8E929B] leading-relaxed">
              Whether you are an enterprise settlement team seeking to evaluate RIFT on high-volume datasets or an institutional fund exploring deep-tech data infrastructure, our team is ready to connect.
            </p>
          </div>

          {/* Contact Form with Suspense Boundary for static generation */}
          <Suspense fallback={<div className="text-center py-12 text-[#8E929B] font-mono text-xs">Loading form...</div>}>
            <ContactForm />
          </Suspense>

          {/* Direct Contact Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] text-center space-y-2">
              <Mail className="w-5 h-5 text-[#E1252D] mx-auto" />
              <div className="text-xs font-mono text-[#5E6370] uppercase">DIRECT EMAIL</div>
              <a
                href="mailto:jay@eagleeyesystems.in"
                className="text-sm font-mono text-[#F4F4F6] hover:text-[#E1252D] transition-colors block font-semibold"
              >
                jay@eagleeyesystems.in
              </a>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] text-center space-y-2">
              <Building2 className="w-5 h-5 text-[#E1252D] mx-auto" />
              <div className="text-xs font-mono text-[#5E6370] uppercase">CORPORATE ENTITY</div>
              <div className="text-xs font-mono text-[#F4F4F6] leading-snug">
                Eagle Eye Research & Deployment Labs Pvt Ltd
              </div>
            </div>

            <div className="p-6 rounded-xl bg-[#0F1115] border border-[#222733] text-center space-y-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto" />
              <div className="text-xs font-mono text-[#5E6370] uppercase">GOVERNANCE</div>
              <div className="text-xs font-mono text-[#F4F4F6]">
                Mutual NDA Standard · Enterprise SLA
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
