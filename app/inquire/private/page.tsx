import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PrivateForm } from "@/components/forms/PrivateForm";

export const metadata: Metadata = {
  title: "Private commissions",
  description:
    "For individuals and households. Shawls, stoles, scarves, mufflers — made to commission, over a season.",
};

/**
 * Private inquiry page — for individuals and households.
 * Reply target: private@pashm.example (or PRIVATE_INBOX env var).
 *
 * Reads optional ?piece=<slug> search param via the PrivateForm component
 * to pre-fill an "Enquiry regarding" banner when arriving from a piece page.
 */

export default function PrivateInquirePage() {
  return (
    <>
      <PageHeader
        eyebrow="§ Inquire — Private"
        title="For individuals and households."
      />

      <section className="px-10 pt-[60px] max-md:px-5 max-md:pt-10">
        <div className="mx-auto max-w-[1340px]">
          <div className="mb-[60px] grid grid-cols-[3fr_9fr] gap-20 border-b border-line-soft pb-[60px] max-md:mb-[30px] max-md:grid-cols-1 max-md:gap-[18px] max-md:pb-[30px]">
            <div>
              <div className="text-[10px] uppercase tracking-ultra-wide text-stone">
                ii — Private commissions
              </div>
            </div>
            <div>
              <h2 className="max-w-[20ch] font-sans text-[clamp(32px,3.2vw,48px)] font-extralight leading-[1.1] tracking-[-0.015em] text-ink max-md:text-[28px]">
                A small number of private commissions each year.
              </h2>
              <p className="mt-7 max-w-[56ch] text-[16px] leading-[1.75] text-ink-soft">
                Write briefly about what you are hoping for; we respond within{" "}
                <em className="font-serif italic text-ink">seven working days</em>, by the family.
              </p>
            </div>
          </div>

          <PrivateForm />
        </div>
      </section>
    </>
  );
}
