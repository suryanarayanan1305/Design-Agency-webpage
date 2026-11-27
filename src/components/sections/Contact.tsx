"use client";

import React, { useState } from "react";
import ScrollHighlightText from "@/components/ui/ScrollHighlightText";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "Full Web Flagship (Next.js)",
    budget: "$10k - $25k",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Please provide at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email format";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project brief or message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters to explain your requirements";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        projectType: "Full Web Flagship (Next.js)",
        budget: "$10k - $25k",
        message: "",
      });
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-36 px-6 sm:px-8 md:px-12 bg-[var(--bg-page)] border-t border-[var(--border-color)] relative transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header with High-Contrast Section Title */}
        <div className="mb-16 md:mb-20 space-y-4 max-w-4xl">
          <div className="flex items-center gap-3">
            <span className="font-serif-editorial text-sm italic text-[var(--accent-coral)] font-semibold">
              Direct Inquiries
            </span>
            <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-medium">
              / Collaborative Opportunities
            </span>
          </div>

          <ScrollHighlightText
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08]"
            serifItalicIndices={[1, 3]}
          >
            HAVE SOMETHING GOOD IN MIND?
          </ScrollHighlightText>

          <p className="text-base sm:text-lg text-[var(--text-muted)] font-sans leading-relaxed">
            Let&apos;s turn your next big idea into something meaningful. Reach out to discuss projects, architectural consultations, or technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Studio Coordinates */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 sm:p-10 rounded-3xl bg-[var(--card-bg)] border border-[var(--border-color)] text-[var(--text-primary)] space-y-6 shadow-md">
              <span className="text-xs uppercase px-3 py-1 rounded-full bg-[var(--accent-coral)]/15 text-[var(--accent-coral)] border border-[var(--accent-coral)]/25 font-bold tracking-wide">
                Direct Contact Desk
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                Let&apos;s build software that sets the new industry benchmark.
              </h3>
              <p className="text-[var(--text-muted)] text-sm leading-relaxed font-sans">
                Whether you need a complete ground-up digital rebranding, a high-converting web flagship, or an ergonomic Next.js application, our engineering desk is ready.
              </p>

              <div className="pt-6 border-t border-[var(--border-color)] space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-[var(--accent-coral)]/15 text-[var(--accent-coral)]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[var(--text-muted)] font-sans font-medium">Studio Email</span>
                    <a
                      href="mailto:inquiries@formora.design"
                      className="font-semibold text-[var(--text-primary)] hover:text-[var(--accent-coral)] transition-colors"
                    >
                      inquiries@formora.design
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-[var(--accent-coral)]/15 text-[var(--accent-coral)]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[var(--text-muted)] font-sans font-medium">Response SLA</span>
                    <span className="text-[var(--text-primary)] font-medium">Within 24 business hours</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-[var(--accent-coral)]/15 text-[var(--accent-coral)]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-xs text-[var(--text-muted)] font-sans font-medium">Studio Location</span>
                    <span className="text-[var(--text-primary)] font-medium">India &amp; Remote Worldwide</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--border-color)] space-y-2 text-xs text-[var(--text-muted)] font-sans shadow-sm">
              <div className="flex items-center gap-2 font-bold text-[var(--text-primary)]">
                <ShieldCheck className="w-4 h-4 text-[var(--accent-coral)]" />
                Validated Demo Submission
              </div>
              <p>
                Form submissions are handled client-side with rigorous input validation and instant confirmation states, ready for Next.js Server Actions.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form with high contrast inputs */}
          <div className="lg:col-span-7 bg-[var(--card-bg)] p-8 sm:p-12 rounded-3xl border border-[var(--border-color)] shadow-xl relative transition-colors">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 bg-[var(--accent-coral)]/15 text-[var(--accent-coral)] rounded-full flex items-center justify-center mx-auto border border-[var(--accent-coral)]/30">
                  <CheckCircle2 className="w-8 h-8 text-[var(--accent-coral)]" />
                </div>
                <h3 className="font-display text-3xl font-bold text-[var(--text-primary)]">
                  Inquiry Received with Distinction!
                </h3>
                <p className="text-sm text-[var(--text-muted)] max-w-md mx-auto leading-relaxed font-sans">
                  Thank you for reaching out to FORMORA®. Our lead architectural director will review your brief and reply within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-semibold text-xs tracking-wider uppercase hover:bg-[var(--accent-coral)] hover:text-white transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold font-sans">
                      Your Name <span className="text-[var(--accent-coral)]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-[var(--input-bg)] text-[var(--text-primary)] text-sm transition-all focus:outline-none ${
                        errors.name
                          ? "border-red-500 ring-1 ring-red-500"
                          : "border-[var(--border-color)] focus:border-[var(--accent-coral)]"
                      }`}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold font-sans">
                      Work Email <span className="text-[var(--accent-coral)]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-[var(--input-bg)] text-[var(--text-primary)] text-sm transition-all focus:outline-none ${
                        errors.email
                          ? "border-red-500 ring-1 ring-red-500"
                          : "border-[var(--border-color)] focus:border-[var(--accent-coral)]"
                      }`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Project Scope */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold font-sans">
                      Project Scope
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--text-primary)] text-sm transition-all focus:outline-none focus:border-[var(--accent-coral)]"
                    >
                      <option value="Full Web Flagship (Next.js)">Full Web Flagship (Next.js)</option>
                      <option value="UI/UX & Product Design">UI/UX &amp; Product Design</option>
                      <option value="Brand Identity System">Brand Identity System</option>
                      <option value="Creative Tech / 3D Experience">Creative Tech / 3D Experience</option>
                    </select>
                  </div>

                  {/* Budget Allocation */}
                  <div className="space-y-1.5">
                    <label className="block text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold font-sans">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--input-bg)] text-[var(--text-primary)] text-sm transition-all focus:outline-none focus:border-[var(--accent-coral)]"
                    >
                      <option value="< $10k">&lt; $10k (Discovery Sprint)</option>
                      <option value="$10k - $25k">$10k - $25k (Standard Sprint)</option>
                      <option value="$25k - $50k">$25k - $50k (Comprehensive)</option>
                      <option value="$50k+">$50k+ (Enterprise Flagship)</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="block text-xs uppercase tracking-wider text-[var(--text-primary)] font-bold font-sans">
                    Project Vision &amp; Requirements <span className="text-[var(--accent-coral)]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the project goals, target audience, timeline, or key technical requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-[var(--input-bg)] text-[var(--text-primary)] text-sm transition-all focus:outline-none resize-none ${
                      errors.message
                        ? "border-red-500 ring-1 ring-red-500"
                        : "border-[var(--border-color)] focus:border-[var(--accent-coral)]"
                    }`}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1 text-xs text-red-500 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] font-bold text-xs uppercase tracking-widest hover:bg-[var(--accent-coral)] hover:text-white transition-all disabled:opacity-50 shadow-md group cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Validating &amp; Transmitting...</span>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
