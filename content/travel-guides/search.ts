export type TravelGuideId =
  "family" | "women" | "seniors" | "muslim" | "first-time" | "special-interests";

type GuideLink = { href: string; label: string; detail: string };
export type TravelGuideSearch = {
  path: string;
  label: string;
  title: string;
  description: string;
  primaryQuery: string;
  intent: string;
  summary: string;
  answers: {
    id: string;
    question: string;
    answer: string;
    reading?: Pick<GuideLink, "href" | "label">;
  }[];
  longTails: { query: string; anchor: string }[];
  reading: GuideLink[];
  journeys: GuideLink[];
  related: TravelGuideId[];
  sources: GuideLink[];
};

/** Audience planning hubs. Detailed journal articles own narrow how-to queries;
 * published journey pages own exact routes, durations, inclusions and prices.
 * Query assignments are editorial hypotheses, not measured search volumes.
 */
export const travelGuideSearch: Record<TravelGuideId, TravelGuideSearch> = {
  family: {
    path: "/china-family-tours",
    label: "Families traveling with children",
    title: "Private China Family Tours: Routes, Ages & Costs",
    description:
      "Plan a private China family tour around children’s ages, room needs and pace. Compare routes, trip length, costs and practical arrangements with AVIORA.",
    primaryQuery: "private China family tours",
    intent:
      "Help parents choose the service and brief a planner; send exact room, price and route questions to the supporting guides and product.",
    summary:
      "A private China family tour works best when the route accounts for children’s ages, room occupancy and complete travel days. Begin with a few shared interests, protect time to rest and confirm essential hotel, meal and transport requests before booking.",
    answers: [
      {
        id: "toddlers",
        question: "How do you plan a China trip with a toddler?",
        answer:
          "Begin with sleep routines, room setup, stroller and luggage needs, and the length of each outing. Discuss fewer hotel changes and a rest window where the route permits. Ask about steps, stroller access and child-restraint availability for the actual sites and vehicles; these are supplier-specific checks.",
      },
      {
        id: "teenagers",
        question: "What should a China tour with teenagers include?",
        answer:
          "Ask your teenagers which experiences interest them, then build around those choices. Photography, food, archaeology or contemporary cities can all provide a focus. Balance major visits with time to explore and avoid assuming that every family wants the same activities. Any age-restricted experience needs a separate check.",
      },
      {
        id: "family-route",
        question: "Can a China family itinerary include Beijing, Xi’an, Chengdu and Shanghai?",
        answer:
          "Yes, these cities can be discussed as a multi-city route connecting history, pandas and urban life. The comfortable trip length depends on arrival and departure times, intercity transport and your children’s pace. Review the hotel-to-hotel travel days before adding all four; the linked 12-day family journey shows one published example.",
      },
      {
        id: "multigenerational",
        question: "How do you plan a China trip with children and grandparents?",
        answer:
          "Plan shared visits around the least flexible needs: children’s rest, grandparents’ walking comfort and suitable rooms. A multi-generation family may benefit from fewer hotel changes and optional afternoons. If the party splits, clarify who accompanies each group and whether a second guide or vehicle costs extra. Confirm stairs and access separately from the overall pace.",
        reading: {
          href: "/journal/private-china-family-tour-planning",
          label: "Family travel planning checklist",
        },
      },
    ],
    longTails: [
      { query: "China private tour with children and grandparents", anchor: "multigenerational" },
      { query: "China trip with a toddler", anchor: "toddlers" },
      { query: "private China tour with teenagers", anchor: "teenagers" },
      { query: "Beijing Xian Chengdu Shanghai family itinerary", anchor: "family-route" },
      { query: "China family tour by children’s ages", anchor: "ages" },
      { query: "how many days for a China family trip", anchor: "route" },
      { query: "China family tour hotel room arrangements", anchor: "hotels" },
      { query: "child seats on a private China family tour", anchor: "practicalities" },
      { query: "what affects private China family tour cost", anchor: "cost" },
    ],
    reading: [
      {
        href: "/journal/private-china-family-tour-planning",
        label: "Prepare a family travel brief",
        detail:
          "Bring together children’s ages, room requirements and preferred daily pace before enquiring.",
      },
      {
        href: "/journal/china-family-hotel-rooms-connecting-rooms-extra-beds",
        label: "Family rooms, connecting doors and extra beds",
        detail:
          "Check occupancy and the difference between a room request and a confirmed arrangement.",
      },
      {
        href: "/journal/china-family-tour-cost-four",
        label: "What shapes the cost for a family of four?",
        detail: "Compare the published assumptions behind rooms, transport and child pricing.",
      },
      {
        href: "/journal/chengdu-panda-base-family-guide",
        label: "Planning a panda-base visit with children",
        detail: "Consider timing, walking and the place of the visit in the wider journey.",
      },
    ],
    journeys: [
      {
        href: "/tours/china-family-tour-with-pandas-12-day-private-tour",
        label: "12-day private China family journey with pandas",
        detail:
          "Read the published route, age and room basis, inclusions and quotation conditions.",
      },
    ],
    related: ["seniors", "first-time"],
    sources: [
      {
        href: "https://en.nia.gov.cn/",
        label: "National Immigration Administration of China",
        detail:
          "Check current entry information for each traveler; hotel and transport child policies come from the relevant supplier.",
      },
    ],
  },
  women: {
    path: "/china-tours-for-women",
    label: "Women traveling solo or together",
    title: "Private China Tours for Women & Solo Travelers",
    description:
      "Plan China travel solo or with friends. Explore private tours for women, arrival transfers, hotel choices, female-guide requests and local support with AVIORA.",
    primaryQuery: "private China tours for women",
    intent:
      "Help women assess the private service, independence and operational support; do not imply a women-only group departure or guaranteed safety.",
    summary:
      "A private China journey for women can combine reserved guiding and transfers with independent time. Start with the experiences you want, then confirm arrival instructions, hotel location, service hours and contact arrangements. A female-guide preference needs a separate availability check.",
    answers: [
      {
        id: "solo-private-tour",
        question: "Can a solo woman book a private China tour?",
        answer:
          "Yes. A private journey can be planned for one traveler as well as for friends or relatives. The proposal should identify the room basis, guided days, transfers and independent time. Some costs, such as a vehicle or guide, may be charged for the service rather than shared across several guests.",
      },
      {
        id: "female-guide",
        question: "Can I request a female tour guide in China?",
        answer:
          "Request one before the route is finalized and explain whether it is essential. Availability depends on the city, dates, language and assignment. A request becomes a confirmed arrangement only when stated as confirmed in writing; do not assume a female guide is included in every tour for women.",
      },
      {
        id: "mother-daughter",
        question: "How should a mother-and-daughter China trip be planned?",
        answer:
          "Start with the interests, walking comfort and preferred room setup of both travelers. Choose shared visits, leave time for different priorities and check any age-related activity or hotel conditions. If one traveler needs a quieter afternoon, discuss whether the other will explore independently or needs additional reserved services.",
      },
      {
        id: "private-or-women-only",
        question: "Is a private China tour for women the same as a women-only group tour?",
        answer:
          "No. A private tour is arranged for your own party, which may be one woman, friends or relatives. A women-only group tour usually involves joining other travelers on a scheduled departure. AVIORA’s planning service on this page concerns private arrangements; it does not establish a women-only departure or a female guide. Compare the party, room basis and confirmed guide assignment before booking.",
        reading: {
          href: "/journal/women-private-china-travel",
          label: "Private travel support for women",
        },
      },
    ],
    longTails: [
      {
        query: "private China tour for women vs women only group tour",
        anchor: "private-or-women-only",
      },
      { query: "private China tour for a solo woman", anchor: "solo-private-tour" },
      { query: "female tour guide in China", anchor: "female-guide" },
      { query: "mother and daughter China trip", anchor: "mother-daughter" },
      { query: "is China safe for solo female travelers", anchor: "safety" },
      { query: "China arrival transfers for solo women", anchor: "arrival" },
      { query: "choosing hotels for women traveling alone in China", anchor: "hotels" },
      { query: "private China tour with independent days", anchor: "your-journey" },
      { query: "private China tour cost for one woman", anchor: "cost" },
    ],
    reading: [
      {
        href: "/journal/women-private-china-travel",
        label: "What thoughtful private support looks like",
        detail: "Consider the balance between reserved services and independent time.",
      },
      {
        href: "/journal/private-china-tour-arrival-handoff-checklist",
        label: "Your airport-to-hotel arrival checklist",
        detail: "Review meeting points, contact details and delayed-arrival questions.",
      },
      {
        href: "/journal/private-china-tour-proposal-checklist",
        label: "What to check in a private-tour proposal",
        detail: "Compare the actual scope and conditions before paying.",
      },
    ],
    journeys: [
      {
        href: "/tailor-made-china-tours",
        label: "Build a private route around your own plans",
        detail: "Discuss destinations, solo occupancy, guiding and time to explore independently.",
      },
    ],
    related: ["first-time", "special-interests"],
    sources: [
      {
        href: "https://www.gov.uk/foreign-travel-advice/china",
        label: "UK government travel advice for China",
        detail: "Review current advice if relevant to your nationality and circumstances.",
      },
      {
        href: "https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories/china-travel-advisory.html",
        label: "US Department of State China travel advisory",
        detail: "Use current official advice when assessing personal travel plans.",
      },
    ],
  },
  seniors: {
    path: "/china-tours-for-seniors",
    label: "Older travelers and a comfortable pace",
    title: "Private China Tours for Seniors: Pace & Access",
    description:
      "Explore private China tours for seniors with realistic walking, rest time, hotel access and transport planning. Discuss a comfortable route with AVIORA.",
    primaryQuery: "private China tours for seniors",
    intent:
      "Help older travelers choose a pace and assess service boundaries; detailed mobility questions belong to the specialist access guides.",
    summary:
      "A private China tour for seniors should be planned around individual walking comfort, interests and assistance needs. Review stairs, standing time, hotel access and complete transfer days. A slower schedule does not by itself provide step-free access or personal care.",
    answers: [
      {
        id: "over-70",
        question: "How do you plan a China tour for travelers over 70?",
        answer:
          "Begin with the individual’s comfortable walking and standing time, interests and assistance needs. Then review the proposed activities, weather, hotel setup and transport. Age alone does not decide suitability. Supplier conditions and insurance eligibility need separate checks, and personal medical questions belong with the traveler’s clinician.",
      },
      {
        id: "limited-mobility",
        question: "Can a private China tour work with limited mobility?",
        answer:
          "It depends on the specific route and assistance required. Explain steps you can manage, equipment dimensions and any transfer or personal-care needs. Check vehicle boarding, hotel features and the full route through each attraction. Treat unresolved access details as unresolved before deciding whether to book.",
      },
      {
        id: "great-wall",
        question: "Can older travelers visit the Great Wall with less climbing?",
        answer:
          "Some visit plans may reduce climbing through the choice of section and available transport, but a cable car does not establish a step-free outing. Check the approach, boarding, remaining steps, surfaces and exit route. Decide which portion is comfortable and what the alternative is if conditions change.",
      },
      {
        id: "slow-or-accessible",
        question: "Is a slow-paced China tour the same as a wheelchair-accessible tour?",
        answer:
          "No. A slower itinerary allows more time or fewer visits; wheelchair access depends on the actual hotel, vehicle and route through each attraction. Share wheelchair dimensions, transfer ability and assistance needs before choosing a route. Check lifts, doorways, boarding and remaining steps individually. An easier pace should never be treated as confirmation of step-free access or personal assistance.",
        reading: {
          href: "/journal/china-tours-seniors-limited-mobility",
          label: "Detailed mobility and access checks",
        },
      },
    ],
    longTails: [
      { query: "slow paced vs wheelchair accessible China tour", anchor: "slow-or-accessible" },
      { query: "private China tours for travelers over 70", anchor: "over-70" },
      { query: "private China tour with limited mobility", anchor: "limited-mobility" },
      { query: "Great Wall visit for seniors with less climbing", anchor: "great-wall" },
      { query: "China tour with less walking and more rest", anchor: "pace" },
      { query: "China hotel access for older travelers", anchor: "hotels" },
      { query: "China train travel with walking aids", anchor: "transport" },
      { query: "China trip with older parents", anchor: "right-for-you" },
      { query: "what affects China tour cost for seniors", anchor: "cost" },
    ],
    reading: [
      {
        href: "/journal/how-much-walking-china-tour",
        label: "How much walking does a China tour involve?",
        detail: "Review the demands of individual visits rather than relying on a pace label.",
      },
      {
        href: "/journal/slow-paced-china-tour-for-seniors",
        label: "A daily comfort and service checklist",
        detail: "Compare the day’s timing and practical support with the pace you prefer.",
      },
      {
        href: "/journal/are-china-group-tours-too-fast-for-seniors",
        label: "Group or private tour: how to compare the pace",
        detail:
          "Compare departure times, walking, rest stops and flexibility before choosing a travel format.",
      },
      {
        href: "/journal/china-tours-seniors-limited-mobility",
        label: "Planning with limited mobility",
        detail: "Understand the access checks and assistance boundaries that matter.",
      },
      {
        href: "/journal/how-to-visit-great-wall-without-climbing-stairs",
        label: "Great Wall access and remaining steps",
        detail: "Compare the access questions behind a less demanding visit.",
      },
    ],
    journeys: [
      {
        href: "/tours/china-at-an-easier-pace-12-day-private-tour",
        label: "12-day China journey at an easier pace",
        detail:
          "Review the actual itinerary, walking demands and days without scheduled guiding or a vehicle.",
      },
    ],
    related: ["family", "first-time"],
    sources: [
      {
        href: "/terms",
        label: "Booking terms and service scope",
        detail:
          "Personal assistance, supplier conditions and agreed arrangements must be reviewed alongside the itinerary.",
      },
    ],
  },
  muslim: {
    path: "/china-tours-for-muslim-travelers",
    label: "Muslim travelers: dining and prayer planning",
    title: "China Tours for Muslim Travelers: Meals & Prayer",
    description:
      "Plan a private China tour around halal dining requirements, prayer time, hotel breakfast and Ramadan. Understand what to verify before booking with AVIORA.",
    primaryQuery: "China tours for Muslim travelers",
    intent:
      "Help travelers brief and assess a private service; distinguish halal requirements and requests from supplier-confirmed arrangements.",
    summary:
      "A China tour for Muslim travelers should connect the route with your halal evidence requirements, prayer priorities and hotel needs. Check meals and facilities at supplier level. A Muslim-friendly label, no-pork menu or nearby mosque does not confirm every arrangement your party requires.",
    answers: [
      {
        id: "halal-family",
        question: "How do you plan a halal China family holiday?",
        answer:
          "Share your accepted halal evidence, the meals you want arranged and each traveler’s practical needs. Check breakfast, excursion lunches and travel-day food separately. Build prayer priorities and children’s rest into the same schedule. Confirm essential supplier arrangements in writing before accepting the route.",
      },
      {
        id: "beijing-xian-meals",
        question: "Can halal meals be planned on a Beijing and Xi’an tour?",
        answer:
          "Meals can be discussed for the specific route, but availability and suitability require restaurant-level checks. Identify the branch, menu, preparation requirements and evidence you accept. For a Great Wall or Terracotta Warriors excursion, review the actual lunch location rather than assuming a city restaurant will be practical.",
      },
      {
        id: "womens-prayer",
        question: "How should women’s prayer facilities be checked in China?",
        answer:
          "Ask the specific mosque or venue about women’s worship access, facilities, ablution arrangements and opening times for your visit. A mosque listing does not establish these details. Explain whether the visit is for worship, a cultural visit or both, and keep any essential access request visible in the proposal.",
      },
      {
        id: "halal-or-no-pork",
        question: "Is no-pork food enough for a halal China tour?",
        answer:
          "A no-pork menu alone does not establish halal suitability. Travelers may need to check meat sourcing, alcohol used in cooking, shared preparation areas and the evidence a restaurant provides. Explain which requirements are essential for your party and assess the actual restaurant branch and meal. Vegetarian dishes are an alternative only if their ingredients and preparation meet your requirements.",
        reading: {
          href: "/journal/muslim-friendly-travel-china-halal-prayer-guide",
          label: "Halal dining and prayer planning checks",
        },
      },
    ],
    longTails: [
      { query: "halal China tour vs no pork meals", anchor: "halal-or-no-pork" },
      { query: "halal China family holiday planning", anchor: "halal-family" },
      { query: "Beijing Xian private tour halal meals", anchor: "beijing-xian-meals" },
      { query: "women’s prayer facilities China travel", anchor: "womens-prayer" },
      { query: "how to verify halal meals on a China tour", anchor: "halal-dining" },
      { query: "China private tour with Friday prayer", anchor: "prayer" },
      { query: "China hotel halal breakfast arrangements", anchor: "hotels" },
      { query: "China tour during Ramadan suhoor and iftar", anchor: "ramadan" },
      { query: "halal food on China train and flight days", anchor: "travel-days" },
    ],
    reading: [
      {
        href: "/journal/muslim-friendly-travel-china-halal-prayer-guide",
        label: "Halal dining and prayer: practical planning questions",
        detail: "Work through supplier-level checks for food and worship arrangements.",
      },
      {
        href: "/journal/muslim-friendly-private-china-travel",
        label: "What Muslim-friendly private support means",
        detail: "Understand the difference between preferences, checks and confirmed services.",
      },
    ],
    journeys: [
      {
        href: "/tours/muslim-friendly-china-tour-great-wall-desert-stars",
        label: "China journey combining the Great Wall and desert landscapes",
        detail:
          "Read the published route and meal and prayer planning conditions; confirm requirements for your dates.",
      },
    ],
    related: ["family", "first-time"],
    sources: [
      {
        href: "/terms",
        label: "Booking terms and confirmed service scope",
        detail:
          "Halal certification, restaurant practices and mosque facilities require evidence from the relevant provider, not a general website label.",
      },
    ],
  },
  "first-time": {
    path: "/first-time-china-tours",
    label: "First-time visitors to China",
    title: "First China Trip: Private Tours & Planning Guide",
    description:
      "Plan your first China trip with route ideas and practical checks for entry, payments, internet, hotels and transfers. Explore private journeys with AVIORA.",
    primaryQuery: "first time China tours",
    intent:
      "Help first-time visitors understand and enquire about a coordinated private journey; direct detailed visa, payment and route research to dedicated guides.",
    summary:
      "For a first China trip, choose a few priority experiences and a route that fits your available nights. Check entry eligibility against your own passport and itinerary, prepare payment and connectivity options, and keep arrival instructions offline. Confirm the exact private services in writing.",
    answers: [
      {
        id: "ten-or-fourteen-days",
        question: "Is 10 or 14 days better for a first China trip?",
        answer:
          "Compare the destinations and hotel changes first. Ten days can be discussed for a focused Beijing, Xi’an and Shanghai introduction. Fourteen days gives more room for an additional destination or longer stays. Count arrival, departure and intercity travel time; extra days do not have to mean extra cities.",
      },
      {
        id: "private-or-independent",
        question: "Should a first-time visitor choose a private China tour or independent travel?",
        answer:
          "Compare how much planning and local coordination you want to handle. A private proposal can connect selected hotels, guides, transfers and domestic travel. Independent travel gives you responsibility for those arrangements. A mixed plan is also possible; identify the reserved service hours and the days you will manage yourself.",
      },
      {
        id: "arrival-airport",
        question: "Should a first China trip start in Beijing or Shanghai?",
        answer:
          "Compare international flight options, your main interests and the direction of the wider route. Beijing may connect naturally with an early focus on imperial history and the Great Wall; Shanghai offers an urban and architectural introduction. Arriving in one city and departing from another may reduce backtracking, depending on flights and transport.",
      },
      {
        id: "guide-every-day",
        question: "Does a private China tour include a guide and driver every day?",
        answer:
          "Not automatically. Private describes the reserved service for your party; the written itinerary determines when a guide, vehicle or transfer is included. Some journeys contain independent days or unscheduled afternoons. Check service hours, station and airport transfers, domestic tickets and exclusions day by day. Ask what help is available outside reserved services before comparing quotations.",
        reading: {
          href: "/journal/private-china-tour-proposal-checklist",
          label: "Check the services in your tour proposal",
        },
      },
    ],
    longTails: [
      { query: "private China tour guide and driver every day", anchor: "guide-every-day" },
      { query: "10 or 14 days first China trip", anchor: "ten-or-fourteen-days" },
      {
        query: "private tour or independent travel first time China",
        anchor: "private-or-independent",
      },
      { query: "start first China trip in Beijing or Shanghai", anchor: "arrival-airport" },
      { query: "where to go on a first China trip", anchor: "routes" },
      { query: "entry checks before a first China trip", anchor: "entry" },
      { query: "first arrival in China airport to hotel", anchor: "arrival" },
      { query: "payments and mobile data first time China", anchor: "payments-connectivity" },
      { query: "what is included in a first private China tour", anchor: "planning" },
    ],
    reading: [
      {
        href: "/journal/private-china-tour-proposal-checklist",
        label: "Check the services in your tour proposal",
        detail:
          "Review included services, independent time and the arrangements to confirm before booking.",
      },
      {
        href: "/journal/first-trip-to-china-planning-guide",
        label: "A detailed first-trip planning method",
        detail: "Work through route decisions and a fuller itinerary reality check.",
      },
      {
        href: "/journal/china-mobile-payments-foreign-tourists",
        label: "Mobile payments for foreign visitors",
        detail: "Check setup, card support, transaction conditions and backup options.",
      },
      {
        href: "/journal/china-sim-card-esim-internet-foreign-tourists",
        label: "SIM cards, eSIMs and internet preparation",
        detail:
          "Compare device compatibility and the connectivity questions to check before departure.",
      },
    ],
    journeys: [
      {
        href: "/tours/beijing-xian-shanghai-private-10-day-tour",
        label: "10-day private Beijing, Xi’an and Shanghai journey",
        detail: "Compare the published day-by-day route, included services and quotation basis.",
      },
    ],
    related: ["family", "special-interests"],
    sources: [
      {
        href: "https://en.nia.gov.cn/",
        label: "National Immigration Administration of China",
        detail: "Check current entry information for your passport, dates and route.",
      },
      {
        href: "https://www.visaforchina.cn/",
        label: "Chinese Visa Application Service Center",
        detail:
          "Check the relevant local application service where applicable; the responsible embassy or consulate remains an authority for your case.",
      },
    ],
  },
  "special-interests": {
    path: "/special-interest-china-tours",
    label: "Food, photography, culture and other interests",
    title: "Special-Interest China Tours: Food, Art & Nature",
    description:
      "Build a private China journey around food, photography, history, art, nature or heritage. Explore route planning, specialist requests and costs with AVIORA.",
    primaryQuery: "special interest China tours",
    intent:
      "Help travelers turn a subject into a feasible private brief; distinguish general guiding, specialist instruction and permission-dependent access.",
    summary:
      "A special-interest China tour uses a subject to shape the destinations, timing and services. Start with your interests and level of depth, then confirm the expertise, activity format and access required. A private route does not automatically include specialist tuition or exclusive venue access.",
    answers: [
      {
        id: "food-photography",
        question: "Can a private China tour combine food and photography?",
        answer:
          "Yes. Choose a main priority and connect suitable neighborhoods, meals and outings around it. Photography may require time in particular light; food experiences need realistic meal timing and dietary checks. Technical tuition and cooking instruction are separate services that need explicit availability and format confirmation.",
      },
      {
        id: "tea-yunnan",
        question: "How do you plan a Yunnan tea and culture itinerary?",
        answer:
          "Identify whether you want tastings, regional context or a producer visit, then review distances, season and elevation along the proposed route. A Tea Horse Road theme does not itself confirm a harvest visit or meeting with a producer. The linked Yunnan journey provides a published route to compare with your interests.",
      },
      {
        id: "specialist-guide",
        question: "How do you choose a specialist guide for a China tour?",
        answer:
          "Explain the subject, language and depth you need, including whether you want interpretation, technical instruction or a practitioner-led session. Ask who will deliver it, for how long and in what format. General destination knowledge is different from a particular qualification; essential expertise should be confirmed in the proposal.",
      },
      {
        id: "photo-logistics-or-tuition",
        question: "Does a private China photography tour include photography tuition?",
        answer:
          "Not automatically. A private route can arrange transport, timing and guiding around photography without including a photography instructor. If you want tuition, specify the subject, skill level, language and expected teaching time. Confirm the instructor and assignment in writing. A sunrise outing also depends on opening hours, access rules, weather and the practical route from your hotel.",
        reading: {
          href: "/journal/private-china-tour-proposal-checklist",
          label: "Check specialist services in your proposal",
        },
      },
    ],
    longTails: [
      {
        query: "private China photography tour with or without tuition",
        anchor: "photo-logistics-or-tuition",
      },
      { query: "private China food and photography tour", anchor: "food-photography" },
      { query: "Yunnan tea and culture private itinerary", anchor: "tea-yunnan" },
      { query: "specialist guide for a China culture tour", anchor: "specialist-guide" },
      { query: "private China cooking and tea experiences", anchor: "food" },
      { query: "China photography tour planning and tuition", anchor: "photography" },
      { query: "China art and craft workshop private travel", anchor: "culture" },
      { query: "China nature walking tour physical demands", anchor: "nature" },
      { query: "China ancestral hometown heritage trip", anchor: "heritage" },
    ],
    reading: [
      {
        href: "/journal/luxury-yunnan-private-tour-10-days",
        label: "A closer look at a private Yunnan route",
        detail:
          "Compare the places, journey structure and interests behind the published itinerary.",
      },
      {
        href: "/journal/food-allergies-dietary-restrictions-china-travel",
        label: "Food allergies and dietary requirements",
        detail: "Prepare a clear brief before selecting tastings, classes or restaurants.",
      },
      {
        href: "/journal/private-china-tour-proposal-checklist",
        label: "Checking activities and expertise in a proposal",
        detail: "Confirm the provider, scope and format of an essential experience.",
      },
    ],
    journeys: [
      {
        href: "/tours/luxury-yunnan-private-tour",
        label: "Private Yunnan journey along the Tea Horse Road",
        detail:
          "Read the actual route, altitude progression and published service basis before comparing it with your theme.",
      },
    ],
    related: ["first-time", "women"],
    sources: [
      {
        href: "/terms",
        label: "Booking terms and supplier conditions",
        detail:
          "Specialist assignments, workshop participation and venue access are confirmed for the actual dates and service.",
      },
    ],
  },
};

export const travelGuideIds = Object.keys(travelGuideSearch) as TravelGuideId[];
