import { useEffect, useRef } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";
import { site } from "../content";
import { ArrowUpRight, Mail, MapPin } from "./Icons";
import { PrimaryButton } from "./Buttons";
import { Reveal } from "./Reveal";

const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.street}, ${site.address.locality}, ${site.address.postalCode}, ${site.address.country}`,
)}`;

function MagneticEmail() {
  const reduced = useReducedMotion() ?? false;
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 170, damping: 18, mass: 0.4 });
  const y = useSpring(0, { stiffness: 170, damping: 18, mass: 0.4 });

  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    const element = ref.current;
    if (!element) return;

    const onPointerMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const nearestX = Math.max(rect.left, Math.min(event.clientX, rect.right));
      const nearestY = Math.max(rect.top, Math.min(event.clientY, rect.bottom));
      const distance = Math.hypot(event.clientX - nearestX, event.clientY - nearestY);
      const threshold = 120;

      if (distance < threshold) {
        const strength = 1 - distance / threshold;
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((event.clientX - centerX) * 0.1 * strength);
        y.set((event.clientY - centerY) * 0.14 * strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, [reduced, x, y]);

  return (
    <motion.a
      ref={ref}
      href={`mailto:${site.email}`}
      style={{ x, y }}
      data-cursor-hover
      className="group mt-5 block w-fit max-w-full font-display text-[clamp(1.35rem,5.4vw,4.6rem)] font-semibold leading-[1.02] tracking-[-0.05em] text-paper transition-colors duration-300 hover:text-brand"
      aria-label={`Email MG Engineering at ${site.email}`}
    >
      <span className="flex items-center gap-3 break-all sm:gap-5">
        {site.email}
        <ArrowUpRight className="hidden h-[0.55em] w-[0.55em] shrink-0 text-brand transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block" />
      </span>
      <span
        aria-hidden="true"
        className="mt-2 block h-px w-full origin-left scale-x-100 bg-white/15 transition-colors duration-300 group-hover:bg-brand sm:mt-3"
      />
    </motion.a>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden py-24 sm:py-32 lg:py-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[520px] w-[min(120vw,980px)] -translate-x-1/2 translate-y-1/3 bg-[radial-gradient(ellipse,rgba(255,180,0,0.12),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[18%] h-40 w-40 rounded-full border border-brand/15 sm:h-64 sm:w-64"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[6%] top-[14%] h-52 w-52 rounded-full border border-arc/10 sm:h-80 sm:w-80"
      />

      <div className="shell relative">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h1
            id="contact-heading"
            className="mt-7 font-display text-[clamp(2.8rem,9vw,8.6rem)] font-bold uppercase leading-[0.9] tracking-[-0.06em] text-paper"
          >
            We Power
            <br />
            <span className="text-brand">Your World</span>
          </h1>
          <p className="mt-7 max-w-[48ch] text-base leading-relaxed text-muted">
            Tell us about your electrical, mechanical, solar, HVAC or generator project.
            <br className="hidden sm:block" /> We will take it from there.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-16">
          <Reveal delay={0.08}>
            <p className="font-display text-[9px] uppercase tracking-[0.3em] text-muted">Email us directly</p>
            <MagneticEmail />
            <div className="mt-8">
              <PrimaryButton href={`mailto:${site.email}`} ariaLabel={`Send an email to ${site.email}`}>
                Send an email
              </PrimaryButton>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass-panel rounded-[1.5rem] p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-brand/25 bg-brand/[0.06] text-brand">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-[8px] uppercase tracking-[0.28em] text-muted">Head office</p>
                  <address className="mt-2 not-italic text-sm leading-relaxed text-paper">
                    {site.address.street}
                    <br />
                    {site.address.locality}
                    <br />
                    {site.address.postalCode}, {site.address.country}
                  </address>
                </div>
              </div>

              <div className="my-5 h-px w-full bg-white/[0.08]" />

              <div className="flex items-start gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-muted">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-[8px] uppercase tracking-[0.28em] text-muted">Direct enquiries</p>
                  <a
                    href={`mailto:${site.directEmail}`}
                    className="link-sweep mt-2 inline-block break-all text-sm text-paper transition-colors hover:text-brand"
                  >
                    {site.directEmail}
                  </a>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 border-t border-white/[0.08] pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-arc" />
                <span className="font-display text-[8px] uppercase tracking-[0.24em] text-muted">
                  Centurion · South Africa
                </span>
              </div>

              <div className="mt-6">
                <PrimaryButton
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  ariaLabel="Get directions to MG Engineering in Centurion via Google Maps"
                >
                  Get directions
                </PrimaryButton>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}