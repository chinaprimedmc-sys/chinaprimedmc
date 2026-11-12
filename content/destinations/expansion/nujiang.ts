import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/nujiang.svg",
  alt: "Original Nujiang planning schematic separating lower-valley road stages, Bingzhongluo local nights and separately assessed side valleys; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const nujiangGuide: ExpandedDestination = {
  id: "nujiang",
  name: "Nujiang",
  region: "southwest",
  kicker: "A river-valley journey measured in useful days, not distance covered",
  description:
    "Plan the Nujiang valley in western Yunnan with clear overnight stages, Liuku and Bingzhongluo base choices, village walking and separate side-valley decisions.",
  stay: "5–7 nights as a starting point for a staged valley journey",
  bestFor: "River landscapes, thoughtful village walks and a substantial Yunnan road journey",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["bingzhongluo", "tengchong", "nuodeng"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Nujiang Travel Guide: Valley Routes & Where to Stay",
    seoTitle: "Nujiang Guide: Valley Routes & Stays",
    seoDescription:
      "Plan a Nujiang valley road trip in Yunnan: Liuku, Fugong, Gongshan and Bingzhongluo, useful overnight stages, village walks and separate side-valley decisions.",
    answer:
      "Choose Yunnan's Nujiang valley for a gradual journey through river landscapes and culturally diverse mountain communities. Test five to seven nights against your gateway, road stages and two or three nights in Bingzhongluo; a shorter trip should cover less ground. Liuku, Fugong and Gongshan are distinct stages along the valley. Dulong Valley and Laomudeng–Zhiziluo need separate route decisions. This guide concerns a selected prefecture journey, rather than the entire Nu River basin.",
    stayAnswer:
      "For a staged journey reaching Bingzhongluo, test five to seven nights with the real arrival, departure and hotel addresses. Reserve two or three of those nights for Bingzhongluo when village walking is a main reason to come; assign the remaining nights to worthwhile road stages and the gateway as needed. Five nights can still be too compressed for distant gateways or additional side valleys. With only three or four nights, consider a selected lower or middle valley stay rather than rush to the northern endpoint and back. Extra nights should improve local time, flexibility or sleep, not simply add distance.",
    hotelAnswer:
      "Choose hotels as a sequence: a lower-valley service base around Liuku, a suitable middle-valley or Gongshan road-stage room, and a specific Bingzhongluo property if the journey goes north. These locations are not interchangeable hotel districts. Laomudeng-area or other hillside accommodation requires its own final-road, luggage, meal and room assessment. For each overnight, check the booked room, quiet, temperature control, hot water, bathroom, bedding, dinner and breakfast. Ask about current check-in arrangements for the actual guests. A scenic guesthouse photograph does not establish the service standard expected on a premium trip.",
    sightseeingQuestion: "Should I travel the whole Nujiang valley or focus on one section?",
    sightseeingAnswer:
      "Choose the longer journey when river landscapes, village walking and time on the road are central interests, and the group accepts the actual room options and repeated transfers. Choose a shorter section when time, motion tolerance or hotel expectations make a northern return unattractive. Reaching Bingzhongluo is not the only measure of a successful trip. A well-chosen walk, a clear cultural subject and two comfortable nights in one place can offer more than a distant endpoint reached mainly for a photograph. Compare useful hours outside the vehicle, not just kilometers on the itinerary.",
    visitorResources: [
      {
        label: "Nujiang prefecture government",
        href: "https://www.nujiang.gov.cn/",
        scope:
          "Prefecture-wide background and dated notices, mainly in Chinese. Use the relevant county and provider to confirm the exact roads, public visitor routes, traveler arrangements and accommodation. A regional tourism description does not establish unrestricted access or current operating conditions throughout the prefecture.",
      },
      {
        label: "Gongshan county government",
        href: "https://www.gongshan.gov.cn/",
        scope:
          "County context for Gongshan, Bingzhongluo and the separate Dulong Valley decision. Check present eligibility, roads, rooms and services for the actual travelers and dates. A shared county does not make all destinations convenient or available in one excursion.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services to a practical gateway, then the complete road to the first valley hotel. A rail connection to another Yunnan city does not remove the remaining road stages. Match exact station and hotel addresses before fixing the overnight sequence.",
      },
    ],
    serviceScope:
      "A proposal should show the actual gateway, every overnight, full road stages, vehicle and driver arrangements, guide language, selected public walks, meals and booked room categories. Identify what each stop explains and how much time guests have outside the vehicle. Confirm current travel and check-in arrangements for the actual guests before booking. Home visits, church interiors, ceremonies, specialist hikes, drones, Dulong Valley or a Tibet continuation need separate assessment and any required permissions. A private vehicle does not grant access to closed roads or private land. State the alternative and booking consequences if a route changes.",
    routeAdvice:
      "Begin with your tolerance for road days and the time you want to spend walking or exploring villages. We can then assess a tailored Nujiang route, choosing worthwhile valley overnights and a focused Bingzhongluo stay. Share dates, gateways, room expectations and the total available nights. Tengchong or Nuodeng can add a contrasting chapter when their complete road connections work. Ask what each extra overnight gives you before adding another side valley.",
    practicalPlanning: {
      timing:
        "Build the day from the named hotel to the next named hotel, including meals, sensible stops, road conditions and driver arrangements. Keep arrival and departure margins separate from local sightseeing. A long valley road day is not also a full village-walking day. Protect the main walk from uncertain arrival and avoid a tight flight immediately after the final substantial drive. A changeable road needs an operational alternative, not just another viewpoint added to the list.",
      walking:
        "Separate short public viewpoints, village paths, hillside lanes and longer mountain walks. For each selected walk, establish surface, gradient, steps, exposed edges, toilets, seating, start, finish and pickup. Rain can change both footing and access. Do not infer difficulty from a single level photograph. The fast-flowing Nu River is not a casual bathing location; scenic river access does not authorize entering the water. Choose a worthwhile shorter route for guests whose needs differ.",
      cost: "Assess the complete vehicle days, driver expenses and any repositioning, guide and interpreter time, rooms, meals, admissions and route alternatives. A low local room price does not describe the cost of the whole journey. Compare proposals with the same overnight sequence and actual inclusions. Paying more should produce visible improvements in pacing, interpretation, sleep and support. A private host, specialist or unusual access should be specifically confirmed rather than implied by the word exclusive.",
    },
    attractions: [
      "The Nu River valley from selected public viewpoints with safe stopping places",
      "Liuku and Lushui as a practical lower-valley introduction and service base",
      "A selected Fugong-area cultural or hillside route, with exact roads and access checked",
      "Laomudeng and Zhiziluo as a deliberate hillside chapter rather than a passing stop",
      "Bingzhongluo and a suitable Wuli-area village walk, developed in the dedicated guide",
      "A separately assessed Dulong Valley interest, only when current arrangements support it",
    ],
    stays: [
      {
        label: "3–4 nights / a selected section",
        advice:
          "Choose one coherent lower- or middle-valley interest with useful time at the base. Test the complete gateway roads first. Do not describe a rushed northbound return as comprehensive Nujiang exploration or promise that every side valley fits.",
      },
      {
        label: "5–7 nights / a staged journey toward Bingzhongluo",
        advice:
          "A starting framework for appropriate road-stage nights plus two or three local nights in the north, depending on actual gateways. Give each overnight a purpose and count arrival and departure honestly. This range does not guarantee that every proposed routing is comfortable.",
      },
      {
        label: "8 or more nights / deeper interests or additional stages",
        advice:
          "Use extra time for checked walking, photography, rest or a distinct side-valley chapter. Eligibility, roads and services still require confirmation. A longer itinerary should show greater depth or comfort rather than repeat similar stops or assume border continuations are available.",
      },
    ],
    hotelAreas: [
      {
        name: "Liuku, Lushui / lower-valley services",
        advice:
          "A practical place to assess the next road stage, meals and supplies. Choose the exact room for quiet, bathroom and climate control, plus breakfast and pickup. A riverside address is not proof of an unobstructed view or easy access to a safe walking route.",
      },
      {
        name: "Fugong-area or Gongshan town / purposeful road-stage nights",
        advice:
          "These are different stages, not neighboring hotel zones. Choose according to the actual next day's interest and full transfer. Check room comfort, dinner, early breakfast and luggage. A hillside alternative needs its own final approach rather than being assumed equivalent to a town hotel.",
      },
      {
        name: "Bingzhongluo / local walking base",
        advice:
          "Allocate two or three local nights when selected village walks justify them. Compare town convenience with a named surrounding property on food, quiet, temperature control, bathroom, vehicle access and the real view. Consult the dedicated guide before selecting the local route and room.",
      },
    ],
    tradeoffs: [
      {
        title: "Nujiang is a region, not one destination hotel",
        advice:
          "The prefecture includes several administrative areas and different landscapes. A hotel marketed with the Nujiang name does not serve every valley interest equally. Put the actual overnight addresses and selected visits on the plan before comparing room prices or claiming a route is convenient.",
      },
      {
        title: "Laomudeng and Zhiziluo need a hillside decision",
        advice:
          "These Fugong-area places offer a different settlement and cultural-history subject from the main river road. The approach and any walks use their own time. Ask which public spaces, buildings and stories form the visit, whether a church interior is actually open, and how the vehicle and meals work. A famous village name does not establish a private invitation or suitable room.",
      },
      {
        title: "Dulong Valley is not a quick addition to the northbound route",
        advice:
          "Dulongjiang is a separate valley and road decision within the wider Gongshan area. Confirm current traveler eligibility, road operation, accommodation and services before allocating nights. Neither a Bingzhongluo reservation nor a regional tourism description proves that the extension is available to the actual group.",
      },
      {
        title: "A regional label does not describe one uniform culture",
        advice:
          "Nujiang Lisu Autonomous Prefecture also contains Nu, Dulong, Bai and other communities. Let interpretation identify the actual place, language, institution and speaker. Religious buildings, working farms and private homes have different visitor arrangements. Contemporary livelihoods deserve attention alongside historic stories; residents should decide whether and how to participate.",
      },
      {
        title: "A valley drive and a mountain hike require different planning",
        advice:
          "Road-accessible scenery is not evidence that a higher trail is straightforward. Check the exact route, height, weather, equipment, guide competence and support for any substantial hike. A valley forecast or a private driver cannot establish mountain conditions, and a scenic bridge is not an invitation to improvise a trail.",
      },
      {
        title: "High-end travel here depends on choices that can be delivered",
        advice:
          "A suitable room, careful driving plan, reliable food and an interpreter who explains specific places are tangible benefits. A remote setting does not establish an international luxury-lodge standard. If the available accommodation or road burden does not fit the guest, a shorter Yunnan route can be the more thoughtful recommendation.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "bingzhongluo",
        advice:
          "Use the dedicated guide to choose two or three local nights, a specific Wuli-area walk and a town or surrounding property. Those nights are part of the wider Nujiang journey, not extra nights that can disappear from the regional schedule. Local detail does not establish access to every neighboring valley.",
      },
      {
        slug: "tengchong",
        advice:
          "Tengchong offers a contrasting western Yunnan chapter with Heshun, volcanic landscapes and separately assessed hot-spring properties. Check the full connection and actual gateway services before combining it with the valley. A property-led rest can be useful, but should not create another rushed road day.",
      },
      {
        slug: "nuodeng",
        advice:
          "Nuodeng provides a distinct salt-history and stepped-village interest in Yunlong County. Add it only when the actual gateway road and overnight sequence justify the detour. Village stairs, luggage and rooms need their own assessment; it is not a compulsory stop on every Nujiang approach.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for valley walking and road-trip research, subject to the exact routes and current conditions. Wetter periods can affect roads, paths and visibility; colder months change daylight, room heating and higher-road considerations. A valley-town forecast does not establish conditions in a side valley or on a mountain path. Choose dates for the main activity, check the actual road and keep a worthwhile alternative. Festivals, clear peaks and specific hosts should never be promised from the season alone.",
    orientation:
      "Nujiang Lisu Autonomous Prefecture lies in western Yunnan. The main valley sequence runs broadly from the Liuku/Lushui area through Fugong and Gongshan toward Bingzhongluo. This is a travel framework, not a geographic map or a guarantee of continuous road operation. Lanping is also within the prefecture, but lies outside this main-valley sequence; include it only with a separate road and overnight plan. Laomudeng–Zhiziluo and Dulong Valley require their own route decisions. The Nu River continues downstream beyond China as the Salween; this guide does not cover its entire basin or cross-border travel.",
    experiences: [
      "Read the river landscape through selected stops with useful time outside the vehicle",
      "Explore a specific village or hillside subject with local context and appropriate consent",
      "Combine comfortable road stages with a worthwhile Bingzhongluo walking stay",
    ],
    planningNotes: [
      "Show every overnight and full road stage before deciding the trip length",
      "Protect two or three Bingzhongluo nights when northern village walking is the main purpose",
      "Assess side valleys, actual rooms and traveler arrangements separately",
    ],
    arrival:
      "Compare current flight or rail services through practical gateways such as Baoshan, Dali or Tengchong according to the rest of the trip, then calculate the complete road to the first hotel. These are alternatives to assess, not promises of equally convenient connections. Confirm the actual terminal and Chinese hotel address, meals, luggage and arrival margin. A dedicated valley airport or a direct rail arrival should not be assumed from the destination name. Keep an important local appointment away from uncertain arrival and the final road stage away from a tight flight.",
    gettingAround:
      "Plan a vehicle and driver arrangement for the full journey, including practical stopping places, meals and reasonable road stages. Driving, guiding and local interpretation are distinct roles. A guide should explain specific landscapes and communities rather than simply translate attraction labels. Select walks by actual start, finish and current condition, and agree pickup and a shorter option. Do not stop on narrow bends for photographs or enter private paths and worship without appropriate access.",
    stayStrategy:
      "Compare the whole hotel sequence rather than choose one attractive northern room first and force the road around it. Liuku can serve a lower-valley stage; middle-valley or Gongshan nights should have a practical or cultural purpose; Bingzhongluo earns its stay through local time. Review every booked category for sleep, bathroom, climate control and meals. Address dietary and mobility needs before paying. Premium planning includes recommending less distance when the current rooms or route cannot meet the guest's expectations.",
    firstTimerNote:
      "Request a plan with three things on each day: the overnight address, the full transfer and one clear reason to stop. Then count the days with meaningful time outside the vehicle. This quickly reveals whether the proposal is a thoughtful valley journey or mainly a return drive to a distant endpoint. Ask what changes if the principal walk or road becomes unsuitable, and ensure that the alternative still serves your interests.",
    faqs: [
      {
        question: "Is Nujiang the same place as Bingzhongluo?",
        answer:
          "No. Nujiang is a wider prefecture and river name. Bingzhongluo is a town within Gongshan county in the prefecture. Its local walking nights are one part of a longer regional journey, not a substitute for the approach and departure stages.",
      },
      {
        question: "How many nights should I allow for a Nujiang valley trip?",
        answer:
          "Test five to seven nights for a staged journey reaching Bingzhongluo, including two or three local nights there. The actual gateway and side trips may require more. With three or four nights, consider a selected valley section rather than a rushed northern return.",
      },
      {
        question: "Where should I stay in the Nujiang valley?",
        answer:
          "Choose a sequence of actual properties: a lower-valley base around Liuku as needed, suitable intermediate stages and a Bingzhongluo room if traveling north. Compare full roads, meals, quiet, bathroom and temperature control. These are separate bases, not interchangeable neighborhoods.",
      },
      {
        question: "Can Nujiang be a day trip from Dali?",
        answer:
          "A substantial valley journey should be planned with appropriate overnight stages. Dali is a possible gateway to assess, not evidence that Bingzhongluo or the whole valley fits a convenient return outing. Compare the complete road with useful visiting time before booking.",
      },
      {
        question: "Does a Nujiang itinerary include Dulong Valley?",
        answer:
          "Not automatically. Dulong Valley / Dulongjiang requires a separate road, overnight and current-access assessment for the actual travelers. A regional guide or a booking elsewhere in Gongshan does not confirm availability.",
      },
      {
        question: "Can foreign travelers visit the Nujiang valley?",
        answer:
          "Check the exact passports, dates, roads, hotels and proposed visits before booking. Do not treat arrangements for one town as permission for all side valleys, border roads or a Tibet continuation. This guide does not guarantee access approval or current operation.",
      },
      {
        question: "Is Nujiang suitable for a luxury Yunnan itinerary?",
        answer:
          "It may suit travelers who value landscapes and interpretation and accept the actual roads and available rooms. Assess specific properties, food, sleep and guiding rather than assume an international resort standard. A shorter route is preferable when the available stay does not meet the guest's needs.",
      },
      {
        question: "Which published Nujiang tour can I book here?",
        answer:
          "No matching published product is recommended on this page. A tailored proposal should name every overnight, full road stage, guide, walk, meal and actual inclusion. The sample route is a planning framework, not a package or access guarantee.",
      },
    ],
    culturalStory: {
      title: "Understand a valley through differences, not one regional label",
      paragraphs: [
        "A river connects settlements without making their histories or present lives identical. The autonomous-prefecture name should not be used to describe every resident as Lisu, nor should every village be presented as the same traditional encounter. A useful guide identifies the community, language, institution and source behind an explanation. In a hillside settlement, a church, an older public building and a working farm can tell different stories; their meanings should come from the actual place rather than a stock narrative about remote minorities.",
        "Depth also comes from understanding change. Roads, education, migration and tourism shape decisions about work and home. Residents may welcome public visitors while choosing not to host a meal, pose for a portrait or open a religious interior. Those are legitimate boundaries, not obstacles to an authentic trip. A willing speaker and good interpretation can make a short exchange valuable, but no private household or ceremony should be promised before the people involved have agreed.",
      ],
    },
    foodStory: {
      title: "Reliable meals make a long road journey more enjoyable",
      paragraphs: [
        "Plan meals along the actual road rather than assume a small village kitchen will be open at the required hour. Ask each restaurant or property what it prepares well, which ingredients are available and how a modest shared meal can suit the group. Rice or another staple, vegetables, tofu, soup and meat where wanted can be more useful than a large banquet followed by another long drive. A regional dish name is an introduction, not proof that every community cooks or eats the same way.",
        "Confirm stocks, wheat, dairy, nuts, spice and shared preparation as relevant. Serious allergies and strict dietary needs require the actual kitchen's capacity and a practical alternative for road days. Alcohol is optional; participation in a cultural visit should not depend on drinking. Agree drinking water, walking-day lunch, dinner on arrival and any early breakfast with the responsible provider. These ordinary details have a direct effect on comfort and deserve a place in a high-end proposal.",
      ],
    },
    itinerary: [
      {
        day: "Stage 1 / gateway and lower valley",
        title: "Begin with a realistic arrival",
        description:
          "Complete the chosen gateway transfer to a suitable lower-valley base, with meals and rest. Use a selected public river introduction only when useful time remains. This stage can need more than one night depending on the gateway; it is not a guaranteed same-day connection from every Yunnan arrival.",
      },
      {
        day: "Stage 2 / a purposeful intermediate stop",
        title: "Give the middle valley its own subject",
        description:
          "Choose the actual Fugong-area or other stop for a clear cultural or landscape interest. A Laomudeng–Zhiziluo chapter requires its own approach, route and available visit. Fix the overnight from the complete road and selected experience rather than add every place named along the corridor.",
      },
      {
        day: "Stage 3 / Bingzhongluo local stay",
        title: "Spend time in the landscape you came to see",
        description:
          "Reach the booked room and allow two or three local nights for a checked village walk, a distinct second interest if time allows, and rest. Use the dedicated Bingzhongluo guide for route and property decisions. Dulong Valley is not included by implication.",
      },
      {
        day: "Stage 4 / staged departure",
        title: "Plan the return as carefully as the approach",
        description:
          "Use appropriate road-stage nights and an adequate gateway margin rather than finish with an assumed uninterrupted dash to a flight. An onward Tibet or cross-border route requires separate assessment. This framework is illustrative, not a published package, exact day-by-day promise or guarantee of roads, rooms and access.",
      },
    ],
  },
};
