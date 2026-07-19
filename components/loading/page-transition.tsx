"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    window.scrollTo({ left: 0, top: 0 });

    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    contentRef.current?.animate([{ opacity: 0.35 }, { opacity: 1 }], {
      duration: 360,
      easing: "cubic-bezier(0.65, 0, 0.35, 1)",
    });
  }, [pathname]);

  return (
    <div className="relative min-h-svh overflow-x-clip">
      <div ref={contentRef} className="min-h-svh">
        {children}
      </div>
    </div>
  );
}
