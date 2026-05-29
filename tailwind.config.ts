import type { Config } from "tailwindcss";

/**
 * PASHM design tokens.
 * The brand palette is intentionally narrow: bone, ink, stone — plus warm/deep variants.
 * Typography is two families: Hanken Grotesk (sans, body + display) and Fraunces (italic accent).
 * Arabic falls back to Noto Naskh Arabic, loaded only where needed.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bone: {
          DEFAULT: "#F2EEE5",
          warm: "#ECE6D9",
          deep: "#E2DACA",
          shadow: "#D4CAB4",
        },
        ink: {
          DEFAULT: "#18140F",
          mid: "#2A2520",
          soft: "#3A3530",
        },
        stone: {
          DEFAULT: "#8A847B",
          light: "#A8A299",
        },
        // Opacity variants used in borders
        line: {
          soft: "rgba(24, 20, 15, 0.12)",
          faint: "rgba(24, 20, 15, 0.07)",
        },
      },
      fontFamily: {
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        arabic: ["var(--font-arabic)", "serif"],
      },
      letterSpacing: {
        // Used on labels, eyebrows, nav links — the brand's spaced-uppercase look
        widest: "0.28em",
        "ultra-wide": "0.32em",
        "wordmark": "0.46em",
      },
      animation: {
        rise: "rise 1.05s cubic-bezier(.2,.7,.2,1) forwards",
        lift: "lift 1.2s cubic-bezier(.2,.7,.2,1) both",
      },
      keyframes: {
        rise: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
        lift: {
          from: { transform: "translateY(105%)" },
          to: { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
