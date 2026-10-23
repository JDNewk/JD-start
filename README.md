# QC Tote Rental

Marketing and booking site for QC Tote Rental, a moving-tote rental service serving the Illinois & Iowa Quad Cities (Davenport, Bettendorf, Rock Island, Moline, East Moline, Silvis, Milan, and nearby towns).

Modeled after [cowetatoterentals.com](https://cowetatoterentals.com/#book): a drop-off/pack/pick-up tote rental service, rebranded and re-mapped for the Quad Cities.

## What's here

- A hero section, "how it works" walkthrough, pricing tiers, a "who it's for" grid, a sustainability note, and a service-area breakdown (free-delivery zone vs. fee-applies zone).
- A **reservation request form** (`#book`) that captures delivery/pickup city, package, dates, and address details, then submits through Netlify Forms — no payment is collected on submission; follow-up and payment happen off-site by phone/email.
- A general **contact form** for other questions.

## Tech

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing) + Vite 7
- Tailwind CSS 4 for styling
- [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) for form submissions (see `AGENTS.md` for how the TanStack Start + Netlify Forms wiring works)
- Hero photo generated via Netlify AI Gateway, served through Netlify Image CDN

## Running locally

```bash
npm install
npm run dev
```

Note: Netlify Forms submissions only work on a deployed site (Netlify's form-detection and processing happens at build/deploy time), not in local dev.

## Editing content

Business info, package pricing, and the list of free-delivery vs. fee-applies cities all live in `src/lib/site.ts`. See `AGENTS.md` for the full project layout.
