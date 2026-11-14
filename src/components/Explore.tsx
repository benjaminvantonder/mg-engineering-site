import { Link } from "react-router-dom";
import { explore } from "../content";
import { ArrowUpRight } from "./Icons";

export function Explore() {
  return (
    <section aria-labelledby="explore-heading" className="relative overflow-hidden py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-brand/[0.04] blur-[120px]"
      />
      <div className="shell relative">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
          <h2
            id="explore-heading"
            className="font-display text-[clamp(1.6rem,3.2vw,2.6rem)] font-bold uppercase leading-none tracking-[-0.04em] text-paper"
          >
            Explore <span className="text-brand">MG Engineering</span>
          </h2>
          <p className="font-display text-[9px] uppercase tracking-[0.3em] text-muted">Three pages / one team</p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {explore.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-surface/60 p-6 transition-colors duration-300 hover:border-brand/40 sm:p-7"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(420px circle at 80% 0%, rgba(255,180,0,0.09), transparent 60%)",
                  }}
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span aria-hidden="true" className="font-display text-[11px] tracking-[0.22em] text-brand/70">
                    {item.index}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>

                <div className="relative mt-12">
                  <p className="font-display text-[8px] uppercase tracking-[0.28em] text-muted">{item.label}</p>
                  <p className="mt-3 font-display text-[clamp(1.3rem,2vw,1.7rem)] font-semibold leading-tight tracking-[-0.03em] text-paper">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.copy}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
