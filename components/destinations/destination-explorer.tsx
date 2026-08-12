"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CtaButton } from "@/components/cta";
import type { MediaAsset } from "@/types/component-library";

export type CmsDestinationCard = {
  slug: string;
  name: string;
  region: string;
  kicker: string;
  summary: string;
  recommendedStay: string;
  bestFor: string;
  interests: string[];
  heroImage?: MediaAsset;
  relatedJourneys?: JourneyPanelData[];
};

type DestinationExplorerContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroCopy: string;
  interestEyebrow: string;
  interestTitle: string;
  interestCopy: string;
  journeysEyebrow: string;
  journeysTitle: string;
  journeysCopy: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaCopy: string;
  ctaLabel: string;
};

type JourneyPanelData = {
  title: string;
  route: string;
  duration: string;
  href: string;
  image?: MediaAsset;
};

export function DestinationExplorer({
  content,
  destinations,
  journeys,
}: {
  content: DestinationExplorerContent;
  destinations: CmsDestinationCard[];
  journeys: JourneyPanelData[];
}) {
  return (
    <div className="bg-[#f7f7f3] text-[#1b1c19]">
      <section className="mx-auto max-w-6xl px-5 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-[#607868] uppercase">
          {content.heroEyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[0.98] md:text-7xl">
          {content.heroTitle}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-[#1b1c19]/65 md:text-lg">
          {content.heroCopy}
        </p>
        <CtaButton href="/start-planning?source=destinations" className="mt-8">
          Start planning
        </CtaButton>
      </section>

      <section
        id="all-destinations"
        className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 md:pb-32 lg:px-8"
      >
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#607868] uppercase">
            {content.interestEyebrow}
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            {content.interestTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-[#1b1c19]/60">{content.interestCopy}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>
      </section>

      {journeys.length > 0 ? (
        <section className="border-y border-black/8 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#607868] uppercase">
                {content.journeysEyebrow}
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                {content.journeysTitle}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#1b1c19]/60">{content.journeysCopy}</p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {journeys.slice(0, 2).map((journey) => (
                <Link
                  key={journey.href}
                  href={journey.href}
                  className="group border border-black/10 p-6 transition hover:border-[#607868]"
                >
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#607868] uppercase">
                    {journey.duration} · {journey.route}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">{journey.title}</h3>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                    View journey{" "}
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="flex flex-col gap-7 border-t border-black/10 pt-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#607868] uppercase">
              {content.ctaEyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-5xl">
              {content.ctaTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#1b1c19]/60">
              {content.ctaCopy}
            </p>
          </div>
          <CtaButton href="/start-planning?source=destinations" size="lg">
            {content.ctaLabel}
          </CtaButton>
        </div>
      </section>
    </div>
  );
}

function DestinationCard({ destination }: { destination: CmsDestinationCard }) {
  return (
    <Link href={`/destinations/${destination.slug}`} className="group block">
      <span className="relative block aspect-[4/3] overflow-hidden border border-black/10 bg-[#eceee9]">
        <Image
          src={destination.heroImage?.src ?? "/home/beijing-forbidden-city-1400.webp"}
          alt={destination.heroImage?.alt ?? `${destination.name} destination guide`}
          fill
          sizes="(min-width:1024px) 23vw, (min-width:640px) 46vw, 100vw"
          className="object-contain p-2 transition duration-500 group-hover:scale-[1.02]"
          style={{ objectPosition: destination.heroImage?.objectPosition }}
        />
      </span>
      <span className="block pt-4">
        <span className="text-xs font-semibold tracking-[0.14em] text-[#607868] uppercase">
          {destination.kicker}
        </span>
        <span className="mt-2 flex items-center justify-between gap-3 text-xl font-semibold">
          {destination.name}
          <ArrowRight className="size-4 shrink-0 transition group-hover:translate-x-1" />
        </span>
        <span className="mt-2 block text-sm leading-6 text-[#1b1c19]/60">
          {destination.summary}
        </span>
        <span className="mt-3 block text-xs font-semibold text-[#1b1c19]/45">
          {destination.recommendedStay} · {destination.bestFor}
        </span>
      </span>
    </Link>
  );
}
