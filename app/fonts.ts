import { Hanken_Grotesk, Fraunces, Noto_Naskh_Arabic } from "next/font/google";

/**
 * Self-hosted Google Fonts via next/font.
 * - Hanken Grotesk: the primary sans, used for body and display
 * - Fraunces: italic accent only (rarely)
 * - Noto Naskh Arabic: loaded for the Arabic glyphs in the utility bar and watermarks
 *
 * Variables are wired into tailwind.config.ts under fontFamily.
 */

export const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-hanken",
  display: "swap",
});

export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500"],
  variable: "--font-arabic",
  display: "swap",
});
