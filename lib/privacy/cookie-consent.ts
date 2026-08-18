export const COOKIE_CONSENT_VERSION = 1;
export const COOKIE_CONSENT_STORAGE_KEY = "aviora-cookie-consent-v1";
export const COOKIE_CONSENT_CHANGE_EVENT = "aviora-cookie-consent-change";
export const COOKIE_PREFERENCES_OPEN_EVENT = "aviora-cookie-preferences-open";

export type CookieConsentPreferences = {
  version: number;
  necessary: true;
  analytics: boolean;
  updatedAt: string;
};

export function readCookieConsent(): CookieConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!stored) return null;

    const parsed = JSON.parse(stored) as Partial<CookieConsentPreferences>;
    if (
      parsed.version !== COOKIE_CONSENT_VERSION ||
      parsed.necessary !== true ||
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.updatedAt !== "string"
    ) {
      return null;
    }

    return parsed as CookieConsentPreferences;
  } catch {
    return null;
  }
}

export function saveCookieConsent(analytics: boolean) {
  if (typeof window === "undefined") return;

  const preferences: CookieConsentPreferences = {
    version: COOKIE_CONSENT_VERSION,
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(preferences));
  } catch {
    // The current page still receives the choice even when storage is unavailable.
  }

  window.dispatchEvent(
    new CustomEvent<CookieConsentPreferences>(COOKIE_CONSENT_CHANGE_EVENT, {
      detail: preferences,
    }),
  );
}

export function hasAnalyticsConsent() {
  return readCookieConsent()?.analytics === true;
}

export function openCookiePreferences() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(COOKIE_PREFERENCES_OPEN_EVENT));
}
