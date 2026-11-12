import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/jiaxing.svg",
  alt: "Original Jiaxing planning schematic separating South Lake and Yuehe from Wuzhen, Xitang and Haining, with day-visit, one-night and station-transfer choices; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const jiaxingGuide: ExpandedDestination = {
  id: "jiaxing",
  name: "Jiaxing",
  region: "east",
  kicker: "South Lake, canal-side streets and a city worth choosing deliberately",
  description:
    "Plan Jiaxing around South Lake, Yuehe's canal-side streets and a proper local meal, with clear choices between a city night and separate Wuzhen, Xitang or Haining stays.",
  stay: "A focused day visit or 1 city night; 2 nights for a specific additional interest",
  bestFor: "Jiangnan canal history, South Lake's modern historical significance and local food",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: [
    "pinghu",
    "tongxiang",
    "xitang",
    "haining",
    "wuzhen",
    "hangzhou",
    "shanghai",
    "huzhou",
    "nanxun",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Jiaxing Travel Guide: South Lake, Yuehe & Where to Stay",
    seoTitle: "Jiaxing Travel Guide: Day Trip or Overnight?",
    seoDescription:
      "Explore Jiaxing's South Lake and Yuehe. Compare a day visit with one night, choose hotel areas and stations, and separate Wuzhen, Xitang and Haining plans.",
    answer:
      "Jiaxing (嘉兴) is a city in northern Zhejiang between Shanghai and Hangzhou, with a central-city visit built around South Lake, canal-side streets and regional food. South Lake, or Nanhu (南湖), combines a lakeside setting with an important place in the history of the Chinese Communist Party. Yuehe (月河) offers a different chapter of waterways, lanes, shops and food businesses. A focused day or one night can introduce the city. Wuzhen in Tongxiang, Xitang in Jiashan and Haining are separate destinations within the wider Jiaxing municipality; they are not neighborhoods around South Lake. Choose a Jiaxing city stay for the city itself, rather than assume it is the best hotel base for every nearby water town.",
    stayAnswer:
      "Choose a day visit when South Lake, a selective Yuehe walk and a meal fit the complete return journey from your existing base. One night adds an evening without a return transfer and time for a cultural visit or a relaxed breakfast. Two nights need a specific additional purpose, such as a current museum display that interests you or one separately planned excursion. If your real goal is an overnight in Wuzhen or Xitang, compare going directly there. A late arrival followed by an early departure is a transit night, not a meaningful introduction to Jiaxing.",
    hotelAnswer:
      "For a city night, compare a South Lake or central Nanhu-area hotel with a property closer to the Yuehe walk and chosen restaurants. Check the actual address, room position, road access and evening return route; neither area is automatically within an easy walk of every site. A station-area room can suit a practical departure but may add journeys for sightseeing and dinner. Wuzhen, Xitang and Haining hotels require their own location decisions. A Jiaxing label can refer to the wider municipality, not a room beside South Lake. Judge premium comfort by sleep, bathroom, temperature control, breakfast and transport, rather than the category name alone.",
    sightseeingQuestion: "Is Jiaxing worth visiting between Shanghai and Hangzhou?",
    sightseeingAnswer:
      "Yes, when South Lake's historical context, canal-city life or a particular cultural interest adds something you want to understand. Build a compact route with time for lunch instead of treating the city as a compulsory stop between two major destinations. If your short trip already includes a water town, Suzhou's gardens and Hangzhou's lake and tea interests, another hotel move may add less than more time in those places. Jiaxing and a Wuzhen overnight answer different interests. Choose the actual subject and usable hours, not just the convenient-looking position on a regional map.",
    visitorResources: [
      {
        label: "Jiaxing municipal government",
        href: "https://www.jiaxing.gov.cn/",
        scope:
          "Starting point for municipal background and links to current local notices, mainly in Chinese. Confirm the actual South Lake route, memorial or museum entry, ticket scope and current opening with the relevant operator. Municipal background does not establish private access or a specific service booking.",
      },
      {
        label: "UNESCO: The Grand Canal",
        href: "https://whc.unesco.org/en/list/1443/",
        scope:
          "Reference for the defined serial World Heritage property and its component boundaries. It is not a designation for every canal-side lane, bridge, hotel or lake in Jiaxing, and does not establish visitor access, a boat route or current admission.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated trains and the full station name. Jiaxing, Jiaxing South, Tongxiang and Jiashan South are different gateways. Choose using the actual hotel and complete onward transfer rather than the fastest rail segment alone.",
      },
    ],
    serviceScope:
      "A tailored city visit should specify the South Lake route, any memorial or museum entry, guide language, Yuehe walking section, exact pickup and complete transfers. If staying, include the named hotel and room category. South Lake shore access, island visits, boats and individual interiors are separate arrangements; one does not automatically include the others. Private guiding offers interpretation and flexible pacing, not exclusive public streets, priority museum entry or unrestricted photography. Any specialist visit, food activity or local host needs an actual agreement and a clear description. No particular operator, activity or access is promised by this guide.",
    routeAdvice:
      "Tell us whether your starting point is Shanghai or Hangzhou, your travel dates, available nights and whether you want city history, canal-side walking or a water-town overnight. We can compare a Jiaxing city stop with direct travel to Wuzhen, and explain which base gives you more useful time. A separate Haining or Xitang plan needs its own road and accommodation decisions. No matching published Jiaxing itinerary is listed here. A Shanghai or wider China product does not include Jiaxing sightseeing, admissions, guiding or accommodation unless its actual itinerary states that it does.",
    practicalPlanning: {
      timing:
        "Place a memorial or museum visit within its confirmed hours and current booking requirements, then keep the lake walk, lunch and Yuehe section flexible. South Lake's shore, island access and boats may follow different arrangements. Shops and restaurants in Yuehe need not share a single opening schedule. Weekends and public holidays can change traffic and visitor numbers. In summer, plan cooling and a seated break; in rain, shorten exposed sections and bridge crossings. Do not rely on a boat connection to meet a tight onward train.",
      walking:
        "Choose a South Lake section rather than assume the visit requires a complete circuit. Assess actual distances between the lake, selected interiors and pickup point. Yuehe can involve thresholds, bridges and uneven or wet surfaces, and busy lanes may reduce space for mobility equipment. Confirm toilets, seats and any step-free alternatives for the exact route. A boat requires its own boarding assessment. Use a vehicle between areas when it improves the day; private transport does not make every historic interior or island route accessible.",
      cost: "Compare like-for-like proposals using the same pickup and drop-off addresses, guide time, vehicle or rail plus local transfers, named admissions and any separately arranged boat. For an overnight, compare the exact room, breakfast, luggage handling and cancellation terms. A station-based saving may be offset by additional city journeys. Premium value comes from useful interpretation, well-chosen stops, comfortable meals and a room that works for the guests, rather than unnecessary detours or a compulsory shopping visit.",
    },
    attractions: [
      "South Lake / Nanhu for a selected shore walk and a clear historical introduction",
      "The South Lake revolutionary-history interpretation, with memorial displays distinguished from the lake visit",
      "Yuehe / Yuehe Historic District for canal-side lanes, current businesses and an unhurried meal",
      "Jiaxing Museum when the current displays match the guest's interests",
      "A selected canal-side route that explains transport and urban life without a blanket UNESCO claim",
      "A local food stop focused on zongzi, wontons or other dishes the actual kitchen prepares well",
      "A separately planned Wuzhen, Xitang or Haining chapter when it adds a distinct purpose",
    ],
    stays: [
      {
        label: "Day visit / keep the existing hotel",
        advice:
          "Select a South Lake route and Yuehe walk with time for lunch. Add an indoor cultural visit only when its actual opening and your interests justify it. Compare the full return journey from Shanghai or Hangzhou rather than attach several distant water towns to one day.",
      },
      {
        label: "1 night / make the city evening worthwhile",
        advice:
          "Arrive with time for the chosen lake or cultural visit, settle into a well-located room and enjoy dinner without a return transfer. Leave an unhurried morning before the next stop. A useful city night does not require a boat, every museum or a late-night activity.",
      },
      {
        label: "2 nights / a specific additional interest",
        advice:
          "Use the extra time for a current exhibition, a slower city visit or one deliberately planned excursion. Compare staying at the excursion destination if its evening is the main attraction. Do not fill the extra day with repeated water-town streets simply to increase the number of place names.",
      },
    ],
    hotelAreas: [
      {
        name: "South Lake and central Nanhu area / the cultural visit first",
        advice:
          "Choose using the actual lake entrance, selected museum or memorial and complete dinner route. Verify room outlook, road noise, heating or cooling and drop-off access. A South Lake label does not establish a lake-view room or that every part of the day can be reached on foot.",
      },
      {
        name: "Yuehe vicinity / evening food and canal-side walking",
        advice:
          "Can suit guests who value an unhurried meal and a manageable evening walk. Check the exact room's relationship to restaurants, pedestrian lanes and early deliveries. Character, quiet and luggage access are separate questions. Plan transport to South Lake rather than assume the two visits are one continuous compact attraction.",
      },
      {
        name: "Station areas or a separate water-town base / choose the purpose",
        advice:
          "A station room may suit a departure, while a Wuzhen or Xitang property can serve a deliberate canal-town overnight. Check the exact station and town rather than booking by the municipal name. Compare the whole journey, room, meal arrangements and usable hours before choosing a base for convenience alone.",
      },
    ],
    tradeoffs: [
      {
        title: "South Lake scenery and political history are related but distinct",
        advice:
          "Explain the lake setting alongside its association with the concluding stage of the Chinese Communist Party's first congress in 1921. The commemorative Red Boat is a representation of that history, not the surviving original meeting boat. A shore walk, a boat or island route and a memorial exhibition provide different experiences. Agree the depth of interpretation with the guests and check each visit's current access.",
      },
      {
        title: "Yuehe is a living visitor district, not an untouched canal village",
        advice:
          "Read its waterways and lanes while distinguishing historic fabric, restoration and contemporary shops or restaurants. A pleasant evening can include commerce without every business being an inherited local craft. Public access does not authorize entry into homes or unlimited photography of residents and workers.",
      },
      {
        title: "The city and Wuzhen should each earn their nights",
        advice:
          "Jiaxing city offers South Lake, local urban history and a different meal-and-walk setting. Wuzhen has separate Dongzha/Xizha visitor choices and overnight-property arrangements in Tongxiang. One does not replace the other, but a short trip need not include both. Compare the guest's interests and complete luggage move.",
      },
      {
        title: "Xitang and Nanxun are different places",
        advice:
          "Xitang is in Jiashan within the wider Jiaxing municipality. Nanxun is in Huzhou and offers its own merchant-house and residential-canal subjects. Neither is an alternative name for Yuehe. Decide which architecture and overnight setting you want, then plan the actual route instead of treating all water towns as interchangeable.",
      },
      {
        title: "Haining and the Qiantang tidal bore need a separate plan",
        advice:
          "A Haining visit, including Yanguan when relevant, requires its own dated route and suitable viewing arrangements. Tide timing and conditions do not follow the city sightseeing schedule. Use managed, permitted viewing areas and follow local instructions; no tide display, access or front-row view is guaranteed by a Jiaxing city booking.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "pinghu",
        advice:
          "Pinghu adds Mo Family Manor and a selected East Lake walk, a different introduction to Jiangnan household architecture from South Lake and Yuehe. Choose a focused visit or one city night according to the full transfer and your interests. Zhapu and Jiulongshan are separate bay-side choices, so settle the actual purpose and hotel before adding a southern detour.",
      },
      {
        slug: "tongxiang",
        advice:
          "Tongxiang adds a separate city and selected art, literature or textile interests beyond Wuzhen. Wutong, Puyuan and Shimen need their own purpose and complete road sequence. Compare one confirmed cultural subject with more time in Jiaxing city rather than treating the wider municipality as a compact circuit or adding unconfirmed workshops.",
      },
      {
        slug: "xitang",
        advice:
          "Xitang offers a separate canal-town walk in Jiashan, with covered waterfront passages, bridges and its own overnight-room choices. Compare that subject with Jiaxing city's South Lake and Yuehe, rather than assume a city hotel sits beside the ancient town. Use the actual Jiashan or city gateway and complete transfer; a quiet Xitang night depends on the specific room and neighboring activity.",
      },
      {
        slug: "haining",
        advice:
          "Haining offers a separate Yanguan and Qiantang tidal-bore chapter, with Xiashi literary interests as another possible subject. Begin with the dated official forecast and permitted viewing facility, then compare a day trip with an overnight. Jiaxing city, Haining and the actual rail gateways are different places; protect the viewing window and retain a worthwhile cultural alternative.",
      },
      {
        slug: "wuzhen",
        advice:
          "Wuzhen is in Tongxiang within the wider Jiaxing municipality, with its own Dongzha/Xizha visit and room decisions. Compare a city night for South Lake and Yuehe with going directly to a Wuzhen overnight. Use the actual station, hotel and full luggage transfer rather than assume a Jiaxing city room is beside the water town.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake, Longjing tea and city neighborhoods. Keep South Lake and West Lake distinct and preserve enough time for the actual Hangzhou interests. Compare dated rail services and both hotel transfers with road travel before adding a city stop between fixed appointments.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai offers a contrasting city chapter and international gateways. A Jiaxing day visit needs the full return journey; an overnight needs a useful evening and morning. Match the exact Jiaxing station to the actual route and avoid treating a short train ride as the whole transfer or a safe basis for a tight airport connection.",
      },
      {
        slug: "huzhou",
        advice:
          "Huzhou offers an old-city and writing-brush chapter or a separately chosen southern Taihu property. Its lake setting is different from Jiaxing's South Lake. Include both cities only when the additional interests and nights justify the full journey between real hotel addresses.",
      },
      {
        slug: "nanxun",
        advice:
          "Nanxun adds silk-merchant houses, Jiaye Library and Baijianlou in Huzhou. Compare those specific subjects with Yuehe's city walk and a Wuzhen option. Choose one or two contrasting chapters for a longer architecture-focused trip, rather than collect several similar canal-town visits on a short itinerary.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit lake and canal-side walking, with rain and crowded holiday dates still possible. Summer requires shade, cooling and shorter outdoor sections; waterfront locations do not remove heat or humidity. Winter can be cold and damp, so room heating and warm indoor breaks matter. Check current events and attraction arrangements for the actual date. A pleasant season does not guarantee empty lanes, clear lake views or operating boats, and any Haining tide interest needs its own dated assessment.",
    orientation:
      "Jiaxing is both a central city and a wider municipality in northern Zhejiang. South Lake and Yuehe are city subjects; Wuzhen belongs to Tongxiang, Xitang to Jiashan, and Haining is a separate county-level city within the wider municipality. Jiaxing station and Jiaxing South station are different arrival points, as are Tongxiang and Jiashan South. Nanhu means South Lake here, not Hangzhou's West Lake or Huzhou's Taihu shore. Use the exact Chinese destination and hotel address when coordinating the route.",
    experiences: [
      "Combine a selected South Lake walk with clear interpretation of its modern historical significance",
      "Follow a manageable Yuehe canal-side route and sit down for a local meal",
      "Choose one relevant cultural display or a useful city evening rather than rush several towns",
    ],
    planningNotes: [
      "Separate the city visit from Wuzhen, Xitang and Haining before choosing the hotel",
      "Confirm the exact station, luggage plan and complete transfers",
      "Check shore, boat, island and indoor visits as distinct arrangements",
    ],
    arrival:
      "Compare dated trains to the station that serves the actual city hotel or onward destination. Jiaxing and Jiaxing South are different gateways; Tongxiang may be relevant for Wuzhen, while Jiashan South serves a different road approach toward Xitang. Do not choose a station solely because its English name resembles the municipal destination. Include the departure-hotel journey, luggage, boarding procedures and final transfer. For airport arrivals, specify the terminal and flight before comparing road or rail options, and protect any timed cultural visit from an uncertain international arrival.",
    gettingAround:
      "Plan South Lake, the chosen indoor site and Yuehe as related but separately timed visits, using a vehicle when the actual distances warrant it. At the lake, select a shore section and clear pickup point rather than commit to a complete circuit. In Yuehe, check bridge steps, thresholds, paving and rest stops. A boat, when arranged, follows a specific route and is not a city transport service connecting all sights. Leave a practical indoor alternative for rain or heat and a straightforward way to shorten the walk.",
    stayStrategy:
      "For one city night, location and sleep may matter more than a large resort-style room far from the planned meals and walks. Compare the actual South Lake or Yuehe-area address with a station room, including both morning and evening journeys. If the main aim is a Wuzhen or Xitang overnight, assess a property there instead. Two city nights need enough additional interest to avoid repeated commuting. Premium planning means recommending fewer hotel changes when they preserve time for the places the guests value.",
    firstTimerNote:
      "Decide what Jiaxing contributes to your journey: South Lake's history, canal-city life, a particular display or an unhurried evening meal. A clear subject makes a modest city stop more rewarding than trying to compete with every famous sight in Shanghai or Hangzhou. Water towns in the wider municipality deserve their own choices. The best route may include a Jiaxing night, a selective day visit or direct travel elsewhere; the decision should follow the guest's interests and usable time.",
    faqs: [
      {
        question: "Where is Jiaxing, and is it near Shanghai or Hangzhou?",
        answer:
          "Jiaxing is in northern Zhejiang between Shanghai and Hangzhou. It has a central-city itinerary and a wider municipality containing separate destinations such as Tongxiang, Jiashan and Haining. Compare the actual dated train and complete hotel transfers; a regional location alone does not establish a short door-to-door journey.",
      },
      {
        question: "Is Jiaxing worth visiting?",
        answer:
          "It can be for South Lake's historical significance, a Yuehe canal-side walk, a relevant cultural visit and local food. Choose those interests deliberately. On a short trip already including major Jiangnan cities and a water town, more time in the existing bases may be more valuable than another hotel move.",
      },
      {
        question: "How many days do I need in Jiaxing?",
        answer:
          "A focused day can combine a selected South Lake route, Yuehe and a meal. One night adds an evening and an unhurried morning. Two nights need a specific extra interest or a separately planned outing. Wuzhen and Xitang stays should be counted separately rather than assumed to be part of a compact city visit.",
      },
      {
        question: "Can I visit Jiaxing on a day trip from Shanghai?",
        answer:
          "Yes, when the full return journey leaves enough time for your chosen sites and lunch. Compare the exact train station and both local transfers with a direct road option. Keep boats and indoor visits within their confirmed arrangements and leave a proper buffer before the return service or any onward flight.",
      },
      {
        question: "What is the difference between Jiaxing and Jiaxing South stations?",
        answer:
          "They are separate railway stations with different locations and service patterns. Select the dated service using the actual hotel or next destination and send the full ticket name for pickup. Tongxiang and Jiashan South are different gateways again, relevant to different water-town routes rather than interchangeable city-center stops.",
      },
      {
        question: "Is South Lake's Red Boat the original meeting boat?",
        answer:
          "The commemorative Red Boat represents the boat associated with the concluding stage of the Chinese Communist Party's first congress in 1921; it is not the surviving original meeting vessel. Distinguish a shore walk, any permitted boat or island visit and the memorial exhibition, and check current access for each.",
      },
      {
        question: "Should I stay in Jiaxing or Wuzhen?",
        answer:
          "Stay in Jiaxing for South Lake, city culture and a Yuehe evening. Choose Wuzhen when its Dongzha/Xizha setting, property and canal-town overnight are the priority. They are separate locations within the wider municipality. Compare the real room, useful hours and full transfer instead of booking by municipal name alone.",
      },
      {
        question: "Can I combine Jiaxing with Xitang, Nanxun or Haining?",
        answer:
          "Only with a separately planned route and enough time for the reason you want to go. Xitang is in Jiashan, Nanxun is in Huzhou, and Haining has its own city and Yanguan-related interests. A tide-viewing outing needs a dated assessment and managed access. None is automatically included in a Jiaxing city day.",
      },
    ],
    culturalStory: {
      title: "Read the lake and the canals as different kinds of history",
      paragraphs: [
        "South Lake's place in modern Chinese political history is central to understanding why it receives organized visits and commemorative interpretation. Explain the 1921 congress context clearly, distinguish the commemorative Red Boat from the original vessel and let guests choose how much exhibition time suits their interests. A memorial presentation, its objects and its narrative are not the same as a lakeside walk. Confirm current language support, photography rules and entry arrangements rather than assume every display has English interpretation or every boat route reaches the same place.",
        "At Yuehe, change the scale from national commemoration to the relationship between water, commerce and urban life. Look at lane connections, bridge approaches and the way buildings face streets and waterways. Distinguish documented heritage from repairs and contemporary retail uses. The wider Grand Canal is a defined serial World Heritage property; that designation does not make every photogenic canal-side building a UNESCO site. A well-explained walk can be enjoyable and historically useful without describing the district as untouched or treating residents as part of the display.",
      ],
    },
    foodStory: {
      title: "Make room for a fresh meal, not only a boxed souvenir",
      paragraphs: [
        "Jiaxing is known for zongzi (粽子), glutinous-rice parcels wrapped in leaves, with savory and sweet fillings that vary by shop. A freshly prepared parcel can make a useful tasting without turning lunch into a tour of souvenir counters. Ask about the filling, portion and texture; pork, beans, egg or other ingredients should be checked in the actual version. Wontons and seasonal dishes can round out the meal. Zongzi belong to a wider Chinese food tradition, so explain Jiaxing's local association without claiming that every variety originated here.",
        "Glutinous rice does not by itself indicate wheat gluten, but fillings, sauces, broth and shared equipment still matter for allergies and dietary requests. Ask about pork, seafood, egg, soy, wheat and the kitchen's ability to control cross-contact. A vegetable dish or sweet parcel is not automatically suitable for every diet. Choose a seated meal with enough time and a kitchen that can explain what it serves. A tasting, a retail visit and a cooking session are different activities; no private host or hands-on class is implied by a food stop.",
      ],
    },
    itinerary: [
      {
        day: "Morning / arrival",
        title: "Give South Lake a clear purpose and a manageable route",
        description:
          "Complete the journey to the actual entrance or hotel and arrange luggage. Choose a shore walk and, when it suits your interests and confirmed access, an indoor historical visit. Add a boat or island route only as a specifically arranged element rather than assume it is part of every lake visit.",
      },
      {
        day: "Lunch and afternoon",
        title: "Change scale from the lake to Yuehe's canal-side streets",
        description:
          "Take a seated lunch with a small local-food tasting if desired, then follow a selective Yuehe route with bridge and rest choices suited to the group. Use an open cultural display instead when weather or interest makes it a better fit. Day visitors leave a proper buffer for the full return journey.",
      },
      {
        day: "Optional city night",
        title: "Enjoy dinner without turning the evening into another transfer",
        description:
          "Settle into the confirmed room and keep dinner convenient. Choose an evening walk according to current access, weather and lighting. Public streets, individual shops, memorials and boat operations need not share opening hours. An overnight does not guarantee an empty district or a quiet canal-facing room.",
      },
      {
        day: "Following morning",
        title: "Continue to a distinct city or water-town stay",
        description:
          "Leave time for breakfast and a short visit that fits the actual departure, then collect luggage for Shanghai, Hangzhou or a separately chosen water-town property. A second city night needs an additional purpose. This outline is illustrative, not a published package or a guarantee of tickets, boats, rooms, tide viewing or private access.",
      },
    ],
  },
};
