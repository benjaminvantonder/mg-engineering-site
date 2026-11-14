import { Link } from "react-router-dom";
import { ArrowUpRight } from "./Icons";

export function PageMasthead({ current }: { current: string }) {
  return (
    <div className="shell relative z-10 pt-28 lg:pt-32">
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2.5 font-display text-[8px] uppercase tracking-[0.3em] text-muted">
          <li>
            <Link to="/" className="link-sweep transition-colors hover:text-paper">
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-brand/60">
            /
          </li>
          <li aria-current="page" className="text-paper">
            {current}
          </li>
        </ol>
      </nav>
    </div>
  );
}

export function PageNext({
  to,
  eyebrow,
  title,
  meta,
}: {
  to: string;
  eyebrow: string;
  title: string;
  meta: string;
}) {
  return (
    <section aria-label="Next page" className="relative overflow-hidden border-t border-white/[0.08]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-0 h-[360px] w-[360px] rounded-full bg-brand/[0.05] blur-[110px]"
      />
      <div className="shell relative py-14 sm:py-20">
        <Link to={to} className="group flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <p className="mt-5 font-display text-[clamp(2rem,5.6vw,4.4rem)] font-bold uppercase leading-[0.94] tracking-[-0.05em] text-paper transition-colors duration-300 group-hover:text-brand">
              {title}
            </p>
            <p className="mt-4 font-display text-[9px] uppercase tracking-[0.28em] text-muted">{meta}</p>
          </div>
          <span
            aria-hidden="true"
            className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/15 text-paper transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-ink"
          >
            <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </Link>
      </div>
    </section>
  );
}
