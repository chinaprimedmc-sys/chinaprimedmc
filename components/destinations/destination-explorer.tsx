"use client";

import { ArrowDown, ArrowLeft, ArrowRight, Check, MapPin, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import { CtaButton } from "@/components/cta";
import {
  destinationInterestImages,
  destinationInterests,
  destinationRegions,
  explorerDestinations,
  type DestinationInterest,
  type DestinationRegion,
} from "@/content/destinations/explorer";
import { cn } from "@/lib/utils/cn";

const MAX_SHORTLIST = 3;

export function DestinationExplorer() {
  const [interest, setInterest] = useState<DestinationInterest | "all">("all");
  const [activeRegion, setActiveRegion] = useState<DestinationRegion>(destinationRegions[0].id);
  const [activeCity, setActiveCity] = useState(0);
  const [shortlist, setShortlist] = useState<string[]>([]);
  const regionSection = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = JSON.parse(
          window.localStorage.getItem("aviora-destination-shortlist") ?? "[]",
        );
        if (Array.isArray(saved)) setShortlist(saved.slice(0, MAX_SHORTLIST));
      } catch {
        // A private browsing context can make storage unavailable.
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const matched = useMemo(
    () =>
      interest === "all"
        ? explorerDestinations
        : explorerDestinations.filter((destination) => destination.interests.includes(interest)),
    [interest],
  );

  const regional = useMemo(
    () => explorerDestinations.filter((destination) => destination.region === activeRegion),
    [activeRegion],
  );

  const gallery = matched.length ? matched : explorerDestinations;
  const current = gallery[activeCity % gallery.length];
  const savedDestinations = shortlist
    .map((id) => explorerDestinations.find((destination) => destination.id === id))
    .filter(Boolean);

  function chooseInterest(id: DestinationInterest) {
    setInterest(id);
    setActiveCity(0);
    window.setTimeout(() => regionSection.current?.scrollIntoView({ behavior: "smooth" }), 120);
  }

  function toggleSaved(id: string) {
    setShortlist((currentList) => {
      const next = currentList.includes(id)
        ? currentList.filter((item) => item !== id)
        : currentList.length < MAX_SHORTLIST
          ? [...currentList, id]
          : [...currentList.slice(1), id];
      try {
        window.localStorage.setItem("aviora-destination-shortlist", JSON.stringify(next));
      } catch {
        // Keep the interaction available when storage is blocked.
      }
      return next;
    });
  }

  const planningQuery = encodeURIComponent(savedDestinations.map((item) => item?.name).join(", "));

  return (
    <div className="bg-[#f7f7f3] text-[#1b1c19]">
      <section data-hero-layout="true" className="relative isolate min-h-svh overflow-hidden">
        <Image
          src="/home/beijing-forbidden-city-1400.webp"
          alt="Imperial rooftops in Beijing opening a journey across China"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,247,243,.98)_0%,rgba(247,247,243,.88)_38%,rgba(247,247,243,.3)_67%,transparent_88%),linear-gradient(0deg,rgba(247,247,243,.48)_0%,transparent_42%)] max-md:bg-[linear-gradient(0deg,rgba(247,247,243,.98)_0%,rgba(247,247,243,.82)_42%,rgba(247,247,243,.08)_74%)]" />
        <div className="relative mx-auto flex min-h-svh max-w-[92rem] items-end px-5 pb-16 sm:px-6 md:items-center md:pb-0 lg:px-8">
          <div className="max-w-3xl pt-28">
            <p className="text-xs font-semibold tracking-[0.24em] text-[#607868] uppercase">
              Explore China by feeling
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-[clamp(3.25rem,7.6vw,7.75rem)] leading-[0.86] font-medium tracking-[0.01em] text-balance">
              Where in China would you like to begin?
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-[#1b1c19]/68 md:text-lg md:leading-8">
              Start with what moves you. We will translate that instinct into places, pacing and a
              private route that makes sense.
            </p>
            <a
              href="#interests"
              className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-[#1b1c19]"
            >
              Discover your China <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section
        id="interests"
        className="mx-auto min-h-svh max-w-[92rem] px-5 py-24 sm:px-6 md:py-28 lg:px-8"
      >
        <SectionIntro
          eyebrow="01 · Follow your curiosity"
          title="What draws you to China?"
          description="You do not need to know the map. Choose the experience you want to feel first."
        />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {destinationInterests.map((item, index) => {
            const image = destinationInterestImages[item.id];
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => chooseInterest(item.id)}
                className={cn(
                  "group relative isolate min-h-[17rem] overflow-hidden rounded-[1.75rem] border bg-white text-left shadow-[0_18px_50px_rgba(27,28,25,.07)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_64px_rgba(27,28,25,.12)] focus-visible:ring-2 focus-visible:ring-[#607868] focus-visible:outline-none",
                  interest === item.id
                    ? "border-[#607868] ring-2 ring-[#607868]/18"
                    : "border-black/8",
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width:1024px) 31vw, (min-width:640px) 48vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  style={{ objectPosition: image.objectPosition }}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent" />
                <span className="absolute inset-x-3 bottom-3 rounded-[1.25rem] border border-white/80 bg-white/78 p-5 text-[#1b1c19] shadow-[0_14px_38px_rgba(27,28,25,.1)] backdrop-blur-xl">
                  <span className="flex items-center justify-between text-xs font-semibold tracking-[0.18em] text-[#607868]">
                    0{index + 1}
                    {interest === item.id ? <Check className="size-4" aria-hidden="true" /> : null}
                  </span>
                  <span className="mt-2 block text-2xl font-semibold">{item.label}</span>
                  <span className="mt-2 block max-w-xs text-sm leading-6 text-[#1b1c19]/60">
                    {item.note}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section
        ref={regionSection}
        id="regions"
        className="min-h-svh border-y border-black/8 bg-[#eceee9] py-24 md:py-28"
      >
        <div className="mx-auto max-w-[92rem] px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="02 · Read the country"
            title="Five regions. Five different Chinas."
            description={
              interest === "all"
                ? "Move across the country by character, not by a list of city names."
                : `${matched.length} places match your interest. Now see where they sit within the wider country.`
            }
          />
          <div className="mt-10 flex [scrollbar-width:none] gap-2 overflow-x-auto pb-3">
            {destinationRegions.map((region) => (
              <button
                key={region.id}
                type="button"
                onClick={() => setActiveRegion(region.id)}
                className={cn(
                  "shrink-0 rounded-full border px-5 py-3 text-sm font-semibold transition",
                  activeRegion === region.id
                    ? "border-[#607868] bg-[#607868] text-white shadow-[0_10px_28px_rgba(96,120,104,.2)]"
                    : "border-black/10 bg-white/65 text-[#1b1c19]/60 hover:border-[#607868]/45 hover:bg-white hover:text-[#1b1c19]",
                )}
              >
                {region.label}
              </button>
            ))}
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-[0.7fr_1.3fr] md:items-stretch">
            <div className="flex flex-col justify-between rounded-[2rem] border border-white/90 bg-white/72 p-7 shadow-[0_22px_70px_rgba(27,28,25,.06)] backdrop-blur-xl md:p-9">
              <div>
                <MapPin className="size-5 text-[#607868]" aria-hidden="true" />
                <p className="mt-8 text-sm text-[#1b1c19]/48">
                  {destinationRegions.find((region) => region.id === activeRegion)?.note}
                </p>
                <h2 className="mt-3 font-serif text-4xl md:text-6xl">
                  {destinationRegions.find((region) => region.id === activeRegion)?.label}
                </h2>
              </div>
              <p className="mt-12 text-sm leading-6 text-[#1b1c19]/55">
                Choose a place to make it the focus of the next chapter. Save up to three for a
                personal comparison.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {regional.map((destination) => (
                <button
                  key={destination.id}
                  type="button"
                  onClick={() => {
                    setInterest("all");
                    setActiveCity(
                      explorerDestinations.findIndex((item) => item.id === destination.id),
                    );
                    document.querySelector("#city-focus")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group flex min-h-40 flex-col justify-between rounded-[1.5rem] border border-black/8 bg-white/62 p-6 text-left shadow-[0_12px_38px_rgba(27,28,25,.035)] transition hover:-translate-y-0.5 hover:border-[#607868]/35 hover:bg-white hover:shadow-[0_18px_46px_rgba(27,28,25,.08)]"
                >
                  <span className="text-xs font-semibold tracking-[0.17em] text-[#607868] uppercase">
                    {destination.kicker}
                  </span>
                  <span>
                    <span className="block text-2xl font-semibold">{destination.name}</span>
                    <span className="mt-2 block text-sm leading-6 text-[#1b1c19]/52">
                      {destination.stay} · {destination.bestFor}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="city-focus" className="relative min-h-svh overflow-hidden">
        <Image
          key={current.id}
          src={current.image.src}
          alt={current.image.alt}
          fill
          unoptimized
          sizes="100vw"
          className="animate-[fade-in_.7s_ease-out] object-cover"
          style={{ objectPosition: current.image.objectPosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(18,22,19,.28)_0%,transparent_50%)]" />
        <div className="relative mx-auto flex min-h-svh max-w-[92rem] items-end px-5 py-20 sm:px-6 md:items-center lg:px-8">
          <div className="mb-20 max-w-2xl rounded-[2rem] border border-white/85 bg-white/82 p-6 text-[#1b1c19] shadow-[0_24px_80px_rgba(17,24,19,.18)] backdrop-blur-2xl md:mb-0 md:p-9">
            <p className="text-xs font-semibold tracking-[0.2em] text-[#607868] uppercase">
              03 · {current.kicker}
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-none md:text-8xl">{current.name}</h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#1b1c19]/68 md:text-lg md:leading-8">
              {current.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-2 text-sm text-[#1b1c19]/66">
              <span className="rounded-full border border-black/8 bg-white/68 px-4 py-2 shadow-sm backdrop-blur-md">
                {current.stay}
              </span>
              <span className="rounded-full border border-black/8 bg-white/68 px-4 py-2 shadow-sm backdrop-blur-md">
                {current.bestFor}
              </span>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              {current.guideHref ? (
                <CtaButton href={current.guideHref} size="sm">
                  Explore city guide
                </CtaButton>
              ) : (
                <CtaButton
                  href={`/start-planning?destination=${encodeURIComponent(current.name)}&source=destinations`}
                  size="sm"
                >
                  Plan this destination
                </CtaButton>
              )}
              <button
                type="button"
                onClick={() => toggleSaved(current.id)}
                className={cn(
                  "inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold shadow-sm backdrop-blur-lg transition hover:-translate-y-0.5",
                  shortlist.includes(current.id)
                    ? "border-[#607868] bg-[#607868] text-white"
                    : "border-black/10 bg-white/72 text-[#1b1c19] hover:bg-white",
                )}
              >
                {shortlist.includes(current.id) ? (
                  <Check className="size-4" />
                ) : (
                  <Plus className="size-4" />
                )}{" "}
                {shortlist.includes(current.id) ? "Saved" : "Save to shortlist"}
              </button>
            </div>
          </div>
          <div className="absolute right-5 bottom-20 flex items-center gap-3 sm:right-6 md:bottom-6 lg:right-8">
            <span className="mr-2 rounded-full border border-white/75 bg-white/72 px-3 py-2 text-xs text-[#1b1c19]/58 shadow-sm backdrop-blur-xl">
              {String((activeCity % gallery.length) + 1).padStart(2, "0")} /{" "}
              {String(gallery.length).padStart(2, "0")}
            </span>
            <GalleryButton
              label="Previous city"
              onClick={() =>
                setActiveCity((value) => (value - 1 + gallery.length) % gallery.length)
              }
            >
              <ArrowLeft className="size-4" />
            </GalleryButton>
            <GalleryButton
              label="Next city"
              onClick={() => setActiveCity((value) => (value + 1) % gallery.length)}
            >
              <ArrowRight className="size-4" />
            </GalleryButton>
          </div>
        </div>
      </section>

      <section
        id="shortlist"
        className="mx-auto min-h-[80svh] max-w-[92rem] px-5 py-24 sm:px-6 md:py-28 lg:px-8"
      >
        <SectionIntro
          eyebrow="04 · Your China"
          title="Keep the places that stay with you."
          description="Save up to three destinations. We will use the combination to shape a route with realistic connections and pacing."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((index) => {
            const destination = savedDestinations[index];
            return destination ? (
              <article
                key={destination.id}
                className="relative min-h-72 overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-[0_18px_48px_rgba(27,28,25,.11)]"
              >
                <Image
                  src={destination.image.src}
                  alt={destination.image.alt}
                  fill
                  sizes="(min-width:768px) 33vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: destination.image.objectPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/10" />
                <button
                  type="button"
                  onClick={() => toggleSaved(destination.id)}
                  className="absolute top-4 right-4 grid size-10 place-items-center rounded-full border border-white/85 bg-white/78 text-[#1b1c19] shadow-sm backdrop-blur-lg transition hover:bg-white"
                  aria-label={`Remove ${destination.name}`}
                >
                  <X className="size-4" />
                </button>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs text-white/55">0{index + 1}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{destination.name}</h3>
                  <p className="mt-2 text-sm text-white/65">
                    {destination.kicker} · {destination.stay}
                  </p>
                </div>
              </article>
            ) : (
              <button
                key={index}
                type="button"
                onClick={() =>
                  document.querySelector("#city-focus")?.scrollIntoView({ behavior: "smooth" })
                }
                className="grid min-h-72 place-items-center rounded-[1.75rem] border border-dashed border-[#607868]/28 bg-white/46 text-center text-[#607868]/58 transition hover:border-[#607868]/60 hover:bg-white hover:text-[#607868]"
              >
                <span>
                  <Plus className="mx-auto size-5" />
                  <span className="mt-3 block text-sm">Add a destination</span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="border-y border-black/8 bg-white py-24 md:py-28">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="05 · Journeys that connect"
            title="Turn places into a journey."
            description="These existing private journeys show how destinations can connect. Every route remains adjustable around your dates and travelers."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <JourneyPanel
              href="/tours/first-china-beautifully-paced"
              image="/tours/first-china-beautifully-paced/beijing-great-wall-wide.webp"
              eyebrow="9 days · Beijing · Xi'an · Shanghai"
              title="First China: Beijing, Xi'an & Shanghai"
            />
            <JourneyPanel
              href="/tours/chengdu-pandas-sichuan-table"
              image="/tours/chengdu-pandas/chengdu-hero-panda.webp"
              eyebrow="Private Sichuan journey"
              title="Chengdu: Pandas, Food & Local Life"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] border border-[#607868]/16 bg-[radial-gradient(circle_at_top_right,rgba(183,150,93,.16),transparent_40%),#dfe8e0] p-7 shadow-[0_22px_70px_rgba(63,83,68,.1)] md:grid-cols-[1fr_auto] md:items-end md:p-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#607868] uppercase">
              06 · Designed around you
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
              Your route should feel inevitable, not assembled.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#1b1c19]/62">
              Tell us what interested you, who is traveling and how much time you have. A China
              specialist will turn those signals into a considered private proposal.
            </p>
          </div>
          <CtaButton
            href={`/start-planning?destination=${planningQuery}&source=destinations-shortlist`}
            size="lg"
          >
            Shape my China journey
          </CtaButton>
        </div>
      </section>

      <section
        aria-labelledby="all-destinations-title"
        className="border-t border-black/8 bg-[#f0f1ed] px-5 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-[92rem]">
          <h2
            id="all-destinations-title"
            className="text-xs font-semibold tracking-[0.2em] text-[#607868] uppercase"
          >
            All destination directions
          </h2>
          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
            {explorerDestinations.map((destination) =>
              destination.guideHref ? (
                <Link
                  key={destination.id}
                  href={destination.guideHref}
                  className="text-sm text-[#1b1c19]/65 transition hover:text-[#607868]"
                >
                  {destination.name}
                </Link>
              ) : (
                <a
                  key={destination.id}
                  href={`#city-focus`}
                  onClick={() => {
                    setInterest("all");
                    setActiveCity(
                      explorerDestinations.findIndex((item) => item.id === destination.id),
                    );
                  }}
                  className="text-sm text-[#1b1c19]/48 transition hover:text-[#607868]"
                >
                  {destination.name}
                </a>
              ),
            )}
          </div>
        </div>
      </section>
    </div>
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

function GalleryButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid size-11 place-items-center rounded-full border border-white/85 bg-white/78 text-[#1b1c19] shadow-[0_10px_28px_rgba(27,28,25,.13)] backdrop-blur-xl transition hover:scale-105 hover:bg-white"
    >
      {children}
    </button>
  );
}

function JourneyPanel({
  href,
  image,
  eyebrow,
  title,
}: {
  href: string;
  image: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="group relative min-h-[28rem] overflow-hidden rounded-[1.75rem] border border-black/8 bg-[#f0f1ed] shadow-[0_18px_54px_rgba(27,28,25,.08)]"
    >
      <Image
        src={image}
        alt=""
        fill
        sizes="(min-width:1024px) 50vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-[1.035]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-white/65 via-transparent to-transparent" />
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
