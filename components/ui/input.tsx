import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "border-border text-foreground focus:border-foreground/30 h-12 w-full rounded-2xl border bg-white px-4 text-base transition focus:outline-none",
        className,
      )}
      {...props}
    />
  );
}
