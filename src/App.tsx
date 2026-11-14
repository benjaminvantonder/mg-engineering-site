import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MotionConfig, useReducedMotion } from "framer-motion";
import { ScrollTrigger } from "./lib/gsap";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import { IntroCurtain } from "./components/IntroCurtain";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { FilmGrain } from "./components/FilmGrain";
import { ScrollProgress } from "./components/ScrollProgress";
import { RouteEffects } from "./components/RouteEffects";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ContactPage } from "./pages/ContactPage";
import { LegalPage } from "./pages/LegalPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { legalDocs } from "./legal";

export default function App() {
  const reduced = useReducedMotion() ?? false;
  const [introDone, setIntroDone] = useState(false);

  const handleIntroDone = useCallback(() => setIntroDone(true), []);

  useSmoothScroll(introDone, reduced);

  useEffect(() => {
    if (reduced) setIntroDone(true);
  }, [reduced]);

  useEffect(() => {
    if (!introDone) return;

    const timer = window.setTimeout(() => ScrollTrigger.refresh(), 150);
    document.fonts.ready.then(() => ScrollTrigger.refresh()).catch(() => {});

    return () => window.clearTimeout(timer);
  }, [introDone]);

  return (
    <MotionConfig reducedMotion="user">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <CustomCursor />
      <FilmGrain />
      <ScrollProgress />
      <IntroCurtain onDone={handleIntroDone} />
      <RouteEffects />

      <Navbar />

      <main id="main" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<HomePage ready={introDone} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/privacy-policy"
            element={<LegalPage doc={legalDocs["privacy-policy"]} />}
          />
          <Route path="/terms-of-use" element={<LegalPage doc={legalDocs["terms-of-use"]} />} />
          <Route path="/popia" element={<LegalPage doc={legalDocs.popia} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </MotionConfig>
  );
}
