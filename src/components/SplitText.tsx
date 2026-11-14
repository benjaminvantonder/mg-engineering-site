import { motion, useReducedMotion } from "framer-motion";

interface SplitTextProps {
  lines: readonly (readonly string[])[];
  className?: string;
  ready?: boolean;
  stagger?: number;
  highlightWords?: readonly string[];
}

export function SplitText({
  lines,
  className,
  ready = true,
  stagger = 0.075,
  highlightWords = [],
}: SplitTextProps) {
  const reduced = useReducedMotion() ?? false;

  return (
    <span className={className}>
      {lines.map((line, lineIndex) => (
        <span
          key={`${lineIndex}-${line.join("-")}`}
          className="block overflow-hidden pb-[0.08em] -mb-[0.08em]"
        >
          {line.map((word, wordIndex) => {
            const order = lineIndex * 4 + wordIndex;
            const highlighted = highlightWords.includes(word);

            return (
              <span key={`${word}-${wordIndex}`} className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <motion.span
                  className={`inline-block ${highlighted ? "text-brand" : ""}`}
                  initial={reduced ? false : { y: "118%" }}
                  animate={reduced || ready ? { y: "0%" } : { y: "118%" }}
                  transition={{
                    duration: reduced ? 0 : 0.9,
                    delay: reduced ? 0 : 0.08 + order * stagger,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                  {wordIndex < line.length - 1 ? "\u00A0" : ""}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
}