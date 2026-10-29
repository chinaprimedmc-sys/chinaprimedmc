"use client";

/**
 * 本模块职责：/tours 页的行程发现区——一句话式筛选、主推行程、编辑式网格与专项清单。
 * 输入：公开行程目录与 URL 查询参数（含旧版 style/scope/q 等链接参数）。
 * 输出：随选择实时变化的行程列表，选择写回网址便于分享。
 * 不负责：价格与天数的计算（读取 catalog）、筛选算法本身（复用 lib/tours/journey-filter）。
 */

import { ArrowRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import type { JourneyCatalogItem } from "@/content/tours/catalog";
import {
  getJourneyCardDescription,
  getJourneyCardTitle,
  getJourneyHeadline,
  getJourneyRouteLabel,
  placeGlossary,
} from "@/content/tours/card-copy";
import {
  companionChoices,
  interestChoices,
  journeyPhotos,
  journeysCopy,
  lengthChoices,
  type FinderChoice,
} from "@/content/tours/journeys-curation";
import {
  defaultJourneyFilters,
  filterJourneys,
  readJourneyFilters,
  type JourneyFilterState,
} from "@/lib/tours/journey-filter";
import { isDayTour, matchesJourneyDuration } from "@/lib/tours/journey-groups";

import styles from "./journey-finder.module.css";

type Selection = { length: string; companion: string; interest: string };
type Slot = keyof Selection;

const lengthOptions: FinderChoice<string>[] = [...lengthChoices];
const options: Record<Slot, FinderChoice<string>[]> = {
  length: lengthOptions,
  companion: companionChoices,
  interest: interestChoices,
};
const paramKey: Record<Slot, string> = { length: "days", companion: "who", interest: "see" };

function pick(params: URLSearchParams, slot: Slot) {
  const value = params.get(paramKey[slot]) ?? "any";
  return options[slot].some((choice) => choice.value === value) ? value : "any";
}

function matches(item: JourneyCatalogItem, selection: Selection) {
  const { length, companion, interest } = selection;
  if (length !== "any" && !matchesJourneyDuration(item, length as never)) return false;
  const who = companionChoices.find((choice) => choice.value === companion)?.match;
  if (who && !item.travelerFilters.some((entry) => who.includes(entry))) return false;
  const see = interestChoices.find((choice) => choice.value === interest)?.match;
  if (see && !item.experienceFilters.some((entry) => see.includes(entry))) return false;
  return true;
}

function hasLegacy(filters: JourneyFilterState) {
  return (
    filters.format !== "all" ||
    filters.scope !== "all" ||
    filters.destination.length > 0 ||
    filters.duration.length > 0 ||
    filters.travelStyle.length > 0 ||
    filters.need !== null ||
    filters.query.trim().length > 0 ||
    filters.collection !== "all" ||
    filters.experience !== "all" ||
    filters.pace.length > 0
  );
}

const priceLine = (item: JourneyCatalogItem) =>
  item.pricing.fromUsd
    ? `from US$${item.pricing.fromUsd.toLocaleString("en-US")}`
    : "Price on request";

const priceBasis = (item: JourneyCatalogItem) =>
  item.pricing.fromUsd
    ? item.pricing.pricingUnit === "private-group"
      ? "per private group of four"
      : "per person, based on four guests"
    : item.pricing.cardBasis;

const plainTitle = (item: JourneyCatalogItem) =>
  getJourneyHeadline(item) ??
  getJourneyCardTitle(item).replace(/\s·\s\d+(?:[–-]\d+)?\sDays?$/i, "");

/** 路线副标题：城市名 + 第一座陌生城市的一句话定位。 */
const routeLine = (item: JourneyCatalogItem) => getJourneyRouteLabel(item);

const glossLine = (item: JourneyCatalogItem) => {
  const names = getJourneyRouteLabel(item).split(/\s·\s|\sto\s/);
  const known = names.filter((name) => placeGlossary[name]).slice(0, 2);
  return known.map((name) => `${name}: ${placeGlossary[name]}`).join(" · ");
};

const shortDuration = (item: JourneyCatalogItem) => item.durationLabel.replace(" / ", " · ");

export function JourneyFinder({
  items,
  initialQueryString = "",
}: {
  items: JourneyCatalogItem[];
  initialQueryString?: string;
}) {
  const initial = useMemo(() => new URLSearchParams(initialQueryString), [initialQueryString]);
  const [selection, setSelection] = useState<Selection>(() => ({
    length: pick(initial, "length"),
    companion: pick(initial, "companion"),
    interest: pick(initial, "interest"),
  }));
  const [legacy, setLegacy] = useState<JourneyFilterState>(() => readJourneyFilters(initial));
  const [openSlot, setOpenSlot] = useState<Slot | null>(null);
  const finder = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openSlot) return;
    const onPress = (event: PointerEvent) => {
      if (!finder.current?.contains(event.target as Node)) setOpenSlot(null);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenSlot(null);
    };
    document.addEventListener("pointerdown", onPress);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPress);
      document.removeEventListener("keydown", onKey);
    };
  }, [openSlot]);

  const legacyActive = hasLegacy(legacy);
  const base = useMemo(() => filterJourneys(items, legacy), [items, legacy]);
  const results = base.filter((item) => matches(item, selection));
  const photographed = results.filter((item) => !isDayTour(item) && journeyPhotos[item.slug]);
  const feature = photographed[0];
  const grid = photographed.slice(1);
  const rest = results.filter((item) => !photographed.includes(item));

  const countWith = (slot: Slot, value: string) =>
    base.filter((item) => matches(item, { ...selection, [slot]: value })).length;

  const write = (next: Selection) => {
    const url = new URL(window.location.href);
    (Object.keys(paramKey) as Slot[]).forEach((slot) => {
      if (next[slot] === "any") url.searchParams.delete(paramKey[slot]);
      else url.searchParams.set(paramKey[slot], next[slot]);
    });
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  };
  const choose = (slot: Slot, value: string) => {
    const next = { ...selection, [slot]: value };
    setSelection(next);
    setOpenSlot(null);
    write(next);
  };
  const reset = () => {
    const cleared: Selection = { length: "any", companion: "any", interest: "any" };
    setSelection(cleared);
    setLegacy(defaultJourneyFilters);
    window.history.replaceState(null, "", window.location.pathname + window.location.hash);
  };

  const sentence = (slot: Slot) => {
    const current = options[slot].find((choice) => choice.value === selection[slot]);
    const open = openSlot === slot;
    return (
      <span className={styles.slot}>
        <button
          type="button"
          className={styles.pick}
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpenSlot(open ? null : slot)}
        >
          {current?.label}
        </button>
        {open && (
          <ul className={styles.menu} role="listbox" aria-label={slot}>
            {options[slot].map((choice) => {
              const selected = choice.value === selection[slot];
              const count = countWith(slot, choice.value);
              return (
                <li key={choice.value} role="presentation">
                  <button
                    type="button"
                    role="option"
                    aria-selected={selected}
                    disabled={!selected && count === 0}
                    onClick={() => choose(slot, choice.value)}
                  >
                    <span>{choice.label}</span>
                    <small>{count}</small>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </span>
    );
  };

  const anySelection =
    selection.length !== "any" || selection.companion !== "any" || selection.interest !== "any";

  return (
    <>
      <section className={styles.finder} id="finder" aria-label="Find a journey" ref={finder}>
        <p className={styles.eyebrow}>{journeysCopy.finderEyebrow}</p>
        <div className={styles.sentence}>
          I’m traveling {sentence("length")} with {sentence("companion")}, hoping to see{" "}
          {sentence("interest")}.
        </div>
        <div className={styles.result} role="status">
          <span>
            {results.length > 0 ? (
              <>
                <b>{results.length}</b> {results.length === 1 ? "journey suits" : "journeys suit"}{" "}
                you.
              </>
            ) : (
              "Nothing matches all three just yet."
            )}
          </span>
          {(anySelection || legacyActive) && (
            <button type="button" className={styles.link} onClick={reset}>
              Show every journey
            </button>
          )}
        </div>
        {legacyActive && (
          <p className={styles.legacy}>
            Showing a pre-filtered selection.{" "}
            <button type="button" onClick={reset}>
              Clear <X size={12} aria-hidden="true" />
            </button>
          </p>
        )}
      </section>

      {feature && (
        <section className={styles.feature} aria-label="Featured journey">
          <Link
            className={styles.featurePhoto}
            href={feature.href}
            tabIndex={-1}
            aria-hidden="true"
          >
            <Image
              src={journeyPhotos[feature.slug].src}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
              style={{ objectPosition: journeyPhotos[feature.slug].position ?? "center" }}
            />
          </Link>
          <div className={styles.featureText}>
            <p className={styles.eyebrow}>{journeysCopy.featureEyebrow}</p>
            <h2>{plainTitle(feature)}</h2>
            <p className={styles.meta}>
              {routeLine(feature)} · {shortDuration(feature)}
            </p>
            <p>{getJourneyCardDescription(feature)}</p>
            {glossLine(feature) && <p className={styles.gloss}>{glossLine(feature)}</p>}
            <div className={styles.priceBlock}>
              <b>{priceLine(feature)}</b>
              <small>{priceBasis(feature)}</small>
            </div>
            <div className={styles.actions}>
              <Link className={styles.button} href="/start-planning?source=journeys-feature">
                Plan this journey
              </Link>
              <Link className={styles.link} href={feature.href}>
                View the journey
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className={styles.catalog} id="journey-catalog" aria-labelledby="journeys-title">
        <header className={styles.head}>
          <h2 id="journeys-title">{journeysCopy.journeysTitle}</h2>
          <p>{journeysCopy.journeysNote}</p>
        </header>

        {grid.length > 0 && (
          <div className={styles.grid}>
            {grid.map((item) => (
              <Link className={styles.tile} href={item.href} key={item.slug}>
                <div className={styles.photo}>
                  <Image
                    src={journeyPhotos[item.slug].src}
                    alt={journeyPhotos[item.slug].alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 42vw"
                    style={{ objectPosition: journeyPhotos[item.slug].position ?? "center" }}
                  />
                </div>
                <p className={styles.kicker}>
                  {routeLine(item)} · {shortDuration(item)}
                </p>
                <h3>{plainTitle(item)}</h3>
                <p className={styles.desc}>{getJourneyCardDescription(item)}</p>
                {glossLine(item) && <p className={styles.gloss}>{glossLine(item)}</p>}
                <div className={styles.foot}>
                  <b>{priceLine(item)}</b>
                  <small>{priceBasis(item)}</small>
                  <span>{item.bestForSummary}</span>
                </div>
              </Link>
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <>
            <header className={`${styles.head} ${styles.indexHead}`}>
              <h2>{journeysCopy.indexTitle}</h2>
              <p>{journeysCopy.indexNote}</p>
            </header>
            <ul className={styles.index}>
              {rest.map((item) => (
                <li key={item.slug}>
                  <Link href={item.href}>
                    <span className={styles.name}>{plainTitle(item)}</span>
                    <span className={styles.dur}>{shortDuration(item)}</span>
                    <span className={styles.kind}>
                      {isDayTour(item) ? "Private day tour" : "Specialist journey"}
                    </span>
                    <span className={styles.cost}>{priceLine(item)}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}

        {results.length === 0 && (
          <div className={styles.empty}>
            <h3>Tell us what you have in mind.</h3>
            <p>Every journey can be reshaped, and a specialist in China will reply within a day.</p>
            <div className={styles.actions}>
              <Link className={styles.button} href="/start-planning?source=journeys-empty">
                Plan my journey
              </Link>
              <button type="button" className={styles.link} onClick={reset}>
                Show every journey
              </button>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
