"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Check, Cookie, Settings2, ShieldCheck, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import {
  COOKIE_PREFERENCES_OPEN_EVENT,
  readCookieConsent,
  saveCookieConsent,
} from "@/lib/privacy/cookie-consent";
import styles from "./cookie-consent.module.css";

type BannerState = "loading" | "visible" | "saved";

export function CookieConsent() {
  const [bannerState, setBannerState] = useState<BannerState>("loading");
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const initializeTimer = window.setTimeout(() => {
      const stored = readCookieConsent();
      if (stored) {
        setAnalyticsEnabled(stored.analytics);
        setBannerState("saved");
        return;
      }

      setBannerState("visible");
    }, 650);

    return () => window.clearTimeout(initializeTimer);
  }, []);

  useEffect(() => {
    const openPreferences = () => {
      setAnalyticsEnabled(readCookieConsent()?.analytics ?? false);
      setPreferencesOpen(true);
    };
    window.addEventListener(COOKIE_PREFERENCES_OPEN_EVENT, openPreferences);
    return () => window.removeEventListener(COOKIE_PREFERENCES_OPEN_EVENT, openPreferences);
  }, []);

  const storeChoice = (analytics: boolean) => {
    setAnalyticsEnabled(analytics);
    saveCookieConsent(analytics);
    setBannerState("saved");
    setPreferencesOpen(false);
  };

  return (
    <>
      {bannerState === "visible" ? (
        <section className={styles.banner} aria-label="Cookie consent" aria-live="polite">
          <div className={styles.bannerIcon} aria-hidden="true">
            <Cookie />
          </div>
          <div className={styles.bannerCopy}>
            <p className={styles.eyebrow}>Your Privacy</p>
            <h2>Choose How This Site Uses Data</h2>
            <p>
              Necessary storage keeps forms and security working. With your permission, anonymous
              analytics helps us improve the website. Read our{" "}
              <Link href="/cookies">Cookie Policy</Link>.
            </p>
          </div>
          <div className={styles.bannerActions}>
            <button
              type="button"
              className={styles.secondaryButton}
              onClick={() => storeChoice(false)}
            >
              Reject All
            </button>
            <button
              type="button"
              className={styles.preferencesButton}
              onClick={() => setPreferencesOpen(true)}
            >
              <Settings2 aria-hidden="true" />
              Manage Preferences
            </button>
            <button
              type="button"
              className={styles.primaryButton}
              onClick={() => storeChoice(true)}
            >
              Accept All
            </button>
          </div>
        </section>
      ) : null}

      <Dialog.Root open={preferencesOpen} onOpenChange={setPreferencesOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content
            className={styles.dialog}
            aria-describedby="cookie-preferences-description"
          >
            <div className={styles.dialogHeader}>
              <div className={styles.dialogTitleGroup}>
                <span className={styles.dialogIcon} aria-hidden="true">
                  <ShieldCheck />
                </span>
                <div>
                  <p className={styles.eyebrow}>Privacy Controls</p>
                  <Dialog.Title>Cookie Preferences</Dialog.Title>
                </div>
              </div>
              <Dialog.Close className={styles.closeButton} aria-label="Close cookie preferences">
                <X aria-hidden="true" />
              </Dialog.Close>
            </div>

            <Dialog.Description id="cookie-preferences-description" className={styles.description}>
              Choose whether optional analytics may run. Necessary storage cannot be disabled
              because it supports security, forms and your saved privacy choice.
            </Dialog.Description>

            <div className={styles.categories}>
              <div className={styles.categoryRow}>
                <div>
                  <div className={styles.categoryTitle}>
                    <ShieldCheck aria-hidden="true" />
                    <strong>Necessary</strong>
                  </div>
                  <p>Security, form operation and storage of your consent choice.</p>
                </div>
                <span className={styles.alwaysOn}>
                  <Check aria-hidden="true" /> Always On
                </span>
              </div>

              <div className={styles.categoryRow}>
                <div>
                  <div className={styles.categoryTitle}>
                    <Settings2 aria-hidden="true" />
                    <strong>Analytics</strong>
                  </div>
                  <p>Anonymous usage and performance information that helps improve the site.</p>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked={analyticsEnabled}
                  aria-label="Allow analytics"
                  className={styles.switch}
                  data-checked={analyticsEnabled || undefined}
                  onClick={() => setAnalyticsEnabled((enabled) => !enabled)}
                >
                  <span />
                </button>
              </div>
            </div>

            <div className={styles.dialogFooter}>
              <Link href="/cookies">View Cookie Policy</Link>
              <div className={styles.dialogActions}>
                <button
                  type="button"
                  className={styles.secondaryButton}
                  onClick={() => storeChoice(false)}
                >
                  Reject All
                </button>
                <button
                  type="button"
                  className={styles.primaryButton}
                  onClick={() => storeChoice(analyticsEnabled)}
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
