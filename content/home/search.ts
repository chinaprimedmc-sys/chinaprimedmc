/** Shared homepage facts for visible copy, JSON-LD and the optional AI reading guides. */
export const homeSearch = {
  title: "Private China Tours with Full-Service Local Support",
  description:
    "Plan a private China tour with AVIORA. One team coordinates hotels, guides, transport and support from itinerary design to departure. Enquire.",
  heroTitle: ["Private China tours,", "at your pace."],
  heroDescription:
    "One China-based team handles your itinerary, hotels, guides and domestic transport, with local support from airport pickup to your final departure transfer.",
  overviewTitle: "Your full-service China travel team.",
  overview:
    "AVIORA China Travel provides one-stop, full-service private tours across China for international families, couples and older travelers. One China-based team coordinates itinerary design, reservations, airport pickup, hotels, guides, vehicles, domestic trains and flights, in-trip support and departure transfers. Our offices are in Beijing, Shanghai and Xi’an. Your written proposal confirms the services, inclusions and price; international flights are booked separately.",
  audiences: ["International families", "Couples", "Older travelers"],
} as const;

export const homeServiceJourney = {
  title: "One team, from planning to departure.",
  description:
    "For a complete multi-day journey, AVIORA brings planning, bookings and on-the-ground support together. One China-based team coordinates the services agreed in your proposal.",
  stages: [
    {
      title: "Before you travel",
      body: "We design the route, check room arrangements with the hotels and reserve your agreed stays, tickets and domestic transport. Your written proposal records the itinerary, inclusions, exclusions and price.",
    },
    {
      title: "From arrival through each city",
      body: "Airport pickup, hotel arrivals, private guides and drivers, domestic trains and flights, and city-to-city handovers are coordinated by our China-based team. Your guide and road transport serve your party; flights, trains and public sights remain shared.",
    },
    {
      title: "Support through departure",
      body: "We coordinate your confirmed services, help with schedule changes during the trip and arrange the agreed final airport transfer, checking the terminal, luggage and pickup time. International flights are booked separately.",
    },
  ],
} as const;

export const homeFeaturedJourneys = [
  {
    slug: "beijing-xian-shanghai-private-10-day-tour",
    audience: "A first visit to China",
    title: "Beijing, Xi’an & Shanghai",
    description:
      "The Great Wall, imperial Beijing, the Terracotta Army and Shanghai, with private transfers between each stage.",
    detail: "Three cities · A slower introduction to China",
  },
  {
    slug: "china-family-tour-with-pandas-12-day-private-tour",
    audience: "Parents, children & grandparents",
    title: "China with the family",
    description:
      "Pandas, the Great Wall and hands-on history, with hotel room arrangements and time to rest built into the planning.",
    detail: "Four cities · Children aged 6–17",
  },
  {
    slug: "luxury-yunnan-private-tour",
    audience: "Landscapes & smaller towns",
    title: "Yunnan’s Tea Horse Road",
    description:
      "Dali, Shaxi, Lijiang and Shangri-La, connecting old trading towns with the mountains of southwest China.",
    detail: "A regional journey · Boutique and luxury stays",
  },
] as const;

export const homeSearchGuides = [
  {
    title: "Planning a first trip to China",
    href: "/journal/first-trip-to-china-planning-guide",
  },
  { title: "What a private China tour costs", href: "/journal/private-china-tour-cost-2026" },
  { title: "Choosing when to visit China", href: "/journal/best-time-to-visit-china" },
  {
    title: "China family itineraries: 10–14 days",
    href: "/journal/china-family-itinerary-10-to-14-days",
  },
  { title: "China tours for seniors", href: "/journal/china-tours-for-seniors" },
  {
    title: "Visa requirements for US citizens",
    href: "/journal/china-visa-requirements-us-citizens-2026",
  },
] as const;
