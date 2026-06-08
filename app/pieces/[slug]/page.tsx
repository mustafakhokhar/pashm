import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fig } from "@/components/Fig";
import { Caption } from "@/components/Caption";
import { QuietButton } from "@/components/QuietButton";
import {
  PIECES,
  getPieceBySlug,
  getAllPieceSlugs,
} from "@/content/data";

/**
 * Single piece detail page — /pieces/[slug].
 *
 * Statically generated at build time for every piece in PIECES.
 * Metadata is dynamic per piece. The "Inquire about this piece" button
 * navigates to /inquire/private?piece=<slug>, which the form picks up.
 */

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPieceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPieceBySlug(slug);
  if (!piece) return { title: "Piece not found" };

  return {
    title: `${piece.type} — ${piece.name}`,
    description: `${piece.type} from PASHM. ${piece.vintage}. ${piece.dims}, ${piece.weight}. By appointment.`,
  };
}

export default async function PieceDetailPage({ params }: Props) {
  const { slug } = await params;
  const piece = getPieceBySlug(slug);
  if (!piece) notFound();

  const figNumber = PIECES.findIndex((p) => p.slug === slug) + 1;
  const plateNum = `Pl. ${String(figNumber).padStart(2, "0")}`;

  return (
    <section className="px-10 pb-[100px] pt-10 max-md:px-5 max-md:pb-[60px]">
      <div className="mx-auto max-w-[1340px]">
        <Link
          href="/pieces"
          className="mb-10 inline-flex cursor-pointer items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-soft no-underline"
        >
          <span className="text-[16px]">←</span> Back to all pieces
        </Link>

        <div className="grid grid-cols-[6fr_5fr] items-start gap-20 max-md:grid-cols-1 max-md:gap-[30px]">
          <div>
            <Fig
              figId={piece.figId}
              figMeta={piece.figMeta}
              brief={piece.brief}
              aspect="4/5"
            />
            <Caption
              lhs={`— ${piece.type}, ${piece.name}. ${piece.year}.`}
              rhs={plateNum}
            />
          </div>

          <div>
            <div className="mb-[18px] text-[10px] uppercase tracking-ultra-wide text-stone">
              {piece.type}
            </div>
            <h1 className="mb-[22px] font-sans text-[clamp(36px,3.6vw,56px)] font-extralight leading-[1.05] tracking-[-0.018em] text-ink max-md:text-[34px]">
              {piece.name}
            </h1>
            <div className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
              {piece.vintage}
            </div>

            <div className="mt-9 max-w-[48ch] text-[16px] leading-[1.8] text-ink-soft">
              {piece.prose.map((p, idx) => (
                <p key={idx} className={idx > 0 ? "mt-[18px]" : ""}>
                  {p}
                </p>
              ))}
            </div>

            {/* Specs */}
            <div className="mt-[50px] grid grid-cols-2 gap-x-9 gap-y-6 border-b border-t border-line-soft py-[30px] max-md:grid-cols-1 max-md:gap-[14px]">
              <SpecRow k="Dimensions" v={piece.dims} />
              <SpecRow k="Weight" v={piece.weight} />
              <SpecRow k="Fineness" v={piece.fineness} />
              <SpecRow k="Vintage" v={piece.year} />
              <SpecRow k="Origin" v="Swat Valley" />
              <SpecRow
                k="Comb / Sort / Yarn / Loom"
                v="Each stage done by hand"
                small
              />
            </div>

            {/* Inquire */}
            <div className="mt-[50px] flex items-center gap-[30px] max-md:flex-col max-md:items-start max-md:gap-[18px]">
              <QuietButton href={`/inquire/private?piece=${piece.slug}`}>
                Inquire about this piece
              </QuietButton>
              <span className="font-serif text-[14px] font-light italic text-stone">
                Replies in five to seven days, by the family.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecRow({ k, v, small }: { k: string; v: string; small?: boolean }) {
  return (
    <div className="flex items-baseline justify-between">
      <span className="text-[10px] uppercase tracking-widest text-stone">{k}</span>
      <span className={`font-sans font-normal text-ink ${small ? "text-[11px]" : "text-[14px]"}`}>
        {v}
      </span>
    </div>
  );
}
