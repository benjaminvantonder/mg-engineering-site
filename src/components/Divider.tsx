import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function Divider() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 55%"],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <div ref={ref} aria-hidden="true" className="shell">
      <motion.div
        className="h-px origin-left bg-gradient-to-r from-brand/80 via-brand/30 to-transparent"
        style={{ scaleX: reduced ? 1 : scaleX }}
      />
    </div>
  );
}