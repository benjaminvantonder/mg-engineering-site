import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrandMark } from "./BrandMark";

interface IntroCurtainProps {
  onDone: () => void;
}

export function IntroCurtain({ onDone }: IntroCurtainProps) {
  const reduced = useReducedMotion() ?? false;
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduced) {
      setVisible(false);
      onDone();
      return;
    }

    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      setVisible(false);
      onDone();
    }, 750);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [onDone, reduced]);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          role="status"
          aria-label="MG Engineering is loading"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-ink"
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: reduced ? 0 : 0.5, ease: [0.76, 0, 0.24, 1] }}
        >
          <div aria-hidden="true" className="absolute inset-0 grid-lines opacity-30" />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[110px]"
          />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "120%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <BrandMark
                  alt=""
                  priority
                  className="h-24 w-24 rounded-[1.6rem] p-3 shadow-[0_18px_60px_rgba(0,0,0,0.45)] sm:h-28 sm:w-28"
                />
              </motion.div>
            </div>
            <motion.p
              className="mt-6 font-display text-2xl font-bold uppercase tracking-[-0.02em] text-paper sm:text-3xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              MG <span className="text-brand">Engineering</span>
            </motion.p>

            <div className="mt-8 h-px w-40 overflow-hidden bg-white/10">
              <motion.div
                className="h-full origin-left bg-brand"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            <p className="mt-5 font-display text-[9px] uppercase tracking-[0.35em] text-muted">
              Electrical &amp; Mechanical
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}