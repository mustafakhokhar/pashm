/**
 * PASHM content — pieces, harvest entries, people.
 *
 * This is the single source of truth for the brand's structured data.
 * Components render from these records. Routes are generated from them
 * (e.g. /pieces/[slug] uses the `slug` field below).
 *
 * Adding a new piece or harvest year? Add a record here. The site picks it up.
 * Want a real CMS later? Replace this file with a fetch — the shape stays the same.
 */

// =============================================================
// PIECES — the almost-catalog
// =============================================================

export type PieceType = "Shawl" | "Stole" | "Muffler" | "Scarf";

export type Piece = {
  slug: string; // url-safe identifier — used in /pieces/[slug]
  type: PieceType;
  name: string; // e.g. "Undyed, fine"
  vintage: string; // e.g. "Spring 2026 · Swat · 15.2μ"
  year: string; // e.g. "Spring 2026"
  fineness: string; // e.g. "15.2 microns"
  dims: string; // e.g. "200 × 70 cm"
  weight: string; // e.g. "180 g"
  // For the styled-brief placeholder. Replace `photo` with a path once real shots exist.
  figId: string;
  figMeta: string;
  brief: string;
  photo?: string; // optional URL for placeholder imagery
  prose: string[]; // paragraphs of body copy
};

export const PIECES: Piece[] = [
  {
    slug: "stole-undyed-fine-spring-2026",
    type: "Stole",
    name: "Undyed, fine",
    vintage: "Spring 2026 · Swat · 15.2μ",
    year: "Spring 2026",
    fineness: "15.2 microns",
    dims: "200 × 70 cm",
    weight: "180 g",
    figId: "Fig. 11",
    figMeta: "Stole · Undyed fine",
    brief: "Stole on undyed paper. Natural fawn. Soft daylight.",
    photo: "/photography/stole.jpg",
    prose: [
      "A stole woven from the spring 2026 harvest. Undyed natural fawn — the colour comes from the goats, not from us. Soft enough to fold into a pocket; warm enough for a winter evening in the mountains.",
      "This piece left the loom in October 2026. Ustad Akbar finished the fringe by hand.",
    ],
  },
  {
    slug: "shawl-natural-fawn-spring-2025",
    type: "Shawl",
    name: "Natural fawn",
    vintage: "Spring 2025 · Swat · 15.6μ",
    year: "Spring 2025",
    fineness: "15.6 microns",
    dims: "220 × 100 cm",
    weight: "280 g",
    figId: "Fig. 12",
    figMeta: "Shawl · Natural fawn",
    brief: "Shawl draped over wooden chair back. Window light.",
    photo: "/photography/shawl.jpg",
    prose: [
      "A wider, heavier shawl from the spring 2025 harvest. The fawn is the natural shade of the herd that wintered low that year — slightly warmer and deeper than 2026.",
      "Made to be worn folded over the shoulder. Generously fringed.",
    ],
  },
  {
    slug: "muffler-dark-brown-spring-2025",
    type: "Muffler",
    name: "Natural dark brown",
    vintage: "Spring 2025 · Swat · 15.4μ",
    year: "Spring 2025",
    fineness: "15.4 microns",
    dims: "160 × 30 cm",
    weight: "95 g",
    figId: "Fig. 13",
    figMeta: "Muffler · Dark brown",
    brief: "Muffler folded on stone. Natural undyed dark brown.",
    photo: "/photography/muffler.jpg",
    prose: [
      "A long, narrow muffler. The dark brown comes from a small cluster of goats Bibi Najma sorted separately — entirely undyed.",
      "Loose-woven, light, warm. Made for daily wear.",
    ],
  },
  {
    slug: "scarf-cream-fine-spring-2026",
    type: "Scarf",
    name: "Cream, fine",
    vintage: "Spring 2026 · Swat · 15.2μ",
    year: "Spring 2026",
    fineness: "15.2 microns",
    dims: "180 × 45 cm",
    weight: "130 g",
    figId: "Fig. 19",
    figMeta: "Scarf · Cream",
    brief: "Scarf around someone's neck. Close, but not face. Cream natural.",
    prose: [
      "A lighter scarf from the spring 2026 harvest. Cream — almost white — from the lightest of the under-down.",
      "Folds small. Travels well.",
    ],
  },
  {
    slug: "shawl-mineral-indigo-spring-2025",
    type: "Shawl",
    name: "Mineral indigo",
    vintage: "Spring 2025 · Swat · 15.6μ · dyed",
    year: "Spring 2025",
    fineness: "15.6 microns",
    dims: "220 × 100 cm",
    weight: "290 g",
    figId: "Fig. 20",
    figMeta: "Shawl · Mineral indigo",
    brief: "Shawl in deep indigo (mineral-dyed). Pooled on light wood.",
    prose: [
      "A shawl dyed in mineral indigo — the only dye we use, applied by hand at the workshop. The depth of colour is in the fibre, not on its surface.",
      "The base is the same 2025 spring fawn.",
    ],
  },
  {
    slug: "stole-charcoal-spring-2024",
    type: "Stole",
    name: "Charcoal, natural blend",
    vintage: "Spring 2024 · Swat · 15.8μ",
    year: "Spring 2024",
    fineness: "15.8 microns",
    dims: "200 × 70 cm",
    weight: "195 g",
    figId: "Fig. 21",
    figMeta: "Stole · Charcoal",
    brief: "Stole in natural charcoal-grey blend. Folded twice on undyed paper.",
    prose: [
      "A stole from the 2024 vintage — the warmer, shorter spring that gave us one of our finest natural charcoals.",
      "Blended at the sort, not dyed. Each batch differs slightly.",
    ],
  },
];

// Helpers — keep route handlers and pages clean
export function getPieceBySlug(slug: string): Piece | undefined {
  return PIECES.find((p) => p.slug === slug);
}
export function getAllPieceSlugs(): string[] {
  return PIECES.map((p) => p.slug);
}

// =============================================================
// HARVEST — annual records
// =============================================================

export type HarvestEntry = {
  year: number;
  vintageCode: string; // e.g. "Spring 2026 · Swat · 15.2μ"
  summary: string;
  status: "Current vintage" | "Archive" | "Forthcoming";
  // Long-form body shown on the year detail page
  body?: string[];
};

export const HARVEST: HarvestEntry[] = [
  {
    year: 2027,
    vintageCode: "— forthcoming",
    summary: "The next harvest opens in late April 2027.",
    status: "Forthcoming",
  },
  {
    year: 2026,
    vintageCode: "Spring 2026 · Swat · 15.2μ",
    summary: "A long winter and a slow thaw. The finest spring we have measured in five years.",
    status: "Current vintage",
    body: [
      "Late April brought **a long, slow thaw**. The herd stayed in the lower pastures for an extra two weeks; the under-down was heavier and finer than any year since 2021. We measured an average of **15.2 microns** across the dehaired batch — the finest spring we have recorded in five years.",
      "Total finished yield came to approximately **110 kg**. About seventy kilos went directly to two mills we have worked with for a long time; the rest stays in the workshop for yarn and finished pieces.",
      "This year's most striking colour came from a small cluster of goats Bibi Najma sorted separately — a dark, almost slate-grey under-down that we have kept aside, undyed, for two stoles and one shawl.",
      "— A note from the family. May 2026.",
    ],
  },
  {
    year: 2025,
    vintageCode: "Spring 2025 · Swat · 15.6μ",
    summary: "An ordinary year. Yield ~98 kg finished. Two new mineral dyes trialled at the workshop.",
    status: "Archive",
    body: [
      "An ordinary spring by most measures. Yield came to approximately 98 kg finished — close to the five-year average.",
      "We trialled two new mineral dyes at the workshop this year: a deep indigo and a soft ochre. The indigo went into a single shawl, which is in the current Pieces selection.",
    ],
  },
  {
    year: 2024,
    vintageCode: "Spring 2024 · Swat · 15.8μ",
    summary: "A short, warm spring. Lower yield (84 kg), but a striking natural charcoal blend.",
    status: "Archive",
    body: [
      "A short, warm spring. The harvest closed two weeks earlier than usual and total finished yield came to only 84 kg.",
      "The standout of the year was a natural charcoal blend that emerged from Bibi Najma's sort — one of the finest charcoals we have ever recorded, entirely undyed.",
    ],
  },
  {
    year: 2023,
    vintageCode: "Spring 2023 · Swat · 15.4μ",
    summary: "First year of the named-source dispatch — the family's work travelled under its own name.",
    status: "Archive",
    body: [
      "The first year we dispatched fibre and finished pieces under the family name. A small change in practice; a significant one in principle.",
    ],
  },
];

export function getHarvestByYear(year: number): HarvestEntry | undefined {
  return HARVEST.find((h) => h.year === year);
}
export function getAllHarvestYears(): number[] {
  // Only return years with body content — forthcoming entries don't get detail pages
  return HARVEST.filter((h) => h.body).map((h) => h.year);
}

// =============================================================
// PEOPLE — credited on every certificate
// =============================================================

export type Person = {
  role: string;
  name: string;
  tenure: string;
  figId: string;
  figMeta: string;
  brief: string;
};

export const PEOPLE: Person[] = [
  {
    role: "Comber",
    name: "Bakht Mir",
    tenure: "— twenty-eight years",
    figId: "Fig. 15",
    figMeta: "Comber",
    brief: "Bakht Mir in three-quarter portrait. No direct gaze.",
  },
  {
    role: "Sort & dehair",
    name: "Bibi Najma",
    tenure: "— leads the women's side",
    figId: "Fig. 16",
    figMeta: "Sort",
    brief: "Bibi Najma at the sorting table. Window light, hands visible.",
  },
  {
    role: "Yarn",
    name: "Hidayat Khan",
    tenure: "— spins on a low-tension wheel",
    figId: "Fig. 17",
    figMeta: "Spinner",
    brief: "Hidayat Khan at the wheel. Profile, working.",
  },
  {
    role: "Loom",
    name: "Ustad Akbar",
    tenure: "— third generation",
    figId: "Fig. 18",
    figMeta: "Weaver",
    brief: "Ustad Akbar at the loom his father built in 1953.",
  },
];

// =============================================================
// FIBRE SPECS — surfaced on the home specs strip
// =============================================================

export const CURRENT_VINTAGE = {
  label: "§ 2025 — FIBER",
  fineness: { value: "15.2", unit: "microns" },
  length: { value: "38 – 42", unit: "mm" },
  method: { value: "Hand-combed", unit: "" },
  yield: { value: "~110", unit: "kg, finished" },
};
