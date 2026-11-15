import { BrandMark } from "./BrandMark";

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
          <BrandMark
            alt=""
            priority
            className="h-4 w-4 shrink-0 rounded-[4px] p-[1.5px] opacity-80"
          />
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