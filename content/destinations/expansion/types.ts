import type { ExplorerDestination } from "../explorer";
import type { DestinationEditorial } from "../editorial";
import type { DestinationPlanningGuide } from "../planning-guides";
import type { MediaAsset } from "@/types/component-library";

export type ExpandedDestination = Omit<ExplorerDestination, "image" | "guideHref"> & {
  assets: { hero: MediaAsset; gallery: MediaAsset[] };
  planning: DestinationPlanningGuide;
  editorial: DestinationEditorial;
};
