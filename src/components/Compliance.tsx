import { motion, useReducedMotion } from "framer-motion";
import { compliance } from "../content";
import { Check } from "./Icons";
import { Reveal } from "./Reveal";

export function Compliance() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      id="compliance"
      aria-labelledby="compliance-heading"
      className="relative overflow-hidden border-y border-white/[0.07] bg-surface/40 py-24 sm:py-32"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 h-[360px] w-[360px] rounded-full bg-arc/[0.05] blur-[100px]"
      />

      <div className="shell relative grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="eyebrow">Regulatory</p>
          <h2
            id="compliance-heading"
            className="mt-6 max-w-[13ch] font-display text-[clamp(2.4rem,5.4vw,5rem)] font-bold uppercase leading-[0.92] tracking-[-0.055em] text-paper"
          >
            Compliance <span className="text-brand">hub</span>
          </h2>
          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
            {compliance.description}
          </p>

          <motion.ul
            className="mt-10 grid gap-2 sm:grid-cols-2"
            initial={reduced ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.07 } },
            }}
          >
            {compliance.standards.map((standard) => (
              <motion.li
                key={standard}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-ink/40 px-4 py-3"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-brand/30 bg-brand/[0.08] text-brand">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="font-display text-[10px] font-medium uppercase tracking-[0.18em] text-paper">
                  {standard}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <Reveal delay={0.1}>
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-brand/25 bg-brand/[0.05] p-4">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <p className="font-display text-[11px] uppercase leading-relaxed tracking-[0.14em] text-paper">
                {compliance.certificateNote}
              </p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.15} className="lg:sticky lg:top-28">
            <div className="glass-panel overflow-hidden rounded-[1.5rem]">
              <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
                <h3 className="font-display text-[10px] font-semibold uppercase tracking-[0.26em] text-paper">
                  {compliance.matrixTitle}
                </h3>
                <span className="flex items-center gap-2 font-display text-[8px] uppercase tracking-[0.2em] text-arc">
                  <span className="h-1.5 w-1.5 rounded-full bg-arc" />
                  Matrix
                </span>
              </div>

              <dl>
                {compliance.matrix.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-6 border-b border-white/[0.06] px-5 py-5 last:border-b-0"
                  >
                    <dt className="text-sm text-muted">{row.label}</dt>
                    <dd className="font-display text-sm font-semibold uppercase tracking-[0.08em] text-paper">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="border-t border-white/[0.08] bg-ink/40 px-5 py-4">
                <p className="font-display text-[8px] uppercase tracking-[0.24em] text-muted">
                  Safety / Quality / Accountability
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}