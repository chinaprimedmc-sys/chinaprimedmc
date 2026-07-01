import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

export function GalleryLayout({
  children,
  className,
  mode = "editorial",
}: {
  children: ReactNode;
  className?: string;
  mode?: "grid" | "editorial" | "masonry";
}) {
  const modeClass = {
    grid: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",
    editorial: "grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_0.8fr] lg:gap-6",
    masonry: "columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4",
  };

  return <div className={cn(modeClass[mode], className)}>{children}</div>;
}
