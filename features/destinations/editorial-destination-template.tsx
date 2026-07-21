import { ArrowLeft, ArrowRight, CalendarDays, Compass, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { CtaButton } from "@/components/cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import type { CmsDestinationCard } from "@/components/destinations/destination-explorer";
import type { NavigationItem } from "@/types/component-library";

export function EditorialDestinationTemplate({
  destination,
  destinations,
  navigation,
  cta,
}: {
  destination: CmsDestinationCard & {
    bestTime: string;
    orientation: string;
    highlights: string[];
    planningNotes: string[];
  };
  destinations: CmsDestinationCard[];
  navigation: NavigationItem[];
  cta: { label: string; href: string };
}) {
  const related = destinations
    .filter((item) => item.region === destination.region && item.slug !== destination.slug)
    .slice(0, 3);

  return (
    <main className="min-h-svh overflow-x-clip bg-[#f7f7f3] text-[#1b1c19]">
      <SiteNavigation
        tone="light"
        items={navigation}
        cta={{
          label: cta.label,
          href: `${cta.href}?destination=${encodeURIComponent(destination.name)}&source=destination-guide`,
        }}
      />
      <section data-hero-layout="true" className="relative min-h-[88svh] overflow-hidden">
        <Image
          src={destination.heroImage?.src ?? "/home/beijing-forbidden-city-1400.webp"}
          alt={destination.heroImage?.alt ?? destination.name}
          fill
          priority
          sizes="100vw"
          className="object-cover motion-safe:animate-[destination-hero-breathe_16s_ease-out_both]"
          style={{ objectPosition: destination.heroImage?.objectPosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,247,243,.96)_0%,rgba(247,247,243,.82)_31%,rgba(247,247,243,.18)_55%,transparent_74%),linear-gradient(0deg,rgba(247,247,243,.32),transparent_42%)] max-md:bg-[linear-gradient(0deg,rgba(247,247,243,.98)_0%,rgba(247,247,243,.88)_35%,rgba(247,247,243,.08)_62%,transparent_78%)]" />
        <div className="relative mx-auto flex min-h-[88svh] max-w-[92rem] items-end px-5 pb-16 sm:px-6 md:items-center md:pb-0 lg:px-8">
          <div className="max-w-3xl pt-28">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#607868]"
            >
              <ArrowLeft className="size-4" /> All destinations
            </Link>
            <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-[#607868] uppercase">
              {destination.kicker} · {destination.region}
            </p>
            <h1 className="mt-5 font-serif text-[clamp(4rem,9vw,8rem)] leading-[.9]">
              {destination.name}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#1b1c19]/68">
              {destination.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <Fact icon={<CalendarDays className="size-4" />} text={destination.recommendedStay} />
              <Fact icon={<Compass className="size-4" />} text={destination.bestFor} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[92rem] gap-12 px-5 py-24 sm:px-6 md:grid-cols-[.72fr_1.28fr] md:py-32 lg:px-8">
        <div>
          <p className="text-xs font-semibold tracking-[.2em] text-[#607868] uppercase">
            Why this destination
          </p>
          <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
            A distinct chapter of China.
          </h2>
        </div>
        <div className="grid gap-6 text-base leading-8 text-[#1b1c19]/66 md:text-lg">
          <p>{destination.orientation}</p>
          <p>
            {destination.summary} It can stand alone as a focused visit or become part of a wider
            private route, depending on the season, available time and the people traveling.
          </p>
        </div>
      </section>

      <section className="border-y border-black/8 bg-white py-24">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[.2em] text-[#607868] uppercase">
            Signature experiences
          </p>
          <h2 className="mt-5 max-w-3xl font-serif text-4xl md:text-6xl">
            What gives {destination.name} its character.
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {destination.highlights.map((experience, index) => (
              <article
                key={experience}
                className="rounded-[1.5rem] border border-black/8 bg-[#f7f7f3] p-7"
              >
                <span className="text-xs font-semibold text-[#607868]">0{index + 1}</span>
                <h3 className="mt-8 text-xl leading-8 font-semibold">{experience}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[92rem] gap-12 px-5 py-24 sm:px-6 md:grid-cols-2 md:py-32 lg:px-8">
        <div>
          <p className="text-xs font-semibold tracking-[.2em] text-[#607868] uppercase">
            When to go
          </p>
          <h2 className="mt-5 font-serif text-4xl md:text-5xl">Season changes the feeling.</h2>
          <p className="mt-6 text-base leading-8 text-[#1b1c19]/64">{destination.bestTime}</p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-[.2em] text-[#607868] uppercase">
            Planning notes
          </p>
          <ul className="mt-5 divide-y divide-black/8 border-y border-black/8">
            {destination.planningNotes.map((note) => (
              <li key={note} className="flex gap-4 py-5 text-base leading-7">
                <MapPin className="mt-1 size-4 shrink-0 text-[#607868]" />
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-black/8 bg-[#e9ede9] py-24">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[.2em] text-[#607868] uppercase">
            Nearby chapters
          </p>
          <h2 className="mt-5 font-serif text-4xl md:text-6xl">
            Continue through {destination.region}.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/destinations/${item.slug}`} className="group">
                <span className="relative block aspect-[3/2] overflow-hidden rounded-[1.4rem]">
                  <Image
                    src={item.heroImage?.src ?? "/home/beijing-forbidden-city-1400.webp"}
                    alt={item.heroImage?.alt ?? item.name}
                    fill
                    sizes="(min-width:768px) 33vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                    style={{ objectPosition: item.heroImage?.objectPosition }}
                  />
                </span>
                <span className="mt-5 flex items-center justify-between text-xl font-semibold">
                  {item.name}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
                <span className="mt-2 block text-sm text-[#1b1c19]/55">
                  {item.kicker} · {item.recommendedStay}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[92rem] px-5 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="grid gap-10 rounded-[2rem] bg-[#dfe8e0] p-7 md:grid-cols-[1fr_auto] md:items-end md:p-12">
          <div>
            <p className="text-xs font-semibold tracking-[.2em] text-[#607868] uppercase">
              Private China planning
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl md:text-6xl">
              Place {destination.name} in the right journey.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-[#1b1c19]/62">
              Tell us who is traveling, your dates and preferred pace. We will suggest how this
              destination can fit naturally into a private China route.
            </p>
          </div>
          <CtaButton
            href={`${cta.href}?destination=${encodeURIComponent(destination.name)}&source=destination-guide`}
            size="lg"
          >
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
              { label: "Start planning", href: "/start-planning" },
              { label: "Travel styles", href: "/styles" },
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
