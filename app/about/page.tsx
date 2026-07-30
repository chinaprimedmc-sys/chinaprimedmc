import { ArrowRight, Check, FileCheck2, MessageCircle, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import { CtaButton } from "@/components/cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { homeEditorialImages, homeNavItems, primaryAction } from "@/content/home/homepage";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";

export const metadata: Metadata = createMetadata({
  title: "About AVIORA and Our Licensed China Team",
  description:
    "Meet the licensed China team behind AVIORA's tailored private tours, hotel selection, local guides and on-trip support.",
  path: "/about",
  image: homeEditorialImages.tradeConsultation.src,
});

const reasons = [
  {
    number: "01",
    title: "A team based in China",
    description:
      "Our local team coordinates guides, vehicles, tickets and support with current knowledge on the ground.",
  },
  {
    number: "02",
    title: "Private, flexible and no forced shopping",
    description:
      "Your time remains yours. Shopping is included only when requested, never hidden inside the itinerary.",
  },
  {
    number: "03",
    title: "Travel designed around real people",
    description:
      "Pacing, meals and access are adapted for families, older parents, Muslim travelers and specific needs.",
  },
  {
    number: "04",
    title: "Human support from inquiry to travel",
    description:
      "One specialist helps shape your trip while our local team manages the details and stays reachable as you travel.",
  },
];

const process = [
  {
    step: "Listen",
    text: "You share the people, dates, interests, pace and concerns behind the trip.",
  },
  {
    step: "Design",
    text: "We connect destinations, transfer time and daily rhythm into a first route direction.",
  },
  {
    step: "Confirm",
    text: "You receive a written quotation with hotels, services, inclusions and payment terms before you book.",
  },
  {
    step: "Operate",
    text: "The China team coordinates the guides, vehicles, tickets, stays and live timing.",
  },
  {
    step: "Support",
    text: "A real person stays reachable when weather, energy or circumstances change.",
  },
];

const promises = [
  "Clear written quotations",
  "No forced shopping",
  "Private pacing",
  "Clear local support",
];

export default function AboutPage() {
  return (
    <main className="min-h-svh overflow-x-clip bg-[#f7f7f3] text-[#1b1c19]">
      <JsonLd
        id="about-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About AVIORA", path: "/about" },
        ])}
      />
      <JsonLd
        id="about-page-schema"
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About AVIORA and China Prime DMC",
          url: new URL("/about", siteConfig.url).toString(),
          description:
            "The licensed China team, company and service standards behind AVIORA private tours.",
          mainEntity: { "@id": `${siteConfig.url}/#organization` },
        }}
      />
      <SiteNavigation
        tone="light"
        items={homeNavItems}
        cta={{ label: "Plan My Trip", href: primaryAction.href }}
      />

      <section data-hero-layout="true" className="relative min-h-svh overflow-hidden">
        <Image
          src={homeEditorialImages.tradeConsultation.src}
          alt={homeEditorialImages.tradeConsultation.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center motion-safe:animate-[destination-hero-breathe_16s_ease-out_both]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,247,243,.98),rgba(247,247,243,.88)_42%,rgba(247,247,243,.2)_68%,transparent_84%),linear-gradient(0deg,rgba(247,247,243,.55),transparent_46%)] max-md:bg-[linear-gradient(0deg,rgba(247,247,243,.98),rgba(247,247,243,.82)_42%,rgba(247,247,243,.08)_72%)]" />
        <div className="relative mx-auto flex min-h-svh max-w-[92rem] items-end px-5 pb-16 sm:px-6 md:items-center md:pb-0 lg:px-8">
          <div className="max-w-3xl pt-28 motion-safe:animate-[destination-copy-reveal_.9s_var(--motion-ease-out)_both]">
            <p className="text-xs font-semibold tracking-[0.22em] text-[#607868] uppercase">
              About AVIORA
            </p>
            <h1 className="mt-6 max-w-3xl font-serif text-[clamp(3.6rem,7.5vw,7.6rem)] leading-[.88] text-balance">
              Private China, handled by people who know it.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[#1b1c19]/68 md:text-lg">
              Tailored tours, selected local partners and responsive support from a licensed inbound
              operator. Our travel work began in 2012; the Guangzhou company was registered in 2018.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Private journeys", "No forced shopping", "Licensed China operator"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/85 bg-white/72 px-4 py-2.5 text-sm font-semibold shadow-sm backdrop-blur-xl"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="who-we-are"
        className="mx-auto max-w-[92rem] px-5 py-24 sm:px-6 md:py-32 lg:px-8"
      >
        <SectionIntro
          eyebrow="01 · Who we are"
          title="One travel brand. One accountable team in China."
          description="AVIORA is the name you travel with. The licensed Guangzhou company is responsible for your services in China."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <IdentityBlock
            label="International brand"
            title="AVIORA"
            body="The name you see throughout planning, booking and travel: one consistent point of contact for your trip."
          />
          <IdentityBlock
            label="China travel services"
            title="China Prime DMC"
            body="The team coordinating your route, guides, private transport, tickets, hotels and local support."
          />
          <IdentityBlock
            label="Licensed company in China"
            title={siteConfig.operator.englishReferenceName}
            body={`${siteConfig.operator.legalName}. Registered in Guangzhou on March 28, 2018 and ${siteConfig.operator.tourismLicense.statement}.`}
          />
        </div>

        <div className="mt-8 grid gap-6 rounded-[1.75rem] border border-[#607868]/16 bg-[#e7ece7] p-7 md:grid-cols-[1fr_1fr] md:p-10">
          <div>
            <div className="flex items-center gap-3 text-[#607868]">
              <FileCheck2 className="size-5" />
              <p className="text-xs font-semibold tracking-[.18em] uppercase">
                Credential verification
              </p>
            </div>
            <h2 className="mt-5 font-serif text-3xl md:text-4xl">
              Real credentials, shared responsibly.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#1b1c19]/62">
              We do not publish unredacted licence scans on an open webpage. They may contain seals,
              personal details, full registered-address information or identifiers that do not need
              to be permanently indexed.
            </p>
          </div>
          <div className="grid gap-3 self-end">
            <CredentialLine
              title="Inbound tourism business licence"
              text="The China operating company is licensed to conduct inbound tourism business."
            />
            <CredentialLine
              title="Business registration"
              text="The legal company name, registration location and incorporation date are stated openly on this site."
            />
            <CredentialLine
              title="Document check"
              text="Relevant licence and contracting documents can be verified before you make a booking."
            />
          </div>
        </div>
      </section>

      <section id="why-travel-with-us" className="border-y border-black/8 bg-white py-24 md:py-32">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="02 · Why travel with us"
            title="Good travel design is practical before it is impressive."
            description="Our value is not a longer checklist. It is making China feel clearer, more personal and easier to move through."
          />
          <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="group grid gap-5 py-9 md:grid-cols-[.22fr_.78fr_1fr] md:items-start md:py-12"
              >
                <span className="text-xs font-semibold text-[#607868]">{reason.number}</span>
                <h3 className="max-w-md font-serif text-3xl leading-tight md:text-4xl">
                  {reason.title}
                </h3>
                <p className="max-w-2xl text-base leading-8 text-[#1b1c19]/60">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="overflow-hidden bg-[#e9ede9] py-24 md:py-32">
        <div className="mx-auto max-w-[92rem] px-5 sm:px-6 lg:px-8">
          <SectionIntro
            eyebrow="03 · How we work"
            title="Five stages. One continuous line of responsibility."
            description="At every stage, you know what happens next and which details will be confirmed in writing."
          />
        </div>
        <div className="mt-14 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto px-[max(1.25rem,calc((100vw-92rem)/2+2rem))] pb-8">
          {process.map((item, index) => (
            <article
              key={item.step}
              className="flex min-h-[24rem] w-[80vw] max-w-[24rem] shrink-0 snap-center flex-col justify-between rounded-[1.6rem] border border-white/85 bg-white/72 p-7 shadow-[0_18px_52px_rgba(27,28,25,.07)] backdrop-blur-xl md:w-[31vw]"
            >
              <span className="text-xs font-semibold tracking-[.16em] text-[#607868]">
                0{index + 1}
              </span>
              <div>
                <h3 className="font-serif text-4xl">{item.step}</h3>
                <p className="mt-4 text-sm leading-7 text-[#1b1c19]/60">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="international-conversations"
        className="mx-auto max-w-[92rem] px-5 py-24 sm:px-6 md:py-32 lg:px-8"
      >
        <SectionIntro
          eyebrow="04 · International conversations"
          title="We listen to how different guests want to experience China."
          description="Our conversations in Kuala Lumpur covered the questions international guests ask most, from family comfort to Muslim-friendly planning and local support."
        />
        <div className="mt-14 grid gap-4 lg:grid-cols-[1.15fr_.85fr]">
          <TradeImage
            image={homeEditorialImages.tradeBuyerMeeting}
            label="China travel conversation · Kuala Lumpur"
            featured
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <TradeImage
              image={homeEditorialImages.tradeMuslimBuyers}
              label="Muslim-friendly travel discussion · Kuala Lumpur"
            />
            <TradeImage
              image={homeEditorialImages.tradeConsultation}
              label="China travel consultation · Kuala Lumpur"
            />
          </div>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-[#1b1c19]/55">
          These are photographs of real conversations about travel in China. We share them to show
          the people behind AVIORA, without making claims that cannot be independently verified.
        </p>
      </section>

      <section id="team" className="border-y border-black/8 bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-[92rem] gap-12 px-5 sm:px-6 lg:grid-cols-[.78fr_1.22fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold tracking-[.2em] text-[#607868] uppercase">
              05 · The team behind the journey
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
              Real roles, without invented profiles.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#1b1c19]/60">
              Until complete team portraits and approved biographies are available, we show the
              functions responsible for your journey rather than stock faces or fictional names.
            </p>
            <CtaButton href="/contact" className="mt-8" size="sm">
              Speak with a China journey specialist
            </CtaButton>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Role
              title="Journey specialist"
              text="Listens to the traveler and keeps the route aligned with the brief."
            />
            <Role
              title="Route designer"
              text="Balances destinations, transfers, pacing and accommodation logic."
            />
            <Role
              title="China operations"
              text="Coordinates bookings, local suppliers and day-to-day execution."
            />
            <Role
              title="On-trip support"
              text="Responds when timing, weather or traveler needs change."
            />
          </div>
        </div>
      </section>

      <section id="promise" className="mx-auto max-w-[92rem] px-5 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="rounded-[2rem] border border-[#607868]/16 bg-[#dfe8e0] p-7 shadow-[0_22px_70px_rgba(63,83,68,.1)] md:p-12">
          <p className="text-xs font-semibold tracking-[.2em] text-[#607868] uppercase">
            06 · Our service promise
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {promises.map((promise) => (
              <div
                key={promise}
                className="flex min-h-24 items-center gap-3 rounded-[1.25rem] border border-white/75 bg-white/58 p-5 text-sm font-semibold backdrop-blur-xl"
              >
                <Check className="size-4 text-[#607868]" />
                {promise}
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-8 border-t border-[#607868]/16 pt-10 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[.18em] text-[#607868] uppercase">
                07 · Start a conversation
              </p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
                Start a conversation with our China team.
              </h2>
              <p className="mt-5 max-w-2xl leading-7 text-[#1b1c19]/62">
                Share the people, dates and pace behind the trip. We will reply with a clear first
                direction.
              </p>
            </div>
            <CtaButton href="/start-planning?source=about-aviora" size="lg">
              Start planning <ArrowRight className="size-4" />
            </CtaButton>
          </div>
        </div>
      </section>

      <SiteFooter
        columns={[
          {
            title: "About AVIORA",
            items: [
              { label: "Who we are", href: "#who-we-are" },
              { label: "Why travel with us", href: "#why-travel-with-us" },
              { label: "How we work", href: "#how-we-work" },
              { label: "International conversations", href: "#international-conversations" },
            ],
          },
          {
            title: "Plan",
            items: [
              { label: "Private journeys", href: "/tours" },
              { label: "Destinations", href: "/destinations" },
              { label: "Start planning", href: "/start-planning" },
            ],
          },
        ]}
        social={[]}
      />
    </main>
  );
}

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold tracking-[.2em] text-[#607868] uppercase">{eyebrow}</p>
      <h2 className="mt-5 font-serif text-4xl leading-[1.02] md:text-6xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[#1b1c19]/58 md:text-lg">
        {description}
      </p>
    </div>
  );
}

function IdentityBlock({ label, title, body }: { label: string; title: string; body: string }) {
  return (
    <article className="flex min-h-[19rem] flex-col justify-between rounded-[1.5rem] border border-black/8 bg-white p-7 shadow-[0_16px_46px_rgba(27,28,25,.05)]">
      <p className="text-xs font-semibold tracking-[.17em] text-[#607868] uppercase">{label}</p>
      <div>
        <h3 className="font-serif text-3xl leading-tight">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-[#1b1c19]/58">{body}</p>
      </div>
    </article>
  );
}

function CredentialLine({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.1rem] border border-white/80 bg-white/55 p-5">
      <div className="flex gap-3">
        <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#607868]" />
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
          <p className="mt-1 text-xs leading-6 text-[#1b1c19]/55">{text}</p>
        </div>
      </div>
    </div>
  );
}

function TradeImage({
  image,
  label,
  featured = false,
}: {
  image: { src: string; alt: string; objectPosition?: string };
  label: string;
  featured?: boolean;
}) {
  return (
    <figure
      className={
        featured
          ? "group relative min-h-[32rem] overflow-hidden rounded-[1.6rem]"
          : "group relative min-h-[15rem] overflow-hidden rounded-[1.6rem]"
      }
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={featured ? "(min-width:1024px) 58vw, 100vw" : "(min-width:1024px) 42vw, 100vw"}
        className="object-cover transition duration-700 group-hover:scale-[1.025]"
        style={{ objectPosition: image.objectPosition }}
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
      <figcaption className="absolute right-5 bottom-5 left-5 text-sm font-semibold text-white">
        {label}
      </figcaption>
    </figure>
  );
}

function Role({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[1.4rem] border border-black/8 bg-[#f7f7f3] p-6">
      <MessageCircle className="size-5 text-[#607868]" />
      <h3 className="mt-8 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#1b1c19]/56">{text}</p>
    </article>
  );
}
