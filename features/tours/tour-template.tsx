import { TourDossier } from "@/features/tours/dossier/tour-dossier";
import type { Tour } from "@/types/tour";

export function TourTemplate({ tour }: { tour: Tour }) {
  return <TourDossier tour={tour} />;
}
