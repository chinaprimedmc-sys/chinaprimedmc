import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/wuyuan.svg",
  alt: "Wuyuan planning diagram comparing the county-town base, a village inn and a Huangling scenic-area stay; schematic rather than a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const wuyuanGuide: ExpandedDestination = {
  id: "wuyuan",
  name: "Wuyuan",
  region: "east",
  kicker: "Village architecture, rural stays & a season-aware route",
  description:
    "Choose Wuyuan for time in selected villages and a well-placed rural stay, with honest expectations for spring flowers, autumn color and Huangling's harvest-drying displays.",
  stay: "2–4 nights",
  bestFor: "Village stays and rural photography with context",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["fuliang", "jingdezhen", "hongcun", "huangshan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Wuyuan Travel Guide: Villages, Seasons & Where to Stay",
    seoTitle: "Wuyuan Travel Guide: Villages & Where to Stay",
    seoDescription:
      "Plan Wuyuan village stays, Huangling and seasonal landscapes. Compare rural inns, transport and two to four nights, with a tailored Jingdezhen connection.",
    answer:
      "Wuyuan is a county in northeastern Jiangxi, with villages, fields and hills spread across different road routes. Visit for Huizhou-influenced architecture and time in a selected rural setting, rather than expecting one old town containing every famous view. Spring rapeseed flowers, autumn foliage and Huangling's harvest-drying displays are different interests with different conditions. Choose the experience and hotel first, then the villages and travel dates that realistically support it.",
    stayAnswer:
      "Two nights provide one full day for a focused village route. Three nights allow two days, separating a selected village group from Huangling or a different rural interest. Four nights can suit a slower hotel stay, photography or deeper cultural visits. More time offers flexibility, not a guarantee of flowers, fog or empty lanes. A short visit should not try to combine every eastern and northern route simply because each appears on a must-see list.",
    hotelAnswer:
      "Choose the county town for simpler rail-station transfers, broader dining options and a practical touring base. Choose a specific village inn for atmosphere after checking the room, meals, stairs and vehicle approach. A Huangling-area stay makes sense when that managed scenic area is the priority, but its admission and access arrangements need separate confirmation. A property labeled Wuyuan can be far from the village or viewpoint you want.",
    sightseeingQuestion: "Should you stay in a Wuyuan village or use the county town as a base?",
    sightseeingAnswer:
      "Choose a village when the evening, hotel and rural setting are part of the holiday and the actual property suits your needs. Choose the county town when simpler transport and independent meals matter more. For Huangling, compare its specific access and room arrangements rather than assuming every nearby hotel is within the scenic area. Check the full daily road plan before booking a remote stay for its photographs alone.",
    visitorResources: [
      {
        label: "Wuyuan county government",
        href: "https://www.jxwy.gov.cn/",
        scope:
          "County background and public announcements. This does not confirm current flowers, foliage, scenic tickets, cableway operation, individual inn quality or a private host.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Wuyuan visit with the selected villages, hotel, road transfers, guide and any agreed cultural encounter specified in the proposal. The guide helps connect architecture and rural life while respecting residents and working areas. Private homes, tea producers and craft spaces require consent. A scenic ticket does not establish private access, and a rural hotel booking does not automatically include guiding or transport throughout the stay.",
    routeAdvice:
      "Consider Wuyuan as a tailored village chapter alongside Jingdezhen's ceramics or the wider Huizhou region when each interest has enough time. Begin with the actual hotel setting, usable days and season, then choose a limited route. This page does not currently recommend a published Wuyuan package. Your proposal should identify the named villages, admissions, transfers, room and any host; the examples below are planning choices rather than automatic inclusions.",
    practicalPlanning: {
      timing:
        "Group villages by the actual road route and leave time to walk, sit and eat. A map of the county is not a compact pedestrian itinerary. Give Huangling a separate substantial window when it matters, including arrival, entry, transport and walking. On arrival or departure days, protect the station transfer rather than attaching a distant scenic stop to a tight train connection.",
      walking:
        "Village lanes can involve uneven paving, thresholds, bridges, slopes and steps inside inns or historic buildings. Hillside scenic areas introduce a different level of walking and stairs even when transport is available. Review the precise route, rest points and vehicle-to-room approach. A rural landscape that looks gentle in a photograph does not establish step-free access.",
      cost: "Compare the actual room, meal plan, village and scenic admissions, guiding days, road mileage and service hours. A village inn, contemporary rural hotel and managed scenic-area stay are different offers. Check whether cableways or other local transport are included for the chosen visit. A private host or photography-focused schedule requires specific arrangements; premium pricing does not guarantee seasonal scenery or exclusive access.",
    },
    attractions: [
      "Selected Wuyuan historic villages",
      "Likeng",
      "Sixi and Yancun",
      "Huangling scenic area",
      "Jiangling rural landscapes",
    ],
    stays: [
      {
        label: "2 nights: one focused village day",
        advice:
          "Choose a manageable route and a hotel that serves it. Keep arrival and departure as travel time unless the tickets genuinely allow more, rather than promising both Huangling and every village cluster.",
      },
      {
        label: "3 nights: two different rural chapters",
        advice:
          "Separate architecture-focused village time from Huangling or a selected landscape interest. Leave room for a proper meal and a change of pace rather than repeating similar stops.",
      },
      {
        label: "4 nights or more: stay for the setting",
        advice:
          "Add time for a chosen property, a confirmed host or flexible photography. Extra nights help pacing, but flowers and foliage follow conditions and are not guaranteed by extending the booking.",
      },
    ],
    hotelAreas: [
      {
        name: "Wuyuan county town",
        advice:
          "Consider for practical arrivals, a broader choice of meals and a touring plan reaching different routes. Check the actual station transfer and evening surroundings. A convenient town base offers a different experience from sleeping in a historic village.",
      },
      {
        name: "A selected village or rural hotel",
        advice:
          "Choose by the named village, room and planned visits. Confirm heating or cooling, bathroom, sound, luggage distance, meals and road pickup. A restored house may be appealing without being suitable for every guest or season.",
      },
      {
        name: "Huangling and its surrounding area",
        advice:
          "Consider when the scenic-area experience is central. Confirm whether the room is inside or outside the managed area, how you reach it with luggage and what tickets or operating transport are required. Proximity in a hotel description does not establish included access.",
      },
    ],
    tradeoffs: [
      {
        title: "Select village routes for a reason",
        advice:
          "Likeng, Sixi and Yancun, and other village choices have different layouts and road logistics. Choose a small number for architecture, landscape or an agreed encounter. Do not promise a complete county circuit when the real value lies in time within one or two places.",
      },
      {
        title: "Distinguish Huangling from ordinary village touring",
        advice:
          "Huangling is a managed hillside scenic-area experience with its own entry, transport and walking arrangements. Its presentation and visitor infrastructure differ from a quiet lane in another village. Choose it deliberately for the experience you want, not as proof that all Wuyuan looks or operates the same way.",
      },
      {
        title: "Treat the seasonal image as conditional",
        advice:
          "Spring rapeseed flowering varies with weather, elevation and field. Autumn leaf color varies by tree and place. Shaiqiu, the display and drying of crops associated with Huangling, is a separate cultural and visitor presentation; it should not be used as a guarantee of autumn foliage or a private harvest encounter. Confirm the date-specific offering.",
      },
      {
        title: "Premium rural stays require practical checks",
        advice:
          "Ask what the room and property offer during rain, cold or an afternoon without touring. Confirm meals, seating, hot water, luggage access and staff support. An attractive courtyard or rural view does not by itself establish quiet, accessibility or a full-service resort.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "fuliang",
        advice:
          "Fuliang offers a different rural Jiangxi chapter through county history and a confirmed tea interest near Jingdezhen. Choose complementary village subjects and compare exact property addresses and full roads. A Fuliang overnight should add something beyond another field photograph; temporary art, tea appointments and Wuyuan seasonal displays follow separate conditions.",
      },
      {
        slug: "jingdezhen",
        advice:
          "Pair villages with a ceramics chapter when the contrast interests you. Plan the actual hotel-to-hotel connection, and keep a fixed studio appointment away from an uncertain arrival. Rural touring and a hands-on class both need useful time rather than a transfer-day checklist.",
      },
      {
        slug: "hongcun",
        advice:
          "Hongcun offers a different Huizhou village focus through its water system and architecture. Compare whether another village stay adds enough distinct value, or whether one well-chosen base is better. Include the complete road and rail journeys before allocating nights.",
      },
      {
        slug: "huangshan",
        advice:
          "Add the mountain on separate usable days, reviewing remaining stairs, weather and luggage arrangements. A Wuyuan village stay is not a mountain-gateway hotel, and a demanding ascent should not be squeezed between distant rural visits.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring is a common choice for rapeseed landscapes, but bloom dates and fields vary with the season. Autumn can suit village walks and selected foliage interests, with different conditions at different locations. Summer brings heat, humidity and rain; winter makes room heating and indoor comfort important. Check holidays and the actual conditions before choosing the route. No month guarantees empty villages or a particular photographic scene.",
    orientation:
      "Wuyuan is a county, not a single village. The county town, station, named village groups, Jiangling landscapes and Huangling scenic area are separate planning points. Choose the actual addresses and route before estimating travel time. Its architecture connects with the wider Huizhou cultural region, while its current administrative location is Jiangxi.",
    experiences: [
      "Explore a small number of villages for architecture and rural context rather than a complete county circuit",
      "Choose Huangling with a clear understanding of its hillside setting, managed access and seasonal presentation",
      "Stay at a carefully checked rural property with time for the setting and an agreed local encounter where available",
    ],
    planningNotes: [
      "Name the village and route instead of booking from a broad Wuyuan label",
      "Separate flowers, foliage and harvest-drying displays in seasonal expectations",
      "Review the actual room, meals, luggage approach and road connection before a rural stay",
    ],
    arrival:
      "Wuyuan railway station is a gateway to the county, not the entrance to every village or scenic area. Confirm the exact ticket and hotel before arranging the final road transfer. If arriving through another city or airport, compare the full route and available connections. Keep the first evening manageable when the chosen inn is remote or has a longer luggage approach.",
    gettingAround:
      "Road transfers connect village groups and hotels, with walking within the selected places. Confirm mileage, service hours and pickup points rather than assuming a driver remains available all evening. Scenic-area transport operates under its own conditions. A private vehicle does not remove stairs, narrow lanes or the final walk to a historic room.",
    stayStrategy:
      "Decide whether the property is a practical base or a meaningful part of the holiday. For a longer rural stay, check the room and meals as carefully as the view, including wet-weather options and staff availability. Avoid moving hotels after every village visit unless the change adds a distinct setting or solves a real transport problem.",
    firstTimerNote:
      "Wuyuan photographs often combine different villages and seasons into one impression. Use the named location and travel date to understand what your own visit can offer. A slower architectural walk and a comfortable stay can be worthwhile even without the exact flower field or harvest image that first caught your attention.",
    faqs: [
      {
        question: "How many days do I need in Wuyuan?",
        answer:
          "Two full days, commonly with three nights, allow two distinct village or landscape chapters. Two nights suit one focused route. Add more for a chosen rural stay or specific interest rather than trying to see every village.",
      },
      {
        question: "Is Wuyuan a town or a group of villages?",
        answer:
          "Wuyuan is a county in northeastern Jiangxi with a county town and villages spread across different road routes. The station, Huangling and named villages are separate places. Choose the actual route before booking accommodation.",
      },
      {
        question: "When can I see rapeseed flowers in Wuyuan?",
        answer:
          "Spring is the usual planning season, but actual bloom timing varies by weather, elevation and field. Check current conditions for the chosen location close to travel. A fixed calendar date or hotel booking cannot guarantee peak flowering.",
      },
      {
        question: "Is Huangling's shaiqiu the same as autumn foliage?",
        answer:
          "No. Shaiqiu refers to crop drying and its associated displays, while foliage depends on trees, location and seasonal conditions. Confirm what is presented on your date and do not assume a photograph guarantees an active harvest or particular leaf color.",
      },
      {
        question: "Should I stay in a village or Wuyuan town?",
        answer:
          "Choose a village for the hotel setting and local evening, after checking room and meal conditions. Choose the county town for simpler connections and a broader range of independent dining. For Huangling, verify the specific access and accommodation arrangements separately.",
      },
      {
        question: "Can I combine Wuyuan and Jingdezhen?",
        answer:
          "Yes, when the complete transport plan and usable days support both. Villages and ceramics offer different interests. Keep a fixed studio session separate from an uncertain transfer and confirm the actual stations and hotel-to-hotel journeys.",
      },
      {
        question: "Is Wuyuan suitable for limited mobility?",
        answer:
          "Suitability depends on the selected villages, scenic route and room. Uneven paving, bridges, slopes, thresholds and stairs can remain. Review access individually; a compact village or available scenic transport does not guarantee a step-free visit.",
      },
    ],
    culturalStory: {
      title: "Understand a rural place beyond its seasonal image",
      paragraphs: [
        "Wuyuan's architecture and village layouts offer ways to discuss the wider Huizhou cultural region, household life and the relationship between buildings and rural landscape. A useful visit selects particular examples and explains what you are seeing instead of applying one romantic story to every white wall and dark roof. Leave time for the lanes and details between famous viewpoints.",
        "People continue to live and work in these settings. Follow local instructions, respect private doorways and ask permission before photographing residents or entering a working space. A separately arranged host can add context when the date, consent and interpretation are right. A display for visitors, a working harvest and a private invitation should remain clearly distinguished.",
      ],
    },
    foodStory: {
      title: "Make rural meals part of the stay plan",
      paragraphs: [
        "A village stay works better when meals are thought through before arrival. Ask what the inn cooks, when dinner is served and what alternatives exist if the group wants something different. Local vegetables, preserved ingredients and regional cooking can be rewarding, but menus and spice levels should follow the group's preferences rather than a fixed list of famous dishes.",
        "Explain allergies, vegetarian requirements and ingredients in stocks, sauces and cooking fats before confirming meals. A rural kitchen may have fewer substitutes at short notice. A hosted meal also needs an agreed host and setting; an ordinary restaurant lunch should not be described as a private family encounter. Confirm breakfast when the next day's pickup is early.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the named village or town base",
        description:
          "Complete the station or regional transfer, check the actual room and keep the first meal local. Add a short walk only when arrival and luggage arrangements allow it.",
      },
      {
        day: "Full day 1",
        title: "A focused village route",
        description:
          "Choose a limited architectural route with interpretation, rest and a proper meal. Avoid racing between eastern and northern groups simply to increase the number of stops.",
      },
      {
        day: "Full day 2",
        title: "A different rural chapter",
        description:
          "With a third night, select Huangling or another seasonal or cultural interest. Confirm access, walking and current conditions; do not assume every landscape in the guide appears on the same day.",
      },
      {
        day: "Departure",
        title: "Continue without a rushed final stop",
        description:
          "Work backward from the actual train or onward hotel. This outline illustrates a tailored stay and is not a published package with all options included.",
      },
    ],
  },
};
