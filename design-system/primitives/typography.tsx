import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type TextVariant =
  "display" | "heading" | "title" | "subtitle" | "body" | "caption" | "label" | "button" | "quote";

type TypographyProps<T extends ElementType = "p"> = {
  as?: T;
  children: ReactNode;
  variant?: TextVariant;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children">;

const variants: Record<TextVariant, string> = {
  display: "font-serif text-6xl leading-[0.88] tracking-[-0.06em] md:text-8xl lg:text-9xl",
  heading: "font-serif text-4xl leading-[0.95] tracking-[-0.045em] md:text-6xl",
  title: "text-2xl font-semibold leading-tight tracking-[-0.03em] md:text-4xl",
  subtitle: "text-lg leading-8 text-muted md:text-xl",
  body: "text-base leading-7 text-muted md:text-lg",
  caption: "text-sm leading-5 text-muted",
  label: "text-xs font-bold uppercase tracking-[0.14em] text-muted",
  button: "text-sm font-semibold",
  quote: "font-serif text-3xl leading-tight tracking-[-0.03em] md:text-5xl",
};

export function Typography<T extends ElementType = "p">({
  as,
  children,
  className,
  variant = "body",
  ...props
}: TypographyProps<T>) {
  const Component = as ?? "p";
  return (
    <Component className={cn(variants[variant], className)} {...props}>
      {children}
    </Component>
  );
}
