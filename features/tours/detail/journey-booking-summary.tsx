"use client";

import { MessageCircle } from "lucide-react";
import { getJourneyCatalogItem } from "@/content/tours/catalog";
import { useClaimedJourneyOffer } from "@/components/offers/use-claimed-journey-offer";
import { calculateOfferPrice, formatOfferUsd } from "@/lib/tours/journey-offer";

import { useOptionalJourneyConfiguration } from "@/features/tours/detail/journey-configuration";
import { TrackedTourLink } from "@/features/tours/detail/tour-detail-interactions";
import styles from "@/features/tours/detail/tour-detail-landing.module.css";

export function JourneyPrice({ fallback, journeySlug }: { fallback: string; journeySlug: string }) {
  const configuration = useOptionalJourneyConfiguration();
  const amount = configuration
    ? configuration.priceFromUsd
      ? `US$${configuration.priceFromUsd.toLocaleString("en-US")}`
      : "Price on request"
    : fallback;
  const pricing = getJourneyCatalogItem(journeySlug)?.pricing;
  const claim = useClaimedJourneyOffer();
  const basePrice = configuration?.priceFromUsd ?? pricing?.fromUsd;
  const offer = claim && basePrice ? calculateOfferPrice(basePrice, claim.discountPercent) : null;

  return (
    <>
      {offer ? (
        <>
          <del className={styles.offerOriginalPrice}>{formatOfferUsd(offer.regularFromUsd)}</del>
          <strong className={styles.offerCurrentPrice}>
            {formatOfferUsd(offer.discountedFromUsd)}
          </strong>
          <small>
            Your {claim?.discountPercent}% offer ·{" "}
            {pricing?.pricingUnit === "private-group" ? "per private group" : "per person"}
          </small>
        </>
      ) : (
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
      )}
    </>
  );
}

export function JourneyDuration({ fallback }: { fallback: string }) {
  const configuration = useOptionalJourneyConfiguration();
  return <>{configuration?.duration ?? fallback}</>;
}

export function JourneyWhatsAppAction({
  baseHref,
  journeySlug,
  journeyTitle,
  className,
  placement,
}: {
  baseHref: string;
  journeySlug: string;
  journeyTitle: string;
  className: string;
  placement: string;
}) {
  const configuration = useOptionalJourneyConfiguration();
  const href = configuration
    ? configuredWhatsAppHref(baseHref, journeyTitle, configuration)
    : baseHref;
  return (
    <TrackedTourLink
      className={className}
      href={href}
      journeySlug={journeySlug}
      label="CONTACT ON WHATSAPP"
      placement={placement}
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={17} aria-hidden="true" />
      Contact us on WhatsApp
    </TrackedTourLink>
  );
}

export function JourneyMobileCta({
  fallbackPrice,
  journeySlug,
  baseHref,
  journeyTitle,
}: {
  fallbackPrice: string;
  journeySlug: string;
  baseHref: string;
  journeyTitle: string;
}) {
  const configuration = useOptionalJourneyConfiguration();
  const price = configuration
    ? configuration.priceFromUsd
      ? `US$${configuration.priceFromUsd.toLocaleString("en-US")}`
      : "Price on request"
    : fallbackPrice;
  const pricing = getJourneyCatalogItem(journeySlug)?.pricing;
  const claim = useClaimedJourneyOffer();
  const basePrice = configuration?.priceFromUsd ?? pricing?.fromUsd;
  const offer = claim && basePrice ? calculateOfferPrice(basePrice, claim.discountPercent) : null;
  const offeredPrice = offer ? formatOfferUsd(offer.discountedFromUsd) : price;

  return (
    <div className={styles.mobileCta}>
      <span>
        <small>
          {offer
            ? `Your ${claim?.discountPercent}% offer · was ${formatOfferUsd(offer.regularFromUsd)}`
            : pricing?.fromUsd
              ? "From"
              : "Pricing"}
        </small>
        <strong>
          {offeredPrice}{" "}
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
        href={
          configuration ? configuredWhatsAppHref(baseHref, journeyTitle, configuration) : baseHref
        }
        journeySlug={journeySlug}
        label="CONTACT ON WHATSAPP"
        placement="detail-mobile"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp <MessageCircle size={15} aria-hidden="true" />
      </TrackedTourLink>
    </div>
  );
}

function configuredWhatsAppHref(
  baseHref: string,
  journeyTitle: string,
  configuration: {
    priceBasis: string;
    duration: string;
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
    `Duration: ${configuration.duration}`,
    `Travellers: ${configuration.guests} guests`,
    `Displayed price: ${price}`,
    "",
    "Travel month:",
    "Could you confirm availability and prepare a private proposal?",
  ].join("\n");
  url.searchParams.set("text", message);
  return url.toString();
}
