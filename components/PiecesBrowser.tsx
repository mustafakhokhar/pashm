"use client";

import { useState } from "react";
import { PieceCard } from "./PieceCard";
import type { Piece, PieceType } from "@/content/data";

/**
 * PiecesBrowser — the interactive filter + grid for the Pieces room.
 *
 * Kept as a client component so /pieces/page.tsx can stay a server component
 * (and keep its metadata export). The filter chips were previously decorative
 * and the count was hard-coded; they now filter for real and the count reflects
 * what's shown.
 *
 * Filtering by type is non-transactional — no prices, no stock, no cart — so it
 * stays within the brand's "almost a catalog" rule (strategy §8).
 */

const FILTERS = ["All", "Shawls", "Stoles", "Mufflers", "Scarves"] as const;
type Filter = (typeof FILTERS)[number];

// Chip label (plural) -> the singular PieceType stored on each record.
const LABEL_TO_TYPE: Record<Exclude<Filter, "All">, PieceType> = {
  Shawls: "Shawl",
  Stoles: "Stole",
  Mufflers: "Muffler",
  Scarves: "Scarf",
};

// Spelled-out counts keep the quiet, editorial register ("six of six").
const NUMBER_WORDS = [
  "zero", "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine", "ten",
];
const asWord = (n: number) => NUMBER_WORDS[n] ?? String(n);

export function PiecesBrowser({ pieces }: { pieces: Piece[] }) {
  const [active, setActive] = useState<Filter>("All");

  const shown =
    active === "All"
      ? pieces
      : pieces.filter((p) => p.type === LABEL_TO_TYPE[active]);

  return (
    <>
      {/* Filter strip */}
      <div className="mb-[60px] flex items-baseline justify-between border-b border-line-soft py-[30px] max-md:mb-[30px] max-md:flex-col max-md:items-start max-md:gap-[14px] max-md:py-5">
        <div className="flex flex-wrap gap-7 max-md:gap-4">
          {FILTERS.map((label) => {
            const isActive = label === active;
            return (
              <button
                key={label}
                type="button"
                onClick={() => setActive(label)}
                className={`cursor-pointer border-b pb-1 text-[11px] uppercase tracking-[0.22em] transition-colors ${
                  isActive
                    ? "border-ink text-ink"
                    : "border-transparent text-ink-soft hover:text-ink"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div className="text-[11px] uppercase tracking-[0.22em] text-stone">
          Showing <em className="font-serif italic text-ink-soft">{asWord(shown.length)}</em> of{" "}
          <em className="font-serif italic text-ink-soft">{asWord(pieces.length)}</em> · Spring 2026 + archive
        </div>
      </div>

      {/* Pieces grid */}
      <div className="grid grid-cols-3 gap-x-10 gap-y-[60px] max-md:grid-cols-1 max-md:gap-10">
        {shown.map((piece) => (
          <PieceCard key={piece.slug} piece={piece} variant="tile" />
        ))}
      </div>
    </>
  );
}
