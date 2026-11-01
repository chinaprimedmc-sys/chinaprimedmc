import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  coverageJourneySlugs,
  coveragePages,
  coverageRegionIds,
  type CoverageRegionId,
} from "@/content/coverage";
import { createContentPageRoute } from "@/features/service-pages/service-page-route";

type Props = { params: Promise<{ region: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return coverageRegionIds.map((region) => ({ region }));
}

function routeFor(region: string) {
  if (!(region in coveragePages)) return null;
  const id = region as CoverageRegionId;
  return createContentPageRoute(coveragePages[id], coverageJourneySlugs[id]);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region } = await params;
  const route = routeFor(region);
  if (!route) notFound();
  return route.metadata;
}

export default async function CoverageRegionPage({ params }: Props) {
  const { region } = await params;
  const route = routeFor(region);
  if (!route) notFound();
  return <route.Page />;
}
