import { BookOpen, Camera, Compass, Utensils } from "lucide-react";

import { BlogCard } from "@/components/cards/blog-card";
import { DestinationCard } from "@/components/cards/destination-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { HeroTrustPills, SectionHeader } from "@/components/content";
import { CtaCard } from "@/components/cta/cta-card";
import { SiteFooter } from "@/components/footer/site-footer";
import { GridGallery } from "@/components/gallery/grid-gallery";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { ContentContainer } from "@/components/layout/content-container";
import { GridSystem } from "@/components/layout/grid-system";
import { PageContainer } from "@/components/layout/page-container";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { Badge } from "@/components/ui/badge";
import { journalCategories, journalTags } from "@/content/journal";
import { Section } from "@/design-system/primitives/section";
import type { JournalArticle } from "@/types/journal";

type JournalHubTemplateProps = {
  featured: JournalArticle;
  editorPicks: JournalArticle[];
  latest: JournalArticle[];
};

const journalNav = [
  { label: "Featured", href: "#featured" },
  { label: "Guides", href: "#guides" },
  { label: "Destinations", href: "#collections" },
  { label: "Tips", href: "#tips" },
];

export function JournalHubTemplate({ featured, editorPicks, latest }: JournalHubTemplateProps) {
  return (
    <PageContainer>
      <SiteNavigation
        items={journalNav}
        cta={{ label: "Plan My Journey", href: "mailto:chinaprimedmc@gmail.com" }}
      />

      <HeroLargeImage
        eyebrow="Travel Journal"
        title="China, planned with more feeling and less friction."
        subtitle="Guides, field notes, seasonal ideas, and private travel thinking for travelers who want China to feel inspiring before it feels complicated."
        image={featured.hero.image}
        primary={{ label: "Read Featured Story", href: `/journal/${featured.slug}` }}
        secondary={{ label: "Browse Guides", href: "#guides" }}
        overlay="medium"
      >
        <HeroTrustPills items={["Travel Guides", "Private Routes", "Destination Stories"]} />
      </HeroLargeImage>

      <Section id="featured" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Featured story"
            title="Start with the question most travelers are quietly asking."
            description="A useful first read for the questions that shape pace, comfort, routing, and the feel of a private journey."
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

      <Section id="editors-picks" spacing="default">
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

      <Section id="guides" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Travel guides"
            title="Useful without becoming a textbook."
            description="Each guide connects practical destination context with the route questions travelers ask before planning."
          />
          <GridSystem columns={3}>
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </GridSystem>
        </ContentContainer>
      </Section>

      <Section id="collections" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Destination collections"
            title="Explore by the kind of China you want to feel."
            description="Browse guides by destination, season, and the kind of travel experience you want to shape."
          />
          <GridSystem columns={3}>
            <DestinationCard
              title="First-time China"
              description="Imperial Beijing, ancient Xi'an, modern Shanghai, and a route that does not try to do everything."
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

      <Section id="experiences" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Experiences"
            title="Stories can point toward the right private experience."
            description="Use the journal to move from an idea about pandas, food, rail, guides, or culture into a more considered route conversation."
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

      <Section id="food-culture" spacing="default">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Food and culture"
            title="Let images carry some of the story."
            description="Field details, images, and practical context help turn a place from an idea into a journey you can picture."
          />
          <GridGallery images={featured.gallery} mode="editorial" />
        </ContentContainer>
      </Section>

      <Section id="tips" spacing="default" className="bg-white">
        <ContentContainer size="xl" className="grid gap-8">
          <SectionHeader
            eyebrow="Categories and tags"
            title="Follow the questions that matter to your trip."
            description="Browse by destination, season, traveler type, or the practical experience you are planning around."
          />
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="border-border bg-background/70 rounded-[1.75rem] border p-5">
              <h3 className="text-xl font-semibold tracking-[-0.02em]">Categories</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {journalCategories.slice(0, 12).map((category) => (
                  <Badge key={category}>{category}</Badge>
                ))}
              </div>
            </div>
            <div className="border-border bg-background/70 rounded-[1.75rem] border p-5">
              <h3 className="text-xl font-semibold tracking-[-0.02em]">Tags</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {journalTags.map((tag) => (
                  <Badge key={tag.slug} className="bg-foreground/4 text-muted">
                    {tag.label}
                  </Badge>
                ))}
              </div>
            </div>
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
            primary={{ label: "Get My First Route Idea", href: "mailto:chinaprimedmc@gmail.com" }}
            secondary={{
              label: "View Sample Journey",
              href: "/tours/first-china-beautifully-paced",
            }}
          />
        </ContentContainer>
      </Section>

      <SiteFooter
        columns={[
          { title: "Journal", items: journalNav },
          {
            title: "Categories",
            items: journalCategories
              .slice(0, 4)
              .map((category) => ({ label: category, href: "#tips" })),
          },
          {
            title: "Planning",
            items: [
              { label: "Private China tours", href: "/tours/first-china-beautifully-paced" },
              { label: "Destinations", href: "/destinations/beijing" },
              { label: "Email us", href: "mailto:chinaprimedmc@gmail.com" },
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
