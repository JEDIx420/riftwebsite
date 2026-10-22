import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service governing the use of the RIFT website and commercial materials.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-[#222733] pb-6">
            <h1 className="text-3xl sm:text-5xl font-black text-[#F4F4F6]">
              Terms of Service
            </h1>
            <p className="text-xs font-mono text-[#5E6370] mt-2">
              Last updated: October 2026 · Eagle Eye Research and Deployment Labs Private Limited
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#8E929B] leading-relaxed">
            <p>
              These Terms of Service govern access to and use of the RIFT website provided by Eagle Eye Research and Deployment Labs Private Limited (“Eagle Eye”).
            </p>

            <h2 className="text-xl font-bold text-[#F4F4F6] pt-4">1. Information Accuracy & Non-Binding Inquiries</h2>
            <p>
              Information on this website describes RIFT technical architecture, empirical benchmark measurements, and proposed commercial use cases. Submitting an inquiry or PoC request does not establish a binding commercial contract or delivery obligation. Binding obligations arise solely through executed master service agreements or commercial licenses.
            </p>

            <h2 className="text-xl font-bold text-[#F4F4F6] pt-4">2. Intellectual Property</h2>
            <p>
              All trademarks, trade names, brand assets, architecture documentation, and software designs related to RIFT are the exclusive intellectual property of Eagle Eye Research and Deployment Labs Private Limited.
            </p>

            <h2 className="text-xl font-bold text-[#F4F4F6] pt-4">3. External Links</h2>
            <p>
              This website contains links to Eagle Eye’s corporate website (https://eagleeyesystems.in) and developer resources. Eagle Eye is not responsible for external third-party content.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
