import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { about, mission, results, vision } from "../content";
import { useCountUp } from "../hooks/useCountUp";
import { QuoteMark } from "./Icons";
import { Reveal } from "./Reveal";

export function About() {
  const reduced = useReducedMotion() ?? false;
  const counterRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(counterRef, { once: true, amount: 0.5 });
  const years = useCountUp(about.yearsValue, inView, reduced);

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section id="about" aria-labelledby="about-heading" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full bg-brand/[0.055] blur-[140px]"
      />

      <div className="shell relative">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-white/[0.08] pb-7">
          <div>
            <p className="eyebrow">About us</p>
            <h1
              id="about-heading"
              className="mt-6 max-w-[16ch] font-display text-[clamp(2.4rem,5.6vw,5.4rem)] font-bold uppercase leading-[0.94] tracking-[-0.05em] text-paper"
            >
              Decades of <span className="text-brand">industrial</span> evolution
            </h1>
          </div>
          <p className="font-display text-[9px] uppercase tracking-[0.32em] text-muted">
            Legacy protocol / 01
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div ref={counterRef} className="flex flex-wrap items-end gap-x-6 gap-y-2">
              <p className="font-display text-[clamp(5rem,12vw,10rem)] font-bold leading-[0.78] tracking-[-0.08em] text-brand">
                {years}
                <span aria-hidden="true" className="align-top text-[0.42em]">
                  +
                </span>
              </p>
              <p className="mb-3 max-w-[12ch] font-display text-[10px] uppercase leading-relaxed tracking-[0.28em] text-muted">
                Years of experience
              </p>
            </div>

            <p className="mt-7 flex items-start gap-3 text-sm italic text-muted">
              <span aria-hidden="true" className="mt-2 block h-px w-8 shrink-0 bg-brand/70" />
              {about.founderNote}
            </p>

            <div className="mt-8 max-w-[62ch] space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
              {about.paragraphs.map((paragraph, index) => (
                <p key={paragraph.slice(0, 30)} className={index === 0 ? "text-paper/90" : undefined}>
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {["Residential", "Commercial", "Industrial"].map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-white/10 px-3.5 py-1.5 font-display text-[9px] uppercase tracking-[0.22em] text-muted"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1} className="lg:sticky lg:top-28">
              <figure className="group relative">
                <div
                  ref={imageRef}
                  className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] border border-white/10 bg-surface sm:aspect-[4/5]"
                >
                  <motion.img
                    src={`${import.meta.env.BASE_URL}assets/team.webp`}
                    srcSet={`${import.meta.env.BASE_URL}assets/team-560.webp 560w, ${import.meta.env.BASE_URL}assets/team-760.webp 760w, ${import.meta.env.BASE_URL}assets/team.webp 1080w`}
                    sizes="(min-width: 1024px) 38vw, 92vw"
                    alt={about.image.alt}
                    width={about.image.width}
                    height={about.image.height}
                    loading="lazy"
                    decoding="async"
                    style={{ y: reduced ? 0 : imageY, scale: 1.1 }}
                    className="h-full w-full object-cover object-center"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-ink/20"
                  />
                  <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-20" />

                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-ink/45 px-3 py-1.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    <span className="font-display text-[8px] uppercase tracking-[0.24em] text-paper">
                      In the field
                    </span>
                  </div>

                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4">
                    <figcaption className="max-w-[15ch] font-display text-sm font-semibold uppercase leading-tight tracking-[0.04em] text-paper">
                      {about.image.caption}
                    </figcaption>
                    <span className="font-display text-[8px] uppercase tracking-[0.24em] text-muted">
                      MG / Field notes
                    </span>
                  </div>

                  <span aria-hidden="true" className="absolute -right-px -top-px h-10 w-10 border-r border-t border-brand/70" />
                  <span aria-hidden="true" className="absolute -bottom-px -left-px h-10 w-10 border-b border-l border-brand/70" />
                </div>
              </figure>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.05} className="mt-16 border-y border-white/[0.08] sm:mt-20">
          <div className="flex items-center justify-between gap-6 py-4">
            <p className="font-display text-[9px] uppercase tracking-[0.3em] text-muted">Results we deliver</p>
            <span className="h-px flex-1 bg-white/[0.07]" />
          </div>
          <dl className="grid grid-cols-2 gap-px bg-white/[0.07] sm:grid-cols-4">
            {results.map((result) => (
              <div key={result.label} className="bg-ink px-4 py-7 sm:px-5">
                <dt className="font-display text-[8px] uppercase tracking-[0.24em] text-muted">
                  {result.label}
                </dt>
                <dd className="mt-2 font-display text-2xl font-semibold tracking-[-0.03em] text-paper sm:text-3xl">
                  {result.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:mt-20 md:grid-cols-2">
          {[
            { title: "Our vision", text: vision, index: "01" },
            { title: "Our mission", text: mission, index: "02" },
          ].map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="glass-panel group relative h-full overflow-hidden rounded-[1.4rem] p-6 sm:p-8">
                <QuoteMark className="absolute right-5 top-5 h-8 w-8 text-white/[0.05] transition-colors duration-500 group-hover:text-brand/20" />
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-display text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
                    {item.title}
                  </h2>
                  <span aria-hidden="true" className="font-display text-[10px] tracking-[0.22em] text-muted">
                    {item.index}
                  </span>
                </div>
                <p className="mt-5 max-w-[44ch] text-sm leading-relaxed text-muted">“{item.text}”</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}