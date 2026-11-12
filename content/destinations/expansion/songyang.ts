import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/songyang.svg",
  alt: "Songyang planning schematic comparing the county town, mountain village stays and a selected tea or village route; not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const songyangGuide: ExpandedDestination = {
  id: "songyang",
  name: "Songyang",
  region: "east",
  kicker: "Mountain villages, thoughtful architecture and time to look closely",
  description:
    "Plan Songyang around a well-chosen village stay, rammed-earth architecture and tea-country interests, with practical advice on mountain roads, steps, room comfort and how much to fit into each day.",
  stay: "3–4 nights",
  bestFor: "Village architecture, photography and a considered countryside stay",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["yunhe", "hangzhou", "moganshan", "hongcun", "lishui"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Songyang Travel Guide: Villages, Stays & Itinerary",
    seoTitle: "Songyang Travel Guide: Villages, Stays & Itinerary",
    seoDescription:
      "Choose Songyang villages and a town or mountain base, with advice on Chenjiapu, Yangjiatang, Songzhuang, steps, tea visits and a three-night itinerary.",
    answer:
      "Songyang (松阳) is a county in Lishui, southwestern Zhejiang, known for mountain villages, rammed-earth houses, tea landscapes and contemporary architecture set within rural communities. It suits travelers who enjoy looking closely at buildings, village paths and the relationship between new design and everyday life. Chenjiapu, Yangjiatang and Songzhuang offer different settings; they are not adjacent lanes in one ancient town. Choose a small number of villages and a specific place to stay, allowing for winding roads, steps and time on foot. A Lishui city visit does not automatically include a meaningful Songyang stay.",
    stayAnswer:
      "Three nights provide two full days for a selected mountain-village route and a separate town, tea or architectural interest. Four nights allow a slower pace, more time at the property and a weather alternative. Two nights can work for a focused visit when the complete arrival and departure connections are convenient, but leave little room for several separate valleys. If photography matters, put the hotel near the actual subject rather than building each morning around a long drive. Extra nights improve flexibility; they cannot guarantee mist, sunshine or an empty lane.",
    hotelAnswer:
      "Choose the county town around Xiping for easier services and a practical base for road outings, a specific mountain-village property for its outlook and early or late village time, or a quieter lower-slope or valley stay when road and walking comfort matter. A renovated rural building can be memorable, but inspect the actual room, heating or cooling, bathroom, sound transmission, luggage approach and dinner arrangements. An advertised cliff or terrace view may come with steep steps. High-end value here means a room and daily rhythm that work well, not simply a dramatic architectural photograph.",
    sightseeingQuestion: "Which Songyang villages should you visit?",
    sightseeingAnswer:
      "Choose Chenjiapu for its hillside setting and the relationship between village buildings and contemporary cultural spaces, Yangjiatang for rammed-earth houses arranged on a slope, or Songzhuang for a stream-side village setting and bridge views. These are different subjects rather than a compulsory three-village circuit. Match the choice to your hotel, roads, walking and current public access. One village explored with time for explanation can be more rewarding than three brief photo stops. Bookshop, cafe and building interiors have their own hours and do not establish access to residents' homes.",
    visitorResources: [
      {
        label: "Songyang County government",
        href: "https://www.songyang.gov.cn/",
        scope:
          "County-level public information and administrative context, mainly in Chinese. Check current village access, local road notices, public facilities and specific cultural venues through the responsible authority or operator. This reference does not verify a hotel's room quality, a private host or an operating workshop.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Compare actual services to Songyang or another suitable gateway, including Lishui when appropriate, with the complete road transfer to the booked property. A city or county name on the ticket is not the final mountain-village address.",
      },
    ],
    serviceScope:
      "A tailored Songyang proposal can name the property and room, arrival gateway, vehicle, selected village routes, guiding and meals. Agree luggage handling and the final walking approach before booking a hillside room. Architecture specialists, tea hosts, workshops, building interiors and photography assistance require separate confirmation. Private guiding does not give unrestricted access to homes, roofs, fields or working spaces. Share stair tolerance, luggage, dietary needs and whether the priority is architecture, photography or rest so the stay can be designed around a realistic daily route.",
    routeAdvice:
      "Songyang can add a substantial rural chapter to a Zhejiang itinerary through Hangzhou when the actual transport and available days work. Moganshan offers a different villa-and-hotel retreat; Hongcun a different Huizhou village landscape. They are comparisons or separately planned stays, not nearby automatic stops. No matching published Songyang product is recommended here. Use the illustrative three-night outline to request a tailored visit with a named base, selected villages and the complete road journey, keeping optional hosts distinct from agreed services.",
    practicalPlanning: {
      timing:
        "Group visits by the actual road approach rather than collecting village names across the county. Allow time to park, walk in, pause for explanation and return to the vehicle; the arrival point may not be at the subject shown in a photograph. Protect a seated meal and avoid attaching a long mountain outing to a tightly timed departure. For photography, agree the specific subject and practical time window, with an alternative if weather or public access changes.",
      walking:
        "Village lanes can involve steep steps, uneven stone, drainage channels and narrow paths. A road reaching the village does not mean a car reaches the hotel door or the viewpoint. Check the final luggage distance, handrails, lighting and wet-weather surfaces as well as the room's stairs. A shorter route with a clear turnaround can work better than promising a full circuit. For limited mobility, assess a specific lower-gradient base and public route before deciding that a mountain-village stay is suitable.",
      cost: "Compare the actual room, bedding, bathroom, climate control, meals and cancellation terms, then add the complete transfers and guiding. A scenic room can carry a premium while still requiring stairs and having limited soundproofing. Specialist interpretation, tea sessions, courses and any chargeable venues need clear inclusions. A design-led property earns its price through comfort, service and a setting you can enjoy, not through implying exclusive access to an entire village.",
    },
    attractions: [
      "Chenjiapu / 陈家铺 for a hillside village and selected cultural spaces",
      "Yangjiatang / 杨家堂 for rammed-earth houses on a slope",
      "Songzhuang / 松庄 for a stream-side village and bridge setting",
      "Songyang county town and selected old-street interests",
      "Damu Mountain / 大木山 tea-country interests on an agreed visitor route",
      "A selected contemporary rural building with its current use and access explained",
    ],
    stays: [
      {
        label: "2 nights: one full day with a clear focus",
        advice:
          "Choose one base and a small number of villages on a sensible road route. Keep the arrival and departure realistic. A photography-intensive itinerary, a distant tea visit and several architecture stops are unlikely to leave enough time to understand the places or enjoy the property.",
      },
      {
        label: "3 nights: villages and a separate local subject",
        advice:
          "Two full days allow a selected mountain-village day and a different town, tea or architectural interest. Keep some time unscheduled for the property and weather. This is a useful starting point for a first Songyang stay when the actual gateways fit the trip.",
      },
      {
        label: "4 nights or more: slower looking and flexible timing",
        advice:
          "Give a favorite village or architectural subject more time, add a confirmed host encounter or retain a quiet day. Additional nights are useful when you enjoy rural life and the hotel itself, not merely to repeat similar photo stops. Consider a second base only if it changes access or the experience enough to justify moving.",
      },
    ],
    hotelAreas: [
      {
        name: "County town around Xiping",
        advice:
          "A practical starting point for easier meals, services and road outings to selected villages. Check the exact neighborhood, room quietness and pickup access. A town stay can reduce hillside luggage difficulties, but still requires driving to mountain subjects. Choose it knowingly rather than expecting the panorama shown in village-hotel marketing.",
      },
      {
        name: "A specific mountain-village property",
        advice:
          "Choose for the actual outlook and the chance to spend quieter hours in the village. Confirm the final road, parking point, stairs, luggage help, dinner and heating or cooling. A restored old house can have uneven levels and sound transmission. Check the quoted room's view and privacy rather than assuming every category matches the property's signature photograph.",
      },
      {
        name: "A lower-slope or valley property",
        advice:
          "Consider when countryside atmosphere matters but a steep final approach does not suit the group. Assess the actual car-to-room route, road noise, restaurant and nearby public paths. Being lower down does not automatically mean step-free access, and a remote retreat can still require advance meal planning. Match the address to the villages you actually want to visit.",
      },
    ],
    tradeoffs: [
      {
        title: "Select different village experiences, not several versions of one photograph",
        advice:
          "Chenjiapu's hillside cultural setting, Yangjiatang's sloping arrangement of earth-toned houses and Songzhuang's stream-side views offer different ways to read the landscape. Decide which differences interest you and how the roads connect from your base. A shorter list leaves time to notice building materials, village circulation and lived-in details. Do not promise quietness simply because a place appears remote on a map.",
      },
      {
        title: "A beautiful hotel must also work as a place to sleep",
        advice:
          "Request the exact room category, bathroom, heating or cooling, ventilation, window treatment and access route. Ask about sound between rooms, nearby communal areas and current work around the property. For a wet afternoon, check seating, daylight and dining rather than assuming a design award supplies indoor comfort. Families need actual beds and stair arrangements; couples may value a quieter room more than a larger shared terrace.",
      },
      {
        title: "Architecture has a use, an author and an access boundary",
        advice:
          "Songyang's contemporary rural projects are worth discussing as specific interventions in specific communities, not as a generic collection of photogenic buildings. Choose a building for what you can learn about materials, purpose and its relationship to local life. Check its current function and public access. A working production space, a cultural venue and a hotel are different visits; none automatically includes a designer meeting, workshop or private interior tour.",
      },
      {
        title: "Photography timing must respect people and practical conditions",
        advice:
          "Mist, sunlight on earthen walls and reflections depend on weather and season. Set the photographic interest without selling a guaranteed scene. Stay on agreed public routes and ask before photographing identifiable people, entering a courtyard or placing equipment near a doorway. Drone use requires a separate location-specific rules and consent review; an attractive aerial image is not evidence that visitors can repeat the flight.",
      },
      {
        title: "Tea-country scenery and hosted tea learning are different purchases",
        advice:
          "Damu Mountain can be considered as a specific tea-landscape interest with its actual visitor arrangements checked. A scenic route does not guarantee access to working plots, harvesting or a producer's time. If tea matters, agree the host, language, topic and season. Tasting, field observation and participation in production require different conditions. Keep buying optional, with the product and price explained separately from the visit.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "yunhe",
        advice:
          "Yunhe offers a different agricultural landscape from Songyang village architecture. Compare the actual crop stage, viewpoint walking and town or mountain property before adding it. Give each chapter useful time through the complete road sequence instead of treating the shared Lishui label as one compact village circuit.",
      },

      {
        slug: "lishui",
        advice:
          "Use the Lishui regional guide to decide whether a river, terrace, mountain or craft chapter genuinely adds to Songyang. The urban center and other counties need their own road and hotel planning. Do not treat a general Lishui city stay as automatically covering Songyang's villages, or add another county without usable time for its main subject.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake, city culture and Longjing tea-country interests before a more rural Songyang stay. Compare actual rail services or the full road journey, including the final mountain approach. These are separate bases: Songyang is not a convenient extra village to add to a West Lake afternoon.",
      },
      {
        slug: "moganshan",
        advice:
          "Compare Moganshan for summer-villa history and a different hotel-led retreat. Choose according to the buildings, landscape and stay you actually want. Combining both requires enough nights and a realistic transfer; a sequence of short rural check-ins can leave less rest than one well-chosen longer stay.",
      },
      {
        slug: "hongcun",
        advice:
          "Hongcun offers a distinct Huizhou architectural and water-system subject in Anhui. It is not another Songyang village or a nearby automatic stop. Combine them only when the architectural interest and complete transport connection justify separate nights and interpretation.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for village walks and time outdoors, with layers and a flexible plan for rain. Summer needs a realistic approach to heat, humidity, storms and exposed or slippery paths. Winter can suit a quiet architectural stay when the room is genuinely comfortable and meals are dependable. Tea work follows the actual season and grower's schedule. Mist and changing light can be beautiful in any suitable conditions, but are not bookable features of an itinerary. Check dates against holidays and local road notices.",
    orientation:
      "Songyang is a county within Lishui, not another name for Lishui city. Its county town, mountain villages, tea areas and individual hotels sit on different roads. Chenjiapu, Yangjiatang and Songzhuang require a route based on exact addresses and the group's walking ability. English spellings can conceal similar village names, so use the Chinese name and a precise location. Count the final uphill drive, parking and walking separately from any rail journey to the region.",
    experiences: [
      "Explore a selected mountain village with time to understand rammed-earth building and its hillside setting",
      "Compare a contemporary rural project with the local life and purpose it was designed to serve",
      "Enjoy a comfortable countryside base, a regional meal and an appropriately arranged tea-country interest",
    ],
    planningNotes: [
      "Choose the county town or a named village property before building the daily road routes",
      "Check steps, parking-to-room access, luggage handling, heating or cooling and dinner before booking",
      "Keep photography, tea hosts and building interiors conditional on actual weather, consent and access",
    ],
    arrival:
      "Compare actual railway services to Songyang and other suitable gateways such as Lishui, then include the complete road transfer to the property. Do not assume a train stops at Songyang merely because it serves the wider region, or that a Lishui arrival places you in the mountain village. Send the ticketed station, arrival time, luggage and Chinese hotel address. For a hillside stay, agree where the vehicle stops and who handles the final luggage approach before confirming the room.",
    gettingAround:
      "Use a planned vehicle for selected village routes with pickup and finish locations agreed. A guide can add context and help choose an appropriate walk, but the car may remain below the village or outside a narrow lane. Group visits by road access and keep a meal stop practical. An unmaintained path between villages is not automatically a suitable hiking connection; confirm the route and conditions rather than inferring a walk from a map. Leave time at the property instead of keeping every day on the road.",
    stayStrategy:
      "For three or four nights, choose one base that fits the main interest and the group's mobility. A mountain-village hotel can make early and late village time worthwhile; the county town can simplify meals and services. Compare the actual room and access rather than choosing the most dramatic exterior. A split stay needs a clear benefit such as a different setting or substantially better access, since check-out and luggage moves use the time that makes a rural break enjoyable.",
    firstTimerNote:
      "The strongest Songyang visit often has fewer stops than the first draft. Give each place a reason: building materials and settlement form, a particular contemporary project, a tea topic or simply a good place to stay. If the route amounts to quick photos of several villages, remove a stop and spend longer looking. The destination rewards attention more than a fast checklist, and the property should contribute to the experience rather than serve only as a late-night bed.",
    faqs: [
      {
        question: "Where is Songyang, and is it the same as Lishui?",
        answer:
          "Songyang is a county in Lishui, southwestern Zhejiang. It is not another name for Lishui city. The county town, mountain villages and hotels require separate road planning; a general Lishui visit does not automatically include Songyang's village and architecture interests.",
      },
      {
        question: "How many nights should I spend in Songyang?",
        answer:
          "Three nights provide two full days for a selected mountain-village route and a separate town, tea or architectural subject. Four nights allow a slower pace and weather flexibility. Two nights can work with convenient connections and a focused plan, but leave less time for separate valleys.",
      },
      {
        question: "Which is better: Chenjiapu, Yangjiatang or Songzhuang?",
        answer:
          "Chenjiapu suits an interest in a hillside village and selected cultural spaces, Yangjiatang in sloping rammed-earth houses, and Songzhuang in a stream-side setting. Choose by the subject, actual road route and walking ability. They are separate places, not a compulsory three-stop circuit.",
      },
      {
        question: "Should I stay in Songyang town or a mountain village?",
        answer:
          "Choose the town for easier services and a road-outing base, or a specific mountain property for its setting and early or late village time. Review steps, luggage, heating or cooling, soundproofing and meals. A mountain view does not establish comfortable access or the same facilities in every room.",
      },
      {
        question: "Is Songyang suitable for older travelers or limited mobility?",
        answer:
          "It depends on the exact base and route. Village paths and hotels can have steep steps, uneven stone and a final approach beyond the vehicle. Assess a shorter route, room access, handrails and wet-weather conditions individually; a car reaching the village does not mean it reaches the room or viewpoint.",
      },
      {
        question: "Can I visit Songyang as a day trip from Hangzhou?",
        answer:
          "Compare the full return transport and the time left in the chosen village before deciding. Songyang is a separate rural chapter with final mountain-road and walking logistics. A three-night stay is a more useful starting point for villages, architecture and hotel time than treating the county as a spare afternoon from West Lake.",
      },
      {
        question: "Can visitors enter the houses and contemporary buildings?",
        answer:
          "Public routes, cultural venues, occupied homes, working buildings and hotels have different access. Check the specific building and current hours. A guided visit does not imply private home entry, designer access or a workshop; choose what can actually be explained and visited with permission.",
      },
      {
        question: "When can I photograph Songyang villages in mist?",
        answer:
          "Mist depends on weather and local conditions, not a guaranteed date or booking. Choose the village and hotel for their real value, allow a sensible photography window and keep another plan. Respect residents and public access; drone arrangements require a separate rules and consent review.",
      },
      {
        question: "Can I combine Songyang with a tea visit?",
        answer:
          "A selected tea-landscape route or hosted session can add a distinct interest when location and availability fit. Agree the host, topic, language and season. Viewing tea fields, tasting and participating in production are different experiences, and none should be inferred from a generic tea-country label.",
      },
    ],
    culturalStory: {
      title: "Read a village through its materials and daily routes",
      paragraphs: [
        "Songyang's village interest lies in the relationship between houses, slopes, lanes and working landscapes. Rammed-earth walls are not just a color in a photograph: they invite discussion of materials, construction and the way a settlement fits its site. Compare a selected village's form and buildings with what you can actually see, distinguishing older fabric, repair and recent adaptation. A picturesque lane can still be part of someone's everyday route rather than a visitor set.",
        "Contemporary rural architecture adds another layer. Its value is clearer when a guide explains a particular project's purpose and how it relates to local use, rather than presenting design as a cure-all or describing residents as exhibits. A bookshop, workshop, production building and hotel have different functions and access. Keep encounters modest, informed and consensual; a thoughtful public visit does not need a claim of untouched village life or an exclusive private host.",
      ],
    },
    foodStory: {
      title: "Plan the meal as carefully as the viewpoint",
      paragraphs: [
        "Songyang's tea-growing landscape offers a useful subject for an unhurried tasting. Ask what the tea is, how it was made and how preparation changes the cup, rather than assuming every local label guarantees the same style or quality. A hosted discussion can be worthwhile without a plantation visit or purchase. If field activity matters, the actual season, work and host's availability determine what is possible; a shop stop and a producer encounter are not the same experience.",
        "For village meals, choose a small selection of regional vegetables, tofu and suitable meat or fish dishes with portions and preparation explained. Fresh, preserved and dried ingredients can all have a place without being described as freshly harvested that day. Confirm broths, sauces and shared preparation for dietary needs. At a remote hotel, dinner hours, advance ordering and a comfortable indoor table can matter more than another distant restaurant recommendation, especially after a wet afternoon or a long road day.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the base with the final approach understood",
        description:
          "Transfer from the ticketed station and account for mountain roads, parking and luggage access. Settle in and keep dinner straightforward. Add a short local stroll only if arrival time, weather and the property's location make it sensible.",
      },
      {
        day: "Full day 1",
        title: "One selected village route with time to look",
        description:
          "Choose the village or small group of places that best fits the hotel's road approach and your interest in buildings or landscape. Allow steps, pauses, explanation and a seated meal. Keep optional interiors subject to access rather than promising every venue in advance.",
      },
      {
        day: "Full day 2",
        title: "A different local subject and a slower afternoon",
        description:
          "Choose a town, tea or contemporary-architecture interest that adds something distinct. A confirmed host can deepen the subject where available. Return with time at the property or keep the day shorter if weather or energy calls for it; do not repeat similar photo stops simply to fill the schedule.",
      },
      {
        day: "Departure",
        title: "Continue with road and rail kept separate in the timing",
        description:
          "Allow the actual hotel departure, luggage route, station transfer and onward service. A fourth night could add flexibility or another distinct interest. This three-night outline is illustrative, not a published product or a promise that optional hosts and building visits are included.",
      },
    ],
  },
};
