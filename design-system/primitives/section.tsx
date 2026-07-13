import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type SectionProps = {
  children: ReactNode;
  spacing?: "compact" | "default" | "spacious" | "screen";
} & ComponentPropsWithoutRef<"section">;

const spacing = {
  compact: "py-12 md:py-16",
  default: "py-16 md:py-24",
  spacious: "py-18 md:py-28",
  screen: "min-h-svh py-24 md:py-32",
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
