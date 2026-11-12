import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/sayram-lake.svg",
  alt: "Original Sayram Lake planning schematic comparing a focused lake visit, a named local room and separate Bole or Yining bases; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const sayramLakeGuide: ExpandedDestination = {
  id: "sayram-lake",
  name: "Sayram Lake",
  region: "northwest",
  kicker: "Mountain-lake light, open horizons and a stay chosen for comfort",
  description:
    "Plan Sayram Lake with a selective shore route, honest overnight choices, wind and seasonal expectations, keeping Bole and Yining connections clear.",
  stay: "A focused visit or 2 nights for one full lake day",
  bestFor: "Mountain-lake landscapes, patient photography and a slower Xinjiang route",
  interests: ["landscape"],
  relatedDestinationIds: ["yining", "urumqi", "kanas"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Sayram Lake Travel Guide: Routes, Hotels & Seasons",
    seoTitle: "Sayram Lake Guide: Routes, Hotels & Seasons",
    seoDescription:
      "Plan Sayram Lake with selective shore visits, lake-area or Bole and Yining bases, two-night stays, wind, flowers, winter conditions and complete transfers.",
    answer:
      "Sayram Lake (赛里木湖), also written Sailimu Lake, is a mountain lake in Xinjiang's Bortala Mongol Autonomous Prefecture. It is often combined with an Ili journey, but is not in Yining city or simply another name for an Ili grassland. The lake surface lies at roughly 2,070 meters, with higher mountain terrain around it. Choose a selective shore route, useful time to stop and a comfortable room rather than treat a complete circuit as the measure of the visit. Two local nights provide one full lake day; a shorter visit can also work within a sensible onward route. Wind, cloud, flowers and winter ice vary, so the trip should have value beyond one promised photograph.",
    stayAnswer:
      "A focused daytime visit can fit a regional journey when the full arrival and onward roads leave useful lake time. One night can add an evening or morning, provided the room and current access support it. Two nights give a complete day without packing and can suit photography, slower walking or genuine hotel time. Three or more need another purpose and reliable services, not only hope for perfect light. Extra nights create choices but do not guarantee flowers, still water, clear mountains or unrestricted early and late access.",
    hotelAnswer:
      "Compare a named lake-area property with a Bole city room or a separate Yining stay using the complete road and what the overnight improves. A property promoted as Sayram accommodation may lie inside a visitor area, near a gate or farther away; those are different arrangements. Check exact location, operating dates, heating, hot water, bathroom, bedding, food, luggage and permitted vehicle approach. A scenic cabin, tent or yurt is not automatically a luxury room. Confirm the actual travelers' accommodation arrangements and whether evening or morning lake access is genuinely possible from that property.",
    sightseeingQuestion: "Should I complete the whole circuit or choose fewer lake stops?",
    sightseeingAnswer:
      "Choose the route for the scenery, physical needs and useful hours, using current public roads, transport and stopping rules. A complete circuit is not a requirement for a rewarding visit, particularly when guests prefer time to walk, look and rest. Select shore and viewpoint interests that provide real contrast rather than repeatedly stop for the same horizon. A lake visit, a longer hike, horseback riding and a boat are different activities with separate operating conditions. Early or late light is another timing choice, not a promise that the booked room or ticket provides unrestricted access.",
    visitorResources: [
      {
        label: "Bortala prefecture government",
        href: "https://www.xjboz.gov.cn/",
        scope:
          "Regional context and dated notices, primarily in Chinese. Confirm current lake entrances, public routes, transport, stopping rules and local accommodation with the responsible operators. A regional scenic description does not establish a particular gate, room, sunrise visit or activity.",
      },
      {
        label: "Xinjiang regional government",
        href: "https://www.xinjiang.gov.cn/",
        scope:
          "Wider public information and dated regional notices. Verify arrangements for the actual travelers, roads and dates rather than infer all routes and accommodation are available from general tourism information. Lake travel and a longer mountain-road route require separate review.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and precise stations. Bole and Yining gateways need their complete lake and hotel road compared. A train reaching a regional city does not place guests beside the lake or confirm a convenient service for the desired itinerary.",
      },
    ],
    serviceScope:
      "A proposal should name the actual traveler arrangements, room and location, gateway, visitor entrance, public route, road and internal transport, guiding, meals and admissions. Explain the real scope of any self-drive or private-vehicle arrangement rather than imply every hired car can enter every road. A tent, riding activity, boat or specialist photography service needs its own operator and terms. Private guiding does not authorize closed shores, off-road driving, drones, wild camping or walking on ice. Agree a worthwhile alternative when weather or operation changes the outdoor day.",
    routeAdvice:
      "Yining provides city neighborhoods and another base for a separately planned Ili route. Urumqi offers regional collections and a different gateway chapter. Kanas is a much wider Xinjiang extension with substantial transport and its own accommodation, not a nearby second lake. Count the full roads and useful nights before fixing the sequence. No matching published Sayram Lake tour is recommended here. Share dates, actual arrival and onward gateways, walking needs and whether scenery, photography or room time matters most to develop a tailored route.",
    practicalPlanning: {
      timing:
        "Start with the actual gateway, chosen room and current visitor operation. Allow arrival, admission, required transport, selected stops, food and the full exit road; a circuit's driving time alone is not the day. Avoid spending every useful hour moving between viewpoints. A sunrise or late-light interest requires the real access, pickup and room situation checked in advance. Keep an essential flight or train separate from an uncertain outdoor day and allow for weather-related road changes.",
      walking:
        "The lake is at mountain elevation, and the room's actual sleeping altitude should also be reviewed. Wind and cold can make a short shore walk more demanding than its distance suggests. Check public path surfaces, gradients, exposure, toilets, seats and the vehicle return. A higher viewpoint or longer mountain walk needs a separate fitness and altitude assessment. Discuss relevant health needs with an appropriate clinician before choosing the plan. Snow, ice and an attractive shoreline photograph do not establish safe access.",
      cost: "Compare the exact room and meals, full gateway roads, public admission and transport, guiding and actual activity. A local overnight, tent-style room, sunrise pickup, picnic and specialist photo assistance are separate choices unless specified. Check seasonal operation and change terms for each service. A premium should improve comfort, route fit and coordination rather than imply still water, a guaranteed flower display, private shore use or an exemption from vehicle and conservation rules.",
    },
    attractions: [
      "A selective Sayram Lake shore-and-viewpoint route under current public rules",
      "A suitable short public walk with time to look at the lake and surrounding terrain",
      "Seasonal grass and wildflower scenery where actually present and publicly accessible",
      "An evening or morning visit only when the room and current access support it",
      "A comfortable local meal and room chosen for a genuine lake purpose",
      "A winter landscape visit only with current road and public access arrangements reviewed",
    ],
    stays: [
      {
        label: "Daytime visit / part of a regional route",
        advice:
          "Retain useful stops and a meal between the actual arrival and onward roads. A selective visit can be enough when the room elsewhere offers better comfort. Do not describe a drive past the lake or a tight transfer window as a complete unhurried lake day.",
      },
      {
        label: "1 night / a useful evening or morning",
        advice:
          "Choose when the actual room, services and public access make the extra hours worthwhile. Check whether bags, meals and timing work before booking for hoped-for light. A lake-area address does not establish a view, sunrise entry or easy shore access.",
      },
      {
        label: "2 nights / one full day without packing",
        advice:
          "Use a suitable settled base for selected shore time, rest and useful photography windows when conditions allow. The room must work in wind and rain as well as clear weather. More nights need another substantive interest, not pressure to repeat every viewpoint or wait indefinitely for a perfect scene.",
      },
    ],
    hotelAreas: [
      {
        name: "A named lake-area property / assess the actual position",
        advice:
          "Clarify whether it is inside the public visitor area, near a particular gate or on another approach. Check operating dates, heating, hot water, bathroom, sound, food, vehicle access and bags. A scenic tent, cabin and hotel bedroom offer different comfort and service; judge the specific booked category.",
      },
      {
        name: "Bole city / another practical base",
        advice:
          "Compare room facilities, meals and the full lake road against any actual gateway advantage. A city hotel can be sensible when local accommodation does not meet the guests' needs, but it changes early or late lake plans. Do not treat Bole's urban services as available beside every shore stop.",
      },
      {
        name: "Yining / a separate city chapter",
        advice:
          "Useful when Yining's neighborhoods, dining and wider itinerary deserve time. Count the complete road and actual lake access instead of assume it is a lakeside base. A Yining room and a lake-area overnight solve different travel problems and should be compared honestly.",
      },
    ],
    tradeoffs: [
      {
        title: "A lake circuit is a route, not the achievement",
        advice:
          "Choose stops for differences in terrain, light and experience rather than the number of photographs. Guests may prefer a few useful walks and time to sit to an uninterrupted circuit of vehicle stops. Current access and transport rules determine the practical sequence, not an old self-drive account.",
      },
      {
        title: "A local overnight earns its place through the real room",
        advice:
          "Better local hours can justify staying, but heating, hot water, sleep, meals and indoor comfort remain essential. An attractive tent image does not establish a private bathroom or warm night. Compare a named property with a city alternative instead of assume proximity to water automatically makes the stay premium.",
      },
      {
        title: "Flowers, snow and still water are different seasonal possibilities",
        advice:
          "Wildflower timing varies by year and location; snowy mountains and a blue lake depend on conditions and visibility. Wind can change the surface quickly. Choose the season for the main purpose without promise of every postcard element on the same day, and keep off sensitive ground even when flowers lie beyond the public path.",
      },
      {
        title: "Winter scenery does not establish safe ice access",
        advice:
          "Frozen-lake photographs are not permission to walk, drive or skate on ice. Confirm current public routes, roads, operation and guest suitability before planning a winter visit. Use authorized viewpoints and accept closures; a private vehicle or guide cannot make an unsuitable surface safe.",
      },
      {
        title: "A mountain lake is not a swimming-resort promise",
        advice:
          "Viewing the shore does not establish a permitted swimming area, bathing service or operating boat. Water temperature, conservation and public rules need their own review. Design the day around what can genuinely be delivered rather than infer leisure facilities from the lake's appearance.",
      },
      {
        title: "Sayram Lake and the Ili grasslands are separate chapters",
        advice:
          "The lake lies in Bortala, while Yining and named grassland areas form other routes and rooms. A wider Ili itinerary may include the lake, but that does not make every stop a short local transfer. Choose the full journey before adding several mountain and grassland labels to the same day.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "yining",
        advice:
          "Yining adds Kazanqi, Liuxingjie and a living city context to the lake scenery. Compare the full road, exact room and useful city time. A Yining product or city stay does not automatically include Sayram admission, lake transport or an overnight by the water.",
      },
      {
        slug: "urumqi",
        advice:
          "Urumqi provides regional collections and another gateway. Compare actual dated transport and the complete road before deciding whether the lake is a travel-day stop or its own stay. A long regional connection should not be sold as spare time after a full city museum day.",
      },
      {
        slug: "kanas",
        advice:
          "Kanas offers another mountain and forest landscape on a much wider Xinjiang route. It requires substantial transport, its own room and current visitor planning. Shared lake scenery does not create a nearby day trip or establish the same road season and access conditions.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring and summer are useful starting points for open-water scenery and seasonal vegetation, but exact flower timing, snow and service operation vary. Autumn changes the vegetation and can bring colder conditions; winter is a separately planned road and landscape visit. Wind, sun, rain and temperature can shift within the day, and evenings can feel cold despite warm conditions at the departure city. Choose dates around the actual purpose and room operation rather than a fixed calendar promise of flowers, blue water and snowy peaks together.",
    orientation:
      "Sayram Lake lies in Bortala in western Xinjiang, distinct from Bole's city services and Yining's Ili city stay. The chosen visitor entrance, shore route, room and gateway create separate daily-road decisions. Allow a separate city stay for Bole or Yining when those interests matter; a lake overnight serves a different purpose. The lake's roughly 2,070-meter elevation is a starting point; review the actual room and any higher walking route rather than assume all stops share one elevation.",
    experiences: [
      "Spend time with the changing relationship between lake surface, shore and mountain terrain",
      "Choose suitable public walks and stops without treating a circuit as compulsory",
      "Enjoy a comfortable base that makes a slower day worthwhile beyond one photograph",
    ],
    planningNotes: [
      "Choose the actual lake property or city alternative before fixing early and late visits",
      "Assess wind, temperature, altitude and current public routes for the whole day",
      "Keep Bortala, Yining and wider grassland connections geographically clear",
    ],
    arrival:
      "Compare the actual dated flight or train with the full road to the chosen room and visitor entrance. A Bole or Yining gateway may suit different routes; neither is the lake itself. Confirm the actual travelers' arrangements, room operation, luggage and pickup, and recheck public road and weather notices. A gateway arrival should leave a realistic usable window before any essential lake visit. Avoid tying an uncertain outdoor route to a tight departure from another city.",
    gettingAround:
      "Use current public vehicle, admission and stopping rules for the actual route. A private driver is not proof of unrestricted circuit access, and a scenic shuttle is a different service from a car retained for the day. Plan suitable public walks, toilets, meals and turn-back options. A bicycle, horse, boat or drone needs its own permitted operator or authorization and guest suitability review. Do not drive off road, trample vegetation or improvise access to a closed shore.",
    stayStrategy:
      "Stay locally when the room, services and useful lake hours genuinely improve the holiday. Otherwise, a selective lake visit and comfortable city room can be the better choice. For two nights, make sure the property offers suitable meals and indoor comfort if wind or rain limits outdoor time. Premium planning should improve coordination, sleep and pacing, with any special activity explicitly confirmed. It cannot secure a particular sky, flower display or empty shoreline.",
    firstTimerNote:
      "Choose how you want to spend the day before deciding to drive every kilometer of a circuit. A few well-chosen stops, a short walk and time to rest can make the lake memorable. Then compare what a local night actually adds, using a specific room and current access. A beautiful tent photograph and a sunrise wish are not enough to establish a comfortable overnight plan.",
    faqs: [
      {
        question: "Is Sayram Lake the same as Sailimu Lake?",
        answer:
          "Yes. Sayram Lake and Sailimu Lake are English names used for 赛里木湖 in Xinjiang's Bortala prefecture. It is often included in an Ili itinerary but is not in Yining city or another name for an Ili grassland.",
      },
      {
        question: "How many nights should I stay at Sayram Lake?",
        answer:
          "A focused daytime visit can work within a sensible regional route. One local night can add useful evening or morning hours; two give a full day without packing. Confirm the actual room and access before choosing, and add longer stays only for a real purpose.",
      },
      {
        question: "Should I stay near Sayram Lake, in Bole or in Yining?",
        answer:
          "Compare the specific lake room with city comfort, food and the complete road. Bole and Yining provide different gateway or city advantages. A lake-area label does not establish a shore view, warm room or unrestricted early access.",
      },
      {
        question: "Do I need to drive the complete Sayram Lake circuit?",
        answer:
          "No. A selective route with useful stops and suitable walking can be rewarding. Choose using current transport rules, useful hours and guest interests. A complete circuit is not a measure of depth and should not displace meals, rest or the onward connection.",
      },
      {
        question: "When can I see wildflowers at Sayram Lake?",
        answer:
          "Timing varies by year, location and conditions. Check locally near the date rather than rely on a fixed annual flowering promise. Keep to public routes and let the lake and mountain setting provide value even when vegetation differs from a promotional image.",
      },
      {
        question: "Can I walk on the frozen lake in winter?",
        answer:
          "Do not infer safe or permitted ice access from photographs. Follow current official restrictions and use authorized visitor routes. A winter visit needs its own road, weather, room and guest-suitability assessment.",
      },
      {
        question: "Is altitude relevant at Sayram Lake?",
        answer:
          "Yes. The lake surface is roughly 2,070 meters, with potentially higher walking routes and a room whose actual elevation should be checked. Assess personal health needs with appropriate medical advice, as well as wind, cold and the full physical plan.",
      },
    ],
    culturalStory: {
      title: "Give the landscape more than a postcard caption",
      paragraphs: [
        "A mountain-lake visit becomes richer when attention moves between surface, shoreline and surrounding terrain. Wind changes the water, clouds alter the visible mountains and seasonal vegetation shifts the foreground. A guide can help guests read those differences from appropriate public stops. The value lies in looking carefully, not in a guarantee that every familiar photograph can be reproduced.",
        "The wider Bortala region also has contemporary communities and working landscapes beyond the scenic visitor route. Do not treat a yurt-shaped room, roadside animal or a glimpse of pastoral life as permission for a home visit or a staged encounter. If deeper cultural learning is wanted, agree a suitable host, language and purpose. Public scenery and a personal invitation are different experiences, both best described honestly.",
      ],
    },
    foodStory: {
      title: "Plan food before leaving the city services behind",
      paragraphs: [
        "Choose where lunch fits among the actual shore stops, with a warm indoor option when conditions call for it. Ask what the specific kitchen serves, how portions are sized and what is included in a room's meal plan. A picnic can be enjoyable when properly arranged and permitted, but is not a substitute for an agreed suitable meal. Keep waste contained and leave public stops as you found them.",
        "Check meat stocks, wheat, dairy, sesame, nuts and shared preparation where relevant. A regional menu, a vegetable dish or a property label does not establish halal, vegetarian, allergy or coeliac provision. Serious needs require the actual kitchen's confirmed capacity and a practical alternative. Review both breakfast and dinner for a local overnight instead of assume city dining choice exists beside the lake after dark.",
      ],
    },
    itinerary: [
      {
        day: "Focused visit option",
        title: "Keep useful lake time between the real roads",
        description:
          "Reach the correct entrance under current rules, follow selected public stops and allow a suitable meal. Continue only when the actual onward road remains comfortable. A brief drive-through should not be described as an unhurried complete lake day.",
      },
      {
        day: "Two-night option / arrival",
        title: "Settle into the confirmed room",
        description:
          "Complete the gateway journey, check the room and meals, and review current weather and access. A modest late visit can fit when genuinely available. Keep the essential lake route away from uncertain arrival rather than rely on a promised sunset.",
      },
      {
        day: "Full lake day",
        title: "Choose the stops that reward your time",
        description:
          "Use a suitable public sequence with short walks, time to look, food and rest. Adjust to wind, temperature and operation. The room should offer worthwhile comfort if outdoor time is shorter than planned; boats, riding and other activities remain separately confirmed choices.",
      },
      {
        day: "Departure / Bole, Yining or another gateway",
        title: "Protect the complete connection",
        description:
          "Allow breakfast, bags, actual public exit and the full road to the next room or ticketed gateway. This outline is illustrative, not a published package or a guarantee of rooms, road access, flowers, light, ice conditions, activities or private hosts.",
      },
    ],
  },
};
