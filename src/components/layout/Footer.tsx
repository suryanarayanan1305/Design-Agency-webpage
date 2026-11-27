"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight, ExternalLink } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState<number>(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--bg-page)] text-[var(--text-primary)] pt-20 pb-0 border-t border-[var(--border-color)] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Top Callout & Wordmark */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-[var(--border-color)]">
          <div className="lg:col-span-6 space-y-4">
            <span className="font-serif-editorial text-sm italic text-[var(--accent-coral)] font-semibold">
              Independent Creative Studio
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-tight flex items-center">
              FORMORA
              {/* Refined small superscript trademark symbol aligned correctly */}
              <sup className="text-xs text-[var(--accent-coral)] font-sans font-bold ml-1 -top-4">
                ®
              </sup>
            </h2>
            <p className="text-[var(--text-muted)] text-base max-w-md leading-relaxed font-sans">
              Shaping iconic digital brands, building responsive modern web flagships, and turning bold ideas into meaningful interactions.
            </p>
            <div className="flex items-center gap-2.5 pt-1 text-xs text-[var(--text-muted)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)] animate-pulse" />
              <span>Studio operating from India &amp; Remote Worldwide</span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-4 font-bold font-sans">
                Index
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="#hero" className="hover:text-[var(--accent-coral)] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#studio" className="hover:text-[var(--accent-coral)] transition-colors">
                    The Studio
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-[var(--accent-coral)] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#work" className="hover:text-[var(--accent-coral)] transition-colors">
                    Selected Work
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-[var(--accent-coral)] transition-colors">
                    Inquiries
                  </Link>
                </li>
              </ul>
            </div>

            {/* Channels & Portfolio */}
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-4 font-bold font-sans">
                Channels
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://surya-narayanan-portfolio.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[var(--accent-coral)] hover:underline"
                  >
                    Portfolio ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/suryanarayanan1305/Design-Agency-webpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[var(--accent-coral)] transition-colors"
                  >
                    GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[var(--accent-coral)] transition-colors"
                  >
                    LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Assignment Specs */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-4 font-bold font-sans">
                Assignment
              </p>
              <div className="text-xs text-[var(--text-muted)] space-y-1.5 font-sans">
                <p className="font-bold text-[var(--text-primary)]">Weboin Technologies</p>
                <p>Role: Next.js / React Intern</p>
                <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-[11px] font-mono font-medium text-[var(--accent-coral)]">
                  Next.js 16 App Router
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Technical Statement & Back to Top */}
        <div className="pt-6 pb-10 flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-[var(--text-muted)] font-sans">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {currentYear} FORMORA® Digital Studio. All rights reserved.</span>
            <span className="opacity-30 hidden sm:inline">•</span>
            <span className="font-bold tracking-wide">
              ENGINEERED WITH NEXT.JS 16 &amp; REACT 19
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] hover:border-[var(--accent-coral)] hover:text-[var(--accent-coral)] transition-colors uppercase tracking-wider text-[11px] font-bold cursor-pointer bg-[var(--btn-secondary-bg)]"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Massive Outlined Brand Wordmark fitting the viewport without clipping or horizontal overflow */}
      <div className="w-full overflow-hidden select-none pointer-events-none leading-none -mb-3 sm:-mb-6 md:-mb-8">
        <h1 className="text-outline-giant font-display text-[clamp(2.8rem,14.5vw,13rem)] font-black tracking-tight text-center whitespace-nowrap block w-full px-4">
          FORMORA
        </h1>
      </div>
    </footer>
  );
}
