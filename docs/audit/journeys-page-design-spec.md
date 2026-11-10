# Journeys page — Desktop and Mobile Design Specification

Date: 2026-11-04 · Companion to `journeys-page-optimization-proposal.md`.
**Clickable prototype:** `docs/audit/prototype/journeys.html` (real photos and real titles for all 19 journeys, working tier tabs, filters, bottom sheet, empty state). Tags in the prototype are illustrative editorial picks, not the current auto-generated ones. It is a design prototype, not production code.

Open it from the project folder: `open docs/audit/prototype/journeys.html`. Resize the window below 1024px to see the mobile layout.

---

## 1. The idea in one sentence

**Pick a kind of trip, trim once or twice, open a journey** — with the page doing nothing else until you have.

Everything below serves that sentence on two screens: a wide one where all controls are visible at once, and a narrow one where the list is the page and filtering is a single bottom sheet.

## 1b. Search (new; built for Western users' habits)

Search is the first thing in the hero and the fastest way into the catalogue. It follows the conventions people already know from Booking, Airbnb, Intrepid and Google, not a bespoke widget.

**Placement.** A wide, visible search field (not an icon) at the bottom of the hero, 56px tall, magnifier on the left, clear (×) and **Search** button on the right. When it scrolls out of view, a compact copy appears in the sticky bar on desktop, and a magnifier button on mobile that scrolls back and focuses the field. A `/` shortcut focuses search on desktop.

**Placeholder** shows real examples: _Search "Great Wall", "pandas", "Xi'an", "10 days"…_. Under the hero field: one row of **popular searches** (Great Wall · Pandas · Xi'an · Family · 10 days · Easier pace).

**As you type (suggestions after the first character):**

| Group           | Content                                                                                                          |
| --------------- | ---------------------------------------------------------------------------------------------------------------- |
| Places & topics | Beijing, Xi'an, Great Wall, Terracotta Army, Pandas, Forbidden City… with journey counts ("Pandas · 6 journeys") |
| Journeys        | Up to 4 journeys with thumbnail, title, tier and length; picking one opens it                                    |
| Last row        | "See all results for …"                                                                                          |

- Matched letters are underlined in suggestions and in card titles.
- On focus with an empty field: popular searches and the last 5 searches (stored only in the visitor's own browser, with "Clear recent searches").
- The grid below **updates live** while typing; the URL carries `?q=` so a search can be shared or bookmarked. Enter does not reload the page.

**What it understands** (tested in the prototype):

| Visitor types                                                                 | Behaviour                                               |
| ----------------------------------------------------------------------------- | ------------------------------------------------------- |
| `xian`, `Xi'an`, `xi an`, `sian`                                              | Same result                                             |
| `peking`                                                                      | Beijing                                                 |
| `pandass`, `terracota`, `great wal`, `zhanjiajie`                             | Typo tolerant (1–2 letters)                             |
| `avatar mountains`                                                            | Zhangjiajie                                             |
| `kids`, `children`, `teens`                                                   | Family                                                  |
| `honeymoon`, `romantic`                                                       | Couples                                                 |
| `grandparents`, `seniors`, `retired`, `gentle`                                | Journeys tagged Easier pace                             |
| `halal`                                                                       | Journeys whose copy or tag says halal / Muslim-friendly |
| `10 days`, `two weeks`, `a week`                                              | Journeys of about that length (±2 days)                 |
| `day trip`, `one day`                                                         | Day Experiences                                         |
| US/UK spellings (`traveler`/`traveller`), plurals, case, accents, apostrophes | Ignored                                                 |
| `trip`, `tour`, `vacation`, `holiday`, `private`, `china`                     | Treated as filler                                       |

**Deliberately not understood:** `wheelchair`, `mobility`, `accessible`. We have no verified evidence that any journey is accessible, so these return no results and say _"For accessibility or medical needs, tell us and we will plan it with you."_

**When there are no results:** "No journeys for '…'", a **Did you mean …?** suggestion when a close word exists, popular-search chips, a clear-all link and the "design it for us" card. Never a blank page.

**Search plus tabs:** tab counts update with the query ("Day Experiences 1 · Signature 5 · Tailor-Made 0"). If the current tab has few or no matches, a line offers the other tabs: _"No matches here, but there are matches in: Signature Journeys (5)"_.

**Sort** (small select, top right of results): Recommended (best match while searching) · Shortest first · Longest first. Western visitors expect a sort control, and price sort stays out until prices are verified.

**Mobile specifics.** Field text is 16px so iOS Safari does not zoom; the keyboard shows a **Search** key (`enterkeyhint="search"`); autocorrect and auto-capitalisation are off; suggestion rows are 44px tall.

**Accessibility.** WAI-ARIA combobox: `role="combobox"`, `aria-expanded`, `aria-controls`, `aria-activedescendant`; ↑ ↓ move, Enter selects, Esc closes then clears; results count is announced politely.

**Analytics (only after analytics consent).** One GA4 `search` event with `search_term` when a search is committed; plus a `search_no_results` event. Search terms are never combined with personal data.

**Scope today.** Searches the 19 journeys and a fixed list of places and topics, in the browser, with no extra service. Articles and destination pages stay on the existing `/search` page; a line under the suggestions can link to it ("Search the journal and destinations instead").

## 2. Shared system (both devices)

Reuses the existing tokens and type; nothing new to maintain.

| Element        | Spec                                                                                                                                                                                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Display type   | Existing serif display face, regular weight, italic for one emphasised phrase                                                                                                                                                                         |
| Body / UI type | Existing sans, 14–15px body, 12px for chips and eyebrows                                                                                                                                                                                              |
| Colour         | **No green anywhere.** White canvas, ink `#1a1816` for text and every active/primary state, night `#12100d` for the dark "design it" card and closing band, warm stone `#f6f5f2` and line `#e4e1da` for surfaces. No gradients except the photo scrim |
| Shape          | 6px card radius, pill radius for tabs, chips and buttons                                                                                                                                                                                              |
| Elevation      | None at rest; one soft shadow on hover only                                                                                                                                                                                                           |
| Motion         | 200–300ms ease-out; image zoom 3–4% on hover; `prefers-reduced-motion` disables all                                                                                                                                                                   |
| Photography    | Real photos only; no AI-looking imagery; no overlaid text on photos except the hero and the duration chip                                                                                                                                             |
| Price          | One sentence above the grid. A per-card price line appears only for products in `verifiedPriceSlugs`                                                                                                                                                  |
| Tier names     | Day Experiences · Signature Journeys · Tailor-Made, in that order, everywhere                                                                                                                                                                         |

## 3. Desktop (≥ 1024px)

### 3.1 Layout

- Container 1280px max, 20–32px gutters, **3-column card grid**, 28px column gap, 40px row gap.
- Order: header → compact hero → **sticky control bar** → tier sentence → results → how it works → FAQ → closing CTA.
- First card row is visible without scrolling on a 1440×900 screen (hero is about 300px; control bar 60px).

### 3.2 Compact hero (≈ 300px)

- Real photo (the existing Great Wall sunrise), dark-to-transparent scrim bottom-up so text always passes contrast.
- Eyebrow "Designed and operated in China", **H1 "Private journeys across China."** (one line at ≥ 1024px), one supporting sentence.
- **No buttons in the hero.** The list is the call to action; "Plan my journey" lives in the header and the closing band. (Today's hero is a full-height image with two buttons that scroll the visitor straight back to the list.)

### 3.3 Sticky control bar (the heart of the page)

One row, 60px, sticky under the header, translucent paper with blur:

```
[ All 19 ] [ Day Experiences 5 ] [ Signature Journeys 11 ] [ Tailor-Made 3 ]      Length ▾  Who is travelling ▾  Interest ▾  (Easier pace) (Muslim-friendly)
```

- **Left: tier tabs** (`role="tablist"`). Active tab filled ink with white text; inactive muted with a count.
- **Right: four filters** (Length, Who is travelling, Interest, Good to know, where the last holds the two toggles). Each popover is a short checkbox list with a live count per option ("Family 6"), so nobody picks an option that returns zero. Popovers close on outside click and Esc.
- A filter that is active shows its count in the button ("Interest · 2") and a visible 1px ring.
- Nothing else on the bar. No search box, no sort, no region.

### 3.4 Tier sentence and results header

- One serif sentence per tab, 22–26px, explaining what that tier is, with a quiet link to the tier's own page ("See all Signature Journeys →").
- Below it, a status row: **"11 journeys"** (announced politely to screen readers) · "Clear filters" appears only when something is active · on the right, the one pricing sentence.

### 3.5 Card (4:3)

```
┌───────────────────────────┐
│  photo 4:3                │
│  [5 days]  ← pill, bottom-left
├───────────────────────────┤
│ SIGNATURE JOURNEY · CHENGDU · LESHAN   ← 11px caps: tier + cities only
│ Pandas, Tea Houses & the   ← serif, 2 lines max
│ Sichuan Table
│ One line of positioning (2 lines max)
│ [Family] [Food]            ← max 3 chips: ≤2 traveller + ≤2 interest
│ View journey →
└───────────────────────────┘
```

- The **whole card is one link**; "View journey →" is a visual hint, not a second target.
- Eyebrow shows **cities only**. Today the route label for day tours is long ("Beijing · Mutianyu Great Wall · Beijing"); the prototype uses the destination list instead.
- Removed versus today: "Best for" paragraph, three highlight bullets, status label, price block.
- Equal height cards; chips pinned to the bottom so rows align.

### 3.6 The "design it for me" card

After the sixth result (and only if there are more than three), a near-black (night) card in the grid: **"Don't see it? We'll design it."**, one sentence, one white pill button. It is the Tailor-Made entry exactly where a browsing visitor has just run out of matching ideas. Hidden on the Day Experiences tab.

### 3.7 Below the list

Four quiet blocks, each one screen or less: **How it works** (4 steps in a row) · **FAQ** (4 questions) · optional **three traveller quotes** (kept only if verified) · **closing band** in night with one button. No journal grid, no second set of cards.

### 3.8 Desktop behaviours

| Interaction   | Behaviour                                                                                                         |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| Tab click     | Swaps list in place, updates `?tier=` via `replaceState`, no scroll jump, focus stays on the tab                  |
| Filter change | Instant, no Apply button; count and chips update; popover stays open for multi-select                             |
| Card hover    | Image zoom 4%, 2px lift, soft shadow                                                                              |
| Keyboard      | Tab/Shift-Tab through tabs and filters; arrow keys move between tabs; Esc closes popovers; visible 2px focus ring |
| Empty result  | "No journey matches all of that." plus Clear filters and the Tailor-Made card                                     |

## 4. Mobile (< 1024px, designed at 390px)

### 4.1 Layout

- **Single column**, 20px gutters, 16:10 image, same card content as desktop.
- Hero shrinks to about 40% of the viewport (min about 260px); H1 on two lines at most.
- Between 700px and 1023px: two columns, same controls as mobile (the sheet) because horizontal room is tight.

### 4.2 Controls

```
[ All 19 ][ Day Experiences 5 ][ Signature… ⟩ ] [ Filters ② ]
```

- **Tab row scrolls horizontally**, sticky under the header, with a fade on the right edge to signal more. The active tab stays visible (scroll into view on load).
- **One "Filters" button** on the same row with a count badge. No chips row, no second sticky layer (two sticky bars eat a third of a phone screen).

### 4.3 Filters bottom sheet

- Native `<dialog>`, slides up to at most 86% of the viewport; scrim behind; swipe or tap outside to close; focus is trapped and restored on close.
- Contents in this order: **Length**, **Who is travelling**, **Interest**, **Good to know** (the two toggles). Options are large pill checkboxes (min 44px tap height) rather than a list.
- Sticky footer button that always tells the outcome: **"Show 7 journeys"**, or "No journeys match" (disabled). "Clear all" top-right.
- The list behind updates live as options are ticked, so the visitor sees the effect before closing.

### 4.4 Persistent actions

- No fixed mobile bottom action bar. Planning links stay in page flow and in the top navigation; one compact contact control floats above the device safe area.
- The "design it for me" card is the 7th item in the list, same as desktop.

### 4.5 Mobile-specific details

- Tap targets ≥ 44px; chips and tabs never smaller.
- No hover-dependent information anywhere; no carousels, no arrows, no horizontal scrolling lists other than the tab row.
- Images request mobile-width sizes (`sizes="calc(100vw - 40px)"`); the first two cards eager, the rest lazy.
- Sticky controls use one layer only (tabs + Filters).
- Reading order matches visual order; screen readers hear: tablist, filters button, "11 journeys", then cards.

## 5. What we measured in the prototype

| Check                                                   | Result                                                   |
| ------------------------------------------------------- | -------------------------------------------------------- |
| Desktop first card row above the fold at 1440×900       | Yes                                                      |
| Mobile: first card visible after hero + one control row | Yes                                                      |
| Controls on desktop                                     | 1 row, 5 filter controls (3 popovers + 2 toggles)        |
| Controls on mobile                                      | 1 row (tabs + Filters) + 1 sheet                         |
| Per-card text layers                                    | 5 (tier/cities, title, line, chips, link) versus 8 today |
| Duplicate appearances of one journey                    | 1 (today up to 3)                                        |

Not measured here: real Lighthouse numbers, touch behaviour on devices, screen-reader testing. Those belong to the implementation phase.

## 6. Problems the prototype exposed (to settle before building)

1. **Three journeys have no photograph yet** (Muslim-friendly, Qingcheng, Guangzhou–Shenzhen) and show a placeholder. In the "All" tab they are the weakest cards; hold them back from "All" until photography exists (still reachable under Tailor-Made).
2. **Route labels** in the data are too long for a card eyebrow; cards should use the destination list, as in the prototype.
   - Tag proposal for your approval: `journeys-tag-proposal.md`.
3. **Tags**: the current automatic tags mark almost every journey as suitable for everyone (day tours carry six traveller/interest tags each). The prototype uses a hand-picked maximum of 2 per dimension; this editorial pass must be done before the filters can be trusted.
4. **Length labels on day tours** ("~7–9 hours") work as a chip; multi-day show days.
5. **Count accuracy**: option counts in popovers are calculated against the other active filters, so they must be derived from real tags (see 3).

## 7. Implementation notes

- Components: `JourneyGrid` (tabs + filters + results), `JourneyCard`, `FiltersSheet`, `TierExplainer`. Reuse the existing tokens and `journey-card` base; drop the finder, collection carousels and mobile match wizard from this route.
- State: URL is the source of truth (`?tier=&length=&who=&interest=&easy=1&halal=1`). Existing parameters (`style`, `needs`, `travellers`, `destination`…) keep working through an adapter, so current redirects and shared links survive.
- SEO: all 19 cards and the `ItemList` JSON-LD remain server-rendered; client filtering only hides cards. `?tier=` canonicalises to `/tours`.
- Analytics: `tours_tier_tab_click`, `tours_filter_change`, `tours_card_click` (slug, position), `tours_enquiry_start`.
- Order of work: tags editorial pass → grid and card → control bar → bottom sheet → page below the list → delete dead code.

## 8. Decisions for you

1. Hero without buttons (recommended) or keep a "Plan my journey" button?
2. Tier tabs (shown in the prototype) or three large entry cards at the top?
3. Hold the three photo-less journeys out of "All"?
4. Keep "Easier pace" and "Muslim-friendly" as toggles?
5. Keep or drop the traveller-quotes row (needs verified reviews)?
6. Who does the tag editorial pass: you, or I propose tags per journey for your approval?
