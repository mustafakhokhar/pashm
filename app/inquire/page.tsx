import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Inquire",
  description: "Write to PASHM. Replies come from the family. Two channels — Trade and Private.",
};

/**
 * Inquire index — the chooser.
 *
 * Two large panels, each linking to its dedicated form page.
 * If a user arrives here directly (rather than via the contextual nav),
 * this page makes the bifurcation explicit before they see a form.
 */

export default function InquireIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="§ Inquire"
        title="Write to us. Replies come from the family."
        lead="Two channels. Choose the one that fits — the form, the tone, and the person who replies are different on each side."
      />

      <section className="px-10 pb-[100px] pt-[60px] max-md:px-5 max-md:pb-[60px] max-md:pt-10">
        <div className="mx-auto max-w-[1340px]">
          <div className="grid grid-cols-2 border border-ink max-md:grid-cols-1">
            <Link
              href="/inquire/trade"
              className="group block cursor-pointer border-r border-ink p-[60px] text-ink no-underline transition-colors duration-[0.4s] hover:bg-bone-warm max-md:border-b max-md:border-r-0 max-md:p-9"
            >
              <div className="mb-4 text-[10px] uppercase tracking-ultra-wide text-stone">i</div>
              <h3 className="mb-[14px] font-sans text-[32px] font-light tracking-[-0.012em] text-ink max-md:text-[26px]">
                Trade
              </h3>
              <div className="max-w-[38ch] text-[14px] leading-[1.6] text-ink-soft">
                For mills, processors, ateliers, and retailers. Fibre and yarn by the kilo;
                finished pieces in small lots for resale or commission.
              </div>
              <div className="mt-9 text-[11px] uppercase tracking-[0.24em] text-ink">
                Open Trade enquiry →
              </div>
            </Link>

            <Link
              href="/inquire/private"
              className="group block cursor-pointer p-[60px] text-ink no-underline transition-colors duration-[0.4s] hover:bg-bone-warm max-md:p-9"
            >
              <div className="mb-4 text-[10px] uppercase tracking-ultra-wide text-stone">ii</div>
              <h3 className="mb-[14px] font-sans text-[32px] font-light tracking-[-0.012em] text-ink max-md:text-[26px]">
                Private commissions
              </h3>
              <div className="max-w-[38ch] text-[14px] leading-[1.6] text-ink-soft">
                For individuals and households. Shawls, stoles, scarves, mufflers — made to
                commission, over a season.
              </div>
              <div className="mt-9 text-[11px] uppercase tracking-[0.24em] text-ink">
                Open Private enquiry →
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
