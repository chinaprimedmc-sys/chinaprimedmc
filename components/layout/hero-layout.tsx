import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type HeroLayoutProps = {
  children: ReactNode;
  media?: ReactNode;
  align?: "left" | "center";
  height?: "page" | "compact";
  className?: string;
};

const heights = {
  page: "min-h-svh",
  compact: "min-h-[68svh]",
};

export function HeroLayout({
  children,
  media,
  align = "center",
  height = "page",
  className,
}: HeroLayoutProps) {
  return (
    <section className={cn("relative grid overflow-hidden", heights[height], className)}>
      {media ? <div className="absolute inset-0">{media}</div> : null}
      <div
        className={cn(
          "relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-center px-5 py-24 sm:px-6 lg:px-8",
          align === "center" && "items-center text-center",
          align === "left" && "items-start text-left",
        )}
      >
        {children}
      </div>
    </section>
  );
}
