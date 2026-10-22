import type { Metadata } from "next";
import { Barlow_Condensed, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rift.lt"),
  title: {
    default: "RIFT — Verifiable Reconciliation Infrastructure",
    template: "%s | RIFT",
  },
  description:
    "Complex data. Clear answers. Reconcile complex enterprise datasets, investigate discrepancies, and produce verifiable evidence with a lightweight, high-performance Rust engine.",
  keywords: [
    "Enterprise data reconciliation",
    "Automated reconciliation engine",
    "Transaction reconciliation",
    "Payment settlement reconciliation",
    "Banking reconciliation software",
    "Financial data reconciliation",
    "Dataset comparison",
    "Data pipeline reconciliation",
    "Deterministic data comparison",
    "Reconciliation CLI",
    "Evidence-based discrepancy investigation",
    "Rust reconciliation",
  ],
  authors: [{ name: "Eagle Eye Research and Deployment Labs Private Limited", url: "https://eagleeyesystems.in" }],
  creator: "Eagle Eye Research and Deployment Labs Private Limited",
  publisher: "Eagle Eye Research and Deployment Labs Private Limited",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rift.lt",
    siteName: "RIFT",
    title: "RIFT — Verifiable Reconciliation Infrastructure",
    description:
      "High-performance, deterministic, evidence-oriented reconciliation and data investigation infrastructure for enterprise systems.",
    images: [
      {
        url: "/assets/pdf-extracted/page1_1.png",
        width: 1672,
        height: 941,
        alt: "RIFT Verifiable Reconciliation Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RIFT — Verifiable Reconciliation Infrastructure",
    description:
      "High-performance, deterministic, evidence-oriented reconciliation and data investigation infrastructure for enterprise systems.",
    images: ["/assets/pdf-extracted/page1_1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#050608" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${inter.variable} ${barlowCondensed.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#050608] text-[#F8F9FA] selection:bg-[#E1252D] selection:text-white relative min-h-screen`}
      >
        {/* Subtle persistent analog grain overlay */}
        <div className="fixed inset-0 pointer-events-none z-40 noise-overlay opacity-40" />
        {children}
      </body>
    </html>
  );
}
