import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/yubeng.svg",
  alt: "Original Yubeng planning schematic separating Upper and Lower Yubeng stays, Sacred Waterfall and Ice Lake walking days, village access and onward travel; not a map or photograph",
  width: 1600,
  height: 1200,
};

export const yubengGuide: ExpandedDestination = {
  id: "yubeng",
  name: "Yubeng",
  region: "southwest",
  kicker: "Choose the walking holiday before choosing the mountain lodge",
  description:
    "Plan Yubeng around the trails you want to walk: Upper or Lower Yubeng, Sacred Waterfall or Ice Lake, a suitable lodge and realistic village access.",
  stay: "3 village nights for two full days; 4 for more flexibility",
  bestFor: "Experienced walkers seeking mountain scenery and Tibetan cultural context",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["deqin", "shangri-la", "cizhong"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Yubeng Hiking Guide: Trails, Village Stays & Access",
    seoTitle: "Yubeng Hiking Guide: Ice Lake, Waterfall & Stays",
    seoDescription:
      "Plan a Yubeng trek: compare Ice Lake and Sacred Waterfall, Upper and Lower Yubeng hotels, three or four nights, village access and onward Meili travel.",
    answer:
      "Yubeng in northwest Yunnan suits travelers who want a mountain walking holiday in the Meili landscape. Allow three village nights for two full days, with approach and onward travel counted separately. Upper and Lower Yubeng offer different starting points for walks such as Sacred Waterfall and Ice Lake, so choose the route before the room. Elevation, uneven ground and the village approach remain important even with a comfortable lodge. A fourth night allows a shorter day or more flexibility.",
    stayAnswer:
      "Three village nights provide two full days between arrival and departure. That can support one main walk and another suitable day, or two separately assessed routes when ability, weather and recovery allow. Four nights add flexibility for rest or a different interest; they do not guarantee that both headline walks will operate or suit you. Two nights leave only one full day and a tightly chosen route. Count Feilaisi, Shangri-La and other approach nights separately, and do not label four calendar days as four full walking days.",
    hotelAnswer:
      "Choose Upper or Lower Yubeng by the intended trail starts and the exact room's access. Upper Yubeng is generally the more relevant starting area for Ice Lake; Lower Yubeng for Sacred Waterfall. Starting from the other village adds walking, and returning to the room may add an uphill section at the end of a long day. Check heating, hot water, bathroom, noise, stairs, meals, drying space and the final luggage route. Confirm whether a mountain view belongs to the bedroom or a shared terrace. Oxygen equipment and a premium room name do not establish medical support or make the trek suitable.",
    sightseeingQuestion: "Should I choose Sacred Waterfall or Ice Lake in Yubeng?",
    sightseeingAnswer:
      "Sacred Waterfall offers a pilgrimage landscape and a forest-and-valley approach from the Lower Yubeng direction; it still involves sustained walking and climbing. Ice Lake is a more demanding highland outing from the Upper Yubeng direction, with significant ascent, uneven terrain and a descent that can be tiring. Compare the complete route from your own room, including return, rather than only distance from a trail sign. Choose one well-suited walk before committing to both. Neither is a casual village stroll, and conditions can change the sensible choice.",
    visitorResources: [
      {
        label: "Deqin county government",
        href: "https://www.deqin.gov.cn/",
        scope:
          "Starting point for dated county notices and regional context, mainly in Chinese. Check current village entry, trail openings, local transport and exit arrangements with the responsible operator. A background description does not establish that a particular trail is open or a transfer is operating.",
      },
      {
        label: "Diqing Tibetan Autonomous Prefecture government",
        href: "https://www.diqing.gov.cn/",
        scope:
          "Regional public notices and geographic context for the approach through northwest Yunnan. The complete road itinerary and any traveler-specific arrangements require separate confirmation.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel",
        href: "https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General medical background, not an individual assessment, prescription or approval for Yubeng. Review the proposed sleeping and daytime elevations with a qualified clinician when considering personal suitability.",
      },
      {
        label: "China Meteorological Administration weather service",
        href: "https://weather.cma.cn/",
        scope:
          "Official starting point for forecasts and warnings. County weather cannot describe every trail, stream crossing or shaded slope; the day's route also needs current local assessment.",
      },
    ],
    serviceScope:
      "A tailored trekking proposal should name the daily routes, starting and finishing points, approximate elevations, expected ascent and descent, terrain, turnaround criteria and shorter alternatives. Specify the actual guide's language and trekking role, local transport, room, meals, luggage arrangements, communication and response plan if someone cannot continue. Identify what help is realistically available and how an exit would be arranged. A private driver or general sightseeing guide is not automatically a qualified mountain guide, and a hotel oxygen supply is not an evacuation service.",
    routeAdvice:
      "Plan Yubeng as a dedicated walking extension, with village nights and approach days protected within the wider Yunnan journey. Tell us your recent walking experience, usual pace, room needs and whether Sacred Waterfall, Ice Lake or one rewarding shorter day is the priority. We can assess a tailored route with appropriate daily walks and alternatives. The ten-day Yunnan journey ends in Shangri-La and excludes this trek. If hiking is not the holiday you want, compare a Feilaisi mountain-viewing stay instead.",
    practicalPlanning: {
      timing:
        "Keep village entry and the main road approach outside the full walking-day allowance. Start a main walk with enough daylight for the complete return, meals and breaks, using current conditions and a route-specific turnaround time. Do not combine Ice Lake and Sacred Waterfall into one checklist day. Leave a lighter option between demanding days when that suits the group. Exit transport and mountain roads can change; avoid attaching a tight flight or train connection to the end of the trek.",
      walking:
        "Assess uphill effort and downhill footing separately. Mud, loose stones, roots, snow or ice can make a familiar distance much harder, and a return descent can stress knees when guests are tired. Include the walk between villages and the final climb to the room. Use suitable footwear, layers and rain protection; agree water, food and any walking poles with the provider. Assess the full elevation profile before travel. If altitude symptoms develop, stop pursuing the sightseeing objective and seek prompt medical assessment rather than press on to complete a named route.",
      cost: "Compare the actual trekking guide, daily route scope, room, meals, luggage handling, village access transport, admissions and agreed exit arrangements. Clarify whether local vehicle charges are per person or per vehicle and what happens if the service is suspended. Separate optional equipment, extra nights and costs arising from a changed plan. Premium value should be visible in sound route choices, competent guiding and a dependable room, rather than a guaranteed lake reflection, waterfall ritual or unrestricted vehicle access.",
    },
    attractions: [
      "Upper Yubeng / 上雨崩 and Lower Yubeng / 下雨崩 as distinct walking and accommodation bases",
      "Sacred Waterfall / 神瀑, with the current permitted route and physical demands assessed",
      "Ice Lake / 冰湖 as a separate, more demanding mountain-walking day",
      "Forest and village paths chosen for current access, footing and the group's ability",
      "Tibetan sacred-landscape interpretation without assuming access to private practice",
      "Time at a suitable village lodge between walks, with warmth, meals and luggage planned",
    ],
    stays: [
      {
        label: "2 village nights / one selected full day",
        advice:
          "Choose a principal walk matched to the guest and conditions. Allow arrival and departure to remain travel days. This is a focused option, not a compressed version of every Yubeng route.",
      },
      {
        label: "3 village nights / two full days",
        advice:
          "Choose one main route and a second day according to fitness, recovery and conditions. Two headline walks may be assessed on separate days, but neither is an automatic inclusion. Count any Feilaisi or Shangri-La nights outside this village stay.",
      },
      {
        label: "4 village nights / a more flexible walking stay",
        advice:
          "Use the third full day for rest, a suitable shorter walk or moving the main outing when possible. More nights reduce scheduling pressure; they do not guarantee acclimatization, open trails or clear peaks. The property should be comfortable enough to enjoy a slower day.",
      },
    ],
    hotelAreas: [
      {
        name: "Upper Yubeng / compare the Ice Lake day from the actual room",
        advice:
          "This can be the more convenient starting area for the Ice Lake direction. Plot the room's own access and the return from any Lower Yubeng outing. Confirm meals, warmth, hot water, drying and the last luggage stage rather than book solely for a balcony photograph.",
      },
      {
        name: "Lower Yubeng / assess the Sacred Waterfall sequence",
        advice:
          "Compare rooms for the waterfall direction and the village setting. A lower-village address does not mean a flat day or no uphill walking. Count the additional connection if undertaking Ice Lake, and check the approach to the property after a long return.",
      },
      {
        name: "One base or a village-to-village move / make the tradeoff explicit",
        advice:
          "One good base can simplify bags and recovery; changing villages may improve a particular route sequence but adds checkout, luggage and a new room. Choose a move only when it earns the effort. Feilaisi is a separate approach or viewing base, not accommodation within Yubeng.",
      },
    ],
    tradeoffs: [
      {
        title: "Entry transport does not transport you along the hiking trails",
        advice:
          "Ask whether access uses an operating authorized local vehicle, a walking approach or another currently permitted arrangement. Confirm the exact pickup and drop-off, remaining walking, luggage limits and an alternative if service stops. A reference to 4x4 access does not mean your private touring vehicle reaches the lodge or that you can be driven to Ice Lake or Sacred Waterfall.",
      },
      {
        title: "Distance alone is a poor measure of a Yubeng day",
        advice:
          "Use the route from your own room, total ascent and descent, surface, elevation, daylight and your actual pace. A route quoted from the other village or one-way distance can understate the day considerably. Include meal and photo stops without borrowing time from the return. A shorter route in poor conditions may demand more effort than a longer dry-weather walk.",
      },
      {
        title: "The return matters as much as reaching the destination",
        advice:
          "Ice Lake involves a demanding return as well as the outward climb. On the waterfall route, religious significance does not make slippery or steep sections easier. Establish where the group can turn back and how the day is shortened. Success is a good day with everyone able to return, not reaching a named landmark at any cost.",
      },
      {
        title: "A scenic exit is a separate route decision",
        advice:
          "Some itineraries describe a Ninong / 尼农 exit. Do not assume that an older trip report establishes current access, footing or suitability. A gorge-side route needs a distinct assessment of weather, slope hazards, exposure, luggage and pickup. Choose an operating, appropriate exit rather than make a one-way circuit a condition of the booking.",
      },
      {
        title: "Comfort at the lodge and medical support are different services",
        advice:
          "A warm room, hot shower and good meals can improve recovery between walks. They cannot remove highland effort or guarantee protection from altitude illness. Ask what communication and medical help are realistically reachable. Do not use oxygen equipment, personal fitness or a fixed number of approach nights as proof that the trek is suitable.",
      },
      {
        title: "A sacred destination is more than a photographic endpoint",
        advice:
          "Explain the waterfall's pilgrimage context and follow the current local conduct guidance. Do not promise participation in rituals or encourage guests to walk under falling water for a photograph. Ice Lake is a mountain destination, not a swimming stop or a grant of glacier access. Stay on permitted routes and let conditions determine how closely a feature can be approached.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "deqin",
        advice:
          "Use the Deqin and Meili guide to compare Feilaisi viewing accommodation with committing to village nights and walking in Yubeng. A viewing stay can stand alone. If combining them, count the complete access and exit instead of treating Yubeng as one afternoon within the Feilaisi booking.",
      },
      {
        slug: "shangri-la",
        advice:
          "Shangri-La supplies a different highland city and monastery chapter on a wider route. Plan the full road approach, sleeping locations and onward departure. An earlier stay there does not guarantee acclimatization, and the published ten-day tour does not include Yubeng.",
      },
      {
        slug: "cizhong",
        advice:
          "Cizhong offers church history and a quieter Lancang valley stay rather than another mountain walk. It can be considered as a separate cultural chapter when the complete road route and room make sense. A lower valley night is not treatment for altitude illness or an automatic component of the trek.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are commonly considered for walking, but the usable routes depend on the actual weather and ground conditions. Spring can retain snow or ice on higher and shaded sections; autumn can bring cold mornings and a shorter daylight window. Summer rain can change footing, streams and road access even when the village is reachable. Winter needs a separate assessment of open routes, snow, ice, property operation and exit. Choose dates around walking conditions and the whole journey, not a promise of a particular lake color, waterfall flow or unobstructed mountain view.",
    orientation:
      "Yubeng is in Deqin County, Diqing Tibetan Autonomous Prefecture, Yunnan, outside the Tibet Autonomous Region. Upper and Lower Yubeng are different village areas, not two names for a single lodge location. Sacred Waterfall and Ice Lake are distinct routes with different starts and demands. Feilaisi, Deqin town, the village access point and any Ninong exit are separate locations. This guide covers a considered village-based walking stay, not every trail in the Meili range, a Kawagebo summit climb or unrestricted glacier access.",
    experiences: [
      "Choose a suitable Sacred Waterfall or Ice Lake day with the whole return route understood",
      "Appreciate village and forest landscapes with Tibetan sacred context explained respectfully",
      "Enjoy a well-chosen lodge between walks, with warmth, meals and a realistic next-day plan",
    ],
    planningNotes: [
      "Compare routes from the actual Upper or Lower Yubeng room, including the return",
      "Confirm operating village access, luggage and a suitable exit before fixing connections",
      "Review elevation, ascent, descent and recovery rather than rely on a luxury lodge label",
    ],
    arrival:
      "Design the full road approach through the Deqin region before the separate village entry. Xidang / 西当 appears in many access descriptions, but the currently operating pickup, vehicle route and drop-off must be confirmed for the date. Establish remaining walking and luggage from that point to the actual room. Do not rely on an old all-walking itinerary or a newer vehicle advertisement without checking what is permitted and operating. A Shangri-La airport or station arrival does not put the guest at the start of a Yubeng walk.",
    gettingAround:
      "Plan on walking for the chosen village and mountain routes, with only currently authorized transport included explicitly. Upper-to-Lower village movements can affect the effort before and after a main hike. Ask the provider to explain trail conditions, pace, breaks, communication and the response if a guest turns back. Avoid splitting a group without an agreed guiding arrangement. A host's local knowledge, a vehicle driver and a trekking guide can have different responsibilities; the proposal should make those roles clear.",
    stayStrategy:
      "Choose a base after selecting the main route. One suitable room for three or four village nights can keep bags simple, while a carefully justified village change may help a particular sequence. Count both property access and the walk back after an outing. Leave a day without a compulsory headline route when the group benefits from flexibility. A viewing stay near Feilaisi offers a different kind of holiday and should remain a real alternative, rather than be described as an inferior version of the trek.",
    firstTimerNote:
      "Begin with your recent walking experience: how long you comfortably walk on uneven ground, how you handle sustained ascent and descent, and what a slower day should look like. Then choose the route and room. A gym routine or enthusiasm for a photograph does not answer those questions. For a first highland walking trip, one well-matched main outing and a flexible second day can provide more value than committing in advance to every famous trail.",
    faqs: [
      {
        question: "Where is Yubeng, and is it in Tibet?",
        answer:
          "Yubeng is in Deqin County, Diqing, northwest Yunnan, outside the Tibet Autonomous Region. Upper and Lower Yubeng are distinct bases within this mountain destination. Check the precise journey and current visitor arrangements rather than apply rules from another region.",
      },
      {
        question: "How many nights should I spend in Yubeng?",
        answer:
          "Three village nights give two full days; four add flexibility for rest or a shorter outing. Two nights leave one selected full day. Count approach and onward nights elsewhere separately. Extra nights do not guarantee open trails, suitable conditions or acclimatization.",
      },
      {
        question: "Should I stay in Upper or Lower Yubeng?",
        answer:
          "Upper Yubeng is generally more relevant to the Ice Lake direction, Lower Yubeng to Sacred Waterfall. Compare the full walking sequence from the actual room, including village connections and the return. Room comfort, meals and luggage access matter alongside the location.",
      },
      {
        question: "Is Ice Lake harder than Sacred Waterfall?",
        answer:
          "Ice Lake is generally the more demanding highland walk, with substantial ascent, uneven terrain and a tiring descent. Sacred Waterfall still involves sustained walking and climbing. Compare current conditions and the complete route from your own lodge; neither is a flat village stroll.",
      },
      {
        question: "Can I do Ice Lake and Sacred Waterfall in one day?",
        answer:
          "Do not plan them as a combined checklist day. They are separate routes with different starting directions and substantial walking. Select one suited to the guest, or assess them on separate full days with recovery and conditions considered.",
      },
      {
        question: "Can a car take me into Yubeng?",
        answer:
          "Confirm the currently permitted and operating village access with the responsible provider. Authorized local transport, where available, is not the same as your private touring car reaching the lodge. Establish pickup, drop-off, luggage and remaining walking; village access does not provide transport along the main hiking trails.",
      },
      {
        question: "Is Yubeng suitable for a luxury holiday without much walking?",
        answer:
          "A comfortable lodge can improve the stay, but village access and the principal trails still need a physical-demand assessment. If mountain viewing and comfort are the priorities, compare a suitable Feilaisi stay. Choose Yubeng because its walking and setting fit the holiday you want.",
      },
      {
        question: "Does a stay in Shangri-La make me ready for a Yubeng trek?",
        answer:
          "It does not guarantee acclimatization or medical suitability. Review all sleeping and daytime elevations, the effort of the chosen routes and your health with a qualified clinician. General fitness, hotel oxygen or a fixed number of nights cannot establish that the trek is suitable.",
      },
      {
        question: "Can I leave Yubeng through Ninong?",
        answer:
          "Treat Ninong as a separate exit route requiring current access and suitability checks. Older reports do not establish today's conditions. Review weather, exposure, footing, luggage, guide arrangements and pickup, and retain an appropriate operating alternative rather than assume a one-way circuit.",
      },
      {
        question: "Is Yubeng included in your ten-day Yunnan tour?",
        answer:
          "No. The published route ends in Shangri-La and does not include Yubeng village nights or trekking. No matching product is listed here. Share your dates, walking experience, available nights and room needs for a tailored assessment with separate access and exit days.",
      },
    ],
    culturalStory: {
      title: "Walking through a sacred landscape",
      paragraphs: [
        "The Meili landscape has religious meaning beyond the scenery seen from a trail. On the Sacred Waterfall route, understanding pilgrimage and the relationship between devotion and place adds a different dimension to the walk. A guide can explain that context without suggesting every visitor or resident follows the same practice. Let the terrain, names and visible signs of belief become part of the story, rather than treating the waterfall only as a finish-line photograph.",
        "Follow current conduct guidance at sacred places and seek consent before photographing people. A traveler need not imitate a ritual to appreciate its significance, and private guiding does not confer access to personal religious life. In the villages, distinguish a public path, a guesthouse and a private home. The best cultural encounters come from willing participation and clear interpretation, not from promising a ceremony or household visit as a reward for completing the hike.",
      ],
    },
    foodStory: {
      title: "A good trekking meal starts before the trail",
      paragraphs: [
        "Plan breakfast, water, food for the walk and a dependable dinner with the actual lodge and guide. A trail-side kitchen shown in an older trip report may not be operating or appropriate to the day's route. Ask what can be carried comfortably and eaten during a break, then keep a backup rather than make a long day depend on a single stop. After returning, warm dishes, a comfortable seat and a meal at a realistic hour can matter more than a staged feast.",
        "Discuss dietary needs before village entry, including meat stocks, dairy, wheat or barley, nuts and shared utensils. A remote kitchen may have fewer substitutes, and a vegetable dish is not automatically vegetarian. Confirm what the lodge can prepare and what the guest should bring. Regional food can provide context where genuinely served, but no fixed menu or private family invitation is assumed. Avoid making alcohol a compulsory part of a recovery meal or a cultural encounter.",
      ],
    },
    itinerary: [
      {
        day: "Village arrival / after the full road approach",
        title: "Make the final access and room part of the plan",
        description:
          "Use confirmed operating village access and complete the remaining approach to the lodge. Settle bags, check warmth and meals, and review the next day's route with the guide. Keep the arrival walk appropriate to the actual journey and group.",
      },
      {
        day: "First full day / one main route",
        title: "Choose the walk that best fits the guest and conditions",
        description:
          "Undertake a separately assessed Sacred Waterfall or Ice Lake route, allowing the complete return, breaks and a sensible turnaround. The choice follows current conditions and suitability, not a fixed obligation to reach a landmark.",
      },
      {
        day: "Second full day / recovery or another assessed route",
        title: "Let the first day inform the second",
        description:
          "Choose rest, a suitable shorter village-and-forest walk or a distinct main outing only when ability and conditions support it. A fourth village night adds another flexible day; it does not turn every route into an inclusion.",
      },
      {
        day: "Village exit / onward road journey",
        title: "Use the appropriate operating exit and protect connections",
        description:
          "Complete the agreed exit with luggage, guide and pickup accounted for, then continue to the next actual base. Do not assume Ninong is open or suitable. This three-night village outline excludes approach nights elsewhere and is not a published package or a guarantee of trail access.",
      },
    ],
  },
};
