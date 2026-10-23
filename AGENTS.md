# AGENTS.md

This document orients AI agents and developers working on this codebase.

## Project Overview

Marketing/booking site for **QC Tote Rental**, a moving-tote rental service serving the Illinois & Iowa Quad Cities (Davenport, Bettendorf, Rock Island, Moline, East Moline, Silvis, Milan, and nearby towns). It is a single landing page: hero, how-it-works, pricing, use cases, service area, a reservation request form, and a general contact form.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 (utility classes only, no component library) |
| Forms | Netlify Forms (see below) |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── __forms.html        # Static skeleton so Netlify's build bot registers the forms (see below)
│   └── img/hero.png         # AI-generated hero photo, served through Netlify Image CDN
├── src
│   ├── components           # One component per landing-page section
│   │   ├── SiteHeader.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── WhoItsFor.tsx
│   │   ├── Sustainability.tsx
│   │   ├── ServiceArea.tsx
│   │   ├── BookingSection.tsx    # Wraps ReservationForm
│   │   ├── ReservationForm.tsx  # Main booking form, submits to Netlify Forms
│   │   ├── ContactSection.tsx    # General inquiry form, submits to Netlify Forms
│   │   ├── ClosingCta.tsx
│   │   └── SiteFooter.tsx
│   ├── lib
│   │   └── site.ts          # Business info, package tiers, service-area city lists, pricing-message logic
│   ├── routes
│   │   ├── __root.tsx        # Root layout + SEO meta
│   │   └── index.tsx         # Assembles all sections for `/`
│   ├── router.tsx
│   └── styles.css
├── netlify.toml
└── tsconfig.json             # `@/*` path alias → `src/*`
```

## Key Concepts

### Editing site content

Almost everything content-specific (business name/phone/email, tote package tiers and prices, free vs. fee delivery zones) lives in `src/lib/site.ts`. Prefer editing that file over hardcoding strings in components.

### Netlify Forms in a TanStack Start app

TanStack Start renders forms client-side, so Netlify's build-time form scanner never sees the real React forms. `public/__forms.html` is a hidden static HTML skeleton that mirrors both forms' field names (`reservation` and `contact`) purely so the build bot registers them. The React components (`ReservationForm.tsx`, `ContactSection.tsx`) submit via `fetch('/__forms.html', ...)` with `application/x-www-form-urlencoded` body — never `fetch('/')`, which would be swallowed by the SSR catch-all. If a field is added to a React form, add the matching field to `public/__forms.html` too, or submissions will be rejected.

Netlify Forms submissions appear in the Netlify UI under Forms; there is no database involved. Configure email notifications in Project configuration → Notifications if you want an alert per submission.

### Pricing / service-area logic

`deliveryMessage()` in `src/lib/site.ts` computes the human-readable pricing hint shown live in the reservation form based on the selected delivery and pickup cities (free zone vs. fee zone vs. self-pickup vs. out of range). Update `freeZoneCities` / `feeZoneCities` there to change coverage.

## Conventions

- Components: PascalCase, one per file, one per landing-page section.
- Import paths use the `@/` alias for anything under `src/`.
- Tailwind utility classes only — no CSS modules or styled-components.
- Prices/quantities are plain numbers in `src/lib/site.ts`, not hardcoded in JSX.

## Roadmap

No `PLAN.md` — this is a complete, single-purpose landing page, not a staged rollout. Natural follow-ups if the business wants them later: real payment collection (Stripe) at reservation time, an admin view of submissions, or SMS confirmations — none of these are started.
