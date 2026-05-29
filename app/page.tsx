import Link from "next/link";
import { SignatureMark } from "@/components/SignatureMark";
import { Fig } from "@/components/Fig";
import { Caption } from "@/components/Caption";
import { Plate } from "@/components/Plate";
import { QuietButton } from "@/components/QuietButton";
import { PieceCard } from "@/components/PieceCard";
import { PIECES, CURRENT_VINTAGE } from "@/content/data";

/**
 * Home page — the vestibule.
 *
 * Each section does one thing:
 *   1. Hero        — set tone
 *   2. Specs       — establish technical seriousness
 *   3. Statement   — establish authorship (preview; full essay lives on /valley)
 *   4. Work preview — prove craft (preview; full on /work)
 *   5. Pieces preview — prove product (preview; full on /pieces)
 *   6. Inquire preview — invite contact (preview; forms live on /inquire/*)
 */

export default function HomePage() {
  const previewPieces = PIECES.slice(0, 3);

  return (
    <>
      {/* =========================================== */}
      {/* HERO                                        */}
      {/* =========================================== */}
      <section className="relative border-t border-line-soft px-10 max-md:px-5">
        <div className="relative mx-auto max-w-[1340px] py-14 max-md:py-9">
          {/* Folio rule */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 border-b border-line-soft pb-9 text-[10px] font-normal uppercase tracking-ultra-wide text-ink-soft max-md:gap-3 max-md:pb-6 max-md:text-[9px] max-md:tracking-[0.2em]">
            <div>Spring Harvest 2026</div>
            <div className="flex items-center justify-center">
              <SignatureMark width={56} />
            </div>
            <div className="justify-self-end">Yousafzai · since 1928</div>
          </div>

          {/* Arabic watermark */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-5 top-[90px] select-none font-arabic text-[92px] font-normal leading-none text-ink/[0.05] max-md:right-[10px] max-md:top-[60px] max-md:text-[60px]"
          >
            پشم
          </div>

          {/* Two-column hero */}
          <div className="grid grid-cols-[6fr_6fr] items-stretch gap-20 pt-[70px] max-md:grid-cols-1 max-md:gap-[50px] max-md:pt-10">
            <div className="max-md:order-first">
              <Plate>
                <Fig
                  figId="Pl. 01"
                  figMeta="Ushu · Spring"
                  brief="Ushu Valley landscape — placeholder for commissioned photography."
                  photo="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=2400&q=85&auto=format&fit=crop"
                  alt="Ushu Valley landscape"
                  aspect="4/5"
                />
              </Plate>
              <Caption
                lhs="Ushu — above the tree line, May"
                rhs="Pl. 01"
              />
            </div>

            <div className="flex flex-col justify-between pt-[6px]">
              <div>
                {/* Top eyebrow */}
                <div className="mb-[50px] flex items-baseline gap-[14px] max-md:mb-[30px]">
                  <span className="h-px w-7 self-center bg-ink-soft" />
                  <span className="font-sans text-[11px] font-normal uppercase tracking-ultra-wide text-ink-soft">
                    Pashm — from Ushu, upper Swat
                  </span>
                </div>

                <h1 className="font-sans text-[clamp(42px,4.6vw,72px)] font-extralight leading-[1.04] tracking-[-0.018em] text-ink max-md:text-[42px]">
                  <span className="block overflow-hidden">
                    <span className="inline-block animate-lift [animation-delay:200ms] [will-change:transform] motion-reduce:animate-none">
                      One valley.
                    </span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="inline-block animate-lift [animation-delay:380ms] [will-change:transform] motion-reduce:animate-none">
                      One short spring.
                    </span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="inline-block animate-lift [animation-delay:560ms] [will-change:transform] motion-reduce:animate-none">
                      Combed by hand.
                    </span>
                  </span>
                </h1>

                <p className="mt-11 max-w-[40ch] text-[15.5px] leading-[1.7] text-ink-soft max-md:mt-7">
                  We comb pashm by hand in the Ushu Valley of upper Swat. Our family has
                  done this since <span className="text-ink">1928</span>. We dispatch fibre,
                  yarn, and finished pieces direct to mills, ateliers, and private households.
                </p>
              </div>

              <div className="mt-14 flex items-center gap-[30px] max-md:mt-9 max-md:flex-col max-md:items-start max-md:gap-[18px]">
                <QuietButton href="/valley">The Valley</QuietButton>
                <span className="text-[10px] font-normal uppercase tracking-ultra-wide text-ink-soft">
                  Vintage — Spring 2026
                </span>
              </div>
            </div>
          </div>

          {/* Folio foot */}
          <div className="mt-16 grid grid-cols-[1fr_auto_1fr] items-center gap-6 border-t border-line-soft pt-6 text-[10px] uppercase tracking-ultra-wide text-ink-soft max-md:mt-10 max-md:grid-cols-1 max-md:gap-2">
            <div>Ushu Valley · 2,400 – 2,800 m</div>
            <div className="text-center">
              <span className="font-arabic text-[14px] normal-case tracking-normal text-stone">
                پشم
              </span>
            </div>
            <div className="justify-self-end max-md:justify-self-start">
              Direct enquiries welcome
            </div>
          </div>
        </div>
      </section>

      {/* =========================================== */}
      {/* SPECS STRIP                                 */}
      {/* =========================================== */}
      <section className="border-b border-line-soft border-t border-t-ink bg-bone px-10 py-7 max-md:px-5 max-md:py-6">
        <div className="mx-auto grid max-w-[1340px] grid-cols-[auto_1fr_1fr_1fr_1fr] items-center gap-[60px] max-md:grid-cols-2 max-md:gap-6">
          <div className="text-[10px] uppercase tracking-ultra-wide text-stone max-md:col-span-2">
            {CURRENT_VINTAGE.label}
          </div>
          <SpecCell k="Fineness" v={CURRENT_VINTAGE.fineness.value} unit={CURRENT_VINTAGE.fineness.unit} />
          <SpecCell k="Length" v={CURRENT_VINTAGE.length.value} unit={CURRENT_VINTAGE.length.unit} />
          <SpecCell k="Method" v={CURRENT_VINTAGE.method.value} />
          <SpecCell k="Yield" v={CURRENT_VINTAGE.yield.value} unit={CURRENT_VINTAGE.yield.unit} />
        </div>
      </section>

      {/* =========================================== */}
      {/* STATEMENT PREVIEW                           */}
      {/* =========================================== */}
      <section className="dot-pattern-dark overflow-hidden bg-ink px-10 py-[130px] text-bone max-md:px-5 max-md:py-[70px]">
        <div className="relative mx-auto grid max-w-[1340px] grid-cols-[5fr_7fr] items-center gap-20 max-md:grid-cols-1 max-md:gap-9">
          <div>
            <Fig
              figId="Fig. 03"
              figMeta="Portrait · 4:5"
              brief="Portrait of a family member in the workshop. Side-light. Hands visible."
              aspect="4/5"
              tone="dark"
            />
          </div>
          <div>
            <div className="mb-8 text-[10px] uppercase tracking-ultra-wide text-stone">
              The Family
            </div>
            <h2 className="max-w-[22ch] font-sans text-[clamp(32px,3vw,48px)] font-extralight leading-[1.15] tracking-[-0.012em] text-bone">
              Four generations from one valley. The work has carried other people's names long enough.
            </h2>
            <div className="mt-8 max-w-[52ch] text-[15.5px] leading-[1.8] text-bone/70">
              <p>
                The word <strong className="font-normal text-bone">pashm</strong> is older than
                the word cashmere. The fibre the world knows by its European name was traded along
                the Silk Road through the Hindu Kush long before it travelled out through Kashmir.
              </p>
              <p className="mt-[18px]">
                Our family has combed pashm in the Ushu Valley for four generations. We dispatch
                fibre and finished pieces under our own name now.
              </p>
            </div>
            <div className="mt-11">
              <QuietButton href="/valley" tone="dark">
                Read the full story
              </QuietButton>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================== */}
      {/* WORK PREVIEW                                */}
      {/* =========================================== */}
      <section className="px-10 py-[130px] max-md:px-5 max-md:py-[70px]">
        <div className="mx-auto max-w-[1340px]">
          <div className="grid grid-cols-[3fr_9fr] gap-[60px] border-b border-ink pb-[50px] max-md:grid-cols-1 max-md:gap-[18px] max-md:pb-[30px]">
            <div>
              <div className="text-[10px] uppercase tracking-ultra-wide text-ink-soft">
                The Work
              </div>
            </div>
            <div>
              <h2 className="font-sans text-[clamp(32px,3vw,48px)] font-extralight leading-[1.1] tracking-[-0.012em] text-ink">
                Four stages, between a goat in spring and a piece in your hand.
              </h2>
              <p className="mt-[22px] max-w-[50ch] text-[15.5px] leading-[1.7] text-ink-soft">
                Every stage is done by someone we know. Their names appear on the certificate
                that ships with each piece.
              </p>
            </div>
          </div>

          <div className="mt-[60px] grid grid-cols-4 gap-6 max-md:grid-cols-2 max-md:gap-[18px]">
            {[
              { num: "i — Comb", ttl: "The Comb", figMeta: "The Comb", brief: "Bakht Mir at the comb." },
              { num: "ii — Sort", ttl: "The Sort", figMeta: "The Sort", brief: "Hands sorting raw fleece." },
              { num: "iii — Yarn", ttl: "The Yarn", figMeta: "The Yarn", brief: "Spinning wheel, detail." },
              { num: "iv — Loom", ttl: "The Loom", figMeta: "The Loom", brief: "Ustad Akbar at the loom." },
            ].map((stage, i) => (
              <Link
                key={stage.num}
                href="/work"
                className="group block cursor-pointer text-ink no-underline"
              >
                <Fig
                  figId={`Fig. 0${i + 5}`}
                  figMeta={stage.figMeta}
                  brief={stage.brief}
                  aspect="3/4"
                />
                <div className="mt-4">
                  <div className="mb-[6px] text-[10px] uppercase tracking-ultra-wide text-stone">
                    {stage.num}
                  </div>
                  <div className="font-sans text-[20px] font-light tracking-[-0.005em] text-ink">
                    {stage.ttl}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-[60px]">
            <QuietButton href="/work">See the full sequence</QuietButton>
          </div>
        </div>
      </section>

      {/* =========================================== */}
      {/* PIECES PREVIEW                              */}
      {/* =========================================== */}
      <section className="border-b border-t border-line-soft bg-bone-warm px-10 py-[130px] max-md:px-5 max-md:py-[70px]">
        <div className="mx-auto max-w-[1340px]">
          <div className="grid grid-cols-[3fr_9fr] gap-[60px] border-b border-ink pb-[50px] max-md:grid-cols-1 max-md:gap-[18px] max-md:pb-[30px]">
            <div>
              <div className="text-[10px] uppercase tracking-ultra-wide text-ink-soft">
                Pieces
              </div>
            </div>
            <div>
              <h2 className="font-sans text-[clamp(32px,3vw,48px)] font-extralight leading-[1.1] tracking-[-0.012em] text-ink">
                Shawls, stoles, scarves, and mufflers. Made to commission.
              </h2>
              <p className="mt-[22px] max-w-[50ch] text-[15.5px] leading-[1.7] text-ink-soft">
                A small number leave the loom each year. We show what we have, and what we can
                make. We do not list prices on the site — please write to inquire.
              </p>
            </div>
          </div>

          <div className="mt-[60px] grid grid-cols-3 gap-8 max-md:grid-cols-1 max-md:gap-[30px]">
            {previewPieces.map((piece) => (
              <PieceCard key={piece.slug} piece={piece} variant="preview" />
            ))}
          </div>

          <div className="mt-[60px]">
            <QuietButton href="/pieces">See all pieces</QuietButton>
          </div>
        </div>
      </section>

      {/* =========================================== */}
      {/* INQUIRE PREVIEW                             */}
      {/* =========================================== */}
      <section className="dot-pattern-dark relative overflow-hidden bg-ink px-10 py-[130px] text-bone max-md:px-5 max-md:py-[70px]">
        <div className="relative mx-auto max-w-[1340px] text-center">
          <span className="text-[11px] uppercase tracking-ultra-wide text-stone-light">
            Direct enquiries
          </span>
          <h2 className="mx-auto mt-[18px] max-w-[20ch] font-sans text-[clamp(34px,3.4vw,56px)] font-extralight leading-[1.08] tracking-[-0.012em]">
            We welcome serious enquiries on Trade and Private commissions.
          </h2>
          <p className="mx-auto mt-6 max-w-[48ch] text-[15.5px] leading-[1.75] text-bone/70">
            Replies come from the family, not a template. Five to seven working days, depending on
            the season.
          </p>

          <div className="mx-auto mt-14 grid max-w-[820px] grid-cols-2 gap-0 border-b border-t border-bone/20 text-left max-md:grid-cols-1">
            <div className="border-r border-bone/20 p-9 max-md:border-b max-md:border-r-0">
              <div className="mb-[14px] text-[10px] uppercase tracking-ultra-wide text-stone-light">
                For mills, processors, ateliers
              </div>
              <h4 className="mb-[10px] font-sans text-[22px] font-light tracking-[-0.005em] text-bone">
                Trade
              </h4>
              <p className="text-[14px] leading-[1.7] text-bone/65">
                Fibre and yarn by the kilo. Finished pieces in small lots for resale or commission.
              </p>
              <Link
                href="/inquire/trade"
                className="mt-[22px] inline-flex cursor-pointer items-center gap-3 border-b border-bone pb-1 text-[11px] uppercase tracking-[0.24em] text-bone no-underline"
              >
                Open Trade enquiry →
              </Link>
            </div>
            <div className="p-9">
              <div className="mb-[14px] text-[10px] uppercase tracking-ultra-wide text-stone-light">
                For individuals &amp; households
              </div>
              <h4 className="mb-[10px] font-sans text-[22px] font-light tracking-[-0.005em] text-bone">
                Private commissions
              </h4>
              <p className="text-[14px] leading-[1.7] text-bone/65">
                Shawls, stoles, scarves, mufflers. Made to commission over a season.
              </p>
              <Link
                href="/inquire/private"
                className="mt-[22px] inline-flex cursor-pointer items-center gap-3 border-b border-bone pb-1 text-[11px] uppercase tracking-[0.24em] text-bone no-underline"
              >
                Open Private enquiry →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SpecCell({ k, v, unit }: { k: string; v: string; unit?: string }) {
  return (
    <div>
      <div className="mb-2 text-[10px] uppercase tracking-widest text-stone">{k}</div>
      <div className="font-sans text-[22px] font-light leading-none tracking-[-0.01em] text-ink max-md:text-[17px]">
        {v}
        {unit && <span className="ml-1 text-[14px] text-ink-soft">{unit}</span>}
      </div>
    </div>
  );
}
