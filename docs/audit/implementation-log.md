# Implementation log (2026-11-04)

Decisions applied from `phase-2-architecture-proposal.md` §13 (all "recommended" options). Contact email deliberately **not** changed.

## Done

| Area            | Change                                                                                                                                                                                                                                       | Where                                                           |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Pricing         | Numeric prices hidden for every product. New per-product `status` (`verified-from` / `indicative` / `quote-only`). To publish a price later: confirm it, then add the slug to `verifiedPriceSlugs`. Original numbers remain in `catalog.ts`. | `content/tours/price-visibility.ts`, `catalog.ts`               |
| Pricing copy    | Removed all `US$` amounts and "starting price" wording from tour data, FAQs, service pages, landing pages, `llms*.txt`, and 12 journal articles/descriptions. Replaced with "priced individually" plus the factors that set the price.       | `content/**`, `app/**`, `features/landing`                      |
| UI              | Price sort option hidden while no prices are published; sort made safe for missing prices; label "Price on request" → "Individually priced"; detail-page label fixed.                                                                        | `components/tours`, `lib/tours`, `features/tours/detail`        |
| Structured data | No `offers` emitted without a verified price. The audit no longer requires one; it checks that any offer has a valid price.                                                                                                                  | `scripts/audit-structured-data.mjs`                             |
| Tiers           | One source of truth for tier membership: 5 Day, 11 Signature, 3 Tailor-Made examples. Service pages derive their lists from it.                                                                                                              | `content/tours/tiers.ts`                                        |
| Naming          | "Fixed itineraries" → **Signature Journeys** (URL kept: `/fixed-itinerary-china-tours`). Page rewritten so routes are adjustable starting points. "Private day tours" → **Day Experiences**.                                                 | `content/services/index.ts`, nav, footer, coverage, `llms*.txt` |
| Navigation      | Journeys menu: Day Experiences, Signature Journeys, Tailor-Made Journeys, All Journeys, plus style links. "WHY AVIORA" (pointed at a redirect) → "ABOUT AVIORA". "TRAVEL GUIDE" → "TRAVEL JOURNAL".                                          | `components/navigation/navigation-config.ts`                    |
| Home            | "Three ways to explore China" (was four); six Selected Journeys (was three); "Explore by travel style" links.                                                                                                                                | `components/home/*`                                             |
| Detail pages    | Signature and Tailor-Made example pages state that the route is adjustable.                                                                                                                                                                  | `features/tours/detail/tour-detail-landing.tsx`                 |

## Verified

`tsc`, `eslint`, `test:journey` (18/18), five journal audits, production build, all 185 sitemap URLs return 200 with no dollar amounts, structured-data audit passes, legacy redirects spot-checked.

## Not done / needs you

- Contact email `chinaprimedmc@gmail.com` (deferred).
- SEO audit still reports two **pre-existing** title-length issues (73 and 76 chars) from `content/tours/card-copy.ts`.
- Tags not yet tightened (every product still carries most traveller tags).
- 19 articles lack a product link and 14 lack a CTA; no "Plan this trip" block yet.
- HubSpot form fields not reviewed (live outside this repo).
- Merge/redirect of articles: waiting for Search Console data.
- Home evidence strip, "Est." year and traveller reviews still need factual verification.
- Muslim-friendly 13-day sits under Tailor-Made examples until its images are ready.
- Only the home page was checked visually (desktop and a 390px-wide render); the three tier pages and detail pages were checked by HTML, not screenshots.

---

# Journeys page rebuild (2026-11-04, second pass)

Built from `journeys-page-design-spec.md`. **Tags are the proposal in `journeys-tag-proposal.md`, not yet approved**: all of them live in one file, `content/tours/journey-tags.ts`, so each row can be changed in one place.

## Done

| Area                  | Change                                                                                                                                                                                                           | Where                                                                           |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Search                | Hero search with ARIA combobox suggestions, popular and recent searches, synonyms, typo tolerance, trip-length parsing ("10 days", "two weeks", "day trip"), did-you-mean, no accessibility/medical claims       | `lib/tours/journey-search.ts`, `components/tours/journey-search-box.tsx`        |
| State                 | Tier, three filters, two toggles, sort and query in the URL. Old parameters (`style`, `needs`, `travellers`, `duration`, `scope`, `type`…) still work, so the existing redirects and shared links keep resolving | `lib/tours/journey-explorer.ts`                                                 |
| Page                  | Compact hero with search, sticky tabs and filters (popovers on desktop, bottom sheet on mobile), uniform cards, "design it" card, empty and "other tabs" states                                                  | `components/tours/journeys-explorer.tsx` (+ `.module.css`), `journeys-page.tsx` |
| Removed from `/tours` | Sentence finder, lead journey, collection carousels, mobile match wizard, guides row, per-card price blocks                                                                                                      | rewiring only; the files are still in the repo                                  |
| Data                  | Server sends only card/search fields; no price field reaches the browser                                                                                                                                         | `lib/tours/journey-explorer-items.ts`                                           |
| Tests                 | 10 new tests (search habits, synonyms, typos, no accessibility claims, legacy URLs, URL round-trip, junk input); `test:journey` now 28/28                                                                        | `tests/journey-explorer.test.mjs`                                               |
| Analytics             | `search`, `search_no_results`, `tours_tier_tab_click`, `tours_filter_change`, `tours_card_click`, all behind the existing consent check                                                                          | explorer component                                                              |

## Verified

tsc, eslint (whole repo), 28 journey tests, five journal audits, production build, structured-data audit; all 185 sitemap URLs return 200 with no prices; no hydration or console errors; server renders all 19 cards (6 for `?q=pandas`, 1 for `?needs=muslim-friendly`, 7 for `?travellers=families`). Driven in a real Chrome via DevTools: tab click, typing, suggestions, arrow-key selection, Esc, filters, Clear all, URL sync, empty state.

## Not done

- Tags unapproved (see proposal). Friends / Multi-generational have almost no products.
- Old finder, catalog, mobile-match and hero components are unused by `/tours` but still in the repo (`/search` may use some). Deleting them is the next step once you approve the preview.
- Three journeys have no photograph (placeholder).
- No real-device, screen-reader or Lighthouse testing yet.
- The two pre-existing title-length SEO issues remain.

## Third pass: shared card and cleanup (2026-11-04)

- **One card everywhere**: `components/tours/journey-tile.tsx` (+ `.module.css`) now renders the journey card on `/tours`, the three tier pages, `/china-tours-from-usa` and `/luxury-china-tours`. Single-item builder: `buildExplorerItem()` in `lib/tours/journey-explorer-items.ts`.
- **Deleted** (no longer used anywhere): `journey-finder.tsx/.module.css`, `journeys-hero.tsx/.module.css`. Nothing was staged or committed.
- **Kept on purpose**: `journey-catalog`, `mobile-journey-match`, `journey-tools`, `journey-card`, `journey-filter` and `journey-groups`, because the `/search` page still uses them. Retiring them means redesigning `/search`, which is a separate decision.
- Verified: tsc, eslint, 28 journey tests, production build; Day 5 / Signature 11 / Tailor-Made 3 cards render; `/search` unchanged (19 cards, 6 for `?q=pandas`).

## Fourth pass: decisions applied, detail-page related block (2026-11-04)

- **Tags finalised** (all recommendations accepted by delegation): rows 14, 15, 16, 19 keep an empty "who"; "Friends" and "Multi-generational" are not offered until a journey supports them (restore by adding them to `whoTags` in `content/tours/journey-tags.ts`); no "Business" tag; "Pandas & wildlife" kept; Muslim-friendly only on the one purpose-built journey. A test now guarantees every offered "who" tag has at least one journey.
- **Detail pages**: "You might also like" now uses the shared card (3 per page). Dead related-block imports and CSS removed.
- **Deliberately not done**: a full redesign of `/tours/[slug]` (about 30,000px long, 12 sections, about 4,000 lines of CSS, tied to structured data, price configuration and enquiry tracking). It needs its own audit and prototype first.
- Verified: tsc, eslint (whole repo), 29 journey tests, two journal audits, structured-data audit, production build; 185 sitemap URLs return 200 with no prices.

---

# Conversion pass: HubSpot form everywhere (2026-11-04)

## Problem

The HubSpot form existed only on the home page, `/start-planning` and four service pages. Every "Plan my trip" button (about 46 in code and 59 mentions in articles) sent the visitor to `/start-planning`, one more page away. The pages with the strongest intent (journey details, the Journeys list, 128 articles, destinations) had no form.

## Built

| Piece                      | What it does                                                                                                                                                                                                                                                                                                                                    | Where                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Enquiry dialog**         | Any plain left-click on a link to `/start-planning` opens the form in place (bottom sheet on phones, centred panel on desktop). Native `<dialog>`: focus trap, Esc, focus returns to the button. Without JavaScript, with Ctrl/Cmd/middle click or a new tab, the link still navigates. Links carrying `match` or `journeys` navigate as before | `components/forms/enquiry-dialog.tsx` (mounted in `app/layout.tsx`) |
| **Inline enquiry section** | Heading, three promises (no payment; reply normally within a day; written proposal), the HubSpot form, WhatsApp and email alternatives. If the page has one, a click on any Plan button scrolls to it instead of opening a second form, so a page never holds two HubSpot instances                                                             | `components/forms/enquiry-section.tsx`                              |
| **Lazy loading**           | HubSpot's script loads only when the form is within about 600px of the viewport (or when the dialog opens). Nothing loads on first paint                                                                                                                                                                                                        | `components/forms/lazy-hubspot-form.tsx`                            |
| **Placed on**              | journey detail pages (replaces the old closing banner), Journeys list (replaces its closing banner), all journal articles, destination pages, the two landing pages, About, FAQ, Contact. 161 of 185 sitemap pages now carry the inline form; the rest (legal, reviews, etc.) get the dialog                                                    | see list in the diff                                                |
| **Events**                 | `enquiry_open`, `enquiry_scroll`, `enquiry_form_view`, plus the existing `generate_lead` on submit; all behind the analytics-consent check                                                                                                                                                                                                      | dialog and section                                                  |

## Verified in a real browser

Click on a Plan button: detail page, Journeys list and article scroll to the inline form; `/reviews` (no inline form) opens the dialog; Esc closes it and unmounts the form. Before any click, 0 HubSpot containers exist (lazy loading works). The real three-step HubSpot form appears inside the dialog on a phone-width screen (dev server). tsc, eslint, 29 tests, five journal audits, structured-data audit, production build; 185 URLs return 200 with no prices.

## Caveats

- **Locally the production build (`next start` over http) cannot show the form**: the CSP only allows https HubSpot frames, same as the existing `/start-planning` page. On the live https site it is fine; I confirmed the form renders in the dev server.
- **HubSpot cannot receive extra fields from us** (the embed has no hidden-field input), so the journey a visitor was asking about is shown on the page but is not sent as a field. HubSpot does record the page URL of each submission, which identifies the journey page.
- The form itself is HubSpot's three-step design (navy button, pale-blue fields). Its colours and fields are set in HubSpot, not in this repo.
- Reply-time wording reuses the site's existing "normally within a day" and is still unverified.
- Two pre-existing SEO title-length issues remain.

---

# Reviews page rebuilt like a review platform (2026-11-04, not deployed)

Owner stated all 177 reviews are real and asked not to remove any; no Google or TripAdvisor page exists; willing to send post-trip review requests via HubSpot. **No per-review source records were provided**, so the page deliberately shows no "Verified" badge, no review dates (every record carries the same date) and no review structured data.

- `/reviews` is now a platform-style page, not cards: score summary (4.9, stars), rating distribution bars, "Reviews that mention" topics (Hotels 164, Guides 135, Private transport 94, Pace 47, Value 29), language filter, search, sort (Top, Highest, Lowest, Most detailed), and a vertical list of rows. **Full text expands in place** ("Read more"), no dialog and no page change. 12 reviews at a time ("Show 12 more"). On phones the filters open in a bottom sheet. State lives in the URL (`?lang=de&rating=5&mentions=hotels&q=…&sort=high`).
- Enquiry form added at the bottom of the page; the old green eyebrow replaced with neutral.
- Removed the now-unused tile, dialog and archive components. New: `lib/reviews/review-board.ts`, `components/reviews/reviews-board.tsx` (+ css), `tests/review-board.test.mjs` (7 tests; `test:journey` now 36/36).
- Verified in real Chrome: 12 rows, Show more to 24, Español filter to 71, in-place expansion, search, mobile sheet. tsc, eslint, tests, audits, build.
- **Not done**: placing review quotes next to forms, on journey pages (matched to the journey) and on articles; the old home/Journeys/detail review blocks still show excerpts. Reviews carry no journey or travel month, so matching them to a journey needs that data from the owner.
- Search for "pandas" returns 0: none of the 177 reviews mentions pandas or the Great Wall.

## Reviews, follow-up (2026-11-04, not deployed)

- **Quote beside every enquiry form**: one real review sentence (Michael Thompson, Boston) now appears in the shared enquiry section, so it shows on journey details, the Journeys list, articles, destinations, FAQ, About, Contact and `/reviews`. Held in a tiny static module (`content/home/form-quote.ts`) so the 2,600-line reviews file stays out of the browser bundle (checked: 0 static chunks contain review data). A test enforces that the sentence appears verbatim in the public reviews.
- **Evidence fields** added to the review type as optional: `journey`, `travelMonth`, `travellers`, `verifiedOn`. The reviews page shows "Travelled <month> · <party>" and a **Verified** mark only when those exist. A test asserts no existing review carries `verifiedOn`.
- **Post-trip review request** drafted in `docs/audit/post-trip-review-request.md` (email copy, five form fields, HubSpot properties, consent wording, Google Business Profile steps, the no-gating and no-incentive rules).
- tsc, eslint, 37 tests, audits, build pass.

---

# Trust woven through the whole site (2026-11-04, not deployed)

Reviews were an isolated page plus one quote. They now follow the visitor's doubts: the proof appears next to the thing being doubted.

| Where                                                                                   | What the visitor sees                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Every journey page, hero**                                                            | A rating line (stars, 4.9, "from 177 guest reviews") linking to `/reviews`                                                                                                                                                                                                                    |
| **Beside the hotels list**                                                              | "Guests on the hotels": two whole paragraphs from real reviews that talk about hotels, each with "Read the full review"; day tours get "Guests on private transport" instead                                                                                                                  |
| **Beside the guide profile**                                                            | "Guests on their guides": two paragraphs about guides                                                                                                                                                                                                                                         |
| **Before the related journeys**                                                         | "Guests on the pace and comfort": three paragraphs                                                                                                                                                                                                                                            |
| **Journeys list**                                                                       | Replaces the generic three-quote band with one hotels, one guides, one pace quote                                                                                                                                                                                                             |
| **Articles**                                                                            | One or two voices chosen by the article's topic (hotel articles get hotels, cost articles get value, senior or family articles get pace, transport articles get transport, the rest guides)                                                                                                   |
| **Every enquiry form** (journeys, articles, destinations, FAQ, About, Contact, reviews) | Rating line, one real quote, and four verifiable promises: licensed China operator (registered in Guangzhou), route/hotels/inclusions/price in writing before you pay, no compulsory shopping and no payment to enquire, a specialist replies normally within a day; link to the company page |
| **`/reviews`**                                                                          | Each in-page quote links to `?review=<id>`, which shows that one review in full, with a link back to all 177                                                                                                                                                                                  |

Rules built in: quotes are whole, unaltered paragraphs (a test checks each against the source); passages that depend on earlier text ("those problems", openings like "It…" or "But…") are excluded; English only on the English site; different pages show different reviews (seeded per page, stride-sampled; the "pace" pool has only 12 candidates, so some overlap there is unavoidable); no review structured data, no "Verified" mark, no review dates; no review text in the browser bundle (0 static chunks).

Verified: tsc, eslint, 40 tests, five journal audits, structured-data audit, production build; 185 sitemap URLs return 200, none with prices or review schema; 148 pages carry in-context guest voices. Checked in real Chrome (desktop and phone width).

Removed: the redundant trust strip and the old generic review blocks.

- Home and Journeys trust strip: 'Guest reviews / Written by travelers after they came home' replaced by 'No hidden costs / What is included, what is not, and every optional extra, in writing before you pay' (2026-11-04, not deployed).

---

# Motion system (2026-11-04)

**Why**: motion was fragmented (home only; the `.home-reveal` styles were never triggered by any component), there was no route transition (`PageTransition` was an empty div), and 108 `:hover` rules stuck on phones after a tap.

**Principles**: only `opacity`, `translate`, `scale` (compositor-only, CLS about 0); the individual `translate`/`scale` properties never collide with a component's own `transform`; one soft deceleration curve; everything behind `prefers-reduced-motion: no-preference`; content is always in the server HTML and visible without JavaScript.

| Layer              | What it does                                                                                                                                                                                                                                                                                                                                                                              | Where                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Tokens and rules   | One easing, durations, mobile-specific distances                                                                                                                                                                                                                                                                                                                                          | `styles/motion.css`                                                   |
| Scroll reveal      | Below-the-fold headings, quotes, figures, cards, list items, FAQ items fade up in a short stagger as they enter. **Only elements below the fold are ever hidden, and only after JS runs**, so the first screen never flashes and LCP is unaffected. Skipped inside the header, footer, dialogs, suggestion panels and horizontal swipe rows. Any error falls back to "everything visible" | `components/motion/motion-controller.tsx`                             |
| Hero entrance      | Text rises in a stagger (eyebrow, title, route, rating), the photo slowly settles from 1.09 to 1                                                                                                                                                                                                                                                                                          | journey detail and Journeys heroes (`.motion-rise`, `.motion-settle`) |
| Hero drift         | Desktop only, only where the browser supports scroll-driven animation: hero copy drifts up and fades as you scroll past                                                                                                                                                                                                                                                                   | `.motion-drift`                                                       |
| Route change       | Soft fade on in-site navigation only; no animation on first load; opacity only, so the fixed header and sticky bars keep working                                                                                                                                                                                                                                                          | `app/template.tsx`                                                    |
| Filter results     | Cards that appear after a filter, tab or search rise in a stagger (not on first load, not on every keystroke for existing cards)                                                                                                                                                                                                                                                          | `[data-stagger-in]`                                                   |
| Dialogs and sheets | Enquiry dialog and both filter sheets ease in and out (bottom sheets slide up from the edge on phones)                                                                                                                                                                                                                                                                                    | global `dialog` rules plus the three modules                          |
| Touch              | Press feedback on every button (`scale: .965`), cards sink under the finger, no tap highlight, no 300ms delay                                                                                                                                                                                                                                                                             | `styles/motion.css`                                                   |
| Sticky hover       | All 89 `:hover` rules in 21 files now live inside `@media (hover: hover)`; `:focus-visible` rules untouched; repeatable and idempotent                                                                                                                                                                                                                                                    | `scripts/scope-hover-to-pointer.mjs`                                  |

**Switched off** (no reveal at all) for: `prefers-reduced-motion`, Save-Data, devices reporting 2GB RAM or less.

**Verified in real Chrome** (desktop 1440, phone 390 with touch and no hover, reduced-motion): hidden above the fold 0; stuck-invisible after scrolling to the bottom 0; layout shift 0.0006 desktop, about 0.004 phone; long tasks 0; sticky-hover rules on a no-hover device 0; server HTML contains no `data-reveal`; dialogs open and fully close (display returns to none); header stays fixed and sticky bars stay sticky after a route change; the leftover element found in the phone home swipe row led to the swipe-row exclusion. tsc, eslint, 40 tests, five journal audits, structured-data audit, build, 185 sitemap URLs.

---

# Slow-paced 9-day page, from `claude_code_optimization_spec.md` (2026-11-05, not deployed)

Owner confirmed in writing that every service in the spec is provided and guaranteed (Mercedes vans with 15-minute pre-conditioning, zero-stair Mutianyu via gondola to Watchtower 14, porters and VIP station channel, 3:30 PM hotel return, portable seats, Whisper audio, pre-vetted Western restrooms, dietary concierge, 24/7 international medical channel, large-print cards, digital wallet service, daily step budgets). Applied to the spec's own URL.

- Data: `content/tours/slow-paced-golden-triangle.ts` (merged in `content/tours/index.ts`): nine rewritten days with transit and step budget, 10 care commitments, difference callout, dining/restroom/accessibility standards, 8 new FAQs (25 in schema), nights now 3 Beijing / 3 Xi'an / 2 Shanghai.
- Page: hero summary and highlights, "The AVIORA difference", 10 numbered care cards, day cards with Transit and Daily step budget rows (single column on phones), standards section, then the existing HubSpot form. H1 and title per spec; the title was shortened to the site's 70-character rule.
- Catalog and cards: new headline, description, pace label, highlights, best-for; new "Multi-generational" who-tag (this journey backs it); "medical" now searchable for this journey only.
- Internal links: three senior articles link with the anchor "our 9-day senior-friendly private tour".
- Deviations from the spec: no price or colour changes (neutral palette); "East Gate" drop-off written as "nearest step-free gate" (the Forbidden City is entered through the Meridian Gate); Xi'an to Shanghai written as 5.5 to 6 hours; invented meals removed ("other meals as set out in your written proposal"); reply time "normally within a day", not "within 24 hours"; "Zhuujiajiao" corrected to Zhujiajiao; form stays after the FAQ block, as on every page.
- Verified: tsc, eslint, 41 tests, journal audits, structured-data audit, build, 185 URLs (no prices).

---

# 10-day refactor of the slow-paced page (2026-11-05, not deployed)

Per `claude_code_optimization_spec (1).md` / `(2).md` (identical): the tour is **10 days / 9 nights**, not compressed. Slug `/tours/beijing-xian-shanghai-private-9-day-tour` unchanged.

- Ten day cards (Day 01 to Day 10) from the spec, each with Transit and Daily step budget; stays: Beijing nights 1-3, Xi'an nights 1-3, Shanghai nights 1-3, Day 10 departure.
- Title "Slow-Paced Beijing Xi'an Shanghai 10-Day Private Tour | AVIORA" (shortened from the spec to fit the 70-character rule), H1 per spec, description shortened to the 165-character rule; schema `duration: P10D` (derived from the itinerary length), confirmed in the rendered JSON-LD.
- Updated everywhere it appears: catalog (10 days / 9 nights, recommended days 10), home and destination cards (including ISO duration), cross-sell cards on other tours, FAQ (cost, "Is 10 days enough"), inquiry texts, mailto/WhatsApp, llms.txt, journal prose (about 60 lines), the three senior-article anchors now read "our 10-day senior-friendly private tour". Slugs and URLs were protected and not changed.
- Test expectation updated from "9 Days" to "10 Days". tsc, eslint, 41 tests, journal audits, structured-data audit, build; 185 URLs return 200 with no prices and no remaining 9-day wording for this tour.
- Not touched: the article comparing "9 days or 11 days in China" keeps its own 9-vs-11 framing (and the 11-day product is now 12 days); the spec's long meta title and description were shortened.

---

# Follow-up (2026-11-05)

- Owner supplied verified pricing for the 10-day tour: **Starting from $3,800 per person**, range **$3,800–$6,500 per person**, varying by hotel selection, season and party size. Shown only on `/tours/beijing-xian-shanghai-private-9-day-tour` (new "Pricing transparency" block, black/white/gray) and in a new first FAQ "How much does this 10-Day Private Golden Triangle Tour cost?" (in the FAQPage schema; the old generic cost FAQ was removed). All other journeys remain "Individually priced"; no Offer schema was added.
- The "9 days or 11 days in China" article keeps its framework; its product anchor is now "Our 10-day senior-friendly private tour" pointing at the 10-day page.
- The two over-long SEO titles are fixed by overrides (the audit counts HTML-escaped length, so `&` costs 5 characters). `audit:seo` now passes for all 185 URLs.
- Tour detail pages: the aside booking card now holds the HubSpot form (replaces the Plan button); the bottom enquiry section was removed from detail pages so each page has one form; the 10-day price is labelled US$ everywhere (US$3,800, US$3,800–US$6,500, 'All prices are in US dollars (USD)'). Not deployed.

---

# Three senior-care articles (2026-11-05, not committed, not deployed)

Added from the owner's spec as journal articles (the site's blog lives at `/journal/`; `/blog/<slug>` now 308-redirects to `/journal/<slug>`): `how-to-visit-great-wall-without-climbing-stairs`, `slow-paced-china-tour-for-seniors-itinerary-guide`, `is-china-safe-for-elderly-travelers-senior-care-guide`. Each carries the anchor "our 10-day senior-friendly private tour" linking to the 10-day page, is registered in the manifest, route slugs, search strategy, journey links, editorial upgrades, audience-experience data and the markdown loader.
Edits to the supplied copy: removed claims not in the confirmed service list (VIP vehicle pass and "1,500 meters saved", "queue-free", executive lounge and spa, 180 mph, hotel brand names, allergy cards, grab bars, sanitation kits, hydration, "ultra-low crime", competitor schedule figures stated as fact); absolute competitor table reworded as "varies by operator"; ASCII box turned into a list; added a short "Questions travelers ask" section to each (the site's audit requires 650+ words); SEO title of article 1 shortened to 61 characters (limit 65).
Verified: tsc, eslint, 41 tests, five journal audits, SEO audit (188 URLs), structured-data audit, build; all sitemap URLs 200.
