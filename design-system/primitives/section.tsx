import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type SectionProps = {
  children: ReactNode;
  spacing?: "compact" | "default" | "spacious" | "screen";
} & ComponentPropsWithoutRef<"section">;

const spacing = {
  compact: "py-[var(--space-section-compact)]",
  default: "py-[var(--space-section-default)]",
  spacious: "py-[var(--space-section-spacious)]",
  screen: "min-h-svh py-[var(--space-section-spacious)]",
};

export function Section({
  children,
  className,
  spacing: sectionSpacing = "default",
  ...props
}: SectionProps) {
  return (
    <section className={cn(spacing[sectionSpacing], className)} {...props}>
      {children}
    </section>
  );
}
