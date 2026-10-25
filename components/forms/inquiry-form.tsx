"use client";

import { useCallback, useId, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TurnstileWidget, isTurnstileConfigured } from "@/components/security/turnstile-widget";
import { navigationConfig } from "@/components/navigation/navigation-config";
import { getInquirySourceContext } from "@/lib/inquiries/client-context";
import {
  briefPayload,
  validateBrief,
  type BriefErrors,
  type InquiryBrief,
} from "@/lib/inquiries/brief";
import { trackEvent } from "@/lib/analytics/events";
import styles from "./inquiry-form.module.css";
import type { JourneyOfferClaim } from "@/lib/tours/journey-offer";

type InquirySuccess = { ok: true; offer?: JourneyOfferClaim };

export function InquiryForm({
  placement,
  journeySlug,
  summary = "",
  duration,
  guests,
  timing,
  submitLabel = "Start planning",
  showSummary = true,
  campaignId,
  introText = "Just your first name and WhatsApp number. No payment required.",
  onSuccess,
}: {
  placement: string;
  journeySlug?: string;
  summary?: string;
  duration?: string;
  guests?: string;
  timing?: string;
  submitLabel?: string;
  showSummary?: boolean;
  campaignId?: string;
  introText?: string;
  onSuccess?: (result: InquirySuccess) => void;
}) {
  const id = useId();
  const form = useRef<HTMLFormElement>(null);
  const [brief, setBrief] = useState<InquiryBrief>({
    name: "",
    whatsapp: "",
  });
  const [errors, setErrors] = useState<BriefErrors>({});
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState("");
  const [reset, setReset] = useState(0);
  const handleToken = useCallback((value: string) => setToken(value), []);
  const whatsapp = navigationConfig.action.whatsapp[0].href;
  function change(key: keyof InquiryBrief, value: string) {
    setBrief((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }
  function report(fields: BriefErrors) {
    setErrors(fields);
    const key = Object.keys(fields)[0];
    if (key)
      requestAnimationFrame(() =>
        form.current?.querySelector<HTMLElement>(`[name="${key}"]`)?.focus(),
      );
  }
  if (submitted)
    return (
      <div className={styles.success} role="status">
        <CheckCircle2 aria-hidden="true" />
        <h3>Thank you. We have your request.</h3>
        <p>
          A China specialist will review your plans and normally reply on WhatsApp within 24 hours.
          We will confirm the route, services and quote with you before any booking.
        </p>
        <a href={whatsapp} target="_blank" rel="noreferrer">
          Talk to a China specialist
        </a>
      </div>
    );
  return (
    <form
      ref={form}
      className={styles.form}
      noValidate
      onSubmit={async (event) => {
        event.preventDefault();
        if (submitting) return;
        const validation = validateBrief(brief);
        if (Object.keys(validation).length) {
          report(validation);
          return;
        }
        if (!isTurnstileConfigured || !token) {
          setError(
            "Security verification is not ready. Use Retry below, or contact us on WhatsApp.",
          );
          return;
        }
        setSubmitting(true);
        setError("");
        setErrors({});
        try {
          const source = getInquirySourceContext();
          const payload = briefPayload(brief, {
            journeySlug: journeySlug || source.journeySlug,
            summary,
            duration,
            guests,
            timing,
          });
          const response = await fetch("/api/inquiries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...source,
              ...payload,
              campaignId,
              website: new FormData(event.currentTarget).get("website") || "",
              turnstileToken: token,
            }),
            signal: AbortSignal.timeout(20000),
          });
          const data = (await response.json().catch(() => ({}))) as {
            error?: string;
            fields?: Record<string, string[]>;
            ok?: boolean;
            offer?: JourneyOfferClaim;
          };
          if (!response.ok) {
            const fields: BriefErrors = {};
            for (const key of ["name", "whatsapp"] as const)
              if (data.fields?.[key]?.[0]) fields[key] = data.fields[key][0];
            if (data.fields?.contact?.[0]) fields.whatsapp = data.fields.contact[0];
            report(fields);
            throw new Error(
              data.error ||
                "Your request could not be sent. Your answers are still here; please try again.",
            );
          }
          if (data.ok !== true || (campaignId && !data.offer)) {
            throw new Error(
              "We could not confirm your request. Please retry or contact us on WhatsApp.",
            );
          }
          setSubmitted(true);
          onSuccess?.({ ok: true, offer: data.offer });
          trackEvent("form_success", { placement });
        } catch (reason) {
          setError(
            reason instanceof Error && reason.name !== "TimeoutError"
              ? reason.message
              : "The request timed out. Your answers are saved here. Please retry or contact us on WhatsApp.",
          );
          setToken("");
          setReset((value) => value + 1);
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {introText && <p className={styles.intro}>{introText}</p>}
      {showSummary && summary && <p className={styles.summary}>{summary}</p>}
      <div className={styles.grid}>
        {(["name", "whatsapp"] as const).map((key) => (
          <label key={key} className={styles.field} htmlFor={`${id}-${key}`}>
            <span>{key === "name" ? "First name" : "WhatsApp number"}</span>
            <input
              id={`${id}-${key}`}
              name={key}
              autoComplete={key === "name" ? "given-name" : "tel"}
              type={key === "name" ? "text" : "tel"}
              maxLength={key === "name" ? 120 : 30}
              placeholder={key === "whatsapp" ? "Include country code" : "Your first name"}
              value={brief[key]}
              onChange={(event) => change(key, event.target.value)}
              aria-invalid={Boolean(errors[key])}
              aria-describedby={errors[key] ? `${id}-${key}-error` : undefined}
              required
            />
            {errors[key] && (
              <small id={`${id}-${key}-error`} className={styles.error}>
                {errors[key]}
              </small>
            )}
          </label>
        ))}
      </div>
      <input name="website" type="text" hidden tabIndex={-1} autoComplete="off" />
      <TurnstileWidget onTokenChange={handleToken} resetSignal={reset} />
      {error && (
        <p className={styles.error} role="alert">
          {error}
        </p>
      )}
      <button className={styles.submit} type="submit" disabled={submitting} aria-busy={submitting}>
        {submitting
          ? "Sending your request..."
          : token
            ? submitLabel
            : `${submitLabel} · verification pending`}
        <ArrowRight size={18} aria-hidden="true" />
      </button>
      <p className={styles.help}>
        Normally a personal reply within 24 hours.{" "}
        <a href={whatsapp} target="_blank" rel="noreferrer">
          Prefer WhatsApp?
        </a>
      </p>
    </form>
  );
}
