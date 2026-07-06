# AlphaLearn Studylab

Publication-grade CBSE/NCERT worksheet sets for Class 6–8 — Maths, Science,
English, Social Science. Built with Next.js 14 (App Router), TypeScript,
Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires an internet connection on first build —
`next/font/google` fetches Fraunces, Inter, and Caveat from Google Fonts at
build time and self-hosts them afterward (no client-side calls to Google).

```bash
npm run build
npm run start
```

## Before you publish — required edits

Open **`lib/site-config.ts`** and replace two placeholder values:

```ts
whatsappNumber: "910000000000",     // → your real WhatsApp Business number
instagramHandle: "alphalearn.studylab", // → your real Instagram handle
```

Every "Order on WhatsApp" button, the navbar, and the footer all read from
this one file, so this is the only place you need to change.

## Editing the catalog

Worksheets live in **`lib/worksheets.ts`** as a typed array. To add, remove,
or edit a chapter, just edit that array — the catalog page, filters, and
search all update automatically. Each entry looks like:

```ts
{
  id: "c8-en-1",
  class: 8,
  subject: "English",
  marks: 90,
  title: "The Magic Brush of Dreams",
  unit: "Unit 3: Mystery and Magic",
  tier: "Concept Builder", // "Concept Builder" | "Concept Mastery" | "Exam Mastery"
}
```

## Project structure

```
app/
  layout.tsx        Root layout, fonts, metadata
  page.tsx           Assembles the homepage
  globals.css        Notebook-paper background, rule lines, focus states
components/
  Navbar.tsx         Sticky nav with mobile menu
  Hero.tsx           Hero section + graded-worksheet mock visual
  GradedMarks.tsx     Animated red-pen SVG marks (checkmark, score circle, underline)
  Catalog.tsx        Filters, search, and worksheet grid
  WorksheetCard.tsx  Single worksheet card
  HowItWorks.tsx     Three-step ordering explainer
  Footer.tsx         Footer with links + replace-before-publishing note
lib/
  site-config.ts     WhatsApp number + Instagram handle (single source of truth)
  worksheets.ts      Worksheet catalog data
```

## Design tokens

Defined in `tailwind.config.ts`:

- `paper` — warm background (#F7F1E1)
- `navy` — headings and primary text (#17233F)
- `green` — primary buttons / CTAs (#1E5E45)
- `marker` — red "graded" accents (#B4392C)
- Fonts: Fraunces (display), Inter (body), Caveat (handwritten red-pen marks)

## Notes

- Fully responsive, mobile-first, keyboard-focus visible, and respects
  `prefers-reduced-motion`.
- No backend/database — ordering happens entirely through a pre-filled
  WhatsApp message, per the brief.
