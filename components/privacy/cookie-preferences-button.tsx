"use client";

import { openCookiePreferences } from "@/lib/privacy/cookie-consent";

export function CookiePreferencesButton({ className }: { className?: string }) {
  return (
    <button type="button" className={className} onClick={openCookiePreferences}>
      Cookie Preferences
    </button>
  );
}
