import Link from "next/link";
import { Fig } from "./Fig";
import type { Piece } from "@/content/data";

/**
 * PieceCard — a single piece in the index grid.
 *
 * Two variants:
 *   - "preview" (used on home) — minimal, three lines of meta
 *   - "tile" (used on /pieces) — full, includes dimensions
 *
 * Click navigates to /pieces/[slug].
 */

type Props = {
  piece: Piece;
  variant?: "preview" | "tile";
};

export function PieceCard({ piece, variant = "tile" }: Props) {
  const aspect = "4/5";

  return (
    <Link
      href={`/pieces/${piece.slug}` as any}
      className="group block cursor-pointer text-ink no-underline"
    >
      <Fig
        figId={piece.figId}
        figMeta={piece.figMeta}
        brief={piece.brief}
        photo={piece.photo}
        alt={`${piece.type} — ${piece.name}`}
        sizes="(max-width: 980px) 100vw, 33vw"
        aspect={aspect}
      />
      <div className={variant === "preview" ? "mt-[18px]" : "mt-[22px]"}>
        {variant === "tile" && (
          <div className="mb-2 text-[10px] uppercase tracking-widest text-stone">
            {piece.type}
          </div>
        )}
        <div
          className={`mb-[6px] font-sans font-light tracking-[-0.005em] text-ink ${
            variant === "preview" ? "text-[19px]" : "text-[22px]"
          }`}
        >
          {piece.name}
        </div>
        <div className="flex items-center gap-[14px] text-[11px] uppercase tracking-[0.18em] text-ink-soft">
          <span className="h-1 w-1 rounded-full bg-stone" />
          {piece.vintage}
        </div>
        {variant === "tile" && (
          <div className="mt-2 font-serif text-[13px] font-light italic text-stone">
            — {piece.dims} · {piece.weight}
          </div>
        )}
      </div>
    </Link>
  );
}
