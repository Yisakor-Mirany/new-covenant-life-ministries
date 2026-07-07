# New Covenant Life Ministries

A premium nonprofit website for New Covenant Life Ministries (NCLM) — built with Next.js
(App Router), TypeScript, Tailwind CSS v4, Framer Motion, and shadcn/ui-style components.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, tw-animate-css
- **UI Primitives:** Radix UI + custom shadcn-style components (`components/ui`)
- **Animation:** Framer Motion
- **Icons:** Lucide React
- **Forms:** react-hook-form + zod
- **Theming:** next-themes (light/dark)
- **i18n:** Lightweight English/Amharic language switcher (`providers/language-provider.tsx`)

## Project Structure

```
app/            Route segments (pages, layouts, API routes, SEO files)
components/     UI primitives, layout, shared, and page-specific components
data/           Typed content data (programs, staff, events, blog posts, etc.)
lib/            Utilities, constants, validation schemas, icon map, i18n dictionaries
providers/      Theme and language context providers
types/          Shared TypeScript interfaces
```

## Content & CMS

All site content currently lives in typed data files under `data/`. This structure is
designed so a future headless CMS (Sanity, Contentful, Strapi, Supabase, Firebase) can
replace the static data modules without touching component or page code — components
consume typed data shapes (`types/index.ts`), not the data source itself.

## Forms

Contact, volunteer, prayer request, and newsletter forms submit to local API routes under
`app/api/*`. These currently validate and log submissions; wire them up to an email
provider or CMS before going to production.

## Scripts

- `npm run dev` — start the development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint
