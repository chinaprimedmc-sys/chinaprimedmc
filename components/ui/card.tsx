import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[var(--radius-card)] border border-white/78 bg-white/62 shadow-[var(--shadow-glass)] backdrop-blur-2xl [-webkit-backdrop-filter:blur(var(--glass-blur))_saturate(130%)]",
        className,
      )}
      {...props}
    />
  );
}
