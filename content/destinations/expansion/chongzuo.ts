import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/chongzuo.svg",
  alt: "Original Chongzuo planning schematic distinguishing the city base, a selected Ningming Huashan rock-art visit and separate Daxin Mingshi accommodation; not a map or photograph",
  width: 1600,
  height: 1200,
};

export const chongzuoGuide: ExpandedDestination = {
  id: "chongzuo",
  name: "Chongzuo",
  region: "south",
  kicker: "Read the Zuojiang landscape before choosing the countryside hotel",
  description:
    "Plan Chongzuo around a city base and the Zuojiang Huashan rock-art landscape. Distinguish Ningming visits, Mingshi stays and full western Guangxi connections.",
  stay: "2–3 nights for a selected city-and-heritage plan; countryside stays separate",
  bestFor: "Rock-art interpretation, river landscapes and a considered western Guangxi route",
  interests: ["heritage", "landscape", "city", "food"],
  relatedDestinationIds: ["daxin", "nanning", "jingxi"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Chongzuo Travel Guide: Huashan Rock Art, Routes & Stays",
    seoTitle: "Chongzuo Guide: Huashan Rock Art & Where to Stay",
    seoDescription:
      "Plan Chongzuo with Huashan rock-art context, city or Ningming hotel choices, full road and boat arrangements and a separate Daxin Mingshi countryside stay.",
    answer:
      "Visit Chongzuo in southwestern Guangxi for the Zuojiang Huashan rock-art landscape and a thoughtful introduction to the region's rivers and karst scenery. Choose the base around your main interest: Chongzuo city, Ningming for a selected Huashan visit, or Mingshi in Daxin for a countryside stay. Two or three nights suit a focused heritage visit; combining it with Mingshi needs additional time. The UNESCO landscape comprises multiple areas, so confirm the particular visitor route before booking.",
    stayAnswer:
      "Two nights give one full day between arrival and departure. Decide whether that day is primarily a selected city introduction or a properly planned rock-art excursion, with only compatible additions. Three nights give two full days for distinct subjects or a less hurried route. If Huashan is the main purpose, compare a suitable Ningming base with the full return journey from a city room. A Mingshi property stay needs its own useful nights; do not count the same two days as city, rock art, waterfall and resort time.",
    hotelAnswer:
      "Compare a named Jiangzhou-area city hotel (江州) for the actual collection, meals and onward transport with a specifically located Ningming (宁明) room when it improves the selected Huashan sequence. Daxin and Mingshi offer a different countryside chapter. Inspect every address: a broad Chongzuo label may cover a very different road pattern. Check quietness, bathroom, cooling or heating, meals, stairs and vehicle pickup. A river or karst view does not establish that the room faces the listed rock art or sits beside the booked embarkation point.",
    sightseeingQuestion: "Should I prioritize Huashan rock art or a Mingshi countryside stay?",
    sightseeingAnswer:
      "Choose the selected Huashan visit for archaeological interpretation and the relationship between painted cliffs and the river landscape. Choose Mingshi for a particular countryside property, karst setting and slower local time. They can complement each other when each has useful days and the full connection is planned. Huashan is not a close-up museum gallery, and a beautiful Mingshi room does not include a rock-art excursion. Pick the principal interest before choosing the base.",
    visitorResources: [
      {
        label: "UNESCO: Zuojiang Huashan Rock Art Cultural Landscape",
        href: "https://whc.unesco.org/en/list/1508/",
        scope:
          "Background on the inscribed cultural landscape, its component areas and heritage significance. The listing does not establish current visitor access to every component, an operating passenger boat, a private landing or unrestricted photography.",
      },
      {
        label: "Chongzuo municipal government",
        href: "https://www.chongzuo.gov.cn/",
        scope:
          "Regional context and dated public notices, mainly in Chinese. Confirm the selected Ningming visitor site, actual embarkation point, current roads and guest-specific arrangements with the responsible operator. A municipal overview does not establish that every borderward or protected-area route is open.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and the actual station in the itinerary. Chongzuo South (崇左南), other Chongzuo-area stations and a Ningming-area arrival are different transfer decisions. Include the complete journey to the room or booked visitor departure.",
      },
    ],
    serviceScope:
      "A tailored proposal should name the exact rock-art visitor site, road transfers, boat operator where used, boarding point, guide language, admissions, room and meals. Explain the viewing position and walking rather than imply close access to the cliff paintings. Any city collection needs its actual opening and galleries checked. Wildlife observation, specialist research meetings and protected-area visits require separate eligible arrangements. Private guiding does not grant exclusive navigation, direct contact with the paintings or access across an international boundary.",
    routeAdvice:
      "Start with the experience you most want: Huashan rock-art interpretation, a Mingshi countryside stay or a waterfall visit. We can then compare a Ningming base with Chongzuo city and plan a separate Daxin chapter where it adds value. For a tailored proposal, send your dates, gateways, available nights and room preferences. The proposed route should show each overnight and the complete road and boat arrangements, leaving time to understand the landscape rather than simply photograph it.",
    practicalPlanning: {
      timing:
        "Give the selected Huashan visitor operation its own confirmed schedule, including the full drive, check-in, boarding, viewing and return where a boat is used. A sailing duration alone does not describe the excursion. Leave time for introductory images or interpretation before viewing distant figures. Keep city walking and meals compatible with actual return hours. Detian and Mingshi are separate directions and should not be promised as spare-afternoon additions to an already full heritage day.",
      walking:
        "Assess the actual embarkation path, steps, gangway, boat movement, seating, shade and toilets. River levels can change boarding conditions even when a service operates. A seated viewing segment does not establish an entirely accessible day. City collections and public routes add their own standing and walking. Heat and rain can justify a shorter plan. Follow permitted viewing and conservation routes rather than seek a closer cliff approach, riverbank scramble or unapproved landing.",
      cost: "Compare the exact room, complete vehicle days, interpretation, named admissions, selected boat service, meals and any local transfers. State whether a boat is shared or privately chartered and what is actually confirmed; a private guide does not make every service private. Separate specialist appointments, wildlife outings and border-related additions. Premium value should be visible in explanation, comfort and time, not a promise of touching ancient art, unrestricted reserve access or guaranteed animals.",
    },
    attractions: [
      "A selected Ningming Huashan / 宁明花山 visitor route within the wider rock-art landscape",
      "Painted cliff and river relationships explained from permitted viewing positions",
      "A named Chongzuo city collection when its actual galleries and opening suit the subject",
      "A selected public Zuojiang / 左江 landscape or city route, with access checked",
      "Ningming accommodation as a route-specific choice rather than a generic city hotel",
      "Daxin's Mingshi / 明仕 and Detian / 德天 as separately planned countryside and waterfall chapters",
    ],
    stays: [
      {
        label: "1 night / a narrow city or connection purpose",
        advice:
          "Use when actual arrival and departure leave useful time, or choose the room knowingly for a practical transfer. Do not promise a complete Huashan excursion, city introduction and countryside stay within a short connection.",
      },
      {
        label: "2 nights / one selected full day",
        advice:
          "Choose the main heritage or city purpose and a base that supports it. A Ningming-focused room may be preferable when rock art is the reason for the stay. Add only what the complete route and group can comfortably support.",
      },
      {
        label: "3 nights or a separate countryside chapter / add distinct value",
        advice:
          "Use a second full day for another identified interest or a slower pace. Mingshi and a waterfall visit deserve their own days and room sequence. A hotel move should reduce pressure or improve the experience enough to justify packing and another transfer.",
      },
    ],
    hotelAreas: [
      {
        name: "Jiangzhou and the actual Chongzuo city address / practical urban base",
        advice:
          "Compare the named room against your chosen city visits, restaurants and onward station. Check sleep, bathroom, climate control and pickup. A central-sounding district label does not establish proximity to Ningming's rock-art visitor departure.",
      },
      {
        name: "Ningming / choose for the actual Huashan sequence",
        advice:
          "Plot the property against the confirmed visitor site and embarkation point. Check dinner, breakfast and the full approach rather than assume every Ningming room overlooks the cliffs. A practical heritage base may offer different service from a secluded resort.",
      },
      {
        name: "Daxin or Mingshi / a separate countryside stay",
        advice:
          "Use the Daxin guide to assess exact rooms, views, meals and local outings. A hotel sold under Chongzuo may be in this different county setting. Do not substitute it for a city or Ningming room without explaining the effect on every road journey.",
      },
    ],
    tradeoffs: [
      {
        title: "The UNESCO landscape is larger than the visitor excursion",
        advice:
          "The inscribed property brings together multiple rock-art component areas and their landscape relationships. A selected visitor route does not visit all of them or establish access to each cliff. Name the actual site, interpretation and viewing method so the guest knows what the day covers. Neither the whole city nor every countryside hotel should be described as lying inside the listed property without evidence.",
      },
      {
        title: "Distant paintings benefit from interpretation before viewing",
        advice:
          "Ask how the guest will understand the figures from the permitted viewing position: guide explanation, diagrams and suitable viewing aids can make a difference. Small figures seen across water are not the same experience as standing beside a museum panel. Separate what is visibly identifiable from an interpretive reconstruction or a debated meaning. Do not promise a close landing, touching, tracing or a particular photograph.",
      },
      {
        title: "Explain evidence without turning every figure into a settled story",
        advice:
          "Discuss composition, repeated forms and the relationship between images and landscape, distinguishing documented context from hypotheses about meaning. Archaeological interpretation of ancient communities should not be presented as a description of every contemporary Zhuang resident. A well-supported account can be engaging while acknowledging uncertainty rather than assigning an invented ritual to each painted shape.",
      },
      {
        title: "A border-region stay is not a border-crossing product",
        advice:
          "A domestic room or scenic visit does not include entry into Vietnam or every borderward route. Check the actual itinerary and traveler-specific arrangements, especially for any additional activity near a boundary. Use current official and operator requirements rather than a blanket statement that all visitors need the same permit or none do. A premium vehicle or private guide does not override local rules.",
      },
      {
        title: "Wildlife interest requires a conservation-led arrangement",
        advice:
          "The wider Chongzuo region is associated with white-headed langur conservation, but a regional association does not establish a public viewing site or a sighting. Only assess an identified permitted operation with appropriate conduct and current eligibility. No feeding, handling, close approach or research access is implied. Leave the wildlife outing out when the actual provider and permitted experience cannot be established.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "daxin",
        advice:
          "Daxin gives Detian Waterfall and Mingshi countryside their own visit and accommodation decisions. Compare the complete road from the actual Chongzuo or Ningming room, then protect useful countryside time. It is a complementary chapter, not an interchangeable hotel district.",
      },
      {
        slug: "nanning",
        advice:
          "Nanning can add a gateway, regional collections and a city-food chapter. Use actual dated services, the precise arrival station and complete hotel transfers. A high-speed rail journey alone does not deliver the guest to the Huashan embarkation point or a Mingshi lodge.",
      },
      {
        slug: "jingxi",
        advice:
          "Jingxi belongs to Baise and offers its own springs, village interests and separately assessed gorge routes. Choose a coherent western Guangxi sequence with actual rooms and full roads. A shared karst theme is not evidence that the visits fit one short day.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose dates by the complete mix of river viewing, city time and countryside accommodation. Heat and exposed sun matter on a boat or public route; rain and river conditions can affect both boarding and operation. Cooler periods may suit walking without guaranteeing the same visibility or water level. The waterfall and countryside agricultural scenes have their own seasonal behavior. Confirm forecasts and current local notices near travel, and choose interpretation and a comfortable base that give the trip value without one perfect river photograph.",
    orientation:
      "Chongzuo is both a city destination and the name of a wider prefecture-level municipality in Guangxi. Jiangzhou city addresses, Ningming's selected Huashan visitor operation, Daxin's Mingshi and Detian, and other border-region destinations are different locations. Jingxi is in Baise, not Chongzuo. This guide covers city-base decisions and selected rock-art planning, not all UNESCO component areas, every nature reserve or every county within the municipality.",
    experiences: [
      "Understand a selected painted-cliff landscape through evidence and permitted viewing",
      "Choose a city or Ningming room that supports the real heritage itinerary",
      "Build distinct rock-art and Daxin countryside chapters without concealing the full roads",
    ],
    planningNotes: [
      "Name the actual Huashan visitor site rather than promise the whole listed landscape",
      "Compare city, Ningming and Mingshi addresses before choosing the hotel",
      "Confirm boat access and viewing expectations separately from UNESCO background",
    ],
    arrival:
      "Compare dated road or rail options from the actual Nanning or other agreed gateway. Use the exact booked station, including Chongzuo South where relevant, and count the remaining drive to the room or visitor departure. A Chongzuo arrival is not a Huashan boat arrival. If beginning in Ningming or a countryside property, plan that specific transfer directly rather than add an unnecessary city hotel change. Keep a fixed onward connection away from an uncertain river-and-road return.",
    gettingAround:
      "Use a road plan tied to actual addresses, entrances and any booked embarkation. A private vehicle can simplify the approach but does not eliminate boat boarding, museum standing or village walking. Confirm local transport and the final luggage route to rural rooms. Follow conservation and navigation rules; independent access to a riverbank or cliff is not a substitute for an operating permitted visitor route.",
    stayStrategy:
      "Choose the main subject first. A city room can support selected urban context and transport; a Ningming base may improve a rock-art-focused sequence; a Mingshi lodge earns its nights through the countryside stay itself. One room can simplify a focused introduction, while a well-justified move can avoid repeated long excursions. Make every night and full connection explicit instead of grouping all rooms under the same Chongzuo label.",
    firstTimerNote:
      "Decide whether the painted cliffs are a principal reason to travel or a passing curiosity. If the subject matters, give it preparation, good interpretation and realistic viewing expectations. If the main aim is a beautiful countryside room, protect time there instead of filling it with long excursions. You can have a strong western Guangxi holiday without every waterfall, rock-art site, border stop and wildlife possibility on the same itinerary.",
    faqs: [
      {
        question: "Is Chongzuo the same place as Mingshi or Detian?",
        answer:
          "No. Chongzuo is a city and the name of a wider municipality; Mingshi and Detian are in Daxin County within that wider area. A city hotel and countryside lodge can have very different road patterns. Confirm the actual address and each day's full journey.",
      },
      {
        question: "Where are the Huashan rock paintings?",
        answer:
          "The UNESCO-listed Zuojiang Huashan Rock Art Cultural Landscape comprises multiple component areas in Guangxi. A commonly considered visitor chapter is in the Ningming direction. Name the exact site and current visitor route; a selected excursion does not cover every listed cliff.",
      },
      {
        question: "Can I see Huashan rock art up close?",
        answer:
          "Set expectations from the actual permitted viewing route. Some figures may be viewed at a distance, including from a booked boat where operating. Interpretation and appropriate viewing aids can help. Do not assume a cliff landing, direct contact with paintings or unrestricted photography.",
      },
      {
        question: "How many nights should I spend in Chongzuo?",
        answer:
          "Two nights give one selected full day, three give two. Choose a city or Ningming base by the actual purpose and full roads. A Daxin countryside stay needs its own useful nights; do not count the same days as city, rock art, waterfall and resort time.",
      },
      {
        question: "Should I stay in Chongzuo city or Ningming for Huashan?",
        answer:
          "Compare the actual room, meals and complete route to the confirmed visitor site. A Ningming base may improve a heritage-focused sequence, while a city hotel can serve different visits and onward transport. Neither place name alone establishes a short approach or a view of the paintings.",
      },
      {
        question: "Is a Huashan boat visit suitable for limited mobility?",
        answer:
          "Assess the actual embarkation path, steps, gangway, seating, shade, toilets and return, including river-level effects. A seated viewing segment does not establish a step-free or fully accessible day. Share exact mobility and balance needs before selecting the operation.",
      },
      {
        question: "Can I combine Huashan with Detian and Mingshi?",
        answer:
          "Assess them as distinct chapters with full road connections and useful time. The Ningming rock-art direction, Detian visit and Mingshi room are not one compact attraction. Avoid promising all three within a short excursion or an arrival afternoon.",
      },
      {
        question: "Can you guarantee a white-headed langur sighting near Chongzuo?",
        answer:
          "No. A regional conservation association does not establish a public operation or a sighting. Any proposed wildlife visit needs an identified permitted provider, current access and appropriate conduct. Feeding, handling, close approach and research access are not implied.",
      },
      {
        question: "Does a Chongzuo holiday include crossing into Vietnam?",
        answer:
          "No. A domestic stay and a border crossing are different arrangements. Confirm the exact route and traveler-specific current requirements for any proposed additional activity. A private guide, vehicle or nearby boundary does not provide international entry permission.",
      },
      {
        question: "Is there a published Chongzuo rock-art tour here?",
        answer:
          "No matching product is listed. Share dates, gateways, nights, mobility and heritage or countryside priorities for a tailored assessment. The illustrative outline does not establish booked boats, a wildlife visit, private research access or a border-crossing service.",
      },
    ],
    culturalStory: {
      title: "Read the painted cliff as part of its landscape",
      paragraphs: [
        "Huashan is more than an isolated set of red figures. The cliff, water and surrounding terrain help frame how the images are encountered and understood. Begin with what is visible from the permitted route, then use interpretation to explore repeated forms, composition and the evidence behind historical accounts. A diagram can make an image legible without pretending it is a close-up photograph of what every guest will see from a boat.",
        "Separate archaeological interpretation from certainty about every figure's meaning, and ancient cultural associations from the lives of all contemporary residents. Uncertainty can be explained clearly without making the story dull. The experience is strongest when visitors understand what the evidence supports, what remains debated and why the relationship between art and place matters. It does not require touching the cliff, entering a restricted area or staging a modern ritual as an ancient survival.",
      ],
    },
    foodStory: {
      title: "Use the meal to make the route more comfortable",
      paragraphs: [
        "A heritage day needs a dependable lunch fitted to the actual river and road schedule. Choose a named kitchen for what it prepares well, explain the dishes and allow time to sit rather than make food a hurried stop between distant sights. Rice, vegetables and regional preparations can provide context where genuinely served, but the municipality's size and different communities make a single supposedly universal local menu misleading.",
        "Discuss meat or fish stocks, soy, wheat-containing sauces, peanuts and shared preparation when dietary needs matter. A vegetable dish is not automatically vegetarian. Rural properties need dinner and breakfast confirmed, particularly before an early visitor departure. Hosted meals or cooking interests require a willing provider and separately agreed content; no home invitation is included merely by describing regional food. Good service and clear ordering can add more value than a staged banquet.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / the chosen city or Ningming base",
        title: "Settle the actual room and frame the heritage question",
        description:
          "Complete the full gateway transfer, settle luggage and have dinner. Confirm the selected visitor site, operation and viewing expectations. A late arrival is not a full rock-art excursion.",
      },
      {
        day: "Full day / the selected Huashan chapter",
        title: "Give the painted landscape time and explanation",
        description:
          "Use the confirmed road and permitted visitor operation, with boarding assessed where a boat is included. Leave time for interpretation, a seated meal and the complete return. No close cliff access or particular photograph is assumed.",
      },
      {
        day: "Optional second full day / distinct city or countryside purpose",
        title: "Add a genuinely different interest",
        description:
          "Choose a relevant city collection or public route when available, or plan a separate Daxin chapter with its own room and roads. A reserve visit needs its own permitted arrangement. These are alternatives rather than a promise of every regional highlight.",
      },
      {
        day: "Departure / the actual next base",
        title: "Keep room-to-room travel explicit",
        description:
          "Continue to the booked station or next hotel with luggage, boarding and full roads counted. This two-to-three-night outline is illustrative, not a published package, an all-component UNESCO tour or a guarantee of river operation.",
      },
    ],
  },
};
