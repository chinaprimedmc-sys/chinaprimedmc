import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { typography, type TypographyLevel } from "@/design-system/tokens";
import { cn } from "@/lib/utils/cn";

type TypographyProps<T extends ElementType = "p"> = {
  as?: T;
  children: ReactNode;
  variant?: TypographyLevel;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

export function Typography<T extends ElementType = "p">({
  as,
  children,
  className,
  variant = "body",
  ...props
}: TypographyProps<T>) {
  const Component = as ?? "p";
  return (
    <Component className={cn(typography[variant], className)} {...props}>
      {children}
    </Component>
  );
}
