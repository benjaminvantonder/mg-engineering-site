import type { ReactNode } from "react";
import type { ServiceIconName } from "../content";

interface ServiceIconProps {
  name: ServiceIconName;
  className?: string;
}

const paths: Record<ServiceIconName, ReactNode> = {
  bolt: <path d="M18 3 7.5 18H14l-1 11L23.5 14H17l1-11Z" />,
  shield: (
    <>
      <path d="M16 3.5 27 7.5v7.6c0 6.7-4.8 10.9-11 13.4-6.2-2.5-11-6.7-11-13.4V7.5l11-4Z" />
      <path d="m11 15.5 3.4 3.4L21.5 12" />
    </>
  ),
  tower: (
    <>
      <path d="M16 3 6.5 29h19L16 3Z" />
      <path d="M16 3v26M10.5 15h11M8.5 22h15M5 10h22" />
      <path d="M5 10 8.5 15M27 10l-3.5 5" />
    </>
  ),
  wrench: (
    <>
      <path d="M21.7 4.3a6.5 6.5 0 0 0-8.2 8.2L4 22l6 6 9.5-9.5a6.5 6.5 0 0 0 8.2-8.2l-4.3 4.3-5.7-5.7 4.3-4.3Z" />
      <path d="m7 25 1.5 1.5" />
    </>
  ),
  sun: (
    <>
      <circle cx="16" cy="16" r="5" />
      <path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M25.2 6.8l-2.8 2.8M9.6 22.4l-2.8 2.8" />
    </>
  ),
  snowflake: (
    <>
      <path d="M16 3v26M4.7 9.5l22.6 13M4.7 22.5l22.6-13" />
      <path d="m12.5 5 3.5 3 3.5-3M12.5 27l3.5-3 3.5 3M4.4 13.8l4.5-.6-.8-4.5M27.6 18.2l-4.5.6.8 4.5M4.4 18.2l4.5.6-.8 4.5M27.6 13.8l-4.5-.6.8-4.5" />
    </>
  ),
  aircon: (
    <>
      <rect x="3" y="6" width="26" height="11" rx="2.5" />
      <path d="M7 12.5h18M7 9.2h11" />
      <path d="M10 21c0 2.5-2 2.5-2 5M16 21c0 2.5-2 2.5-2 5M22 21c0 2.5-2 2.5-2 5" />
    </>
  ),
  generator: (
    <>
      <rect x="3" y="10" width="26" height="15" rx="2.5" />
      <path d="M7 25v3M25 25v3M7 14h5M7 18h5" />
      <path d="m21 13-4 6h4l-1 4 5-6h-4l1-4" />
      <path d="M22 10V5h4" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="5" width="26" height="17" rx="2" />
      <path d="M11 28h10M16 22v6" />
      <path d="M8 16c2-3.4 4.5-3.4 6.5 0s4.5 3.4 6.5 0 4.5-3.4 6.5 0" />
      <circle cx="9" cy="10" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
};

export function ServiceIcon({ name, className }: ServiceIconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}