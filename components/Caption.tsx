/**
 * Caption — used beneath Fig and Plate components.
 * Two parts: left-hand description, right-hand identifier (Pl. 01, Fig. 02, etc.)
 */

type Props = {
  lhs: string;
  rhs?: string;
  tone?: "light" | "dark";
  className?: string;
};

export function Caption({ lhs, rhs, tone = "light", className = "" }: Props) {
  const primary = tone === "dark" ? "text-bone/50" : "text-ink-soft";
  const secondary = tone === "dark" ? "text-bone/40" : "text-stone";

  return (
    <div
      className={`mt-[18px] flex items-baseline justify-between gap-6 px-1 text-[11px] font-normal uppercase tracking-[0.18em] ${primary} ${className}`}
    >
      <span>{lhs}</span>
      {rhs && <span className={`whitespace-nowrap ${secondary}`}>{rhs}</span>}
    </div>
  );
}
