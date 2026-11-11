"use client";

import { useEffect, useRef, useState } from "react";

import { useCspNonce } from "@/components/security/csp-nonce-provider";
import { hubspotForm } from "@/lib/hubspot";
import {
  attachPlanningContext,
  isCurrentHubSpotEvent,
  readHubSpotMessage,
  type HubSpotFormsV4,
} from "@/lib/forms/hubspot-bridge";

import { FormContactFallback } from "./form-contact-fallback";
import styles from "./hubspot-form.module.css";

type FormStatus = "loading" | "ready" | "slow" | "load-error" | "submission-error" | "submitted";

/** Keep HubSpot's hosted fields, validation, consent and submission flow intact. */
export function HubSpotForm({
  className = "",
  contextSummary = "",
  onContextAttached,
}: {
  className?: string;
  contextSummary?: string;
  onContextAttached?: (attached: boolean) => void;
}) {
  const nonce = useCspNonce();
  const container = useRef<HTMLDivElement>(null);
  const attachmentCallback = useRef(onContextAttached);
  useEffect(() => {
    attachmentCallback.current = onContextAttached;
  }, [onContextAttached]);
  const [status, setStatus] = useState<FormStatus>("loading");
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    const host = container.current;
    if (!host) return;
    let active = true;
    let contextAttempted = false;
    let submitted = false;
    let instanceId: string | undefined;
    const timer = window.setTimeout(() => {
      if (active) setStatus((current) => (current === "loading" ? "slow" : current));
    }, 12000);
    const ready = () => {
      window.clearTimeout(timer);
      if (active && !submitted) setStatus("ready");
    };
    const onReady = (event: Event) => {
      if (!isCurrentHubSpotEvent(event, instanceId)) return;
      const detail = (event as CustomEvent<{ instanceId?: string }>).detail;
      if (typeof detail.instanceId === "string") instanceId = detail.instanceId;
      ready();
      if (!contextSummary || contextAttempted) return;
      const api = (window as Window & { HubSpotFormsV4?: HubSpotFormsV4 }).HubSpotFormsV4;
      let form;
      try {
        form = api?.getFormFromEvent(event);
      } catch {
        return;
      }
      if (!form) return;
      contextAttempted = true;
      void attachPlanningContext(form, contextSummary).then((attached) => {
        if (active) attachmentCallback.current?.(attached);
      });
    };
    const success = () => {
      window.clearTimeout(timer);
      submitted = true;
      if (active) setStatus("submitted");
    };
    const onSuccess = (event: Event) => {
      if (instanceId && isCurrentHubSpotEvent(event, instanceId)) success();
    };
    const onFailure = (event: Event) => {
      if (instanceId && isCurrentHubSpotEvent(event, instanceId) && active && !submitted) {
        window.clearTimeout(timer);
        setStatus("submission-error");
      }
    };
    const onMessage = (event: MessageEvent) => {
      const result = readHubSpotMessage(
        event,
        Array.from(host.querySelectorAll("iframe"), (frame) => frame.contentWindow),
      );
      if (result === "ready") ready();
      if (result === "submitted") success();
    };
    // Register before loading the provider, so an early ready event is not missed.
    window.addEventListener("hs-form-event:on-ready", onReady);
    window.addEventListener("hs-form-event:on-submission:success", onSuccess);
    window.addEventListener("hs-form-event:on-submission:failed", onFailure);
    window.addEventListener("message", onMessage);
    // HubSpot's loader otherwise skips a new frame after client-side navigation.
    delete (window as unknown as Record<string, unknown>)["__HS__FORMS__EMBED__"];
    const script = document.createElement("script");
    script.src = hubspotForm.scriptSrc;
    script.defer = true;
    if (nonce) script.nonce = nonce;
    script.onerror = () => {
      window.clearTimeout(timer);
      if (active && !submitted) setStatus("load-error");
    };
    document.body.appendChild(script);
    return () => {
      active = false;
      window.clearTimeout(timer);
      window.removeEventListener("hs-form-event:on-ready", onReady);
      window.removeEventListener("hs-form-event:on-submission:success", onSuccess);
      window.removeEventListener("hs-form-event:on-submission:failed", onFailure);
      window.removeEventListener("message", onMessage);
      script.remove();
      host.innerHTML = "";
    };
  }, [nonce, attempt, contextSummary]);

  return (
    <div className={`${styles.wrap} ${className}`} data-hubspot-status={status}>
      <div role="status" aria-live="polite" className={styles.status}>
        {status === "loading" ? <p>Loading your enquiry form…</p> : null}
        {status === "slow" ? (
          <p>
            If the form has not appeared, try loading it again or contact our China team below.
            Reloading clears any details already entered, so copy your message first.
          </p>
        ) : null}
        {status === "load-error" ? (
          <p>The enquiry form could not load. Try again or contact our China team below.</p>
        ) : null}
        {status === "submission-error" ? (
          <p>
            We could not confirm receipt of your enquiry. Keep your message and use email or
            WhatsApp below if you need another way to reach us.
          </p>
        ) : null}
        {status === "submitted" ? (
          <p>
            <strong>Thank you. Your enquiry has been submitted.</strong> A China specialist normally
            replies within 24 hours. This begins the planning conversation; your trip is confirmed
            separately in writing.
          </p>
        ) : null}
      </div>
      <div
        ref={container}
        className="hs-form-frame"
        data-region={hubspotForm.region}
        data-form-id={hubspotForm.formId}
        data-portal-id={hubspotForm.portalId}
      />
      {status === "slow" || status === "load-error" ? (
        <button
          type="button"
          className={styles.retry}
          onClick={() => {
            setStatus("loading");
            setAttempt((current) => current + 1);
          }}
        >
          Reload enquiry form
        </button>
      ) : null}
      <FormContactFallback className={styles.fallback} />
    </div>
  );
}
