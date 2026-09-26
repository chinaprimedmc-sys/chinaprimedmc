import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type PageContainerProps = {
  children: ReactNode;
  tone?: "warm" | "white" | "dark";
} & ComponentPropsWithoutRef<"main">;

const tones = {
  warm: "bg-white text-foreground",
  white: "bg-white text-foreground",
  dark: "bg-white text-foreground",
};

export function PageContainer({
  children,
  className,
  tone = "warm",
  ...props
}: PageContainerProps) {
  return (
    <main
      data-page-container="true"
      className={cn("page-container min-h-svh", tones[tone], className)}
      {...props}
    >
      {children}
    </main>
  );
}
