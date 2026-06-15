"use client";
import { useI18n } from "@/lib/i18n";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import WhoWeAreCarousel from "@/components/WhoWeAreCarousel";


const valueIcons = ["⭐", "🤝", "💎", "💡", "🌱"];
const valueKeys = ["quality", "integrity", "customer", "innovation", "sustainability"] as const;

export default function Home() {
  const { t, isRTL } = useI18n();

  return (
    <div className={isRTL ? "rtl" : "ltr"}>
      {/* ── HERO ── */}
      
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-pattern">
  {/* Decorative circles */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
    <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl" />
    {/* Grid lines */}
    <div className="absolute inset-0 opacity-5"
      style={{ backgroundImage: "linear-gradient(rgba(59,130,246,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(59,130,246,0.3) 1px,transparent 1px)", backgroundSize: "80px 80px" }}
    />
  </div>
  <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
    {/* Badge */}
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs tracking-widest uppercase mb-8 animate-fade-in">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
      Egypt's Premier Food Export Company
    </div>
    <h1 className="w-full font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none mb-4 animate-fade-up">
      {isRTL ? t.hero.company : (
        <>
          GO TREX<br />
        </>
      )}
    </h1>

          <p className="text-xl sm:text-2xl text-white/60 tracking-[0.2em] uppercase font-light mt-6 mb-12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            {t.hero.slogan}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center animate-fade-up ${isRTL ? "sm:flex-row-reverse" : ""}`} style={{ animationDelay: "0.4s" }}>
         
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/20 text-white rounded-lg hover:border-gold-400/50 hover:bg-white/5 transition-all duration-300 text-sm tracking-wide"
            >
              {t.hero.contact}
            </Link>
          </div>
        </div>

       
      </section>

    <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${isRTL ? "lg:grid-flow-dense" : ""}`}>
            <div className={isRTL ? "text-right lg:col-start-2" : ""}>
              <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-navy-900 leading-tight mb-6">
                {t.whoWeAre.title}
              </h2>
              <div className={`w-14 h-0.5 bg-gold-500 mb-8 ${isRTL ? "mr-0 ml-auto" : ""}`} />
              <p className="text-navy-800/70 text-lg leading-relaxed">{t.whoWeAre.body}</p>
            </div>
          <div className={isRTL ? "lg:col-start-1" : ""}>
  <WhoWeAreCarousel />
</div>
          </div>
        </div>
      </section>


      {/* ── MISSION + VISION ── */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="relative bg-navy-800/50 border border-gold-500/20 rounded-2xl p-10 overflow-hidden shimmer">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gold-500/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-12 h-0.5 bg-gold-500 rounded-full mb-6" />
                <h3 className={`font-display text-2xl font-bold text-white mb-4 ${isRTL ? "text-right" : ""}`}>{t.mission.title}</h3>
                <p className={`text-white/60 leading-relaxed ${isRTL ? "text-right" : ""}`}>{t.mission.body}</p>
              </div>
            </div>
            {/* Vision */}
            <div className="relative bg-gradient-to-br from-gold-500/10 to-transparent border border-gold-500/20 rounded-2xl p-10 overflow-hidden shimmer">
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gold-500/5 rounded-full blur-2xl" />
              <div className="relative">
                <div className="w-12 h-0.5 bg-gold-500 rounded-full mb-6" />
                <h3 className={`font-display text-2xl font-bold text-white mb-4 ${isRTL ? "text-right" : ""}`}>{t.vision.title}</h3>
                <p className={`text-white/60 leading-relaxed ${isRTL ? "text-right" : ""}`}>{t.vision.body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 ${isRTL ? "text-right" : ""}`}>
            <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">Our Principles</p>
            <h2 className="font-display text-4xl font-bold text-navy-900">{t.values.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {valueKeys.map((key, i) => (
              <div key={key} className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-navy-900 flex items-center justify-center text-2xl mx-auto mb-4 group-hover:bg-gold-500/20 transition-colors duration-300 border border-transparent group-hover:border-gold-500/30">
                  {valueIcons[i]}
                </div>
                <h4 className="font-display font-semibold text-navy-900 text-lg mb-2">{t.values[key].title}</h4>
                <p className="text-navy-800/60 text-sm leading-relaxed">{t.values[key].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <ContactSection accent="gold" sectionLabel={t.contact.reachOut} />

      {/* ── MAP SECTION ── */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">Worldwide Presence</p>
            <h2 className="font-display text-4xl font-bold text-white">{t.map.title}</h2>
            <p className="text-white/40 mt-3">{t.map.subtitle}</p>
          </div>

          {/* Export destinations */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              { label: "🇪🇬 Egypt", note: "Headquarters", highlight: true },
              { label: "🇸🇩 Sudan", note: "" },
              { label: "🇵🇸 Palestine", note: "" },
              { label: "🇱🇾 Libya", note: "" },
              { label: "🇸🇦 Gulf Countries", note: "" },
              { label: "🇮🇹 Italy", note: "" },
            ].map((d) => (
              <div
                key={d.label}
                className={`px-4 py-2 rounded-full text-sm font-medium border ${
                  d.highlight
                    ? "bg-gold-500/20 border-gold-500/50 text-gold-400"
                    : "bg-white/5 border-white/10 text-white/60 hover:border-gold-500/30 hover:text-gold-400 transition-all"
                }`}
              >
                {d.label} {d.note && <span className="text-xs opacity-60 ml-1">{d.note}</span>}
              </div>
            ))}
          </div>

          {/* Google Maps Embed */}
<div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 bg-white">
  <img
    src="/map.png"
    alt="GO TREX Location"
    className="w-full h-[420px] object-contain"
  />
</div>        
        </div>
      </section>
    </div>
  );
}
