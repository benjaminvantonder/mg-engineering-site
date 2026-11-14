import { useRef } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { useReducedMotion } from "framer-motion";
import type { Service } from "../content";
import { ServiceIcon } from "./ServiceIcon";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className = "" }: ServiceCardProps) {
  const reduced = useReducedMotion() ?? false;
  const cardRef = useRef<HTMLLIElement>(null);
  const frame = useRef(0);

  const onPointerMove = (event: ReactPointerEvent<HTMLLIElement>) => {
    if (reduced || event.pointerType !== "mouse") return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    cancelAnimationFrame(frame.current);

    frame.current = requestAnimationFrame(() => {
      card.style.setProperty("--mx", `${x}px`);
      card.style.setProperty("--my", `${y}px`);
      const rotateX = ((y / rect.height) - 0.5) * -8;
      const rotateY = ((x / rect.width) - 0.5) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;
    });
  };

  const onPointerLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    cancelAnimationFrame(frame.current);
    card.style.transform = "";
    card.style.setProperty("--mx", "50%");
    card.style.setProperty("--my", "50%");
  };

  return (
    <li
      ref={cardRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`service-card group relative shrink-0 overflow-hidden rounded-[1.4rem] border border-white/[0.08] bg-surface/80 ${className}`}
    >
      <div aria-hidden="true" className="service-card-glow pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <span
            aria-hidden="true"
            className="font-display text-[clamp(2.4rem,4vw,3.6rem)] font-bold leading-none tracking-[-0.06em] text-white/40 transition-colors duration-500 group-hover:text-brand/80"
          >
            {service.number}
          </span>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/10 bg-ink/40 text-brand transition-all duration-500 group-hover:border-brand/60 group-hover:bg-brand group-hover:text-ink sm:h-12 sm:w-12">
            <ServiceIcon name={service.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
          </span>
        </div>

        <div className="mt-8">
          <p className="font-display text-[8px] uppercase tracking-[0.28em] text-muted">
            Service / {service.number}
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.1rem,1.55vw,1.45rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-paper">
            <span className="sr-only">Service {service.number}: </span>
            {service.title}
          </h2>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/[0.07] pt-4">
          <span className="font-display text-[8px] uppercase tracking-[0.22em] text-muted">
            MG Engineering
          </span>
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full bg-brand/50 transition-transform duration-300 group-hover:scale-150"
          />
        </div>
      </div>
    </li>
  );
}