import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/yixing.svg",
  alt: "Yixing planning schematic comparing Dingshu pottery, a city hotel base and a separate countryside day; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const yixingGuide: ExpandedDestination = {
  id: "yixing",
  name: "Yixing",
  region: "east",
  kicker: "Understand the teapot, then make time for the landscape",
  description:
    "Plan Yixing for zisha teapots, a properly explained pottery visit and Jiangnan countryside, with Dingshu, city hotels and bamboo-area stays clearly distinguished.",
  stay: "2–3 nights for pottery and countryside",
  bestFor: "Tea drinkers, ceramic collectors and slower Jiangnan travel",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["wuxi", "changshu", "liyang", "suzhou", "jingdezhen"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Yixing Travel Guide: Zisha Pottery, Dingshu & Where to Stay",
    seoTitle: "Yixing Travel Guide: Pottery, Dingshu & Stays",
    seoDescription:
      "Plan a Yixing pottery trip: Dingshu or a countryside stay, zisha workshop questions, tea and bamboo choices, transport and a useful 2–3-night itinerary.",
    answer:
      "Yixing (宜兴) is a county-level city within Wuxi in Jiangsu, best known internationally for zisha teapots. Dingshu is the main pottery-town interest, not another name for central Yixing or a single museum. Visit to understand clay, hand-building and the relationship between pot and tea; add countryside time if it interests you. Yixing is especially rewarding for a traveler with a specific craft question. It is a different ceramic destination from Jingdezhen, whose porcelain traditions call for their own route.",
    stayAnswer:
      "Two nights give one full day for a collection and a confirmed pottery visit, with an unhurried evening. Three nights allow a separate bamboo, tea or countryside day. A day excursion can provide an introduction if the complete journey works, but leaves less room for a specialist session. Arriving late and leaving early does not create two days of pottery. Choose the main subject before deciding how many workshops or landscape stops to include.",
    hotelAnswer:
      "Choose Dingshu or a nearby property when several pottery visits are the main purpose; a central Yixing hotel can offer a wider choice of dining and modern room facilities. A countryside stay makes sense when the setting itself deserves time, with the full return journey to Dingshu shown in the proposal. Check the actual room, sleep, heating or cooling, breakfast, dinner and pickup point. A hotel described as a tea retreat is not proof of a tea host, private pottery studio or easy access to all the city's sights.",
    sightseeingQuestion: "Should you choose Yixing pottery, bamboo scenery or a tea visit?",
    sightseeingAnswer:
      "Make pottery the first choice if you want to understand why Yixing matters to tea culture: compare a collection with a real process-focused visit. Choose the bamboo area for a separate landscape day suited to your walking ability. Tea can add a focused conversation about local production and preparation, provided the host and activity are clear. Trying to fit pottery, a cave, bamboo scenery and several tastings into one day usually trades understanding for transport. Keep one principal subject and a worthwhile secondary interest.",
    visitorResources: [
      {
        label: "Yixing municipal government",
        href: "https://www.yixing.gov.cn/",
        scope:
          "Municipal context and public notices, mainly in Chinese. Use the responsible museum, scenic-area operator or host to confirm current admission, exhibitions, classes and access. This background source does not authenticate a pot, guarantee a named maker or establish a private workshop arrangement.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference for the named station and dated service. Yixing station still requires a local transfer to the property, Dingshu or the countryside. Wuxi city and its stations are not interchangeable with arrival in Yixing simply because they share an administrative relationship.",
      },
    ],
    serviceScope:
      "A tailored visit can specify the hotel, railway transfer, museum or public collection, guiding and any confirmed studio activity. Ask for the subject, host, working language, group size, length and degree of participation. Demonstration, guided viewing and making are separate arrangements. If making an object, establish drying, firing, finishing, collection, shipping and responsibility for breakage. A specialist's introduction does not guarantee a famous potter's time, a particular kiln firing or independent authentication of a purchase.",
    routeAdvice:
      "Yixing can add a craft-focused chapter to Suzhou or another Jiangnan route; nearby Liyang offers a different lake-and-bamboo stay. Jingdezhen is a separate porcelain destination, useful for a deeper ceramics comparison when the wider trip allows it. There is no matching published Yixing itinerary recommended here. The illustrative two-night stay with an optional countryside day is a starting point for custom planning, not a bookable workshop package. Request named visits, a sensible base and the full transport plan before adding it to a China itinerary.",
    practicalPlanning: {
      timing:
        "Give the collection and workshop enough time for explanation, questions and a pause. Establish an appointment before committing the day around it, with a public collection or another worthwhile subject as a fallback. A working studio is not necessarily open throughout normal shop hours. On a countryside day, choose the walking route and meal first, then allow the entire return journey rather than treating a landscape stop as a brief detour between trains.",
      walking:
        "A collection may involve standing; pottery streets and working studios can have thresholds, uneven floors and limited seating. Ask about a suitable table, toilet and safe viewing position for a session. Bamboo slopes, cave stairs and lakeside paths have different demands. Transport to a scenic area does not remove the walking inside it. Set the comfortable duration and any stair limit before choosing the site, and keep an easier alternative that still has a clear purpose.",
      cost: "Compare hotel category, full transfers, guide language, admissions and the actual host or class inclusions. A retail stop with an explanation is not equivalent to paid specialist instruction. Clay, firing and overseas shipping may be separate. Keep any purchase outside the experience fee unless an item and its basis are specified. High prices, elaborate certificates, a maker's seal or an accompanying guide do not by themselves prove authorship, clay origin or investment value.",
    },
    attractions: [
      "Dingshu's pottery setting and a selected ceramic collection",
      "A process-focused zisha demonstration or class, only with a confirmed host",
      "Shushan's pottery-town streets as a distinct public walking interest",
      "Yixing Bamboo Sea as a separately planned landscape visit",
      "A local tea subject with production, brewing and buying kept distinct",
      "Shanjuan, Zhanggong or another selected cave, assessed individually for steps and current access",
    ],
    stays: [
      {
        label: "Day excursion: a pottery introduction",
        advice:
          "Use a collection and one coherent Dingshu interest rather than a full circuit of the city. Include both station transfers and a meal when judging useful hours. A short excursion should not promise a long class, countryside walking and shopping as well as a museum visit.",
      },
      {
        label: "2 nights: understand the craft",
        advice:
          "Keep one full day for a collection, a confirmed process-led visit and time to ask questions. Arrival or departure time can support a small additional interest, but should not carry the essential appointment. This is a useful format for tea drinkers who want context without making the whole trip a collecting tour.",
      },
      {
        label: "3 nights: add a separate landscape day",
        advice:
          "Choose bamboo scenery, a suitable cave or a tea-and-countryside subject for the second full day. Keep the route selective and weather-aware. Consider whether staying near that landscape actually improves the trip before adding a hotel move to a short visit.",
      },
    ],
    hotelAreas: [
      {
        name: "Dingshu / pottery-focused base",
        advice:
          "Prioritize the exact visits and evening meal options, not simply a pottery-town address. Check room noise, stairs, the final vehicle approach and whether the property can provide the breakfast and dinner you need. Proximity to shops does not establish access to a working maker or a quiet room.",
      },
      {
        name: "Central Yixing / modern city hotel",
        advice:
          "Consider when room comfort, dining choice and straightforward pickup are more important than staying beside the pottery streets. Show the full journey to Dingshu and the next day's countryside. Confirm the quoted room category, bathroom, climate control and breakfast rather than assuming every room matches the property's best photographs.",
      },
      {
        name: "Bamboo or tea countryside / setting-led stay",
        advice:
          "Choose a named property for a real landscape or retreat interest. Establish dinner, wet-weather options, room-to-restaurant access and the transfer to pottery visits. A secluded setting can mean fewer independent evening choices. The word luxury should describe specific room and service features, not substitute for them.",
      },
    ],
    tradeoffs: [
      {
        title: "Yixing and Jingdezhen answer different ceramic questions",
        advice:
          "Yixing's zisha tradition is closely associated with unglazed stoneware teapots and clay-based construction; Jingdezhen is especially associated with porcelain. Neither description exhausts all local production. Choose Yixing for the relationship between clay, form, lid, handle and tea use. Choose Jingdezhen for a different material and ceramic history. One destination is not a convenient substitute for a particular maker, collection or class in the other.",
      },
      {
        title: "Zisha does not mean every pot is purple, handmade or authenticated",
        advice:
          "The familiar English phrase purple clay is a starting point, not a complete account of clay types or colors. Ask a qualified host to explain the object and the limits of what can be judged during a visit. Hand-building, molding, finishing, authorship and clay provenance are separate questions. A name stamp or sales story is not independent evidence. Enjoy learning without feeling that a meaningful visit must end in buying an expensive pot.",
      },
      {
        title: "Choose an observation visit or a class deliberately",
        advice:
          "Watching a maker assemble a teapot can explain techniques that a short beginner session cannot reproduce. A class may involve a simpler object and require later firing. Neither is inherently better: match the format to attention span, language and interest. Ask what you will actually do, what is included and when an object could be ready. Do not assume a few hours produce a finished, traditionally made teapot suitable for brewing.",
      },
      {
        title: "A countryside day is a separate route, not background scenery",
        advice:
          "Yixing's bamboo areas, tea landscapes and caves occupy different locations and call for different walking plans. Choose the specific subject and entrance rather than promising all of them under a generic countryside heading. Caves can involve stairs, damp surfaces and confined routes; bamboo sightseeing can involve slopes and visitor transport. A scenic-area name does not establish an accessible walk or a quiet trail on your dates.",
      },
      {
        title: "A teapot is not a promise of better tea or a financial return",
        advice:
          "Clay, shape, size, brewing habits and the tea itself all influence how a pot is used. A tasting can compare techniques without claiming one vessel improves every tea. For purchases, agree a budget, item description, receipt and shipping terms; specialist collecting warrants independent advice. Avoid unsupported health, rarity or appreciation claims. An enjoyable cultural visit should remain worthwhile even if you buy nothing.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "wuxi",
        advice:
          "Wuxi city adds Jichang Garden, Huishan and a northern Taihu landscape chapter. It is a separate base from Dingshu and central Yixing despite the shared municipality. Give a pottery appointment its own time and compare the full journey before adding Yuantouzhu or a western Lingshan and Nianhuawan stay. Wuxi and Yixing stations are different gateways.",
      },
      {
        slug: "changshu",
        advice:
          "Changshu offers Yushan, historic gardens and Shanghu as a hill-and-lake chapter distinct from Yixing's pottery interests. Compare the complete journey and actual room move with keeping a slower pace at one base. A garment-business appointment in Changshu and a ceramics visit in Dingshu require different providers, briefs and arrangements.",
      },
      {
        slug: "liyang",
        advice:
          "Liyang adds Tianmu Lake, a different bamboo-area choice and a setting-led countryside stay. Compare its lake and Nanshan bases with Yixing's pottery route before combining them. The two places are not one attraction, and staying in each only makes sense when the nights provide distinct experiences.",
      },
      {
        slug: "suzhou",
        advice:
          "Suzhou adds classical garden design and canal neighborhoods. Give each place a different purpose: garden interpretation in Suzhou, material and making in Yixing. Check the actual stations, luggage and hotel transfers before calling either a short day trip from the other.",
      },
      {
        slug: "jingdezhen",
        advice:
          "Jingdezhen offers a separate porcelain and kiln-history chapter in Jiangxi. It is a more substantial ceramics journey, not another stop in Yixing's pottery district. Add it when your interest and available days justify the complete transfer and its own visits.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for pottery with countryside walks, allowing for rain and busy holidays. Summer can be hot and humid; a collection and a shaded, shorter outdoor route can work better than an ambitious landscape circuit. Winter makes the actual hotel's heating and indoor comfort important. Tea harvesting, studio production and kiln activity follow their own schedules. A green hillside or an open shop does not guarantee a harvest demonstration or a working firing on the day of your visit.",
    orientation:
      "Yixing is within Wuxi's wider administrative area in southern Jiangsu, but has its own city, station and travel decisions. Dingshu is the pottery focus, central Yixing is another hotel and dining base, and the bamboo-and-tea countryside is more spread out. Use the Chinese address and a named venue for each visit. Shushan streets, a ceramic museum, a working studio and a retail showroom are separate places and forms of access, even when all are described as Yixing pottery.",
    experiences: [
      "Read a zisha teapot through clay, construction, form and tea use with appropriate interpretation",
      "Choose a collection and a confirmed demonstration or class for different kinds of learning",
      "Add a separate bamboo or tea landscape day with a comfortable route and a worthwhile meal",
    ],
    planningNotes: [
      "Choose Dingshu, central Yixing or a countryside hotel according to the actual visit addresses",
      "Specify the host, language, participation, firing and shipping terms for a pottery session",
      "Keep buying optional and do not treat a seal, price or certificate as independent authentication",
    ],
    arrival:
      "Use the full ticketed station and the final property address. Yixing station requires a local connection; arriving at a Wuxi or Changzhou station is a different road plan. If continuing from an international airport, include immigration, luggage and the airport-to-station journey rather than comparing only the train segment. Do not place an essential maker appointment immediately after a connection that may run late. Agree a meeting point and a flexible first meal.",
    gettingAround:
      "Keep a pottery day geographically coherent and use planned transport for countryside visits. A vehicle can link venues but cannot enter every historic street or working space. Agree where the guide meets the host, where the car waits and whether there is a seated break. Independent city time can be useful; a remote property may require advance transport for dinner. Review any scenic-area internal transport separately from the transfer that gets you to the entrance.",
    stayStrategy:
      "For two nights, one well-chosen base usually gives more usable time than moving between pottery-town and countryside hotels. With three nights, compare the full road pattern before deciding whether a move earns its packing time. Prioritize sleep, bathroom comfort, breakfast, dinner and the real room rather than a generalized retreat description. A premium stay should support the reason you came: a good host, a comfortable pace or time in the landscape.",
    firstTimerNote:
      "You do not need to collect teapots to enjoy Yixing. Begin with a simple question: how does this object differ from a porcelain teapot, and how is it made and used? A clear demonstration, a well-explained collection and a cup of tea can provide a satisfying introduction. Tell the planner if shopping is not an interest so that the day is built around learning rather than a sequence of showrooms.",
    faqs: [
      {
        question: "Is Yixing worth visiting if I am not buying a teapot?",
        answer:
          "Yes, if you are interested in tea, material or craft. A collection and a process-focused visit can explain the relationship between clay, form and brewing. Keep purchases optional and select an actual learning format rather than assuming every showroom provides specialist interpretation.",
      },
      {
        question: "How many nights should I spend in Yixing?",
        answer:
          "Two nights provide one full day for pottery. Three nights allow a separate bamboo, tea or countryside day. A day trip can give a selected introduction when the complete journey fits. Arrival and departure days should not be counted as full touring days without checking the schedule.",
      },
      {
        question: "Should I stay in Dingshu or central Yixing?",
        answer:
          "Dingshu suits several pottery visits; a central Yixing property may suit modern room comfort and dining choice. Countryside hotels serve a different setting-led stay. Choose by the actual appointments, dinner options, room and complete transfers rather than the city label alone.",
      },
      {
        question: "Is Yixing pottery the same as Jingdezhen porcelain?",
        answer:
          "No. Yixing is especially associated with zisha stoneware teapots, while Jingdezhen is particularly associated with porcelain. Both have broader ceramic production. They offer different material and historical subjects, and are separate destinations requiring their own visits and transport.",
      },
      {
        question: "Can I make a Yixing teapot in a short workshop?",
        answer:
          "Ask the provider exactly what a beginner can make. A short session may use a simpler object or technique, and firing usually requires later arrangements. Demonstration, hands-on participation and a finished usable teapot are different outcomes. Confirm materials, firing, collection and shipping before booking.",
      },
      {
        question: "Does a stamp prove a zisha teapot is authentic?",
        answer:
          "A stamp alone does not independently prove maker, material, age or value. Ask for the item's description and receipt, and seek independent specialist advice for collecting. A guided visit or a high price should not be presented as authentication or an investment guarantee.",
      },
      {
        question: "Can I visit Yixing Bamboo Sea on the pottery day?",
        answer:
          "Only if the full route leaves useful time for both interests. It is a separate scenic visit with its own walking and current visitor transport. A third night often allows a better countryside day than adding a brief landscape stop to a full pottery program.",
      },
      {
        question: "Can I combine Yixing and Liyang?",
        answer:
          "Yes, when pottery in Yixing and a lake or countryside stay in Liyang have distinct purposes. Compare the actual hotel locations and full transfer. Avoid moving hotels simply to see two similar bamboo attractions when one better-planned outing would meet your interests.",
      },
    ],
    culturalStory: {
      title: "A small teapot can sustain a serious conversation",
      paragraphs: [
        "Yixing rewards looking closely. The join between lid and body, the position of handle and spout, the thickness of a wall and the treatment of a surface can become questions about skill and use. A process-led visit makes those details legible, especially when it distinguishes what a beginner can try from work requiring sustained practice. The purpose is to understand an object, not to infer quality from a famous signature or an extravagant story.",
        "Dingshu is also a working place with production, commerce and everyday life. A public street, collection and invited studio each offer a different view. Respect photography and handling requests, and agree whether sales form part of a host's appointment. A rewarding visit can connect craft to tea habits while leaving room for questions and disagreement; it does not need a promise of secret clay, exclusive lineage access or a compulsory purchase.",
      ],
    },
    foodStory: {
      title: "Give tea and the countryside meal different roles",
      paragraphs: [
        "A tea session can focus on brewing choices and the vessel, while lunch provides a proper pause rather than another sales presentation. A countryside meal might introduce bamboo shoots or other seasonal vegetables alongside suitable fish, tofu or meat dishes. Availability and preparation matter more than treating every regional ingredient as compulsory. Wumi, the dark rice preparation associated with the wider region, is a possible subject when a suitable kitchen can explain what it is serving.",
        "Clarify stocks, sauces, nuts and shared preparation for dietary requirements. A vegetable dish is not automatically vegetarian, and a tea tasting is not a meal. Ask how portions and prices are set, especially for whole fish or a larger shared dish. If staying away from town, arrange dinner before arrival and establish an alternative rather than assuming a remote retreat has an extensive all-day kitchen.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the base that serves the visit",
        description:
          "Transfer from the named station to the booked room. Add a short pottery-town or city introduction only if arrival allows, with an easy meal. Keep the essential host appointment for the full day rather than risking it on a delayed connection.",
      },
      {
        day: "Full day",
        title: "Understand zisha through a collection and a real process",
        description:
          "Begin with a selected collection or explained introduction, then a confirmed demonstration or class with a defined subject. Leave time for questions, a seated meal and optional browsing. Keep buying separate from the value of the visit, with firing and shipping terms clear if making an object.",
      },
      {
        day: "Optional second full day",
        title: "Choose one countryside interest",
        description:
          "Use a third night for bamboo scenery, a suitable cave or a properly arranged tea subject. Select the entrance, walking demands and meal before adding another site. A quiet hotel afternoon can be a better choice than duplicating a similar landscape in neighboring Liyang.",
      },
      {
        day: "Departure",
        title: "Continue to a genuinely different chapter",
        description:
          "Allow the full station transfer or continue to a separately planned Liyang stay. Suzhou and Jingdezhen offer different garden and ceramic subjects with their own travel days. This two-night outline with an optional third night is illustrative, not a published product or promise of a particular maker.",
      },
    ],
  },
};
