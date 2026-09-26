import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "full" | "bleed";
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

const sizes = {
  xs: "max-w-[var(--container-narrow)]",
  sm: "max-w-[var(--container-narrow)]",
  md: "max-w-[var(--container-editorial)]",
  lg: "max-w-[var(--container-content)]",
  xl: "max-w-[var(--container-page)]",
  full: "max-w-none",
  bleed: "max-w-none px-0",
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
    <Component
      className={cn("mx-auto w-full px-[var(--page-gutter)]", sizes[size], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
