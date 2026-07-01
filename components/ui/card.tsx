import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border-border rounded-[var(--radius-card)] border bg-white shadow-[0_18px_54px_rgba(17,16,15,0.08)]",
        className,
      )}
      {...props}
    />
  );
}
