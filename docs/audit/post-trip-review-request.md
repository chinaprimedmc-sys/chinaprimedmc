# Post-trip review request — ready to set up in HubSpot

Date: 2026-11-04 · Draft for your approval. Nothing is sent or published by this document.

**Goal:** every new review arrives with the facts the site is missing today (which journey, which month, consent, a date), so it can be shown properly and matched to the journey it is about. It also builds a Google review count you can legitimately display.

## 1. Rules that keep this honest (and legal in the US, UK and EU)

1. **Ask every guest, not only the happy ones.** Do not send unhappy guests somewhere else ("review gating"). Google and the US FTC both prohibit it.
2. **No reward for a positive review.** A thank-you for taking part is fine only if it is the same whatever the rating and it is stated openly. Simplest: no incentive.
3. **Publish what they wrote.** Fix only typos, with their agreement. Do not rewrite, combine or translate-and-reword reviews.
4. **Reply to every review**, including critical ones.
5. **Keep the record**: the original email or form submission is the evidence. HubSpot stores it automatically.

## 2. Timing

| When                                    | What                                                                    |
| --------------------------------------- | ----------------------------------------------------------------------- |
| Day 3 after the last day of the journey | Email 1: the request (below)                                            |
| Day 10, only if no reply                | Email 2: one short reminder, then stop                                  |
| After a review is received              | Personal reply from the specialist who looked after them, within 2 days |

## 3. Email 1 (subject and body)

**Subject:** How was your trip to China, {first name}?

> Hello {first name},
>
> We hope you are home safely and that China is still on your mind.
>
> Could you share a few honest words about your journey? What worked, and what did not. It takes about three minutes, and it helps future travellers decide, and helps us improve.
>
> **[ Share your review ]**
>
> You can also leave a public review on Google: **[ Review us on Google ]**
>
> Thank you,
> {specialist name}
> AVIORA China Travel

## 4. The form (HubSpot form, 5 fields)

| #   | Field                                          | Type                                                                                      | Why                                                     |
| --- | ---------------------------------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| 1   | Overall, how would you rate your journey?      | 1–5 stars (whole numbers)                                                                 | A real distribution, not decimals                       |
| 2   | What was the most memorable part?              | Short text                                                                                | Gets the specifics reviews lack today (places, moments) |
| 3   | Is there anything we could have done better?   | Short text                                                                                | Honest signal; shown only if the guest agrees           |
| 4   | Which journey did you take, and when?          | Dropdown (the 19 journeys) + month                                                        | Lets the site match reviews to journeys                 |
| 5   | **May we publish your review on our website?** | Radio: _Yes, with my first name and country_ / _Yes, anonymously_ / _No, keep it private_ | Consent, recorded with a timestamp                      |

Pre-filled by HubSpot from the booking record (the guest does not retype it): name, email, journey, travel dates, party type. If you can pre-fill the journey and month, drop field 4.

## 5. HubSpot properties to create

`review_rating`, `review_memorable`, `review_improve`, `review_journey` (dropdown, same slugs as the site), `review_travel_month`, `review_party` (couple / family / friends / solo), `review_consent` (enum above), `review_consent_at` (date), `review_received_at` (date), `review_verified_by` (user), `review_published` (boolean).

## 6. How a review reaches the website

1. Guest submits the form; HubSpot records everything with a date.
2. A specialist checks it against the booking (journey, dates) and sets `review_verified_by`.
3. Only if `review_consent` is a "Yes": add it to `content/home/traveler-reviews.ts` with the new optional fields that are already in the type: `journey`, `travelMonth`, `travellers`, `verifiedOn`. The reviews page then shows "Travelled October 2026 · Family" and a **Verified** mark automatically, and only for reviews that carry `verifiedOn`.
4. Reviews with a journey are then matched on that journey's page (a later step; it needs these fields to exist first).

## 7. Google Business Profile (you do not have one yet)

1. Create it at business.google.com as a **service-area business** (travel agency), with the registered company name (游友汇（广州）国际旅行社有限公司 / Youyouhui (Guangzhou) International Travel Service Co., Ltd.) and the AVIORA brand shown as the public name. Google may require verification by video or postcard.
2. Use the same website, phone and WhatsApp as on the site.
3. When approved, copy the **review link** ("Get more reviews") and put it into Email 1.
4. After you have real Google reviews, tell me the profile URL and the figures; I can then show "Rated X on Google (N reviews)" with a link, which is the strongest form of proof because you do not control it.

## 8. What I need from you

1. Approve the wording of Email 1 and the five form fields, or send changes.
2. Who sends it (HubSpot sequence, or the specialist by hand at first)?
3. Start creating the Google Business Profile (it takes a few days to verify).
4. Do the existing journeys have a booking record that includes the travel month? If so we can pre-fill field 4.
