import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Fig } from "@/components/Fig";
import { QuietButton } from "@/components/QuietButton";
import { TRADE_ORIENTATION, TRADE_STREAMS, type Spec } from "@/content/data";

export const metadata: Metadata = {
  title: "Trade & supply",
  description:
    "Cashmere fibre, spun yarn, and finished pieces — hand-combed in the Swat Valley, traceable to the spring and the people who made them. Direct supply for mills, spinners, brands, and retailers.",
  openGraph: {
    title: "PASHM — Trade & supply",
    description:
      "Fibre, yarn, and finished pieces, direct from the Swat Valley. Named source, vintage-coded, no intermediary.",
    type: "website",
    locale: "en_GB",
  },
};

/**
 * Trade & supply — the capability surface.
 *
 * Built for cold outreach: a serious buyer should learn what we supply, in
 * what form, at what spec, and how to start — without writing first. Organised
 * by product STREAM (fibre / yarn / pieces) so each kind of buyer self-selects.
 *
 * Sections:
 *   1. Header + orientation strip — what leaves the valley, and at what scale
 *   2. The three streams           — fibre, yarn, pieces, each with real specs
 *   3. Hand & machine              — answers the consistency / volume question
 *   4. Proof                       — named, dated, traceable; real, recent track record
 *   5. CTA                         — start a trade enquiry; private redirect
 *
 * Content lives in content/data.ts (TRADE_*). Fields marked `confirm` render
 * as a visible "to confirm" placeholder until real figures replace them.
 */

export default function TradePage() {
  return (
    <>
      <PageHeader
        eyebrow="§ Trade & Supply"
        title="What leaves the valley — and how to source it."
        lead="Three things leave the Swat Valley each year: cashmere fibre, spun yarn, and a small number of finished pieces. All combed by hand, all traceable to the spring and the people who made them. We work direct — no intermediary — with a small number of houses, on annual terms."
      />

      {/* =========================================== */}
      {/* ORIENTATION STRIP — scale, up front          */}
      {/* =========================================== */}
      <section className="border-b border-line-soft bg-bone px-10 py-7 max-md:px-5 max-md:py-6">
        <div className="mx-auto grid max-w-[1340px] grid-cols-[auto_1fr_1fr_1fr_1fr] items-center gap-[60px] max-md:grid-cols-2 max-md:gap-6">
          <div className="text-[10px] uppercase tracking-ultra-wide text-stone-dark max-md:col-span-2">
            § The valley, at a glance
          </div>
          {TRADE_ORIENTATION.map((s) => (
            <SpecCell key={s.k} k={s.k} v={s.v} />
          ))}
        </div>
      </section>

      {/* =========================================== */}
      {/* THE THREE STREAMS                            */}
      {/* =========================================== */}
      <section className="px-10 pt-[100px] max-md:px-5 max-md:pt-[50px]">
        <div className="mx-auto max-w-[1340px]">
          {/* Section intro */}
          <div className="grid grid-cols-[3fr_9fr] gap-20 border-b border-line-soft pb-9 max-md:grid-cols-1 max-md:gap-[18px] max-md:pb-6">
            <div className="pt-[12px]">
              <div className="text-[10px] uppercase tracking-ultra-wide text-stone-dark">
                § What we supply
              </div>
            </div>
            <div>
              <h2 className="font-sans text-[clamp(32px,3vw,48px)] font-extralight leading-[1.1] tracking-[-0.012em] text-ink">
                Three streams, one fibre.
              </h2>
              <p className="mt-[22px] max-w-[54ch] text-[15.5px] leading-[1.7] text-ink-soft">
                The same hand-combed under-down leaves us in three forms. Most buyers
                take one. Some take all three, vintage by vintage.
              </p>
            </div>
          </div>

          {/* Streams — alternating image / specs */}
          {TRADE_STREAMS.map((stream, idx) => {
            const reversed = idx % 2 === 1;
            return (
              <div
                key={stream.key}
                className="grid grid-cols-[6fr_6fr] items-center gap-20 border-b border-line-soft py-20 max-md:grid-cols-1 max-md:gap-[30px] max-md:py-10"
              >
                {/* Image */}
                <div className={reversed ? "max-md:order-first md:order-last" : ""}>
                  <Fig
                    figId={stream.figId}
                    figMeta={stream.figMeta}
                    brief={stream.brief}
                    photo={stream.photo}
                    alt={stream.name}
                    aspect="4/5"
                    sizes="(max-width: 980px) 100vw, 50vw"
                  />
                </div>

                {/* Specs */}
                <div>
                  <div className="mb-[14px] text-[11px] uppercase tracking-ultra-wide text-stone">
                    {stream.num}
                  </div>
                  <h3 className="font-sans text-[clamp(30px,3vw,46px)] font-extralight leading-[1.08] tracking-[-0.015em] text-ink max-md:text-[28px]">
                    {stream.name}
                  </h3>
                  <div className="mt-3 font-serif text-[14px] font-light italic text-stone-dark">
                    {stream.audience}
                  </div>
                  <p className="mt-6 max-w-[46ch] text-[15.5px] leading-[1.75] text-ink-soft">
                    {stream.lede}
                  </p>

                  <SpecList specs={stream.specs} />

                  <div className="mt-9">
                    <QuietButton href="/inquire/trade">{stream.cta}</QuietButton>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================== */}
      {/* HAND & MACHINE — the consistency question    */}
      {/* =========================================== */}
      <section className="dot-pattern-dark overflow-hidden bg-ink px-10 py-24 text-bone max-md:px-5 max-md:py-14">
        <div className="relative mx-auto grid max-w-[1340px] grid-cols-[3fr_9fr] gap-[60px] max-md:grid-cols-1 max-md:gap-9">
          <div className="pt-[12px]">
            <div className="text-[10px] uppercase tracking-ultra-wide text-stone-light">
              § Hand &amp; machine
            </div>
          </div>
          <div>
            <h2 className="max-w-[24ch] font-sans text-[clamp(30px,3vw,46px)] font-extralight leading-[1.12] tracking-[-0.012em] text-bone max-md:text-[28px]">
              Spun by hand. Machine-spun when your run needs it.
            </h2>
            <div className="mt-7 max-w-[68ch] space-y-[16px] text-[15.5px] leading-[1.7] text-bone/70">
              <p>
                A low-tension wheel gives a soft, faintly irregular yarn with the character
                buyers come to us for. It is also slow, and finite —{" "}
                <em className="font-serif italic text-bone">
                  one valley, one spring, many hands.
                </em>
              </p>
              <p>
                For larger orders, or where a run must hold an even count from cone to cone,
                we are bringing machine spinning into the workshop — for exactly the buyers
                hand-spinning could not serve. Tell us the count, the quantity, and your date.
                We will say plainly what we can do today, and what is coming.
              </p>
            </div>
            <p className="mt-7 text-[12px] uppercase tracking-[0.2em] text-stone-light">
              Counts &amp; timeline — to confirm
            </p>
          </div>
        </div>
      </section>

      {/* =========================================== */}
      {/* PROOF — named, dated, traceable              */}
      {/* =========================================== */}
      <section className="px-10 py-24 max-md:px-5 max-md:py-14">
        <div className="mx-auto max-w-[1340px]">
          <div className="grid grid-cols-[3fr_9fr] gap-20 border-b border-line-soft pb-9 max-md:grid-cols-1 max-md:gap-[18px] max-md:pb-6">
            <div className="pt-[12px]">
              <div className="text-[10px] uppercase tracking-ultra-wide text-stone-dark">
                § Proof
              </div>
            </div>
            <div>
              <h2 className="max-w-[20ch] font-sans text-[clamp(32px,3vw,48px)] font-extralight leading-[1.1] tracking-[-0.012em] text-ink">
                Every batch is named, dated, and traceable to the valley.
              </h2>
              <p className="mt-[22px] max-w-[54ch] text-[15.5px] leading-[1.7] text-ink-soft">
                The thing a sourcing manager cannot get from a broker: a fibre that comes
                with its origin attached, and people who answer for it by name.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-12 max-md:grid-cols-1 max-md:gap-9">
            <ProofPoint
              k="Named at every stage"
              body="Comber, sorter, spinner, weaver — every batch leaves with the hands that made it, the valley, and the season it was combed."
            />
            <ProofPoint
              k="Coded by vintage"
              body="Every lot carries its year, sub-valley, and micron — Spring 2026 · Swat · 15.2μ. One permanent reference, from fleece to finished piece."
            />
            <ProofPoint
              k="Already trusted — if unnamed"
              body="Our fibre has been finished in Italy, spun in Bangladesh, and woven for households in the Gulf — under other labels. PASHM is the same source, now direct."
            />
          </div>
        </div>
      </section>

      {/* =========================================== */}
      {/* CTA                                          */}
      {/* =========================================== */}
      <section className="bg-bone px-10 py-12 max-md:px-5 max-md:py-10">
        <div className="mx-auto max-w-[1340px]">
          <div className="dot-pattern-dark relative overflow-hidden rounded-2xl bg-ink px-10 py-16 text-center text-bone max-md:rounded-xl max-md:px-6 max-md:py-12">
            <span className="text-[11px] uppercase tracking-ultra-wide text-stone-light">
              § Direct supply
            </span>
            <h2 className="mx-auto mt-[18px] max-w-[16ch] font-sans text-[clamp(34px,3.4vw,56px)] font-extralight leading-[1.08] tracking-[-0.012em]">
              Source from the valley.
            </h2>
            <p className="mx-auto mt-6 max-w-[52ch] text-[15.5px] leading-[1.75] text-bone/70">
              Tell us what you make and what your run needs. Every reply comes from the
              family, by name — usually within five working days. Samples on request.
            </p>

            <div className="mt-12 flex flex-col items-center gap-7">
              <QuietButton href="/inquire/trade" variant="solid" tone="dark">
                Start a trade enquiry
              </QuietButton>
              <a
                href="/inquire/private"
                className="text-[11px] uppercase tracking-[0.22em] text-stone-light no-underline transition-colors hover:text-bone"
              >
                Buying for yourself? Private commissions →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- local presentational helpers ---------- */

function SpecCell({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="mb-2 text-[10px] uppercase tracking-widest text-stone-dark">{k}</div>
      <div className="font-sans text-[19px] font-light leading-tight tracking-[-0.01em] text-ink max-md:text-[15px]">
        {v}
      </div>
    </div>
  );
}

function SpecList({ specs }: { specs: Spec[] }) {
  return (
    <dl className="mt-9 border-t border-line-soft">
      {specs.map((s) => (
        <div
          key={s.k}
          className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-line-faint py-[13px]"
        >
          <dt className="text-[10px] uppercase tracking-[0.2em] text-stone-dark">{s.k}</dt>
          <dd className="text-right font-sans text-[14px] font-light leading-snug text-ink">
            {s.confirm ? (
              <span className="text-stone">
                {s.v}{" "}
                <span className="ml-1 align-middle text-[9px] uppercase tracking-[0.2em] text-stone-light">
                  · to confirm
                </span>
              </span>
            ) : (
              s.v
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function ProofPoint({ k, body }: { k: string; body: string }) {
  return (
    <div className="border-t border-line-soft pt-6">
      <div className="mb-[14px] text-[10px] uppercase tracking-ultra-wide text-stone-dark">
        {k}
      </div>
      <p className="text-[15px] leading-[1.7] text-ink-soft">{body}</p>
    </div>
  );
}
