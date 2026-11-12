import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/beihai.svg",
  alt: "Original Beihai planning schematic comparing old-town city time, Silver Beach accommodation and a separately planned Weizhou Island crossing; not a map or photograph",
  width: 1600,
  height: 1200,
};

export const beihaiGuide: ExpandedDestination = {
  id: "beihai",
  name: "Beihai",
  region: "south",
  kicker: "A coastal city stay with room for history, food and the sea",
  description:
    "Plan Beihai for old streets, Silver Beach and Qiaogang food. Compare city and coastal hotels, useful nights and a separately planned Weizhou Island stay.",
  stay: "2–3 mainland nights; island nights and ferry contingencies are separate",
  bestFor: "Port-city history, coastal downtime and Guangxi food",
  interests: ["heritage", "city", "landscape", "food"],
  relatedDestinationIds: ["weizhou-island", "nanning", "guilin", "sanya"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Beihai Travel Guide: Old Town, Silver Beach & Hotels",
    seoTitle: "Beihai Guide: Old Town, Silver Beach & Hotels",
    seoDescription:
      "Plan Beihai with old-town and Silver Beach hotel choices, Qiaogang food, two or three nights and a separate Weizhou Island ferry and overnight decision.",
    answer:
      "Beihai combines port-city history around Old Street, a mainland beach stay at Silver Beach and food in Qiaogang. Choose it for a relaxed Guangxi coastal chapter with more variety than a beach alone. Two mainland nights give one full day; three allow time for the city, coast and hotel. Weizhou is a separate offshore island reached by passenger boat. Add island nights only when they leave useful time beyond the crossings.",
    stayAnswer:
      "Two mainland nights suit one considered day of old-town context, a good meal and a selected coastal visit. Three nights provide two full days, letting you separate city walking from beach-area or property time. One night can serve a practical connection but needs favorable travel hours to include meaningful sightseeing. A Weizhou visit requires its own crossing, island transport and visit time; do not count two mainland nights as two island days. Extra mainland time can reduce scheduling pressure without guaranteeing operating ferries or swimming conditions.",
    hotelAnswer:
      "Choose an actual city hotel for old-street visits and dining, a Silver Beach-area property for a coast-focused stay, or a Qiaogang-area room when its food scene and particular location suit you. Check noise, room view, meals, pool operation and the real route to the sand. Road crossings, public beach access and the final walk can matter more than a beachfront label. A terminal-oriented room serves a different need: confirm the booked passenger departure point rather than assume every port name means the Weizhou ferry terminal. An island room is a separate booking with a boat journey between it and the mainland.",
    sightseeingQuestion: "Should I stay in Beihai city, near Silver Beach or on Weizhou Island?",
    sightseeingAnswer:
      "Choose the city for port history, restaurants and practical mainland connections; Silver Beach for a named coastal property and time by the shore; Weizhou for an intentionally planned island chapter. A city room can still support a selected beach visit, and a coastal room needs its own transfer to Old Street. Weizhou introduces ferry dependence, luggage and island access, so compare the entire stay rather than choose by a single sea-view photograph. None of these locations guarantees a quiet beach, safe sea swimming or the same hotel service.",
    visitorResources: [
      {
        label: "Beihai municipal government",
        href: "https://www.beihai.gov.cn/",
        scope:
          "City background and dated public notices, mainly in Chinese. Confirm actual site access, beach management and the booked passenger operator's current arrangements. A government destination entry is not a sailing confirmation, swimming advisory or hotel guarantee.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and the actual arrival or departure station. Include hotel transfers, luggage and boarding. A Beihai rail arrival does not deliver guests directly to a beach or island ferry.",
      },
      {
        label: "China Meteorological Administration weather service",
        href: "https://weather.cma.cn/",
        scope:
          "Official forecast and warning starting point. Marine conditions and passenger sailings also require the current responsible authority and booked operator's notices; a fair city forecast does not establish a calm or operating crossing.",
      },
    ],
    serviceScope:
      "A tailored mainland proposal should name the room, guide language, actual old-street route, coastal visits, meals and complete road transfers. If an island chapter is requested, specify the passenger operator, departure terminal, tickets, luggage, island transport and room separately, together with the response to a changed or cancelled sailing. A private guide does not make a scheduled ferry private, create exclusive beach access or guarantee the sea. Hosted food visits, boat activities and pearl-related appointments need their own agreed content and willing provider.",
    routeAdvice:
      "Use Beihai for mainland history, food and coastal downtime, adding Weizhou only when the island has useful nights of its own. Send your dates, gateways, room preferences and available nights for a tailored Guangxi proposal. We can compare the mainland and island balance, then assess the actual connection with Nanning or Guilin. The overnight sequence should protect any fixed onward departure from changes to the island crossing.",
    practicalPlanning: {
      timing:
        "Give Old Street a useful daylight window for architecture and street context, then choose a meal and coastal time without repeated cross-city drives. A market or food street may have different trading hours from a museum or heritage interior. In hot weather, reduce exposed midday walking and leave a seated break. A ferry day has check-in, boarding and island transfers outside the crossing itself. Do not attach a tight flight or train to the return from Weizhou.",
      walking:
        "Old-street paving, thresholds, road crossings and standing can affect comfort. A beach day involves exposed sun, soft sand and the distance from vehicle or room to the actual shore. Ask about shade, seats, toilets and a shorter route. Follow current beach flags, closures and local advice; a broad sandy beach or hotel facing the water does not establish suitable swimming. Boat boarding has its own steps, movement and balance considerations that a private road transfer cannot remove.",
      cost: "Compare the actual room, road service, guide scope, admissions where selected, meals and any activity. Distinguish hotel pools from sea access and confirm whether advertised facilities are operating or separately charged. Quote an island chapter with both terminal transfers, dated passenger tickets, island transport and any applicable visitor charges; state change terms and costs clearly. Optional seafood purchases, pearl purchases and recreational boat services should not be hidden inside a vague premium coastal experience.",
    },
    attractions: [
      "Beihai Old Street / 北海老街, with Zhongshan Road context and visible building history explained",
      "Silver Beach / 银滩 as a selected public coastal visit or accommodation setting",
      "Qiaogang / 侨港 food and community context through an agreed public route",
      "A named city collection or heritage interior when its actual opening and subject fit",
      "Time at a suitable mainland coastal hotel, with room and facilities confirmed",
      "Weizhou Island / 涠洲岛 only as a separately planned offshore chapter",
    ],
    stays: [
      {
        label: "1 mainland night / a practical introduction",
        advice:
          "Use only when arrival and departure leave useful local hours, or accept that the night primarily supports a connection. Choose one city or coastal interest instead of promising a complete Beihai day and an island visit.",
      },
      {
        label: "2 mainland nights / one full day",
        advice:
          "Combine a considered old-street visit with food and selected coast time when the actual hotel and walking fit. Leave room for heat, rain and meals. This does not automatically include Weizhou or two full sightseeing days.",
      },
      {
        label: "3 mainland nights / separate city and coast",
        advice:
          "Use two full days for different interests or more time at the property. An island stay needs additional, explicitly located nights and a robust crossing plan. Do not describe extra nights as insurance against every marine disruption.",
      },
    ],
    hotelAreas: [
      {
        name: "City and Old Street access / history and dining",
        advice:
          "Choose the actual property for sleep, meals and the route to selected streets. A heritage-style interior is not proof of an original historic building. Check evening noise, vehicle pickup and thresholds rather than assume every central room offers a quiet, easy walk.",
      },
      {
        name: "Silver Beach area / the full room-to-shore route",
        advice:
          "Compare the bedroom view, public road crossings, distance to the sand, shade, pool and dining. A hotel can be convenient for the coast while adding road journeys to Old Street. Choose the property for the time you will actually spend there, not a promise of private beach or daily sea swimming.",
      },
      {
        name: "Qiaogang or a terminal-oriented property / a specific reason to stay",
        advice:
          "Qiaogang dining access and a particular ferry departure are different priorities. Plot the actual room against both, checking evening noise, breakfast and pickup. A nearby-looking port on a map does not establish the right terminal or a walkable boarding route with bags.",
      },
    ],
    tradeoffs: [
      {
        title: "A port-city history deserves more than a shopping-street label",
        advice:
          "Use Old Street's visible forms, street layout and commercial context to discuss Beihai's maritime connections. Distinguish surviving fabric, repairs, reconstruction and modern shopfronts. An arcaded facade does not prove that an entire building is unchanged or that every interior is historic and open. A quieter daylight visit can serve architecture better than a busy evening food stop; choose the timing for the question you want answered.",
      },
      {
        title: "Beach time and swimming are separate decisions",
        advice:
          "A walk on the shore, a hotel pool and sea swimming offer different experiences. Follow current conditions and managed swimming-area rules; tides, currents, wind and seasonal weather can change the sensible plan. Ask about the actual room-to-beach route and an enjoyable alternative if the water is unsuitable. Do not promise warm, swimmable sea throughout the year because Beihai is in southern China.",
      },
      {
        title: "Weizhou is an island journey, not a spare mainland afternoon",
        advice:
          "Review dated passenger services, terminal check-in, boarding, luggage, island arrival and the visits you actually want before choosing a day trip or overnight. A crossing duration alone does not describe the total day. Sailings can change or stop, and a premium ticket does not override marine conditions. An island return should not be the only way to meet a tightly fixed onward departure.",
      },
      {
        title: "Choose the seafood before agreeing the bill",
        advice:
          "Confirm the item, whether the price is by weight or portion, the unit used, the final weighing and cooking charge before preparation. Keep the meal optional and offer alternatives for guests who do not eat seafood. A busy waterfront restaurant is not proof of quality, allergy capability or fair pricing. Good service includes explaining what is being ordered, not simply presenting a large live-seafood selection.",
      },
      {
        title: "A pearl story is not an appraisal",
        advice:
          "Beihai's pearl associations can support a material-culture discussion, but a local retail address does not establish where a particular pearl was grown or its quality. Ask about cultured versus imitation material, treatment, description and what any independent report actually tests. A showroom is not automatically a working farm or a behind-the-scenes visit. Keep purchases optional and do not imply investment value or health benefits.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "weizhou-island",
        advice:
          "Weizhou is a separate offshore stay for volcanic coastal scenery and village or property time. Two island nights give one full day, three give two. Confirm both mainland and island transfers, actual passenger services, room and a changed-sailing response. Keep fixed onward departures away from a tight island return.",
      },
      {
        slug: "nanning",
        advice:
          "Nanning adds Guangxi collections and a separate city-food chapter or a practical gateway. Compare actual dated trains, stations and hotel transfers with the road alternative. A rail sector is not the complete room-to-room journey, especially after an island crossing.",
      },
      {
        slug: "guilin",
        advice:
          "Guilin and Yangshuo offer inland karst and river scenery rather than a continuation of the same coastal day. Choose actual rail or road connections and useful nights. The published Li River cruise does not include Beihai, and shared Guangxi geography does not create a matched product.",
      },
      {
        slug: "sanya",
        advice:
          "Compare Sanya when a hotel-focused Hainan holiday is the main objective. Beihai offers a different combination of port-city culture, food and coast. Do not assume identical winter warmth, swimming conditions or resort service, and do not treat the two as adjacent stops without a full transport plan.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose dates by the whole stay rather than a blanket beach-season promise. Warmer months can support coast time but also bring heat, rain and periods of disruptive weather; marine warnings matter for an island extension. Cooler months can suit city walking while feeling very different from a tropical swimming holiday. Cloud, wind and sea conditions vary. A city hotel, dependable food and an alternative indoor or sheltered interest make the visit more resilient than planning every day around sand and sunshine.",
    orientation:
      "Beihai is a prefecture-level city in coastal Guangxi on the Beibu Gulf. The mainland city, Silver Beach, Qiaogang, the airport, railway station and passenger terminal are different locations. Weizhou is offshore and requires its own transport and stay decisions. This guide focuses on selected mainland culture, food and coastal choices. Weizhou, Hepu heritage, wetlands and maritime activities require their own visit plans.",
    experiences: [
      "Read Old Street through port history, building fabric and contemporary commercial life",
      "Enjoy a selected coastal property or public shore visit with the actual conditions understood",
      "Explore Qiaogang and regional food through a thoughtful meal and clear ordering",
    ],
    planningNotes: [
      "Choose city, Silver Beach or island time before fixing the room and nights",
      "Keep the complete ferry journey and a changed-sailing response separate from mainland sightseeing",
      "Check room-to-shore access, seasonal comfort and food charges rather than rely on sea-view labels",
    ],
    arrival:
      "Use the actual dated flight to Beihai Fucheng Airport or train to the booked station, then include the full hotel transfer, luggage and boarding needs. Beihai station, the airport and the Weizhou passenger departure are not interchangeable gateways. A connection through Nanning needs its own dated services and transfers. If continuing offshore, agree the operating terminal, check-in and realistic buffer; an arrival in Beihai does not establish that a same-day island connection will work.",
    gettingAround:
      "Group mainland visits around the actual hotel and road pattern. Old Street, Qiaogang and Silver Beach need their own walking and pickup decisions rather than one continuous promenade assumption. Confirm permitted vehicle access and the final approach to each stop. An island chapter requires separate terminal and island transport. Boat activities, wetland routes and swimming need specific operating and suitability checks; a driver reaching the waterfront does not establish access to any of them.",
    stayStrategy:
      "For two or three mainland nights, one well-chosen room can simplify the city and coast plan. Choose a hotel move only when the second setting earns packing and transfer time. If adding Weizhou, make every overnight location explicit and review the island return against onward travel. A mainland night before a fixed departure can reduce pressure, but no fixed buffer guarantees against prolonged marine disruption; the proposal should explain change options.",
    firstTimerNote:
      "Begin with one priority: a coastal city introduction, hotel downtime or a dedicated island chapter. Add a different interest only when it improves the holiday. You can enjoy Beihai through history, a good meal and time by the shore without swimming, buying pearls or taking another boat. A clear, comfortable mainland stay can be complete in its own right.",
    faqs: [
      {
        question: "Where is Beihai in China?",
        answer:
          "Beihai is a coastal city in Guangxi on the Beibu Gulf, also known as the Gulf of Tonkin. It is on the mainland, distinct from Hainan and from offshore Weizhou Island. The city, Silver Beach and ferry terminal are different locations within the travel plan.",
      },
      {
        question: "Is Beihai worth visiting?",
        answer:
          "Choose it for port-city history, regional food and a considered coastal stay. Two or three mainland nights let you combine these without filling every hour. If your only aim is a particular luxury resort or guaranteed swimming, compare the actual property and season carefully before choosing the destination.",
      },
      {
        question: "How many nights should I spend in Beihai?",
        answer:
          "Two mainland nights give one full day; three provide more room for city and coast. One night needs useful travel hours. Weizhou requires its own island time and complete crossing plan, so count mainland and island nights separately.",
      },
      {
        question: "Should I stay near Beihai Old Street or Silver Beach?",
        answer:
          "Choose a city room for history and dining, or a named Silver Beach-area property for coast and hotel time. Compare noise, meals, facilities and actual transfers. A sea-view room may still involve a road crossing or a long walk to the sand.",
      },
      {
        question: "Can I swim at Silver Beach all year?",
        answer:
          "Do not assume year-round suitable conditions. Follow current flags, closures and local management advice, considering water, wind and weather. A beachfront hotel does not guarantee sea swimming. A pool or shore walk is a different activity with its own access and operation.",
      },
      {
        question: "Is Weizhou Island part of a normal Beihai city day?",
        answer:
          "No automatic inclusion should be assumed. It is an offshore journey with dated passenger tickets, check-in, boarding, crossing and island transport. Assess a day visit or overnight separately, with a response to changed sailings. It is not a beach neighborhood reached by car.",
      },
      {
        question: "Can I fly out of Beihai immediately after returning from Weizhou?",
        answer:
          "Avoid a tight fixed connection dependent on the island return. Sailings can change or stop, and terminal-to-airport travel adds time after disembarkation. Consider a mainland night and agree change options, while recognizing that a fixed buffer cannot guarantee against prolonged disruption.",
      },
      {
        question: "What should I check before ordering seafood in Beihai?",
        answer:
          "Confirm the actual item, price unit, weight or portion and cooking charges before preparation. Discuss allergies and shared equipment with the kitchen. Keep seafood optional and choose a dependable alternative when the guest's diet or the restaurant's capability requires it.",
      },
      {
        question: "Can I combine Beihai with Nanning or Guilin?",
        answer:
          "Assess actual dated road or rail services and both hotel transfers, then allow useful nights in each place. Nanning offers a different city and gateway role; Guilin and Yangshuo add inland karst scenery. Same-province locations do not establish a short transfer or a matched published tour.",
      },
      {
        question: "Is there a published Beihai tour on this page?",
        answer:
          "No matching product is listed. Share dates, gateways, mainland and island nights, room needs and cultural or coastal interests for a tailored assessment. The illustrative mainland outline does not include a booked ferry, island room, pearl appointment or recreational boat activity.",
      },
    ],
    culturalStory: {
      title: "A coast shaped by trade and movement",
      paragraphs: [
        "Beihai's old streets provide an approachable way to discuss maritime trade and the changing life of a port. Look at street proportions, arcades, entrances and the relationship between buildings and commerce, then ask which parts survive, which have been repaired and how shops use them today. The city becomes more legible when architecture is connected with work and movement, rather than described as a collection of untouched colonial facades.",
        "Qiaogang offers another context through communities connected with movement across the wider region, including people who resettled from Vietnam. Food and public streets can introduce that history, but residents should not be treated as representatives of one uniform culture. Use a willing guide or host to explain particular experiences, and distinguish a public visit from a private household encounter. The value lies in understanding a lived place, not in promising an exclusive performance of its history.",
      ],
    },
    foodStory: {
      title: "Let the menu make the coastal story concrete",
      paragraphs: [
        "A Beihai food day can move between a seated seafood meal and selected Qiaogang snacks when the guest enjoys both. Ask what the chosen kitchen prepares well, explain portions and cooking methods, and keep regional influences attached to the actual dish rather than calling every menu item an ancient tradition. A few well-explained choices are more rewarding than rushing through a long tasting list in the heat.",
        "Before seafood preparation, agree species or item, weight or portion, unit price and cooking charges. Discuss shellfish, fish sauces, meat stocks, peanuts and shared preparation for dietary needs; a rice-based snack is not automatically allergy-safe or vegetarian. Keep purchases and unfamiliar dishes optional. Good interpretation, transparent ordering and a comfortable seat can show more expertise than a staged banquet or a sales-led market visit.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / the selected mainland base",
        title: "Settle the room and establish the coastal pace",
        description:
          "Complete the actual airport or station transfer and have dinner. Use any useful daylight for a short orientation appropriate to the hotel. Do not make a same-day island crossing or sunset the condition for a successful arrival.",
      },
      {
        day: "Full day / port-city context",
        title: "Explore Old Street with time to understand the buildings",
        description:
          "Choose a daylight route, explain surviving fabric and later changes, and leave a seated meal. A named interior or collection can be assessed separately if open and relevant. Keep exposed walking appropriate to heat and rain.",
      },
      {
        day: "Coast and food / a compatible afternoon or second full day",
        title: "Choose the shore, property or Qiaogang deliberately",
        description:
          "Add selected coast time or a food interest when the location and energy fit. With three mainland nights, separate these from the main history day for a slower stay. Sea swimming, boat activities and every food stop are not automatic inclusions.",
      },
      {
        day: "Departure / mainland connection or separately planned island chapter",
        title: "Keep the actual next destination explicit",
        description:
          "Continue to the booked gateway with luggage and boarding counted. If going to Weizhou, use a separate dated crossing and island plan. This two-to-three-night mainland outline is illustrative; a Weizhou stay requires separate island nights, tickets and transfers.",
      },
    ],
  },
};
