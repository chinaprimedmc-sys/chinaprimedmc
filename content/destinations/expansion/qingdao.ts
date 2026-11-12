import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/qingdao.svg",
  alt: "Qingdao planning diagram comparing historic western Shinan, the modern eastern waterfront and a separate Laoshan landscape stay; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const qingdaoGuide: ExpandedDestination = {
  id: "qingdao",
  name: "Qingdao",
  region: "east",
  kicker: "Coastal streets, architectural layers & a slower Shandong finish",
  description:
    "Plan Qingdao for well-chosen coastal walks, historical context and a comfortable hotel, with clear choices between the old city, modern waterfront and a separate Laoshan excursion.",
  stay: "3–4 nights",
  bestFor: "Coastal city stays, architecture and regional food",
  interests: ["city", "heritage", "landscape", "food"],
  relatedDestinationIds: ["jinan", "tianjin", "shanghai"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Qingdao Travel Guide: Old City, Coast & Where to Stay",
    seoTitle: "Qingdao Travel Guide: Coast & Where to Stay",
    seoDescription:
      "Plan Qingdao with old-city vs modern-waterfront hotel advice, Badaguan walks, Laoshan choices, Tsingtao beer context, beaches and exact station transfers.",
    answer:
      "Qingdao (青岛), also known by the older English spelling Tsingtao, is a coastal city in Shandong on the Yellow Sea. Visit for the contrast between hillside streets, historical architecture, a modern waterfront and seafood traditions. Badaguan offers a different residential and coastal setting from the old center around Zhongshan Road, while Laoshan is a separate mountain-and-coast interest east of the central city. Qingdao works well as a coastal city stay with time to walk, eat and enjoy a hotel. A sea view alone does not make every property a beach resort or establish suitable swimming conditions.",
    stayAnswer:
      "Three nights usually give two full days for a selected old-city introduction and a separate coastal or cultural day. Four nights add a useful Laoshan day or more time at the hotel without compressing the city. Two nights suit a focused one-day introduction. If beach time is a main reason for coming, plan around the season, the actual bathing area and your hotel's relationship to it, with a weather alternative. A mountain excursion, festival visit or wider Shandong route needs additional time rather than being assumed within every short stay.",
    hotelAnswer:
      "Compare western Shinan around the historic center for street character, selected Badaguan-area properties for a different architectural and coastal setting, and the modern eastern waterfront around May Fourth Square for a particular full-service hotel. These are different addresses and daily routes, not one continuous convenient hotel zone. Choose Laoshan or another outlying coastal property for its actual landscape and facilities, accepting the city transfer. For a premium stay, verify the room's outlook, quietness, bathroom, temperature control, dining and usable waterfront access instead of buying a sea-view label alone.",
    sightseeingQuestion: "Should you choose an old-city day or a Laoshan excursion?",
    sightseeingAnswer:
      "Choose the old city for architecture, streets, the Zhanqiao waterfront context and an explanation of Qingdao's changing history. Choose Laoshan for a particular mountain-and-coast route, with its own road journey, ticketing, weather and walking demands. Laoshan has different visitor areas, including Taiqing, Yangkou and Jufeng; they should not be treated as one short interchangeable circuit. On a two-full-day visit, protect a meaningful city day before adding the mountain. With another full day, choose the Laoshan route that matches your interests and physical ability.",
    visitorResources: [
      {
        label: "Qingdao municipal government",
        href: "https://www.qingdao.gov.cn/",
        scope:
          "Municipal background and public information. Confirm current heritage-building access, beach notices, Laoshan routes, festival venues and hotel services with the relevant operator for your date.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Check the actual date, train and full station names, including Qingdao versus Qingdao North; scheduled rail duration does not include either hotel transfer.",
      },
    ],
    serviceScope:
      "A tailored Qingdao proposal can specify the hotel and room, selected neighborhood and waterfront walks, guiding, road transfers and named admissions. A Laoshan visit needs its exact area, visitor transport and remaining walking described separately. Brewery-museum visits, tastings, boat trips, festival activities and hosted meals are included only when identified and available. Share mobility needs, seafood or other allergies, and the importance of beach time before choosing the hotel and daily sequence.",
    routeAdvice:
      "Qingdao can provide a coastal chapter after Jinan's springs and inland city life, or a distinct stay alongside Tianjin or Shanghai. Select it for the coast, architecture and the time you want in the hotel, not simply as another port city to tick off. There is no matching published Qingdao product recommended here. Use the outline below to discuss a tailored stay and compare the actual station or flight connection, luggage, final road transfer and usable days before choosing the order.",
    practicalPlanning: {
      timing:
        "Give the old-city streets and selected waterfront their own area-based sequence. Put Badaguan or a museum on another useful window rather than repeatedly crossing the coast to collect viewpoints. A Laoshan day needs the actual route and visitor arrangements before a dinner or onward train can be timed. Protect unstructured hotel time when a good coastal room is part of the reason for staying.",
      walking:
        "The old city's hills, steps and sloping streets can be tiring despite short map distances. Badaguan and waterfront walks also add length, road crossings and exposure to weather. Select a manageable segment and pickup point. Laoshan routes vary substantially: a cable car or shuttle, when operating, does not remove every stair or uneven section. Review the exact area and route for knees, balance, wheelchair use or discomfort with heights.",
      cost: "Compare the actual room and view category, breakfast, road hours, guiding, named admissions and chosen transport. Laoshan area tickets and internal transport, a brewery-museum visit, tastings, festival activities and boat trips should be separate listed choices where applicable. A higher coastal room rate only adds value when its view, facilities and time there suit the trip. Do not infer private beach rights, swimming supervision or festival access from a hotel photograph.",
    },
    attractions: [
      "Historic streets around Zhongshan Road and selected architectural sites",
      "Zhanqiao waterfront and a manageable old-city coastal section",
      "Badaguan architectural neighborhood",
      "May Fourth Square and the modern waterfront",
      "Tsingtao beer history through a separately selected museum visit",
      "Laoshan on a named visitor route",
    ],
    stays: [
      {
        label: "2 nights: one full city day",
        advice:
          "Choose an old-city and coastal introduction with a good meal. Keep arrival and departure realistic, and avoid promising Laoshan, every beach and the brewery museum in the same full day. A useful short stay needs a clear focus.",
      },
      {
        label: "3 nights: two different city days",
        advice:
          "Separate old-city history from a Badaguan, waterfront or cultural interest, leaving time to enjoy the hotel. This is a useful first visit when coastal atmosphere matters more than completing a mountain excursion. Decide whether a museum or tasting adds something for the actual group.",
      },
      {
        label: "4 nights or more: add Laoshan or slow down",
        advice:
          "Give a named Laoshan route its own day, or retain another coastal and hotel day. A family wanting actual bathing time should check the selected beach and season, with an alternative for unsuitable conditions. Extra nights provide flexibility, not a guarantee of sunshine, warm water or every activity operating.",
      },
    ],
    hotelAreas: [
      {
        name: "Western Shinan and the historic center",
        advice:
          "Choose for neighborhood walks, particular architectural settings and access to the old-city waterfront. Review hills, luggage access, sound insulation and the exact room. A heritage-style address does not prove an original building, a lift or convenient vehicle pickup; a charming exterior and comfortable sleep need separate checks.",
      },
      {
        name: "Badaguan and nearby coastal addresses",
        advice:
          "Consider a specific property for its room, leafy setting and chosen walking route. Check public road access, dining, steps and how the booked room relates to the water. This is not a promise that every villa is a hotel or that a hotel stay allows entry into neighboring historical houses.",
      },
      {
        name: "Modern eastern waterfront and May Fourth Square surroundings",
        advice:
          "A starting point for comparing full-service hotels, modern dining and a particular skyline or water view. Assess the actual coast access, room orientation, noise and drive to historical streets. A business district can provide excellent comfort without being the closest base for every old-city visit.",
      },
      {
        name: "Laoshan or other outlying coastal properties",
        advice:
          "Choose the landscape and hotel as a deliberate part of the holiday. Review facilities, meals, season, road access and time away from the center. A large district name or sea photograph does not establish direct beach access, suitable swimming or proximity to your chosen Laoshan entrance.",
      },
    ],
    tradeoffs: [
      {
        title: "A coastal walk and a beach holiday have different requirements",
        advice:
          "Seafront paths, viewpoints, rocky shores and designated bathing beaches offer different experiences. Choose the exact beach and season if swimming matters, then follow local safety notices and conditions. A pleasant promenade is worthwhile without entering the water. Keep an indoor or city alternative instead of making a whole stay depend on a beach photograph taken in different weather.",
      },
      {
        title: "Choose a Laoshan area before choosing the transport",
        advice:
          "Taiqing, Yangkou and Jufeng emphasize different combinations of coastal scenery, temple interest and mountain terrain. Establish the accessible route, steps, entrance and finish before adding cable cars or shuttles. They are not one automatically combined ticket-and-walk experience. Weather or operation may change the useful choice, and a private road vehicle does not provide unrestricted driving through every visitor zone.",
      },
      {
        title: "Beer history, a tasting and a festival are separate experiences",
        advice:
          "The Tsingtao name connects beer with the city's international trading history. A museum visit can explain production and branding without promising a private tour of all working brewery areas. A tasting has its own contents and suitability; a beer festival has date-specific venues and arrangements. Do not choose travel dates from an assumed annual festival window or treat every visit as an alcohol-focused outing.",
      },
      {
        title: "Historical buildings need more than a European-style label",
        advice:
          "The old city's German colonial period is part of a wider history that includes later Japanese control and Chinese urban change. Distinguish original fabric, restoration and current use where evidence permits. A church, former residence, museum and occupied building have different visitor rules. Plan good exterior interpretation, adding interiors only when their actual access and subject justify the time.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "jinan",
        advice:
          "Jinan adds spring-fed lanes, a lake landscape and inland Shandong context. Compare two distinct city interests, then allow separate nights and the exact railway connection. Retain real sightseeing days rather than using both cities only as station stops.",
      },
      {
        slug: "tianjin",
        advice:
          "Tianjin offers a different river-trade and former-concession story rather than another version of Qingdao's seaside stay. Choose both when that comparison interests you and the travel time fits. Confirm the actual station pair and hotel transfers; port-city status does not establish a convenient passenger-boat connection.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai can add an international gateway and a different urban scale, with neighborhoods and riverfront history of its own. Compare the complete flight or rail journey before setting the order. A Qingdao coastal hotel and a Shanghai city stay serve different purposes and each needs usable time.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring and autumn often suit architectural and coastal walks, with wind, fog or rain still possible. Summer is a popular coastal season and can bring humid weather, crowds and higher demand for particular rooms. Sea temperature and conditions do not follow the same pattern as a comfortable air temperature. Winter can be cold and windy by the water; choose a hotel and indoor interests that work for that season. Festival dates, venues and blossoms are separate date-specific questions, not guaranteed parts of every visit.",
    orientation:
      "Qingdao's visitor interests extend along a broad coast and into different districts. The historic western part of Shinan, Badaguan and the modern waterfront are distinct areas. Laoshan lies farther east with several possible visitor approaches, while the airport and Qingdao North station create other journeys. Plan the city by real addresses and sections of coast rather than imagining every attraction lies on one compact seaside promenade.",
    experiences: [
      "Explore selected hillside streets with the city's historical layers and building uses explained",
      "Enjoy a manageable Badaguan or waterfront walk with time for a seated meal and the hotel",
      "Choose a named Laoshan route or a focused food-and-culture interest as a distinct additional day",
    ],
    planningNotes: [
      "Distinguish Qingdao and Qingdao North stations and confirm Jiaodong Airport for flights",
      "Choose the exact hotel room, coast access and travel purpose before treating a sea view as a resort stay",
      "Review Laoshan areas, beach conditions and festival arrangements as separate choices",
    ],
    arrival:
      "Qingdao Jiaodong International Airport uses code TAO; older references to Liuting Airport do not identify the current commercial passenger airport. Qingdao railway station and Qingdao North are different gateways. Use the exact ticket, terminal where relevant and actual hotel address for pickup. Include the airport or station road transfer, luggage and boarding when comparing a rail journey with a flight. An early departure can affect the final-night hotel choice.",
    gettingAround:
      "Use road transfers between districts and selected walks within them. The metro can work for independent city time, with station walking and luggage considered. Hills and road crossings mean a short old-city map route can still be tiring. Agree the end point and pickup before walking along the coast, and establish Laoshan's actual visitor transport separately from the private road service.",
    stayStrategy:
      "Three nights create two full days for city and coast; four nights add a separate mountain or slower hotel day. Use one base for a short stay unless another property has a clear landscape purpose. Compare room view, quiet sleep, bathroom, temperature control, dining and the route to the actual shoreline. The right high-end stay may be a comfortable city hotel with planned coastal time, or an outlying property you genuinely want to use; let the holiday's purpose decide.",
    firstTimerNote:
      "Qingdao is most rewarding when the city and the coast are allowed to coexist. A few well-explained streets, a selected waterfront and a good meal can form a satisfying day without a mountain, every beach and a brewery visit. Choose how much history, scenery and hotel time you want. That decision makes the stay feel deliberate rather than a sequence of taxi rides between distant photo points.",
    faqs: [
      {
        question: "Is Qingdao worth visiting on a China trip?",
        answer:
          "Yes for travelers who want coastal city life, historical architecture and regional food, with time to enjoy a good hotel. It is a specific choice rather than essential to every first trip. Include it when the coast and city interests justify a separate stay and the full transport route fits.",
      },
      {
        question: "How many days do you need in Qingdao?",
        answer:
          "Two full days, usually with three nights, allow an old-city introduction and a different coastal or cultural day. Four nights add a full Laoshan day or a slower hotel stay. Two nights require a focused one-day plan, while actual beach time needs a season- and location-specific decision.",
      },
      {
        question: "Where should I stay in Qingdao for a first visit?",
        answer:
          "Compare the historic western Shinan area, a specific Badaguan-area property and the modern eastern waterfront around May Fourth Square. Choose by the actual room, hills, evening meals and daily transfers. An outlying Laoshan hotel serves a different landscape purpose and should not be assumed equally convenient for old-city touring.",
      },
      {
        question: "Are Qingdao and Tsingtao the same place?",
        answer:
          "Yes. Tsingtao is an older English spelling retained prominently in the beer brand. Qingdao is the modern city name for travel planning. The name alone does not indicate a brewery booking, tasting or beer festival admission.",
      },
      {
        question: "Can I swim in Qingdao?",
        answer:
          "Swimming depends on the selected bathing area, season, conditions and current local safety instructions. Not every waterfront, rocky shore or hotel sea view provides suitable water access. Choose the beach and arrangements deliberately, and keep another activity for unsuitable weather or sea conditions.",
      },
      {
        question: "Can you visit Laoshan without a strenuous hike?",
        answer:
          "A shorter visit may be possible on a suitable named route, but the actual area, steps, visitor transport and open paths need review. Taiqing, Yangkou and Jufeng offer different choices. A cable car or shuttle does not guarantee step-free access to every temple or viewpoint.",
      },
      {
        question: "Which airport and railway station serve Qingdao?",
        answer:
          "Commercial passenger flights use Qingdao Jiaodong International Airport, code TAO. Qingdao railway station and Qingdao North are different stations. Match pickup to the exact ticket and hotel address. Older Liuting airport references should not be used as current arrival instructions.",
      },
      {
        question: "Does a Tsingtao brewery visit include the Qingdao Beer Festival?",
        answer:
          "No. A brewery-museum visit, any included tasting and a festival are different activities. Check the actual venue, date, entry and service for each. Festival programming and locations are date-specific and should not be assumed from the city or beer brand name.",
      },
      {
        question: "What should I eat in Qingdao if I do not drink beer?",
        answer:
          "Beer is optional. A seated meal can focus on selected seafood, vegetables, noodles or dumplings according to your preferences. Seafood fillings and stocks can appear in dishes whose English names sound simple; discuss shellfish, fish, wheat, soy, sesame and shared preparation where relevant. A good Qingdao visit does not require an alcohol-centered itinerary.",
      },
    ],
    culturalStory: {
      title: "Read the buildings within a changing coastal city",
      paragraphs: [
        "Qingdao's historical streets are more than an attractive collection of red roofs. Building types, street gradients and their relationship with the harbor help explain the city's development. The German colonial period needs its own context, alongside later Japanese control and Chinese urban life. Look at a few buildings carefully, asking about original use, alteration and present function instead of treating every European-looking facade as the same historical object.",
        "Badaguan and the modern waterfront add different urban chapters. A residential landscape, a religious building, a former official residence and a contemporary public square should not be given one generic old-town narrative. Some places reward exterior interpretation; others justify a separately confirmed interior visit. The point is to understand the city's layers while enjoying the coast, rather than turn a living city into a colonial-era theme park.",
      ],
    },
    foodStory: {
      title: "Choose the seafood and the setting, with beer optional",
      paragraphs: [
        "Qingdao's coastal identity makes seafood a natural interest, but the best meal starts with what the group actually enjoys. Choose species, preparation, portion and price basis before ordering, especially where food is selected by weight or from a display. Cooked dishes, vegetables, wheat foods and dumplings can make a balanced meal. A sea view is an enjoyable addition, not evidence of better cooking or clearer billing.",
        "Tsingtao beer can be explored as part of the city's food and trading history without making alcohol central to the holiday. Clarify what a tasting includes and offer an equally useful meal for guests who do not drink. Fish or shellfish stocks, fillings, sauces and shared preparation matter for dietary requirements. Tell the restaurant about strict allergies and restrictions before settling on a venue, rather than relying on an English dish name alone.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the chosen coast-and-city base",
        description:
          "Transfer from Jiaodong Airport or the named railway station. Keep dinner convenient and add a short nearby waterfront or neighborhood walk only when the actual arrival and weather allow.",
      },
      {
        day: "Full day 1",
        title: "Historical streets and a selected old-city shore",
        description:
          "Follow a manageable architectural route with context and breaks, then choose a waterfront section and lunch. Add one interior visit only when it is open and contributes a useful subject; avoid filling the day with repeated crossings to distant coast points.",
      },
      {
        day: "Full day 2",
        title: "Badaguan, a cultural choice and time to stay",
        description:
          "Choose a shorter Badaguan or other coastal walk, with a museum, beer-history visit or seated regional meal matched to the group. Retain time for the hotel. Beach use depends on the selected location and conditions rather than being an automatic included activity.",
      },
      {
        day: "Optional extra full day",
        title: "A named Laoshan route or a slower coast day",
        description:
          "Set the actual Laoshan visitor area, walking and transport before departing, or use the day for a gentler coastal stay. This extra day normally needs another night. It is not a guarantee that every mountain route, boat or bathing area will be available.",
      },
      {
        day: "Departure",
        title: "Continue with the complete connection arranged",
        description:
          "Allow the actual airport or station transfer before continuing to Jinan, Tianjin, Shanghai or another planned destination. This is an illustrative stay, not a published package or a promise that every optional visit is included.",
      },
    ],
  },
};
