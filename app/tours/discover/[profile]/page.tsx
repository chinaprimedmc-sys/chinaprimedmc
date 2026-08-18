import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  getJourneyDiscoveryProfile,
  journeyDiscoveryProfiles,
} from "@/content/tours/discovery-profiles";
import { JourneyDiscoveryPage } from "@/features/tours/journey-discovery-page";
import { createMetadata } from "@/lib/seo/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return journeyDiscoveryProfiles.map((profile) => ({ profile: profile.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ profile: string }>;
}): Promise<Metadata> {
  const { profile: profileSlug } = await params;
  const profile = getJourneyDiscoveryProfile(profileSlug);
  if (!profile) return {};

  return createMetadata({
    title: profile.metadataTitle,
    description: profile.metadataDescription,
    path: profile.path,
  });
}

export default async function JourneyDiscoveryProfilePage({
  params,
}: {
  params: Promise<{ profile: string }>;
}) {
  const { profile: profileSlug } = await params;
  const profile = getJourneyDiscoveryProfile(profileSlug);
  if (!profile) notFound();

  return <JourneyDiscoveryPage profile={profile} />;
}
