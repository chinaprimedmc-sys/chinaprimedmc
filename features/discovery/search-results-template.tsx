import Link from "next/link";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { SiteFooter } from "@/components/footer/site-footer";
import { JourneyCatalog } from "@/components/tours/journey-catalog";
import { journeyCatalog } from "@/content/tours/catalog";
import { searchDiscovery } from "@/content/discovery";
import { DiscoveryCard } from "./discovery-card";
import { MyTripPanel } from "./my-trip-panel";
import type { DiscoveryType } from "@/types/discovery";

export function SearchResultsTemplate({
  query,
  type,
  initialQueryString = "",
}: {
  query: string;
  type?: DiscoveryType;
  initialQueryString?: string;
}) {
  const editorial = searchDiscovery(query, type && type !== "tour" ? { types: [type] } : {}).filter(
    (item) => item.type !== "tour",
  );
  return (
    <PageContainer>
      <SiteNavigation />
      <section className="mx-auto max-w-6xl px-6 pt-8 pb-6">
        <h1 className="type-page-title">Search China</h1>
        <p className="text-muted mt-3 text-base leading-7">
          Find journeys, destinations and practical travel advice.
        </p>
        <form action="/search" className="mt-5 flex gap-3">
          <label className="min-w-0 flex-1">
            <span className="sr-only">Search the website</span>
            <input
              name="query"
              type="search"
              defaultValue={query}
              className="border-border w-full rounded-xl border bg-white p-3 text-base"
              placeholder="Where would you like to go?"
            />
          </label>
          <button className="bg-foreground rounded-xl px-5 text-white" type="submit">
            Search
          </button>
        </form>
        <nav aria-label="Search categories" className="mt-5 flex flex-wrap gap-4">
          {[
            { label: "All", value: "" },
            { label: "Journeys", value: "tour" },
            { label: "Destinations", value: "destination" },
            { label: "Travel guides", value: "article" },
          ].map((option) => (
            <Link
              key={option.label}
              href={
                "/search?" +
                new URLSearchParams({ query, ...(option.value ? { type: option.value } : {}) })
              }
              aria-current={(type ?? "") === option.value ? "page" : undefined}
              className="min-h-11 font-semibold underline underline-offset-4"
            >
              {option.label}
            </Link>
          ))}
        </nav>
      </section>
      {(!type || type === "tour") && (
        <JourneyCatalog
          items={journeyCatalog}
          initialQueryString={initialQueryString}
          variant="search"
        />
      )}
      {type !== "tour" && (
        <section className="mx-auto max-w-6xl px-6 py-8">
          <h2 className="type-section-title">Ideas and advice</h2>
          <p className="text-muted mt-3">{editorial.length} results</p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {editorial.map((item) => (
              <DiscoveryCard key={item.id} item={item} />
            ))}
          </div>
          {!editorial.length && (
            <p className="mt-4">No results for this search. Try a city name or a broader topic.</p>
          )}
        </section>
      )}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <MyTripPanel />
      </section>
      <SiteFooter columns={[]} social={[]} />
    </PageContainer>
  );
}
