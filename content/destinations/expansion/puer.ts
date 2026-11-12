import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/puer.svg",
  alt: "Pu'er planning schematic distinguishing the Simao city base, a confirmed tea or coffee encounter and a separate Jingmai Mountain stay; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const puerGuide: ExpandedDestination = {
  id: "puer",
  name: "Pu'er",
  region: "southwest",
  kicker: "Tea knowledge, forest landscapes and a southern Yunnan stay with substance",
  description:
    "Plan Pu'er around a clear tea or countryside interest, distinguishing the Simao city base from Jingmai Mountain, with advice on hosts, tastings, rooms and the full journey between them.",
  stay: "3–4 nights for one focused chapter",
  bestFor: "Tea learning, selected coffee interests and a slower southern Yunnan stay",
  interests: ["heritage", "food", "landscape"],
  relatedDestinationIds: [
    "lancang",
    "jingmai-mountain",
    "kunming",
    "shaxi",
    "jianshui",
    "xishuangbanna",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Pu'er Travel Guide: Tea, Jingmai Mountain & Stays",
    seoTitle: "Pu'er Travel Guide: Tea, Jingmai Mountain & Stays",
    seoDescription:
      "Choose Pu'er city or a separate Jingmai Mountain stay, with practical tea-tasting questions, host and hotel checks, gateways and a three-night outline.",
    answer:
      "Plan a Pu'er visit around the experience you want: tea processing and tasting, coffee, a countryside property or Jingmai Mountain's tea forests. The name refers both to a large area of southern Yunnan and to tea produced across several parts of the province. Simao is the urban center; Jingmai lies in Lancang County and needs a separate journey. Choose the actual venue and base first, then build the route around useful time there.",
    stayAnswer:
      "Three nights give two full days for one coherent base and a selected tea, landscape or coffee interest. Four nights allow a slower rhythm and more flexibility for a host's working schedule. If Jingmai is the main purpose, plan the arrival gateway and nights around the mountain rather than assuming it fits into a short drive from the Simao city hotel. Combining city-area Pu'er and Jingmai needs the full road transfer and usable time in both. One rushed tasting and an early departure are not a deep tea journey.",
    hotelAnswer:
      "Choose a Simao city property for services, dining and city-area visits, a named countryside or forest-area property for its own setting, or a specific Jingmai-area stay when the mountain is the main purpose. Check each address against the host and route you will actually use. A tea-themed room does not establish a producer encounter, plantation access or a view of old tea forests. Confirm heating or cooling, bathroom, bedding, humidity control where needed, meals, noise and the final luggage approach before describing a rural stay as high-end.",
    sightseeingQuestion: "Should you stay in Pu'er city or on Jingmai Mountain?",
    sightseeingAnswer:
      "Choose the Simao city area for a comfortable services base and a confirmed city-area tea, coffee or landscape interest. Choose Jingmai when the old tea-forest cultural landscape, villages and a well-arranged mountain stay are central to the trip. They are not two nearby hotel neighborhoods. Compare the exact gateway, complete road journey, room comfort and host access. A city tasting can be excellent without a mountain visit, while a meaningful Jingmai stay needs more than a shop stop advertised under the Pu'er name.",
    visitorResources: [
      {
        label: "Pu'er municipal government",
        href: "https://www.puershi.gov.cn/",
        scope:
          "Municipal and county background, mainly in Chinese. Confirm the selected village, road notices, public visitor arrangements and local institutions through the responsible authority. Regional tea promotion is not evidence that a specific grower, processor or hotel can host a visit.",
      },
      {
        label: "UNESCO World Heritage Centre: China property list",
        href: "https://whc.unesco.org/en/statesparties/cn/",
        scope:
          "Official heritage reference for locating the Cultural Landscape of Old Tea Forests of the Jingmai Mountain in Pu'er and understanding the designated property. The listing does not cover every tea area in the prefecture or verify current village access, hosts, accommodation or a visitor activity.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. A train to Pu'er serves the city-area gateway, not every tea mountain in the wider prefecture. Compare the complete final road journey and the host's location before choosing rail over another arrival point.",
      },
    ],
    serviceScope:
      "A tailored proposal can specify the base and room, exact arrival point, vehicle, guiding, selected tea or coffee host, visit topic and meals. Distinguish a tasting, farm walk, production observation, hands-on session and buying opportunity in writing. Interpreter or specialist expertise, seasonal participation, private hospitality and shipping need their own confirmation. Access depends on the producer's work and consent; private transport does not create unrestricted forest or home entry. Share your knowledge level, preferred depth, caffeine preferences and walking ability before comparing visits.",
    routeAdvice:
      "Start with the subject you want to understand: tea processing, tasting, coffee or the Jingmai cultural landscape. Share your dates, gateway, existing tea knowledge, room preferences and walking needs for a tailored Pu'er proposal. We can compare a Simao-area base with a separate Jingmai stay, then assess the wider Kunming connection. Shaxi and Jianshui offer different cultural chapters elsewhere in Yunnan; add them only when the full travel sequence leaves worthwhile time in each place.",
    practicalPlanning: {
      timing:
        "Build the day around the host's real work and the route from your hotel. Allow time for questions, a meal and unhurried travel; an informative tasting need not be followed by several similar shops. Field activity and processing follow the season and the day's production. A fixed harvesting promise can make a poor itinerary when conditions change. Keep the mountain transfer separate from a tightly timed train or flight, and allow a shorter alternative if weather affects rural roads.",
      walking:
        "A seated tasting, paved village lane and walk through a tea forest have different demands. Ask for the exact surface, gradient, distance and resting options. Roots, uneven steps, mud and humid conditions can affect a rural route, while some hotels have stairs beyond the vehicle stop. Do not assume a forest setting is a gentle maintained garden or that the vehicle can follow the walking route. Review the final room approach as carefully as the visit.",
      cost: "Compare the room, meals, complete transfers, guide language and the named host or venue. A commercial tasting, specialist interpretation and a production session have different value and inclusions. Keep tea purchases separate from the service quote, with origin claims, quantity and price explained. A premium should buy better interpretation, comfort and time, not unsupported claims of ancient-tree authenticity, a famous master or exclusive access to a tea forest.",
    },
    attractions: [
      "Simao city as a practical base for selected tea, coffee and local food interests",
      "A confirmed producer, collection or processing visit chosen for its educational value",
      "A named countryside or forest-area stay with an agreed public walking route",
      "Jingmai Mountain's old tea-forest cultural landscape as a separate regional chapter",
      "Wengji / 翁基 or Nuogan / 糯干 on a specifically arranged Jingmai village route",
      "A coffee tasting or farm interest when the host, season and topic fit",
    ],
    stays: [
      {
        label: "2 nights: one focused full day",
        advice:
          "Choose a strong priority near a sensible base: a confirmed tea topic, a coffee interest or a countryside stay. Do not promise both city-area Pu'er and a comprehensive Jingmai visit between two transport bookings. A short stay is worthwhile when the gateway and host location fit naturally.",
      },
      {
        label: "3 nights: a useful first tea-country chapter",
        advice:
          "Two full days allow one substantial hosted subject and another landscape, village or food interest without repeating tastings. Choose the base around the main experience. If that is Jingmai, the mountain stay and final road approach need to be designed from the start.",
      },
      {
        label: "4 nights or more: depth and working-time flexibility",
        advice:
          "Give a second distinct topic proper time, retain a quieter day or allow for a producer's schedule. Combining separate parts of the prefecture can justify another base only when the additional subject earns the transfer. More nights should deepen understanding or improve the stay, not multiply sales stops.",
      },
    ],
    hotelAreas: [
      {
        name: "Simao city / Pu'er urban center",
        advice:
          "Useful for services, varied meals and visits within a sensible road radius. Confirm the address, room quietness and pickup access. A city property can provide dependable comfort without a tea-forest panorama. Do not assume a booking labeled Pu'er is convenient for Jingmai simply because both sit within the prefecture.",
      },
      {
        name: "A named countryside or forest-area property near the chosen interest",
        advice:
          "Choose for the room, grounds, meals and actual surroundings, with the road connection to your host checked. Forest-themed marketing does not establish a maintained walking route, wildlife encounter or private plantation. Ask about humidity, ventilation, room access, dinner and current nearby activity. A remote address can still bring road or group noise.",
      },
      {
        name: "Jingmai Mountain and its selected village stays",
        advice:
          "A separate choice for a mountain-and-village chapter in Lancang County. Review the exact village, room, stairs, final road, luggage handling and meal arrangements. A scenic traditional building can differ substantially from a full-service hotel. Wengji and Nuogan are specific village interests, not guarantees that any household or tea forest is open to a private tour.",
      },
    ],
    tradeoffs: [
      {
        title: "The city, the tea category and the heritage landscape are different things",
        advice:
          "Pu'er city is not the sole origin of every tea sold as pu-erh, and the UNESCO-recognized Jingmai cultural landscape is not the whole prefecture. Ask where the leaves were grown, where processing happened and which place the itinerary actually visits. A tea-town label can conceal a substantial road journey. Clear geography makes the holiday better and helps distinguish useful provenance information from a sales story.",
      },
      {
        title: "A good tasting teaches a question you can take away",
        advice:
          "Agree the comparison before the visit: raw sheng and ripe shu styles, processing, storage or a clearly explained difference between particular teas. Ripe pu-erh uses an accelerated pile-fermentation process; raw tea and its later aging follow a different path. Do not reduce the subject to darker means older or more expensive means better. A small, explained tasting can be more valuable than many cups with no time for questions or no clarity about what is being served.",
      },
      {
        title: "Old-tree and vintage claims need evidence beyond a forest photograph",
        advice:
          "A walk among tea trees does not authenticate a retail cake's origin, age or storage history. If buying matters, ask for clear product identification, quantity, price basis and any available provenance rather than treating the guide as a certification service. Age, rarity and investment narratives should not be the reason to feel pressured to purchase. The visit fee and any buying commission or expectation should be transparent before the session.",
      },
      {
        title: "Field work, processing and village life do not follow a visitor timetable",
        advice:
          "Harvest and production vary with season, weather and the producer's work. Confirm what you can observe and whether participation is genuinely offered, rather than promising leaf picking or tea making throughout the year. A working household, public lane and visitor venue have different boundaries. A meaningful encounter can be a thoughtful conversation or tasting; it need not claim exclusive access or ask residents to perform everyday life for a camera.",
      },
      {
        title: "Jingmai deserves its own arrival decision",
        advice:
          "Compare the actual road journey from Simao with another suitable gateway for the mountain. Pu'er Simao Airport and Lancang Jingmai Airport serve different locations, and a train to Pu'er does not end at the Jingmai tea forests. A direct-looking line on a map can involve winding rural roads. Choose the gateway around the selected village and room, not the marketing prominence of the prefecture's name.",
      },
      {
        title: "Coffee can add contrast without becoming another generic plantation stop",
        advice:
          "The Pu'er area also offers coffee interests, but a cafe tasting, farm walk, processing explanation and harvest participation are different visits. Choose a confirmed host and a topic that adds something distinct to the tea chapter. A good tasting can be worthwhile without a farm visit, and a farm visit need not include production in every season. Discuss caffeine preferences and avoid presenting either drink as a detox or health treatment.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "lancang",
        advice:
          "Lancang County adds a different base decision and selected Lahu cultural interests, including a properly arranged Laodabao visit. It is not Simao city or another name for Jingmai Mountain. Compare the complete road, actual room and confirmed cultural purpose before adding county-town nights.",
      },
      {
        slug: "jingmai-mountain",
        advice:
          "Use the Jingmai Mountain guide for a separate village base, permitted tea-forest walking and a confirmed host. Simao city and the mountain are not interchangeable hotel areas. Choose the actual gateway, complete road transfer and useful nights; heritage recognition does not authenticate a tea purchase.",
      },
      {
        slug: "xishuangbanna",
        advice:
          "Xishuangbanna adds tropical plant interests, Jinghong city and a distinct Dai cultural setting. Compare the complete connection from the actual Pu'er base: Simao city and Jingmai Mountain are different departure plans. Keep the botanical outing and resort time useful rather than using the southern Yunnan label to compress both destinations into short transfer stops.",
      },
      {
        slug: "kunming",
        advice:
          "Kunming can provide a city introduction and a useful transport connection. Compare the ticketed arrival with the final drive to the Pu'er base or Jingmai village. Keep the city stay and tea-country days distinct; a train time to Pu'er does not describe the complete mountain journey.",
      },
      {
        slug: "shaxi",
        advice:
          "Shaxi adds market-town and Tea Horse Road context in a different part of Yunnan. It is not close to Jingmai and does not guarantee a producer visit merely because tea trading is part of its history. Combine the destinations only with enough time and a clear reason for both, keeping the northern published itinerary separate from this southern extension.",
      },
      {
        slug: "jianshui",
        advice:
          "Jianshui offers courtyards, Confucian heritage and purple pottery as a separate southern Yunnan interest. Compare the complete transport sequence rather than treating every southern destination as an easy road loop. Distinct cultural hosts and enough nights should justify the connection, not simply the chance to add another name.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose dates around the experience rather than an all-year tea-harvesting promise. Tea field activity and processing follow local conditions and the host's work; coffee has its own agricultural rhythm. Drier periods can be useful for rural roads and village walking, while the wetter season needs flexibility for rain, humidity and slippery paths. City, forest and mountain properties can feel different on the same day. Mist and clear views are weather-dependent, and a spring travel date does not establish access to every working tea plot.",
    orientation:
      "Pu'er's urban center is in Simao, while the prefecture extends across a much larger part of southern Yunnan. Jingmai Mountain is in Lancang County, not an outer neighborhood of the city. Wengji and Nuogan belong to specific village plans within that mountain chapter. A tea label, an airport name and a booking-platform destination can all use Pu'er while referring to different locations. Use the Chinese address and exact host location before fixing the gateway or overnight base.",
    experiences: [
      "Learn a clear tea topic through a well-explained tasting or confirmed production encounter",
      "Choose a worthwhile countryside stay with an honest account of its room, roads and walking",
      "Give Jingmai's village and old tea-forest landscape its own time when it is the real purpose of the journey",
    ],
    planningNotes: [
      "Distinguish Simao city, the wider prefecture, the tea category and the specific Jingmai landscape",
      "Confirm the host, topic, language, season and purchase expectations before describing a tea visit",
      "Match the gateway and hotel to the actual village or producer rather than the destination label",
    ],
    arrival:
      "Pu'er railway station serves the city-area gateway, while Pu'er Simao Airport uses code SYM. Lancang Jingmai Airport, code JMJ, is a different airport and may be relevant to a Jingmai-focused plan when services fit. None of these names removes the final road journey. Check the current flight or train, luggage, Chinese property address and road approach before deciding. Do not buy a city arrival on the assumption that every tea mountain is nearby.",
    gettingAround:
      "Use planned transfers for the selected host and village routes, with a practical meal stop and pickup point. Mountain lanes, tea paths and private working land are not interchangeable public roads. A guide can explain the subject and help communicate, but specialist knowledge and producer access need to be confirmed rather than inferred from a private-tour label. Leave a slower property day unfilled when another long transfer would add little.",
    stayStrategy:
      "For three or four nights, start with one coherent base and a genuine subject. A city stay can serve a strong tasting or processing interest; a countryside hotel can make rest part of the trip; Jingmai needs a location-specific mountain plan. Compare the exact room, temperature and humidity comfort, bathroom, quietness, meals and luggage access. Move bases only when the second chapter is meaningfully different and enough useful time remains after the journey.",
    firstTimerNote:
      "You do not need to be a tea collector to enjoy Pu'er. A good first visit leaves you understanding what you tasted, how it was made and why the place matters, without pressure to buy. Choose one well-prepared encounter and a stay you will enjoy. For an experienced enthusiast, specify the questions and expertise needed so the visit offers more than the same introductory shop tasting repeated at several addresses.",
    faqs: [
      {
        question: "Is Pu'er a city or a type of tea?",
        answer:
          "The name is used for a prefecture-level area in Yunnan and is associated with a tea category. The urban center is in Simao. Pu-erh tea is also produced elsewhere in Yunnan, so a tea label does not identify the farm, processing location or travel route by itself.",
      },
      {
        question: "How many nights should I spend in Pu'er?",
        answer:
          "Three nights give two full days for one coherent base and a selected tea, coffee or landscape interest. Four nights allow more depth or schedule flexibility. Combining city-area Pu'er with Jingmai requires the full transfer and usable time in both, rather than assuming the mountain is a nearby city excursion.",
      },
      {
        question: "Is Jingmai Mountain close to Pu'er city hotels?",
        answer:
          "Jingmai is in Lancang County in a different part of the prefecture, not an outer neighborhood of Simao. Compare the complete road journey and the selected village before choosing a city hotel or gateway. A train to Pu'er does not place you beside the old tea forests.",
      },
      {
        question: "What is the difference between sheng and shu pu-erh?",
        answer:
          "They describe raw and ripe styles with different processing and aging paths. Ripe shu uses an accelerated pile-fermentation process. A useful tasting explains the specific teas, processing and storage rather than treating darker color as proof of greater age or higher quality.",
      },
      {
        question: "Can I pick leaves or make tea during a visit?",
        answer:
          "Only when the season, producer's work and a confirmed arrangement support it. Tasting, field observation, production viewing and hands-on participation are different services. Do not assume an all-year tea visit includes harvesting or access to working equipment.",
      },
      {
        question: "Does a tea tasting require buying tea?",
        answer:
          "The visit fee, purchase expectations and any commercial relationship should be clear in advance. A learning session should not depend on pressure to buy. If you choose to purchase, ask about the product, quantity, price and available provenance; a forest visit does not authenticate every retail claim.",
      },
      {
        question: "Is all of Pu'er a UNESCO World Heritage site?",
        answer:
          "No. The recognized Cultural Landscape of Old Tea Forests of the Jingmai Mountain in Pu'er is a specific heritage property. The designation does not cover the entire prefecture, every tea farm or every product sold under the Pu'er name, and it does not guarantee visitor access everywhere.",
      },
      {
        question: "Which airport is best for Jingmai Mountain?",
        answer:
          "Compare current services and the final road journey from each relevant gateway. Pu'er Simao Airport uses SYM; Lancang Jingmai uses JMJ and serves a different location. The best choice depends on the booked village and room, timing and full transport plan rather than the airport name alone.",
      },
      {
        question: "Can I add coffee to a Pu'er tea trip?",
        answer:
          "A confirmed cafe, farm or processing interest can add contrast when the route and season fit. Agree the topic and host so it is not simply another sales stop. Tasting, farm walking and harvest participation are different experiences, with availability and caffeine preferences discussed separately.",
      },
    ],
    culturalStory: {
      title: "Understand the tea forest as a cultural landscape",
      paragraphs: [
        "Jingmai's importance lies in the relationship between tea, forest, settlements and the communities that maintain the landscape. It is more than a collection of old trees or a backdrop for a tasting. A considered visit explains the selected village and publicly accessible route, with knowledge appropriate to that place. Wengji and Nuogan offer specific village contexts; neither should be reduced to a generic minority-village performance or a guarantee of household access.",
        "Tea landscapes are also working places. The age of a tree, the history of a settlement and the provenance of a retail product are different claims needing different evidence. Respect the grower's work, homes, cultural practices and photography preferences. A thoughtful encounter can be a modest conversation or an explained public walk; depth comes from a clear subject and consent, not a promise that private guiding makes every forest path or kitchen available.",
      ],
    },
    foodStory: {
      title: "Let tea and the table complement one another",
      paragraphs: [
        "Plan tea sessions with water, a sensible meal and enough time between tastings. Explain what is being served and let guests choose how much to drink; familiarity with tea or coffee does not mean everyone wants a full day of repeated caffeine. A small comparison with clear questions can be more memorable than a long sequence of cups. Neither drink needs to be marketed as a health treatment to make the encounter worthwhile.",
        "Southern Yunnan meals can introduce regional vegetables, herbs, rice and suitable meat or fish preparations, but a prefecture label does not specify every community's cuisine. Choose a venue and explain the dishes rather than presenting all food as one uniform ethnic tradition. Check broths, sauces, spice and shared preparation for dietary needs, and confirm dinner arrangements at a remote hotel. A dependable meal supports the rural stay as much as an impressive tea-room photograph.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the base chosen for the real subject",
        description:
          "Use the exact train or airport and allow the final road journey to the city, countryside property or mountain village. Keep dinner and luggage access clear. A late arrival should not carry a compulsory tasting or be described as a full tea-country day.",
      },
      {
        day: "Full day 1",
        title: "One tea encounter with a clear learning purpose",
        description:
          "Meet the confirmed host for the agreed tasting, field or processing subject, with season and work determining what can be observed. Leave time for questions and a proper meal. Keep purchases optional and separate from the educational service.",
      },
      {
        day: "Full day 2",
        title: "A distinct local interest and time at the property",
        description:
          "Choose a public village or landscape route, a different confirmed coffee topic or a slower hotel day according to the base. A Jingmai plan should use its own village geography rather than copy a city-area itinerary. Avoid repeating similar tasting shops simply to fill the day.",
      },
      {
        day: "Departure",
        title: "Continue with the full connection accounted for",
        description:
          "Allow the road approach, luggage and ticketed departure point. More nights can add depth or a separately designed second base. This three-night framework is illustrative, not a published product or a guarantee of seasonal participation, private hosts or access to every tea forest.",
      },
    ],
  },
};
