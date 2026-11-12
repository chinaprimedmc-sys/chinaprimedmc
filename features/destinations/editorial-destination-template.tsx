import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Compass,
  Lightbulb,
  MapPin,
  Route,
} from "@/components/icons/symbols";
import Link from "next/link";
import type { ReactNode } from "react";

import { CtaButton } from "@/components/cta";
import { EnquirySection } from "@/components/forms/enquiry-section";
import { SiteFooter } from "@/components/footer/site-footer";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import type { CmsDestinationCard } from "@/components/destinations/destination-explorer";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { destinationPlanningGuides } from "@/content/destinations/planning-guides";
import { DestinationJourneyCard } from "@/features/destinations/destination-journey-card";
import { journalArticles } from "@/content/journal";

export function EditorialDestinationTemplate({
  destination,
  destinations,
  journeys,
  cta,
}: {
  destination: CmsDestinationCard & {
    bestTime: string;
    orientation: string;
    highlights: string[];
    planningNotes: string[];
    arrival: string;
    gettingAround: string;
    stayStrategy: string;
    firstTimerNote: string;
    faqs: Array<{ question: string; answer: string }>;
    culturalStory: { title: string; paragraphs: [string, string] };
    foodStory: { title: string; paragraphs: [string, string] };
    itinerary: Array<{ day: string; title: string; description: string }>;
    gallery: Array<{ src: string; alt: string; objectPosition?: string }>;
  };
  destinations: CmsDestinationCard[];
  journeys: JourneyCatalogItem[];
  cta: { label: string; href: string };
}) {
  const guide = destinationPlanningGuides[destination.slug];
  const selectedJourneys = guide
    ? guide.products.flatMap(
        (product) => journeys.find((journey) => journey.slug === product.slug) ?? [],
      )
    : journeys;
  const primaryJourney = selectedJourneys[0];
  const planningHref = `${cta.href}?destination=${encodeURIComponent(destination.slug)}&source=destination-guide`;
  const related = (destination.relatedDestinationIds ?? [])
    .flatMap((slug) => destinations.find((item) => item.slug === slug) ?? [])
    .slice(0, 3);
  const relatedGuides = (
    guide
      ? guide.articles.flatMap(
          (item) => journalArticles.find((article) => article.slug === item.slug) ?? [],
        )
      : journalArticles
  )
    .filter(
      (article) =>
        article.tags.includes(destination.slug) ||
        article.related?.destinations?.includes(destination.slug),
    )
    .slice(0, 3);

  return (
    <main className="min-h-svh bg-white text-[var(--color-ink)]">
      <SiteNavigation />
      <section data-hero-layout="true" className="relative min-h-[78svh] overflow-hidden">
        <OptimizedImage
          src={destination.heroImage?.src ?? "/home/editorial/great-wall-private-china-travel.webp"}
          alt={destination.heroImage?.alt ?? destination.name}
          fill
          priority
          sizes="100vw"
          frameClassName="absolute inset-0 h-full w-full"
          className="object-cover"
          style={{ objectPosition: destination.heroImage?.objectPosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,.98)_0%,rgba(255,255,255,.91)_38%,rgba(255,255,255,.3)_65%,transparent_85%)] max-md:bg-[linear-gradient(0deg,rgba(255,255,255,.99)_0%,rgba(255,255,255,.97)_43%,rgba(255,255,255,.16)_82%)]" />
        <div className="relative mx-auto flex min-h-[78svh] max-w-[85rem] items-end px-[var(--page-gutter)] pb-10 md:items-center md:pb-0">
          <div className="max-w-3xl pt-28">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-muted)]"
            >
              <ArrowLeft className="size-4" /> All destinations
            </Link>
            <p className="mt-8 text-xs font-semibold text-[var(--color-muted)] uppercase">
              {destination.kicker} · {destination.region}
            </p>
            <h1 className="type-hero mt-5">{guide?.title ?? destination.name}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-copy)]">
              {destination.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Fact icon={<CalendarDays className="size-4" />} text={destination.recommendedStay} />
              <Fact icon={<Compass className="size-4" />} text={destination.bestFor} />
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href={planningHref} size="lg">
                Plan my {destination.name} trip
              </CtaButton>
              {primaryJourney ? (
                <CtaButton
                  href="#private-journeys"
                  data-cta-placement={`destination-${destination.slug}-hero`}
                  size="lg"
                  variant="secondary"
                >
                  {selectedJourneys.length > 1 ? "Compare tours" : "View the itinerary"}
                </CtaButton>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="In this destination guide" className="border-y border-black/8">
        <div className="mx-auto flex max-w-[85rem] flex-wrap gap-x-7 gap-y-3 px-[var(--page-gutter)] py-5 text-sm font-semibold">
          <a href="#destination-stay">How long to stay</a>
          <a href="#destination-experiences">What to see</a>
          <a href="#destination-itinerary">Sample itinerary</a>
          <a href="#destination-hotels">Where to stay</a>
          <a href="#destination-practical">Travel planning</a>
          {selectedJourneys.length ? (
            <a href="#private-journeys">Private journeys</a>
          ) : (
            <a href="#destination-custom-planning">Tailored planning</a>
          )}
          <a href="#destination-faq">FAQ</a>
        </div>
      </nav>

      {guide ? (
        <section
          aria-labelledby="destination-decision-title"
          className="mx-auto max-w-[85rem] px-[var(--page-gutter)] py-[var(--space-section-default)]"
        >
          <h2 id="destination-decision-title" className="type-section-title">
            Why visit {destination.name}?
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-copy)]">
            {guide.answer}
          </p>
          <h2 id="destination-stay" className="type-section-title mt-12 scroll-mt-28">
            {guide.stayHeading ?? `How many days do you need in ${destination.name}?`}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-copy)]">
            {guide.stayAnswer}
          </p>
          <details className="mt-6 border-t border-black/10 pt-3">
            <summary className="min-h-11 cursor-pointer py-3 font-semibold">
              Compare stays by number of nights
            </summary>
            <div className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
              {guide.stays.map((stay) => (
                <article key={stay.label}>
                  <h3 className="text-xl font-semibold">{stay.label}</h3>
                  <p className="mt-3 leading-7 text-[var(--color-copy)]">{stay.advice}</p>
                </article>
              ))}
            </div>
          </details>
        </section>
      ) : null}

      {guide && selectedJourneys.length ? (
        <section
          id="private-journeys"
          className="scroll-mt-28 border-y border-black/8 bg-white py-[var(--space-section-compact)]"
        >
          <div className="mx-auto max-w-[85rem] px-[var(--page-gutter)]">
            <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
              {selectedJourneys.length > 1 ? "Compare private tours" : "Suggested private tour"}
            </p>
            <h2 className="type-section-title mt-5 max-w-3xl">
              {guide.routeHeading ??
                (selectedJourneys.length > 1
                  ? `Which ${destination.name} tour fits your plans?`
                  : `A private itinerary for your ${destination.name} visit`)}
            </h2>
            <p className="mt-5 max-w-3xl leading-7 text-[var(--color-copy)]">
              {guide?.routeAdvice ??
                "Compare the sightseeing days, hotel stays and included services before choosing your tour."}
            </p>
            <details className="mt-6 max-w-3xl border-t border-black/10 pt-5">
              <summary className="cursor-pointer font-semibold">
                Your private tour: arrangements and inclusions
              </summary>
              <p className="mt-4 leading-7 text-[var(--color-copy)]">{guide.serviceScope}</p>
            </details>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-[var(--color-muted)]">
              Planning advice by AVIORA China Travel. Read our{" "}
              <Link href="/editorial-policy" className="underline underline-offset-4">
                editorial and verification policy
              </Link>
              .
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {selectedJourneys.map((journey) => (
                <DestinationJourneyCard
                  key={journey.slug}
                  journey={journey}
                  product={guide.products.find((product) => product.slug === journey.slug)!}
                  destinationSlug={destination.slug}
                />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {guide && !selectedJourneys.length ? (
        <section
          id="destination-custom-planning"
          className="mx-auto max-w-[85rem] scroll-mt-28 px-[var(--page-gutter)] py-[var(--space-section-compact)]"
        >
          <h2 className="type-section-title">Plan a tailored {destination.name} visit</h2>
          <p className="mt-5 max-w-3xl leading-7">{guide.routeAdvice}</p>
          <p className="mt-4 max-w-3xl leading-7">{guide.serviceScope}</p>
          <CtaButton href={planningHref} className="mt-6">
            Discuss my plans
          </CtaButton>
        </section>
      ) : null}

      <section
        id="destination-experiences"
        className="scroll-mt-28 border-y border-black/8 bg-white py-[var(--space-section-compact)]"
      >
        <div className="mx-auto max-w-[85rem] px-[var(--page-gutter)]">
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
            Signature experiences
          </p>
          <h2 className="type-section-title mt-5 max-w-3xl">
            What to see and experience in {destination.name}
          </h2>
          <p className="mt-6 max-w-3xl leading-7 text-[var(--color-copy)]">
            {guide?.practicalPlanning.timing ?? destination.orientation}
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {destination.highlights.map((experience, index) => (
              <article key={experience} className="border-t border-black/10 py-5">
                <span className="text-xs font-semibold text-[var(--color-muted)]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-xl leading-8 font-semibold">{experience}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="destination-itinerary"
        className="scroll-mt-28 border-y border-black/8 bg-white py-[var(--space-section-compact)] md:py-[var(--space-section-default)]"
      >
        <div className="mx-auto max-w-[85rem] px-[var(--page-gutter)]">
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
            Suggested {destination.name} itinerary
          </p>
          <h2 className="type-section-title mt-5 max-w-4xl">
            What can you fit into your {destination.name} itinerary?
          </h2>
          <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
            {destination.itinerary.map((item) => (
              <article
                key={`${item.day}-${item.title}`}
                className="grid gap-3 py-6 md:grid-cols-[8rem_18rem_1fr] md:items-baseline"
              >
                <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
                  {item.day}
                </p>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="leading-7 text-[var(--color-copy)]">{item.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {primaryJourney ? (
              <CtaButton
                href="#private-journeys"
                data-cta-placement={`destination-${destination.slug}-stay`}
                size="lg"
              >
                {selectedJourneys.length > 1
                  ? "Compare tours for this itinerary"
                  : "See the itinerary and service options"}
              </CtaButton>
            ) : null}
            <CtaButton href={planningHref} variant="secondary" size="lg">
              Customize this pace
            </CtaButton>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[85rem] gap-12 px-[var(--page-gutter)] py-[var(--space-section-compact)] md:grid-cols-2 md:py-[var(--space-section-default)]">
        <div>
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">When to go</p>
          <h2 className="type-section-title mt-5">When to visit {destination.name}</h2>
          <p className="mt-6 text-base leading-8 text-[var(--color-copy)]">
            {destination.bestTime}
          </p>
        </div>
        <div>
          <h2 className="type-section-title">
            What affects the cost of a {destination.name} trip?
          </h2>
          <p className="mt-6 text-base leading-8 text-[var(--color-copy)]">
            {guide?.practicalPlanning.cost ?? destination.planningNotes.join(". ")}
          </p>
        </div>
      </section>

      <section
        id="destination-practical"
        className="scroll-mt-28 border-y border-black/8 bg-white py-[var(--space-section-compact)]"
      >
        <div className="mx-auto max-w-[85rem] px-[var(--page-gutter)]">
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
            Getting there and getting around
          </p>
          <h2 className="type-section-title mt-5 max-w-4xl">
            How to get to {destination.name} and plan your stay
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <PlanningCard
              icon={<Route className="size-5" />}
              title="Arriving and connecting"
              text={destination.arrival}
            />
            <PlanningCard
              icon={<Compass className="size-5" />}
              title="Getting around"
              text={destination.gettingAround}
            />
            <PlanningCard
              icon={<MapPin className="size-5" />}
              title="Walking and access"
              text={guide?.practicalPlanning.walking ?? destination.stayStrategy}
            />
          </div>
          <div className="mt-5 flex gap-4 rounded-[1.25rem] border border-[var(--color-line)] bg-white p-6">
            <Lightbulb
              className="mt-1 size-5 shrink-0 text-[var(--color-muted)]"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-semibold">What first-time visitors often underestimate</h3>
              <p className="mt-2 leading-7 text-[var(--color-copy)]">
                {destination.firstTimerNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {guide ? (
        <section
          id="destination-hotels"
          aria-labelledby="destination-hotel-title"
          className="mx-auto max-w-[85rem] scroll-mt-28 px-[var(--page-gutter)] py-[var(--space-section-default)]"
        >
          <h2 id="destination-hotel-title" className="type-section-title">
            {guide.hotelHeading ?? `Where to stay in ${destination.name}`}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-copy)]">
            {guide.hotelAnswer}
          </p>
          <details className="mt-6 border-t border-black/10 pt-3">
            <summary className="min-h-11 cursor-pointer py-3 font-semibold">
              Compare hotel areas
            </summary>
            <div className="mt-8 grid gap-8">
              {guide.hotelAreas.map((area) => (
                <article key={area.name} className="grid gap-3 md:grid-cols-[1fr_2fr]">
                  <h3 className="text-xl font-semibold">{area.name}</h3>
                  <p className="leading-7 text-[var(--color-copy)]">{area.advice}</p>
                </article>
              ))}
            </div>
          </details>
          <h2 id="destination-sightseeing" className="type-section-title mt-12 scroll-mt-28">
            {guide.sightseeingQuestion}
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-copy)]">
            {guide.sightseeingAnswer}
          </p>
          <div className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {guide.tradeoffs.map((item) => (
              <article key={item.title}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[var(--color-copy)]">{item.advice}</p>
                {item.articleSlug && item.articleLabel ? (
                  <Link
                    href={`/journal/${item.articleSlug}`}
                    className="mt-3 inline-flex min-h-11 items-center font-semibold underline underline-offset-4"
                  >
                    {item.articleLabel}
                  </Link>
                ) : null}
              </article>
            ))}
          </div>
          <aside
            aria-labelledby="destination-sources-title"
            className="mt-10 border-t border-black/10 pt-6"
          >
            <h3 id="destination-sources-title" className="text-xl font-semibold">
              Sources and visitor information
            </h3>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--color-muted)]">
              Our recommendations help you choose where to stay, how long to allow and which route
              suits you. Use the sources below for the visitor information or background described
              beside each link. Your proposal sets out the arrangements for your travel dates.
            </p>
            <ul className="mt-5 grid max-w-3xl gap-5">
              {guide.visitorResources.map((resource) => (
                <li key={resource.href}>
                  <a href={resource.href} className="font-semibold underline underline-offset-4">
                    {resource.label}
                  </a>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-copy)]">
                    {resource.scope}
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      ) : null}

      <section className="border-y border-black/8 bg-white py-[var(--space-section-compact)] md:py-[var(--space-section-default)]">
        <div className="mx-auto grid max-w-[85rem] gap-12 px-[var(--page-gutter)] lg:grid-cols-[1.05fr_.95fr]">
          <div className="self-center">
            <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
              Culture and historical context
            </p>
            <h2 className="type-section-title mt-5">{destination.culturalStory.title}</h2>
            <div className="mt-7 grid gap-5 text-base leading-8 text-[var(--color-copy)] md:text-lg">
              {destination.culturalStory.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <EditorialImage image={destination.gallery[0]} />
        </div>
      </section>

      <section className="border-y border-black/8 bg-white py-[var(--space-section-compact)] md:py-[var(--space-section-default)]">
        <div
          className={`mx-auto grid max-w-[85rem] gap-12 px-[var(--page-gutter)] ${destination.gallery.length > 1 ? "lg:grid-cols-[.9fr_1.1fr]" : ""}`}
        >
          <div className={destination.gallery.length > 1 ? "grid grid-cols-2 gap-4" : "hidden"}>
            {destination.gallery.slice(1, 3).map((image, index) => (
              <div
                key={image.src}
                className={`relative overflow-hidden rounded-[1.25rem] ${index === 0 ? "aspect-portrait" : "aspect-portrait mt-12"}`}
              >
                <OptimizedImage
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width:1024px) 22vw, 48vw"
                  frameClassName="absolute inset-0 h-full w-full"
                  className="object-cover"
                  style={{ objectPosition: image.objectPosition }}
                />
              </div>
            ))}
          </div>
          <div className="self-center">
            <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
              Food and social life
            </p>
            <h2 className="type-section-title mt-5">{destination.foodStory.title}</h2>
            <div className="mt-7 grid gap-5 text-base leading-8 text-[var(--color-copy)] md:text-lg">
              {destination.foodStory.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="destination-faq"
        className="scroll-mt-28 border-y border-black/8 bg-white py-[var(--space-section-compact)]"
      >
        <div className="mx-auto max-w-4xl px-[var(--page-gutter)]">
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
            {destination.name} travel FAQ
          </p>
          <h2 className="type-section-title mt-5">Questions about visiting {destination.name}</h2>
          <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
            {destination.faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-semibold">
                  {faq.question}
                  <span className="text-[var(--color-muted)] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-[var(--color-copy)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {relatedGuides.length ? (
        <section className="mx-auto max-w-[85rem] px-[var(--page-gutter)] py-[var(--space-section-compact)] md:py-[var(--space-section-default)]">
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
            Practical planning guides
          </p>
          <h2 className="type-section-title mt-5 max-w-3xl">
            Practical guides for your {destination.name} trip
          </h2>
          <div className="mt-12 grid gap-8 border-y border-black/8">
            {relatedGuides.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group grid gap-4 border-b border-black/8 py-6 last:border-0 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <span>
                  <span className="text-xs font-semibold text-[var(--color-muted)] uppercase">
                    {article.category} · {article.readingTime}
                  </span>
                  <span className="mt-2 block text-xl font-semibold">
                    {guide?.articles.find((item) => item.slug === article.slug)?.label ??
                      article.title}
                  </span>
                  <span className="mt-2 block max-w-2xl text-base leading-6 text-[var(--color-copy)]">
                    {article.excerpt}
                  </span>
                </span>
                <ArrowRight className="size-5 transition group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <section className="py-[var(--space-section-compact)]">
        <div className="mx-auto max-w-[85rem] px-[var(--page-gutter)]">
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
            Route combinations
          </p>
          <h2 className="type-section-title mt-5">
            Where to go before or after {destination.name}
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/destinations/${item.slug}`}
                className="group grid grid-cols-3 items-start gap-x-4 md:block"
              >
                <span className="aspect-portrait relative row-span-2 block overflow-hidden rounded-[1.4rem]">
                  <OptimizedImage
                    src={
                      item.heroImage?.src ?? "/home/editorial/great-wall-private-china-travel.webp"
                    }
                    alt={item.heroImage?.alt ?? item.name}
                    fill
                    sizes="(min-width:768px) 33vw, 30vw"
                    frameClassName="absolute inset-0 h-full w-full"
                    className="object-cover transition duration-700 group-hover:scale-105"
                    style={{ objectPosition: item.heroImage?.objectPosition }}
                  />
                </span>
                <span className="col-span-2 flex items-center justify-between text-xl font-semibold md:mt-5">
                  {item.name}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
                <span className="col-span-2 mt-2 block text-sm text-[var(--color-copy)]">
                  {item.kicker} · {item.recommendedStay}
                </span>
                {guide?.connections.find((connection) => connection.slug === item.slug) ? (
                  <span className="col-span-3 mt-3 block leading-7 text-[var(--color-copy)]">
                    {guide.connections.find((connection) => connection.slug === item.slug)!.advice}
                  </span>
                ) : null}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {guide?.mediaCredits?.length ? (
        <aside
          aria-label="Photograph credits"
          className="mx-auto max-w-[85rem] px-[var(--page-gutter)] pb-8 text-sm leading-6 text-[var(--color-muted)]"
        >
          <p className="font-semibold">Photograph credits</p>
          <ul className="mt-3 space-y-2">
            {guide.mediaCredits.map((credit) => (
              <li key={credit.href}>
                <a href={credit.href} className="underline underline-offset-4">
                  {credit.label}
                </a>
                {" · "}
                <a href={credit.licenseHref} className="underline underline-offset-4">
                  {credit.license}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      ) : null}

      <EnquirySection
        placement="destination"
        destinationName={destination.name}
        journeyTitle={destination.name}
        title={`Plan your private ${destination.name} tour`}
        intro="Share your dates, interests, arrival and departure cities, and any plans already booked. We’ll recommend an itinerary at a pace that suits you, with the arrangements and price explained before you book."
      />

      <SiteFooter
        columns={[
          {
            title: "Destinations",
            items: [
              { label: "All destinations", href: "/destinations" },
              ...related.map((item) => ({ label: item.name, href: `/destinations/${item.slug}` })),
            ],
          },
          {
            title: "Planning",
            items: [
              { label: "Private journeys", href: "/tours" },
              { label: "Plan My Trip", href: "/start-planning" },
              { label: "Travel FAQ", href: "/faq" },
            ],
          },
        ]}
        social={[]}
      />
    </main>
  );
}

function Fact({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-white/80 bg-white/72 px-4 py-2.5 text-sm font-semibold shadow-sm backdrop-blur-xl">
      {icon}
      {text}
    </span>
  );
}

function PlanningCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-[1.25rem] border border-black/8 bg-white p-6">
      <span className="grid size-10 place-items-center rounded-[var(--radius-pill)] border border-[var(--color-line)] bg-white text-[var(--color-muted)]">
        {icon}
      </span>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-base leading-7 text-[var(--color-copy)]">{text}</p>
    </article>
  );
}

function EditorialImage({
  image,
}: {
  image: { src: string; alt: string; objectPosition?: string };
}) {
  return (
    <div className="aspect-portrait relative self-start overflow-hidden rounded-[1.5rem]">
      <OptimizedImage
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width:1024px) 45vw, 100vw"
        frameClassName="absolute inset-0 h-full w-full"
        className="object-cover"
        style={{ objectPosition: image.objectPosition }}
      />
    </div>
  );
}
