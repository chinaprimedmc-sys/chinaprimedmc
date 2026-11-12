import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/hangzhou.svg",
  alt: "Hangzhou accommodation planning diagram comparing eastern West Lake, quieter western lake settings and tea-village stays; schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const hangzhouGuide: ExpandedDestination = {
  id: "hangzhou",
  name: "Hangzhou",
  region: "east",
  kicker: "West Lake, Longjing tea & a base worth slowing down for",
  description:
    "Plan Hangzhou around a walkable section of West Lake, a meaningful tea visit and the hotel setting you want, with enough time to enjoy each rather than circle the city.",
  stay: "2–4 nights",
  bestFor: "Lake stays, tea and slower cultural travel",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: [
    "haining",
    "jiaxing",
    "nanxun",
    "jiande",
    "qiandao-lake",
    "ningbo",
    "wuzhen",
    "shaoxing",
    "shanghai",
    "suzhou",
    "huangshan",
    "hongcun",
    "moganshan",
    "lishui",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Hangzhou Travel Guide: West Lake, Tea & Where to Stay",
    seoTitle: "Hangzhou Travel Guide: West Lake & Tea Stays",
    seoDescription:
      "Compare Hangzhou hotel areas, West Lake walks and Longjing tea visits. Plan two to four nights, rail transfers and a tailored extension from Shanghai.",
    answer:
      "Hangzhou is worth staying in for the combination of West Lake, nearby tea-growing landscapes and time outside the pace of a major-city checklist. A rewarding visit selects one or two lake sections, gives a tea encounter its own purpose and leaves room for the hotel setting. The lake, Longjing villages and temples are separate planning points; seeing them well does not require trying to circle every shore in one day.",
    stayAnswer:
      "Two nights provide one full day for a selective lake introduction and either tea or another main interest. Three nights give two full days, allowing lake time and a tea or temple chapter to unfold separately. Four nights suit a slower hotel stay or deeper interests. A day trip from Shanghai can introduce one part of Hangzhou, but the train ride is only one leg of the complete hotel-to-visit journey.",
    hotelAnswer:
      "Choose the eastern side of West Lake for a city-and-lake balance and a wider range of nearby meals. Consider western or southern lake settings when the property and quieter surroundings are central to the stay, checking road access and dinner arrangements. A tea-village property offers a different, more rural experience and needs closer checks on luggage, room comfort and transport. A hotel advertised as West Lake may still be far from the shore or walk you want.",
    sightseeingQuestion: "Should you visit Hangzhou as a day trip or stay overnight?",
    sightseeingAnswer:
      "Take a day trip when you want a focused introduction and prefer to keep your Shanghai hotel. Stay two or three nights when lake mornings, tea and a different hotel setting are part of the holiday. Calculate station transfers and actual sightseeing time before comparing the options. An overnight visit earns its value through time in the place, not simply through adding another hotel check-in.",
    visitorResources: [
      {
        label: "UNESCO: West Lake Cultural Landscape of Hangzhou",
        href: "https://whc.unesco.org/en/list/1334/",
        scope:
          "Background on the cultural landscape and its significance. This does not verify current boats, temple admission, tea-host availability or a hotel's location and amenities.",
      },
      {
        label: "Hangzhou municipal government",
        href: "https://www.hangzhou.gov.cn/",
        scope:
          "City background and public announcements. Confirm date-specific transport, site access and privately arranged experiences separately.",
      },
    ],
    serviceScope:
      "We can discuss Hangzhou within a private China plan, specifying the hotel, transfers, guiding and any agreed tea or cultural encounter in the proposal. A tea farm, tasting room and private host are different settings. Establish the purpose, language, duration and any purchase expectations before confirming a session. Public lake areas and temples remain shared places, with normal access arrangements.",
    routeAdvice:
      "Discuss Hangzhou as a tailored extension from Shanghai or alongside Suzhou when those places add distinct value. Begin with the nights available and your interest in tea, landscape, temples or hotel time, then select the actual connections. We do not currently list a standalone Hangzhou itinerary on this page. Any extension to another published journey needs its own confirmed accommodation, transport and service scope.",
    practicalPlanning: {
      timing:
        "Choose a section of West Lake rather than committing everyone to a complete circuit. Keep time for seats, photographs and a meal, then give a tea visit or temple its own useful window. Do not put a distant tea-village reservation immediately after a train arrival. Local roads and holiday demand can change the day even when the rail journey looks short.",
      walking:
        "Lake promenades vary in distance, shade and access, while causeways can leave fewer easy opportunities to shorten a walk. Temples, village lanes and tea slopes introduce stairs and uneven ground. Describe walking tolerance before selecting the route. A vehicle can connect entrances but cannot follow every lakeside path or make a tea-field walk step-free.",
      cost: "Compare hotel position, room category, guided days, station transfers, admission, boat arrangements and any private tea session. A premium lake-facing room and a city hotel with a distant lake view are different offers. Establish whether tasting, food and purchases are included or optional; a product demonstration is not automatically a substantive cultural experience.",
    },
    attractions: [
      "West Lake",
      "Longjing tea villages",
      "Lingyin Temple area",
      "China National Tea Museum",
    ],
    stays: [
      {
        label: "Day trip: one clear introduction",
        advice:
          "Select a manageable lake section and one complementary interest only if transfers allow it. Keep the return train margin intact rather than adding stops to justify the journey.",
      },
      {
        label: "2 nights: one full day",
        advice:
          "Enjoy an evening and morning near the hotel, then choose a lake-and-tea or lake-and-temple focus. Arrival and departure are not two additional complete touring days.",
      },
      {
        label: "3–4 nights: separate the interests",
        advice:
          "Give tea and lake time different days, or protect hotel time. Add another night when it improves the rhythm, not to reproduce several similar scenic walks.",
      },
    ],
    hotelAreas: [
      {
        name: "Eastern West Lake and the city edge",
        advice:
          "Consider for lake access combined with independent dining and urban convenience. Check the precise shoreline approach, noise and room orientation; being in a central district does not guarantee a quiet lake-facing stay.",
      },
      {
        name: "Western and southern lake settings",
        advice:
          "Consider when a particular property, garden or quieter surroundings are the attraction. Check evening meals, vehicle access and the journey to your chosen visits. A secluded setting may mean fewer spontaneous dining options.",
      },
      {
        name: "Longjing and nearby tea-village settings",
        advice:
          "Choose deliberately for a tea-landscape stay. Verify the actual village, room heating or cooling, stairs, luggage approach and on-site meals. Rural character and premium comfort require separate checks.",
      },
    ],
    tradeoffs: [
      {
        title: "Walk a meaningful section of the lake",
        advice:
          "Discuss the view and experience you want: causeway, garden, shaded promenade or a shorter walk with places to rest. A longer route is not automatically a better introduction. Boat rides depend on the actual service, boarding point, weather and ticket arrangements.",
      },
      {
        title: "Make the tea encounter specific",
        advice:
          "A Longjing visit can focus on landscape, cultivation, preparation or tasting. Ask who hosts it and what you will learn. Harvest and processing are seasonal; a visit outside the working period should not promise live picking or roasting. Explain any purchase expectations before going.",
      },
      {
        title: "Give temples their own context",
        advice:
          "A Lingyin-area visit involves more than a roadside photograph. Confirm the exact area and admissions, remaining walking and time for explanation. Treat religious spaces respectfully and follow photography instructions rather than presenting them as private entertainment.",
      },
      {
        title: "Compare with Suzhou by interest",
        advice:
          "Hangzhou emphasizes lake landscape, tea and a longer resort-style stay; Suzhou offers classical gardens and canal neighborhoods. Choose one if the schedule is short. Combine them when each has its own nights and purpose, rather than moving hotels to collect two names.",
      },
    ],
    products: [
      {
        slug: "shanghai-suzhou-hangzhou-private-7-day-tour",
        label: "Explore the 7-day Shanghai, Suzhou and Hangzhou private tour",
        reason:
          "Follow a one-way six-night route through Shanghai, a Suzhou garden and Hangzhou tea country, with one Zhujiajiao excursion. Private local transfers connect two public trains; the itinerary ends in Hangzhou and is quoted for your dates.",
        comparison: {
          bestFor: "A complete Jiangnan regional journey with six hotel nights.",
          localPlan:
            "Shanghai three nights, Suzhou one and Hangzhou two; a garden, one water town and one hosted tea tasting.",
          importantChoice:
            "Two hotel changes, self-carried train luggage and local guide handovers. Return to Shanghai is separate.",
        },
      },
    ],
    articles: [],
    connections: [
      {
        slug: "haining",
        advice:
          "Haining can add Yanguan heritage and a Qiantang tidal-bore visit when the dated forecast, managed access and complete transfer work. Compare a day trip from the real Hangzhou hotel with one useful overnight, rather than treat viewing as a fixed half-day show. Preserve West Lake and tea time, and include a cultural alternative if the river or access changes.",
      },
      {
        slug: "jiaxing",
        advice:
          "Jiaxing offers South Lake's modern historical context, Yuehe's canal-side streets and a different city meal. Keep South Lake distinct from Hangzhou's West Lake, and compare a focused day visit with one city night. Preserve useful tea and lake time in Hangzhou rather than add an automatic stop on the way to Shanghai or Wuzhen.",
      },
      {
        slug: "nanxun",
        advice:
          "Nanxun offers merchant-house architecture, Jiaye Library and Baijianlou as a contrasting water-town chapter in Huzhou. Compare a day visit with one useful overnight, including the actual room and complete road or rail-and-road journey. Protect West Lake and tea time rather than turn a short Hangzhou stay into repeated water-town excursions.",
      },
      {
        slug: "jiande",
        advice:
          "Jiande adds Meicheng's Yanzhou history and a selected Xin'an River setting in a different part of the wider municipality. Compare a two-night chapter with the complete dated train and hotel transfers. A West Lake hotel is not a local base for every Jiande subject, and a river view does not imply a boat trip or guaranteed mist.",
      },
      {
        slug: "qiandao-lake",
        advice:
          "Qiandao Lake offers a separate reservoir and resort chapter in Chun'an County, not another district of the West Lake walk. Choose the property, useful nights and complete station transfer before adding a cruise. A shore-based stay can be worthwhile without island sightseeing; current pool and family services need their own confirmation.",
      },
      {
        slug: "ningbo",
        advice:
          "Ningbo adds Tianyi Ge book culture, contemporary museum architecture and a different port-city food tradition. Compare the dated connection and room locations before adding useful nights. Dongqian Lake is a separate inland-lake stay, not another name for Hangzhou West Lake or an included seaside extension.",
      },
      {
        slug: "wuzhen",
        advice:
          "Wuzhen adds a deliberately chosen canal-town day or overnight in Tongxiang, with Dongzha and Xizha offering different visitor arrangements. Compare the full road or rail-and-road journey, actual room, entry and luggage before moving hotels. Protect Hangzhou's lake and tea time rather than make the water town a rushed detour between appointments.",
      },
      {
        slug: "shaoxing",
        advice:
          "Shaoxing adds canal neighborhoods, Lu Xun's literary setting and yellow rice wine culture. Compare a focused return visit with separate nights using the actual stations, Yuecheng hotel and complete transfers. Anchang, East Lake and Lanting are separate choices rather than automatic additions to every old-city day.",
      },
      {
        slug: "lishui",
        advice:
          "Use Lishui's regional guide to choose a substantial southern Zhejiang chapter: Songyang villages, Yunhe terraces, Jinyun scenery or a different selected interest. The city and the wider region are not interchangeable. Match the actual rail gateway and final road transfer to the overnight base, with enough nights to make the rural stay worthwhile.",
      },
      {
        slug: "moganshan",
        advice:
          "Moganshan adds bamboo hills, historic summer villas and a countryside hotel stay in Deqing County. Give it two or three nights when the property and slower pace are the point. It is separate from West Lake and Longjing: compare the actual road journey or rail service plus both station transfers, rather than treating it as another Hangzhou neighborhood.",
      },
      {
        slug: "huangshan",
        advice:
          "Add Huangshan for a separate mountain chapter only when the remaining stairs and hotel sequence fit. Confirm the actual rail station, gateway transfer and any mountain overnight; a short connection does not make a mountain visit a spare afternoon.",
      },
      {
        slug: "hongcun",
        advice:
          "Hongcun adds Huizhou village architecture and a different rural stay. Count the road transfer from the rail gateway and review the room and luggage approach. Keep village time distinct from a demanding Huangshan walking day.",
      },
      {
        slug: "shanghai",
        advice:
          "Use Shanghai as a contrasting city chapter and transport gateway. Choose the actual Hangzhou and Shanghai stations, then include hotel transfers and luggage in the plan. Short rail time does not establish a short door-to-door excursion.",
      },
      {
        slug: "suzhou",
        advice:
          "Add Suzhou for garden design and canal neighborhoods if those are distinct interests. Compare the full connection and allow time within each place; do not assume every service runs between the stations closest to your hotels.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can be appealing for lake walks and tea landscapes, with rain and busy travel periods still possible. Summer brings heat and humidity; winter can feel damp and makes hotel heating important. Spring tea activity follows the actual season and host's work, not a fixed sightseeing promise. Check holiday dates before choosing a quiet-stay expectation.",
    orientation:
      "West Lake lies beside the urban city, while tea villages, temple areas, railway stations and individual hotels occupy different settings. Choose the lake shore and neighborhood you actually want to use. The name Hangzhou covers far more than a compact walking area, and a station-to-hotel journey remains part of the visit.",
    experiences: [
      "Explore a selected West Lake section with time to understand its designed cultural landscape",
      "Arrange a Longjing tea encounter focused on cultivation, preparation or tasting rather than compulsory shopping",
      "Choose a temple, museum or hotel afternoon that adds a different perspective to the lake",
    ],
    planningNotes: [
      "Compare the actual lake shore and hotel address before choosing a base",
      "Agree the tea host, season, language and purchase expectations",
      "Include station transfers and rest stops in a Shanghai extension",
    ],
    arrival:
      "Hangzhou Xiaoshan International Airport, Hangzhou East and Hangzhou railway stations are different arrival points. Use the exact ticket and hotel address to arrange pickup. A hotel near a lake walk may not be near the station serving your preferred train. If arriving after a long flight or with substantial luggage, leave the first program light rather than attaching a fixed tea appointment to an uncertain arrival.",
    gettingAround:
      "Combine walking with agreed road transfers according to the actual shoreline, hotel and visits. Independent metro journeys can suit some city routes but do not solve every last leg to a rural property. Lake boats, where selected, have their own boarding and operating conditions. A private vehicle cannot always wait at the nearest point on a busy lake road.",
    stayStrategy:
      "Decide whether the hotel is mainly a convenient bed or a meaningful part of the holiday. For a premium lake or village stay, compare the exact room outlook, privacy, meal choices, sound and access. Ask what remains enjoyable on a rainy afternoon. Keep enough unreserved time to benefit from the setting you are paying for.",
    firstTimerNote:
      "West Lake is a cultural landscape, not just a viewpoint to photograph before leaving. A short, well-explained walk can be more useful than a complete circuit. Longjing tea should also be approached through your actual curiosity: learning, tasting and shopping are different goals.",
    faqs: [
      {
        question: "How many days do I need in Hangzhou?",
        answer:
          "Two full days, commonly with three nights, allow lake time and a separate tea or temple chapter. Two nights can work for one focused full day. A day trip offers a selective introduction; calculate hotel and station transfers before deciding.",
      },
      {
        question: "Where should I stay in Hangzhou for West Lake?",
        answer:
          "Compare the eastern city edge for lake access and dining convenience with western or southern settings for a chosen property and quieter surroundings. Use the actual address and shore access. A hotel marketed as West Lake is not necessarily on the water.",
      },
      {
        question: "Is Hangzhou or Suzhou better for a Shanghai extension?",
        answer:
          "Choose Hangzhou for West Lake, tea and a different hotel setting; choose Suzhou for classical gardens and canal neighborhoods. Both can work together with enough nights. For a short extension, one clear interest is better than rushed hotel moves.",
      },
      {
        question: "Can I visit a Longjing tea farm outside spring?",
        answer:
          "A landscape or tasting visit may be possible with a confirmed host, but picking and processing depend on season and actual work. Agree what happens on the date and whether purchases are optional. Do not assume a year-round visit includes a harvest demonstration.",
      },
      {
        question: "Can I walk all the way around West Lake?",
        answer:
          "A full circuit is a substantial walking choice and is unnecessary for a good introduction. Choose a manageable section with suitable rest and exit points. Check the actual route for shade, weather, crowding and the group's walking comfort.",
      },
    ],
    culturalStory: {
      title: "Read the lake as a designed landscape",
      paragraphs: [
        "West Lake's interest comes from the relationship between water, islands, causeways, gardens, buildings and surrounding hills. Its place in poetry and painting helps explain why particular views became influential. A guide can connect those ideas to a limited walk, giving a few scenes meaning rather than asking you to cover every famous name.",
        "Tea introduces another relationship between landscape and daily life. In a Longjing-area encounter, the host and season determine whether cultivation, preparation or tasting is the most useful focus. Respect working spaces, ask before photographing people and distinguish learning from a sales presentation. A good visit leaves you understanding more, whether or not you buy tea.",
      ],
    },
    foodStory: {
      title: "Make meals fit the lake and tea days",
      paragraphs: [
        "Hangzhou cooking offers another reason to slow down. Freshwater fish, vegetables and dishes associated with the region can complement a lake stay, but famous names do not settle what the group will enjoy. Discuss textures, bones, sweetness and spice preferences before ordering, and choose a meal near the day's final visit rather than another long cross-city transfer.",
        "A tea tasting is not necessarily lunch, and a scenic rural setting does not guarantee flexible menus. Explain allergies, vegetarian requirements and alcohol restrictions before reservations; stocks, sauces and cooking wine need checking. For a quieter property, establish dinner arrangements and alternatives before arrival so the hotel setting remains a pleasure rather than a transport problem.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle near the shore or setting you chose",
        description:
          "Transfer from the actual station or airport and take a short local walk if time allows. Keep a first dinner close to the hotel.",
      },
      {
        day: "Full day 1",
        title: "A selected lake landscape",
        description:
          "Walk a manageable section with cultural context and breaks, then choose a complementary garden, museum or quiet afternoon. Boat arrangements are confirmed separately.",
      },
      {
        day: "Full day 2",
        title: "Tea or a temple chapter",
        description:
          "With a third night, give the chosen host or temple area its own time. Review access, season and meal arrangements rather than combining every outlying visit.",
      },
      {
        day: "Departure",
        title: "Continue with a complete transfer plan",
        description:
          "Reach the correct station or airport with luggage and boarding time accounted for. This is an illustrative plan, not a currently listed package.",
      },
    ],
  },
};
