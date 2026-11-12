import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/zhuhai.svg",
  alt: "Original Zhuhai planning schematic comparing city seafront, Gongbei, Hengqin and a separately planned offshore island stay; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const zhuhaiGuide: ExpandedDestination = {
  id: "zhuhai",
  name: "Zhuhai",
  region: "south",
  kicker: "A coastal city stay with distinct village, border and island choices",
  description:
    "Choose Zhuhai by the actual purpose: a seafront city break, Tangjiawan heritage, a Hengqin property or a separately planned offshore island stay.",
  stay: "2–3 nights for a city chapter; offshore islands need their own plan",
  bestFor:
    "Coastal city comfort, selected village heritage and carefully arranged regional connections",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["macao", "zhongshan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Zhuhai Travel Guide: Seafront, Hengqin & Stays",
    seoTitle: "Zhuhai Guide: Seafront, Hengqin & Stays",
    seoDescription:
      "Choose where to stay in Zhuhai: city seafront, Gongbei, Hengqin or a separate island. Plan Tangjiawan, village culture, two-night stays and Macao connections.",
    answer:
      "Zhuhai (珠海) is a coastal city in Guangdong beside Macao, also written Macau. A good stay distinguishes the Xiangzhou/Jida city seafront, Gongbei's station and border role, a specifically located Hengqin property, and offshore islands such as Dong'ao (东澳岛). These are different bases, not interchangeable seaside neighborhoods. Tangjiawan (唐家湾) and selected Beishan (北山) village interests add cultural depth beyond a coastal photograph. Two nights give one full city day; three can separate a city-and-village chapter from worthwhile property time. An island extension needs its own ferry, room and return assessment. Macao is a separate entry and service arrangement, not an automatically included part of a Zhuhai hotel booking.",
    stayAnswer:
      "Two nights are a useful starting point for one full local day between arrival and departure. Three allow a distinct heritage outing, slower seafront time or a particular property that rewards rest. One night can serve a convenient connection but may leave little time beyond the gateway. A focused day visit works only when the whole approach and return leave useful hours. Offshore islands require their own dated sailing and hotel plan; two island nights can give a full day when the actual connection supports it. Do not assume a three-night city stay also comfortably includes a full Macao visit and an offshore island.",
    hotelAnswer:
      "Compare a precise Xiangzhou or Jida seafront address for city walks and meals, Gongbei for its actual station or border convenience, and a named Hengqin property for a particular hotel or attraction-led stay. An offshore room is a different booking and transport chain. Check the booked view, quiet, bathroom, temperature control, breakfast, luggage and pickup. Sea view, shore access, a bathing beach and supervised swimming are separate questions. A large resort may involve substantial internal walking; a border-facing address may be practical without offering a restful coastal setting.",
    sightseeingQuestion: "Should I choose the city seafront, Hengqin or an offshore island?",
    sightseeingAnswer:
      "Choose the city seafront for a practical coastal stay with meals and selected urban walks. Choose Hengqin when an actual property or confirmed attraction is central, after checking its exact address and services. Choose an offshore island when the room, beach or coastal landscape justifies separate sailings and useful local time. These settings are not equivalent. For a short stay, one suitable base with a thoughtful heritage or food chapter usually gives more value than repeated moves between a border, resort and ferry pier.",
    visitorResources: [
      {
        label: "Zhuhai municipal government",
        href: "https://www.zhuhai.gov.cn/",
        scope:
          "City background and dated notices, mainly in Chinese. Confirm the actual seafront route, village venue, island operator and responsible attraction separately. A regional description does not verify a sailing, swimming facility, hotel inclusion or specialist appointment.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated trains and exact stations, then both hotel roads. Zhuhai station near Gongbei is not interchangeable with every Zhuhai-area station or airport gateway. Choose the service for the actual hotel and itinerary rather than from the municipal name alone.",
      },
      {
        label: "Macao Government Tourism Office",
        href: "https://www.macaotourism.gov.mo/en/",
        scope:
          "Reference for Macao visitor information and links to relevant current requirements. Verify eligibility and the exact crossing with the responsible authorities for the individual traveler. Mainland entry and re-entry, Macao entry and the booked transport are separate checks; tourism information does not establish eligibility or a through-car service.",
      },
    ],
    serviceScope:
      "A proposal should name the actual hotel and room, gateway, complete transfers, guide language, selected public routes, admissions and meals. A Hengqin stay should list the specific facilities or attraction tickets included. An offshore chapter needs named piers, dated sailings, luggage and island-side transport, cancellation terms and a practical alternative. A Macao connection needs the exact crossing, each side's provider and handover; a mainland private vehicle does not automatically operate across the boundary. Village interiors, a specialist and any private event require separate confirmed arrangements.",
    routeAdvice:
      "Macao adds its own peninsula heritage, food and hotel choices, with separate entry and local delivery confirmed individually. Zhongshan adds Cuiheng history, selected Shiqi streets and a different landscape-design subject. Choose what each contributes and allow useful local time instead of using Zhuhai only as a name between gateways. No matching published Zhuhai product is recommended here. Share dates, actual arrival and departure points, room expectations and whether the main purpose is coast, culture, a particular property or regional travel for a proposal built around those priorities.",
    practicalPlanning: {
      timing:
        "Count the complete gateway-to-room journey before judging a short stay. Zhuhai airport in Jinwan, Gongbei, a bridge port, Hengqin and an island pier are different places. A ferry day includes ticketing, waiting, boarding, sailing and the final road. A crossing includes both sides' formalities and transfers. Protect a critical flight or train from an uncertain same-day island return, and do not promise a fixed clearance time. Keep meaningful city time between the connections.",
      walking:
        "Choose the actual seafront segment, public village route or attraction circuit, checking shade, seating, toilets, crossings, slopes and return. A long promenade does not have to become an end-to-end walk. Resort corridors, large crossing terminals and ferry approaches can add substantial walking even on a vehicle-led day. Boat boarding and island paths need separate checks. Agree a shorter coherent option and actual luggage help where required.",
      cost: "Compare the room category, exact view, meals, full vehicle and guide time, admissions and any ferry or crossing service. Island-side transport and through-service claims should be explicit. A resort rate may not include attraction access, all pools or children's activities. Clarify weather cancellation and handover terms. A premium quote should demonstrate better rooms, interpretation, rest and dependable support rather than imply a private beach, unrestricted island access or guaranteed boundary clearance.",
    },
    attractions: [
      "A selected Lovers' Road / Qinglü Lu / 情侣路 city-seafront segment",
      "Zhuhai Fisher Girl / 珠海渔女 as a selected public coastal landmark, not a full-day program",
      "Tangjiawan / 唐家湾, with a defined public heritage walk and actual open venues",
      "Beishan village / 北山村 in the Nanping area, with present-day use and public access explained",
      "A specifically located Hengqin property or named attraction, only when central to the trip",
      "Dong'ao Island / 东澳岛 as a separately planned offshore stay, not automatic coverage of every island",
    ],
    stays: [
      {
        label: "Day visit or 1 night / one clear purpose",
        advice:
          "Choose a city route or particular property around the actual transport window. Keep the scope selective. Use a short gateway stop for one city subject; Macao and offshore islands need their own travel arrangements and useful visiting time.",
      },
      {
        label: "2 nights / one full city day",
        advice:
          "Use one suitable base and allow a considered walk, cultural subject, meal and rest. Arrival and departure should support that day rather than consume it. A shoreline photograph is not a reason to add another hotel move.",
      },
      {
        label: "3 nights or a separate island block / distinct chapters",
        advice:
          "Three city nights can separate a heritage outing from property or coastal downtime. An island stay needs its own useful nights, dated sailings and room assessment. It is not automatically included in the same three-night city outline.",
      },
    ],
    hotelAreas: [
      {
        name: "Xiangzhou / Jida city seafront / walks and meals",
        advice:
          "Choose the exact address and booked room for a manageable shore segment, dinner, quiet and pickup. Check traffic noise, actual view and road crossings. A seafront name does not establish a bathing beach or direct access from the room.",
      },
      {
        name: "Gongbei / a specific rail or Macao connection",
        advice:
          "Assess the complete station or crossing approach, bags, meal options and room quiet. This can be practical when the gateway is central, but do not assume it offers the same atmosphere as a leisurely seafront stay. Confirm the actual crossing and each side's pickup.",
      },
      {
        name: "Hengqin / a particular property or attraction",
        advice:
          "Choose only when the actual hotel, dining and open facilities justify the stay. Review internal walking and transport to the selected visitor entrance. A Hengqin address does not itself provide Macao entry, attraction admission or a through-boundary car.",
      },
      {
        name: "An offshore island / a separate coastal chapter",
        advice:
          "Assess the actual island, property and beach approach along with sailings, island transfer, meals and indoor comfort. Dong'ao and other islands are separate choices. Sea view, shore access and swimming conditions remain distinct; allow a practical weather alternative.",
      },
    ],
    tradeoffs: [
      {
        title: "A coastal city and an offshore escape provide different value",
        advice:
          "The city offers a practical room, food and selected walks without a ferry for every outing. An island can offer a different landscape but brings its own transport, facilities and weather dependence. Choose the actual room and useful time, not a generic island photograph. A short stay is often better served by one coherent base.",
      },
      {
        title: "Gongbei, Hengqin and the bridge port are different gateways",
        advice:
          "Match the exact crossing or service to the traveler, booked provider and final address. The Hong Kong–Zhuhai–Macao Bridge does not make every private car a cross-boundary vehicle, and its Zhuhai port is not the same place as Gongbei. Confirm the handover, luggage and both room transfers. Proximity on a regional map is not a complete connection plan.",
      },
      {
        title: "Tangjiawan and Beishan need present-day context",
        advice:
          "A useful walk distinguishes historic fabric, repairs, newer businesses and current community use. Ask what the actual buildings and reliable local evidence reveal about trade, education, overseas connections or village organization. A café in an old-looking building is not proof of an original interior. Public lanes do not authorize entry to occupied homes or private events.",
      },
      {
        title: "A landmark can be a worthwhile pause without becoming the whole itinerary",
        advice:
          "A selected seafront segment and the Fisher Girl landmark can orient the city. Add interpretation, shade and a meal rather than turn the day into a long chain of similar photo stops. A guest with a deeper history interest may gain more from one substantial Tangjiawan route than another drive along the shore.",
      },
      {
        title: "A resort should work beyond the promotional pool photograph",
        advice:
          "Check the actual room, temperature control, dining, quiet, indoor seating and open facilities. Review the walking required inside a large property and how non-participating companions spend their time. Rain, maintenance or operating decisions can change an outdoor plan. A more expensive room is useful when its specific benefits match the guest, not simply because it carries a luxury label.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "macao",
        advice:
          "Macao offers a distinct peninsula, Taipa, Coloane or property-led chapter. Verify individual entry and mainland re-entry eligibility, exact crossing, local provider and full handover. A nearby Zhuhai room or private mainland car does not establish those arrangements or complete a substantive Macao stay.",
      },
      {
        slug: "zhongshan",
        advice:
          "Zhongshan adds Sun Yat-sen history at Cuiheng, selected Shiqi food and Qijiang Park landscape reuse. Choose a specific question and actual base, then compare full roads or dated trains. Its historical Xiangshan context does not make present-day Zhongshan and Zhuhai one local sightseeing district.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for seafront and village walking, with current rain, temperature and holiday demand checked. Summer needs shade, water and shorter exposed blocks; storms can affect ferries and outdoor facilities. Cooler stays change the value of room heating, a sheltered walk and an indoor alternative. Island and swimming plans need their own current review. Do not infer clear water, sunset, operating boats or an open hotel pool from a seasonal description.",
    orientation:
      "Zhuhai is a coastal municipality in Guangdong. Xiangzhou and Jida city-seafront choices, Gongbei, Tangjiawan, Nanping's Beishan, Hengqin, Jinwan airport and offshore islands require different roads. Macao is a separate Special Administrative Region and entry arrangement. Hengqin hotel or attraction addresses must be precise; neither a district label nor a nearby crossing guarantees the right onward route. Choose a city hotel or an island stay deliberately: ferry schedules and the final approach matter more than a broad Zhuhai address.",
    experiences: [
      "Enjoy a manageable city-seafront walk supported by a comfortable room and good meals",
      "Explore a selected Tangjiawan or Beishan route through actual buildings and current community use",
      "Choose a specific property or offshore chapter only when the full transport and useful time justify it",
    ],
    planningNotes: [
      "Separate city seafront, Gongbei, Hengqin and offshore islands before choosing the room",
      "Name the exact gateway, crossing or pier and both sides of every transfer",
      "Give village interpretation its own route rather than another quick photo stop",
    ],
    arrival:
      "Compare Zhuhai airport in Jinwan, the actual ticketed railway station, any ferry and the exact boundary port on complete room-to-room time. Zhuhai station near Gongbei is not a universal gateway for every hotel. A Hong Kong or Macao approach needs separate traveler eligibility, dated service and local handover. An offshore stay adds the actual sailing and island hotel road. Keep the essential cultural visit away from uncertain arrival and protect a critical onward connection from a fragile same-day ferry plan.",
    gettingAround:
      "Use an address-based plan with the selected hotel, public walk, village entrance, meal and gateway. Clarify waiting, guide accompaniment, luggage and pickup. Mainland road transport, offshore ferry services and cross-boundary transport are different arrangements. Private guiding does not open household interiors or private events. Choose a suitable route and meaningful pauses instead of crossing the municipality repeatedly for every landmark.",
    stayStrategy:
      "Two nights give one full city day; three can separate a substantive village route from worthwhile hotel or coastal time. Choose the actual city, Gongbei or Hengqin room according to the principal purpose. An offshore island needs its own nights and full transport assessment. Compare quiet sleep, bathroom, temperature control, meals, indoor comfort and the final road. High-end value comes from these details, good interpretation and dependable support rather than treating every sea-view room as a resort escape.",
    firstTimerNote:
      "Ask where the room is in relation to the experiences you actually want. A convenient border hotel, a city-seafront room, a Hengqin resort and an island stay solve different problems. Then ask what a second full day adds. A clear cultural chapter, a comfortable meal and unhurried hotel time may provide more value than combining every gateway and island into one short break.",
    faqs: [
      {
        question: "Is Zhuhai worth staying in, or only passing through?",
        answer:
          "A stay can be worthwhile for a city-seafront break, selected Tangjiawan or Beishan heritage, or a particular property. Two nights give one full local day. Choose it for those interests rather than assume proximity to Macao alone creates a complete holiday.",
      },
      {
        question: "Where should I stay in Zhuhai?",
        answer:
          "Compare an exact Xiangzhou/Jida seafront address for city walks, Gongbei for a specific gateway, and a named Hengqin property for its actual facilities or attraction. Offshore islands require separate bookings and transport. Check room quiet, meals, internal walking and complete roads.",
      },
      {
        question: "How many nights should I spend in Zhuhai?",
        answer:
          "Two nights support one full city day; three allow a distinct cultural or property-led chapter. One night may suit a connection but should stay selective. Offshore islands need their own useful nights and dated sailing plan rather than an automatic addition.",
      },
      {
        question: "Can I visit Macau from Zhuhai and return?",
        answer:
          "Plan it only after the individual traveler's Macao entry and mainland re-entry eligibility, exact crossing and both transfers are confirmed. A mainland hotel booking does not establish permission. Compare the full return with a separate Macao stay when heritage or a particular property is important.",
      },
      {
        question: "Is Hengqin the same as central Zhuhai?",
        answer:
          "No. It is a distinct location and hotel or attraction choice with its own roads and boundary context. Name the exact property and entrance. A Hengqin address does not automatically include a particular attraction, Macao entry or convenient access to the city seafront.",
      },
      {
        question: "Should I add Dong'ao Island to a short Zhuhai stay?",
        answer:
          "Add it when the actual property and coastal time justify a separately confirmed ferry, hotel and return plan. Review weather terms, island transport, meals and useful hours. A short city stay may be stronger without an island move when it would mostly add transfers.",
      },
      {
        question: "How do I plan a private Zhuhai visit?",
        answer:
          "Share dates, gateways, walking and room preferences, and the main interest: coast, culture, a specific property or regional connection. Ask for actual routes, full transfers, meals and any confirmed specialist. No matching published product is recommended here; tailor the proposal around useful local time.",
      },
    ],
    culturalStory: {
      title: "Look beyond the modern seafront for the coast's human history",
      paragraphs: [
        "A coastal city is more than its promenade. A selected Tangjiawan route can introduce buildings, education and overseas connections when the guide identifies the particular evidence. Beishan offers another village setting within today's urban environment. At either place, ask how a building was used, which features survive and how restoration or newer businesses changed the encounter. A functioning neighborhood need not be an untouched historic set to be interesting. The useful distinction is between what can be observed, what a reliable source establishes and what remains a local interpretation.",
        "The city shore and offshore islands show another relationship between everyday use and visitor experience. A managed promenade, a working harbor, a resort beach and an island village are different places with different purposes. Give the chosen route enough explanation rather than assign the same fishing-village story to every view. Macao's proximity adds regional context but not a single shared visitor regime. A thoughtful itinerary lets each cultural and coastal chapter retain its own identity, provider and useful time.",
      ],
    },
    foodStory: {
      title: "A seafood meal starts with the order, not the photograph",
      paragraphs: [
        "Choose an actual restaurant and ask about the available species, preparation, portion or weight basis and any cooking charge before ordering. A fish steamed for the table, a shellfish dish and a soup create different portion and dietary questions. A live display or seaside address does not establish local wild origin or a sustainability claim. Agree the cost basis and a balanced table with vegetables or another suitable dish, rather than let a short stay become a sequence of oversized seafood meals.",
        "Check fish bones, shellfish, stocks, soy, wheat-containing sauces, peanuts, sesame and shared preparation where relevant. Serious requirements need the actual kitchen's confirmed capacity and an alternative. A Hengqin resort, city restaurant and island property can offer very different dining options and hours. For an island arrival or late crossing, confirm a realistic dinner before the final transfer. Comfortable seating, a clear menu and a relaxed return contribute more than another detour for a famous waterfront table.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Match the gateway to the chosen base",
        description:
          "Complete the actual airport, station, port or crossing transfer and check the booked room. Keep the first meal or walk modest. Review the selected public routes and any confirmed cultural appointment rather than attach the essential visit to uncertain arrival.",
      },
      {
        day: "Full day 1",
        title: "Give the city a cultural as well as coastal chapter",
        description:
          "Choose a manageable shore segment and a substantive Tangjiawan or Beishan interest when full roads and opening support both. Keep time for explanation, lunch and rest. A landmark pause does not need to become a long circuit of similar coastal photographs.",
      },
      {
        day: "Optional full day 2 / three-night city stay",
        title: "Add a distinct purpose",
        description:
          "Choose worthwhile property time or a different confirmed local subject. A Macao visit requires its own traveler and crossing arrangements; an offshore stay requires a separate sailing and hotel plan. These are alternative extensions, not activities automatically included in this day.",
      },
      {
        day: "Departure or separately planned extension",
        title: "Protect the complete onward connection",
        description:
          "Allow breakfast, bags, checkout and the full road or handover. Continue to a chosen Macao or Zhongshan chapter with its own useful time. This outline is illustrative, not a published package or guarantee of entry, sailings, private venues and operating facilities.",
      },
    ],
  },
};
