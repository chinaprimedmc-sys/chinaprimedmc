import { ArrowUpRight } from "lucide-react";
import { Fragment } from "react";

import { CtaButton, TrackedLink } from "@/components/cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { LightboxGallery } from "@/components/gallery/lightbox-gallery";
import { OptimizedImage } from "@/components/media/optimized-image";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { journalCategories } from "@/content/journal";
import { getJournalSearchRole } from "@/content/journal/search-strategy";
import { formatJournalTitle } from "@/content/journal/presentation";
import { RecordViewed } from "@/features/discovery/record-viewed";
import { JournalAnalytics } from "@/features/journal/journal-analytics";
import { JournalJourneyBridge, JournalJourneyPrompt } from "@/features/journal/journey-bridge";
import { getJourneyBridgeForArticle } from "@/lib/content/journey-journal-links";
import type { ContentRelationships } from "@/lib/content/relationship-engine";
import type { JournalArticle, JournalContentBlock } from "@/types/journal";
import styles from "./article-template.module.css";

type ArticleTemplateProps = {
  article: JournalArticle;
  relationships: ContentRelationships;
};

type LeadAnswer = {
  title: string;
  paragraphs: string[];
};

type ArticleSection = {
  heading?: Extract<JournalContentBlock, { type: "heading" }>;
  blocks: JournalContentBlock[];
};

export function ArticleTemplate({ article, relationships }: ArticleTemplateProps) {
  const { leadAnswer, remainingContent } = splitLeadAnswer(article.content);
  const sections = groupArticleSections(remainingContent);
  const faqs = article.content.filter((block) => block.type === "faq");
  const journeyBridge = getJourneyBridgeForArticle(article);
  const planningHref =
    article.conversion?.href ??
    `/start-planning?source=journal&content=${encodeURIComponent(article.slug)}`;
  const contextualPlanningHref = journeyBridge?.planningHref ?? planningHref;
  const commercialCollection = getCommercialCollection(article.slug);
  const decisionMargin = getDecisionMargin(article);

  return (
    <main className={styles.page}>
      <RecordViewed
        item={{
          id: `article:${article.slug}`,
          type: "article",
          title: article.title,
          href: `/journal/${article.slug}`,
        }}
      />
      <JournalAnalytics />
      <SiteNavigation />

      <ArticleHero article={article} />
      <EditorialRecord article={article} />

      <section id="article" className={styles.reading}>
        <div className={`${styles.container} ${styles.readingGrid}`}>
          {leadAnswer ? <AnswerBrief answer={leadAnswer} /> : null}
          <ArticleContents sections={sections} />
          {commercialCollection ? (
            <aside className={styles.commercialCollection} aria-label={commercialCollection.label}>
              <p>{commercialCollection.description}</p>
              <TrackedLink
                href={commercialCollection.href}
                className={styles.textLink}
                trackingLabel={commercialCollection.label}
                trackingPlacement="journal-commercial-collection"
              >
                {commercialCollection.label} <ArrowUpRight size={15} aria-hidden="true" />
              </TrackedLink>
            </aside>
          ) : null}
          {sections.map((section, index) => (
            <div
              key={section.heading?.id ?? `article-section-${index}`}
              className={styles.articleRow}
            >
              <ArticleContentSection
                section={section}
                showJourneyPromptAfterQuote={article.slug === "how-much-walking-china-tour"}
              />
              {index === Math.min(1, sections.length - 1) ? (
                <DecisionMargin margin={decisionMargin} />
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {journeyBridge ? <JournalJourneyBridge bridge={journeyBridge} /> : null}

      {article.gallery.length ? (
        <section className={styles.supportSection} aria-labelledby="article-gallery-title">
          <div className={styles.container}>
            <SupportHeader
              label="Along The Route"
              title="Places Connected To This Guide"
              id="article-gallery-title"
            />
            <div className="mt-10">
              <LightboxGallery images={article.gallery} layout="strip" />
            </div>
          </div>
        </section>
      ) : null}

      {relationships.articles.length ? (
        <section className={styles.supportSection} aria-labelledby="related-guides-title">
          <div className={styles.container}>
            <SupportHeader
              label="Related Guides"
              title="Continue With The Next Decision"
              id="related-guides-title"
            />
            <div className={styles.relatedList}>
              {relationships.articles.slice(0, 3).map((related) => (
                <a
                  key={related.href}
                  href={related.href}
                  className={styles.relatedLink}
                  data-journal-event="article_open"
                  data-article-slug={related.href.split("/").pop()}
                  data-placement="related-guides"
                >
                  <span>{related.category}</span>
                  <strong>{formatJournalTitle(related.title)}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {faqs.length ? (
        <section className={styles.supportSection} aria-labelledby="article-faq-title">
          <div className={styles.container}>
            <SupportHeader
              label="Questions"
              title="What Travelers Ask Next"
              id="article-faq-title"
            />
            <div className={styles.faqList}>
              {faqs.map((faq) =>
                faq.type === "faq" ? (
                  <details key={faq.question}>
                    <summary>
                      <span>{faq.question}</span>
                      <span aria-hidden="true">+</span>
                    </summary>
                    <p>{renderInlineContent(faq.answer)}</p>
                  </details>
                ) : null,
              )}
            </div>
          </div>
        </section>
      ) : null}

      {article.citations?.length ? (
        <section className={styles.supportSection} aria-labelledby="source-ledger-title">
          <div className={styles.container}>
            <SupportHeader
              label="Source Ledger"
              title="Evidence Behind This Guide"
              id="source-ledger-title"
            />
            <ol className={styles.sources}>
              {article.citations.map((citation, index) => (
                <li key={citation.url}>
                  <span>{index + 1}</span>
                  <span>
                    <a
                      className={styles.textLink}
                      href={citation.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {citation.name}
                    </a>{" "}
                    | {citation.publisher}
                    {citation.publishedAt ? ` | ${formatDate(citation.publishedAt)}` : ""}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      <section className={styles.invitation} aria-labelledby="planning-invitation-title">
        <div className={`${styles.container} ${styles.invitationInner}`}>
          <div>
            <p className={styles.sectionLabel}>Planning Invitation</p>
            <h2 id="planning-invitation-title">Discuss What This Means For Your Journey</h2>
            <p>
              Send your dates, travelers and priorities. Our China-based team will tell you what
              applies, what needs reconfirming and where we would adapt the route.
            </p>
          </div>
          <CtaButton
            href={contextualPlanningHref}
            className={styles.invitationAction}
            data-journal-event="planning_start"
            data-placement="article-final-invitation"
          >
            Discuss My Journey
          </CtaButton>
        </div>
      </section>

      <SiteFooter
        columns={[
          {
            title: "Journal",
            items: [
              { label: "All Guides", href: "/journal" },
              ...(journeyBridge ? [{ label: "Journey In Context", href: "#related-tours" }] : []),
              ...(faqs.length ? [{ label: "Questions", href: "#article-faq-title" }] : []),
            ],
          },
          {
            title: "Topics",
            items: journalCategories.slice(0, 4).map((category) => ({
              label: category,
              href: "/journal",
            })),
          },
          {
            title: "Planning",
            items: [
              { label: "Private China Journeys", href: "/tours" },
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
    </main>
  );
}

function ArticleHero({ article }: { article: JournalArticle }) {
  const mode = getJournalSearchRole(article.slug)?.intent === "answer" ? "answer" : "image";
  const hasImage = article.hero.mode !== "text";
  return (
    <header className={styles.hero} data-hero-mode={hasImage ? mode : "text"}>
      <div className={`${styles.container} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{article.hero.eyebrow ?? article.category}</p>
          <h1>{formatJournalTitle(article.title)}</h1>
          <p className={styles.dek}>{article.dek}</p>
          <div className={styles.heroMeta}>
            <span>{article.category}</span>
            <span>{article.readingTime}</span>
            <span>
              {article.updatedAt ? "Updated" : "Published"}{" "}
              {formatDate(article.updatedAt ?? article.publishedAt)}
            </span>
          </div>
        </div>
        {hasImage ? (
          <OptimizedImage
            src={article.hero.image.src}
            alt={article.hero.image.alt}
            width={article.hero.image.width ?? 1200}
            height={article.hero.image.height ?? 900}
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            frameClassName={styles.heroMedia}
            className="h-full w-full object-cover"
            objectPosition={article.hero.image.objectPosition}
          />
        ) : null}
      </div>
    </header>
  );
}

function EditorialRecord({ article }: { article: JournalArticle }) {
  return (
    <section className={styles.record} aria-label="Editorial record">
      <div className={`${styles.container} ${styles.recordInner}`}>
        <RecordItem label="Written By" value={article.author.name} />
        <RecordItem label="Editorial Basis" value="China-based journey planning and operations" />
        <RecordItem
          label={article.lastFactCheckedAt ? "Sources Checked" : "Published Record"}
          value={
            article.lastFactCheckedAt
              ? formatDate(article.lastFactCheckedAt)
              : formatDate(article.updatedAt ?? article.publishedAt)
          }
        />
        <RecordItem
          label="Operator"
          value={`${siteConfig.operator.englishReferenceName}, licensed in China since 2018`}
        />
      </div>
    </section>
  );
}

function RecordItem({ label, value }: { label: string; value: string }) {
  return (
    <div className={styles.recordItem}>
      <span className={styles.recordLabel}>{label}</span>
      <span className={styles.recordValue}>{value}</span>
    </div>
  );
}

function AnswerBrief({ answer }: { answer: LeadAnswer }) {
  return (
    <section className={styles.answer} aria-labelledby="answer-brief-title">
      <p className={styles.answerLabel}>Answer Brief</p>
      <h2 id="answer-brief-title">{answer.title}</h2>
      <div className={styles.answerBody}>
        {answer.paragraphs.map((paragraph, index) => (
          <p key={`${answer.title}-${index}`}>
            {renderInlineContent(paragraph, `answer-${index}`)}
          </p>
        ))}
      </div>
    </section>
  );
}

function ArticleContents({ sections }: { sections: ArticleSection[] }) {
  const headings = sections.map((section) => section.heading).filter(isDefined);
  if (!headings.length) return null;
  return (
    <>
      <nav className={styles.contents} aria-label="Article contents">
        <h2>In This Guide</h2>
        <ContentsList headings={headings} />
      </nav>
      <details className={styles.mobileContents}>
        <summary>In This Guide</summary>
        <nav aria-label="Article contents on mobile">
          <ContentsList headings={headings} />
        </nav>
      </details>
    </>
  );
}

function ContentsList({ headings }: { headings: NonNullable<ArticleSection["heading"]>[] }) {
  return (
    <ol>
      {headings.map((heading) => (
        <li key={heading.id}>
          <a href={`#${heading.id}`}>{heading.title}</a>
        </li>
      ))}
    </ol>
  );
}

function ArticleContentSection({
  section,
  showJourneyPromptAfterQuote = false,
}: {
  section: ArticleSection;
  showJourneyPromptAfterQuote?: boolean;
}) {
  return (
    <section className={styles.contentSection} aria-labelledby={section.heading?.id}>
      {section.heading ? <h2 id={section.heading.id}>{section.heading.title}</h2> : null}
      <div className={styles.blocks}>
        {section.blocks.map((block, index) => (
          <Fragment key={`${block.type}-${index}`}>
            <ArticleBlock block={block} />
            {showJourneyPromptAfterQuote && block.type === "quote" ? (
              <JournalJourneyPrompt />
            ) : null}
          </Fragment>
        ))}
      </div>
    </section>
  );
}

function DecisionMargin({ margin }: { margin: ReturnType<typeof getDecisionMargin> }) {
  return (
    <aside className={styles.decisionMargin} aria-label="Decision Margin">
      <dl>
        <div>
          <dt className={styles.marginLabel}>Our Read</dt>
          <dd>{margin.operatorRead}</dd>
        </div>
        <div>
          <dt className={styles.marginLabel}>Watch For</dt>
          <dd>{margin.watchFor}</dd>
        </div>
        <div>
          <dt className={styles.marginLabel}>We Would Change This When</dt>
          <dd>{margin.changeWhen}</dd>
        </div>
      </dl>
    </aside>
  );
}

function ArticleBlock({ block }: { block: JournalContentBlock }) {
  switch (block.type) {
    case "heading":
      return block.level === 3 ? (
        <h3 id={block.id}>{block.title}</h3>
      ) : (
        <h2 id={block.id}>{block.title}</h2>
      );
    case "paragraph":
      return <p>{renderInlineContent(block.body)}</p>;
    case "list": {
      const List = block.style === "ordered" ? "ol" : "ul";
      return (
        <List>
          {block.items.map((item, index) => (
            <li key={`${item}-${index}`}>{renderInlineContent(item, `list-${index}`)}</li>
          ))}
        </List>
      );
    }
    case "table":
      return (
        <div className={styles.tableWrap}>
          <table>
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th key={header}>{renderInlineContent(header)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={`row-${rowIndex}`}>
                  {row.map((cell, cellIndex) => (
                    <td key={`${cell}-${cellIndex}`}>
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
        <aside className={styles.callout}>
          {block.title ? <strong>{block.title}</strong> : null}
          <p>{renderInlineContent(block.body)}</p>
        </aside>
      );
    case "image": {
      const contain = block.image.fit === "contain";
      return (
        <figure className={styles.figure}>
          <OptimizedImage
            src={block.image.src}
            alt={block.image.alt}
            width={block.image.width ?? 1200}
            height={block.image.height ?? 800}
            sizes="(min-width: 1024px) 720px, 100vw"
            objectPosition={block.image.objectPosition}
            frameClassName={`${styles.figureFrame} ${contain ? styles.figureContain : ""}`}
            className={contain ? "h-auto w-full object-contain" : "h-full w-full object-cover"}
          />
          {block.caption ? <figcaption>{block.caption}</figcaption> : null}
        </figure>
      );
    }
    case "quote":
      return (
        <blockquote className={styles.quote}>
          <p>{block.quote}</p>
          {block.attribution ? <cite>{block.attribution}</cite> : null}
        </blockquote>
      );
    case "cta":
      return (
        <aside className={styles.inlineCta}>
          <h3>{block.title}</h3>
          <p>{block.description}</p>
          <div className={styles.inlineActions}>
            <CtaButton href={block.primary.href} size="sm">
              {block.primary.label}
            </CtaButton>
            {block.secondary ? (
              <a href={block.secondary.href} className={styles.textLink}>
                {block.secondary.label}
              </a>
            ) : null}
          </div>
        </aside>
      );
    case "faq":
      return null;
  }
}

function SupportHeader({ label, title, id }: { label: string; title: string; id: string }) {
  return (
    <div className={styles.supportHeader}>
      <p className={styles.sectionLabel}>{label}</p>
      <h2 id={id}>{title}</h2>
    </div>
  );
}

function splitLeadAnswer(content: JournalContentBlock[]) {
  if (!content.length) return { leadAnswer: null, remainingContent: content };

  const startIndex = content[0]?.type === "heading" ? 1 : 0;
  let endIndex = startIndex;
  while (content[endIndex]?.type === "paragraph") endIndex += 1;
  const paragraphs = content
    .slice(startIndex, endIndex)
    .map((block) => (block.type === "paragraph" ? block.body : ""));

  return {
    leadAnswer: paragraphs.length
      ? ({ title: "The Answer, Briefly", paragraphs } satisfies LeadAnswer)
      : null,
    remainingContent: paragraphs.length ? content.slice(endIndex) : content,
  };
}

function groupArticleSections(content: JournalContentBlock[]) {
  const sections: ArticleSection[] = [];
  let current: ArticleSection = { blocks: [] };

  for (const block of content) {
    if (block.type === "heading" && block.level !== 3) {
      if (current.heading || current.blocks.length) sections.push(current);
      current = { heading: block, blocks: [] };
    } else {
      current.blocks.push(block);
    }
  }
  if (current.heading || current.blocks.length) sections.push(current);
  return sections;
}

function getDecisionMargin(article: JournalArticle) {
  if (
    article.editorial?.operatorRead &&
    article.editorial.watchFor &&
    article.editorial.changeWhen
  ) {
    return {
      operatorRead: article.editorial.operatorRead,
      watchFor: article.editorial.watchFor,
      changeWhen: article.editorial.changeWhen,
    };
  }

  const role = getJournalSearchRole(article.slug);
  const pillar = role?.pillar ?? "";
  if (/arrival essentials/i.test(pillar) || role?.intent === "answer") {
    return {
      operatorRead:
        "Use this guide to prepare, then reconfirm the date-sensitive rule for your passport, route and travel date before relying on it.",
      watchFor:
        "A current rule can still be applied differently by an airline, station, hotel or attraction when the booking details do not match.",
      changeWhen:
        "Your passport, transit route, entry point or travel date differs from the situation described in this guide.",
    };
  }
  if (/easier-paced|life stage/i.test(pillar)) {
    return {
      operatorRead:
        "Pace should be designed around sustained comfort, not age labels or a single daily step count.",
      watchFor:
        "Transfers, standing, stairs and recovery time can matter more than the headline number of sights in a day.",
      changeWhen:
        "Any traveler needs a different walking rhythm, room setup, meal pattern or level of assistance.",
    };
  }
  if (/private tour decision/i.test(pillar) || role?.intent === "evaluate") {
    return {
      operatorRead:
        "Judge the operator and the written proposal together. A polished itinerary is only useful when responsibility and inclusions are clear.",
      watchFor:
        "Unnamed hotels, vague guide hours, missing ticket assumptions and unclear in-China support make quotations difficult to compare.",
      changeWhen:
        "The proposal does not match your rooms, pace, dietary needs, transport expectations or preferred level of privacy.",
    };
  }
  return {
    operatorRead:
      "Choose the route by what each place contributes and by the usable time left after arrival, departure and intercity movement.",
    watchFor:
      "A route can look efficient on a map while creating repeated packing, station time and rushed landmark visits on the ground.",
    changeWhen:
      "Your flights, season, walking comfort or priority experiences make fewer stops and longer stays the stronger journey.",
  };
}

function getCommercialCollection(slug: string) {
  if (slug !== "china-tours-from-usa") return null;
  return {
    href: "/china-tours-from-usa",
    label: "See Journeys From The USA",
    description:
      "Compare published private routes and usable-night assumptions before matching the land journey to your international flights.",
  };
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(
    new Date(value),
  );
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

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}
