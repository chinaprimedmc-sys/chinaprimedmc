import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/jianshui.svg",
  alt: "Jianshui planning diagram comparing an old-town base, a village architecture excursion and a separately arranged pottery experience; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const jianshuiGuide: ExpandedDestination = {
  id: "jianshui",
  name: "Jianshui",
  region: "southwest",
  kicker: "Courtyard architecture, purple pottery & a southern Yunnan table",
  description:
    "Give Jianshui's Confucian heritage, lived-in streets, village architecture and purple pottery time to make sense, with a comfortable base and a realistic onward journey.",
  stay: "2–3 nights",
  bestFor: "Architecture, ceramics and slower southern Yunnan travel",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["puzhehei", "dali", "shaxi", "jingdezhen", "yuanyang", "kunming"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Jianshui Travel Guide: Old Town, Pottery & Village Stays",
    seoTitle: "Jianshui Travel Guide: Old Town & Pottery",
    seoDescription:
      "Plan Jianshui's old town, Tuanshan village and purple pottery. Compare hotel bases, rail arrivals, local food and a tailored southern Yunnan itinerary.",
    answer:
      "Jianshui is a historic county town in southern Yunnan's Honghe prefecture, rewarding travelers interested in Confucian heritage, courtyard architecture, purple pottery and regional food. The old town, Tuanshan village and ceramics areas provide different experiences rather than one continuous sightseeing circuit. Choose it as a stay in its own right, not merely a lunch stop on the way to the Yuanyang rice terraces. A good introduction gives the buildings context and leaves time to notice ordinary street life and enjoy a local meal.",
    stayAnswer:
      "Two nights give one full day for a selected old-town route and either a village excursion or ceramics interest if the arrival and departure also leave useful time. Three nights provide a second full day, making it easier to separate architecture from a properly arranged pottery visit. One night is a selective stop, not enough to promise every temple, garden, village and excursion train. Add time when you want a host-led craft session or a slower courtyard stay, rather than assuming all nearby interests can fit before an onward drive.",
    hotelAnswer:
      "Choose an old-town or edge-of-old-town base when evening meals, historic lanes and courtyard atmosphere matter. Check room privacy, sound, stairs and the actual vehicle meeting point. A modern town hotel can offer a different balance of facilities and road access. A Tuanshan or countryside stay needs an independent review of the property, dining and evening arrangements; a village day visit does not establish that a suitable overnight is available. Choose one base for a short stay unless a particular property merits the move.",
    sightseeingQuestion: "Should you visit Jianshui Old Town, Tuanshan or a pottery studio?",
    sightseeingAnswer:
      "Start with a selected old-town route, such as the Confucius Temple and Zhu Family Garden, to understand different types of institutional and domestic architecture. Add Tuanshan for a separate village-scale setting, or arrange a purple-pottery visit when making and decoration interest you. A shop visit, an artisan demonstration and a hands-on class are different services. Choose the second subject deliberately rather than collecting entrances, and confirm whether the actual visit offers interpretation or simply time to browse.",
    visitorResources: [
      {
        label: "Jianshui county government",
        href: "https://www.hhjs.gov.cn/",
        scope:
          "County background and public information. Check current attraction access, visitor routes, excursion-train operation and transport separately with each actual operator.",
      },
      {
        label: "Honghe prefectural government",
        href: "https://www.hh.gov.cn/",
        scope:
          "Regional context and public notices. This does not verify a particular pottery studio, heritage hotel, family visit or current connection to the rice terraces.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Jianshui stay with the named hotel, guide, road service, admissions and any studio arrangement specified in the proposal. A craft visit should identify its purpose, host or teacher, language support and what guests will actually do. Private guiding does not create access to residents' rooms or private collections. Finished pottery, firing, shipping, excursion-train tickets and special meals are included only when explicitly agreed; an old-town visit does not include them by implication.",
    routeAdvice:
      "Jianshui can form a southern Yunnan chapter from Kunming, possibly continuing to Yuanyang when the terrace season, road journey and available nights justify it. This is a different route from Dali–Shaxi–Lijiang–Shangri-La; the existing northern Yunnan product does not include Jianshui. There is no published Jianshui package recommended here. Use the outline as a starting point for a tailored proposal that states the gateway, local visits, hotel sequence and onward travel rather than treating all examples as included.",
    practicalPlanning: {
      timing:
        "Give one architectural site enough time for explanation before choosing another. Group the old-town walk and meals separately from Tuanshan or a studio appointment. A tourist train can determine a substantial part of the day's sequence and is not simply extra transport whenever convenient. If moving to Yuanyang, allow the full road journey, rest and hotel arrival before promising a viewpoint or fixed sunset window.",
      walking:
        "Old-town lanes, historic doorways and courtyard thresholds can be uneven or stepped. Tuanshan adds village paths and houses whose access may vary. A pottery session can involve standing, stools, workshop surfaces or working with hands; check the actual setup for mobility and dexterity needs. Agree a manageable route and road pickup, not a generic walk through the entire old town. Heat or rain can make a short seated break particularly valuable.",
      cost: "Compare the actual hotel and room, guide and vehicle hours, admissions, rural transfers and any ceramics session. Studio teaching, materials, firing and shipment require their own terms. A historic courtyard or master-led label should not substitute for evidence of the room or actual host. If a tourist train is selected, clarify its ticket, connections and return plan separately from regular intercity rail. Meals and purchases are not automatically included in a private day.",
    },
    attractions: [
      "Jianshui Confucius Temple",
      "Zhu Family Garden",
      "Tuanshan village",
      "Double Dragon Bridge / Shuanglong Bridge",
      "Selected Jianshui purple-pottery studios or displays",
    ],
    stays: [
      {
        label: "1 night: a carefully selected introduction",
        advice:
          "Focus on an old-town architectural interest and a meal when the actual arrival leaves time. A late arrival and early departure do not create a useful sightseeing day, and a village or train excursion may need to be omitted.",
      },
      {
        label: "2 nights: one full day plus usable arrival time",
        advice:
          "Choose the old-town core and one complementary interest, counting actual opening and appointment arrangements. Keep a proper meal and avoid assuming every afternoon will accommodate both a village and a workshop.",
      },
      {
        label: "3 nights or more: separate architecture and making",
        advice:
          "Give Tuanshan or a studio visit its own window and enjoy time at a good property. Extra nights can support a more meaningful class, but do not shorten pottery firing and shipping into an instant souvenir service.",
      },
    ],
    hotelAreas: [
      {
        name: "Old town and its quieter edges",
        advice:
          "Useful for historic surroundings and evening meals. Check where the road vehicle stops, luggage handling, room stairs, bathroom, temperature control and neighboring noise. A picturesque courtyard may have shared circulation and less privacy than its photographs suggest.",
      },
      {
        name: "Modern town accommodation",
        advice:
          "Consider for a particular room, facilities or straightforward pickups, accepting a different atmosphere from sleeping among historic lanes. Compare the actual distance to meals and visits rather than assuming every modern hotel is convenient or every old-town property is inconvenient.",
      },
      {
        name: "Tuanshan or other countryside properties",
        advice:
          "Choose only when a specific verified stay adds value. Establish evening meals, bathroom, heating or cooling, road access and local support before moving out of town. A village's cultural interest is not proof that a full-service heritage hotel operates there.",
      },
    ],
    tradeoffs: [
      {
        title: "Institutional, domestic and village architecture tell different stories",
        advice:
          "The Confucius Temple can introduce education, ritual and civic life; Zhu Family Garden offers a domestic courtyard context; Tuanshan adds a separate settlement scale. A good route compares what the spaces were for and how they are arranged. Choose contrast rather than three long visits justified only by the word historic, and keep private or closed areas outside the assumed route.",
      },
      {
        title: "Purple pottery is not the same as porcelain",
        advice:
          "Jianshui's zitao tradition is associated with clay bodies, incised decoration and polished surfaces. Ask the maker to explain the actual piece and stages rather than applying a porcelain story from elsewhere. A buying visit is different from teaching. If you want to make something, confirm technique, duration, class size, language and the realistic outcome before booking.",
      },
      {
        title: "A tourist train and your arrival train are different bookings",
        advice:
          "The narrow-gauge sightseeing service associated with Lin'an station is a visitor experience with its own current timetable and stops. It is not the same as arriving at Jianshui's regular passenger railway station. Check whether the excursion is running, what the selected service includes and how you reach the next visit. Do not use a tourist-train photograph to infer an available intercity connection.",
      },
      {
        title: "A bridge visit should serve the route",
        advice:
          "Double Dragon Bridge, also called Shuanglong Bridge, can add a landscape and engineering perspective outside the main old-town walk. Decide whether its actual access and location fit the village or rail plan. Light, water and crowd conditions vary; it is not an automatic sunset appointment or a guarantee of a particular reflection photograph.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "puzhehei",
        advice:
          "Puzhehei adds lakes, karst hills and seasonal lotus, contrasting with Jianshui’s architecture and pottery. A longer southeastern Yunnan route needs the complete connection and useful nights, not an assumed easy direct train. Compare flower timing, the actual room and selected water activity before adding the stay, especially when also considering Yuanyang terraces.",
      },
      {
        slug: "kunming",
        advice:
          "Kunming offers a practical gateway and a distinct city or Stone Forest interest when enough time remains. Check the actual rail station, complete hotel transfer and usable days. Do not treat the capital's city stay and Jianshui's architecture as stops that can both be fully covered between two transport bookings.",
      },
      {
        slug: "yuanyang",
        advice:
          "Yuanyang adds a living terrace landscape with its own agricultural seasons, mountain hotel choices and weather-sensitive viewpoints. Give it separate nights and the complete road transfer. A full Jianshui morning and a fixed terrace sunset should not be promised without the actual journey and conditions reviewed.",
      },
      {
        slug: "dali",
        advice:
          "Dali adds Bai villages and Erhai scenery in a different part of Yunnan. Joining it to Jianshui needs the actual rail, road or flight sequence and extra travel time; the published northern Yunnan itinerary does not include this southern chapter.",
      },
      {
        slug: "shaxi",
        advice:
          "Shaxi offers a smaller Tea Horse Road valley and courtyard-stay experience rather than another Jianshui-style architectural circuit. It is not a nearby excursion. Combine the two only when the complete route and days justify crossing between separate Yunnan regions.",
      },
      {
        slug: "jingdezhen",
        advice:
          "Jingdezhen provides a different ceramics tradition and a much broader porcelain-city context in Jiangxi. Compare the materials, techniques and kind of studio experience you want. This is a thematic connection across China, not a short transfer or a single regional pottery tour.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit architectural walks, with rain and changing temperatures still possible. Summer may be warm and wet, so select shorter outdoor sections and useful indoor or seated breaks. Winter mornings and evenings can feel cool, especially in heritage rooms with variable heating. If combining with Yuanyang, choose dates for the actual agricultural and weather conditions there rather than assuming the two places have one shared photography season.",
    orientation:
      "Jianshui is a county in Honghe Hani and Yi Autonomous Prefecture, southern Yunnan; its historic town is the usual visitor base. Tuanshan, Double Dragon Bridge and different ceramics addresses occupy separate locations. Jianshui's regular passenger station and the Lin'an tourist-train station are different gateways. Kunming, Mengzi and the Yuanyang terrace villages are distinct places with their own transfer needs, not other names for the same town center.",
    experiences: [
      "Compare a Confucian complex with a domestic courtyard through their use, layout and architectural details",
      "Choose Tuanshan for a separate village-scale view of local houses and settlement life",
      "Arrange a purposeful purple-pottery encounter and leave time for tofu or steam-pot chicken according to your preferences",
    ],
    planningNotes: [
      "Separate old-town, village, pottery and excursion-train time instead of promising them all in a short window",
      "Verify the exact pottery host, teaching outcome and any firing or shipping terms",
      "Distinguish the regular station from Lin'an sightseeing rail and protect onward road time to Yuanyang",
    ],
    arrival:
      "If using intercity rail, confirm the actual service and Jianshui passenger station, then add the road transfer to the exact hotel. A Kunming arrival still needs a complete rail or road plan before it becomes a Jianshui stay. Lin'an's tourist railway is a separate experience and should not be used as the pickup location for an ordinary passenger train. For a courtyard hotel, agree where luggage leaves the vehicle and how it reaches the room.",
    gettingAround:
      "Combine selected old-town walking with road transfers for Tuanshan, the bridge and the actual studio address. The sightseeing train may be an optional way to experience part of the landscape when it operates, but it does not automatically replace all road service. Match each visit to the entrance and pickup point, especially when historic lanes limit vehicle access. Keep enough time for meals and for a realistic departure to the next destination.",
    stayStrategy:
      "On a short stay, choose one property that balances atmosphere, rest and access to food. Check whether a courtyard room has modern bathroom comfort, quiet, privacy and suitable heating or cooling. An extra village night is worthwhile only if the actual property and evening experience justify moving bags. Guests who value simple road access may prefer an edge-of-old-town or modern hotel, spending the day in historic surroundings without sleeping deep inside them.",
    firstTimerNote:
      "Jianshui works best as a place to understand rather than race through. Notice how a ceremonial courtyard differs from a family residence, ask how a pot's surface is made and allow time to taste food at a seated meal. These are distinct ways into the town. A class or private host can add depth, but only when the teacher, access and format are real and agreed, not implied by the label authentic experience.",
    faqs: [
      {
        question: "How many days should I spend in Jianshui?",
        answer:
          "Two nights give one full day with a selective old-town and complementary visit. Three nights provide a second full day for Tuanshan, pottery or a slower stay. One night requires the real arrival and departure to leave usable time and should not promise the entire area.",
      },
      {
        question: "Is Jianshui worth visiting in Yunnan?",
        answer:
          "Yes, if courtyard architecture, Confucian heritage, pottery and regional food interest you. It adds a southern Yunnan subject distinct from the northern old-town route. Give it time to explain the buildings and making traditions rather than treating it only as a stop on the way to rice terraces.",
      },
      {
        question: "Should I stay in Jianshui Old Town or Tuanshan?",
        answer:
          "Choose an old-town or nearby base for meals and a convenient architectural introduction, checking room and vehicle access. Choose a countryside overnight only for a specific verified property and its actual facilities. Tuanshan's value as a day visit does not establish a suitable hotel for every guest.",
      },
      {
        question: "Can I take a purple-pottery class in Jianshui?",
        answer:
          "A class can be discussed when an actual teacher, venue, language and format are confirmed. Distinguish shopping, demonstration and hands-on learning. Ask what you make, whether firing is needed, when it is finished and how any shipping works; a short visit does not guarantee a ready-to-use vessel to take home.",
      },
      {
        question: "Is the Jianshui tourist train my train from Kunming?",
        answer:
          "No. The narrow-gauge sightseeing service associated with Lin'an is a separate visitor experience. Your regular intercity arrival uses the station named on its own ticket. Check both the current sightseeing operation and the actual road transfers instead of assuming the two services share a booking or station.",
      },
      {
        question: "Can I combine Jianshui with Yuanyang rice terraces?",
        answer:
          "Yes, as a separately planned southern Yunnan route when road conditions, season and available nights suit it. Yuanyang's terrace villages are not a short old-town excursion. Allow the complete transfer and local hotel approach before promising a viewpoint or an evening photography window.",
      },
      {
        question: "Is Jianshui suitable for travelers with limited mobility?",
        answer:
          "A selective visit may work, but review the actual hotel, thresholds, steps, paving and pickup points first. Courtyards, village paths and workshops have different access conditions. A private vehicle can connect places but does not make every building or train boarding route step-free.",
      },
      {
        question: "What should I eat in Jianshui?",
        answer:
          "Grilled Jianshui tofu and steam-pot chicken, qiguo ji, are useful starting points if they suit your diet. Ask about sauces, stock, preparation and shared cooking rather than assuming tofu is a fully vegetarian meal. Choose a proper restaurant and actual dish according to preferences and strict requirements.",
      },
    ],
    culturalStory: {
      title: "Learn to read a courtyard before adding another entrance",
      paragraphs: [
        "At the Confucius Temple, begin with the relationship between ritual, learning and the sequence of spaces. At a domestic compound, shift the question to how rooms and courtyards organized a household. These are different social worlds expressed through architecture. A guide who compares their use and layout can make a small selection of buildings more revealing than a long list of historic names.",
        "Tuanshan offers another scale: houses within a settlement rather than one isolated monument. Notice how lanes and doorways link private and shared space, while respecting the current visitor route and residents' privacy. The same attention to making can carry into a ceramics visit, where a teacher explains the actual clay, decoration and polishing. A private experience should mean good interpretation and an agreed format, not uninvited entry into a household or workshop.",
      ],
    },
    foodStory: {
      title: "Give tofu and a steam pot more than a snack stop",
      paragraphs: [
        "Jianshui's small grilled tofu portions offer a different texture and eating experience from the larger braised tofu dishes many visitors know. Watch the cooking at a suitable stall or choose a seated setting where the group can eat comfortably, asking how the tofu and dipping sauce are prepared. Steam-pot chicken, qiguo ji, is another regional direction: the distinctive ceramic vessel and steam-cooking method are part of the story, linking the meal to a local interest in pottery as well as flavor.",
        "Not everyone will want a market tasting or chicken dish. Plan the meal around appetite, seating and actual preparation, including sauces, broths, allergens and shared cooking. Tofu does not by itself establish a vegetarian kitchen, and a local specialty label does not guarantee halal suitability. A well-chosen table with time to ask questions can offer more than rushing among stalls before a village transfer.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the right station and settle into town",
        description:
          "Transfer from the actual regular railway or road gateway. Keep the first meal local and add a short lane walk only if arrival leaves time, rather than using the evening to compensate for an overfilled next day.",
      },
      {
        day: "Full day 1",
        title: "Compare architecture and one complementary interest",
        description:
          "Choose a coherent old-town route, then Tuanshan or a confirmed pottery encounter if the full schedule allows. A slower meal and interpretation matter more than including every building, bridge and train service.",
      },
      {
        day: "Optional extra full day",
        title: "Give village life or making a separate window",
        description:
          "Choose the subject not covered on the first day, or a currently operating tourist-rail experience with its actual stops and return plan. A class should have an agreed outcome; it is not an automatic workshop included with browsing.",
      },
      {
        day: "Departure",
        title: "Continue with usable time for the next place",
        description:
          "Allow the complete transfer to Kunming or the separately planned Yuanyang stay. This is an illustrative outline, not a published package or a promise that all mentioned visits are included.",
      },
    ],
  },
};
