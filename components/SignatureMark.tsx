/**
 * The PASHM signature mark — a fine horizontal line with an ellipse on it.
 * Used in the wordmark, in the centered folio rules, in dividers.
 * Same DNA, three sizes.
 */

type Props = {
  width?: number;
  className?: string;
  ariaLabel?: string;
};

export function SignatureMark({ width = 42, className, ariaLabel }: Props) {
  const height = Math.round((width / 42) * 10);
  const cx = width / 2;
  const rx = (3 / 42) * width;
  const ry = (1.8 / 42) * width;

  return (
    <span className={className} aria-label={ariaLabel} aria-hidden={!ariaLabel}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1={height / 2}
          x2={width}
          y2={height / 2}
          stroke="currentColor"
          strokeWidth="0.7"
        />
        <ellipse cx={cx} cy={height / 2} rx={rx} ry={ry} fill="currentColor" />
      </svg>
    </span>
  );
}
