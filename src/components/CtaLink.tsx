import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  tone?: "light" | "dark";
  className?: string;
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-3 px-7 py-3.5 text-[0.6875rem] font-medium uppercase tracking-[0.22em] transition-colors duration-300";

export function CtaLink({
  href,
  children,
  variant = "solid",
  tone = "light",
  className = "",
  external = true,
}: CtaLinkProps) {
  const looks =
    variant === "solid"
      ? tone === "light"
        ? "bg-charcoal text-ivory hover:bg-copper"
        : "bg-ivory text-charcoal hover:bg-copper hover:text-ivory"
      : tone === "light"
        ? "border border-charcoal/20 text-charcoal hover:border-copper hover:text-copper"
        : "border border-ivory/25 text-ivory hover:border-copper-soft hover:text-copper-soft";

  return (
    <a
      href={href}
      className={`${base} ${looks} ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}
