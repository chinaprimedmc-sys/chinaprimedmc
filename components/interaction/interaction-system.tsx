"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type PressableProps = {
  children: ReactNode;
  className?: string;
  subtle?: boolean;
} & HTMLMotionProps<"div">;

export function PressableSurface({
  children,
  className,
  subtle = false,
  ...props
}: PressableProps) {
  return (
    <motion.div
      whileHover={{ y: subtle ? -2 : -6 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.28, ease: [0.2, 0.8, 0.2, 1] }}
      className={cn("will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FocusRing({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "ring-brand-red/0 group-focus-visible:ring-brand-red/70 pointer-events-none absolute inset-0 rounded-[inherit] ring-0 transition duration-200 group-focus-visible:ring-2",
        className,
      )}
    />
  );
}

export const interactionRules = {
  button: "Scale to 0.985 on press, use visible focus ring, never rely on color only.",
  card: "Lift 4-6px on hover, zoom image under 1.05, keep copy visible without hover.",
  image: "Use overflow clipping, subtle zoom, and alt text for all meaningful media.",
  touch: "Avoid hover-only information on mobile; expose primary actions directly.",
  keyboard: "Every interactive element must be reachable by Tab and operable by Enter or Space.",
} as const;
