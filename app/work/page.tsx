import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Fig } from "@/components/Fig";
import { RichText } from "@/components/RichText";

export const metadata: Metadata = {
  title: "The Work",
  description:
    "Four stages, between a goat in spring and a piece in your hand. From the comb to the loom.",
};

/**
 * The Work — four chapters, alternating image left/right.
 * Each chapter names the person responsible and credits them at the bottom.
 */

const CHAPTERS = [
  {
    num: "i — The Comb",
    title: "A window of about three weeks, each year.",
    figId: "Fig. 05",
    figMeta: "Process · The Comb",
    brief:
      "Bakht Mir at the comb. Tight on hands and tool, fleece coming free of the goat's coat. Late April, available light.",
    body: [
      "In late April and early May, **Bakht Mir** and his sons climb to the Ushu meadows and comb the goats by hand. We never shear.",
      "The fine under-down comes free from the coarser outer coat in a slow rhythm — each goat takes its own time. A single goat yields somewhere between sixty and two hundred grams of usable fibre across the season.",
    ],
    credit: "Bakht Mir · twenty-eight years",
  },
  {
    num: "ii — The Sort",
    title: "By hand, and slowly, in the home.",
    figId: "Fig. 06",
    figMeta: "Process · The Sort",
    brief:
      "Hands sorting and dehairing raw fleece on a wooden surface. Overhead or three-quarter angle.",
    body: [
      "The fleece comes down from the meadows by mule. **Bibi Najma** and the women of the family separate the fine under-down from the coarse outer hair, entirely by hand.",
      "Only the under-down moves on. The coarse hair goes back to the family flocks. About thirty percent of raw weight survives this stage.",
    ],
    credit: "Bibi Najma · & the family",
  },
  {
    num: "iii — The Yarn",
    title: "Low tension. Long staple. The patient stage.",
    figId: "Fig. 07",
    figMeta: "Process · The Yarn",
    brief:
      "The spinning wheel. Hidayat Khan's hands. Detail of yarn winding onto bobbin.",
    body: [
      "**Hidayat Khan** spins on a low-tension wheel he maintains himself. A kilo of fibre yields about eight thousand metres of yarn.",
      "The natural shades — cream, fawn, dark brown — come from the goats themselves. We dye only on request, and only with mineral pigments.",
    ],
    credit: "Hidayat Khan",
  },
  {
    num: "iv — The Loom",
    title: "A season to leave the loom. Some take longer.",
    figId: "Fig. 08",
    figMeta: "Process · The Loom",
    brief:
      "Ustad Akbar at his father's loom. Three-quarter view, weft in motion. Wood, time-worn.",
    body: [
      "**Ustad Akbar** weaves on the loom his father built in 1953. A single shawl takes a season to leave it. Some take longer.",
      "We do not measure the work by the day, and we do not promise dates. We promise that what arrives will be what it should be.",
    ],
    credit: "Ustad Akbar · third generation",
  },
];

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="§ The Work"
        title="Four stages, between a goat in spring and a piece in your hand."
        lead="From the comb in the high pasture, to the loom in the workshop. Every stage is done by someone we know, and named on every certificate that leaves us."
      />

      <section className="px-10 pt-[100px] max-md:px-5 max-md:pt-[50px]">
        <div className="mx-auto max-w-[1340px]">
          {CHAPTERS.map((chapter, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <div
                key={chapter.num}
                className="grid grid-cols-[6fr_6fr] items-center gap-20 border-b border-line-soft py-20 max-md:grid-cols-1 max-md:gap-[30px] max-md:py-10"
              >
                <div className={reversed ? "max-md:order-first md:order-last" : ""}>
                  <Fig
                    figId={chapter.figId}
                    figMeta={chapter.figMeta}
                    brief={chapter.brief}
                    aspect="4/5"
                  />
                </div>
                <div>
                  <div className="mb-[22px] text-[11px] font-normal uppercase tracking-ultra-wide text-stone">
                    {chapter.num}
                  </div>
                  <h3 className="mb-[30px] font-sans text-[clamp(36px,3.4vw,52px)] font-extralight leading-[1.08] tracking-[-0.015em] text-ink max-md:text-[30px]">
                    {chapter.title}
                  </h3>
                  <RichText
                    paragraphs={chapter.body}
                    className="max-w-[48ch] font-sans text-[16px] font-light leading-[1.8] text-ink-soft"
                  />
                  <div className="mt-10 flex items-center gap-[14px] text-[10px] uppercase tracking-ultra-wide text-stone">
                    <span className="h-px w-6 bg-stone" />
                    <span>{chapter.credit}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
