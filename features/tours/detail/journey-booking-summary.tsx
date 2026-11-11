"use client";

import { formatJourneyStartingPrice } from "@/lib/tours/journey-pricing";
import { configuredWhatsAppHref } from "@/lib/tours/journey-whatsapp";
import { MessageCircle } from "@/components/icons/symbols";
import { getJourneyCatalogItem } from "@/content/tours/catalog";
import { useClaimedJourneyOffer } from "@/components/offers/use-claimed-journey-offer";
import { calculateOfferPrice, formatOfferUsd } from "@/lib/tours/journey-offer";

import { useOptionalJourneyConfiguration } from "@/features/tours/detail/journey-configuration";
import { TrackedTourLink } from "@/features/tours/detail/tour-detail-interactions";
import styles from "@/features/tours/detail/journey-booking-summary.module.css";

export function JourneyPrice({ fallback, journeySlug }: { fallback: string; journeySlug: string }) {
  const configuration = useOptionalJourneyConfiguration();
  const amount = configuration
    ? configuration.priceFromUsd
      ? formatJourneyStartingPrice(configuration.priceFromUsd)
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
          <strong aria-label={pricing ? `${amount}. ${pricing.basis}` : amount}>{amount}</strong>
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
