"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";

const serviceRoutes = [
  { key: "feasibility", href: "/services/feasibility-study" },
  { key: "security", href: "/services/security-research" },
  { key: "importExport", href: "/services/import-export" },
  { key: "shipping", href: "/services/shipping" },
  { key: "customs", href: "/services/customs-clearance" },
  { key: "storage", href: "/services/storage" },
  { key: "insurance", href: "/services/insurance" },
];

export default function Navbar() {
  const { t, toggleLocale, isRTL } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${
        scrolled
          ? "bg-navy-900/95 shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
       <Link href="/" className="flex items-center gap-2 group">
 <Image
  src="/logo.jpeg"
  alt="Go Trex Logo"
  width={120}
  height={56}
className="object-contain h-12 w-auto brightness-0 invert contrast-200"/>
</Link>

        {/* Desktop Nav */}
        <div className={`hidden lg:flex items-center gap-8 ${isRTL ? "flex-row-reverse" : ""}`}>
          <Link href="/" className="text-white/80 hover:text-gold-400 text-sm font-medium transition-colors duration-200">
            {t.nav.home}
          </Link>
          <Link href="/about" className="text-white/80 hover:text-gold-400 text-sm font-medium transition-colors duration-200">
            {t.nav.about}
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1.5 text-white/80 hover:text-gold-400 text-sm font-medium transition-colors duration-200"
            >
              {t.nav.services}
              <svg
                className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className={`absolute top-full mt-3 w-56 bg-navy-900 border border-gold-500/20 rounded-lg shadow-2xl shadow-black/50 py-2 ${isRTL ? "right-0" : "left-0"}`}>
                {serviceRoutes.map((s) => (
                  <Link
                    key={s.key}
                    href={s.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-sm text-white/70 hover:text-gold-400 hover:bg-white/5 transition-all duration-150"
                  >
                    {t.services_list[s.key as keyof typeof t.services_list]}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/customers" className="text-white/80 hover:text-gold-400 text-sm font-medium transition-colors duration-200">
            {t.nav.customers}
          </Link>
         <Link href="/contact" className="px-4 py-2 bg-gold-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-lg transition-colors duration-200">
  {t.nav.contact}
</Link>
        </div>

        {/* Right side: Lang toggle + mobile menu */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLocale}
            className="text-xs font-medium px-3 py-1.5 border border-gold-500/40 text-gold-400 rounded-full hover:bg-gold-500/10 transition-all duration-200"
          >
            {t.lang}
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-900/98 border-t border-white/10 px-4 py-6 space-y-3">
          {[
            { label: t.nav.home, href: "/" },
            { label: t.nav.about, href: "/about" },
            { label: t.nav.customers, href: "/customers" },
            { label: t.nav.contact, href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block text-white/80 hover:text-gold-400 py-2 text-sm font-medium border-b border-white/5"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <p className="text-gold-500 text-xs font-semibold uppercase tracking-wider mb-2">{t.nav.services}</p>
            {serviceRoutes.map((s) => (
              <Link
                key={s.key}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="block text-white/60 hover:text-gold-400 py-1.5 text-sm pl-3"
              >
                {t.services_list[s.key as keyof typeof t.services_list]}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
