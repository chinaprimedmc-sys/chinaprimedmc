"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";

import { CtaButton } from "@/components/cta";
import { cn } from "@/lib/utils/cn";
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
};

type DestinationExplorerContent = {
  heroEyebrow: string;
  heroTitle: string;
  heroCopy: string;
  heroImage?: MediaAsset;
  interestEyebrow: string;
  interestTitle: string;
  interestCopy: string;
  interests: Array<{ id: string; label: string; note: string; image?: MediaAsset }>;
  featuredEyebrow: string;
  featuredTitle: string;
  featuredCopy: string;
  regionsEyebrow: string;
  regionsTitle: string;
  regionsCopy: string;
  regions: Array<{ id: string; label: string; note: string }>;
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
  const [interest, setInterest] = useState<string | "all">("all");
  const filmstrip = useRef<HTMLDivElement>(null);

  const featured = useMemo(
    () =>
      interest === "all"
        ? destinations
        : destinations.filter((destination) => destination.interests.includes(interest)),
    [destinations, interest],
  );

  function chooseInterest(id: string) {
    setInterest(id);
    window.setTimeout(() => filmstrip.current?.scrollIntoView({ behavior: "smooth" }), 100);
  }

  return (
    <div className="bg-[#f7f7f3] text-[#1b1c19]">
      <section data-hero-layout="true" className="relative isolate min-h-svh overflow-hidden">
        <Image
          src={content.heroImage?.src ?? "/home/beijing-forbidden-city-1400.webp"}
          alt={
            content.heroImage?.alt ?? "Imperial rooftops in Beijing opening a journey across China"
          }
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center motion-safe:animate-[destination-hero-breathe_16s_ease-out_both]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,247,243,.98)_0%,rgba(247,247,243,.88)_38%,rgba(247,247,243,.3)_67%,transparent_88%),linear-gradient(0deg,rgba(247,247,243,.48)_0%,transparent_42%)] max-md:bg-[linear-gradient(0deg,rgba(247,247,243,.98)_0%,rgba(247,247,243,.82)_42%,rgba(247,247,243,.08)_74%)]" />
        <div className="relative mx-auto flex min-h-svh max-w-[92rem] items-end px-5 pb-16 sm:px-6 md:items-center md:pb-0 lg:px-8">
          <div className="max-w-3xl pt-28 motion-safe:animate-[destination-copy-reveal_.9s_var(--motion-ease-out)_both]">
            <p className="text-xs font-semibold tracking-[0.24em] text-[#607868] uppercase">
              {content.heroEyebrow}
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-[clamp(3.25rem,7.6vw,7.75rem)] leading-[0.86] font-medium tracking-[0.01em] text-balance">
              {content.heroTitle}
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#1b1c19]/68 md:text-lg md:leading-8">
              {content.heroCopy}
            </p>
            <a
              href="#interests"
              className="mt-9 inline-flex items-center gap-3 text-sm font-semibold"
            >
              Begin exploring <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="interests" className="mx-auto max-w-[92rem] px-5 py-24 sm:px-6 md:py-28 lg:px-8">
        <SectionIntro
          eyebrow={content.interestEyebrow}
          title={content.interestTitle}
          description={content.interestCopy}
        />
        <div className="mt-12 grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {content.interests.map((item, index) => {
            const image = item.image;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => chooseInterest(item.id)}
                className={cn(
                  "group text-left focus-visible:ring-2 focus-visible:ring-[#607868] focus-visible:outline-none",
                  interest === item.id && "text-[#496253]",
                )}
              >
                <span className="relative block aspect-[3/2] overflow-hidden rounded-[1.5rem] border border-black/8 bg-[#eceee9] shadow-[0_18px_50px_rgba(27,28,25,.07)]">
                  <Image
                    src={
                      image?.src ??
                      content.heroImage?.src ??
                      "/home/beijing-forbidden-city-1400.webp"
                    }
                    alt={image?.alt ?? item.label}
                    fill
                    sizes="(min-width:1024px) 31vw, (min-width:640px) 48vw, 100vw"
                    className="object-cover transition duration-700 ease-[var(--motion-ease-out)] group-hover:scale-[1.045]"
                    style={{ objectPosition: image?.objectPosition }}
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/12 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full border border-white/80 bg-white/74 px-3 py-2 text-xs font-semibold tracking-[0.16em] text-[#607868] backdrop-blur-xl">
                    0{index + 1}
                  </span>
                </span>
                <span className="block px-1 pt-5">
                  <span className="block text-2xl font-semibold">{item.label}</span>
                  <span className="mt-2 block text-sm leading-6 text-[#1b1c19]/58">
                    {item.note}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section
        ref={filmstrip}
        id="featured-destinations"
        className="overflow-hidden border-y border-black/8 bg-[#e9ede9] py-24 md:py-28"
      >
        <div className="mx-auto max-w-[92rem] px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow={content.featuredEyebrow}
            title={
              interest === "all"
                ? content.featuredTitle
                : `${featured.length} places that match your curiosity.`
            }
            description={content.featuredCopy}
          />
        </div>
        <div className="mt-12 flex snap-x snap-mandatory [scrollbar-width:none] gap-5 overflow-x-auto px-[max(1.25rem,calc((100vw-92rem)/2+2rem))] pb-8">
          {featured.map((destination) => (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              className="group relative aspect-[4/5] w-[82vw] max-w-[31rem] shrink-0 snap-center overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-[0_22px_70px_rgba(27,28,25,.12)] transition duration-500 md:w-[42vw] lg:w-[34vw] lg:snap-always lg:hover:-translate-y-2 lg:hover:scale-[1.015]"
            >
              <Image
                src={
                  destination.heroImage?.src ??
                  content.heroImage?.src ??
                  "/home/beijing-forbidden-city-1400.webp"
                }
                alt={destination.heroImage?.alt ?? destination.name}
                fill
                sizes="(min-width:1024px) 34vw, (min-width:768px) 42vw, 82vw"
                className="object-cover transition duration-[900ms] group-hover:scale-[1.055]"
                style={{ objectPosition: destination.heroImage?.objectPosition }}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/5 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">
                <span className="text-xs font-semibold tracking-[0.18em] text-white/68 uppercase">
                  {destination.kicker}
                </span>
                <span className="mt-3 block font-serif text-4xl md:text-5xl">
                  {destination.name}
                </span>
                <span className="mt-4 block max-w-sm text-sm leading-6 text-white/76">
                  {destination.summary}
                </span>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  Explore destination{" "}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section
        id="all-destinations"
        className="mx-auto max-w-[92rem] px-5 py-24 sm:px-6 md:py-32 lg:px-8"
      >
        <SectionIntro
          eyebrow={content.regionsEyebrow}
          title={content.regionsTitle}
          description={content.regionsCopy}
        />
        <div className="mt-14 grid gap-16">
          {content.regions.map((region, regionIndex) => {
            const cities = destinations.filter((destination) => destination.region === region.id);
            return (
              <section
                key={region.id}
                id={region.id}
                className="grid gap-7 border-t border-black/10 pt-8 lg:grid-cols-[.55fr_1.45fr]"
              >
                <div className="lg:sticky lg:top-28 lg:self-start">
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#607868]">
                    0{regionIndex + 1}
                  </p>
                  <h2 className="mt-4 max-w-sm font-serif text-4xl leading-tight md:text-5xl">
                    {region.label}
                  </h2>
                  <p className="mt-4 max-w-sm text-sm leading-6 text-[#1b1c19]/55">{region.note}</p>
                </div>
                <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2">
                  {cities.map((destination) => (
                    <DestinationCard key={destination.slug} destination={destination} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="border-y border-black/8 bg-white py-24 md:py-28">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow={content.journeysEyebrow}
            title={content.journeysTitle}
            description={content.journeysCopy}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {journeys.map((journey) => (
              <JourneyPanel
                key={journey.href}
                {...journey}
                eyebrow={`${journey.duration} · ${journey.route}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-[#607868]/16 bg-[radial-gradient(circle_at_top_right,rgba(183,150,93,.16),transparent_40%),#dfe8e0] p-7 shadow-[0_22px_70px_rgba(63,83,68,.1)] md:grid-cols-[1fr_auto] md:items-end md:p-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#607868] uppercase">
              {content.ctaEyebrow}
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              {content.ctaTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#1b1c19]/62">
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
      <span className="relative block aspect-[3/2] overflow-hidden rounded-[1.4rem] border border-black/8 bg-[#eceee9] shadow-[0_15px_44px_rgba(27,28,25,.07)]">
        <Image
          src={destination.heroImage?.src ?? "/home/beijing-forbidden-city-1400.webp"}
          alt={destination.heroImage?.alt ?? destination.name}
          fill
          sizes="(min-width:1024px) 31vw, (min-width:640px) 45vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.045]"
          style={{ objectPosition: destination.heroImage?.objectPosition }}
        />
      </span>
      <span className="block px-1 pt-5">
        <span className="flex items-start justify-between gap-4">
          <span>
            <span className="text-xs font-semibold tracking-[0.16em] text-[#607868] uppercase">
              {destination.kicker}
            </span>
            <span className="mt-2 block text-2xl font-semibold">{destination.name}</span>
          </span>
          <ArrowRight className="mt-6 size-5 shrink-0 transition group-hover:translate-x-1" />
        </span>
        <span className="mt-3 block text-sm leading-6 text-[#1b1c19]/58">
          {destination.summary}
        </span>
        <span className="mt-3 block text-xs font-semibold text-[#1b1c19]/45">
          {destination.recommendedStay} · {destination.bestFor}
        </span>
      </span>
    </Link>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold tracking-[0.2em] text-[#607868] uppercase">{eyebrow}</p>
      <h2 className="mt-5 font-serif text-4xl leading-[1.02] md:text-6xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-[#1b1c19]/58 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function JourneyPanel({
  href,
  image,
  eyebrow,
  title,
}: {
  href: string;
  image?: MediaAsset;
  eyebrow: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="group relative min-h-[30rem] overflow-hidden rounded-[1.75rem] border border-black/8 shadow-[0_18px_54px_rgba(27,28,25,.08)]"
    >
      <Image
        src={image?.src ?? "/home/beijing-forbidden-city-1400.webp"}
        alt=""
        fill
        sizes="(min-width:1024px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-[1.035]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/54 via-transparent to-transparent" />
      <span className="absolute right-4 bottom-4 left-4 rounded-[1.35rem] border border-white/85 bg-white/82 p-6 text-[#1b1c19] shadow-[0_18px_50px_rgba(27,28,25,.14)] backdrop-blur-xl md:p-7">
        <span className="text-xs font-semibold tracking-[0.16em] text-[#607868] uppercase">
          {eyebrow}
        </span>
        <span className="mt-3 block max-w-lg text-3xl font-semibold md:text-4xl">{title}</span>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
          Explore journey <ArrowRight className="size-4 transition group-hover:translate-x-1" />
        </span>
      </span>
    </Link>
  );
}
