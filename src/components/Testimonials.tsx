import { testimonials } from "../content";
import { QuoteMark } from "./Icons";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="relative overflow-hidden py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-brand/[0.04] blur-[130px]"
      />

      <div className="shell relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Client feedback</p>
            <h2
              id="testimonials-heading"
              className="mt-6 font-display text-[clamp(2.4rem,5.4vw,4.8rem)] font-bold uppercase leading-[0.92] tracking-[-0.055em] text-paper"
            >
              Voice of <span className="text-brand">excellence</span>
            </h2>
          </div>
          <p className="font-display text-[9px] uppercase tracking-[0.3em] text-muted">In their words</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.1}>
              <figure className="glass-panel group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.5rem] p-6 sm:p-8">
                <QuoteMark className="h-9 w-9 text-brand/35 transition-colors duration-500 group-hover:text-brand/60" />
                <blockquote className="mt-8">
                  <p className="text-[15px] leading-relaxed text-paper/90 sm:text-base">
                    “{testimonial.quote}”
                  </p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-white/[0.08] pt-5">
                  <span
                    aria-hidden="true"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand/30 bg-brand/[0.08] font-display text-[10px] font-semibold text-brand"
                  >
                    {testimonial.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <div>
                    <cite className="block font-display text-[11px] font-semibold uppercase not-italic tracking-[0.18em] text-paper">
                      {testimonial.name}
                    </cite>
                    <p className="mt-1 text-[11px] text-muted">{testimonial.role}</p>
                  </div>
                </figcaption>
                <span
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-16 w-16 bg-[linear-gradient(225deg,rgba(255,180,0,0.12),transparent_60%)]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}