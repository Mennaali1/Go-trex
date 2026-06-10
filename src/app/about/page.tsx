"use client";
import { useI18n } from "@/lib/i18n";

const valueIcons = ["⭐", "🤝", "💎", "💡", "🌱"];
const valueKeys = ["quality", "integrity", "customer", "innovation", "sustainability"] as const;

export default function AboutPage() {
  const { t, isRTL } = useI18n();

  return (
    <div className={isRTL ? "rtl" : "ltr"}>
      {/* Header */}
      <section className="pt-32 pb-16 hero-pattern">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">Our Company</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white">{t.nav.about}</h1>
          <div className="w-14 h-0.5 bg-gold-500 mx-auto mt-6" />
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className={isRTL ? "text-right" : ""}>
            <h2 className="font-display text-3xl font-bold text-navy-900 mb-6">{t.whoWeAre.title}</h2>
            <p className="text-navy-800/70 text-lg leading-relaxed">{t.whoWeAre.body}</p>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`bg-navy-800/50 border border-gold-500/20 rounded-2xl p-10 ${isRTL ? "text-right" : ""}`}>
            <div className="w-12 h-0.5 bg-gold-500 rounded-full mb-5" />
            <h3 className="font-display text-2xl font-bold text-white mb-4">{t.mission.title}</h3>
            <p className="text-white/60 leading-relaxed">{t.mission.body}</p>
          </div>
          <div className={`bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20 rounded-2xl p-10 ${isRTL ? "text-right" : ""}`}>
            <div className="w-12 h-0.5 bg-gold-500 rounded-full mb-5" />
            <h3 className="font-display text-2xl font-bold text-white mb-4">{t.vision.title}</h3>
            <p className="text-white/60 leading-relaxed">{t.vision.body}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className={`font-display text-3xl font-bold text-navy-900 mb-12 ${isRTL ? "text-right" : "text-center"}`}>{t.values.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {valueKeys.map((key, i) => (
              <div key={key} className={`text-center group ${isRTL ? "text-right" : ""}`}>
                <div className="w-16 h-16 rounded-2xl bg-navy-900 flex items-center justify-center text-2xl mx-auto mb-4">
                  {valueIcons[i]}
                </div>
                <h4 className="font-semibold text-navy-900 mb-2">{t.values[key].title}</h4>
                <p className="text-navy-800/60 text-sm">{t.values[key].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
