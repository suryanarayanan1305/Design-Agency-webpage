"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Circle, Moon, Sun, ExternalLink } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "Studio", href: "#studio" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--header-bg)] backdrop-blur-md border-b border-[var(--border-color)] py-3.5 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-[var(--text-primary)] transition-transform"
        >
          <span className="font-display text-2xl font-extrabold tracking-tight flex items-center">
            FORMORA
            <span className="text-[var(--accent-coral)] font-serif-editorial text-xl ml-0.5">®</span>
          </span>
          <span className="hidden xl:inline-flex items-center gap-1.5 ml-4 px-2.5 py-0.5 rounded-full text-[11px] font-sans font-medium tracking-wide uppercase bg-black/5 dark:bg-white/10 text-[var(--text-muted)] border border-[var(--border-color)]">
            <Circle className="w-1.5 h-1.5 fill-[var(--accent-lime)] text-[var(--accent-lime)] animate-pulse" />
            Studio operating from India &amp; Remote Worldwide
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[var(--text-primary)]/80 hover:text-[var(--accent-coral)] transition-colors relative py-1 group font-sans tracking-tight"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--accent-coral)] transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Actions Cluster: CTA + Developer Portfolio + Dark Mode Switch */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Start a Project CTA */}
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] text-xs font-semibold tracking-wide hover:bg-[var(--accent-coral)] hover:text-white transition-all group shadow-sm"
          >
            Start a Project
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Developer Portfolio Link */}
          <a
            href="https://surya-narayanan-portfolio.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] text-xs font-medium hover:border-[var(--accent-coral)] hover:text-[var(--accent-coral)] transition-all bg-black/5 dark:bg-white/5"
          >
            Developer Portfolio
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>

          {/* Dark Mode Switch Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="p-2 rounded-full border border-[var(--border-color)] hover:border-[var(--accent-coral)] text-[var(--text-primary)] transition-all bg-black/5 dark:bg-white/5 cursor-pointer"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-[#121212] transition-transform hover:-rotate-12" />
            ) : (
              <Sun className="w-4 h-4 text-[#C7F36B] transition-transform hover:rotate-45" />
            )}
          </button>
        </div>

        {/* Mobile Menu & Theme Toggle Cluster */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="p-2 rounded-full border border-[var(--border-color)] text-[var(--text-primary)]"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[#C7F36B]" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-[var(--bg-page)] border-b border-[var(--border-color)] px-6 py-8 shadow-2xl transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-medium text-[var(--text-primary)] hover:text-[var(--accent-coral)] transition-colors flex items-center justify-between border-b border-[var(--border-color)] pb-3"
              >
                {link.label}
                <ArrowUpRight className="w-5 h-5 opacity-40" />
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] font-semibold text-xs tracking-wider uppercase hover:bg-[var(--accent-coral)] hover:text-white transition-colors"
              >
                Start a Project
              </Link>
              <a
                href="https://surya-narayanan-portfolio.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-xs tracking-wider flex items-center justify-center gap-1.5"
              >
                Developer Portfolio
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
