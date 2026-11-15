# MG Engineering — Multi-Page Site

Modern, animation-led rebuild of [matlag.co.za](https://www.matlag.co.za/) using Vite, React 18 (TypeScript strict), Tailwind CSS, Framer Motion, GSAP ScrollTrigger and Lenis.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + production build to dist/
npm run preview    # serve the production build
```

## Routes

| Route              | Page                                    |
| ------------------ | --------------------------------------- |
| `/`                | Home — hero, ticker, craftsmanship, explore cards |
| `/about`           | About — story, stats, vision/mission, testimonials, next |
| `/services`        | Services — pinned horizontal gallery, process, compliance, next |
| `/contact`         | Contact — magnetic email, office details, next |
| `/privacy-policy` | Privacy Policy (from source site content) |
| `/terms-of-use`   | Terms of Use (from source site content) |
| `/popia`           | POPIA Privacy Notice (from source site content) |
| `*`                | 404 — "404 off grid" |

Navigation uses `react-router-dom` v7 (`BrowserRouter`). Per-route `<h1>`, metadata, scroll reset and ScrollTrigger refresh are handled by `RouteEffects`.

## Structure

```
src/
  content.ts            All site copy, 9 services, stats, testimonials (from content-scrape.json)
  legal.ts              Typed Privacy Policy / Terms / POPIA content (from content-scrape.json subpages)
  App.tsx               Route table + layout (intro, navbar, footer)
  components/
    Navbar, Hero, Ticker, Craftsmanship, About, Services, Process,
    Compliance, Testimonials, Contact, Footer
    BrandMark          White logo tile used by intro, navbar, hero, ticker and footer
    ServiceCard        3D tilt (max 8°) + cursor-follow glow
    ElectricGridCanvas Canvas hero grid with power pulses
    IntroCurtain       ~1.25s intro
    CustomCursor, FilmGrain, ScrollProgress
    PageTransition, PageNav (masthead + next-page band), Explore, RouteEffects
  pages/                HomePage, AboutPage, ServicesPage, ContactPage, LegalPage, NotFoundPage
  lib/                  Lenis scroll helpers, GSAP setup
  hooks/                Lenis smooth scroll, count-up
public/assets/         Optimised WebP images, logo, OG image, Arclis mark
public/fonts/          Self-hosted Inter + Space Grotesk (variable, latin + latin-ext)
screenshots/           QA captures at 360 / 768 / 1024 / 1440 / 1920 + section/mobile shots
lighthouse/            Mobile Lighthouse JSON reports (home, privacy, about, services, contact)
content-scrape.json    Playwright scrape of the live site (source of truth for copy)
```

## Content

All copy, service names, compliance standards, testimonials, stats and addresses come from `content-scrape.json`. Legal documents come from the `subpages` entries. Missing on the live site: phone number, social profiles, project case-study photos — none were invented.

## Accessibility & performance

- Mobile Lighthouse (simulated Moto G / slow 4G): **Performance 91–94, Accessibility 100, Best Practices 100**, LCP ~3.0 s, CLS 0.
- Keyboard accessible menu with focus trap, skip link, visible focus states, WCAG AA contrast, single `<h1>` per route, sequential heading order.
- `prefers-reduced-motion`: intro skipped, services render as a static grid, no parallax/tilt/cursor effects.

## Notes

- `<meta name="robots" content="noindex">` is intentional on every build; remove it before public launch.
- No contact form or backend: all contact actions are `mailto:` links (`hello@matlag.co.za`, `ryno@matlag.co.za`).
- Fully self-contained build: every image, logo, font and OG image is served from `public/`; no runtime requests to `matlag.co.za`. Open Graph and structured-data URLs are derived from the current origin at runtime, so the site can move to a new domain without code changes.
- Deployment must configure the SPA history fallback (e.g. Netlify/Vercel rewrite) or deep links will 404.
- GitHub Pages: `base` is set to `/mg-engineering-site/` in `vite.config.ts` (matches the repo name); the router derives its basename from the same value. Adjust `base` if the repository name changes. The deploy workflow lives at `.github/workflows/deploy.yml`.
