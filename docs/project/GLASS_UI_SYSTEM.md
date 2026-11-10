# AVIORA glass controls

This is a focused evolution of the existing AVIORA design, preserving its white canvas, jade accent, Newsreader headings, Inter interface text, page hierarchy, routes and HubSpot forms. Glass is reserved for navigation, floating contact controls, itinerary tools and explicit glass button variants. Content and primary calls to action retain clear, readable surfaces.

Design settings: `DESIGN_VARIANCE: 5`, `MOTION_INTENSITY: 3`, `VISUAL_DENSITY: 3`. Motion acknowledges interaction and state changes; no continuous glow, pointer distortion, WebGL or device-specific rendering branches are used.

## Shared contract

- `design-system/tokens/foundation.css` owns glass opacity, blur, borders, shadows and the capsule radius. This is a web approximation inspired by Apple's materials, not an official Apple web component.
- `--site-nav-height` defines the 56px mobile/tablet and 64px desktop header. Sticky tools use this height. Document scroll padding already includes it, so itinerary targets add only the day bar and a reading gap.
- All action buttons use `--radius-pill` (capsules or circles), including native controls and page-specific planning links. Editorial content retains the existing surface radius. Main planning actions remain high contrast. HubSpot owns its embedded form UI.
- Non-hero content photography uses `--aspect-content-photo` (3:4), exposed to Tailwind as `aspect-portrait`. Photos use `object-fit: cover` with existing focal positions. Hero compositions, logos, maps and informational diagrams keep their own proportions. Portrait frames must not have a competing fixed height or stretch to match adjacent text. Desktop itinerary and promotional layouts place portrait photos alongside the copy; mobile layouts stack them.
- The global navigation stays visible while reading and scrolling. The day selector and article reader sit beneath it.
- There are no persistent mobile bottom pricing, inquiry or article promotion bars. Planning links and pricing stay in page content and top navigation.
- Mobile contact options expand from one 48px control. Escape and an outside press close them. The dock yields to the enquiry form, cookie choices and open dialogs.
- Unsupported blur, reduced transparency and increased contrast preferences receive opaque surfaces. Reduced motion disables transitions and entrance animation on the controls.

## Verification

Use `pnpm build` for compilation and the configured content/link audits. Check the homepage, tours list, flagship and family journeys, article and contact page at 320, 390, 768, 1024 and 1440px. Check navigation focus restoration, contact open/close, Day jump clearance, article reader clearance and reduced transparency. Browser screenshots and local QA scripts belong outside the source tree.

Browser engines can composite blur differently; layout, contrast, labels and interactions must remain usable independently of the blur effect.
