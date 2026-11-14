import { Hero } from "../components/Hero";
import { Ticker } from "../components/Ticker";
import { Craftsmanship } from "../components/Craftsmanship";
import { Explore } from "../components/Explore";
import { PageTransition } from "../components/PageTransition";

export function HomePage({ ready }: { ready: boolean }) {
  return (
    <PageTransition>
      <Hero ready={ready} />
      <Ticker />
      <Craftsmanship />
      <Explore />
    </PageTransition>
  );
}
