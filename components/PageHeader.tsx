/**
 * PageHeader — the standard inner-page title block.
 * Eyebrow (section marker), title, lead paragraph.
 * Used on every inner room to give visual consistency.
 */

type Props = {
  eyebrow: string;
  title: string;
  lead?: string;
};

export function PageHeader({ eyebrow, title, lead }: Props) {
  return (
    <div className="border-b border-line-soft px-10 pt-20 max-md:px-5 max-md:pt-[50px]">
      <div className="mx-auto max-w-[1340px] pb-[70px] max-md:pb-10">
        <div className="mb-7 text-[10px] font-normal uppercase tracking-ultra-wide text-stone">
          {eyebrow}
        </div>
        <h1 className="max-w-[16ch] font-sans text-[clamp(48px,5vw,84px)] font-extralight leading-[1.02] tracking-[-0.022em] text-ink max-md:text-[42px]">
          {title}
        </h1>
        {lead && (
          <p className="mt-9 max-w-[56ch] text-[17px] leading-[1.7] text-ink-soft max-md:text-[15px]">
            {lead}
          </p>
        )}
      </div>
    </div>
  );
}
