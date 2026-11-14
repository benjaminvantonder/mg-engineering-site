import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "./Icons";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

const spring = { type: "spring" as const, stiffness: 380, damping: 24 };
const MotionLink = motion(Link);

export function PrimaryButton({ children, href, to, onClick, className = "", ariaLabel, target, rel }: ButtonProps) {
  const classes = `group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand px-7 py-4 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-ink ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-[101%] rounded-full bg-paper transition-transform duration-500 ease-spring group-hover:translate-x-0 group-focus-visible:translate-x-0"
      />
    </>
  );

  if (to) {
    return (
      <MotionLink
        to={to}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        transition={spring}
      >
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        transition={spring}
        target={target}
        rel={rel}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={spring}
    >
      {content}
    </motion.button>
  );
}

export function GhostButton({ children, href, to, onClick, className = "", ariaLabel, target, rel }: ButtonProps) {
  const classes = `group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/25 px-7 py-4 font-display text-[11px] font-bold uppercase tracking-[0.16em] text-paper transition-colors duration-300 hover:border-brand/60 hover:text-ink ${className}`;

  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-[101%] rounded-full bg-brand transition-transform duration-500 ease-spring group-hover:translate-x-0 group-focus-visible:translate-x-0"
      />
    </>
  );

  if (to) {
    return (
      <MotionLink
        to={to}
        onClick={onClick}
        aria-label={ariaLabel}
        className={classes}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        transition={spring}
      >
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        whileHover={{ scale: 1.015 }}
        whileTap={{ scale: 0.98 }}
        transition={spring}
        target={target}
        rel={rel}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
      whileHover={{ scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={spring}
    >
      {content}
    </motion.button>
  );
}
