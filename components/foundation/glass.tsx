import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type GlassProps = HTMLAttributes<HTMLDivElement> & {
  variant?: "navigation" | "search" | "dialog" | "dropdown" | "floating" | "card" | "overlay";
};

const variants = {
  navigation: "border-white/60 bg-white/62 shadow-[var(--shadow-glass)] backdrop-blur-2xl",
  search: "border-white/70 bg-white/78 shadow-[var(--shadow-glass)] backdrop-blur-2xl",
  dialog: "border-white/70 bg-white/82 shadow-[var(--shadow-glass)] backdrop-blur-2xl",
  dropdown: "border-white/65 bg-white/76 shadow-[var(--shadow-glass)] backdrop-blur-2xl",
  floating: "border-white/65 bg-white/58 shadow-[var(--shadow-glass)] backdrop-blur-2xl",
  card: "border-white/58 bg-white/54 shadow-[var(--shadow-glass)] backdrop-blur-xl",
  overlay: "border-white/35 bg-white/20 shadow-[var(--shadow-glass)] backdrop-blur-2xl",
};

export function Glass({ className, variant = "card", ...props }: GlassProps) {
  return <div className={cn("border", variants[variant], className)} {...props} />;
}
