import { Services } from "../components/Services";
import { Process } from "../components/Process";
import { Compliance } from "../components/Compliance";
import { PageMasthead, PageNext } from "../components/PageNav";
import { PageTransition } from "../components/PageTransition";

export function ServicesPage() {
  return (
    <PageTransition>
      <PageMasthead current="Services" />
      <Services />
      <Process />
      <Compliance />
      <PageNext
        to="/contact"
        eyebrow="Next / 03"
        title="Talk to us"
        meta="Tell us about your electrical, mechanical, solar, HVAC or generator project"
      />
    </PageTransition>
  );
}
