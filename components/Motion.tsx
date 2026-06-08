"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Motion primitives for the homepage. Deliberately minimal — one reveal, one
 * scroll cue. Both collapse gracefully under prefers-reduced-motion: the reveal
 * becomes a short opacity fade with no movement; the cue stops pulsing.
 *
 * Easing matches the site's existing `lift` keyframe (cubic-bezier(.2,.7,.2,1)).
 */

const EASE = [0.2, 0.7, 0.2, 1] as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 18 }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: reduce ? 0.2 : 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollCue() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-7 flex justify-center max-md:hidden">
      <motion.span
        aria-hidden
        className="block h-7 w-px bg-bone/50"
        initial={{ opacity: 0.4 }}
        animate={reduce ? { opacity: 0.4 } : { opacity: [0.15, 0.6, 0.15], y: [0, 6, 0] }}
        transition={reduce ? undefined : { duration: 2.4, ease: "easeInOut", repeat: Infinity }}
      />
    </div>
  );
}
