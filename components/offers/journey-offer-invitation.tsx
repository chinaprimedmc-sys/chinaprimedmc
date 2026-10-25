"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowUpRight, Check, MessageCircle, Tag, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { navigationConfig } from "@/components/navigation/navigation-config";
import {
  markOfferSeen,
  readClaimedJourneyOffer,
  readOfferSeen,
  readOfferVisibleMs,
  saveClaimedJourneyOffer,
  writeOfferVisibleMs,
} from "@/lib/tours/journey-offer-client";
import {
  formatOfferUsd,
  journeyOfferSummary,
  privateJourneyOffer,
  type JourneyOfferClaim,
  type JourneyOfferOption,
} from "@/lib/tours/journey-offer";
import styles from "./journey-offer-invitation.module.css";

const defaultJourneySlug = "first-china-beautifully-paced";
const offerDelayMs = 7000;

export function JourneyOfferInvitation({ journeys }: { journeys: JourneyOfferOption[] }) {
  const [open, setOpen] = useState(false);
  const [journey, setJourney] = useState<JourneyOfferOption | null>(null);
  const [claim, setClaim] = useState<JourneyOfferClaim | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const journeyRef = useRef(journeys);

  useEffect(() => {
    journeyRef.current = journeys;
  }, [journeys]);

  useEffect(() => {
    if (!privateJourneyOffer.active || !journeys.length) return;
    const show = (event: Event) => {
      if (document.querySelector('[role="dialog"]')) return;
      previousFocus.current =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;
      const options = journeyRef.current;
      const requestedSlug = (event as CustomEvent<{ slug?: string }>).detail?.slug;
      const pageSlug = window.location.pathname.split("/")[2];
      const selected =
        options.find((item) => item.slug === requestedSlug) ??
        options.find((item) => item.slug === pageSlug) ??
        options.find((item) => item.slug === defaultJourneySlug) ??
        options[0];
      setJourney(selected);
      setClaim(readClaimedJourneyOffer());
      setOpen(true);
      // Mark seen only once the invitation actually renders.
      markOfferSeen();
    };
    window.addEventListener("aviora:claim-offer", show);
    return () => window.removeEventListener("aviora:claim-offer", show);
  }, [journeys]);

  useEffect(() => {
    if (!privateJourneyOffer.active || !journeys.length || readOfferSeen()) return;
    let elapsed = readOfferVisibleMs();
    let lastTick = document.hidden ? null : Date.now();
    let lastSaved = elapsed;
    let seen = false;
    const onVisibilityChange = () => {
      lastTick = document.hidden ? null : Date.now();
    };
    // Reconcile with other tabs on storage events instead of polling localStorage every tick.
    const onStorage = () => {
      elapsed = Math.max(elapsed, readOfferVisibleMs());
      seen = seen || readOfferSeen();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("storage", onStorage);
    const timer = window.setInterval(() => {
      if (seen) {
        window.clearInterval(timer);
        return;
      }
      if (document.hidden) {
        lastTick = null;
        return;
      }
      const now = Date.now();
      if (lastTick !== null) elapsed += now - lastTick;
      lastTick = now;
      if (elapsed - lastSaved >= 1000) {
        writeOfferVisibleMs(elapsed);
        lastSaved = elapsed;
      }
      // Retry on the next tick while another dialog is open; the show handler marks the offer seen.
      if (elapsed < offerDelayMs || document.querySelector('[role="dialog"]')) return;
      writeOfferVisibleMs(elapsed);
      window.clearInterval(timer);
      window.dispatchEvent(new CustomEvent("aviora:claim-offer"));
    }, 250);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("storage", onStorage);
    };
  }, [journeys]);

  if (!privateJourneyOffer.active || !journey) return null;
  const displayClaim = claim;
  const whatsapp = new URL(navigationConfig.action.whatsapp[0].href);
  whatsapp.searchParams.set(
    "text",
    [
      `Hello AVIORA, I have claimed your ${privateJourneyOffer.discountPercent}% offer and would like to plan my private China journey.`,
      displayClaim ? journeyOfferSummary(displayClaim) : `Journey: ${journey.title}`,
      "Could my private specialist help confirm dates and the final price?",
    ].join("\n\n"),
  );

  return (
    <Dialog.Root
      open={open}
      onOpenChange={(value) => {
        setOpen(value);
        if (!value) markOfferSeen();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content
          className={styles.dialog}
          aria-describedby="journey-offer-description"
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            if (previousFocus.current?.isConnected)
              previousFocus.current.focus({ preventScroll: true });
          }}
        >
          <Dialog.Close className={styles.close} aria-label="Close offer">
            <X size={20} aria-hidden="true" />
          </Dialog.Close>
          <div className={styles.content}>
            <div className={styles.heading}>
              <span className={styles.badge}>
                {claim ? (
                  <Check size={16} aria-hidden="true" />
                ) : (
                  <Tag size={16} aria-hidden="true" />
                )}
                {privateJourneyOffer.discountPercent}% off
              </span>
              <Dialog.Title>
                {claim
                  ? `Your ${privateJourneyOffer.discountPercent}% offer is ready.`
                  : `${privateJourneyOffer.discountPercent}% off your private China journey.`}
              </Dialog.Title>
              <Dialog.Description id="journey-offer-description">
                {claim
                  ? "Your offer request is saved. A China specialist will follow up on WhatsApp, normally within 24 hours."
                  : "Leave your first name and WhatsApp number to claim your offer and meet your one-to-one China specialist."}
              </Dialog.Description>
            </div>
            {!claim ? (
              <>
                <InquiryForm
                  placement="journey-offer-invitation"
                  journeySlug={journey.slug}
                  campaignId={privateJourneyOffer.id}
                  submitLabel={`Claim my ${privateJourneyOffer.discountPercent}% off`}
                  introText=""
                  showSummary={false}
                  onSuccess={(result) => {
                    if (result.offer) {
                      setClaim(result.offer);
                      saveClaimedJourneyOffer(result.offer);
                    }
                  }}
                />
                <p className={styles.privacy}>
                  No payment required. By submitting, you agree that AVIORA may contact you on
                  WhatsApp about your trip.{" "}
                  <Link href="/privacy" onClick={() => setOpen(false)}>
                    Privacy policy
                  </Link>
                </p>
              </>
            ) : (
              <OfferReceipt
                claim={claim}
                journey={journey}
                whatsapp={whatsapp.toString()}
                onViewJourney={() => setOpen(false)}
              />
            )}
            <details className={styles.terms}>
              <summary>Offer details</summary>
              <p>{privateJourneyOffer.terms}</p>
            </details>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function OfferReceipt({
  claim,
  journey,
  whatsapp,
  onViewJourney,
}: {
  claim: JourneyOfferClaim;
  journey: JourneyOfferOption;
  whatsapp: string;
  onViewJourney: () => void;
}) {
  if (
    claim.regularFromUsd === null ||
    claim.discountedFromUsd === null ||
    claim.savingsUsd === null
  ) {
    return (
      <div className={styles.receipt} aria-live="polite">
        <div className={styles.quote}>
          <strong>{privateJourneyOffer.discountPercent}% off your written journey quote.</strong>
          <p>
            This route is priced for your dates and group. Your specialist will show the base price,
            your savings and the final price together.
          </p>
        </div>
        <div className={styles.code}>
          <span>Your offer code</span>
          <strong>{claim.code}</strong>
        </div>
        <SpecialistLink href={whatsapp} />
        <JourneyLink href={journey.href} onClick={onViewJourney} />
      </div>
    );
  }

  const unit = journey.pricingUnit === "private-group" ? "per private group" : "per person";
  return (
    <div className={styles.receipt} aria-live="polite" aria-label="Your offer and journey prices">
      <p className={styles.journeyName}>{journey.title}</p>
      <div className={styles.prices}>
        <div className={styles.regular}>
          <span>Published starting price</span>
          <del>{formatOfferUsd(claim.regularFromUsd)}</del>
        </div>
        <div className={styles.discounted}>
          <span>Your {claim.discountPercent}% off price, from</span>
          <strong>{formatOfferUsd(claim.discountedFromUsd)}</strong>
        </div>
        <p className={styles.unit}>
          {unit} · {journey.cardBasis}
        </p>
        <p className={styles.savings}>
          You save {formatOfferUsd(claim.savingsUsd)} {unit}.
        </p>
        <p className={styles.note}>
          Indicative starting price. Your dates and confirmed services determine the final quote.
        </p>
      </div>
      <div className={styles.code}>
        <span>Your offer code</span>
        <strong>{claim.code}</strong>
      </div>
      <SpecialistLink href={whatsapp} />
      <JourneyLink href={journey.href} onClick={onViewJourney} />
    </div>
  );
}

function SpecialistLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={styles.primary}>
      <MessageCircle size={19} aria-hidden="true" />
      Talk to my private specialist
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

function JourneyLink({ href, onClick }: { href: string; onClick: () => void }) {
  return (
    <Link href={href} className={styles.secondary} onClick={onClick}>
      View this journey <ArrowUpRight size={15} aria-hidden="true" />
    </Link>
  );
}
