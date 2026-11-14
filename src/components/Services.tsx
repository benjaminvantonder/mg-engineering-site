import { useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { services, site } from "../content";
import { gsap, ScrollTrigger } from "../lib/gsap";
import { ServiceCard } from "./ServiceCard";
import { PrimaryButton } from "./Buttons";

function ServicesCta({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-[1.4rem] border border-brand/25 bg-surface ${className}`}
    >
      <img
        src="/assets/solar.webp"
        alt=""
        width={512}
        height={512}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/30"
      />
      <div className="relative flex h-full min-h-[260px] flex-col justify-between gap-8 p-6">
        <div className="flex items-center justify-between">
          <p className="eyebrow text-brand">Next step</p>
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_18px_rgba(255,180,0,0.8)]"
          />
        </div>
        <div>
          <p className="font-display text-[clamp(1.4rem,2vw,1.8rem)] font-semibold leading-tight tracking-[-0.03em] text-paper">
            Have a project in mind?
          </p>
          <p className="mt-2 text-sm text-muted">Send us the details — we will take it from there.</p>
          <PrimaryButton
            href={`mailto:${site.email}`}
            className="mt-5 px-5 py-3 text-[10px]"
            ariaLabel={`Send an email to ${site.email}`}
          >
            Send an email
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const reduced = useReducedMotion() ?? false;
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (reduced) return;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!pin || !track) return;

    const media = gsap.matchMedia();

    media.add("(min-width: 1024px)", () => {
      const distance = () => Math.max(0, track.scrollWidth - pin.clientWidth);

      const update = (progress: number) => {
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${Math.max(0.015, progress)})`;
        }
        if (countRef.current) {
          const current = Math.min(9, Math.max(1, Math.round(progress * 8) + 1));
          countRef.current.textContent = String(current).padStart(2, "0");
        }
      };

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => update(self.progress),
          onRefresh: (self) => update(self.progress),
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
        gsap.set(track, { x: 0 });
        update(0);
      };
    });

    const onFonts = () => ScrollTrigger.refresh();
    document.fonts.ready.then(onFonts).catch(() => {});

    return () => media.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      id="services"
      aria-labelledby="services-heading"
      className="relative"
    >
      <div
        ref={pinRef}
        className={`relative ${
          reduced
            ? "py-24 sm:py-32"
            : "py-24 sm:py-32 lg:flex lg:h-[100svh] lg:flex-col lg:justify-center lg:overflow-hidden lg:py-0 lg:pt-20"
        }`}
      >
        <div className="shell">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Core capabilities</p>
              <h1
                id="services-heading"
                className="mt-6 font-display text-[clamp(2.5rem,6vw,5.4rem)] font-bold uppercase leading-[0.92] tracking-[-0.055em] text-paper"
              >
                Our <span className="text-brand">services</span>
              </h1>
            </div>

            <div className="hidden w-full max-w-[260px] lg:block">
              <div className="flex items-end justify-between gap-4 font-display text-[9px] uppercase tracking-[0.26em] text-muted">
                <span>Scroll to explore</span>
                <span className="text-paper">
                  <span ref={countRef}>01</span>
                  <span className="text-muted"> / 09</span>
                </span>
              </div>
              <div className="mt-3 h-px w-full bg-white/10">
                <div
                  ref={progressRef}
                  className="h-px origin-left scale-x-[0.015] bg-brand"
                  style={{ transform: "scaleX(0.015)" }}
                />
              </div>
            </div>
          </div>
        </div>

        {reduced ? (
          <div className="shell mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.number} service={service} className="min-h-[250px] w-full" />
            ))}
            <ServicesCta className="w-full" />
          </div>
        ) : (
          <div
            ref={trackRef}
            className="mt-9 flex w-full flex-col gap-4 pl-5 pr-5 sm:mt-12 sm:pl-8 sm:pr-8 lg:mt-10 lg:w-max lg:flex-row lg:gap-5 lg:pl-12 lg:pr-12 xl:pl-16 xl:pr-16"
          >
            <ul className="flex shrink-0 flex-col gap-4 lg:flex-row lg:gap-5">
              {services.map((service) => (
                <ServiceCard
                  key={service.number}
                  service={service}
                  className="min-h-[250px] w-full lg:min-h-0 lg:w-[clamp(300px,26vw,410px)]"
                />
              ))}
            </ul>
            <ServicesCta className="min-h-[260px] w-full lg:h-[clamp(300px,46vh,420px)] lg:w-[330px]" />
          </div>
        )}
      </div>
    </section>
  );
}