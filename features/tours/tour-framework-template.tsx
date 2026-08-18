import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { createFrameworkTourDetailModel } from "@/features/tours/detail/tour-detail-model";
import { UnifiedTourDetail } from "@/features/tours/detail/unified-tour-detail";

export function TourFrameworkTemplate({ item }: { item: JourneyCatalogItem }) {
  return <UnifiedTourDetail model={createFrameworkTourDetailModel(item)} />;
}
