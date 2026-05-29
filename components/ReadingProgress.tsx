"use client";

import { useEffect, useState } from "react";

/**
 * ReadingProgress — thin 1px line on the left edge of the viewport.
 * Fills as the user scrolls. Used on long pages (Valley, Harvest detail).
 *
 * Intentionally subtle. Not a screaming progress bar.
 */

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
      setProgress(Math.max(0, Math.min(1, scrolled)));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[50] w-px bg-ink transition-[height] duration-100"
      style={{ height: `${progress * 100}vh` }}
    />
  );
}
