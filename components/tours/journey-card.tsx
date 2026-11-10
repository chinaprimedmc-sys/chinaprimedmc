import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { getJourneyCardTitle } from "@/content/tours/card-copy";
import { buildExplorerItem } from "@/lib/tours/journey-explorer-item";

import { JourneyTile } from "./journey-tile";

/** Catalogs and related journeys share the same accessible, single-link card. */
export function JourneyCard({
  item,
  featured = false,
  position = 0,
}: {
  item: JourneyCatalogItem;
  featured?: boolean;
  position?: number;
}) {
  return (
    <JourneyTile
      item={{ ...buildExplorerItem(item), title: getJourneyCardTitle(item) }}
      featured={featured}
      position={position}
    />
  );
}
