"use client";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

interface Errors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

export default function ContactForm({ accent = "gold" }: { accent?: "gold" | "brand" }) {
  const { t, isRTL } = useI18n();
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = (): boolean => {
    const errs: Errors = {};
    if (!form.name.trim()) errs.name = t.contact.required;
    if (!form.phone.trim()) errs.phone = t.contact.required;
    if (!form.email.trim()) errs.email = t.contact.required;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t.contact.invalidEmail;
    if (!form.message.trim()) errs.message = t.contact.required;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const isBrand = accent === "brand";
  const focusBorder = isBrand ? "focus:border-brand-400/60" : "focus:border-gold-400/60";
  const buttonClass = isBrand
    ? "w-full bg-gradient-to-r from-brand-600 to-brand-400 text-white font-semibold py-3.5 rounded-lg hover:from-brand-500 hover:to-brand-300 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide"
    : "w-full bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-semibold py-3.5 rounded-lg hover:from-gold-400 hover:to-gold-300 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-sm tracking-wide";

  const inputClass = (field: keyof Errors) =>
    `w-full bg-white/5 border ${errors[field] ? "border-red-500/60" : "border-white/10"} rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none ${focusBorder} focus:bg-white/8 transition-all duration-200`;

  return (
    <form onSubmit={handleSubmit} className={`space-y-5 ${isRTL ? "text-right" : "text-left"}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-white/60 text-xs font-medium uppercase tracking-wider mb-2">{t.contact.name}</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass("name")}
            placeholder={t.contact.name}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-white/60 text-xs font-medium uppercase tracking-wider mb-2">{t.contact.phone}</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={`${inputClass("phone")} ltr-text`}
            placeholder="+20 ..."
            dir="ltr"
          />
          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className="block text-white/60 text-xs font-medium uppercase tracking-wider mb-2">{t.contact.email}</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass("email")}
          placeholder="you@example.com"
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-white/60 text-xs font-medium uppercase tracking-wider mb-2">{t.contact.message}</label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={inputClass("message")}
          placeholder="..."
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className={buttonClass}
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : t.contact.send}
      </button>

      {status === "success" && (
        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400 text-sm text-center">
          ✓ {t.contact.success}
        </div>
      )}
      {status === "error" && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-sm text-center">
          ✗ {t.contact.error}
        </div>
      )}
    </form>
  );
}
