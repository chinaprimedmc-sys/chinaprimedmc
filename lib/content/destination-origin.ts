import { explorerDestinations } from "@/content/destinations/explorer";
import { destinationPlanningGuides } from "@/content/destinations/planning-guides";

/** A query string may supply context, but only a real guide-to-product relation is accepted. */
export function destinationOriginName(origin: unknown, journeySlug: string) {
  if (typeof origin !== "string" || !Object.hasOwn(destinationPlanningGuides, origin))
    return undefined;
  if (!destinationPlanningGuides[origin]?.products.some((product) => product.slug === journeySlug))
    return undefined;
  return explorerDestinations.find((destination) => destination.id === origin)?.name;
}
