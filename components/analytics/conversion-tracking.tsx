"use client";

import { useEffect } from "react";

const HUBSPOT_ORIGIN = /^https:\/\/([a-z0-9-]+\.)*(hsforms\.(net|com)|hubspot\.com)$/;
const DEDUPE_WINDOW_MS = 600;

declare global {
  interface Window {
    __avioraLastWhatsappEvent?: number;
  }
}

/**
 * Reports the two lead actions that happen outside our own React handlers: a HubSpot form
 * submission (posted from the embed) and any click on a WhatsApp link. Mounted only after
 * analytics consent, together with GoogleAnalytics.
 */
export function ConversionTracking() {
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      const sameOrigin = event.origin === window.location.origin;
      if (!sameOrigin && !HUBSPOT_ORIGIN.test(event.origin)) return;
      const data = event.data as { type?: string; eventName?: string; id?: string } | null;
      if (data?.type !== "hsFormCallback" || data.eventName !== "onFormSubmitted") return;
      window.gtag?.("event", "generate_lead", {
        lead_source: "hubspot_form",
        form_id: typeof data.id === "string" ? data.id.slice(0, 60) : undefined,
        page_path: window.location.pathname,
      });
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      const href = link?.getAttribute("href") ?? "";
      if (!href.includes("wa.me/")) return;
      // trackEvent("whatsapp_click") already ran for this click on the tracked buttons.
      const last = window.__avioraLastWhatsappEvent;
      if (last && Date.now() - last < DEDUPE_WINDOW_MS) return;
      window.gtag?.("event", "whatsapp_click", {
        placement: "inline_link",
        page_path: window.location.pathname,
      });
    };

    window.addEventListener("message", onMessage);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("message", onMessage);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
