import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { CtaButton } from "@/components/cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import {
  findJournalSummary,
  formatJournalTitle,
  getJournalDecision,
  journalDecisions,
} from "@/content/journal/presentation";
import { JournalAnalytics } from "@/features/journal/journal-analytics";
import { JournalGuideExplorer } from "@/features/journal/journal-guide-explorer";
import { JournalJourneyBridge } from "@/features/journal/journey-bridge";
import { getJourneyBridgeForArticle } from "@/lib/content/journey-journal-links";
import type { JournalArticle, JournalSummary } from "@/types/journal";
import styles from "./journal-hub.module.css";

type JournalHubTemplateProps = {
  featured: JournalArticle;
  articles: JournalSummary[];
};

const editorialSlugs = [
  "private-china-tour-proposal-checklist",
  "how-far-in-advance-book-private-china-tour",
  "how-many-days-in-china-7-10-14-day-itineraries",
];
const destinationSlugs = [
  "beijing-xian-itinerary-how-many-days",
  "how-many-days-in-chengdu-itinerary",
  "jiuzhaigou-or-zhangjiajie",
];
const practicalSlugs = [
  "private-china-tour-arrival-handoff-checklist",
  "china-240-hour-visa-free-transit-guide",
  "china-high-speed-train-foreigners",
  "china-mobile-payments-foreign-tourists",
  "best-apps-for-china-travel-2026",
  "china-sim-card-esim-internet-foreign-tourists",
  "bringing-prescription-medicine-to-china",
];

export function JournalHubTemplate({ featured, articles }: JournalHubTemplateProps) {
  const editorial = editorialSlugs
    .map((slug) => findJournalSummary(articles, slug))
    .filter(isDefined);
  const destinations = destinationSlugs
    .map((slug) => findJournalSummary(articles, slug))
    .filter(isDefined);
  const practical = practicalSlugs
    .map((slug) => findJournalSummary(articles, slug))
    .filter(isDefined);
  const opening = findJournalSummary(articles, "first-trip-to-china-planning-guide") ?? articles[0];
  const journeyBridge = getJourneyBridgeForArticle(featured);

  return (
    <main className={styles.page}>
      <JournalAnalytics />
      <SiteNavigation />

      <div className={styles.openingComposition}>
        {opening ? <JournalOpening article={opening} /> : null}
        <EditorialStandard />
      </div>

      <section className={styles.directory} aria-label="Journal decision directory">
        <div className={styles.container}>
          <JournalGuideExplorer articles={articles} />
        </div>
      </section>

      <section className={styles.section} aria-labelledby="editorial-selection-title">
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>Editor&apos;s Selection</p>
            <h2 id="editorial-selection-title">Decisions worth making before you book</h2>
            <p>Start with the choice that will shape your China journey first.</p>
          </div>
          {editorial.length ? <EditorialSelection articles={editorial} /> : null}
        </div>
      </section>

      <section
        className={`${styles.section} ${styles.groundSection}`}
        aria-labelledby="destination-perspective-title"
      >
        <div className={styles.container}>
          <div className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>Destination Perspective</p>
            <h2 id="destination-perspective-title" className={styles.destinationTitle}>
              Choose places by the journey they create
            </h2>
            <p>Choose places by contrast, route logic and the way you want to travel.</p>
          </div>
          {destinations.length ? <DestinationPerspective articles={destinations} /> : null}
          <div className={styles.intelligence} aria-labelledby="practical-intelligence-title">
            <div className={styles.intelligenceIntro}>
              <p className={styles.sectionLabel}>Practical Intelligence</p>
              <h2 id="practical-intelligence-title">What changes the trip on the ground</h2>
              <p>Clear guidance for arrival, movement and everyday confidence in China.</p>
            </div>
            <div className={styles.intelligenceIndex}>
              {practical.map((article) => (
                <ArticleIndexLink key={article.slug} article={article} placement="practical" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {journeyBridge ? (
        <div className={styles.secondaryJourneyBridge}>
          <JournalJourneyBridge bridge={journeyBridge} />
        </div>
      ) : null}

      <section
        id="complete-journal"
        className={`${styles.section} ${styles.archive}`}
        aria-labelledby="archive-title"
      >
        <div className={styles.container}>
          <div className={styles.archiveHeader}>
            <div>
              <h2 id="archive-title" className={styles.archiveTitle}>
                The complete AVIORA Journal
              </h2>
              <p>All {articles.length} guides, grouped by the decision they help you make.</p>
            </div>
          </div>
          <div className={styles.archiveGroups}>
            {journalDecisions.map((decision) => {
              const group = articles.filter(
                (article) => getJournalDecision(article) === decision.id,
              );
              return (
                <details key={decision.id} className={styles.archiveGroup}>
                  <summary>
                    <span>
                      <strong>{decision.label}</strong>
                      <small>{decision.description}</small>
                    </span>
                    <span>{group.length} guides</span>
                  </summary>
                  <div className={styles.archiveEntries}>
                    {group.map((article) => (
                      <Link
                        key={article.slug}
                        href={`/journal/${article.slug}`}
                        className={styles.archiveEntry}
                        data-journal-event="article_open"
                        data-article-slug={article.slug}
                        data-placement="complete-index"
                      >
                        <strong>{formatJournalTitle(article.title)}</strong>
                        <span>{article.readingTime}</span>
                      </Link>
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.invitation} aria-labelledby="journal-invitation-title">
        <div className={`${styles.container} ${styles.invitationInner}`}>
          <div>
            <h2 id="journal-invitation-title">Turn your research into a journey that works</h2>
            <p>
              Share your dates and priorities. Our China-based team will review the route and
              practical details with you.
            </p>
          </div>
          <CtaButton
            href="/start-planning?source=journal-hub"
            className={styles.invitationAction}
            data-journal-event="planning_start"
            data-placement="journal-final-invitation"
          >
            Plan My Private Journey
          </CtaButton>
        </div>
      </section>

      <SiteFooter
        columns={[
          {
            title: "Journal",
            items: [
              { label: "Complete Journal", href: "#complete-journal" },
              { label: "Destinations", href: "/destinations" },
              { label: "About AVIORA", href: "/about" },
            ],
          },
          {
            title: "Planning",
            items: [
              { label: "Private China Journeys", href: "/tours" },
              { label: "Plan My Trip", href: "/start-planning" },
              { label: "Email Us", href: "mailto:chinaprimedmc@gmail.com" },
            ],
          },
        ]}
        social={[
          { label: "Facebook", href: "https://www.facebook.com/p/Aviora-Travel-61593357154006/" },
          { label: "Instagram", href: "https://www.instagram.com/chinaprimedmc/" },
        ]}
      />
    </main>
  );
}

function JournalOpening({ article }: { article: JournalSummary }) {
  return (
    <header className={styles.opening}>
      <div className={`${styles.container} ${styles.openingGrid}`}>
        <div className={styles.openingCopy}>
          <p className={styles.brandLine}>China, Clearly</p>
          <h1>
            <span className={styles.desktopOpeningTitle}>The AVIORA Journal</span>
            <span className={styles.mobileOpeningTitle}>China travel answers</span>
          </h1>
          <p className={styles.openingDek}>
            <span className={styles.desktopOpeningDek}>
              China travel guidance for choosing a route, preparing well and knowing where local
              expertise changes the journey.
            </span>
            <span className={styles.mobileOpeningDek}>
              Choose what you are working out. We will show you the clearest place to start.
            </span>
          </p>
          <div className={styles.openingActions}>
            <CtaButton
              href={`/journal/${article.slug}`}
              className={styles.openingPrimary}
              data-journal-event="article_open"
              data-article-slug={article.slug}
              data-placement="journal-opening"
              variant="primary"
              size="sm"
              icon={<ArrowUpRight size={15} aria-hidden="true" />}
            >
              Start with your first China trip
            </CtaButton>
            <Link href="#complete-journal" className={styles.secondaryTextLink}>
              Browse all guides
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function EditorialStandard() {
  return (
    <section className={styles.editorialStandard} aria-label="AVIORA editorial standard">
      <div className={`${styles.container} ${styles.standardInner}`}>
        <p>Travel guidance written by the team that plans and operates journeys in China.</p>
        <dl>
          <div>
            <dt>Written in China</dt>
            <dd>By the AVIORA China Travel Team</dd>
          </div>
          <div>
            <dt>Operational basis</dt>
            <dd>Private journey planning and on-trip support</dd>
          </div>
          <div>
            <dt>Evidence</dt>
            <dd>Source records included where current rules matter</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function EditorialSelection({ articles }: { articles: JournalSummary[] }) {
  const [lead, ...supporting] = articles;
  if (!lead) return null;
  return (
    <div className={styles.selectionGrid}>
      <Link
        href={`/journal/${lead.slug}`}
        className={`${styles.leadStory} ${styles.textStory}`}
        data-journal-event="article_open"
        data-article-slug={lead.slug}
        data-placement="editorial-selection"
      >
        <div className={styles.storyCopy}>
          <p className={styles.meta}>{lead.readingTime}</p>
          <h3>{formatJournalTitle(lead.title)}</h3>
          <p>{lead.excerpt}</p>
          <span className={styles.quietLink}>Read the guide</span>
        </div>
      </Link>
      <div className={styles.supportList}>
        {supporting.map((article) => (
          <Link
            key={article.slug}
            href={`/journal/${article.slug}`}
            className={`${styles.supportStory} ${styles.textStory}`}
            data-journal-event="article_open"
            data-article-slug={article.slug}
            data-placement="editorial-selection"
          >
            <div>
              <p className={styles.meta}>{article.readingTime}</p>
              <h3>{formatJournalTitle(article.title)}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function DestinationPerspective({ articles }: { articles: JournalSummary[] }) {
  const [primary, ...supporting] = articles;
  if (!primary) return null;
  return (
    <div className={styles.destinationGrid}>
      <DestinationStory article={primary} primary />
      <div className={styles.destinationSecondary}>
        {supporting.map((article) => (
          <DestinationStory key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}

function DestinationStory({
  article,
  primary = false,
}: {
  article: JournalSummary;
  primary?: boolean;
}) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      className={`${styles.destinationStory} ${primary ? styles.destinationPrimary : ""} ${styles.textStory}`}
      data-journal-event="article_open"
      data-article-slug={article.slug}
      data-placement="destination-perspective"
    >
      <div className={styles.destinationCopy}>
        <p className={styles.meta}>{article.category}</p>
        <h3>{formatJournalTitle(article.title)}</h3>
        {primary ? <p>{article.excerpt}</p> : null}
      </div>
    </Link>
  );
}

function ArticleIndexLink({ article, placement }: { article: JournalSummary; placement: string }) {
  return (
    <Link
      href={`/journal/${article.slug}`}
      className={styles.indexLink}
      data-journal-event="article_open"
      data-article-slug={article.slug}
      data-placement={placement}
    >
      <span>
        <strong>{formatJournalTitle(article.title)}</strong>
        <small>Updated {formatJournalDate(article.updatedAt ?? article.publishedAt)}</small>
      </span>
      <span>{article.readingTime}</span>
    </Link>
  );
}

function formatJournalDate(value: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
    new Date(value),
  );
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}
