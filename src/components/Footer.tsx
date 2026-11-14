import { Link } from "react-router-dom";
import { footer, legalLinks, navLinks, site } from "../content";
import { scrollToTop } from "../lib/scroll";
import { ArrowUpRight } from "./Icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#05070A] pb-8 pt-16 sm:pt-20">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 right-0 h-[360px] w-[360px] rounded-full bg-brand/[0.04] blur-[100px]" />

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.5fr_0.7fr] lg:gap-10">
          <div>
            <Link to="/" className="flex w-fit items-center gap-4">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                <img
                  src="/assets/mg-logo.png"
                  alt="MG Engineering logo"
                  width={56}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </span>
              <span>
                <span className="block font-display text-lg font-bold uppercase tracking-[0.06em] text-paper">
                  MG <span className="text-brand">Engineering</span>
                </span>
                <span className="mt-1 block font-display text-[8px] uppercase tracking-[0.32em] text-muted">
                  {site.descriptor}
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-[34ch] text-sm leading-relaxed text-muted">
              Electrical, mechanical, solar, HVAC and generator solutions for residential, commercial
              and industrial projects.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="link-sweep mt-6 inline-flex items-center gap-2 font-display text-sm text-paper transition-colors hover:text-brand"
            >
              {site.email}
              <ArrowUpRight className="h-3.5 w-3.5 text-brand" />
            </a>
          </div>

          <nav aria-label="Footer">
            <p className="font-display text-[8px] uppercase tracking-[0.3em] text-muted">Explore</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="link-sweep text-sm text-muted transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-[8px] uppercase tracking-[0.3em] text-muted">Contact</p>
            <address className="mt-5 not-italic text-sm leading-relaxed text-muted">
              {site.address.street}
              <br />
              {site.address.locality}
              <br />
              {site.address.postalCode}, {site.address.country}
            </address>
            <a
              href={`mailto:${site.directEmail}`}
              className="link-sweep mt-4 inline-block break-all text-sm text-muted transition-colors hover:text-paper"
            >
              {site.directEmail}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/[0.08] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href={site.partner.url}
            target="_blank"
            rel="noreferrer noopener"
            className="group flex w-fit items-center gap-3 text-muted transition-colors hover:text-paper"
          >
            <span className="font-display text-[8px] uppercase tracking-[0.24em]">Proudly partnered with</span>
            <img
              src="/assets/arclis.svg"
              alt="Arclis"
              width={83}
              height={17}
              loading="lazy"
              decoding="async"
              className="h-[15px] w-auto opacity-80 transition-opacity group-hover:opacity-100"
            />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex w-fit items-center gap-2 font-display text-[8px] uppercase tracking-[0.26em] text-muted transition-colors hover:text-brand"
          >
            Back to top
            <span className="grid h-7 w-7 place-items-center rounded-full border border-white/15 transition-colors group-hover:border-brand/60">
              <ArrowUpRight className="h-3 w-3 -rotate-45" />
            </span>
          </button>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/[0.05] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] leading-relaxed text-muted">{footer.copyright}</p>
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="link-sweep font-display text-[8px] uppercase tracking-[0.24em] text-muted transition-colors hover:text-paper"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
