import { BookOpen, Camera, Compass, Utensils } from "lucide-react";

import { BlogCard } from "@/components/cards/blog-card";
import { DestinationCard } from "@/components/cards/destination-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { HeroTrustPills, SectionHeader } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Badge } from "@/components/ui/badge";
import { planJourneyHref } from "@/config/public-site";
import { journalCategories } from "@/content/journal";
import { Section } from "@/design-system/primitives/section";
import type { JournalArticle } from "@/types/journal";

type JournalHubTemplateProps = {
  featured: JournalArticle;
  editorPicks: JournalArticle[];
  latest: JournalArticle[];
};

export function JournalHubTemplate({ featured, editorPicks, latest }: JournalHubTemplateProps) {
  return (
    <PageContainer>
      <SiteNavigation cta={{ label: "Plan My Journey", href: planJourneyHref }} />

      <HeroLargeImage
        eyebrow="Travel Guide"
        title="China, planned with more feeling and less friction."
        subtitle="Guides, field notes, seasonal ideas, and private travel thinking for travelers who want China to feel inspiring before it feels complicated."
        image={featured.hero.image}
        primary={{ label: "Read Featured Story", href: `/journal/${featured.slug}` }}
        secondary={{ label: "Browse Guides", href: "#guides" }}
      >
        <HeroTrustPills items={["Travel Guides", "Private Routes", "Destination Stories"]} />
      </HeroLargeImage>

      <Section id="featured" spacing="compact" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Featured story"
            title="Start with the question most travelers are quietly asking."
            description="Image-led, practical planning ideas for travelers who want China to feel inspiring before it feels complicated."
          />
          <BlogCard
            title={featured.title}
            excerpt={featured.excerpt}
            href={`/journal/${featured.slug}`}
            image={featured.hero.image}
            category={featured.category}
            date={formatDate(featured.publishedAt)}
            variant="featured"
          />
        </ContentContainer>
      </Section>

      <Section id="editors-picks" spacing="compact">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Editor's picks"
            title="Good planning usually starts with better questions."
            description="Short, useful reads that help travelers understand pace, comfort, culture, and route design."
          />
          <GridSystem columns={3}>
            {editorPicks.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="guides" spacing="compact" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Travel guides"
            title="Useful without becoming a textbook."
            description="Each guide connects inspiration with destinations, journeys, and experiences you can actually plan around."
          />
          <GridSystem columns={3}>
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="collections" spacing="compact">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Destination collections"
            title="Explore by the kind of China you want to feel."
            description="Choose by the kind of China you want: first-time icons, family ease, seasonal comfort, food, culture, or nature."
          />
          <GridSystem columns={3}>
            <DestinationCard
              title="First-time China"
              description="Imperial Beijing, ancient Xi'an, pandas, Shanghai, and a route that does not try to do everything."
              image={featured.hero.image}
              badges={["Travel Guides"]}
              href="/journal/how-to-plan-a-first-private-trip-to-china"
            />
            <DestinationCard
              title="Family China"
              description="Children need rhythm, hands-on moments, and routes that leave room for rest."
              image={editorPicks[0]?.hero.image ?? featured.hero.image}
              badges={["Family Travel"]}
              href="/journal/china-with-kids-what-actually-works"
            />
            <DestinationCard
              title="Seasonal China"
              description="Spring, autumn, school holidays, and the weather choices that shape comfort."
              image={latest[0]?.hero.image ?? featured.hero.image}
              badges={["Travel Guides"]}
              href="/journal/best-time-for-a-first-china-journey"
            />
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="experiences" spacing="compact" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Experiences"
            title="Stories can point toward the right private experience."
            description="The best guide should lead naturally into the right private experience."
          />
          <GridSystem columns={4}>
            <FeatureCard
              icon={<Compass size={18} aria-hidden="true" />}
              title="Private guiding"
              description="Context that adapts to your people, not a memorized script."
            />
            <FeatureCard
              icon={<Camera size={18} aria-hidden="true" />}
              title="Photography rhythm"
              description="Cleaner timing, quieter viewpoints, and fewer rushed days."
            />
            <FeatureCard
              icon={<Utensils size={18} aria-hidden="true" />}
              title="Food and culture"
              description="Local flavor with comfort, dietary awareness, and smart pacing."
            />
            <FeatureCard
              icon={<BookOpen size={18} aria-hidden="true" />}
              title="Travel guides"
              description="Practical answers that naturally lead into a custom route."
            />
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="tips" spacing="compact" className="bg-white">
        <ContentContainer size="xl" className="grid gap-6">
          <SectionHeader
            eyebrow="Plan by question"
            title="Find the guide by what you are trying to decide."
            description="A smaller set of useful entry points keeps the guide browsable on mobile."
          />
          <div className="flex flex-wrap gap-2">
            {journalCategories.slice(0, 8).map((category) => (
              <a key={category} href="#guides">
                <Badge className="bg-foreground/5 text-foreground">{category}</Badge>
              </a>
            ))}
          </div>
        </ContentContainer>
      </Section>

      <Section spacing="default">
        <ContentContainer size="xl">
          <CtaCard
            variant="image"
            image={featured.hero.image}
            eyebrow="Private China planning"
            title="Turn what you are reading into a route that fits your travelers."
            description="Share your dates, travelers, and comfort level. We will suggest a first private China route idea."
            primary={{ label: "Get My First Route Idea", href: planJourneyHref }}
            secondary={{
              label: "View Sample Journey",
              href: "/journey/first-china-beautifully-paced",
            }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter />
    </PageContainer>
  );
}

function ArticleCard({ article }: { article: JournalArticle }) {
  return (
    <BlogCard
      title={article.title}
      excerpt={article.excerpt}
      href={`/journal/${article.slug}`}
      image={article.hero.image}
      category={article.category}
      date={formatDate(article.publishedAt)}
    />
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(value));
}
