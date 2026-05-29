/**
 * UtilityBar — the always-visible strip above the main nav.
 * Carries location info on the left; a quiet EN · العربية bilingual mark on the right.
 * The brand speaks in English (strategy §9), so this is an intentional typographic
 * nod to the fibre's Persian/Urdu roots — not an interactive language switch.
 */

export function UtilityBar() {
  return (
    <div className="relative z-10 flex items-center justify-between border-b border-line-soft px-10 py-[14px] text-[10px] uppercase tracking-[0.22em] text-stone max-md:px-5 max-md:py-3 max-md:text-[9px]">
      <div className="flex items-center gap-7 max-md:gap-[14px]">
        <span>Ushu Valley</span>
        <span className="text-stone-light max-md:hidden">·</span>
        <span>Upper Swat</span>
        <span className="text-stone-light max-md:hidden">·</span>
        <span>2,400 – 2,800 m</span>
      </div>
      <div className="flex items-center gap-[14px]">
        <span className="text-ink">EN</span>
        <span className="text-stone-light">·</span>
        <span
          aria-hidden
          className="font-arabic text-[13px] normal-case tracking-normal text-stone-light"
        >
          العربية
        </span>
      </div>
    </div>
  );
}
