"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Circle } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Studio", href: "#studio" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F2EFE8]/85 backdrop-blur-md border-b border-[#121212]/10 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-[#121212] transition-transform"
        >
          <span className="font-display text-2xl font-black tracking-tight flex items-center">
            FORMORA
            <span className="text-[#FF5733] font-mono text-sm ml-0.5">®</span>
          </span>
          <span className="hidden lg:inline-flex items-center gap-1.5 ml-4 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium tracking-wider uppercase bg-[#121212]/5 text-[#121212]/70 border border-[#121212]/10">
            <Circle className="w-1.5 h-1.5 fill-[#C7F36B] text-[#C7F36B] animate-pulse" />
            Available for Q1 &apos;27
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#121212]/80 hover:text-[#FF5733] transition-colors relative py-1 group font-sans"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF5733] transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#121212] text-[#F2EFE8] text-xs font-semibold uppercase tracking-wider hover:bg-[#FF5733] transition-colors group shadow-sm"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#121212] hover:bg-black/5 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[70px] bg-[#F2EFE8] border-b border-[#121212]/15 px-6 py-8 shadow-2xl transition-all">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-display font-medium text-[#121212] hover:text-[#FF5733] transition-colors flex items-center justify-between border-b border-black/5 pb-3"
              >
                {link.label}
                <ArrowUpRight className="w-5 h-5 opacity-40" />
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-full bg-[#121212] text-[#F2EFE8] font-semibold text-sm uppercase tracking-wider hover:bg-[#FF5733] transition-colors"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
