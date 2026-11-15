import { motion, useReducedMotion } from "framer-motion";
import { site } from "../content";
import { scrollToTarget } from "../lib/scroll";
import { ElectricGridCanvas } from "./ElectricGridCanvas";
import { SplitText } from "./SplitText";
import { PrimaryButton, GhostButton } from "./Buttons";
import { BrandMark } from "./BrandMark";

interface HeroProps {
  ready: boolean;
}

const capabilities = ["Electrical", "Mechanical", "Solar", "HVAC", "Generators"];
const sectors = ["Residential", "Commercial", "Industrial"];

export function Hero({ ready }: HeroProps) {
  const reduced = useReducedMotion() ?? false;

  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-24 pt-28 lg:pb-28 lg:pt-32">
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden bg-ink">
        <img
          src={`${import.meta.env.BASE_URL}assets/hero-backdrop-1000.webp`}
          srcSet={`${import.meta.env.BASE_URL}assets/hero-backdrop-700.webp 700w, ${import.meta.env.BASE_URL}assets/hero-backdrop-1000.webp 1000w, ${import.meta.env.BASE_URL}assets/hero-backdrop.webp 1400w`}
          sizes="100vw"
          alt=""
          width={1400}
          height={1951}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%] opacity-40 xl:object-[72%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/80 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(255,180,0,0.07),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(34,211,238,0.05),transparent_42%)]" />
        <ElectricGridCanvas className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="shell relative z-10">
        <div className="grid items-center gap-14 xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-16 2xl:grid-cols-[minmax(0,1fr)_360px] 2xl:gap-20">
          <div>
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={ready || reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2"
            >
              <p className="eyebrow">{site.descriptor}</p>
              <span className="hidden h-3 w-px bg-white/15 sm:block" />
              <p className="font-display text-[10px] uppercase tracking-[0.24em] text-muted/90">
                Residential · Commercial · Industrial
              </p>
            </motion.div>

            <h1
              aria-label={site.tagline}
              className="mt-7 font-display text-[clamp(3rem,9vw,9rem)] font-bold uppercase leading-[0.95] tracking-[-0.055em] text-paper"
            >
              <SplitText
                lines={[
                  ["We", "Power"],
                  ["Your", "World"],
                ]}
                ready={ready}
                highlightWords={["World"]}
              />
            </h1>

            <motion.p
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={ready || reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 max-w-[54ch] text-base leading-relaxed text-muted sm:text-lg"
            >
              {site.metaDescription}
            </motion.p>

            <motion.div
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={ready || reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : 0.68, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <PrimaryButton to="/services">Our services</PrimaryButton>
              <GhostButton to="/contact" ariaLabel="Get in touch with MG Engineering">
                Get in touch
              </GhostButton>
            </motion.div>

            <div className="mt-10 flex flex-wrap gap-2 xl:hidden">
              {sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-white/10 px-3 py-1.5 font-display text-[9px] uppercase tracking-[0.2em] text-muted"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={reduced ? false : { opacity: 0, x: 30, rotate: 1.5 }}
            animate={ready || reduced ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: 30, rotate: 1.5 }}
            transition={{ duration: reduced ? 0 : 0.9, delay: reduced ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden xl:block"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[2.8rem] border border-white/[0.04]"
            />
            <div className="glass-panel relative rounded-[2rem] p-6">
              <div className="flex items-center justify-between gap-4 border-b border-white/[0.08] pb-4">
                <span className="font-display text-[9px] uppercase tracking-[0.28em] text-muted">
                  System / Capabilities
                </span>
                <span className="flex items-center gap-2 font-display text-[8px] uppercase tracking-[0.24em] text-arc">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-arc opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-arc" />
                  </span>
                  Grid sync
                </span>
              </div>

              <div className="relative mx-auto my-7 grid h-44 w-44 place-items-center">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 200 200"
                  className="absolute inset-0 h-full w-full animate-slow-spin"
                  fill="none"
                >
                  <circle cx="100" cy="100" r="93" stroke="rgba(255,180,0,0.22)" strokeWidth="1" strokeDasharray="2 11" />
                  <circle cx="100" cy="100" r="76" stroke="rgba(34,211,238,0.22)" strokeWidth="1" strokeDasharray="1 15" />
                  <path d="M100 2v12M100 186v12M2 100h12M186 100h12" stroke="rgba(232,236,242,0.22)" strokeWidth="1" />
                </svg>
                <div className="relative grid h-24 w-24 place-items-center rounded-[1.7rem] border border-brand/25 bg-brand/[0.06] p-1.5">
                  <BrandMark
                    alt=""
                    className="h-full w-full rounded-[1.35rem] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                  />
                </div>
              </div>

              <ul className="space-y-0">
                {capabilities.map((capability, index) => (
                  <li
                    key={capability}
                    className="flex items-center justify-between border-b border-white/[0.06] py-2.5 last:border-b-0"
                  >
                    <span className="text-[13px] text-paper">{capability}</span>
                    <span className="font-display text-[9px] tracking-[0.2em] text-muted">
                      0{index + 1}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between border-t border-white/[0.08] pt-4 font-display text-[8px] uppercase tracking-[0.18em] text-muted">
                {sectors.map((sector) => (
                  <span key={sector}>{sector}</span>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-full bg-brand px-4 py-2 font-display text-[8px] font-bold uppercase tracking-[0.22em] text-ink">
              {site.descriptor}
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#craftsmanship"
        onClick={(event) => {
          event.preventDefault();
          scrollToTarget("#craftsmanship");
        }}
        initial={reduced ? false : { opacity: 0 }}
        animate={ready || reduced ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: reduced ? 0 : 0.8, delay: reduced ? 0 : 0.9 }}
        className="group absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-muted transition-colors hover:text-paper"
        aria-label="Scroll to our craftsmanship statement"
      >
        <span className="font-display text-[8px] uppercase tracking-[0.34em]">Scroll</span>
        <span className="relative block h-9 w-px overflow-hidden bg-white/15">
          <span className="absolute left-0 top-0 block h-2.5 w-px animate-scroll-dot bg-brand" />
        </span>
      </motion.a>
    </section>
  );
}