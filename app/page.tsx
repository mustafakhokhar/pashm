import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fig } from "@/components/Fig";
import { QuietButton } from "@/components/QuietButton";
import { Reveal, ScrollCue } from "@/components/Motion";

export const metadata: Metadata = {
  description:
    "Hand-combed cashmere from the Swat Valley — fibre, yarn, and finished pieces, sent direct, in the colours the goats grow.",
  alternates: { canonical: "/" },
};

/**
 * Home — the photography-forward homepage (the "lookbook" register).
 *
 * Section order:
 *   Hero (full-bleed) → Statement → Products → Macro band (full-bleed)
 *   → Process → Wash band (full-bleed) → Origin → CTA
 *
 * All imagery shares one tonal grade (.photo-grade). Restrained scroll-reveal
 * (components/Motion) is reduced-motion safe. Copy is truth-based — no fabricated
 * heritage. The previous homepage is archived at /preview-old.
 */

const PRODUCTS = [
  {
    name: "Fibre",
    line: "Raw or dehaired, sorted by hand, by grade.",
    photo: "/photography/fibre.jpg",
    href: "/trade",
    cta: "Supply",
  },
  {
    name: "Yarn",
    line: "Spun undyed, in natural shades — by hand, and by machine when a run needs it.",
    photo: "/photography/yarn.jpg",
    href: "/trade",
    cta: "Supply",
  },
  {
    name: "Pieces",
    line: "Shawls, stoles, scarves, mufflers. Handwoven, to commission.",
    photo: "/photography/piece.jpg",
    href: "/pieces",
    cta: "See pieces",
  },
] as const;

const PROCESS = [
  "Combed by hand, never sheared.",
  "Washed with apple cider vinegar — not chemicals.",
  "Sorted by hand, by grade.",
  "Left undyed. The colour is the goat's, not ours.",
];

export default function HomePage() {
  return (
    <>
      {/* =========================================== */}
      {/* HERO — full-bleed photograph, minimal words  */}
      {/* =========================================== */}
      <section className="relative h-[82vh] min-h-[560px] w-full overflow-hidden">
        <Image
          src="/photography/hero.jpg"
          alt="A herder leads his goats home through the Swat Valley at golden hour"
          fill
          priority
          sizes="100vw"
          className="photo-grade object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1340px] px-10 pb-16 max-md:px-5 max-md:pb-12">
            <Reveal className="max-w-[42ch]">
              <div className="mb-5 text-[11px] uppercase tracking-ultra-wide text-bone [text-shadow:0_2px_12px_rgb(0_0_0/0.55)]">
                Swat Valley · Pakistan
              </div>
              <h1 className="font-sans text-[clamp(40px,5.4vw,84px)] font-extralight leading-[1.02] tracking-[-0.02em] text-bone">
                Cashmere from where it began.
              </h1>
              <p className="mt-6 max-w-[52ch] text-[16px] leading-[1.7] text-bone/80">
                Hand-combed in the Swat Valley — fibre, yarn, and finished pieces,
                in the colours the goats grow. Sent direct, under our own name.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-9 gap-y-4">
                <QuietButton href="/inquire/trade" variant="solid" tone="dark">
                  Request a sample
                </QuietButton>
                <QuietButton href="/trade" tone="dark">
                  What we supply
                </QuietButton>
              </div>
            </Reveal>
          </div>
        </div>
        <ScrollCue />
      </section>

      {/* =========================================== */}
      {/* STATEMENT — the truthful authorship line     */}
      {/* =========================================== */}
      <section className="dot-pattern-dark bg-ink px-10 py-28 text-bone max-md:px-5 max-md:py-16">
        <div className="relative mx-auto max-w-[1100px] text-center">
          <Reveal>
            <h2 className="mx-auto max-w-[20ch] font-serif text-[clamp(30px,3.4vw,52px)] font-light italic leading-[1.16] tracking-[-0.005em] text-bone">
              For years, our cashmere left the valley under other names.
            </h2>
            <p className="mx-auto mt-8 max-w-[58ch] text-[16px] leading-[1.8] text-bone/70">
              Combed here. Finished in Italy. Carried to the Gulf. Worn by people who
              never knew the valley it came from. PASHM is the first time it travels
              under ours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* =========================================== */}
      {/* PRODUCTS — three forms, photography-led       */}
      {/* =========================================== */}
      <section className="px-10 py-28 max-md:px-5 max-md:py-16">
        <div className="mx-auto max-w-[1340px]">
          <Reveal>
            <h2 className="max-w-[16ch] font-sans text-[clamp(30px,3vw,48px)] font-extralight leading-[1.08] tracking-[-0.015em] text-ink">
              Three forms leave the valley.
            </h2>
            <div className="mt-14 grid grid-cols-3 gap-10 max-md:grid-cols-1 max-md:gap-12">
              {PRODUCTS.map((p) => (
                <Link
                  key={p.name}
                  href={p.href as any}
                  className="group block text-ink no-underline"
                >
                  <Fig
                    photo={p.photo}
                    alt={p.name}
                    figId=""
                    figMeta=""
                    brief=""
                    aspect="4/5"
                    sizes="(max-width: 980px) 100vw, 33vw"
                  />
                  <div className="mt-5 flex items-baseline justify-between gap-4">
                    <h3 className="font-sans text-[23px] font-light tracking-[-0.005em] text-ink">
                      {p.name}
                    </h3>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-stone transition-colors duration-300 group-hover:text-ink">
                      {p.cta} →
                    </span>
                  </div>
                  <p className="mt-[10px] max-w-[34ch] text-[14.5px] leading-[1.65] text-ink-soft">
                    {p.line}
                  </p>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================== */}
      {/* MACRO BAND — tactile fibre, full-bleed        */}
      {/* =========================================== */}
      <section className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src="/photography/fibre-macro.jpg"
          alt="Raw cashmere down in its natural colours, from cream to charcoal"
          fill
          sizes="100vw"
          className="photo-grade object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bone/60 via-bone/10 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1340px] px-10 pb-10 max-md:px-5 max-md:pb-7">
            <Reveal>
              <div className="mb-2 text-[11px] uppercase tracking-ultra-wide text-ink/70 [text-shadow:0_1px_8px_rgb(242_238_229/0.95)]">
                Undyed
              </div>
              <p className="max-w-[34ch] font-serif text-[clamp(20px,2.2vw,30px)] font-light italic leading-[1.2] text-ink [text-shadow:0_1px_8px_rgb(242_238_229/0.95)]">
                Cream to charcoal — the colour is the goat&apos;s, not ours.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================== */}
      {/* PROCESS — radical transparency (no certs)     */}
      {/* =========================================== */}
      <section className="border-y border-line-soft bg-bone-warm px-10 py-28 max-md:px-5 max-md:py-16">
        <div className="mx-auto grid max-w-[1340px] grid-cols-[7fr_5fr] items-center gap-20 max-md:grid-cols-1 max-md:gap-10">
          <Reveal>
            <Fig
              photo="/photography/loom.jpg"
              alt="Handwoven on the loom"
              figId=""
              figMeta=""
              brief=""
              aspect="16/11"
              sizes="(max-width: 980px) 100vw, 50vw"
            />
          </Reveal>
          <Reveal delay={0.12}>
            <h2 className="max-w-[18ch] font-sans text-[clamp(30px,3vw,48px)] font-extralight leading-[1.08] tracking-[-0.015em] text-ink">
              Made by hand. And barely touched.
            </h2>
            <ul className="mt-9 space-y-[18px] text-[16px] leading-[1.5] text-ink-soft">
              {PROCESS.map((line) => (
                <li key={line} className="flex gap-4">
                  <span className="mt-[11px] h-px w-5 shrink-0 bg-stone" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-11">
              <QuietButton href="/work">How it&apos;s made</QuietButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================== */}
      {/* WASH BAND — the signature, full-bleed         */}
      {/* =========================================== */}
      <section className="relative aspect-[16/9] w-full overflow-hidden max-md:aspect-[4/3]">
        <Image
          src="/photography/wash.jpg"
          alt="Cashmere fibre lifted by hand from an apple-cider-vinegar wash"
          fill
          sizes="100vw"
          className="photo-grade object-cover object-[50%_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1340px] px-10 pb-14 max-md:px-5 max-md:pb-10">
            <Reveal>
              <div className="mb-3 text-[11px] uppercase tracking-ultra-wide text-bone/70">
                The wash
              </div>
              <p className="max-w-[30ch] font-serif text-[clamp(22px,2.4vw,34px)] font-light italic leading-[1.2] text-bone">
                Cleaned by hand, in apple cider vinegar. Never chemicals.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================================== */}
      {/* ORIGIN — the real differentiator, brief       */}
      {/* =========================================== */}
      <section className="px-10 py-28 max-md:px-5 max-md:py-16">
        <div className="mx-auto max-w-[760px] text-center">
          <Reveal>
            <h2 className="mx-auto max-w-[16ch] font-serif text-[clamp(28px,3vw,46px)] font-light italic leading-[1.18] text-ink">
              Pashm is the older word.
            </h2>
            <p className="mx-auto mt-7 max-w-[54ch] text-[16px] leading-[1.8] text-ink-soft">
              The fibre the world calls cashmere was combed and traded through these
              mountains long before it carried a European name. We are still here.
              Still combing.
            </p>
            <div className="mt-9 flex justify-center">
              <QuietButton href="/valley">The valley</QuietButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================== */}
      {/* CLOSE — sample-forward CTA                    */}
      {/* =========================================== */}
      <section className="bg-bone px-10 pb-20 pt-4 max-md:px-5">
        <div className="mx-auto max-w-[1340px]">
          <div className="dot-pattern-dark relative overflow-hidden rounded-2xl bg-ink px-10 py-20 text-center text-bone max-md:rounded-xl max-md:px-6 max-md:py-14">
            <Reveal>
              <h2 className="mx-auto max-w-[16ch] font-sans text-[clamp(34px,3.6vw,58px)] font-extralight leading-[1.06] tracking-[-0.015em]">
                Judge the fibre yourself.
              </h2>
              <p className="mx-auto mt-6 max-w-[52ch] text-[16px] leading-[1.75] text-bone/70">
                Tell us what you make, and what your run needs. We&apos;ll send a sample
                and a plain answer — from us, not a middleman. Usually within five
                working days.
              </p>
              <div className="mt-12 flex flex-col items-center gap-6">
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
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
