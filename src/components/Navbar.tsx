import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks, site } from "../content";
import { BrandMark } from "./BrandMark";
import { PrimaryButton } from "./Buttons";

export function Navbar() {
  const reduced = useReducedMotion() ?? false;
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const lastScroll = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      lastScroll.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    document.body.dataset.menuOpen = "true";

    const menu = menuRef.current;
    const closeButton = menu?.querySelector<HTMLElement>("[data-menu-close]");
    closeButton?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }

      if (event.key !== "Tab" || !menu) return;

      const focusable = Array.from(
        menu.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      ).filter((element) => element.offsetParent !== null);

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.removeAttribute("data-menu-open");
      previousFocus?.focus();
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -110 }}
        animate={{ y: "0%" }}
        transition={{ duration: reduced ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-[80] transition-colors duration-500 ${
          scrolled
            ? "border-b border-white/[0.08] bg-ink/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-[76px] items-center justify-between gap-4 lg:h-[88px]">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
            className="group flex shrink-0 items-center gap-3"
          >
            <BrandMark
              alt=""
              priority
              className="h-10 w-10 rounded-xl p-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.35)] ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="flex flex-col">
              <span className="font-display text-[14px] font-bold uppercase leading-none tracking-[0.09em] text-paper sm:text-[15px]">
                MG <span className="text-brand">Engineering</span>
              </span>
              <span className="mt-1.5 hidden font-display text-[8px] font-medium uppercase tracking-[0.32em] text-muted sm:block">
                Electrical &amp; Mechanical
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `link-sweep group flex items-center gap-1.5 font-display text-[10px] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 ${
                    isActive ? "text-paper" : "text-muted hover:text-paper"
                  }`
                }
              >
                {index > 0 && <span className="text-[8px] text-brand/70">0{index}</span>}
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <PrimaryButton
              to="/contact"
              className="hidden px-5 py-3 text-[10px] sm:inline-flex lg:px-6"
              ariaLabel="Get in touch with MG Engineering"
            >
              Get in touch
            </PrimaryButton>

            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen(true)}
              className="relative grid h-11 w-11 place-items-center rounded-full border border-white/15 text-paper transition-colors duration-300 hover:border-brand/60 hover:text-brand lg:hidden"
            >
              <span className="sr-only">Open menu</span>
              <span aria-hidden="true" className="flex flex-col items-end gap-1.5">
                <span className="block h-px w-5 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduced ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduced ? 0.01 : 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[110] flex flex-col overflow-y-auto bg-ink"
          >
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full bg-brand/10 blur-[120px]"
            />

            <div className="shell relative flex h-[76px] shrink-0 items-center justify-between">
              <span className="font-display text-[14px] font-bold uppercase tracking-[0.09em] text-paper">
                MG <span className="text-brand">Engineering</span>
              </span>
              <button
                type="button"
                data-menu-close
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-paper transition-colors duration-300 hover:border-brand/60 hover:text-brand"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                >
                  <path d="m6 6 12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <nav aria-label="Mobile" className="shell relative flex flex-1 flex-col justify-center py-8">
              <ul className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={reduced ? false : { opacity: 0, y: 26 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: reduced ? 0 : 0.55,
                      delay: reduced ? 0 : 0.16 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-white/[0.07]"
                  >
                    <NavLink
                      to={link.href}
                      end={link.href === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-center justify-between py-4 font-display text-[clamp(2.6rem,12vw,4.6rem)] font-bold uppercase leading-none tracking-[-0.04em] transition-colors duration-300 ${
                          isActive ? "text-brand" : "text-paper hover:text-brand"
                        }`
                      }
                    >
                      <span>{link.label}</span>
                      <span className="flex items-center gap-3">
                        {index > 0 && (
                          <span className="font-display text-[10px] tracking-[0.2em] text-muted">0{index}</span>
                        )}
                        <span aria-hidden="true" className="text-2xl text-brand/60 transition-transform duration-300 group-hover:translate-x-1">
                          ↗
                        </span>
                      </span>
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={reduced ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.4 }}
                className="mt-10 flex flex-col gap-5"
              >
                <PrimaryButton
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="w-full sm:w-auto"
                  ariaLabel="Get in touch with MG Engineering"
                >
                  Get in touch
                </PrimaryButton>
                <div className="flex flex-col gap-1.5 text-sm text-muted">
                  <a href={`mailto:${site.email}`} className="link-sweep w-fit text-paper">
                    {site.email}
                  </a>
                  <address className="not-italic">{site.addressLine}</address>
                </div>
              </motion.div>
            </nav>

            <div className="shell relative pb-8">
              <p className="font-display text-[9px] uppercase tracking-[0.35em] text-muted">
                {site.descriptor} · South Africa
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
