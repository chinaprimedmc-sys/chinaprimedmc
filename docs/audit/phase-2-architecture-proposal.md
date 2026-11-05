# AVIORA Phase 2 — Proposed Product Architecture

Date: 2026-11-04 · Status: **proposal only. No content, product, article or URL has been changed.**
Builds on `phase-1-site-and-product-audit.md`. Everything marked **[ASSUMPTION]** was not confirmed and should be corrected if wrong.

## 0. Inputs and standing assumptions

- **Prices are unverified** (confirmed by you). The proposal therefore treats _no numeric price as publishable_ until each is confirmed (§7).
- Demand, margin and search data do not exist in the repo, so **nothing here ranks products by popularity or profit**. Selection uses only facts visible in the code (completeness, image readiness, fit with the tier definition). Scoring from the brief's §5 is reserved for when data arrives.
- Questions from Phase 1 §9 that are still open are handled with a stated default **[ASSUMPTION]** in §3.

---

## 1. Final category structure

Three tiers, named exactly as in the brief. Existing URLs are kept (brief §7).

| Tier | Public label             | URL (unchanged)                | Role                                      | Page type                        |
| ---- | ------------------------ | ------------------------------ | ----------------------------------------- | -------------------------------- |
| A    | **Day Experiences**      | `/private-china-day-tours`     | Low-commitment entry point                | Product list                     |
| B    | **Signature Journeys**   | `/fixed-itinerary-china-tours` | Core multi-day discovery and enquiry      | Product list                     |
| C    | **Tailor-Made Journeys** | `/tailor-made-china-tours`     | Service and process page                  | Service page, not a product list |
| —    | All Journeys             | `/tours`                       | Full finder across tiers with tag filters | Existing catalog                 |

Why keep `/fixed-itinerary-china-tours`: the URL says "fixed", which slightly contradicts the brief ("a starting point, adjustable"). I still recommend keeping it for now: it may already hold rankings (unknown), and changing it costs a 301 for a wording gain. **Change the title, H1 and nav label; revisit the slug only once Search Console data exists.** If you prefer a clean `/signature-journeys`, the cost is one 301 plus updating sitemap, internal links and `llms.txt`.

**Tier is data, not a hard-coded list.** Today tier membership lives in three slug arrays in `content/services/index.ts`. Proposal: add one `tier: "day" | "signature" | "tailor-made-example"` field per catalog item and derive the lists from it, so reclassifying is a one-line change.

## 2. Tag vocabulary (cross-cutting, never a fourth tier)

Three independent dimensions. A product can carry several, **but only where it genuinely fits** (Phase 1 found almost every product tagged for almost every traveller type, which makes filters useless).

| Dimension   | Values                                                                                                                                                                                | Maps to existing field                                             |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Traveller   | Family · Couples · First-Time Visitors · Friends · Multi-Generational · Solo (only if actually served)                                                                                | `travelerFilters`                                                  |
| Interest    | Culture & Heritage · Food & Local Life · Nature & Landscapes · History · Adventure · Architecture · Photography · Slow Travel                                                         | `experienceFilters` / `styleFilters` (vocabulary to be normalised) |
| Destination | Only places with a live product or destination page: Beijing, Xi'an, Shanghai, Chengdu, Chongqing, Zhangjiajie, Guilin/Yangshuo, Yunnan. Guizhou is **not** listed: no product exists | `destinationFilters`                                               |

Rules:

1. Max **3 traveller tags** and **3 interest tags** per product, chosen by an editor, not auto-filled.
2. "Older travellers", "private groups" and "Muslim-friendly" exist today as filters. They are real, useful service attributes but are not in the brief's tag list. **Proposal:** keep them as _service attributes_ ("Easier pace", "Muslim-friendly") in the finder and on cards, separate from the three dimensions above. **[ASSUMPTION: you want to keep them. They are a genuine differentiator, with a dedicated product and 8+ articles.]**
3. "Yunnan" should become a destination tag; today it appears only as Dali/Lijiang/Shaxi/Shangri-La.

## 3. Tier assignment of the current 19 products

| Tier                                                                                        | Products                                                                                                                                                                                                                                                                                                          | Count |
| ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **Day Experiences**                                                                         | Mutianyu Great Wall · Xi'an Terracotta · Shanghai · Chengdu Pandas · Guilin–Yangshuo Li River                                                                                                                                                                                                                     | 5     |
| **Signature Journeys**                                                                      | Beijing–Xi'an–Shanghai 9d · Beijing–Xi'an–Chengdu–Shanghai 12d* · China at an Easier Pace 12d · Family with Pandas 12d · Chengdu–Chongqing–Zhangjiajie 11d · Luxury Yunnan 10d · Shanghai–Zhangjiajie 8d · Chengdu–Jiuzhaigou 7d · Xi'an–Beijing 6d · Chengdu Pandas & Sichuan Table 5d · Beijing & Great Wall 5d | 11    |
| **Tailor-Made examples** (shown on the Tailor-Made page, still reachable at their own URLs) | Muslim-friendly 13d · Qingcheng Wellness 10d · Guangzhou–Shenzhen Business 4–7d                                                                                                                                                                                                                                   | 3     |

\*URL says "11-day", route is 12 days. Keep the URL (redirects depend on it); fix the visible title only.

**[ASSUMPTION]** Reasoning for the three Tailor-Made examples: their own copy says "fully tailored", "4–7 days, not a fixed package" or depends on date-specific supply; two have pending images. Muslim-friendly could equally be a Signature Journey with a "Muslim-friendly" service attribute — **this is your call**; I lean to Signature once its images are ready, because it is a defined route and a real differentiator. Until then it stays out of the Signature grid.

### Brief targets vs. reality

- Day Experiences: 5 vs. 6–10 suggested. **Don't pad.** Chongqing or other days only if a real, deliverable product exists.
- Signature Journeys: 11 on the list page vs. 5–8 suggested. The brief's range is a _display_ target; see §4 for the home selection. Nothing is deleted. Some overlaps (5d Beijing inside the 9d route; 5d Chengdu inside the 7d) should be reviewed for merging **after data exists**, not now.

## 4. Home page selection (Selected Journeys module)

Criteria — facts only: (a) tier = Signature, (b) images ready, (c) full itinerary content present, (d) no price claim needed, (e) variety of destinations and traveller fit. **Not** popularity.

Proposed 6 (home shows 6, list page shows all 11):

1. Beijing, Xi'an & Shanghai: A Private First Journey (9d) — first-time
2. China at an Easier Pace (12d) — slow travel / multi-generational
3. Family Tour with Pandas (12d) — family
4. Luxury Yunnan (10d) — nature + culture
5. Chengdu · Chongqing · Zhangjiajie (11d) — nature + city contrast
6. Beijing, Xi'an, Chengdu & Shanghai (12d) — the full four-city route

Day Experiences get their own home strip of 3 (Mutianyu, Xi'an, Chengdu pandas). Remaining home modules follow the brief's §8 order; see §6.

_Caveat:_ the 9-day is the most-linked product from the blog (47 articles). That is a content-mapping fact, not evidence of sales. Do not label anything "popular".

## 5. Navigation

Current: JOURNEYS (9 sub-links) · DESTINATIONS · WHY AVIORA · TRAVEL GUIDE · Start planning.

Proposed (labels follow the brief; fewer top-level surprises):

```
Journeys
  Day Experiences        → /private-china-day-tours
  Signature Journeys     → /fixed-itinerary-china-tours
  Tailor-Made Journeys   → /tailor-made-china-tours
  All journeys           → /tours
  — Explore by: Family · First-Time · Slow Travel · Culture · Nature   (links to /tours?… filters)
Destinations             → /china-destinations   (regions + the cities that have pages)
About AVIORA             → /about   (Approach, Founder, Company, Reviews)
Travel Journal           → /journal
Plan Your Trip           → /start-planning   (+ WhatsApp)
```

Changes: rename "Tailor-Made Tours / Fixed Itineraries" to the tier names, drop "Guide & Driver", "Multi-City" and "Classic" as separate sub-links (they become filters or tags), and replace "WHY AVIORA" (which currently hits a redirect) with "About AVIORA". `/private-guide-and-driver-china` and `/luxury-china-tours` stay live and in the sitemap; they remain reachable from the footer and from relevant pages. The "Visa / Best Time / Getting Around" journal shortcuts move into the Journal page; each must be verified to resolve before linking.

## 6. Home page module order

Mapped to what exists today (Phase 1 §3):

| #   | Brief module                       | Today                               | Proposed change                             |
| --- | ---------------------------------- | ----------------------------------- | ------------------------------------------- |
| 1   | Hero                               | present                             | Keep. Primary CTA "Plan Your China Journey" |
| 2   | Three Ways to Explore              | "ways" section, wording unconfirmed | Make it the three tiers, one card each      |
| 3   | Selected Journeys                  | "featured"                          | The 6 in §4                                 |
| 4   | Explore by Interest / Travel Style | absent                              | New: tag chips linking to filters           |
| 5   | Explore Destinations               | "places"                            | Keep; only destinations with real content   |
| 6   | Why AVIORA                         | manifesto/services                  | Merge into one section of concrete facts    |
| 7   | Trust & Service                    | operator, steps, quote              | Keep; show only verified items (see below)  |
| 8   | Travel Journal                     | "guides"                            | Show 3 hand-picked guides, not a feed       |
| 9   | Final CTA                          | closing + enquiry form              | Keep                                        |

Pre-conditions before the home changes ship: verify the "Est. year", the home traveller reviews and the evidence strip (Phase 1 P0 #2–3), and fix the contact email (P0 #1, deferred by you). The image-path item (P0 #4) was retracted: that file exists and serves.

## 7. Price expression (since nothing is verified)

Three states, set per product by one field (e.g. `priceStatus`):

| State           | Shows                                                                                        | When                                                     |
| --------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| `verified-from` | "From $X per person" **plus** conditions (party size, season, room standard, inclusions)     | Only after you confirm a number and its conditions       |
| `indicative`    | No number. Card: "Individually priced". Detail: lists what drives price and what is included | **Default for all products today**                       |
| `quote-only`    | "Request a Tailored Quote" plus the same drivers list                                        | Where no basis exists (already how the 4-city 12d works) |

Rules:

- **Hide, don't delete.** Existing `fromUsd` values and the 1–6 guest tables stay in the data files but are not rendered while `priceStatus ≠ verified-from`. This keeps them for later and removes the risk of publishing unverified figures. **[ASSUMPTION: that's acceptable; the alternative is leaving the current "indicative from" text live, which conflicts with the brief's §6.]**
- Never a bare "Contact us". Each card/page states the price drivers, e.g. _"Priced for your dates, group size, hotel standard and pace. Private guide and vehicle are included; international flights are not."_ (inclusions must match the real product copy before use).
- Day tours are the first candidates for verified numbers, since they are the simplest to cost. Quote them consistently (per private group of N) once confirmed.
- Structured data must not contain price/offer fields for `indicative` / `quote-only` products. Phase 5 should check the rendered JSON-LD.
- Impact: the "from" price currently appears in cards, detail pages, `llms-full.txt`, journal articles and possibly meta descriptions. Phase 4 needs a grep for every place (e.g. `from US$`, `fromUsd`, "US$" in articles) before switching.

## 8. Page templates

**Shared:** one design system, one card, one enquiry component.

**Product card (all tiers):** real image · name · destination · duration · one-line positioning · up to 3 tags · price state line · "View journey". Fixed image ratio. Titles trimmed to fit (some current titles are long).

**List pages**

- _Day Experiences:_ intro (what a private day includes), cards, one strip "Add this to a longer journey" → Signature / Tailor-Made. No promotional styling.
- _Signature Journeys:_ intro (starting points, adjustable), tag filter bar, cards sorted by duration (not by "priority"), closing Tailor-Made CTA.
- _Tailor-Made:_ the 5-step process (needs → questions → proposal → revise → confirmed quote), who it suits, the 3 example journeys, short enquiry form, trust items.

**Detail pages** (content blocks per brief §9; the current detail template already carries most of them, to be confirmed in Phase 3 by rendering one of each type)

- Day: duration, what you do, included services, pickup/meeting, who it suits, price state, enquiry.
- Signature: positioning, tags, highlights, day-by-day, intercity transport and pace, included / not included, hotel standard, price state, FAQ, "Request a Tailored Quote".
- Tailor-Made: process, capabilities, form, trust.
- A one-line "adjustable by party size, dates, interests" note on every Signature page.

## 9. Enquiry form (brief §2C)

Current: HubSpot embed on home and `/start-planning`; product pages use `mailto:` and WhatsApp CTAs. Proposal: one short form with the brief's fields (dates/flexibility, travellers, destinations, interests, budget as **per person or total**, contact, notes), pre-filled with the product the visitor came from. Keep required fields to name-free minimums (email + dates or "flexible" + travellers). Because the form lives in HubSpot, field changes need HubSpot configuration, not just code. **I can't verify HubSpot-side fields from this repo — please check.** Existing GA4 event tracking for submissions and WhatsApp clicks (last commit) stays.

## 10. Blog ↔ product linkage

- Every article already has `governance.primaryJourney`. Use it to render a consistent **"Plan this trip"** block linking to the product, plus the product's tier page. No new data needed.
- Add the 19 missing product links and the 14 missing CTAs first (list in Appendix A; practical/logistics pages get a soft link, not a hard sell).
- Product pages link back to 2–3 relevant articles (use the existing `related` data).
- Topic clusters in Appendix A (older travellers, family, cost, itinerary) are the **review queue for Merge/Improve** once Search Console data is available. No merge or redirect is proposed now. The 4 held slugs and 70+ existing redirects stay untouched.
- Do not add any new article just to fill gaps.

## 11. SEO and technical constraints for implementation

- Keep every existing URL. Any rename gets a one-to-one 301 in `next.config.ts` (or `proxy.ts`).
- New titles/meta for the three tier pages must be unique; check the repo's 70-character title rule (an audit script exists).
- Sitemap, `llms.txt`, `llms-full.txt` and structured data must reflect the renamed labels and removed price fields.
- Any new filter URL (`/tours?…`) must stay non-indexed or canonicalised to `/tours`, to avoid thin duplicate pages.
- No city-name-only clone pages.

## 12. Implementation batches (Phase 4, after your approval)

| Batch | Scope                                                                                          | Risk                      |
| ----- | ---------------------------------------------------------------------------------------------- | ------------------------- |
| 0     | Fix contact email (deferred by you); verify reviews / "Est." claims                            | Low, high value           |
| 1     | Price-state switch (hide unverified numbers) incl. cards, details, meta, JSON-LD, `llms-*.txt` | Medium (many places)      |
| 2     | Add `tier` field; rename labels/titles/H1 of the three tier pages; nav                         | Low–medium                |
| 3     | Home: three-ways, selected journeys (6), interest chips, trimmed journal strip                 | Medium                    |
| 4     | Tier list pages + Tailor-Made page rebuild; card unification                                   | Medium                    |
| 5     | Detail-page tweaks (adjustability note, price block, tier-specific modules)                    | Medium                    |
| 6     | Article "Plan this trip" block, missing links/CTAs                                             | Low                       |
| 7     | Merge/redirect content decisions                                                               | **Only with search data** |

Each batch ends with: `pnpm typecheck`, `pnpm lint`, the existing journey tests, a build, and a visual check at desktop and mobile widths.

## 13. Decisions I need from you

1. **Tier names and URLs:** keep `/fixed-itinerary-china-tours` with new label (recommended) or move to `/signature-journeys` with a 301?
2. **Muslim-friendly 13d:** Signature (my lean, once images are ready) or Tailor-Made example?
3. **Hide all numeric prices now** (§7, recommended), or keep the current "indicative from" text until verification?
4. **Keep service attributes** (Easier pace, Muslim-friendly) alongside the brief's tags?
5. **Home selection:** are the six in §4 acceptable, given that any of them could be one you can't deliver reliably?
6. Still open from Phase 1: the real contact email, verified reviews/"since" year, and whether Search Console / GA4 exports can be provided.

_Next: on approval of §13, Phase 3 (UX/UI) and then Batch 0–1 implementation. I'll stop for confirmation before touching any code._
