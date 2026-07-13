import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost" | "glass";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants = {
  primary: "bg-foreground text-background hover:bg-foreground/85",
  secondary: "bg-white text-foreground ring-1 ring-border hover:bg-white/80",
  ghost: "bg-transparent text-foreground hover:bg-foreground/5",
  glass:
    "bg-white/60 text-foreground shadow-[var(--shadow-glass)] ring-1 ring-white/70 backdrop-blur-2xl hover:bg-white/75",
};

const sizes = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

export function Button({ className, variant = "primary", size = "md", ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "focus-visible:ring-brand-red focus-visible:ring-offset-background inline-flex items-center justify-center rounded font-semibold transition duration-200 ease-[var(--ease-apple)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
