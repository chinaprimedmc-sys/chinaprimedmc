# China Prime DMC V2 - Discovery Platform

Sprint 8 establishes the search, discovery, recommendation, favorites, recently viewed, and trip-planning layer for the public website. It is designed as a premium travel discovery experience, not an OTA-style results database.

## 1. Global Search Architecture

- Entry point: `GlobalSearch` in `features/discovery/global-search.tsx`
- Navigation integration: `components/navigation/site-navigation.tsx`
- Data source: `content/discovery/index.ts`
- Supported content types: destinations, tours, experiences, articles, and FAQ-ready records
- Search behaviors:
  - exact keyword matching
  - simple fuzzy matching
  - type filtering
  - popular searches
  - recently viewed ideas from persistent client state
  - smart suggestions while typing

The overlay uses Radix Dialog, shared badges, existing glass styling, and keeps input, suggestions, popular searches, and recently viewed content in one premium lightweight panel.

## 2. Search Results Template

- Route: `/search`
- Template: `features/discovery/search-results-template.tsx`
- Result card: `features/discovery/discovery-card.tsx`
- Planner sidebar: `features/discovery/my-trip-panel.tsx`

The page supports:

- query search via `q`
- type filtering via `type`
- advanced filters via `region`, `style`, `days`, `family`, and `private`
- empty state
- recommendation fallback
- My Trip sidebar
- inquiry CTA
- footer search clusters

Canonical metadata stays fixed at `/search` to avoid indexing infinite query combinations.

## 3. Recommendation Engine

Current implementation lives in `content/discovery/index.ts`.

Recommendation logic:

- every content item is normalized into a `DiscoveryItem`
- related items are scored by tag overlap
- candidates exclude the source item
- highest scores are returned first

Relationship paths supported:

- Destination -> Tour
- Destination -> Article
- Destination -> Experience
- Tour -> Destination
- Tour -> Article
- Tour -> Related Tour
- Article -> Tour
- Article -> Destination
- Experience -> Tour
- Experience -> Destination

Future CMS replacement should keep the same `DiscoveryItem` contract and move scoring to a service layer when content volume passes local static data needs.

## 4. Favorites System

- Store: `stores/app-store.ts`
- Action component: `FavoriteButton`
- Persistence: Zustand persist under `china-prime-dmc-discovery`
- Supported item types: destination, tour, experience, article, FAQ-ready

Favorites are intentionally anonymous and local for Sprint 8. The store shape is compatible with a future account-backed sync layer.

## 5. Recently Viewed System

- Store action: `recordViewed`
- Client recorder: `features/discovery/record-viewed.tsx`
- Integrated templates:
  - Destination Template
  - Tour Template
  - Article Template

The system stores the latest 12 viewed items and de-duplicates by item ID.

## 6. My Trip

My Trip turns discovery into a lightweight planning brief.

Users can:

- add destinations, tours, experiences, and articles
- remove saved trip ideas
- clear the plan
- email China Prime DMC with a prefilled route-idea message

Component:

- `features/discovery/my-trip-panel.tsx`

Store actions:

- `addTripItem`
- `removeTripItem`
- `clearTrip`

Future enhancements:

- drag sorting
- notes per item
- date window
- traveler count
- account sync
- inquiry form payload instead of mailto

## 7. CMS Field Mapping

Every searchable record should map into `DiscoveryItem`.

Required fields:

- `id`
- `type`
- `title`
- `description`
- `href`
- `tags`

Recommended fields:

- `image`
- `category`
- `region`
- `season`
- `travelStyle`
- `interests`
- `days`
- `luxuryLevel`
- `familyFriendly`
- `privateTour`

CMS content relationships should expose:

- related destination slugs
- related tour slugs
- related experience slugs
- related article slugs
- manual priority score
- editorial recommendation flag

## 8. SEO Configuration

- `/search` uses dynamic rendering from URL params but a stable canonical path.
- Sitemap includes `/search` only, not query combinations.
- Result links point to indexable destination, tour, and article pages.
- Advanced filter URLs are crawlable, but canonicalized to `/search`.
- Search results use semantic headings and result cards with descriptive alt text through shared media assets.

Recommended future rule:

- noindex arbitrary user-generated query pages if query volume becomes large.

## 9. Responsive Rules

Desktop:

- editorial search hero
- result list plus sticky My Trip sidebar
- filter chips remain visible above results

Tablet:

- same order as desktop, reduced image scale
- My Trip follows results if needed

Mobile:

- search overlay uses `94vw` modal width
- suggestions become single column
- result cards stack image above content
- My Trip appears below results instead of relying on a sticky sidebar
- touch targets remain rounded and at least 40px high

## 10. Motion Rules

Sprint 8 uses the shared interaction vocabulary:

- Radix Dialog transitions are reserved for search overlay and future filters drawer
- cards use existing image zoom and hover feedback
- glass styling is limited to search, nav, and floating/planner surfaces
- no decorative animation is added to search results

Future motion additions should route through the Motion System rather than page-local animation definitions.

## 11. Example Search Flow

1. Traveler opens global search from navigation.
2. Traveler types `bei`.
3. Smart suggestions show Beijing, relevant tours, and planning articles.
4. Traveler opens `/search?q=bei`.
5. Traveler filters to `Tours` and `Family friendly`.
6. Traveler saves one tour and adds it to My Trip.
7. Traveler opens a tour detail page.
8. The tour is recorded in Recently Viewed.
9. Traveler returns to search and sees the saved item and recent route.
10. Traveler clicks `Request My Customized Journey`, sending the saved ideas as the first planning brief.

## 12. Sprint 8 Completion Check

- Uses existing Design System and shared components.
- Uses existing Navigation, CTA, Badge, Image, Empty State, Footer, and Layout systems.
- Search, recommendations, favorites, recently viewed, and My Trip share one data contract.
- Supports CMS replacement without redesigning UI.
- Supports scale to 100+ destinations, 100+ tours, and 500+ articles through one index contract.
- Keeps the interface bright, readable, and premium.
