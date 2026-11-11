# Mobile journey detail template

Date: 2026-11-11

Implemented in the shared `TourDetailLanding` template, with the 10-day Beijing/Xi'an/Shanghai journey as the browser-fixture reference.

- On phones, separated the headline and route from the photograph onto a white surface. Reduced the photo height and removed the dark hero overlay on that breakpoint.
- Added a mobile price overview with the existing pricing component or route-specific pricing block, existing basis, ideal audience where provided, and an anchor to the official HubSpot enquiry. No independent price or new service promise was added.
- Added section links for the itinerary where present, inclusions/exclusions, price details and questions. Framework journeys omit the nonexistent daily-itinerary link.
- Retained the existing native day disclosures, with expand/collapse-all controls and focus transfer when using day jump buttons. Reduced-motion users retain instant scrolling and no chevron transition.
- Increased small daily labels and supporting text, clarified mobile spacing and white surfaces, and stacked daily transport/meal/stay details for narrow widths.
- Passed the journey title through the existing lazy HubSpot wrapper as optional message context. The visible instruction remains available when the runtime cannot prefill; HubSpot continues to manage hosted fields, consent, validation and submission.
- Added browser-fixture scenarios at 320px and 390px for price visibility, disclosure controls, day focus, enquiry navigation and page overflow. These have not executed because browser/server access remains restricted in this environment.

Validation: TypeScript, targeted ESLint, Prettier and diff checks passed. Context/identity regression tests passed (15 tests). No device visual acceptance, production build, live HubSpot delivery or deployment is claimed. Existing earlier audit records document the browser startup and port-permission failures.
