"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { AttributionCapture } from "@/components/analytics/attribution-capture";
import { MetaPixel } from "@/components/analytics/meta-pixel";
import {
  COOKIE_CONSENT_CHANGE_EVENT,
  COOKIE_CONSENT_STORAGE_KEY,
  hasAnalyticsConsent,
  hasMarketingConsent,
} from "@/lib/privacy/cookie-consent";

export function ConsentAwareServices() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    const updateConsent = () => {
      setAnalyticsEnabled(hasAnalyticsConsent());
      setMarketingEnabled(hasMarketingConsent());
    };
    const onStorage = (event: StorageEvent) => {
      if (event.key === COOKIE_CONSENT_STORAGE_KEY) updateConsent();
    };
    updateConsent();
    window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, updateConsent);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_CHANGE_EVENT, updateConsent);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  return (
    <>
      {analyticsEnabled ? (
        <>
          <AttributionCapture />
          <Analytics />
          <SpeedInsights />
        </>
      ) : null}
      {marketingEnabled ? <MetaPixel pixelId="1081254058048782" /> : null}
    </>
  );
}
