import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fig } from "@/components/Fig";
import { RichText } from "@/components/RichText";
import { getHarvestByYear, getAllHarvestYears } from "@/content/data";

/**
 * Harvest year detail page — /harvest/[year].
 *
 * Statically generated at build time for every year with a body.
 */

type Props = {
  params: Promise<{ year: string }>;
};

export async function generateStaticParams() {
  return getAllHarvestYears().map((year) => ({ year: String(year) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { year } = await params;
  const entry = getHarvestByYear(parseInt(year, 10));
  if (!entry) return { title: "Harvest not found" };

  return {
    title: `Harvest ${entry.year}`,
    description: `${entry.vintageCode} — ${entry.summary}`,
  };
}

export default async function HarvestYearPage({ params }: Props) {
  const { year } = await params;
  const entry = getHarvestByYear(parseInt(year, 10));
  if (!entry || !entry.body) notFound();

  return (
    <section className="px-10 pb-[100px] pt-10 max-md:px-5 max-md:pb-[60px]">
      <div className="mx-auto max-w-[1340px]">
        <Link
          href="/harvest"
          className="mb-10 inline-flex cursor-pointer items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-soft no-underline"
        >
          <span className="text-[16px]">←</span> All harvests
        </Link>

        <div className="border-b border-line-soft pb-[70px] max-md:pb-10">
          <div className="mb-7 text-[10px] uppercase tracking-ultra-wide text-stone">
            § Harvest {entry.year}
          </div>
          <h1 className="font-sans text-[clamp(48px,5vw,84px)] font-extralight leading-[1.02] tracking-[-0.022em] text-ink max-md:text-[42px]">
            {entry.vintageCode}
          </h1>
          <p className="mt-9 max-w-[56ch] font-serif text-[19px] font-light italic leading-[1.6] text-ink-soft max-md:text-[16px]">
            {entry.summary}
          </p>
        </div>

        <div className="grid grid-cols-[5fr_7fr] items-start gap-20 pt-[80px] max-md:grid-cols-1 max-md:gap-[30px] max-md:pt-10">
          <div>
            <Fig
              figId={`Fig. ${entry.year}`}
              figMeta={`Harvest ${entry.year}`}
              brief="Workshop or pasture image from the season."
              aspect="4/5"
            />
          </div>
          <RichText
            paragraphs={entry.body}
            className="max-w-[55ch] text-[17px] leading-[1.85] text-ink-soft max-md:text-[15.5px]"
            gapClass="mt-6"
          />
        </div>
      </div>
    </section>
  );
}
