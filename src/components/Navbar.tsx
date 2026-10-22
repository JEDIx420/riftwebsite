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
  Layers, 
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on route change
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
          ? "bg-[#08090B]/90 backdrop-blur-md border-b border-[#222733] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded bg-[#14171E] border border-[#2D3343] flex items-center justify-center group-hover:border-[#E1252D] transition-colors">
              <span className="font-mono font-black text-sm text-[#E1252D]">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-wider text-[#F4F4F6] flex items-center">
                RIFT<span className="text-[#E1252D] ml-0.5 font-bold">.</span>
              </span>
              <span className="text-[10px] tracking-widest text-[#8E929B] font-mono uppercase -mt-1">
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
                      className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                        pathname.startsWith("/solutions")
                          ? "text-[#F4F4F6]"
                          : "text-[#8E929B] hover:text-[#F4F4F6]"
                      }`}
                      aria-expanded={solutionsOpen}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          solutionsOpen ? "rotate-180 text-[#E1252D]" : "text-[#8E929B]"
                        }`}
                      />
                    </button>

                    {/* Solutions Dropdown Menu */}
                    {solutionsOpen && (
                      <div className="absolute top-full -left-20 pt-3 w-80 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="bg-[#0F1115] border border-[#222733] rounded-lg p-2 shadow-2xl backdrop-blur-xl">
                          {link.items?.map((item) => {
                            const IconComponent = item.icon;
                            return (
                              <Link
                                key={item.title}
                                href={item.href}
                                className="flex items-start gap-3 p-2.5 rounded-md hover:bg-[#14171E] transition-colors group/item"
                              >
                                <div className="p-2 rounded bg-[#14171E] border border-[#222733] text-[#8E929B] group-hover/item:text-[#E1252D] group-hover/item:border-[#E1252D]/40 transition-colors">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-[#F4F4F6] group-hover/item:text-white">
                                    {item.title}
                                  </div>
                                  <div className="text-xs text-[#8E929B] mt-0.5 line-clamp-1">
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
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-[#E1252D] font-semibold" : "text-[#8E929B] hover:text-[#F4F4F6]"
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
              className="px-3.5 py-1.5 rounded-md text-xs font-mono font-medium text-[#8E929B] hover:text-[#F4F4F6] border border-[#222733] hover:border-[#3D465C] transition-colors flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-[#E1252D]" />
              <span>CLI docs</span>
            </Link>
            <Link
              href="/contact?intent=poc"
              className="px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider text-white bg-[#E1252D] hover:bg-[#FF333D] transition-colors shadow-sm shadow-[#E1252D]/30"
            >
              Discuss a PoC
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact?intent=poc"
              className="px-3 py-1.5 rounded text-xs font-semibold text-white bg-[#E1252D]"
            >
              PoC
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#8E929B] hover:text-[#F4F4F6] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-[#222733] bg-[#08090B] pb-6 space-y-3 animate-in fade-in duration-200">
            <Link
              href="/product"
              className="block px-3 py-2 text-base font-medium text-[#8E929B] hover:text-white"
            >
              Product
            </Link>
            <div className="px-3 py-1 text-xs font-mono uppercase text-[#5E6370] tracking-wider">
              Solutions
            </div>
            <div className="pl-4 space-y-1">
              <Link
                href="/solutions/payments"
                className="block py-1.5 text-sm text-[#8E929B] hover:text-white"
              >
                Payment Settlement
              </Link>
              <Link
                href="/solutions/banking"
                className="block py-1.5 text-sm text-[#8E929B] hover:text-white"
              >
                Core Banking & Ledgers
              </Link>
              <Link
                href="/solutions/data-engineering"
                className="block py-1.5 text-sm text-[#8E929B] hover:text-white"
              >
                Data Engineering
              </Link>
              <Link
                href="/solutions/enterprise"
                className="block py-1.5 text-sm text-[#8E929B] hover:text-white"
              >
                Enterprise Finance
              </Link>
            </div>
            <Link
              href="/developers"
              className="block px-3 py-2 text-base font-medium text-[#8E929B] hover:text-white"
            >
              Developers & CLI
            </Link>
            <Link
              href="/benchmarks"
              className="block px-3 py-2 text-base font-medium text-[#8E929B] hover:text-white"
            >
              Benchmarks & Hardware
            </Link>
            <Link
              href="/investors"
              className="block px-3 py-2 text-base font-medium text-[#8E929B] hover:text-white"
            >
              Investor Centre
            </Link>
            <Link
              href="/insights"
              className="block px-3 py-2 text-base font-medium text-[#8E929B] hover:text-white"
            >
              Technical Insights
            </Link>
            <Link
              href="/company"
              className="block px-3 py-2 text-base font-medium text-[#8E929B] hover:text-white"
            >
              Company (Eagle Eye)
            </Link>
            <div className="pt-4 border-t border-[#222733] flex flex-col gap-2">
              <Link
                href="/contact"
                className="w-full text-center py-2.5 rounded-md text-sm font-semibold text-white bg-[#E1252D]"
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
