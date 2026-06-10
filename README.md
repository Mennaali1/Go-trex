# GO TREX for Export — Website

**Modern Next.js 14 corporate website** for GO TREX for Export.  
Navy blue & gold design, English/Arabic (RTL) toggle, Resend email integration.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.local .env.local  # already created — just add your Resend key

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Resend Email Setup

1. Go to [resend.com](https://resend.com) and create a free account
2. Create an API key
3. Open `.env.local` and replace `re_xxxxxxxx` with your actual key
4. **Important:** Resend's free tier requires you to verify a domain OR use `onboarding@resend.dev` as the sender (already configured for testing)
5. Once you have a domain (e.g. `abu-shama.com`), update the `from` field in `src/app/api/contact/route.ts`

---

## Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts   ← Resend email handler
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── customers/page.tsx
│   ├── services/
│   │   ├── feasibility-study/
│   │   ├── security-research/
│   │   ├── import-export/
│   │   ├── shipping/
│   │   ├── customs-clearance/
│   │   ├── storage/
│   │   └── insurance/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx               ← Home page
├── components/
│   ├── Navbar.tsx             ← Fixed nav with dropdown + lang toggle
│   ├── Footer.tsx
│   ├── ContactForm.tsx        ← Form with validation
│   └── ServicePage.tsx        ← Reusable service template
├── lib/
│   └── i18n.tsx               ← Language context (EN/AR + RTL)
└── locales/
    ├── en/common.json
    └── ar/common.json
```

---

## Features

- ✅ Fixed navbar with services dropdown
- ✅ Language toggle (English ↔ العربية) with full RTL support
- ✅ Hero section with animated entrance
- ✅ Who We Are, Mission, Vision, Values sections
- ✅ Services grid (7 services, all with own pages)
- ✅ Contact form → sends to Youssef@abu-shama.com via Resend
- ✅ Our Customers page (grid layout)
- ✅ Contact page with WhatsApp link
- ✅ Google Maps embed
- ✅ Export destinations display (Sudan, Palestine, Libya, Gulf, Italy)
- ✅ Fully responsive (mobile → desktop)
- ✅ Navy blue + gold design system
- ✅ Playfair Display + DM Sans + Cairo fonts

---

## Deployment

Deploy to [Vercel](https://vercel.com) (recommended for Next.js):

1. Push to GitHub
2. Import project on Vercel
3. Add `RESEND_API_KEY` in Vercel environment variables
4. Deploy!
