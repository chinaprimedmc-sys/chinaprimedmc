import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/qinghai-lake.svg",
  alt: "Qinghai Lake planning schematic separating a selected return excursion, a reviewed lakeside overnight and a longer regional route; not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const qinghaiLakeGuide: ExpandedDestination = {
  id: "qinghai-lake",
  name: "Qinghai Lake",
  region: "northwest",
  kicker: "An immense plateau lake, best experienced with fewer stops and a clear plan",
  description:
    "Choose a worthwhile Qinghai Lake visit with realistic advice on the higher altitude, south-shore access, lakeside rooms, weather and the difference between a selected outing and a full driving circuit.",
  stay: "A selected day visit or 1–2 lake-area nights",
  bestFor: "Plateau landscapes, a slower road journey and considered photography",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["xining", "zhangye", "dunhuang"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Qinghai Lake Travel Guide: Day Trip or Overnight?",
    seoTitle: "Qinghai Lake Travel Guide: Day Trip or Overnight?",
    seoDescription:
      "Compare a Qinghai Lake day trip with an overnight, including Erlangjian, Heimahe, Gangcha, altitude, room checks, seasonal scenery and a realistic route.",
    answer:
      "Qinghai Lake (青海湖), also known historically as Koko Nor or Kokonor, is a large saline lake on the Qinghai-Tibetan Plateau in Qinghai Province. Its surface lies at around 3,200 meters above sea level, higher than Xining, and some connecting roads rise further. Visit for the scale of the water, grassland and distant hills, not a seaside resort or an automatic list of activities. Choose a particular shore and public visitor route, then decide whether a return excursion or a well-reviewed overnight adds more value. A complete drive around the lake is a substantial road itinerary, not a requirement for understanding the landscape.",
    stayAnswer:
      "A selected day trip from Xining can provide a lake introduction when the full return drive, altitude and time at the chosen shore fit the traveler. One lake-area night can reduce repeated driving or allow a more relaxed light window, but the room and higher sleeping elevation need their own review. Two nights provide more flexibility for weather and a distinct second subject. Count Xining nights separately and do not buy an overnight solely on a promise of sunrise, reflections or stars, which depend on conditions.",
    hotelAnswer:
      "Choose a named property near the part of the shore you intend to visit, not simply a hotel with Qinghai Lake in its name. Compare south-shore or Erlangjian-area stays, a Heimahe-area base on the southwestern side, or Gangcha-area accommodation on the north side only when that route is the purpose. They are different road plans, not interchangeable hotel districts. Confirm the room's location, heating, hot water, bathroom, bedding, meals and noise. Lake view does not mean direct legal shore access, quiet surroundings or facilities comparable with a major city hotel.",
    sightseeingQuestion: "Should you visit Qinghai Lake for a day or stay overnight?",
    sightseeingAnswer:
      "Choose a return outing when one selected lake experience is enough and you prefer to keep the night in Xining, accepting the full day on the road and exposure to higher altitude. Choose an overnight when the property, route and additional usable time justify sleeping higher. The benefit should be a better-paced stay, not a guaranteed photographic scene. Compare both complete plans, including where the car stops, how you reach the visitor area, the meal and the room. An overnight is not automatically more luxurious, and a day trip is not automatically an easy or medically suitable option.",
    visitorResources: [
      {
        label: "Qinghai provincial government",
        href: "https://www.qinghai.gov.cn/",
        scope:
          "Provincial public information, mainly in Chinese. Check current lake visitor arrangements, protected-area boundaries, local road notices and the responsible scenic-area operator for the selected route. Regional background does not establish access to every shore, former attraction or individual accommodation.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel and altitude illness",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General travel-health information on ascent and altitude illness. It does not assess the traveler, validate an ascent schedule or replace qualified medical advice. Review daytime and sleeping elevations individually; private transport, hotel oxygen amenities and a lower return base are not guarantees against altitude illness.",
      },
    ],
    serviceScope:
      "A tailored lake proposal can specify the Xining or other gateway, selected shore, vehicle, guide, public visitor route, named admissions, meals and any overnight room. Local shuttles, boat services, cycling, photography assistance and cultural hosts require individual confirmation and terms. Private road travel does not permit unrestricted driving onto grassland, shore access through protected areas or entry into households. Share altitude and mobility concerns, dietary needs and whether the priority is photography, landscape interpretation or a quieter road journey before deciding on the route.",
    routeAdvice:
      "Plan Qinghai Lake as its own landscape chapter alongside Xining, with the highest road sections and sleeping elevations visible. A longer route toward Zhangye or Dunhuang requires separate driving or transport days and distinct overnight bases. Chaka Salt Lake is a different lake and a separate excursion, not another viewpoint on Qinghai Lake. No matching published Qinghai Lake product is recommended here. Use the illustrative outline to discuss a tailored visit that protects time at the chosen shore and distinguishes real inclusions from weather-dependent options.",
    practicalPlanning: {
      timing:
        "Choose the shore and visit purpose before deciding how many stops to include. Allow for the approach road, traffic, parking, any required local transport, walking, a meal and the return or hotel transfer. A lake photograph is a moment, not the length of the whole visit. Keep a fixed flight or train away from a long shore circuit whose return can change with road and weather conditions. Leave a simpler route available if the group needs less exertion or a shorter day.",
      walking:
        "Even modest distances can feel different around 3,200 meters. Review surfaces, steps, exposure, toilets and places to sit on the chosen visitor route. A flat-looking shore is not automatically a maintained, accessible path. Wind, sun and cold add to the demands of standing outside for photography. Use short sections and a vehicle-accessible turnaround where permitted; do not infer that the car can follow across private land or protected shoreline. New or worsening symptoms call for appropriate assessment rather than continuing to the next higher stop.",
      cost: "Compare the complete vehicle day, guide language, named visitor access, local transport, meals and any room category. A shore-view hotel, a room facing a road and a village guesthouse may all use similar destination labels while offering different comfort. Confirm heating, hot water and dinner before paying for a remote setting. Boats, bikes, performances or photography arrangements are not included merely because an image appears on a destination page. A better trip can mean fewer stops, a dependable meal and an honestly specified room.",
    },
    attractions: [
      "A selected public lake-view route with the actual shore access confirmed",
      "Erlangjian / 二郎剑 on the southern shore, with its current visitor arrangements reviewed",
      "A Heimahe-area overnight or viewpoint when the southwestern route fits",
      "A Gangcha-area northern chapter when it adds a distinct purpose",
      "Seasonal grassland and flower landscapes viewed from permitted places",
      "A longer regional route only with its own nights, roads and altitude profile",
    ],
    stays: [
      {
        label: "Selected day visit: a focused lake introduction",
        advice:
          "Use one shore and a realistic public route, allowing the complete return journey from Xining or another agreed base. Keep the list short enough for a meal and time to look. Returning lower to sleep is a different plan from an overnight, but does not remove exposure to higher elevations during the day.",
      },
      {
        label: "1 lake-area night: useful time, if the room and altitude fit",
        advice:
          "An overnight can reduce backtracking or leave a less hurried evening and morning. Review the actual property, dinner and sleeping elevation before booking. Do not justify the room only by a sunrise promise, and do not combine a late arrival with an early departure while advertising a full lakeside retreat.",
      },
      {
        label: "2 lake-area nights: a slower landscape chapter",
        advice:
          "Allow a second distinct shore interest or a flexible light window without constant packing. Choose the base and route carefully: two nights do not require a complete circuit or another distant salt-lake excursion. The additional time is worthwhile when the property and travelers' comfort support a higher stay.",
      },
    ],
    hotelAreas: [
      {
        name: "Southern shore / Erlangjian-area properties",
        advice:
          "Consider when the chosen southern visitor route is the main subject. Confirm the property's Chinese address and exact relationship to the shore, road and entrance. Erlangjian lies in the wider Hainan Tibetan Autonomous Prefecture area of Qinghai; Hainan here is not Hainan island in southern China. Check room heating, meals, hot water and noise rather than assuming a destination name specifies the stay.",
      },
      {
        name: "Heimahe-area accommodation",
        advice:
          "Consider for a southwestern route and a less hurried morning or evening when suitable accommodation is available. Review room standards, dinner and the permitted viewing location separately. A sunrise reputation does not establish a view from the room, accessible shore or clear conditions. A higher overnight requires its own suitability assessment, not simply enthusiasm for early light.",
      },
      {
        name: "Gangcha-area accommodation on a northern route",
        advice:
          "Choose only when the north-side chapter and onward road pattern justify it. It is not a convenient substitute for every south-shore plan. Establish what you will actually visit, the full transfer and where meals and services fit. A town base may offer practical comforts without the lakefront setting shown in regional photography.",
      },
      {
        name: "Xining as a lower return base",
        advice:
          "A city room can offer a more dependable range of meals and services, while the selected lake visit remains a substantial road day. Compare the full return journey with the benefit of sleeping lower. Xining itself is elevated, so a city return is not a medical guarantee. Keep the city nights and lake touring time distinct when reading a proposal.",
      },
    ],
    tradeoffs: [
      {
        title: "A selected shore can be better than a full circuit",
        advice:
          "Driving all the way around uses a large part of the itinerary and does not guarantee access at every scenic stretch. Decide what the additional shore contributes: a different landscape, a useful overnight or a sensible onward route. For a first visit, a well-chosen public stop with time to understand the lake may be more valuable than several quick roadside pictures. Do not count driving past water as equivalent to meaningful time at the shore.",
      },
      {
        title: "Lake altitude, road altitude and sleeping altitude are different numbers",
        advice:
          "The water surface is around 3,200 meters, while some approach or onward routes rise higher and hotel elevations vary. Review the whole profile before choosing a day trip or overnight. Time in Xining, physical fitness, a private car or oxygen equipment does not guarantee that an individual will tolerate the route. Seek qualified personal advice where needed, keep the plan flexible and do not continue higher through symptoms merely to preserve a scheduled excursion.",
      },
      {
        title: "Old attraction lists do not establish current access",
        advice:
          "Descriptions of Bird Island and other shoreline sites can persist long after visitor arrangements change. Check the precise place and current public access before including it; do not promise bird-viewing entry, boat landings or unrestricted shore walks from an old guide. Wetlands, wildlife habitat, pasture and villages are not open-access scenery. Choose permitted routes and observation distances, with an alternative if conservation or local restrictions affect the plan.",
      },
      {
        title: "Rapeseed flowers and blue water are conditions, not inclusions",
        advice:
          "Flowering depends on the field, local season and agricultural work; water color and visibility change with sky and wind. The well-known rapeseed landscapes of Menyuan are a different destination, not automatically the same fields beside Qinghai Lake. Use the place and date together when discussing photographs. Ask permission before entering crops and avoid implying that a dramatic promotional image can be reproduced on a fixed day.",
      },
      {
        title: "Chaka is a separate salt-lake decision",
        advice:
          "Chaka Salt Lake has its own road journey, visitor arrangements, surfaces and photographic conditions. It is not a small extra viewpoint on Qinghai Lake. If both matter, allocate the full transfer and any additional nights honestly. Mirror-like reflections, clear skies and access to particular visitor routes are condition-dependent. A traveler seeking an unhurried plateau lake stay may be better served by leaving Chaka for another trip rather than lengthening every day.",
      },
      {
        title: "Boating, cycling and frozen-lake images need separate review",
        advice:
          "A destination photograph does not establish a currently available boat, suitable cycle route or safe ice activity. Ask about the named operator, weather, equipment, supervision, age or health requirements and exact inclusion. A full cycling circuit is a substantial high-altitude undertaking, not a casual add-on to a short hotel stay. In winter, a frozen-looking surface is not permission to walk or drive onto the lake; use only activities specifically authorized under current conditions.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "xining",
        advice:
          "Give Xining time for a city introduction, a selected collection or Kumbum Monastery before treating it as a pickup point. The city is lower than the lake but still elevated. Choose the lake route and any overnight individually; a fixed city stay does not certify readiness to go higher.",
      },
      {
        slug: "zhangye",
        advice:
          "Zhangye adds Danxia landforms and a different Gansu setting. Review the route through or around higher mountain areas, seasonal roads and overnight sequence rather than assuming it is a short drive after a lake visit. A transport alternative may suit guests who value comfort more than a long scenic crossing.",
      },
      {
        slug: "dunhuang",
        advice:
          "Dunhuang's Mogao art and oasis landscape belong to a separate chapter with considerable transport between destinations. Give it its own nights and current cave arrangements. A broad Qinghai-Gansu loop needs enough days for the intervening roads, rather than being sold as a sequence of adjacent attractions.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The warmer months are a common starting point for open-water scenery and a wider plateau road trip, with peak demand and variable flower timing still important. Strong sun, wind and cold mornings can occur even in summer. Spring and autumn need closer attention to temperature, roads and the services actually operating. Winter is a different trip with severe cold, road and facility limitations to review, not the summer itinerary with a white surface. No season guarantees blue water, reflections, flowers or clear stargazing.",
    orientation:
      "Qinghai Lake is a large lake spread across different county and prefecture-level areas, not a compact visitor town. Erlangjian on the southern shore, Heimahe toward the southwest and Gangcha on a northern route create different driving and overnight plans. Xining is a separate city and transport gateway. Chaka is another lake, and Menyuan another flower-landscape destination. Use a precise shore location and Chinese hotel address rather than treating Qinghai Lake as one interchangeable map pin.",
    experiences: [
      "Spend unhurried time at a selected public shore, with the scale of the plateau landscape explained",
      "Choose a worthwhile overnight only when its room, higher elevation and additional usable time fit",
      "Build a focused road journey that respects protected habitat, village life and changing weather",
    ],
    planningNotes: [
      "Review the lake's roughly 3,200-meter elevation alongside higher roads and the intended sleeping base",
      "Name the shore, visitor access, meals and room before comparing a day trip with an overnight",
      "Keep flowers, wildlife, sunrise, reflections and optional activities separate from guaranteed services",
    ],
    arrival:
      "Most gateway comparisons start with the actual arrival in Xining, then a separate road transfer to the selected shore or hotel. The lake itself is not the airport or railway station named on that ticket. Other road approaches can suit a longer route only when the season, altitude and driving pattern have been reviewed. Keep arrival fatigue and final access visible; a long connection should not end with a compulsory higher excursion simply because the vehicle is already booked.",
    gettingAround:
      "Use a planned vehicle for the agreed route, with legal stopping places, meal location and any required local visitor transport identified. Do not assume the driver can pull onto fields or reach any photographed stretch of shore. A private road transfer is not private lake access or a private boat. Keep cycling and longer walks separate from ordinary sightseeing, with route and ability assessed. Weather, road controls or the traveler's condition can justify shortening the day rather than completing every planned stop.",
    stayStrategy:
      "Choose between a lower city return and a named lake-area room by comparing the whole experience. Check heating, bedding, hot water, bathroom, food and quietness, plus the room's view and the legal route to the shore. Remote does not necessarily mean peaceful or luxurious. For a higher-end trip, an honest city room and a carefully paced lake day can be preferable to a scenic-sounding overnight that compromises sleep, meals or altitude suitability.",
    firstTimerNote:
      "Qinghai Lake is about space, changing light and the relationship between water, grassland and distant hills. You do not need to stand on every shore to appreciate that. Choose the best practical visit for the traveler, leave time to look and keep the return or overnight comfortable. The strongest proposal can be the shorter one when it makes the altitude, access and real usable time clear.",
    faqs: [
      {
        question: "How high is Qinghai Lake?",
        answer:
          "The lake surface is around 3,200 meters above sea level, higher than Xining at roughly 2,300 meters. Some approach and onward roads go higher. Review daytime and sleeping elevations together; fitness, hotel oxygen amenities or a private vehicle do not guarantee protection from altitude illness.",
      },
      {
        question: "Is Qinghai Lake better as a day trip or an overnight?",
        answer:
          "A focused day trip can work when the full return drive and altitude fit the traveler. An overnight can add useful time or reduce backtracking, but the room and higher sleeping elevation need separate review. Choose by the complete plan rather than a guarantee of sunrise or an assumption that overnight always means luxury.",
      },
      {
        question: "Do I need to drive all the way around Qinghai Lake?",
        answer:
          "No. A selected public shore can provide a meaningful introduction without a full circuit. Drive farther only when another shore, overnight or onward connection adds real value. The lake is large, and a circuit involves substantial driving rather than one compact sightseeing loop.",
      },
      {
        question: "Where should I stay at Qinghai Lake?",
        answer:
          "Choose a named property around the shore your route actually uses, such as the southern visitor area, Heimahe or a northern Gangcha chapter. They create different driving patterns. Confirm the room, heating, hot water, meals, noise and shore access; the lake name alone does not specify comfort or location.",
      },
      {
        question: "Can I visit Bird Island at Qinghai Lake?",
        answer:
          "Check current official visitor arrangements for the precise site before including it. Older attraction lists do not establish present access, boat service or wildlife-viewing permission. Protected habitat and local restrictions can change the plan, so choose an authorized alternative where needed.",
      },
      {
        question: "When do the rapeseed flowers bloom beside Qinghai Lake?",
        answer:
          "Timing varies with the field, local conditions and agricultural work. Check the actual area close to travel rather than using a fixed date from a photograph. Menyuan's well-known flower landscapes are a separate destination, and neither flowers nor blue-water conditions are guaranteed.",
      },
      {
        question: "Is Chaka Salt Lake part of Qinghai Lake?",
        answer:
          "No. Chaka is a different lake with a separate road journey and visitor arrangements. Including both needs enough time for transport, walking and any extra night. Mirror-like reflections and access to particular surfaces depend on current conditions, not the itinerary title.",
      },
      {
        question: "Is Qinghai Lake a beach or swimming holiday?",
        answer:
          "Plan it as a high-altitude landscape visit rather than a seaside resort. Cold water, local rules, protected shores and conditions matter. A lake-view room or shore photograph does not establish swimming access, supervised bathing or a currently available boat activity.",
      },
      {
        question: "Can I cycle around Qinghai Lake on a short visit?",
        answer:
          "A full circuit is a substantial high-altitude cycling undertaking. A shorter ride still needs an appropriate route, equipment, traffic and weather review and a realistic assessment of ability. It should not be added to an ordinary sightseeing day merely because bicycles appear in destination marketing.",
      },
    ],
    culturalStory: {
      title: "See a lived-in landscape, not empty scenery",
      paragraphs: [
        "The lake sits within landscapes of pastoral use, communities, religious meaning and protected habitat. Grassland that looks open from the road can have an owner, a working purpose or an access restriction. An informed guide can explain the selected place without promising entry everywhere. Use public routes, respect fields and livestock, and ask before photographing people rather than treating residents as part of a landscape composition.",
        "Tibetan cultural interests deserve a specific subject and appropriate interpretation, not an automatic household visit or a generic performance appended to a lake day. A public religious place, a commercial attraction and a consenting host are different encounters. If that is a central interest, establish the venue, participants and access in advance. A thoughtful visit can remain modest and public while still helping the traveler understand the region.",
      ],
    },
    foodStory: {
      title: "A dependable meal is part of a good plateau day",
      paragraphs: [
        "Plan a proper meal rather than leaving everyone to improvise between photographic stops. A selected local restaurant or hotel can offer noodles, vegetables, tofu and suitable meat dishes, with portions and preparation explained. Regional yogurt and tea can be welcome, but the ingredients and service vary. Do not assume a dairy product is made from yak milk or that a rural menu automatically meets halal, vegetarian or allergy-related needs.",
        "For an overnight, confirm dinner hours, advance ordering and breakfast before an early departure. Cold weather, an isolated property and a late finish make a clear food plan especially valuable. Stocks, sauces, shared cooking and availability matter more than a long list of signature dishes. Keep meals comfortable and flexible so the day is organized around the travelers rather than an effort to complete every viewpoint.",
      ],
    },
    itinerary: [
      {
        day: "Before the lake chapter",
        title: "Review the city stay and full ascent profile",
        description:
          "Arrive in Xining, keep the first schedule modest and review the intended higher route and sleeping base. Individual health and current conditions determine suitability; no fixed city-night count guarantees readiness. Confirm the selected shore, room or return plan and meals.",
      },
      {
        day: "Lake day",
        title: "One selected shore with time to experience it",
        description:
          "Allow the full road journey and use the agreed public visitor route, with short walking sections, a meal and a flexible finish. Choose a city return or the reviewed lake-area property. Do not turn the day into an obligatory circuit or a chain of weather-dependent activities.",
      },
      {
        day: "Following day, if staying overnight",
        title: "A calmer morning, then the planned onward route",
        description:
          "Use a permitted viewpoint when conditions and the group make it worthwhile, without a guarantee of sunrise or reflections. Continue with enough time for the complete road journey. A second lake night can add flexibility when appropriate; it does not require a distant extra excursion.",
      },
      {
        day: "Onward chapter",
        title: "Keep a wider Qinghai-Gansu journey separate in the timing",
        description:
          "Add Zhangye, Dunhuang or another destination only with its own transport, overnight sequence and current visitor arrangements. This framework is illustrative, not a published product, medical assessment or assurance that optional activities and private hosts are included.",
      },
    ],
  },
};
