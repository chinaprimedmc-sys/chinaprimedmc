"use client";

import { ArrowRight, Clock3 } from "lucide-react";
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
  const beijing = destinations.find((destination) => destination.slug === "beijing");
  const shanghai = destinations.find((destination) => destination.slug === "shanghai");

  return (
    <div className="bg-[#f4f3ee] text-[#1b1c19]">
      <section className="mx-auto grid w-full max-w-[90rem] items-center gap-12 overflow-hidden px-5 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24 lg:min-h-[52rem] lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-8">
        <div className="max-w-xl min-w-0">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#516657] uppercase">
            {content.heroEyebrow}
          </p>
          <h1 className="mt-6 max-w-full font-serif text-[2.75rem] leading-[1.02] sm:text-6xl sm:text-balance lg:text-[4.75rem]">
            {content.heroTitle}
          </h1>
          <p className="mt-7 max-w-lg text-base leading-7 text-[#1b1c19]/65 md:text-lg md:leading-8">
            {content.heroCopy}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <CtaButton href="/start-planning?source=destinations">Start planning</CtaButton>
            <a
              href="#all-destinations"
              className="group inline-flex items-center gap-2 text-sm font-semibold"
            >
              Explore destination guides{" "}
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div
          className="grid min-w-0 grid-cols-1 items-end gap-3 sm:grid-cols-[minmax(0,1.35fr)_minmax(0,.65fr)] sm:gap-5"
          aria-label="A glimpse of China"
        >
          <EditorialImage destination={beijing} aspect="aspect-video" priority />
          <div className="hidden min-w-0 sm:block">
            <EditorialImage destination={shanghai} aspect="aspect-[3/4]" priority />
          </div>
        </div>
      </section>

      <section
        id="all-destinations"
        className="border-t border-black/8 bg-[#fbfaf7] py-20 md:py-28"
      >
        <div className="mx-auto max-w-[84rem] px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 border-b border-black/10 pb-10 md:grid-cols-[.75fr_1.25fr] md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#516657] uppercase">
                {content.interestEyebrow}
              </p>
              <h2 className="mt-4 max-w-lg font-serif text-4xl leading-[1.02] sm:text-5xl">
                {content.interestTitle}
              </h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-[#1b1c19]/60 md:justify-self-end">
              {content.interestCopy}
            </p>
          </div>

          <div className="mt-14 grid gap-x-12 gap-y-20 md:grid-cols-2 lg:gap-x-20 lg:gap-y-28">
            {destinations.map((destination, index) => (
              <DestinationFeature key={destination.slug} destination={destination} index={index} />
            ))}
          </div>
        </div>
      </section>

      {journeys.length > 0 ? (
        <section className="bg-[#20372c] py-20 text-white md:py-28">
          <div className="mx-auto max-w-[84rem] px-5 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-[.75fr_1.25fr] md:items-end">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-[#c4d2c8]/70 uppercase">
                  {content.journeysEyebrow}
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
                  {content.journeysTitle}
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-white/62 md:justify-self-end">
                {content.journeysCopy}
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {journeys.slice(0, 2).map((journey) => (
                <JourneyCard key={journey.href} journey={journey} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[#e4e0d5] py-20 md:py-28">
        <div className="mx-auto grid max-w-[84rem] gap-8 px-5 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#516657] uppercase">
              {content.ctaEyebrow}
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">
              {content.ctaTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#1b1c19]/62">
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

function EditorialImage({
  destination,
  aspect,
  priority = false,
}: {
  destination?: CmsDestinationCard;
  aspect: string;
  priority?: boolean;
}) {
  if (!destination) return <div className={`${aspect} bg-[#dfe2dc]`} />;

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className={`group relative block min-w-0 overflow-hidden bg-[#dfe2dc] ${aspect}`}
    >
      <Image
        src={destination.heroImage?.src ?? "/home/editorial/great-wall-private-china-travel.webp"}
        alt={destination.heroImage?.alt ?? `${destination.name} destination guide`}
        fill
        priority={priority}
        sizes="(min-width:1024px) 43vw, 65vw"
        className="object-contain transition duration-700 group-hover:scale-[1.015]"
      />
      <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-4 pt-12 text-white sm:p-6 sm:pt-16">
        <span className="block text-xs font-semibold tracking-[0.16em] text-white/70 uppercase">
          {destination.kicker}
        </span>
        <span className="mt-1 block font-serif text-2xl sm:text-3xl">{destination.name}</span>
      </span>
    </Link>
  );
}

function DestinationFeature({
  destination,
  index,
}: {
  destination: CmsDestinationCard;
  index: number;
}) {
  const portrait = (destination.heroImage?.height ?? 0) > (destination.heroImage?.width ?? 0);

  return (
    <Link
      href={`/destinations/${destination.slug}`}
      className={`group block ${index % 2 === 1 ? "md:mt-20" : ""}`}
    >
      <span
        className={`relative block overflow-hidden bg-[#e8ebe5] ${portrait ? "aspect-[3/4] md:mx-auto md:w-[78%]" : "aspect-[3/2]"}`}
      >
        <Image
          src={destination.heroImage?.src ?? "/home/editorial/great-wall-private-china-travel.webp"}
          alt={destination.heroImage?.alt ?? `${destination.name} destination guide`}
          fill
          sizes="(min-width:768px) 43vw, 100vw"
          className="object-contain transition duration-700 group-hover:scale-[1.015]"
        />
      </span>
      <span className="mt-5 block border-t border-black/10 pt-5">
        <span className="flex items-center justify-between gap-4">
          <span className="text-xs font-semibold tracking-[0.16em] text-[#516657] uppercase">
            0{index + 1} · {destination.kicker}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1b1c19]/48">
            <Clock3 className="size-3.5" />
            {destination.recommendedStay}
          </span>
        </span>
        <span className="mt-3 flex items-end justify-between gap-4">
          <span className="font-serif text-4xl sm:text-5xl">{destination.name}</span>
          <ArrowRight className="mb-2 size-5 shrink-0 transition group-hover:translate-x-1" />
        </span>
        <span className="mt-4 block max-w-xl text-base leading-7 text-[#1b1c19]/62">
          {destination.summary}
        </span>
        <span className="mt-4 block text-sm font-semibold text-[#516657]">
          Best for: {destination.bestFor}
        </span>
      </span>
    </Link>
  );
}

function JourneyCard({ journey }: { journey: JourneyPanelData }) {
  return (
    <Link href={journey.href} className="group block border-t border-white/22 pt-5">
      {journey.image ? (
        <span className="relative block aspect-[16/9] overflow-hidden bg-white/8">
          <Image
            src={journey.image.src}
            alt={journey.image.alt ?? journey.title}
            fill
            sizes="(min-width:768px) 50vw, 100vw"
            className="object-contain transition duration-700 group-hover:scale-[1.015]"
          />
        </span>
      ) : null}
      <span className="mt-5 flex items-start justify-between gap-5">
        <span>
          <span className="text-xs font-semibold tracking-[0.15em] text-[#c4d2c8]/72 uppercase">
            {journey.duration} · {journey.route}
          </span>
          <span className="mt-3 block max-w-xl text-2xl leading-tight font-semibold sm:text-3xl">
            {journey.title}
          </span>
        </span>
        <ArrowRight className="mt-1 size-5 shrink-0 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
