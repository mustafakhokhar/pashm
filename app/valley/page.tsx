import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Fig } from "@/components/Fig";
import { Caption } from "@/components/Caption";
import { PEOPLE } from "@/content/data";

export const metadata: Metadata = {
  title: "The Valley",
  description:
    "A small valley in upper Swat, and the Yousafzai family that has worked it since 1928. The origin of PASHM cashmere.",
};

/**
 * The Valley — the long-form origin essay.
 *
 * Structure:
 *   1. Page header
 *   2. Essay i — origin (with Fraunces drop-cap on the opening paragraph)
 *   3. Full-bleed image of the herd
 *   4. Essay ii — four generations
 *   5. Dark interlude — the authorship statement
 *   6. People grid — the four people credited on every certificate
 */

export default function ValleyPage() {
  return (
    <>
      <PageHeader
        eyebrow="§ The Valley"
        title="A small valley in upper Swat, and the family that has worked it since 1928."
        lead="Pashm comes from one place. The story of how we came to comb it begins four generations ago, in a village above the tree line, with a man named Sher Ali."
      />

      {/* Essay i */}
      <section className="px-10 py-[100px] max-md:px-5 max-md:py-[50px]">
        <div className="mx-auto max-w-[1340px]">
          <div className="grid grid-cols-[3fr_9fr] gap-20 max-md:grid-cols-1 max-md:gap-6">
            <div>
              <div className="sticky top-10 text-[10px] uppercase tracking-ultra-wide text-stone max-md:static">
                i — Origin
              </div>
            </div>
            <div className="max-w-[60ch] text-[17px] leading-[1.85] text-ink max-md:text-[15.5px]">
              <p className="essay-first-letter mb-7">
                <strong className="font-normal text-ink">
                  The word pashm is older than the word cashmere.
                </strong>{" "}
                The fibre the world knows by its European name was traded along the Silk Road
                through the Hindu Kush long before it travelled out through the Kashmir Valley
                and acquired a European spelling. For most of its history, the down combed from
                goats in these mountains was simply called <em>pashm</em> — the Persian root that
                gave us pashmīna.
              </p>
              <p className="mb-7">
                The Ushu Valley sits at the eastern edge of that history. Eight kilometres of
                meadow between the snowline and the village, between two and a half and two
                thousand eight hundred metres in elevation. The goats winter low and summer high.
                Each spring they shed the fine under-down they grew against the cold. That window
                — usually three weeks in late April and early May — is the entire harvest.
              </p>
              <p>
                Our family began dispatching fleece from Ushu in{" "}
                <strong className="font-normal text-ink">1928</strong>. The trade was small at
                first: bales sent by mule down to Mingora, then on to Peshawar, Lahore, sometimes
                Amritsar. The fibre was anonymous in the way most raw materials are anonymous —
                graded, weighed, sold, and absorbed into other people&apos;s finished goods. For
                four generations that was simply the work.
              </p>
            </div>
          </div>

          {/* Image break */}
          <div className="my-[60px] max-md:my-[30px]">
            <Fig
              figId="Fig. 04"
              figMeta="Wide / Goats · Pasture"
              brief="The herd in pasture — placeholder."
              photo="https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=2400&q=85&auto=format&fit=crop"
              alt="The herd in pasture"
              aspect="21/9"
            />
            <Caption lhs="The herd, late spring. Above Matiltan." rhs="Fig. 04" />
          </div>

          {/* Essay ii */}
          <div className="grid grid-cols-[3fr_9fr] gap-20 max-md:grid-cols-1 max-md:gap-6">
            <div>
              <div className="sticky top-10 text-[10px] uppercase tracking-ultra-wide text-stone max-md:static">
                ii — Four generations
              </div>
            </div>
            <div className="max-w-[60ch] text-[17px] leading-[1.85] text-ink max-md:text-[15.5px]">
              <p className="mb-7">
                <strong className="font-normal text-ink">Haji Sher Ali Yousafzai</strong> opened
                the family&apos;s account-book in 1928. He combed and sorted himself; his sons
                learned alongside him. After Partition, his eldest son consolidated the operation:
                dehairing was brought under one roof, the women of the family took charge of
                sorting, and the trade became more organised, if no less small.
              </p>
              <p className="mb-7">
                In the 1980s, our grandfather opened correspondence with two mills abroad — one in
                Bangladesh, one in Italy. The fibre had been travelling to them already,
                indirectly, through dealers in Lahore and Karachi. The new arrangement was a small
                thing in commercial terms but a significant one in principle: the first time the
                family name had moved with the fleece.{" "}
                <em>That fact mattered to him, and it matters to us.</em>
              </p>
              <p>
                Today the work is run by his grandsons. The combing is still done by hand, in the
                same meadows. The yarn is still spun on the same low-tension wheels. Ustad Akbar
                — whose father built the loom he weaves on in 1953 — still finishes a single
                shawl on a timeline measured in seasons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dark interlude — the authorship statement */}
      <section className="dot-pattern-dark relative my-[100px] overflow-hidden bg-ink px-10 py-[140px] text-bone max-md:my-[50px] max-md:px-5 max-md:py-[70px]">
        <div className="relative mx-auto grid max-w-[1340px] grid-cols-[5fr_7fr] items-center gap-20 max-md:grid-cols-1 max-md:gap-[30px]">
          <div>
            <Fig
              figId="Fig. 14"
              figMeta="Hands · Raw fleece"
              brief="A pair of hands holding raw fleece. Tight on the hands. Soft window light."
              aspect="4/5"
              tone="dark"
            />
          </div>
          <div>
            <h3 className="mb-9 max-w-[22ch] font-sans text-[clamp(32px,3vw,48px)] font-extralight leading-[1.15] tracking-[-0.012em] text-bone max-md:text-[30px]">
              For four generations our work has carried other people&apos;s names. That ends now.
            </h3>
            <div className="max-w-[56ch] text-[16px] leading-[1.85] text-bone/75 max-md:text-[15px]">
              <p>
                The fibre we comb has reached every continent. It has been finished in Biella and
                Como; sold in showrooms in Paris, Milan, and Tokyo; worn by people who never knew
                where it came from.
              </p>
              <p className="mt-[22px]">
                We are not bitter about this.{" "}
                <em className="font-normal not-italic text-bone">
                  It is how the world has always worked the fibre trade.
                </em>{" "}
                But the family agrees on one thing: it is time the source had a name.
              </p>
              <p className="mt-[22px]">
                PASHM is that name. Everything we dispatch — fibre, yarn, finished piece — carries
                it, alongside the year, the valley, and the names of the people who did the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* People grid */}
      <section className="border-t border-line-soft px-10 py-[100px] max-md:px-5 max-md:py-[50px]">
        <div className="mx-auto max-w-[1340px]">
          <h3 className="mb-[60px] max-w-[24ch] font-sans text-[clamp(32px,3vw,44px)] font-extralight leading-[1.1] tracking-[-0.012em] text-ink max-md:mb-[30px] max-md:text-[30px]">
            The people behind every piece. Their names appear on every certificate we ship.
          </h3>
          <div className="grid grid-cols-4 gap-9 max-md:grid-cols-2 max-md:gap-5">
            {PEOPLE.map((person) => (
              <div key={person.name}>
                <Fig
                  figId={person.figId}
                  figMeta={person.figMeta}
                  brief={person.brief}
                  aspect="3/4"
                />
                <div className="mt-[18px]">
                  <div className="mb-2 text-[10px] uppercase tracking-ultra-wide text-stone">
                    {person.role}
                  </div>
                  <div className="mb-[6px] font-sans text-[21px] font-light tracking-[-0.005em] text-ink">
                    {person.name}
                  </div>
                  <div className="font-serif text-[13px] font-light italic text-ink-soft">
                    {person.tenure}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
