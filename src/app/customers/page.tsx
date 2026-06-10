"use client";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

const customers = [
  { name: "Almarai", logo: "/almarai.jpg" },
  { name: "Americana", logo: "/americana.jpg" },
  { name: "Arma", logo: "/arma.jpg" },
  { name: "Pepsi", logo: "/pepsi.jpg"},
  { name: "Al Arousa", logo: "/arousa.jpg"},
  { name: "Al bawadi", logo: "/bawadi.jpg"},
  { name: "Halawani", logo: "/halawani.jpg"},
  { name: "Harvest", logo: "/harvest.jpg"},
  { name: "Di Di", logo: "/didi.jpg"},
  { name: "Dr.Olivee", logo: "/drolive.jpg"},
  { name: "Heinz", logo: "/heinz.jpg"},
  { name: "Indomie", logo: "/indomie.jpg"},
  { name: "Juhayna", logo: "/juhaina.jpg"},
  { name: "Lamar", logo: "/lamar.jpg"},
  { name: "Maxi", logo: "/maxi.jpg"},
  { name: "Obour Land", logo: "/obouurland.jpg"},
  { name: "Oreo", logo: "/oreo.jpg"},
  { name: "Redbull", logo: "/redbull.jpg"},
  { name: "Rhodes", logo: "/rhodes.jpg"},
  { name: "Savola", logo: "/savola.jpg"},
  { name: "Solo", logo: "/solo.jpg"},
  { name: "SUNTOP", logo: "/suntop.jpg"},
  { name: "Tolido", logo: "/tolido.jpg"},
  { name: "Unilever", logo: "/unilever.jpg"},
  { name: "V Seven", logo: "/vseven.jpg"},
  { name: "V cola", logo: "/vcola.jpg"},
  { name: "rani", logo: "/rani.jpg"},
  { name: "Vimto", logo: "/vimto.jpg"},
  { name: "maxtella", logo: "/maxtella.jpg"},
  { name: "haboba", logo: "/haboba.jpg"},
  { name: "mossi", logo: "/mossi.jpg"},

];

export default function CustomersPage() {
  const { t, isRTL } = useI18n();

  return (
    <div className={isRTL ? "rtl" : "ltr"}>
      <section className="pt-32 pb-16 hero-pattern">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-500 text-xs font-semibold uppercase tracking-widest mb-3">Our Partners</p>
          <h1 className="font-display text-5xl sm:text-6xl font-bold text-white">{t.customers.title}</h1>
          <p className="text-white/50 mt-4 text-lg">{t.customers.subtitle}</p>
          <div className="w-14 h-0.5 bg-gold-500 mx-auto mt-6" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customers.map((c) => (
              <div key={c.name} className="border border-navy-900/10 rounded-xl p-8 text-center hover:border-gold-500/40 hover:shadow-lg hover:shadow-gold-500/10 transition-all duration-300 group">
                <div className="flex items-center justify-center h-20 mb-4">
{c.logo && (
  <Image
    src={c.logo}
    alt={c.name}
    width={140}
    height={80}
    className="object-contain max-h-20 transition-all duration-300"
  />
)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}