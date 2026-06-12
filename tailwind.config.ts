import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4fa",
          100: "#dde6f5",
          200: "#c3d1ed",
          300: "#9ab4e1",
          400: "#6b8fd2",
          500: "#4a6fc5",
          600: "#3756b6",
          700: "#2f46a5",
          800: "#2b3c88",
          900: "#0a1628",
          950: "#070f1c",
        },
        gold: {
          300: "#fde68a",
          400: "#fbbf24",
          500: "#c9a227",
          600: "#b08020",
          700: "#92651a",
        },
        brand: {
          50: "#e8f2ff",
          100: "#cce0ff",
          200: "#99c2ff",
          300: "#66a3ff",
          400: "#007bff",
          500: "#0055cc",
          600: "#003399",
          700: "#002b7f",
          800: "#001f5c",
          900: "#001433",
        },
        
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        arabic: ["var(--font-cairo)", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-in-right": "slideInRight 0.6s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
