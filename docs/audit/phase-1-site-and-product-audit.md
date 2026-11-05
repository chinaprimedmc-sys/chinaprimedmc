# AVIORA Phase 1 — Existing Site & Product Audit

Date: 2026-11-04 · Scope: read-only. **No page, product, article or URL was changed.**
Source of truth: the code in this repo (`content/tours`, `content/journal`, `content/services`, `components/navigation`, `next.config.ts`, `app/`). Nothing was checked against the live site.

**Not available in the repo, so marked UNKNOWN throughout:** search impressions/clicks, product-page traffic, enquiry counts, quote/close rates, real supplier cost or margin. Nothing below ranks products by popularity.

---

## 1. Headline findings

1. **The three-tier structure already half exists, under different names.** Service pages exist at `/private-china-day-tours`, `/fixed-itinerary-china-tours` and `/tailor-made-china-tours`, but the header menu calls them "Private Day Tours / Fixed Itineraries / Tailor-Made Tours" and the home page says "Journeys". "Signature Journeys" is not a label anywhere.
2. **The catalog is smaller than the brief's targets, and that is fine.** 19 products: 5 day tours, 14 multi-day. The brief's 6–10 / 5–8 are suggestions, not quotas.
3. **Today's grouping contradicts the brief's classification.** `content/services/index.ts` puts the 12-day, family, Yunnan and Muslim-friendly journeys under _Tailor-Made_ and the 5–11-day routes under _Fixed Itinerary_. The brief wants those as Signature Journeys, with Tailor-Made as a service/process page.
4. **Pricing is published for 18 of 19 products** as "indicative from" figures with stated conditions (party of four, room sharing, off-peak). Whether these were cost-verified **cannot be determined from the code** (see §6). One product (the 12-day Shanghai–Chengdu–Xi'an–Beijing) already shows "written quote, no unverified starting price" — the model the brief asks for.
5. **Blog: 128 public articles, 73 in Markdown, ~55 TS-authored.** Governance metadata is strong (every article has one canonical owner and a unique primary intent; no duplicate intents), yet many are probable near-neighbours (see Appendix A clusters).
6. **No "Best Seller / Most Popular" claims found** in code. Good.
7. **Several trust/technical problems found** that are independent of the new architecture (§7). The most urgent is a placeholder-looking contact email used in site config, every tour page and the home page.

---

## 2. Current site map (from `app/`)

| Area          | Routes                                                                                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home          | `/`                                                                                                                                                                       |
| Products      | `/tours` (catalog), `/tours/[slug]` (19)                                                                                                                                  |
| Service pages | `/private-china-day-tours`, `/fixed-itinerary-china-tours`, `/tailor-made-china-tours`, `/private-guide-and-driver-china`, `/luxury-china-tours`, `/china-tours-from-usa` |
| Destinations  | `/destinations`, `/destinations/[slug]`, `/china-destinations`, `/china-destinations/[region]` (7 regions)                                                                |
| Journal       | `/journal`, `/journal/[slug]` (128)                                                                                                                                       |
| Trust         | `/about`, `/about/founder`, `/company`, `/reviews`, `/editorial-policy`, `/faq`                                                                                           |
| Conversion    | `/start-planning`, `/contact`                                                                                                                                             |
| Other         | `/china-dmc` (B2B), `/search`, legal (`/privacy`, `/cookies`, `/terms`), `/llms.txt`, `/llms-full.txt`                                                                    |
| Redirect-only | `/why-us` → `/about` (also still linked in the header, see §7)                                                                                                            |

`next.config.ts` holds **~70 permanent redirects**, including four held journal slugs and many legacy `/journey/*`, `/blog/*`, `/styles/*` URLs. These must be preserved in any restructure.

## 3. Current navigation and home

**Header:** JOURNEYS (All Journeys · Tailor-Made Tours · Fixed Itineraries · Private Day Tours · Guide & Driver · Family · Multi-City · Classic · Cultural) · DESTINATIONS (regions + 4 cities) · WHY AVIORA · TRAVEL GUIDE · Start planning + WhatsApp.

**Home sections, in order:** hero → evidence strip → "ways" → services → manifesto → begin → featured journeys → traveller quote → places → steps → operator → guides → FAQ → closing/enquiry (HubSpot).

Against the brief's module list: Hero ✓, three ways to explore (a "ways" section exists, wording unconfirmed) ◐, selected journeys ✓, interest tags ✗ (family/style filters exist only inside `/tours`), destinations ✓, why/trust ✓, journal ✓, final CTA ✓. The home page is closer to the brief than the navigation is.

## 4. Product inventory (19) and suggested tier

"Tier" is a **proposal for Phase 2**, not a decision. Price column is what the code currently shows, unverified.

### A. Day Experiences — 5 (matches the brief's range low end; brief suggests 6–10 only as a ceiling)

| Slug                                               | Duration | Shown price             | Notes                                                  |
| -------------------------------------------------- | -------- | ----------------------- | ------------------------------------------------------ |
| `private-mutianyu-great-wall-day-tour`             | 7–9 h    | from $198 pp (4 guests) | Image status ready                                     |
| `private-xian-terracotta-warriors-day-tour`        | ~8 h     | from $628 group of 4    | Image ready                                            |
| `private-shanghai-day-tour-guide-driver`           | ~8 h     | from $672 group of 4    | Image ready; legacy short URL redirected in `proxy.ts` |
| `private-chengdu-panda-day-tour-early-morning`     | 7–9 h    | from $598 group of 4    | Image ready; animal-contact disclaimer present         |
| `guilin-yangshuo-li-river-cruise-private-day-tour` | 9–11 h   | from $688 group of 4    | Image ready; shared cruise, not private                |

Gaps vs. brief: no Chongqing or other city day experiences. Do not invent them.
Inconsistency: Mutianyu is quoted **per person**, the other four **per private group**.

### B. Signature Journeys — candidates (multi-day, defined routes)

| Slug                                                             | Length | Shown price (pp, 4 guests) | Notes                                                                                  |
| ---------------------------------------------------------------- | ------ | -------------------------- | -------------------------------------------------------------------------------------- |
| `beijing-xian-shanghai-private-9-day-tour`                       | 9d     | $3,190                     | Most-linked product from the blog (47 articles) — a content fact, **not** a sales fact |
| `beijing-xian-chengdu-shanghai-private-11-day-tour`              | 12d    | none (written quote)       | URL says 11-day, route is 12 days / 11 nights. Title/URL mismatch                      |
| `china-at-an-easier-pace-12-day-private-tour`                    | 12d    | $6,480                     |                                                                                        |
| `china-family-tour-with-pandas-12-day-private-tour`              | 12d    | $6,880                     | Family tag, not a separate tier                                                        |
| `chengdu-chongqing-zhangjiajie-private-11-day-tour`              | 11d    | $3,990                     |                                                                                        |
| `luxury-yunnan-private-tour`                                     | 10d    | $6,680                     | Only Yunnan product                                                                    |
| `muslim-friendly-china-tour-great-wall-desert-stars`             | 13d    | $7,680                     | Image status _pending_                                                                 |
| `shanghai-zhangjiajie-floating-peaks`                            | 8d     | $2,990                     |                                                                                        |
| `chengdu-pandas-jiuzhaigou-private-7-day-tour`                   | 7d     | $2,690                     |                                                                                        |
| `xian-beijing-terracotta-warriors-great-wall-private-6-day-tour` | 6d     | $2,090                     |                                                                                        |
| `chengdu-pandas-sichuan-table`                                   | 5d     | $1,590                     |                                                                                        |
| `beijing-great-wall-private-5-day-tour`                          | 5d     | $1,690                     |                                                                                        |

That is 12, versus the brief's 5–8 for the _featured_ set. Scoring (§5 of the brief) needs demand and cost data this repo lacks, so I propose **showing all 12 on a Signature Journeys list page and choosing 5–8 for the home page in Phase 2**, rather than deleting anything.

Possible overlap to review (not a verdict): 5-day Beijing and 6-day Xi'an+Beijing both sit inside the 9-day route; the 7-day Chengdu–Jiuzhaigou and 5-day Chengdu overlap on Chengdu/pandas.

### C. Tailor-Made — mostly a service, not products

The three products below are **bespoke-by-design** and probably belong behind the Tailor-Made page as "example starting points", not in the Signature list:

| Slug                                                 | Why                                                                   |
| ---------------------------------------------------- | --------------------------------------------------------------------- |
| `qingcheng-mountain-private-wellness-retreat-10-day` | $11,800 pp, image pending, "most fully tailored versions $13.8–18.8k" |
| `guangzhou-shenzhen-tailor-made-business-tour-4-day` | Business, "4–7 days, fully tailor-made", image pending                |
| (Luxury Yunnan / Muslim-friendly could also go here) | Today's code already lists them as tailor-made starting points        |

**Decision needed from you:** which of the 12–14 multi-day products are fixed-route Signature vs. tailor-made starting points.

### Not in the catalog but referenced

- (Retracted) The hero-image fallback path is a valid public asset; see §7 item 4.

## 5. Tags (existing data vs. brief)

The catalog already carries `travelerFilters`, `experienceFilters`, `destinationFilters` and `styleFilters`, so tags don't need a new data model. Mapping:

| Brief tag                                             | Exists as                                                                                                                                                    |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Family, Couples, First-Time, Multi-Generational, Solo | `travelerFilters` (families, couples, first-time, multigenerational, solo-travelers) — plus older-travelers and private-groups, which the brief doesn't list |
| Culture / Nature / Food / History …                   | `experienceFilters`, `styleFilters` (vocabulary differs; needs a normalisation pass)                                                                         |
| Destinations                                          | `destinationFilters` (city level; "Yunnan" appears only as Dali/Lijiang/Shaxi/Shangri-La)                                                                    |

Observation: almost every product is tagged with nearly every traveller type (day tours: all 7). Tags that apply to everything don't help filtering. Needs tightening in Phase 2.

## 6. Pricing review (rules §6 of the brief)

- 18 products show an "indicative from" price with conditions. Format is consistent and explains drivers, which matches the brief's intent.
- **Cannot verify from code whether these were cost-checked.** `product-intelligence/` contains research and "ESTIMATE/UNKNOWN" conventions, but no supplier-cost source. **Please confirm which of these figures are verified.** Any unverified ones should switch to the "written quote" treatment the 12-day product already uses.
- Day tours: Shanghai/Xi'an/Chengdu/Guilin publish full 1–6 guest tables (very specific); that is only appropriate if confirmed.
- Inconsistency: per-person vs. per-group units between day tours.
- Wellness retreat "from $11,800" and Yunnan "from $6,680" are high; confirm before keeping a numeric "from".

## 7. Issues and risks (prioritised)

**P0 — trust/accuracy**

1. **Contact email `chinaprimedmc@gmail.com`** is in `config/site.ts` (site email and correction email), the home page, and the `mailto:` CTA of each of ~10 tour data files. It looks like a personal/placeholder address on a brand site. Confirm the real address.
2. **"Est. {since}"** and other operator claims on the home page derive from `siteConfig.operator.founded`; verify the date and the "evidence" strip claims are factual (brief §11: no invented years/awards).
3. **Home/traveller reviews** (`content/home/traveler-reviews.ts`, ratings 4.8–5): verify these are real, attributable reviews. No `AggregateRating` schema was found in code, so there is no structured-data risk today.
4. ~~Local file path as image `src`~~ **Retracted.** I first read the hero-image path as a local filesystem path. A byte-level check shows it is `/home/editorial/great-wall-private-china-travel.webp`, a real file under `public/` that serves HTTP 200. No problem here.

**P1 — structure** 5. Terminology mismatch between header ("Fixed Itineraries"), service pages and the brief ("Signature Journeys"). 6. `/why-us` permanently redirects to `/about`, yet the header's "WHY AVIORA" item still points to it, adding a redirect hop on every click. 7. Slug/title mismatch: `…-11-day-tour` for a 12-day route (the redirect table already maps old variants to it; do **not** rename without a 301 plan). 8. Two products have `visualStatus: pending` (wellness, Muslim-friendly, business). Don't promote them on the home page until images are ready. 9. Day-tour pricing units inconsistent (§4A). 10. Nav links to `/journal/best-time-to-visit-china` and others should be checked that each slug is in the public manifest (the 4 held slugs are redirected).

**P2 — content** 11. 17 articles measured under ~800 words (2 more could not be counted); 19 have no `/tours/` link; 14 have no conversion block (all practical/ticket/logistics pages). See Appendix A. 12. `china-tours-for-seniors` family: 8 articles with closely related intents (seniors / older / limited mobility / 70s / parents / slow-paced). Governance gives each a unique "primary intent", but they are a prime **Merge-candidate cluster** to review with search data. 13. Held articles: 4 slugs intentionally redirected with source in `content/journal/drafts/held-overlap-articles.txt` — keep as is. 14. `/china-dmc` (B2B) has lowest sitemap priority and shares the site with consumer pages; the brief doesn't mention B2B. Decide whether it stays.

**Not checked in this pass** (needs a running site or external data): broken external links, Lighthouse/mobile layout, rendered meta tags, image weights, structured-data output, enquiry form functionality (HubSpot embed), live sitemap contents. `pnpm build` already runs several journal audit scripts (journey links, journal search, editorial, quality, governance) — worth running to get their current output.

## 8. Existing URLs — proposed treatment

**Keep all current URLs.** No URL change is required to adopt the three-tier language:

- `/private-china-day-tours` → becomes the _Day Experiences_ page (title/H1 only).
- `/fixed-itinerary-china-tours` → becomes _Signature Journeys_ (or add a new `/signature-journeys` page and 301 the old one; recommended: **keep the old URL**, rename the label).
- `/tailor-made-china-tours` → stays _Tailor-Made Journeys_.
- `/tours` stays as the complete catalog/finder.
- `/tours/*`, `/journal/*`, `/destinations/*`: unchanged.

## 9. Open questions for you

1. Real contact email (and are `wa.me/8618027438191` and HubSpot form the intended channels)?
2. Which listed prices are cost-verified? Should unverified ones switch to "written quote"?
3. Fixed-route Signature vs. tailor-made starting point: confirm the split proposed in §4B/§4C.
4. Is there Search Console / GA4 data I can be given (CSV export) to fill the UNKNOWN columns?
5. Are the home-page traveller reviews and operator "since" year verified?
6. Keep `/china-dmc` in the consumer navigation world or treat it separately?

## 10. Suggested next step

Phase 2 proposal (no content changes): final category naming, tag vocabulary, which 5–8 journeys go on the home page, nav structure, list/detail page templates, and price wording — written to `docs/audit/phase-2-architecture-proposal.md` once you answer §9.

_Appendix A: [appendix-a-journal-articles.md](./appendix-a-journal-articles.md)_
