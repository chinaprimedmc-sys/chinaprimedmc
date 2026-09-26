import {
  ArrowLeft,
  ArrowRight,
  BedDouble,
  CalendarDays,
  Compass,
  Lightbulb,
  MapPin,
  Route,
} from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { CtaButton } from "@/components/cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import type { CmsDestinationCard } from "@/components/destinations/destination-explorer";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
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
  const planningHref = `${cta.href}?destination=${encodeURIComponent(destination.name)}&source=destination-guide`;
  const related = destinations
    .filter((item) => item.region === destination.region && item.slug !== destination.slug)
    .slice(0, 3);
  const relatedGuides = journalArticles
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
            <h1 className="type-hero mt-5">{destination.name}</h1>
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
              {journeys[0] ? (
                <CtaButton href={journeys[0].href} variant="secondary" size="lg">
                  View a real itinerary
                </CtaButton>
              ) : null}
            </div>
          </div>
        </div>
      </section>

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

      <section className="mx-auto grid max-w-[85rem] gap-12 px-[var(--page-gutter)] py-[var(--space-section-compact)] md:grid-cols-[.72fr_1.28fr] md:py-[var(--space-section-default)]">
        <div>
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
            Why this destination
          </p>
          <h2 className="type-section-title mt-5">Why {destination.name} belongs in the route.</h2>
        </div>
        <div className="grid gap-6 text-base leading-8 text-[var(--color-copy)] md:text-lg">
          <p>{destination.orientation}</p>
          <p>
            We recommend {destination.recommendedStay.toLowerCase()} here. The right onward
            connection depends on your season, available time and the contrast you want from the
            next destination.
          </p>
        </div>
      </section>

      <section className="border-y border-black/8 bg-white py-[var(--space-section-compact)] md:py-[var(--space-section-default)]">
        <div className="mx-auto grid max-w-[85rem] gap-12 px-[var(--page-gutter)] lg:grid-cols-[.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-4">
            {destination.gallery.slice(1, 3).map((image, index) => (
              <div
                key={image.src}
                className={`relative overflow-hidden rounded-[1.25rem] ${index === 0 ? "aspect-[3/4]" : "mt-12 aspect-[3/4]"}`}
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

      <section className="border-y border-black/8 bg-white py-[var(--space-section-compact)]">
        <div className="mx-auto max-w-[85rem] px-[var(--page-gutter)]">
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
            Signature experiences
          </p>
          <h2 className="type-section-title mt-5 max-w-3xl">
            What gives {destination.name} its character.
          </h2>
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

      <section className="border-y border-black/8 bg-white py-[var(--space-section-compact)] md:py-[var(--space-section-default)]">
        <div className="mx-auto max-w-[85rem] px-[var(--page-gutter)]">
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
            Suggested {destination.name} itinerary
          </p>
          <h2 className="type-section-title mt-5 max-w-4xl">
            A realistic way to use {destination.recommendedStay.toLowerCase()}.
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
            {journeys[0] ? (
              <CtaButton href={journeys[0].href} size="lg">
                See the complete journey
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
          <h2 className="type-section-title mt-5">Season changes the feeling.</h2>
          <p className="mt-6 text-base leading-8 text-[var(--color-copy)]">
            {destination.bestTime}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
            Planning notes
          </p>
          <ul className="mt-5 divide-y divide-black/8 border-y border-black/8">
            {destination.planningNotes.map((note) => (
              <li key={note} className="flex gap-4 py-5 text-base leading-7">
                <MapPin className="mt-1 size-4 shrink-0 text-[var(--color-muted)]" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-black/8 bg-white py-[var(--space-section-compact)]">
        <div className="mx-auto max-w-[85rem] px-[var(--page-gutter)]">
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
            Practical orientation for international visitors
          </p>
          <h2 className="type-section-title mt-5 max-w-4xl">
            How {destination.name} works on the ground.
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
              icon={<BedDouble className="size-5" />}
              title="Where and how long to stay"
              text={destination.stayStrategy}
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

      <section className="py-[var(--space-section-compact)]">
        <div className="mx-auto max-w-[85rem] px-[var(--page-gutter)]">
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
            Nearby chapters
          </p>
          <h2 className="type-section-title mt-5">Continue through {destination.region}.</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/destinations/${item.slug}`} className="group">
                <span className="relative block aspect-[3/2] overflow-hidden rounded-[1.4rem]">
                  <OptimizedImage
                    src={
                      item.heroImage?.src ?? "/home/editorial/great-wall-private-china-travel.webp"
                    }
                    alt={item.heroImage?.alt ?? item.name}
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    frameClassName="absolute inset-0 h-full w-full"
                    className="object-cover transition duration-700 group-hover:scale-105"
                    style={{ objectPosition: item.heroImage?.objectPosition }}
                  />
                </span>
                <span className="mt-5 flex items-center justify-between text-xl font-semibold">
                  {item.name}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
                <span className="mt-2 block text-sm text-[var(--color-copy)]">
                  {item.kicker} · {item.recommendedStay}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {journeys.length ? (
        <section
          id="private-journeys"
          className="border-y border-black/8 bg-white py-[var(--space-section-compact)]"
        >
          <div className="mx-auto max-w-[85rem] px-[var(--page-gutter)]">
            <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
              Private journeys including {destination.name}
            </p>
            <h2 className="type-section-title mt-5 max-w-3xl">
              See how {destination.name} fits into a considered route.
            </h2>
            <p className="mt-5 max-w-3xl leading-7 text-[var(--color-copy)]">
              These are published AVIORA products, not generic route suggestions. Open any journey
              to review its day-by-day structure, included private services and planning options.
            </p>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {journeys.map((journey) => (
                <Link
                  key={journey.slug}
                  href={journey.href}
                  className="group grid gap-5 sm:grid-cols-[.8fr_1.2fr]"
                >
                  <span className="relative block aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#f3f4f4]">
                    {journey.visualStatus === "pending" ? (
                      <span className="absolute inset-0 flex flex-col justify-end gap-2 p-5 text-[var(--color-muted)]">
                        <span className="mb-auto block h-px w-12 bg-black/20" />
                        <span className="text-xs font-semibold">Photography being prepared</span>
                        <span className="text-xs leading-5 text-[var(--color-muted)]">
                          Route and service details are ready to plan
                        </span>
                      </span>
                    ) : (
                      <OptimizedImage
                        src={journey.image.src}
                        alt={journey.image.alt}
                        fill
                        sizes="(min-width:768px) 30vw, 100vw"
                        frameClassName="absolute inset-0 h-full w-full"
                        className="object-cover transition duration-700 group-hover:scale-105"
                        style={{ objectPosition: journey.image.objectPosition }}
                      />
                    )}
                  </span>
                  <span className="self-center">
                    <span className="text-xs font-semibold text-[var(--color-muted)] uppercase">
                      {journey.durationLabel}
                    </span>
                    <span className="mt-2 block text-xl font-semibold">{journey.title}</span>
                    <span className="mt-2 block text-base leading-6 text-[var(--color-copy)]">
                      {journey.routeLabel}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                      View journey{" "}
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-y border-black/8 bg-white py-[var(--space-section-compact)]">
        <div className="mx-auto max-w-4xl px-[var(--page-gutter)]">
          <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
            {destination.name} travel FAQ
          </p>
          <h2 className="type-section-title mt-5">Clear answers before you choose the route.</h2>
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
            Prepare for {destination.name} with clearer answers.
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
                  <span className="mt-2 block text-xl font-semibold">{article.title}</span>
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

      <section className="mx-auto max-w-[85rem] px-[var(--page-gutter)] py-[var(--space-section-compact)] md:py-[var(--space-section-default)]">
        <div className="grid gap-10 border-t border-black/10 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
              Private China planning
            </p>
            <h2 className="type-section-title mt-5 max-w-3xl">
              Build {destination.name} into the right private tour.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-[var(--color-copy)]">
              Share your dates, travelers and hotel expectations. We will recommend the right stay,
              onward connection and private service plan.
            </p>
          </div>
          <CtaButton href={planningHref} size="lg">
            Plan this destination
          </CtaButton>
        </div>
      </section>

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
    <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/72 px-4 py-2.5 text-sm font-semibold shadow-sm backdrop-blur-xl">
      {icon}
      {text}
    </span>
  );
}

function PlanningCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <article className="rounded-[1.25rem] border border-black/8 bg-white p-6">
      <span className="grid size-10 place-items-center rounded-full border border-[var(--color-line)] bg-white text-[var(--color-muted)]">
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
    <div className="relative min-h-[28rem] overflow-hidden rounded-[1.5rem] md:min-h-[38rem]">
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
