import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type SplitLayoutProps = {
  primary: ReactNode;
  secondary: ReactNode;
  ratio?: "equal" | "content" | "media";
  className?: string;
};

const ratios = {
  equal: "lg:grid-cols-2",
  content: "lg:grid-cols-[0.85fr_1.15fr]",
  media: "lg:grid-cols-[1.15fr_0.85fr]",
};

export function SplitLayout({ primary, secondary, ratio = "equal", className }: SplitLayoutProps) {
  return (
    <div className={cn("grid items-center gap-6 md:gap-8", ratios[ratio], className)}>
      <div>{primary}</div>
      <div>{secondary}</div>
    </div>
  );
}
