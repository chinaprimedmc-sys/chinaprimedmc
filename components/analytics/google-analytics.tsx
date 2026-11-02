"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { useCspNonce } from "@/components/security/csp-nonce-provider";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __avioraGaIds?: string[];
  }
}

function initializeGoogleAnalytics(measurementId: string, nonce: string) {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      // gtag.js reads the Arguments object, so a rest array would be ignored.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
  }

  if (!document.querySelector("script[data-aviora-ga4]")) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    script.dataset.avioraGa4 = "true";
    if (nonce) script.nonce = nonce;
    document.head.appendChild(script);
  }

  const initialized = (window.__avioraGaIds ??= []);
  if (!initialized.includes(measurementId)) {
    window.gtag("js", new Date());
    // Page views are sent manually on route changes below (App Router is a SPA).
    window.gtag("config", measurementId, { send_page_view: false });
    initialized.push(measurementId);
  }
}

/** Loads GA4 only after analytics consent: it is mounted inside ConsentAwareServices. */
export function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const nonce = useCspNonce();

  useEffect(() => {
    initializeGoogleAnalytics(measurementId, nonce);
  }, [measurementId, nonce]);

  useEffect(() => {
    window.gtag?.("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
