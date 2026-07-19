import type { AnchorHTMLAttributes, ReactNode } from "react";

import { buttonBaseStyles, buttonSizes, buttonVariants } from "@/components/ui/button-styles";
import { cn } from "@/lib/utils/cn";

type CtaVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "glass"
  | "frosted"
  | "frostedSubtle"
  | "lightFrosted"
  | "lightFrostedSubtle"
  | "whatsappFrosted";
type CtaSize = "sm" | "md" | "lg";

type CtaButtonProps = {
  children: ReactNode;
  variant?: CtaVariant;
  size?: CtaSize;
  icon?: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

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
        "group",
        buttonBaseStyles,
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...props}
    >
      <span className="inline-flex min-w-0 items-center justify-center gap-2.5 leading-none">
        {children}
      </span>
      {icon ? <span className="transition group-hover:translate-x-0.5">{icon}</span> : null}
    </a>
  );
}
