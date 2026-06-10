"use client";
import { useI18n } from "@/lib/i18n";
import Logo from "@/components/Logo";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  const { t, isRTL } = useI18n();

  return (
    <div className={isRTL ? "rtl" : "ltr"}>
      <section className="pt-32 pb-16 hero-pattern-brand">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Logo size="lg" />
          </div>
          <p className="text-brand-300 text-xs font-semibold uppercase tracking-widest mb-3">
            {t.contact.sectionLabel}
          </p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white">{t.contact.title}</h1>
          <p className="text-white/50 mt-4 text-lg">{t.contact.subtitle}</p>
          <div className="w-14 h-0.5 bg-gradient-to-r from-brand-600 to-brand-400 mx-auto mt-6" />
        </div>
      </section>

      <ContactSection accent="brand" showInfoTitle />

      <section className="bg-navy-950 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-brand-400/20" style={{ height: "400px" }}>
            <iframe
              src="https://maps.app.goo.gl/ZavhrDCmqqsig5Do7"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.6)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="GO TREX Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
