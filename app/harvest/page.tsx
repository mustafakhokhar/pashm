import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { Fig } from "@/components/Fig";
import { RichText } from "@/components/RichText";
import { HARVEST } from "@/content/data";

export const metadata: Metadata = {
  title: "Harvest",
  description:
    "An annual record of each spring harvest in the Ushu Valley. Weather, yield, micron count, and notes from the family.",
};

/**
 * Harvest index — vintage archive.
 *
 * Each year is a row that links to /harvest/[year] for the long-form note.
 * The current vintage gets a featured block below the list.
 */

export default function HarvestPage() {
  const currentYear = HARVEST.find((h) => h.status === "Current vintage");

  return (
    <>
      <PageHeader
        eyebrow="§ Harvest"
        title="An annual record. One short spring, kept on the page."
        lead="Each spring we write a short account of the harvest — the weather, the yield, the year's micron count, and anything worth noting from the valley. The full reports are available on request."
      />

      <section className="px-10 pb-[100px] pt-[60px] max-md:px-5 max-md:pb-[60px] max-md:pt-10">
        <div className="mx-auto max-w-[1340px]">
          <ul className="list-none border-t border-ink">
            {HARVEST.map((entry) => {
              const isUpcoming = entry.status === "Forthcoming";
              const linkable = !isUpcoming && entry.body;
              const content = (
                <div
                  className={`group relative grid grid-cols-[1.5fr_2fr_2fr_1fr] items-center gap-10 border-b border-line-soft py-9 transition-[padding] duration-500 max-md:grid-cols-[auto_1fr] max-md:gap-x-[18px] max-md:gap-y-[14px] max-md:py-6 ${
                    linkable ? "cursor-pointer hover:pl-[18px]" : ""
                  } ${isUpcoming ? "opacity-55 hover:opacity-70" : ""}`}
                >
                  {linkable && (
                    <span className="absolute bottom-0 left-0 top-0 w-[3px] origin-top scale-y-0 bg-ink transition-transform duration-[0.6s] ease-[cubic-bezier(.7,0,.2,1)] group-hover:scale-y-100" />
                  )}
                  <span className="font-sans text-[36px] font-light tracking-[-0.01em] text-ink max-md:row-span-2 max-md:text-[24px]">
                    {entry.year}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-ink-soft max-md:col-start-2">
                    {entry.vintageCode}
                  </span>
                  <span className="max-w-[50ch] font-serif text-[15px] font-light italic leading-[1.55] text-ink-soft max-md:col-start-2">
                    {entry.summary}
                  </span>
                  <span className="justify-self-end text-[10px] uppercase tracking-ultra-wide text-stone max-md:hidden">
                    {entry.status}
                  </span>
                </div>
              );

              return (
                <li key={entry.year}>
                  {linkable ? (
                    <Link href={`/harvest/${entry.year}` as any} className="block text-ink no-underline">
                      {content}
                    </Link>
                  ) : (
                    content
                  )}
                </li>
              );
            })}
          </ul>

          {/* Featured current vintage */}
          {currentYear?.body && (
            <div className="mt-20 border-t border-line-soft pt-[100px] max-md:mt-10 max-md:pt-[60px]">
              <h3 className="mb-[50px] font-sans text-[clamp(32px,3vw,44px)] font-extralight leading-[1.1] tracking-[-0.012em] text-ink max-md:mb-6 max-md:text-[28px]">
                Spring 2026 — A note from the valley.
              </h3>
              <div className="grid grid-cols-[5fr_7fr] items-start gap-20 max-md:grid-cols-1 max-md:gap-6">
                <div>
                  <Fig
                    figId="Fig. 22"
                    figMeta="Workshop · Spring"
                    brief="Workshop in spring. Open door, sorted fleece in baskets, morning light."
                    aspect="4/5"
                  />
                </div>
                <RichText
                  paragraphs={currentYear.body}
                  className="max-w-[55ch] text-[16px] leading-[1.8] text-ink-soft"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
