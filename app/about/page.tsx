import {
  ArrowUpRight,
  CircleCheck,
  FileText,
  HeartHandshake,
  Languages,
  MapPin,
  ShieldCheck,
  TrainFront,
  WalletCards,
} from "@/components/icons/symbols";
import type { Metadata } from "next";
import white from "@/components/about/white-editorial.module.css";
import Link from "next/link";
import Image from "next/image";

import { TrackedLink } from "@/components/cta/tracked-link";
import { ServiceCases } from "@/components/about/service-cases";
import { AboutNavigation } from "@/components/about/about-navigation";
import { EnquirySection } from "@/components/forms/enquiry-section";
import { SiteFooter } from "@/components/footer/site-footer";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { companyIdentity } from "@/content/about/identity";
import { aboutSearch } from "@/content/about/search";
import { aboutPageSchema } from "@/lib/seo/about";
import { founder } from "@/content/founder";
import {
  aboutQuestions,
  brandStory,
  travelDecisions,
  hospitalityPrinciples,
} from "@/content/about";
import { serviceAchievements, serviceFiguresDisclosure } from "@/content/home/service-achievements";
import { homeEditorialImages } from "@/content/home/homepage";
import { JsonLd } from "@/lib/seo/json-ld";
import { createMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema } from "@/lib/seo/schema";
import styles from "./about.module.css";

export const metadata: Metadata = createMetadata({
  title: aboutSearch.title,
  description: aboutSearch.description,
  keywords: [],
  path: "/about",
  image: homeEditorialImages.greatWall.src,
});

const travelConcerns = [
  {
    icon: Languages,
    title: "Language",
    text: "A local team, multilingual guides and clear communication before you arrive.",
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
    href: "/china-family-tours",
    readMore: "Read our family travel guide",
    text: "Room arrangements, rest time and travel days planned around children’s ages and your family’s pace.",
  },
  {
    title: "Women Travelers",
    href: "/china-tours-for-women",
    readMore: "Read our women’s travel guide",
    text: "Thoughtful hotel locations, reliable transfers and clear local support throughout the trip.",
  },
  {
    title: "Older Travelers",
    href: "/china-tours-for-seniors",
    readMore: "Read our guide to traveling at your pace",
    text: "Walking distances, stairs, rest time and vehicle access checked against your needs before confirmation.",
  },
  {
    title: "Muslim Travelers",
    href: "/china-tours-for-muslim-travelers",
    readMore: "Read our Muslim travel planning guide",
    text: "Meal planning, prayer considerations and honest advice tailored to each destination.",
  },
  {
    title: "First-Time Visitors",
    href: "/first-time-china-tours",
    readMore: "Read our first-time China travel guide",
    text: "A clear route, practical arrival guidance and fewer unknowns in an unfamiliar country.",
  },
  {
    title: "Special Interests",
    href: "/special-interest-china-tours",
    readMore: "Read our special-interest travel guide",
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
    text: "No compulsory retail stops. Shopping is included only when you ask for it.",
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

const whatsappHref = `https://wa.me/8618027438191?text=${encodeURIComponent(
  "Hello AVIORA, I am considering a private trip to China. We are [number] travelers and hope to travel around [dates/month].",
)}`;

export default function AboutPage() {
  return (
    <main className={`${styles.page} ${white.page}`}>
      <JsonLd
        id="about-breadcrumb-schema"
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About AVIORA", path: "/about" },
        ])}
      />
      <JsonLd id="about-page-schema" data={aboutPageSchema()} />

      <SiteNavigation />

      <section className={styles.hero} aria-labelledby="about-title" data-hero-layout="true">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.heroEyebrow}>ABOUT AVIORA</p>
            <h1 id="about-title">China, Seen Differently.</h1>
            <p>{companyIdentity.brandSummary}</p>
            <Link className={styles.heroLink} href="#understood">
              How We Look After Your Journey <ArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        </div>
        <figure className={styles.heroPhoto}>
          <OptimizedImage
            src="/tours/first-china-beautifully-paced/beijing-great-wall-sunrise-hero.webp"
            alt="The Great Wall crossing mountain ridges in warm early light"
            fill
            priority
            sizes="(max-width: 767px) 100vw, 48vw"
            frameClassName={styles.heroImage}
            className={styles.heroImageElement}
          />
        </figure>
      </section>

      <div className={`${styles.container} ${styles.routeNavigation}`}>
        <AboutNavigation current="/about" />
        <nav className={styles.pageIndex} aria-label="On this page">
          <span>On this page</span>
          <a href="#our-story">Our story</a>
          <a href="#designed-around-you">Your journey</a>
          <a href="#the-standard">Our standards</a>
          <a href="#brand-questions">Brand & company</a>
          <a href="#before-booking-guides">Before booking</a>
          <a href="#service-cases">Service stories</a>
          <a href="#people">Our team</a>
          <a href="#founder">Our founder</a>
          <a href="#about-questions">Questions</a>
        </nav>
      </div>

      <section className={`${styles.section} ${styles.introduction}`} aria-labelledby="who-we-are">
        <div className={styles.container}>
          <div className={styles.identityIntro}>
            <SectionHeading
              id="who-we-are"
              eyebrow="LOCAL KNOWLEDGE. CLEAR RESPONSIBILITY."
              title="Your travel partner, here in China."
              copy="AVIORA brings together journey planning and local operation for travelers who want to explore China at their own pace. We work through a Guangzhou-registered travel company established in 2018, with offices in Beijing, Shanghai and Xi’an."
            />
            <div className={styles.identityAside}>
              <p>
                From the first route discussion to the last transfer, we connect the decisions that
                make a journey work: where to stay, how far to travel, who will guide you and what
                to do when plans change.
              </p>
              <Link className={styles.textLink} href="/company">
                Meet the company behind AVIORA <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
          </div>
          <dl className={styles.brandFacts} aria-label="AVIORA at a glance">
            {aboutSearch.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
                <dd>
                  <Link href={fact.href}>{fact.linkLabel}</Link>
                </dd>
              </div>
            ))}
          </dl>
          <dl className={styles.achievements}>
            {serviceAchievements.map((fact) => (
              <div key={fact.id}>
                <dt>{fact.englishLabel}</dt>
                <dd>{fact.display}</dd>
              </div>
            ))}
          </dl>
          <p className={styles.figuresNote}>
            {serviceFiguresDisclosure} <Link href="/company">View our company details</Link>.
          </p>
        </div>
      </section>
      <section id="our-story" className={styles.section} aria-labelledby="our-story-title">
        <div className={styles.container}>
          <div className={styles.storyIntroduction}>
            <p className={styles.eyebrow}>WHY AVIORA EXISTS</p>
            <h2 id="our-story-title">
              A country this rich deserves a journey that feels personal.
            </h2>
            <p className={styles.storyLead}>
              There is a difference between reaching a destination and having the time, context and
              confidence to experience it.
            </p>
          </div>
          <div className={styles.storyNarrative}>
            {brandStory.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section id="understood" className={`${styles.section} ${styles.understood}`}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="YOU WILL NOT FACE IT ALONE"
            title="China Can Feel Complex. Your Journey Does Not Have To."
            copy="Language, payment apps, transport and unfamiliar systems can raise practical questions. We help you prepare and connect the arrangements before arrival, with local support for the agreed services while you travel."
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
          <div id="traveler-guides" className={styles.needsGrid}>
            {travelerNeeds.map((item) =>
              item.href ? (
                <Link
                  href={item.href}
                  className={`${styles.need} ${styles.needLink}`}
                  key={item.title}
                >
                  <h3>
                    {item.title} <ArrowUpRight aria-hidden="true" />
                  </h3>
                  <p>{item.text}</p>
                  <span className={styles.needReadMore}>{item.readMore}</span>
                </Link>
              ) : (
                <article className={styles.need} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ),
            )}
          </div>
          <div className={styles.softCta}>
            <div>
              <p className={styles.softCtaLabel}>A USEFUL FIRST CONVERSATION</p>
              <p>Tell us who is traveling and what would make China feel right for you.</p>
            </div>
            <TrackedLink
              href="/start-planning?source=about-capability"
              trackingLabel="Share Your Priorities"
              trackingPlacement="about-capability"
            >
              Share Your Priorities <ArrowUpRight aria-hidden="true" />
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-label="The thinking behind your itinerary">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="THE THINKING BEHIND YOUR ITINERARY"
            title="Good journeys are made through thoughtful decisions."
            copy="A list of places is a starting point. The quality of a journey comes from how those places fit together, and how the days feel to the people traveling."
          />
          <div className={styles.craftLayout}>
            <figure className={styles.craftPhoto}>
              <OptimizedImage
                src={homeEditorialImages.tradeConsultation.src}
                alt={homeEditorialImages.tradeConsultation.alt}
                fill
                sizes="(max-width: 767px) 100vw, 38vw"
                frameClassName={styles.peopleImageFrame}
                className={styles.coverImage}
              />
            </figure>
            <div className={styles.decisions}>
              {travelDecisions.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <p className={styles.decisionQuestion}>{item.example}</p>
                </article>
              ))}
            </div>
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
                copy="Before you commit, you should know who is responsible, what your price includes and which conditions apply. We put those details in writing so you can make an informed decision."
              />
              <div className={styles.legalIdentity}>
                <ShieldCheck aria-hidden="true" />
                <div>
                  <p>Licensed China Operator</p>
                  <strong>{siteConfig.operator.englishReferenceName}</strong>
                  <span>
                    AVIORA China Travel (also known as AVIORA Travel) is a travel brand for
                    individual international travelers. It is operated by this Guangzhou-registered
                    company, licensed for inbound tourism business. AVIORA also has offices in
                    Beijing, Shanghai and Xi&apos;an.
                  </span>
                  <Link href="/company">
                    Company details, offices and registration record{" "}
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
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

      <ServiceCases />

      <section id="founder" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.founderFeature}>
            <figure className={styles.founderPortrait}>
              <Image
                src={founder.photo.src}
                alt={founder.photo.alt}
                width={founder.photo.width}
                height={founder.photo.height}
                sizes="(max-width: 767px) calc(100vw - 40px), 430px"
                className={styles.founderPortraitImage}
              />
              <figcaption>{founder.photo.caption}</figcaption>
            </figure>
            <div>
              <p className={styles.eyebrow}>THE PERSON BEHIND AVIORA</p>
              <h2>{founder.name}</h2>
              <p className={styles.sectionCopy}>
                {founder.jobTitle}, {founder.organization}
              </p>
              <Link className={styles.textLink} href={founder.path}>
                Read Guohui&apos;s letter <ArrowUpRight aria-hidden="true" />
              </Link>
              <blockquote>“{founder.pullQuote}”</blockquote>
              <p className={styles.sectionCopy}>
                In his own words, Guohui explains why he founded AVIORA: to make travel personal,
                give the practical details proper attention and help international visitors feel
                closer to China.
              </p>
            </div>
          </div>
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
              <figcaption>
                Our team discussing China travel with international travel professionals in
                Malaysia.
              </figcaption>
            </figure>
            <div className={styles.peopleCopy}>
              <SectionHeading
                eyebrow="THE PEOPLE RESPONSIBLE"
                title="A China team that understands your brief."
                copy="The people planning your trip work with the local arrangements that bring it to life. Your interests, preferred pace and practical needs inform the route, the guide requirements and the day-to-day coordination."
              />
              <p className={styles.peopleDetail}>
                Our work connects planning, route design, local operation and support while you
                travel. The written proposal explains the services included; before departure,
                review your arrival instructions and on-trip contact details with the team.
              </p>
              <Link className={styles.textLink} href="/company#responsibilities">
                How the responsibilities connect <ArrowUpRight aria-hidden="true" />
              </Link>
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

      <section className={styles.section} aria-label="Our approach to hospitality">
        <div className={styles.container}>
          <SectionHeading
            eyebrow="WHAT WE VALUE"
            title="Care is a way of working."
            copy="The warmth of a welcome matters. So do the decisions made long before you arrive. These principles guide how we discuss, design and coordinate your journey."
          />
          <div className={styles.valuesGrid}>
            {hospitalityPrinciples.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
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

      <section
        id="brand-questions"
        className={styles.section}
        aria-labelledby="brand-questions-title"
      >
        <div className={styles.container}>
          <div className={styles.questionsLayout}>
            <div>
              <p className={styles.eyebrow}>THE NAMES BEHIND YOUR BOOKING</p>
              <h2 id="brand-questions-title">Understand who you are booking with.</h2>
              <p className={styles.sectionCopy}>
                The travel brand, trade name and contracting company have different roles. Here is
                how they connect.
              </p>
            </div>
            <div className={styles.questions}>
              {aboutSearch.identityAnswers.map((item) => (
                <details id={item.id} key={item.id}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                  <p>
                    <Link href={item.href}>{item.linkLabel}</Link>
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="before-booking-guides"
        className={styles.section}
        aria-labelledby="before-booking-title"
      >
        <div className={styles.container}>
          <SectionHeading
            id="before-booking-title"
            eyebrow="READ BEFORE YOU COMMIT"
            title="Make your booking decision with the details in front of you."
            copy="These practical guides help you compare operators, understand the proposed services and check the arrangements before paying."
          />
          <div className={styles.verificationReading}>
            {aboutSearch.reading.map((item) => (
              <article key={item.href}>
                <h3>
                  <Link href={item.href}>
                    {item.title} <ArrowUpRight aria-hidden="true" />
                  </Link>
                </h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <p className={styles.sectionCopy}>
            <Link href="/editorial-policy">How we select sources and handle corrections</Link>.
            Government rules and supplier conditions remain the responsibility of the relevant
            authority or provider.
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="about-questions">
        <div className={styles.container}>
          <div className={styles.questionsLayout}>
            <div>
              <p className={styles.eyebrow}>BEFORE YOU DECIDE</p>
              <h2 id="about-questions">A few questions worth asking.</h2>
              <p className={styles.sectionCopy}>
                Take time to understand the people and arrangements behind your trip.
              </p>
              <Link className={styles.textLink} href="/terms">
                Read booking terms <ArrowUpRight aria-hidden="true" />
              </Link>
            </div>
            <div className={styles.questions}>
              {aboutQuestions.map((item, index) => (
                <details key={item.question} id={`about-answer-${index + 1}`}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="start" className={styles.enquiryAnchor}>
        <EnquirySection
          placement="about"
          title="Let’s begin with your idea of China."
          intro="Share your approximate dates, who is traveling and what you would love to experience. We normally reply personally within 24 hours to discuss the route and the details that matter to you."
        />
      </div>

      <SiteFooter
        columns={[
          {
            title: "About AVIORA",
            items: [
              { label: "How We Help", href: "#understood" },
              { label: "Who We Design For", href: "#designed-around-you" },
              { label: "The AVIORA Standard", href: "#the-standard" },
              { label: "Company & Licensing", href: "/company" },
              { label: "Our Process", href: "#how-it-works" },
              { label: "Service Stories", href: "#service-cases" },
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
  id,
  eyebrow,
  title,
  copy,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <header className={styles.sectionHeading}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      <span className={styles.breathingLine} aria-hidden="true" />
      <p className={styles.sectionCopy}>{copy}</p>
    </header>
  );
}
