"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { AttributionCapture } from "@/components/analytics/attribution-capture";
import { COOKIE_CONSENT_CHANGE_EVENT, hasAnalyticsConsent } from "@/lib/privacy/cookie-consent";

export function ConsentAwareServices() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const updateConsent = () => setAnalyticsEnabled(hasAnalyticsConsent());
    updateConsent();
    window.addEventListener(COOKIE_CONSENT_CHANGE_EVENT, updateConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_CHANGE_EVENT, updateConsent);
  }, []);

  if (!analyticsEnabled) return null;

  return (
    <>
      <AttributionCapture />
      <Analytics />
      <SpeedInsights />
    </>
  );
}
