"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, LockKeyhole, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { isTurnstileConfigured, TurnstileWidget } from "@/components/security/turnstile-widget";
import { trackEvent } from "@/lib/analytics/events";

import styles from "./home-expert-consultation.module.css";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  timing: string;
  planningStage: string;
  interests: string[];
};

const initialState: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  timing: "",
  planningStage: "",
  interests: [],
};

const planningStages = [
  { value: "flights-booked", label: "Flights are booked" },
  { value: "dates-confirmed", label: "Dates are confirmed" },
  { value: "rough-month", label: "A rough month in mind" },
  { value: "exploring", label: "Still exploring" },
] as const;

const journeyInterests = [
  "A beautifully paced first trip",
  "Culture and local life",
  "Food and regional flavors",
  "Landscapes and landmarks",
  "Time together as a family",
  "Something a little different",
] as const;

const formSteps = [
  {
    label: "Your details",
    title: "How may we reach you?",
    helper: "Share the best ways for our China team to reply.",
  },
  {
    label: "Trip timing",
    title: "Where are your plans today?",
    helper: "An approximate date is more than enough to begin.",
  },
  {
    label: "Your journey",
    title: "What would make it yours?",
    helper: "Choose everything you would be happy to experience.",
  },
] as const;

export function HomeExpertConsultation({ whatsappHref }: { whatsappHref: string }) {
  const reduceMotion = useReducedMotion();
  const [state, setState] = useState<FormState>(initialState);
  const [currentStep, setCurrentStep] = useState(0);
  const [stepDirection, setStepDirection] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetSignal, setTurnstileResetSignal] = useState(0);
  const handleTurnstileToken = useCallback((token: string) => setTurnstileToken(token), []);

  useEffect(() => {
    trackEvent("form_view", { placement: "home_glass_planning_form" });
  }, []);

  function update(key: Exclude<keyof FormState, "interests">, value: string) {
    setState((current) => ({ ...current, [key]: value }));
  }

  function toggleInterest(interest: string) {
    setState((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest],
    }));
  }

  function getStepError(step: number) {
    if (step === 0) {
      if (!state.name.trim()) return "Please tell us your name.";
      if (!state.email.trim()) return "Please enter your email address.";
      if (!state.whatsapp.trim()) return "Please enter your WhatsApp number.";
    }

    if (step === 1) {
      if (!state.timing.trim()) return "Please share your approximate travel dates.";
      if (!state.planningStage) return "Please tell us where your plans stand.";
    }

    if (step === 2 && !state.interests.length) {
      return "Please choose at least one travel interest.";
    }

    return "";
  }

  function goToNextStep() {
    const stepError = getStepError(currentStep);
    if (stepError) {
      setError(stepError);
      return;
    }

    setError("");
    trackEvent("form_step_complete", {
      placement: "home_glass_planning_form",
      step: currentStep + 1,
      label: formSteps[currentStep].label,
    });
    setStepDirection(1);
    setCurrentStep((step) => Math.min(step + 1, formSteps.length - 1));
  }

  function goToPreviousStep() {
    setError("");
    setStepDirection(-1);
    setCurrentStep((step) => Math.max(step - 1, 0));
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (currentStep < formSteps.length - 1) {
      goToNextStep();
      return;
    }

    const stepError = [0, 1, 2].map(getStepError).find(Boolean) ?? "";
    if (stepError) return setError(stepError);
    if (!isTurnstileConfigured || !turnstileToken) {
      return setError("Please complete the security verification before submitting.");
    }

    setSubmitting(true);
    const sourceContext = getSourceContext();
    const planningStageLabel =
      planningStages.find((option) => option.value === state.planningStage)?.label ??
      state.planningStage;

    try {
      trackEvent("form_submit", {
        placement: "home_glass_planning_form",
        planningStage: state.planningStage,
      });
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...sourceContext,
          travelerType: "couple",
          adults: 2,
          children: 0,
          travelingWithSeniors: false,
          timing: state.timing,
          duration: "",
          destinations: [],
          budgetTier: "comfortable",
          styles: state.interests,
          name: state.name,
          email: state.email,
          whatsapp: state.whatsapp,
          phone: "",
          contactMethods: ["email", "whatsapp"],
          notes: [
            "Homepage glass planning form",
            `Planning stage: ${planningStageLabel}`,
            "Traveler count: To be confirmed",
          ].join("\n"),
          website: "",
          turnstileToken,
        }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) throw new Error(result.error || "We could not save your inquiry.");

      setSubmitted(true);
      trackEvent("form_success", { placement: "home_glass_planning_form" });
    } catch (submissionError) {
      setTurnstileResetSignal((current) => current + 1);
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "We could not save your inquiry. Please try again.",
      );
      trackEvent("form_error", { placement: "home_glass_planning_form" });
    } finally {
      setSubmitting(false);
    }
  }

  const continueOnWhatsAppHref = addWhatsAppMessage(
    whatsappHref,
    "Hello AVIORA. I have just sent my trip planning details through your website.",
  );

  return (
    <section id="start-planning" className={styles.section} aria-labelledby="planning-title">
      <div className={styles.backgroundField} aria-hidden="true" />
      <div className={styles.inner}>
        <motion.div
          className={styles.editorial}
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: reduceMotion ? 0 : 0.86, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Plan with AVIORA</p>
            <h2 id="planning-title">We’d be delighted to hear your plans.</h2>
            <p className={styles.intro}>Share a few details and we’ll help with the rest.</p>
          </div>

          <figure className={styles.consultationPhoto}>
            <OptimizedImage
              src="/home/editorial/travel-trade-consultation-kuala-lumpur.webp"
              alt="An AVIORA travel specialist discussing a private China journey with a Muslim travel partner"
              width={1080}
              height={720}
              sizes="(min-width: 1024px) 43vw, 100vw"
              className={styles.photo}
            />
          </figure>
        </motion.div>

        <motion.div
          className={styles.formPanel}
          initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.992 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{
            duration: reduceMotion ? 0 : 0.9,
            delay: reduceMotion ? 0 : 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.div
                key="success"
                className={styles.success}
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <span className={styles.successIcon}>
                  <Check aria-hidden="true" />
                </span>
                <p className={styles.formEyebrow}>Inquiry received</p>
                <h3>Thank you. Your plans are with our China team.</h3>
                <p>We’ll review the details and reply personally within one business day.</p>
                <a
                  href={continueOnWhatsAppHref}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.whatsappLink}
                >
                  <MessageCircle aria-hidden="true" />
                  Continue on WhatsApp
                </a>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className={styles.form}
                method="post"
                onSubmit={submit}
                noValidate
              >
                <>
                  <div className={styles.formHeading}>
                    <p className={styles.formEyebrow}>Private trip planning</p>
                    <div
                      className={styles.stepStatus}
                      aria-label={`Step ${currentStep + 1} of ${formSteps.length}`}
                    >
                      <div className={styles.stepLabels}>
                        {formSteps.map((step, index) => (
                          <span
                            key={step.label}
                            className={index <= currentStep ? styles.stepLabelActive : undefined}
                            aria-current={index === currentStep ? "step" : undefined}
                          >
                            {step.label}
                          </span>
                        ))}
                      </div>
                      <div className={styles.progressTrack} aria-hidden="true">
                        <motion.span
                          animate={{ scaleX: (currentStep + 1) / formSteps.length }}
                          transition={{
                            duration: reduceMotion ? 0 : 0.48,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        />
                      </div>
                    </div>
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={formSteps[currentStep].title}
                        className={styles.stepHeading}
                        initial={reduceMotion ? false : { opacity: 0, x: stepDirection * 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, x: stepDirection * -12 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.38,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <h3>{formSteps[currentStep].title}</h3>
                        <p>{formSteps[currentStep].helper}</p>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className={styles.stepViewport}>
                    <AnimatePresence mode="wait" initial={false} custom={stepDirection}>
                      <motion.div
                        key={currentStep}
                        className={styles.stepPanel}
                        custom={stepDirection}
                        initial={reduceMotion ? false : { opacity: 0, x: stepDirection * 34 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={reduceMotion ? undefined : { opacity: 0, x: stepDirection * -26 }}
                        transition={{
                          duration: reduceMotion ? 0 : 0.46,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        {currentStep === 0 ? (
                          <div className={styles.fieldGrid}>
                            <label className={styles.field}>
                              <span>Your name</span>
                              <input
                                type="text"
                                name="name"
                                autoComplete="name"
                                value={state.name}
                                onChange={(event) => update("name", event.target.value)}
                                placeholder="Your name"
                                required
                              />
                            </label>
                            <label className={styles.field}>
                              <span>Email</span>
                              <input
                                type="email"
                                name="email"
                                autoComplete="email"
                                value={state.email}
                                onChange={(event) => update("email", event.target.value)}
                                placeholder="you@example.com"
                                required
                              />
                            </label>
                            <label className={`${styles.field} ${styles.fieldWide}`}>
                              <span>WhatsApp</span>
                              <input
                                type="tel"
                                name="whatsapp"
                                autoComplete="tel"
                                value={state.whatsapp}
                                onChange={(event) => update("whatsapp", event.target.value)}
                                placeholder="Include your country code"
                                required
                              />
                            </label>
                          </div>
                        ) : null}
                        {currentStep === 1 ? (
                          <div className={styles.stepFields}>
                            <label className={styles.field}>
                              <span>Approximate travel dates</span>
                              <input
                                type="text"
                                name="timing"
                                value={state.timing}
                                onChange={(event) => update("timing", event.target.value)}
                                placeholder="October 2026 or October 12–22"
                                required
                              />
                            </label>
                            <PlanningStageChoices state={state} update={update} styles={styles} />
                          </div>
                        ) : null}
                        {currentStep === 2 ? (
                          <div className={styles.stepFields}>
                            <JourneyInterestChoices
                              state={state}
                              toggleInterest={toggleInterest}
                              styles={styles}
                            />
                          </div>
                        ) : null}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </>

                {currentStep === formSteps.length - 1 ? (
                  <TurnstileWidget
                    onTokenChange={handleTurnstileToken}
                    resetSignal={turnstileResetSignal}
                  />
                ) : null}

                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className={styles.honeypot}
                />

                {error ? (
                  <p className={styles.error} role="alert">
                    {error}
                  </p>
                ) : null}

                <div className={styles.formNavigation}>
                  {currentStep > 0 ? (
                    <button className={styles.backButton} type="button" onClick={goToPreviousStep}>
                      <ArrowLeft aria-hidden="true" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <span />
                  )}
                  <button
                    className={styles.submitButton}
                    type="submit"
                    disabled={
                      submitting ||
                      (currentStep === formSteps.length - 1 &&
                        (!isTurnstileConfigured || !turnstileToken))
                    }
                  >
                    <span>
                      {currentStep === formSteps.length - 1
                        ? submitting
                          ? "Sending..."
                          : turnstileToken
                            ? "Start planning"
                            : "Preparing secure form..."
                        : "Next"}
                    </span>
                    <ArrowRight aria-hidden="true" />
                  </button>
                </div>

                {currentStep === formSteps.length - 1 ? (
                  <p className={styles.privacyNote}>
                    <LockKeyhole aria-hidden="true" />
                    <span>
                      Your details stay private and are used only to plan your journey and contact
                      you. <Link href="/privacy">Privacy policy</Link>
                    </span>
                  </p>
                ) : null}
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function PlanningStageChoices({
  state,
  update,
  styles: formStyles,
}: {
  state: FormState;
  update: (key: Exclude<keyof FormState, "interests">, value: string) => void;
  styles: typeof styles;
}) {
  return (
    <fieldset className={formStyles.choiceFieldset}>
      <legend>Where are you in your planning?</legend>
      <div className={formStyles.choiceGrid}>
        {planningStages.map((option) => (
          <label key={option.value} className={formStyles.choiceOption}>
            <input
              className={formStyles.choiceInput}
              type="radio"
              name="planning-stage"
              value={option.value}
              checked={state.planningStage === option.value}
              onChange={(event) => update("planningStage", event.target.value)}
            />
            <span className={formStyles.radioMark} aria-hidden="true" />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function JourneyInterestChoices({
  state,
  toggleInterest,
  styles: formStyles,
}: {
  state: FormState;
  toggleInterest: (interest: string) => void;
  styles: typeof styles;
}) {
  return (
    <fieldset className={formStyles.choiceFieldset}>
      <legend>What would you most enjoy?</legend>
      <div className={formStyles.choiceGrid}>
        {journeyInterests.map((interest) => (
          <label key={interest} className={formStyles.choiceOption}>
            <input
              className={formStyles.choiceInput}
              type="checkbox"
              name="interests"
              value={interest}
              checked={state.interests.includes(interest)}
              onChange={() => toggleInterest(interest)}
            />
            <span className={formStyles.checkboxMark} aria-hidden="true">
              <Check />
            </span>
            <span>{interest}</span>
          </label>
        ))}
      </div>
    </fieldset>
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
    sourcePage: "homepage-glass-planning-form",
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

function addWhatsAppMessage(href: string, message: string) {
  try {
    const url = new URL(href);
    url.searchParams.set("text", message);
    return url.toString();
  } catch {
    return href;
  }
}
