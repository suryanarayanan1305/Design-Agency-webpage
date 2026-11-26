"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, Heart, Globe, Terminal, ShieldCheck } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState<number>(2026);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#121212] text-[#F2EFE8] pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Editorial Decorative Grid */}
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Top Callout & Wordmark */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs text-[#FF5733] tracking-widest uppercase font-semibold">
              Independent Creative Studio
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              FORMORA<span className="text-[#FF5733]">®</span>
            </h2>
            <p className="text-white/60 text-base max-w-md leading-relaxed font-sans">
              Shaping iconic digital brands, building responsive modern web flagships, and turning bold ideas into meaningful interactions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C7F36B] animate-pulse" />
              <span className="font-mono text-xs text-white/70 tracking-wider">
                Studio operating from Tokyo, Berlin &amp; Remote Worldwide
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <p className="font-mono text-xs uppercase text-white/40 mb-4 tracking-wider">
                Index
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="#studio" className="hover:text-[#FF5733] transition-colors">
                    The Studio
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-[#FF5733] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#work" className="hover:text-[#FF5733] transition-colors">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-[#FF5733] transition-colors">
                    Inquiries
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Channels */}
            <div>
              <p className="font-mono text-xs uppercase text-white/40 mb-4 tracking-wider">
                Channels
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://github.com/suryanarayanan1305/Design-Agency-webpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#C7F36B] transition-colors"
                  >
                    GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#C7F36B] transition-colors"
                  >
                    LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#C7F36B] transition-colors"
                  >
                    Dribbble <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#C7F36B] transition-colors"
                  >
                    X (Twitter) <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Evaluation Notes */}
            <div className="col-span-2 sm:col-span-1">
              <p className="font-mono text-xs uppercase text-white/40 mb-4 tracking-wider">
                Assignment
              </p>
              <div className="text-xs text-white/60 space-y-2">
                <p className="font-medium text-white/90">Weboin Technologies Pvt Ltd</p>
                <p>Role: React / Next.js Developer Intern</p>
                <span className="inline-block mt-2 px-2.5 py-1 rounded bg-white/10 text-[11px] font-mono text-[#C7F36B]">
                  Next.js 15+ App Router
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {currentYear} FORMORA® Digital Studio. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="font-mono">Engineered with Next.js 16, React 19 &amp; Tailwind CSS</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:border-[#FF5733] hover:text-[#FF5733] transition-colors font-mono uppercase tracking-wider text-[11px]"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
