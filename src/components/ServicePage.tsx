"use client";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

interface ServicePageProps {
  title: string;
  arabicTitle: string;
  icon: string;
  description: string;
  features?: string[];
}

export default function ServicePage({ title, arabicTitle, icon, description, features = [] }: ServicePageProps) {
  const { isRTL } = useI18n();

  return (
    <div className={isRTL ? "rtl" : "ltr"}>
      <section className="pt-32 pb-16 hero-pattern">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">{icon}</div>
          <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">Our Services</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">{isRTL ? arabicTitle : title}</h1>
          <div className="w-14 h-0.5 bg-gold-500 mx-auto mt-6" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className={`text-navy-800/70 text-lg leading-relaxed mb-10 ${isRTL ? "text-right" : ""}`}>{description}</p>
          {features.length > 0 && (
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className={`flex items-center gap-3 text-navy-800/70 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                  <span className="w-2 h-2 rounded-full bg-gold-500 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="py-16 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white/60 mb-4">Ready to get started?</p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 font-semibold rounded-lg hover:from-gold-400 hover:to-gold-300 transition-all duration-300 text-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
