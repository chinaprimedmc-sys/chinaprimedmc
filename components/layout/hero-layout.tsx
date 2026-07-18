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
    <section
      data-hero-layout="true"
      className={cn("relative grid overflow-hidden", heights[height], className)}
    >
      {media ? <div className="absolute inset-0 z-0">{media}</div> : null}
      <div
        className={cn(
          "relative z-20 mx-auto flex w-full max-w-6xl min-w-0 flex-col justify-center px-5 pt-[calc(var(--site-nav-offset)+1rem)] pb-24 sm:px-6 lg:px-8",
          align === "center" && "items-center text-center",
          align === "left" && "items-start text-left",
        )}
      >
        {children}
      </div>
    </section>
  );
}
