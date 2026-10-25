import assert from "node:assert/strict";
import test from "node:test";
import {
  COOKIE_CONSENT_STORAGE_KEY,
  hasAnalyticsConsent,
  hasMarketingConsent,
  readCookieConsent,
} from "../lib/privacy/cookie-consent.ts";

test("legacy analytics consent migrates without opting into Meta marketing", () => {
  const values = new Map([
    [
      "aviora-cookie-consent-v1",
      JSON.stringify({
        version: 1,
        necessary: true,
        analytics: true,
        updatedAt: "2026-09-01T00:00:00.000Z",
      }),
    ],
  ]);
  const originalWindow = globalThis.window;
  Object.defineProperty(globalThis, "window", {
    configurable: true,
    value: {
      localStorage: {
        getItem: (key) => values.get(key) ?? null,
        setItem: (key, value) => values.set(key, value),
        removeItem: (key) => values.delete(key),
      },
    },
  });

  try {
    const consent = readCookieConsent();
    assert.equal(consent?.analytics, true);
    assert.equal(consent?.marketing, false);
    assert.equal(hasAnalyticsConsent(), true);
    assert.equal(hasMarketingConsent(), false);
    assert.equal(JSON.parse(values.get(COOKIE_CONSENT_STORAGE_KEY)).marketing, false);
    assert.equal(values.has("aviora-cookie-consent-v1"), false);
  } finally {
    if (originalWindow === undefined) delete globalThis.window;
    else Object.defineProperty(globalThis, "window", { configurable: true, value: originalWindow });
  }
});
