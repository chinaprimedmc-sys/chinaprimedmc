# About, company and founder trust review

Date: 2026-11-10

## Scope and starting point

Preserve the existing AVIORA brand, routes, forms, navigation and founder's original letter. The existing pages use white surfaces, forest accents, shared typography tokens and restrained editorial layouts. About already contains a destination hero, service standards, traveler needs, operating process and enquiry form. Company already publishes a registration image and official registry link. Founder already renders the first-person letter from `content/founder/index.ts`.

The main weakness was the distance between general service promises and evidence: the brand/operator relationship was repeated without enough practical verification guidance; company copy did not explain how an overseas customer could use the Chinese record; the founder was introduced on About through a quotation without a meaningful profile.

Design: preserve; DESIGN_VARIANCE 4 / MOTION_INTENSITY 2 / VISUAL_DENSITY 4. No new dependencies or animation.

## Implemented

- About opens with a concrete company introduction and the existing approved service statistics, imported from their single source rather than copied into a new claim.
- Existing legal-company details remain available through a direct link. Registration date is described as the operating company's date, not a founder or brand establishment date.
- Founder entry now leads with Guohui Shi's name and explains what his letter covers. The profile page gains a factual editorial introduction, letter navigation and a service-practice summary outside his original words.
- Company adds registry search instructions using its published Chinese legal name and credit code; explains the English reference name; distinguishes company registration from tourism licensing; adds a booking/payment comparison step.
- Shared booking expectations and five About questions cover operating responsibility, private service scope, no compulsory shopping, dietary/mobility needs, changes and enquiries.
- Booking terms and direct contact routes are available at the relevant decision points. No payment or cancellation policy was changed.
- Existing page URLs, anchor IDs, founder letter content, images, enquiry form and global navigation are preserved. Added grids collapse for mobile; links and disclosure controls have focus indicators.

## Evidence and limits

- Legal company, registration date, offices and contact channels: `config/site.ts` and the pre-existing company page.
- Registration image: `public/company/business-license.jpg`. No external verification of the current registry status was performed in this task.
- Service figures: `content/home/service-achievements.ts`, expressly recorded as company-confirmed in `docs/aviora-brand-book.md`. No new dates, measurement periods or third-party endorsements were added.
- Founder identity and original views: `content/founder/index.ts`. No invented career chronology, awards, education, portrait or attributed quotation was added.
- A separate travel-agency permit image/number and a verified founder portrait were not found in project assets. The page requests permit details from the team; it does not manufacture a document or imply that the registration image is that permit.
- No customer reviews or independent ratings were fabricated.

## Validation

TypeScript and targeted ESLint checks passed. The build result is reported in the task delivery. Visual browser QA was unavailable: the computer-use browser host was unavailable, and the shell sandbox denied localhost connections. Responsive rules and semantic disclosures were inspected in source; actual viewport rendering still needs verification in an enabled preview environment.

## Authored copy revision

Following the user's explicit request to author the copy, the founder letter was rewritten as a complete first-person editorial version rather than retaining the original text verbatim. It develops the existing founder beliefs and confirmed business scope without adding career history, personal anecdotes, dates, qualifications or customer stories. The preceding third-person thematic summary was removed so the page leads directly into the letter. About's brand story was rewritten as six substantive paragraphs, and the company profile now has four paragraphs covering positioning, planning judgment, operating identity and service transparency. This revision supersedes the earlier notes about preserving the founder letter unchanged.

## Reading and evidence refinement

- Added shared navigation across About, Company and Founder, with the current page exposed using `aria-current`.
- Added About section links and founder chapter links. Fixed About's missing `who-we-are` heading target and retained previous page/section URLs.
- Consolidated About's duplicate final conversion section into its existing inline enquiry form; no form fields or submission logic changed.
- Replaced hypothetical staff-role cards with a brief team explanation on About and a responsibilities list on Company. These describe functions without inventing named staff, headcount or separate departments.
- Added a sourced TTG Asia/MATTA Connect record to Company and Founder using the approved journal source. The founder page includes an existing approved team event photograph; it is not labeled as a founder portrait. Both links lead to the independent report and the published company story. The description explicitly avoids endorsement or certification claims.
- Added a note identifying AVIORA as the source of its service figures, without adding unsupported measurement dates or methods.
- Improved mobile company fact layouts, tablet column collapse, photo captions, founder reading width and anchor offsets. Reduced specificity of the founder text reset so shared content keeps its own spacing.
- Removed unused About CSS left behind by the consolidated sections. Referenced the canonical organization identity in About JSON-LD rather than repeating company facts within the page schema.
- Browser surface discovery remained unavailable. A native Chrome fallback could not provide a stable preview, so no visual viewport pass is claimed. Code/build verification is reported separately in task delivery.

### Final verification result

Targeted ESLint passed and all five page/component CSS modules parsed with every referenced class resolving. An intermediate full production build passed after the new navigation, press records and layout changes. The final build after the last CSS cleanup compiled successfully but its global TypeScript step was blocked by an unrelated modified product file: `content/tours/guilin-yangshuo-li-river-day-tour.ts:587` supplies `label` where `RelatedDestination` expects `name`, `description`, `image` and `href`. That product file was not edited by this task. Final visual QA remains unverified for the browser-access reason above.
