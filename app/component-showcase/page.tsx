import {
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Compass,
  Image as ImageIcon,
  LayoutGrid,
  MessageCircle,
  MousePointer2,
  PanelsTopLeft,
  Sparkles,
} from "lucide-react";

import { BlogCard } from "@/components/cards/blog-card";
import { DestinationCard } from "@/components/cards/destination-card";
import { ExperienceCard } from "@/components/cards/experience-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { ReviewCard } from "@/components/cards/review-card";
import { StatisticCard } from "@/components/cards/statistic-card";
import { TourCard } from "@/components/cards/tour-card";
import { CtaButton } from "@/components/cta/cta-button";
import { CtaCard } from "@/components/cta/cta-card";
import {
  ComingSoonState,
  ErrorState,
  NoResultsState,
  NoToursState,
} from "@/components/empty-states/preset-empty-states";
import { CheckboxField, RadioField } from "@/components/forms/choice-fields";
import { TextAreaField, TextField } from "@/components/forms/form-field";
import { FormErrorState, FormLoadingState, FormSuccessState } from "@/components/forms/form-states";
import { SelectField } from "@/components/forms/select-field";
import { NewsletterSignup } from "@/components/footer/newsletter-signup";
import { SiteFooter } from "@/components/footer/site-footer";
import { CarouselGallery } from "@/components/gallery/carousel-gallery";
import { GridGallery } from "@/components/gallery/grid-gallery";
import { LightboxGallery } from "@/components/gallery/lightbox-gallery";
import { HeroEditorial } from "@/components/hero/hero-editorial";
import { HeroLargeImage } from "@/components/hero/hero-large-image";
import { IconSystem } from "@/components/icons/icon-system";
import { EditorialLayout } from "@/components/layout/editorial-layout";
import { GridSystem } from "@/components/layout/grid-system";
import { MagazineLayout } from "@/components/layout/magazine-layout";
import { PageContainer } from "@/components/layout/page-container";
import { SplitLayout } from "@/components/layout/split-layout";
import { CardSkeleton, Skeleton } from "@/components/loading/skeleton";
import { ProgressBar } from "@/components/loading/progress-bar";
import { SiteNavigation } from "@/components/navigation/site-navigation";
import { EditorialReview } from "@/components/reviews/editorial-review";
import { TravelTimeline } from "@/components/timeline/travel-timeline";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Glass } from "@/components/foundation/glass";
import type { NavigationItem } from "@/types/component-library";

const scenic = {
  src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
  alt: "Component showcase placeholder landscape",
  width: 1600,
  height: 1050,
};

const city = {
  src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
  alt: "Component showcase placeholder city architecture",
  width: 1400,
  height: 950,
};

const portrait = {
  src: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
  alt: "Component showcase placeholder travel detail",
  width: 1200,
  height: 1500,
};

const galleryImages = [scenic, city, portrait];

const navItems: NavigationItem[] = [
  { label: "Layout", href: "#layout" },
  { label: "Navigation", href: "#navigation" },
  { label: "Hero", href: "#hero" },
  { label: "Cards", href: "#cards" },
  { label: "Forms", href: "#forms" },
  { label: "States", href: "#states" },
];

const sidebar = [
  ["Foundation", "#foundation"],
  ["Layout", "#layout"],
  ["Navigation", "#navigation"],
  ["Hero", "#hero"],
  ["Cards", "#cards"],
  ["Gallery", "#gallery"],
  ["Timeline", "#timeline"],
  ["CTA", "#cta"],
  ["Forms", "#forms"],
  ["Reviews", "#reviews"],
  ["Loading", "#loading"],
  ["States", "#states"],
  ["Footer", "#footer"],
];

export default function ComponentShowcasePage() {
  return (
    <PageContainer tone="white">
      <SiteNavigation items={navItems} cta={{ label: "Internal Preview", href: "#foundation" }} />
      <HeroLargeImage
        eyebrow="Component Showcase"
        title="The official interface system for V2."
        subtitle="A Storybook-style internal page for reviewing components, variants, interaction states, and props before Sprint 3 page design begins."
        image={scenic}
        primary={{ label: "Browse Components", href: "#foundation" }}
        secondary={{ label: "Read Props", href: "#props" }}
        overlay="medium"
      />
      <div className="mx-auto grid max-w-[92rem] gap-8 px-5 py-10 lg:grid-cols-[16rem_1fr] lg:px-8">
        <aside className="hidden lg:block">
          <div className="border-border sticky top-28 rounded-[1.5rem] border bg-white p-4 shadow-sm">
            <p className="text-muted px-3 text-xs font-semibold tracking-[0.18em] uppercase">
              Components
            </p>
            <nav className="mt-3 grid gap-1" aria-label="Component showcase sections">
              {sidebar.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="text-muted hover:bg-foreground/5 hover:text-foreground rounded-full px-3 py-2 text-sm font-medium transition"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>
        <main className="grid gap-10">
          <ShowcaseSection
            id="foundation"
            icon={<Sparkles size={18} />}
            eyebrow="Foundation"
            title="Tokens, glass, icons, buttons, badges."
            description="Small primitives define the personality of the whole product. They should feel quiet, precise, and consistent."
          >
            <ShowcaseCanvas>
              <div className="flex flex-wrap gap-3">
                <Button>Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="glass">Glass Button</Button>
                <CtaButton href="#" icon={<ArrowUpRight size={16} />}>
                  CTA Button
                </CtaButton>
                <Badge>Badge</Badge>
                <IconSystem icon={Compass} />
              </div>
              <GridSystem columns={3}>
                <Glass variant="navigation" className="rounded-[1.5rem] p-5">
                  Navigation Glass
                </Glass>
                <Glass variant="dialog" className="rounded-[1.5rem] p-5">
                  Dialog Glass
                </Glass>
                <Glass variant="floating" className="rounded-[1.5rem] p-5">
                  Floating Glass
                </Glass>
              </GridSystem>
            </ShowcaseCanvas>
            <PropsTable
              rows={[
                ["Button", "variant, size, disabled", "Primary low-friction actions"],
                ["CtaButton", "href, variant, size, icon", "Navigation and conversion actions"],
                ["Glass", "variant", "Controlled liquid-glass surfaces only"],
              ]}
            />
          </ShowcaseSection>

          <ShowcaseSection
            id="layout"
            icon={<LayoutGrid size={18} />}
            eyebrow="Layout System"
            title="Page structure without page-specific styling."
            description="These layouts let future pages feel editorial, cinematic, and consistent without inventing new grids."
          >
            <ShowcaseCanvas>
              <EditorialLayout
                eyebrow="Editorial Layout"
                title="A text and media composition with controlled rhythm."
                intro="Used when a section needs story weight and a single strong visual."
                media={
                  <DestinationCard
                    title="Media Slot"
                    image={portrait}
                    description="Any media component can live here."
                  />
                }
              />
              <SplitLayout
                primary={
                  <FeatureCard
                    icon={<PanelsTopLeft size={18} />}
                    title="Split Primary"
                    description="Supports balanced or weighted columns."
                  />
                }
                secondary={
                  <StatisticCard
                    value="12"
                    label="Column scales"
                    helper="Responsive behavior is baked into the layout."
                  />
                }
              />
              <MagazineLayout
                lead={<DestinationCard title="Magazine Lead" image={scenic} variant="large" />}
                aside={
                  <>
                    <FeatureCard title="Aside Block" description="Stacked supporting content." />
                    <FeatureCard
                      title="Second Block"
                      description="Creates visual hierarchy without custom CSS."
                    />
                  </>
                }
              />
            </ShowcaseCanvas>
          </ShowcaseSection>

          <ShowcaseSection
            id="navigation"
            icon={<MousePointer2 size={18} />}
            eyebrow="Navigation System"
            title="Sticky, glass, searchable, expandable."
            description="The live navigation at the top of this page demonstrates desktop nav, mega menu behavior, mobile dialog nav, and search overlay."
          >
            <ShowcaseCanvas>
              <FeatureCard
                icon={<CheckCircle2 size={18} />}
                title="Interaction checklist"
                description="Sticky behavior, scroll glass transition, keyboard-friendly dialog menu, search overlay, CTA, language and currency placeholders."
              />
            </ShowcaseCanvas>
          </ShowcaseSection>

          <ShowcaseSection
            id="hero"
            icon={<ImageIcon size={18} />}
            eyebrow="Hero Components"
            title="Large image, video-ready, and editorial hero systems."
            description="Hero components define above-the-fold rhythm while keeping media, copy, CTAs, and overlays consistent."
          >
            <ShowcaseCanvas>
              <HeroEditorial
                eyebrow="Hero Editorial"
                title="Editorial hero with image-led rhythm."
                subtitle="A compact hero for pages that need clarity rather than full-screen drama."
                image={portrait}
                primary={{ label: "Primary", href: "#" }}
                secondary={{ label: "Secondary", href: "#" }}
              />
            </ShowcaseCanvas>
          </ShowcaseSection>

          <ShowcaseSection
            id="cards"
            icon={<PanelsTopLeft size={18} />}
            eyebrow="Card System"
            title="Reusable card families with shared behavior."
            description="Cards support small, medium, large, and featured variants with image zoom, metadata, badges, and glass overlays."
          >
            <ShowcaseCanvas>
              <GridSystem columns={3}>
                <DestinationCard
                  title="Destination Card"
                  description="Image-led card."
                  image={scenic}
                  badges={["Featured"]}
                  action={{ label: "View", href: "#" }}
                />
                <TourCard
                  title="Tour Card"
                  description="Route, length, pace, price-ready."
                  image={city}
                  meta={[
                    { label: "Length", value: "10 days" },
                    { label: "Pace", value: "Easy" },
                  ]}
                />
                <ExperienceCard
                  title="Experience Card"
                  description="For culture, food, nature, luxury."
                  image={portrait}
                />
                <BlogCard
                  title="Blog Card"
                  excerpt="For future travel guide clusters."
                  href="#"
                  image={scenic}
                  category="Guide"
                  date="Preview"
                />
                <ReviewCard
                  review={{
                    quote: "A compact review card for trust sections.",
                    name: "Reviewer",
                    country: "US",
                    rating: 5,
                    trip: "Preview Journey",
                  }}
                />
                <FeatureCard
                  icon={<Sparkles size={18} />}
                  title="Feature Card"
                  description="Proof point and benefit card."
                />
              </GridSystem>
            </ShowcaseCanvas>
            <PropsTable
              rows={[
                [
                  "BaseMediaCard",
                  "title, description, image, href, badges, meta, action, variant",
                  "Destination, tour, experience, hotel, gallery",
                ],
                [
                  "BlogCard",
                  "title, excerpt, href, image, category, date, variant",
                  "Guide and editorial clusters",
                ],
                ["ReviewCard", "review, variant", "Trust and customer story sections"],
              ]}
            />
          </ShowcaseSection>

          <ShowcaseSection
            id="gallery"
            icon={<ImageIcon size={18} />}
            eyebrow="Gallery System"
            title="Grid, carousel, lightbox."
            description="The gallery system supports editorial grids, horizontal mobile-friendly browsing, and fullscreen image inspection."
          >
            <ShowcaseCanvas>
              <GridGallery images={galleryImages} />
              <CarouselGallery images={galleryImages} />
              <LightboxGallery images={galleryImages} />
            </ShowcaseCanvas>
          </ShowcaseSection>

          <ShowcaseSection
            id="timeline"
            icon={<CalendarDays size={18} />}
            eyebrow="Timeline System"
            title="Expandable itinerary structure."
            description="Future trip detail pages can render day-by-day plans without inventing new itinerary UI."
          >
            <ShowcaseCanvas>
              <TravelTimeline
                items={[
                  {
                    eyebrow: "Day 1",
                    title: "Arrival and orientation",
                    description: "Expandable timeline item with logistics and optional imagery.",
                    hotel: "Hotel placeholder",
                    meals: ["Dinner"],
                    transport: "Private transfer",
                    activities: ["Arrival support", "Light evening walk"],
                    image: city,
                  },
                  {
                    eyebrow: "Day 2",
                    title: "Culture and local life",
                    description: "Secondary day structure with activities and meals.",
                    meals: ["Breakfast", "Lunch"],
                    transport: "Private car",
                    activities: ["Museum visit", "Neighborhood walk"],
                  },
                ]}
              />
            </ShowcaseCanvas>
          </ShowcaseSection>

          <ShowcaseSection
            id="cta"
            icon={<MessageCircle size={18} />}
            eyebrow="CTA System"
            title="Conversion without visual noise."
            description="CTA components stay restrained, accessible, and consistent across future pages."
          >
            <ShowcaseCanvas>
              <div className="flex flex-wrap gap-3">
                <CtaButton href="#">Primary CTA</CtaButton>
                <CtaButton href="#" variant="secondary">
                  Secondary CTA
                </CtaButton>
                <CtaButton href="#" variant="outline">
                  Outline CTA
                </CtaButton>
                <CtaButton href="#" variant="glass">
                  Glass CTA
                </CtaButton>
              </div>
              <CtaCard
                eyebrow="CTA Card"
                title="A complete conversion surface."
                description="Used after meaningful content moments, not as noisy advertising."
                primary={{ label: "Primary Action", href: "#" }}
                secondary={{ label: "Secondary Action", href: "#" }}
              />
            </ShowcaseCanvas>
          </ShowcaseSection>

          <ShowcaseSection
            id="forms"
            icon={<MessageCircle size={18} />}
            eyebrow="Form System"
            title="Inquiry-ready fields and states."
            description="Future forms should use these controls with React Hook Form and Zod validation."
          >
            <ShowcaseCanvas>
              <GridSystem columns={2}>
                <div className="border-border grid gap-4 rounded-[2rem] border bg-white p-5">
                  <TextField label="Name" placeholder="Jane Smith" helper="Standard text input." />
                  <SelectField
                    label="Travel style"
                    placeholder="Choose one"
                    options={[
                      { label: "Private", value: "private" },
                      { label: "Luxury", value: "luxury" },
                    ]}
                  />
                  <TextAreaField label="Brief" placeholder="Tell us what you are imagining." />
                </div>
                <div className="grid content-start gap-4">
                  <CheckboxField label="Checkbox option" helper="Supports compact helper copy." />
                  <RadioField
                    label="Radio option"
                    name="radio-showcase"
                    helper="Used for mutually exclusive choices."
                  />
                  <div className="border-border rounded-[1.5rem] border bg-white p-5">
                    <FormLoadingState />
                  </div>
                  <FormSuccessState
                    title="Success state"
                    message="The future inquiry form can confirm submission clearly."
                  />
                  <FormErrorState
                    title="Error state"
                    message="Errors remain visible and brand-consistent."
                  />
                </div>
              </GridSystem>
            </ShowcaseCanvas>
          </ShowcaseSection>

          <ShowcaseSection
            id="reviews"
            icon={<Sparkles size={18} />}
            eyebrow="Review System"
            title="Compact and editorial trust surfaces."
            description="Reviews can appear as cards or as larger editorial quotes depending on the page moment."
          >
            <ShowcaseCanvas>
              <EditorialReview
                review={{
                  quote: "The component system should make trust feel calm, human, and premium.",
                  name: "Editorial Quote",
                  country: "Preview",
                }}
              />
              <GridSystem columns={3}>
                <ReviewCard
                  review={{
                    quote: "Clear, compact, and readable.",
                    name: "Reviewer A",
                    country: "UK",
                    rating: 5,
                  }}
                />
                <ReviewCard
                  review={{
                    quote: "Works for future customer story sections.",
                    name: "Reviewer B",
                    country: "AU",
                    rating: 5,
                  }}
                />
                <ReviewCard
                  review={{
                    quote: "Keeps all review surfaces visually related.",
                    name: "Reviewer C",
                    country: "CA",
                    rating: 5,
                  }}
                />
              </GridSystem>
            </ShowcaseCanvas>
          </ShowcaseSection>

          <ShowcaseSection
            id="loading"
            icon={<Sparkles size={18} />}
            eyebrow="Loading Experience"
            title="Skeletons, progress, and calm waiting states."
            description="Loading states should feel intentional, not broken."
          >
            <ShowcaseCanvas>
              <GridSystem columns={3}>
                <CardSkeleton />
                <div className="border-border grid gap-4 rounded-[1.75rem] border bg-white p-5">
                  <Skeleton className="h-8 w-2/3" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                  <ProgressBar value={68} />
                </div>
                <StatisticCard
                  value="68%"
                  label="Progress Bar"
                  helper="Accessible progress feedback."
                />
              </GridSystem>
            </ShowcaseCanvas>
          </ShowcaseSection>

          <ShowcaseSection
            id="states"
            icon={<Compass size={18} />}
            eyebrow="Empty States"
            title="No dead ends."
            description="Search, tour, coming-soon, and error states keep the interface calm and useful."
          >
            <ShowcaseCanvas>
              <GridSystem columns={2}>
                <NoResultsState />
                <NoToursState />
                <ComingSoonState />
                <ErrorState />
              </GridSystem>
            </ShowcaseCanvas>
          </ShowcaseSection>

          <ShowcaseSection
            id="footer"
            icon={<PanelsTopLeft size={18} />}
            eyebrow="Footer System"
            title="Brand ending, not a link dump."
            description="The footer keeps navigation, social, legal, newsletter, and contact consistent."
          >
            <ShowcaseCanvas>
              <NewsletterSignup />
              <SiteFooter
                columns={[
                  { title: "System", items: navItems },
                  {
                    title: "Internal",
                    items: [{ label: "Component Playground", href: "/component-playground" }],
                  },
                ]}
                social={[{ label: "Instagram", href: "#" }]}
              />
            </ShowcaseCanvas>
          </ShowcaseSection>
        </main>
      </div>
    </PageContainer>
  );
}

function ShowcaseSection({
  id,
  icon,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="border-border bg-background scroll-mt-28 rounded-[2rem] border p-4 md:p-6"
    >
      <div className="mb-6 grid gap-3 md:grid-cols-[1fr_0.55fr] md:items-end">
        <div>
          <div className="bg-foreground text-background mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold tracking-[0.16em] uppercase">
            {icon}
            {eyebrow}
          </div>
          <h2 className="text-3xl leading-tight font-semibold tracking-[-0.03em] md:text-5xl">
            {title}
          </h2>
        </div>
        <p className="text-muted text-sm leading-6 md:text-base md:leading-7">{description}</p>
      </div>
      {children}
    </section>
  );
}

function ShowcaseCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-border grid gap-6 rounded-[1.75rem] border bg-white p-4 shadow-sm md:p-6">
      {children}
    </div>
  );
}

function PropsTable({ rows }: { rows: Array<[string, string, string]> }) {
  return (
    <div
      id="props"
      className="border-border mt-5 overflow-hidden rounded-[1.25rem] border bg-white"
    >
      <div className="bg-foreground text-background grid grid-cols-[0.75fr_1.25fr_1fr] px-4 py-3 text-xs font-semibold tracking-[0.14em] uppercase">
        <span>Component</span>
        <span>Props</span>
        <span>Use</span>
      </div>
      {rows.map(([component, props, use]) => (
        <div
          key={component}
          className="border-border grid grid-cols-[0.75fr_1.25fr_1fr] gap-4 border-t px-4 py-3 text-sm"
        >
          <span className="font-semibold">{component}</span>
          <code className="text-muted text-xs">{props}</code>
          <span className="text-muted">{use}</span>
        </div>
      ))}
    </div>
  );
}
