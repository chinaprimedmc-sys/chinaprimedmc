"use client";

import { trackEvent } from "@/lib/analytics/events";
import { useEffect } from "react";
import { hubspotForm } from "@/lib/hubspot";
import { isCurrentHubSpotEvent, readHubSpotMessage } from "@/lib/forms/hubspot-bridge";

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
    let lastSubmission = 0;
    const reportSubmission = () => {
      const now = Date.now();
      if (lastSubmission && now - lastSubmission < DEDUPE_WINDOW_MS) return;
      lastSubmission = now;
      trackEvent("generate_lead", {
        lead_source: "hubspot_form",
        form_id: hubspotForm.formId,
        page_path: window.location.pathname,
      });
    };
    const onMessage = (event: MessageEvent) => {
      const frames = Array.from(
        document.querySelectorAll<HTMLIFrameElement>(".hs-form-frame iframe"),
        (frame) => frame.contentWindow,
      );
      if (readHubSpotMessage(event, frames) === "submitted") reportSubmission();
    };
    const onSuccess = (event: Event) => {
      if (isCurrentHubSpotEvent(event)) reportSubmission();
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.("a[href]");
      const href = link?.getAttribute("href") ?? "";
      if (!href.includes("wa.me/")) return;
      // trackEvent("whatsapp_click") already ran for this click on the tracked buttons.
      const last = window.__avioraLastWhatsappEvent;
      if (last && Date.now() - last < DEDUPE_WINDOW_MS) return;
      trackEvent("whatsapp_click", {
        placement: "inline_link",
        page_path: window.location.pathname,
      });
    };

    window.addEventListener("message", onMessage);
    window.addEventListener("hs-form-event:on-submission:success", onSuccess);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("hs-form-event:on-submission:success", onSuccess);
      document.removeEventListener("click", onClick);
    };
  }, []);

  return null;
}
