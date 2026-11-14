export type ServiceIconName =
  | "bolt"
  | "shield"
  | "tower"
  | "wrench"
  | "sun"
  | "snowflake"
  | "aircon"
  | "generator"
  | "monitor";

export interface Service {
  number: string;
  title: string;
  icon: ServiceIconName;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const site = {
  displayName: "MG Engineering",
  legalName: "Matla Gene Engineering",
  legalNameFull: "Matla Gene Engineering (Pty) Ltd",
  descriptor: "Electrical & Mechanical",
  tagline: "We Power Your World",
  metaDescription:
    "Electrical, solar, HVAC, and generator specialists providing reliable engineering solutions for residential, commercial, and industrial projects.",
  email: "hello@matlag.co.za",
  directEmail: "ryno@matlag.co.za",
  address: {
    street: "7 Charles De Gaulle Cres",
    locality: "Highveld, Centurion",
    postalCode: "0157",
    country: "South Africa",
  },
  addressLine: "7 Charles De Gaulle Cres, Highveld, Centurion, 0157",
  partner: {
    name: "Arclis",
    url: "https://www.arclis.co.za/",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "POPIA", href: "/popia" },
];

export const pageMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "MG Engineering | Electrical, Solar, HVAC & Generator Specialists",
    description:
      "Electrical, solar, HVAC, and generator specialists providing reliable engineering solutions for residential, commercial, and industrial projects.",
  },
  "/about": {
    title: "About | MG Engineering — Electrical & Mechanical Specialists",
    description:
      "Two decades of electrical and mechanical craftsmanship, built on the legacy of artisan Eugene Pienaar and delivered by qualified artisans.",
  },
  "/services": {
    title: "Services | MG Engineering — Electrical, Solar, HVAC & Generators",
    description:
      "Nine core capabilities: electrical installations, Certificates of Compliance, MV and HT infrastructure, solar, HVAC, air conditioning, generators and monitoring.",
  },
  "/contact": {
    title: "Contact | MG Engineering — Centurion, South Africa",
    description:
      "Talk to MG Engineering about electrical, mechanical, solar, HVAC or generator work. Email hello@matlag.co.za or visit our Centurion office.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | MG Engineering",
    description: "How MG Engineering collects, uses, and safeguards your personal information.",
  },
  "/terms-of-use": {
    title: "Terms of Use | MG Engineering",
    description: "The terms that govern use of the MG Engineering website.",
  },
  "/popia": {
    title: "POPIA Privacy Notice | MG Engineering",
    description:
      "How MG Engineering processes personal information in accordance with the Protection of Personal Information Act.",
  },
};

export const explore = [
  {
    index: "01",
    title: "About us",
    href: "/about",
    label: "The team",
    copy: "Two decades of craftsmanship, built on the legacy of an artisan and carried by qualified artisans in the field.",
  },
  {
    index: "02",
    title: "Services",
    href: "/services",
    label: "Capabilities",
    copy: "Nine capabilities across electrical, mechanical, solar, HVAC and generator systems for every sector.",
  },
  {
    index: "03",
    title: "Contact",
    href: "/contact",
    label: "Start a project",
    copy: "Tell us about your electrical, mechanical, solar, HVAC or generator project. We will take it from there.",
  },
] as const;

export const craftsmanship =
  "We take pride in our workmanship and strive for excellence in every project we undertake";

export const about = {
  eyebrow: "About us",
  heading: "Decades of industrial evolution",
  paragraphs: [
    "Matla Gene Engineering trading as MG Engineering was founded on a passion for the trade, inspired by and in honour of the craftsmanship of my father Eugene Pienaar, a dedicated artisan with a legacy of excellence.",
    "We specialize in comprehensive electrical and mechanical services for residential, commercial, and industrial clients.",
    "With over 20 years of experience in the industry, we pride ourselves on delivering top-notch craftsmanship, reliability, and exceptional customer service. Our team of qualified artisans are dedicated to ensuring the safety, efficiency, and functionality of every project we undertake.",
  ],
  founderNote: "Founded in honour of Eugene Pienaar, artisan.",
  yearsValue: 20,
  yearsLabel: "Years of experience",
  image: {
    src: "/assets/team.webp",
    width: 1080,
    height: 841,
    alt: "Three MG Engineering artisans standing inside an electrical container installation",
    caption: "Qualified artisans. Every project.",
  },
};

export const services: Service[] = [
  {
    number: "01",
    title: "Residential, commercial and industrial electrical installations and maintenance",
    icon: "bolt",
  },
  { number: "02", title: "Certificates of Compliance", icon: "shield" },
  { number: "03", title: "MV and HT infrastructure assembly and delivery", icon: "tower" },
  { number: "04", title: "Electrical and mechanical fault finding", icon: "wrench" },
  { number: "05", title: "Solar installations and maintenance", icon: "sun" },
  { number: "06", title: "HVAC supply and installation", icon: "snowflake" },
  { number: "07", title: "Residential and commercial air conditioning", icon: "aircon" },
  { number: "08", title: "Generator supply, installation and maintenance", icon: "generator" },
  { number: "09", title: "Turnkey solutions including off-site monitoring", icon: "monitor" },
];

export const process = {
  eyebrow: "Process",
  heading: "How we work",
  steps: ["Assess", "Design", "Install", "Maintain"],
};

export const results: Stat[] = [
  { value: "500+", label: "Projects completed" },
  { value: "R150M+", label: "Overall project value" },
  { value: "4+", label: "Countries served" },
  { value: "100%", label: "Turnkey solutions" },
];

export const vision =
  "To be a globally trusted provider of sustainable engineering solutions, powering homes, industries, and cities through innovation and integrity.";

export const mission =
  "To deliver world-class electrical and mechanical systems that are reliable, efficient, and tailored to evolving international standards - enabling energy security and infrastructure resilience worldwide.";

export const compliance = {
  eyebrow: "Regulatory",
  heading: "Compliance hub",
  description:
    "MG Engineering ensures compliance with international engineering and safety standards",
  standards: [
    "SANS 10142-1",
    "SANS 10142-2",
    "IEC STANDARDS",
    "ISO-ALIGNED PRACTICES",
    "OHS ACT COMPLIANCE",
  ],
  certificateNote: "All installations certified with CoCs (Certificates of Compliance)",
  matrixTitle: "Safety quality matrix",
  matrix: [
    { label: "Design validation", value: "100%" },
    { label: "Site safety audits", value: "Weekly" },
    { label: "Technical precision", value: "ISO-9001" },
    { label: "Insurance", value: "Fully covered" },
  ],
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Matla Gene Engineering provided a turnkey solar solution that surpassed our ROI expectations. Their technical team's precision was world-class.",
    name: "Ryno Kilian",
    role: "Operations Director, Arclis",
  },
  {
    quote:
      "MG Engineering corrected our electrical system with exceptional professionalism. Their thoroughness and clear explanations gave us full confidence in its safety.",
    name: "Jaun De Witte",
    role: "Executive Director, Dexitt Brand Design",
  },
];

export const footer = {
  copyright: `© ${new Date().getFullYear()} Matla Gene Engineering t/a MG Engineering. All rights reserved.`,
};
