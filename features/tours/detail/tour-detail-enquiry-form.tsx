"use client";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { useOptionalJourneyConfiguration, type JourneyGuests } from "./journey-configuration";
export function TourDetailEnquiryForm({
  journeySlug,
  journeyTitle,
}: {
  journeySlug: string;
  journeyTitle: string;
}) {
  const config = useOptionalJourneyConfiguration();
  const summary = [
    journeyTitle,
    config ? (config.hasPaceOptions ? config.paceLabel + " · " : "") + config.duration : "",
    config?.hasPaceOptions
      ? "Free day: " + config.freeDayLocation + " · " + config.freeDayLabel
      : "",
    config?.priceFromUsd
      ? "From US$" + config.priceFromUsd.toLocaleString("en-US") + ". " + config.priceBasis
      : "Personal quote after confirming your dates and party",
  ]
    .filter(Boolean)
    .join("\n");
  return (
    <InquiryForm
      placement="tour-detail"
      journeySlug={journeySlug}
      summary={summary}
      duration={config?.duration}
      guests={config?.guests}
      onGuestsChange={config ? (value) => config.setGuests(value as JourneyGuests) : undefined}
    />
  );
}
