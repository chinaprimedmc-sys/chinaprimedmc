"use client";

import { track } from "@vercel/analytics";

type AnalyticsValue = string | number | boolean | null;

export function trackEvent(name: string, properties?: Record<string, AnalyticsValue>) {
  track(name, properties);
}

export function trackCtaClick(
  label: string,
  href: string,
  placement?: string,
  journeySlug?: string,
) {
  trackEvent("cta_click", {
    label: label.slice(0, 80),
    destination: getSafeDestination(href),
    ...(placement ? { placement: placement.slice(0, 40) } : {}),
    ...(journeySlug ? { journey: journeySlug.slice(0, 160) } : {}),
  });
}

function getSafeDestination(href: string) {
  if (href.startsWith("/")) return href.split("?")[0].slice(0, 160);
  if (href.startsWith("mailto:")) return "email";
  if (href.includes("wa.me")) return "whatsapp";
  return "external";
}
