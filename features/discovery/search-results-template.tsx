import { Search } from "lucide-react";

import { SectionHeader } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { NoResultsState } from "@/components/empty-states/preset-empty-states";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Badge } from "@/components/ui/badge";
import { destinationAsset } from "@/content/destinations/assets";
import { discoveryIndex, popularSearches, searchDiscovery } from "@/content/discovery";
import { DiscoveryCard } from "@/features/discovery/discovery-card";
import { MyTripPanel } from "@/features/discovery/my-trip-panel";
import { Section } from "@/design-system/primitives/section";
import type { DiscoveryFilters, DiscoveryType } from "@/types/discovery";

type SearchResultsTemplateProps = {
  query: string;
  type?: DiscoveryType;
  filters?: Omit<DiscoveryFilters, "types" | "query">;
};

const searchNav = [
  { label: "Results", href: "#results" },
  { label: "Filters", href: "#filters" },
  { label: "My Trip", href: "#my-trip" },
];

export function SearchResultsTemplate({
  query,
  type,
  filters: activeFilters = {},
}: SearchResultsTemplateProps) {
  const filters: DiscoveryFilters = { ...activeFilters, ...(type ? { types: [type] } : {}) };
  const results = searchDiscovery(query, filters);
  const recommended = results.length ? results.slice(0, 3) : discoveryIndex.slice(0, 4);

  return (
    <PageContainer>
      <SiteNavigation items={searchNav} cta={{ label: "Plan My Journey", href: "#my-trip" }} />

      <SearchHero query={query} />

      <Section id="results" spacing="default" className="bg-white">
        <ContentContainer size="xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-start">
            <main className="grid gap-6">
              <SearchHeader query={query} count={results.length} />
              <FilterRail activeType={type} query={query} />
              <AdvancedFilters query={query} activeType={type} filters={activeFilters} />
              {results.length ? (
                results.map((item) => <DiscoveryCard key={item.id} item={item} />)
              ) : (
                <NoResultsState />
              )}
            </main>
            <div className="lg:sticky lg:top-28">
              <MyTripPanel />
            </div>
          </div>
        </ContentContainer>
      </Section>

      <Section spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Recommended"
            title="Useful places to continue."
            description="Recommendations are generated from the same discovery index and relationship logic used across the site."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {recommended.map((item) => (
              <DiscoveryCard key={item.id} item={item} />
            ))}
          </div>
        </ContentContainer>
      </Section>

      <Section spacing="default" className="bg-white">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={destinationAsset.beijingForbiddenCity}
            eyebrow="Private planning"
            title="Not sure what to search for?"
            description="Send us a few interests and we will suggest the first China route shape."
            primary={{ label: "Ask for Route Ideas", href: "mailto:chinaprimedmc@gmail.com" }}
            secondary={{
              label: "Read Planning Guide",
              href: "/journal/how-to-plan-a-first-private-trip-to-china",
            }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          { title: "Search", items: searchNav },
          {
            title: "Popular",
            items: popularSearches.slice(0, 4).map((term) => ({
              label: term,
              href: `/search?q=${encodeURIComponent(term)}`,
            })),
          },
          {
            title: "Explore",
            items: [
              { label: "Destinations", href: "/search?type=destination" },
              { label: "Tours", href: "/search?type=tour" },
              { label: "Journal", href: "/journal" },
            ],
          },
        ]}
        social={[
          { label: "Facebook", href: "https://www.facebook.com/share/1CqXTAXD1e/?mibextid=wwXIfr" },
          { label: "Instagram", href: "https://www.instagram.com/chinaprimedmc" },
        ]}
      />
    </PageContainer>
  );
}

function SearchHeader({ query, count }: { query: string; count: number }) {
  return (
    <div className="border-border bg-background/72 rounded-[2rem] border p-5 md:p-6">
      <div className="flex items-center gap-3">
        <span className="bg-foreground text-background grid size-11 place-items-center rounded-full">
          <Search size={18} aria-hidden="true" />
        </span>
        <div>
          <p className="text-xs font-bold tracking-[0.16em] uppercase opacity-60">
            {count} result{count === 1 ? "" : "s"}
          </p>
          <h1 className="text-2xl font-semibold tracking-[-0.03em]">
            {query ? query : "All discovery results"}
          </h1>
        </div>
      </div>
    </div>
  );
}

function SearchHero({ query }: { query: string }) {
  return (
    <section className="bg-background pt-28 pb-12 md:pt-36 md:pb-16">
      <ContentContainer size="xl">
        <div className="grid items-end gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="pb-2">
            <Badge>Discovery</Badge>
            <h1 className="mt-5 max-w-4xl text-4xl leading-[0.98] font-semibold tracking-[-0.04em] text-balance sm:text-5xl md:text-7xl">
              {query ? `Ideas for "${query}"` : "Find the China journey that fits your people."}
            </h1>
            <p className="text-muted mt-6 max-w-2xl text-base leading-7 md:text-lg">
              Search destinations, private journeys, experiences, and travel guides. Save the ideas
              that feel right, then turn them into one private route.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {popularSearches.slice(0, 4).map((term) => (
                <a key={term} href={`/search?q=${encodeURIComponent(term)}`}>
                  <Badge>{term}</Badge>
                </a>
              ))}
            </div>
          </div>
          <OptimizedImage
            src={destinationAsset.shanghaiSkyline.src}
            alt={destinationAsset.shanghaiSkyline.alt}
            width={destinationAsset.shanghaiSkyline.width ?? 1200}
            height={destinationAsset.shanghaiSkyline.height ?? 900}
            sizes="(min-width:1024px) 52vw, 100vw"
            objectPosition={destinationAsset.shanghaiSkyline.objectPosition}
            frameClassName="aspect-[16/11] rounded-[2rem] shadow-sm md:rounded-[2.5rem]"
            className="h-full w-full"
            priority
          />
        </div>
      </ContentContainer>
    </section>
  );
}

function FilterRail({ activeType, query }: { activeType?: DiscoveryType; query: string }) {
  const types: Array<{ label: string; value?: DiscoveryType }> = [
    { label: "All" },
    { label: "Destinations", value: "destination" },
    { label: "Tours", value: "tour" },
    { label: "Experiences", value: "experience" },
    { label: "Journal", value: "article" },
  ];

  return (
    <div id="filters" className="flex flex-wrap gap-2">
      {types.map((type) => {
        const href = `/search?${new URLSearchParams({
          ...(query ? { q: query } : {}),
          ...(type.value ? { type: type.value } : {}),
        }).toString()}`;
        const active = activeType === type.value || (!activeType && !type.value);

        return (
          <a key={type.label} href={href}>
            <Badge className={active ? "bg-foreground text-background" : undefined}>
              {type.label}
            </Badge>
          </a>
        );
      })}
    </div>
  );
}

function AdvancedFilters({
  activeType,
  filters,
  query,
}: {
  activeType?: DiscoveryType;
  filters: Omit<DiscoveryFilters, "types" | "query">;
  query: string;
}) {
  return (
    <div className="border-border bg-background/72 grid gap-4 rounded-[1.5rem] border p-4 md:grid-cols-2 md:p-5">
      <FilterGroup
        title="Region"
        options={["North China", "East China", "Southwest China", "China-wide", "Multi-region"]}
        active={filters.region?.[0]}
        filters={filters}
        param="region"
        query={query}
        activeType={activeType}
      />
      <FilterGroup
        title="Travel style"
        options={["First-time China", "Family", "Luxury", "Culture"]}
        active={filters.travelStyle?.[0]}
        filters={filters}
        param="style"
        query={query}
        activeType={activeType}
      />
      <FilterGroup
        title="Length"
        options={["1-7", "8-12", "13+"]}
        active={filters.days?.[0]}
        filters={filters}
        param="days"
        query={query}
        activeType={activeType}
      />
      <div>
        <p className="text-muted mb-3 text-xs font-bold tracking-[0.14em] uppercase">Needs</p>
        <div className="flex flex-wrap gap-2">
          <FilterPill
            label="Family friendly"
            href={buildFilterHref(query, activeType, {
              ...filters,
              familyFriendly: filters.familyFriendly ? undefined : true,
            })}
            active={Boolean(filters.familyFriendly)}
          />
          <FilterPill
            label="Private tour"
            href={buildFilterHref(query, activeType, {
              ...filters,
              privateTour: filters.privateTour ? undefined : true,
            })}
            active={Boolean(filters.privateTour)}
          />
          {hasAnyFilter(filters) ? (
            <FilterPill label="Clear filters" href={buildFilterHref(query, activeType, {})} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({
  active,
  activeType,
  filters,
  options,
  param,
  query,
  title,
}: {
  active?: string;
  activeType?: DiscoveryType;
  filters: Omit<DiscoveryFilters, "types" | "query">;
  options: string[];
  param: "region" | "style" | "days";
  query: string;
  title: string;
}) {
  return (
    <div>
      <p className="text-muted mb-3 text-xs font-bold tracking-[0.14em] uppercase">{title}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <FilterPill
            key={option}
            label={option}
            href={buildFilterHref(query, activeType, {
              ...filters,
              ...(param === "region" ? { region: active === option ? undefined : [option] } : {}),
              ...(param === "style"
                ? { travelStyle: active === option ? undefined : [option] }
                : {}),
              ...(param === "days" ? { days: active === option ? undefined : [option] } : {}),
            })}
            active={active === option}
          />
        ))}
      </div>
    </div>
  );
}

function FilterPill({
  active = false,
  href,
  label,
}: {
  active?: boolean;
  href: string;
  label: string;
}) {
  return (
    <a href={href}>
      <Badge className={active ? "bg-foreground text-background" : "bg-white/78"}>{label}</Badge>
    </a>
  );
}

function buildFilterHref(
  query: string,
  type: DiscoveryType | undefined,
  filters: Omit<DiscoveryFilters, "types" | "query">,
) {
  return buildUrl({
    query,
    type,
    region: filters.region?.[0],
    style: filters.travelStyle?.[0],
    days: filters.days?.[0],
    family: filters.familyFriendly ? "true" : undefined,
    private: filters.privateTour ? "true" : undefined,
  });
}

function buildUrl(params: {
  days?: string;
  family?: string;
  private?: string;
  query?: string;
  region?: string;
  style?: string;
  type?: DiscoveryType;
}) {
  const searchParams = new URLSearchParams({
    ...(params.query ? { q: params.query } : {}),
    ...(params.type ? { type: params.type } : {}),
    ...(params.region ? { region: params.region } : {}),
    ...(params.style ? { style: params.style } : {}),
    ...(params.days ? { days: params.days } : {}),
    ...(params.family ? { family: params.family } : {}),
    ...(params.private ? { private: params.private } : {}),
  });

  return `/search?${searchParams.toString()}`;
}

function hasAnyFilter(filters: Omit<DiscoveryFilters, "types" | "query">) {
  return Boolean(
    filters.region?.length ||
    filters.travelStyle?.length ||
    filters.days?.length ||
    filters.familyFriendly ||
    filters.privateTour,
  );
}
