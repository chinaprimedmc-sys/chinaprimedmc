# China Prime DMC V2 Travel Journal System

Sprint 7 establishes the Travel Journal, Content Hub, Article Detail Template, and Content Relationship Engine. This is a long-term content ecosystem for SEO, brand trust, and conversion, not a simple blog.

## 1. Travel Journal Hub

Route:

`/journal`

Hub structure:

1. Editorial hero
2. Featured Story
3. Editor's Picks
4. Travel Guides
5. Destination Collections
6. Experiences
7. Food & Culture visual section
8. Categories and Tags
9. Inquiry CTA
10. Footer

The hub is designed like a premium travel magazine: visual, curated, and easy to scan.

## 2. Article Detail Template

Dynamic route:

`/journal/[slug]`

Example:

`/journal/china-240-hour-visa-free-transit-guide`

Article structure:

1. Hero image
2. Title and deck
3. Author, publish date, reading time
4. Table of contents
5. Article content
6. Inline CTA blocks
7. Image gallery
8. Related destination
9. Related tours
10. Related experiences
11. Related articles
12. FAQ
13. Inquiry CTA
14. Footer

Supported content blocks:

- Heading
- Paragraph
- Image
- Quote
- CTA
- FAQ

## 3. Category System

Current categories:

- Destinations
- Travel Guides
- Visa
- Food
- Culture
- Luxury Hotels
- Festivals
- Adventure
- Family Travel
- Photography
- Luxury Travel
- Train Travel
- Nature
- History
- Shopping

The category list is centralized in `content/journal/index.ts`.

## 4. Tag System

Tags support:

- City
- Province
- Theme
- Travel style
- Season
- Audience
- Experience

Tags are structured as `{ slug, label, type }`, making them usable for filtering, SEO clusters, and relationship recommendations.

## 5. Content Relationship Engine

File:

`lib/content/relationship-engine.ts`

The engine connects:

- Destination to Tour
- Destination to Blog
- Tour to Blog
- Blog to Experience
- Experience to Destination
- Blog to Blog

Current article relationship logic:

1. Manual relationships from `article.related`.
2. Inferred destination relationships from city tags.
3. Inferred tour relationships from travel-style tags.
4. Inferred experience relationships from tag catalog.
5. Inferred related articles from shared tags.

This can later be replaced by CMS queries or search-index recommendations without changing templates.

## 6. CMS Mapping

CMS entity: `JournalArticle`

Fields:

- `slug`
- `title`
- `dek`
- `excerpt`
- `category`
- `tags[]`
- `author`
- `publishedAt`
- `updatedAt`
- `readingTime`
- `featured`
- `editorPick`
- `hero.image`
- `hero.eyebrow`
- `gallery[]`
- `content[]`
- `seo.title`
- `seo.description`
- `seo.keywords`
- `seo.canonicalPath`
- `seo.ogImage`
- `related.destinations[]`
- `related.tours[]`
- `related.experiences[]`
- `related.articles[]`

Content block mapping:

- Heading block maps to article `h2` and TOC.
- Paragraph block maps to long-form article copy.
- Image block maps to optimized figure with caption.
- Quote block maps to editorial pull quote.
- CTA block maps to shared `CtaCard`.
- FAQ block maps to article FAQ and FAQ schema.

## 7. SEO

Journal supports:

- Dynamic Metadata API
- Canonical URL
- Open Graph
- Twitter Card
- Article JSON-LD
- FAQ JSON-LD when FAQ blocks exist
- Breadcrumb JSON-LD
- Sitemap inclusion
- Semantic article structure
- Heading anchors for table of contents
- Internal links to destinations, tours, experiences, and related articles

## 8. Responsive Rules

Desktop:

- Article pages use a three-column reading layout: TOC, article, relationship note.
- Hub uses editorial cards and image-first sections.

Tablet:

- Cards move to two-column grids.
- Article reading remains centered and calm.

Mobile:

- TOC stacks above article content.
- Article text stays readable with generous line height.
- Sticky CTA is delayed and reduced to avoid covering reading content.
- Galleries and cards collapse to one column.

## 9. Motion

The system uses existing component motion:

- Hero transitions
- Card hover/image zoom
- Gallery transitions
- CTA micro-interactions

No new page-specific motion language is introduced.

## 10. Long-Term Content Operations

This system is ready for:

- Destination content clusters
- Experience content clusters
- Seasonal travel pages
- Visa and travel tip guides
- Food and culture stories
- Luxury hotel inspiration
- Future video, podcast, and downloadable guide extensions

## 11. Sprint 8 Readiness

Recommended next work:

- Search and filtering
- Destination index
- Tour index
- Experience system
- CMS adapter
- Newsletter submission
- Related-content analytics
- Article reading progress indicator
