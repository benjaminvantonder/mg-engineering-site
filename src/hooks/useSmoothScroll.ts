import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "../lib/gsap";
import { setLenis } from "../lib/scroll";

export function useSmoothScroll(enabled: boolean, reduced: boolean): void {
  useEffect(() => {
    if (!enabled || reduced) return;

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.35,
    });

    setLenis(lenis);

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    return () => {
      lenis.off("scroll", onScroll);
      lenis.destroy();
      setLenis(null);
    };
  }, [enabled, reduced]);
}