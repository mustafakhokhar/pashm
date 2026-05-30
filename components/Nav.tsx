"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignatureMark } from "./SignatureMark";

/**
 * Nav — the always-visible main navigation.
 *
 * Wordmark on the left; the room links and a contextual "Inquire" link live in
 * ONE <ul> on the right, each as an identical <li> — so they share the exact
 * same box model and align perfectly. "Inquire" differs only by font weight.
 * The contextual link:
 *  - says "Private inquiry →" on the Pieces page
 *  - says "Trade inquiry →" on Valley/Work/Harvest pages
 *  - says "Inquire →" on home and inquire pages
 *
 * Quiet intelligence: the link target also changes with the label.
 *
 * The bar (border + background) spans full width; its content is constrained to
 * the same `mx-auto max-w-[1340px]` container the page sections use, so the
 * wordmark and right-hand links align with the page content on wide screens.
 */

const navItems = [
  { href: "/work", label: "The Work" },
  { href: "/pieces", label: "Pieces" },
  { href: "/harvest", label: "Harvest" },
] as const;

function getContextualInquire(pathname: string): { label: string; href: string } {
  if (pathname.startsWith("/pieces")) {
    return { label: "Private inquiry →", href: "/inquire/private" };
  }
  if (
    pathname.startsWith("/work") ||
    pathname.startsWith("/valley") ||
    pathname.startsWith("/harvest")
  ) {
    return { label: "Trade inquiry →", href: "/inquire/trade" };
  }
  return { label: "Inquire →", href: "/inquire" };
}

const linkClass =
  "group relative pb-[5px] text-[11px] uppercase tracking-[0.22em] no-underline transition-colors duration-[0.4s]";

function Underline({ current = false }: { current?: boolean }) {
  return (
    <span
      className={`absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-ink transition-transform duration-[0.6s] ease-[cubic-bezier(.7,0,.2,1)] group-hover:origin-left group-hover:scale-x-100 ${
        current ? "origin-left scale-x-100" : ""
      }`}
    />
  );
}

export function Nav() {
  const pathname = usePathname();
  const inquire = getContextualInquire(pathname);

  return (
    <nav className="relative z-10 border-b border-line-soft bg-bone px-10 pb-[22px] pt-6 max-md:px-5 max-md:py-[18px]">
      <div className="mx-auto flex max-w-[1340px] items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-[14px] text-ink no-underline"
        >
          <SignatureMark width={42} />
          <span className="font-sans text-[18px] font-light tracking-wordmark text-ink">
            PASHM
          </span>
          <span className="ml-1 font-arabic text-[18px] text-stone" aria-hidden>
            پشم
          </span>
        </Link>

        {/* Room links + contextual inquire — one list, identical items */}
        <ul className="flex items-center gap-[38px]">
          {navItems.map((item) => {
            const isCurrent = pathname.startsWith(item.href);
            return (
              <li key={item.href} className="max-md:hidden">
                <Link
                  href={item.href as any}
                  className={`${linkClass} ${isCurrent ? "text-ink" : "text-ink-soft hover:text-ink"}`}
                >
                  {item.label}
                  <Underline current={isCurrent} />
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href={inquire.href as any}
              className={`${linkClass} font-medium text-ink-soft hover:text-ink`}
            >
              {inquire.label}
              <Underline />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
