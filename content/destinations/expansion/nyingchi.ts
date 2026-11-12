import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/nyingchi.svg",
  alt: "Nyingchi planning schematic comparing Bayi city comfort, a selected valley or forest chapter and the complete onward altitude profile; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const nyingchiGuide: ExpandedDestination = {
  id: "nyingchi",
  name: "Nyingchi",
  region: "southwest",
  kicker: "Choose the valley, the overnight and the pace",
  description:
    "Plan Nyingchi around Bayi, selected forest and valley stays, Basum Tso or the canyon area, with clear altitude, seasonal, airport and Tibet travel-arrangement advice.",
  stay: "3–5 nights for a selective regional stay",
  bestFor: "Valley landscapes, forest stays and slower Tibet itineraries",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["bomi", "lhasa", "shangri-la"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Nyingchi Travel Guide: Valleys, Altitude & Where to Stay",
    seoTitle: "Nyingchi Travel Guide: Valleys, Altitude & Stays",
    seoDescription:
      "Choose a Nyingchi base in Bayi or a specific valley, with Lulang, Basum Tso, canyon and Bomi tradeoffs, altitude questions and realistic Tibet planning.",
    answer:
      "Nyingchi (林芝), also written Linzhi, is a prefecture-level city in eastern Tibet Autonomous Region with a much wider travel geography than its urban center at Bayi. Bayi is around 3,000 meters above sea level: lower than Lhasa, but still at substantial altitude. Forests, river valleys, Basum Tso, Lulang, the canyon area and Bomi form different routes and overnight decisions. Choose one or two actual interests, then the property and complete elevation profile. Nyingchi is not a single low-altitude resort or a guarantee of mountain views, easy access or acclimatization.",
    stayAnswer:
      "Three nights can support one clear regional focus when arrival and departure work. Four or five nights allow a second distinct chapter or a slower pace with actual usable time at each base. A wider route through several counties may need more nights and careful road planning. Do not attempt Bayi, Basum Tso, Lulang, the canyon and Bomi as if they were neighboring attractions. Time spent on a scenic road still counts as travel, and a particular number of nights does not guarantee readiness for a higher onward stay.",
    hotelAnswer:
      "Choose Bayi for a specific city hotel, meals and practical services when those support the route. Choose a named Lulang, Basum Tso, canyon-area or Bomi property only when that setting deserves its own time and the actual room meets the group's needs. Check sleeping elevation, road approach, bathroom, heating, hot water, dinner and current operation. A view of a forest or peak does not establish comfort or visibility. An oxygen-equipped room is not medical care, and a hotel marketed under Nyingchi may be far from the valley you intend to visit.",
    sightseeingQuestion: "Should you choose Bayi, Lulang, Basum Tso, the canyon area or Bomi?",
    sightseeingAnswer:
      "Use Bayi as an urban base or selected local chapter, not as a compulsory return point after every distant outing. Choose Lulang for a defined forest-and-valley stay; Basum Tso, also called Basongcuo, for a separate lake landscape; the Yarlung Tsangpo Grand Canyon visitor area for its particular route and possible mountain views; or Bomi for a longer eastern chapter. These are different places, not alternative entrances to one park. Select by actual interest, season, road burden, hotel quality and physical demands rather than by how many famous photographs can be named.",
    visitorResources: [
      {
        label: "Nyingchi municipal government",
        href: "https://www.linzhi.gov.cn/",
        scope:
          "Municipal context and public notices, mainly in Chinese. Nyingchi covers a wider area than Bayi. Confirm current roads, site arrangements, seasonal access and individual properties with the responsible parties; the city name does not establish that every county or valley is included in an approved trip.",
      },
      {
        label: "Tibet Autonomous Region government",
        href: "https://www.xizang.gov.cn/",
        scope:
          "Regional public information and official notices. Review current traveler eligibility, organized Tibet arrangements and any route-specific requirements for the intended dates. This reference does not constitute permit approval, hotel confirmation or access to every road and border-area destination.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel and altitude illness",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General background on altitude and ascent, not individual medical advice. Discuss the actual sleeping elevations, higher roads and personal health with a qualified clinician. Lower than Lhasa does not mean risk-free, and hotel oxygen or a private vehicle does not establish medical suitability.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway reference for the full dated service and station. A Nyingchi rail arrival still requires a transfer to the actual base; a ticket does not replace Tibet authorization. Compare the complete route and elevation profile rather than assuming the railway provides access to every valley or suitable acclimatization.",
      },
    ],
    serviceScope:
      "A tailored proposal can specify the property and actual room, gateway, full road days, guiding, selected visitor routes, admissions and meals. Foreign passport holders generally need organized Tibet travel arrangements and a Tibet Travel Permit in addition to valid China entry permission; exact requirements depend on documents, dates and itinerary and need current confirmation. Name the responsible operator, approvals, outstanding conditions and any additional route arrangements. Village hosting, scenic activities and access beyond public routes must be separately agreed. A private vehicle does not authorize every road or remove altitude, weather and physical demands.",
    routeAdvice:
      "Nyingchi can be a focused valley-and-forest stay or a separately planned chapter before or after Lhasa. Starting at a lower sleeping elevation may be worth discussing, but the actual ascent profile and clinician's advice matter more than a broad regional label. Shangri-La is a different destination in Yunnan, not a local Nyingchi extension or a substitute set of Tibet arrangements. No matching published Nyingchi product is recommended here. Request a tailored route around one or two actual bases, using the illustrative three-night outline rather than a promise to cover every valley in eastern Tibet.",
    practicalPlanning: {
      timing:
        "Keep arrival light and protect usable time at the chosen property. Compare the whole road day, including visitor procedures, internal transport, meals and the final hotel approach. Mountain visibility and blossom conditions should add to a worthwhile visit rather than be the only reason it works. Keep an alternative for weather, road or access changes. If altitude symptoms develop, seek qualified assessment and revise the plan instead of pushing onward to preserve a scenic checklist.",
      walking:
        "A forest-side property, paved visitor route, lake viewpoint and village lane have different demands. Review steps, slopes, toilets, seating, altitude and the distance from vehicle to the actual subject. Scenic-area transport does not establish step-free access everywhere. A hotel lift is not proof of an accessible sightseeing day, and a higher road may create exposure even without much walking. Describe individual access and health needs before selecting a remote overnight or mountain activity.",
      cost: "Compare the actual room, sleeping location, full vehicle days, guide language, admissions, internal transport and meal plan. Remote properties can have fewer dining choices and more variable facilities than Bayi. A private host, seasonal activity or specialist interpretation needs a defined arrangement and fee basis. Agree change terms for roads or services that cannot operate. Pay a premium for demonstrable comfort, useful location and interpretation rather than a promised peak view, private village or unverified luxury retreat.",
    },
    attractions: [
      "Bayi and a selected local cultural, food or public landscape interest",
      "Lulang as a specific valley-and-forest chapter with a reviewed property and route",
      "Basum Tso / Basongcuo in Gongbo'gyamda as a separate lake visit or overnight",
      "The Yarlung Tsangpo Grand Canyon visitor area around the Mainling/Pai route, with actual access confirmed",
      "Namjagbarwa views only as a condition-dependent possibility, not a guaranteed sighting",
      "A specific peach-blossom location when the actual season and access support it",
      "Bomi as a distinct eastern chapter with its own nights, not an automatic city-day addition",
    ],
    stays: [
      {
        label: "3 nights: one clear regional focus",
        advice:
          "Choose a useful base and one main subject with enough time for arrival, a quieter day and a selected outing. Actual transport determines how much time remains. Do not use a three-night label to promise every forest, lake and canyon area within the wider city.",
      },
      {
        label: "4–5 nights: a second distinct chapter",
        advice:
          "Add another valley or property only when the full road pattern and value justify it. Keep usable time, meals and appropriate effort at both bases. Additional nights create flexibility but do not guarantee mountain visibility, blossom, road access or readiness for higher Lhasa.",
      },
      {
        label: "A longer eastern Tibet or Lhasa route",
        advice:
          "Choose the actual counties, roads, sleeping elevations and required arrangements before fixing duration. Bomi and other more distant destinations need their own planning. A broad Nyingchi regional guide does not establish that every county, including Motuo, can be added to every traveler's itinerary.",
      },
    ],
    hotelAreas: [
      {
        name: "Bayi urban base / practical services and room comfort",
        advice:
          "Compare actual hotels for quiet, bathroom, heating, breakfast, meals and pickup. Useful for a particular arrival and selected local interests, but not automatically the best base for every distant valley. Map the full return drive before choosing to sleep in Bayi throughout the regional stay.",
      },
      {
        name: "Lulang / a forest-and-valley stay",
        advice:
          "Choose a specific property for a real setting-led chapter. Confirm room facilities, dinner, temperature control, the public walk and the final approach. The area's reputation does not establish an empty landscape, a hosted village visit or the same comfort in every lodge. Review the actual sleeping elevation and route.",
      },
      {
        name: "Basum Tso or canyon-area property / a distinct subject",
        advice:
          "These are different locations, not one resort zone. Name the property and intended visitor route, then review access, meals, bathroom, heating and useful time before or after day visitors. A room advertised with mountain views does not guarantee visibility or private access to a shore, village or viewpoint.",
      },
      {
        name: "Bomi or another eastern base / a separate route chapter",
        advice:
          "Add only when the whole itinerary gives the location its own nights and worthwhile subject. Compare the full drive, sleeping conditions, dinner and onward connection. A lodge in a distant county is not interchangeable with a Bayi hotel simply because both are filed under Nyingchi.",
      },
    ],
    tradeoffs: [
      {
        title: "Lower than Lhasa still means substantial altitude",
        advice:
          "Bayi is around 3,000 meters and other sleeping locations or roads can be higher. The regional name does not define the elevation profile. Choose the exact overnight sequence and discuss it with a qualified clinician, especially when arriving rapidly or continuing upward. Extra nights, good fitness, a comfortable hotel and oxygen equipment do not guarantee acclimatization. Take symptoms seriously and let the route change when needed.",
      },
      {
        title: "A city airport does not put you beside every valley",
        advice:
          "Nyingchi Mainling Airport, code LZY, serves a region with separate urban, lake, forest and canyon bases. Railway and road arrivals create different final transfers. Start with the actual hotel and first subject, then compare gateways. A convenient flight time is less useful if it hides a long onward drive or forces an essential activity into an uncertain arrival window.",
      },
      {
        title: "Peach blossom and Namjagbarwa are possibilities, not bookings",
        advice:
          "Flowering varies by location, elevation and current conditions; mountain visibility depends on weather and the chosen viewpoint. A particular date, room or early start cannot guarantee either scene. Confirm current conditions near travel and choose a broader reason for the stay. A forest walk, a suitable public landscape route and a comfortable property should still make sense if the hoped-for photograph does not appear.",
      },
      {
        title: "A canyon visitor route is not an expedition through the gorge",
        advice:
          "A managed Yarlung Tsangpo Grand Canyon visit has defined access, transport and viewpoints. It should not imply trekking through remote gorge terrain, private river access or a guaranteed close view of Namjagbarwa. Identify the actual route, walking and current operation. A substantial road journey deserves a clear subject and enough time rather than being sold as a brief scenic stop between hotels.",
      },
      {
        title: "Bayi, Lulang, Basum Tso and Bomi are different bases",
        advice:
          "A regional map can make a loop look simpler than the real day. Choose one or two places according to landscape, room comfort and the complete onward connection. Repeated returns to Bayi may add avoidable driving, while unnecessary hotel moves add packing. The best choice is the actual route, not a rule that every night must be in one city or every valley must get a separate hotel.",
      },
      {
        title: "Nyingchi travel does not bypass Tibet arrangements",
        advice:
          "A lower-altitude reputation or an arrival through Mainling does not replace the Tibet authorization and organized arrangements applicable to the guest. Confirm nationality, documents, dates, hotels and the exact route before booking. Mentioning a distant county in a regional article is not evidence it is currently available to every traveler. Additional or changed routes need their own review rather than being added informally after arrival.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "bomi",
        advice:
          "Bomi adds a distinct eastern chapter for selected peach-valley scenery, Gangyun forest walking and a considered Zhamu or Guxiang-area stay. Give it actual local nights and count the entire approach; the shared Nyingchi name does not make it a quick Bayi outing. Assess blossom conditions, walking, rooms and Tibet arrangements, and keep Midui Glacier or Motuo as separate route decisions.",
      },
      {
        slug: "lhasa",
        advice:
          "Lhasa adds a distinct palace, temple and urban-history chapter at a higher city elevation than Bayi. Compare the actual rail or road route and sleeping profile rather than assuming all transfers follow one pass. A lower starting point can be discussed as a planning option, but does not guarantee readiness or replace required arrangements and site reservations.",
      },
      {
        slug: "shangri-la",
        advice:
          "Shangri-La is a separate highland cultural destination in Yunnan. Include both only when the different subjects, real transport and available days justify the journey. Do not assume a simple overland continuation or apply Yunnan's travel arrangements to Tibet Autonomous Region.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring can support peach-blossom interests at particular locations, with timing varying by elevation and year. Summer brings greener landscapes along with rain and cloud that can affect views and roads. Autumn offers another set of colors and changing conditions; winter needs a different comfort and service review. A favorable Bayi forecast does not establish clear mountains or the same conditions in a distant valley. Choose the actual route and property for the month rather than guaranteeing one season's photographs across the whole region.",
    orientation:
      "Nyingchi, or Linzhi, is both a broad prefecture-level travel area and a name used in urban and transport contexts. Bayi is the main urban base; Lulang, Basum Tso in Gongbo'gyamda, the Mainling/Pai canyon route and Bomi sit in different places. Nyingchi Mainling Airport and the railway station require different road planning. This guide is the regional decision layer, not a claim that every county, valley or road is fully covered by one short stay.",
    experiences: [
      "Choose a valley or forest chapter with enough usable time at a named and reviewed property",
      "Explore a selected public landscape or cultural subject with route, access and actual physical demands clear",
      "Build the complete overnight and elevation sequence before pairing Nyingchi with Lhasa or a longer eastern route",
    ],
    planningNotes: [
      "Distinguish Bayi city comfort from separate Lulang, lake, canyon and Bomi route decisions",
      "Keep blossom and mountain views condition-dependent, with a worthwhile alternative",
      "Confirm Tibet arrangements, exact hotels and any route-specific requirements for the actual travelers",
    ],
    arrival:
      "Nyingchi Mainling Airport uses code LZY. The railway station is another gateway with its own transfer to the actual base. Confirm dated services, traveler arrangements and the full property address before selecting arrival. A direct flight, a rail journey and a road approach create different elevation profiles and usable first days. Keep essential activities off uncertain connections, allow a light arrival and review any planned higher road or onward sleeping elevation rather than treating the airport name as an acclimatization strategy.",
    gettingAround:
      "Use explicit road days between selected bases, with current conditions and visitor routes checked. A private vehicle cannot enter every village lane or replace scenic-area transport, steps and walking. Agree meal stops, toilets, seating, pickup and a shorter alternative. Remote or weather-affected roads may change the day; the plan should retain enough margin to adapt without rushing toward a view or fixed host. Distinguish a landscape drive from usable time at the destination it reaches.",
    stayStrategy:
      "Choose one base for a focused short stay, or two when a second landscape deserves real time. Compare the room, sleep, bathroom, hot water, heating, dinner and arrival approach before a view or retreat label. Bayi's services can be useful, while a rural base may improve the experience if its facilities suit the guest. Any oxygen provision needs a clear description and does not replace qualified health assessment. A premium route should reveal tradeoffs rather than conceal road burden behind attractive hotel images.",
    firstTimerNote:
      "Nyingchi is most rewarding when the itinerary is selective. Choose the forest, lake, valley or cultural question that actually interests you, then make the hotel and road sequence support it. You do not need to chase every famous peak or flower image. A comfortable stay with clear interpretation can remain worthwhile in cloud or after a route adjustment, while an overloaded photographic checklist is much harder to rescue.",
    faqs: [
      {
        question: "Are Nyingchi and Linzhi the same place?",
        answer:
          "Linzhi is the pinyin rendering commonly used for Nyingchi. The name can refer to the broader prefecture-level area rather than just the Bayi urban base. Use the exact county, property and gateway to establish the real trip; a regional hotel listing does not mean the stay is beside every valley.",
      },
      {
        question: "Is Nyingchi low altitude compared with Lhasa?",
        answer:
          "Bayi is around 3,000 meters, lower than Lhasa but still at substantial altitude. Other properties and roads can be higher. Choose the full sleeping and ascent profile with qualified health advice. Lower than Lhasa is not a promise of risk-free travel or guaranteed acclimatization.",
      },
      {
        question: "How many nights should I spend in Nyingchi?",
        answer:
          "Three nights can support one clear focus when connections fit. Four or five allow another distinct chapter or a slower stay. A wider route needs its own road and overnight plan; those durations do not automatically cover Bayi, Lulang, Basum Tso, the canyon and Bomi together.",
      },
      {
        question: "Should I stay in Bayi or Lulang?",
        answer:
          "Choose Bayi for a specific urban hotel, meals and practical services, or a named Lulang property when its forest-and-valley setting deserves time. Compare actual room facilities, sleeping elevation, dinner and the full road pattern. Neither base is automatically convenient for every other regional interest.",
      },
      {
        question: "Can I count on peach blossom or seeing Namjagbarwa?",
        answer:
          "No. Blossom depends on location and current flowering and weather conditions, while the mountain view depends on visibility and viewpoint. Check conditions near travel and choose a broader reason for the stay. A particular date, room or early start cannot guarantee the photograph.",
      },
      {
        question: "Is the Yarlung Tsangpo Grand Canyon visit a trek through the gorge?",
        answer:
          "A managed visitor route is different from a remote gorge expedition. Confirm the actual access, viewpoints, internal transport and walking rather than inferring private river or wilderness access. A named canyon visit does not guarantee a clear Namjagbarwa view or permission to use every surrounding route.",
      },
      {
        question: "Does arriving in Nyingchi remove the need for Tibet travel arrangements?",
        answer:
          "No. Foreign passport holders generally need organized arrangements and Tibet authorization in addition to valid China entry permission. Confirm current requirements for the actual documents, dates and route. Mainling Airport or a lower-altitude reputation does not bypass the applicable process.",
      },
      {
        question: "Can I add Bomi or Motuo to any Nyingchi itinerary?",
        answer:
          "No. They are separate county-level route decisions with their own roads, time, accommodation and current traveler-specific requirements. A regional mention is not confirmation of access. Review the exact itinerary and dates with the responsible parties rather than adding a distant destination informally after arrival.",
      },
      {
        question: "Which airport serves Nyingchi?",
        answer:
          "Nyingchi Mainling Airport uses code LZY. Include the full transfer to the actual Bayi, valley or other property. The railway station is a different arrival point. Choose the dated service and entire route rather than assuming the airport places you beside the landscape that inspired the booking.",
      },
    ],
    culturalStory: {
      title: "A landscape route still needs a specific sense of place",
      paragraphs: [
        "Nyingchi's forested valleys and river settings can feel very different from the familiar image of a bare high plateau. That contrast is a useful beginning, not a reason to describe the whole region as one idyllic village. Bayi's urban life, a public village walk, a religious place and a contemporary rural hotel reveal different aspects of the area. Good interpretation names the actual setting and explains what the guest can responsibly see there.",
        "Community visits require willing participants and a defined arrangement. A public route does not grant home access, and a commercial cultural display is different from daily life or a ceremony. Respect photography and working space, identify the host and language when an encounter matters, and avoid assigning one generic tradition to every valley. A modest, accurate explanation can add depth without manufacturing exclusive access.",
      ],
    },
    foodStory: {
      title: "Let a regional meal serve the route and the guest",
      paragraphs: [
        "A Lulang-style stone-pot chicken meal can be a useful food subject when the actual kitchen explains its ingredients, broth and portions. The dish's name does not establish that it suits vegetarians or every allergy, and it need not become another long detour on a full road day. Suitable cooked vegetables, tofu, noodles or other dishes can provide alternatives without requiring every guest to share one signature preparation.",
        "Clarify dairy, wheat, meat stocks, sauces, mushrooms and shared kitchen preparation. A wild-mushroom claim is not proof of safety or quality; use an appropriate provider and avoid treating foraging as a casual visitor activity. At a rural property, arrange dinner, breakfast and a late-arrival option in advance. A premium landscape journey should make meals and rest reliable rather than sacrifice them to another viewpoint.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the chosen base with a light first day",
        description:
          "Transfer from the actual airport or station to the booked property, keeping the meal and activity simple. Review the guest's condition and next day's route. A regional arrival should not carry a demanding onward drive merely to reach a hoped-for sunset or mountain view.",
      },
      {
        day: "Full day 1",
        title: "One clear valley, forest or lake subject",
        description:
          "Use the selected public route with actual walking, visitor transport, seating and lunch planned. Let interpretation and the setting carry the day rather than a guaranteed peak view. A lighter alternative should remain worthwhile if conditions or the guest's needs change.",
      },
      {
        day: "Full day 2",
        title: "Enjoy the base or add a distinct local interest",
        description:
          "Keep useful property time and a shorter cultural or landscape interest when suitable. Four or five nights can support a separately chosen second base with enough time to justify the transfer. Do not fill the day with distant counties simply because they share the Nyingchi label.",
      },
      {
        day: "Departure or separately planned extension",
        title: "Review the whole onward route and sleeping elevation",
        description:
          "Allow the final transfer or continue to a selected Lhasa or eastern chapter with its own nights, current access and health review. This three-night framework is illustrative, not a published package, medical clearance or promise of blossom, clear mountains or permit approval.",
      },
    ],
  },
};
