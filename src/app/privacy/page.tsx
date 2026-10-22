import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for RIFT and Eagle Eye Research and Deployment Labs Private Limited.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#08090B] text-[#F4F4F6] selection:bg-[#E1252D] selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="border-b border-[#222733] pb-6">
            <h1 className="text-3xl sm:text-5xl font-black text-[#F4F4F6]">
              Privacy Policy
            </h1>
            <p className="text-xs font-mono text-[#5E6370] mt-2">
              Last updated: October 2026 · Eagle Eye Research and Deployment Labs Private Limited
            </p>
          </div>

          <div className="space-y-6 text-sm text-[#8E929B] leading-relaxed">
            <p>
              Eagle Eye Research and Deployment Labs Private Limited (“Eagle Eye”, “we”, “our”) respects your privacy. This policy explains how we handle information gathered through the RIFT website and commercial enquiries.
            </p>

            <h2 className="text-xl font-bold text-[#F4F4F6] pt-4">1. Website Inquiries & Contact Information</h2>
            <p>
              When you submit a Proof-of-Concept scoping request, technical evaluation form, or investor enquiry, we collect your name, work email address, organization name, role, and optional project notes. This information is used strictly to respond to your inquiry and evaluate mutual business alignment.
            </p>

            <h2 className="text-xl font-bold text-[#F4F4F6] pt-4">2. Software Execution & Customer Datasets</h2>
            <p>
              RIFT is distributed as software that runs directly on your own infrastructure or cloud instances. RIFT does NOT transmit, harvest, or store customer dataset rows, column values, financial records, or credentials on Eagle Eye systems. Your datasets remain entirely under your governance.
            </p>

            <h2 className="text-xl font-bold text-[#F4F4F6] pt-4">3. Web Analytics</h2>
            <p>
              We utilize privacy-respecting analytics (such as Cloudflare Web Analytics) which do not collect personal data, do not use client tracking cookies, and do not track visitors across external web domains.
            </p>

            <h2 className="text-xl font-bold text-[#F4F4F6] pt-4">4. Contacting Us</h2>
            <p>
              For privacy requests or inquiries, email: <a href="mailto:jay@eagleeyesystems.in" className="text-[#E1252D] underline">jay@eagleeyesystems.in</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
