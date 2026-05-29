import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { TradeForm } from "@/components/forms/TradeForm";

export const metadata: Metadata = {
  title: "Trade enquiry",
  description:
    "For mills, processors, ateliers, and retailers. Fibre and yarn by the kilo; finished pieces in small lots.",
};

/**
 * Trade inquiry page — for B2B buyers.
 * Reply target: trade@pashm.example (or TRADE_INBOX env var).
 */

export default function TradeInquirePage() {
  return (
    <>
      <PageHeader
        eyebrow="§ Inquire — Trade"
        title="For mills, processors, ateliers, and retailers."
      />

      <section className="px-10 pt-[60px] max-md:px-5 max-md:pt-10">
        <div className="mx-auto max-w-[1340px]">
          <div className="mb-[60px] grid grid-cols-[3fr_9fr] gap-20 border-b border-line-soft pb-[60px] max-md:mb-[30px] max-md:grid-cols-1 max-md:gap-[18px] max-md:pb-[30px]">
            <div>
              <div className="text-[10px] uppercase tracking-ultra-wide text-stone">i — Trade</div>
            </div>
            <div>
              <h2 className="max-w-[20ch] font-sans text-[clamp(32px,3.2vw,48px)] font-extralight leading-[1.1] tracking-[-0.015em] text-ink max-md:text-[28px]">
                Write briefly. We work with a small number of houses on annual terms.
              </h2>
              <p className="mt-7 max-w-[56ch] text-[16px] leading-[1.75] text-ink-soft">
                We respond within{" "}
                <em className="font-serif italic text-ink">five working days</em>, by name. New
                relationships are welcome and reviewed each season.
              </p>
            </div>
          </div>

          <TradeForm />
        </div>
      </section>
    </>
  );
}
