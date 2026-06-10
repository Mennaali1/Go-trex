import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Cairo } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GO TREX | GO FOR MORE TRADING AND EXPORT",
  description:
    "Leading Egyptian food export company. We deliver premium Egyptian food products to global markets with reliability and excellence.",
  keywords: "Egypt export, food export, Egyptian products, international trade, GO TREX",
  openGraph: {
    title: "GO TREX",
    description: "GO FOR MORE TRADING AND EXPORT",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${playfair.variable} ${dmSans.variable} ${cairo.variable} font-body bg-white text-navy-900 antialiased`}>
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
