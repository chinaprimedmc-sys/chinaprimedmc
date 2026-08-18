const attributionColumns =
  "landing_page|referrer|utm_source|utm_medium|utm_campaign|utm_content|utm_term|gclid|viewed_journeys";

const missingAttributionColumnPatterns = [
  new RegExp(`column\\s+(?:public\\.)?inquiries\\.(${attributionColumns})`, "i"),
  new RegExp(
    `could not find the ['\"]?(${attributionColumns})['\"]? column of ['\"]?inquiries['\"]? in the schema cache`,
    "i",
  ),
];

export function isMissingAttributionColumnError(error: unknown) {
  return (
    error instanceof Error &&
    missingAttributionColumnPatterns.some((pattern) => pattern.test(error.message))
  );
}
