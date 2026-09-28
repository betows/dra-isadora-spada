import type { ReactNode } from "react";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
  external?: boolean;
};

export function CtaLink({
  href,
  children,
  tone = "light",
  className = "",
  external = true,
}: CtaLinkProps) {
  const looks =
    tone === "light"
      ? "bg-charcoal text-ivory hover:bg-copper"
      : "bg-ivory text-charcoal hover:bg-copper hover:text-ivory";

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-3 px-8 py-4 text-[0.6875rem] font-medium uppercase tracking-[0.22em] transition-colors duration-300 ${looks} ${className}`}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {children}
    </a>
  );
}
