import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type PageContainerProps = {
  children: ReactNode;
  tone?: "warm" | "white" | "dark";
} & ComponentPropsWithoutRef<"main">;

const tones = {
  warm: "bg-background text-foreground",
  white: "bg-white text-foreground",
  dark: "bg-neutral-950 text-white",
};

export function PageContainer({
  children,
  className,
  tone = "warm",
  ...props
}: PageContainerProps) {
  return (
    <main className={cn("min-h-svh overflow-x-clip", tones[tone], className)} {...props}>
      {children}
    </main>
  );
}
