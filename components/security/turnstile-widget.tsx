"use client";

import { CheckCircle2, LoaderCircle, RefreshCw, ShieldCheck } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

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
      retry: "auto";
      "retry-interval": number;
      "refresh-expired": "auto";
      "refresh-timeout": "auto";
      callback: (token: string) => void;
      "error-callback": () => void;
      "expired-callback": () => void;
      "timeout-callback": () => void;
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
  showStatus = true,
}: {
  onTokenChange: (token: string) => void;
  resetSignal: number;
  showStatus?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const labelId = useId();
  const [scriptReady, setScriptReady] = useState(false);
  const [loadAttempt, setLoadAttempt] = useState(0);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const nonce = useCspNonce();

  useEffect(() => {
    if (!siteKey) return;
    queueMicrotask(() => setStatus("loading"));
    if (window.turnstile) {
      queueMicrotask(() => setScriptReady(true));
      return;
    }

    let cancelled = false;
    let script = document.getElementById(turnstileScriptId) as HTMLScriptElement | null;
    if (script?.dataset.loadState === "error") {
      script.remove();
      script = null;
    }

    const handleLoad = () => {
      if (cancelled) return;
      if (!window.turnstile) {
        if (script) script.dataset.loadState = "error";
        setStatus("error");
        return;
      }
      if (script) script.dataset.loadState = "ready";
      setScriptReady(true);
    };
    const handleError = () => {
      if (cancelled) return;
      if (script) script.dataset.loadState = "error";
      setScriptReady(false);
      setStatus("error");
    };

    if (!script) {
      script = document.createElement("script");
      script.id = turnstileScriptId;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.dataset.loadState = "loading";
      if (nonce) script.nonce = nonce;
    } else if (script.dataset.loadState === "ready" && window.turnstile) {
      queueMicrotask(handleLoad);
    }

    script.addEventListener("load", handleLoad);
    script.addEventListener("error", handleError);
    if (!script.isConnected) document.head.appendChild(script);
    const loadTimeout = window.setTimeout(() => {
      if (!cancelled && !window.turnstile) handleError();
    }, 12_000);

    return () => {
      cancelled = true;
      window.clearTimeout(loadTimeout);
      script?.removeEventListener("load", handleLoad);
      script?.removeEventListener("error", handleError);
    };
  }, [loadAttempt, nonce]);

  const renderWidget = useCallback(() => {
    if (!siteKey || !scriptReady || !containerRef.current || !window.turnstile) return;
    if (widgetIdRef.current) window.turnstile.remove(widgetIdRef.current);

    setStatus("loading");
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      action: "submit-inquiry",
      appearance: "interaction-only",
      retry: "auto",
      "retry-interval": 3000,
      "refresh-expired": "auto",
      "refresh-timeout": "auto",
      callback: (token) => {
        onTokenChange(token);
        setStatus("ready");
      },
      "expired-callback": () => {
        onTokenChange("");
        setStatus("loading");
      },
      "timeout-callback": () => {
        onTokenChange("");
        setStatus("loading");
      },
      "error-callback": () => {
        onTokenChange("");
        setStatus("error");
      },
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
      setStatus("loading");
      window.turnstile.reset(widgetIdRef.current);
      onTokenChange("");
    }
  }, [onTokenChange, resetSignal]);

  function retryVerification() {
    setStatus("loading");
    onTokenChange("");
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
      return;
    }
    document.getElementById(turnstileScriptId)?.remove();
    setScriptReady(false);
    setLoadAttempt((attempt) => attempt + 1);
  }

  if (!siteKey) {
    return (
      <p role="alert" className="text-brand-red text-sm font-medium">
        Security verification is temporarily unavailable. Please contact us on WhatsApp.
      </p>
    );
  }

  const statusMessage = {
    idle: "Security verification will be prepared before submission.",
    loading: "Preparing secure submission...",
    ready: "Secure submission ready.",
    error: "Security verification needs another try.",
  }[status];
  const StatusIcon =
    status === "ready" ? CheckCircle2 : status === "loading" ? LoaderCircle : ShieldCheck;

  return (
    <div
      ref={wrapperRef}
      className="grid min-h-0 gap-2"
      role="group"
      aria-labelledby={labelId}
      data-status={status}
    >
      <span id={labelId} className="sr-only">
        Security verification
      </span>
      <div ref={containerRef} />
      {showStatus ? (
        <div
          className="text-foreground/65 flex min-h-6 items-center gap-2 text-xs"
          role="status"
          aria-live="polite"
        >
          <StatusIcon
            className={status === "loading" ? "animate-spin" : undefined}
            size={14}
            aria-hidden="true"
          />
          <span>{statusMessage}</span>
          {status === "error" ? (
            <button
              type="button"
              onClick={retryVerification}
              className="text-foreground inline-flex items-center gap-1 font-semibold underline underline-offset-4"
            >
              <RefreshCw size={12} aria-hidden="true" />
              Retry
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export const isTurnstileConfigured = Boolean(siteKey);
