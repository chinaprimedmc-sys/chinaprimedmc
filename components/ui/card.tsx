import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border-border rounded-[var(--radius-editorial)] border bg-[var(--color-surface)]",
        className,
      )}
      {...props}
    />
  );
}
