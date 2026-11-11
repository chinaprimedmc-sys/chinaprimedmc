export type PlanningContext = {
  currentJourney?: { slug: string; title: string };
  destinationName?: string;
  savedJourneys?: string[];
  preference?: string;
  matchSummary?: string;
};

function clean(value: string | undefined, limit = 600) {
  return (value ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .trim()
    .slice(0, limit);
}

/** A bounded, plain-text brief: no personal contact details or arbitrary URL parameters. */
export function buildPlanningContext(context: PlanningContext) {
  const lines: string[] = [];
  const journey = clean(context.currentJourney?.title, 200);
  const destination = clean(context.destinationName, 100);
  if (journey) lines.push(`Journey: ${journey}`);
  if (destination) lines.push(`Destination: ${destination}`);
  const saved = [
    ...new Set((context.savedJourneys ?? []).map((item) => clean(item, 200)).filter(Boolean)),
  ].slice(0, 8);
  if (saved.length) lines.push(`Saved journeys: ${saved.join("; ")}`);
  const preference = clean(context.preference);
  const match = clean(context.matchSummary, 1200);
  if (preference) lines.push(`Preferences: ${preference}`);
  if (match) lines.push(`Travel brief: ${match}`);
  return lines.join("\n");
}

export function planningContactLinks(summary: string, email: string, phone: string) {
  const message = `Hello AVIORA, I would like help planning a private journey in China.${summary ? `\n\n${summary}` : ""}`;
  return {
    email: `mailto:${email}?subject=${encodeURIComponent("My private China journey")}&body=${encodeURIComponent(message)}`,
    whatsapp: `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`,
  };
}
