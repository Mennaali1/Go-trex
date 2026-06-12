"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import Image from "next/image";



export default function Navbar() {
  const { t, toggleLocale, isRTL } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
  className="object-contain h-12 w-auto"
/>
</Link>

        {/* Desktop Nav */}
        <div className={`hidden lg:flex items-center gap-8 ${isRTL ? "flex-row-reverse" : ""}`}>
          <Link href="/" className="text-white/80 hover:text-gold-400 text-sm font-medium transition-colors duration-200">
            {t.nav.home}
          </Link>
          <Link href="/about" className="text-white/80 hover:text-gold-400 text-sm font-medium transition-colors duration-200">
            {t.nav.about}
          </Link>

        
       

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
     
        </div>
      )}
    </nav>
  );
}
