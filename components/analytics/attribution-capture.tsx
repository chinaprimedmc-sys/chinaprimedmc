"use client";

import { useEffect } from "react";

const landingStorageKey = "aviora-first-landing-page";

export function AttributionCapture() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!window.sessionStorage.getItem(landingStorageKey)) {
      window.sessionStorage.setItem(
        landingStorageKey,
        `${window.location.pathname}${window.location.search}`.slice(0, 500),
      );
    }

    const attribution = {
      referrer: document.referrer.slice(0, 500),
      utmSource: params.get("utm_source") || "",
      utmMedium: params.get("utm_medium") || "",
      utmCampaign: params.get("utm_campaign") || "",
      utmContent: params.get("utm_content") || "",
      utmTerm: params.get("utm_term") || "",
      gclid: params.get("gclid") || "",
    };

    if (
      Object.values(attribution).some(Boolean) &&
      !window.sessionStorage.getItem("aviora-attribution")
    ) {
      window.sessionStorage.setItem("aviora-attribution", JSON.stringify(attribution));
    }
  }, []);

  return null;
}
