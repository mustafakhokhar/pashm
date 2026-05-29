import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import type { Route } from "next";

/**
 * QuietButton — the brand's primary call-to-action style.
 *
 * It's not a button in the bold sense; it's an underlined link with a small
 * arrow that slides on hover. Two tones: light (on bone background) and dark
 * (on ink background).
 *
 * Renders as <Link> when `href` is set, else as <button>.
 */

type CommonProps = {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

type LinkProps = CommonProps & {
  href: Route | string;
  onClick?: never;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className" | "children">;

type ButtonProps = CommonProps & {
  href?: never;
  onClick?: ComponentPropsWithoutRef<"button">["onClick"];
  type?: ComponentPropsWithoutRef<"button">["type"];
};

type Props = LinkProps | ButtonProps;

function Arrow({ tone }: { tone: "light" | "dark" }) {
  const color = tone === "dark" ? "bg-bone" : "bg-ink";
  const borderColor = tone === "dark" ? "border-bone" : "border-ink";
  return (
    <span className={`relative inline-block h-px w-[26px] ${color}`}>
      <span
        className={`absolute -top-[3px] right-0 h-[7px] w-[7px] rotate-45 border-r border-t ${borderColor}`}
      />
    </span>
  );
}

const baseClasses =
  "inline-flex cursor-pointer items-center gap-4 border-b py-4 font-sans text-[11px] font-normal uppercase tracking-[0.26em] transition-[gap] duration-[0.55s] ease-[cubic-bezier(.7,0,.2,1)] hover:gap-6";

export function QuietButton(props: Props) {
  const { children, tone = "light", className = "" } = props;
  const toneClass = tone === "dark" ? "text-bone border-bone" : "text-ink border-ink";
  const combined = `${baseClasses} ${toneClass} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, ...rest } = props as LinkProps;
    return (
      // @ts-ignore — href may be a typed Route or a plain string; both are valid here
      <Link href={href} className={combined} {...rest}>
        {children}
        <Arrow tone={tone} />
      </Link>
    );
  }

  const { onClick, type = "button" } = props as ButtonProps;
  return (
    <button type={type} onClick={onClick} className={combined}>
      {children}
      <Arrow tone={tone} />
    </button>
  );
}
