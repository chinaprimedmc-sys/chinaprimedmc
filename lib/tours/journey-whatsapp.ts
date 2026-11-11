/** Preserve the journey-specific questions when adding the visitor’s configuration. */
export function configuredWhatsAppHref(
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
    ? `From USD ${configuration.priceFromUsd.toLocaleString("en-US")}. ${configuration.priceBasis}`
    : "Individually priced";
  const message = [
    url.searchParams.get("text")?.trim() || `Hello AVIORA, I am interested in ${journeyTitle}.`,
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
