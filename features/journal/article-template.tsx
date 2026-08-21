import { ArrowUpRight, CalendarDays, ChevronDown, Clock3 } from "lucide-react";
import { Fragment } from "react";

import { CtaButton, TrackedLink } from "@/components/cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { LightboxGallery } from "@/components/gallery/lightbox-gallery";
import { ContentContainer } from "@/components/layout/content-container";
import { PageContainer } from "@/components/layout/page-container";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { homeNavItems } from "@/content/home/homepage";
import { journalCategories } from "@/content/journal";
import { getJournalSearchRole } from "@/content/journal/search-strategy";
import { siteConfig } from "@/config/site";
import { Section } from "@/design-system/primitives/section";
import { RecordViewed } from "@/features/discovery/record-viewed";
import { JournalJourneyBridge, JournalJourneyPrompt } from "@/features/journal/journey-bridge";
import { getJourneyBridgeForArticle } from "@/lib/content/journey-journal-links";
import type { ContentRelationships } from "@/lib/content/relationship-engine";
import type { JournalArticle, JournalContentBlock } from "@/types/journal";

type ArticleTemplateProps = {
  article: JournalArticle;
  relationships: ContentRelationships;
};

export function ArticleTemplate({ article, relationships }: ArticleTemplateProps) {
  const { leadAnswer, remainingContent } = splitLeadAnswer(article.content);
  const articleSections = groupArticleSections(remainingContent);
  const collapseArticleSections = isItineraryArticle(article);
  const planningLens = collapseArticleSections ? null : getArticlePlanningLens(article);
  const faqs = article.content.filter((block) => block.type === "faq");
  const journeyBridge = getJourneyBridgeForArticle(article);
  const journeyInsertionIndex = journeyBridge
    ? getJourneyInsertionIndex(articleSections)
    : articleSections.length;
  const primaryArticleSections = articleSections.slice(0, journeyInsertionIndex);
  const followupArticleSections = articleSections.slice(journeyInsertionIndex);
  const planningHref =
    article.conversion?.href ??
    `/start-planning?source=journal&content=${encodeURIComponent(article.slug)}`;
  const contextualPlanningHref = journeyBridge?.planningHref ?? planningHref;
  const advisorHref = getAdvisorHref(article);
  const actionLabel = getArticleActionLabel();
  const commercialCollection = getCommercialCollection(article.slug);

  return (
    <PageContainer tone="white" className="journal-page">
      <RecordViewed
        item={{
          id: `article:${article.slug}`,
          type: "article",
          title: article.title,
          href: `/journal/${article.slug}`,
        }}
      />
      <SiteNavigation
        items={homeNavItems}
        className="home-navigation-entrance journal-navigation"
        cta={{ label: "Plan My Trip", href: planningHref }}
        tone="light"
        showWhatsapp={false}
        variant="default"
      />

      <JournalArticleHero article={article} advisorHref={advisorHref} actionLabel={actionLabel} />

      <Section id="article" spacing="compact" className="bg-white">
        <ContentContainer size="xl">
          <article
            className="max-w-[72rem] min-w-0"
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
          >
            <ArticleTrust article={article} />
            {leadAnswer ? <ArticleLeadAnswer answer={leadAnswer} /> : null}
            {planningLens ? <ArticlePlanningLens lens={planningLens} /> : null}
            {commercialCollection ? (
              <aside
                className="mt-8 grid gap-4 border-y border-black/10 py-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-10"
                aria-label={commercialCollection.label}
              >
                <div>
                  <p className="text-[0.66rem] font-semibold text-neutral-500 uppercase">
                    Compare Private Land Journeys
                  </p>
                  <p className="mt-1 max-w-2xl text-[0.9rem] leading-6 text-neutral-700">
                    {commercialCollection.description}
                  </p>
                </div>
                <TrackedLink
                  href={commercialCollection.href}
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-neutral-950 md:justify-self-end"
                  trackingLabel={commercialCollection.label}
                  trackingPlacement="journal-commercial-collection"
                >
                  {commercialCollection.label}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </TrackedLink>
              </aside>
            ) : null}
            <div className="mt-8">
              {primaryArticleSections.map((section, index) => (
                <ArticleContentSection
                  key={section.heading?.id ?? `article-section-${index}`}
                  section={section}
                  index={index}
                  collapsible={collapseArticleSections}
                  showJourneyPromptAfterQuote={article.slug === "how-much-walking-china-tour"}
                />
              ))}
            </div>
          </article>
        </ContentContainer>
      </Section>

      {journeyBridge ? <JournalJourneyBridge bridge={journeyBridge} /> : null}

      {followupArticleSections.length ? (
        <Section spacing="compact" className="journal-breathing-divider--bottom bg-white">
          <ContentContainer size="xl">
            <div
              className="max-w-[72rem] min-w-0"
              style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            >
              {followupArticleSections.map((section, index) => (
                <ArticleContentSection
                  key={section.heading?.id ?? `article-followup-section-${index}`}
                  section={section}
                  index={journeyInsertionIndex + index}
                  collapsible={collapseArticleSections}
                  showJourneyPromptAfterQuote={article.slug === "how-much-walking-china-tour"}
                />
              ))}
            </div>
          </ContentContainer>
        </Section>
      ) : null}

      {article.gallery.length ? (
        <Section id="gallery" spacing="compact" className="journal-breathing-divider bg-white">
          <ContentContainer size="xl" className="grid gap-6">
            <JournalSectionHeading
              eyebrow="See The Places"
              title="A Closer Look At The Journey"
              description="Swipe through the landscapes and cities connected to this travel advice."
            />
            <LightboxGallery images={article.gallery} layout="strip" />
          </ContentContainer>
        </Section>
      ) : null}

      {relationships.articles.length ? (
        <Section
          id="related-articles"
          spacing="compact"
          className="journal-breathing-divider bg-white"
        >
          <ContentContainer size="xl" className="grid gap-6">
            <JournalSectionHeading
              eyebrow="Continue Planning"
              title="Read The Next Useful Guide"
              description="Only the closest follow-up questions, selected to move your planning forward."
            />
            <div className="border-y border-black/10">
              {relationships.articles.slice(0, 3).map((related, index) => (
                <a
                  key={related.title}
                  href={related.href}
                  className="group grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-black/8 py-4 last:border-b-0 md:grid-cols-[2.25rem_minmax(0,1fr)_auto] md:gap-5 md:py-5"
                >
                  <span className="text-xs font-semibold text-neutral-400">0{index + 1}</span>
                  <span className="min-w-0">
                    <span className="block text-[0.66rem] font-semibold tracking-[0.1em] text-neutral-500 uppercase">
                      {related.category}
                    </span>
                    <span className="mt-1 block text-[0.95rem] leading-5 font-semibold text-neutral-900 md:text-base">
                      {related.title}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="text-neutral-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </ContentContainer>
        </Section>
      ) : null}

      {faqs.length ? (
        <Section id="article-faq" spacing="compact" className="journal-breathing-divider bg-white">
          <ContentContainer size="lg" className="grid gap-6">
            <JournalSectionHeading
              eyebrow="FAQ"
              title="Questions Travelers Ask"
              description="Concise answers to the decisions most likely to affect this part of the trip."
            />
            <div className="border-y border-black/10">
              {faqs.map((faq) =>
                faq.type === "faq" ? (
                  <details
                    key={faq.question}
                    className="group border-b border-black/8 last:border-b-0"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-base font-semibold text-neutral-950 marker:content-none md:text-[1.05rem]">
                      <span>{faq.question}</span>
                      <span
                        className="text-xl font-normal text-neutral-500 transition-transform group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <p className="max-w-3xl pb-5 text-[0.95rem] leading-7 text-neutral-700">
                      {renderInlineContent(faq.answer)}
                    </p>
                  </details>
                ) : null,
              )}
            </div>
          </ContentContainer>
        </Section>
      ) : null}

      {article.citations?.length ? (
        <Section
          id="article-sources"
          spacing="compact"
          className="journal-breathing-divider bg-white"
        >
          <ContentContainer size="lg" className="grid gap-6">
            <JournalSectionHeading
              eyebrow="Sources And Verification"
              title="How This Guide Was Checked"
              description="Official guidance and operational references are reviewed before publication. Time-sensitive details must still be reconfirmed for your travel dates."
            />
            <ol className="grid gap-3 border-y border-black/10 py-5">
              {article.citations.map((citation, index) => (
                <li
                  key={citation.url}
                  className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-3 text-sm leading-6 text-neutral-700"
                >
                  <span className="font-semibold text-neutral-400">{index + 1}</span>
                  <span>
                    <a
                      href={citation.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-neutral-950 underline decoration-black/25 underline-offset-4 hover:decoration-black"
                    >
                      {citation.name}
                    </a>{" "}
                    · {citation.publisher}
                    {citation.publishedAt ? ` · ${formatDate(citation.publishedAt)}` : ""}
                  </span>
                </li>
              ))}
            </ol>
          </ContentContainer>
        </Section>
      ) : null}

      <Section id="inquiry-cta" spacing="compact" className="journal-breathing-divider bg-white">
        <ContentContainer size="lg">
          <div className="grid gap-5 border-y border-black/10 py-7 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-12">
            <div className="max-w-2xl">
              <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-neutral-500 uppercase">
                Ask The AVIORA China Travel Team
              </p>
              <h2 className="mt-2 font-serif text-[1.65rem] leading-[1.1] font-medium text-neutral-950 md:text-[2rem]">
                Need A Date-Specific Answer?
              </h2>
              <p className="mt-2 text-sm leading-6 text-neutral-700 md:text-[0.95rem]">
                Send your dates, traveler count and priorities. Our China team will tell you what
                applies to your trip and what needs to be reconfirmed.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 md:justify-end">
              <CtaButton
                href={advisorHref}
                target="_blank"
                rel="noreferrer"
                size="sm"
                icon={<ArrowUpRight size={16} aria-hidden="true" />}
                data-cta-placement="journal-final-advisor"
              >
                {actionLabel}
              </CtaButton>
              <TrackedLink
                href={contextualPlanningHref}
                className="border-b border-black/25 pb-1 text-sm font-semibold text-neutral-700 transition-colors hover:border-black hover:text-black"
                trackingLabel="Plan My Trip"
                trackingPlacement="journal-final-planning"
              >
                Plan My Trip
              </TrackedLink>
            </div>
          </div>
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          {
            title: "Journal",
            items: [
              { label: "All Guides", href: "/journal" },
              ...(journeyBridge ? [{ label: "Related Journey", href: "#related-tours" }] : []),
              ...(faqs.length ? [{ label: "FAQ", href: "#article-faq" }] : []),
            ],
          },
          {
            title: "Categories",
            items: journalCategories.slice(0, 4).map((category) => ({
              label: category,
              href: "/journal",
            })),
          },
          {
            title: "Planning",
            items: [
              { label: "Private China Tours", href: "/tours" },
              { label: "Destinations", href: "/destinations" },
              { label: "Email Us", href: "mailto:chinaprimedmc@gmail.com" },
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

function JournalArticleHero({
  article,
  advisorHref,
  actionLabel,
}: {
  article: JournalArticle;
  advisorHref: string;
  actionLabel: string;
}) {
  const preserveEditorialTitleCase = article.slug === "china-itinerary-older-travelers-10-days";

  return (
    <header className="journal-breathing-divider--bottom bg-white pt-5 pb-7 md:pt-7 md:pb-10">
      <ContentContainer size="xl">
        <div className="max-w-none">
          <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-neutral-500 uppercase">
            {article.hero.eyebrow ?? article.category}
          </p>
          <h1
            className="mt-3 max-w-[74rem] font-serif text-[2rem] leading-[1.03] font-medium tracking-normal text-balance text-neutral-950 sm:text-[2.5rem] md:text-[2.75rem]"
            style={preserveEditorialTitleCase ? { textTransform: "none" } : undefined}
          >
            {article.title}
          </h1>
          <p className="mt-3 max-w-[72rem] text-[0.92rem] leading-6 text-neutral-800 md:text-[0.98rem] md:leading-7">
            {article.dek}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-black/10 py-3 text-xs font-medium text-neutral-700">
            <span>{article.category}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 size={14} aria-hidden="true" />
              {article.readingTime}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} aria-hidden="true" />
              {article.updatedAt ? "Updated" : "Published"}{" "}
              {formatDate(article.updatedAt ?? article.publishedAt)}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
            <a href="#article" className="border-b border-black pb-1 text-neutral-950">
              Read The Guide
            </a>
            <TrackedLink
              href={advisorHref}
              target="_blank"
              rel="noreferrer"
              className="border-b border-black/20 pb-1 text-neutral-600 transition-colors hover:border-black hover:text-neutral-950"
              trackingLabel={actionLabel}
              trackingPlacement="journal-hero-advisor"
            >
              {actionLabel}
            </TrackedLink>
          </div>
        </div>
      </ContentContainer>
    </header>
  );
}

type LeadAnswer = {
  title: string;
  paragraphs: string[];
};

function splitLeadAnswer(content: JournalContentBlock[]) {
  if (!content.length) return { leadAnswer: null, remainingContent: content };

  if (content[0]?.type === "paragraph") {
    let endIndex = 0;
    while (content[endIndex]?.type === "paragraph") endIndex += 1;
    const paragraphs = content
      .slice(0, endIndex)
      .map((block) => (block.type === "paragraph" ? block.body : ""));

    return {
      leadAnswer: paragraphs.length ? { title: "The Answer, Briefly", paragraphs } : null,
      remainingContent: content.slice(endIndex),
    };
  }

  if (content[0]?.type === "heading") {
    let endIndex = 1;
    while (content[endIndex]?.type === "paragraph") endIndex += 1;
    const paragraphs = content
      .slice(1, endIndex)
      .map((block) => (block.type === "paragraph" ? block.body : ""));

    return {
      leadAnswer: paragraphs.length ? { title: "The Answer, Briefly", paragraphs } : null,
      remainingContent: paragraphs.length ? content.slice(endIndex) : content,
    };
  }

  return { leadAnswer: null, remainingContent: content };
}

function ArticleLeadAnswer({ answer }: { answer: LeadAnswer }) {
  return (
    <section
      className="mt-6 border-l-2 border-neutral-900 py-1 pl-4 md:pl-5"
      aria-labelledby="article-lead-answer"
    >
      <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-neutral-500 uppercase">
        Start Here
      </p>
      <h2
        id="article-lead-answer"
        className="mt-2 font-serif text-[1.45rem] leading-[1.15] font-medium tracking-normal text-neutral-950 md:text-[1.7rem]"
      >
        {answer.title}
      </h2>
      <div className="mt-3 grid gap-2.5">
        {answer.paragraphs.map((paragraph, index) => (
          <p
            key={`${answer.title}-${index}`}
            className="text-[0.96rem] leading-[1.68] text-neutral-900 md:text-base"
          >
            {renderInlineContent(paragraph, `lead-${index}`)}
          </p>
        ))}
      </div>
    </section>
  );
}

function ArticleTrust({ article }: { article: JournalArticle }) {
  return (
    <div className="grid gap-3 border-b border-black/10 pb-5 sm:grid-cols-[minmax(0,auto)_minmax(0,1fr)] sm:items-start sm:gap-x-6">
      <div>
        <p className="text-sm font-semibold text-neutral-950">{article.author.name}</p>
        <p className="mt-0.5 text-xs text-neutral-600">Licensed China operator since 2018</p>
      </div>
      <div className="sm:border-l sm:border-black/10 sm:pl-6">
        <div className="grid grid-cols-[auto_auto_auto] items-center justify-between gap-2 text-[0.64rem] font-semibold text-neutral-700 sm:flex sm:flex-wrap sm:justify-start sm:gap-x-4 sm:text-[0.67rem]">
          <span className="whitespace-nowrap">Licensed In China</span>
          <span className="whitespace-nowrap">
            Updated {formatDate(article.updatedAt ?? article.publishedAt)}
          </span>
          <a
            href="/about"
            className="whitespace-nowrap underline decoration-black/25 underline-offset-4"
          >
            Meet The Team
          </a>
        </div>
        <p className="mt-2 max-w-2xl text-xs leading-5 text-neutral-700">
          Written from real private-tour operations in China by{" "}
          {siteConfig.operator.englishReferenceName}, established in 2018. Before payment,
          date-sensitive rules, ticket status, named services and binding terms are confirmed in
          writing. Our travel-trade work has been independently covered by{" "}
          <a
            href="https://www.ttgasia.com/2026/07/30/matta-connect-gains-traction-as-b2b-platform/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-neutral-950 underline decoration-black/25 underline-offset-4"
          >
            TTG Asia
          </a>
          .
        </p>
      </div>
    </div>
  );
}

type ArticlePlanningLensData = {
  title: string;
  points: [string, string, string];
};

function ArticlePlanningLens({ lens }: { lens: ArticlePlanningLensData }) {
  return (
    <section className="mt-7 border-y border-black/10 py-5" aria-label={lens.title}>
      <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-neutral-500 uppercase">
        AVIORA Planning Lens
      </p>
      <h2 className="mt-2 text-base font-semibold text-neutral-950 md:text-[1.05rem]">
        {lens.title}
      </h2>
      <div className="mt-4 grid gap-3 md:grid-cols-3 md:gap-5">
        {lens.points.map((point, index) => (
          <div
            key={point}
            className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-2 text-sm leading-6 text-neutral-800"
          >
            <span className="pt-0.5 text-xs font-semibold text-neutral-400">0{index + 1}</span>
            <p>{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

type ArticleContentSectionData = {
  heading?: Extract<JournalContentBlock, { type: "heading" }>;
  blocks: JournalContentBlock[];
};

function groupArticleSections(content: JournalContentBlock[]): ArticleContentSectionData[] {
  const sections: ArticleContentSectionData[] = [];
  let current: ArticleContentSectionData = { blocks: [] };

  for (const block of content) {
    if (block.type === "heading" && block.level !== 3) {
      if (current.heading || current.blocks.length) sections.push(current);
      current = { heading: block, blocks: [] };
      continue;
    }
    current.blocks.push(block);
  }

  if (current.heading || current.blocks.length) sections.push(current);
  return sections;
}

function getJourneyInsertionIndex(sections: ArticleContentSectionData[]) {
  const semanticTransition = sections.findIndex((section) =>
    /how (?:the )?route connects to (?:the )?product|how this becomes a journey|from advice to journey|what a trustworthy proposal should confirm|what you receive when AVIORA reviews the route/i.test(
      section.heading?.title ?? "",
    ),
  );

  if (semanticTransition >= 0) return semanticTransition;
  if (sections.length <= 3) return sections.length;
  return 2;
}

function ArticleContentSection({
  section,
  index,
  collapsible = false,
  showJourneyPromptAfterQuote = false,
}: {
  section: ArticleContentSectionData;
  index: number;
  collapsible?: boolean;
  showJourneyPromptAfterQuote?: boolean;
}) {
  if (collapsible && section.heading) {
    return (
      <CollapsibleArticleSection heading={section.heading} blocks={section.blocks} index={index} />
    );
  }

  return (
    <section
      className="journal-breathing-divider grid gap-4 py-7 first:pt-0 first:before:hidden md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-5 md:py-8"
      aria-labelledby={section.heading?.id}
    >
      <span className="hidden pt-1 text-xs font-semibold text-neutral-400 md:block">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0">
        {section.heading ? (
          <div className="flex items-start gap-3">
            <span className="pt-1 text-xs font-semibold text-neutral-400 md:hidden">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h2
              id={section.heading.id}
              className="scroll-mt-28 font-serif text-[1.55rem] leading-[1.14] font-medium text-neutral-950 md:text-[1.8rem]"
              style={preserveHeadingCase(section.heading.title)}
            >
              {section.heading.title}
            </h2>
          </div>
        ) : null}
        <div className={cnList("grid gap-4", section.heading && "mt-4")}>
          {section.blocks.map((block, blockIndex) => (
            <Fragment key={`${block.type}-${blockIndex}`}>
              <ArticleBlock block={block} />
              {showJourneyPromptAfterQuote && block.type === "quote" ? (
                <JournalJourneyPrompt />
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function CollapsibleArticleSection({
  heading,
  blocks,
  index,
}: {
  heading: Extract<JournalContentBlock, { type: "heading" }>;
  blocks: JournalContentBlock[];
  index: number;
}) {
  return (
    <section className="journal-breathing-divider first:before:hidden" aria-labelledby={heading.id}>
      <details className="journal-article-details group">
        <summary className="grid cursor-pointer list-none grid-cols-[2rem_minmax(0,1fr)_1.5rem] items-center gap-2.5 py-5 transition-colors marker:content-none hover:bg-neutral-50/70 focus:outline-none focus-visible:bg-neutral-50/90 md:grid-cols-[2.5rem_minmax(0,1fr)_1.75rem] md:gap-5 md:py-6 [&::-webkit-details-marker]:hidden">
          <span className="text-xs font-semibold text-neutral-400">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h2
            id={heading.id}
            className="scroll-mt-28 font-serif text-[1.35rem] leading-[1.15] font-medium text-neutral-950 md:text-[1.65rem]"
            style={preserveHeadingCase(heading.title)}
          >
            {heading.title}
          </h2>
          <ChevronDown
            size={19}
            strokeWidth={1.7}
            className="justify-self-end text-neutral-600 transition-transform duration-300 group-open:rotate-180"
            aria-hidden="true"
          />
        </summary>
        <div className="pt-2 pb-7 pl-[2.65rem] md:pt-3 md:pb-8 md:pl-[3.75rem]">
          <div className="grid gap-4">
            {blocks.map((block, blockIndex) => (
              <ArticleBlock key={`${block.type}-${blockIndex}`} block={block} />
            ))}
          </div>
        </div>
      </details>
    </section>
  );
}

function preserveHeadingCase(title: string) {
  return title === "A Fuller Season, Not a Smaller One"
    ? { textTransform: "none" as const }
    : undefined;
}

function isItineraryArticle(article: JournalArticle) {
  return /(?:^|-)itinerary(?:-|$)/i.test(article.slug);
}

function ArticleBlock({ block }: { block: JournalContentBlock }) {
  switch (block.type) {
    case "heading":
      if (block.level === 3) {
        return (
          <h3
            id={block.id}
            className="scroll-mt-28 pt-1 text-[1.3rem] leading-[1.25] font-semibold text-neutral-950 md:text-[1.5rem]"
          >
            {block.title}
          </h3>
        );
      }
      return (
        <h2
          id={block.id}
          className="scroll-mt-28 pt-2 font-serif text-[1.75rem] leading-[1.12] font-medium tracking-normal text-neutral-950 md:text-[2rem]"
        >
          {block.title}
        </h2>
      );
    case "paragraph":
      return (
        <p className="text-[0.96rem] leading-[1.68] text-neutral-900 md:text-base md:leading-[1.72]">
          {renderInlineContent(block.body)}
        </p>
      );
    case "list": {
      const List = block.style === "ordered" ? "ol" : "ul";
      return (
        <List
          className={cnList(
            block.style === "ordered" ? "list-decimal" : "list-disc",
            "grid gap-2 pl-5 text-[0.96rem] leading-[1.65] text-neutral-900 marker:font-semibold marker:text-neutral-500 md:text-base",
          )}
        >
          {block.items.map((item, index) => (
            <li key={`${item}-${index}`} className="pl-1.5">
              {renderInlineContent(item, `list-${index}`)}
            </li>
          ))}
        </List>
      );
    }
    case "table":
      return (
        <div className="overflow-x-auto border-y border-black/10 py-2">
          <table className="w-full min-w-[34rem] border-collapse text-left text-sm leading-6">
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th
                    key={header}
                    className="border-b border-black/12 px-3 py-3 font-semibold text-neutral-950"
                  >
                    {renderInlineContent(header)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`} className="border-b border-black/8 last:border-b-0">
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${cell}-${cellIndex}`}
                      className="px-3 py-3 align-top text-neutral-700"
                    >
                      {renderInlineContent(cell, `table-${rowIndex}-${cellIndex}`)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "callout":
      return (
        <aside
          className={cnList(
            "rounded-lg border px-5 py-4",
            block.tone === "warning"
              ? "border-red-200 bg-red-50/60"
              : "border-emerald-200 bg-emerald-50/45",
          )}
        >
          {block.title ? (
            <p className="text-sm font-semibold text-neutral-950">{block.title}</p>
          ) : null}
          <p className="text-sm leading-6 text-neutral-700">{renderInlineContent(block.body)}</p>
        </aside>
      );
    case "image":
      const showFullFrame = block.image.fit === "contain";
      const isPortrait =
        Boolean(block.image.width) &&
        Boolean(block.image.height) &&
        Number(block.image.height) > Number(block.image.width);
      return (
        <figure className="min-w-0">
          <OptimizedImage
            src={block.image.src}
            alt={block.image.alt}
            width={block.image.width ?? 1200}
            height={block.image.height ?? 800}
            sizes="(min-width:1024px) 688px, 100vw"
            objectPosition={block.image.objectPosition}
            frameClassName={
              showFullFrame
                ? cnList("w-full rounded-lg bg-neutral-100", isPortrait && "mx-auto max-w-[34rem]")
                : "aspect-[16/10] w-full rounded-lg bg-neutral-100 md:aspect-[16/9] md:max-h-[26rem]"
            }
            className={
              showFullFrame ? "h-auto w-full object-contain" : "h-full w-full object-cover"
            }
          />
          {block.caption ? (
            <figcaption className="mt-2 px-2 text-center text-xs leading-5 text-neutral-500">
              {block.caption}
            </figcaption>
          ) : null}
        </figure>
      );
    case "quote":
      return (
        <blockquote className="border-l-2 border-neutral-900 py-1 pl-5">
          <p className="font-serif text-[1.35rem] leading-[1.35] font-medium text-neutral-950 md:text-[1.55rem]">
            {block.quote}
          </p>
          {block.attribution ? (
            <cite className="mt-3 block text-xs text-neutral-500 not-italic">
              {block.attribution}
            </cite>
          ) : null}
        </blockquote>
      );
    case "cta":
      return (
        <aside className="rounded-lg border border-black/10 bg-white p-5 md:p-6">
          {block.eyebrow ? (
            <p className="text-[0.68rem] font-semibold tracking-[0.12em] text-neutral-500 uppercase">
              {block.eyebrow}
            </p>
          ) : null}
          <h3 className="mt-2 font-serif text-[1.45rem] leading-[1.15] font-medium text-neutral-950">
            {block.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-neutral-600">{block.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <CtaButton href={block.primary.href} size="sm">
              {block.primary.label}
            </CtaButton>
            {block.secondary ? (
              <a
                href={block.secondary.href}
                className="border-b border-black/25 pb-1 text-sm font-semibold text-neutral-700"
              >
                {block.secondary.label}
              </a>
            ) : null}
          </div>
        </aside>
      );
    case "faq":
      return null;
    default:
      return null;
  }
}

function JournalSectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-10">
      <div>
        <p className="text-[0.68rem] font-semibold tracking-[0.14em] text-neutral-500 uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-2 font-serif text-[1.8rem] leading-[1.08] font-medium text-neutral-950 md:text-[2.2rem]">
          {title}
        </h2>
      </div>
      <p className="max-w-2xl text-sm leading-6 text-neutral-600 md:justify-self-end md:text-[0.95rem]">
        {description}
      </p>
    </div>
  );
}

function getArticlePlanningLens(article: JournalArticle): ArticlePlanningLensData | null {
  const role = getJournalSearchRole(article.slug);
  if (!role) return null;

  const lenses: Record<string, ArticlePlanningLensData> = {
    "First China trip planning": {
      title: "Build The Route Around Usable Days, Not A City Count",
      points: [
        "Count arrival, departure and intercity transfer days honestly before adding destinations.",
        "Match the route to season, walking comfort and the experiences your travelers value most.",
        "Confirm passport-linked tickets and transport before treating the published route as final.",
      ],
    },
    "Private tour decision": {
      title: "Judge The Operator And The Written Proposal Together",
      points: [
        "Verify the legal operator, who delivers each city and who supports you while you are in China.",
        "Compare named hotels, room assumptions, guide hours, vehicles, tickets and exclusions line by line.",
        "Read the contract, payment schedule, cancellation and refund terms before sending money.",
      ],
    },
    "China arrival essentials": {
      title: "Separate Official Rules From Practical Trip Support",
      points: [
        "Recheck date-sensitive government, airline, railway and attraction rules close to departure.",
        "Keep passport details consistent across bookings and carry the documents needed for verification.",
        "Build a backup for payments, connectivity and disrupted transport instead of relying on one app.",
      ],
    },
    "Beijing and Xi'an planning": {
      title: "Protect The Difficult Days Before Filling The Itinerary",
      points: [
        "Plan around passport-linked attraction capacity, museum timing and realistic hotel-to-hotel travel.",
        "Choose Great Wall and Terracotta Warriors days by walking comfort, not only by landmark names.",
        "Use guide and station support where interpretation, luggage and tight connections create real risk.",
      ],
    },
    "Chengdu and panda planning": {
      title: "Design Chengdu Around Timing, Energy And The Wider Route",
      points: [
        "Visit pandas early, then leave enough energy for Chengdu's food, parks and everyday culture.",
        "Treat Leshan and mountain extensions as full logistics decisions rather than simple add-ons.",
        "Adjust vehicles, rooms and meal timing for children, older travelers and dietary requirements.",
      ],
    },
    "Jiuzhaigou and Zhangjiajie": {
      title: "Choose The Landscape Together With Its Physical Demands",
      points: [
        "Compare altitude, stairs, shuttle queues, cable cars and weather exposure before choosing the route.",
        "Protect enough nights for changing conditions instead of relying on one compressed scenic day.",
        "Confirm hotel location and park access because a poor base can add hours of avoidable transfer time.",
      ],
    },
    "Travel by life stage": {
      title: "Design For The People Traveling, Not An Audience Label",
      points: [
        "Share ages, mobility, room configuration, food needs and preferred daily rhythm before quoting.",
        "Balance major sights with recovery time, flexible meals and transport that fits the whole party.",
        "Confirm local support and contingency plans for the moments when the published itinerary changes.",
      ],
    },
    "Easier-paced China travel": {
      title: "Place The Effort Before Choosing What Else Fits",
      points: [
        "Separate distance, stairs, standing, weather exposure and station movement instead of relying on a daily step target.",
        "Protect recovery after the Great Wall, Forbidden City and Terracotta Army before adding optional sightseeing.",
        "Confirm which assistance is arranged, which is only requested and what the historic site still requires.",
      ],
    },
    "High-intent first China trip decisions": {
      title: "Use Evidence To Make The Decision Before You Buy",
      points: [
        "Compare nights, complete transfers and published price assumptions instead of brochure day counts.",
        "Choose the page type that matches the decision: guide for research, journey page for price and service scope.",
        "Ask what is confirmed, what remains a request and who in China owns the response when an arranged service changes.",
      ],
    },
  };

  return lenses[role.pillar] ?? null;
}

function getArticleActionLabel() {
  return "Message Our China Team";
}

function getCommercialCollection(slug: string) {
  if (slug !== "china-tours-from-usa") return null;

  return {
    href: "/china-tours-from-usa",
    label: "View China Tours From The USA",
    description:
      "See three published private routes, usable-night comparisons and land-price assumptions before matching the journey to your international flights.",
  };
}

function getAdvisorHref(article: JournalArticle) {
  const articlePrompts: Record<string, string[]> = {
    "first-trip-to-china-planning-guide": [
      "Proposed arrival and departure flights:",
      "Cities we are considering:",
      "Hotels or flights already booked:",
      "What matters most to us:",
    ],
    "how-much-walking-china-tour": [
      "Comfortable continuous walking time:",
      "Stairs or standing concerns:",
      "Preferred recovery pattern:",
    ],
    "how-many-days-beijing-xian-shanghai": [
      "Length we are considering (8, 10 or 12 days):",
      "International arrival and departure cities:",
      "Preferred daily rhythm:",
    ],
    "best-places-to-visit-china-first-time": [
      "Experiences that matter most:",
      "Cities already under consideration:",
      "Arrival and departure gateways:",
    ],
    "how-much-does-a-trip-to-china-cost": [
      "Comfortable land budget per person:",
      "Hotel and room expectations:",
      "Cities and private support required:",
    ],
    "private-china-tour-vs-self-guided": [
      "What we enjoy arranging ourselves:",
      "Where we want local support:",
      "Hotels or transport already booked:",
    ],
    "china-tours-from-usa": [
      "US departure airport:",
      "International flights being considered:",
      "Usable nights wanted in China:",
    ],
    "luxury-china-tour-planning-guide": [
      "Preferred hotels, rooms or suites:",
      "Experiences that justify the journey:",
      "Where privacy or specialist access matters:",
    ],
    "beijing-or-shanghai-first-time": [
      "International flight options:",
      "History, food, design or shopping priorities:",
      "Other cities being considered:",
    ],
    "two-week-china-itinerary-first-time": [
      "Preferred four-city or slower three-city version:",
      "Pandas, food, landscape or extra time priorities:",
      "Arrival and departure gateways:",
    ],
    "china-tours-for-seniors": [
      "Comfortable continuous walking and standing time:",
      "Room, meal or transfer requirements:",
      "Tour or quotation being compared:",
    ],
    "china-trip-with-older-parents": [
      "What each family member values:",
      "Walking, room or meal considerations:",
      "What the adult children do not want to manage:",
    ],
    "china-tours-seniors-limited-mobility": [
      "Comfortable movement and standing pattern:",
      "Steps, equipment or bathroom requirements:",
      "Essential experiences we should test:",
    ],
  };
  const message = [
    "Hello AVIORA, I would like advice about this guide:",
    article.title,
    "Travel dates:",
    "Number of travelers:",
    ...(articlePrompts[article.slug] ?? ["What matters most to us:"]),
  ].join("\n");
  return `https://wa.me/447985052302?text=${encodeURIComponent(message)}`;
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}

function cnList(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function renderInlineContent(value: string, keyPrefix = "inline") {
  const tokens = value.split(/(\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+|\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return tokens.map((token, index) => {
    const markdownLink = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    const href = markdownLink?.[2] ?? (token.startsWith("http") ? token : null);

    if (href) {
      return (
        <TrackedLink
          key={`${keyPrefix}-${href}-${index}`}
          href={href}
          className="font-medium text-neutral-950 underline decoration-black/25 underline-offset-4 hover:decoration-black"
          trackingLabel={markdownLink?.[1] ?? token}
          trackingPlacement="journal-inline-link"
          {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {markdownLink ? renderInlineContent(markdownLink[1], `${keyPrefix}-${index}`) : token}
        </TrackedLink>
      );
    }

    const bold = token.match(/^\*\*(.+)\*\*$/);
    if (bold) return <strong key={`${keyPrefix}-bold-${index}`}>{bold[1]}</strong>;

    const italic = token.match(/^\*(.+)\*$/);
    if (italic) return <em key={`${keyPrefix}-italic-${index}`}>{italic[1]}</em>;

    return token;
  });
}
