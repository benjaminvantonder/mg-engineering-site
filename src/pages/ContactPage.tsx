import { Contact } from "../components/Contact";
import { PageMasthead, PageNext } from "../components/PageNav";
import { PageTransition } from "../components/PageTransition";

export function ContactPage() {
  return (
    <PageTransition>
      <PageMasthead current="Contact" />
      <Contact />
      <PageNext
        to="/services"
        eyebrow="Capabilities"
        title="Explore our services"
        meta="Electrical, mechanical, solar, HVAC, generators and monitoring"
      />
    </PageTransition>
  );
}
