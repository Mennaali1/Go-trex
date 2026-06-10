"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en/common.json";
import ar from "@/locales/ar/common.json";

type Locale = "en" | "ar";
type Translations = typeof en;

interface I18nContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
  isRTL: boolean;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  t: en,
  toggleLocale: () => {},
  isRTL: false,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = () => {
    const next = locale === "en" ? "ar" : "en";
    setLocale(next);
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = next;
  };

  useEffect(() => {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }, []);

  const t = locale === "en" ? en : (ar as Translations);

  return (
    <I18nContext.Provider value={{ locale, t, toggleLocale, isRTL: locale === "ar" }}>
      {children}
    </I18nContext.Provider>
  );
}

export const useI18n = () => useContext(I18nContext);
