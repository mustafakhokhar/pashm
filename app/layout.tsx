import type { Metadata } from "next";
import { hankenGrotesk, fraunces, notoNaskhArabic } from "./fonts";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ReadingProgress } from "@/components/ReadingProgress";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

/**
 * Root layout.
 *
 * Composes the shared shell: main nav at the top, footer at the bottom, page
 * transition wrapper around the route content.
 *
 * Metadata defined here is the default for the site; individual pages override
 * via their own `metadata` export.
 */

export const metadata: Metadata = {
  metadataBase: new URL("https://pashm.example"),
  title: {
    default: "PASHM — Cashmere from the Swat Valley",
    template: "%s — PASHM",
  },
  description:
    "Pashm combed by hand in the Swat Valley. Fibre, yarn, and finished pieces, dispatched direct to mills, ateliers, and private households.",
  openGraph: {
    title: "PASHM — Cashmere from the Swat Valley",
    description:
      "Hand-combed pashm from the Swat Valley.",
    type: "website",
    locale: "en_GB",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${fraunces.variable} ${notoNaskhArabic.variable}`}
    >
      <body>
        <ReadingProgress />
        <Nav />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
