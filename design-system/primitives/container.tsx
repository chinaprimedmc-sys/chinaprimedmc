import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

const sizes = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-7xl",
  xl: "max-w-[92rem]",
  full: "max-w-none",
};

export function Container<T extends ElementType = "div">({
  as,
  children,
  className,
  size = "lg",
  ...props
}: ContainerProps<T>) {
  const Component = as ?? "div";
  return (
    <Component className={cn("mx-auto w-full px-5 md:px-8", sizes[size], className)} {...props}>
      {children}
    </Component>
  );
}
