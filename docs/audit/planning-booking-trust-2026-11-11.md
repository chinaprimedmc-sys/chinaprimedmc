# Planning and booking clarity

Date: 2026-11-11

## Scope

Improved `/start-planning` with an English consultation-to-booking explanation. Preserved its URL, existing form integration, query handling, tracked contact links and legal terms.

## Changes

- Made existing reassurance copy visible on mobile as well as desktop, including the usual 24-hour personal reply and no payment obligation to enquire. This is the existing expectation, not a new guaranteed response deadline.
- Added a short brief explaining what guests can share when dates or destinations remain undecided.
- Replaced the three-column process with four numbered editorial steps: enquiry, proposal, binding booking and travel preparation.
- Corrected the implication that a quotation itself confirms hotels. Proposed services are subject to availability until written confirmation.
- Summarized all four binding-booking conditions from the existing terms: written documents, formal acceptance, cleared initial payment, and AVIORA's written acceptance with relevant supplier arrangements.
- Added six proposal-checking topics and links to `/terms` and `/company`. Payment amounts, payment methods, cancellation bands and refund guarantees were not invented or changed.
- Added four native disclosure questions covering uncertain plans, booking status, practical needs and changes/cancellation.
- Used pure-white surfaces, neutral typography and responsive layouts. The external HubSpot iframe's internal styling remains controlled by its external configuration.
- Linked the Service JSON-LD provider to the existing organization identifier, with canonical planning and terms URLs.

## Design review

Targeted evolution of the existing consultation page using the design-taste-frontend skill. Design variance 3, motion intensity 1, visual density 4: clarity and restrained editorial typography for international guests. Retained the existing design primitives, with local CSS for the process, checklist and disclosures. No decorative animation, invented testimonials or new lead fields.

## Validation and limits

- TypeScript and targeted ESLint passed.
- Prettier and `git diff --check` passed.
- Content was compared with the current booking terms and About booking expectations.
- Native details/summary preserves keyboard access; the new guide's focus indicators and desktop/mobile CSS were reviewed in source.
- Local preview attempt on `127.0.0.1:3012` failed with `listen EPERM`. Browser layout, external form loading and successful submissions were not verified. No test lead was sent.
- No deployment or live search/indexing validation was performed.

After preview access is available, review desktop and narrow mobile layouts, confirm HubSpot styling/loading, and test submission with a clearly designated test lead if authorized.
