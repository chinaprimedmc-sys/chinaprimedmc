import { createTourDetailModel } from "@/features/tours/detail/tour-detail-model";
import { UnifiedTourDetail } from "@/features/tours/detail/unified-tour-detail";
import type { Tour } from "@/types/tour";

export function TourDossier({ tour }: { tour: Tour }) {
  return <UnifiedTourDetail model={createTourDetailModel(tour)} />;
}
