import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/wuyishan.svg",
  alt: "Wuyishan planning diagram comparing a resort-area base, a tea-village stay and the wider city; schematic rather than a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const wuyishanGuide: ExpandedDestination = {
  id: "wuyishan",
  name: "Wuyishan",
  region: "south",
  kicker: "Rock tea, river scenery & a route at your pace",
  description:
    "Plan Wuyishan for rock-tea culture and mountain scenery, separating a Nine-Bend Stream raft, stair-based viewpoints and a genuinely informative tea encounter.",
  stay: "3–4 nights",
  bestFor: "Tea culture and a slower scenic stay",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["fuding", "quanzhou", "hangzhou", "huangshan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Wuyishan Travel Guide: Rock Tea, River & Where to Stay",
    seoTitle: "Wuyishan Travel Guide: Rock Tea & Scenic Stays",
    seoDescription:
      "Plan Wuyishan for rock tea and mountain scenery. Compare hotel bases, Nine-Bend Stream rafting, walking routes and a tailored three- or four-night stay.",
    answer:
      "Wuyishan, also called Mount Wuyi or the Wuyi Mountains, offers a combination of rock-tea culture, sandstone scenery and the Nine-Bend Stream in northern Fujian. Choose it when you want time for both the landscape and an informed tea encounter. A scenic raft ride, a stepped viewpoint and a tea-host visit involve different levels of effort and different arrangements. Select those interests first rather than assuming one ticket or one day provides the complete experience.",
    stayAnswer:
      "Three nights give two full days: one for a selected scenic route and another for tea and a different landscape perspective. Four nights allow more hotel time or flexibility when weather changes a river plan. Two nights can suit one focused day, but should not promise every major walk, a raft ride and a substantive private tea session. Arrival and departure need their own station or airport transfers.",
    hotelAnswer:
      "Compare a property in the Sangu resort area for a stay centered on the scenic region, meals and hotel time. Choose a named tea-village or quieter rural property only after checking the road approach, room comfort and dining. A city hotel elsewhere in Wuyishan can serve a different transport or business purpose but is not automatically convenient for the planned scenic entrance. Verify the actual address and each daily journey rather than relying on the destination name.",
    sightseeingQuestion: "Can you enjoy Wuyishan without a strenuous mountain climb?",
    sightseeingAnswer:
      "A selective stay can emphasize tea, hotel time and a manageable landscape route instead of a demanding viewpoint climb. The Nine-Bend Stream raft, when operating and suitable for the group, offers a different perspective but still has boarding, seating and access requirements. Do not describe it as an automatic accessibility solution. Review every remaining walk and stair section before booking, and choose the route on that evidence.",
    visitorResources: [
      {
        label: "UNESCO: Mount Wuyi",
        href: "https://whc.unesco.org/en/list/911/",
        scope:
          "Background on the World Heritage property's natural and cultural significance. This does not establish current scenic boundaries, visitor access, rafting, open trails, tea hosts or hotel quality.",
      },
      {
        label: "Wuyishan municipal government",
        href: "https://www.wys.gov.cn/",
        scope:
          "City background and public announcements. Check the specific operator's current tickets, river conditions and transport, and confirm privately hosted tea sessions separately.",
      },
    ],
    serviceScope:
      "We can discuss a private Wuyishan plan with the selected hotel, walking routes, guiding, transfers and any agreed tea session specified in the proposal. Private guiding does not make a public raft or scenic service exclusive. A tea garden, tasting room and working producer are different settings. Confirm the host, language, learning focus, purchase expectations and date-specific activity before booking; no restricted production or protected-area access is implied.",
    routeAdvice:
      "Plan Wuyishan as a tailored scenic and tea chapter, possibly paired with Quanzhou for a contrasting Fujian cultural stay. Begin with the full days available, walking ability and the kind of tea experience you want. This page does not currently recommend a published Wuyishan package. Your proposal should identify the hotel, scenic admissions, transport, raft arrangements and host, with a worthwhile alternative when a weather-dependent activity cannot operate.",
    practicalPlanning: {
      timing:
        "Keep a confirmed raft window, a substantial stair route and a private tea appointment from competing for the same short day. Allow for transport between entrances, queues, boarding and meals. Leave arrival flexible and use a separate full day for the main scenic interest. If a river activity changes, agree which alternative still serves the group's interests instead of filling the time with unrelated shopping.",
      walking:
        "Tianyou Peak and other selected viewpoints can involve steep or sustained stairs, while valley routes have their own surfaces, gradients and remaining steps. Review the actual route rather than a general easy-or-hard label. For rafting, check the boarding approach, ability to sit for the journey and provider requirements. A private vehicle reaches agreed road points, not every viewpoint or tea slope.",
      cost: "Compare the exact hotel and room, scenic admissions, local transport, raft tickets, guide time and private tea-host arrangements. Identify what is shared and what is private. Ask whether tasting, food, purchases and any workshop materials are included. A high price cannot guarantee river operation, a famous producer or a particular tea's provenance; those are separate questions with their own evidence.",
    },
    attractions: [
      "Nine-Bend Stream",
      "Tianyou Peak",
      "Selected Wuyishan rock-tea landscapes",
      "Dahongpao scenic area",
    ],
    stays: [
      {
        label: "2 nights: one focused scenic day",
        advice:
          "Choose a limited landscape plan and add tea only when there is a useful confirmed window. Do not assume the arrival and departure provide two more full sightseeing days.",
      },
      {
        label: "3 nights: scenery and tea separately",
        advice:
          "Give a selected river or mountain chapter one day and a thoughtful tea encounter another. Adjust the effort to the group and retain time for a proper meal.",
      },
      {
        label: "4 nights or more: stay for the setting",
        advice:
          "Add room for hotel time, a different walking route or weather flexibility. Extra nights do not guarantee rafting, a clear view or live tea processing; the property and alternative plan should still be worthwhile.",
      },
    ],
    hotelAreas: [
      {
        name: "Sangu resort area and nearby scenic-region hotels",
        advice:
          "Consider for a stay focused on scenery and hotel time. Check the exact entrance transfers, nearby dining, room sound and facilities. A resort-area address does not make every visit walkable or establish a room with a particular view.",
      },
      {
        name: "A named tea-village or quieter rural stay",
        advice:
          "Choose for the actual property and setting, not an assumed private tea-farm experience. Verify road pickup, luggage, room temperature, bathrooms and meals. Production spaces and hosts require separate approval even when close to the hotel.",
      },
      {
        name: "Wuyishan city or another gateway-oriented base",
        advice:
          "Consider when the actual arrival, departure or a specific property justifies it. Compare the complete daily road plan to the selected scenic entrance and evening meals. Gateway convenience on one day may add travel to the rest of the stay.",
      },
    ],
    tradeoffs: [
      {
        title: "A river ride and a viewpoint walk tell different stories",
        advice:
          "The Nine-Bend Stream provides a water-level perspective, while a route such as Tianyou Peak involves a different effort and outlook. Choose both only when time, current operation and walking support it. River flow, weather, ticket availability and operator rules can change the plan.",
      },
      {
        title: "Make rock tea a learning experience",
        advice:
          "Wuyi rock tea, often called yancha, belongs to the oolong family. Ask whether the session concerns growing conditions, processing, roasting or brewing. A tasting can be meaningful outside harvest, but live picking or manufacture follows actual work and producer consent. A sales counter alone should not be described as a private tea masterclass.",
      },
      {
        title: "Distinguish a named landscape from tea provenance",
        advice:
          "A visit to the Dahongpao scenic area does not establish that tea offered elsewhere comes from a particular plant, plot or producer. If buying matters, request clear product details and discuss your budget. Your guide's introduction is not independent authentication or a promise that expensive tea is the right purchase.",
      },
      {
        title: "Respect protected areas and working spaces",
        advice:
          "The broad Mount Wuyi heritage name is not permission to enter every reserve, production site or trail. Use designated routes and the actual confirmed access. A private guide cannot open a closed path, guarantee wildlife encounters or substitute for the host's consent.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "fuding",
        advice:
          "Fuding provides a contrasting white-tea chapter to Wuyi rock tea. Combine them when confirmed hosts offer distinct learning about processing, leaf and brewing rather than repeated sales tastings. Compare the complete rail-and-road journey, actual stations and useful nights; a shared Fujian location does not make one compact tea region.",
      },
      {
        slug: "quanzhou",
        advice:
          "Quanzhou adds maritime history and a living religious landscape to a Fujian trip. Compare actual rail services and both hotel transfers before choosing the sequence. Give the city and the tea region separate useful days rather than attaching a fixed host to an uncertain connection.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou offers a different tea and landscape perspective through Longjing and West Lake. Compare the full route and decide whether the contrast matters to you. Green tea and Wuyi oolong deserve distinct explanations, not repeated generic tasting stops.",
      },
      {
        slug: "huangshan",
        advice:
          "Huangshan adds a different mountain landscape with its own stair demands and hotel choices. Assess whether two mountain chapters fit the trip's effort and variety. Each needs its actual gateway, weather plan and luggage arrangement.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit scenic walks, with rain, heat or changing conditions still possible. Summer can be hot and wet; winter requires attention to room comfort and the actual outdoor plan. Tea production follows the producer's seasonal work, while river operation follows current conditions. Choose a stay that remains rewarding if a particular activity changes, and check holidays before expecting a quiet scenic area.",
    orientation:
      "Wuyishan is both a city name and a broad travel label for different mountain and tea interests. The Sangu resort area, scenic entrances, Nine-Bend Stream boarding, named tea properties and railway stations are separate points. The wider Mount Wuyi heritage property should not be confused with unrestricted visitor access everywhere. Plan from actual addresses and designated routes.",
    experiences: [
      "Choose a Nine-Bend Stream raft or a suitable walking route for the landscape perspective you want",
      "Learn about rock tea with a confirmed host and a clear focus on growing, processing, roasting or brewing",
      "Spend time at a well-chosen hotel rather than treating every extra night as another demanding hike",
    ],
    planningNotes: [
      "Confirm raft operation and access separately from private guiding",
      "Review stair routes, boarding and room approach against actual mobility needs",
      "Agree tea-host language, season, purchase expectations and a worthwhile alternative",
    ],
    arrival:
      "Nanping City railway station, Wuyishan North and the airport are different gateway choices. Do not infer the closest arrival from a station name alone. Use the booked ticket and exact hotel to calculate the road transfer. A late arrival should leave room for check-in and dinner instead of a fixed raft or tea appointment. Check the actual onward connection before adding a final scenic stop.",
    gettingAround:
      "Road transfers connect the hotel and agreed scenic or host addresses, while designated transport, walking and the selected river service form their own parts of the day. Public services retain normal operating conditions. Establish where the vehicle meets you and what happens if an activity changes. A rural property does not automatically provide all-day transport or access to nearby production spaces.",
    stayStrategy:
      "For a slower scenic stay, compare the exact room, privacy, sound, heating or cooling and comfortable spaces for a rainy afternoon. Check dining and pickup as well as the view. A tea-themed property can be appealing without offering a confirmed substantive lesson; evaluate the hotel and the host separately, leaving enough unscheduled time to enjoy the setting.",
    firstTimerNote:
      "Wuyishan's appeal is the combination of tea and landscape, with effort chosen to fit the group. You do not need every summit or an expensive tea purchase for a rewarding visit. A clear explanation, a manageable route and an honestly arranged host provide more value than a packed list of promises.",
    faqs: [
      {
        question: "Are Wuyishan and the Wuyi Mountains the same destination?",
        answer:
          "Wuyishan is commonly used for the city and scenic destination associated with Mount Wuyi or the Wuyi Mountains. The wider protected and heritage areas are not all one visitor zone. Confirm the actual hotel, entrance and route for your booking.",
      },
      {
        question: "How many days should I spend in Wuyishan?",
        answer:
          "Two full days, commonly with three nights, allow scenery and a separate tea chapter. Two nights suit one focused day. Four nights can offer a slower stay and flexibility, but not a guarantee of rafting or clear views.",
      },
      {
        question: "Can I visit Wuyishan without climbing Tianyou Peak?",
        answer:
          "Yes, a selective plan can focus on tea, hotel time and a different suitable landscape route. Review remaining stairs and surfaces individually. A river raft also has boarding and seating requirements and should not automatically be described as accessible.",
      },
      {
        question: "Is Nine-Bend Stream bamboo rafting guaranteed?",
        answer:
          "No. Operation depends on current conditions, availability and provider requirements. Confirm the actual arrangement and a worthwhile alternative. Private guiding does not establish an exclusive raft or override an operational closure.",
      },
      {
        question: "Can I visit a Wuyishan tea producer outside harvest?",
        answer:
          "A confirmed tasting or discussion may be possible, but picking and live processing follow the producer's work and season. Agree the host, learning focus, language and purchase expectations rather than promising a full production demonstration year-round.",
      },
      {
        question: "Should I stay near the scenic area or in Wuyishan city?",
        answer:
          "Compare the Sangu resort area for a scenery-focused stay with a city or gateway base for a particular property or connection. Use the exact hotel and planned entrances. A tea-village stay needs its own review of meals, room comfort and road access.",
      },
      {
        question: "Can I combine Wuyishan and Quanzhou?",
        answer:
          "Yes, when the actual rail and road connections leave useful days for both. They offer complementary scenery, tea and maritime-cultural interests. Confirm the stations and hotel transfers rather than placing a private appointment against an uncertain arrival.",
      },
    ],
    culturalStory: {
      title: "Connect tea to the landscape without simplifying the craft",
      paragraphs: [
        "Rock tea becomes more interesting when a host connects the finished drink with growing conditions and the choices involved in processing and roasting. A walk through a selected landscape can provide context, while a seated tasting allows closer comparison. Neither needs to become a claim that one visible hillside explains every tea or that a visitor can witness all stages in an afternoon.",
        "Wuyishan also has a wider cultural history reflected in its heritage significance and selected visitor sites. Choose interpretation grounded in the place actually visited and respect working and protected areas. A private session is valuable through the host's knowledge and willingness to receive you, not through unverified titles, restricted access or compulsory purchases.",
      ],
    },
    foodStory: {
      title: "Keep tea and meals as separate needs",
      paragraphs: [
        "A tasting can involve several infusions and sustained concentration, so plan a proper meal rather than assuming tea replaces lunch. Choose a menu and timing that work around the scenic route, with a comfortable break after stairs or a river outing. Explain preferences before ordering instead of relying on a fixed list of regional specialties.",
        "Allergies and dietary requirements need checking with the actual restaurant or hotel. Stocks, sauces and cooking methods can matter even when a dish looks vegetable-based. A quieter tea-village property may have fewer alternatives at short notice. Confirm breakfast, dinner and what happens if the weather changes the day's return time, keeping any tea purchase clearly optional unless otherwise agreed.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the actual scenic or village base",
        description:
          "Transfer from the booked gateway, review the following day's arrangements and keep the first evening local. Leave fixed raft or host appointments separate from an uncertain arrival.",
      },
      {
        day: "Full day 1",
        title: "A selected landscape perspective",
        description:
          "Use the confirmed river or walking plan, with remaining stairs, boarding and conditions reviewed. Keep a meal and comfortable alternative in the day.",
      },
      {
        day: "Full day 2",
        title: "Tea with a clear learning focus",
        description:
          "Meet the agreed host for a suitable session, then choose a complementary manageable visit or hotel time. Live production and purchases are included only as confirmed.",
      },
      {
        day: "Departure",
        title: "Protect the onward connection",
        description:
          "Reach the actual station or airport with the complete road journey allowed. This outline illustrates choices and is not a published package with all options included.",
      },
    ],
  },
};
