import { ArrowUpRight } from "lucide-react";
import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

import { CtaButton, TrackedLink } from "@/components/cta";
import { GuestVoice } from "@/components/trust/trust";
import { EnquirySection } from "@/components/forms/enquiry-section";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { siteConfig } from "@/config/site";
import { journalCategories } from "@/content/journal";
import { getArticlePhoto } from "@/content/journal/article-photos";
import { getJournalSearchRole } from "@/content/journal/search-strategy";
import { formatJournalMobileTitle, formatJournalTitle } from "@/content/journal/presentation";
import { RecordViewed } from "@/features/discovery/record-viewed";
import { JournalAnalytics } from "@/features/journal/journal-analytics";
import { ArticleStickyCta } from "@/features/journal/article-sticky-cta";
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
    <main className={`${styles.page}`}>
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

      <ArticleStickyCta articleSlug={article.slug} />
      <ArticleHero article={article} />
      <CompactTrust article={article} />

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
                  <span className={styles.relatedThumb}>
                    <Image
                      src={getArticlePhoto(related.href.split("/").pop() ?? "").src}
                      alt=""
                      fill
                      sizes="(max-width: 767px) 90vw, 30vw"
                    />
                  </span>
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

      <div className="mx-auto max-w-[85rem] px-[var(--page-gutter)]">
        <GuestVoice
          topic={articleTopic(article.slug, article.title)}
          count={2}
          seed={article.slug}
        />
      </div>
      <EnquirySection
        placement="article"
        title="Plan this trip with a China specialist"
        intro="Send your dates, travellers and priorities. We will tell you what applies, what needs reconfirming and where we would adapt the route."
      />

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
      <ArticleHeroPhoto slug={article.slug} />
    </header>
  );
}

function ArticleHeroPhoto({ slug }: { slug: string }) {
  const photo = getArticlePhoto(slug);
  return (
    <div className={styles.heroPhoto}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        style={{ objectPosition: photo.objectPosition ?? "center" }}
      />
    </div>
  );
}

function CompactTrust({ article }: { article: JournalArticle }) {
  const governance = article.governance;
  const checkedAt = article.lastFactCheckedAt ?? governance?.contentReviewedAt;
  const label = article.lastFactCheckedAt ? "Sources Checked" : "Published Record";
  const date = formatDate(checkedAt ?? article.updatedAt ?? article.publishedAt);
  const basis =
    governance?.sourceClass === "official-required"
      ? "Official rules reviewed. This guide addresses a time-sensitive visitor rule. Read the listed primary sources and confirm the rule for your passport, route and travel date."
      : governance?.sourceClass === "operator"
        ? "AVIORA operating guidance. This guide explains AVIORA's published operating approach and planning judgment. It is not presented as an outside rule or a promise of date-specific supplier availability."
        : "AVIORA analysis with primary sources. This guide combines AVIORA planning analysis with the listed sources. External rules remain subject to the responsible authority and travel-date confirmation.";
  return (
    <section className={styles.trust} aria-label="Editorial record">
      <div className={`${styles.container} ${styles.trustInner}`}>
        <p>
          By {article.author.name} <span aria-hidden="true">·</span> {label} {date}{" "}
          <span aria-hidden="true">·</span>{" "}
          <Link href="/editorial-policy">How we verify guidance</Link>
        </p>
        <details className={styles.trustDetails}>
          <summary>About this guide</summary>
          <dl>
            <div>
              <dt>Editorial basis</dt>
              <dd>China-based journey planning and operations</dd>
            </div>
            <div>
              <dt>Operator</dt>
              <dd>{`${siteConfig.operator.englishReferenceName}, licensed in China since 2018`}</dd>
            </div>
            <div>
              <dt>Source standard</dt>
              <dd>
                {basis} Reviewed {date}.
              </dd>
            </div>
          </dl>
        </details>
      </div>
    </section>
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
    case "code":
      return (
        <pre className={styles.codeBlock}>
          <code>{block.body}</code>
        </pre>
      );
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

const slugDecisionMargins: Record<
  string,
  { operatorRead: string; watchFor: string; changeWhen: string }
> = {
  "mutianyu-great-wall-walking-cable-car": {
    operatorRead:
      "Plan around the slowest walker, not the strongest. For a mixed-ability family, a round-trip cable car with a short out-and-back walk is the most dependable default.",
    watchFor:
      "The cable car removes the long approach, not the stairs between towers. Queues, steps and weather can add more effort than the map suggests.",
    changeWhen:
      "Anyone has knee, balance or height concerns, or the day turns hot, wet or icy: shorten the route or choose a different descent.",
  },
};

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
  const slugMargin = slugDecisionMargins[article.slug];
  if (slugMargin) return slugMargin;
  // Passport and transit wording only fits rule-type guides. "answer" intent covers any Q&A
  // article, so it must not select this block on its own.
  if (/arrival essentials/i.test(pillar)) {
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
  if (/day tour planning/i.test(pillar)) {
    return {
      operatorRead:
        "A day tour works when the vehicle, guide hours and what is included are fixed before the date, and the plan can still flex on the day.",
      watchFor:
        "Lunch, lift or local transport priced separately, and a start time that does not suit the group's energy.",
      changeWhen:
        "Walking comfort, weather or the site's operating conditions change what is realistic for the group.",
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

/** 文章主题 → 最相关的评价主题；只用于挑选展示哪一类客人的话。 */
function articleTopic(slug: string, title: string) {
  const text = `${slug} ${title}`.toLowerCase();
  if (/hotel|stay|where-to-stay|accommodation/.test(text)) return "hotels" as const;
  if (/cost|price|pay|worth|value|budget/.test(text)) return "value" as const;
  if (/senior|older|easier|slow|pace|walking|family|kids|children|parents/.test(text))
    return "pace" as const;
  if (/driver|transfer|train|transport|airport|car\b/.test(text)) return "transport" as const;
  return "guides" as const;
}
