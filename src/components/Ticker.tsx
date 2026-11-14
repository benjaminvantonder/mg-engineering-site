import { Bolt } from "./Icons";

const items = [
  "Electrical installations",
  "Certificates of compliance",
  "MV & HT infrastructure",
  "Fault finding",
  "Solar",
  "HVAC",
  "Air conditioning",
  "Generators",
  "Off-site monitoring",
];

function TickerGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={duplicate ? "true" : undefined}>
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-6 font-display text-[10px] font-medium uppercase tracking-[0.28em] text-muted sm:px-8 sm:text-[11px]">
            {item}
          </span>
          <Bolt className="h-2.5 w-2.5 shrink-0 text-brand/60" />
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div aria-hidden="true" className="relative overflow-hidden border-y border-white/[0.08] bg-surface/50">
      <div className="marquee mask-fade-x flex w-max py-3.5">
        <div className="marquee-track flex w-max">
          <TickerGroup />
          <TickerGroup duplicate />
        </div>
      </div>
    </div>
  );
}