import Link from "next/link";

/**
 * Footer — shared across every room.
 * Four columns: brand, site links, inquire links, contact info.
 * The signature divider sits above on its own row.
 */

export function Footer() {
  return (
    <footer className="dot-pattern-dark relative overflow-hidden bg-ink px-10 pb-10 pt-20 text-bone max-md:px-5 max-md:pb-[30px] max-md:pt-[60px]">
      <div className="relative mx-auto max-w-[1340px]">
        {/* Signature divider */}
        <div className="mb-[50px] flex justify-center text-bone/30">
          <svg width="120" height="10" viewBox="0 0 120 10" fill="none">
            <line x1="0" y1="5" x2="120" y2="5" stroke="currentColor" strokeWidth="0.6" />
            <ellipse cx="60" cy="5" rx="3.5" ry="2" fill="currentColor" />
          </svg>
        </div>

        {/* Four-column grid */}
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-[60px] border-b border-bone/20 pb-[60px] max-md:grid-cols-1 max-md:gap-9 max-md:pb-9">
          <div>
            <h5 className="mb-[22px] text-[10px] font-normal uppercase tracking-ultra-wide text-stone-light">
              PASHM
            </h5>
            <p className="max-w-[42ch] font-serif text-[15px] font-light italic leading-relaxed text-bone/70">
              Cashmere combed by hand in the Swat Valley. The Yousafzai family,
              since 1928. Fibre, yarn, and finished pieces, dispatched direct.
            </p>
          </div>

          <div>
            <h5 className="mb-[22px] text-[10px] font-normal uppercase tracking-ultra-wide text-stone-light">
              The Rooms
            </h5>
            <ul className="space-y-[6px] text-[14px] leading-[1.85] text-bone/70">
              <li><Link href="/work" className="text-bone/70 hover:text-bone">The Work</Link></li>
              <li><Link href="/pieces" className="text-bone/70 hover:text-bone">Pieces</Link></li>
              <li><Link href="/harvest" className="text-bone/70 hover:text-bone">Harvest</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-[22px] text-[10px] font-normal uppercase tracking-ultra-wide text-stone-light">
              Inquire
            </h5>
            <ul className="space-y-[6px] text-[14px] leading-[1.85] text-bone/70">
              <li><Link href="/inquire/trade" className="text-bone/70 hover:text-bone">Trade enquiries</Link></li>
              <li><Link href="/inquire/private" className="text-bone/70 hover:text-bone">Private commissions</Link></li>
              <li><span className="cursor-default">Visit (by invitation)</span></li>
              <li><span className="cursor-default">Press</span></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-[22px] text-[10px] font-normal uppercase tracking-ultra-wide text-stone-light">
              Contact
            </h5>
            <ul className="space-y-[6px] text-[14px] leading-[1.85] text-bone/70">
              <li>trade@pashm.example</li>
              <li>private@pashm.example</li>
              <li>Swat Valley · Pakistan</li>
            </ul>
          </div>
        </div>

        {/* Foot meta */}
        <div className="mt-9 grid grid-cols-3 items-center gap-6 text-[10px] uppercase tracking-[0.24em] text-stone max-md:grid-cols-1 max-md:gap-[14px]">
          <span>© 2026 — Yousafzai family</span>
          <span className="text-center max-md:text-left">
            <span className="font-arabic text-[14px] normal-case tracking-normal text-stone-light">پشم</span>
            <span className="ml-2">· Swat · Doha · Milan</span>
          </span>
          <span className="text-right max-md:text-left">Imprint · Privacy</span>
        </div>
      </div>
    </footer>
  );
}
