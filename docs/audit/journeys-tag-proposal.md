# Journeys — Tag Proposal for Your Approval

Date: 2026-11-04 · **Approved on 2026-11-04 by delegation ("go with your recommendation") and now live.** Decisions: rows 14, 15, 16, 19 keep an empty "who" (the copy names no audience); "Friends" and "Multi-generational" are not offered until products exist; no "Business" tag; "Pandas & wildlife" added; Muslim-friendly only on row 11. Original text follows.

Nothing below was live when first written. The clickable prototype (`docs/audit/prototype/journeys.html`) already uses these tags so you can see the effect; the site itself is unchanged.

Rule used: **a tag appears only if the journey's own copy supports it.** At most 2 "who" tags and 2 "interest" tags per journey, and a journey may have none. Every row cites its evidence from the product data (`bestForSummary`, highlights, pace label).

## 1. Why this needs doing

The tags generated today say almost everything fits everyone:

- Day tours carry 5–6 interest/traveller tags each.
- The "planning need" list marks **`muslim-friendly` on 10 of 19 journeys, including the 5-day Beijing and 5-day Chengdu routes**, and `mobility-aware` on 17 of 19, including the active Jiuzhaigou and Zhangjiajie routes.
- Filters built on that data return almost the whole catalogue whatever you pick, and the claims are stronger than the product copy supports.

**Recommendation: retire the nine "planning need" filters from the public interface** and replace them with the two evidence-backed toggles below.

## 2. Vocabulary

| Dimension              | Values                                                                                                                                    | Notes                                                                                                                                              |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Who is travelling      | First-time · Family · Couples · Friends · Multi-generational                                                                              | From the brief. "Solo" not used (no journey is built for solo travellers).                                                                         |
| Interest               | Culture & heritage · History · Nature & landscapes · Food & local life · **Pandas & wildlife** · Photography · Slow travel · Architecture | **Pandas & wildlife is new** (not in the brief). Pandas are one of the most common searches for China, and 7 journeys feature them. Needs your OK. |
| Good to know (toggles) | **Easier pace** · **Muslim-friendly**                                                                                                     | Strict rules in §4.                                                                                                                                |

Not used: Adventure (no journey is positioned as adventure), Business (one tailor-made example only; see row 13).

## 3. Proposed tags

| #   | Journey                             | Tier        | Who                 | Interest                               | Good to know        | Evidence                                                                                             | Your call                            |
| --- | ----------------------------------- | ----------- | ------------------- | -------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 1   | Beijing, Xi'an & Shanghai, 9 d      | Signature   | First-time          | Culture & heritage, History            | Easier pace         | "First-time visitors who prefer fewer hotel changes"; pace "comfortable, unhurried", 2 hotel changes |                                      |
| 2   | Yunnan Tea Horse Road, 10 d         | Signature   | Couples             | Nature & landscapes, Slow travel       |                     | "Couples, friends, repeat visitors… boutique stays"; pace "balanced"                                 | Couples _or_ Couples + Friends       |
| 3   | Mutianyu Great Wall day             | Day         | First-time, Family  | History, Nature & landscapes           |                     | "First-time visitors, families, couples, older travelers"                                            |                                      |
| 4   | Shanghai day                        | Day         | First-time, Couples | Architecture, Food & local life        | Easier pace         | Pace "easy to moderate"; Bund/skyline, French Concession lanes                                       |                                      |
| 5   | Xi'an Terracotta day                | Day         | First-time, Family  | History                                | Easier pace         | "First-time Xi'an visitors… families"; pace "easy to moderate"                                       |                                      |
| 6   | Chengdu panda day                   | Day         | Family, Couples     | Pandas & wildlife, Food & local life   |                     | "Families, couples, first-time visitors"; early start, so not "Easier pace"                          |                                      |
| 7   | Li River cruise day                 | Day         | Couples, Family     | Nature & landscapes, Photography       |                     | "Couples, families… photographers"; 9–11 hour day, so not "Easier pace"                              |                                      |
| 8   | Family 12 d with pandas             | Signature   | Family              | Pandas & wildlife, Culture & heritage  |                     | "Families with children aged 6–17"                                                                   | Add Multi-generational?              |
| 9   | Qingcheng wellness retreat, 10 d    | Tailor-Made | Couples             | Slow travel                            | Easier pace         | "Executives, women, couples… time that is genuinely their own"; pace "unhurried"                     |                                      |
| 10  | China at an Easier Pace, 12 d       | Signature   | Couples             | Slow travel, Culture & heritage        | Easier pace         | "Mature travellers and couples"; "protected recovery"                                                | Add Multi-generational?              |
| 11  | Muslim-friendly China, 13 d         | Tailor-Made | Family, Couples     | Culture & heritage, Food & local life  | **Muslim-friendly** | "Muslim families, couples…"; "AVIORA Muslim Journey Standard throughout"                             |                                      |
| 12  | Four cities, 12 d                   | Signature   | First-time          | Culture & heritage, Pandas & wildlife  |                     | "First-time visitors who want four distinct cities"                                                  |                                      |
| 13  | Guangzhou–Shenzhen business         | Tailor-Made | none                | Food & local life                      |                     | "Executives, founders, buyers" (a business audience)                                                 | Add a "Business" tag, or leave out?  |
| 14  | Chengdu–Chongqing–Zhangjiajie, 11 d | Signature   | none                | Nature & landscapes, Food & local life |                     | "Food, wildlife and dramatic scenery"; active pace                                                   | **Who? The copy names no audience.** |
| 15  | Chengdu & Jiuzhaigou, 7 d           | Signature   | none                | Nature & landscapes, Pandas & wildlife |                     | "Nature-focused travelers comfortable with altitude and park walking"                                | **Who?**                             |
| 16  | Shanghai & Zhangjiajie, 8 d         | Signature   | none                | Nature & landscapes, Photography       |                     | "Travelers combining modern China with major mountain scenery"                                       | **Who?**                             |
| 17  | Chengdu pandas & Sichuan table, 5 d | Signature   | Family              | Food & local life, Pandas & wildlife   | Easier pace         | "Families and food lovers seeking a short private break"; "easy one-base stay"                       |                                      |
| 18  | Beijing & Great Wall, 5 d           | Signature   | First-time          | History, Culture & heritage            | Easier pace         | "A focused Beijing introduction without changing hotels"; one hotel base                             |                                      |
| 19  | Xi'an & Beijing, 6 d                | Signature   | none                | History, Food & local life             |                     | "History-led travelers"; efficient, active pace                                                      | **Who?**                             |

Counts if approved: Family 7 · First-time 6 · Couples 7 · Friends 0–1 · Multi-generational 0–2. **"Friends" and "Multi-generational" have almost no products.** Either confirm which journeys suit them, or drop those two values until they do (an empty filter is worse than none).

## 4. The two toggles

**Easier pace** (7 journeys: rows 1, 4, 5, 9, 10, 17, 18). Rule: the journey's own pace label says easy, unhurried or comfortable, with few hotel changes. Excluded on purpose: any day longer than about 8 hours with an early start (rows 3, 6, 7) and every route marked active (rows 14–16, 19).

**Muslim-friendly** (1 journey: row 11). Rule: only journeys built around a stated halal and prayer-aware standard. Row 19 mentions Xi'an's Muslim Quarter and halal food heritage, and rows 1 and 5 pass through Xi'an, but that is food culture, not a service standard. **If your team does arrange halal meals and prayer timing on those journeys, tell me and I will add them; I will not infer it.**

Neither toggle claims accessibility. A visitor searching "wheelchair" or "mobility" gets no results and the message _"For accessibility or medical needs, tell us and we will plan it with you."_ We have no verified evidence that any journey is accessible.

## 5. Data problems found while doing this

1. **Altitude is under-flagged.** The catalogue marks only Jiuzhaigou as "some" altitude. Yunnan (Lijiang, Shangri-La) is marked "none", while its own pace label says "gradual altitude gain" and the journal has a dedicated Yunnan altitude article. Western travellers with health concerns do search for this. Suggest a plain "Altitude" note on rows 2 and 15 (your confirmation of the real elevations and pacing needed).
2. **Row 13's route label** and the day-tour route labels are too long for cards; the prototype shows cities only.
3. **Three journeys (rows 9, 11, 13) still have no photograph** and use a placeholder.

## 6. What I need from you

1. Approve, edit or reject each row (a quick "OK except rows 2, 14, 15" is enough).
2. Rows 14, 15, 16, 19: which "who" tag, if any?
3. Approve the new **Pandas & wildlife** interest.
4. Keep "Friends" and "Multi-generational" now, or drop them until products exist?
5. Row 13: a "Business" tag, or none?
6. Which journeys, if any, really have halal and prayer-aware arrangements beyond row 11?
