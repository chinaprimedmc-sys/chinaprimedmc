import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils/cn";

type IconSystemProps = {
  icon: LucideIcon;
  size?: "sm" | "md" | "lg";
  tone?: "default" | "muted" | "inverse";
  className?: string;
};

const sizes = {
  sm: 16,
  md: 20,
  lg: 24,
};

const tones = {
  default: "text-foreground",
  muted: "text-muted",
  inverse: "text-white",
};

export function IconSystem({
  icon: Icon,
  size = "md",
  tone = "default",
  className,
}: IconSystemProps) {
  return (
    <Icon
      size={sizes[size]}
      strokeWidth={1.8}
      className={cn(tones[tone], className)}
      aria-hidden="true"
    />
  );
}
