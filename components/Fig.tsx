import Image from "next/image";

/**
 * Fig — the photo brief placeholder system.
 *
 * Two modes:
 *   1. Brief mode (no `photo`): styled empty frame with a Fig ID, meta label,
 *      and an italic brief that doubles as the photographer's shot list.
 *   2. Photo mode (with `photo`): renders an optimized Next/Image with
 *      the same aspect ratio and a warm tonal overlay.
 *
 * This is the single most-used component on the site. Get it right.
 */

type Props = {
  figId: string;
  figMeta: string;
  brief: string;
  /** Optional URL to a real photograph. When set, brief is hidden. */
  photo?: string;
  /** Alt text — required when `photo` is set. */
  alt?: string;
  /** Responsive `sizes` hint for the optimized image. Defaults to a hero-width hint. */
  sizes?: string;
  /** Aspect ratio class. Defaults to 4/5 portrait. */
  aspect?: "4/5" | "3/4" | "21/9" | "16/11";
  /** Use dark variant (for placeholders inside dark sections). */
  tone?: "light" | "dark";
  className?: string;
};

const aspectClasses: Record<NonNullable<Props["aspect"]>, string> = {
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "21/9": "aspect-[21/9]",
  "16/11": "aspect-[16/11]",
};

export function Fig({
  figId,
  figMeta,
  brief,
  photo,
  alt,
  sizes,
  aspect = "4/5",
  tone = "light",
  className = "",
}: Props) {
  const aspectClass = aspectClasses[aspect];

  // Photo mode — render optimized image
  if (photo) {
    return (
      <div className={`relative overflow-hidden bg-bone-deep ${aspectClass} ${className}`}>
        <Image
          src={photo}
          alt={alt ?? brief}
          fill
          className="photo-grade object-cover transition-transform duration-[8s] ease-[cubic-bezier(.2,.5,.2,1)] hover:scale-[1.04]"
          sizes={sizes ?? "(max-width: 980px) 100vw, 50vw"}
        />
        {/* Warm tonal overlay */}
        <div
          className="pointer-events-none absolute inset-0 mix-blend-multiply"
          style={{
            background:
              "linear-gradient(180deg, rgba(24,20,15,0.04) 0%, rgba(24,20,15,0.2) 100%), linear-gradient(135deg, rgba(184,164,133,0.10), rgba(58,63,54,0.05))",
          }}
        />
      </div>
    );
  }

  // Brief mode — styled empty frame
  const baseClass = tone === "dark" ? "fig-placeholder-dark" : "fig-placeholder";
  const labelColor = tone === "dark" ? "text-bone/50" : "text-ink/50";
  const subColor = tone === "dark" ? "text-bone/45" : "text-ink/45";
  const briefColor = tone === "dark" ? "text-bone/70" : "text-ink/60";

  return (
    <div className={`${baseClass} ${aspectClass} ${className}`}>
      <span
        className={`absolute left-[22px] top-[22px] z-[2] text-[9px] font-normal uppercase tracking-[0.32em] ${labelColor}`}
      >
        {figId}
      </span>
      <span
        className={`absolute right-[22px] top-[22px] z-[2] text-right text-[9px] font-normal uppercase tracking-[0.28em] ${subColor}`}
      >
        {figMeta}
      </span>
      <div className="absolute inset-0 z-[2] grid place-items-center px-7 py-10">
        <p
          className={`max-w-[32ch] text-center font-serif text-[clamp(13px,1.1vw,16px)] font-light italic leading-[1.55] ${briefColor}`}
        >
          {brief}
        </p>
      </div>
    </div>
  );
}
