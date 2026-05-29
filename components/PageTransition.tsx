"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

/**
 * PageTransition — the "ink wash" between rooms.
 *
 * On each client-side navigation a bone-coloured overlay starts covering the
 * viewport, then fades away to reveal the new page beneath it — the mockup's
 * "opening a door" feel. Because the new route's content is already mounted
 * under the overlay, there's no flash of the old page.
 *
 * Two deliberate exceptions get NO overlay (the page just appears):
 *   - the first paint (landing directly on a URL shouldn't blink)
 *   - visitors who prefer reduced motion
 *
 * The overlay is keyed on pathname, so each navigation remounts it and replays
 * the initial → animate sequence.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const firstRender = useRef(true);

  useEffect(() => {
    firstRender.current = false;
  }, [pathname]);

  const cover = !firstRender.current && !reduce;

  return (
    <>
      <motion.div
        key={pathname}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[100] bg-bone"
        initial={{ opacity: cover ? 1 : 0 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
      />
      {children}
    </>
  );
}
