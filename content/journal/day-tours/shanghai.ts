import type { DayTourCluster } from "./article";

export const shanghaiCluster: DayTourCluster = {
  journey: "private-shanghai-day-tour-guide-driver",
  destination: "shanghai",
  label: "private Shanghai day tour",
  service:
    "The published AVIORA day connects a central Shanghai hotel pickup, private vehicle and driver, English-speaking guide, Yu Garden admission, one ordinary Huangpu public-ferry crossing and hotel return during the confirmed service window. There are no compulsory shopping stops. The actual order is adjusted to the date's operating conditions and your priorities.",
  boundary:
    "The ferry is public, not a private river cruise. Lunch, Shanghai Tower, an evening cruise and other upgrades are separate unless stated in the written confirmation. Airport, cruise-port, railway-station and non-central pickups require a quote. Traffic, venue operation and reservation conditions can change the sequence; check current inclusions on the product page.",
  citations: [
    {
      name: "Travel in Shanghai",
      url: "https://english.shanghai.gov.cn/en-TravelinShanghai/index.html",
      publisher: "Shanghai Municipal Government",
    },
    {
      name: "Yu Garden",
      url: "https://www.yugarden.com.cn/",
      publisher: "Shanghai Yuyuan Tourist Mart Group",
    },
    { name: "Shanghai Metro", url: "https://service.shmetro.com/en/", publisher: "Shanghai Metro" },
  ],
  guides: [
    {
      slug: "shanghai-one-day-itinerary-yu-garden-bund-ferry",
      title: "Shanghai in One Day: A Sensible Route From Yu Garden to the Bund",
      seoTitle: "Shanghai One-Day Itinerary: Yu Garden, Bund and Ferry",
      description:
        "Plan one useful day in Shanghai around Yu Garden, the Huangpu waterfront and a public ferry, with realistic time for transfers and meals.",
      keyword: "Shanghai one day itinerary Yu Garden Bund",
      intent: "plan",
      answer:
        "For one day in Shanghai, combine one heritage district, one waterfront view and a river crossing only if the live schedule fits. Yu Garden and the Bund pair naturally, but traffic, opening hours and queues decide the order. Do not mistake a public ferry for a sightseeing cruise.",
      sections: [
        {
          title: "Choose a route with a clear contrast",
          paragraphs: [
            "Shanghai is easier to understand when a day connects rather than collects experiences. Yu Garden offers a concentrated historic setting; the Bund opens onto the riverfront and changing skyline. A crossing by ordinary public ferry can show how local river transport works, but it is a short transport journey, not an extended narrated cruise.",
            "The order should reflect the date and your hotel. Start with whichever venue has the tighter access window, then move between areas with enough buffer for city traffic. Avoid promising an exact minute-by-minute sequence before checking live opening, reservation and ferry conditions.",
          ],
        },
        {
          title: "Protect time at Yu Garden",
          paragraphs: [
            "A garden visit involves more than its gate-to-gate distance. The surrounding old-town lanes attract visitors and can be busy; paths, bridges and pavilions encourage slower movement. Decide whether your interest is garden architecture, local history, street food or shopping nearby. One focused priority gives the visit shape without requiring every lane.",
            "Check current opening and ticket instructions with the venue before the date. Holidays, maintenance and capacity can change access. If a timed booking is required, keep the rest of the plan flexible enough to reach it without turning the morning into a race.",
          ],
        },
        {
          title: "Use the Bund for context, not just a photo",
          paragraphs: [
            "The Bund is a public waterfront rather than a controlled attraction with a fixed visit length. Views depend on weather, light and crowd levels. Walk a section that suits your energy, pause to compare the historic riverfront buildings with Pudong, and avoid scheduling a distant indoor attraction immediately afterward without a transfer buffer.",
            "The public ferry can add a useful local perspective if it operates on a suitable route and time. It follows the operator's public process and may involve queues or standing. If you want a longer skyline experience, ask about an evening cruise as a separate option; it is not interchangeable with the ordinary ferry crossing.",
          ],
        },
        {
          title: "Keep lunch and the afternoon realistic",
          paragraphs: [
            "Lunch can be independent or arranged as an optional set meal. Tell the planner about allergies and dietary needs in specific terms and request confirmation of the actual menu. A restaurant recommendation is not a guaranteed reservation, and a set menu does not automatically include unlimited drinks or substitutions.",
            "After lunch, choose one extension only if the day still has room: an observation deck, a museum, a neighborhood walk or a rest. Shanghai Tower admission and evening experiences have separate operating rules and costs. The right choice depends on visibility, energy and how late you want to be out.",
          ],
        },
        {
          title: "What to confirm for a one-day visit",
          paragraphs: [
            "A well-scoped day plan tells you which hotel addresses are within the pickup area, how venue tickets are handled and what happens if the ferry is delayed or unavailable. Central Shanghai traffic remains unpredictable, so any onward train, flight or cruise departure should be treated as a separate critical connection with a generous buffer.",
          ],
          items: [
            "Hotel pickup and return area, plus the service end time.",
            "Yu Garden ticket and current entry requirements.",
            "Whether the river segment is a public ferry or a separately priced cruise.",
            "Lunch, optional tower admission and any evening extension.",
          ],
        },
      ],
      faqs: [
        {
          question: "Can I see Yu Garden and the Bund in one day?",
          answer:
            "Yes, they are commonly combined, subject to live opening hours, traffic and your walking pace. Keep additional distant attractions optional.",
        },
        {
          question: "Is the included ferry a Huangpu sightseeing cruise?",
          answer:
            "No. The AVIORA base itinerary includes one ordinary public-ferry crossing. A longer sightseeing cruise is a separate upgrade when available.",
        },
        {
          question: "Can I add Shanghai Tower?",
          answer:
            "It may be added with advance arrangement and a separate ticket cost. Confirm the time slot and impact on the route for your date.",
        },
      ],
    },
    {
      slug: "shanghai-day-tour-cruise-port-airport-pickup",
      title: "Shanghai Day Tour From a Cruise Port or Airport: What to Check",
      seoTitle: "Shanghai Day Tour: Cruise Port and Airport Pickup",
      description:
        "Check luggage, terminal, service hours and onward-connection buffers before turning a Shanghai layover into a private sightseeing day.",
      keyword: "Shanghai day tour cruise port airport pickup",
      intent: "answer",
      answer:
        "A Shanghai sightseeing day from an airport or cruise terminal needs a different quote and operating plan from a central-hotel tour. Confirm the exact terminal, luggage, immigration or disembarkation timing, service hours and return buffer before buying attractions.",
      sections: [
        {
          title: "Start with the exact arrival point",
          paragraphs: [
            "Shanghai has multiple airports and cruise facilities, and a ship or airline itinerary may name a terminal rather than a city district. Send the full flight or sailing details, arrival date, terminal and onward departure. The words Shanghai pickup are not enough to calculate a reliable vehicle plan.",
            "Ask where the driver can legally meet you and whether the guide joins there or at a different point. Port access procedures, parking and terminal rules can affect the meeting arrangement. Do not rely on an old screenshot or assume the same instructions apply to every cruise call.",
          ],
        },
        {
          title: "Treat immigration and disembarkation as variable",
          paragraphs: [
            "Arrival time on a schedule is not the same as the moment you can leave the terminal. Immigration, baggage, port procedures and the ship's operations can take longer than expected. Build the route from a realistic exit time and keep one or more attractions removable.",
            "If the day is a short layover, avoid non-refundable timed entries until the arrival plan is credible. A private vehicle can wait only under agreed service terms. Confirm included waiting time, late-arrival communication and any overtime rate in writing.",
          ],
        },
        {
          title: "Plan for luggage before the vehicle is assigned",
          paragraphs: [
            "Tell the operator how many travelers and bags you have, including unusually large or fragile items. A vehicle sized for hotel sightseeing may not comfortably hold a cruise party's full luggage. Storage or a transfer to a hotel may need separate planning and pricing.",
            "Never leave passports, medication or valuables in an unattended vehicle. If you intend to visit with luggage, request the precise handling plan and confirm whether the vehicle remains with you. Do not assume a public attraction will accept every bag or provide suitable storage.",
          ],
        },
        {
          title: "Build the day backward from the hard deadline",
          paragraphs: [
            "For a flight, rail departure or all-aboard time, set a conservative return deadline first. Then subtract city transfer time and a disruption buffer before deciding how much sightseeing is sensible. The remaining window, not the published tour length, determines what fits.",
            "For an airport change between Pudong and Hongqiao, account for cross-city travel and airline check-in rules. Do not make the tour responsible for a connection with inadequate margin. A specialist can suggest a reduced route, but cannot guarantee against congestion or airport procedures.",
          ],
        },
        {
          title: "Get a different written scope",
          paragraphs: [
            "The standard AVIORA product is based on central Shanghai hotel pickup and return. Port, airport, station, unusual luggage or a long extension must be priced and confirmed separately. That distinction protects you from assuming that a central-city starting price covers a terminal transfer.",
          ],
          items: [
            "Exact terminal and flight or ship details.",
            "Party and luggage dimensions or quantity.",
            "Meet location, included waiting and service hours.",
            "Hard return deadline and fallback if arrival is late.",
          ],
        },
      ],
      faqs: [
        {
          question: "Is airport pickup included in the Shanghai day tour?",
          answer:
            "The standard published base covers central Shanghai hotel pickup and return. Airport pickup is quoted separately after the flight, terminal and timing are reviewed.",
        },
        {
          question: "Can I tour Shanghai during a cruise stop?",
          answer:
            "Potentially, if port access, disembarkation time and return deadline leave a workable window. Do not book on scheduled arrival time alone.",
        },
        {
          question: "Can the car hold our cruise luggage?",
          answer:
            "Capacity depends on party and bag size. Provide details and get the vehicle and luggage plan confirmed before booking.",
        },
      ],
    },
    {
      slug: "shanghai-private-guide-driver-day-tour-worth-it",
      title: "Is a Private Guide in Shanghai Worth It for One Day?",
      seoTitle: "Shanghai Private Guide and Driver: Is It Worth It?",
      description:
        "Decide whether a Shanghai guide-and-driver day is worth the cost by comparing navigation, interpretation and flexibility with public transit.",
      keyword: "Shanghai private guide driver day tour worth it",
      intent: "evaluate",
      answer:
        "A private Shanghai guide-and-driver day is most valuable when it removes meaningful coordination or interpretation work. Independent visitors may do well on the metro; families, short-stay travelers and guests with several stops may value a connected hotel-to-hotel plan more.",
      sections: [
        {
          title: "What the metro already does well",
          paragraphs: [
            "Shanghai's metro is extensive and often the rational choice for travelers comfortable with route apps, station transfers and peak crowds. It can be efficient between central neighborhoods and gives visitors more independence. For one or two stops, public transit may cost far less than a full private service.",
            "Transit does not include interpretation, queue planning, ticket coordination or someone adapting the day around your group. Whether those differences matter is personal. Do not pay for a driver simply because public transportation is unfamiliar if your party enjoys navigating cities.",
          ],
        },
        {
          title: "What a guide adds beyond a car",
          paragraphs: [
            "A qualified English-speaking guide can explain why a garden, street or waterfront looks as it does and help connect the city across different periods. A driver handles the vehicle; the guide handles the agreed interpretation and guest coordination. The two roles should not be confused in a quote.",
            "A car can reduce repeated station access, stairs and vehicle changes, but Shanghai traffic may make it slower than rail at certain times. A good operator chooses transport by route and conditions rather than claiming that a private car beats every mode everywhere.",
          ],
        },
        {
          title: "Calculate value for your actual group",
          paragraphs: [
            "Compare the total party price, not only a per-person headline. A private vehicle can become more reasonable when divided among several guests, while a solo traveler may prefer transit. Also account for guide service, included admission, ferry, pickup convenience and the cost of separately arranging each component.",
            "Identify the friction you are buying down: airport coordination, a family pace, mobility needs, limited time or cultural context. If none applies and your route is simple, self-guided touring may be the better choice. Premium should describe service fit, not make independent travel sound inadequate.",
          ],
        },
        {
          title: "Set the boundaries before calling it flexible",
          paragraphs: [
            "A private day can reorder visits within a confirmed service window, but flexibility is not unlimited time. Additional hours, far-flung locations and an evening extension may cost more. Yu Garden admission and a public-ferry crossing are included in this product; lunch and Shanghai Tower are not automatically part of the base.",
            "Ask whether the guide stays with you at the venue, what the driver does during the visit and how late changes are handled. Confirm any meal, dietary request and pickup outside central districts before payment. The written proposal should make the trade-offs legible.",
          ],
        },
        {
          title: "A quick decision test",
          paragraphs: [
            "If your day has one central neighborhood and you enjoy exploring alone, use public transit. If your party wants connected interpretation and door-to-door service across a planned sequence, compare a private day with an honest total. Neither option is universally superior.",
          ],
          items: [
            "How many locations and transfers are truly needed?",
            "Does anyone benefit from fewer stairs or vehicle changes?",
            "Do you want cultural interpretation, not only transport?",
            "Are the confirmed inclusions worth the private-group price?",
          ],
        },
      ],
      faqs: [
        {
          question: "Will a private car be faster than the metro?",
          answer:
            "Not consistently. Traffic and parking can make a car slower on some routes; the value may instead be direct pickup, fewer transfers and a guide.",
        },
        {
          question: "Can we hire only a Shanghai guide?",
          answer:
            "Ask for the service format you need. A guide-only arrangement and a guide-plus-driver day have different logistics and pricing.",
        },
        {
          question: "Does the day include lunch?",
          answer:
            "No. Lunch is separate unless a specific meal option appears in your written confirmation.",
        },
      ],
    },
    {
      slug: "shanghai-yu-garden-bund-public-ferry-guide",
      title: "Yu Garden, the Bund and Shanghai Ferry: What Each Visit Is",
      seoTitle: "Yu Garden, the Bund and Shanghai Ferry Explained",
      description:
        "Know the difference between Shanghai's classical garden, public waterfront and ordinary Huangpu ferry before planning them together.",
      keyword: "Yu Garden Bund public ferry Shanghai guide",
      intent: "answer",
      answer:
        "Yu Garden, the Bund and an ordinary Huangpu public ferry are three different experiences: a ticketed garden, a public promenade and a short transport crossing. Combining them can give a one-day visitor useful contrast, but the ferry is not a private or narrated cruise.",
      sections: [
        {
          title: "Yu Garden is a focused heritage visit",
          paragraphs: [
            "Yu Garden is a historic garden complex in the old-city area, where designed views, pavilions, rocks, water and bridges reward a slower visit. The surrounding commercial lanes are a separate environment, even though many visitors explore both during the same stop.",
            "Check the official venue's current opening and ticket notices. Busy dates, maintenance and entry management can affect access. Admission on the AVIORA day refers to the included Yu Garden ticket; nearby shops and food purchases remain personal or separately arranged expenses.",
          ],
        },
        {
          title: "The Bund is a public riverfront",
          paragraphs: [
            "The Bund is best understood as an urban waterfront and architectural panorama. You can compare the historic buildings on the west bank with Pudong's contemporary skyline across the river. The view changes with light, haze, weather and construction or public event management.",
            "There is no single required path length. Choose a section that fits your time and walking comfort. Weekend crowds may make photography slower, so avoid guaranteeing a clear viewpoint or an empty promenade.",
          ],
        },
        {
          title: "A public ferry is transport, not a cruise product",
          paragraphs: [
            "The ordinary ferry provides a river crossing on a public route. It may offer a brief water-level perspective and a glimpse of everyday movement, but it is not equivalent to an evening sightseeing cruise with a dedicated route and longer onboard time.",
            "Ferry routes, schedules, boarding points, queues and service can change. The AVIORA product includes one ordinary crossing, subject to operation. Ask which route is planned and whether timing requires adjusting the surrounding itinerary. A second crossing or cruise is not implied.",
          ],
        },
        {
          title: "How to connect the three without overplanning",
          paragraphs: [
            "The garden and Bund often work well as the cultural and riverfront anchors of a day. The ferry can connect them if its actual boarding points and schedule suit the plan. If not, a road transfer or metro may be more practical; no one experience needs to be forced just because it appears in an itinerary template.",
            "Plan around venue access first, then allow travel time and a meal break. Add Shanghai Tower or an evening cruise only if your group wants those experiences and the day has room. Optional tickets should be identified separately in the written quote.",
          ],
        },
        {
          title: "Questions to ask before confirming",
          paragraphs: [
            "A clear plan identifies the exact ferry type, garden ticket and service area. It should also tell you whether the guide accompanies the crossing and what changes if operations pause. These details matter more than a broad promise to see the river.",
          ],
          items: [
            "Which Yu Garden ticket and date are arranged?",
            "Which public ferry route is intended?",
            "What is the fallback if ferry service changes?",
            "Are any cruise, tower, food or shopping activities extra?",
          ],
        },
      ],
      faqs: [
        {
          question: "Is the Bund a ticketed attraction?",
          answer:
            "It is a public waterfront area. Access and crowd controls can vary during events, but there is not a standard attraction admission ticket for the promenade itself.",
        },
        {
          question: "Does a ferry ticket include a river cruise?",
          answer:
            "No. A public ferry crossing is a short transport service. A sightseeing cruise is a distinct product with its own ticket and schedule.",
        },
        {
          question: "Can the ferry be guaranteed for my date?",
          answer:
            "No public service should be promised without checking its current operation. The guide can revise the sequence or use an agreed alternative if needed.",
        },
      ],
    },
    {
      slug: "shanghai-day-tour-family-older-travelers-pace",
      title: "A Shanghai Day Tour for Families and Older Travelers",
      seoTitle: "Shanghai Day Tour for Families and Older Travelers",
      description:
        "Shape a Shanghai day around children, older parents and walking comfort without pretending the city is free of stairs or crowds.",
      keyword: "Shanghai day tour family older travelers pace",
      intent: "evaluate",
      answer:
        "A comfortable Shanghai day limits the number of districts, builds in seated breaks and treats metro stairs, garden paths and crowds as real effort. Private hotel pickup can simplify transitions, but it cannot make historic sites step-free or remove city traffic.",
      sections: [
        {
          title: "Set a shared pace before choosing attractions",
          paragraphs: [
            "For a multigenerational group, ask each traveler what makes a day enjoyable: a short garden visit, architecture, river views, shopping or a long lunch. The itinerary should be based on the least flexible need, not the most energetic person's wish list.",
            "Describe mobility in practical terms. Can someone manage stairs? How long can they stand? Do they need a restroom or seated break at predictable intervals? This helps identify whether Yu Garden and the Bund are suitable and how much time to leave between them.",
          ],
        },
        {
          title: "Reduce transitions rather than rushing each stop",
          paragraphs: [
            "Every move through a large city costs time and attention. Fewer district changes usually create a more pleasant day than fitting several famous sites into a tight schedule. Private vehicle transfers may simplify door-to-door movement, while walking and traffic remain part of the experience.",
            "If a traveler uses a wheelchair or walker, request a site-specific access review. Old gardens, ferry boarding and waterfront edges may include steps, uneven surfaces or gaps. Do not equate private transport with full accessibility; the route and assistance must be checked component by component.",
          ],
        },
        {
          title: "Plan the ferry around boarding comfort",
          paragraphs: [
            "A public ferry adds a local river crossing but requires boarding the operating vessel with other passengers. Queues, ramps, steps and standing may be involved, and the actual conditions depend on the pier and boat. A traveler who cannot manage those movements may prefer to skip it.",
            "Tell the planner if anyone needs more time to board or cannot stand in line. Ask for a fallback with a similar view, recognizing that a private cruise or another venue may add cost. The ferry is an optional experience in terms of group suitability even where it is included in the base product.",
          ],
        },
        {
          title: "Use food and rest as part of the route",
          paragraphs: [
            "A meal is a natural recovery point, not a gap to fill with another attraction. Confirm whether lunch is independent or an optional arranged meal. Share allergies, spice tolerance and seating needs early, and request a defined menu if dietary certainty matters.",
            "For children, consider snack timing and restroom stops; for older adults, consider shade, seating and a return before fatigue peaks. A private guide can coordinate within the service window but cannot provide nursing, lifting or personal care unless separately and appropriately arranged.",
          ],
        },
        {
          title: "Make the service fit explicit",
          paragraphs: [
            "Before booking, confirm the hotel area, service hours, walking sequence and what happens if someone needs to shorten the day. An honest operator will distinguish what can be adapted from what is controlled by public venues, ferry services and traffic.",
          ],
          items: [
            "Mobility aids, stairs and standing tolerance.",
            "Child ages, car-seat needs and break rhythm.",
            "Ferry boarding suitability and an agreed fallback.",
            "Meal format, allergies and the final return address.",
          ],
        },
      ],
      faqs: [
        {
          question: "Is Yu Garden wheelchair accessible?",
          answer:
            "Do not assume complete step-free access. Confirm the specific gate, route and facilities with the venue for your date and mobility needs.",
        },
        {
          question: "Can we skip the ferry?",
          answer:
            "Yes, discuss this before confirming so the day and any pricing are clear. A public crossing may not suit every traveler.",
        },
        {
          question: "Can the guide provide personal mobility assistance?",
          answer:
            "Guiding is not medical or personal-care service. State the required assistance and confirm whether qualified support is available.",
        },
      ],
    },
  ],
};
