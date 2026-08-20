export type JourneyJournalLinkRule = {
  primaryJourney: string;
  alternativeJourneys?: string[];
  title?: string;
  description?: string;
  journeyLabel?: string;
  planningLabel?: string;
  planningPreference?: string;
};

const FIRST_CHINA = "first-china-beautifully-paced";
const CHINA_CONSIDERED = "china-at-an-easier-pace-12-day-private-tour";
const CHINA_FAMILY = "china-family-tour-with-pandas-12-day-private-tour";
const FOUR_CITY = "beijing-xian-chengdu-shanghai-private-11-day-tour";
const CHENGDU = "chengdu-pandas-sichuan-table";
const CHENGDU_JIUZHAIGOU = "chengdu-pandas-jiuzhaigou-private-7-day-tour";
const CHENGDU_CHONGQING_ZHANGJIAJIE = "chengdu-chongqing-zhangjiajie-private-11-day-tour";
const SHANGHAI_ZHANGJIAJIE = "shanghai-zhangjiajie-floating-peaks";
const BEIJING = "beijing-great-wall-private-5-day-tour";
const XIAN_BEIJING = "xian-beijing-terracotta-warriors-great-wall-private-6-day-tour";

export const journeyReadingPriority: Record<string, string[]> = {
  [CHINA_FAMILY]: [
    "china-family-itinerary-10-to-14-days",
    "china-tours-with-pandas",
    "chengdu-panda-base-tickets-foreigners",
    "mutianyu-great-wall-walking-cable-car",
    "terracotta-army-tickets-foreign-visitors",
  ],
  [CHINA_CONSIDERED]: [
    "china-tours-for-seniors",
    "china-travel-for-seniors",
    "china-trip-with-older-parents",
    "china-tours-seniors-limited-mobility",
    "best-places-china-senior-travelers",
    "are-china-group-tours-too-fast-for-seniors",
    "best-time-to-visit-china-for-seniors",
    "china-tour-cost-for-seniors",
    "china-tours-for-seniors-from-usa",
    "china-travel-in-your-70s",
    "first-trip-to-china-planning-guide",
    "how-many-days-beijing-xian-shanghai",
    "china-itinerary-older-travelers-10-days",
    "how-much-walking-china-tour",
    "mutianyu-great-wall-walking-cable-car",
    "china-high-speed-train-foreigners",
    "terracotta-army-tickets-foreign-visitors",
  ],
  [FIRST_CHINA]: [
    "10-day-china-itinerary-first-time-visitors",
    "9-day-beijing-xian-shanghai-itinerary",
    "china-high-speed-train-foreigners",
  ],
  [FOUR_CITY]: [
    "11-day-beijing-xian-chengdu-shanghai-itinerary",
    "how-to-travel-between-beijing-xian-chengdu-shanghai",
    "china-family-itinerary-10-to-14-days",
  ],
  [CHENGDU]: [
    "how-many-days-in-chengdu-itinerary",
    "chengdu-panda-base-tickets-foreigners",
    "5-day-chengdu-leshan-itinerary",
  ],
  [CHENGDU_JIUZHAIGOU]: [
    "chengdu-to-jiuzhaigou-transport",
    "jiuzhaigou-altitude-walking-accessibility",
    "chengdu-jiuzhaigou-7-day-itinerary",
  ],
  [CHENGDU_CHONGQING_ZHANGJIAJIE]: [
    "chengdu-chongqing-zhangjiajie-itinerary",
    "3-day-chongqing-itinerary",
    "how-difficult-is-zhangjiajie",
  ],
  [SHANGHAI_ZHANGJIAJIE]: [
    "shanghai-zhangjiajie-8-day-itinerary",
    "where-to-stay-in-zhangjiajie",
    "how-difficult-is-zhangjiajie",
  ],
  [BEIJING]: [
    "5-day-beijing-great-wall-itinerary",
    "mutianyu-badaling-jinshanling-great-wall",
    "forbidden-city-tickets-foreigners",
  ],
  [XIAN_BEIJING]: [
    "6-day-xian-beijing-itinerary",
    "beijing-xian-itinerary-how-many-days",
    "terracotta-army-tickets-foreign-visitors",
  ],
};

const groupedRules: Array<{
  journey: string;
  alternatives?: string[];
  articles: string[];
}> = [
  {
    journey: FIRST_CHINA,
    alternatives: [FOUR_CITY],
    articles: [
      "10-day-china-itinerary-first-time-visitors",
      "9-days-or-11-days-in-china",
      "private-china-tour-vs-group-tour",
      "private-china-tour-cost-2026",
      "best-time-to-visit-china",
      "how-to-choose-private-china-tour-company",
      "is-private-china-tour-worth-it",
      "how-many-days-in-china-7-10-14-day-itineraries",
      "what-is-included-private-china-tour",
      "china-honeymoon-itinerary-10-to-14-days",
      "china-travel-safety-for-foreign-visitors",
      "9-day-beijing-xian-shanghai-itinerary",
      "china-240-hour-visa-free-transit-guide",
      "china-accommodation-registration-foreigners",
      "china-mobile-payments-foreign-tourists",
      "china-sim-card-esim-internet-foreign-tourists",
      "china-golden-week-travel-2026",
      "bringing-prescription-medicine-to-china",
      "aviora-ttg-asia-matta-connect-2026",
    ],
  },
  {
    journey: FOUR_CITY,
    alternatives: [CHINA_FAMILY, FIRST_CHINA],
    articles: [
      "11-day-beijing-xian-chengdu-shanghai-itinerary",
      "how-to-travel-between-beijing-xian-chengdu-shanghai",
      "china-high-speed-train-foreigners",
      "private-china-tour-from-singapore",
    ],
  },
  {
    journey: CHINA_FAMILY,
    alternatives: [FOUR_CITY, FIRST_CHINA],
    articles: [
      "china-family-itinerary-10-to-14-days",
      "china-tours-with-pandas",
      "chengdu-panda-base-tickets-foreigners",
    ],
  },
  {
    journey: CHENGDU,
    alternatives: [CHENGDU_JIUZHAIGOU, CHENGDU_CHONGQING_ZHANGJIAJIE],
    articles: [
      "how-many-days-in-chengdu-itinerary",
      "chengdu-panda-base-tickets-foreigners",
      "5-day-chengdu-leshan-itinerary",
      "leshan-giant-buddha-day-trip-guide",
    ],
  },
  {
    journey: CHENGDU_JIUZHAIGOU,
    alternatives: [CHENGDU],
    articles: [
      "chengdu-to-jiuzhaigou-transport",
      "jiuzhaigou-altitude-walking-accessibility",
      "chengdu-jiuzhaigou-7-day-itinerary",
      "jiuzhaigou-or-zhangjiajie",
    ],
  },
  {
    journey: CHENGDU_CHONGQING_ZHANGJIAJIE,
    alternatives: [SHANGHAI_ZHANGJIAJIE, CHENGDU],
    articles: [
      "3-day-chongqing-itinerary",
      "chengdu-chongqing-zhangjiajie-itinerary",
      "how-difficult-is-zhangjiajie",
    ],
  },
  {
    journey: SHANGHAI_ZHANGJIAJIE,
    alternatives: [CHENGDU_CHONGQING_ZHANGJIAJIE],
    articles: [
      "where-to-stay-in-zhangjiajie",
      "tianmen-mountain-vs-zhangjiajie-national-forest-park",
      "shanghai-zhangjiajie-8-day-itinerary",
      "shanghai-pudong-hongqiao-airport-guide",
      "china-domestic-flight-power-bank-rules",
    ],
  },
  {
    journey: BEIJING,
    alternatives: [XIAN_BEIJING, FIRST_CHINA],
    articles: [
      "forbidden-city-tickets-foreigners",
      "mutianyu-badaling-jinshanling-great-wall",
      "mutianyu-great-wall-walking-cable-car",
      "5-day-beijing-great-wall-itinerary",
    ],
  },
  {
    journey: XIAN_BEIJING,
    alternatives: [BEIJING, FIRST_CHINA],
    articles: [
      "terracotta-army-tickets-foreign-visitors",
      "terracotta-warriors-day-trip-from-beijing",
      "beijing-xian-itinerary-how-many-days",
      "6-day-xian-beijing-itinerary",
    ],
  },
];

export const journeyJournalLinks: Record<string, JourneyJournalLinkRule> = Object.fromEntries(
  groupedRules.flatMap((group) =>
    group.articles.map((article) => [
      article,
      {
        primaryJourney: group.journey,
        alternativeJourneys: group.alternatives,
      },
    ]),
  ),
);

Object.assign(journeyJournalLinks, {
  "first-trip-to-china-planning-guide": {
    primaryJourney: CHINA_CONSIDERED,
    title: "See the Route Reality Check become a complete journey",
    description:
      "China, Considered connects the gateway, hotel, reservation, walking and transfer decisions in one privately operated 12-day Beijing, Xi'an and Shanghai journey.",
    journeyLabel: "Explore the 12-day journey",
    planningLabel: "Request a Route Reality Check",
    planningPreference: "route-reality-check",
  },
  "how-many-days-beijing-xian-shanghai": {
    primaryJourney: CHINA_CONSIDERED,
    title: "See what the extra two days make possible",
    description:
      "China, Considered uses twelve days to protect complete sightseeing days in Beijing, Xi'an and Shanghai instead of disguising arrivals and hotel changes as destination time.",
    journeyLabel: "Explore the 12-day journey",
    planningLabel: "Compare 10 and 12 days",
    planningPreference: "trip-length-comparison",
  },
  "how-much-walking-china-tour": {
    primaryJourney: CHINA_CONSIDERED,
    title: "See how the walking plan becomes a real journey",
    description:
      "China, Considered separates the harder heritage days, protects recovery and confirms practical support around the travelers before booking.",
    journeyLabel: "Explore the 12-day journey",
    planningLabel: "Review my walking comfort",
    planningPreference: "walking-comfort",
  },
  "china-itinerary-older-travelers-10-days": {
    primaryJourney: CHINA_CONSIDERED,
    title: "See this 12-day journey fully designed",
    description:
      "China, Considered turns this sense of possibility into a premium private journey with five-star hotels, protected recovery and managed transitions.",
    journeyLabel: "Explore the 12-day journey",
    planningLabel: "Shape it around my pace",
  },
  "china-tours-for-seniors": {
    primaryJourney: CHINA_CONSIDERED,
    title: "See what an easier-paced tour changes in practice",
    description:
      "China, Considered gives the Great Wall and Terracotta Army their own days, connects both transfers and leaves a real choice day in Beijing and Shanghai.",
    journeyLabel: "Explore the 12-day journey",
    planningLabel: "Compare a tour with our team",
    planningPreference: "senior-tour-comparison",
  },
  "china-travel-for-seniors": {
    primaryJourney: CHINA_CONSIDERED,
    title: "See one complete first journey designed from the traveler outward",
    description:
      "This 12-day private route connects the practical decisions in the guide without treating age as the itinerary.",
    journeyLabel: "Explore China, Considered",
    planningLabel: "Discuss my China trip",
    planningPreference: "senior-china-planning",
  },
  "china-trip-with-older-parents": {
    primaryJourney: CHINA_CONSIDERED,
    title: "Turn the family conversation into a workable route",
    description:
      "Build Beijing, Xi'an and Shanghai around what your parents value, how each person likes to travel and where support matters.",
    journeyLabel: "Explore the 12-day journey",
    planningLabel: "Plan a trip for my parents",
    planningPreference: "older-parents-planning",
  },
  "china-tours-seniors-limited-mobility": {
    primaryJourney: CHINA_CONSIDERED,
    title: "Review the exact route before calling it suitable",
    description:
      "AVIORA separates workable adaptations, historic-site constraints and date-specific confirmations before proposing the journey.",
    journeyLabel: "Review the journey design",
    planningLabel: "Request a mobility route review",
    planningPreference: "mobility-route-review",
  },
  "best-places-china-senior-travelers": {
    primaryJourney: CHINA_CONSIDERED,
    title: "See why these three cities make a complete first journey",
    description:
      "Beijing, Xi'an and Shanghai deliver China's landmark story with only two intercity handovers and room for genuine choice.",
    journeyLabel: "Explore the three-city journey",
    planningLabel: "Compare my route options",
    planningPreference: "destination-fit-review",
  },
  "are-china-group-tours-too-fast-for-seniors": {
    primaryJourney: CHINA_CONSIDERED,
    title: "See what changes when your party owns the day",
    description:
      "Compare a privately controlled rhythm, direct handovers and traveler-led choices with the fixed pace of a shared departure.",
    journeyLabel: "Explore the private journey",
    planningLabel: "Compare private and group travel",
    planningPreference: "private-vs-group-senior",
  },
  "best-time-to-visit-china-for-seniors": {
    primaryJourney: CHINA_CONSIDERED,
    title: "Put the season inside the actual route",
    description:
      "A protected Beijing choice day and flexible Shanghai finish allow the journey to respond to weather as well as energy.",
    journeyLabel: "Explore the seasonal journey",
    planningLabel: "Compare my date windows",
    planningPreference: "senior-date-review",
  },
  "china-tour-cost-for-seniors": {
    primaryJourney: CHINA_CONSIDERED,
    title: "See the service behind a private-tour quote",
    description:
      "Review the hotels, first-class rail, private guiding, cultural encounters and China-based support before comparing price.",
    journeyLabel: "Review the journey inclusions",
    planningLabel: "Request a cost review",
    planningPreference: "senior-tour-cost-review",
  },
  "china-tours-for-seniors-from-usa": {
    primaryJourney: CHINA_CONSIDERED,
    title: "Build the land journey around the international flights",
    description:
      "China, Considered begins in Beijing and ends in Shanghai so an open-jaw flight can remove backtracking when the fare works.",
    journeyLabel: "Explore the Beijing-to-Shanghai route",
    planningLabel: "Plan from my US gateway",
    planningPreference: "usa-senior-china-planning",
  },
  "china-travel-in-your-70s": {
    primaryJourney: CHINA_CONSIDERED,
    title: "Plan this chapter of travel on your own terms",
    description:
      "China, Considered protects the landmark experiences while shaping walking, rooms, transfers and free time around the travelers.",
    journeyLabel: "Explore China, Considered",
    planningLabel: "Discuss my first China journey",
    planningPreference: "travel-in-your-70s",
  },
  "10-day-china-itinerary-first-time-visitors": {
    ...journeyJournalLinks["10-day-china-itinerary-first-time-visitors"],
    title: "See this first China route take shape",
    description:
      "Beijing, Xi'an and Shanghai are connected across nine privately supported days, with the Great Wall given its own time and rail travel arranged around the journey.",
    journeyLabel: "Explore the 9-day journey",
    planningLabel: "Shape it around my dates",
  },
  "chengdu-chongqing-zhangjiajie-itinerary": {
    ...journeyJournalLinks["chengdu-chongqing-zhangjiajie-itinerary"],
    title: "Travel the contrast without managing the handovers",
    description:
      "From pandas and Sichuan food to Chongqing after dark and Zhangjiajie's peaks, one China-based team coordinates the hotels, tickets, guides and transfers.",
    journeyLabel: "View the 11-day journey",
    planningLabel: "Request this route",
  },
  "private-china-tour-cost-2026": {
    ...journeyJournalLinks["private-china-tour-cost-2026"],
    title: "See what a considered private route includes",
    description:
      "Use a real multi-city journey to understand how pacing, hotels, private guiding and rail arrangements come together before a written quotation.",
    journeyLabel: "Review the journey",
    planningLabel: "Request a written proposal",
  },
  "where-to-stay-in-zhangjiajie": {
    ...journeyJournalLinks["where-to-stay-in-zhangjiajie"],
    title: "See how hotel location shapes the route",
    description:
      "This Shanghai and Zhangjiajie journey uses the right bases for park access, mountain days and a protected final night before departure.",
    journeyLabel: "Explore the 8-day journey",
    planningLabel: "Plan my Zhangjiajie stay",
  },
  "mutianyu-badaling-jinshanling-great-wall": {
    ...journeyJournalLinks["mutianyu-badaling-jinshanling-great-wall"],
    title: "Build the right Great Wall day into Beijing",
    description:
      "A five-day private Beijing route gives the Wall its own day, with the section, walking load and transfer plan chosen around your party.",
    journeyLabel: "Explore the Beijing journey",
    planningLabel: "Discuss my Great Wall day",
  },
  "terracotta-warriors-day-trip-from-beijing": {
    ...journeyJournalLinks["terracotta-warriors-day-trip-from-beijing"],
    title: "Turn the Beijing-to-Xi'an decision into a forward-moving route",
    description:
      "This six-day private journey gives the Terracotta Warriors and the Great Wall separate days, with high-speed rail and local transfers arranged around the travelers.",
    journeyLabel: "Explore the 6-day journey",
    planningLabel: "Plan Beijing and Xi'an",
  },
  "mutianyu-great-wall-walking-cable-car": {
    ...journeyJournalLinks["mutianyu-great-wall-walking-cable-car"],
    title: "Build a Mutianyu day around real walking comfort",
    description:
      "A private Beijing route gives Mutianyu its own day, with the vehicle, lift choice and turnaround point shaped around children, parents and slower walkers.",
    journeyLabel: "Explore the Beijing journey",
    planningLabel: "Plan my Mutianyu route",
  },
  "tianmen-mountain-vs-zhangjiajie-national-forest-park": {
    ...journeyJournalLinks["tianmen-mountain-vs-zhangjiajie-national-forest-park"],
    title: "See how Wulingyuan and Tianmen fit into one private route",
    description:
      "This Shanghai and Zhangjiajie journey uses Wulingyuan as the landscape base, then protects the city-side sequence for Tianmen Mountain and departure.",
    journeyLabel: "Explore the 8-day journey",
    planningLabel: "Shape my Zhangjiajie days",
  },
});
