/**
 * Footer — shared across every room.
 *
 * A minimal sign-off: a top row (wordmark + contact), a hairline, then a quiet
 * meta row (copyright + origin, legal). Deliberately lean — the top nav already
 * carries wayfinding, so the footer doesn't repeat it.
 */

export function Footer() {
  return (
    <footer className="dot-pattern-dark relative overflow-hidden bg-ink px-10 py-12 text-bone max-md:px-5 max-md:py-10">
      <div className="relative mx-auto max-w-[1340px]">
        {/* Top row — wordmark + contact */}
        <div className="flex items-center justify-between gap-8 max-md:flex-col max-md:items-start max-md:gap-5">
          <div className="flex items-baseline gap-[10px]">
            <span className="font-sans text-[16px] font-normal uppercase tracking-ultra-wide text-bone/90">
              PASHM
            </span>
            <span className="font-arabic text-[16px] leading-none text-stone-light">پشم</span>
          </div>
          <div className="text-[12px] tracking-[0.02em] text-bone/75">
            <a href="mailto:trade@pashm.example" className="transition-colors hover:text-bone">
              trade@pashm.example
            </a>
            <span className="mx-[10px] text-stone">·</span>
            <a href="mailto:private@pashm.example" className="transition-colors hover:text-bone">
              private@pashm.example
            </a>
          </div>
        </div>

        {/* Hairline */}
        <div className="my-[26px] h-px w-full bg-bone/12" />

        {/* Meta row — copyright + legal */}
        <div className="flex items-center justify-between gap-6 text-[10px] uppercase tracking-[0.24em] text-stone max-md:flex-col max-md:items-start max-md:gap-3">
          <div>
            © 2026 — ALL RIGHTS RESERVED
            <span className="mx-[10px] text-stone/50">·</span>
            <span className="text-stone-light">Swat · Doha · Milan</span>
          </div>
          <div>
            <span className="cursor-default">Imprint</span>
            <span className="mx-[10px] text-stone/50">·</span>
            <span className="cursor-default">Privacy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
