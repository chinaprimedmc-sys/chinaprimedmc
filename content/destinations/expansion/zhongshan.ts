import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/zhongshan.svg",
  alt: "Original Zhongshan planning schematic separating Cuiheng and Sun Yat-sen history, Shiqi old-city interests and Qijiang Park, with different hotel bases; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const zhongshanGuide: ExpandedDestination = {
  id: "zhongshan",
  name: "Zhongshan",
  region: "south",
  kicker: "Cuiheng history, Shiqi streets and a shipyard's second life",
  description:
    "Explore Zhongshan through Sun Yat-sen's Cuiheng home, selected Shiqi streets and Qijiang Park, with clear day-trip, food and overnight choices.",
  stay: "A focused day trip or 1–2 nights for distinct local chapters",
  bestFor: "Modern Chinese history, urban heritage, landscape design and Cantonese food",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["zhuhai", "guangzhou", "shunde"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Zhongshan Travel Guide: Cuiheng, Shiqi & Stays",
    seoTitle: "Zhongshan Guide: Cuiheng, Shiqi & Stays",
    seoDescription:
      "Plan Zhongshan's Sun Yat-sen history at Cuiheng, Shiqi old-city streets, Qijiang Park and local food. Compare day trips, hotel areas and one- or two-night stays.",
    answer:
      "Zhongshan (中山) is a city in Guangdong's western Pearl River Delta, named for Sun Yat-sen, also known as Sun Zhongshan (孙中山). Its strongest visitor chapters are different places: Cuiheng (翠亨) for his former residence and historical context, Shiqi (石岐) for selected city streets and food, and Qijiang Park (岐江公园) for the reuse of a former shipyard landscape. A focused day visit can suit one clear purpose; one or two nights allow more useful local time when the arrival and departure work. A central city room and a Cuiheng/Nanlang-area base serve different priorities. Choose the main subject and actual hotel before fixing transport. Zhongshan city is not simply any street, park or memorial elsewhere bearing Sun Yat-sen's name.",
    stayAnswer:
      "Choose a day visit when one main subject justifies the full return from the actual starting hotel. One night can support a selective stop with useful arrival and departure hours; it does not necessarily provide a full local day. Two nights give one complete day and can combine complementary city or Cuiheng subjects at a comfortable pace. Add further time only for a real specialist interest or worthwhile hotel rest. The point is not to collect every Sun Yat-sen memorial in the region or turn each food specialty into another cross-city transfer.",
    hotelAnswer:
      "Compare a central Shiqi or other precisely located city hotel for meals and urban interests with a Cuiheng/Nanlang-area property when the historical visit or onward gateway is the priority. The labels cover different roads and services. Check the actual room's quiet, bathroom, temperature control, breakfast, luggage and pickup. An old-city setting may offer atmosphere with traffic or evening activity; a modern room may offer more dependable comfort. A broad Zhongshan address, a river view or a station-side location does not establish convenience for every chapter.",
    sightseeingQuestion: "Should I prioritize Cuiheng or Zhongshan's city center?",
    sightseeingAnswer:
      "Choose Cuiheng for a substantial introduction to Sun Yat-sen's life and the setting of his former home, with the actual open buildings and exhibition route confirmed. Choose Shiqi and Qijiang for a city-led day connecting streets, food and industrial landscape reuse. They can complement one another when full roads and visiting hours support it. With a short transport window, one well-explained chapter is stronger than a rushed residence photograph followed by a distant meal. A specialist historical or design interest should shape the interpretation, not just the attraction list.",
    visitorResources: [
      {
        label: "Zhongshan municipal government",
        href: "https://www.zs.gov.cn/",
        scope:
          "City background and dated notices, mainly in Chinese. Check the actual Sun Yat-sen residence institution, open buildings, exhibitions and visitor entrance separately. General city information does not verify a specialist, private room, event or current restaurant arrangement.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and exact stations, then both terminal and hotel roads. Zhongshan and Zhongshan North are different gateways. A Cuiheng/Nanlang-led itinerary needs its own complete approach; choose the actual ticketed service rather than infer convenience from a regional station label.",
      },
    ],
    serviceScope:
      "A proposal should name the room, gateway, full transfers, guide language, selected museum and public street or park routes, admissions and meals. At Cuiheng, distinguish the former residence, wider village context and current exhibitions rather than describe every nearby visitor attraction as an original historic building. At Qijiang Park, specify whether the interest is a gentle walk or substantive landscape-design interpretation. A historian, designer, private venue or special appointment needs a separately confirmed arrangement. A good private day improves explanation and pacing without implying unrestricted institutional access.",
    routeAdvice:
      "Guangzhou offers a different Sun Yat-sen and modern-city context alongside Cantonese food and trade history. Shunde offers a separate food-led stay or excursion. Choose what each adds instead of repeating similar memorials or heavy meals. Compare the actual hotels, districts and complete roads before combining stops. No matching published Zhongshan product is recommended here. Share dates, exact gateways, historical or design interests, walking preferences and room expectations for a proposal that protects useful visiting time and gives each subject a clear purpose.",
    practicalPlanning: {
      timing:
        "Put the principal museum or residence visit within confirmed opening and entry arrangements, allowing explanation, questions and any internal walking. Add city streets or a park only when the full road leaves useful time. Schedule a food interest around an actual kitchen and suitable meal rather than a claim that every restaurant serves a specialty all day. Protect the complete onward transfer from the last visitor exit, not just the city center.",
      walking:
        "Review the selected Cuiheng route, thresholds, steps, shade, toilets and seating. A former residence and an exhibition hall may have different access. City arcade walks involve crossings and uneven or busy sections; Qijiang Park needs a defined path and return. Waterfront scenery does not establish a continuous step-free route. Agree a shorter coherent alternative for anyone who will not follow the whole outing.",
      cost: "Compare the actual room category, full guide and vehicle time, named admissions and meals. Specialist history or landscape interpretation is a defined service, not an automatic feature of every English-language day. Purchases and optional tastings should be separate unless stated. A premium quote should explain better interpretation, quiet sleep, pacing and support rather than imply private access to a former residence or an unconfirmed meeting with an expert.",
    },
    attractions: [
      "Sun Yat-sen's Former Residence / 孙中山故居 and the responsible museum's current public route at Cuiheng",
      "Selected Cuiheng village context, distinguishing historic fabric, repair and visitor presentation",
      "Sunwen West Road / 孙文西路, on a manageable Shiqi city-history walk",
      "Qijiang Park / 岐江公园, for a selected walk and former-shipyard landscape interpretation",
      "A regional meal featuring Shiqi pigeon when it suits the group and actual kitchen",
      "A small almond-biscuit tasting with ingredients checked, rather than another compulsory shopping stop",
    ],
    stays: [
      {
        label: "Day visit / one main purpose",
        advice:
          "Choose Cuiheng history or a coherent city chapter around the full return. Add a complementary subject only when the actual roads and opening leave useful time. A short visit should not be described as complete coverage of the city and every memorial.",
      },
      {
        label: "1 night / a selective stop",
        advice:
          "Can suit a route through the delta when arrival and departure leave worthwhile local hours. Compare a city meal and urban stay with a Cuiheng-led base. A late check-in and early checkout do not create a full day simply because a hotel night is included.",
      },
      {
        label: "2 nights / one complete local day",
        advice:
          "Protect the principal interest and allow a thoughtful meal and rest. Combine distinct chapters only when they fit the actual route. Add further nights for depth or a room that rewards downtime, not to repeat similar monuments or shopping streets.",
      },
    ],
    hotelAreas: [
      {
        name: "Shiqi and central city choices / meals and urban interests",
        advice:
          "Use exact addresses to compare the chosen streets, park and dinner. Check noise, bathroom, temperature control, breakfast, bags and pickup. A historic-looking frontage does not establish heritage accommodation or a quiet room.",
      },
      {
        name: "Cuiheng / Nanlang area / a history-led plan",
        advice:
          "Consider when the actual property improves the main residence visit or complete onward route. Check the remaining road, evening meals and room standards. A nearby hotel does not include special access, an expert or entry outside the institution's current public arrangements.",
      },
      {
        name: "An existing regional hotel / a focused day-visit option",
        advice:
          "Compare a complete return from the actual Guangzhou, Shunde or other base with the cost and time of moving rooms. A regional road connection is not a guarantee of a short journey from every district. Choose the arrangement that leaves more useful local time and better rest.",
      },
    ],
    tradeoffs: [
      {
        title: "Cuiheng is a historical setting, not a substitute for the whole biography",
        advice:
          "Use the actual house, village context and displayed evidence to ask about Sun Yat-sen's early life, overseas connections and later significance. Separate an original object, restored space, reproduction and commemorative presentation. A familiar name does not make every nearby building contemporary with his childhood. Give a complex life more context than a single heroic anecdote or a quick exterior photograph.",
      },
      {
        title: "Xiangshan is a useful historical term with changing boundaries",
        advice:
          "Older references to Xiangshan / 香山 help explain regional identity before the present Zhongshan name. Historical jurisdiction and today's city boundary are different things; do not assign every place in an older account to the current municipality. The same caution applies to Sunwen or Zhongshan streets elsewhere in China: a shared commemorative name is not the same visitor destination.",
      },
      {
        title: "Qijiang Park asks a different question from a classical garden",
        advice:
          "The park reuses a former shipyard landscape. Look at the relationship between retained industrial traces, water, planting, paths and public use. Ask which elements survive, which were adapted and which are new design. A park visit can be a relaxed walk, but a design-led guest may want interpretation that connects those visible choices rather than another generic garden description.",
      },
      {
        title: "A city meal is part of the route, not proof of a second full destination",
        advice:
          "Shiqi pigeon and a small biscuit tasting can add local specificity without sending the group across the municipality for each bite. Choose an actual kitchen, portion plan and comfortable meal time. If Shunde is also included, give the two meals different purposes and enough appetite. More famous dish names do not automatically make a better food itinerary.",
      },
      {
        title: "Transport convenience depends on the chosen chapter",
        advice:
          "The most suitable station or road approach changes with the hotel and principal visit. A city-center plan and a Cuiheng-led plan can favor different gateways. Count terminal access, bags, road time and the final departure transfer before choosing from a headline rail duration. Moving rooms is useful only when it improves the actual journey or stay.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "zhuhai",
        advice:
          "Zhuhai adds a coastal city stay, selected Tangjiawan or Beishan heritage and a separate property-led choice. Compare exact hotels and complete connections rather than treat the historical Xiangshan context as one present-day touring district. Macao crossings and offshore islands require their own traveler, transport and room arrangements.",
      },
      {
        slug: "guangzhou",
        advice:
          "Guangzhou adds Cantonese trade and city history, with a distinct Sun Yat-sen context if the guest wants it. Choose complementary evidence rather than repeat similar commemorative stops. Review exact hotels and full connections; the published Guangzhou–Shenzhen business itinerary does not automatically include Zhongshan.",
      },
      {
        slug: "shunde",
        advice:
          "Shunde offers a separate food-led district visit or stay, with its own kitchen choices and meal pacing. Compare the actual Daliang or other district address and complete road. A Shiqi pigeon meal and a Shunde food day should complement one another rather than become an overfilled tasting checklist.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for village and city walking, with current rain, heat and holidays checked. Summer needs shade, water and shorter exposed blocks. A museum can provide an indoor chapter only when its actual opening and route are confirmed. Wet weather changes the comfort of an arcade or waterfront walk even when the city remains accessible. Choose dates around the principal interest and suitable room rather than promise empty streets, a particular park scene or expert availability from a seasonal description.",
    orientation:
      "Zhongshan is a municipality in Guangdong's western Pearl River Delta. Shiqi city interests and Cuiheng in the Nanlang area require different roads and base decisions. Sun Yat-sen / Sun Zhongshan / 孙中山 and Sunwen / 孙文 identify the same historical figure. Xiangshan / 香山 is a historical regional name whose boundaries need context. Qijiang Park / 岐江公园 here is not Chongqing's Qijiang / 綦江. Choose a Shiqi city base or a Cuiheng-focused route according to your main interests; a business visit needs its own confirmed address and appointment.",
    experiences: [
      "Understand Sun Yat-sen's Cuiheng setting through the actual house and open historical evidence",
      "Read selected Shiqi streets through trade, architecture and present city life",
      "Explore a former shipyard's landscape reuse at Qijiang Park and a considered regional meal",
    ],
    planningNotes: [
      "Choose Cuiheng or a city-led chapter before fixing the gateway",
      "Distinguish original objects, restored spaces and commemorative interpretation",
      "Use actual roads and appetite to combine history, a park and food",
    ],
    arrival:
      "Check dated trains and the exact gateway, including Zhongshan versus Zhongshan North, then both hotel roads. A Cuiheng or Nanlang-area plan needs its own approach. A Guangzhou or Shenzhen connection is only useful when terminal access, bags and the complete final road leave worthwhile local hours. For a vehicle approach, compare actual addresses and current routing rather than a bridge or regional label alone. Keep the essential museum visit away from uncertain arrival.",
    gettingAround:
      "Build the day around the selected hotel, museum entrance, city street route, park path and actual meal. Clarify vehicle waiting, guide accompaniment, luggage and pickup. Private transport does not remove the walking inside a heritage site or create access to closed buildings. General guiding and specialist historical or landscape-design interpretation are different services. Choose fewer well-explained subjects instead of repeated transfers across the city.",
    stayStrategy:
      "A focused day visit may be enough for one subject when the full return is comfortable. One night can support a selective stop; two give one complete day. Compare a central city room with a specific Cuiheng/Nanlang-area property on quiet, bathroom, climate control, meals and full roads. Add time only when it improves understanding or rest. High-end value comes from thoughtful explanation, dependable rooms and well-paced meals rather than an inflated list of monuments.",
    firstTimerNote:
      "Start with what you want to understand. Cuiheng offers a personal and historical setting; Shiqi offers city life and food; Qijiang adds industrial landscape reuse. Then choose the combination that leaves useful time. A former-residence photograph, a hurried street walk and an overlarge meal are not automatically a richer day than one substantive chapter with room for questions.",
    faqs: [
      {
        question: "Is Zhongshan worth visiting from Guangzhou?",
        answer:
          "It can be for a clear interest in Sun Yat-sen's Cuiheng home, selected city heritage or Qijiang Park's landscape design. Compare the complete return with one or two nights. A regional transport connection alone does not make every Zhongshan interest fit into a day trip.",
      },
      {
        question: "Where is Sun Yat-sen's former residence in Zhongshan?",
        answer:
          "It is at Cuiheng / 翠亨 in the Nanlang area, separate from the main Shiqi city interests. Confirm the responsible institution's actual visitor entrance, open buildings and exhibition route, then the full road from the chosen hotel or station.",
      },
      {
        question: "How many nights should I spend in Zhongshan?",
        answer:
          "One night can support a selective stop with favorable transport; two give one complete local day. A focused day visit may be enough for one main purpose. Additional time should add a substantial interest or worthwhile rest rather than repeated commemorative stops.",
      },
      {
        question: "Should I stay in Shiqi or near Cuiheng?",
        answer:
          "Choose a central city room for meals and urban interests, or a specific Cuiheng/Nanlang-area hotel when the historical visit or onward route is the priority. Compare exact roads, quiet, bathroom, climate control and evening food rather than rely on a broad district label.",
      },
      {
        question: "Why visit Qijiang Park?",
        answer:
          "It provides a public landscape created from a former shipyard setting. A useful visit considers retained industrial traces, water, planting and current public use. Choose a defined walk or substantive design interpretation according to the guest's interest and physical needs.",
      },
      {
        question: "What should I eat in Zhongshan?",
        answer:
          "Shiqi pigeon can anchor a regional meal when it suits the group; a small almond-biscuit tasting offers a different texture and preparation question. Confirm actual recipes, portions and dietary needs. A specialty name does not establish the ingredients or require another long transfer.",
      },
      {
        question: "How do I plan a private Zhongshan visit?",
        answer:
          "Share dates, gateways, walking preferences and whether the main interest is Cuiheng history, city heritage, landscape design or food. Ask for the actual route, room if needed, guide, meals and complete transfers. No matching published product is recommended here; shape the proposal around useful time and clear interpretation.",
      },
    ],
    culturalStory: {
      title: "A former home and a former shipyard reveal different kinds of change",
      paragraphs: [
        "At Cuiheng, the value of a visit lies in connecting a particular setting with a life whose significance extends far beyond it. The house, village surroundings and current exhibitions can introduce early experience, overseas connections and later remembrance when a guide identifies what the evidence actually supports. A room reconstructed for interpretation is different from an original object; a commemorative account is different from a private letter or dated photograph. Those distinctions help a visitor understand the place more clearly without requiring every building to be untouched or every story reduced to a single simple message.",
        "Qijiang Park shifts attention from biography to urban change. A former industrial landscape becomes a public place through decisions about what to retain, adapt and add. Look at how paths approach water, how planting meets industrial traces and how people use the space today. A selected Shiqi street walk offers another scale of change through shopfronts, covered pedestrian space and daily activity. Together these subjects can make a coherent city chapter when the guide explains the visible relationships instead of calling every attractive place a traditional garden or an unchanged old town.",
      ],
    },
    foodStory: {
      title: "Choose a clear meal and a small, well-explained tasting",
      paragraphs: [
        "Shiqi pigeon / 石岐乳鸽 is a useful local food subject for guests who want to try it. Ask how the actual kitchen cooks and serves the bird, how many people a portion suits and whether sauce or seasoning needs adjustment. Bones and the size of the bird matter for children and for guests unfamiliar with the dish. Balance it with vegetables, tofu or another suitable preparation rather than ordering several rich specialties simply because each has a famous name. A thoughtful alternative should be available for anyone who does not eat pigeon.",
        "Almond biscuits, often called xingren bing / 杏仁饼, deserve an ingredient question before a souvenir purchase. Some preparations use a mung-bean base with nuts or other additions; the name does not prove a universal recipe, a particular almond content or freedom from animal fat. Confirm the actual producer's ingredients and shared preparation for nut, legume, wheat or other dietary concerns. A small tasting can explore crumbly texture and aroma without becoming a shopping requirement. Check packing and destination-country food rules separately if guests want to take them home.",
      ],
    },
    itinerary: [
      {
        day: "Approach or arrival",
        title: "Use the gateway that serves the main subject",
        description:
          "Complete the agreed road from the current hotel or exact station. For an overnight, check the booked room and meal plan. Confirm the historical institution's current entry and open route rather than attach the essential visit to an uncertain arrival.",
      },
      {
        day: "Main local day",
        title: "Give one chapter enough time",
        description:
          "Choose a substantial Cuiheng visit or a coherent city-led route through selected Shiqi streets and Qijiang Park. Allow explanation, questions, lunch and rest. Combine the chapters only when full roads and opening leave worthwhile time at each.",
      },
      {
        day: "Optional complementary time",
        title: "Add contrast rather than another similar stop",
        description:
          "Use favorable arrival or departure hours, or genuinely additional time, for a different selected subject and a considered regional meal. A specialist historical or landscape interest needs its own arrangement. This is not a requirement to add a third hotel night.",
      },
      {
        day: "Return or onward departure",
        title: "Protect the complete connection",
        description:
          "Allow bags, pickup and the full road to the next room or exact station. Continue to Guangzhou or a chosen Shunde district with useful time for its own subjects. This outline is illustrative, not a published package or promise of private residence, expert or venue access.",
      },
    ],
  },
};
