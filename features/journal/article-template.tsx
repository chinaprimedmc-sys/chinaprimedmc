import { ArrowUpRight } from "lucide-react";
import { Fragment } from "react";
import Link from "next/link";

import { CtaButton, TrackedLink } from "@/components/cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { journalCategories } from "@/content/journal";
import { getJournalSearchRole } from "@/content/journal/search-strategy";
import { formatJournalMobileTitle, formatJournalTitle } from "@/content/journal/presentation";
import { RecordViewed } from "@/features/discovery/record-viewed";
import { JournalAnalytics } from "@/features/journal/journal-analytics";
import { ArticleMobileReader } from "@/features/journal/article-mobile-reader";
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
      <EvidenceNote article={article} />

      <section id="article" className={styles.reading}>
        <ArticleMobileReader
          headings={sections
            .map((section) => section.heading)
            .filter(isDefined)
            .map((heading) => ({ id: heading.id, title: heading.title }))}
        />
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
            <Fragment key={section.heading?.id ?? `article-section-${index}`}>
              <div className={styles.articleRow}>
                <ArticleContentSection section={section} />
                {index === Math.min(1, sections.length - 1) ? (
                  <DecisionMargin margin={decisionMargin} />
                ) : null}
              </div>
              {journeyBridge && index === Math.min(1, sections.length - 1) ? (
                <div className={styles.midJourneyPrompt}>
                  <JournalJourneyPrompt bridge={journeyBridge} />
                </div>
              ) : null}
            </Fragment>
          ))}
          <span id="article-content-end" aria-hidden="true" />
        </div>
      </section>

      {journeyBridge ? <JournalJourneyBridge bridge={journeyBridge} /> : null}

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
          { label: "Facebook", href: "https://www.facebook.com/p/Aviora-Travel-61593357154006/" },
          { label: "Instagram", href: "https://www.instagram.com/chinaprimedmc/" },
        ]}
      />
    </main>
  );
}

function ArticleHero({ article }: { article: JournalArticle }) {
  return (
    <header className={styles.hero} data-hero-mode="text">
      <div className={`${styles.container} ${styles.heroGrid}`}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{article.hero.eyebrow ?? article.category}</p>
          <h1 aria-label={formatJournalTitle(article.title)}>
            <span className={styles.fullTitle}>{formatJournalTitle(article.title)}</span>
            <span className={styles.mobileTitle} aria-hidden="true">
              {formatJournalMobileTitle(article.title)}
            </span>
          </h1>
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

function EvidenceNote({ article }: { article: JournalArticle }) {
  const governance = article.governance;
  if (!governance) return null;

  const copy =
    governance.sourceClass === "official-required"
      ? "This guide addresses a time-sensitive visitor rule. Read the listed primary sources and confirm the rule for your passport, route and travel date."
      : governance.sourceClass === "operator"
        ? "This guide explains AVIORA's published operating approach and planning judgment. It is not presented as an outside rule or a promise of date-specific supplier availability."
        : "This guide combines AVIORA planning analysis with the listed sources. External rules remain subject to the responsible authority and travel-date confirmation.";

  return (
    <aside className={styles.evidenceNote} aria-label="Guide source and review policy">
      <div className={styles.container}>
        <p>
          <strong>
            {governance.sourceClass === "official-required"
              ? "Official rules reviewed."
              : governance.sourceClass === "operator"
                ? "AVIORA operating guidance."
                : "AVIORA analysis with primary sources."}
          </strong>{" "}
          {copy} Reviewed {formatDate(article.lastFactCheckedAt ?? governance.contentReviewedAt)}.
          <Link href="/editorial-policy">How we verify guidance</Link>
        </p>
      </div>
    </aside>
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

function ArticleContentSection({ section }: { section: ArticleSection }) {
  return (
    <section className={styles.contentSection} aria-labelledby={section.heading?.id}>
      {section.heading ? <h2 id={section.heading.id}>{section.heading.title}</h2> : null}
      <div className={styles.blocks}>
        {section.blocks.map((block, index) => (
          <ArticleBlock key={`${block.type}-${index}`} block={block} />
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
          <dt className={styles.marginLabel}>Change The Plan When</dt>
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
    case "paragraph": {
      const paragraphs = splitLongParagraph(block.body);
      return (
        <p>
          {paragraphs.map((paragraph, index) => (
            <Fragment key={`paragraph-${index}`}>
              {renderInlineContent(paragraph, `paragraph-${index}`)}
              {index < paragraphs.length - 1 ? (
                <span className={styles.mobileParagraphBreak} aria-hidden="true" />
              ) : null}
            </Fragment>
          ))}
        </p>
      );
    }
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
          <span className={styles.tableHint} aria-hidden="true">
            Swipe to compare
          </span>
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
    case "image":
      return null;
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
  const textContent = content.filter((block) => block.type !== "image");
  if (!textContent.length) return { leadAnswer: null, remainingContent: textContent };

  const startIndex = textContent[0]?.type === "heading" ? 1 : 0;
  let endIndex = startIndex;
  while (textContent[endIndex]?.type === "paragraph") endIndex += 1;
  const leadEndIndex = Math.min(endIndex, startIndex + 2);
  const paragraphs = textContent
    .slice(startIndex, leadEndIndex)
    .map((block) => (block.type === "paragraph" ? block.body : ""));

  return {
    leadAnswer: paragraphs.length
      ? ({ title: "The Answer, Briefly", paragraphs } satisfies LeadAnswer)
      : null,
    remainingContent: paragraphs.length
      ? [...textContent.slice(leadEndIndex, endIndex), ...textContent.slice(endIndex)]
      : textContent,
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

function splitLongParagraph(value: string) {
  if (value.length < 480) return [value];

  const sentences = value.split(/(?<=[.!?])\s+(?=[A-Z0-9])/);
  if (sentences.length < 2) return [value];

  const paragraphs: string[] = [];
  let current = "";
  for (const sentence of sentences) {
    const candidate = current ? `${current} ${sentence}` : sentence;
    if (current && candidate.length > 300) {
      paragraphs.push(current);
      current = sentence;
    } else {
      current = candidate;
    }
  }
  if (current) paragraphs.push(current);
  return paragraphs;
}

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}
