"use client";

import { ArrowLeft, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { CtaButton } from "@/components/cta";
import {
  CheckboxField,
  RadioField,
  SelectField,
  TextAreaField,
  TextField,
} from "@/components/forms";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { startPlanningOptions } from "@/content/planning";
import { cn } from "@/lib/utils/cn";
import { isTurnstileConfigured, TurnstileWidget } from "@/components/security/turnstile-widget";
import { trackEvent } from "@/lib/analytics/events";

type PlanningFormState = {
  travelerType: "family" | "couple" | "solo" | "small-group" | "undecided" | null;
  adults: number | null;
  children: number | null;
  travelingWithSeniors: boolean;
  timing: string;
  duration: string;
  destinations: string[];
  budgetTier: "comfortable" | "luxury" | "ultra-bespoke" | null;
  styles: string[];
  name: string;
  email: string;
  whatsapp: string;
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

type CurrentJourney = {
  slug: string;
  title: string;
};

const initialState: PlanningFormState = {
  travelerType: null,
  adults: null,
  children: null,
  travelingWithSeniors: false,
  timing: "",
  duration: "",
  destinations: [],
  budgetTier: null,
  styles: [],
  name: "",
  email: "",
  whatsapp: "",
  notes: "",
};

const steps = [
  { label: "Your journey", helper: "When you may travel and who is coming" },
  { label: "What matters", helper: "Places, pace and the level of comfort you prefer" },
  { label: "Stay in touch", helper: "Where a China specialist should reply" },
];

export function StartPlanningForm({
  savedJourneys = [],
  currentJourney,
  preference,
  placement = "start_planning_page",
}: {
  savedJourneys?: string[];
  currentJourney?: CurrentJourney;
  preference?: string;
  placement?: string;
}) {
  const preferenceLabel = getPreferenceLabel(preference);
  const preferenceDefaults = getPreferenceDefaults(preference);
  const journeyNotes = currentJourney
    ? `I'd like to request a private proposal for:\n${currentJourney.title}${preferenceLabel ? `\n\nPlanning preference: ${preferenceLabel}` : ""}`
    : savedJourneys.length
      ? `I'd like to learn more about these saved journeys:\n${savedJourneys
          .map((journey, index) => `${index + 1}. ${journey}`)
          .join("\n")}`
      : "";
  const [step, setStep] = useState(0);
  const [state, setState] = useState<PlanningFormState>({
    ...initialState,
    ...preferenceDefaults,
    notes: journeyNotes,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileResetSignal, setTurnstileResetSignal] = useState(0);
  const formStarted = useRef(false);
  const submittedRef = useRef(false);
  const abandonTracked = useRef(false);
  const currentStep = useRef(step);
  const handleTurnstileToken = useCallback((token: string) => setTurnstileToken(token), []);

  const progress = ((step + 1) / steps.length) * 100;
  const directWhatsAppHref = currentJourney
    ? `https://wa.me/447985052302?text=${encodeURIComponent(`Hello AVIORA, I would like help planning a private journey based on ${currentJourney.title}.`)}`
    : "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%20would%20like%20help%20planning%20a%20private%20journey%20in%20China.";

  useEffect(() => {
    trackEvent("form_view", { placement });
  }, [placement]);

  useEffect(() => {
    currentStep.current = step;
  }, [step]);

  useEffect(() => {
    const recordAbandonment = () => {
      if (!formStarted.current || submittedRef.current || abandonTracked.current) return;
      abandonTracked.current = true;
      trackEvent("form_abandon", {
        placement,
        step: currentStep.current + 1,
      });
    };

    window.addEventListener("pagehide", recordAbandonment);
    return () => {
      window.removeEventListener("pagehide", recordAbandonment);
      recordAbandonment();
    };
  }, [placement]);

  function recordFormStart() {
    if (formStarted.current) return;
    formStarted.current = true;
    trackEvent("form_start", {
      saved_journeys: savedJourneys.length,
      journey: currentJourney?.slug ?? "",
      preference: preference ?? "",
      placement,
    });
  }

  function advanceStep() {
    recordFormStart();
    const validationError = validateStep(step, state);
    if (validationError) {
      setSubmitError(validationError);
      return;
    }
    setSubmitError("");
    trackEvent("form_step_complete", { step: step + 1, label: steps[step].label });
    setStep((current) => current + 1);
  }

  function update<K extends keyof PlanningFormState>(key: K, value: PlanningFormState[K]) {
    recordFormStart();
    setState((current) => ({ ...current, [key]: value }));
  }

  function toggleList(key: "destinations" | "styles", value: string) {
    recordFormStart();
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
      <Card className="rounded-none border-neutral-950/12 p-6 shadow-none md:p-8">
        <div className="grid gap-7">
          <div className="bg-foreground text-background grid size-12 place-items-center rounded-full">
            <CheckCircle2 size={24} aria-hidden="true" />
          </div>
          <div>
            <p className="text-muted text-xs font-semibold tracking-[0.18em] uppercase">
              Request received
            </p>
            <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-[-0.03em] md:text-4xl">
              We have your travel brief.
            </h2>
            <p className="text-muted mt-4 max-w-2xl text-sm leading-7 md:text-base">
              A China specialist will review it personally and reply through the contact detail you
              provided, normally within 24 hours.
            </p>
          </div>
          <ol className="grid gap-0 border-y border-[var(--border)]">
            {[
              ["01", "We review the route, pace and practical needs in your brief."],
              ["02", "We reply with the most useful next questions or a clear first direction."],
              ["03", "Once the route is agreed, you receive services and pricing in writing."],
            ].map(([number, copy]) => (
              <li
                key={number}
                className="grid grid-cols-[2.25rem_1fr] gap-3 border-b border-[var(--border)] py-3.5 text-sm leading-6 last:border-b-0"
              >
                <span className="text-muted font-semibold">{number}</span>
                <span>{copy}</span>
              </li>
            ))}
          </ol>
          <div className="grid gap-3 sm:grid-cols-2">
            <CtaButton
              href={directWhatsAppHref}
              variant="whatsappFrosted"
              icon={<MessageCircle size={16} aria-hidden="true" />}
              target="_blank"
              rel="noreferrer"
              data-cta-placement="form-success-whatsapp"
              data-journey-slug={currentJourney?.slug}
            >
              Message Our China Team
            </CtaButton>
            <CtaButton
              href="/tours"
              variant="outline"
              icon={<ArrowRight size={16} aria-hidden="true" />}
              data-cta-placement="form-success-journeys"
            >
              Explore Journeys
            </CtaButton>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="start-planning-form-shell overflow-hidden rounded-none border-neutral-950/12 p-0 shadow-none">
      <div className="border-border border-b p-5 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-muted text-xs font-semibold tracking-[0.18em] uppercase">
              Step {step + 1} of {steps.length}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.025em]">{steps[step].label}</h2>
            <p className="text-muted mt-1 text-sm leading-6">{steps[step].helper}</p>
            {currentJourney ? (
              <div className="mt-4 max-w-xl rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] px-4 py-3">
                <p className="text-[0.68rem] font-bold tracking-[0.14em] text-[var(--text-secondary)] uppercase">
                  Enquiring about
                </p>
                <p className="mt-1 text-sm font-semibold">{currentJourney.title}</p>
              </div>
            ) : null}
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

          const validationError = validateStep(step, state);
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
            trackEvent("form_submit", {
              source: sourceContext.sourcePage.slice(0, 160),
              journey: sourceContext.journeySlug,
            });
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

            submittedRef.current = true;
            setSubmitted(true);
            trackEvent("form_success", {
              source: sourceContext.sourcePage.slice(0, 160),
              journey: sourceContext.journeySlug,
            });
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
          <div key="planning-step-1" className="planning-form-step grid gap-6">
            <div className="grid gap-5 md:grid-cols-2">
              <TextField
                label="When might you travel?"
                helper="A month, season, exact dates, or 'not sure yet' is enough."
                placeholder="October 2026 or not sure yet"
                required
                value={state.timing}
                onChange={(event) => update("timing", event.target.value)}
              />
              <SelectField
                label="Approximate trip length"
                helper="Choose the closest range. You can change it later."
                placeholder="Select a trip length"
                options={startPlanningOptions.tripLengths}
                value={state.duration}
                onValueChange={(value) => update("duration", value)}
              />
            </div>
            <fieldset className="grid gap-3">
              <legend className="mb-2 text-sm font-semibold">Who are you travelling with?</legend>
              <div className="grid gap-3 sm:grid-cols-2">
                {startPlanningOptions.travelerTypes.map((option) => (
                  <RadioField
                    key={option.value}
                    name="travelerType"
                    label={option.label}
                    value={option.value}
                    checked={state.travelerType === option.value}
                    onChange={() =>
                      update("travelerType", option.value as PlanningFormState["travelerType"])
                    }
                  />
                ))}
              </div>
            </fieldset>
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                label="Adults travelling"
                type="number"
                min={1}
                max={20}
                inputMode="numeric"
                required
                value={state.adults ?? ""}
                onChange={(event) =>
                  update("adults", event.target.value ? Number(event.target.value) : null)
                }
              />
              <TextField
                label="Children travelling"
                helper="Leave blank if no children are travelling."
                type="number"
                min={0}
                max={20}
                inputMode="numeric"
                value={state.children ?? ""}
                onChange={(event) =>
                  update("children", event.target.value ? Number(event.target.value) : null)
                }
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
          <div key="planning-step-2" className="planning-form-step grid gap-7">
            <fieldset className="grid gap-3 sm:grid-cols-2">
              <legend className="mb-2 text-sm font-semibold">Places you are considering</legend>
              {startPlanningOptions.destinations.map((option) => (
                <CheckboxField
                  key={option.value}
                  label={option.label}
                  checked={state.destinations.includes(option.value)}
                  onChange={() => toggleList("destinations", option.value)}
                />
              ))}
            </fieldset>
            <fieldset className="grid gap-3 sm:grid-cols-2">
              <legend className="mb-2 text-sm font-semibold">
                What should the journey feel like?
              </legend>
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
              <legend className="mb-2 text-sm font-semibold">
                Preferred comfort level <span className="text-muted font-normal">(optional)</span>
              </legend>
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
            <TextAreaField
              label="Anything else we should understand?"
              helper="Walking comfort, hotel expectations, fixed dates or the one experience that matters most."
              placeholder="What would make this trip work well for you?"
              value={state.notes}
              onChange={(event) => update("notes", event.target.value)}
            />
          </div>
        ) : null}

        {step === 2 ? (
          <div key="planning-step-3" className="planning-form-step grid gap-5">
            <p className="text-muted text-sm leading-6">
              Enter either an email address or WhatsApp number. You do not need to provide both.
            </p>
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
            </div>
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />
          </div>
        ) : null}

        {step === steps.length - 1 ? (
          <TurnstileWidget
            onTokenChange={handleTurnstileToken}
            resetSignal={turnstileResetSignal}
          />
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
            disabled={
              submitting ||
              (step === steps.length - 1 && (!isTurnstileConfigured || !turnstileToken))
            }
          >
            {step === steps.length - 1
              ? submitting
                ? "Submitting..."
                : turnstileToken
                  ? "Plan My Trip"
                  : "Preparing Secure Form..."
              : "Continue"}
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
        {submitError ? (
          <p role="alert" className="text-brand-red text-sm font-medium">
            {submitError}
          </p>
        ) : null}
        {step === steps.length - 1 ? (
          <p className="text-muted text-center text-sm leading-6">
            Prefer a direct conversation?{" "}
            <a
              href={directWhatsAppHref}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[var(--text-primary)] underline decoration-black/25 underline-offset-4"
            >
              Message Our China Team
            </a>
          </p>
        ) : null}
      </form>
    </Card>
  );
}

function validateStep(step: number, state: PlanningFormState) {
  if (step === 0) {
    if (!state.timing.trim()) return "Please share a travel month, dates, or enter 'not sure yet'.";
    if (!state.travelerType) return "Please tell us who you expect to travel with.";
    if (!state.adults || state.adults < 1) return "Please enter the number of adults travelling.";
  }
  if (step < 2) return "";
  if (!state.name.trim()) return "Please enter your name.";
  if (!state.email.trim() && !state.whatsapp.trim()) {
    return "Please provide either an email address or WhatsApp number.";
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

function getPreferenceLabel(value?: string) {
  if (!value) return "";
  const labels: Record<string, string> = {
    "slower-pacing": "Choose a slower pace",
    "walking-comfort": "Review the route around our walking comfort",
    "trip-length-comparison": "Help us decide between 10 and 12 days",
    "route-reality-check": "Review our dates, flights and proposed China route",
    "fewer-hotels": "Reduce hotel changes",
    family: "Travel with children",
    "dietary-needs": "Plan around dietary needs",
    photography: "Add a photography focus",
    nature: "Spend more time in nature",
  };
  return labels[value] ?? value.replaceAll("-", " ");
}

function getPreferenceDefaults(value?: string): Partial<PlanningFormState> {
  if (
    value !== "walking-comfort" &&
    value !== "trip-length-comparison" &&
    value !== "route-reality-check"
  ) {
    return {};
  }

  return {
    duration: "11-14 days",
    destinations: ["beijing", "xian", "shanghai"],
    styles: ["slow-travel"],
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
