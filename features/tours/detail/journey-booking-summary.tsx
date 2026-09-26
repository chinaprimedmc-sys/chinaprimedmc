"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { getJourneyCatalogItem } from "@/content/tours/catalog";

import { useOptionalJourneyConfiguration } from "@/features/tours/detail/journey-configuration";
import { TrackedTourLink } from "@/features/tours/detail/tour-detail-interactions";
import styles from "@/features/tours/detail/tour-detail-landing.module.css";

export function JourneyPrice({ fallback, journeySlug }: { fallback: string; journeySlug: string }) {
  const configuration = useOptionalJourneyConfiguration();
  const amount = configuration
    ? configuration.priceFromUsd
      ? `US$${configuration.priceFromUsd.toLocaleString("en-US")}`
      : "Personal quote"
    : fallback;
  const pricing = getJourneyCatalogItem(journeySlug)?.pricing;

  return (
    <>
      <strong>{amount}</strong>
      <small>
        {configuration?.priceFromUsd
          ? `${pricing?.pricingUnit === "private-group" ? "Per private group of four" : "Per person · based on four guests"}`
          : configuration
            ? configuration.guests === "Not sure yet"
              ? "Group size to be confirmed"
              : `Quote prepared for ${configuration.guests} guests`
            : (getJourneyCatalogItem(journeySlug)?.pricing.cardBasis ??
              "Price confirmed in your proposal")}
      </small>
    </>
  );
}

export function JourneyDuration({ fallback }: { fallback: string }) {
  const configuration = useOptionalJourneyConfiguration();
  return <>{configuration?.duration ?? fallback}</>;
}

export function JourneyEnquiryWhatsApp({
  baseHref,
  journeySlug,
  journeyTitle,
}: {
  baseHref: string;
  journeySlug: string;
  journeyTitle: string;
}) {
  const configuration = useOptionalJourneyConfiguration();
  const href = configuration
    ? configuredWhatsAppHref(baseHref, journeyTitle, configuration)
    : baseHref;

  return (
    <TrackedTourLink
      className={styles.whatsappLink}
      href={href}
      journeySlug={journeySlug}
      label="WHATSAPP A SPECIALIST"
      placement="detail-enquiry"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={16} aria-hidden="true" />
      Prefer WhatsApp? Send this selection
    </TrackedTourLink>
  );
}

export function JourneyMobileCta({
  fallbackPrice,
  journeySlug,
}: {
  fallbackPrice: string;
  journeySlug: string;
}) {
  const configuration = useOptionalJourneyConfiguration();
  const price = configuration
    ? configuration.priceFromUsd
      ? `US$${configuration.priceFromUsd.toLocaleString("en-US")}`
      : "Personal quote"
    : fallbackPrice;
  const pricing = getJourneyCatalogItem(journeySlug)?.pricing;

  return (
    <div className={styles.mobileCta}>
      <span>
        <small>{configuration?.hasPaceOptions ? configuration.paceLabel : "From"}</small>
        <strong>
          {price}{" "}
          <em>
            {configuration
              ? configuration.priceFromUsd
                ? pricing?.pricingUnit === "private-group"
                  ? "per private group of four"
                  : "per person · four guests"
                : "quote for selected party"
              : pricing?.pricingUnit === "private-group"
                ? "per private group of four"
                : "per person · four guests"}
          </em>
        </strong>
      </span>
      <TrackedTourLink
        className={styles.mobileCtaAction}
        href="#enquiry"
        journeySlug={journeySlug}
        label="CHECK AVAILABILITY"
        placement="detail-mobile"
      >
        Enquire <ArrowRight size={15} aria-hidden="true" />
      </TrackedTourLink>
    </div>
  );
}

function configuredWhatsAppHref(
  baseHref: string,
  journeyTitle: string,
  configuration: {
    hasPaceOptions: boolean;
    priceBasis: string;
    paceLabel: string;
    duration: string;
    freeDayLocation: string;
    freeDayLabel: string;
    guests: string;
    priceFromUsd?: number;
  },
) {
  const url = new URL(baseHref);
  const price = configuration.priceFromUsd
    ? `US$${configuration.priceFromUsd.toLocaleString("en-US")}. ${configuration.priceBasis}`
    : "Price on request";
  const message = [
    `Hello AVIORA, I am interested in ${journeyTitle}.`,
    "",
    configuration.hasPaceOptions
      ? `Selected pace: ${configuration.paceLabel} (${configuration.duration})`
      : `Duration: ${configuration.duration}`,
    configuration.hasPaceOptions
      ? `Free day: ${configuration.freeDayLocation}, ${configuration.freeDayLabel}`
      : "",
    `Travellers: ${configuration.guests} guests`,
    `Displayed price: ${price}`,
    "",
    "Travel month:",
    "Could you confirm availability and prepare a private proposal?",
  ].join("\n");
  url.searchParams.set("text", message);
  return url.toString();
}
