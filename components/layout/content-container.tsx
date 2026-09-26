import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { Container } from "@/design-system/primitives/container";

type ContentContainerProps = {
  children: ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "bleed";
} & ComponentPropsWithoutRef<"div">;

export function ContentContainer({
  children,
  className,
  size = "lg",
  ...props
}: ContentContainerProps) {
  return (
    <Container size={size} className={className} {...props}>
      {children}
    </Container>
  );
}
