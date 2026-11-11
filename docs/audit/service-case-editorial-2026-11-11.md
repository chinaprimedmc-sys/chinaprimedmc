# Service stories: editorial basis

Three English service accounts are presented on `/about#service-cases`, alongside links to individual original reviews. The full copy is in `content/about/service-cases.ts`.

| Story                                            | Existing feedback        | Scope                                                                               |
| ------------------------------------------------ | ------------------------ | ----------------------------------------------------------------------------------- |
| Making a first journey to China feel manageable  | Review 1, Emily Carter   | First-visit concerns, pace, walking comfort, hotels and private vehicle             |
| Choosing a stay for the days around it           | Review 4, Sophie Bennett | Hotel locations, comfort, evenings and relaxed mornings                             |
| Knowing when a good afternoon deserves more time | Review 6, Laura Mitchell | The neighborhood afternoon described in the feedback, with coffee, shops and dinner |

The existing review dataset records these submissions as approved and authorized for website use. These accounts are editorial summaries of that feedback, not independently audited booking files. No destinations, dates, party sizes, booking values, photos or service outcomes were inferred. Quotations are exact excerpts. The stories do not receive `Verified` badges, ratings or review structured data.

The component derives guest identities and source links from publicly eligible reviews. If a review becomes ineligible for publication, its service story is omitted. A story is also omitted if its quotation no longer matches its source. The planning takeaway in each account is editorial guidance, separated from the guest's reported experience.

Validation: TypeScript and targeted ESLint passed. All three quotes and individual review links were checked against the authorized review set and existing review filtering logic. Whitespace checks passed. Production build was blocked by network failure fetching Inter and Newsreader through `next/font`, not by a reported case-content or component error. Visual viewport verification was not performed.

## White editorial design

At the user's request, the three About pages now share a page-scoped white canvas and neutral color tokens. About's photo-background hero became white editorial copy beside an independent photograph. Destination captions sit below their images, with gradient overlays removed. The company document frame and founder CTA have white backgrounds. Service cases use larger editorial headings, restrained quote treatment, more deliberate spacing and a desktop sticky introduction within each account; mobile accounts remain a normal vertical flow. Shared global styles and unrelated pages were not changed.

TypeScript, targeted ESLint, formatting and CSS parsing/palette checks passed. The production build remains blocked by DNS/network failure fetching Inter and Newsreader from Google Fonts. No rendered visual QA is claimed.
