import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type CtaVariant = "primary" | "secondary" | "outline" | "glass";
type CtaSize = "sm" | "md" | "lg";

type CtaButtonProps = {
  children: ReactNode;
  variant?: CtaVariant;
  size?: CtaSize;
  icon?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const variants = {
  primary: "bg-foreground text-background hover:bg-foreground/85",
  secondary: "bg-foreground text-background hover:bg-foreground/85",
  outline: "border border-foreground/20 bg-transparent text-foreground hover:bg-foreground/5",
  glass:
    "border border-white/65 bg-white/58 text-foreground shadow-[var(--shadow-glass)] backdrop-blur-2xl hover:bg-white/76",
};

const sizes = {
  sm: "h-10 gap-2 px-4 text-sm",
  md: "h-12 gap-2.5 px-5 text-sm",
  lg: "h-14 gap-3 px-7 text-base",
};

export function CtaButton({
  children,
  className,
  variant = "primary",
  size = "md",
  icon,
  ...props
}: CtaButtonProps) {
  return (
    <a
      className={cn(
        "group focus-visible:ring-brand-red focus-visible:ring-offset-background inline-flex items-center justify-center rounded font-medium transition duration-300 ease-[var(--ease-apple)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      <span>{children}</span>
      {icon ? <span className="transition group-hover:translate-x-0.5">{icon}</span> : null}
    </a>
  );
}
