"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Moon, Sun, ExternalLink } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const { theme, toggleTheme } = useTheme();

  // Scroll detection for navbar background styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reliable IntersectionObserver section tracking for active navigation highlight
  useEffect(() => {
    const sectionIds = ["hero", "studio", "services", "work", "contact"];

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id === "hero" ? "home" : id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-25% 0px -45% 0px", // Trigger when section is in dominant central area of viewport
      threshold: [0, 0.2, 0.5],
    });

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Also observe top of page for Home
    const handleScrollTop = () => {
      if (window.scrollY < 200) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScrollTop, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);

  const navLinks = [
    { id: "home", label: "Home", href: "#hero" },
    { id: "studio", label: "Studio", href: "#studio" },
    { id: "services", label: "Services", href: "#services" },
    { id: "work", label: "Work", href: "#work" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--header-bg)] backdrop-blur-md border-b border-[var(--border-color)] py-3.5 shadow-sm"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Wordmark (Clean - Location pill removed as requested) */}
        <Link
          href="#hero"
          className="group flex items-center gap-1.5 text-[var(--text-primary)] transition-transform"
        >
          <span className="font-display text-2xl font-black tracking-tight flex items-center">
            FORMORA
            <span className="text-[var(--accent-coral)] font-serif-editorial text-lg ml-0.5">®</span>
          </span>
        </Link>

        {/* Desktop Navigation Links with Active Orange Section Highlighting */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                className={`transition-colors relative py-1 font-sans tracking-tight ${
                  isActive
                    ? "text-[var(--accent-coral)] font-bold"
                    : "text-[var(--text-primary)]/75 hover:text-[var(--accent-coral)]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[var(--accent-coral)] rounded-full transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions Cluster: START A PROJECT (clearly visible) + Portfolio ↗ + Theme Switch */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Start a Project Button with explicit high-contrast colors */}
          <Link
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] text-xs font-bold tracking-wide uppercase hover:bg-[var(--accent-coral)] hover:text-white transition-all shadow-sm group cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Compact Developer Portfolio Button */}
          <a
            href="https://surya-narayanan-portfolio.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full border border-[var(--border-color)] bg-[var(--btn-secondary-bg)] text-[var(--text-primary)] text-xs font-semibold hover:border-[var(--accent-coral)] hover:text-[var(--accent-coral)] transition-all cursor-pointer whitespace-nowrap"
            title="Surya Narayanan Portfolio"
          >
            <span>Portfolio</span>
            <span className="text-[var(--accent-coral)] font-serif-editorial text-sm">↗</span>
          </a>

          {/* Functional Dark Mode Switch */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="p-2 rounded-full border border-[var(--border-color)] hover:border-[var(--accent-coral)] text-[var(--text-primary)] transition-all bg-[var(--btn-secondary-bg)] cursor-pointer flex items-center justify-center"
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4 text-[#171717] transition-transform hover:-rotate-12" />
            ) : (
              <Sun className="w-4 h-4 text-[var(--accent-lime)] transition-transform hover:rotate-45" />
            )}
          </button>
        </div>

        {/* Mobile Nav Cluster */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            className="p-2 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] bg-[var(--btn-secondary-bg)]"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-[var(--accent-lime)]" />}
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
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-display font-medium transition-colors flex items-center justify-between border-b border-[var(--border-color)] pb-3 ${
                    isActive ? "text-[var(--accent-coral)] font-bold" : "text-[var(--text-primary)]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
            <div className="pt-3 flex flex-col gap-2.5">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-bold text-xs tracking-wider uppercase hover:bg-[var(--accent-coral)] hover:text-white transition-colors"
              >
                START A PROJECT
              </Link>
              <a
                href="https://surya-narayanan-portfolio.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-2.5 rounded-full border border-[var(--border-color)] text-[var(--text-primary)] font-semibold text-xs tracking-wider flex items-center justify-center gap-1.5"
              >
                <span>Portfolio</span>
                <span className="text-[var(--accent-coral)] font-serif-editorial">↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
