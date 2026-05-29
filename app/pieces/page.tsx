import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { PiecesBrowser } from "@/components/PiecesBrowser";
import { PIECES } from "@/content/data";

export const metadata: Metadata = {
  title: "Pieces",
  description:
    "Shawls, stoles, scarves, and mufflers — made to commission. Each piece named, dated to a harvest, and traceable to the people who made it.",
};

/**
 * Pieces index — the almost-catalog.
 *
 * Server component: owns metadata and the page header, then hands the data to
 * PiecesBrowser (a client component) which manages the filter state and grid.
 */

export default function PiecesPage() {
  return (
    <>
      <PageHeader
        eyebrow="§ Pieces"
        title="Shawls, stoles, scarves, mufflers. Made to commission."
        lead="Each piece is named, dated to a harvest, and traceable to the people who made it. We show what we have, and what we can make. There are no prices on this site — please write to inquire."
      />

      <section className="px-10 pb-[100px] pt-[60px] max-md:px-5 max-md:pb-[60px] max-md:pt-10">
        <div className="mx-auto max-w-[1340px]">
          <PiecesBrowser pieces={PIECES} />
        </div>
      </section>
    </>
  );
}
