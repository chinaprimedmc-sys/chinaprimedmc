"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  MessageCircle,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Link from "next/link";
import { useDeferredValue, useEffect, useMemo, useState } from "react";

import { TrackedLink } from "@/components/cta/tracked-link";
import { OptimizedImage } from "@/components/media/optimized-image";
import type {
  JourneyCatalogItem,
  JourneyCommercialRoleId,
  JourneyFocusId,
  JourneyPlanningNeedId,
  JourneyTravelerId,
} from "@/content/tours/catalog";
import { trackEvent } from "@/lib/analytics/events";
import styles from "./journey-discovery.module.css";

type SortId = "recommended" | "shortest" | "longest" | "relaxed" | "active";
type ServiceCategory = "complete-private-journeys" | "private-day-tours";
type Filters = {
  commercialRoles: JourneyCommercialRoleId[];
  focus: JourneyFocusId[];
  duration: string[];
  destinations: string[];
  pace: string[];
  walking: string[];
  altitude: string[];
  transport: string[];
  travellers: JourneyTravelerId[];
  needs: JourneyPlanningNeedId[];
  seasons: string[];
};

const emptyFilters: Filters = {
  commercialRoles: [],
  focus: [],
  duration: [],
  destinations: [],
  pace: [],
  walking: [],
  altitude: [],
  transport: [],
  travellers: [],
  needs: [],
  seasons: [],
};
const commercialRoleOptions: Array<[JourneyCommercialRoleId, string, string]> = [
  ["signature", "AVIORA Signature", "Our most distinctive, story-led private journeys"],
  ["essential", "Multi-city essentials", "Clear, considered routes across China's defining contrasts"],
  ["nature", "Nature & local life", "Pandas, mountain landscapes and regional food culture"],
  [
    "extension",
    "Focused private journeys",
    "City, regional and business journeys built around your existing plans",
  ],
];
const focusOptions: Array<[JourneyFocusId, string]> = [
  ["first-trip", "First trip to China"],
  ["business", "Business travel"],
  ["culture", "History & culture"],
  ["food", "Food & local life"],
  ["nature", "Nature & scenery"],
  ["wildlife", "Wildlife & pandas"],
  ["family", "Family time"],
  ["wellness", "Wellness & retreat"],
  ["photography", "Photography"],
  ["slow-travel", "Slow travel"],
];
const durationOptions = [
  ["1-2", "1–2 days"],
  ["3-5", "3–5 days"],
  ["6-8", "6–8 days"],
  ["9-11", "9–11 days"],
  ["12-14", "12–14 days"],
  ["15+", "15+ days"],
] as const;
const paceOptions = [
  ["easy", "Easy-going"],
  ["balanced", "Balanced"],
  ["active", "More active"],
] as const;
const walkingOptions = [
  ["minimal", "Minimal walking"],
  ["moderate", "Moderate walking"],
  ["active", "Active walking"],
] as const;
const altitudeOptions = [
  ["none", "No high-altitude stays"],
  ["some", "Some altitude"],
  ["high", "High-altitude travel"],
] as const;
const transportOptions = [
  ["fewer", "Prefer fewer transfers"],
  ["high-speed-rail", "High-speed rail included"],
  ["domestic-flight", "Domestic flights included"],
] as const;
const travellerOptions: Array<[JourneyTravelerId, string]> = [
  ["couples", "Couples"],
  ["families", "Families"],
  ["multigenerational", "Multi-generational groups"],
  ["solo-travelers", "Solo travellers"],
];
const planningNeedOptions: Array<[JourneyPlanningNeedId, string]> = [
  ["muslim-friendly", "Muslim-friendly planning"],
  ["women-traveler-support", "Support for women travelers"],
  ["slower-pacing", "A slower, easier pace"],
  ["child-friendly", "Child-friendly planning"],
  ["mobility-aware", "Mobility-aware planning"],
  ["vegetarian-friendly", "Vegetarian-friendly planning"],
];
const seasonOptions = [
  ["spring", "Spring"],
  ["summer", "Summer"],
  ["autumn", "Autumn"],
  ["winter", "Winter"],
] as const;
const sortOptions: Array<[SortId, string]> = [
  ["recommended", "Recommended"],
  ["shortest", "Shortest first"],
  ["longest", "Longest first"],
  ["relaxed", "More relaxed first"],
  ["active", "More active first"],
];

const whatsappNumber = "447985052302";
const serviceCards = [
  {
    eyebrow: "Complete private journeys",
    title: "Let us shape the journey from beginning to end.",
    formalName: "Tailor-made multi-city China travel",
    description:
      "Hotels, private guides, vehicles, admissions and domestic travel brought together into one carefully paced journey.",
    href: "#multi-city-journeys",
    label: "Explore multi-city journeys",
  },
  {
    eyebrow: "Private day tours",
    title: "One day can still become the story you remember.",
    formalName: "Professionally handled private China day tours",
    description:
      "Experience the Great Wall, pandas, Shanghai, Xi'an or the Li River with the practical details already coordinated.",
    href: "#private-day-tours",
    label: "Explore private day tours",
  },
  {
    eyebrow: "Private vehicle & driver",
    title: "Move through China with quiet confidence.",
    formalName: "Private vehicle and driver service in China",
    description:
      "Tell us your route, date, party size and luggage. We will recommend the most suitable professionally operated arrangement.",
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello AVIORA, I need a private vehicle in China. My city or route is __, travel date is __, there are __ passengers and __ pieces of luggage.")}`,
    label: "Recommend my private vehicle",
  },
  {
    eyebrow: "Expert private guide",
    title: "See more when someone helps China make sense.",
    formalName: "English-speaking private guide service in China",
    description:
      "Share your destination, interests and preferred pace. We will recommend a guide suited to the place and the way you want to travel.",
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello AVIORA, I need a private guide in __ on __. There are __ guests. Our main interests are __ and our preferred language is __.")}`,
    label: "Match me with a private guide",
  },
] as const;

const marketingTitles: Record<string, string> = {
  "private-mutianyu-great-wall-day-tour": "The Great Wall Without the Logistics",
  "private-shanghai-day-tour-guide-driver": "Shanghai's Essential Contrasts in One Day",
  "private-xian-terracotta-warriors-day-tour": "Stand Face to Face with Ancient China",
  "private-chengdu-panda-day-tour-early-morning": "Pandas at Their Most Active",
  "guilin-yangshuo-li-river-cruise-private-day-tour": "Let the Li River Carry You to Yangshuo",
  "qingcheng-mountain-private-wellness-retreat-10-day": "Ten Days to Feel Like Yourself Again",
  "china-family-tour-with-pandas-12-day-private-tour":
    "The China Story Your Family Will Keep",
  "muslim-friendly-china-tour-great-wall-desert-stars":
    "A China Journey Where Faith Is Never an Afterthought",
  "china-at-an-easier-pace-12-day-private-tour": "See China Without Racing Through It",
  "guangzhou-shenzhen-tailor-made-business-tour-4-day":
    "China Business Travel That Works Around You",
};

const dayTourSlugs = new Set([
  "private-mutianyu-great-wall-day-tour",
  "private-shanghai-day-tour-guide-driver",
  "private-xian-terracotta-warriors-day-tour",
  "private-chengdu-panda-day-tour-early-morning",
  "guilin-yangshuo-li-river-cruise-private-day-tour",
]);

function whatsappHref(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function JourneyEditorialGrid({
  items,
  initialQueryString = "",
  hero,
}: {
  items: JourneyCatalogItem[];
  initialQueryString?: string;
  hero?: {
    eyebrow: string;
    title: string;
    description: string;
    service?: {
      eyebrow: string;
      title: string;
      description: string;
      items: Array<{
        title: string;
        detail: string;
      }>;
      confirmation: string;
      planningHref: string;
    };
  };
}) {
  const heroContent = hero ?? {
    eyebrow: "AVIORA · Private China Travel",
    title: "China, Made Personal.",
    description:
      "From a professionally arranged vehicle or expert private guide to a seamless day tour or complete multi-city journey, AVIORA shapes the right level of support around your plans.",
    service: undefined,
  };
  const initialUrlState = getInitialUrlState(initialQueryString);
  const [query, setQuery] = useState(initialUrlState.query);
  const deferredQuery = useDeferredValue(query);
  const [filters, setFilters] = useState<Filters>(initialUrlState.filters);
  const [serviceCategory, setServiceCategory] = useState<ServiceCategory | null>(
    initialUrlState.category,
  );
  const [sort, setSort] = useState<SortId>(initialUrlState.sort);
  const [limit, setLimit] = useState(12);
  const destinations = useMemo(
    () => Array.from(new Set(items.flatMap((item) => item.destinationFilters))).sort(),
    [items],
  );
  const results = useMemo(
    () =>
      sortItems(
        items.filter((item) => matches(item, filters, deferredQuery, serviceCategory)),
        sort,
      ),
    [items, filters, deferredQuery, serviceCategory, sort],
  );
  const active = Object.values(filters).flat().length;
  const summary = getSummary(filters, query);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query.trim()) params.set("q", query.trim());
    Object.entries(filters).forEach(([key, values]) => {
      if (values.length) params.set(key, values.join(","));
    });
    if (serviceCategory) params.set("category", serviceCategory);
    if (sort !== "recommended") params.set("sort", sort);
    history.replaceState(null, "", `${location.pathname}${params.size ? `?${params}` : ""}`);
  }, [filters, query, serviceCategory, sort]);

  useEffect(() => {
    const normalized = deferredQuery.trim();
    if (normalized.length < 2) return;

    const timeout = window.setTimeout(() => {
      trackEvent("journey_search", {
        query_length: normalized.length,
        results: results.length,
      });
    }, 700);

    return () => window.clearTimeout(timeout);
  }, [deferredQuery, results.length]);

  const toggle = <K extends keyof Filters>(key: K, value: Filters[K][number]) => {
    const selected = filters[key].includes(value as never);
    setFilters((current) => ({
      ...current,
      [key]: selected ? current[key].filter((item) => item !== value) : [...current[key], value],
    }));
    trackEvent("journey_filter_change", {
      filter: key,
      value: String(value).slice(0, 60),
      selected: !selected,
    });
  };
  const reset = () => {
    setFilters(emptyFilters);
    setQuery("");
    setServiceCategory(null);
    setLimit(12);
    trackEvent("journey_filters_reset");
  };
  const exploreService = (category: ServiceCategory) => {
    setFilters(emptyFilters);
    setQuery("");
    setServiceCategory(category);
    setLimit(12);
    window.requestAnimationFrame(() => {
      document
        .getElementById("journey-discovery")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <OptimizedImage
          src="/home/jiuzhaigou-five-flower-lake.webp"
          alt="Autumn forest reflected in the turquoise lakes of Jiuzhaigou Valley"
          fill
          sizes="100vw"
          priority
          frameClassName="absolute inset-0 h-full w-full bg-[#151816]"
          className="object-cover"
        />
        <div className={styles.heroShade} />
        <div className={styles.heroCopy}>
          <p>{heroContent.eyebrow}</p>
          <h1>{heroContent.title}</h1>
          <span>{heroContent.description}</span>
        </div>
      </section>
      <section className={styles.serviceAssurance} aria-label="AVIORA private China travel standards">
        <div className={styles.serviceAssuranceInner}>
          <div className={styles.serviceAssuranceBrand}>
            <span className={styles.serviceAssuranceBrandMark} aria-hidden="true">
              <ShieldCheck />
            </span>
            <span className={styles.serviceAssuranceBrandCopy}>
              <strong>THE AVIORA STANDARD</strong>
              <small>Assured in China</small>
            </span>
          </div>
          <div className={styles.serviceAssuranceProofs}>
            <div className={styles.serviceAssuranceProof}>
              <span className={styles.serviceAssuranceProofIcon} aria-hidden="true">
                <Check />
              </span>
              <span className={styles.serviceAssuranceProofCopy}>
                <strong>Licensed China-based operator</strong>
                <small>China-based operational responsibility</small>
              </span>
            </div>
            <div className={styles.serviceAssuranceProof}>
              <span className={styles.serviceAssuranceProofIcon} aria-hidden="true">
                <Check />
              </span>
              <span className={styles.serviceAssuranceProofCopy}>
                <strong>Private service throughout</strong>
                <small>One local team throughout your journey</small>
              </span>
            </div>
            <div className={styles.serviceAssuranceProof}>
              <span className={styles.serviceAssuranceProofIcon} aria-hidden="true">
                <Check />
              </span>
              <span className={styles.serviceAssuranceProofCopy}>
                <strong>No compulsory shopping</strong>
                <small>Your time remains your own</small>
              </span>
            </div>
          </div>
          <Link className={styles.serviceAssuranceLink} href="/about">
            <span>Verify AVIORA</span>
            <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </section>
      {heroContent.service ? (
        <section className={styles.profileService} aria-labelledby="journey-profile-service-title">
          <div className={styles.profileServiceInner}>
            <div className={styles.profileServiceHeader}>
              <div>
                <p>{heroContent.service.eyebrow}</p>
                <h2 id="journey-profile-service-title">{heroContent.service.title}</h2>
              </div>
              <div className={styles.profileServiceIntroduction}>
                <p>{heroContent.service.description}</p>
                <Link href={heroContent.service.planningHref}>
                  Plan Around My Needs
                  <ArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </div>

            <ul className={styles.profileServiceList}>
              {heroContent.service.items.map((item) => (
                <li key={item.title}>
                  <Check aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <p className={styles.profileServiceConfirmation}>
              <Check aria-hidden="true" />
              <span>{heroContent.service.confirmation}</span>
            </p>
          </div>
        </section>
      ) : null}
      <section className={styles.serviceChoices} aria-labelledby="support-level-title">
        <div className={styles.serviceChoicesHead}>
          <div>
            <p className={styles.eyebrow}>Begin where you are</p>
            <h2 id="support-level-title">Choose the level of support you need.</h2>
          </div>
          <p>
            Some travelers ask us to design every day. Others already have flights or hotels and
            simply need the right vehicle, guide or private experience.
          </p>
        </div>
        <div className={styles.serviceChoiceGrid}>
          {serviceCards.map((service) => {
            const external = service.href.startsWith("https://");
            return (
              <article className={styles.serviceChoice} key={service.eyebrow}>
                <p>{service.eyebrow}</p>
                <h3>{service.title}</h3>
                <strong>{service.formalName}</strong>
                <span>{service.description}</span>
                <Link href={service.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
                  {service.label} <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
        <div className={styles.existingPlans}>
          <span>Already arranged part of your trip?</span>
          <strong>We can work around your confirmed flights, hotels, meetings and personal plans.</strong>
          <Link href={whatsappHref("Hello AVIORA, I already have part of my China trip arranged and would like you to build around my existing plans.")} target="_blank" rel="noreferrer">
            Build around my existing plans <MessageCircle size={15} aria-hidden="true" />
          </Link>
        </div>
      </section>
      <SignatureShowcase items={items} />
      <DayTourShowcase items={items} />
      <section className={styles.discovery} id="journey-discovery">
        <div className={styles.discoveryHead}>
          <div>
            <p className={styles.eyebrow}>All private journeys & services</p>
            <h2>Find the journey that feels like yours.</h2>
          </div>
          <p>
            Search by destination, duration or travel style. Every published route is private and
            can be tailored around you.
          </p>
        </div>
        <div className={styles.journeyPaths} aria-label="Choose a journey collection">
          <p>Choose a starting point</p>
          <div>
            {commercialRoleOptions.map(([value, label, description]) => {
              const selected = filters.commercialRoles.includes(value);
              return (
                <button
                  key={value}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => {
                    setFilters((current) => ({
                      ...current,
                      commercialRoles: selected ? [] : [value],
                    }));
                    trackEvent("journey_collection_select", {
                      collection: value,
                      selected: !selected,
                    });
                  }}
                >
                  <strong>{label}</strong>
                  <span>{description}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className={styles.luxuryEntry}>
          <div>
            <span>Plan by travel style</span>
            <strong>Want more control over the details?</strong>
          </div>
          <p>
            See what luxury should change in the room, guide selection, transfers, private access
            and support when plans change.
          </p>
          <TrackedLink
            href="/luxury-china-tours"
            trackingLabel="Explore Luxury China Tours"
            trackingPlacement="journey-catalog-luxury-entry"
          >
            Explore Luxury China Tours <ArrowUpRight size={15} aria-hidden="true" />
          </TrackedLink>
        </div>
        <div className={styles.decisionTools}>
          <label className={styles.search}>
            <Search size={17} strokeWidth={1.7} aria-hidden="true" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by city, experience or journey name"
              aria-label="Search journeys"
            />
            {query ? (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
                <X size={18} aria-hidden="true" />
              </button>
            ) : null}
          </label>
          <MobileTools
            resultCount={results.length}
            active={active}
            filters={filters}
            destinations={destinations}
            toggle={toggle}
            reset={reset}
            items={items}
          />
        </div>
        <MobileJourneySearch query={query} setQuery={setQuery} resultCount={results.length} />
        {summary ? (
          <div className={styles.summary}>
            <span>{summary}</span>
            <button onClick={reset}>Clear filters</button>
          </div>
        ) : null}
        <div className={styles.layout}>
          <aside className={styles.filterRail} aria-label="Journey filters">
            <div className={styles.filterTitle}>
              <span>Filters</span>
              {active ? <button onClick={reset}>Clear all</button> : null}
            </div>
            <FilterSections
              filters={filters}
              destinations={destinations}
              toggle={toggle}
              items={items}
            />
          </aside>
          <div className={styles.results}>
            <div className={styles.resultBar}>
              <p aria-live="polite">
                <strong>{results.length}</strong> {results.length === 1 ? "journey" : "journeys"}
              </p>
              <div className={styles.sortControl}>
                <span>Sort by</span>
                <Select.Root
                  value={sort}
                  onValueChange={(value) => {
                    setSort(value as SortId);
                    trackEvent("journey_sort_change", { sort: value });
                  }}
                >
                  <Select.Trigger className={styles.sortTrigger} aria-label="Sort journeys">
                    <Select.Value />
                    <Select.Icon>
                      <ChevronDown size={14} strokeWidth={1.7} aria-hidden="true" />
                    </Select.Icon>
                  </Select.Trigger>
                  <Select.Portal>
                    <Select.Content
                      className={styles.sortMenu}
                      position="popper"
                      sideOffset={7}
                      align="end"
                    >
                      <Select.Viewport>
                        {sortOptions.map(([value, label]) => (
                          <Select.Item className={styles.sortOption} key={value} value={value}>
                            <Select.ItemText>{label}</Select.ItemText>
                            <Select.ItemIndicator className={styles.sortIndicator}>
                              <Check size={13} strokeWidth={2} aria-hidden="true" />
                            </Select.ItemIndicator>
                          </Select.Item>
                        ))}
                      </Select.Viewport>
                    </Select.Content>
                  </Select.Portal>
                </Select.Root>
              </div>
            </div>
            <div className={styles.decisionAssist}>
              <div>
                <strong>Not sure which route fits?</strong>
                <span>
                  Share your available days and priorities. Our China team will recommend a clear
                  starting point.
                </span>
              </div>
              <TrackedLink
                href="/start-planning?source=journey-catalog-assist"
                trackingLabel="Plan My Trip"
                trackingPlacement="journey-catalog-assist"
              >
                Plan My Trip <ArrowUpRight size={15} aria-hidden="true" />
              </TrackedLink>
            </div>
            {results.length ? (
              <>
                <div className={styles.grid}>
                  {results.slice(0, limit).map((item) => (
                    <JourneyResult key={item.slug} item={item} />
                  ))}
                </div>
                {limit < results.length ? (
                  <button
                    className={styles.loadMore}
                    onClick={() => setLimit((value) => value + 12)}
                  >
                    Load more journeys <span>{Math.min(12, results.length - limit)} more</span>
                  </button>
                ) : null}
              </>
            ) : (
              <NoResults reset={reset} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function FilterSections({
  filters,
  destinations,
  toggle,
  items,
}: {
  filters: Filters;
  destinations: string[];
  toggle: <K extends keyof Filters>(key: K, value: Filters[K][number]) => void;
  items: JourneyCatalogItem[];
}) {
  return (
    <div className={styles.filterSections}>
      <FilterGroup
        title="Journey collection"
        options={commercialRoleOptions.map(([value, label]) => [value, label])}
        selected={filters.commercialRoles}
        onToggle={(v) => toggle("commercialRoles", v as JourneyCommercialRoleId)}
        count={(v) => items.filter((i) => i.commercialRole === v).length}
      />
      <FilterGroup
        title="Travel focus"
        options={focusOptions}
        selected={filters.focus}
        onToggle={(v) => toggle("focus", v as JourneyFocusId)}
        count={(v) => items.filter((i) => i.discovery.focus.includes(v as JourneyFocusId)).length}
      />
      <FilterGroup
        title="Duration"
        options={durationOptions}
        selected={filters.duration}
        onToggle={(v) => toggle("duration", v)}
        count={(v) => items.filter((i) => durationMatch(i, v)).length}
      />
      <FilterGroup
        title="Destinations"
        options={destinations.map((value) => [value, value])}
        selected={filters.destinations}
        onToggle={(v) => toggle("destinations", v)}
        count={(v) => items.filter((i) => i.destinationFilters.includes(v)).length}
      />
      <FilterGroup
        title="Travel pace"
        options={paceOptions}
        selected={filters.pace}
        onToggle={(v) => toggle("pace", v)}
        count={(v) => items.filter((i) => i.discovery.pace === v).length}
      />
      <details>
        <summary>
          Travel details <ChevronDown size={16} />
        </summary>
        <FilterGroup
          title="Walking level"
          options={walkingOptions}
          selected={filters.walking}
          onToggle={(v) => toggle("walking", v)}
        />
        <FilterGroup
          title="Altitude"
          options={altitudeOptions}
          selected={filters.altitude}
          onToggle={(v) => toggle("altitude", v)}
        />
        <FilterGroup
          title="Intercity travel"
          options={transportOptions}
          selected={filters.transport}
          onToggle={(v) => toggle("transport", v)}
        />
        <FilterGroup
          title="Who is travelling?"
          options={travellerOptions}
          selected={filters.travellers}
          onToggle={(v) => toggle("travellers", v as JourneyTravelerId)}
        />
        <FilterGroup
          title="Planning preferences"
          options={planningNeedOptions}
          selected={filters.needs}
          onToggle={(v) => toggle("needs", v as JourneyPlanningNeedId)}
          count={(v) =>
            items.filter((i) => i.planningNeedFilters.includes(v as JourneyPlanningNeedId)).length
          }
        />
        <FilterGroup
          title="Best time to travel"
          options={seasonOptions}
          selected={filters.seasons}
          onToggle={(v) => toggle("seasons", v)}
        />
      </details>
    </div>
  );
}

function SignatureShowcase({ items }: { items: JourneyCatalogItem[] }) {
  const signatureItems = items
    .filter((item) => item.commercialRole === "signature")
    .sort((a, b) => b.commercialPriority - a.commercialPriority)
    .slice(0, 4);

  if (!signatureItems.length) return null;

  return (
    <section className={styles.signatureShowcase} id="multi-city-journeys" aria-labelledby="signature-collection-title">
      <div className={styles.signatureIntro}>
        <p className={styles.eyebrow}>The AVIORA Signature Collection</p>
        <h2 id="signature-collection-title">Journeys with a story worth travelling for.</h2>
        <p>
          Not simply longer or more expensive itineraries. These journeys are selected for the
          strength of their story, the rarity of their private moments and the care required to
          bring every chapter together.
        </p>
      </div>
      <div className={styles.signatureGrid}>
        {signatureItems.map((item, index) => (
          <Link
            className={`${styles.signatureCard} ${index === 0 ? styles.signatureCardLead : ""}`}
            href={item.href}
            key={item.slug}
          >
            <div className={styles.signatureCardImage}>
              {item.visualStatus === "pending" ? (
                <span>Signature photography being prepared</span>
              ) : (
                <OptimizedImage
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes={index === 0 ? "(min-width: 900px) 50vw, 100vw" : "(min-width: 900px) 25vw, 50vw"}
                  className="object-cover"
                />
              )}
            </div>
            <div className={styles.signatureCardBody}>
              <p>{item.commercialRoleLabel}</p>
              <h3>{marketingTitles[item.slug] ?? getDisplayTitle(item.title)}</h3>
              <strong>{item.title}</strong>
              <span>{item.hook}</span>
              <span className={styles.signatureCardLink}>Explore the journey <ArrowUpRight size={15} aria-hidden="true" /></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function DayTourShowcase({ items }: { items: JourneyCatalogItem[] }) {
  const dayTours = items.filter((item) => dayTourSlugs.has(item.slug)).slice(0, 5);

  if (!dayTours.length) return null;

  return (
    <section className={styles.dayTourShowcase} id="private-day-tours" aria-labelledby="day-tour-title">
      <div className={styles.dayTourHead}>
        <div>
          <p className={styles.eyebrow}>Private day tours</p>
          <h2 id="day-tour-title">Private days, beautifully handled.</h2>
        </div>
        <p>
          Clear, professionally operated private days for travelers who want one meaningful
          experience without managing every detail themselves.
        </p>
      </div>
      <div className={styles.dayTourGrid}>
        {dayTours.map((item) => (
          <Link className={styles.dayTourCard} href={item.href} key={item.slug}>
            <div className={styles.dayTourCardImage}>
              {item.visualStatus === "pending" ? (
                <span>Photography being prepared</span>
              ) : (
                <OptimizedImage src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 900px) 20vw, 80vw" className="object-cover" />
              )}
            </div>
            <div>
              <p>{item.commercialRoleLabel}</p>
              <h3>{marketingTitles[item.slug] ?? getDisplayTitle(item.title)}</h3>
              <span>{item.durationLabel}</span>
              <strong>From US${getPerPersonPrice(item).toLocaleString("en-US")} per person</strong>
              <small>Based on 4 guests travelling privately</small>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FilterGroup({
  title,
  options,
  selected,
  onToggle,
  count,
}: {
  title: string;
  options: readonly (readonly [string, string])[];
  selected: readonly string[];
  onToggle: (value: string) => void;
  count?: (value: string) => number;
}) {
  return (
    <fieldset className={styles.filterGroup}>
      <legend>{title}</legend>
      {options.map(([value, label]) => {
        const total = count?.(value);
        return (
          <label key={value} data-disabled={total === 0}>
            <input
              type="checkbox"
              checked={selected.includes(value)}
              disabled={total === 0}
              onChange={() => onToggle(value)}
            />
            <span>{label}</span>
            {typeof total === "number" ? <small>{total}</small> : null}
          </label>
        );
      })}
    </fieldset>
  );
}

function ServiceChoiceDialog({
  service,
  onExplore,
}: {
  service: (typeof serviceCards)[number];
  onExplore: (category: ServiceCategory) => void;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className={styles.serviceChoice}>
          <span className={styles.serviceChoiceEyebrow}>{service.eyebrow}</span>
          <span className={styles.serviceChoiceTitle}>{service.title}</span>
          <span className={styles.serviceChoiceDescription}>{service.description}</span>
          <span className={styles.serviceChoicePrompt}>
            View our standard <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.serviceDialogOverlay} />
        <Dialog.Content
          className={styles.serviceDialog}
          aria-describedby={`${service.eyebrow}-description`}
        >
          <div className={styles.serviceDialogTopline}>
            <span>{service.eyebrow}</span>
            <Dialog.Close className={styles.serviceDialogClose} aria-label="Close service details">
              <X size={18} aria-hidden="true" />
            </Dialog.Close>
          </div>
          <Dialog.Title className={styles.serviceDialogTitle}>{service.title}</Dialog.Title>
          <Dialog.Description
            id={`${service.eyebrow}-description`}
            className={styles.serviceDialogDescription}
          >
            {service.description}
          </Dialog.Description>
          <div className={styles.serviceDialogColumns}>
            <div>
              <h3>What we can arrange</h3>
              <ul>
                {service.includes.map((item) => (
                  <li key={item}>
                    <Check size={15} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Our standard</h3>
              <ul>
                {service.standards.map((item) => (
                  <li key={item}>
                    <Check size={15} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className={styles.serviceDialogProcess}>{service.process}</p>
          <div className={styles.serviceDialogActions}>
            {service.category ? (
              <Dialog.Close asChild>
                <button
                  type="button"
                  className={styles.serviceDialogAction}
                  onClick={() => onExplore(service.category!)}
                >
                  {service.label} <ArrowUpRight size={15} aria-hidden="true" />
                </button>
              </Dialog.Close>
            ) : (
              <Link
                className={styles.serviceDialogAction}
                href={service.href!}
                target="_blank"
                rel="noreferrer"
              >
                {service.label} <MessageCircle size={15} aria-hidden="true" />
              </Link>
            )}
            <Dialog.Close className={styles.serviceDialogSecondary}>
              Continue exploring
            </Dialog.Close>
          </div>
          <p className={styles.serviceDialogTrust}>
            Private service · Clear communication · No obligation
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function SignatureShowcase({ items }: { items: JourneyCatalogItem[] }) {
  const signatureItems = items
    .filter((item) => item.commercialRole === "signature")
    .sort((a, b) => b.commercialPriority - a.commercialPriority)
    .slice(0, 4);
  if (!signatureItems.length) return null;

  return (
    <section
      className={styles.signatureShowcase}
      id="multi-city-journeys"
      aria-labelledby="signature-collection-title"
    >
      <div className={styles.signatureIntro}>
        <div>
          <p className={styles.eyebrow}>SIGNATURE ROUTES</p>
          <h2 id="signature-collection-title">Signature Private China Journeys</h2>
        </div>
        <div className={styles.railIntroAside}>
          <p>
            Longer, fully managed routes for travelers who want China&apos;s defining places
            connected with more depth, better pacing and one accountable local team.
          </p>
          <Link href="#journey-discovery" className={styles.railViewAll}>
            View all journeys <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className={styles.railFrame}>
        <RailControls railId="signature-journeys-rail" label="Signature private China journeys" />
        <div
          className={`${styles.signatureGrid} ${styles.railTrack}`}
          id="signature-journeys-rail"
          aria-label="Signature private China journeys"
        >
          {signatureItems.map((item, index) => (
            <Link
              className={`${styles.signatureCard} ${index === 0 ? styles.signatureCardLead : ""}`}
              href={item.href}
              key={item.slug}
            >
              <div className={styles.signatureCardImage}>
                {item.visualStatus === "pending" ? (
                  <span>Signature photography being prepared</span>
                ) : (
                  <OptimizedImage
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes={
                      index === 0
                        ? "(min-width: 900px) 50vw, 100vw"
                        : "(min-width: 900px) 25vw, 50vw"
                    }
                    className="object-cover"
                  />
                )}
              </div>
              <div className={styles.signatureCardBody}>
                <p>{item.commercialRoleLabel}</p>
                <h3>{marketingTitles[item.slug] ?? getDisplayTitle(item.title)}</h3>
                <strong>{item.title}</strong>
                <span>{item.hook}</span>
                <small className={styles.railCardTrust}>
                  Private throughout · China-based team
                </small>
                <span className={styles.railCardAction}>
                  View this journey <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DayTourShowcase({ items }: { items: JourneyCatalogItem[] }) {
  const dayTours = items.filter((item) => dayTourSlugs.has(item.slug)).slice(0, 5);
  if (!dayTours.length) return null;

  return (
    <section
      className={styles.dayTourShowcase}
      id="private-day-tours"
      aria-labelledby="day-tour-title"
    >
      <div className={styles.dayTourHead}>
        <div>
          <p className={styles.eyebrow}>PRIVATE DAYS</p>
          <h2 id="day-tour-title">Private China Day Tours</h2>
        </div>
        <div>
          <p>
            One meaningful day, professionally handled from hotel pickup to return, with a private
            guide and clear local coordination.
          </p>
          <Link href="#journey-discovery" className={styles.railViewAll}>
            View all day tours <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className={styles.railFrame}>
        <RailControls railId="day-tours-rail" label="Private China day tours" />
        <div
          className={`${styles.dayTourGrid} ${styles.railTrack}`}
          id="day-tours-rail"
          aria-label="Private China day tours"
        >
          {dayTours.map((item) => (
            <Link className={styles.dayTourCard} href={item.href} key={item.slug}>
              <div className={styles.dayTourCardImage}>
                {item.visualStatus === "pending" ? (
                  <span>Photography being prepared</span>
                ) : (
                  <OptimizedImage
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 900px) 20vw, 80vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div>
                <p>{item.commercialRoleLabel}</p>
                <h3>{marketingTitles[item.slug] ?? getDisplayTitle(item.title)}</h3>
                <span className={styles.railCardFormalTitle}>{item.title}</span>
                <span>{item.durationLabel}</span>
                <strong>
                  Indicative starting price: US${getPerPersonPrice(item).toLocaleString("en-US")}{" "}
                  per person
                </strong>
                <small>Based on 4 guests travelling privately</small>
                <small className={styles.railCardTrust}>
                  Private guide · Private vehicle · No compulsory shopping
                </small>
                <span className={styles.railCardAction}>
                  Explore this private day <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClassicJourneyShowcase({ items }: { items: JourneyCatalogItem[] }) {
  const classicJourneys = items
    .filter((item) => item.commercialRole !== "signature" && !dayTourSlugs.has(item.slug))
    .sort((a, b) => b.commercialPriority - a.commercialPriority);
  if (!classicJourneys.length) return null;

  return (
    <section
      className={styles.classicShowcase}
      id="classic-china-journeys"
      aria-labelledby="classic-journeys-title"
    >
      <div className={styles.classicShowcaseHead}>
        <div>
          <p className={styles.eyebrow}>CLASSIC CHINA ROUTES</p>
          <h2 id="classic-journeys-title">Classic China Journeys</h2>
        </div>
        <div>
          <p>
            Well-loved China routes and focused regional journeys, privately operated with the same
            clear planning and China-based support.
          </p>
          <Link href="#journey-discovery" className={styles.railViewAll}>
            Compare every journey <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className={styles.railFrame}>
        <RailControls railId="classic-china-journeys-rail" label="Classic China journeys" />
        <div
          className={`${styles.classicJourneyGrid} ${styles.railTrack}`}
          id="classic-china-journeys-rail"
          aria-label="Classic China journeys"
        >
          {classicJourneys.map((item) => (
            <Link className={styles.classicJourneyCard} href={item.href} key={item.slug}>
              <div className={styles.classicJourneyCardImage}>
                {item.visualStatus === "pending" ? (
                  <span>Photography being prepared</span>
                ) : (
                  <OptimizedImage
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(min-width: 900px) 20vw, 82vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div className={styles.classicJourneyCardBody}>
                <p>{item.commercialRoleLabel}</p>
                <h3>{marketingTitles[item.slug] ?? getDisplayTitle(item.title)}</h3>
                <span className={styles.railCardFormalTitle}>{item.title}</span>
                <span className={styles.classicJourneyRoute}>{item.routeLabel}</span>
                <span>{item.durationLabel}</span>
                <strong>
                  Indicative starting price: US${getPerPersonPrice(item).toLocaleString("en-US")}{" "}
                  per person
                </strong>
                <small>Based on 4 guests travelling privately</small>
                <small className={styles.railCardTrust}>
                  Private throughout · China-based team
                </small>
                <span className={styles.railCardAction}>
                  Explore this China journey <ArrowUpRight size={14} aria-hidden="true" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function RailControls({ railId, label }: { railId: string; label: string }) {
  return (
    <div className={styles.railControls} aria-label={`${label} controls`}>
      <span>Swipe to explore</span>
      <div>
        <button
          type="button"
          aria-label={`Previous ${label}`}
          onClick={() => scrollRail(railId, -1)}
        >
          <ChevronLeft size={17} aria-hidden="true" />
        </button>
        <button type="button" aria-label={`Next ${label}`} onClick={() => scrollRail(railId, 1)}>
          <ChevronRight size={17} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

function scrollRail(id: string, direction: number) {
  const rail = document.getElementById(id);
  if (!rail) return;
  rail.scrollBy({ left: direction * Math.max(rail.clientWidth * 0.82, 280), behavior: "smooth" });
}

function MobileTools(props: {
  resultCount: number;
  active: number;
  filters: Filters;
  destinations: string[];
  toggle: <K extends keyof Filters>(key: K, value: Filters[K][number]) => void;
  reset: () => void;
  items: JourneyCatalogItem[];
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openFilters = () => setOpen(true);
    window.addEventListener("aviora:open-journey-filters", openFilters);
    return () => window.removeEventListener("aviora:open-journey-filters", openFilters);
  }, []);

  return (
    <div className={styles.mobileTools}>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button type="button">
            <span>
              <SlidersHorizontal size={17} />
              Filter journeys {props.active ? `(${props.active})` : ""}
            </span>
            <strong>{props.resultCount} matches</strong>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles.sheetOverlay} />
          <Dialog.Content className={styles.sheet}>
            <div className={styles.sheetHead}>
              <Dialog.Title>Filter journeys</Dialog.Title>
              <button onClick={props.reset}>Reset</button>
              <Dialog.Close aria-label="Close filters">
                <X size={20} />
              </Dialog.Close>
            </div>
            <div className={styles.sheetBody}>
              <FilterSections
                filters={props.filters}
                destinations={props.destinations}
                toggle={props.toggle}
                items={props.items}
              />
            </div>
            <div className={styles.sheetFoot}>
              <p>{props.resultCount} journeys match your selection</p>
              <Dialog.Close>View {props.resultCount} journeys</Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}

function MobileJourneySearch({
  query,
  setQuery,
  resultCount,
}: {
  query: string;
  setQuery: (value: string) => void;
  resultCount: number;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openSearch = () => setOpen(true);
    window.addEventListener("aviora:open-journey-search", openSearch);
    return () => window.removeEventListener("aviora:open-journey-search", openSearch);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.mobileSearchOverlay} />
        <Dialog.Content className={styles.mobileSearchSheet}>
          <div className={styles.mobileSearchHead}>
            <Dialog.Title>Find a journey</Dialog.Title>
            <Dialog.Close aria-label="Close journey search">
              <X size={18} aria-hidden="true" />
            </Dialog.Close>
          </div>
          <label className={styles.mobileSearchField}>
            <Search size={16} strokeWidth={1.7} aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="City, experience or journey"
              aria-label="Search journeys on mobile"
              autoFocus
            />
            {query ? (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
                <X size={16} aria-hidden="true" />
              </button>
            ) : null}
          </label>
          <div className={styles.mobileSearchFoot}>
            <span>
              {resultCount} {resultCount === 1 ? "journey" : "journeys"}
            </span>
            <Dialog.Close>View results</Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function JourneyResult({ item, reason }: { item: JourneyCatalogItem; reason: string }) {
  const displayTitle = marketingTitles[item.slug] ?? getDisplayTitle(item.title);

  return (
    <article className={styles.card}>
      <div
        className={`${styles.photoStage} ${item.visualStatus === "pending" ? styles.photoStagePending : ""}`}
      >
        {item.visualStatus === "pending" ? (
          <Link href={item.href} className={styles.pendingPhotoLink}>
            <span>Photography being prepared</span>
            <small>Route and service details are ready to plan</small>
          </Link>
        ) : (
          <Link href={item.href}>
            <OptimizedImage
              src={item.image.src}
              alt={item.image.alt}
              fill
              sizes="(min-width: 1000px) 38vw, 100vw"
              frameClassName="absolute inset-0 h-full w-full"
              className="object-cover"
            />
          </Link>
        )}
      </div>
      <div className={styles.cardBody}>
        <div className={styles.cardMeta}>
          <p>{item.durationLabel}</p>
          <span>{item.commercialRoleLabel}</span>
        </div>
        <Link href={item.href}>
          <h3>{displayTitle}</h3>
        </Link>
        <p className={styles.formalTitle}>{item.title}</p>
        <span>{item.hook}</span>
        <ul className={styles.moments} aria-label="Signature moments">
          {item.highlights.slice(0, 3).map((highlight) => (
            <li key={highlight}>
              <Check size={13} aria-hidden="true" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className={styles.price}>
          <strong>From US${getPerPersonPrice(item).toLocaleString("en-US")} per person</strong>
          <span>Based on 4 guests travelling privately</span>
        </div>
        {reason ? (
          <div className={styles.match}>
            <strong>Why it matches</strong>
            {reason}
          </div>
        ) : null}
        <dl>
          <div>
            <dt>Best for</dt>
            <dd>{item.bestForSummary}</dd>
          </div>
          <div>
            <dt>Walking</dt>
            <dd>{capitalize(item.discovery.walkingLevel)}</dd>
          </div>
        </dl>
        <div className={styles.cardActions}>
          <TrackedLink
            className={styles.view}
            href={item.href}
            trackingLabel="View Journey"
            trackingPlacement="journey-catalog-card"
            journeySlug={item.slug}
          >
            <span>View Journey</span>
            <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
          </TrackedLink>
        </div>
      </div>
    </article>
  );
}

function NoResults({ reset }: { reset: () => void }) {
  return (
    <div className={styles.noResults}>
      <p className={styles.eyebrow}>No exact match</p>
      <h3>No journeys match all of these choices.</h3>
      <p>
        Remove one practical condition to see nearby routes, or let a specialist design around the
        complete brief.
      </p>
      <div>
        <button onClick={reset}>Clear all filters</button>
        <Link href="/start-planning?source=journey-filter-empty">
          Speak with a China specialist →
        </Link>
      </div>
    </div>
  );
}

function matches(
  item: JourneyCatalogItem,
  filters: Filters,
  query: string,
  serviceCategory: ServiceCategory | null = null,
) {
  if (serviceCategory === "private-day-tours" && !dayTourSlugs.has(item.slug)) return false;
  if (serviceCategory === "complete-private-journeys" && item.recommendedDaysMax < 3) return false;
  const q = query.trim().toLowerCase();
  if (q && !item.discovery.searchableText.includes(q) && !daysQuery(item, q)) return false;
  if (filters.commercialRoles.length && !filters.commercialRoles.includes(item.commercialRole))
    return false;
  if (filters.focus.length && !filters.focus.some((v) => item.discovery.focus.includes(v)))
    return false;
  if (filters.duration.length && !filters.duration.some((v) => durationMatch(item, v)))
    return false;
  if (
    filters.destinations.length &&
    !filters.destinations.every((v) => item.destinationFilters.includes(v))
  )
    return false;
  if (filters.pace.length && !filters.pace.includes(item.discovery.pace)) return false;
  if (filters.walking.length && !filters.walking.includes(item.discovery.walkingLevel))
    return false;
  if (filters.altitude.length && !filters.altitude.includes(item.discovery.altitude)) return false;
  if (
    filters.transport.length &&
    !filters.transport.every((v) =>
      v === "fewer"
        ? item.discovery.hotelChanges <= 1
        : item.discovery.transport.includes(v as never),
    )
  )
    return false;
  if (
    filters.travellers.length &&
    !filters.travellers.some((v) => item.travelerFilters.includes(v))
  )
    return false;
  if (filters.needs.length && !filters.needs.some((v) => item.planningNeedFilters.includes(v)))
    return false;
  if (
    filters.seasons.length &&
    !filters.seasons.some((v) => item.discovery.seasons.includes(v as never))
  )
    return false;
  return true;
}
function durationMatch(item: JourneyCatalogItem, value: string) {
  const [min, max] = value === "15+" ? [15, 365] : value.split("-").map(Number);
  return item.recommendedDaysMin <= max && item.recommendedDaysMax >= min;
}
function daysQuery(item: JourneyCatalogItem, q: string) {
  const days = Number(q.match(/\d+/)?.[0]);
  return Boolean(days && item.recommendedDaysMin <= days && item.recommendedDaysMax >= days);
}
function sortItems(items: JourneyCatalogItem[], sort: SortId) {
  return [...items].sort((a, b) =>
    sort === "shortest"
      ? a.recommendedDaysMin - b.recommendedDaysMin
      : sort === "longest"
        ? b.recommendedDaysMax - a.recommendedDaysMax
        : sort === "relaxed"
          ? paceScore(a) - paceScore(b)
          : sort === "active"
            ? paceScore(b) - paceScore(a)
            : b.discovery.featuredRank - a.discovery.featuredRank,
  );
}
function paceScore(item: JourneyCatalogItem) {
  return item.discovery.pace === "easy" ? 0 : item.discovery.pace === "balanced" ? 1 : 2;
}
function matchReason(item: JourneyCatalogItem, filters: Filters, query: string) {
  const reasons: string[] = [];
  if (query.trim()) reasons.push(`Matches “${query.trim()}”`);
  if (filters.duration.some((v) => durationMatch(item, v))) reasons.push(item.durationLabel);
  if (filters.commercialRoles.includes(item.commercialRole)) reasons.push(item.commercialRoleLabel);
  if (filters.focus.length) {
    const focus = focusOptions.find(
      ([id]) => item.discovery.focus.includes(id) && filters.focus.includes(id),
    );
    if (focus) reasons.push(focus[1]);
  }
  if (filters.pace.includes(item.discovery.pace))
    reasons.push(`${capitalize(item.discovery.pace)} pace`);
  if (filters.altitude.includes("none") && item.discovery.altitude === "none")
    reasons.push("No high-altitude stays");
  if (filters.needs.length) {
    const need = planningNeedOptions.find(
      ([id]) => item.planningNeedFilters.includes(id) && filters.needs.includes(id),
    );
    if (need) reasons.push(need[1]);
  }
  return reasons.slice(0, 3).join(" · ");
}
function getSummary(filters: Filters, query: string) {
  const values = [
    query.trim() ? `Search: ${query.trim()}` : "",
    ...filters.commercialRoles.map((v) => commercialRoleOptions.find(([id]) => id === v)?.[1] ?? v),
    ...filters.focus.map((v) => focusOptions.find(([id]) => id === v)?.[1] ?? v),
    ...filters.duration.map((v) => durationOptions.find(([id]) => id === v)?.[1] ?? v),
    ...filters.destinations,
    ...filters.pace.map(capitalize),
    ...filters.needs.map((v) => planningNeedOptions.find(([id]) => id === v)?.[1] ?? v),
  ].filter(Boolean);
  return values.slice(0, 4).join(" · ") + (values.length > 4 ? ` · +${values.length - 4}` : "");
}
function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1).replaceAll("-", " ");
}

function getPerPersonPrice(item: JourneyCatalogItem) {
  const dayTourPrices: Record<string, number> = {
    "private-mutianyu-great-wall-day-tour": 198,
    "private-chengdu-panda-day-tour-early-morning": 150,
    "private-xian-terracotta-warriors-day-tour": 157,
    "private-shanghai-day-tour-guide-driver": 168,
    "guilin-yangshuo-li-river-cruise-private-day-tour": 172,
  };
  return dayTourPrices[item.slug] ?? item.pricing.fromUsd;
}

function getDisplayTitle(title: string) {
  return title
    .replace(/^\d+-Day\s+/i, "")
    .replace(/\s+Private\s+(Tour|Journey)$/i, "")
    .trim();
}

function getPerPersonPrice(item: JourneyCatalogItem) {
  const dayTourPrices: Record<string, number> = {
    "private-mutianyu-great-wall-day-tour": 198,
    "private-chengdu-panda-day-tour-early-morning": 150,
    "private-xian-terracotta-warriors-day-tour": 157,
    "private-shanghai-day-tour-guide-driver": 168,
    "guilin-yangshuo-li-river-cruise-private-day-tour": 172,
  };
  return dayTourPrices[item.slug] ?? item.pricing.fromUsd;
}
function getInitialUrlState(queryString: string): {
  query: string;
  filters: Filters;
  category: ServiceCategory | null;
  sort: SortId;
} {
  const params = new URLSearchParams(queryString);
  const read = (key: keyof Filters) => params.get(key)?.split(",").filter(Boolean) ?? [];
  const sort = params.get("sort");
  const category = params.get("category");
  return {
    query: params.get("q") ?? "",
    category:
      category === "private-day-tours" || category === "complete-private-journeys"
        ? category
        : null,
    filters: {
      commercialRoles: read("commercialRoles") as JourneyCommercialRoleId[],
      focus: read("focus") as JourneyFocusId[],
      duration: read("duration"),
      destinations: read("destinations"),
      pace: read("pace"),
      walking: read("walking"),
      altitude: read("altitude"),
      transport: read("transport"),
      travellers: read("travellers") as JourneyTravelerId[],
      needs: read("needs") as JourneyPlanningNeedId[],
      seasons: read("seasons"),
    },
    sort: ["shortest", "longest", "relaxed", "active"].includes(sort ?? "")
      ? (sort as SortId)
      : "recommended",
  };
}
