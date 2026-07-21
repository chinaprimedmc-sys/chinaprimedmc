"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { useCspNonce } from "@/components/security/csp-nonce-provider";

const developmentSiteKey = "1x00000000000000000000AA";
const configuredSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const siteKey =
  configuredSiteKey || (process.env.NODE_ENV !== "production" ? developmentSiteKey : "");
const turnstileScriptId = "cloudflare-turnstile-script";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      appearance: "interaction-only";
      callback: (token: string) => void;
      "error-callback": () => void;
      "expired-callback": () => void;
      theme: "light";
    },
  ) => string;
  remove: (widgetId: string) => void;
  reset: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

export function TurnstileWidget({
  onTokenChange,
  resetSignal,
}: {
  onTokenChange: (token: string) => void;
  resetSignal: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const nonce = useCspNonce();

  useEffect(() => {
    if (!siteKey) return;
    if (window.turnstile) {
      queueMicrotask(() => setScriptReady(true));
      return;
    }

    let cancelled = false;
    let script = document.getElementById(turnstileScriptId) as HTMLScriptElement | null;
    const handleLoad = () => {
      if (!cancelled) setScriptReady(true);
    };
    const handleError = () => {
      if (!cancelled) setScriptReady(false);
    };

    if (!script) {
      script = document.createElement("script");
      script.id = turnstileScriptId;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      if (nonce) script.nonce = nonce;
      document.head.appendChild(script);
    }

    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);

    return () => {
      cancelled = true;
      script?.removeEventListener("load", handleLoad);
      script?.removeEventListener("error", handleError);
    };
  }, [nonce]);

  const renderWidget = useCallback(() => {
    if (!siteKey || !scriptReady || !containerRef.current || !window.turnstile) return;
    if (widgetIdRef.current) window.turnstile.remove(widgetIdRef.current);

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action: "submit-inquiry",
      appearance: "interaction-only",
      callback: onTokenChange,
      "expired-callback": () => onTokenChange(""),
      "error-callback": () => onTokenChange(""),
      theme: "light",
    });
  }, [onTokenChange, scriptReady]);

  useEffect(() => {
    renderWidget();
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  useEffect(() => {
    if (resetSignal > 0 && widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
      onTokenChange("");
    }
  }, [onTokenChange, resetSignal]);

  if (!siteKey) {
    return (
      <p role="alert" className="text-brand-red text-sm font-medium">
        Security verification is temporarily unavailable. Please contact us on WhatsApp.
      </p>
    );
  }

  return (
    <div className="min-h-0" aria-label="Security verification">
      <div ref={containerRef} />
    </div>
  );
}

export const isTurnstileConfigured = Boolean(siteKey);
