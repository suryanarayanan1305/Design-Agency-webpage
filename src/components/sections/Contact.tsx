"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
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

    // Simulate reliable client-side submission with feedback
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
    }, 900);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 sm:px-8 md:px-12 bg-[#F2EFE8] border-t border-[#121212]/10 relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="04"
          badge="Direct Inquiries"
          title="HAVE SOMETHING GOOD IN MIND?"
          subtitle="Let's turn your next big idea into something meaningful. Reach out to discuss projects, architectural consultations, or technical collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Studio Coordinates & Context */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#121212] text-[#F2EFE8] space-y-6">
              <span className="font-mono text-xs uppercase px-3 py-1 rounded bg-[#FF5733]/20 text-[#FF5733] border border-[#FF5733]/30">
                Direct Contact Desk
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                Let&apos;s build software that sets the new industry benchmark.
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Whether you need a complete ground-up digital rebranding, a high-converting web flagship, or an ergonomic Next.js application, our engineering desk is ready.
              </p>

              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-white/5 text-[#FF5733]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-xs text-white/50">Studio Email</span>
                    <a
                      href="mailto:inquiries@formora-studio.example"
                      className="font-medium hover:text-[#C7F36B] transition-colors"
                    >
                      inquiries@formora.design
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-white/5 text-[#C7F36B]">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-xs text-white/50">Response SLA</span>
                    <span className="text-white/90">Within 24 business hours</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <div className="p-2 rounded-lg bg-white/5 text-white/80">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-mono text-xs text-white/50">Studio HQ</span>
                    <span className="text-white/90">Tokyo / Zurich / Remote</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/80 border border-[#121212]/10 backdrop-blur-sm space-y-2 text-xs text-[#73736C]">
              <div className="flex items-center gap-2 font-mono font-semibold text-[#121212]">
                <ShieldCheck className="w-4 h-4 text-[#FF5733]" />
                Client-Side Demo Validation
              </div>
              <p>
                Form submissions are handled client-side with rigorous input validation and instant confirmation states, ready for Next.js Server Actions or Resend API integration.
              </p>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#121212]/15 shadow-xl relative">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-16 h-16 bg-[#C7F36B]/20 text-[#121212] rounded-full flex items-center justify-center mx-auto border border-[#C7F36B]">
                  <CheckCircle2 className="w-8 h-8 text-[#FF5733]" />
                </div>
                <h3 className="font-display text-3xl font-bold text-[#121212]">
                  Inquiry Received with Distinction!
                </h3>
                <p className="text-sm text-[#73736C] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to FORMORA®. Our lead architectural director will review your brief and reply within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#121212] text-[#F2EFE8] font-semibold text-xs uppercase tracking-wider hover:bg-[#FF5733] transition-colors"
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
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#121212] font-semibold">
                      Your Name <span className="text-[#FF5733]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-[#F2EFE8]/50 focus:bg-white text-sm transition-all focus:outline-none ${
                        errors.name
                          ? "border-red-500 ring-1 ring-red-500"
                          : "border-[#121212]/15 focus:border-[#121212] focus:ring-1 focus:ring-[#121212]"
                      }`}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1 font-mono text-xs text-red-600 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#121212] font-semibold">
                      Work Email <span className="text-[#FF5733]">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-xl border bg-[#F2EFE8]/50 focus:bg-white text-sm transition-all focus:outline-none ${
                        errors.email
                          ? "border-red-500 ring-1 ring-red-500"
                          : "border-[#121212]/15 focus:border-[#121212] focus:ring-1 focus:ring-[#121212]"
                      }`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1 font-mono text-xs text-red-600 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#121212] font-semibold">
                      Project Scope
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#121212]/15 bg-[#F2EFE8]/50 focus:bg-white text-sm transition-all focus:outline-none focus:border-[#121212]"
                    >
                      <option value="Full Web Flagship (Next.js)">Full Web Flagship (Next.js)</option>
                      <option value="UI/UX & Product Design">UI/UX &amp; Product Design</option>
                      <option value="Brand Identity System">Brand Identity System</option>
                      <option value="Creative Tech / 3D Experience">Creative Tech / 3D Experience</option>
                    </select>
                  </div>

                  {/* Budget Allocation */}
                  <div className="space-y-1.5">
                    <label className="block font-mono text-xs uppercase tracking-wider text-[#121212] font-semibold">
                      Estimated Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#121212]/15 bg-[#F2EFE8]/50 focus:bg-white text-sm transition-all focus:outline-none focus:border-[#121212]"
                    >
                      <option value="< $10k">&lt; $10k (Discovery)</option>
                      <option value="$10k - $25k">$10k - $25k (Standard Sprint)</option>
                      <option value="$25k - $50k">$25k - $50k (Comprehensive)</option>
                      <option value="$50k+">$50k+ (Enterprise Flagship)</option>
                    </select>
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-1.5">
                  <label className="block font-mono text-xs uppercase tracking-wider text-[#121212] font-semibold">
                    Project Vision &amp; Requirements <span className="text-[#FF5733]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the project goals, target audience, timeline, or key technical requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-xl border bg-[#F2EFE8]/50 focus:bg-white text-sm transition-all focus:outline-none resize-none ${
                      errors.message
                        ? "border-red-500 ring-1 ring-red-500"
                        : "border-[#121212]/15 focus:border-[#121212] focus:ring-1 focus:ring-[#121212]"
                    }`}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1 font-mono text-xs text-red-600 mt-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#121212] text-[#F2EFE8] font-bold text-xs uppercase tracking-widest hover:bg-[#FF5733] transition-all disabled:opacity-50 shadow-md group cursor-pointer"
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
