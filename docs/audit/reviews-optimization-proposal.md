# Reviews — Audit and Optimization Proposal

Date: 2026-11-04 · **Proposal only. Nothing on the site has been changed.**

---

## 0. Read this first: the review data cannot be verified, and parts of it look wrong

You asked how to make 177 reviews useful. Before any design, I audited the data in `content/home/traveler-reviews.ts`. I cannot tell from the repo whether these are real, and several things in the data would be flagged by a platform, a competitor or a regulator. **This is live on the production site today.**

| Finding                                                     | Evidence                                                                                                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Every record carries identical, blanket metadata**        | All 177 have `reviewStatus: "approved"`, `authorizationStatus: "authorized"`, `sourceType: "guest-submitted"` and `publishedAt: "2026-10-04"`. These are not recorded facts: the code assigns them to every review in one `.map()` (`content/home/traveler-reviews.ts`, lines 2576–2582). The company says it began operating in 2018, yet every review has the same publication date. |
| **The same named person appears twice, with the same city** | 25 name-plus-city pairs repeat, for example ids 50 and 113 (Harriet Collins, London), 51 and 114 (María González, Madrid), 52 and 115 (Javier Martínez, Barcelona). Two separate reviews from one named person in one city is rare.                                                                                                                                                    |
| **Almost nothing is specific**                              | Only **4 of 177** mention a city, a date or a trip length. **0 of 177 mention pandas or the Great Wall**, although those are the centre of most journeys. 164 mention hotels.                                                                                                                                                                                                          |
| **No source and no trip**                                   | No review names the journey taken, the travel dates, a platform (Google, TripAdvisor…) or a photo.                                                                                                                                                                                                                                                                                     |
| **The ratings are unusually uniform**                       | The lowest is 4.6; 63 are exactly 5; the average is 4.90. Real review sets almost always include some 3–4 star reviews.                                                                                                                                                                                                                                                                |
| **The language mix does not match the site**                | 71 Spanish, 21 German, 15 French and 7 Italian reviews sit on an English-only site; the largest country is Spain (40).                                                                                                                                                                                                                                                                 |
| **Templated structure**                                     | Every review follows the same pattern (hotel, guide, private vehicle, "not a rushed group tour").                                                                                                                                                                                                                                                                                      |

None of this proves the reviews are invented, and there may be an innocent explanation (a translated survey, a manual import, for example). **What I can say is that nothing in the repo lets anyone, including you, show that they are genuine.**

### Why this matters beyond the website

The site sells to the US, UK and EU. Publishing reviews that are not from real customers, or presenting them as verified, is treated as a deceptive practice in all three: the US FTC's rule on consumer reviews and testimonials (in force since October 2024), the UK's Digital Markets, Competition and Consumers Act, and EU consumer-protection law. I am not a lawyer; **please have someone qualified check this**. The brief you gave me also says: _"Do not invent customer reviews, customer numbers or awards."_

### What I recommend right now (needs your decision)

1. **Find the source records** for these reviews: emails, survey exports, messages, consent to publish. If they exist, this whole problem goes away and §2 onwards applies.
2. **Until that is confirmed, stop making claims built on them**: "177 reviews" (home page, Journeys page, `/reviews`), the "Read all 177 reviews" link, the "Guest feedback" framing, and the quoted traveller sentences.
3. **Do not add star ratings or review structured data** (none exists today; keep it that way until verified).

I did not remove anything, because that is your decision. I can do it in a few minutes if you say so.

---

## 1. Your three questions, answered on the merits

**"What is displaying 177 reviews for?"** Nothing. Visitors do not read 177 reviews, and a bare count is the least persuasive form of proof. It matters only when it comes from an independent platform. What converts is **a few specific, relevant, attributable reviews placed where a decision is being made.**

**"They have to click in to see everything."** Correct, and it is wasteful. Today a quote on the home page or a journey page is an excerpt, and the full text lives on `/reviews`. The fix is to show the full review **in place** (short by default, "Read more" expands it in the same card), and to stop sending people to a separate archive for the main story.

**"It should appear in the right places."** Today reviews appear in four places: home (one big quote and a count), Journeys page (3 excerpts), journey detail (a row of 3) and `/reviews`. They are not near the forms, not tied to the specific journey, and not on articles. Placement is the main lever (§3).

## 2. What the system should be (valid only once the reviews are verified)

### 2.1 Data: record the evidence, not stamps

Replace the blanket flags with real fields, filled per review from real records:

| Field                        | Purpose                                                           |
| ---------------------------- | ----------------------------------------------------------------- |
| `source`                     | Where it came from: post-trip survey, email, Google, TripAdvisor… |
| `sourceUrl` or `evidenceRef` | A link or an internal reference to the original                   |
| `journey`                    | The journey (slug) the person travelled                           |
| `travelMonth`                | Month and year of travel                                          |
| `travellers`                 | Couple, family, solo, group size                                  |
| `consentToPublish`           | Date and form of consent                                          |
| `verifiedBy` / `verifiedOn`  | Who checked it and when                                           |
| `rating`                     | The rating as given (integers or half steps)                      |
| `highlight`                  | One sentence chosen by an editor                                  |
| `response`                   | Optional reply from AVIORA                                        |

A review without `source`, `journey` and `consentToPublish` is not shown. A test enforces it (the same style as the existing tag test).

### 2.2 Presentation

- **Card**: rating, one-line headline, the full text (about 100 words, clamped to 4 lines with **Read more** that expands in place, no navigation), name, country, **journey taken and travel month**, a small "Verified" mark only where `verifiedBy` is set.
- **Honest numbers**: show an average and a count **only when they come from a third-party platform** you do not control (Google, TripAdvisor, Trustpilot), with a link to it. Own-site counts become "Selected guest feedback", never "177 reviews".
- **Real distribution**: if you include the lower ratings and AVIORA's replies, trust rises. A set that is all 5 stars reads as curated.

### 2.3 The `/reviews` page

Not a long archive. A **filterable wall**: by journey, by traveller type, by country, plus search, all on one page with no pagination. Full text expands in place. Sorted by relevance, with a "most recent" option. Each card links to the journey it is about. A single enquiry block at the bottom (the shared enquiry section already built).

## 3. Placement (the part that moves conversion)

| Where                            | What to show                                                                                                            | Why it works                                        |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| **Next to every enquiry form**   | One quote beside or above the form, matched to the page                                                                 | The decision moment; social proof beside the action |
| **Journey detail page**          | 2–3 reviews **about this journey**, then the rest of the page. If none exist yet, show nothing rather than generic ones | Relevance beats volume                              |
| **Home**                         | One featured review (full, with journey and month), then 3 short ones under "Selected journeys"                         | One strong story, not a count                       |
| **Journeys list**                | A single row of 3, each tagged with its journey, below the grid                                                         | Helps choose between journeys                       |
| **Articles**                     | One review matching the article's journey, in the right-hand rail or before the enquiry block                           | Reaches the 128 article readers                     |
| **Tier pages and landing pages** | One review of the relevant type (family, first-time, easier pace)                                                       | Matches the visitor's intent                        |

## 4. Getting real, specific reviews (the long-term fix)

1. **Post-trip email at day 3 after the trip**, from HubSpot, with a one-click rating and three short questions: what was the highlight, which journey, would you recommend. Consent to publish is a checkbox in the same form.
2. **Ask for a Google review at the same time** and link to your Google Business profile. Independent platforms carry far more weight than on-site quotes, and they give you a count you can legitimately display.
3. **Reply to every review**, including the critical ones.
4. Collect **photos** (with consent): they are the strongest trust signal.
5. Add **Review structured data only for reviews with a third-party source**, and only for the journey they describe.

## 5. What I would do in order

| Step | Work                                                                                                           | Blocked by     |
| ---- | -------------------------------------------------------------------------------------------------------------- | -------------- |
| 0    | **Decide on the existing 177** (§0): evidence, or take down the claims                                         | You            |
| 1    | New data model with evidence fields and the enforcing test                                                     | Step 0         |
| 2    | Review card with in-place "Read more"; journey- and context-matched placement; quote next to each enquiry form | Step 1         |
| 3    | `/reviews` as a filterable wall; remove the count claims                                                       | Step 1         |
| 4    | Post-trip email in HubSpot; link a Google Business profile                                                     | You (accounts) |

## 6. What I need from you

1. **Where did the 177 reviews come from?** Can you show source records and consent for them? If only some are real, which ones?
2. **Should I remove the "177 reviews" claims and the quoted traveller sentences now**, until this is settled? (I recommend yes; it is a small change and can be undone.)
3. Do you have a **Google Business Profile or TripAdvisor page** with real reviews? That is the best source of a defensible count.
4. Are you happy to **send a post-trip review request** through HubSpot?

Once I have your answers, I will build steps 1–3. I will not make the existing reviews more prominent in the meantime.
