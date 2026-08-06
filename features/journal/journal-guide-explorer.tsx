"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { ContentContainer } from "@/components/layout/content-container";
import { OptimizedImage } from "@/components/media/optimized-image";
import { Section } from "@/design-system/primitives/section";
import { cn } from "@/lib/utils/cn";
import type { JournalArticle } from "@/types/journal";

type JournalGuideExplorerProps = {
  articles: JournalArticle[];
  featuredSlug: string;
};

type GuideFilter = {
  id: "all" | "first-trip" | "entry" | "practical" | "family" | "destinations";
  label: string;
  matches: (article: JournalArticle) => boolean;
};

const guideFilters: GuideFilter[] = [
  { id: "all", label: "All Guides", matches: () => true },
  {
    id: "first-trip",
    label: "First Trip",
    matches: (article) => article.tags.includes("first-time-china"),
  },
  {
    id: "entry",
    label: "Entry & Visas",
    matches: (article) =>
      article.category === "Visa" || article.slug.includes("accommodation-registration"),
  },
  {
    id: "practical",
    label: "Practical Travel",
    matches: (article) =>
      article.category === "Train Travel" ||
      article.slug.includes("mobile-payments") ||
      article.slug.includes("accommodation-registration"),
  },
  {
    id: "family",
    label: "Family Travel",
    matches: (article) =>
      article.category === "Family Travel" || article.tags.includes("family-travel"),
  },
  {
    id: "destinations",
    label: "Destinations",
    matches: (article) => article.category === "Destinations",
  },
];

const preferredLeadSlugs: Partial<Record<GuideFilter["id"], string>> = {
  "first-trip": "how-to-plan-a-first-private-trip-to-china",
  entry: "china-240-hour-visa-free-transit-guide",
  practical: "china-high-speed-train-foreigners",
  family: "china-with-kids-what-actually-works",
  destinations: "forbidden-city-tickets-foreigners",
};

function getPrimaryLabel(article: JournalArticle) {
  if (article.category === "Visa") return "Entry & Visas";
  if (article.category === "Train Travel" || article.slug.includes("mobile-payments")) {
    return "Practical Travel";
  }
  if (article.category === "Family Travel") return "Family Travel";
  if (article.category === "Destinations") return "Destinations";
  if (article.tags.includes("first-time-china")) return "First Trip";
  return "Travel Guides";
}

export function JournalGuideExplorer({ articles, featuredSlug }: JournalGuideExplorerProps) {
  const [activeFilter, setActiveFilter] = useState<GuideFilter["id"]>("all");
  const currentFilter =
    guideFilters.find((filter) => filter.id === activeFilter) ?? guideFilters[0];
  const filteredArticles = useMemo(
    () => articles.filter(currentFilter.matches),
    [articles, currentFilter],
  );
  const preferredLeadSlug = preferredLeadSlugs[activeFilter];
  const leadArticle =
    filteredArticles.find((article) => article.slug === preferredLeadSlug) ??
    (activeFilter === "all"
      ? (filteredArticles.find((article) => article.slug === featuredSlug) ?? filteredArticles[0])
      : filteredArticles[0]);
  const remainingArticles = filteredArticles.filter(
    (article) => article.slug !== leadArticle?.slug,
  );

  return (
    <Section
      id="guides"
      spacing="compact"
      className="border-b border-black/6 bg-[var(--bg-primary)]"
    >
      <ContentContainer size="xl">
        <div className="grid gap-4 border-b border-black/8 pb-6 md:grid-cols-[0.8fr_1.2fr] md:items-end md:pb-7">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-neutral-500 uppercase">
              Find the right guide
            </p>
            <h2 className="mt-2 max-w-xl font-serif text-[2rem] leading-[1.04] font-medium tracking-normal text-neutral-950 md:text-4xl">
              What do you need help with?
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-neutral-600 md:justify-self-end md:text-[0.95rem] md:leading-6">
            Choose the question closest to your trip. We will show the most useful answers first.
          </p>
        </div>

        <div
          className="-mx-5 [scrollbar-width:none] overflow-x-auto px-5 py-4 sm:-mx-6 sm:px-6 md:py-5 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
          aria-label="Filter China travel guides"
          role="group"
        >
          <div className="flex w-max min-w-full gap-2 lg:w-full lg:flex-wrap">
            {guideFilters.map((filter) => {
              const active = filter.id === activeFilter;
              return (
                <button
                  key={filter.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveFilter(filter.id)}
                  className={cn(
                    "min-h-10 shrink-0 cursor-pointer rounded-full border px-4 text-[0.82rem] font-semibold transition-[background-color,color,border-color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 active:scale-[0.98]",
                    active
                      ? "border-neutral-950 bg-neutral-950 text-white"
                      : "border-black/10 bg-white text-neutral-700 hover:border-black/25 hover:text-neutral-950",
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <p className="sr-only" aria-live="polite">
          {filteredArticles.length} {filteredArticles.length === 1 ? "guide" : "guides"} shown.
        </p>

        <div
          key={activeFilter}
          className="grid gap-7 motion-safe:animate-[journal-results-in_180ms_var(--motion-ease-out)_both]"
        >
          {leadArticle ? (
            <div className="grid gap-3">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold tracking-[0.14em] text-neutral-500 uppercase">
                  {activeFilter === "all" ? "Start here" : `${currentFilter.label} guide`}
                </p>
                <p className="text-xs text-neutral-500">
                  {filteredArticles.length} {filteredArticles.length === 1 ? "guide" : "guides"}
                </p>
              </div>
              <LeadGuide article={leadArticle} eager={activeFilter === "all"} />
            </div>
          ) : null}

          {remainingArticles.length ? (
            <div className="border-y border-black/8">
              {remainingArticles.map((article) => (
                <GuideListItem key={article.slug} article={article} />
              ))}
            </div>
          ) : null}
        </div>
      </ContentContainer>
    </Section>
  );
}

function LeadGuide({ article, eager }: { article: JournalArticle; eager: boolean }) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group grid grid-cols-[7.25rem_minmax(0,1fr)] overflow-hidden rounded-2xl border border-black/8 bg-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(43,42,37,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:grid-cols-[0.86fr_1.14fr]"
    >
      <div className="relative overflow-hidden">
        <OptimizedImage
          src={article.hero.image.src}
          alt={article.hero.image.alt}
          width={article.hero.image.width ?? 900}
          height={article.hero.image.height ?? 620}
          loading={eager ? "eager" : "lazy"}
          sizes="(min-width: 768px) 42vw, 100vw"
          frameClassName="h-full aspect-[4/3] md:aspect-auto"
          className="h-full w-full transition-transform duration-300 ease-[var(--motion-ease-out)] group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
        />
      </div>
      <div className="grid gap-3 p-4 md:gap-5 md:p-7">
        <div>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.57rem] font-semibold tracking-[0.1em] text-neutral-500 uppercase md:gap-x-3 md:text-[0.65rem] md:tracking-[0.12em]">
            <span>{getPrimaryLabel(article)}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readingTime}</span>
          </div>
          <h3 className="mt-2 line-clamp-3 max-w-2xl font-serif text-[1.28rem] leading-[1.04] font-medium tracking-normal text-neutral-950 md:mt-3 md:text-[2.35rem]">
            {article.title}
          </h3>
          <p className="mt-2 line-clamp-2 max-w-2xl text-[0.76rem] leading-5 text-neutral-600 md:mt-3 md:text-base md:leading-7">
            {article.excerpt}
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950">
          Read the guide
          <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

function GuideListItem({ article }: { article: JournalArticle }) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group grid grid-cols-[5.5rem_minmax(0,1fr)] gap-4 border-b border-black/8 py-4 last:border-b-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-neutral-950 md:grid-cols-[11.25rem_minmax(0,1fr)_auto] md:items-center md:gap-6 md:py-5"
    >
      <div className="overflow-hidden rounded-xl bg-neutral-100">
        <OptimizedImage
          src={article.hero.image.src}
          alt={article.hero.image.alt}
          width={article.hero.image.width ?? 900}
          height={article.hero.image.height ?? 620}
          loading="lazy"
          sizes="(min-width: 768px) 180px, 88px"
          frameClassName="aspect-[4/3]"
          className="h-full w-full transition-transform duration-300 ease-[var(--motion-ease-out)] group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none"
        />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.62rem] font-semibold tracking-[0.12em] text-neutral-500 uppercase">
          <span>{getPrimaryLabel(article)}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readingTime}</span>
        </div>
        <h3 className="mt-1.5 line-clamp-2 text-[1.02rem] leading-[1.16] font-semibold tracking-[-0.01em] text-neutral-950 md:text-[1.35rem]">
          {article.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-5 text-neutral-600 md:max-w-3xl md:text-[0.95rem] md:leading-6">
          {article.excerpt}
        </p>
      </div>
      <span className="hidden size-9 items-center justify-center rounded-full border border-black/10 text-neutral-700 transition-[background-color,color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:bg-neutral-950 group-hover:text-white md:inline-flex">
        <ArrowUpRight size={15} aria-hidden="true" />
        <span className="sr-only">Read the guide</span>
      </span>
    </Link>
  );
}
