import React from "react";

interface SectionHeadingProps {
  number: string;
  badge?: string;
  title: string;
  subtitle?: string;
  isDark?: boolean;
}

export default function SectionHeading({
  number,
  badge,
  title,
  subtitle,
  isDark = false,
}: SectionHeadingProps) {
  return (
    <div className="space-y-4 mb-16 md:mb-20">
      <div className="flex items-center gap-3">
        <span
          className={`font-mono text-xs font-semibold px-2.5 py-1 rounded-full ${
            isDark
              ? "bg-white/10 text-[#C7F36B] border border-white/10"
              : "bg-[#121212]/5 text-[#FF5733] border border-[#121212]/10"
          }`}
        >
          [{number}]
        </span>
        {badge && (
          <span
            className={`font-mono text-xs uppercase tracking-widest ${
              isDark ? "text-white/60" : "text-[#73736C]"
            }`}
          >
            {badge}
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
        <h2
          className={`lg:col-span-8 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] ${
            isDark ? "text-white" : "text-[#121212]"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`lg:col-span-4 text-base sm:text-lg leading-relaxed font-sans ${
              isDark ? "text-white/70" : "text-[#73736C]"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
