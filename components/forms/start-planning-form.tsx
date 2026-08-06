"use client";

import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { CtaButton } from "@/components/cta";
import {
  CheckboxField,
  RadioField,
  TextAreaField,
  TextField,
  TravelerSelector,
} from "@/components/forms";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { startPlanningOptions } from "@/content/planning";
import { cn } from "@/lib/utils/cn";
import { isTurnstileConfigured, TurnstileWidget } from "@/components/security/turnstile-widget";
import { trackEvent } from "@/lib/analytics/events";

type PlanningFormState = {
  travelerType: string;
  adults: number;
  children: number;
  travelingWithSeniors: boolean;
  timing: string;
  duration: string;
  destinations: string[];
  budgetTier: "comfortable" | "luxury" | "ultra-bespoke";
  styles: string[];
  name: string;
  email: string;
  whatsapp: string;
  phone: string;
  contactMethods: string[];
  notes: string;
};

type SourceContext = {
  sourcePage: string;
  landingPage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  gclid: string;
  journeySlug: string;
  viewedJourneys: string[];
};

const initialState: PlanningFormState = {
  travelerType: "family",
  adults: 2,
  children: 0,
  travelingWithSeniors: false,
  timing: "",
  duration: "",
  destinations: [],
  budgetTier: "comfortable",
  styles: ["family"],
  name: "",
  email: "",
  whatsapp: "",
  phone: "",
  contactMethods: ["email"],
  notes: "",
};

const steps = [
  { label: "Travelers", helper: "Who is traveling" },
  { label: "Timing", helper: "When and how long" },
  { label: "Style", helper: "What should it feel like" },
  { label: "Contact", helper: "How we reply" },
];

export function StartPlanningForm({ savedJourneys = [] }: { savedJourneys?: string[] }) {
  const savedJourneyNotes = savedJourneys.length
    ? `I'd like to learn more about these saved journeys:\n${savedJourneys
        .map((journey, index) => `${index + 1}. ${journey}`)
        .join("\n")}`
    : "";
  const [step, setStep] = useState(0);
  const [state, setState] = useState<PlanningFormState>({
    ...initialState,
    notes: savedJourneyNotes,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetSignal, setTurnstileResetSignal] = useState(0);
  const handleTurnstileToken = useCallback((token: string) => setTurnstileToken(token), []);

  useEffect(() => {
    trackEvent("form_start", { saved_journeys: savedJourneys.length });
  }, [savedJourneys.length]);

  const progress = ((step + 1) / steps.length) * 100;

  function advanceStep() {
    trackEvent("form_step_complete", { step: step + 1, label: steps[step].label });
    setStep((current) => current + 1);
  }

  function update<K extends keyof PlanningFormState>(key: K, value: PlanningFormState[K]) {
    setState((current) => ({ ...current, [key]: value }));
  }

  function toggleList(key: "destinations" | "styles" | "contactMethods", value: string) {
    setState((current) => {
      const set = new Set(current[key]);
      if (set.has(value)) {
        set.delete(value);
      } else {
        set.add(value);
      }
      return { ...current, [key]: Array.from(set) };
    });
  }

  if (submitted) {
    return (
      <Card className="p-6 md:p-8">
        <div className="grid gap-6">
          <div className="bg-foreground text-background grid size-14 place-items-center rounded-full">
            <CheckCircle2 size={24} aria-hidden="true" />
          </div>
          <div>
            <p className="text-muted text-xs font-semibold tracking-[0.18em] uppercase">
              Inquiry received
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.03em] md:text-5xl">
              Thank you. We will contact you within 24 hours.
            </h2>
            <p className="text-muted mt-4 max-w-2xl text-sm leading-7 md:text-base">
              Your trip details have been received securely. A China specialist will review the
              route, timing, and traveler needs before replying.
            </p>
          </div>
          <CtaButton
            href="https://wa.me/447985052302"
            variant="glass"
            icon={<MessageCircle size={16} aria-hidden="true" />}
          >
            Add a note on WhatsApp
          </CtaButton>
          <button
            type="button"
            className="rounded-full border border-white/75 bg-white/52 px-4 py-2.5 text-sm font-semibold text-[var(--text-primary)] shadow-[var(--button-glass-shadow-subtle)] backdrop-blur-xl transition hover:border-white hover:bg-white/82 hover:shadow-[var(--button-glass-shadow)]"
            onClick={() => {
              setSubmitted(false);
              setStep(0);
              setSubmitError("");
            }}
          >
            Review answers
          </button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden p-0">
      <div className="border-border border-b p-5 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-muted text-xs font-semibold tracking-[0.18em] uppercase">
              Step {step + 1} of {steps.length}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.025em]">{steps[step].label}</h2>
            <p className="text-muted mt-1 text-sm leading-6">{steps[step].helper}</p>
          </div>
          <div className="grid gap-2 md:min-w-64">
            <div className="bg-foreground/8 h-1.5 overflow-hidden rounded-full">
              <div
                className="bg-foreground h-full rounded-full transition-all duration-300 ease-[var(--ease-apple)]"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-muted flex justify-between text-[0.68rem] font-semibold tracking-[0.12em] uppercase">
              {steps.map((item, index) => (
                <span key={item.label} className={cn(index === step && "text-foreground")}>
                  {index + 1}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <form
        className="grid gap-6 p-5 md:p-6"
        onSubmit={async (event) => {
          event.preventDefault();
          if (step < steps.length - 1) {
            advanceStep();
            return;
          }

          const validationError = validateContactStep(state);
          if (validationError) {
            setSubmitError(validationError);
            return;
          }
          if (!isTurnstileConfigured || !turnstileToken) {
            setSubmitError("Please complete the security verification before submitting.");
            return;
          }

          setSubmitting(true);
          setSubmitError("");

          try {
            const sourceContext = getSourceContext();
            trackEvent("form_submit", { source: sourceContext.utmSource || "direct" });
            const response = await fetch("/api/inquiries", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                ...state,
                ...sourceContext,
                website: "",
                turnstileToken,
              }),
            });
            const result = (await response.json()) as { error?: string };

            if (!response.ok) {
              throw new Error(result.error || "We could not save your inquiry.");
            }

            setSubmitted(true);
            trackEvent("form_success", { source: sourceContext.utmSource || "direct" });
          } catch (error) {
            setTurnstileResetSignal((current) => current + 1);
            setSubmitError(
              error instanceof Error
                ? error.message
                : "We could not save your inquiry. Please try again.",
            );
            trackEvent("form_error", {
              message: error instanceof Error ? error.message.slice(0, 100) : "unknown",
            });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {step === 0 ? (
          <div className="grid gap-5">
            <div className="grid gap-3 sm:grid-cols-2">
              {startPlanningOptions.travelerTypes.map((option) => (
                <RadioField
                  key={option.value}
                  name="travelerType"
                  label={option.label}
                  helper={option.helper}
                  value={option.value}
                  checked={state.travelerType === option.value}
                  onChange={() => update("travelerType", option.value)}
                />
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <TravelerSelector
                label="Adults"
                value={state.adults}
                min={1}
                onChange={(value) => update("adults", value)}
              />
              <TravelerSelector
                label="Children"
                value={state.children}
                onChange={(value) => update("children", value)}
              />
            </div>
            <CheckboxField
              label="Traveling with older parents or seniors"
              helper="We will account for walking load, rest windows, room access, and smoother transfers."
              checked={state.travelingWithSeniors}
              onChange={(event) => update("travelingWithSeniors", event.target.checked)}
            />
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-5 md:grid-cols-2">
            <TextField
              label="Approximate travel dates"
              helper="Month, season, exact dates, or school-holiday window."
              placeholder="e.g. October 2026 or Easter break"
              value={state.timing}
              onChange={(event) => update("timing", event.target.value)}
            />
            <TextField
              label="Approximate trip length"
              helper="A rough number is enough."
              placeholder="e.g. 10-12 days"
              value={state.duration}
              onChange={(event) => update("duration", event.target.value)}
            />
            <TextAreaField
              label="Places and priorities"
              helper="Share any cities, walking concerns, hotel expectations or fixed dates we should know about."
              placeholder="What would make this trip work well for you?"
              value={state.notes}
              onChange={(event) => update("notes", event.target.value)}
              className="md:col-span-2"
            />
            <div className="grid gap-3 sm:grid-cols-2 md:col-span-2">
              {startPlanningOptions.destinations.map((option) => (
                <CheckboxField
                  key={option.value}
                  label={option.label}
                  checked={state.destinations.includes(option.value)}
                  onChange={() => toggleList("destinations", option.value)}
                />
              ))}
            </div>
          </div>
        ) : null}

        {step === 2 ? (
          <div className="grid gap-7">
            <fieldset className="grid gap-3 sm:grid-cols-2">
              <legend className="mb-3 text-sm font-semibold">Travel style</legend>
              {startPlanningOptions.travelStyles.map((option) => (
                <CheckboxField
                  key={option.value}
                  label={option.label}
                  helper={option.helper}
                  checked={state.styles.includes(option.value)}
                  onChange={() => toggleList("styles", option.value)}
                />
              ))}
            </fieldset>
            <fieldset className="grid gap-3">
              <legend className="mb-3 text-sm font-semibold">Comfort level</legend>
              {startPlanningOptions.budgetTiers.map((option) => (
                <RadioField
                  key={option.value}
                  name="budgetTier"
                  label={option.label}
                  helper={option.helper}
                  value={option.value}
                  checked={state.budgetTier === option.value}
                  onChange={() =>
                    update("budgetTier", option.value as PlanningFormState["budgetTier"])
                  }
                />
              ))}
            </fieldset>
          </div>
        ) : null}

        {step === 3 ? (
          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <TextField
                label="Name"
                placeholder="Your name"
                required
                value={state.name}
                onChange={(event) => update("name", event.target.value)}
              />
              <TextField
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={state.email}
                onChange={(event) => update("email", event.target.value)}
              />
              <TextField
                label="WhatsApp"
                placeholder="+44 ..."
                value={state.whatsapp}
                onChange={(event) => update("whatsapp", event.target.value)}
              />
              <TextField
                label="Phone"
                placeholder="+44 ..."
                value={state.phone}
                onChange={(event) => update("phone", event.target.value)}
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {startPlanningOptions.contactMethods.map((option) => (
                <CheckboxField
                  key={option.value}
                  label={option.label}
                  helper={option.helper}
                  checked={state.contactMethods.includes(option.value)}
                  onChange={() => toggleList("contactMethods", option.value)}
                />
              ))}
            </div>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
            <TurnstileWidget
              onTokenChange={handleTurnstileToken}
              resetSignal={turnstileResetSignal}
            />
          </div>
        ) : null}

        <div className="border-border flex flex-col gap-3 border-t pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="button"
            variant="secondary"
            disabled={step === 0}
            onClick={() => setStep((current) => Math.max(0, current - 1))}
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back
          </Button>
          <Button
            type="submit"
            disabled={submitting || (step === steps.length - 1 && !isTurnstileConfigured)}
          >
            {step === steps.length - 1
              ? submitting
                ? "Submitting..."
                : "Send My Trip Details"
              : "Continue"}
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
        {submitError ? (
          <p role="alert" className="text-brand-red text-sm font-medium">
            {submitError}
          </p>
        ) : null}
      </form>
    </Card>
  );
}

function validateContactStep(state: PlanningFormState) {
  if (!state.name.trim()) return "Please enter your name.";
  if (!state.email.trim() && !state.whatsapp.trim() && !state.phone.trim()) {
    return "Please provide an email address, WhatsApp number, or phone number.";
  }
  if (state.contactMethods.includes("email") && !state.email.trim()) {
    return "Please enter your email address or choose another contact method.";
  }
  if (state.contactMethods.includes("whatsapp") && !state.whatsapp.trim()) {
    return "Please enter your WhatsApp number or choose another contact method.";
  }
  if (state.contactMethods.includes("phone") && !state.phone.trim()) {
    return "Please enter your phone number or choose another contact method.";
  }
  return "";
}

function getSourceContext(): SourceContext {
  const params = new URLSearchParams(window.location.search);
  const landingStorageKey = "aviora-first-landing-page";
  const storedLandingPage = window.sessionStorage.getItem(landingStorageKey);
  const landingPage = storedLandingPage || `${window.location.pathname}${window.location.search}`;
  if (!storedLandingPage) window.sessionStorage.setItem(landingStorageKey, landingPage);
  const storedAttribution = readStoredAttribution();
  const viewedJourneys = readViewedJourneys();
  let referrer = "";

  if (document.referrer) {
    try {
      const parsedReferrer = new URL(document.referrer);
      referrer =
        parsedReferrer.origin === window.location.origin
          ? parsedReferrer.pathname
          : parsedReferrer.origin;
    } catch {
      referrer = "";
    }
  }

  return {
    sourcePage:
      params.get("source") || referrer || `${window.location.pathname}${window.location.search}`,
    landingPage,
    referrer: storedAttribution.referrer || referrer,
    utmSource: storedAttribution.utmSource || params.get("utm_source") || "",
    utmMedium: storedAttribution.utmMedium || params.get("utm_medium") || "",
    utmCampaign: storedAttribution.utmCampaign || params.get("utm_campaign") || "",
    utmContent: storedAttribution.utmContent || params.get("utm_content") || "",
    utmTerm: storedAttribution.utmTerm || params.get("utm_term") || "",
    gclid: storedAttribution.gclid || params.get("gclid") || "",
    journeySlug: params.get("journey") || "",
    viewedJourneys,
  };
}

function readStoredAttribution() {
  try {
    return JSON.parse(
      window.sessionStorage.getItem("aviora-attribution") || "{}",
    ) as Partial<SourceContext>;
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
