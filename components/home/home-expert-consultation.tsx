"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { isTurnstileConfigured, TurnstileWidget } from "@/components/security/turnstile-widget";
import { trackEvent } from "@/lib/analytics/events";

import styles from "./home-expert-consultation.module.css";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  timing: string;
  adults: string;
  notes: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  timing: "",
  adults: "2",
  notes: "",
};

const expertGuidance = [
  "A route that fits your available time",
  "The right pace and hotel direction",
  "Clear next steps from a China-based team",
] as const;

export function HomeExpertConsultation() {
  const reduceMotion = useReducedMotion();
  const [state, setState] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetSignal, setTurnstileResetSignal] = useState(0);
  const handleTurnstileToken = useCallback((token: string) => setTurnstileToken(token), []);

  useEffect(() => {
    trackEvent("form_view", { placement: "home_expert_consultation" });
  }, []);

  function update(key: keyof FormState, value: string) {
    setState((current) => ({ ...current, [key]: value }));
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!state.name.trim()) {
      setError("Please tell us your name.");
      return;
    }
    if (!state.email.trim()) {
      setError("Please enter your email address so our specialist can reply.");
      return;
    }
    if (!isTurnstileConfigured || !turnstileToken) {
      setError("Please complete the security verification before submitting.");
      return;
    }

    setSubmitting(true);
    const sourceContext = getSourceContext();

    try {
      trackEvent("form_submit", { placement: "home_expert_consultation" });
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...sourceContext,
          travelerType: getTravelerType(Number(state.adults)),
          adults: Number(state.adults),
          children: 0,
          travelingWithSeniors: false,
          timing: state.timing,
          duration: "",
          destinations: [],
          budgetTier: "comfortable",
          styles: [],
          name: state.name,
          email: state.email,
          whatsapp: state.whatsapp,
          phone: "",
          contactMethods: ["email"],
          notes: `Homepage expert consultation${state.notes.trim() ? `\n\n${state.notes.trim()}` : ""}`,
          website: "",
          turnstileToken,
        }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) throw new Error(result.error || "We could not save your enquiry.");

      setSubmitted(true);
      trackEvent("form_success", { placement: "home_expert_consultation" });
    } catch (submissionError) {
      setTurnstileResetSignal((current) => current + 1);
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not save your enquiry. Please try again.",
      );
      trackEvent("form_error", { placement: "home_expert_consultation" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="find-your-china" className={styles.section} aria-labelledby="expert-title">
      <div className={styles.inner}>
        <motion.div
          className={styles.editorial}
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.copy}>
            <p className={styles.eyebrow}>A considered first direction</p>
            <h2 id="expert-title">Speak with a China specialist.</h2>
            <p className={styles.intro}>
              You do not need to know the perfect route. Tell us what matters, and a specialist in
              China will suggest a sensible way to begin.
            </p>
            <ul className={styles.guidanceList}>
              {expertGuidance.map((item) => (
                <li key={item}>
                  <Check size={15} strokeWidth={1.8} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className={styles.replyNote}>
              <span>Personal reply</span>
              <strong>Within 24 hours</strong>
            </div>
          </div>

          <figure className={styles.expertPhoto}>
            <Image
              src="/home/editorial/travel-trade-consultation-kuala-lumpur.webp"
              alt="An AVIORA China travel specialist discussing a private journey face to face"
              width={1080}
              height={720}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className={styles.photo}
              unoptimized
            />
            <figcaption>Real conversation · Considered local advice</figcaption>
          </figure>
        </motion.div>

        <motion.div
          className={styles.formPanel}
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.82,
            delay: reduceMotion ? 0 : 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.div
                key="success"
                className={styles.success}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <span className={styles.successIcon}>
                  <Check size={22} aria-hidden="true" />
                </span>
                <p className={styles.formEyebrow}>Enquiry received</p>
                <h3>Your conversation has started.</h3>
                <p>
                  A China specialist will review your note and reply personally within 24 hours with
                  a considered first direction.
                </p>
                <a
                  href="https://wa.me/447985052302"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.whatsappLink}
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  Continue on WhatsApp
                </a>
              </motion.div>
            ) : (
              <motion.form key="form" className={styles.form} onSubmit={submit} noValidate>
                <div className={styles.formHeading}>
                  <p className={styles.formEyebrow}>Tell us the essentials</p>
                  <h3>Start with a few details.</h3>
                  <p>No obligation. No generic package response.</p>
                </div>

                <div className={styles.fieldGrid}>
                  <label>
                    <span>Name</span>
                    <input
                      type="text"
                      autoComplete="name"
                      value={state.name}
                      onChange={(event) => update("name", event.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      type="email"
                      autoComplete="email"
                      value={state.email}
                      onChange={(event) => update("email", event.target.value)}
                      placeholder="you@example.com"
                      required
                    />
                  </label>
                  <label>
                    <span>When might you travel?</span>
                    <input
                      type="text"
                      value={state.timing}
                      onChange={(event) => update("timing", event.target.value)}
                      placeholder="e.g. October 2026"
                    />
                  </label>
                  <label>
                    <span>Travelers</span>
                    <select
                      value={state.adults}
                      onChange={(event) => update("adults", event.target.value)}
                    >
                      <option value="1">1 traveler</option>
                      <option value="2">2 travelers</option>
                      <option value="3">3 travelers</option>
                      <option value="4">4 travelers</option>
                      <option value="5">5 travelers</option>
                      <option value="6">6 travelers</option>
                      <option value="8">7-8 travelers</option>
                      <option value="10">9-10 travelers</option>
                    </select>
                  </label>
                  <label className={styles.fullField}>
                    <span>What would you like help with?</span>
                    <textarea
                      value={state.notes}
                      onChange={(event) => update("notes", event.target.value)}
                      placeholder="Destinations, interests, pace, hotel preferences or anything you are unsure about."
                      rows={4}
                    />
                  </label>
                  <label className={styles.fullField}>
                    <span>
                      WhatsApp <small>Optional</small>
                    </span>
                    <input
                      type="tel"
                      autoComplete="tel"
                      value={state.whatsapp}
                      onChange={(event) => update("whatsapp", event.target.value)}
                      placeholder="+44 ..."
                    />
                  </label>
                </div>

                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className={styles.honeypot}
                />
                <TurnstileWidget
                  onTokenChange={handleTurnstileToken}
                  resetSignal={turnstileResetSignal}
                />

                {error ? (
                  <p className={styles.error} role="alert">
                    {error}
                  </p>
                ) : null}

                <button
                  className={styles.submitButton}
                  type="submit"
                  disabled={submitting || !isTurnstileConfigured}
                >
                  {submitting ? "Sending..." : "Ask a China specialist"}
                  <ArrowRight size={17} aria-hidden="true" />
                </button>

                <div className={styles.formFooter}>
                  <span>Your details are used only to respond to your enquiry.</span>
                  <Link href="/start-planning?source=homepage-expert-form">
                    Share more details
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function getSourceContext() {
  const params = new URLSearchParams(window.location.search);
  const path = `${window.location.pathname}${window.location.search}`;
  const storedAttribution = readSessionObject("aviora-attribution");
  const storedLanding = window.sessionStorage.getItem("aviora-first-landing-page");
  if (!storedLanding) window.sessionStorage.setItem("aviora-first-landing-page", path);

  let referrer = "";
  if (document.referrer) {
    try {
      const parsed = new URL(document.referrer);
      referrer = parsed.origin === window.location.origin ? parsed.pathname : parsed.origin;
    } catch {
      referrer = "";
    }
  }

  return {
    sourcePage: "homepage-expert-consultation",
    landingPage: storedLanding || path,
    referrer: stringValue(storedAttribution.referrer) || referrer,
    utmSource: stringValue(storedAttribution.utmSource) || params.get("utm_source") || "",
    utmMedium: stringValue(storedAttribution.utmMedium) || params.get("utm_medium") || "",
    utmCampaign: stringValue(storedAttribution.utmCampaign) || params.get("utm_campaign") || "",
    utmContent: stringValue(storedAttribution.utmContent) || params.get("utm_content") || "",
    utmTerm: stringValue(storedAttribution.utmTerm) || params.get("utm_term") || "",
    gclid: stringValue(storedAttribution.gclid) || params.get("gclid") || "",
    journeySlug: "",
    viewedJourneys: readViewedJourneys(),
  };
}

function readSessionObject(key: string): Record<string, unknown> {
  try {
    const value = JSON.parse(window.sessionStorage.getItem(key) || "{}");
    return value && typeof value === "object" && !Array.isArray(value) ? value : {};
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

function stringValue(value: unknown) {
  return typeof value === "string" ? value : "";
}

function getTravelerType(travelers: number) {
  if (travelers === 1) return "solo";
  if (travelers === 2) return "couple";
  return "small-group";
}
