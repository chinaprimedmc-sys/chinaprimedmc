import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export function FullWidthLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative left-1/2 w-screen -translate-x-1/2", className)}>{children}</div>
  );
}
