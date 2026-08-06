# Portfolio v2

Premium personal portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Shadcn/UI.

## Stack

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 + Shadcn/UI
- Framer Motion, GSAP (selective), Lenis
- Three.js / React Three Fiber (subtle effects)
- React Hook Form + Zod
- Lucide Icons

## Getting started

```bash
# Use Node 18.18+ (Node 20 recommended)
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command              | Description                |
| -------------------- | -------------------------- |
| `npm run dev`        | Start dev server (Turbopack) |
| `npm run build`      | Production build           |
| `npm run start`      | Start production server    |
| `npm run lint`       | Run ESLint                 |
| `npm run format`     | Format with Prettier       |
| `npm run typecheck`  | TypeScript check           |

## Structure

```
app/                 # Routes, layout, metadata
components/
  ui/                # Shadcn primitives
  layout/            # Header, Footer, shells
  sections/          # Page sections
  animations/        # Motion primitives
  providers/         # Client providers (Lenis, etc.)
hooks/               # Shared React hooks
lib/                 # Utils, fonts, metadata, validations
types/               # Shared TypeScript types
data/                # Static content / site config
styles/              # Extra stylesheets
public/              # Static assets
```

## Environment

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL`.

## Status

Foundation only — UI sections pending confirmation.
