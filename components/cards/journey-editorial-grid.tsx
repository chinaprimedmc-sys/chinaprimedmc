"use client";

import * as Dialog from "@radix-ui/react-dialog";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { ArrowRight, Bookmark, Check, ChevronDown, Mail, SlidersHorizontal, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, type MouseEvent, type PointerEvent } from "react";

import { WhatsAppIcon } from "@/components/icons";
import { OptimizedImage } from "@/components/media/optimized-image";
import { buttonBaseStyles, buttonSizes, buttonVariants } from "@/components/ui/button-styles";
import { destinationAsset } from "@/content/destinations/assets";
import { firstChinaAsset } from "@/content/tours/assets";
import type {
  JourneyCatalogItem,
  JourneyPlanningNeedId,
  JourneyTravelerId,
} from "@/content/tours/catalog";
import { trackEvent } from "@/lib/analytics/events";
import { cn } from "@/lib/utils/cn";
import type { MediaAsset } from "@/types/component-library";

type JourneyEditorialGridProps = {
  items: JourneyCatalogItem[];
};

type InterestId =
  "first-visit" | "culture" | "landscapes" | "food-local-life" | "family" | "gentler-pace";

type DurationId = "5-7" | "8-10" | "11-14" | "15-plus";

type FilterState = {
  interest: InterestId | null;
  duration: DurationId | null;
  traveler: JourneyTravelerId | null;
  needs: JourneyPlanningNeedId[];
};

type InterestOption = {
  id: InterestId;
  label: string;
  description: string;
  image: MediaAsset;
};

const savedStorageKey = "aviora-saved-journeys";

const emptyFilters: FilterState = {
  interest: null,
  duration: null,
  traveler: null,
  needs: [],
};

const interestOptions: InterestOption[] = [
  {
    id: "first-visit",
    label: "First visit",
    description: "A clear introduction to China's defining places.",
    image: firstChinaAsset.beijingGreatWallWide,
  },
  {
    id: "culture",
    label: "History & culture",
    description: "Imperial capitals, heritage and living traditions.",
    image: destinationAsset.xianTerracotta,
  },
  {
    id: "landscapes",
    label: "Nature & scenery",
    description: "Mountains, valleys, lakes and quieter horizons.",
    image: destinationAsset.jiuzhaigouLake,
  },
  {
    id: "food-local-life",
    label: "Food & local life",
    description: "Regional flavours, markets and everyday culture.",
    image: destinationAsset.chengduTeaHouse,
  },
  {
    id: "family",
    label: "Family journeys",
    description: "Private days shaped around different generations.",
    image: destinationAsset.chengduPanda,
  },
  {
    id: "gentler-pace",
    label: "A gentler pace",
    description: "More room to rest, notice and stay longer.",
    image: destinationAsset.guilinRiver,
  },
];

const durationOptions: Array<{ id: DurationId; label: string; min: number; max: number }> = [
  { id: "5-7", label: "5–7 days", min: 5, max: 7 },
  { id: "8-10", label: "8–10 days", min: 8, max: 10 },
  { id: "11-14", label: "11–14 days", min: 11, max: 14 },
  { id: "15-plus", label: "15+ days", min: 15, max: 365 },
];

const travelerOptions: Array<{ id: JourneyTravelerId; label: string }> = [
  { id: "couples", label: "Couples" },
  { id: "families", label: "Families with children" },
  { id: "multigenerational", label: "Multi-generational" },
  { id: "older-travelers", label: "Older travelers" },
  { id: "private-groups", label: "Small private groups" },
];

const needOptions: Array<{ id: JourneyPlanningNeedId; label: string }> = [
  { id: "muslim-friendly", label: "Muslim-friendly planning" },
  { id: "vegetarian-friendly", label: "Vegetarian-friendly" },
  { id: "child-friendly", label: "Child-friendly days" },
  { id: "mobility-aware", label: "Mobility-aware planning" },
];

export function JourneyEditorialGrid({ items }: JourneyEditorialGridProps) {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [filters, setFilters] = useState<FilterState>(emptyFilters);
  const [refineOpen, setRefineOpen] = useState(false);
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [savedReady, setSavedReady] = useState(false);
  const [transitionItem, setTransitionItem] = useState<JourneyCatalogItem | null>(null);

  const filteredItems = useMemo(
    () => items.filter((item) => matchesFilters(item, filters)),
    [filters, items],
  );
  const savedItems = items.filter((item) => savedSlugs.includes(item.slug));
  const activeFilterCount =
    (filters.interest ? 1 : 0) +
    (filters.duration ? 1 : 0) +
    (filters.traveler ? 1 : 0) +
    filters.needs.length;
  const heroJourney = items[0];

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const parsed = JSON.parse(window.localStorage.getItem(savedStorageKey) ?? "[]");
        const validSlugs = Array.isArray(parsed)
          ? parsed.filter(
              (value): value is string =>
                typeof value === "string" && items.some((item) => item.slug === value),
            )
          : [];
        setSavedSlugs(validSlugs);
      } catch {
        setSavedSlugs([]);
      }
      setSavedReady(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [items]);

  useEffect(() => {
    if (!savedReady) return;
    window.localStorage.setItem(savedStorageKey, JSON.stringify(savedSlugs));
  }, [savedReady, savedSlugs]);

  function toggleSaved(slug: string) {
    const saved = savedSlugs.includes(slug);
    trackEvent(saved ? "journey_unsave" : "save_journey", { journey: slug });
    setSavedSlugs((current) =>
      saved ? current.filter((currentSlug) => currentSlug !== slug) : [...current, slug],
    );
  }

  function toggleNeed(id: JourneyPlanningNeedId) {
    setFilters((current) => ({
      ...current,
      needs: current.needs.includes(id)
        ? current.needs.filter((need) => need !== id)
        : [...current.needs, id],
    }));
  }

  function showResults() {
    document.querySelector<HTMLElement>("#all-private-journeys")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function openJourney(event: MouseEvent<HTMLAnchorElement>, item: JourneyCatalogItem) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    setTransitionItem(item);
    window.setTimeout(() => router.push(item.href), 520);
  }

  return (
    <main className="bg-[#f7f8f4] text-[#171914]">
      <section className="relative isolate flex min-h-[62svh] items-end overflow-hidden border-b border-black/8">
        {heroJourney ? (
          <motion.div
            className="absolute inset-0 -z-20"
            initial={reduceMotion ? false : { scale: 1.04 }}
            animate={reduceMotion ? undefined : { scale: [1.04, 1.075, 1.045] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 19, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
            }
          >
            <OptimizedImage
              src={heroJourney.image.src}
              alt={heroJourney.image.alt}
              fill
              sizes="100vw"
              objectPosition={heroJourney.image.objectPosition}
              priority
              showSkeleton={false}
              frameClassName="absolute inset-0 h-full bg-[#dfe7df]"
              className="h-full w-full brightness-[0.88] saturate-[1.08]"
            />
          </motion.div>
        ) : null}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,20,16,0.78)_0%,rgba(16,20,16,0.58)_48%,rgba(16,20,16,0.18)_100%)] max-md:bg-[linear-gradient(180deg,rgba(16,20,16,0.35),rgba(16,20,16,0.82))]" />
        <div className="mx-auto w-full max-w-[92rem] px-5 pt-32 pb-14 text-white sm:px-6 md:pb-18 lg:px-8">
          <motion.p
            className="text-[0.68rem] font-semibold tracking-[0.2em] text-white/62 uppercase"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            AVIORA private journeys
          </motion.p>
          <motion.h1
            className="mt-5 max-w-5xl font-serif text-[3.4rem] leading-[0.9] font-medium text-balance md:text-[5.25rem] lg:text-[6.5rem]"
            initial={{ opacity: 0, y: 34, clipPath: "inset(0 0 22% 0)" }}
            animate={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            Private journeys through China.
          </motion.h1>
          <motion.div
            className="mt-7 grid max-w-5xl gap-6 border-t border-white/24 pt-6 md:grid-cols-[1fr_auto] md:items-end"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="max-w-2xl text-base leading-7 text-white/76 md:text-lg md:leading-8">
              Explore thoughtfully designed routes, then shape the hotels, daily rhythm and private
              support around your dates and the people travelling with you.
            </p>
            <button
              type="button"
              onClick={() =>
                document.querySelector<HTMLElement>("#journey-browser")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className={cn(
                buttonBaseStyles,
                buttonVariants.lightFrosted,
                buttonSizes.lg,
                "w-full md:w-auto",
              )}
            >
              Browse all journeys
              <ArrowRight size={17} aria-hidden="true" />
            </button>
          </motion.div>
        </div>
      </section>

      <section
        id="journey-browser"
        className="scroll-mt-24 border-b border-black/8 bg-white py-14 md:py-20"
      >
        <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-6 lg:px-8">
          <header className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-[#5f7567] uppercase">
                Find your starting point
              </p>
              <h2 className="mt-4 max-w-4xl font-serif text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.92] font-medium">
                What draws you to China?
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-black/56 md:text-base">
              Begin with the kind of experience you want. Practical preferences are optional, and
              every published journey remains visible until you choose otherwise.
            </p>
          </header>

          <div className="mt-10 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
            {interestOptions.map((option) => {
              const active = filters.interest === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    setFilters((current) => ({
                      ...current,
                      interest: active ? null : option.id,
                    }))
                  }
                  className={cn(
                    "group grid min-h-24 grid-cols-[5.5rem_1fr_auto] items-center gap-4 rounded-lg border p-2 text-left transition-[border-color,background-color,box-shadow,transform] focus-visible:ring-2 focus-visible:ring-[#5f7567] focus-visible:outline-none",
                    active
                      ? "border-[#26352b] bg-[#f0f4ef] shadow-[0_12px_34px_rgba(43,61,49,0.12)]"
                      : "border-black/9 bg-[#fafbf8] hover:-translate-y-0.5 hover:border-[#5f7567]/34 hover:bg-white hover:shadow-[0_12px_32px_rgba(43,61,49,0.08)]",
                  )}
                >
                  <span className="relative h-full min-h-20 overflow-hidden rounded-md">
                    <OptimizedImage
                      src={option.image.src}
                      alt=""
                      fill
                      sizes="88px"
                      objectPosition={option.image.objectPosition}
                      frameClassName="h-full bg-[#dfe7df]"
                      className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </span>
                  <span className="min-w-0 py-2">
                    <span className="block text-base font-semibold">{option.label}</span>
                    <span className="mt-1 block text-xs leading-5 text-black/48">
                      {option.description}
                    </span>
                  </span>
                  <span
                    className={cn(
                      "mr-2 grid size-8 place-items-center rounded-full border",
                      active
                        ? "border-[#26352b] bg-[#26352b] text-white"
                        : "border-black/12 bg-white text-transparent",
                    )}
                  >
                    <Check size={14} aria-hidden="true" />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 rounded-lg border border-black/9 bg-[#f7f9f5]">
            <button
              type="button"
              aria-expanded={refineOpen}
              onClick={() => setRefineOpen((current) => !current)}
              className="flex min-h-16 w-full items-center justify-between gap-4 px-5 text-left md:px-6"
            >
              <span className="flex items-center gap-3">
                <SlidersHorizontal size={17} className="text-[#5f7567]" aria-hidden="true" />
                <span>
                  <span className="text-sm font-semibold">Refine your journey</span>
                  <span className="ml-2 text-xs text-black/42">Optional</span>
                </span>
              </span>
              <span className="flex items-center gap-3 text-xs font-semibold text-black/48">
                {activeFilterCount ? `${activeFilterCount} selected` : "Duration and travel needs"}
                <ChevronDown
                  size={17}
                  aria-hidden="true"
                  className={cn("transition-transform", refineOpen && "rotate-180")}
                />
              </span>
            </button>

            {refineOpen ? (
              <div className="grid gap-8 border-t border-black/8 px-5 py-6 md:px-6 lg:grid-cols-3">
                <FilterGroup title="Duration">
                  {durationOptions.map((option) => {
                    const active = filters.duration === option.id;
                    return (
                      <FilterChip
                        key={option.id}
                        active={active}
                        label={option.label}
                        onClick={() =>
                          setFilters((current) => ({
                            ...current,
                            duration: active ? null : option.id,
                          }))
                        }
                      />
                    );
                  })}
                </FilterGroup>

                <FilterGroup title="Who is travelling?">
                  {travelerOptions.map((option) => {
                    const active = filters.traveler === option.id;
                    return (
                      <FilterChip
                        key={option.id}
                        active={active}
                        label={option.label}
                        onClick={() =>
                          setFilters((current) => ({
                            ...current,
                            traveler: active ? null : option.id,
                          }))
                        }
                      />
                    );
                  })}
                </FilterGroup>

                <FilterGroup title="Travel needs">
                  {needOptions.map((option) => (
                    <FilterChip
                      key={option.id}
                      active={filters.needs.includes(option.id)}
                      label={option.label}
                      onClick={() => toggleNeed(option.id)}
                    />
                  ))}
                  <p className="mt-2 w-full text-xs leading-5 text-black/44">
                    Specific dietary, prayer and mobility arrangements are confirmed for your dates,
                    not assumed from a label.
                  </p>
                </FilterGroup>
              </div>
            ) : null}
          </div>

          <div className="mt-5 flex flex-col gap-4 border-t border-black/8 pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-black/52" aria-live="polite">
              <span className="font-semibold text-[#171914]">{filteredItems.length}</span>{" "}
              {filteredItems.length === 1 ? "private journey" : "private journeys"} shown
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {activeFilterCount ? (
                <button
                  type="button"
                  onClick={() => setFilters(emptyFilters)}
                  className="min-h-11 rounded-full px-4 text-sm font-semibold text-black/52 transition hover:text-black"
                >
                  Clear filters
                </button>
              ) : null}
              <button
                type="button"
                onClick={showResults}
                className={cn(buttonBaseStyles, buttonVariants.primary, buttonSizes.md)}
              >
                View {filteredItems.length || "custom"} journeys
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="all-private-journeys" className="scroll-mt-24 bg-[#f7f8f4] py-14 md:py-20">
        <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-6 lg:px-8">
          <header className="grid gap-5 border-b border-black/10 pb-7 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-[#5f7567] uppercase">
                All private journeys
              </p>
              <h2 className="mt-3 max-w-4xl font-serif text-[2.7rem] leading-[0.94] font-medium md:text-[3.8rem] lg:text-[4.35rem]">
                A starting point, made private.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-black/52">
              No fixed departures and no displayed package price. Every route is adjusted around
              your dates, comfort level and preferred rhythm.
            </p>
          </header>

          {filteredItems.length ? (
            <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-12 xl:gap-x-8 xl:gap-y-14">
              {filteredItems.map((item, index) => (
                <JourneyEditorialCard
                  key={item.slug}
                  item={item}
                  index={index}
                  saved={savedSlugs.includes(item.slug)}
                  onSave={() => toggleSaved(item.slug)}
                  onOpen={(event) => openJourney(event, item)}
                />
              ))}
            </div>
          ) : (
            <NoMatches onReset={() => setFilters(emptyFilters)} />
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#182019] py-16 text-white md:py-24">
        <div className="mx-auto grid w-full max-w-[92rem] gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:px-8">
          <div>
            <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-white/52 uppercase">
              Designed and operated in China
            </p>
            <h2 className="mt-4 max-w-4xl font-serif text-[clamp(3rem,6vw,6rem)] leading-[0.9] font-medium">
              Start with a route. Make it entirely yours.
            </h2>
          </div>
          <div>
            <p className="text-base leading-7 text-white/66">
              Share your dates, travelers and priorities. A China journey specialist will shape the
              right hotels, transport, guiding and daily pace into one clear private proposal.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/start-planning?source=journeys"
                className={cn(
                  buttonBaseStyles,
                  buttonVariants.lightFrosted,
                  buttonSizes.lg,
                  "w-full sm:w-auto",
                )}
              >
                Request a Private Proposal
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
              <a
                href="https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20help%20choosing%20a%20private%20China%20journey."
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonBaseStyles,
                  buttonVariants.whatsappFrosted,
                  buttonSizes.lg,
                  "w-full gap-2 sm:w-auto",
                )}
              >
                <WhatsAppIcon className="size-[18px]" />
                WhatsApp a Specialist
              </a>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-white/14 pt-5 text-xs leading-5 text-white/48">
              <p>Private local support</p>
              <p>No forced shopping</p>
              <p>Licensed China operator</p>
            </div>
          </div>
        </div>
      </section>

      <SavedJourneys items={savedItems} onRemove={(slug) => toggleSaved(slug)} ready={savedReady} />

      <AnimatePresence>
        {transitionItem ? <JourneySheetTransition item={transitionItem} /> : null}
      </AnimatePresence>
    </main>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="text-[0.66rem] font-semibold tracking-[0.14em] text-black/46 uppercase">
        {title}
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">{children}</div>
    </fieldset>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "min-h-10 rounded-full border px-4 text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-[#5f7567] focus-visible:outline-none",
        active
          ? "border-[#26352b] bg-[#26352b] text-white"
          : "border-black/10 bg-white text-black/58 hover:border-[#5f7567]/40 hover:text-black",
      )}
    >
      {label}
    </button>
  );
}

function JourneyEditorialCard({
  item,
  index,
  saved,
  onSave,
  onOpen,
}: {
  item: JourneyCatalogItem;
  index: number;
  saved: boolean;
  onSave: () => void;
  onOpen: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const reduceMotion = useReducedMotion();
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 24, mass: 0.65 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 24, mass: 0.65 });
  const theme = journeyTheme(item);
  const layoutClass = index % 4 === 0 || index % 4 === 3 ? "xl:col-span-7" : "xl:col-span-5";
  const imageClass =
    index % 4 === 0 || index % 4 === 3 ? "aspect-[16/10] xl:aspect-[16/8.6]" : "aspect-[16/10]";

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType === "touch") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const normalizedX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const normalizedY = (event.clientY - bounds.top) / bounds.height - 0.5;
    rotateY.set(normalizedX * 4.4);
    rotateX.set(normalizedY * -3.4);
  }

  function resetTilt() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.article
      className={cn(
        "group relative grid h-full min-w-0 grid-rows-[auto_1fr] will-change-transform",
        layoutClass,
      )}
      style={reduceMotion ? undefined : { rotateX: springX, rotateY: springY, perspective: 1200 }}
      initial={reduceMotion ? false : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
    >
      <span
        className="absolute top-0 right-0 left-0 z-20 h-0.5 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
        style={{ backgroundColor: theme }}
        aria-hidden="true"
      />
      <div className={cn("relative overflow-hidden rounded-lg bg-[#dfe7df]", imageClass)}>
        <Link
          href={item.href}
          aria-label={`Explore ${item.title}`}
          className="block h-full"
          onClick={onOpen}
        >
          <OptimizedImage
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            objectPosition={item.image.objectPosition}
            priority={index < 2}
            frameClassName="h-full"
            className="h-full w-full brightness-[1.03] saturate-[1.08] transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025]"
          />
        </Link>
        <button
          type="button"
          onClick={onSave}
          aria-pressed={saved}
          aria-label={saved ? `Remove ${item.title} from saved journeys` : `Save ${item.title}`}
          className={cn(
            "absolute top-4 right-4 z-20 grid size-11 place-items-center rounded-full border backdrop-blur-xl transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none",
            saved
              ? "border-[#26352b] bg-[#26352b] text-white"
              : "border-white/78 bg-white/76 text-black/68 shadow-sm hover:bg-white",
          )}
        >
          {saved ? (
            <Check size={16} aria-hidden="true" />
          ) : (
            <Bookmark size={16} aria-hidden="true" />
          )}
        </button>
      </div>

      <div className="grid h-full gap-5 border-b border-black/10 py-6 md:grid-cols-[1fr_auto] md:items-end">
        <div className="flex min-w-0 flex-col">
          <p className="text-[0.65rem] font-semibold tracking-[0.12em] text-[#5f7567] uppercase">
            {item.durationLabel} · {item.routeLabel}
          </p>
          <Link href={item.href} onClick={onOpen}>
            <h3 className="mt-3 max-w-3xl font-serif text-[2rem] leading-[1.02] font-medium text-balance md:text-[2.3rem] lg:text-[2.55rem]">
              {item.title}
            </h3>
          </Link>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-black/54">{item.hook}</p>
          <div className="mt-4 flex min-h-8 flex-wrap content-start gap-2">
            {item.styleFilters.slice(0, 3).map((style) => (
              <span
                key={style}
                className="rounded-full border border-black/9 bg-white px-3 py-1.5 text-[0.65rem] font-semibold text-black/46"
              >
                {style}
              </span>
            ))}
          </div>
        </div>
        <Link
          href={item.href}
          onClick={onOpen}
          className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-[#31483a] transition-colors hover:text-black"
        >
          Explore this journey
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </motion.article>
  );
}

function JourneySheetTransition({ item }: { item: JourneyCatalogItem }) {
  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-[#172019] text-white"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: 0 }}
      transition={{ duration: 0.52, ease: [0.65, 0, 0.35, 1] }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.035 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <OptimizedImage
          src={item.image.src}
          alt=""
          fill
          sizes="100vw"
          objectPosition={item.image.objectPosition}
          frameClassName="h-full w-full bg-[#172019]"
          className="h-full w-full brightness-[0.7] saturate-[1.06]"
          showSkeleton={false}
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/24" />
      <div className="relative flex h-full items-end px-5 py-14 sm:px-8 md:py-20 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[0.68rem] font-semibold tracking-[0.18em] text-white/64 uppercase">
            Entering the journey
          </p>
          <p className="mt-4 max-w-5xl font-serif text-[2.8rem] leading-[0.94] text-balance md:text-[5rem]">
            {item.title}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function journeyTheme(item: JourneyCatalogItem) {
  const destination = item.destinationFilters[0];
  const themes: Record<string, string> = {
    Beijing: "#8c684f",
    Chengdu: "#617d63",
    Chongqing: "#966653",
    Jiuzhaigou: "#4f7c82",
    Shanghai: "#62778a",
    "Xi'an": "#8b704f",
    Zhangjiajie: "#506f5c",
  };
  return themes[destination] ?? "#607868";
}

function NoMatches({ onReset }: { onReset: () => void }) {
  return (
    <div className="mt-10 border-y border-black/10 py-16 text-center md:py-24">
      <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-[#5f7567] uppercase">
        A private route may fit better
      </p>
      <h3 className="mx-auto mt-4 max-w-4xl font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.92]">
        We do not have an exact published match.
      </h3>
      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-black/52">
        Clear one preference to see nearby routes, or ask our team to design around the complete
        brief.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={onReset}
          className={cn(buttonBaseStyles, buttonVariants.primary, buttonSizes.md)}
        >
          Show every journey
        </button>
        <Link
          href="/start-planning?source=journey-filter"
          className={cn(buttonBaseStyles, buttonVariants.lightFrosted, buttonSizes.md)}
        >
          Plan around my brief
        </Link>
      </div>
    </div>
  );
}

function SavedJourneys({
  items,
  onRemove,
  ready,
}: {
  items: JourneyCatalogItem[];
  onRemove: (slug: string) => void;
  ready: boolean;
}) {
  const count = ready ? items.length : 0;
  const savedTitles = items.map((item) => item.title);
  const numberedJourneys = savedTitles.map((title, index) => `${index + 1}. ${title}`).join("\n");
  const contactMessage = `Hello AVIORA, I would like to learn more about these saved journeys:\n${numberedJourneys}\n\nCould a China journey specialist explain the differences and help us choose the right starting point?`;
  const whatsappHref = `https://wa.me/447985052302?text=${encodeURIComponent(contactMessage)}`;
  const emailHref = `mailto:chinaprimedmc@gmail.com?subject=${encodeURIComponent(
    "My saved AVIORA journeys",
  )}&body=${encodeURIComponent(contactMessage)}`;
  const planningHref = `/start-planning?source=saved-journeys&journeys=${encodeURIComponent(
    JSON.stringify(savedTitles),
  )}`;

  return (
    <Dialog.Root>
      {count ? (
        <Dialog.Trigger asChild>
          <button
            type="button"
            className="fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+5.75rem)] z-50 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/82 bg-white/82 px-4 text-sm font-semibold text-[#171914] shadow-[0_16px_48px_rgba(42,57,47,0.18)] backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-white focus-visible:ring-2 focus-visible:ring-[#5f7567] focus-visible:outline-none sm:right-6 sm:bottom-6"
            aria-label={`Open saved journeys, ${count} saved`}
          >
            <Bookmark size={16} aria-hidden="true" />
            <span className="hidden sm:inline">Saved</span>
            <span className="grid min-w-6 place-items-center rounded-full bg-[#26352b] px-1.5 py-0.5 text-xs text-white">
              {count}
            </span>
          </button>
        </Dialog.Trigger>
      ) : null}
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-[#172019]/34 backdrop-blur-sm" />
        <Dialog.Content className="fixed top-0 right-0 bottom-0 z-[91] flex w-[min(94vw,30rem)] flex-col border-l border-black/8 bg-[#f7f8f4] p-5 text-[#171914] shadow-[-24px_0_90px_rgba(36,51,41,0.2)] outline-none md:p-7">
          <div className="flex items-start justify-between gap-4 border-b border-black/9 pb-6">
            <div>
              <p className="text-[0.66rem] font-semibold tracking-[0.16em] text-[#5f7567] uppercase">
                Your shortlist
              </p>
              <Dialog.Title className="mt-3 font-serif text-4xl leading-none">
                Saved journeys
              </Dialog.Title>
              <Dialog.Description className="mt-3 text-sm leading-6 text-black/52">
                Open a journey for details or send the complete shortlist to a China specialist.
              </Dialog.Description>
            </div>
            <Dialog.Close
              className="grid size-11 shrink-0 place-items-center rounded-full border border-black/10 bg-white hover:bg-[#edf2ec]"
              aria-label="Close saved journeys"
            >
              <X size={18} aria-hidden="true" />
            </Dialog.Close>
          </div>

          <div className="flex-1 overflow-y-auto py-6">
            {items.length ? (
              <div className="grid gap-3">
                {items.map((item) => (
                  <article
                    key={item.slug}
                    className="grid grid-cols-[5rem_1fr_auto] gap-3 border-b border-black/9 pb-4"
                  >
                    <Link href={item.href} className="group contents">
                      <span className="relative min-h-20 overflow-hidden rounded-md">
                        <OptimizedImage
                          src={item.image.src}
                          alt=""
                          fill
                          sizes="80px"
                          objectPosition={item.image.objectPosition}
                          frameClassName="h-full bg-[#dfe7df]"
                          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </span>
                      <span className="min-w-0 self-center">
                        <span className="block font-serif text-xl leading-none">{item.title}</span>
                        <span className="mt-2 block text-xs text-black/44">
                          {item.durationLabel}
                        </span>
                      </span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => onRemove(item.slug)}
                      className="grid size-9 place-items-center rounded-full text-black/38 hover:bg-white hover:text-black"
                      aria-label={`Remove ${item.title} from saved journeys`}
                    >
                      <X size={15} aria-hidden="true" />
                    </button>
                  </article>
                ))}
              </div>
            ) : (
              <div className="grid min-h-64 place-items-center border-y border-dashed border-black/12 text-center">
                <div className="max-w-xs px-5">
                  <Bookmark className="mx-auto text-[#5f7567]" aria-hidden="true" />
                  <p className="mt-4 font-serif text-3xl">Nothing saved yet.</p>
                  <p className="mt-3 text-sm leading-6 text-black/46">
                    Use the bookmark on any journey and it will appear here.
                  </p>
                </div>
              </div>
            )}
          </div>

          {items.length ? (
            <div className="grid gap-3 border-t border-black/9 pt-5">
              <Link
                href={planningHref}
                className={cn(buttonBaseStyles, buttonVariants.primary, buttonSizes.md, "w-full")}
              >
                Request details for these journeys
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonBaseStyles,
                    buttonVariants.whatsappFrosted,
                    buttonSizes.sm,
                    "w-full gap-2",
                  )}
                >
                  <WhatsAppIcon className="size-[17px]" />
                  WhatsApp
                </a>
                <a
                  href={emailHref}
                  className={cn(
                    buttonBaseStyles,
                    buttonVariants.lightFrosted,
                    buttonSizes.sm,
                    "w-full gap-2",
                  )}
                >
                  <Mail size={16} aria-hidden="true" />
                  Email
                </a>
              </div>
            </div>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function matchesFilters(item: JourneyCatalogItem, filters: FilterState) {
  if (filters.interest && !matchesInterest(item, filters.interest)) return false;

  if (filters.duration) {
    const duration = durationOptions.find((option) => option.id === filters.duration);
    if (
      duration &&
      (item.recommendedDaysMin > duration.max || item.recommendedDaysMax < duration.min)
    ) {
      return false;
    }
  }

  if (filters.traveler && !item.travelerFilters.includes(filters.traveler)) return false;
  if (filters.needs.some((need) => !item.planningNeedFilters.includes(need))) return false;
  return true;
}

function matchesInterest(item: JourneyCatalogItem, interest: InterestId) {
  switch (interest) {
    case "first-visit":
      return item.travelerFilters.includes("first-time");
    case "culture":
      return item.experienceFilters.some((experience) =>
        ["great-wall", "ancient-china", "silk-road"].includes(experience),
      );
    case "landscapes":
      return item.experienceFilters.includes("scenery");
    case "food-local-life":
      return item.experienceFilters.some((experience) =>
        ["food", "local-life"].includes(experience),
      );
    case "family":
      return item.travelerFilters.some((traveler) =>
        ["families", "multigenerational"].includes(traveler),
      );
    case "gentler-pace":
      return item.planningNeedFilters.some((need) =>
        ["slower-pacing", "mobility-aware"].includes(need),
      );
  }
}
