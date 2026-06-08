import { ImageResponse } from "next/og";

/**
 * Default Open Graph card for the whole site — the preview a buyer sees when a
 * PASHM link is pasted into a cold email, LinkedIn, or a message. Branded and
 * typographic on the bone palette, so it always looks intentional (no awkward
 * photo crop). Individual routes can override with their own opengraph-image.
 */

export const alt = "PASHM — Cashmere from the Swat Valley";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F2EEE5",
          color: "#18140F",
          padding: "76px 84px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: 8,
            color: "#6E665B",
          }}
        >
          <div style={{ display: "flex", textTransform: "uppercase" }}>
            Swat Valley · Pakistan
          </div>
          <div style={{ display: "flex", textTransform: "uppercase" }}>
            Hand-combed cashmere
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 150, letterSpacing: 30 }}>PASHM</div>
          <div style={{ display: "flex", fontSize: 44, marginTop: 8, color: "#3A3530" }}>
            Cashmere from where it began.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: 4,
            color: "#6E665B",
          }}
        >
          <div style={{ display: "flex", textTransform: "uppercase" }}>
            Fibre · Yarn · Pieces
          </div>
          <div style={{ display: "flex", textTransform: "uppercase" }}>
            Direct from the source
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
