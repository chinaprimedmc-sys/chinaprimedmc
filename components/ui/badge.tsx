import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "bg-foreground/6 text-muted inline-flex min-h-7 items-center rounded-full px-3 text-xs font-bold tracking-[0.1em] uppercase",
        className,
      )}
      {...props}
    />
  );
}
