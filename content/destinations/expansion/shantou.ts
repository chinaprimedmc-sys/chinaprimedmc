import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/shantou.svg",
  alt: "Original Shantou planning schematic distinguishing the Little Park heritage district, modern city hotels and a separate Nan'ao Island stay; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const shantouGuide: ExpandedDestination = {
  id: "shantou",
  name: "Shantou",
  region: "south",
  kicker: "Teochew food and a port city's story, with time to enjoy both",
  description:
    "Explore Shantou through Little Park's arcaded streets, its port and overseas connections, and carefully chosen Teochew meals; decide separately whether Nan'ao deserves island nights.",
  stay: "2–3 city nights; island nights are a separate choice",
  bestFor: "Teochew food, port-city heritage and a thoughtful Chaoshan journey",
  interests: ["food", "heritage", "city", "landscape"],
  relatedDestinationIds: ["jieyang", "chaozhou", "xiamen", "shunde"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Shantou Travel Guide: Teochew Food, Old Town & Stays",
    seoTitle: "Shantou Guide: Teochew Food & Old Town",
    seoDescription:
      "Plan Shantou's Little Park old town, Teochew meals and city hotels. Compare Shantou vs Chaozhou and decide whether Nan'ao Island needs a day trip or its own stay.",
    answer:
      "Shantou (汕头), historically also written Swatow, is a port city in eastern Guangdong's Chaoshan region. Come for the relationship between trade, overseas Chinese connections, arcaded streets around Little Park and Teochew cooking. Shantou and Chaozhou are different cities: Shantou offers a port-city and urban food perspective, while Chaozhou has its own old-city, bridge and tea interests. Two or three city nights give time for a coherent heritage walk and distinct meals without turning the trip into continuous snacking. Nan'ao Island, reached by a separate road journey over the bridge, is an additional coastal decision rather than another old-town neighborhood. Choose the actual city or island base before fixing the transport.",
    stayAnswer:
      "Two city nights give one full day for Little Park's streets, selected local context and a worthwhile seated meal. Three give a second full day for another urban interest, a deeper food subject or a separately assessed outing. One night can work as a selective stop when connections leave useful hours, but does not deliver a complete Chaoshan food journey. If Nan'ao's coast is a main purpose, compare its own overnight stay with a city-based return outing. A combined Shantou–Chaozhou trip should preserve useful time in both cities rather than spend every day commuting from one broad Chaoshan base.",
    hotelAnswer:
      "Compare a named hotel in or near the Little Park district, a modern central-city property with dependable room facilities, and a separate Nan'ao Island stay. Near Little Park, check street noise, stairs, bathroom, vehicle access and the final luggage approach. A modern base may improve sleep and pickup while needing a road transfer to the heritage walk. On Nan'ao, Houzhai town and the Qing'ao Bay area serve different priorities; compare the precise room, meals, shore access and full roads. A sea-view room does not establish a swimming beach or the service of a staffed resort.",
    sightseeingQuestion: "Should I choose Shantou or Chaozhou for a first Chaoshan visit?",
    sightseeingAnswer:
      "Choose Shantou when port-city heritage, Little Park's streets and an urban Teochew food stay are your priorities. Choose Chaozhou when Guangji Bridge, old-city lanes, temple context and gongfu tea are the stronger draw. Both share regional food and cultural connections, but are not substitutes for one another. With enough nights, give each a different role and compare moving hotels with the full return roads. With limited time, stay where you most want an unhurried evening rather than attempt two complete city introductions in one day.",
    visitorResources: [
      {
        label: "Shantou municipal government",
        href: "https://www.shantou.gov.cn/",
        scope:
          "City background and dated notices, mainly in Chinese. Confirm current museum exhibitions, public building access, Little Park visitor arrangements, Nan'ao roads and weather-related changes with the responsible venue or operator. A city description does not verify a restaurant, hotel or private host.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated trains and the exact station before comparing the complete hotel transfer. Shantou station, Shantou South and Chaoshan station are different pickup locations. A shared regional name does not establish equal access to Shantou, Chaozhou or Nan'ao.",
      },
    ],
    serviceScope:
      "A tailored proposal should identify the exact hotel and room, airport or station pickup, selected public heritage route, guide language, meals and admissions. A food-led visit should name the learning subject, the type and quantity of tastings or the actual included restaurant meal. Explain who handles ordering and dietary communication. Cooking, a private dining room, a tea specialist, an overseas-family history session or a household invitation needs its own confirmed arrangement. Private guiding does not open closed buildings or make a public beach private. An island extension should specify its own roads, room, activities and weather alternative.",
    routeAdvice:
      "Use Chaozhou's dedicated guide for Guangji Bridge, its own Kaiyuan Temple and old-city tea planning. Xiamen adds a different coastal city and built-heritage chapter through a separately checked rail connection. Shunde offers another Guangdong culinary tradition farther west, useful for a deliberate comparison rather than a local addition. No matching published Shantou product is recommended here. For a tailored plan, share dates, gateways, food interests, dietary needs, walking preferences and whether the coast deserves its own nights. Ask for distinct meals and cultural subjects rather than a list of famous shops.",
    practicalPlanning: {
      timing:
        "Keep the Little Park walk compact enough to enjoy individual buildings and a seated pause. An exhibition or interior has its own opening arrangements; public streets and a museum are different visits. Space food stops so guests arrive hungry for the main meal. For Nan'ao, check the complete bridge and island return, traffic and current weather before fixing an outing. Keep a ticketed departure separate from an ambitious island day unless the full journey genuinely supports it.",
      walking:
        "Arcaded streets offer some shelter but do not guarantee an uninterrupted dry or level route. Review paving, crossings, thresholds, crowds, seating and toilets, especially in heat or rain. Heritage properties and upper-floor restaurants may have stairs. A vehicle helps between districts but cannot enter every pedestrian lane. Island viewpoints, coastal walks and swimming are separate physical and operating decisions; assess the selected route rather than infer easy access from a sea-view photograph.",
      cost: "Compare actual rooms, full transfers, guide time, named admissions and food inclusions. A snack walk, a seated meal and a specialist cooking session have different costs and preparation. Specify portions and purchase expectations, and separate optional shopping. For seafood, clarify species, weight, live or prepared state, price basis and cooking charges before ordering. An island car day or hotel move needs its own full cost rather than being assumed from city guiding.",
    },
    attractions: [
      "Little Park / Xiaogongyuan and the surrounding arcaded commercial streets",
      "A selected public exhibition explaining Shantou's port and overseas connections",
      "A focused Teochew meal, such as beef hotpot or a carefully ordered regional table",
      "An identified gongfu tea session when the host and subject are confirmed",
      "A selected city waterfront or neighborhood route with safe public access",
      "Nan'ao Island as a separately planned coast and overnight decision",
    ],
    stays: [
      {
        label: "1 city night / a selective introduction",
        advice:
          "Protect a coherent Little Park walk and one proper meal when the arrival and departure leave useful time. Do not promise a full city food exploration, Chaozhou and an island circuit inside the same short stop.",
      },
      {
        label: "2 city nights / one complete urban day",
        advice:
          "Combine a clear heritage subject with separate meal and rest time. Choose food stops for contrast rather than quantity. Keep the gateway transfer honest and retain a shorter walk or indoor subject for uncomfortable weather.",
      },
      {
        label: "3 city nights or a combined regional stay / another distinct purpose",
        advice:
          "Use the extra full day for a different food or cultural interest, or a selective checked outing. Give Chaozhou or Nan'ao its own useful time when that is the main addition. Extra nights should improve depth or pacing, not repeat similar tastings or create daily long returns.",
      },
    ],
    hotelAreas: [
      {
        name: "Little Park surroundings / heritage-street access",
        advice:
          "Useful when the lanes and evening atmosphere matter. Check the exact room's quiet, bathroom, lift or stairs, breakfast and final approach with bags. A restored facade or stylish lobby does not establish room soundproofing or dependable service.",
      },
      {
        name: "Modern central Shantou / room comfort and practical pickup",
        advice:
          "Compare a specific property for sleep, meals, bathroom and road access to the chosen visits. A modern room can be a strong high-comfort base without being on the heritage streets. Assess actual transfers rather than assume every central address is equally convenient.",
      },
      {
        name: "Nan'ao: Houzhai or Qing'ao Bay area / a separate coastal stay",
        advice:
          "Houzhai is a town-services option; the Qing'ao Bay area may suit a coast-led plan depending on the exact property. Verify staffed hotel versus apartment operation, booked view, meals, beach approach, noise and return road. Sea view, shore access and safe supervised swimming are three different claims.",
      },
    ],
    tradeoffs: [
      {
        title: "Chaoshan is a regional identity, not one compact city",
        advice:
          "Shantou, Chaozhou and Jieyang have separate urban bases and attractions. Chaoshan station and the regional airport name do not place the visitor in every old town at once. Select the first and last hotel around the actual services and the evenings you want, then compare the complete intercity roads.",
      },
      {
        title: "Read the arcades as commercial architecture",
        advice:
          "Around Little Park, look at sheltered street edges, upper floors, shopfronts and the way streets relate to the central pavilion. These features help explain a port city's commerce and changing built environment. Identify restored, reconstructed and older fabric where evidence supports it; a heritage appearance alone does not make every facade unchanged since the treaty-port era.",
      },
      {
        title: "A good food day teaches differences rather than endurance",
        advice:
          "Choose a few contrasting subjects: the texture and broth of beef hotpot, a rice-based snack, or a balanced seated regional meal. Ask how ingredients, cutting, cooking and condiments shape the result. Portions and rest matter. Repeating full bowls at several famous shops can leave guests unable to enjoy the meal that best explains the cuisine.",
      },
      {
        title: "Raw-marinated seafood is a choice, not a cultural requirement",
        advice:
          "Chaoshan menus can include raw-marinated seafood, but a thoughtful introduction need not include it. Marinade does not make raw seafood equivalent to cooked food or guarantee safety. Offer a properly cooked alternative and discuss individual dietary or medical concerns as relevant. Guests can decline a dish without missing the meaning of the regional food tradition.",
      },
      {
        title: "Nan'ao deserves a coast decision rather than a compulsory circuit",
        advice:
          "Choose the actual bay, town, coastal route or lodging that serves the holiday. An island day built around multiple viewpoints can be mostly driving, particularly with bridge traffic. Beach conditions and weather affect the available experience. Neither an island hotel nor a private car automatically supplies a boat, swimming service or access to a private shore.",
      },
      {
        title: "Tea culture is more useful when the session has a question",
        advice:
          "An identified tea and a clear comparison of leaf, infusion or brewing can teach more than an expensive purchase recommendation. Gongfu describes an attentive brewing practice, not a promise of one cultivar or universally formal ceremony. Confirm the host, language, format and caffeine alternatives. Buying should be optional and any sales relationship clear.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "jieyang",
        advice:
          "Jieyang adds Rongcheng’s Confucian academy and a distinct city-history subject beyond the regional airport. Include a selective visit or useful stay when it adds something different. Any Yingge event or Puning chapter needs its own actual location, availability and roads; a shared Chaoshan label is not a performance booking or a short-transfer guarantee.",
      },
      {
        slug: "chaozhou",
        advice:
          "Chaozhou adds Guangji Bridge, old-city lanes and its own tea and temple context. Choose useful nights in each city or compare the full return journey for a selective visit. Shared Teochew food does not make the two urban experiences interchangeable.",
      },
      {
        slug: "xiamen",
        advice:
          "Xiamen provides a different Fujian coastal-city chapter. Check dated rail services, exact stations and both hotel transfers before combining the stays. Give any Gulangyu interest its own ferry and visitor arrangements rather than adding it to an uncertain arrival.",
      },
      {
        slug: "shunde",
        advice:
          "Shunde offers a distinct Cantonese culinary comparison farther west in Guangdong. Choose it for a different set of cooking questions and allow its own transport and nights. A shared provincial label does not make the cuisines identical or the connection local.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for comfortable street walking, with actual heat, rain and holiday demand checked for the dates. Summer calls for shorter outdoor blocks, indoor pauses and attention to coastal weather. A Nan'ao outing or stay needs its own current wind, rain and road assessment. Cooler periods may suit a food-led city break but do not establish beach conditions. Festivals, performances and specific hosts require dated confirmation rather than a general seasonal promise.",
    orientation:
      "Shantou is an eastern Guangdong port city in the wider Chaoshan region. Swatow is a historical English spelling; Teochew is commonly encountered in food, language and overseas-community contexts. Little Park / Xiaogongyuan (小公园) is a heritage district, not the whole city. Chaozhou and Jieyang are separate cities. Nan'ao is a separate island and county within the wider Shantou area; choose its hotel, ferry or road approach and coastal activities as a separate part of the trip. Match exact Chinese addresses for each hotel, station and meal.",
    experiences: [
      "Read Little Park's arcaded streets through the story of trade and overseas connections",
      "Enjoy a small number of contrasting Teochew food subjects with time for a proper meal",
      "Choose a city or island stay by the actual purpose, room and complete roads",
    ],
    planningNotes: [
      "Keep Shantou, Chaozhou and the broad Chaoshan gateway names distinct",
      "Space tastings around appetite, ingredients and a meaningful cooking comparison",
      "Assess Nan'ao's own room, route and weather before adding a coastal extension",
    ],
    arrival:
      "Check current services through Jieyang Chaoshan International Airport or the exact ticketed railway station, then the full transfer to the named hotel. Shantou, Shantou South and Chaoshan stations are not interchangeable pickup instructions. A fast train segment does not describe the hotel-to-hotel journey. For Nan'ao, include the bridge and final island road in the arrival plan. Keep an essential host appointment away from uncertain arrival and allow the complete return before a departure.",
    gettingAround:
      "A planned vehicle helps between modern districts, the heritage area and selected regional outings. Little Park exploration still involves public streets, crossings and some final walking. Decide where the guide meets the group, how meals are ordered and where the vehicle can rejoin. On Nan'ao, choose a coherent route rather than assume an island circuit is necessary. Check current roads, weather, walking surfaces and any activity provider separately. A driver, cultural guide and specialist food host have different roles.",
    stayStrategy:
      "For a short food-and-heritage visit, one dependable city base keeps the rhythm simple. Choose Little Park proximity for lane access or a modern property for a stronger actual room and practical pickup. Three nights can add depth without moving hotels every day. If evenings and mornings on Nan'ao are the reason to go, compare an island stay on its own merits. Premium planning means good sleep, clear dietary communication, informed guiding and useful time, not an excessive tasting count or an unsupported exclusive-dining claim.",
    firstTimerNote:
      "Ask what each meal will teach and how much food is included. Then ask where you will sleep and how long the full roads take. A plan with one coherent street walk, a few contrasting tastes and a properly chosen dinner can be far more satisfying than a list of famous shops. Choose Chaozhou and Nan'ao only when their different value justifies the extra journey.",
    faqs: [
      {
        question: "Is Shantou the same as Chaozhou or Chaoshan?",
        answer:
          "No. Shantou and Chaozhou are different cities in the wider Chaoshan region of eastern Guangdong. The regional name also appears in transport hubs. Use exact station and hotel addresses before comparing transfers and city stays.",
      },
      {
        question: "What does Swatow mean?",
        answer:
          "Swatow is a historical English spelling associated with Shantou. You may encounter it in port history, older records and overseas-community contexts. Use the current city and exact Chinese address for travel bookings.",
      },
      {
        question: "How many nights should I spend in Shantou?",
        answer:
          "Two city nights give one full day for a selective heritage and food introduction. Three give a second day for a distinct subject or carefully chosen outing. Nan'ao island nights and a Chaozhou stay are separate choices, not automatically included in that city outline.",
      },
      {
        question: "Where should I stay in Shantou for food and the old town?",
        answer:
          "Compare a named Little Park-area property for street access with a modern city hotel for the actual room, quiet and practical pickup. Check bathroom, stairs or lift, breakfast, noise and complete transfers. A heritage facade does not establish a better night's sleep.",
      },
      {
        question: "What should a first Teochew food visit include?",
        answer:
          "Choose a few contrasting subjects with clear explanation and appropriate portions, such as beef hotpot, a rice-based snack or a balanced regional table. Leave appetite for the main meal. Discuss ingredients and dietary needs; raw-marinated seafood and purchases are optional.",
      },
      {
        question: "Should I visit Nan'ao Island from Shantou or stay overnight?",
        answer:
          "Choose a selective day outing when the complete bridge and island return leaves worthwhile time. Consider its own stay when coastal evenings, mornings or a specific property are central interests. Assess the actual room, shore access, weather and meals rather than assume every island view offers a beach holiday.",
      },
      {
        question: "Does a sea-view Nan'ao hotel guarantee swimming access?",
        answer:
          "No. Sea view, a usable shore approach and safe supervised swimming are separate matters. Confirm the exact property, current beach conditions and any operating services. An apartment listing does not establish a staffed resort or included water activity.",
      },
      {
        question: "Which published Shantou tour is recommended here?",
        answer:
          "No matching published product is recommended. A tailored proposal should specify hotels, full transport, guiding, meals, admissions and any island extension. The sample outline is not a package or guarantee of hosts, private dining or coastal activities.",
      },
    ],
    culturalStory: {
      title: "A port city's streets connect commerce, migration and daily life",
      paragraphs: [
        "Little Park is most rewarding when the guide explains how the streets work. Sheltered arcades connect shops and upper floors; the central pavilion and surrounding streets give the district a recognizable structure. Shantou's modern port history and overseas Chinese connections provide context for architectural choices, commerce and movement of people. Look at the actual building and the evidence for its story. A restored frontage, a reconstructed element and older fabric should be identified carefully rather than treated as one untouched historic set.",
        "The city's overseas relationships can also make it meaningful for travelers with family connections to the region. That interest deserves preparation: names, Chinese characters, dates and available records are more useful than a promise that a guide will discover an ancestral home on arrival. A public heritage walk, an archive inquiry and a private family meeting are different projects. Contemporary shops, residents and livelihoods remain part of the story; cultural depth comes from specific knowledge and willing participation, not staging an encounter.",
      ],
    },
    foodStory: {
      title: "Taste with a question, then leave room for dinner",
      paragraphs: [
        "For beef hotpot, ask how the cut, slicing and cooking time affect texture, and how a restrained broth and condiments change the experience. Fish balls or beef balls offer a different texture question; rice-based guo snacks introduce another preparation. Names alone do not tell you the filling, so ask the kitchen. A seated regional meal can then show balance across dishes instead of repeating another full bowl. Tea provides a separate brewing subject, with small portions and non-tea choices for guests who prefer them.",
        "Discuss seafood and shellfish, peanuts, sesame, soy, wheat, eggs, stocks and shared preparation as relevant. A rice wrapper does not establish a gluten-free filling or sauce, and a vegetable dish may use meat stock. Serious allergies need confirmed kitchen capacity and an alternative. Choose cooked seafood when preferred, clarify seafood weight and cooking charges, and keep purchases optional. A good food host makes the meal easier to understand and enjoy rather than pressure guests to prove their adventurousness.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / one suitable city base",
        title: "Settle before the first substantial meal",
        description:
          "Complete the exact gateway transfer, check the booked room and keep the first food interest proportionate to arrival time and appetite. Confirm the next day's walk and dietary arrangements. An uncertain arrival is not the right place for an essential specialist appointment.",
      },
      {
        day: "Full day 1 / streets and regional food",
        title: "Connect the port story with the table",
        description:
          "Follow a selected Little Park route with a clear architectural and trade-history subject, a seated pause and any actually open exhibition. Choose a few contrasting tastes and protect time for a proper meal. Avoid treating every famous shop as a compulsory stop.",
      },
      {
        day: "Optional full day 2 / a distinct purpose",
        title: "Deepen the city stay or choose one outing",
        description:
          "Use a confirmed food, tea or public cultural subject, or a selective Nan'ao outing when the complete roads and weather support it. Chaozhou is another separate city decision. These are alternatives, not a promise to combine all three inside one day.",
      },
      {
        day: "Departure / or a separately planned island or Chaozhou stay",
        title: "Keep the next chapter useful",
        description:
          "Allow breakfast, bags and the complete transfer. Give an island or second-city stay its own room and useful hours if continuing. This outline is illustrative, not a published package or guarantee of restaurants, hosts, exhibitions, bridge conditions or swimming services.",
      },
    ],
  },
};
