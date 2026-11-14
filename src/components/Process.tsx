import { motion, useReducedMotion } from "framer-motion";
import { process } from "../content";

export function Process() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section id="process" aria-labelledby="process-heading" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-[140%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Process</p>
            <h2
              id="process-heading"
              className="mt-6 font-display text-[clamp(2.4rem,5.4vw,4.8rem)] font-bold uppercase leading-[0.94] tracking-[-0.05em] text-paper"
            >
              How we <span className="text-brand">work</span>
            </h2>
          </div>
          <p className="font-display text-[9px] uppercase tracking-[0.3em] text-muted">
            Assess · Design · Install · Maintain
          </p>
        </div>

        <div className="relative mt-14 sm:mt-16">
          <div aria-hidden="true" className="absolute left-0 right-0 top-0 hidden h-px bg-white/[0.09] lg:block">
            <motion.div
              className="h-px origin-left bg-brand/70"
              initial={reduced ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: reduced ? 0 : 1.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>

          <motion.ol
            className="grid gap-2 overflow-hidden rounded-[1.2rem] border border-white/[0.08] bg-transparent p-2 sm:grid-cols-2 lg:grid-cols-4"
            initial={reduced ? false : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.16 } },
            }}
          >
            {process.steps.map((step, index) => (
              <motion.li
                key={step}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="group relative rounded-[0.85rem] border border-white/[0.06] bg-ink px-5 py-7 sm:px-6 sm:py-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className="font-display text-[10px] font-semibold tracking-[0.25em] text-muted"
                  >
                    0{index + 1}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-1 h-1.5 w-1.5 rounded-full border border-brand/70 transition-colors duration-300 group-hover:bg-brand"
                  />
                </div>
                <p className="mt-8 font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-semibold uppercase leading-none tracking-[-0.035em] text-paper transition-colors duration-300 group-hover:text-brand">
                  {step}
                </p>
                <div aria-hidden="true" className="mt-6 h-px w-full bg-white/[0.07]">
                  <div className="h-px w-0 bg-brand/60 transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}