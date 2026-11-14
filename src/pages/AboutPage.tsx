import { About } from "../components/About";
import { Testimonials } from "../components/Testimonials";
import { PageMasthead, PageNext } from "../components/PageNav";
import { PageTransition } from "../components/PageTransition";

export function AboutPage() {
  return (
    <PageTransition>
      <PageMasthead current="About" />
      <About />
      <Testimonials />
      <PageNext
        to="/services"
        eyebrow="Next / 02"
        title="Our services"
        meta="Nine capabilities across electrical, mechanical, solar, HVAC and generators"
      />
    </PageTransition>
  );
}
