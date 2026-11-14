import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null): void {
  lenisInstance = instance;
}

export function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToTarget(target: string): void {
  const element = document.querySelector<HTMLElement>(target);
  if (!element) return;

  const reduced = prefersReducedMotion();
  const offset = target === "#top" ? 0 : -72;

  if (lenisInstance && !reduced) {
    lenisInstance.scrollTo(element, { offset, duration: 1.15 });
    return;
  }

  const top = element.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: reduced ? "auto" : "smooth" });
}

export function scrollToTop(): void {
  const reduced = prefersReducedMotion();

  if (lenisInstance && !reduced) {
    lenisInstance.scrollTo(0, { duration: 0.9 });
    return;
  }

  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
}

export function resetScroll(): void {
  lenisInstance?.scrollTo(0, { immediate: true });
  window.scrollTo({ top: 0, behavior: "auto" });
}