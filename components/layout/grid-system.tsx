import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type GridSystemProps = {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4 | 6 | 12;
  gap?: "sm" | "md" | "lg";
} & ComponentPropsWithoutRef<"div">;

const columns = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4",
  6: "grid-cols-2 md:grid-cols-3 xl:grid-cols-6",
  12: "grid-cols-4 md:grid-cols-8 xl:grid-cols-12",
};

const gaps = {
  sm: "gap-3 md:gap-4",
  md: "gap-5 md:gap-6",
  lg: "gap-6 md:gap-8",
};

export function GridSystem({
  children,
  className,
  columns: columnCount = 3,
  gap = "md",
  ...props
}: GridSystemProps) {
  return (
    <div className={cn("grid", columns[columnCount], gaps[gap], className)} {...props}>
      {children}
    </div>
  );
}
