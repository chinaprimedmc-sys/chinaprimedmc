"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useCspNonce } from "@/components/security/csp-nonce-provider";

type PixelArgument = string | number | boolean | Record<string, unknown>;
type Fbq = ((...args: PixelArgument[]) => void) & {
  callMethod?: (...args: PixelArgument[]) => void;
  loaded: boolean;
  push: Fbq;
  queue: PixelArgument[][];
  version: string;
};

declare global {
  interface Window {
    fbq?: Fbq;
    _fbq?: Fbq;
    __avioraMetaPixelIds?: string[];
  }
}

function initializePixel(pixelId: string, nonce: string) {
  if (!window.fbq) {
    const fbq = ((...args: PixelArgument[]) => {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue.push(args);
    }) as Fbq;
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.push = fbq;
    window.fbq = fbq;
    window._fbq = fbq;

    if (!document.querySelector("script[data-aviora-meta-pixel]")) {
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      script.dataset.avioraMetaPixel = "true";
      if (nonce) script.nonce = nonce;
      document.head.appendChild(script);
    }
  }

  const initializedIds = (window.__avioraMetaPixelIds ??= []);
  if (!initializedIds.includes(pixelId)) {
    window.fbq("init", pixelId);
    initializedIds.push(pixelId);
  }
  window.fbq("consent", "grant");
}

export function MetaPixel({ pixelId }: { pixelId: string }) {
  const pathname = usePathname();
  const nonce = useCspNonce();

  useEffect(() => {
    initializePixel(pixelId, nonce);
    return () => window.fbq?.("consent", "revoke");
  }, [nonce, pixelId]);

  useEffect(() => {
    window.fbq?.("track", "PageView");
  }, [pathname]);

  return null;
}
