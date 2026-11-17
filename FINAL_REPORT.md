# MG Engineering — Final Report

## Objective
Convert the single-scroll site into a multi-page site (home, About, Services, Contact), add Privacy, Terms and POPIA from the original, and make every button work.

## Delivered
- Routes: `/` (home hero), `/about`, `/services`, `/contact`, `/privacy-policy`, `/terms-of-use`, `/popia`, `*` (404).
- Home: hero, ticker, craftsmanship, explore. About: story, stats, mission, testimonials. Services: pinned gallery, process, compliance. Contact: magnetic email, details.
- Legal pages built from `content-scrape.json` subpages via typed content in `src/legal.ts`.
- Router: react-router-dom v7; per-route titles/meta, scroll reset, ScrollTrigger refresh.
- Branding: the business logo (`mg-logo.png`) replaces the bolt glyph in the intro, navbar, hero panel, ticker and footer.
- Services gallery: all nine cards use relevant local Pexels photos (760×760 WebP), matching the tenth CTA card; brightness lifted slightly.
- Self-contained: all assets live in `public/`; no runtime requests to matlag.co.za.

## Verification results
- Build: clean (`tsc --noEmit && vite build`); main JS ~533 kB (174 kB gzip).
- Routes: all return 200 (SPA fallback); exactly one `<h1>` per route; no horizontal overflow at 360–1920; zero console errors.
- All navigation, CTA, footer legal, explore, TOC and back-to-top links verified; services pin confirmed.
- Lighthouse mobile (simulated): Home 92, About 95, Services 91, Contact 95, Privacy 95 — Perf ≥85, A11y 100, BP 100 on every page; LCP 2.7–3.4 s, CLS ≤0.002.

## Deviations
- Privacy Policy wording adapted: "via the contact form" → "at hello@matlag.co.za" (site has no form).
- No phone/social data added (absent on source site); nothing invented.

## Before launch
- Remove `<meta name="robots" content="noindex">` from `index.html` and build.
- Configure SPA history fallback on host (Netlify/Vercel rewrite).
- Update `base` in `vite.config.ts` if the repo or domain changes; the router basename follows.
