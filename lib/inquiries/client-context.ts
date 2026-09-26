"use client";

export type InquirySourceContext = {
  sourcePage: string;
  landingPage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  gclid: string;
  journeySlug: string;
  viewedJourneys: string[];
};

/** 统一收集询盘来源，确保首页与完整规划表单使用同一套归因口径。 */
export function getInquirySourceContext(): InquirySourceContext {
  const params = new URLSearchParams(window.location.search);
  const landingStorageKey = "aviora-first-landing-page";
  let storedLandingPage: string | null = null;
  try {
    storedLandingPage = window.sessionStorage.getItem(landingStorageKey);
  } catch {
    /* Storage can be disabled in private browsing. */
  }
  const landingPage = storedLandingPage || `${window.location.pathname}${window.location.search}`;
  try {
    if (!storedLandingPage) window.sessionStorage.setItem(landingStorageKey, landingPage);
  } catch {
    /* Attribution must not prevent enquiries. */
  }

  const storedAttribution = readStoredAttribution();
  const viewedJourneys = readViewedJourneys();
  let referrer = "";

  if (document.referrer) {
    try {
      const parsedReferrer = new URL(document.referrer);
      referrer =
        parsedReferrer.origin === window.location.origin
          ? parsedReferrer.pathname
          : parsedReferrer.origin;
    } catch {
      referrer = "";
    }
  }

  return {
    sourcePage:
      params.get("source") || referrer || `${window.location.pathname}${window.location.search}`,
    landingPage,
    referrer: storedAttribution.referrer || referrer,
    utmSource: storedAttribution.utmSource || params.get("utm_source") || "",
    utmMedium: storedAttribution.utmMedium || params.get("utm_medium") || "",
    utmCampaign: storedAttribution.utmCampaign || params.get("utm_campaign") || "",
    utmContent: storedAttribution.utmContent || params.get("utm_content") || "",
    utmTerm: storedAttribution.utmTerm || params.get("utm_term") || "",
    gclid: storedAttribution.gclid || params.get("gclid") || "",
    journeySlug: params.get("journey") || "",
    viewedJourneys,
  };
}

function readStoredAttribution() {
  try {
    return JSON.parse(
      window.sessionStorage.getItem("aviora-attribution") || "{}",
    ) as Partial<InquirySourceContext>;
  } catch {
    return {};
  }
}

function readViewedJourneys() {
  try {
    const value = JSON.parse(window.sessionStorage.getItem("aviora-viewed-journeys") || "[]");
    return Array.isArray(value)
      ? value.filter((item): item is string => typeof item === "string").slice(0, 20)
      : [];
  } catch {
    return [];
  }
}
