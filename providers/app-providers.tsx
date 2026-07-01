"use client";

import type { ReactNode } from "react";

import { QueryProvider } from "@/providers/query-provider";
import { SmoothScrollProvider } from "@/providers/smooth-scroll-provider";
import { ThemeProvider } from "@/providers/theme-provider";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
