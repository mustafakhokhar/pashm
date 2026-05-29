import type { ReactNode } from "react";

/**
 * Plate — the framed mat treatment.
 * Wraps a Fig in a warm bone-warm border with an inset hairline.
 * Used in the hero, and anywhere a photograph should feel "presented" rather than displayed.
 */

type Props = {
  children: ReactNode;
  className?: string;
};

export function Plate({ children, className = "" }: Props) {
  return (
    <div
      className={`relative bg-bone-warm p-3 ${className}`}
      style={{ boxShadow: "inset 0 0 0 1px rgba(24, 20, 15, 0.12)" }}
    >
      {children}
    </div>
  );
}
