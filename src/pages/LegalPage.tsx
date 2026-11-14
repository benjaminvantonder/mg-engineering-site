import { Link } from "react-router-dom";
import type { LegalBlock, LegalDoc } from "../legal";
import { legalLinks } from "../content";
import { scrollToTarget } from "../lib/scroll";
import { PageTransition } from "../components/PageTransition";
import { ArrowUpRight } from "../components/Icons";

const anchor = (number: string) => `#legal-${number}`;

function Block({ block }: { block: LegalBlock }) {
  switch (block.type) {
    case "p":
      return <p className="text-[15px] leading-[1.75] text-muted">{block.text}</p>;

    case "strong":
      return (
        <p className="font-display text-[11px] font-semibold uppercase leading-relaxed tracking-[0.22em] text-paper">
          {block.text}
        </p>
      );

    case "ul":
      return (
        <ul className="mt-5 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-[1.7] text-muted">
              <span aria-hidden="true" className="mt-[0.65em] h-px w-3 shrink-0 bg-brand/70" />
              {item}
            </li>
          ))}
        </ul>
      );

    case "defs":
      return (
        <dl className="mt-6 grid gap-5 sm:grid-cols-2">
          {block.items.map((item) => (
            <div key={item.term} className="border-l border-brand/25 pl-4">
              <dt className="font-display text-[9px] uppercase tracking-[0.24em] text-brand">{item.term}</dt>
              <dd className="mt-2 text-[14px] leading-relaxed text-muted">{item.text}</dd>
            </div>
          ))}
        </dl>
      );

    case "address":
      return (
        <address className="mt-5 not-italic">
          <div className="rounded-xl border border-white/10 bg-surface/60 p-5">
            {block.lines.map((line, index) => (
              <p
                key={line}
                className={
                  index === 0
                    ? "font-display text-sm font-semibold text-paper"
                    : "mt-1 text-sm leading-relaxed text-muted"
                }
              >
                {line}
              </p>
            ))}
          </div>
        </address>
      );
  }
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <PageTransition>
      <article className="relative overflow-hidden pb-24 pt-28 lg:pt-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-20" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/4 h-[480px] w-[480px] rounded-full bg-brand/[0.05] blur-[130px]"
        />

        <div className="shell relative">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2.5 font-display text-[8px] uppercase tracking-[0.3em] text-muted">
              <li>
                <Link to="/" className="link-sweep transition-colors hover:text-paper">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-brand/60">
                /
              </li>
              <li className="text-muted">Legal</li>
              <li aria-hidden="true" className="text-brand/60">
                /
              </li>
              <li aria-current="page" className="text-paper">
                {doc.title}
              </li>
            </ol>
          </nav>

          <header className="mt-10 border-b border-white/[0.08] pb-10 sm:mt-14 sm:pb-12">
            <p className="eyebrow">{doc.eyebrow}</p>
            <h1
              id="legal-heading"
              className="mt-6 font-display text-[clamp(2.4rem,7vw,5rem)] font-bold uppercase leading-[0.92] tracking-[-0.055em] text-paper"
            >
              {doc.title}
            </h1>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-display text-[9px] uppercase tracking-[0.28em] text-muted">{doc.updated}</p>
              <Link
                to="/contact"
                className="link-sweep inline-flex w-fit items-center gap-2 font-display text-[9px] uppercase tracking-[0.24em] text-brand transition-colors hover:text-paper"
              >
                Questions? Contact us
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
            <div className="mt-8 max-w-[68ch] space-y-4">
              {doc.intro.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-[1.75] text-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </header>

          <div className="mt-12 grid gap-12 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-display text-[8px] uppercase tracking-[0.3em] text-muted">On this page</p>
              <ol className="mt-5 space-y-2.5 border-l border-white/10">
                {doc.sections.map((section) => (
                  <li key={section.number}>
                    <a
                      href={anchor(section.number)}
                      onClick={(event) => {
                        event.preventDefault();
                        scrollToTarget(anchor(section.number));
                      }}
                      className="group flex gap-3 border-l border-transparent pl-4 text-[12px] leading-snug text-muted transition-colors hover:border-brand/60 hover:text-paper focus-visible:border-brand/60 focus-visible:text-paper"
                    >
                      <span aria-hidden="true" className="font-display text-[9px] tracking-[0.18em] text-brand/60">
                        {section.number}
                      </span>
                      <span className="py-1">{section.title}</span>
                    </a>
                  </li>
                ))}
              </ol>

              <div className="mt-10 border-t border-white/[0.08] pt-5">
                <p className="font-display text-[8px] uppercase tracking-[0.3em] text-muted">More legal</p>
                <ul className="mt-4 space-y-2.5">
                  {legalLinks
                    .filter((link) => link.href !== doc.slug)
                    .map((link) => (
                      <li key={link.href}>
                        <Link
                          to={link.href}
                          className="link-sweep text-[13px] text-muted transition-colors hover:text-paper"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>

            <div className="max-w-[72ch]">
              <div className="space-y-12 sm:space-y-14">
                {doc.sections.map((section) => (
                  <section
                    key={section.number}
                    id={`legal-${section.number}`}
                    aria-labelledby={`legal-${section.number}-title`}
                    className="scroll-mt-28"
                  >
                    <div className="flex items-baseline gap-4">
                      <span aria-hidden="true" className="font-display text-[11px] tracking-[0.22em] text-brand/70">
                        {section.number}
                      </span>
                      <h2
                        id={`legal-${section.number}-title`}
                        className="font-display text-[clamp(1.15rem,2.2vw,1.6rem)] font-semibold uppercase leading-tight tracking-[-0.02em] text-paper"
                      >
                        {section.title}
                      </h2>
                    </div>
                    <div className="mt-5 space-y-4 border-l border-white/[0.08] pl-5 sm:pl-6">
                      {section.blocks.map((block, index) => (
                        <Block key={`${section.number}-${index}`} block={block} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-14 flex flex-col gap-5 rounded-[1.2rem] border border-white/[0.08] bg-surface/60 p-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-[9px] uppercase tracking-[0.28em] text-brand">Questions</p>
                  <p className="mt-2 max-w-[36ch] text-sm leading-relaxed text-muted">
                    Reach the team directly if anything in this document needs clarification.
                  </p>
                </div>
                <Link
                  to="/contact"
                  className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-paper transition-colors hover:border-brand/60 hover:bg-brand hover:text-ink"
                >
                  Contact us
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
