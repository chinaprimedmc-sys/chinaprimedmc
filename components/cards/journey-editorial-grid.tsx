"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Check,
  ChevronRight,
  Layers3,
  Mail,
  X,
} from "lucide-react";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
  type TouchEvent as ReactTouchEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import { WhatsAppIcon } from "@/components/icons";
import { buttonBaseStyles, buttonSizes, buttonVariants } from "@/components/ui/button-styles";
import { destinationAsset } from "@/content/destinations/assets";
import type {
  JourneyCatalogItem,
  JourneyExperienceId,
  JourneyPlanningNeedId,
  JourneyTravelerId,
} from "@/content/tours/catalog";
import { firstChinaAsset } from "@/content/tours/assets";
import { cn } from "@/lib/utils/cn";
import type { MediaAsset } from "@/types/component-library";

type JourneyEditorialGridProps = {
  items: JourneyCatalogItem[];
};

type DurationBucketId = "4-6" | "7-9" | "10-13" | "14-18" | "19-plus";
type ExperienceMatchMode = "any" | "all";
type DeckDirection = 1 | -1;

type FinderState = {
  experiences: JourneyExperienceId[];
  travelers: JourneyTravelerId[];
  needs: JourneyPlanningNeedId[];
  duration: DurationBucketId | null;
  experienceMode: ExperienceMatchMode;
};

type BrowseState = {
  style: string | null;
  destination: string | null;
  duration: DurationBucketId | null;
  bestFor: string | null;
};

type ExperienceOption = {
  id: JourneyExperienceId;
  label: string;
  shortLabel: string;
  image: MediaAsset;
};

type ChoiceOption<Id extends string> = {
  id: Id;
  label: string;
};

const savedStorageKey = "aviora-saved-journeys";

const experienceOptions: ExperienceOption[] = [
  {
    id: "pandas",
    label: "Giant pandas",
    shortLabel: "Pandas",
    image: destinationAsset.chengduPanda,
  },
  {
    id: "great-wall",
    label: "The Great Wall",
    shortLabel: "Great Wall",
    image: firstChinaAsset.beijingGreatWallWide,
  },
  {
    id: "ancient-china",
    label: "Ancient China",
    shortLabel: "Ancient China",
    image: destinationAsset.xianTerracotta,
  },
  {
    id: "food",
    label: "Chinese food",
    shortLabel: "Food",
    image: firstChinaAsset.shanghaiMarketVisit,
  },
  {
    id: "scenery",
    label: "Mountains & rivers",
    shortLabel: "Scenery",
    image: destinationAsset.guilinRiver,
  },
  {
    id: "modern-cities",
    label: "Modern skylines",
    shortLabel: "Modern China",
    image: destinationAsset.shanghaiSkyline,
  },
  {
    id: "local-life",
    label: "Local life",
    shortLabel: "Local life",
    image: destinationAsset.chengduTeaHouse,
  },
  {
    id: "photography",
    label: "Photography",
    shortLabel: "Photography",
    image: destinationAsset.zhangjiajieSpirePortrait,
  },
  {
    id: "silk-road",
    label: "Silk Road stories",
    shortLabel: "Silk Road",
    image: destinationAsset.xianTerracotta,
  },
];

const travelerOptions: ChoiceOption<JourneyTravelerId>[] = [
  { id: "first-time", label: "First trip to China" },
  { id: "couples", label: "Couples" },
  { id: "families", label: "Families with children" },
  { id: "multigenerational", label: "Multi-generational families" },
  { id: "older-travelers", label: "Older travelers" },
  { id: "private-groups", label: "Private groups" },
  { id: "travel-advisors", label: "Travel advisors" },
];

const planningNeedOptions: ChoiceOption<JourneyPlanningNeedId>[] = [
  { id: "muslim-friendly", label: "Muslim-friendly planning" },
  { id: "vegetarian-friendly", label: "Vegetarian-friendly planning" },
  { id: "slower-pacing", label: "Slower, easier pacing" },
  { id: "child-friendly", label: "Child-friendly days" },
  { id: "mobility-aware", label: "Mobility-aware planning" },
  { id: "quiet-luxury", label: "Quiet luxury" },
  { id: "food-focused", label: "Food-focused" },
  { id: "photography-led", label: "Photography-led" },
];

const durationOptions: Array<ChoiceOption<DurationBucketId> & { min: number; max: number }> = [
  { id: "4-6", label: "4–6 days", min: 4, max: 6 },
  { id: "7-9", label: "7–9 days", min: 7, max: 9 },
  { id: "10-13", label: "10–13 days", min: 10, max: 13 },
  { id: "14-18", label: "14–18 days", min: 14, max: 18 },
  { id: "19-plus", label: "19+ days", min: 19, max: 365 },
];

const emptyFinder: FinderState = {
  experiences: [],
  travelers: [],
  needs: [],
  duration: null,
  experienceMode: "any",
};

const emptyBrowse: BrowseState = {
  style: null,
  destination: null,
  duration: null,
  bestFor: null,
};

export function JourneyEditorialGrid({ items }: JourneyEditorialGridProps) {
  const shouldReduceMotion = useReducedMotion();
  const [finder, setFinder] = useState<FinderState>(emptyFinder);
  const [browse, setBrowse] = useState<BrowseState>(emptyBrowse);
  const [spotlightId, setSpotlightId] = useState<JourneyExperienceId>("great-wall");
  const [deckIndex, setDeckIndex] = useState(0);
  const [deckDirection, setDeckDirection] = useState<DeckDirection>(1);
  const [savedSlugs, setSavedSlugs] = useState<string[]>([]);
  const [savedReady, setSavedReady] = useState(false);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const wheelLocked = useRef(false);

  const matchedItems = useMemo(
    () => items.filter((item) => matchesFinder(item, finder)),
    [finder, items],
  );
  const browseItems = useMemo(
    () => items.filter((item) => matchesBrowse(item, browse)),
    [browse, items],
  );
  const activeDeckIndex = matchedItems.length ? deckIndex % matchedItems.length : 0;
  const activeItem = matchedItems[activeDeckIndex];
  const previousItem =
    matchedItems.length > 1
      ? matchedItems[(activeDeckIndex - 1 + matchedItems.length) % matchedItems.length]
      : undefined;
  const nextItem =
    matchedItems.length > 1 ? matchedItems[(activeDeckIndex + 1) % matchedItems.length] : undefined;
  const spotlight =
    experienceOptions.find((option) => option.id === spotlightId) ?? experienceOptions[0];
  const hasFinderChoices = countFinderChoices(finder) > 0;
  const browseGroups = useMemo(() => createBrowseGroups(items), [items]);
  const savedItems = items.filter((item) => savedSlugs.includes(item.slug));

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

  function resetDeck() {
    setDeckIndex(0);
    setDeckDirection(1);
  }

  function toggleFinderValue<Key extends "experiences" | "travelers" | "needs">(
    key: Key,
    value: FinderState[Key][number],
  ) {
    resetDeck();
    setFinder((current) => {
      const values = current[key] as string[];
      return {
        ...current,
        [key]: values.includes(value)
          ? values.filter((currentValue) => currentValue !== value)
          : [...values, value],
      };
    });
  }

  function toggleExperience(id: JourneyExperienceId) {
    setSpotlightId(id);
    toggleFinderValue("experiences", id);
  }

  function clearFinder() {
    resetDeck();
    setFinder(emptyFinder);
  }

  function showMatches() {
    resetDeck();
    document.querySelector<HTMLElement>("#matching-journeys")?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  function moveDeck(direction: DeckDirection) {
    if (matchedItems.length < 2) return;

    setDeckDirection(direction);
    setDeckIndex((activeDeckIndex + direction + matchedItems.length) % matchedItems.length);
  }

  function handleDeckPointerDown(event: ReactPointerEvent<HTMLElement>) {
    const target = event.target as HTMLElement;
    if (target.closest("a, button")) return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
  }

  function handleDeckPointerUp(event: ReactPointerEvent<HTMLElement>) {
    const start = pointerStart.current;
    if (!start) return;
    finishDeckGesture(event.clientX, event.clientY, true);
  }

  function handleDeckPointerMove(event: ReactPointerEvent<HTMLElement>) {
    finishDeckGesture(event.clientX, event.clientY, false);
  }

  function handleDeckPointerCancel() {
    pointerStart.current = null;
  }

  function handleDeckMouseDown(event: ReactMouseEvent<HTMLElement>) {
    if (pointerStart.current) return;
    const target = event.target as HTMLElement;
    if (target.closest("a, button")) return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
  }

  function handleDeckMouseUp(event: ReactMouseEvent<HTMLElement>) {
    if (!pointerStart.current) return;
    finishDeckGesture(event.clientX, event.clientY, true);
  }

  function handleDeckMouseMove(event: ReactMouseEvent<HTMLElement>) {
    finishDeckGesture(event.clientX, event.clientY, false);
  }

  function handleDeckTouchStart(event: ReactTouchEvent<HTMLElement>) {
    if (pointerStart.current) return;
    const target = event.target as HTMLElement;
    const touch = event.touches[0];
    if (!touch || target.closest("a, button")) return;
    pointerStart.current = { x: touch.clientX, y: touch.clientY };
  }

  function handleDeckTouchEnd(event: ReactTouchEvent<HTMLElement>) {
    const touch = event.changedTouches[0];
    if (!touch || !pointerStart.current) return;
    finishDeckGesture(touch.clientX, touch.clientY, true);
  }

  function handleDeckTouchMove(event: ReactTouchEvent<HTMLElement>) {
    const touch = event.touches[0];
    if (!touch) return;
    finishDeckGesture(touch.clientX, touch.clientY, false);
  }

  function handleDeckWheel(event: ReactWheelEvent<HTMLElement>) {
    if (wheelLocked.current || Math.abs(event.deltaX) < 38) return;
    wheelLocked.current = true;
    moveDeck(event.deltaX > 0 ? 1 : -1);
    window.setTimeout(() => {
      wheelLocked.current = false;
    }, 550);
  }

  function finishDeckGesture(clientX: number, clientY: number, complete: boolean) {
    const start = pointerStart.current;
    if (!start) return;

    const distanceX = clientX - start.x;
    const distanceY = clientY - start.y;
    const isHorizontalSwipe =
      Math.abs(distanceX) >= 55 && Math.abs(distanceX) > Math.abs(distanceY);
    if (!isHorizontalSwipe) {
      if (complete) pointerStart.current = null;
      return;
    }

    pointerStart.current = null;
    moveDeck(distanceX < 0 ? 1 : -1);
  }

  useEffect(() => {
    function handleWindowPointerMove(event: PointerEvent) {
      finishDeckGesture(event.clientX, event.clientY, false);
    }

    function handleWindowPointerUp(event: PointerEvent) {
      finishDeckGesture(event.clientX, event.clientY, true);
    }

    window.addEventListener("pointermove", handleWindowPointerMove);
    window.addEventListener("pointerup", handleWindowPointerUp);
    return () => {
      window.removeEventListener("pointermove", handleWindowPointerMove);
      window.removeEventListener("pointerup", handleWindowPointerUp);
    };
  });

  function toggleSaved(slug: string) {
    setSavedSlugs((current) =>
      current.includes(slug)
        ? current.filter((currentSlug) => currentSlug !== slug)
        : [...current, slug],
    );
  }

  function applyFinderToBrowse() {
    const selectedExperience = finder.experiences[0];
    const selectedDuration = finder.duration;
    setBrowse({
      style: selectedExperience === "photography" ? "Photography" : null,
      destination: null,
      duration: selectedDuration,
      bestFor: finder.travelers.includes("families") ? "Families" : null,
    });
    document.querySelector("#browse-every-journey")?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  return (
    <div data-hero-layout="true" className="bg-[#f6f7f3] text-[#171914]">
      <section
        id="journey-finder"
        className="relative isolate min-h-svh overflow-hidden border-b border-black/8 bg-[#eef2eb]"
      >
        <AnimatePresence mode="sync">
          <motion.div
            key={spotlight.id}
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 -z-20"
          >
            <OptimizedImage
              src={spotlight.image.src}
              alt=""
              fill
              priority
              sizes="100vw"
              objectPosition={spotlight.image.objectPosition}
              showSkeleton={false}
              frameClassName="h-full bg-[#dfe8df]"
              className="h-full w-full scale-[1.02] brightness-[1.05] contrast-[1.03] saturate-[1.12]"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(247,249,244,0.97)_0%,rgba(247,249,244,0.9)_43%,rgba(247,249,244,0.58)_72%,rgba(247,249,244,0.3)_100%)] max-md:bg-[linear-gradient(180deg,rgba(247,249,244,0.74)_0%,rgba(247,249,244,0.5)_28%,rgba(247,249,244,0.86)_56%,rgba(247,249,244,0.96)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(238,244,237,0.12)_55%,rgba(238,242,234,0.78)_100%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(rgba(23,25,20,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(23,25,20,0.04)_1px,transparent_1px)] [background-size:72px_72px] opacity-40" />

        <div className="mx-auto w-full max-w-[92rem] px-5 pt-16 pb-14 sm:px-6 md:pt-24 md:pb-20 lg:px-8">
          <motion.header
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.28fr)_minmax(20rem,0.72fr)]"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#53665a] uppercase">
                AVIORA Journey Finder · 01
              </p>
              <h1 className="mt-5 max-w-5xl font-serif text-[clamp(3.4rem,8vw,8rem)] leading-[0.86] font-medium text-balance text-[#11130f]">
                Start with the China you want to feel.
              </h1>
            </div>
            <div className="max-w-lg lg:justify-self-end">
              <p className="text-base leading-7 text-black/62 md:text-lg md:leading-8">
                Pick what draws you in, who is traveling, what the journey needs, and how much time
                you have. We will bring the strongest starting points forward.
              </p>
              <p className="mt-5 flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-[#607468] uppercase">
                <span className="h-px w-12 bg-[#607468]/35" /> One immersive filter, four decisions
              </p>
            </div>
          </motion.header>

          <div className="mt-14 grid gap-4 md:mt-20 lg:grid-cols-[1.2fr_0.8fr]">
            <FinderPanel step="01" title="What draws you to China?" className="lg:row-span-2">
              <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-black/52">Choose one or several interests.</p>
                {finder.experiences.length > 1 ? (
                  <div className="flex rounded-full border border-black/10 bg-white/62 p-1 shadow-sm backdrop-blur-xl">
                    {(["any", "all"] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        aria-pressed={finder.experienceMode === mode}
                        onClick={() => {
                          resetDeck();
                          setFinder((current) => ({ ...current, experienceMode: mode }));
                        }}
                        className={cn(
                          "rounded-full px-3 py-1.5 text-[0.68rem] font-semibold tracking-[0.08em] uppercase transition-colors",
                          finder.experienceMode === mode
                            ? "bg-[#1f2b24] text-white shadow-sm"
                            : "text-black/46 hover:text-black",
                        )}
                      >
                        Match {mode}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {experienceOptions.map((option, index) => {
                  const selected = finder.experiences.includes(option.id);
                  return (
                    <motion.button
                      key={option.id}
                      type="button"
                      aria-pressed={selected}
                      initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.45,
                        delay: shouldReduceMotion ? 0 : index * 0.045,
                      }}
                      onMouseEnter={() => setSpotlightId(option.id)}
                      onFocus={() => setSpotlightId(option.id)}
                      onClick={() => toggleExperience(option.id)}
                      className={cn(
                        "group relative aspect-[4/3] min-h-24 overflow-hidden rounded-2xl border text-left shadow-[0_14px_38px_rgba(45,63,51,0.12)] transition-[border-color,transform,box-shadow] focus-visible:ring-2 focus-visible:ring-[#607a69] focus-visible:outline-none motion-reduce:transition-none",
                        selected
                          ? "border-white shadow-[0_20px_48px_rgba(45,63,51,0.2)] ring-2 ring-[#607a69]"
                          : "border-white/68 hover:-translate-y-0.5 hover:border-white hover:shadow-[0_20px_48px_rgba(45,63,51,0.18)]",
                      )}
                    >
                      <OptimizedImage
                        src={option.image.src}
                        alt={option.image.alt}
                        fill
                        sizes="(min-width: 640px) 18vw, 45vw"
                        objectPosition={option.image.objectPosition}
                        loading="eager"
                        showSkeleton={false}
                        frameClassName="absolute inset-0 h-full bg-[#dfe8df]"
                        className="h-full w-full brightness-[1.04] contrast-[1.08] saturate-[1.18] transition-[filter,transform] duration-[var(--motion-duration-transition)] ease-[var(--motion-ease-out)] group-hover:scale-[1.04] group-hover:saturate-[1.24] motion-reduce:transform-none"
                      />
                      <span className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black/66 via-transparent to-transparent" />
                      <span className="absolute top-3 left-3 z-30 rounded-full border border-white/70 bg-white/72 px-2.5 py-1 text-[0.58rem] font-semibold tracking-[0.12em] text-black/66 uppercase shadow-sm backdrop-blur-xl">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="absolute inset-x-0 bottom-0 z-30 block p-4 font-serif text-xl leading-none text-white md:text-2xl">
                        {option.shortLabel}
                      </span>
                      <span
                        className={cn(
                          "absolute top-3 right-3 z-30 grid size-8 place-items-center rounded-full border backdrop-blur-md",
                          selected
                            ? "border-[#1f2b24] bg-[#1f2b24] text-white"
                            : "border-white/78 bg-white/68 text-black/60 shadow-sm",
                        )}
                      >
                        {selected ? <Check size={14} aria-hidden="true" /> : null}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </FinderPanel>

            <FinderPanel step="02" title="Who are we planning for?">
              <ChipChoices
                options={travelerOptions}
                selected={finder.travelers}
                onToggle={(value) => toggleFinderValue("travelers", value)}
              />
            </FinderPanel>

            <FinderPanel step="03" title="What does the journey need?">
              <ChipChoices
                options={planningNeedOptions}
                selected={finder.needs}
                onToggle={(value) => toggleFinderValue("needs", value)}
              />
              <p className="mt-5 border-t border-black/8 pt-4 text-xs leading-5 text-black/46">
                Muslim-friendly requests are planned around dietary and prayer needs. Specific
                restaurants, certification status, mosque access, and daily timing are confirmed in
                your proposal, not assumed here.
              </p>
            </FinderPanel>
          </div>

          <FinderPanel step="04" title="How much time feels right?" className="mt-4">
            <div className="grid gap-2 sm:grid-cols-5">
              {durationOptions.map((option, index) => {
                const selected = finder.duration === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => {
                      resetDeck();
                      setFinder((current) => ({
                        ...current,
                        duration: selected ? null : option.id,
                      }));
                    }}
                    className={cn(
                      "relative min-h-20 rounded-2xl border px-4 text-left transition-[border-color,background-color,transform,box-shadow] focus-visible:ring-2 focus-visible:ring-[#607a69] focus-visible:outline-none",
                      selected
                        ? "border-[#1f2b24] bg-[#1f2b24] text-white shadow-[0_12px_32px_rgba(45,63,51,0.18)]"
                        : "border-black/10 bg-white/58 text-[#252a25] hover:-translate-y-0.5 hover:border-[#607a69]/44 hover:bg-white/86",
                    )}
                  >
                    <span className="text-[0.62rem] font-semibold tracking-[0.12em] uppercase opacity-44">
                      0{index + 1}
                    </span>
                    <span className="mt-2 block text-sm font-semibold">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </FinderPanel>

          <div className="mt-4 rounded-[1.75rem] border border-white/80 bg-white/74 p-5 text-[#171914] shadow-[0_30px_100px_rgba(45,63,51,0.14)] backdrop-blur-2xl md:p-7">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto]">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#607468] uppercase">
                    Your choices
                  </p>
                  <span className="rounded-full border border-black/10 bg-white/64 px-3 py-1 text-xs text-black/54">
                    {countFinderChoices(finder)} selected
                  </span>
                </div>
                <FinderChoiceSummary finder={finder} />
                <p className="mt-4 text-sm text-black/54" aria-live="polite">
                  <span className="font-semibold text-[#171914]">{matchedItems.length}</span>{" "}
                  {matchedItems.length === 1 ? "journey direction" : "journey directions"} match
                  now.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                {hasFinderChoices ? (
                  <button
                    type="button"
                    onClick={clearFinder}
                    className="min-h-12 rounded-full px-5 text-sm font-semibold text-black/52 transition-colors hover:text-black"
                  >
                    Clear choices
                  </button>
                ) : null}
                <button
                  type="button"
                  onClick={showMatches}
                  className={cn(
                    buttonBaseStyles,
                    buttonVariants.primary,
                    buttonSizes.lg,
                    "w-full sm:w-auto",
                  )}
                >
                  Show matching journeys
                  <ArrowDown size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="matching-journeys"
        style={{ scrollMarginTop: "var(--site-nav-offset)" }}
        className="relative h-[calc(100svh-var(--site-nav-offset))] overflow-hidden border-b border-black/8 bg-[#edf2ec] pt-4 pb-[4.75rem] text-[#171914] lg:pt-5"
      >
        <AnimatePresence mode="sync">
          {activeItem ? (
            <motion.div
              key={activeItem.slug}
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
              className="pointer-events-none absolute inset-0"
            >
              <OptimizedImage
                src={activeItem.image.src}
                alt=""
                fill
                sizes="100vw"
                objectPosition={activeItem.image.objectPosition}
                showSkeleton={false}
                frameClassName="h-full bg-[#edf2ec]"
                className="h-full w-full scale-[1.06] opacity-[0.18] blur-[16px] brightness-[1.08] saturate-[1.08]"
              />
            </motion.div>
          ) : null}
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(247,249,245,0.88),rgba(237,242,236,0.72)_46%,rgba(247,249,245,0.94))]" />
        <div className="relative mx-auto flex h-full w-full max-w-[92rem] flex-col px-5 sm:px-6 lg:px-8">
          <motion.header
            initial={shouldReduceMotion ? false : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 border-b border-black/10 pb-3 md:flex-row md:items-end md:justify-between md:gap-4 md:pb-5 lg:shrink-0"
          >
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-[#607468] uppercase">
                Matching journeys · 02
              </p>
              <h2 className="mt-2 max-w-4xl font-serif text-3xl leading-[0.92] font-medium sm:text-4xl md:mt-3 md:text-5xl">
                Move through what fits.
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-sm leading-6 text-black/54">
                <span className="sm:hidden">Swipe or use the arrows to explore your matches.</span>
                <span className="hidden sm:inline">
                  Drag, swipe, or choose either side to move through your matches.
                </span>
              </p>
              <div className="mt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 text-[0.65rem] font-semibold tracking-[0.12em] text-black/38 uppercase">
                  <ArrowLeft size={14} aria-hidden="true" /> Drag or swipe
                  <ArrowRight size={14} aria-hidden="true" />
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => moveDeck(-1)}
                    disabled={matchedItems.length < 2}
                    className="grid size-10 place-items-center rounded-full border border-black/10 bg-white/72 text-[#171914] shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white disabled:pointer-events-none disabled:opacity-35"
                    aria-label="Previous journey"
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => moveDeck(1)}
                    disabled={matchedItems.length < 2}
                    className="grid size-10 place-items-center rounded-full border border-black/10 bg-white/72 text-[#171914] shadow-sm backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white disabled:pointer-events-none disabled:opacity-35"
                    aria-label="Next journey"
                  >
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </motion.header>

          {activeItem ? (
            <div className="mt-3 flex min-h-0 flex-1 flex-col lg:mt-4">
              <div className="mb-3 flex shrink-0 items-center justify-between gap-4">
                <p className="text-xs font-semibold tracking-[0.16em] text-[#607468] uppercase">
                  {String(activeDeckIndex + 1).padStart(2, "0")} /{" "}
                  {String(matchedItems.length).padStart(2, "0")}
                </p>
                <p className="text-sm text-black/44">
                  {matchedItems.length} matched · {savedItems.length} saved
                </p>
              </div>

              <div className="grid min-h-0 flex-1 items-center gap-4 lg:grid-cols-[minmax(10rem,0.62fr)_minmax(34rem,2.25fr)_minmax(10rem,0.62fr)] lg:gap-5">
                <CoverflowSideCard
                  item={previousItem}
                  side="previous"
                  onClick={() => moveDeck(-1)}
                />
                <div className="min-w-0">
                  <AnimatePresence initial={false} custom={deckDirection} mode="wait">
                    <ImmersiveJourneyCard
                      key={activeItem.slug}
                      item={activeItem}
                      direction={deckDirection}
                      saved={savedSlugs.includes(activeItem.slug)}
                      shouldReduceMotion={Boolean(shouldReduceMotion)}
                      onSave={() => toggleSaved(activeItem.slug)}
                      onPointerDown={handleDeckPointerDown}
                      onPointerMove={handleDeckPointerMove}
                      onPointerUp={handleDeckPointerUp}
                      onPointerCancel={handleDeckPointerCancel}
                      onMouseDown={handleDeckMouseDown}
                      onMouseMove={handleDeckMouseMove}
                      onMouseUp={handleDeckMouseUp}
                      onTouchStart={handleDeckTouchStart}
                      onTouchMove={handleDeckTouchMove}
                      onTouchEnd={handleDeckTouchEnd}
                      onWheel={handleDeckWheel}
                    />
                  </AnimatePresence>
                </div>
                <CoverflowSideCard item={nextItem} side="next" onClick={() => moveDeck(1)} />
              </div>
            </div>
          ) : (
            <NoMatches onReset={clearFinder} />
          )}

          <motion.a
            href="#browse-every-journey"
            className="absolute bottom-5 left-5 flex w-fit shrink-0 items-center gap-2 text-left sm:left-6 lg:left-8 lg:gap-3"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-serif text-base text-black/68 sm:text-lg md:text-xl">
              <span className="sm:hidden">Browse all</span>
              <span className="hidden sm:inline">Browse all journeys</span>
            </span>
            <motion.span
              animate={shouldReduceMotion ? undefined : { y: [0, 7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="grid size-9 place-items-center rounded-full border border-black/10 bg-white/72 shadow-sm backdrop-blur-xl"
            >
              <ArrowDown size={17} aria-hidden="true" />
            </motion.span>
          </motion.a>
        </div>
      </section>

      <section
        id="browse-every-journey"
        style={{ scrollMarginTop: "var(--site-nav-offset)" }}
        className="bg-[var(--bg-primary)] py-16 text-[var(--text-primary)] md:py-24 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[92rem] px-5 sm:px-6 lg:px-8">
          <header className="grid items-end gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-[var(--text-secondary)] uppercase">
                Every journey · 03
              </p>
              <h2 className="mt-4 max-w-4xl font-serif text-5xl leading-[0.94] font-medium md:text-7xl lg:text-8xl">
                Browse every journey.
              </h2>
            </div>
            <div className="max-w-lg lg:justify-self-end">
              <p className="text-base leading-7 text-[var(--text-secondary)] md:text-lg md:leading-8">
                Prefer a familiar overview? Compare every complete journey and customizable route
                direction here.
              </p>
              {hasFinderChoices ? (
                <button
                  type="button"
                  onClick={applyFinderToBrowse}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline decoration-[var(--border)] underline-offset-4"
                >
                  Use my finder choices
                  <ChevronRight size={15} aria-hidden="true" />
                </button>
              ) : null}
            </div>
          </header>

          <TraditionalFilters
            groups={browseGroups}
            filters={browse}
            resultCount={browseItems.length}
            onChange={(key, value) => setBrowse((current) => ({ ...current, [key]: value }))}
            onClear={() => setBrowse(emptyBrowse)}
          />

          {browseItems.length ? (
            <div className="mt-10 grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {browseItems.map((item, index) => (
                <TraditionalJourneyCard
                  key={item.slug}
                  item={item}
                  index={index}
                  saved={savedSlugs.includes(item.slug)}
                  onSave={() => toggleSaved(item.slug)}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[1.75rem] border border-[var(--border)] px-6 py-16 text-center">
              <p className="font-serif text-4xl">No journey matches this comparison yet.</p>
              <button
                type="button"
                onClick={() => setBrowse(emptyBrowse)}
                className={cn(buttonBaseStyles, buttonVariants.primary, buttonSizes.md, "mt-6")}
              >
                Clear browse filters
              </button>
            </div>
          )}
        </div>
      </section>

      <SavedJourneys items={savedItems} onRemove={(slug) => toggleSaved(slug)} ready={savedReady} />
    </div>
  );
}

function FinderPanel({
  step,
  title,
  children,
  className,
}: {
  step: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-white/82 bg-white/72 p-5 text-[#171914] shadow-[0_30px_100px_rgba(45,63,51,0.14)] backdrop-blur-2xl md:p-7",
        className,
      )}
    >
      <div className="mb-6 flex items-start gap-4 border-b border-black/8 pb-5">
        <span className="text-[0.65rem] font-semibold tracking-[0.14em] text-[#607468] uppercase">
          {step}
        </span>
        <h2 className="font-serif text-3xl leading-none md:text-4xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}

function ChipChoices<Id extends string>({
  options,
  selected,
  onToggle,
}: {
  options: ChoiceOption<Id>[];
  selected: Id[];
  onToggle: (value: Id) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = selected.includes(option.id);
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={active}
            onClick={() => onToggle(option.id)}
            className={cn(
              "min-h-11 rounded-full border px-4 text-left text-xs font-semibold transition-[border-color,background-color,color,transform,box-shadow] focus-visible:ring-2 focus-visible:ring-[#607a69] focus-visible:outline-none",
              active
                ? "border-[#1f2b24] bg-[#1f2b24] text-white shadow-[0_10px_28px_rgba(45,63,51,0.18)]"
                : "border-black/10 bg-white/58 text-black/62 hover:-translate-y-0.5 hover:border-[#607a69]/44 hover:bg-white hover:text-black",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function FinderChoiceSummary({ finder }: { finder: FinderState }) {
  const labels = [
    ...finder.experiences.map(
      (id) => experienceOptions.find((option) => option.id === id)?.shortLabel,
    ),
    ...finder.travelers.map((id) => travelerOptions.find((option) => option.id === id)?.label),
    ...finder.needs.map((id) => planningNeedOptions.find((option) => option.id === id)?.label),
    durationOptions.find((option) => option.id === finder.duration)?.label,
  ].filter(Boolean);

  if (!labels.length) {
    return (
      <p className="mt-3 text-base text-black/42">
        Nothing selected yet — all journeys remain in view.
      </p>
    );
  }

  return (
    <div className="mt-3 flex flex-wrap gap-2">
      {labels.map((label) => (
        <span
          key={label}
          className="rounded-full border border-black/9 bg-[#edf2ec] px-3 py-1.5 text-xs text-black/62"
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function CoverflowSideCard({
  item,
  side,
  onClick,
}: {
  item?: JourneyCatalogItem;
  side: "previous" | "next";
  onClick: () => void;
}) {
  if (!item) return <div className="hidden lg:block" />;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={false}
      animate={{ opacity: 0.68, scale: 0.86, x: 0 }}
      whileHover={{ opacity: 0.82, scale: 0.89 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative hidden h-[min(57vh,31rem)] w-full overflow-hidden rounded-[1.5rem] border border-white/76 bg-[#dfe8df] text-left shadow-[0_24px_80px_rgba(45,63,51,0.16)] focus-visible:ring-2 focus-visible:ring-[#607a69] focus-visible:outline-none lg:block"
      aria-label={`${side === "previous" ? "Show previous" : "Show next"} journey: ${item.title}`}
    >
      <OptimizedImage
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="18vw"
        objectPosition={item.image.objectPosition}
        frameClassName="h-full bg-[#dfe8df]"
        className="h-full w-full brightness-[1.06] saturate-[0.84] transition-[filter,transform] duration-[var(--motion-duration-transition)] ease-[var(--motion-ease-out)] group-hover:scale-[1.04] group-hover:saturate-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white/96 via-white/8 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 text-[#171914]">
        <p className="text-[0.62rem] font-semibold tracking-[0.14em] text-[#607468] uppercase">
          {side === "previous" ? "Previous" : "Next"}
        </p>
        <p className="mt-3 font-serif text-2xl leading-[0.95]">{item.title}</p>
        <p className="mt-3 text-xs text-black/52">{item.durationLabel}</p>
      </div>
    </motion.button>
  );
}

function ImmersiveJourneyCard({
  item,
  direction,
  saved,
  shouldReduceMotion,
  onSave,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onPointerCancel,
  onMouseDown,
  onMouseMove,
  onMouseUp,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onWheel,
}: {
  item: JourneyCatalogItem;
  direction: DeckDirection;
  saved: boolean;
  shouldReduceMotion: boolean;
  onSave: () => void;
  onPointerDown: (event: ReactPointerEvent<HTMLElement>) => void;
  onPointerMove: (event: ReactPointerEvent<HTMLElement>) => void;
  onPointerUp: (event: ReactPointerEvent<HTMLElement>) => void;
  onPointerCancel: () => void;
  onMouseDown: (event: ReactMouseEvent<HTMLElement>) => void;
  onMouseMove: (event: ReactMouseEvent<HTMLElement>) => void;
  onMouseUp: (event: ReactMouseEvent<HTMLElement>) => void;
  onTouchStart: (event: ReactTouchEvent<HTMLElement>) => void;
  onTouchMove: (event: ReactTouchEvent<HTMLElement>) => void;
  onTouchEnd: (event: ReactTouchEvent<HTMLElement>) => void;
  onWheel: (event: ReactWheelEvent<HTMLElement>) => void;
}) {
  return (
    <motion.article
      custom={direction}
      variants={{
        enter: (move: DeckDirection) => ({
          opacity: shouldReduceMotion ? 1 : 0,
          x: shouldReduceMotion ? 0 : move * 72,
          scale: shouldReduceMotion ? 1 : 0.86,
        }),
        center: { opacity: 1, x: 0, scale: 1 },
        exit: (move: DeckDirection) => ({
          opacity: shouldReduceMotion ? 1 : 0,
          x: shouldReduceMotion ? 0 : move * -72,
          scale: shouldReduceMotion ? 1 : 0.86,
        }),
      }}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onWheel={onWheel}
      className="relative z-10 block h-[23rem] min-h-0 cursor-grab touch-pan-y overflow-hidden rounded-[1.75rem] border border-white/82 bg-white shadow-[0_35px_120px_rgba(45,63,51,0.2)] select-none md:grid md:h-[clamp(23rem,calc(100svh-var(--site-nav-offset)-17rem),34rem)] md:grid-cols-[1.3fr_0.7fr]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden md:relative md:inset-auto md:min-h-full">
        <OptimizedImage
          src={item.image.src}
          alt={item.image.alt}
          fill
          priority
          sizes="(min-width: 768px) 68vw, 100vw"
          objectPosition={item.image.objectPosition}
          frameClassName="h-full bg-[#dfe8df]"
          className="h-full w-full brightness-[1.04] contrast-[1.03] saturate-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-white/18" />
        <div className="absolute top-5 left-5 rounded-full border border-white/78 bg-white/72 px-4 py-2 text-[0.65rem] font-semibold tracking-[0.14em] text-black/68 uppercase shadow-sm backdrop-blur-xl md:top-7 md:left-7">
          {item.kind === "framework" ? "Custom journey direction" : item.eyebrow}
        </div>
      </div>

      <div className="absolute inset-0 z-10 flex min-w-0 flex-col justify-end bg-gradient-to-t from-black/76 via-black/22 to-transparent p-5 text-white md:relative md:inset-auto md:z-auto md:grid md:min-h-0 md:grid-rows-[auto_minmax(0,1fr)_auto] md:bg-white md:[background-image:none] md:p-7 md:text-[#171914]">
        <div className="flex items-start justify-between gap-4">
          <p className="line-clamp-2 text-xs leading-5 font-semibold tracking-[0.14em] text-white/54 uppercase md:text-[#607468]">
            {item.routeLabel}
          </p>
          <button
            type="button"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={onSave}
            aria-pressed={saved}
            aria-label={saved ? "Remove from saved journeys" : "Save this journey"}
            className={cn(
              "grid size-10 shrink-0 place-items-center rounded-full border shadow-sm backdrop-blur-xl transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none md:size-11 md:focus-visible:ring-[#607a69]",
              saved
                ? "border-[#1f2b24] bg-[#1f2b24] text-white"
                : "border-white/46 bg-white/14 text-white hover:bg-white/24 md:border-black/10 md:bg-[#edf2ec] md:text-[#171914] md:hover:border-[#607a69]/44 md:hover:bg-white",
            )}
          >
            {saved ? (
              <Check size={17} aria-hidden="true" />
            ) : (
              <Bookmark size={17} aria-hidden="true" />
            )}
          </button>
        </div>

        <div className="mt-3 md:mt-4 md:min-h-0 md:overflow-hidden">
          <h3 className="font-serif text-[1.75rem] leading-[0.92] font-medium md:text-[2.5rem]">
            {item.title}
          </h3>
          <p className="mt-2 text-sm font-semibold text-white/84 md:mt-3 md:text-[#29342d]">
            {item.durationLabel}
          </p>
          <p className="mt-2 line-clamp-1 text-sm leading-6 text-white/64 md:mt-3 md:line-clamp-2 md:text-black/56">
            {item.hook}
          </p>
          <div className="mt-4 hidden flex-wrap gap-2 sm:flex">
            {item.styleFilters.slice(0, 2).map((style) => (
              <span
                key={style}
                className="rounded-full border border-white/20 bg-white/8 px-3 py-1.5 text-[0.68rem] font-semibold text-white/68 md:border-black/8 md:bg-[#edf2ec] md:text-black/54"
              >
                {style}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-3 md:mt-0 md:border-t md:border-black/8 md:bg-white md:pt-4">
          <div className="hidden sm:block">
            <DestinationLinks destinations={item.destinations} />
          </div>
          <Link
            href={item.href}
            draggable={false}
            onPointerDown={(event) => event.stopPropagation()}
            className={cn(
              buttonBaseStyles,
              buttonVariants.primary,
              buttonSizes.md,
              "mt-0 w-fit sm:mt-4",
            )}
          >
            {item.kind === "framework" ? "Explore this direction" : "View full journey"}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function NoMatches({ onReset }: { onReset: () => void }) {
  return (
    <div className="mt-12 grid min-h-[34rem] place-items-center rounded-[1.75rem] border border-black/8 bg-white/62 px-6 text-center shadow-[0_24px_80px_rgba(45,63,51,0.1)] backdrop-blur-xl">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-[#607468] uppercase">
          A custom answer may fit better
        </p>
        <h3 className="mt-5 font-serif text-5xl leading-[0.94] md:text-7xl">
          No current direction holds every choice.
        </h3>
        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-black/54">
          This does not mean the trip cannot be planned. Clear one condition to see nearby matches,
          or share the complete brief with our team.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={onReset}
            className={cn(buttonBaseStyles, buttonVariants.primary, buttonSizes.md)}
          >
            Reset the finder
          </button>
          <Link
            href="/start-planning?source=journey-finder"
            className={cn(buttonBaseStyles, buttonVariants.lightFrosted, buttonSizes.md)}
          >
            Plan around my brief
          </Link>
        </div>
      </div>
    </div>
  );
}

type BrowseGroup = {
  key: keyof BrowseState;
  label: string;
  options: Array<{ id: string; label: string }>;
};

function createBrowseGroups(items: JourneyCatalogItem[]): BrowseGroup[] {
  return [
    {
      key: "style",
      label: "Travel style",
      options: unique(items.flatMap((item) => item.styleFilters)).map((value) => ({
        id: value,
        label: value,
      })),
    },
    {
      key: "destination",
      label: "Destination",
      options: unique(items.flatMap((item) => item.destinationFilters)).map((value) => ({
        id: value,
        label: value,
      })),
    },
    {
      key: "duration",
      label: "Trip length",
      options: durationOptions.map((option) => ({ id: option.id, label: option.label })),
    },
    {
      key: "bestFor",
      label: "Best for",
      options: unique(items.flatMap((item) => item.bestForFilters)).map((value) => ({
        id: value,
        label: value,
      })),
    },
  ];
}

function TraditionalFilters({
  groups,
  filters,
  resultCount,
  onChange,
  onClear,
}: {
  groups: BrowseGroup[];
  filters: BrowseState;
  resultCount: number;
  onChange: (key: keyof BrowseState, value: string | null) => void;
  onClear: () => void;
}) {
  const hasFilters = Object.values(filters).some(Boolean);

  return (
    <div className="mt-12 border-y border-[var(--border)] py-7">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-secondary)]">
          <span className="font-semibold text-[var(--text-primary)]">{resultCount}</span> journeys
          and directions
        </p>
        {hasFilters ? (
          <button
            type="button"
            onClick={onClear}
            className="text-sm font-semibold underline underline-offset-4"
          >
            Clear filters
          </button>
        ) : null}
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((group) => (
          <div key={group.key}>
            <p className="mb-3 text-[0.68rem] font-semibold tracking-[0.14em] text-[var(--text-secondary)] uppercase">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.options.map((option) => {
                const active = filters[group.key] === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => onChange(group.key, active ? null : option.id)}
                    className={cn(
                      "min-h-10 rounded-full border px-4 text-xs font-semibold transition-colors",
                      active
                        ? "border-[var(--text-primary)] bg-[var(--text-primary)] text-white"
                        : "border-[var(--border)] bg-white/56 text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                    )}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TraditionalJourneyCard({
  item,
  index,
  saved,
  onSave,
}: {
  item: JourneyCatalogItem;
  index: number;
  saved: boolean;
  onSave: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.24) }}
      className="group grid content-start overflow-hidden rounded-[1.75rem] border border-[var(--border)] bg-white shadow-[0_16px_48px_rgba(22,21,18,0.06)] transition-[transform,box-shadow] hover:-translate-y-1 hover:shadow-[0_28px_78px_rgba(22,21,18,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-secondary)]">
        <Link href={item.href} aria-label={`View ${item.title}`}>
          <OptimizedImage
            src={item.image.src}
            alt={item.image.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            objectPosition={item.image.objectPosition}
            frameClassName="h-full"
            className="h-full w-full transition-transform duration-[var(--motion-duration-enter)] ease-[var(--motion-ease-out)] group-hover:scale-[1.04] motion-reduce:transform-none"
          />
        </Link>
        <span className="absolute top-4 left-4 rounded-full border border-white/76 bg-white/68 px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.12em] text-black/68 uppercase shadow-sm backdrop-blur-xl">
          {item.kind === "framework" ? "Custom direction" : item.eyebrow}
        </span>
        <button
          type="button"
          onClick={onSave}
          aria-pressed={saved}
          aria-label={saved ? "Remove from saved journeys" : "Save this journey"}
          className={cn(
            "absolute top-4 right-4 grid size-10 place-items-center rounded-full border backdrop-blur-xl transition-colors",
            saved
              ? "border-[#1f2b24] bg-[#1f2b24] text-white"
              : "border-white/76 bg-white/68 text-black/68 shadow-sm hover:bg-white",
          )}
        >
          {saved ? (
            <Check size={16} aria-hidden="true" />
          ) : (
            <Bookmark size={16} aria-hidden="true" />
          )}
        </button>
      </div>
      <div className="grid gap-5 p-5 md:p-6">
        <div>
          <p className="text-[0.68rem] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
            {item.routeLabel} · {item.durationLabel}
          </p>
          <Link href={item.href}>
            <h3 className="mt-3 font-serif text-3xl leading-[0.98] font-medium md:text-4xl">
              {item.title}
            </h3>
          </Link>
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-[var(--text-secondary)]">
            {item.hook}
          </p>
        </div>
        <div className="flex items-end justify-between gap-4 border-t border-[var(--border)] pt-4">
          <DestinationLinks destinations={item.destinations} />
          <Link href={item.href} className="shrink-0 text-sm font-semibold">
            View <ArrowRight size={14} className="inline" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
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
  const contactMessage = `Hi AVIORA, I'd like to learn more about these saved journeys:\n${numberedJourneys}\n\nCould a China journey specialist introduce these options and help me understand which one may suit us best?`;
  const whatsappHref = `https://wa.me/447985052302?text=${encodeURIComponent(contactMessage)}`;
  const emailHref = `mailto:chinaprimedmc@gmail.com?subject=${encodeURIComponent(
    "Details about my saved China journeys",
  )}&body=${encodeURIComponent(contactMessage)}`;
  const planningHref = `/start-planning?source=saved-journeys&journeys=${encodeURIComponent(
    JSON.stringify(savedTitles),
  )}`;

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="fixed right-4 bottom-[calc(var(--mobile-sticky-cta-height)+env(safe-area-inset-bottom)+5.25rem)] z-50 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/82 bg-white/78 px-4 text-sm font-semibold text-[#171914] shadow-[0_18px_58px_rgba(45,63,51,0.2)] backdrop-blur-2xl transition hover:-translate-y-0.5 hover:bg-white focus-visible:ring-2 focus-visible:ring-[#607a69] focus-visible:outline-none sm:right-6 sm:bottom-[calc(var(--mobile-sticky-cta-height)+env(safe-area-inset-bottom)+1.25rem)] sm:px-5"
          aria-label={`Open saved journeys, ${count} saved`}
        >
          <Bookmark size={17} aria-hidden="true" />
          <span className="hidden sm:inline">Saved journeys</span>
          <span className="grid min-w-6 place-items-center rounded-full bg-[#1f2b24] px-1.5 py-0.5 text-xs text-white">
            {count}
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-[#26342b]/26 backdrop-blur-sm data-[state=open]:animate-[fade-in_200ms_ease-out]" />
        <Dialog.Content className="fixed top-0 right-0 bottom-0 z-[91] flex w-[min(92vw,30rem)] flex-col border-l border-black/8 bg-[#f7f8f4] p-5 text-[#171914] shadow-[-24px_0_90px_rgba(45,63,51,0.2)] md:p-7">
          <div className="flex items-start justify-between gap-4 border-b border-black/8 pb-6">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-[#607468] uppercase">
                Your shortlist
              </p>
              <Dialog.Title className="mt-3 font-serif text-4xl leading-none">
                Saved journeys
              </Dialog.Title>
              <Dialog.Description className="mt-3 text-sm leading-6 text-black/52">
                Speak with a China journey specialist for complimentary guidance on your saved
                journeys.
              </Dialog.Description>
            </div>
            <Dialog.Close
              className="grid size-11 shrink-0 place-items-center rounded-full border border-black/10 bg-white shadow-sm hover:bg-[#edf2ec]"
              aria-label="Close saved journeys"
            >
              <X size={18} aria-hidden="true" />
            </Dialog.Close>
          </div>

          <div className="flex-1 overflow-y-auto py-6">
            {items.length ? (
              <div className="grid gap-3">
                {items.map((item) => (
                  <div
                    key={item.slug}
                    className="grid grid-cols-[5.5rem_1fr_auto] gap-3 rounded-2xl border border-black/8 bg-white p-3 shadow-[0_10px_30px_rgba(45,63,51,0.06)]"
                  >
                    <Link
                      href={item.href}
                      className="group [grid-column:1/3] grid min-w-0 grid-cols-subgrid gap-3"
                    >
                      <span className="relative min-h-24 overflow-hidden rounded-xl">
                        <OptimizedImage
                          src={item.image.src}
                          alt=""
                          fill
                          sizes="88px"
                          objectPosition={item.image.objectPosition}
                          frameClassName="h-full bg-[#dfe8df]"
                          className="h-full w-full transition-transform duration-500 group-hover:scale-[1.04]"
                        />
                      </span>
                      <span className="min-w-0 self-center">
                        <span className="block font-serif text-xl leading-none">{item.title}</span>
                        <span className="mt-2 block text-xs text-black/44">
                          {item.durationLabel}
                        </span>
                        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#3f5949]">
                          View journey details
                          <ArrowRight
                            size={13}
                            aria-hidden="true"
                            className="transition-transform group-hover:translate-x-0.5"
                          />
                        </span>
                      </span>
                    </Link>
                    <button
                      type="button"
                      onClick={() => onRemove(item.slug)}
                      className="grid size-9 place-items-center self-start rounded-full text-black/38 hover:bg-[#edf2ec] hover:text-black"
                      aria-label={`Remove ${item.title} from saved journeys`}
                    >
                      <X size={15} aria-hidden="true" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid min-h-64 place-items-center rounded-[1.75rem] border border-dashed border-black/12 bg-white/58 text-center">
                <div className="max-w-xs px-6">
                  <Layers3 className="mx-auto text-[#607468]" aria-hidden="true" />
                  <p className="mt-4 font-serif text-2xl">Your shortlist is empty.</p>
                  <p className="mt-3 text-sm leading-6 text-black/46">
                    Save a journey from either card section and it will appear here.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-black/8 pt-5">
            {items.length ? (
              <div className="grid gap-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      buttonBaseStyles,
                      buttonVariants.whatsappFrosted,
                      buttonSizes.sm,
                      "w-full gap-2.5",
                    )}
                  >
                    <WhatsAppIcon className="size-[18px] shrink-0" />
                    WhatsApp
                  </a>
                  <a
                    href={emailHref}
                    className={cn(
                      buttonBaseStyles,
                      buttonVariants.lightFrosted,
                      buttonSizes.sm,
                      "w-full",
                    )}
                  >
                    <Mail size={16} aria-hidden="true" />
                    Email
                  </a>
                </div>
                <Link
                  href={planningHref}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-4 text-sm font-semibold text-black/58 transition-colors hover:text-black"
                >
                  Start a planning brief
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            ) : null}
            <p className="mt-3 text-center text-xs leading-5 text-black/38">
              Saving does not submit an inquiry or share personal information.
            </p>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function DestinationLinks({ destinations }: { destinations: JourneyCatalogItem["destinations"] }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-2 text-[0.68rem] font-semibold tracking-[0.1em] text-[var(--text-secondary)] uppercase">
      {destinations.map((destination) => (
        <Link
          key={`${destination.label}-${destination.href}`}
          href={destination.href}
          className="border-b border-[var(--border)] pb-1 transition-colors hover:border-[var(--text-primary)] hover:text-[var(--text-primary)]"
        >
          {destination.label}
        </Link>
      ))}
    </div>
  );
}

function matchesFinder(item: JourneyCatalogItem, finder: FinderState) {
  if (finder.experiences.length) {
    const experienceMatches = finder.experiences.map((experience) =>
      item.experienceFilters.includes(experience),
    );
    const passesExperiences =
      finder.experienceMode === "all"
        ? experienceMatches.every(Boolean)
        : experienceMatches.some(Boolean);
    if (!passesExperiences) return false;
  }

  if (
    finder.travelers.length &&
    !finder.travelers.some((traveler) => item.travelerFilters.includes(traveler))
  ) {
    return false;
  }

  if (
    finder.needs.length &&
    !finder.needs.every((need) => item.planningNeedFilters.includes(need))
  ) {
    return false;
  }

  if (finder.duration && !matchesDuration(item, finder.duration)) return false;
  return true;
}

function matchesBrowse(item: JourneyCatalogItem, filters: BrowseState) {
  if (filters.style && !item.styleFilters.includes(filters.style)) return false;
  if (filters.destination && !item.destinationFilters.includes(filters.destination)) return false;
  if (filters.bestFor && !item.bestForFilters.includes(filters.bestFor)) return false;
  if (filters.duration && !matchesDuration(item, filters.duration)) return false;
  return true;
}

function matchesDuration(item: JourneyCatalogItem, durationId: DurationBucketId) {
  const duration = durationOptions.find((option) => option.id === durationId);
  if (!duration) return true;
  return item.recommendedDaysMin <= duration.max && item.recommendedDaysMax >= duration.min;
}

function countFinderChoices(finder: FinderState) {
  return (
    finder.experiences.length +
    finder.travelers.length +
    finder.needs.length +
    (finder.duration ? 1 : 0)
  );
}

function unique(values: string[]) {
  return [...new Set(values.filter(Boolean))];
}
