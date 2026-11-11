# Mobile consultation and trust pages

Date: 2026-11-11

## Implemented

- Consultation page: shortened the introduction above the form, added a mobile-only link to the enquiry section, tuned title wrapping and reassurance spacing, and stacked direct-contact links with 48px touch targets.
- Trip notes: retained the complete brief and HubSpot prefill, with a native disclosure for review/copy/share controls. Added a direct jump to the hosted form. Notes remain available without a custom JavaScript disclosure implementation. The disclosure is shared on desktop too.
- About navigation: three equal-width links on small screens, with wrapping labels and 56px minimum height. All three destinations remain visible without horizontal scrolling.
- About page: two-column section index on phones, reduced excess section spacing, adjusted long-form typography and capped the founder photo at 280px while retaining the full 2:3 photograph.
- Founder page: reduced top spacing, tuned heading and letter rhythm, capped the uncropped photograph, and stacked closing actions with 48px minimum heights.
- Company page: improved section navigation, long-name wrapping, permit/document captions, small legal-name text and link touch targets. Existing registration facts and document zoom link remain available.
- Service cases and booking guide: adjusted heading scales, vertical spacing, quotation inset and source-link touch targets for narrow screens.
- Enquiry dialog: dynamic viewport height, explicit flex scroll constraints, safe-area padding and contained overscroll for phone keyboards and browser chrome.

All new surfaces remain white. HubSpot remains the official hosted form; its internal iframe layout and input styling are controlled by HubSpot, not overridden across origins. No field names, consent copy, submissions, policies, route URLs or primary navigation labels were changed.

## Validation

- Read installed Next.js CSS and viewport documentation. The existing viewport continues to allow zoom; no scale restrictions were introduced.
- TypeScript passed.
- Targeted ESLint, Prettier and diff whitespace checks passed.
- Existing context, identity and review tests: 26 passed.
- Updated provider-fixture browser scenarios for the trip-notes disclosure. Added 320/390/430px consultation scenarios and narrow-phone About/company/founder checks for overflow, link size and photograph ratio.
- Browser launch was attempted via `@playwright/test`. Chromium failed during startup with `MachPortRendezvousServer Permission denied`. The new browser scenarios and actual visual appearance could not be verified here. Earlier local-server attempts were also blocked by port permissions. No screenshot acceptance, device acceptance or successful production build is claimed.

## Device acceptance still required

Run `pnpm exec playwright test tests/browser/enquiry.spec.ts --project=chromium` against an accessible fresh build, then check iOS Safari with its keyboard open, 200% zoom, long visitor messages, actual hosted form fields, success/error states and narrow landscape mode. The fixture does not create real leads or prove HubSpot notification delivery.

## Shared enquiry follow-up

Moved the shared enquiry's supporting promises, rating and quote after HubSpot in document order. Narrow layouts now show the short introduction followed by the form; desktop CSS retains the two-column composition. The source links, quote, analytics placement and lazy-loaded official HubSpot embed remain intact. Updated the general introduction to describe the initial planning conversation without implying a finished quotation in the first reply.

Set both shared enquiry tones and the dialog panel to white. Increased phone close-button size to 48px, improved contact-link spacing, and stacked media-source links with larger captions. Added a browser fixture scenario for form/evidence order and the white surface. Browser execution remains blocked by the environment described above; no new device acceptance is asserted.
