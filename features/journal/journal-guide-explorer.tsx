"use client";

import { useMemo, useState } from "react";

import { BlogCard } from "@/components/cards/blog-card";
import { ContentContainer } from "@/components/layout/content-container";
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
        <div className="grid gap-5 border-b border-black/8 pb-7 md:grid-cols-[0.82fr_1.18fr] md:items-end md:pb-9">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-neutral-500 uppercase">
              Find the right guide
            </p>
            <h2 className="mt-3 max-w-xl font-serif text-[2.35rem] leading-[1.02] font-medium tracking-normal text-neutral-950 md:text-5xl">
              What do you need help with?
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-neutral-600 md:justify-self-end md:text-base md:leading-7">
            Choose the question closest to your trip. We will show the most useful answers first.
          </p>
        </div>

        <div
          className="-mx-5 [scrollbar-width:none] overflow-x-auto px-5 py-5 sm:-mx-6 sm:px-6 md:py-6 lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden"
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
                    "min-h-11 shrink-0 cursor-pointer rounded-full border px-5 text-sm font-semibold transition-[background-color,color,border-color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 active:scale-[0.98]",
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
          className="grid gap-6 motion-safe:animate-[journal-results-in_240ms_var(--motion-ease-out)_both] md:gap-8"
        >
          {leadArticle ? (
            <div className="grid gap-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold tracking-[0.14em] text-neutral-500 uppercase">
                  {activeFilter === "all" ? "Start here" : `${currentFilter.label} guide`}
                </p>
                <p className="text-xs text-neutral-500">
                  {filteredArticles.length} {filteredArticles.length === 1 ? "guide" : "guides"}
                </p>
              </div>
              <BlogCard
                title={leadArticle.title}
                excerpt={leadArticle.excerpt}
                href={`/journal/${leadArticle.slug}`}
                image={leadArticle.hero.image}
                category={getPrimaryLabel(leadArticle)}
                date={leadArticle.readingTime}
                variant="featured"
                imageRatio="landscape"
                eager={activeFilter === "all"}
              />
            </div>
          ) : null}

          {remainingArticles.length ? (
            <div className="grid gap-5 md:grid-cols-2 md:gap-6">
              {remainingArticles.map((article) => (
                <BlogCard
                  key={article.slug}
                  title={article.title}
                  excerpt={article.excerpt}
                  href={`/journal/${article.slug}`}
                  image={article.hero.image}
                  category={getPrimaryLabel(article)}
                  date={article.readingTime}
                  imageRatio="landscape"
                  className="h-full"
                />
              ))}
            </div>
          ) : null}
        </div>
      </ContentContainer>
    </Section>
  );
}
