import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/yangzhou.svg",
  alt: "Original Yangzhou planning schematic separating a garden and lane day, Slender West Lake and a carefully chosen hotel; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const yangzhouGuide: ExpandedDestination = {
  id: "yangzhou",
  name: "Yangzhou",
  region: "east",
  kicker: "Merchant gardens, a slower table and time beside the water",
  description:
    "Explore Yangzhou through merchant gardens, Huaiyang food and canal history, with practical choices on Slender West Lake, two-night stays and hotels.",
  stay: "2–3 nights for gardens, food and a slower city rhythm",
  bestFor: "Garden lovers, regional food and a thoughtful Jiangsu detour",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["zhenjiang", "nanjing", "suzhou", "shanghai", "hangzhou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Yangzhou Travel Guide: Gardens, Food & Where to Stay",
    seoTitle: "Yangzhou Guide: Gardens, Food & Hotels",
    seoDescription:
      "Plan Yangzhou with merchant gardens, Slender West Lake and Huaiyang food. Compare two or three nights, hotel areas, Suzhou and onward Jiangsu routes.",
    answer:
      "Yangzhou (扬州), also written Yangchow in older English sources, is a city in Jiangsu on the north side of the Yangtze, with a history shaped by canal trade, salt merchants and cultural patronage. Its strongest short stay combines a merchant garden, old-city lanes, a relaxed Huaiyang meal and time at Slender West Lake. Two nights give one focused full day; three allow the gardens and lake to have separate days without hurrying meals. Choose Yangzhou for the combination rather than as a smaller substitute for Suzhou. Slender West Lake is in Yangzhou and is a different destination from Hangzhou's West Lake.",
    stayAnswer:
      "Start with two nights for an early breakfast, one principal garden, a lane walk and a carefully chosen lake visit if your arrival or departure leaves useful hours. Three nights provide two full days: one for gardens and old-city culture, another for Slender West Lake or a substantive canal-history interest. One night is selective and depends on transport. A longer stay needs a clear interest in gardens, food, art or regional history rather than a longer list of compulsory attractions.",
    hotelAnswer:
      "Compare an old-city or Wenchang-area hotel for meals and walking access, a Slender West Lake-area property for a deliberate landscape-led stay, and a modern hotel selected for room comfort and pickup. A courtyard-style inn needs checks on noise, stairs, bathroom and the final luggage walk. The lake area is large: use the exact hotel address and park entrance rather than assume every resort is beside your chosen route. A Yangzhou East station hotel serves a transport purpose and is not automatically the best base for the gardens or dinner.",
    sightseeingQuestion: "Should I choose Ge Garden, He Garden or Slender West Lake?",
    sightseeingAnswer:
      "Ge Garden / Geyuan is a strong choice for reading rockwork and its seasonal symbolism. He Garden / Heyuan offers a different architectural composition, with covered circulation and relationships between buildings and gardens worth explaining. Slender West Lake / Shouxi Hu is a larger landscaped waterside visit, with a different walking load from an enclosed merchant garden. For one full day, choose one garden and a manageable second subject. With two full days, give the lake its own comfortable window. You do not need both gardens and every lakeside landmark to understand why Yangzhou is worth visiting.",
    visitorResources: [
      {
        label: "Yangzhou municipal government",
        href: "https://www.yangzhou.gov.cn/",
        scope:
          "Official municipal context and dated notices, primarily in Chinese. Check each garden, museum and park with its responsible operator for current admission, reservations and open routes. A city description does not confirm a restaurant booking, boat service or particular hotel room.",
      },
      {
        label: "UNESCO: The Grand Canal",
        href: "https://whc.unesco.org/en/list/1443/",
        scope:
          "Context for the serial World Heritage property and its geographically separate components. Not every waterway or commercial cruise labeled canal is a designated component. The listing does not establish current visitor access, boat operation or a complete Yangzhou itinerary.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and full station names. Yangzhou / 扬州 and Yangzhou East / 扬州东 are distinct stations. Compare the whole journey from your gateway to the actual hotel rather than use a generic city-name search or an old timetable.",
      },
    ],
    serviceScope:
      "A proposal should name the hotel and room, full station transfers, selected gardens and park entrances, guide language, admissions and meal arrangements. A canal museum, a waterside walk and a boat ride are different services. Any craft demonstration, cooking lesson, special tea service or expert conversation requires a willing provider and confirmed content. Private guiding does not authorize closed halls, conservation areas or private homes. Agree an indoor or shorter-route alternative that preserves the main cultural interest in poor weather.",
    routeAdvice:
      "Yangzhou can deepen a Jiangsu journey alongside Nanjing or Suzhou when the full connection and useful nights work. Nanjing adds capital history; Suzhou adds a different garden and urban context. Shanghai is another gateway chapter rather than a reason to compress Yangzhou into a rushed return day. If comparing lakes, distinguish Slender West Lake from Hangzhou's much larger West Lake setting. No matching published Yangzhou tour is recommended here. Share dates, gateways, garden and food interests, walking needs and hotel priorities for a tailored route.",
    practicalPlanning: {
      timing:
        "Give a garden an unhurried opening-hours window with interpretation, then allow a proper meal and rest before the next subject. A traditional morning tea meal is a seated breakfast experience, not a quick tea tasting to squeeze before a train. At Slender West Lake, choose entrances and an end point before walking; do not count only the photogenic bridge. Spring flower and holiday periods can be busy. Boat services, temporary exhibitions and restaurant arrangements follow their own schedules.",
      walking:
        "Garden paving, thresholds, narrow passages, rockwork and upper levels can create steps even on a city itinerary. Slender West Lake can involve substantially more distance; select a shorter worthwhile section when needed. Check current entrances, seating, toilets and the final pickup. Internal transport or a boat, where operating, has its own boarding and remaining walking requirements. A private vehicle cannot turn every garden interior or lakeside path into a step-free visit.",
      cost: "Compare the room category, breakfast, full transfers, guiding hours, named garden and lake admissions, any current internal transport and meals. A morning tea booking may be a full food experience and should not be confused with a hotel beverage. A boat ride and a museum visit are separate inclusions. A premium should buy a comfortable room, useful explanation and considered timing rather than an unverified private garden, master-chef meeting or queue-free access.",
    },
    attractions: [
      "Ge Garden / Geyuan, with rockwork and seasonal design interpreted on the public route",
      "He Garden / Heyuan, chosen for its architectural and garden composition",
      "Slender West Lake / Shouxi Hu, with a defined walking route and entrances",
      "Selected old-city lanes around the historic commercial quarters, beyond a shopping-only circuit",
      "China Grand Canal Museum in Yangzhou, subject to current visitor and reservation arrangements",
      "A chosen canal-side walk, distinguishing the actual waterway and historical context",
      "A Huaiyang meal or seated morning tea experience with clear dishes and ingredients",
      "Daming Temple as a separately chosen religious and cultural visit, with current access checked",
    ],
    stays: [
      {
        label: "1 night / one main interest",
        advice:
          "Choose a garden-and-food visit or another clearly defined subject around useful transport times. A late arrival and early departure do not provide a real city day. Keep the meal and principal visit away from an uncertain check-in window.",
      },
      {
        label: "2 nights / a selective introduction",
        advice:
          "Use one full day for a garden, lanes and regional food, with a modest additional subject on arrival or departure only if the hours work. Fit a shorter lake route by making a deliberate tradeoff rather than require both merchant gardens, a museum and the whole lake in one day.",
      },
      {
        label: "3 nights / two distinct days",
        advice:
          "Give the old-city garden and food story one day, then choose a lake-led day or a substantial canal-history visit. Include time to sit and return to an area you enjoyed. A second garden is worthwhile when the comparison matters, not simply because it is on a ticket list.",
      },
    ],
    hotelAreas: [
      {
        name: "Old city and Wenchang-area addresses / meals and a city base",
        advice:
          "Check the actual walk to your chosen garden, restaurant and evening route. Busy commercial streets and quieter side streets can produce different sleeping conditions. Assess the room, bathroom, climate control, lift and pickup rather than treat every central listing as equivalent.",
      },
      {
        name: "A selected courtyard inn / character with practical checks",
        advice:
          "Ask which room faces a shared yard or active street, whether it has a fully enclosed bathroom and how bags reach the door. Confirm stairs, winter heating, summer cooling and acoustic privacy. Historic styling does not establish the age of the building or the comfort of the booked bedroom.",
      },
      {
        name: "Slender West Lake area / a deliberate landscape choice",
        advice:
          "Choose a named property for its actual setting and room benefit. Map the park entrance, dinner options and old-city transfers. A lake-themed name or photograph does not guarantee a room view, direct park entry or included admission. Protect time to enjoy the property if its setting is the reason to pay more.",
      },
      {
        name: "A modern-city or station-oriented hotel / comfort or a specific connection",
        advice:
          "Compare reliable room facilities and pickup with the full daily journeys. Distinguish Yangzhou East from Yangzhou station. A short station transfer may help an early departure but should be weighed against two days of travel to gardens and meals.",
      },
    ],
    tradeoffs: [
      {
        title: "Yangzhou and Suzhou tell different garden stories",
        advice:
          "Suzhou offers an extensive classical-garden tradition within its own canal-city setting; Yangzhou connects merchant gardens with salt-trade history, regional food and Slender West Lake. Choose both when the comparison interests you and the route has time. For a short trip, one well-explained garden city is better than rushed visits that make them feel interchangeable.",
      },
      {
        title: "Slender West Lake is not Hangzhou's West Lake",
        advice:
          "Shouxi Hu is a Yangzhou landscape visit with its own entrances, paths and ticket arrangements. Hangzhou's Xi Hu is in another city and supports a different hotel and sightseeing geography. Use the full English or Chinese name in proposals. Neither lake's photographs establish the view from a hotel in the other city.",
      },
      {
        title: "One garden understood well can be enough",
        advice:
          "Rockwork, framed views, circulation and the relationship between house and garden reward explanation and slower looking. Ge Garden and He Garden are not identical, but a second visit should add a comparison you care about. Choose interpretation over collecting entrances, particularly when heat or walking limits the day.",
      },
      {
        title: "Morning tea is about the table as well as the cup",
        advice:
          "Yangzhou's morning tea culture can include buns, noodles and other dishes in a seated meal. Choose a venue and format that fit your appetite, dietary needs and schedule. Do not promise a particular famous restaurant or an immediate table without an arrangement, and do not sell a standard hotel breakfast as the same experience.",
      },
      {
        title: "Canal history, a museum and a cruise are separate choices",
        advice:
          "A museum can explain water management, transport and exchange; a waterside walk gives a local setting; a boat service offers its own route when operating. None automatically includes the others. Identify the actual canal section and visitor experience rather than imply every nearby waterway is the same UNESCO-listed component.",
      },
      {
        title: "A premium stay needs more than a garden-inspired lobby",
        advice:
          "Assess the bedroom, sleep, bathroom, meals, arrival and usable time at the property. A good hotel and thoughtful garden guide can improve the trip without special access. Closed courtyards, private performances, conservation workspaces and chef encounters need separate evidence and permission where available.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "zhenjiang",
        advice:
          "Zhenjiang on the south side of the Yangtze adds river hills, Xijindu and aromatic-vinegar food culture. Choose one hill for its temple, calligraphy or literary subject, then compare a cross-river day with a useful overnight. The actual hotel addresses, traffic and dated services matter; its three hills are not another compact garden circuit beside Yangzhou.",
      },
      {
        slug: "nanjing",
        advice:
          "Nanjing adds capital history, major collections and a distinct Purple Mountain chapter. Compare the dated rail or road connection and both final transfers rather than assume two Jiangsu cities share one sightseeing base. Give Yangzhou its own useful day instead of borrowing time from Nanjing's main historical subject.",
      },
      {
        slug: "suzhou",
        advice:
          "Suzhou allows a meaningful garden comparison when the trip has enough nights for both. Use different questions in each city rather than repeat a generic garden-and-shopping circuit. Their gardens, commercial histories and room locations are separate choices, with a complete onward journey between them.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai provides an international gateway and a different modern urban chapter. Verify the operating train and precise stations before treating Yangzhou as a return-day excursion. An overnight can make the regional food and quieter garden hours easier to enjoy; existing Shanghai tours do not automatically include it.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou offers West Lake and a distinct tea-country decision. Yangzhou's Slender West Lake is not the same place. Compare the whole route, useful nights and the balance of garden, lake and food interests before adding both cities simply because their names contain a familiar lake reference.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for gardens, lanes and lakeside walking. Spring blossom periods can also bring busy visitor days, so a floral interest needs current seasonal information rather than a guaranteed bloom. Summer calls for early starts, indoor or shaded breaks and proper room cooling; winter puts more weight on heating and shorter outdoor sessions. Public holidays, temporary exhibitions and restaurant schedules can change the best daily sequence. Choose a worthwhile cultural subject that does not depend on one seasonal photograph.",
    orientation:
      "Yangzhou is a Jiangsu city north of the Yangtze River. The historic urban core, merchant gardens, Slender West Lake, China Grand Canal Museum and railway stations create different daily routes. Gaoyou and Yizheng lie within the wider Yangzhou municipality but are separate outings. Give each a specific purpose and transport plan rather than adding it to an already full city day. Use full hotel and entrance addresses; Yangzhou / 扬州 station and Yangzhou East / 扬州东 station are different arrivals. Yangchow is an older English spelling of the city.",
    experiences: [
      "Read a merchant garden through rockwork, framed views and movement between rooms",
      "Make time for a Huaiyang meal or a genuine seated morning tea experience",
      "Choose a defined Slender West Lake route or a substantive canal-history visit",
    ],
    planningNotes: [
      "Choose one garden well before adding another for comparison",
      "Distinguish Yangzhou's Slender West Lake from Hangzhou's West Lake",
      "Check the exact room, park entrance, station and full final transfers",
    ],
    arrival:
      "Search dated trains using Yangzhou / 扬州 or Yangzhou East / 扬州东 and the actual origin. Compare both station-to-hotel journeys with useful arrival hours; do not select by the shortest advertised rail time alone. If using Yangzhou Taizhou International Airport, confirm the operating flight and complete final transfer. An arrival through Nanjing or Shanghai needs its own full onward sequence. Keep a key garden, museum reservation or special meal off an uncertain arrival window.",
    gettingAround:
      "Group nearby garden and lane interests, then treat the lake or canal museum as a separate part of the day with its own entrance and transport. Agree final walking, steps, seating, toilets and pickup. A vehicle helps between districts but cannot remove garden thresholds or all lakeside distance. Ask for a useful shorter route if mobility or heat makes the full walk unsuitable. A boat or internal shuttle is an optional current service, not a substitute for assessing the remaining effort.",
    stayStrategy:
      "Two or three settled nights can reduce packing and leave room for a slower breakfast or garden visit. Choose old-city convenience, courtyard character or a specific lake-area setting for a clear reason. Compare quiet, beds, bathroom, temperature control, meals and door-to-vehicle access. High-end value is a comfortable base, a thoughtful sequence and good cultural explanation rather than a guarantee of empty gardens, famous chefs or private lake access.",
    firstTimerNote:
      "Decide which combination makes Yangzhou worth the journey: gardens and food, a lake stay, or canal history with old-city walks. Then protect the time for those subjects. A plan that names every garden, temple, bridge and restaurant without explaining their differences is harder to enjoy than a selective day with space to look and sit.",
    faqs: [
      {
        question: "Is Yangzhou worth visiting on a first China trip?",
        answer:
          "It can be if gardens, Huaiyang food and a slower Jiangsu city appeal to you and the whole route has useful nights. It is less compelling as another rushed stop on an already crowded itinerary. Compare its specific interests with the garden, lake and food experiences already in your trip.",
      },
      {
        question: "How many nights should I spend in Yangzhou?",
        answer:
          "Two nights give one focused full day; three allow two distinct days for gardens and old-city culture plus a lake or canal-history interest. One night is selective. Arrival and departure hours determine how much you can genuinely do.",
      },
      {
        question: "Should I visit Yangzhou or Suzhou?",
        answer:
          "Choose by interests and route. Suzhou supports a broad classical-garden and canal-city visit; Yangzhou adds merchant gardens, Huaiyang food and Slender West Lake. Both can work on a longer trip with a meaningful comparison. A short trip often benefits from more time in one rather than rushed stops in both.",
      },
      {
        question: "Is Slender West Lake the same as West Lake in Hangzhou?",
        answer:
          "No. Slender West Lake / Shouxi Hu is in Yangzhou, Jiangsu; West Lake / Xi Hu is in Hangzhou, Zhejiang. They are separate destinations with different hotels, visitor routes and transport. Specify the full name when discussing a lake stay.",
      },
      {
        question: "Where should I stay in Yangzhou?",
        answer:
          "Compare an old-city or Wenchang-area address for meals and walking, a named Slender West Lake-area property for its actual setting, or a modern hotel for room facilities and pickup. Check the particular bedroom, quiet, bathroom, climate control and full daily transfers before choosing by a boutique or lake label.",
      },
      {
        question: "What is Yangzhou morning tea?",
        answer:
          "It can be a seated morning meal with tea, buns, noodles and other dishes, rather than a short tea tasting. Choose the venue and food scope in advance where needed. Check ingredients, portion expectations and time at the table rather than fit it into a tight station-transfer window.",
      },
      {
        question: "Is Yangzhou food vegetarian-friendly or gluten-free?",
        answer:
          "Individual dishes may suit some diets, but mild flavor or a vegetable name does not establish suitability. Ask about pork, shellfish, stock, wheat, soy sauce and shared preparation as relevant. Serious allergies or coeliac requirements need a specific kitchen's confirmed ability and an alternative.",
      },
      {
        question: "Which Yangzhou railway station should I use?",
        answer:
          "Compare dated services to Yangzhou and Yangzhou East with the complete journey to your booked room and first visit. They are different stations. Give the driver the exact ticketed station and hotel address; the city name alone is not enough to choose a pickup.",
      },
    ],
    culturalStory: {
      title: "Gardens make more sense within the trading city",
      paragraphs: [
        "Yangzhou's gardens are more than decorative stops. The city's commercial history and salt-merchant wealth provide a useful setting for discussing patronage, scholarship and the display of taste. A guide can connect a framed view, a passage between spaces or a choice of rockwork to that wider story. Separate historical interpretation from claims about the original age of every visible structure; restoration and later uses are part of the place you see today.",
        "Canal history adds another scale, linking local prosperity with movement, exchange and water management. A good museum visit can explain what a picturesque waterside walk alone cannot. Conversely, a long exhibition day need not replace the pleasure of a meal and a quieter lane. Choose the cultural question first, then the setting that best answers it; a UNESCO label does not make every waterway, cruise or commercial district interchangeable.",
      ],
    },
    foodStory: {
      title: "Give the Huaiyang table time of its own",
      paragraphs: [
        "Huaiyang cooking is associated with careful preparation, knife work and attention to texture rather than an assumption that every meal must be intensely spicy. Depending on the kitchen, useful subjects include finely cut tofu dishes, lion's-head meatballs and filled buns. Yangzhou fried rice is familiar internationally, but a local food visit can go beyond that single name. A properly paced meal or morning tea gives the cuisine room to explain itself without turning every dish into a shopping demonstration.",
        "Discuss ingredients before ordering. A tofu dish may use meat stock; buns can contain pork or other fillings; seafood, wheat and soy-based seasonings may matter for dietary needs. Mild does not mean allergen-free, vegetarian or halal. Ask about actual preparation and shared equipment where necessary. A cooking lesson or chef conversation needs a willing provider, suitable language and a separately confirmed arrangement; it is not included merely because the destination has a respected food tradition.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / first night",
        title: "Settle into the neighborhood and a relaxed meal",
        description:
          "Complete the correct station or airport transfer and check into the chosen room. A short nearby walk and dinner can fit when arrival permits. Save the essential garden and any reserved museum visit for a reliable full-day window.",
      },
      {
        day: "Full day 1 / gardens and the old city",
        title: "Choose one garden and give the table time",
        description:
          "Begin with a seated morning tea meal if arranged, then a focused Ge Garden or He Garden visit. Allow lunch or a lighter meal to match breakfast, a lane walk and rest. A second garden should add a useful architectural comparison; it is not obligatory. Keep dinner close enough to enjoy without another cross-city rush.",
      },
      {
        day: "Full day 2 / for a three-night stay",
        title: "Choose the lake or a deeper canal story",
        description:
          "Plan a defined Slender West Lake route with entrances, walking and return pickup, or choose a substantial canal-museum visit and selected waterside context. Add another subject only when hours and energy support it. Boat rides, current exhibitions and special activities require separate confirmation.",
      },
      {
        day: "Departure / onward Jiangsu or another gateway",
        title: "Protect the complete connection",
        description:
          "Leave time for checkout, bags, the exact station and a realistic departure margin. Continue to the next independently planned chapter rather than require a major lake walk before an early train. This is an illustrative outline, not a published package or guarantee of rooms, tickets, restaurants or current services.",
      },
    ],
  },
};
