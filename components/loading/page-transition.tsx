"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

import { motionTokens } from "@/design-system/tokens/motion";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 });
  }, [pathname]);

  if (shouldReduceMotion) {
    return (
      <div key={pathname} className="min-h-svh">
        {children}
      </div>
    );
  }

  return (
    <div className="relative min-h-svh overflow-x-clip">
      <AnimatePresence initial={false} mode="sync" presenceAffectsLayout={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            width: "100%",
          }}
          transition={{
            duration: motionTokens.duration.transition,
            ease: motionTokens.easing.inOut,
          }}
          className="min-h-svh"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
