"use client";

import { ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

import { ContentContainer } from "@/components/layout/content-container";
import { OptimizedImage } from "@/components/media/optimized-image";
import { journalSearchStrategy } from "@/content/journal/search-strategy";
import { Section } from "@/design-system/primitives/section";
import { cn } from "@/lib/utils/cn";
import type { JournalArticle } from "@/types/journal";

type JournalGuideExplorerProps = {
  articles: JournalArticle[];
  featuredSlug: string;
};

type TopicId =
  | "all"
  | "first-trip"
  | "private-tours"
  | "essentials"
  | "beijing-xian"
  | "chengdu-pandas"
  | "nature"
  | "life-stage";

type TopicFilter = {
  id: TopicId;
  label: string;
  pillar?: string;
};

const topicFilters: TopicFilter[] = [
  { id: "all", label: "All Guides" },
  { id: "first-trip", label: "First China Trip", pillar: "First China trip planning" },
  { id: "private-tours", label: "Private Tours", pillar: "Private tour decision" },
  { id: "essentials", label: "Travel Essentials", pillar: "China arrival essentials" },
  { id: "beijing-xian", label: "Beijing & Xi'an", pillar: "Beijing and Xi'an planning" },
  { id: "chengdu-pandas", label: "Chengdu & Pandas", pillar: "Chengdu and panda planning" },
  { id: "nature", label: "Nature Routes", pillar: "Jiuzhaigou and Zhangjiajie" },
  { id: "life-stage", label: "Families & Couples", pillar: "Travel by life stage" },
];

const preferredLeadSlugs: Partial<Record<TopicId, string>> = {
  "first-trip": "how-many-days-in-china-7-10-14-day-itineraries",
  "private-tours": "how-to-choose-private-china-tour-company",
  essentials: "china-240-hour-visa-free-transit-guide",
  "beijing-xian": "beijing-xian-itinerary-how-many-days",
  "chengdu-pandas": "how-many-days-in-chengdu-itinerary",
  nature: "jiuzhaigou-or-zhangjiajie",
  "life-stage": "china-family-itinerary-10-to-14-days",
};

function getPrimaryLabel(article: JournalArticle) {
  const role = journalSearchStrategy[article.slug];
  if (role?.pillar) return role.pillar;
  if (article.category === "Industry News") return "AVIORA News";
  if (article.category === "Visa") return "Entry & Visas";
  return article.category;
}

function matchesSearch(article: JournalArticle, query: string) {
  if (!query) return true;
  const role = journalSearchStrategy[article.slug];
  const haystack = [
    article.title,
    article.dek,
    article.excerpt,
    article.category,
    article.tags.join(" "),
    role?.pillar,
    role?.primaryKeyword,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

export function JournalGuideExplorer({ articles, featuredSlug }: JournalGuideExplorerProps) {
  const [activeTopic, setActiveTopic] = useState<TopicId>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const currentTopic = topicFilters.find((topic) => topic.id === activeTopic) ?? topicFilters[0];

  const filteredArticles = useMemo(() => {
    return articles
      .filter((article) => {
        const role = journalSearchStrategy[article.slug];
        const matchesTopic = !currentTopic.pillar || role?.pillar === currentTopic.pillar;
        return matchesTopic && matchesSearch(article, normalizedQuery);
      })
      .sort((a, b) => {
        const priorityA = journalSearchStrategy[a.slug]?.commercialPriority ?? 3;
        const priorityB = journalSearchStrategy[b.slug]?.commercialPriority ?? 3;
        return priorityA - priorityB || b.publishedAt.localeCompare(a.publishedAt);
      });
  }, [articles, currentTopic.pillar, normalizedQuery]);

  const preferredLeadSlug = preferredLeadSlugs[activeTopic];
  const leadArticle =
    filteredArticles.find((article) => article.slug === preferredLeadSlug) ??
    (activeTopic === "all" && !normalizedQuery
      ? (filteredArticles.find((article) => article.slug === featuredSlug) ?? filteredArticles[0])
      : filteredArticles[0]);
  const remainingArticles = filteredArticles.filter(
    (article) => article.slug !== leadArticle?.slug,
  );
  const visibleArticles = remainingArticles.slice(0, visibleCount);

  const selectTopic = (topic: TopicId) => {
    setActiveTopic(topic);
    setVisibleCount(12);
  };

  return (
    <Section id="guides" spacing="compact" className="border-b border-black/6 bg-white">
      <ContentContainer size="xl">
        <div className="grid gap-6 border-b border-black/8 pb-7 lg:grid-cols-[minmax(0,0.8fr)_minmax(22rem,1.2fr)] lg:items-end lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-neutral-500 uppercase">
              Find The Right Guide
            </p>
            <h2 className="mt-2 max-w-xl font-serif text-[1.9rem] leading-[1.05] font-medium tracking-normal text-neutral-950 md:text-[2.35rem]">
              What Are You Planning?
            </h2>
          </div>
          <label className="relative block">
            <span className="sr-only">Search China travel guides</span>
            <Search
              size={18}
              strokeWidth={1.75}
              className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-neutral-500"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setVisibleCount(12);
              }}
              placeholder="Search Destinations, Trip Length Or Travel Advice"
              className="min-h-12 w-full rounded-lg border border-black/12 bg-white pr-4 pl-11 text-sm text-neutral-950 transition-[border-color,box-shadow] outline-none placeholder:text-neutral-500 focus:border-black/35 focus:ring-2 focus:ring-black/5"
            />
          </label>
        </div>

        <div className="border-b border-black/8 py-4">
          <label className="block md:hidden">
            <span className="mb-2 block text-[0.68rem] font-semibold tracking-[0.12em] text-neutral-500 uppercase">
              Guide Topic
            </span>
            <select
              value={activeTopic}
              onChange={(event) => selectTopic(event.target.value as TopicId)}
              className="min-h-11 w-full rounded-lg border border-black/12 bg-white px-3 text-sm font-semibold text-neutral-900"
            >
              {topicFilters.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.label}
                </option>
              ))}
            </select>
          </label>

          <div
            className="hidden flex-wrap gap-x-7 gap-y-2 md:flex"
            role="group"
            aria-label="Filter China travel guides"
          >
            {topicFilters.map((topic) => {
              const active = topic.id === activeTopic;
              return (
                <button
                  key={topic.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => selectTopic(topic.id)}
                  className={cn(
                    "min-h-10 cursor-pointer border-b-2 px-0.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-950",
                    active
                      ? "border-neutral-950 text-neutral-950"
                      : "border-transparent text-neutral-500 hover:border-black/20 hover:text-neutral-900",
                  )}
                >
                  {topic.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 py-5">
          <p className="text-xs font-semibold tracking-[0.12em] text-neutral-500 uppercase">
            {normalizedQuery ? "Search Results" : currentTopic.label}
          </p>
          <p className="text-xs text-neutral-500" aria-live="polite">
            {filteredArticles.length} {filteredArticles.length === 1 ? "Guide" : "Guides"}
          </p>
        </div>

        {leadArticle ? (
          <div className="grid gap-7">
            <LeadGuide article={leadArticle} />
            {remainingArticles.length ? (
              <>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {visibleArticles.map((article) => (
                    <GuideCard key={article.slug} article={article} />
                  ))}
                </div>
                {visibleCount < remainingArticles.length ? (
                  <div className="flex justify-center border-t border-black/8 pt-6">
                    <button
                      type="button"
                      onClick={() => setVisibleCount((count) => count + 12)}
                      className="min-h-11 rounded-lg border border-black/15 bg-white px-5 text-sm font-semibold text-neutral-800 transition-[border-color,transform] hover:-translate-y-0.5 hover:border-black/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
                    >
                      Show More Guides
                    </button>
                  </div>
                ) : null}
              </>
            ) : null}
          </div>
        ) : (
          <div className="border-y border-black/8 py-14 text-center">
            <h3 className="font-serif text-2xl font-medium text-neutral-950">No Matching Guides</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Try a destination, trip length or a broader planning question.
            </p>
          </div>
        )}
      </ContentContainer>
    </Section>
  );
}

function LeadGuide({ article }: { article: JournalArticle }) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group grid overflow-hidden rounded-lg border border-black/8 bg-white transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(43,42,37,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:grid-cols-[0.9fr_1.1fr]"
    >
      <div className="bg-neutral-100">
        <OptimizedImage
          src={article.hero.image.src}
          alt={article.hero.image.alt}
          width={article.hero.image.width ?? 900}
          height={article.hero.image.height ?? 620}
          loading="eager"
          sizes="(min-width: 768px) 45vw, 100vw"
          frameClassName="w-full md:h-full"
          className="h-auto w-full object-contain md:h-full md:object-cover"
        />
      </div>
      <div className="flex flex-col justify-center p-5 md:p-8">
        <p className="text-[0.65rem] font-semibold tracking-[0.1em] text-neutral-500 uppercase">
          Start Here · {article.readingTime}
        </p>
        <h3 className="mt-3 max-w-2xl font-serif text-[1.55rem] leading-[1.08] font-medium tracking-normal text-neutral-950 md:text-[2rem]">
          {article.title}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600 md:text-[0.95rem]">
          {article.excerpt}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-neutral-950">
          Read The Guide
          <ArrowUpRight size={16} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

function GuideCard({ article }: { article: JournalArticle }) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      className="group grid content-start overflow-hidden rounded-lg border border-black/8 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
    >
      <div className="overflow-hidden bg-neutral-100">
        <OptimizedImage
          src={article.hero.image.src}
          alt={article.hero.image.alt}
          width={article.hero.image.width ?? 900}
          height={article.hero.image.height ?? 620}
          loading="lazy"
          sizes="(min-width: 1280px) 31vw, (min-width: 768px) 48vw, 100vw"
          frameClassName="aspect-[16/10]"
          className="h-full w-full object-cover transition-transform duration-300 ease-[var(--motion-ease-out)] group-hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
        />
      </div>
      <div className="grid gap-2 p-4">
        <div className="flex items-center justify-between gap-3 text-[0.62rem] font-semibold tracking-[0.08em] text-neutral-500 uppercase">
          <span className="line-clamp-1">{getPrimaryLabel(article)}</span>
          <span className="shrink-0">{article.readingTime}</span>
        </div>
        <h3 className="line-clamp-2 text-[1.05rem] leading-[1.2] font-semibold text-neutral-950 md:text-[1.15rem]">
          {article.title}
        </h3>
        <p className="line-clamp-2 text-sm leading-5 text-neutral-600">{article.excerpt}</p>
        <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-800">
          Read Guide <ArrowUpRight size={14} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}
