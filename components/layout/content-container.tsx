import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ContentContainerProps = {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "bleed";
} & ComponentPropsWithoutRef<"div">;

const sizes = {
  xs: "max-w-2xl",
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[92rem]",
  bleed: "max-w-none px-0",
};

export function ContentContainer({
  children,
  className,
  size = "lg",
  ...props
}: ContentContainerProps) {
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizes[size], className)} {...props}>
      {children}
    </div>
  );
}
