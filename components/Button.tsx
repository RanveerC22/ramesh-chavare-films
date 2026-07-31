import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  children: ReactNode;
  className?: string;
  download?: boolean;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm font-semibold uppercase tracking-wide transition-colors";

const variants = {
  primary: "bg-brass text-ink hover:bg-brass-light",
  secondary: "border border-ivory/25 text-ivory hover:border-brass hover:text-brass",
};

const sizes = {
  md: "px-7 py-3.5 text-sm",
  sm: "px-5 py-2.5 text-sm",
};

export default function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  download,
  external,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const isInternal = !external && !download && href.startsWith("/");

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}
