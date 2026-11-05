# Journeys page (`/tours`) — Optimization Proposal

Date: 2026-11-04 · Status: **proposal only, no code changed.**
Measured from the production build running locally (desktop 1440px, mobile 500px) and from the source.

---

## 1. Diagnosis: why it feels complicated

The page has one job: help a visitor pick one of 19 journeys and start an enquiry. It currently does that through **too many parallel mechanisms**, each added for a good reason, none removed.

| What a visitor meets, top to bottom                                                 | Role                       |
| ----------------------------------------------------------------------------------- | -------------------------- |
| Full-height photo hero                                                              | Brand                      |
| Definition + big statement + 3 proof facts                                          | Trust                      |
| **"I'm traveling … with … hoping to see …" sentence finder**                        | Discovery #1               |
| **A "lead" journey (the 9-day), large**                                             | Discovery #2               |
| **3 themed collections (carousels with arrows)**                                    | Discovery #3               |
| **"Explore every possibility": type tabs, city chips, search, filter dialog, sort** | Discovery #4               |
| **Separate mobile "match" wizard**                                                  | Discovery #5 (mobile only) |
| Review band, 4 steps, 3 guide links, FAQ, closing photo + CTA                       | Trust / info               |
| Sticky mobile action bar                                                            | CTA                        |

Evidence:

- **11 filter dimensions for 19 products**: format, scope, region, duration, travel style, planning need, query, sort, collection, experience, pace. With 19 items, most combinations return 0 to 3 results.
- **5 discovery mechanisms** that overlap. The same journey appears up to three times (lead, collection, results).
- **Four listing pages compete**: `/tours` plus the three tier pages (`/private-china-day-tours`, `/fixed-itinerary-china-tours`, `/tailor-made-china-tours`) now show overlapping lists.
- **Page length**: over 9,000px on desktop, about 12,000px on mobile, before the FAQ.
- **Cards carry 8 layers**: type, status, title, description, "best for", three highlights, price block, CTA, plus duration and badge on the photo. Since prices are hidden, **19 cards repeat the identical lines "Individually priced / Priced for your dates and group"**. That is pure noise now.
- **Code weight**: about 6,000 lines across the listing page, of which the mobile match wizard (about 1,450 lines with CSS) and the sentence finder (about 850) exist only to solve a discovery problem that 19 items don't have.
- **Tier language is not visible**: after the recent renaming, the page that is called "Journeys" never says "Day Experiences / Signature Journeys / Tailor-Made".

What works and must stay: strong photography, the quiet editorial look, server-rendered full list and JSON-LD for SEO, URL-shareable filters, WhatsApp/Plan CTAs.

## 2. Design principles

1. **One decision at a time, max three.** Choose a type of trip, narrow once or twice, open a journey.
2. **19 items don't need a search engine.** Show them all, well organised, and let three light filters trim.
3. **Show the tier.** The three tiers are the primary navigation of this page.
4. **One card, one look, one click.** No repeated filler lines.
5. **Everything below the list serves the enquiry**, not more browsing.
6. **No behaviour lost for crawlers or old links.**

## 3. Proposed page

```
┌────────────────────────────────────────────────────────────┐
│ Header                                                     │
├────────────────────────────────────────────────────────────┤
│ Compact hero (≈ 280px, photo + H1 + one line)              │
│  "Private journeys across China"                           │
│  "Every journey is priced for your dates and group."       │
├────────────────────────────────────────────────────────────┤
│ [ All 19 ] [ Day Experiences 5 ] [ Signature 11 ] [ Tailor-Made ]  ← tier tabs, sticky
│ Length ▾   Who's travelling ▾   Interest ▾   (Clear)       │  ← 3 filters max, sticky
├────────────────────────────────────────────────────────────┤
│ 12 journeys                                                │
│ ┌────────┐ ┌────────┐ ┌────────┐                           │
│ │ photo  │ │ photo  │ │ photo  │   uniform cards, 3 cols   │
│ │ title  │ │ title  │ │ title  │                           │
│ └────────┘ └────────┘ └────────┘                           │
│ … after the 6th card: "Don't see it? Design your own" card │
├────────────────────────────────────────────────────────────┤
│ How it works (4 steps, one row)                            │
├────────────────────────────────────────────────────────────┤
│ 3 traveller quotes (one row)                               │
├────────────────────────────────────────────────────────────┤
│ FAQ (4 questions)                                          │
├────────────────────────────────────────────────────────────┤
│ Closing CTA                                                │
└────────────────────────────────────────────────────────────┘
```

Target length: about 3 screens to reach the full list, about 5 screens for the whole page.

### 3.1 Tier tabs (the main change)

- Segmented control: **All · Day Experiences · Signature Journeys · Tailor-Made Journeys**, with counts. Driven by `tiers.ts`, so tier membership has one source.
- Selecting a tab updates `?tier=` and the list, with no page reload.
- Each tab shows a one-line explanation under the control ("A private day with your own guide and driver" / "Defined routes, adjusted to you" / "Designed from a blank page"). This is where the tier model finally becomes visible.
- Tailor-Made tab shows the 3 example journeys plus a prominent "Design my trip" card, not a catalogue.

### 3.2 Filters: from 11 dimensions to 3 (+2 toggles)

| Keep                 | Values                                                                         | Replaces                                                |
| -------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------- |
| **Length**           | 1 day · 3–7 · 8–12 · 13+                                                       | duration, format, one-day                               |
| **Who's travelling** | Family · Couples · First-time · Multi-generational                             | travel style (family/first-trip), need (child-friendly) |
| **Interest**         | Culture & heritage · Nature · Food · History · Pandas & wildlife · Slow travel | style, experience, focus                                |

Plus two **service-attribute toggles** (kept because they are real differentiators and have dedicated products and articles): **Easier pace** and **Muslim-friendly**.

Moved out of the UI: region (replaced by destination chips on the Destinations pages), scope, collection, pace, sort, search box, the remaining "planning needs". **The URL parser keeps accepting every old parameter** (`style`, `needs`, `travellers`, `destination`…) and maps it to the new filters, so the ~15 existing redirects and any shared link keep working.

Sorting: fixed, by length within each tier. No sort control (nothing to sort by while prices are hidden).

### 3.3 Card

```
┌──────────────────────────┐
│ photo (4:3)              │
│ ┌────────┐               │
│ │12 days │  ← chip       │
│ └────────┘               │
├──────────────────────────┤
│ SIGNATURE · BEIJING · … │  ← tier + route, small caps
│ Title (2 lines max)      │
│ One-line positioning     │
│ [Family] [Slow travel]   │  ← max 2 tags
│ View journey →           │
└──────────────────────────┘
```

- Removed from cards: "Best for" paragraph, the 3 highlights, status label, per-card price block.
- Price: **one note above the grid** ("Every journey is individually priced for your dates and group"). A per-card price line only returns for products in `verifiedPriceSlugs`, with the real "From" amount.
- Whole card is one link; the CTA text is a hint, not a second target.
- Journeys with pending photography are placed last within their tier, with a neutral placeholder, not hidden.
- Highlights and "best for" stay on the detail page where they belong.

### 3.4 What gets removed or moved

| Today                                 | Proposal                                                                                                                                                       |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sentence finder                       | Remove from `/tours`. Replace with the three filters. (Keep the home-page version and the `journey-match` library: `/start-planning` still reads its answers.) |
| Mobile match wizard                   | Remove; mobile gets one bottom-sheet with the same 3 filters                                                                                                   |
| Lead journey + 3 collection carousels | Remove; tier tabs plus a fixed order replace them                                                                                                              |
| Reviews band, steps, guides           | Merge into one "How it works" row, one quotes row; drop the guides row (journal is in the nav)                                                                 |
| Statement + proof                     | Shrink to the hero subline plus a 3-item trust strip under the list                                                                                            |

## 4. Mobile

- Tabs become a horizontally scrollable pill row, sticky under the header.
- A single **Filters** button opens a bottom sheet with Length / Who / Interest and the two toggles, with a live "Show 7 journeys" button.
- Cards in one column, 16:10 image, same content as desktop.
- Keep the existing sticky "Plan my journey" and WhatsApp bar.
- Hero reduced to about 40% of viewport height.

## 5. Relationship to the tier pages

Avoid two systems that drift apart:

- `/tours` is the **"All" view** and the shared component.
- Each tier page (`/private-china-day-tours`, `/fixed-itinerary-china-tours`, `/tailor-made-china-tours`) **reuses the same card grid** below its own hero and explanation, pre-filtered. They remain the indexable, keyword-targeted pages for each tier.
- `?tier=` on `/tours` stays canonical to `/tours` (as today, so no new duplicate URLs). The tab also offers a plain link to the tier page ("See all Day Experiences →").

## 6. SEO, accessibility, performance

- **Server render all 19 cards and the `ItemList` JSON-LD as now**; client filtering only hides cards. Crawlers see the same list.
- Tabs and filters are real `<button>`/`<fieldset>` controls with `aria-pressed`, a polite live region ("7 journeys"), and keyboard support. Replaces carousel arrows (hard to use, hidden content).
- One `<h1>`; tier names as `<h2>` only for the active explanation.
- Smaller client bundle: removing the wizard, sentence finder and carousels removes the heaviest client code on the route. Expect a visible drop in JS and CSS for `/tours`; to be measured with `next build` output and Lighthouse before and after.
- Images: 3-column grid with proper `sizes`; first row `priority`, the rest lazy.

## 7. Measurement (no invented baselines)

There is no baseline data in the repo. Before shipping, record 2–4 weeks of the current page, then compare on the same events:

| Event                                     | Question it answers                                     |
| ----------------------------------------- | ------------------------------------------------------- |
| `tours_tier_tab_click` (tier)             | Do visitors use the tiers?                              |
| `tours_filter_change` (filter, value)     | Which filters matter?                                   |
| `tours_card_click` (slug, position, tier) | Which journeys get attention; does position bias exist? |
| `tours_enquiry_start` (source)            | Does the page lead to enquiries?                        |
| Existing GA4 form and WhatsApp events     | Final conversion                                        |

Success = more card clicks per visit and more enquiry starts per visit, with no loss of qualified enquiries. Decide thresholds after the baseline, not now.

## 8. Implementation plan

| Step | Work                                                                                                  | Notes                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1    | New `JourneyGrid` (tabs, 3 filters, 2 toggles, card) reading `tiers.ts` and the catalog               | Shared by `/tours` and the three tier pages                              |
| 2    | Filter-state adapter: old URL params → new filters                                                    | Keeps legacy links and redirects; extend `tests/journey-filter.test.mjs` |
| 3    | New card; drop per-card price lines unless verified                                                   | Uses `priceStatus` already in the catalog                                |
| 4    | Rebuild `/tours` page: compact hero, grid, how-it-works, quotes, FAQ, closing                         | Remove finder, collections, wizard from this route                       |
| 5    | Point tier pages at the same grid                                                                     |                                                                          |
| 6    | Delete dead code and CSS; update tests (`journey-match` tests stay because `/start-planning` uses it) | Roughly halves the listing code                                          |
| 7    | Add analytics events; verify build, audits, mobile and desktop screenshots, accessibility pass        |                                                                          |

Each step is shippable on its own; steps 1–4 are the visible change.

## 9. Risks

- **Fewer ways to find a journey** may feel like lost power for repeat visitors. Mitigation: URL filters still work, and with 19 items everything is two clicks away.
- **Sentence finder was a deliberate brand moment.** It stays on the home page.
- **Tailor-Made tab** must not look empty; hence the example journeys plus the design-your-own card.
- **Legacy parameters** must keep resolving; covered by step 2 and tests.
- Pending-photo journeys (3) look weaker in a uniform grid; consider holding them back from "All" until photography is ready, your call.

## 10. Decisions I need from you

1. **Tier tabs as the primary control** (recommended), or three large entry cards at the top?
2. **Remove the sentence finder and mobile wizard from `/tours`** (recommended; the home page keeps the sentence)?
3. **Hide the three pending-photo journeys** from the "All" view until images are ready, or show them with placeholders?
4. **Keep the two service toggles** (Easier pace, Muslim-friendly)?
5. **Reviews on this page**: keep one row of three quotes (recommended), or remove?
6. Are the review quotes and the "Since 2018 / 177 reviews / within a day" claims verified? (Still open from Phase 1.)

On approval I will start at step 1 and show you a local preview after steps 1–4, before deleting anything.
