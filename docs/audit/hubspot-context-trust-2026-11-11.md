# HubSpot context handoff and evidence clarity

Date: 2026-11-11

## Provider retained

The existing official HubSpot embed remains the form provider:

- Portal: `247485719`
- Form: `944e4a41-6e38-4e00-b6ee-eb2b6846998b`
- Region: `na2`
- Loader: `https://js-na2.hsforms.net/forms/embed/247485719.js`

No replacement submission endpoint, native lead form, new consent text or invented CRM field was introduced. Hosted validation, consent and actual submission remain with HubSpot.

## Delivered

- The planning page now renders a bounded trip brief containing the current journey, destination, saved journey titles, preferences and matching summary. Duplicate shortlist titles and control characters are removed.
- If HubSpot's V4 runtime exposes an existing `message` or `0-1/message` field, the integration attempts to fill it only when empty. A readback must match before the page says the notes were added. Existing nonempty messages are preserved.
- Supplemental context metadata is attached when the runtime supports it. Metadata is not represented as a verified CRM property or guaranteed notification-email content.
- If field detection or API support is unavailable, the complete notes remain visible and copyable. Email and WhatsApp links include them in their draft messages. These links do not send anything automatically.
- Links carrying journey, destination, shortlist or matching context now reach the full planning page rather than having their parameters lost in the generic modal or scroll handler. Context-free links retain the existing modal/inline behavior.
- Added loading, delayed-load, script-error, provider-reported submission-error and confirmed-submission messages. Contact fallback remains available. Reloading warns about clearing entered details.
- A pre-submit callback never displays success. Legacy callbacks require the configured form ID, a HubSpot HTTPS origin and the current iframe source. V4 success/failure is scoped to the instance identified by its ready event.
- Conversion tracking supports both V4 and legacy acceptance events, deduplicates nearby callbacks, and retains its existing analytics-consent boundary. Trip notes and contact details are not added to analytics payloads.
- Qualified reply timing consistently as normally within 24 hours in contact, shared closing and family-tour proposal copy. An initial reply is distinguished from a completed quotation.
- Marked existing review material as legacy website content rather than newly substantiated guest submissions. Preserved publication flags as historical metadata, explicitly documenting that they are not individual authorization or booking records. No Verified flags were created.
- Added source/ratings clarification on the review page and identified the consultation rating link as website-hosted guest feedback.
- Shared the company-reported service-figure qualification across the About page, text feeds and organization schema. No reporting period or external audit was fabricated.
- Added a prefilled permit-verification email link requesting permit number, issuing authority, business scope and a copy. Clarified that the page currently displays the company registration document, not a separate tourism permit.

## Validation

- `pnpm typecheck`: passed.
- Targeted ESLint: passed.
- `node --test tests/enquiry-context.test.mjs tests/about-identity.test.mjs tests/review-board.test.mjs`: 26 passed.
- Tests cover complete context preservation, safe draft links, bounds, field capability checks, non-overwrite behavior, readback, unsupported APIs, trusted callback sources, event-instance filtering and evidence attribution.
- Added four Playwright scenarios using a mock provider. They exercise prefill, existing-message preservation, blocked-script fallback and instance-scoped success without creating real leads.
- Attempted `pnpm exec playwright test tests/browser/enquiry.spec.ts --project=chromium --reporter=list`. The web server could not bind `127.0.0.1:3148` (`listen EPERM`), so the browser scenarios did not execute.
- External HubSpot documentation fetch also failed DNS resolution. Optional API calls are capability-checked and the fallback does not depend on them. Live field availability and API behavior are not asserted from mock tests.

## Remaining external checks

1. Inspect the actual hosted form to confirm its message property's internal name and V4 runtime support. If different, add that verified property name to the allowlist; do not guess field names or change consent fields.
2. With a designated test submission, confirm the notes reach HubSpot's submission record, contact record where configured, and the actual team notification/workflow. A client success event confirms provider acceptance, not downstream inbox delivery.
3. Review desktop/mobile appearance and the external iframe's own styling. The surrounding controls use white surfaces; the iframe is configured in HubSpot.
4. Supply the actual tourism permit details and the underlying service-statistic period/counting basis. Existing historical feedback still needs individual source and authorization records before stronger verification claims can be made.
5. Complete deployment and Search Console URL inspection separately. No live indexing or AI Overview inclusion is claimed.
