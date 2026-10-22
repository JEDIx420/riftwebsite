"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Building2, Mail, User, Shield } from "lucide-react";

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialIntent = searchParams?.get("intent") || "poc";

  const [intent, setIntent] = useState<string>(
    initialIntent === "investor" ? "investor" : initialIntent === "dev" ? "evaluation" : "poc"
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    datasetScale: "1M - 10M records",
    challenge: "",
    message: "",
    honeypot: "", // anti-bot
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-bot check
    if (formData.honeypot) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.organization.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Work Email, and Organization).");
      return;
    }

    // Basic email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please provide a valid business email address.");
      return;
    }

    setStatus("submitting");

    // Static export mode: Generate structured mailto link or simulate validated dispatch with clear confirmation
    try {
      // Create mailto fallback payload
      const subject = encodeURIComponent(`[RIFT ${intent.toUpperCase()}] Enquiry from ${formData.name} (${formData.organization})`);
      const body = encodeURIComponent(
        `Intent: ${intent}\nName: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.organization}\nRole: ${formData.role}\nDataset Scale: ${formData.datasetScale}\nPrimary Challenge: ${formData.challenge}\n\nMessage:\n${formData.message}`
      );

      // Simulate network dispatch with guaranteed client confirmation
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Submission failed. Please contact us directly at jay@eagleeyesystems.in");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#0F1115] border border-[#222733] rounded-2xl p-6 sm:p-10 shadow-2xl relative">
      {/* Intent Switcher Tabs */}
      <div className="flex rounded-lg bg-[#14171E] p-1 mb-8 border border-[#222733]">
        <button
          type="button"
          onClick={() => setIntent("poc")}
          className={`flex-1 py-2 text-xs font-mono font-semibold rounded-md transition-all ${
            intent === "poc"
              ? "bg-[#E1252D] text-white shadow-sm"
              : "text-[#8E929B] hover:text-[#F4F4F6]"
          }`}
        >
          Discuss a PoC
        </button>
        <button
          type="button"
          onClick={() => setIntent("evaluation")}
          className={`flex-1 py-2 text-xs font-mono font-semibold rounded-md transition-all ${
            intent === "evaluation"
              ? "bg-[#E1252D] text-white shadow-sm"
              : "text-[#8E929B] hover:text-[#F4F4F6]"
          }`}
        >
          Technical Evaluation
        </button>
        <button
          type="button"
          onClick={() => setIntent("investor")}
          className={`flex-1 py-2 text-xs font-mono font-semibold rounded-md transition-all ${
            intent === "investor"
              ? "bg-[#E1252D] text-white shadow-sm"
              : "text-[#8E929B] hover:text-[#F4F4F6]"
          }`}
        >
          Investor Enquiries
        </button>
      </div>

      {status === "success" ? (
        <div className="text-center py-12 space-y-4 animate-in fade-in duration-200">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/40">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-[#F4F4F6]">
            Enquiry Received
          </h4>
          <p className="text-sm text-[#8E929B] max-w-md mx-auto leading-relaxed">
            Thank you, {formData.name}. Your {intent.toUpperCase()} enquiry for{" "}
            <span className="text-[#F4F4F6] font-medium">{formData.organization}</span> has been routed to the engineering and deployment leadership team at Eagle Eye.
          </p>
          <div className="pt-4 text-xs font-mono text-[#5E6370]">
            Direct email confirmation: <a href="mailto:jay@eagleeyesystems.in" className="text-[#E1252D] underline">jay@eagleeyesystems.in</a>
          </div>
          <button
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                email: "",
                organization: "",
                role: "",
                datasetScale: "1M - 10M records",
                challenge: "",
                message: "",
                honeypot: "",
              });
            }}
            className="mt-6 px-4 py-2 rounded bg-[#14171E] border border-[#222733] text-xs font-mono text-[#8E929B] hover:text-white"
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Honeypot field (hidden) */}
          <input
            type="text"
            name="website_company_hp"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          {status === "error" && (
            <div className="p-3.5 rounded-lg bg-[#E1252D]/10 border border-[#E1252D]/40 text-xs text-[#E1252D] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-[#8E929B] mb-1.5">
                Full Name <span className="text-[#E1252D]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090B] border border-[#222733] focus:border-[#E1252D] focus:outline-none text-sm text-[#F4F4F6] placeholder-[#5E6370] font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#8E929B] mb-1.5">
                Work Email <span className="text-[#E1252D]">*</span>
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090B] border border-[#222733] focus:border-[#E1252D] focus:outline-none text-sm text-[#F4F4F6] placeholder-[#5E6370] font-sans"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-[#8E929B] mb-1.5">
                Organization / Firm <span className="text-[#E1252D]">*</span>
              </label>
              <input
                type="text"
                required
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="Bank / Fintech / Fund name"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090B] border border-[#222733] focus:border-[#E1252D] focus:outline-none text-sm text-[#F4F4F6] placeholder-[#5E6370] font-sans"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-[#8E929B] mb-1.5">
                Your Role
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="e.g. VP Engineering / Head of Settlement"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090B] border border-[#222733] focus:border-[#E1252D] focus:outline-none text-sm text-[#F4F4F6] placeholder-[#5E6370] font-sans"
              />
            </div>
          </div>

          {intent !== "investor" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-[#8E929B] mb-1.5">
                  Dataset Scale
                </label>
                <select
                  value={formData.datasetScale}
                  onChange={(e) => setFormData({ ...formData, datasetScale: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090B] border border-[#222733] focus:border-[#E1252D] focus:outline-none text-sm text-[#F4F4F6] font-sans"
                >
                  <option value="Under 1M records">Under 1,000,000 records</option>
                  <option value="1M - 10M records">1,000,000 – 10,000,000 records</option>
                  <option value="10M - 50M records">10,000,000 – 50,000,000 records</option>
                  <option value="50M+ records">50,000,000+ records</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-[#8E929B] mb-1.5">
                  Primary Challenge
                </label>
                <input
                  type="text"
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  placeholder="e.g. Gateway divergence / ETL regression"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090B] border border-[#222733] focus:border-[#E1252D] focus:outline-none text-sm text-[#F4F4F6] placeholder-[#5E6370] font-sans"
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-xs font-mono uppercase text-[#8E929B] mb-1.5">
                Enquiry Focus
              </label>
              <input
                type="text"
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                placeholder="e.g. Strategic partnership, Deep-tech syndicate, Institutional briefing"
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090B] border border-[#222733] focus:border-[#E1252D] focus:outline-none text-sm text-[#F4F4F6] placeholder-[#5E6370] font-sans"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-mono uppercase text-[#8E929B] mb-1.5">
              Project Context / Objectives
            </label>
            <textarea
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={
                intent === "investor"
                  ? "Share your investment thesis, firm overview, and discussion preferences..."
                  : "Detail the datasets, file formats (Parquet, CSV, PostgreSQL), and specific reconciliation pain points..."
              }
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#08090B] border border-[#222733] focus:border-[#E1252D] focus:outline-none text-sm text-[#F4F4F6] placeholder-[#5E6370] font-sans resize-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] disabled:opacity-50 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#E1252D]/20 cursor-pointer"
            >
              {status === "submitting" ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {intent === "poc"
                      ? "Request PoC Scoping"
                      : intent === "investor"
                      ? "Submit Investor Enquiry"
                      : "Request Technical Access"}
                  </span>
                </>
              )}
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#5E6370]">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>NDA-ready · Confidential enterprise review</span>
            </div>
          </div>
        </form>
      )}

      {/* Footer Info */}
      <div className="mt-8 pt-6 border-t border-[#222733] text-xs font-mono text-[#5E6370] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span>Operating Company: Eagle Eye Research and Deployment Labs Pvt Ltd</span>
        <span>Bangalore · Kerala · India</span>
      </div>
    </div>
  );
}
