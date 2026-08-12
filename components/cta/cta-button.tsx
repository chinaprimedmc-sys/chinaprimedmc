"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

import { buttonBaseStyles, buttonSizes, buttonVariants } from "@/components/ui/button-styles";
import { trackCtaClick } from "@/lib/analytics/events";
import { cn } from "@/lib/utils/cn";

type CtaVariant =
  | "primary"
  | "explore"
  | "light"
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
  "data-cta-placement"?: string;
  "data-journey-slug"?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function CtaButton({
  children,
  className,
  variant = "primary",
  size = "md",
  icon,
  "data-cta-placement": ctaPlacement,
  "data-journey-slug": journeySlug,
  onClick,
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
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        const href = event.currentTarget.getAttribute("href") || "";
        trackCtaClick(
          typeof children === "string" ? children : "cta",
          href,
          ctaPlacement,
          journeySlug,
        );
        onClick?.(event);
      }}
      {...props}
    >
      <span className="inline-flex min-w-0 items-center justify-center gap-2.5 leading-none">
        {children}
      </span>
      {icon ? <span className="transition group-hover:translate-x-0.5">{icon}</span> : null}
    </a>
  );
}
