interface IconProps {
  className?: string;
}

export function ArrowUpRight({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ArrowDown({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 4v16M6 14l6 6 6-6" />
    </svg>
  );
}

export function Bolt({ className }: IconProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.6 2 4.8 13.2h5.1L9.1 22l8.9-11.4h-5.2L13.6 2Z" />
    </svg>
  );
}

export function Check({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="m5 12 4.5 4.5L19 7" />
    </svg>
  );
}

export function QuoteMark({ className }: IconProps) {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 48 36" fill="currentColor" className={className}>
      <path d="M0 36V22.5C0 9.6 7.3 1.6 19.4 0l2.2 6.4C14 8.7 10 13.2 9.8 19H20v17H0Zm27 0V22.5C27 9.6 34.3 1.6 46.4 0l2.2 6.4C41 8.7 37 13.2 36.8 19H47v17H27Z" />
    </svg>
  );
}

export function MapPin({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function Mail({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function Monitor({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="5" width="26" height="17" rx="2" />
      <path d="M11 28h10M16 22v6" />
      <path d="M8.5 16c1.8-3.2 4.1-3.2 6 0s4.1 3.2 6 0 4.1-3.2 6 0" />
      <path d="M8.5 16h.01" />
    </svg>
  );
}