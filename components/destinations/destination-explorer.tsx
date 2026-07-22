"use client";

import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const filmstrip = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<number | null>(null);

  const featured = useMemo(
    () =>
      interest === "all"
        ? destinations
        : destinations.filter((destination) => destination.interests.includes(interest)),
    [destinations, interest],
  );

  useEffect(() => {
    if (isPaused || featured.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featured.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [featured.length, isPaused]);

  function chooseInterest(id: string) {
    setInterest(id);
    setActiveIndex(0);
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
        className="overflow-hidden border-y border-white/10 bg-[#151815] py-24 text-white md:py-28"
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
            dark
          />
        </div>
        <DestinationCoverflow
          destinations={featured}
          activeIndex={activeIndex}
          isPaused={isPaused}
          onPauseChange={setIsPaused}
          onSelect={setActiveIndex}
          onPointerStart={(clientX) => {
            pointerStart.current = clientX;
          }}
          onPointerEnd={(clientX) => {
            if (pointerStart.current === null) return;
            const distance = clientX - pointerStart.current;
            if (Math.abs(distance) > 42) {
              setActiveIndex((current) =>
                distance < 0
                  ? (current + 1) % featured.length
                  : (current - 1 + featured.length) % featured.length,
              );
            }
            pointerStart.current = null;
          }}
        />
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
  dark = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  dark?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={cn(
          "text-xs font-semibold tracking-[0.2em] uppercase",
          dark ? "text-[#b8d0bb]" : "text-[#607868]",
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn("mt-5 font-serif text-4xl leading-[1.02] md:text-6xl", dark && "text-white")}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-5 max-w-2xl text-base leading-7 md:text-lg",
          dark ? "text-white/58" : "text-[#1b1c19]/58",
        )}
      >
        {description}
      </p>
    </div>
  );
}

function DestinationCoverflow({
  destinations,
  activeIndex,
  isPaused,
  onPauseChange,
  onSelect,
  onPointerStart,
  onPointerEnd,
}: {
  destinations: CmsDestinationCard[];
  activeIndex: number;
  isPaused: boolean;
  onPauseChange: (paused: boolean) => void;
  onSelect: (index: number) => void;
  onPointerStart: (clientX: number) => void;
  onPointerEnd: (clientX: number) => void;
}) {
  if (!destinations.length) {
    return (
      <p className="mx-auto mt-12 max-w-[92rem] px-5 text-white/60">
        No destinations match this selection yet.
      </p>
    );
  }

  return (
    <div
      className="relative mt-12 touch-pan-y outline-none select-none md:mt-14"
      tabIndex={0}
      aria-label="Featured destinations carousel"
      onMouseEnter={() => onPauseChange(true)}
      onMouseLeave={() => onPauseChange(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          onSelect((activeIndex + 1) % destinations.length);
        }
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          onSelect((activeIndex - 1 + destinations.length) % destinations.length);
        }
      }}
      onPointerDown={(event) => onPointerStart(event.clientX)}
      onPointerUp={(event) => onPointerEnd(event.clientX)}
      onPointerCancel={(event) => onPointerEnd(event.clientX)}
    >
      <div className="relative mx-auto h-[min(72vh,680px)] min-h-[520px] w-full max-w-[96rem] overflow-hidden [perspective:1400px]">
        {destinations.map((destination, index) => {
          const offset = circularOffset(index, activeIndex, destinations.length);
          const distance = Math.abs(offset);
          const visible = distance <= 2;
          const scale = distance === 0 ? 1 : distance === 1 ? 0.78 : 0.62;
          const opacity = distance === 0 ? 1 : distance === 1 ? 0.62 : 0.28;
          const image = destination.heroImage?.src ?? "/home/beijing-forbidden-city-1400.webp";

          return (
            <Link
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              aria-label={`Explore ${destination.name}`}
              aria-hidden={!visible}
              tabIndex={visible ? 0 : -1}
              onClick={(event) => {
                if (distance !== 0) {
                  event.preventDefault();
                  onSelect(index);
                }
              }}
              className={cn(
                "group absolute top-1/2 left-1/2 block aspect-[4/5] w-[min(78vw,35rem)] overflow-hidden rounded-[1.6rem] border border-white/20 bg-[#273028] shadow-[0_30px_90px_rgba(0,0,0,.42)] transition-[transform,opacity,filter] duration-700 ease-[cubic-bezier(.22,.8,.24,1)] will-change-transform focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none md:rounded-[2rem]",
                distance === 0 ? "z-20" : distance === 1 ? "z-10" : "z-0",
                !visible && "pointer-events-none",
              )}
              style={{
                opacity,
                filter: distance === 0 ? "saturate(1)" : "saturate(.65) brightness(.72)",
                transform: `translate(calc(-50% + ${offset} * clamp(13rem, 29vw, 28rem)), -50%) scale(${scale}) rotateY(${offset * -12}deg)`,
              }}
            >
              <Image
                src={image}
                alt={destination.heroImage?.alt ?? destination.name}
                fill
                sizes="(min-width:1024px) 38vw, 78vw"
                className="object-cover transition duration-[1200ms] ease-[var(--motion-ease-out)] group-hover:scale-[1.04]"
                style={{ objectPosition: destination.heroImage?.objectPosition }}
              />
              <span className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/8 to-black/8" />
              <span className="absolute inset-x-0 bottom-0 p-6 text-white md:p-9">
                <span className="text-xs font-semibold tracking-[0.18em] text-white/68 uppercase">
                  {destination.kicker}
                </span>
                <span className="mt-3 block font-serif text-4xl leading-none md:text-6xl">
                  {destination.name}
                </span>
                <span className="mt-4 block max-w-md text-sm leading-6 text-white/76 md:text-base">
                  {destination.summary}
                </span>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">
                  {distance === 0 ? "Explore destination" : "Bring to centre"}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </span>
            </Link>
          );
        })}
      </div>
      <div className="mx-auto flex max-w-[96rem] items-center justify-between gap-6 px-5 md:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-white/48 uppercase">
          {String(activeIndex + 1).padStart(2, "0")} /{" "}
          {String(destinations.length).padStart(2, "0")} · {destinations[activeIndex]?.name}
        </p>
        <div className="flex items-center gap-2" aria-label="Choose featured destination">
          {destinations.map((destination, index) => (
            <button
              key={destination.slug}
              type="button"
              aria-label={`Show ${destination.name}`}
              aria-current={index === activeIndex ? "true" : undefined}
              onClick={() => onSelect(index)}
              className={cn(
                "h-1 rounded-full transition-all duration-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none",
                index === activeIndex ? "w-10 bg-white" : "w-2 bg-white/25 hover:bg-white/60",
              )}
            />
          ))}
        </div>
        <p className="hidden text-xs tracking-[0.14em] text-white/38 uppercase md:block">
          {isPaused ? "Paused" : "Auto exploring"} · Drag or use arrows
        </p>
      </div>
    </div>
  );
}

function circularOffset(index: number, activeIndex: number, total: number) {
  let offset = index - activeIndex;
  if (offset > total / 2) offset -= total;
  if (offset < -total / 2) offset += total;
  return offset;
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
