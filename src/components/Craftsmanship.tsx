import { useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { craftsmanship } from "../content";
import { gsap } from "../lib/gsap";
import { QuoteMark } from "./Icons";

export function Craftsmanship() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion() ?? false;
  const words = craftsmanship.split(" ");

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const targets = section.querySelectorAll<HTMLElement>("[data-craft-word]");
    if (!targets.length) return;

    if (reduced) {
      gsap.set(targets, { opacity: 1 });
      return;
    }

    const context = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0.2 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: {
            trigger: section,
            start: "top 78%",
            end: "bottom 58%",
            scrub: 0.6,
          },
        },
      );
    }, section);

    return () => context.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="craftsmanship"
      aria-labelledby="craftsmanship-heading"
      className="relative overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[420px] w-[min(90vw,900px)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(255,180,0,0.07),transparent_70%)]"
      />
      <QuoteMark className="pointer-events-none absolute bottom-6 right-5 h-16 w-16 text-white/[0.04] sm:right-10 sm:h-24 sm:w-24 lg:bottom-10 lg:right-16" />

      <div className="shell relative">
        <div className="mx-auto max-w-[1180px] text-center">
          <p className="eyebrow justify-center">Craftsmanship</p>

          <h2
            id="craftsmanship-heading"
            className="mt-10 font-display text-[clamp(1.75rem,4.6vw,4.4rem)] font-medium leading-[1.12] tracking-[-0.035em] text-paper sm:mt-12"
          >
            {words.map((word, index) => {
              const highlighted = word === "excellence" || word === "pride";
              return (
                <span
                  key={`${word}-${index}`}
                  data-craft-word
                  className={`inline-block ${highlighted ? "text-brand" : ""}`}
                  style={{ opacity: reduced ? 1 : 0.2 }}
                >
                  {word}
                  {index < words.length - 1 ? "\u00A0" : ""}
                </span>
              );
            })}
          </h2>

          <div className="mx-auto mt-12 flex items-center justify-center gap-4">
            <span aria-hidden="true" className="h-px w-10 bg-brand/60" />
            <p className="font-display text-[9px] uppercase tracking-[0.32em] text-muted">Every project</p>
            <span aria-hidden="true" className="h-px w-10 bg-brand/60" />
          </div>
        </div>
      </div>
    </section>
  );
}