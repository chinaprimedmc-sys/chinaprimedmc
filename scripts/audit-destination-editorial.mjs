/** Reproducible review evidence, not a content-quality or ranking score. */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import "./audit-destinations.mjs";

const { explorerDestinations } = await import("../content/destinations/explorer.ts");
const { destinationPlanningGuides } = await import("../content/destinations/planning-guides.ts");
const { destinationEditorial } = await import("../content/destinations/editorial.ts");

function strings(value, path = "") {
  if (typeof value === "string") return [{ path, text: value }];
  if (!value || typeof value !== "object") return [];
  return Object.entries(value).flatMap(([key, item]) => strings(item, `${path}.${key}`));
}

const repeated = new Map();
const guides = explorerDestinations.map((destination) => {
  const slug = destination.id;
  const guide = destinationPlanningGuides[slug];
  const editorial = destinationEditorial[slug];
  // Exclude metadata, citations and service terms from the prose similarity queue.
  const body = strings({
    answer: guide.answer,
    stayAnswer: guide.stayAnswer,
    hotelAnswer: guide.hotelAnswer,
    sightseeingAnswer: guide.sightseeingAnswer,
    editorial,
  });
  for (const { path, text } of body) {
    for (const sentence of text.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g) ?? []) {
      const normalized = sentence.trim().toLowerCase().replace(/\s+/g, " ");
      if (normalized.split(" ").length < 20) continue;
      const entry = repeated.get(normalized) ?? { sentence: sentence.trim(), occurrences: [] };
      entry.occurrences.push({ slug, field: path });
      repeated.set(normalized, entry);
    }
  }
  const wordCount = (text) => text.trim().split(/\s+/).length;
  const questions = [
    {
      question: guide.stayHeading ?? `How many days do you need in ${destination.name}?`,
      answer: guide.stayAnswer,
    },
    {
      question: guide.hotelHeading ?? `Where should you stay in ${destination.name}?`,
      answer: guide.hotelAnswer,
    },
    { question: guide.sightseeingQuestion, answer: guide.sightseeingAnswer },
    ...editorial.faqs,
  ];
  return {
    slug,
    title: guide.seoTitle,
    searchIntentStatus:
      "Editorial hypotheses from visible questions; search volume and keyword difficulty unverified",
    questions,
    openingAnswerWords: wordCount(guide.answer),
    openingReview:
      wordCount(guide.answer) > 100
        ? "Review whether the opening can answer the main decision sooner"
        : null,
    conversion: guide.products.length ? "Matching published itinerary" : "Tailored planning",
    products: guide.products.map(({ slug, reason, comparison }) => ({ slug, reason, comparison })),
    routeAdvice: guide.routeAdvice,
    sources: guide.visitorResources,
    sourceStatus:
      "Reference URLs and stated scope checked locally; current source bodies not independently verified in this audit",
    outstandingValidation: [
      "Individual fact and native-English review",
      "Live search intent and competition evidence",
      "Deployed rendering and indexation",
      "Observed AI citations and qualified enquiries",
    ],
  };
});

const duplicateSentences = [...repeated.values()]
  .filter(({ occurrences }) => new Set(occurrences.map(({ slug }) => slug)).size > 1)
  .sort((a, b) => b.occurrences.length - a.occurrences.length);
const report = {
  scope:
    "Local registered destination copy. Review flags are prompts for editorial judgment, not automatic failures or proof of quality.",
  totals: {
    guides: guides.length,
    withPublishedItineraries: guides.filter(({ products }) => products.length).length,
    tailoredPlanningOnly: guides.filter(({ products }) => !products.length).length,
    longOpeningReview: guides.filter(({ openingReview }) => openingReview).length,
    sharedLongSentences: duplicateSentences.length,
  },
  duplicateSentences,
  guides,
};
if (process.argv.includes("--write")) {
  writeFileSync(
    fileURLToPath(new URL("../docs/audit/destination-editorial-evidence.json", import.meta.url)),
    `${JSON.stringify(report, null, 2)}\n`,
  );
}
console.log(JSON.stringify({ ...report.totals, duplicateSentences }, null, 2));
