import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageMeta } from "../content";
import { resetScroll } from "../lib/scroll";
import { ScrollTrigger } from "../lib/gsap";

function setMeta(selector: string, value: string): void {
  document.querySelector(selector)?.setAttribute("content", value);
}

function absoluteUrl(pathname: string): string {
  const base = import.meta.env.BASE_URL;
  return new URL(`${base}${pathname.replace(/^\//, "")}`, window.location.origin).href;
}

function updateStructuredData(pageUrl: string, imageUrl: string): void {
  const script = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
  if (!script) return;

  try {
    const data = JSON.parse(script.textContent ?? "{}") as Record<string, unknown>;
    data.url = pageUrl;
    data.image = imageUrl;
    script.textContent = JSON.stringify(data);
  } catch {
    // Leave the static structured data untouched if it cannot be parsed.
  }
}

export function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname] ?? {
      title: "Page not found | MG Engineering",
      description: "The page you are looking for could not be found.",
    };

    const pageUrl = absoluteUrl(pathname);
    const imageUrl = absoluteUrl("assets/og-image.png");

    document.title = meta.title;
    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[property="og:description"]', meta.description);
    setMeta('meta[name="twitter:title"]', meta.title);
    setMeta('meta[name="twitter:description"]', meta.description);
    setMeta('meta[property="og:url"]', pageUrl);
    setMeta('meta[name="twitter:url"]', pageUrl);
    setMeta('meta[property="og:image"]', imageUrl);
    setMeta('meta[name="twitter:image"]', imageUrl);
    updateStructuredData(pageUrl, imageUrl);

    resetScroll();

    const first = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    const settle = window.setTimeout(() => ScrollTrigger.refresh(), 650);

    return () => {
      window.clearTimeout(first);
      window.clearTimeout(settle);
    };
  }, [pathname]);

  return null;
}
