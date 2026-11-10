"use client";

import { configuredWhatsAppHref } from "@/lib/tours/journey-whatsapp";
import { MessageCircle } from "@/components/icons/symbols";
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
      : "Individually priced"
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
