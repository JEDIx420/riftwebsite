"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Terminal, 
  BarChart3, 
  ShieldCheck, 
  CreditCard, 
  Building2, 
  Database, 
  Briefcase 
} from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let scrolled = window.scrollY > 20;
    setIsScrolled(scrolled);
    const handleScroll = () => {
      const nowScrolled = window.scrollY > 20;
      if (nowScrolled !== scrolled) {
        scrolled = nowScrolled;
        setIsScrolled(nowScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Product", href: "/product" },
    {
      name: "Solutions",
      href: "/solutions",
      hasDropdown: true,
      items: [
        {
          title: "Payment Settlement",
          desc: "Resolve gateway vs bank statement divergence & chargebacks",
          href: "/solutions/payments",
          icon: CreditCard,
        },
        {
          title: "Core Banking & Ledgers",
          desc: "Deterministic nostros/vostros & multi-system ledger matching",
          href: "/solutions/banking",
          icon: Building2,
        },
        {
          title: "Data Engineering",
          desc: "Verify ETL pipelines, migrations, Parquet & database parity",
          href: "/solutions/data-engineering",
          icon: Database,
        },
        {
          title: "Enterprise Finance",
          desc: "Cross-system ERP reconciliation & audit-ready discrepancy packs",
          href: "/solutions/enterprise",
          icon: Briefcase,
        },
      ],
    },
    { name: "Developers", href: "/developers" },
    { name: "Benchmarks", href: "/benchmarks" },
    { name: "Investors", href: "/investors" },
    { name: "Insights", href: "/insights" },
    { name: "Company", href: "/company" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050608]/90 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-[#0F1218] border border-[#2D3343] flex items-center justify-center group-hover:border-[#E1252D] transition-colors shadow-md shadow-black">
              <span className="font-mono font-black text-xs text-[#E1252D]">R</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-wider text-white flex items-center leading-none">
                RIFT<span className="text-[#E1252D] ml-0.5">.</span>
              </span>
              <span className="text-[9px] tracking-widest text-[#5F6368] font-mono uppercase mt-0.5">
                EAGLE EYE LABS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                        pathname.startsWith("/solutions")
                          ? "text-white font-bold"
                          : "text-[#9AA0A6] hover:text-white"
                      }`}
                      aria-expanded={solutionsOpen}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          solutionsOpen ? "rotate-180 text-[#E1252D]" : "text-[#5F6368]"
                        }`}
                      />
                    </button>

                    {solutionsOpen && (
                      <div className="absolute top-full -left-20 pt-3 w-80 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="bg-[#0A0D14]/95 border border-[rgba(255,255,255,0.1)] rounded-xl p-2.5 shadow-2xl backdrop-blur-2xl">
                          {link.items?.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-[#121622] transition-colors group/item"
                              >
                                <div className="p-2 rounded bg-[#07090F] border border-[#222733] text-[#9AA0A6] group-hover/item:text-[#E1252D] group-hover/item:border-[#E1252D]/40 transition-colors">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-xs font-bold text-white group-hover/item:text-[#E1252D] transition-colors">
                                    {item.title}
                                  </div>
                                  <div className="text-[11px] text-[#5F6368] mt-0.5 line-clamp-1 font-mono">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-mono uppercase tracking-wider transition-colors ${
                    isActive ? "text-[#E1252D] font-bold" : "text-[#9AA0A6] hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/developers"
              className="px-3.5 py-2 rounded-lg text-xs font-mono text-[#9AA0A6] hover:text-white border border-[#222733] hover:border-[#3D465C] transition-colors flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-[#E1252D]" />
              <span>CLI docs</span>
            </Link>
            <Link
              href="/contact?intent=poc"
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] transition-colors shadow-md shadow-[#E1252D]/25"
            >
              Discuss a PoC
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact?intent=poc"
              className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold text-white bg-[#E1252D]"
            >
              PoC
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#9AA0A6] hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#222733] bg-[#050608]/95 backdrop-blur-2xl pb-6 space-y-3 font-mono text-xs">
            <Link href="/product" className="block px-3 py-2 text-[#9AA0A6] hover:text-white uppercase">
              Product
            </Link>
            <div className="px-3 py-1 text-[10px] uppercase text-[#5F6368] tracking-widest font-bold">
              Solutions
            </div>
            <div className="pl-4 space-y-1.5">
              <Link href="/solutions/payments" className="block py-1 text-[#9AA0A6] hover:text-white">
                Payment Settlement
              </Link>
              <Link href="/solutions/banking" className="block py-1 text-[#9AA0A6] hover:text-white">
                Core Banking & Ledgers
              </Link>
              <Link href="/solutions/data-engineering" className="block py-1 text-[#9AA0A6] hover:text-white">
                Data Engineering & ETL
              </Link>
              <Link href="/solutions/enterprise" className="block py-1 text-[#9AA0A6] hover:text-white">
                Enterprise Finance & ERP
              </Link>
            </div>
            <Link href="/developers" className="block px-3 py-2 text-[#9AA0A6] hover:text-white uppercase">
              Developers & CLI
            </Link>
            <Link href="/benchmarks" className="block px-3 py-2 text-[#9AA0A6] hover:text-white uppercase">
              Benchmarks & Hardware
            </Link>
            <Link href="/investors" className="block px-3 py-2 text-[#9AA0A6] hover:text-white uppercase">
              Investor Centre
            </Link>
            <Link href="/insights" className="block px-3 py-2 text-[#9AA0A6] hover:text-white uppercase">
              Technical Insights
            </Link>
            <Link href="/company" className="block px-3 py-2 text-[#9AA0A6] hover:text-white uppercase">
              Company (Eagle Eye)
            </Link>
            <div className="pt-3 border-t border-[#222733]">
              <Link
                href="/contact?intent=poc"
                className="w-full text-center py-2.5 rounded-lg text-xs font-mono font-bold uppercase text-white bg-[#E1252D] block"
              >
                Discuss a PoC
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
