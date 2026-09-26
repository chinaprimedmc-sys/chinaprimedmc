import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "text-muted inline-flex min-h-7 items-center rounded-full border border-white/72 bg-white/48 px-3 text-xs font-bold uppercase shadow-[var(--button-glass-shadow-subtle)] backdrop-blur-xl",
        className,
      )}
      {...props}
    />
  );
}
