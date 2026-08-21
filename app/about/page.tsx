import {
  ArrowUpRight,
  Check,
  CircleCheck,
  FileText,
  HeartHandshake,
  Languages,
  MapPin,
  ShieldCheck,
  TrainFront,
  WalletCards,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/footer/site-footer";
import { WhatsAppIcon } from "@/components/icons";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { homeEditorialImages, homeNavItems, primaryAction } from "@/content/home/homepage";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import styles from "./about.module.css";

export const metadata: Metadata = createMetadata({
  title: "About AVIORA | Your China Journey, Personally Handled",
  description:
    "Meet AVIORA, a licensed China travel operator designing private journeys with clear planning, trusted local partners and on-trip support from arrival to departure.",
  path: "/about",
  image: homeEditorialImages.greatWall.src,
});

const travelConcerns = [
  {
    icon: Languages,
    title: "Language",
    text: "A local team, English-speaking guides and clear communication before you arrive.",
  },
  {
    icon: WalletCards,
    title: "Payments",
    text: "Practical preparation for local payment methods, tickets and everyday travel needs.",
  },
  {
    icon: TrainFront,
    title: "Transport",
    text: "Flights, trains, private vehicles and station handovers planned as one connected journey.",
  },
  {
    icon: HeartHandshake,
    title: "Changes",
    text: "A reachable China team that responds when timing, weather or personal needs change.",
  },
];

const travelerNeeds = [
  {
    title: "Families",
    text: "Age-aware pacing, room logic, shorter transfer days and experiences children can enjoy.",
  },
  {
    title: "Women Travelers",
    text: "Thoughtful hotel locations, reliable transfers and clear local support throughout the trip.",
  },
  {
    title: "Older Travelers",
    text: "Gentler walking, sensible rest time, accessible transport and realistic daily schedules.",
  },
  {
    title: "Muslim Travelers",
    text: "Meal planning, prayer considerations and honest advice tailored to each destination.",
  },
  {
    title: "First-Time Visitors",
    text: "A clear route, practical arrival guidance and fewer unknowns in an unfamiliar country.",
  },
  {
    title: "Special Interests",
    text: "Food, photography, culture, nature or heritage shaped into a journey with depth and focus.",
  },
];

const trustProof = [
  {
    icon: ShieldCheck,
    title: "Licensed in China",
    text: "Inbound travel services are operated by our registered Guangzhou travel company.",
  },
  {
    icon: FileText,
    title: "Important Details in Writing",
    text: "Hotels, services, inclusions, payment terms and cancellation conditions are confirmed clearly.",
  },
  {
    icon: CircleCheck,
    title: "No Forced Shopping",
    text: "Your itinerary is built around travel, not compulsory retail stops or hidden commissions.",
  },
  {
    icon: MapPin,
    title: "Local Support",
    text: "The team operating your journey is here in China and reachable while you travel.",
  },
];

const process = [
  {
    number: "01",
    title: "Listen",
    text: "We learn who is traveling, what matters and what could make the trip difficult.",
  },
  {
    number: "02",
    title: "Design",
    text: "We shape the route, pace, hotels and experiences around your priorities.",
  },
  {
    number: "03",
    title: "Confirm",
    text: "You review the important details and a clear written quotation before booking.",
  },
  {
    number: "04",
    title: "Operate",
    text: "Our China team coordinates guides, transport, tickets, stays and handovers.",
  },
  {
    number: "05",
    title: "Support",
    text: "We stay reachable and act locally when your needs or circumstances change.",
  },
];

const teamRoles = [
  {
    title: "Journey Specialist",
    text: "Your planning contact, responsible for understanding the people behind the trip.",
  },
  {
    title: "Route Designer",
    text: "Balances geography, travel time, hotel logic and the rhythm of each day.",
  },
  {
    title: "China Operations",
    text: "Checks bookings and coordinates the local services that make the route work.",
  },
  {
    title: "On-Trip Support",
    text: "Responds when a flight moves, the weather turns or the plan needs to adapt.",
  },
];

const chinaStories = [
  {
    title: "A quieter Great Wall",
    label: "Beijing",
    href: "/destinations/beijing",
    image: homeEditorialImages.greatWall,
  },
  {
    title: "Culture you can take part in",
    label: "Local Experiences",
    href: "/tours",
    image: homeEditorialImages.paintingExperience,
  },
  {
    title: "Landscapes worth slowing down for",
    label: "Guilin",
    href: "/destinations/guilin",
    image: homeEditorialImages.guilinLandscape,
  },
];

const whatsappHref = `https://wa.me/447985052302?text=${encodeURIComponent(
  "Hello AVIORA, I am considering a private trip to China. We are [number] travelers and hope to travel around [dates/month].",
)}`;

export default function AboutPage() {
  return (
    <main className={styles.page}>
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
          name: "About AVIORA China Travel",
          url: new URL("/about", siteConfig.url).toString(),
          description:
            "How AVIORA designs and operates tailored private journeys in China, from planning through on-trip support.",
          mainEntity: {
            "@type": "TravelAgency",
            "@id": `${siteConfig.url}/#organization`,
            name: siteConfig.siteName,
            legalName: siteConfig.operator.legalName,
            foundingDate: siteConfig.operator.founded,
            address: {
              "@type": "PostalAddress",
              addressLocality: siteConfig.operator.locality,
              addressCountry: siteConfig.operator.country,
            },
            email: siteConfig.email,
            telephone: siteConfig.phone,
          },
        }}
      />

      <SiteNavigation
        tone="adaptive"
        variant="default"
        items={homeNavItems}
        cta={primaryAction}
        showWhatsapp={false}
      />

      <section className={styles.hero} aria-labelledby="about-title" data-hero-layout="true">
        <OptimizedImage
          src="/tours/first-china-beautifully-paced/beijing-great-wall-sunrise-hero.webp"
          alt="The Great Wall crossing mountain ridges in warm early light"
          fill
          priority
          sizes="100vw"
          frameClassName={styles.heroImage}
          className={styles.heroImageElement}
        />
        <div className={styles.heroShade} aria-hidden="true" />
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>ABOUT AVIORA</p>
            <h1 id="about-title">China, Seen Differently.</h1>
            <p>
              Private journeys designed around you, then handled in China by one accountable local
              team.
            </p>
            <Link className={styles.heroLink} href="#understood">
              How We Look After Your Journey <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="understood" className={`${styles.section} ${styles.understood}`}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="YOU WILL NOT FACE IT ALONE"
            title="China Can Feel Complex. Your Journey Does Not Have To."
            copy="Language, payments, fast-moving transport and unfamiliar systems can make a first trip feel uncertain. Our role is to remove that uncertainty before it reaches you."
          />
          <div className={styles.concernGrid}>
            {travelConcerns.map((item) => {
              const Icon = item.icon;
              return (
                <article className={styles.concern} key={item.title}>
                  <Icon aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              );
            })}
          </div>
          <p className={styles.reassurance}>
            You should be free to experience China, not spend the trip solving it.
          </p>
        </div>
      </section>

      <section id="designed-around-you" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.splitHeading}>
            <SectionHeading
              eyebrow="DESIGNED AROUND REAL PEOPLE"
              title="Your Journey, Designed Around You."
              copy="A private journey should reflect the people taking it. We adapt the pace, access, meals, hotels and daily rhythm to your needs rather than asking you to fit a fixed tour."
            />
            <Link className={styles.textLink} href="/tours">
              Explore Private Journeys <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.needsGrid}>
            {travelerNeeds.map((item, index) => (
              <article className={styles.need} key={item.title}>
                <span aria-hidden="true">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.softCta}>
            <div>
              <p className={styles.softCtaLabel}>A USEFUL FIRST CONVERSATION</p>
              <p>Tell us who is traveling and what would make China feel right for you.</p>
            </div>
            <Link href="/start-planning?source=about-capability">
              Share Your Priorities <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section id="the-standard" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.standardLayout}>
            <div className={styles.standardLead}>
              <SectionHeading
                eyebrow="THE AVIORA STANDARD"
                title="Trust Should Be Built Into the Journey."
                copy="Reassurance is not a slogan. It comes from clear commitments, responsible local operation and knowing what has been agreed before you travel."
              />
              <div className={styles.legalIdentity}>
                <ShieldCheck aria-hidden="true" />
                <div>
                  <p>Licensed China Operator</p>
                  <strong>{siteConfig.operator.englishReferenceName}</strong>
                  <span>
                    Registered in Guangzhou on March 28, 2018 and licensed to conduct inbound
                    tourism business in China.
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.proofList}>
              {trustProof.map((item) => {
                const Icon = item.icon;
                return (
                  <article className={styles.proof} key={item.title}>
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className={styles.section}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="FROM FIRST CONVERSATION TO WELCOME HOME"
            title="One Clear Process. One Continuous Responsibility."
            copy="You always know what happens next. The same travel brief carries from the first conversation into the day-to-day operation of your trip."
          />
          <ol className={styles.processList}>
            {process.map((item) => (
              <li key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="people" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.peopleLayout}>
            <figure className={styles.peoplePhoto}>
              <OptimizedImage
                src={homeEditorialImages.tradeBuyerMeeting.src}
                alt={homeEditorialImages.tradeBuyerMeeting.alt}
                fill
                sizes="(max-width: 767px) calc(100vw - 48px), 48vw"
                frameClassName={styles.peopleImageFrame}
                className={styles.coverImage}
                style={{ objectPosition: homeEditorialImages.tradeBuyerMeeting.objectPosition }}
              />
              <figcaption>AVIORA in conversation with international travel partners.</figcaption>
            </figure>
            <div className={styles.peopleCopy}>
              <SectionHeading
                eyebrow="THE PEOPLE RESPONSIBLE"
                title="Your Journey Is Handled by People, Not Passed Between Platforms."
                copy="Different specialists contribute their expertise, but the responsibility stays connected. Your requirements do not disappear when planning becomes operation."
              />
              <div className={styles.roles}>
                {teamRoles.map((role) => (
                  <article key={role.title}>
                    <h3>{role.title}</h3>
                    <p>{role.text}</p>
                  </article>
                ))}
              </div>
              <Link
                className={styles.textLink}
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                Speak With Our China Team <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="china-through-our-eyes" className={`${styles.section} ${styles.chinaSection}`}>
        <div className={styles.container}>
          <div className={styles.splitHeading}>
            <SectionHeading
              eyebrow="CHINA, THROUGH OUR EYES"
              title="The China We Want You to Meet."
              copy="Not a checklist seen through a coach window, but a country with time for landscapes, people, food and small moments that become part of your story."
            />
            <Link className={styles.textLink} href="/destinations">
              Explore China <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
          <div className={styles.storyGrid}>
            {chinaStories.map((story) => (
              <Link className={styles.story} href={story.href} key={story.title}>
                <OptimizedImage
                  src={story.image.src}
                  alt={story.image.alt}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 48px), 33vw"
                  frameClassName={styles.storyImage}
                  className={styles.coverImage}
                  style={{ objectPosition: story.image.objectPosition }}
                />
                <div className={styles.storyCaption}>
                  <span>{story.label}</span>
                  <h3>{story.title}</h3>
                  <ArrowUpRight aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="start" className={styles.finalCta}>
        <div className={styles.container}>
          <div className={styles.finalCtaGrid}>
            <div>
              <p className={styles.eyebrow}>YOUR CHINA STORY STARTS HERE</p>
              <h2>You Reach China. We Take Care of What Comes Next.</h2>
            </div>
            <div className={styles.finalCtaCopy}>
              <p>
                Share your approximate dates, number of travelers and travel style. We will reply
                personally within 24 hours with the right next questions and a considered first
                direction.
              </p>
              <div className={styles.finalActions}>
                <Link className={styles.primaryAction} href="/start-planning?source=about-final">
                  Plan My Private Journey <ArrowUpRight aria-hidden="true" />
                </Link>
                <Link
                  className={styles.whatsappAction}
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon aria-hidden="true" /> WhatsApp Our Team
                </Link>
              </div>
              <div className={styles.finalTrust}>
                <span>
                  <Check aria-hidden="true" /> No Obligation
                </span>
                <span>
                  <Check aria-hidden="true" /> Personal Reply
                </span>
                <span>
                  <Check aria-hidden="true" /> Clear Next Step
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter
        columns={[
          {
            title: "About AVIORA",
            items: [
              { label: "How We Help", href: "#understood" },
              { label: "Who We Design For", href: "#designed-around-you" },
              { label: "The AVIORA Standard", href: "#the-standard" },
              { label: "Our Process", href: "#how-it-works" },
              { label: "The People", href: "#people" },
            ],
          },
          {
            title: "Explore",
            items: [
              { label: "Private Journeys", href: "/tours" },
              { label: "Destinations", href: "/destinations" },
              { label: "China Journal", href: "/journal" },
              { label: "Plan My Trip", href: "/start-planning" },
            ],
          },
        ]}
        social={siteConfig.socials.map((href) => ({ label: "Social", href }))}
      />
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <header className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2>{title}</h2>
      <span className={styles.breathingLine} aria-hidden="true" />
      <p className={styles.sectionCopy}>{copy}</p>
    </header>
  );
}
