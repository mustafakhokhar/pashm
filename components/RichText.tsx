import { Fragment } from "react";

/**
 * RichText — renders an array of paragraphs, parsing inline **bold** markers.
 *
 * Replaces the previous regex + dangerouslySetInnerHTML approach on the harvest
 * page. Emphasis is now declared explicitly in the content (content/data.ts)
 * with **double-asterisk** markers and parsed into <strong> here. No raw HTML is
 * ever injected, so this stays safe even if the content layer becomes a CMS.
 *
 * One parser, shared by The Work chapters and the Harvest notes.
 */

type Props = {
  paragraphs: string[];
  /** Wrapper classes — typography, max-width, colour. */
  className?: string;
  /** Top margin applied to every paragraph after the first. */
  gapClass?: string;
  /** Classes applied to the emphasised (**bold**) runs. */
  boldClassName?: string;
};

export function RichText({
  paragraphs,
  className = "",
  gapClass = "mt-[18px]",
  boldClassName = "font-normal text-ink",
}: Props) {
  return (
    <div className={className}>
      {paragraphs.map((paragraph, idx) => {
        // Odd indices are the captured (bold) runs; even indices are plain text.
        const parts = paragraph.split(/\*\*(.+?)\*\*/g);
        return (
          <p key={idx} className={idx > 0 ? gapClass : ""}>
            {parts.map((part, i) =>
              i % 2 === 1 ? (
                <strong key={i} className={boldClassName}>
                  {part}
                </strong>
              ) : (
                <Fragment key={i}>{part}</Fragment>
              )
            )}
          </p>
        );
      })}
    </div>
  );
}
