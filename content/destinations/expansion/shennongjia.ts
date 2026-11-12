import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/shennongjia.svg",
  alt: "Original Shennongjia planning schematic comparing high mountain viewpoints, Dajiuhu wetlands and Muyu or Pingqian accommodation; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const shennongjiaGuide: ExpandedDestination = {
  id: "shennongjia",
  name: "Shennongjia",
  region: "central",
  kicker: "Forest, high country and wetland mornings at a thoughtful pace",
  description:
    "Plan Shennongjia around selected forest walks, Shennongding viewpoints and Dajiuhu wetlands, with Muyu and Pingqian hotel choices and complete mountain transfers.",
  stay: "3–4 nights for two or three full days",
  bestFor: "Temperate forest, changing mountain habitats and unhurried landscape days",
  interests: ["landscape", "heritage"],
  relatedDestinationIds: ["shiyan", "yichang", "wudang-mountains", "enshi"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Shennongjia Travel Guide: Forests & Stays",
    seoTitle: "Shennongjia Guide: Forests, Routes & Hotels",
    seoDescription:
      "Plan Shennongjia with Shennongding and Dajiuhu choices, Muyu vs Pingqian hotel advice, walking demands and a 3–4-night route from Yichang or Wudang.",
    answer:
      "Shennongjia (神农架), in western Hubei, rewards travelers who enjoy forest, changing mountain vegetation and time outdoors more than a rapid circuit of landmarks. It is a large mountain region and an administrative forestry district, not one park gate or one walk. Shennongding (神农顶) offers a high mountain landscape; Dajiuhu (大九湖) is a separate wetland area; Muyu (木鱼) and Pingqian (坪阡) serve different accommodation plans. Three nights give two full days for a selective introduction. Four allow a more measured combination of mountain and wetland interests. The UNESCO World Heritage property called Hubei Shennongjia does not make every road, hotel or attraction in the wider district part of the protected property.",
    stayAnswer:
      "Choose three nights for two useful days centered on one main base, with a mountain landscape day and a contrasting forest or cultural visit. Four nights give three days and can justify a Dajiuhu-focused extension with a separately chosen Pingqian-area night. Two nights are suitable only for a selective visit with favorable arrival and departure hours. Do not count a long transfer from Yichang as a full forest day. Extra nights earn their place through more time in a habitat, a worthwhile room or less driving, not through adding every scenic ticket to the itinerary.",
    hotelAnswer:
      "Start with Muyu for a southern base with town services and access to selected nearby visits. Compare a Pingqian-area stay when Dajiuhu and its early visiting hours are a main purpose, allowing for the actual visitor transport between accommodation and wetlands. Hongping (红坪) is a different northern base that may suit a particular gateway or route. Choose the exact property using the full day's roads, heating, bathroom, meals and sleep quality. A hotel labeled Shennongjia can be far from the attraction you intend to visit; a room near the wetlands does not establish private wetland access.",
    sightseeingQuestion: "Shennongding or Dajiuhu: which is the better first visit?",
    sightseeingAnswer:
      "Choose Shennongding for mountain viewpoints and the way vegetation changes with elevation. Choose Dajiuhu for open wetland scenery and a different walking perspective. They are distinct subjects and need separate transport planning. A misty Dajiuhu dawn is a weather-dependent possibility, not an included experience. Shennongding also names a wider scenic area: visiting its viewpoints is not the same as climbing to a summit. For two full days, select the routes around your hotel and interests rather than assume both can be covered comfortably alongside every other attraction.",
    visitorResources: [
      {
        label: "UNESCO: Hubei Shennongjia",
        href: "https://whc.unesco.org/en/list/1509/",
        scope:
          "World Heritage context for the forest ecosystems, biodiversity and protected property's boundaries. This is not a current visitor-route notice, permission for research access or evidence that every attraction in the wider district is within the property.",
      },
      {
        label: "China Railway 12306",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services to the actual station. Shennongjia railway station and the selected accommodation or scenic entrance are separate places; include the road transfer before comparing train and flight plans.",
      },
    ],
    serviceScope:
      "A tailored proposal should show the named scenic areas, actual accommodation, full road journeys, visitor shuttles, walking sections, guide language and meals. Share your comfortable walking time, stair tolerance, response to winding roads and room expectations. A natural-history interest benefits from a clearly agreed subject and an appropriately qualified guide, not just a generic sightseeing vehicle. Specialist guiding, restricted research sites and any hosted visit need separate confirmation. The value of private planning is a coherent pace and reliable arrangements, with alternative days when mountain weather changes.",
    routeAdvice:
      "Yichang can add a river landscape or a separately booked Yangtze cruise; the station, city hotel, cruise collection point and actual pier need their own transfer sequence. Wudang Mountain adds Daoist architecture and religious history near Shiyan, with a different hotel base and remaining mountain steps. Enshi offers limestone canyons, but deserves its own useful days rather than another hurried landscape stop. There is no matching published Shennongjia product recommended here. Share dates, gateways, walking preferences and whether forest, wetlands or a restful mountain stay matters most for a proposal with a clear purpose for each day.",
    practicalPlanning: {
      timing:
        "Keep the main high mountain route and Dajiuhu on separately assessed days. A long drive, scenic transport and a boardwalk all belong in the same time calculation. If an early wetland visit is central, choose accommodation and breakfast around the actual first entry and shuttle arrangements. Schedule short walks before a fixed departure only when the complete transfer leaves a sensible margin. Confirm which days can swap and which reservations or hotel changes make the order less flexible.",
      walking:
        "Shennongjia offers different physical experiences: roadside viewpoints, forest paths, wetland boardwalks and summit stairs should not share one easy-walk label. Ask for the exact path, gradient, remaining steps, altitude and return point. Wet timber and stone, fog, exposure and cold can affect a modest-distance walk. The region includes elevations above 3,000 meters; distinguish the high point visited from the altitude where you sleep. A private driver cannot follow every trail or remove the need to use regulated visitor transport.",
      cost: "Compare named admissions and their date validity, required scenic transport, full vehicle hours, guide expertise, hotel rooms and meals. A multi-area ticket is not a reason to visit every included place, and a visitor shuttle is not automatically a private vehicle. For an upgraded stay, identify what the extra cost changes: a quiet, warm room, better bathroom, good meals or more useful time outdoors. A higher quote does not buy guaranteed mist, autumn color, snow conditions or wildlife sightings.",
    },
    attractions: [
      "Shennongding / 神农顶 scenic area, with viewpoints and any summit walk distinguished",
      "Dajiuhu / 大九湖 wetlands, using the permitted visitor routes and transport",
      "Selected forest walks around the actual Muyu-based itinerary",
      "Shennong Altar / 神农坛 for interpretation of the Shennong cultural tradition",
      "Guanmenshan / 官门山 or Tian Sheng Qiao / 天生桥 when their particular route fits",
      "A northern Hongping / 红坪 landscape chapter only when the full route supports it",
    ],
    stays: [
      {
        label: "2 nights / one selected outdoor day",
        advice:
          "Choose a coherent base and one main landscape route. Arrival and departure remain travel days. This is not enough to promise a full circuit of the mountain district, both high country and wetlands, and several cultural attractions.",
      },
      {
        label: "3 nights / two full days",
        advice:
          "Use one suitable base for a mountain day and a contrasting forest walk or cultural subject. Keep a proper meal and rest in the schedule. Add Dajiuhu only after comparing the complete return journey with the local experience you would replace.",
      },
      {
        label: "4 nights / three full days",
        advice:
          "A purposeful Muyu and Pingqian split can support separate mountain and wetland days. Check whether the onward gateway makes that sequence sensible. Extra time can also stay in one base for slower walking and weather flexibility; changing hotels is not compulsory.",
      },
    ],
    hotelAreas: [
      {
        name: "Muyu: a southern town base",
        advice:
          "A useful starting point for restaurants, town services and selected surrounding attractions. Compare the exact location, road noise, heating or cooling, hot water and vehicle pickup. A central town room and a secluded hillside property have different dinner and transfer implications.",
      },
      {
        name: "Pingqian and the Dajiuhu approach",
        advice:
          "Consider for a wetland-focused day, with the actual room, visitor transport and entry hours confirmed. Ask where luggage stays and how early breakfast works. Accommodation near an entrance is not permission to wander into protected habitat or a promise of a private sunrise viewpoint.",
      },
      {
        name: "Hongping and northern approaches",
        advice:
          "Can suit a northern arrival or a specifically chosen forest route. Calculate the whole onward journey before booking. Being closer to an airport or another gateway does not make this the most convenient base for every southern attraction.",
      },
    ],
    tradeoffs: [
      {
        title: "A forest holiday does not need every scenic gate",
        advice:
          "Several included attractions can produce repeated transfers and little time to notice the landscape. Choose one substantial outdoor subject per day, then a shorter complementary stop if worthwhile. A traveler interested in plants may gain more from a slow forest walk than another lookout photographed in passing.",
      },
      {
        title: "Wildlife habitat is a reason for care, not a sighting promise",
        advice:
          "The World Heritage value includes biodiversity, but a normal visitor itinerary is not a guaranteed golden snub-nosed monkey viewing trip. Ask what any proposed animal-related visit actually is: wild observation, a managed setting or an exhibition. Do not feed, approach or disturb animals, and do not equate a guide booking with permission to enter closed habitat.",
      },
      {
        title: "A Dajiuhu morning needs more than an attractive photograph",
        advice:
          "Compare the overnight location, first transport, weather, warm clothing and return plan. Mist depends on conditions and may obscure a view as readily as improve a photograph. Choose the wetlands for their setting and habitats, with a worthwhile plan even if the hoped-for dawn composition never appears.",
      },
      {
        title: "A winter visit is a separate holiday brief",
        advice:
          "A snow or ski trip needs a named operating venue, equipment, instruction, road conditions and suitable rooms. Do not assume summer scenic routes remain equally available or that a mountain hotel includes skiing. Choose winter for the actual confirmed experience, with a practical alternative if conditions change.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "shiyan",
        advice:
          "Shiyan can supply a northern regional connection or a purposeful city museum stop, with Wudang as a separate mountain plan. Compare the actual rail or road route, room and usable hours. A city hotel, Wudang scenic entrance and Shennongjia forest base are distinct places, not interchangeable gateway addresses.",
      },
      {
        slug: "yichang",
        advice:
          "Yichang adds a different landscape and an onward rail or cruise gateway. Review the complete mountain-road transfer, hotel and actual cruise collection or pier. Keep the last forest day separate from a tight embarkation deadline; reaching the city does not mean reaching the ship.",
      },
      {
        slug: "wudang-mountains",
        advice:
          "Combine natural history with Daoist architecture when the full road or rail sequence gives both regions proper time. Wudang's scenic buses, cableway and remaining steps need a separate assessment. Do not sell the two mountain destinations as adjacent walks from a single hotel.",
      },
      {
        slug: "enshi",
        advice:
          "Enshi adds limestone canyon scenery and a regional cultural chapter. Compare the full transfer and accumulated walking demands, then allow settled nights in the right Enshi base. A traveler wanting variety may prefer one mountain region and more time by the Yangtze instead of collecting similar-looking landscape stops.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring through autumn is a useful starting window for a forest-led visit, with changing conditions at different elevations. Summer can bring relief from hotter lowland cities but also rain and variable visibility. Autumn color varies with altitude, species and weather; it is not a fixed-date display. Winter is a different brief requiring checked road and venue operations. Pack for cooler high country even when the arrival city is warm, and choose dates with the Chinese holiday calendar in view.",
    orientation:
      "Muyu in the south, the Shennongding high country, Dajiuhu and Pingqian farther west, and northern Hongping are distinct planning areas. Shennongjia railway station and Shennongjia Hongping Airport do not sit beside every hotel or scenic entrance. Names shared across the district can conceal long, winding roads. Write the Chinese attraction and accommodation addresses into the itinerary, then assess the route as a sequence rather than a collection of pins.",
    experiences: [
      "Notice how forest and mountain vegetation change on a selected Shennongding route, with any summit climb agreed separately",
      "Give Dajiuhu its own wetland day when the complete road and visitor transport make the setting worth the journey",
      "Combine a thoughtful forest walk with interpretation of local landscape and the Shennong cultural tradition",
    ],
    planningNotes: [
      "Choose Muyu, Pingqian or Hongping from the actual route, not a hotel search labeled only Shennongjia",
      "Separate road viewpoints, boardwalks and summit stairs when assessing walking and altitude",
      "Keep a useful weather alternative and confirm scenic transport rather than assume a private car reaches every stop",
    ],
    arrival:
      "Compare a dated rail service to Shennongjia station, a flight to Hongping when operating, or a road arrival from another Hubei base using total journey time. Add luggage handling, winding roads, a meal break and the final hotel approach. Yichang and Shiyan/Wudang are different gateways, not interchangeable arrival labels. A convenient train time may still leave a substantial drive. Avoid promising a major scenic visit after arrival unless the full sequence genuinely leaves enough daylight and energy.",
    gettingAround:
      "A road itinerary connects the accommodation bases and permitted scenic entrances. Inside particular areas, current rules may require shuttles or other designated transport; clarify where the private driver waits and where the guide accompanies you. Choose a route with sensible meal stops and toilets, and discuss motion sickness before long winding sections. Public paths, protected habitats and research routes have different access conditions. A private booking does not authorize driving or walking beyond normal permitted areas.",
    stayStrategy:
      "Begin with three nights and two full days, then decide whether another day adds a different habitat or a more restful pace. A Muyu base can keep packing simple; a verified Pingqian night can support a purposeful Dajiuhu morning. Compare room quietness, warmth, bathroom, dinner and pickup before paying for a landscape label. The best high-end choice may be a dependable room and a carefully paced day rather than the most remote address.",
    firstTimerNote:
      "Decide whether you want a forest holiday, an active hiking trip, a photography visit or a winter sports stay. These call for different routes, equipment, guide skills and hotel choices. A scenic-area ticket does not define the experience. Start with two worthwhile local days and add the third only when you know what it contributes.",
    faqs: [
      {
        question: "Is Shennongjia worth visiting for foreign travelers?",
        answer:
          "It can be rewarding for travelers who enjoy forests, mountain habitats and slower outdoor days. It requires realistic road planning and useful local time. If the goal is simply a quick summit photograph on a short first China trip, another destination may fit better. Choose it for the landscape and the way you want to spend your days.",
      },
      {
        question: "How many days do I need in Shennongjia?",
        answer:
          "Three nights provide two full days for a selective mountain and forest introduction. Four nights give three days and can support a separately planned Dajiuhu extension or a slower pace. Arrival and departure are separate travel days; count the complete road journeys before choosing the final number of nights.",
      },
      {
        question: "Should I stay in Muyu or near Dajiuhu?",
        answer:
          "Muyu suits a southern base with town services and selected surrounding visits. A Pingqian-area room can suit a Dajiuhu-focused sequence, with visitor transport still required as specified. Compare the actual itinerary, room, meals and onward gateway rather than moving hotels solely for an advertised sunrise.",
      },
      {
        question: "Do I have to climb Shennongding to visit Shennongjia?",
        answer:
          "No. The region offers different viewpoints and permitted walking routes. Visiting the Shennongding scenic area is not the same as completing a summit stair climb. Specify the path, steps, altitude and return arrangements so the day fits your ability and interests.",
      },
      {
        question: "Can I see wild golden snub-nosed monkeys in Shennongjia?",
        answer:
          "Their habitat is part of the region's conservation importance, but a standard sightseeing trip does not guarantee a wild sighting. Establish whether a proposed visit involves wild observation, a managed setting or an exhibition, and follow current access and animal-welfare rules. Do not choose a route on the promise of an encounter without evidence.",
      },
      {
        question: "Is Shennongjia railway station close to the main attractions?",
        answer:
          "Treat it as a gateway with a separate road transfer. The chosen Muyu, Pingqian or Hongping hotel and the scenic entrance determine the real journey. Compare the dated train with the full station-to-room route, not just the time printed on the rail ticket.",
      },
      {
        question: "Can I combine Shennongjia and Wudang Mountain?",
        answer:
          "Yes when the full transport sequence and useful days support both. They offer different subjects: forest and wetland landscapes versus Daoist architecture and religious history. Allow separate accommodation and route assessments, including Wudang's remaining mountain steps. They are not neighboring attractions from one convenient hotel.",
      },
      {
        question: "Is Shennongjia suitable for a luxury nature holiday?",
        answer:
          "It can suit a carefully planned nature stay when the actual rooms, meals, guide expertise and road schedule meet your expectations. Verify those details before booking. A protected landscape or remote address does not establish resort-level facilities, specialist naturalist guiding or private access. Comfort and thoughtful use of time should be explicit in the proposal.",
      },
    ],
    culturalStory: {
      title: "Read the forest, then distinguish tradition from evidence",
      paragraphs: [
        "Shennongjia's natural interest comes from the relationships between elevation, terrain, forest and wildlife habitat. A useful guide helps you notice differences in vegetation and the conditions supporting them, rather than identify every tree from a moving vehicle. The UNESCO inscription recognizes a defined natural property; its name is not a blanket heritage status for the whole administrative district. Staying on permitted routes protects the very environments that make the visit worthwhile.",
        "The Shennong tradition links the legendary figure with farming and medicinal plants. A visit to Shennong Altar can introduce how that story is represented today, while distinguishing legend, later commemoration and historical evidence. The region's wild-man stories are folklore, not a wildlife species a guide can promise to find. A thoughtful itinerary can enjoy local storytelling without presenting it as scientific proof or implying an herbal preparation has an established medical benefit.",
      ],
    },
    foodStory: {
      title: "A good mountain meal is part of a comfortable outdoor day",
      paragraphs: [
        "Ask the actual kitchen for a balanced meal using available cultivated vegetables, potatoes, tofu and regional preparations such as cured pork where served. Mushroom dishes can be enjoyable, but clarify the ingredient and its source rather than treat wild-picked as a mark of quality. Do not collect or eat unidentified forest plants or fungi. A clear lunch plan and a warm seated dinner matter more after walking than an elaborate list of specialties the kitchen may not prepare.",
        "Discuss pork, meat stock, soy, wheat, chili and shared equipment when dietary requirements matter. A vegetable dish may still contain animal ingredients, and a rural setting does not establish vegetarian or allergy-safe kitchen capability. Confirm breakfast before an early departure, drinking water and where lunch fits around scenic transport. A hosted meal, foraging activity or producer visit requires its own actual arrangement; none follows automatically from staying in the mountains.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / night 1",
        title: "Reach the chosen base without rushing the forest",
        description:
          "Complete the station, airport or regional road transfer to the agreed room. Have a proper meal and review the next day's route, weather, layers and walking. A short local stroll is optional when arrival time and energy allow.",
      },
      {
        day: "Full day 1 / night 2",
        title: "Explore the high mountain landscape at an appropriate pace",
        description:
          "Follow the selected Shennongding route, with viewpoints, remaining walking, altitude and visitor transport explained. Treat any summit climb as an agreed choice. Keep time for stops and the complete return instead of adding a distant wetland visit late in the day.",
      },
      {
        day: "Full day 2 / night 3",
        title: "Change perspective with forest and cultural interpretation",
        description:
          "Choose a permitted forest route and one complementary subject, such as interpretation of the Shennong tradition. Guanmenshan or Tian Sheng Qiao should replace another stop when selected, not make every plan longer. Include a comfortable meal and time to enjoy the room.",
      },
      {
        day: "Optional full day 3 / night 4",
        title: "Give Dajiuhu a purposeful place in the journey",
        description:
          "Use a separately assessed Pingqian and Dajiuhu sequence when the full road, accommodation and visitor transport work. Reorder the preceding night if an early visit matters. Alternatively retain a slower forest day at the original base. The wetlands extension is a route choice, not an automatic extra on every itinerary.",
      },
      {
        day: "Departure",
        title: "Continue to the correct gateway or next Hubei chapter",
        description:
          "Complete the actual road and rail, airport or onward hotel transfer. A Yichang cruise or Wudang stay has its own dates and arrival requirements. This illustrative three- or four-night outline is not a published package or a guarantee of rooms, private access, wildlife, visibility or seasonal conditions.",
      },
    ],
  },
};
