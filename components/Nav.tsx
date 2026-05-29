"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignatureMark } from "./SignatureMark";

/**
 * Nav — the always-visible main navigation.
 *
 * Five room links, plus a contextual "Inquire" link on the right that:
 *  - says "Private inquiry →" on the Pieces page
 *  - says "Trade inquiry →" on Valley/Work/Harvest pages
 *  - says "Inquire →" on home and inquire pages
 *
 * Quiet intelligence: the link target also changes with the label.
 */

const navItems = [
  { href: "/valley", label: "The Valley" },
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

export function Nav() {
  const pathname = usePathname();
  const inquire = getContextualInquire(pathname);

  return (
    <nav className="relative z-10 grid grid-cols-[1fr_auto_1fr] items-center border-b border-line-soft bg-bone px-10 pb-[22px] pt-6 max-md:grid-cols-[1fr_auto] max-md:gap-3 max-md:px-5 max-md:py-[18px]">
      {/* Wordmark */}
      <Link
        href="/"
        className="col-start-1 flex items-center gap-[14px] text-ink no-underline"
      >
        <SignatureMark width={42} />
        <span className="font-sans text-[18px] font-light tracking-wordmark text-ink">
          PASHM
        </span>
        <span className="ml-1 font-arabic text-[18px] text-stone" aria-hidden>
          پشم
        </span>
      </Link>

      {/* Centered links — hidden on mobile */}
      <ul className="col-start-2 flex gap-[38px] max-md:hidden">
        {navItems.map((item) => {
          const isCurrent = pathname.startsWith(item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href as any}
                className={`group relative pb-[5px] text-[11px] uppercase tracking-[0.22em] no-underline transition-colors duration-[0.4s] ${
                  isCurrent ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-ink transition-transform duration-[0.6s] ease-[cubic-bezier(.7,0,.2,1)] group-hover:origin-left group-hover:scale-x-100 ${
                    isCurrent ? "origin-left scale-x-100" : ""
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Contextual inquire link */}
      <Link
        href={inquire.href as any}
        className="col-start-3 justify-self-end border-b border-ink pb-1 text-[11px] uppercase tracking-[0.22em] text-ink no-underline max-md:col-start-2"
      >
        {inquire.label}
      </Link>
    </nav>
  );
}
