import { CalendarDays, Clock3, Link2, Share2 } from "lucide-react";

import { BlogCard } from "@/components/cards/blog-card";
import { DestinationCard } from "@/components/cards/destination-card";
import { ExperienceCard } from "@/components/cards/experience-card";
import { TourCard } from "@/components/cards/tour-card";
import { HeroTrustPills, SectionHeader } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { FloatingCta } from "@/components/cta/floating-cta";
import { StickyMobileCta } from "@/components/cta/sticky-mobile-cta";
import { SiteFooter } from "@/components/footer/site-footer";
import { LightboxGallery } from "@/components/gallery/lightbox-gallery";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { OptimizedImage } from "@/components/media/optimized-image";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Badge } from "@/components/ui/badge";
import { planJourneyHref, publicSocialLinks } from "@/config/public-site";
import { journalCategories } from "@/content/journal";
import { Section } from "@/design-system/primitives/section";
import { RecordViewed } from "@/features/discovery/record-viewed";
import type { ContentRelationships } from "@/lib/content/relationship-engine";
import type { JournalArticle, JournalContentBlock } from "@/types/journal";

type ArticleTemplateProps = {
  article: JournalArticle;
  relationships: ContentRelationships;
};

export function ArticleTemplate({ article, relationships }: ArticleTemplateProps) {
  const headings = article.content.filter((block) => block.type === "heading");
  const faqs = article.content.filter((block) => block.type === "faq");

  return (
    <PageContainer className="pb-24 md:pb-0">
      <RecordViewed
        item={{
          id: `article:${article.slug}`,
          type: "article",
          title: article.title,
          href: `/journal/${article.slug}`,
        }}
      />
      <SiteNavigation cta={{ label: "Plan My Journey", href: planJourneyHref }} />

      <HeroLargeImage
        eyebrow={article.hero.eyebrow ?? article.category}
        title={article.title}
        subtitle={article.dek}
        image={article.hero.image}
        primary={{ label: "Start Reading", href: "#article" }}
        secondary={{ label: "Plan Around This", href: "#inquiry-cta" }}
      >
        <HeroTrustPills
          items={[article.category, article.readingTime, formatDate(article.publishedAt)]}
        />
      </HeroLargeImage>

      <Section id="article" spacing="default" className="bg-white">
        <ContentContainer size="xl">
          <div className="grid gap-10 lg:grid-cols-[15rem_minmax(0,44rem)_1fr] lg:items-start">
            <aside className="lg:sticky lg:top-28">
              <div className="border-border bg-background/78 rounded-[1.5rem] border p-4 shadow-sm">
                <p className="text-xs font-bold tracking-[0.16em] uppercase opacity-60">
                  In this guide
                </p>
                <nav className="mt-4 grid gap-2">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className="text-muted hover:text-foreground rounded-xl px-3 py-2 text-sm transition"
                    >
                      {heading.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="min-w-0">
              <ArticleMeta article={article} />
              <div className="mt-8 grid gap-7">
                {article.content.map((block, index) => (
                  <ArticleBlock key={`${block.type}-${index}`} block={block} />
                ))}
              </div>
            </article>

            <aside className="hidden lg:block">
              <div className="sticky top-28 grid gap-3">
                <Badge>{article.category}</Badge>
                <p className="text-muted text-sm leading-6">
                  Use this guide as a starting point, then turn the useful parts into a private
                  route designed around your travelers.
                </p>
                <div className="flex gap-2">
                  <span className="border-border grid size-10 place-items-center rounded-full border">
                    <Share2 size={16} aria-hidden="true" />
                  </span>
                  <span className="border-border grid size-10 place-items-center rounded-full border">
                    <Link2 size={16} aria-hidden="true" />
                  </span>
                </div>
              </div>
            </aside>
          </div>
        </ContentContainer>
      </Section>

      {article.gallery.length ? (
        <Section id="gallery" spacing="default">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader
              eyebrow="Image gallery"
              title="A visual pause inside the guide."
              description="Article galleries use the shared lightbox component and optimized images."
            />
            <LightboxGallery images={article.gallery} />
          </ContentContainer>
        </Section>
      ) : null}

      {relationships.destinations.length ? (
        <Section id="related-destinations" spacing="default" className="bg-white">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader
              eyebrow="Related destination"
              title="Understand the place behind the story."
              description="Destination relationships can be manual or inferred from tags."
            />
            <GridSystem columns={3}>
              {relationships.destinations.map((destination) => (
                <DestinationCard
                  key={destination.name}
                  title={destination.name}
                  description={destination.description}
                  image={destination.image}
                  href={destination.href}
                  variant="medium"
                />
              ))}
            </GridSystem>
          </ContentContainer>
        </Section>
      ) : null}

      {relationships.tours.length ? (
        <Section id="related-journeys" spacing="default">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader
              eyebrow="Related private journeys"
              title="Turn the idea into a route."
              description="Sample journeys that fit the questions, places, and travel style in this guide."
            />
            <GridSystem columns={3}>
              {relationships.tours.map((tour) => (
                <TourCard
                  key={tour.title}
                  title={tour.title}
                  description={tour.description}
                  image={tour.image}
                  badges={tour.tags}
                  meta={[
                    { label: "Route", value: tour.route },
                    { label: "Length", value: tour.duration },
                  ]}
                  action={{ label: "View journey", href: tour.href }}
                />
              ))}
            </GridSystem>
          </ContentContainer>
        </Section>
      ) : null}

      {relationships.experiences.length ? (
        <Section id="related-experiences" spacing="default" className="bg-white">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader
              eyebrow="Related experiences"
              title="What this article naturally leads to."
              description="Specific moments that help the guide become part of a real journey."
            />
            <GridSystem columns={3}>
              {relationships.experiences.map((experience) => (
                <ExperienceCard
                  key={experience.title}
                  title={experience.title}
                  description={experience.description}
                  image={experience.image}
                  badges={experience.badges}
                  variant="medium"
                />
              ))}
            </GridSystem>
          </ContentContainer>
        </Section>
      ) : null}

      {relationships.articles.length ? (
        <Section id="related-articles" spacing="default">
          <ContentContainer size="xl" className="grid gap-8">
            <SectionHeader
              eyebrow="Keep reading"
              title="Related planning notes."
              description="More useful planning notes for the same kind of trip."
            />
            <GridSystem columns={3}>
              {relationships.articles.map((related) => (
                <BlogCard
                  key={related.title}
                  title={related.title}
                  excerpt={related.excerpt}
                  href={related.href}
                  image={related.image}
                  category={related.category}
                />
              ))}
            </GridSystem>
          </ContentContainer>
        </Section>
      ) : null}

      {faqs.length ? (
        <Section id="article-faq" spacing="default" className="bg-white">
          <ContentContainer size="lg" className="grid gap-8">
            <SectionHeader
              eyebrow="FAQ"
              title="Questions this guide helps answer."
              description="Short answers for travelers comparing routes, seasons, and comfort."
            />
            <div className="grid gap-3">
              {faqs.map((faq) =>
                faq.type === "faq" ? (
                  <article
                    key={faq.question}
                    className="border-border rounded-[1.35rem] border bg-white p-5"
                  >
                    <h3 className="text-lg font-semibold tracking-[-0.02em]">{faq.question}</h3>
                    <p className="text-muted mt-2 text-sm leading-7">{faq.answer}</p>
                  </article>
                ) : null,
              )}
            </div>
          </ContentContainer>
        </Section>
      ) : null}

      <Section id="inquiry-cta" spacing="default">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={article.hero.image}
            eyebrow="Plan around this idea"
            title="Let us turn the guide into a private China route."
            description="Share who is traveling, your dates, and what you want to avoid. We will suggest the first route shape."
            primary={{
              label: "Talk to a China Specialist",
              href: planJourneyHref,
            }}
            secondary={{
              label: "View Sample Journey",
              href: "/journey/first-china-beautifully-paced",
            }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          {
            title: "Travel guide",
            items: [
              { label: "All guides", href: "/travel-guide" },
              { label: "Related journeys", href: "#related-journeys" },
              { label: "FAQ", href: "#article-faq" },
            ],
          },
          {
            title: "Categories",
            items: journalCategories.slice(0, 4).map((category) => ({
              label: category,
              href: "/travel-guide",
            })),
          },
          {
            title: "Planning",
            items: [
              { label: "Private China journeys", href: "/journey/first-china-beautifully-paced" },
              { label: "Destinations", href: "/destination/beijing" },
              { label: "Email us", href: planJourneyHref },
            ],
          },
        ]}
        social={publicSocialLinks}
      />

      <FloatingCta label="Plan From This" href="#inquiry-cta" />
      <StickyMobileCta
        label="Plan"
        href="#inquiry-cta"
        showAfter={1200}
        className="right-3 bottom-[calc(env(safe-area-inset-bottom)+0.85rem)] scale-[0.82]"
      />
    </PageContainer>
  );
}

function ArticleMeta({ article }: { article: JournalArticle }) {
  return (
    <div className="border-border bg-background/72 rounded-[1.5rem] border p-4">
      <div className="flex flex-wrap gap-3 text-sm">
        <span className="inline-flex items-center gap-2">
          <CalendarDays size={16} aria-hidden="true" />
          {formatDate(article.publishedAt)}
        </span>
        <span className="inline-flex items-center gap-2">
          <Clock3 size={16} aria-hidden="true" />
          {article.readingTime}
        </span>
      </div>
      <p className="text-muted mt-3 text-sm leading-6">
        By {article.author.name}, {article.author.role}
      </p>
    </div>
  );
}

function ArticleBlock({ block }: { block: JournalContentBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2
          id={block.id}
          className="scroll-mt-28 text-3xl leading-tight font-semibold tracking-[-0.035em] md:text-4xl"
        >
          {block.title}
        </h2>
      );
    case "paragraph":
      return <p className="text-muted text-lg leading-9">{block.body}</p>;
    case "image":
      return (
        <figure>
          <OptimizedImage
            src={block.image.src}
            alt={block.image.alt}
            width={block.image.width ?? 1200}
            height={block.image.height ?? 800}
            sizes="(min-width:1024px) 720px, 100vw"
            objectPosition={block.image.objectPosition}
            frameClassName="aspect-[4/3] rounded-[1.5rem]"
            className="h-full w-full"
          />
          {block.caption ? (
            <figcaption className="text-muted mt-3 text-sm leading-6">{block.caption}</figcaption>
          ) : null}
        </figure>
      );
    case "quote":
      return (
        <blockquote className="border-foreground border-l-4 pl-5">
          <p className="text-2xl leading-tight font-semibold tracking-[-0.025em]">{block.quote}</p>
          {block.attribution ? (
            <cite className="text-muted mt-3 block text-sm not-italic">{block.attribution}</cite>
          ) : null}
        </blockquote>
      );
    case "cta":
      return (
        <CtaCard
          variant={block.image ? "image" : "glass"}
          image={block.image}
          eyebrow={block.eyebrow}
          title={block.title}
          description={block.description}
          primary={block.primary}
          secondary={block.secondary}
        />
      );
    case "faq":
      return null;
    default:
      return null;
  }
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}
