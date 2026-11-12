import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/nanxun.svg",
  alt: "Original Nanxun planning schematic comparing merchant houses and Baijianlou, a day visit or overnight, and old-town versus road-accessible rooms; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const nanxunGuide: ExpandedDestination = {
  id: "nanxun",
  name: "Nanxun",
  region: "east",
  kicker: "Silk merchants, waterside homes and a reason to linger",
  description:
    "Discover Nanxun through its merchant houses, garden and canal-side lanes. Compare a Shanghai or Hangzhou day trip with an overnight, and choose a room for comfort as well as character.",
  stay: "A day visit or 1 night; 2 nights for a purposeful slower stay",
  bestFor:
    "Merchant architecture, Jiangnan history and a water-town stay with time to look closely",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["huzhou", "wuzhen", "tongli", "hangzhou", "shanghai"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Nanxun Travel Guide: Merchant Houses, Day Trips & Stays",
    seoTitle: "Nanxun Travel Guide: Day Trip or Overnight?",
    seoDescription:
      "Explore Nanxun's merchant houses and Baijianlou. Compare Wuzhen, plan a Shanghai or Hangzhou day trip, and choose where to stay for a comfortable overnight.",
    answer:
      "Nanxun in Huzhou, Zhejiang, offers a water-town visit centered on silk merchants' houses, gardens and libraries, including architecture with Chinese and Western influences. Pair a small selection of interiors with a canal walk and the waterside residential setting of Baijianlou. A day covers this introduction; one night is worthwhile for a useful evening and morning. Choose it for merchant history and architecture, with residents, businesses and other visitors forming part of the town today.",
    stayAnswer:
      "Choose a day visit if your main interest is a few merchant interiors and a canal walk, especially when moving hotels would interrupt a short Shanghai or Hangzhou stay. Stay one night when dinner, a comfortable room and an unhurried morning are part of the experience. Two nights suit travelers who want to use the property, sketch or photograph at a slower pace, or add a separately arranged cultural activity. The introductory sights alone do not require two full days. An overnight between a late check-in and an early departure gives little time to enjoy the town.",
    hotelAnswer:
      "Choose between a room in or beside the historic walking area and a property with easier road access. In a converted old building, ask about the actual room's stairs, bathroom, heating, cooling, sound insulation and luggage approach. A canal-facing room may also face pedestrians, restaurant noise or morning deliveries. For an outside property, check the full route to the desired town entrance and how dinner and the return journey work. A hotel using Nanxun or Huzhou in its name is not necessarily beside the old-town canals. Confirm any ticket or re-entry terms separately from the room booking.",
    sightseeingQuestion: "Should I visit Nanxun or Wuzhen?",
    sightseeingAnswer:
      "Choose Nanxun when silk-merchant history, domestic architecture and the contrast between grand houses and canal-side residential lanes are your main interests. Wuzhen offers a different managed visitor setting, with separate Dongzha and Xizha areas and an overnight choice often shaped by a particular property and evening atmosphere. Neither is always quieter or more authentic. Compare the actual interiors you want to see, hotel room, full transport route and available days. For a short Jiangnan trip, one thoughtfully chosen water town plus time in Shanghai, Hangzhou or Suzhou is often more rewarding than collecting several similar stops.",
    visitorResources: [
      {
        label: "Huzhou municipal government",
        href: "https://www.huzhou.gov.cn/",
        scope:
          "Starting point for local background and links to current district or visitor information, mainly in Chinese. It does not establish dated interior opening, hotel availability, private access or the inclusions of a particular tour.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and full station names, including Nanxun when relevant to the actual journey. A railway station is not the ancient-town entrance. Compare both terminal transfers and luggage handling with a direct road journey.",
      },
    ],
    serviceScope:
      "A tailored Nanxun visit should name the included interiors, guide language, admission arrangements, walking route, actual pickup address and complete transfers. If staying, specify the room category and final luggage approach. A canal boat, workshop or specialist meeting needs its own confirmed arrangement; none is implied by a private walking tour. Private guiding means interpretation and flexible pacing, not exclusive streets or entry to residents' homes. Ask before photographing people or looking into domestic spaces. No particular host, property or private-access service is promised here.",
    routeAdvice:
      "For a first Jiangnan journey, pair Nanxun's merchant houses with a contrasting stay: Hangzhou for West Lake and tea, Suzhou for gardens, or Shanghai for metropolitan history. Tell us your starting city, dates and interest in architecture, photography or an overnight property. We can compare a tailored day visit with one local night, accounting for luggage and the onward route. Nanxun transport, admissions, guiding and any accommodation would be specified separately from an existing city tour.",
    practicalPlanning: {
      timing:
        "Group paid or timed interiors within their confirmed hours, then use canal lanes as the flexible part of the day. Public-lane access, individual houses, boats and evening programs may have different schedules or ticket terms. Check current arrangements rather than assume that an old article about free entry applies to every interior. Weekends and public holidays can affect roads and visitor numbers. Early or late walks can change the atmosphere but cannot guarantee solitude. In summer, alternate outdoor sections with proper indoor breaks; in wet weather, shorten slippery bridge crossings.",
      walking:
        "Expect bridges, thresholds, uneven paving and possible stairs inside houses. Assess the chosen route rather than describing the whole town as accessible. Baijianlou and the southern group of merchant properties should be connected deliberately; repeated walks between them can add effort without much new interest. Confirm seats, toilets, shade and a shorter alternative. A vehicle cannot reach every pedestrian lane or waterside room. Boat boarding, where available, needs its own assessment and is not automatically a step-free replacement for walking.",
      cost: "Compare proposals using the same pickup and return addresses, guide time, vehicle or rail plus local transport, named interiors and current admissions. Add any boat, activity, room, breakfast and luggage arrangements separately. A headline ticket price does not describe the full day. Premium value comes from explaining the houses well, avoiding unnecessary backtracking, choosing a suitable room and preserving time for lunch and rest. It does not require claims of exclusive canals, a compulsory silk-shopping stop or a host who has not agreed to receive visitors.",
    },
    attractions: [
      "Little Lotus Garden / Xiaolianzhuang for a merchant-family garden and its built setting",
      "Jiaye Library / Jiayetang for the history of collecting and preserving books",
      "Zhang Shiming's former residence for a focused look at Chinese and Western architectural influences",
      "Liu's former residence / Liu Shi Ti Hao for another interpretation of merchant wealth and domestic design",
      "Baijianlou / Hundred Houses for canal-side residential architecture and a considerate walk",
      "A selected canal-and-bridge route connecting the chosen interiors",
      "A seated local meal and a useful morning when staying overnight",
    ],
    stays: [
      {
        label: "Day visit / keep your existing city hotel",
        advice:
          "Choose two or three interiors for distinct subjects, leave time for lunch and add a manageable canal walk. Include Baijianlou when the complete route and walking budget allow. Leave out a second distant water town rather than rush the buildings you came to understand.",
      },
      {
        label: "1 night / make room for evening and morning",
        advice:
          "Arrive while the selected interiors are open, settle into the actual booked room and enjoy dinner without a return transfer. Keep a morning after breakfast before continuing. Agree luggage storage, the final walk and current entry arrangements in advance.",
      },
      {
        label: "2 nights / let the slower pace earn its place",
        advice:
          "Use this for a property you want to enjoy, sustained drawing or photography, or an activity arranged for a clear interest. Leave some time unplanned. Do not pad the stay with repeated commercial streets or promise a silk workshop merely because the town has a silk-trading history.",
      },
    ],
    hotelAreas: [
      {
        name: "Historic core near the selected merchant properties",
        advice:
          "Useful for walking to the interiors and dinner, provided the actual room and luggage approach work. Compare stairs, bathroom, climate control and evening noise. A restored exterior does not tell you how comfortably the room functions or whether the property has a lift.",
      },
      {
        name: "Baijianlou vicinity / choose the precise address",
        advice:
          "Can suit travelers who value a waterside residential setting and a separate morning walk. Verify which bank and lane the room occupies, the path to meals and the distance to the other sights. Residential streets are not silent scenery: respect daily life and check actual noise rather than promise seclusion.",
      },
      {
        name: "Outside the walking core / easier vehicle access",
        advice:
          "Consider this when road pickup, luggage or room facilities matter more than opening the door onto a canal. Compare the whole trip to the desired entrance and evening return. An address elsewhere in Huzhou or Nanxun District can involve a separate journey; map the real property.",
      },
    ],
    tradeoffs: [
      {
        title: "Merchant houses need selection, not a complete checklist",
        advice:
          "Pair a garden or library interest with a house chosen for its architectural details. Look at how rooms, courtyards, decorative finishes and imported influences relate to the family's wealth. More interiors are useful only when the interpretation changes; repetitive rooms can leave less time to understand any of them.",
      },
      {
        title: "Baijianlou is a different chapter from the grand interiors",
        advice:
          "Use the canal-side housing to discuss water access, lane layout and everyday domestic space. The name Hundred Houses is not a promise of a hundred open homes. Public-lane access does not authorize entering residences, staging portraits or treating people as an attraction.",
      },
      {
        title: "Nanxun or Tongli depends on the architectural interest",
        advice:
          "Nanxun makes a strong merchant-house and silk-trade chapter. Tongli offers Tuisi Garden within a different canal-town setting and often fits a Suzhou garden itinerary. Choose using the buildings, city base and complete journey. Neither needs to be added simply because you already enjoyed another water town.",
      },
      {
        title: "Silk-trading history is not a guaranteed production visit",
        advice:
          "Trading fortunes and household collections can be explained through the buildings. A working silk facility, demonstration, retail showroom and hands-on workshop are different experiences. Confirm the host, process, language, season and purchase expectations before treating an activity as part of the itinerary.",
      },
      {
        title: "A canal room should still be a good place to sleep",
        advice:
          "Ask about the exact window position, nearby restaurants, insulation and early activity. A less photographed lane may offer a more suitable room. Historic character should complement a comfortable bed, bathroom and temperature control, not excuse their absence.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "huzhou",
        advice:
          "Huzhou city adds old-city lanes, the Feiying Pagoda area and a separate southern Taihu hotel choice. Compare the actual city or lake address with staying in Nanxun for its merchant houses, dinner and morning walk. Being within the same municipality does not make these equivalent hotel bases; choose the complete journey and the nights that serve your interests.",
      },
      {
        slug: "wuzhen",
        advice:
          "Compare Nanxun's merchant houses and Baijianlou with Wuzhen's Dongzha/Xizha choices and a specific overnight property. Both can work in a longer architecture-focused journey, but one well-chosen water town is enough for many short trips. Include the second only when the difference justifies the transfer and hotel change.",
      },
      {
        slug: "tongli",
        advice:
          "Tongli offers a Tuisi Garden focus within Suzhou's Wujiang District, in Jiangsu rather than Zhejiang. Compare its place in a Suzhou garden stay with Nanxun's silk-merchant architecture. The full road or rail-and-road route matters more than assuming neighboring water towns are one compact attraction.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake, city neighborhoods and Longjing tea interests. A Nanxun excursion or overnight should preserve useful lake and tea time. Compare direct road transport with the actual dated rail service and both station transfers, using the real hotel addresses.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai provides a contrasting city chapter and international gateways. For a Nanxun day trip, allow a useful visit plus the full return journey; for an overnight, plan luggage and the next stop. Do not use the rail segment alone as the door-to-door travel time or attach a tight airport departure to an uncertain return.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit canal walks and architectural visits, with rain and busy holiday periods still possible. Summer requires shade, cooling and indoor breaks; a waterside setting does not remove heat or humidity. Winter can feel cold and damp, so room heating and warm meal stops matter. Garden plants, water levels and light change with conditions. Choose the dates for the whole Jiangnan route rather than promise blossom, mist, empty bridges or a particular photograph.",
    orientation:
      "Nanxun Ancient Town is in Nanxun District, Huzhou, Zhejiang. The district, the ancient-town walking area, Huzhou city and individual railway stations are different locations. Little Lotus Garden and Jiaye Library form a useful southern grouping; Baijianlou offers a separate canal-side chapter farther north. Use exact Chinese names and entrance addresses for pickup. Wuzhen is in Tongxiang, and Tongli is in Suzhou's Wujiang District; neither is another entrance to Nanxun.",
    experiences: [
      "Compare a merchant garden, a book collection and a house for three different expressions of wealth",
      "Read the relationship between water, lanes and homes on a considerate Baijianlou walk",
      "Enjoy a proper meal and a comfortable morning rather than rush through several water towns",
    ],
    planningNotes: [
      "Choose the interiors first, then connect them with a manageable canal route",
      "Compare a day visit with an overnight using usable hours and complete transfers",
      "Check the actual room, luggage approach and current admission terms separately",
    ],
    arrival:
      "From Shanghai, Hangzhou or Suzhou, compare a direct road pickup with the actual dated railway options and both local transfers. Where Nanxun station is suitable, it still requires a final journey to the ancient town; Huzhou station is a different gateway. Check the full ticket name rather than use the municipal name as a pickup instruction. For overnight guests, agree the vehicle stopping point, luggage handling and check-in location. Keep important timed interiors away from uncertain long-haul arrival times and allow proper buffers before onward trains or flights.",
    gettingAround:
      "Use a selected walking route with seated breaks and a clear meeting point. Group the southern interiors, then decide whether to extend to Baijianlou rather than repeatedly cross the town. Bridge steps, thresholds and wet paving can change the effort required. Current boat routes and boarding conditions must be checked individually. A boat cannot be assumed to connect every sight or replace the final walk to a room. Guests with mobility needs should receive a specific shorter route, not a generic assurance that a water town is flat.",
    stayStrategy:
      "Keep the existing city hotel for a day visit when the main goal is the merchant buildings. Stay one night when a suitable room, dinner and morning make the move worthwhile. Two nights need an additional purpose and time to enjoy the property. For an old-town room, prioritize bathroom, bed, sound insulation, heating or cooling and luggage access. For an outside hotel, establish how evening transport works. A label such as boutique or luxury does not resolve these practical choices.",
    firstTimerNote:
      "Start with a question that makes the town interesting: how did silk-trading wealth change houses, gardens and cultural collecting? Choose buildings that help answer it, then use the canals and residential lanes to widen the picture. A strong visit leaves you understanding differences between places, rather than only recognizing another bridge. Nanxun can be rewarding while still containing shops, restoration and busy visitor periods; it does not need to be described as untouched.",
    faqs: [
      {
        question: "Where is Nanxun Ancient Town?",
        answer:
          "Nanxun Ancient Town is in Nanxun District, Huzhou, Zhejiang. It is separate from Huzhou's city center and from Wuzhen in Tongxiang. Use 南浔古镇 and the specific hotel or entrance address when arranging a transfer; the district name alone is not an exact destination.",
      },
      {
        question: "Is Nanxun worth visiting?",
        answer:
          "It is a good choice for travelers interested in silk-merchant history, gardens, book collecting and Chinese and Western influences in domestic architecture. Choose a few complementary interiors and a canal walk. If you have little interest in the buildings and very limited time, protecting your Shanghai, Hangzhou or Suzhou stay may be more worthwhile.",
      },
      {
        question: "Can I visit Nanxun on a day trip from Shanghai?",
        answer:
          "Yes, with a selective itinerary and enough time for the complete return journey. Compare road travel with a dated train service plus both terminal transfers. Allow time for the chosen interiors, lunch and walking; a fast rail segment does not describe the full day. Treat any same-day airport connection separately.",
      },
      {
        question: "How many days do I need in Nanxun?",
        answer:
          "A day can introduce selected merchant properties and the canals. One night adds dinner and a useful morning if arrival and departure leave time for them. Two nights suit a deliberately slower property stay or a separately arranged interest, rather than being necessary for the introductory sights.",
      },
      {
        question: "Is Nanxun or Wuzhen better for an overnight?",
        answer:
          "Choose by the purpose of the stay and the actual room. Nanxun suits a merchant-architecture visit with time around Baijianlou; Wuzhen offers different Dongzha/Xizha settings and property choices. Neither guarantees quiet or empty canals. Compare evening access, meals, luggage arrangements and the onward journey.",
      },
      {
        question: "Where should I stay in Nanxun?",
        answer:
          "Compare the historic core near your chosen interiors, the Baijianlou vicinity and properties with easier road access outside the walking area. Check the exact address, room, stairs, bathroom, noise and luggage route. Canal views, convenient pickup and a good night's sleep are separate requirements.",
      },
      {
        question: "Is Nanxun free to enter?",
        answer:
          "Check the current terms for the exact areas and interiors you want to visit. Public lanes, individual houses, special activities and boats may have different arrangements. An announcement about general access does not establish that every interior is free or open. Hotel booking and attraction entry should also be confirmed separately.",
      },
      {
        question: "Can I take a train directly to Nanxun Ancient Town?",
        answer:
          "Check dated services to the exact station, including Nanxun where suitable, but allow a final local transfer to the ancient town. Nanxun station and Huzhou station are different gateways. Compare the complete trip from your hotel, luggage handling and arrival time with a direct road journey.",
      },
    ],
    culturalStory: {
      title: "Look at what merchant wealth was used to build",
      paragraphs: [
        "Nanxun's buildings offer more than a succession of grand rooms. Little Lotus Garden, also called Xiaolianzhuang (小莲庄), provides a way to examine how a merchant family organized landscape and domestic space. Nearby Jiaye Library, also called Jiayetang (嘉业堂藏书楼), changes the subject to books, collecting and preservation. Giving each place a clear question makes the visit richer than repeating a general story about rich families. Confirm which spaces are currently accessible rather than assume every part of a historic property can be entered.",
        "At Zhang Shiming's former residence (张石铭旧宅) or Liu's former residence, also known as Liu Shi Ti Hao (刘氏梯号), compare the actual layout and decorative details that reflect Chinese and Western influences. Then change scale at Baijianlou (百间楼), also translated as Hundred Houses, where canals, lanes and homes create a different spatial story. These places contain fabric of different periods, repairs and present-day uses. Explain those distinctions and respect private thresholds; a historic neighborhood is not a stage set reserved for visitors.",
      ],
    },
    foodStory: {
      title: "Give the meal the same care as the buildings",
      paragraphs: [
        "A seated lunch helps make a house-and-canal walk comfortable. Nanxun's shuangjiao mian (双交面), often translated as double-topping noodles, is a useful local dish to ask about: confirm the two toppings and broth at the actual shop rather than assume a fixed recipe. Braised pork and freshwater fish may also appear on local menus. Choose portions for the group, ask about bones and sweetness, and order seasonal vegetables for balance. A canal-side table is worthwhile when the seating, temperature and pace of service also suit the guests.",
        "Check broth, pork, fish, shellfish, soy, wheat and shared equipment for dietary requests. A vegetable or tofu dish is not automatically vegetarian, and a noodle shop may not be able to control serious cross-contact risks. Ask the kitchen directly and use an alternative when it cannot meet the need. A tasting, a retail stop and a cooking session should be described separately. Do not turn the town's food or silk history into a promise of a private host or hands-on activity that has not been arranged.",
      ],
    },
    itinerary: [
      {
        day: "Morning / arrival",
        title: "Begin with a garden and a different kind of collection",
        description:
          "Complete the transfer to the correct entrance and arrange luggage if staying. Visit Little Lotus Garden and Jiaye Library when their current hours allow, giving each a distinct focus. Choose a shorter alternative if the actual opening, weather or mobility needs make the full sequence unsuitable.",
      },
      {
        day: "Lunch and afternoon",
        title: "Connect a selected merchant house with canal-side life",
        description:
          "Pause for lunch, then select a merchant house for its particular architecture. Extend the walk to Baijianlou when time and stamina allow, with a rest rather than an inflexible full-town circuit. Day visitors return to their existing base with a proper travel buffer.",
      },
      {
        day: "Optional overnight",
        title: "Enjoy the room and evening that justify staying",
        description:
          "Settle into the confirmed room and keep dinner convenient. Take an evening walk according to current public access, lighting and weather. Do not assume that houses, boats or restaurants share the same late hours, or that staying overnight makes the streets private.",
      },
      {
        day: "Following morning",
        title: "Leave room for breakfast and the next destination",
        description:
          "Leave time in the morning for a short walk or a chosen open interior, then collect luggage and continue to the actual next hotel or station. A second night needs an additional purpose. This is an illustrative outline, not a published package or a guarantee of a room, boat, workshop or admission inclusion.",
      },
    ],
  },
};
