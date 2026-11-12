import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/hefei.svg",
  alt: "Hefei planning schematic separating city history and collections, an optional Sanhe or Chaohu outing and a distinct southern Anhui stay; original diagram, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const hefeiGuide: ExpandedDestination = {
  id: "hefei",
  name: "Hefei",
  region: "east",
  kicker: "An Anhui introduction with the geography made clear",
  description:
    "Choose Hefei for Anhui collections and selected city history, comparing hotel areas, Sanhe or Chaohu excursions and a separate Huangshan or village stay.",
  stay: "2–3 nights when city culture is part of the trip",
  bestFor: "Anhui collections, regional history and a practical cultural stop between journeys",
  interests: ["heritage", "city", "food"],
  relatedDestinationIds: ["anqing", "huangshan", "hongcun", "nanjing"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Hefei Travel Guide: Museums, History & Where to Stay",
    seoTitle: "Hefei Travel Guide: Museums, History & Hotels",
    seoDescription:
      "Plan Hefei with Anhui Museum, Bao Park, hotel areas and Sanhe or Chaohu choices. Compare full transfers before a separate Huangshan or Hongcun stay.",
    answer:
      "Hefei (合肥) is the capital of Anhui in eastern China. Choose it for a regional collection, a focused introduction to local history and a practical city stay when the route leaves useful time. Two nights give one full day; three can support a separate Sanhe old-town or selected Chaohu-side excursion. Hefei is a large modern city, not the Huizhou village landscape often used to illustrate southern Anhui. Anhui Museum, Bao Park, Sanhe and different parts of Chaohu have separate locations and subjects. Huangshan's mountain routes and Hongcun's village stays require their own nights and final road transfers. The province's capital is a worthwhile choice for certain interests, rather than a mandatory base for every Anhui trip.",
    stayAnswer:
      "One night can support a connection, dinner and sleep. Two nights allow a full city day centered on Anhui Museum or selected Bao Zheng-related history, with a coherent contrast. Three nights can add Sanhe, a specifically chosen lake interest or a slower second city subject. A fourth night should have a distinct purpose. If mountain scenery or Huizhou architecture is the holiday's main interest, compare spending those extra nights near Huangshan or a village instead of returning to Hefei. Count complete hotel-to-site and gateway journeys, not just the duration of an intercity train.",
    hotelAnswer:
      "Compare an exact older-central Luyang or Baohe address for selected streets and meals with a Shushan / Swan Lake-area property chosen for its room, museum route and daily transfers. These are broad districts, not one walkable hotel zone. Binhu New Area offers another modern setting toward Chaohu, but a Binhu address does not establish a lake view or quick access to every shore interest. A Hefei South, Hefei station or Xinqiao airport hotel serves a particular connection. Check quiet, heating or cooling, bathroom, lift, breakfast and pickup against the whole stay rather than choose by one attraction or skyline image.",
    sightseeingQuestion: "Should you choose Anhui Museum, Bao Park or Sanhe?",
    sightseeingAnswer:
      "Anhui Museum offers a collection-based introduction to the province; confirm the full visitor address, open galleries and reservation for the intended day rather than rely on an old downtown address. Bao Park / Baogong Park provides a different public landscape and a choice of Bao Zheng-related commemorative sites, which should be named individually. Sanhe Ancient Town, in Feixi County, is a separate road outing through selected streets, waterways and accessible buildings. A regional museum, memorial landscape and old town are not three neighboring city stops. Choose the strongest subject first, then add a manageable contrast instead of trying to cover every advertised attraction.",
    visitorResources: [
      {
        label: "Hefei municipal government",
        href: "https://www.hefei.gov.cn/",
        scope:
          "City background and public notices, mainly in Chinese. Confirm named sites, actual museum venue, reservations and transport with the relevant institution or operator. General city context does not verify a hotel view, private host or current lake activity.",
      },
      {
        label: "Anhui provincial government",
        href: "https://www.ah.gov.cn/",
        scope:
          "Provincial context and public-service information. Anhui contains distinct travel regions. A provincial heritage description does not establish current gallery display, historic interior access or that Huangshan and Huizhou villages are local Hefei excursions.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and full station names. Distinguish Hefei South from Hefei station and confirm the onward gateway. A Huangshan North booking still leaves a separate road journey to Tangkou, Tunxi or a village property.",
      },
    ],
    serviceScope:
      "A proposal should identify the exact hotel and room, gateway transfers, guide language, principal collection or historical subject, named admissions and meals. For Sanhe, name the intended route and accessible buildings. For Chaohu, identify a particular shore or attraction rather than promise a generic lake tour. A specialist explanation, cooking session, boat service or private host needs an available provider and a defined format. Private guiding does not provide closed galleries, private homes, protected research facilities or unrestricted shore access. If a science interest is requested, distinguish a public exhibition from access to a working laboratory; the city's research reputation is not an invitation to enter one.",
    routeAdvice:
      "Use Hefei for a cultural chapter or a transparent gateway, then allocate separate useful nights to Huangshan or Hongcun when those are the main interests. Nanjing adds another historical capital with its own museums and districts through actual dated transport. Compare the full hotel-to-hotel sequence and final road transfers. No matching published Hefei itinerary is recommended here. Request a tailored route with dates, gateways, collection or history interests, room needs and walking limits. An existing eastern-China itinerary does not automatically include Hefei rooms, Sanhe or a Chaohu excursion simply because the places lie on a broad regional map.",
    practicalPlanning: {
      timing:
        "Anchor the city day on the current museum opening or the particular commemorative site wanted, then add one coherent walk and lunch. Sanhe needs a separate road and visit block; do not treat it as a quick stop between a full museum visit and a departure train. A Chaohu outing must name its actual destination and usable time there. Keep uncertain arrivals flexible and protect the final station transfer. A well-paced day with explanation is more useful than several districts reached only long enough for a photograph.",
      walking:
        "Museum galleries add standing and walking even when the visit is indoors. Bao Park routes vary in distance, bridges, steps and access to particular interiors. Sanhe streets can include uneven paving, thresholds, narrow passages and crossings. Choose actual entrances, seating, toilets and pickup points. Lake paths can be exposed to heat, wind or rain. A private vehicle reduces travel between sites but does not make every historic building or waterside route accessible; request a shorter alternative based on the real path.",
      cost: "Compare the actual room, breakfasts, full gateway transfers, guiding hours and language, named admissions and reservation support. A city day differs from a Sanhe excursion or an outing to a specific part of Chaohu. Clarify any boat or other separate activity and its current operation. Specialist interpretation, a host or cooking session needs its own scope. A premium should improve sleep, learning and time use rather than imply exclusive historical access, a guaranteed lake view or a private research visit.",
    },
    attractions: [
      "Anhui Museum through selected galleries at the confirmed visitor venue",
      "Bao Park / Baogong Park with named Bao Zheng-related commemorative sites",
      "A selected older-central street route, distinguishing historical material and present commerce",
      "Sanhe Ancient Town in Feixi County as a separate excursion",
      "A specifically chosen Chaohu shore, public landscape or attraction with its full route assessed",
      "A regional meal chosen by actual dishes and dietary capacity",
      "Huangshan or Hongcun as separate southern Anhui stays, not additional central-city sights",
    ],
    stays: [
      {
        label: "1 night: a practical gateway",
        advice:
          "Use a dependable room, suitable meal and correct onward transfer. A short introduction can fit compatible hours, but a late arrival and early train do not create time for the museum, Sanhe and the lake. Choose the hotel around the actual connection when that is the purpose.",
      },
      {
        label: "2 nights: one focused city day",
        advice:
          "Let a relevant collection or a chosen historical subject lead, adding a manageable contrast and seated meal. Avoid treating every museum, memorial and shopping street as essential. A comfortable base and time to interpret one subject can justify the stop.",
      },
      {
        label: "3 nights: a distinct second interest",
        advice:
          "Add Sanhe, a specific lake interest or another meaningful city subject when full journeys fit. One hotel usually keeps a short stay simpler. If Huizhou villages or mountains are the main draw, give the extra nights to a suitable local base there instead of repeated Hefei returns.",
      },
    ],
    hotelAreas: [
      {
        name: "An older-central Luyang or Baohe address / city meals and selected streets",
        advice:
          "Compare the precise walks, dining, pickup and room noise. Central does not mean equally close to the museum, station and outlying visits. A heritage-style facade or old-town label does not establish an original building or modern room comfort. Check the bathroom, lift, temperature control and real surroundings.",
      },
      {
        name: "Shushan / Swan Lake surroundings / a specific modern city base",
        advice:
          "Choose the actual property for room quality, meals and the intended museum route. Verify the current visitor address rather than infer proximity from a district description. An attractive skyline is not proof of quiet, a particular lake view or short transfers to every central site.",
      },
      {
        name: "Binhu New Area / a different modern setting toward Chaohu",
        advice:
          "Select for the actual property and planned activities, allowing longer city journeys where relevant. The lake is extensive: a broad Binhu address does not put every shoreline or scenic interest at the hotel door. Check independent dining, room view, pickup and the full onward gateway route.",
      },
      {
        name: "A named station or Xinqiao airport hotel / connection convenience",
        advice:
          "Match Hefei South, Hefei station or the actual airport terminal to the dated booking. Include the final road journey, breakfast timing and meal options. Moving rooms to save one transfer can cost more useful time than it provides, so compare the entire stay.",
      },
    ],
    tradeoffs: [
      {
        title: "The provincial museum and Huizhou villages answer different questions",
        advice:
          "A collection can introduce regional archaeology, art and materials, but does not replace experiencing a village's plan and buildings. Choose current galleries for what they teach rather than promise every famous object. If village architecture is the priority, use the museum as optional context and protect useful nights in southern Anhui.",
      },
      {
        title: "Bao Zheng's historical life and later stories need distinction",
        advice:
          "Bao Zheng was a historical Song official whose reputation also grew through later literature and popular performance. A commemorative landscape can explain both, identifying which claims come from documented history and which from subsequent storytelling. Name the actual memorial or building and current access instead of presenting the whole park as one surviving Song-period complex.",
      },
      {
        title: "Sanhe is a selected town visit, not every guest's mandatory day",
        advice:
          "Choose a particular walking route and accessible interiors with time for a meal and explanation. Distinguish older fabric, restoration and commercial presentation. If the guest is already spending several days in Huizhou villages, compare whether Sanhe adds a distinct subject or whether that day is better used for another interest.",
      },
      {
        title: "Chaohu is too broad to be a complete activity description",
        advice:
          "Name the shore, actual destination and any proposed service. A lake view, lakeside walk, island or boat outing have different access and conditions. Do not promise swimming, fishing or boating from the lake's name alone. Weather, operating arrangements and the chosen location should determine the day.",
      },
      {
        title: "A research-city reputation is not laboratory access",
        advice:
          "A public science display may be a useful interest when actually open and suitable for the guest. A university or working research facility has its own visitor rules and cannot be sold as an automatic private tour. Identify the exact venue, content, language and confirmed entry rather than imply a scientist meeting or technical demonstration from the city's reputation.",
      },
      {
        title: "A southern Anhui connection needs more than a train time",
        advice:
          "Huangshan North station, Tunxi, Tangkou, mountain hotels and Hongcun are different endpoints. Include both road transfers and luggage before judging useful time. A separate mountain or village stay normally allows more depth than trying to return to Hefei the same evening; select the actual purpose rather than sell the whole province as a city excursion.",
      },
      {
        title: "Anhui cuisine is regional, and the kitchen still matters",
        advice:
          "A dish associated with Huizhou does not represent every Hefei meal or every part of Anhui. Explain the actual preparation, fermentation where relevant, stock and seasoning. Strong flavors should remain optional. A restaurant's regional label is not evidence that a dish is vegetarian, mild or suitable for serious allergies.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "anqing",
        advice:
          "Anqing offers a selected Yangtze city introduction around Yingjiang Temple, commercial lanes and regional food. A Huangmei opera interest needs dated availability and clear language support. Choose useful city nights and compare the exact railway gateways; Tianzhushan belongs to a separate mountain-base plan.",
      },
      {
        slug: "huangshan",
        advice:
          "Huangshan adds a mountain-walking chapter with real stairs even when cableways operate. Choose the gateway, exact route and any on-mountain night, with full transfers from the ticketed station. A Hefei museum introduction and a mountain visit are different experiences requiring separate useful time.",
      },
      {
        slug: "hongcun",
        advice:
          "Hongcun adds Huizhou village architecture and a distinct accommodation choice. Confirm the final road journey, luggage approach, actual room and walks. An Anhui address does not make the village local to Hefei, and a village stay should have time beyond a rushed photograph beside the water.",
      },
      {
        slug: "nanjing",
        advice:
          "Nanjing offers a different historical-capital chapter with selected museums, architecture and city districts. Compare dated services and both hotel transfers, allowing useful nights. A convenient rail connection does not require both cities to be reduced to back-to-back short stops.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit city and old-town walking, with variable rain and temperatures. Summer can be hot and humid, making shade, cooling breaks and an available indoor collection valuable. Winter can feel damp and cold; check effective room heating and the condition of outdoor paths. Lake outings are exposed to their own wind and weather. The season for a Hefei city stay does not establish mountain conditions at Huangshan, which require a separate route and clothing decision.",
    orientation:
      "Hefei is Anhui's capital, north of the province's Huizhou village and Huangshan mountain destinations. Older-central streets, Bao Park, the current Anhui Museum visitor venue, modern western districts, Binhu, Sanhe in Feixi County and different Chaohu shores require different journeys. Hefei South and Hefei railway stations are separate, while Xinqiao airport is another gateway. Use actual addresses and full tickets rather than assume a provincial-capital arrival puts the traveler beside every Anhui attraction.",
    experiences: [
      "Choose relevant Anhui Museum galleries to frame a regional interest",
      "Explore a selected city-history subject with documented history and later memory distinguished",
      "Give Sanhe, a lake interest or southern Anhui its own realistic time and place",
    ],
    planningNotes: [
      "Confirm the actual museum venue and named Bao Park components",
      "Compare exact hotel addresses, meals and complete station or airport transfers",
      "Separate Sanhe and Chaohu outings from Huangshan or Huizhou village stays",
    ],
    arrival:
      "Use the actual Xinqiao airport booking or full station name on the ticket. Hefei South and Hefei station are different meeting points. Include luggage, the hotel journey and check-in before estimating useful visiting time. If continuing directly to southern Anhui, define the final destination and road leg; a train to Huangshan North is not arrival at a mountain hotel. A suitable meal and sleep may provide a better gateway night than an uncertain late museum stop.",
    gettingAround:
      "Combine coherent district transfers with selected walks. Confirm current museum entrance, Bao Park route and pickup, and give Sanhe or a named Chaohu destination a separate excursion plan. A private car cannot reach every gallery, courtyard or narrow old-town lane. Check seating, toilets and shorter alternatives. For onward travel, compare the full train-and-road sequence with a direct transfer where appropriate, preserving useful time at both ends rather than optimizing one short rail segment alone.",
    stayStrategy:
      "One comfortable base usually works for two or three nights. Balance sleep, meals, the principal subject and onward gateway instead of choosing a skyline view that lengthens every day. A practical connection-only room is a valid choice when its purpose is explicit. If southern Anhui is the main holiday, move to a suitable local base with useful nights. Repeated round trips from the capital should have a clear reason rather than follow from a one-hotel assumption.",
    firstTimerNote:
      "Hefei does not need to compete with Huangshan or Hongcun by pretending to offer the same experience. Its value can be a relevant collection, a clear historical subject, regional food and convenient transport. Decide whether those interests deserve a full day, then allocate the rest of the trip accordingly. A good proposal can recommend a brief gateway stay or no city stop when that gives the guest more time where they most want to be.",
    faqs: [
      {
        question: "Is Hefei worth visiting on an Anhui trip?",
        answer:
          "Yes when Anhui collections, selected city history or a particular regional interest appeal to you. Two nights give a focused day. If mountain scenery or Huizhou villages are the main purpose, compare a shorter gateway stay with more nights near those places instead.",
      },
      {
        question: "How many days do I need in Hefei?",
        answer:
          "Two nights allow one full city day and three can support a distinct excursion or slower pace. One night may mainly serve transport and a meal. Count full gateway and outlying-site journeys before adding Sanhe or a specific Chaohu interest.",
      },
      {
        question: "Should I visit Anhui Museum or Bao Park?",
        answer:
          "Choose the museum for selected regional collections and Bao Park for a different landscape and Bao Zheng-related commemorative subject. Confirm the actual museum venue and the park components intended. They need their own time and explanation rather than one generic history label.",
      },
      {
        question: "Where should I stay in Hefei for sightseeing?",
        answer:
          "Compare a precise older-central Luyang or Baohe address with a particular Shushan / Swan Lake-area property for its room and daily route. Binhu and station or airport hotels serve different purposes. Check quiet, temperature control, meals and complete transfers rather than choose by district name alone.",
      },
      {
        question: "Is Sanhe Ancient Town in central Hefei?",
        answer:
          "No. Sanhe is in Feixi County and should be planned as a separate outing with the complete road journey. Choose actual streets and accessible buildings, allowing lunch and walking. It is not a neighboring stop that automatically fits between a full museum visit and a train.",
      },
      {
        question: "What does a Chaohu day trip include?",
        answer:
          "That depends on the named shore, site and activity. Request a specific route, access, walking and any operating boat service rather than a generic lake tour. The lake's size and a waterfront hotel label do not establish quick access, swimming or activity availability.",
      },
      {
        question: "Can I visit Huangshan as a day trip from Hefei?",
        answer:
          "Do not treat a short rail segment as a complete mountain visit. Include both station transfers, the road to the chosen gateway, scenic transport, cableway conditions and substantial remaining stairs. A separate useful mountain stay generally gives more depth and less pressure than a same-evening return.",
      },
      {
        question: "Are Hefei station and Hefei South the same?",
        answer:
          "No. Use the full name on the dated ticket and the agreed meeting point. Xinqiao airport is another gateway. For southern Anhui, also identify whether the final destination is Tunxi, Tangkou, an on-mountain hotel or a specific village property.",
      },
      {
        question: "Is a published Hefei private tour recommended here?",
        answer:
          "No matching published product is recommended. Request a tailored proposal with dates, full gateways, principal interests, room needs and walking limits. It should name real visits, hotels and included transfers, with any southern Anhui stay separately allocated useful nights.",
      },
    ],
    culturalStory: {
      title: "The province and its capital have different stories to tell",
      paragraphs: [
        "Anhui contains different landscapes, historical regions and material traditions. A selected museum gallery can introduce one of those subjects without making Hefei an interchangeable version of a Huizhou village. Relate an object to its documented context and identify original material, reconstruction and interpretation. That approach gives a visitor questions to follow in the wider province rather than a list of attractions that supposedly all sit beside the capital.",
        "Bao Zheng provides another lens through a historical official's life and the later stories built around his reputation. A commemorative site can explain both when it separates documented history, dramatic tradition and present-day presentation. Sanhe's streets and waterways then ask different questions about settlement and commerce. Choosing among these interests is part of good planning: a guest should understand why a visit belongs in the route and what they will learn there.",
      ],
    },
    foodStory: {
      title: "Choose a meal by its actual preparation",
      paragraphs: [
        "A Hefei meal can introduce particular Anhui dishes without claiming that the entire province shares one kitchen. Ask a guide to explain the actual fish, meat, tofu, vegetables or noodle preparation selected, including any fermented or strong flavors. Dishes often associated with Huizhou may be available, but their availability and the guest's preferences should lead the order. A comfortable table, sensible portions and a well-timed meal can matter more than completing a famous-dish checklist.",
        "Discuss fish and meat stock, soy, wheat, dairy, nuts and shared equipment with the kitchen. A tofu or vegetable dish may still use animal ingredients, and regional labels do not establish allergy safety. Strong fermented preparations should remain optional and clearly explained. A cooking demonstration or private meal requires a real willing host, content and language arrangement. A restaurant visit alone can be worthwhile and should be described honestly as such.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the actual city or gateway room",
        description:
          "Meet at the booked airport or full station name, complete the hotel journey and allow dinner. A short public walk can fit useful hours, but keep timed institutions away from an uncertain arrival.",
      },
      {
        day: "Full city day",
        title: "A relevant collection and a coherent contrast",
        description:
          "Choose current Anhui Museum galleries or a principal city-history subject, then add a manageable contrasting visit. Include lunch, explanation and rest. Avoid crossing multiple districts merely to collect building names.",
      },
      {
        day: "Optional second full day",
        title: "Give an excursion a real purpose",
        description:
          "With a third night, choose Sanhe, a specific Chaohu interest or a distinct city subject. Confirm current access, walking and any separate service. Compare whether extra southern Anhui nights would better serve the guest before adding a full-day outing.",
      },
      {
        day: "Departure",
        title: "Continue to a deliberately chosen next base",
        description:
          "Allow the full station journey and final transfer to the next hotel. This two-night outline with an optional third night is illustrative, not a published package or a guarantee of museum objects, private research access, lake activities or historic interiors.",
      },
    ],
  },
};
