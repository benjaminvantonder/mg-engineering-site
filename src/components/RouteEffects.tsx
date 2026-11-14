import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageMeta } from "../content";
import { resetScroll } from "../lib/scroll";
import { ScrollTrigger } from "../lib/gsap";

function setMeta(selector: string, value: string): void {
  document.querySelector(selector)?.setAttribute("content", value);
}

export function RouteEffects() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = pageMeta[pathname] ?? {
      title: "Page not found | MG Engineering",
      description: "The page you are looking for could not be found.",
    };

    document.title = meta.title;
    setMeta('meta[name="description"]', meta.description);
    setMeta('meta[property="og:title"]', meta.title);
    setMeta('meta[property="og:description"]', meta.description);
    setMeta('meta[name="twitter:title"]', meta.title);
    setMeta('meta[name="twitter:description"]', meta.description);
    setMeta('meta[property="og:url"]', `https://www.matlag.co.za${pathname === "/" ? "/" : pathname}`);
    setMeta('meta[name="twitter:url"]', `https://www.matlag.co.za${pathname === "/" ? "/" : pathname}`);

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
