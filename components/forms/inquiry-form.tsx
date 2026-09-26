"use client";

import { useCallback, useId, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { TurnstileWidget, isTurnstileConfigured } from "@/components/security/turnstile-widget";
import { navigationConfig } from "@/components/navigation/navigation-config";
import { getInquirySourceContext } from "@/lib/inquiries/client-context";
import {
  briefPayload,
  guestOptions,
  timingOptions,
  validateBrief,
  type BriefErrors,
  type InquiryBrief,
} from "@/lib/inquiries/brief";
import { trackEvent } from "@/lib/analytics/events";
import styles from "./inquiry-form.module.css";

export function InquiryForm({
  placement,
  journeySlug,
  summary = "",
  duration,
  guests,
  onGuestsChange,
  initialNotes = "",
}: {
  placement: string;
  journeySlug?: string;
  summary?: string;
  duration?: string;
  guests?: string;
  onGuestsChange?: (guests: string) => void;
  initialNotes?: string;
}) {
  const id = useId();
  const form = useRef<HTMLFormElement>(null);
  const [brief, setBrief] = useState<InquiryBrief>({
    name: "",
    whatsapp: "",
    timing: "",
    guests: "",
    notes: initialNotes,
  });
  const [errors, setErrors] = useState<BriefErrors>({});
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState("");
  const [reset, setReset] = useState(0);
  const handleToken = useCallback((value: string) => setToken(value), []);
  const whatsapp = navigationConfig.action.whatsapp[0].href;
  const selected = { ...brief, guests: guests ?? brief.guests };
  function change(key: keyof InquiryBrief, value: string) {
    setBrief((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    if (key === "guests") onGuestsChange?.(value);
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
        const validation = validateBrief(selected);
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
          const payload = briefPayload(selected, {
            journeySlug: journeySlug || source.journeySlug,
            summary,
            duration,
          });
          const response = await fetch("/api/inquiries", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              ...source,
              ...payload,
              website: new FormData(event.currentTarget).get("website") || "",
              turnstileToken: token,
            }),
            signal: AbortSignal.timeout(20000),
          });
          const data = (await response.json().catch(() => ({}))) as {
            error?: string;
            fields?: Record<string, string[]>;
          };
          if (!response.ok) {
            const fields: BriefErrors = {};
            for (const key of ["name", "whatsapp", "timing", "notes"] as const)
              if (data.fields?.[key]?.[0]) fields[key] = data.fields[key][0];
            if (data.fields?.contact?.[0]) fields.whatsapp = data.fields.contact[0];
            report(fields);
            throw new Error(
              data.error ||
                "Your request could not be sent. Your answers are still here; please try again.",
            );
          }
          setSubmitted(true);
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
      <p className={styles.intro}>One short step. Around 1 minute. No payment required.</p>
      {summary && <p className={styles.summary}>{summary}</p>}
      <div className={styles.grid}>
        {(["name", "whatsapp", "timing", "guests"] as const).map((key) => (
          <label key={key} className={styles.field} htmlFor={`${id}-${key}`}>
            <span>
              {
                {
                  name: "Name",
                  whatsapp: "WhatsApp",
                  timing: "When are you travelling?",
                  guests: "How many travellers?",
                }[key]
              }
            </span>
            {key === "name" || key === "whatsapp" ? (
              <input
                id={`${id}-${key}`}
                name={key}
                autoComplete={key === "name" ? "name" : "tel"}
                type={key === "name" ? "text" : "tel"}
                maxLength={key === "name" ? 120 : 30}
                placeholder={key === "whatsapp" ? "+44 7700 900000" : "Your name"}
                value={selected[key]}
                onChange={(event) => change(key, event.target.value)}
                aria-invalid={Boolean(errors[key])}
                aria-describedby={errors[key] ? `${id}-${key}-error` : undefined}
                required
              />
            ) : (
              <select
                id={`${id}-${key}`}
                name={key}
                value={selected[key]}
                onChange={(event) => change(key, event.target.value)}
                aria-invalid={Boolean(errors[key])}
                aria-describedby={errors[key] ? `${id}-${key}-error` : undefined}
                required
              >
                <option value="">Please select</option>
                {(key === "timing" ? timingOptions : guestOptions).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {errors[key] && (
              <small id={`${id}-${key}-error`} className={styles.error}>
                {errors[key]}
              </small>
            )}
          </label>
        ))}
      </div>
      <label className={styles.field} htmlFor={`${id}-notes`}>
        <span>
          What would make this trip special? <small>(optional)</small>
        </span>
        <textarea
          id={`${id}-notes`}
          name="notes"
          rows={4}
          maxLength={2000}
          placeholder="Places, interests, pace, dietary needs or questions for our team."
          value={brief.notes}
          onChange={(event) => change("notes", event.target.value)}
          aria-invalid={Boolean(errors.notes)}
        />
        {errors.notes && <small className={styles.error}>{errors.notes}</small>}
      </label>
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
            ? "Start planning"
            : "Start planning · verification pending"}
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
