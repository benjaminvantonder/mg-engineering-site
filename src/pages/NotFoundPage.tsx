import { Link } from "react-router-dom";
import { PageTransition } from "../components/PageTransition";
import { ArrowUpRight } from "../components/Icons";

export function NotFoundPage() {
  return (
    <PageTransition>
      <section className="relative flex min-h-[70svh] items-center overflow-hidden pt-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-brand/[0.06] blur-[120px]"
        />
        <div className="shell relative py-20">
          <p className="eyebrow">Signal lost</p>
          <h1 className="mt-6 font-display text-[clamp(3rem,10vw,8rem)] font-bold uppercase leading-[0.9] tracking-[-0.06em] text-paper">
            404 <span className="text-brand">off grid</span>
          </h1>
          <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-muted">
            This route is not connected. Head back to the main line or jump straight to the work.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/"
              className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-7 py-4 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-ink"
            >
              Back to home
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2.5 rounded-full border border-white/25 px-7 py-4 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-paper transition-colors hover:border-brand/60 hover:text-brand"
            >
              Our services
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
