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
    <footer className="bg-[var(--bg-page)] text-[var(--text-primary)] pt-24 pb-0 border-t border-[var(--border-color)] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        {/* Top Callout & Wordmark */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-[var(--border-color)]">
          <div className="lg:col-span-6 space-y-5">
            <span className="font-serif-editorial text-sm italic text-[var(--accent-coral)]">
              Independent Creative Studio
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-tight">
              FORMORA<span className="text-[var(--accent-coral)] font-serif-editorial">®</span>
            </h2>
            <p className="text-[var(--text-muted)] text-base max-w-md leading-relaxed font-sans">
              Shaping iconic digital brands, building responsive modern web flagships, and turning bold ideas into meaningful interactions.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-[var(--text-muted)]">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-lime)] animate-pulse" />
              <span>Studio operating from India &amp; Remote Worldwide</span>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-4 font-semibold font-sans">
                Index
              </p>
              <ul className="space-y-2.5 text-sm">
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
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-4 font-semibold font-sans">
                Channels
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://surya-narayanan-portfolio.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[var(--accent-coral)] hover:underline"
                  >
                    Developer Portfolio <ExternalLink className="w-3.5 h-3.5" />
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
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)] mb-4 font-semibold font-sans">
                Assignment
              </p>
              <div className="text-xs text-[var(--text-muted)] space-y-2 font-sans">
                <p className="font-semibold text-[var(--text-primary)]">Weboin Technologies</p>
                <p>Role: Next.js / React Intern</p>
                <span className="inline-block mt-2 px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 text-[11px] font-mono text-[var(--accent-coral)]">
                  Next.js 16 App Router
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Technical Statement & Back to Top */}
        <div className="pt-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[var(--text-muted)] font-sans">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {currentYear} FORMORA® Digital Studio. All rights reserved.</span>
            <span className="opacity-30 hidden sm:inline">•</span>
            <span className="font-medium tracking-wide">
              ENGINEERED WITH NEXT.JS 16 &amp; REACT 19
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--border-color)] hover:border-[var(--accent-coral)] hover:text-[var(--accent-coral)] transition-colors uppercase tracking-wider text-[11px] font-semibold cursor-pointer"
          >
            Back to Top
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Massive Outlined Brand Wordmark like Philotium (Partially Cropped by Viewport) */}
      <div className="w-full overflow-hidden select-none pointer-events-none leading-none -mb-8 sm:-mb-14 md:-mb-20">
        <h1 className="text-outline-giant font-display text-[19vw] font-black tracking-tight text-center whitespace-nowrap">
          FORMORA
        </h1>
      </div>
    </footer>
  );
}
