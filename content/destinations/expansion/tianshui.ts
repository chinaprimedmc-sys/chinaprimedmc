import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/tianshui.svg",
  alt: "Tianshui planning schematic distinguishing Maijishan cliffside routes, Qinzhou city heritage and Maiji rail connections; original diagram, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const tianshuiGuide: ExpandedDestination = {
  id: "tianshui",
  name: "Tianshui",
  region: "northwest",
  kicker: "Buddhist sculpture on a cliff, with a city stay worth planning",
  description:
    "Plan Tianshui around Maijishan Grottoes, comparing cliffside walking, Qinzhou heritage, Maiji hotels and the full rail-and-road journey.",
  stay: "2–3 nights",
  bestFor: "Buddhist sculpture, layered city history and a considered Gansu journey",
  interests: ["heritage", "food", "landscape"],
  relatedDestinationIds: ["lanzhou", "xian", "xiahe", "dunhuang"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Tianshui Travel Guide: Maijishan, Hotels & Itinerary",
    seoTitle: "Tianshui Travel Guide: Maijishan & Where to Stay",
    seoDescription:
      "Plan 2–3 nights in Tianshui: Maijishan Grottoes steps and cave access, Qinzhou or Maiji hotels, Fuxi Temple, local food and complete rail transfers.",
    answer:
      "Tianshui (天水) is a city in southeastern Gansu, best known to many visitors for Maijishan Grottoes (麦积山石窟). The Buddhist sculptures occupy a steep rock face reached by elevated stairways and walkways; this is a different physical experience from a level museum. Two nights allow one full grotto day, while three can add Qinzhou's city heritage and food without rushing both. Choose the hotel by the actual route: Qinzhou, Maiji's urban area and properties near the grottoes are separate bases. A train to Tianshui does not arrive at the cliff entrance.",
    stayAnswer:
      "Two nights suit a focused Maijishan visit with a proper full day between transport bookings. Three nights allow a separate Qinzhou day for selected heritage, collections and food. One night can work if actual services leave enough time, but it is a tight choice when rain, stairs or visitor arrangements require flexibility. A through-stop needs secure luggage, a complete station transfer and a protected onward connection. Do not turn a short rail change into a promised grotto tour without checking the whole journey.",
    hotelAnswer:
      "Choose Qinzhou for an evening and a full day centered on its selected city sights and dining. Choose a suitable Maiji urban hotel when its room and position improve the rail and grotto sequence. A property near Maijishan offers another setting but requires its own checks on meals, room comfort, road access and the actual scenic entrance. None of these areas is automatically best for every visitor. Compare door-to-door travel across the entire stay, not just one shorter transfer or an attractive mountain-hotel photograph.",
    sightseeingQuestion: "Should you visit Maijishan only, or add a Tianshui city day?",
    sightseeingAnswer:
      "Give Maijishan a clear main visit, with time to understand the sculptures and assess the elevated route. A city day adds different subjects: Fuxi Temple and its cultural interpretation, selected Qinzhou streets, or a collection chosen for its actual exhibits. Nanguo Temple is another separate outing rather than an obligatory add-on. If sculpture is the sole priority, a well-planned two-night stay can be enough. Three nights make sense when city history and a slower meal are genuinely interesting, not simply to fill an itinerary with every temple name.",
    visitorResources: [
      {
        label: "UNESCO: Silk Roads, the Chang'an–Tianshan Corridor",
        href: "https://whc.unesco.org/en/list/1442/",
        scope:
          "Background on the serial World Heritage property that includes the Maijishan Cave-Temple Complex. This designation does not establish current visitor routes, which caves are open, special-cave arrangements or access to every part of the rock face.",
      },
      {
        label: "Tianshui municipal government",
        href: "https://www.tianshui.gov.cn/",
        scope:
          "City background and public notices, mainly in Chinese. Use the responsible venue for current admission, route closures, exhibitions, reservation requirements and opening. Municipal information does not prove room availability or specialist guiding capacity.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains, full station names and tickets. Distinguish Tianshui South from Tianshui station and include the final hotel and grotto transfers. A service shown for another date is not evidence of your departure or a reserved seat.",
      },
    ],
    serviceScope:
      "A tailored proposal should name the hotel district and room, ticketed arrival station, complete transfers, Maijishan visitor route, guiding language, meals and city interests. Clarify ordinary admission, any internal transport and any separately authorized special-cave arrangement; they are not interchangeable. A private guide does not provide private use of the cliff, access to closed caves or permission to photograph protected interiors. Specialist art interpretation needs a person with suitable knowledge and language skills, confirmed separately from routine escorting.",
    routeAdvice:
      "Tianshui can add a focused sculpture chapter between Xi'an and a longer Gansu journey when dated services and useful nights fit. Dunhuang offers a different Buddhist-art context much farther west; Xiahe adds a living Tibetan Buddhist institution through a separate road-and-gateway plan. No matching published Tianshui product is recommended here. Use the illustrative outline to request a proposal, sharing dates, comfort with heights, stairs, art interests and room priorities. The route should give each place a distinct purpose rather than repeat generic cave visits or claim the whole corridor is nearby.",
    practicalPlanning: {
      timing:
        "Give Maijishan a dedicated window with the full road transfer, current entrance procedure, any internal transport, ascent and return included. Rain, wind or conservation work may alter the available route. Keep lunch, rest and the return journey visible before booking a fixed onward train. A second city day provides flexibility but does not guarantee a closed cave will reopen. Confirm individual city venues rather than assume all museums and temples share opening days or reservation arrangements.",
      walking:
        "Maijishan's elevated stairways and walkways can be uncomfortable for guests with vertigo, knee issues or a strong dislike of heights. Review the currently open route, steps, handrails, narrow sections and ability to turn back before buying a visit around a photograph. Vehicles and any internal shuttle do not remove the cliffside effort. A lower-level view offers a different experience from close sculpture viewing. City visits also involve thresholds, paving and standing, so choose the actual route rather than label the whole day easy.",
      cost: "Compare the exact hotel base, both station transfers, grotto road service, admission scope, internal transport where applicable and guide hours. A special-cave visit requires actual authorization and a separate stated basis if available; ordinary admission should not be sold as access to every cave. Clarify city venue fees, meals and any specialist interpretation. A premium should explain added knowledge, comfort or service, without implying priority, privacy or conservation exceptions that have not been granted.",
    },
    attractions: [
      "Maijishan / Maiji Mountain Grottoes, with the current cliffside route assessed",
      "Fuxi Temple in Qinzhou, with cultural tradition and documented history distinguished",
      "Selected Qinzhou streets and public heritage areas rather than an assumed open-house circuit",
      "Nanguo Temple as a separately chosen city-outskirts interest",
      "A named local collection with its current exhibitions and access confirmed",
      "A seated Tianshui meal, with malatang an optional food interest rather than the whole visit",
    ],
    stays: [
      {
        label: "1 night: a carefully timed sculpture stop",
        advice:
          "Choose only when dated transport, full transfers and current visiting conditions leave a useful window. Agree luggage and the final station departure. Avoid making a late arrival or brief train change carry the expectations of a full grotto day.",
      },
      {
        label: "2 nights: Maijishan with a proper full day",
        advice:
          "Keep one base and allow the full grotto visit with meals and rest. Add a short city interest only when the actual location and remaining time suit. Check comfort with heights before the route is treated as a fixed commitment.",
      },
      {
        label: "3 nights: sculpture and a distinct city chapter",
        advice:
          "Use a separate day for selected Qinzhou heritage, a suitable collection and food. The extra time can soften the pace and help adapt to weather, but does not guarantee every cave or hall will be open. One base is usually simpler than moving between districts for a short stay.",
      },
    ],
    hotelAreas: [
      {
        name: "Qinzhou / city heritage and evenings",
        advice:
          "Consider for Fuxi Temple, selected streets and dining, checking the actual address and noise. Include the road journey to Maijishan and the ticketed station. A city-centered stay can be rewarding but is not a grotto-at-the-door location.",
      },
      {
        name: "Maiji urban area / practical rail and grotto sequencing",
        advice:
          "Compare the actual hotel with Tianshui South, Tianshui station and the onward grotto road. These are different points, not a single walkable arrival area. Verify bed, bathroom, quiet, breakfast and meals rather than select by a broad district label.",
      },
      {
        name: "Near Maijishan / a separate landscape stay",
        advice:
          "Choose a specific property for a real setting and comfort advantage. Check road access, heating or cooling, dining hours, luggage and distance to the actual entrance. A mountain address does not buy out-of-hours access or establish a view from the quoted room.",
      },
    ],
    tradeoffs: [
      {
        title: "Sculpture and cliffside access are inseparable planning questions",
        advice:
          "The art is the reason to come, but the means of viewing it matters. Ask which current route and caves can be seen, how much climbing remains and whether the guest is comfortable at height. Do not describe a shuttle as making the whole grotto visit step-free.",
      },
      {
        title: "Ordinary admission is not a promise of every cave",
        advice:
          "Open areas and any special-cave arrangements can change with conservation and visitor management. Name what has actually been arranged and explain alternatives. Private guiding, a UNESCO designation and a premium fee do not override conservation rules.",
      },
      {
        title: "Qinzhou and Maiji are different hotel decisions",
        advice:
          "A station-oriented address, city heritage base and near-grotto property create different daily journeys. Plot all main legs before choosing. A shorter arrival transfer can produce a longer sightseeing day, while a heritage-area stay can provide useful evenings that a transport hotel does not.",
      },
      {
        title: "Maijishan is not simply a smaller Mogao",
        advice:
          "Maijishan's cliff setting and sculpture offer a different encounter from Dunhuang's cave art. Compare artistic interests, access and physical demands, allowing each site's own explanation. Visiting both can be worthwhile for an interested traveler, but not if a long journey leaves only a hurried generic cave stop.",
      },
      {
        title: "Fuxi tradition deserves careful language",
        advice:
          "Fuxi is a foundational figure in Chinese cultural tradition. Explain the temple's worship, associations, visible architecture and documented history without presenting mythic biography as independently verified chronology. A valuable cultural visit can distinguish those layers without flattening them into either legend alone or a factual birth-certificate claim.",
      },
      {
        title: "Food interest should improve the day",
        advice:
          "Tianshui malatang can be an enjoyable optional stop, but its popularity does not guarantee a suitable queue, kitchen or spice level for every guest. Choose ingredients, broth, price basis and seated comfort. A good local meal can be more useful than spending the only free hours chasing a viral shop.",
      },
      {
        title: "A high-speed gateway is only part of the journey",
        advice:
          "Use the ticketed station name and dated service. Count hotel pickup, roads, waiting, luggage and the grotto approach. A short intercity train time does not prove an easy day trip from Xi'an or leave an automatic sightseeing window before another departure.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "lanzhou",
        advice:
          "Lanzhou adds Gansu collections, Yellow River city life and a distinct regional gateway. Compare dated trains and complete transfers rather than the intercity segment alone. Bingling, if desired, needs a separate excursion plan and should complement rather than repeat a hurried Maijishan visit.",
      },
      {
        slug: "xian",
        advice:
          "Xi'an adds imperial archaeology and city history. Compare dated trains and the full station-to-hotel route before deciding whether Tianshui deserves an overnight chapter. The current Xi'an products should not be assumed to include Maijishan or these transfers.",
      },
      {
        slug: "xiahe",
        advice:
          "Xiahe offers Labrang's living Tibetan Buddhist context rather than another cave complex. Allow the actual gateway and road journey, useful nights and a separate altitude review. Tianshui sightseeing is not an acclimatization guarantee for the higher town.",
      },
      {
        slug: "dunhuang",
        advice:
          "Dunhuang can extend a serious Buddhist-art journey, with its own cave arrangements, oasis base and substantial onward transport. Explain the contrast in art and setting. Do not advertise the two places as adjacent grottoes or attach a distant cave visit to an already full travel day.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can be useful starting points for a city-and-grotto visit, with variable temperature and rain still possible. Summer can be warm and wet, affecting exposed stairs and route management. Winter requires warmer clothing, dependable room heating and attention to icy approaches. Holiday demand changes queues and availability. Choose the actual dates and current route conditions rather than promise clear cliff views or unrestricted cave access from a seasonal guide.",
    orientation:
      "Tianshui is in southeastern Gansu. Qinzhou contains important city heritage and dining interests, while Maiji's urban area, Tianshui South, Tianshui station and Maijishan's scenic entrance are different locations. The grottoes lie outside the principal urban bases. Confirm full Chinese hotel and station names, then plot the real road legs; a broad Tianshui address can conceal the travel time that determines a short stay.",
    experiences: [
      "Read Maijishan's sculpture through a route matched to your comfort with heights",
      "Give selected Qinzhou heritage and cultural traditions their own explanation",
      "Choose a practical base and a good local meal before extending the Gansu journey",
    ],
    planningNotes: [
      "Assess the current cliffside stairs and walkways before treating the grottoes as an easy visit",
      "Distinguish ordinary admission, special-cave authorization and privately booked guiding",
      "Compare Qinzhou, Maiji and near-grotto properties through the full stay, not one transfer",
    ],
    arrival:
      "Check dated rail services and whether the ticket names Tianshui South or Tianshui station, then arrange the actual hotel transfer. A proposed airport arrival also needs current service confirmation and its own road journey. For a visit continuing from Xi'an or toward Lanzhou and the corridor, compare the complete door-to-door schedule. Keep the main grotto visit off an uncertain arrival when possible, especially if limited daylight or a fixed onward departure would leave no flexibility.",
    gettingAround:
      "Use road transfers between the selected urban base, grottoes and separate city sights. Any scenic-area internal transport has its own current route and does not remove the elevated walking. In town, choose coherent shorter walks, seating and accessible pickup rather than an all-day temple checklist. Explain steps, thresholds and toilets at the actual venues. Drivers and guides cannot authorize closed areas or substitute a car for the cliffside viewing route.",
    stayStrategy:
      "For two or three nights, keep one base chosen for the trip's balance of sculpture, city time and transport. A comfortable Qinzhou stay can reward a separate heritage day; a suitable Maiji hotel may fit a focused grotto-and-rail sequence. A near-grotto property needs enough independent appeal to justify its dining and transport tradeoffs. Compare exact room quality, sleep and breakfast timing, avoiding an unnecessary hotel move merely to reduce one theoretical road leg.",
    firstTimerNote:
      "Decide early whether heights and stairs are acceptable. That decision changes the value of the main visit more than the choice of a decorative hotel lobby. If the route suits, give the sculpture time and useful interpretation. Add Qinzhou when city history and food interest you; a shorter, coherent stay is better than several shallow stops added to make the schedule look comprehensive.",
    faqs: [
      {
        question: "How many days do I need in Tianshui?",
        answer:
          "Two nights give one full day for Maijishan and its transfers. Three nights add a separate Qinzhou city day. One night or a through-stop needs favorable dated transport, luggage planning and a protected onward connection. Count full useful days rather than nights alone.",
      },
      {
        question: "Is Maijishan Grottoes suitable if I dislike heights?",
        answer:
          "The main close-viewing routes use elevated stairs and cliffside walkways. Review the actual open route and your comfort before committing. Ground-level views are a different experience, and a vehicle or internal shuttle does not make the cliff visit step-free.",
      },
      {
        question: "Should I stay in Qinzhou or Maiji?",
        answer:
          "Qinzhou can suit a city-heritage and dining chapter; a suitable Maiji hotel may improve a rail-and-grotto sequence. Compare the actual address, room and all road legs. Properties near the grottoes offer a third choice with separate meal and comfort checks.",
      },
      {
        question: "Does a Maijishan ticket include all caves?",
        answer:
          "Do not assume so. Current ordinary routes, conservation closures and any separately authorized special-cave arrangements differ. A proposal should state the actual admission and confirmed access. Private guiding does not guarantee entry to every cave or permission for interior photography.",
      },
      {
        question: "Can I visit Maijishan as a day trip from Xi'an?",
        answer:
          "Assess dated trains, both station transfers, the grotto road, entrance and walking, meals and return margin. The intercity train time alone is insufficient. An overnight can provide a more useful visit and flexibility, especially when height concerns or weather affect the route.",
      },
      {
        question: "Is Maijishan part of a UNESCO World Heritage site?",
        answer:
          "The Maijishan Cave-Temple Complex is a component of the Silk Roads: the Routes Network of Chang'an–Tianshan Corridor serial property. This heritage context does not determine current cave access or include every attraction in Tianshui.",
      },
      {
        question: "What else is worth seeing in Tianshui?",
        answer:
          "Choose Fuxi Temple, selected Qinzhou streets, a relevant collection or Nanguo Temple according to interest and current access. They are separate subjects, not mandatory additions to a full grotto day. A seated local meal can add more value than another hurried entrance.",
      },
      {
        question: "Can I try Tianshui malatang without making it the focus?",
        answer:
          "Yes, choose a suitable restaurant, seating, ingredients and broth within the wider day. Clarify spice, allergens and price basis. A popular shop is optional; queueing for a viral address should not displace the main art or history visit unless that is your preference.",
      },
      {
        question: "Is a published Tianshui tour recommended here?",
        answer:
          "No matching published product is recommended. The outline is illustrative. Share dates, room priorities, art interests, walking needs and comfort with heights so a tailored proposal can name the actual access, services and transfers.",
      },
    ],
    culturalStory: {
      title: "Look closely at sculpture, and distinguish the city's other traditions",
      paragraphs: [
        "Maijishan is especially rewarding when a guide helps you look at sculpture: expressions, gestures, groupings and the relationship between figures and architectural space. Clay sculpture is an important part of its identity, with other materials and interventions also requiring explanation where relevant. The cliff setting influences how the art is encountered. The available visitor route determines what can actually be seen, so an art-focused visit should be planned around access rather than an imagined tour of every famous image.",
        "Qinzhou introduces different cultural layers. Fuxi Temple concerns a foundational figure in Chinese tradition, religious practice and the history of the visible complex. Those layers should be distinguished rather than treating cultural association as a single literal chronology. Selected streets and collections can broaden the visit when their particular value is explained. A serious cultural itinerary does not need to present every temple as the same experience or claim that heritage status guarantees unchanged ancient fabric.",
      ],
    },
    foodStory: {
      title: "Let local food support the pace of the stay",
      paragraphs: [
        "Tianshui malatang offers a choose-your-ingredients meal that can be adapted in portion and spice, subject to the kitchen's actual preparation. Other local interests include guagua, a starch-based snack, and noodle or home-style dishes. Explain the specific preparation rather than assume an unfamiliar English name tells the guest what will arrive. A seated lunch, reasonable wait and suitable dinner near the hotel can improve the trip more than a food checklist or a compulsory stop at the most photographed shop.",
        "Check wheat, soy, sesame, peanuts, meat stocks, chili oil and shared utensils in the actual kitchen. Selecting vegetables does not establish a vegan broth or allergy-safe preparation. Clarify ordering and price basis, especially where ingredients are selected individually or weighed. Serious dietary needs require demonstrated kitchen capacity and alternatives, not a promise derived from a dish name. If halal dining is required, verify the establishment and preparation separately.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the chosen district and settle in",
        description:
          "Meet at the actual ticketed station or confirmed gateway, then reach the named room. Keep any city introduction short and have a useful meal. Confirm the next day's current grotto route and revisit the guest's comfort with the steps and heights.",
      },
      {
        day: "Full day",
        title: "Give Maijishan its own sculpture and landscape visit",
        description:
          "Allow the full road approach, entrance arrangements, internal transport where applicable and the selected cliffside route. Make room for interpretation, rest and lunch. Adapt to current weather and access rather than promise every cave.",
      },
      {
        day: "Optional second full day",
        title: "A distinct Qinzhou history and food chapter",
        description:
          "With a third night, choose Fuxi Temple and another meaningful city subject, with a seated meal and rest. Use current opening and collection information. Avoid stacking every temple merely because an extra day is available.",
      },
      {
        day: "Departure",
        title: "Protect the complete onward journey",
        description:
          "Use the correct station and road margin, with luggage and breakfast arranged. This two-night outline with an optional third night is not a published package. Special-cave access, particular guides, room availability and onward services require confirmation.",
      },
    ],
  },
};
