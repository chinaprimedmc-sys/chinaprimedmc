import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/libo.svg",
  alt: "Libo planning diagram comparing a county-town base, accommodation near a selected scenic entrance and separate Xiaoqikong and Daqikong decisions; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const liboGuide: ExpandedDestination = {
  id: "libo",
  name: "Libo",
  region: "southwest",
  kicker: "Forested karst, riverside paths & a well-paced Guizhou stay",
  description:
    "Choose Libo's rivers, forest and karst scenery through a manageable Xiaoqikong route, with the right hotel entrance, walking plan and time for a distinct Daqikong visit if wanted.",
  stay: "2–3 nights",
  bestFor: "Karst landscapes, forest walks and a slower Guizhou route",
  interests: ["landscape", "food", "heritage"],
  relatedDestinationIds: [
    "xingyi",
    "guiyang",
    "jingxi",
    "chishui",
    "zhaoxing",
    "guilin",
    "jiuzhaigou",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Libo Travel Guide: Xiaoqikong, Hotels & Karst Walks",
    seoTitle: "Libo Travel Guide: Xiaoqikong & Where to Stay",
    seoDescription:
      "Plan Libo's Xiaoqikong and Daqikong with hotel-area choices, walking and shuttle advice, weather expectations and a tailored Guizhou route via Zhaoxing.",
    answer:
      "Libo is a county in southern Guizhou known for forested karst and river scenery, with Xiaoqikong the main sightseeing interest for many visitors. Its name, often translated as Small Seven Arches, refers to a bridge associated with a much wider scenic route of water, forest and rock. Daqikong, or Large Seven Arches, is a different visitor area and should be chosen separately. The Libo Karst component of the South China Karst World Heritage property gives the region geological significance; a particular tourist ticket is not access to the whole listed landscape.",
    stayAnswer:
      "Two nights give one full day for a selected Xiaoqikong route without making the whole visit depend on a short arrival window. Three nights provide a second full day for Daqikong, a slower landscape visit or another separately reviewed interest. One night can suit a selective introduction with compatible rail and road arrangements, but should not promise both areas and a full onward transfer. Additional time helps with pacing and weather decisions, not a guarantee of clear water or every path being open.",
    hotelAnswer:
      "Choose Libo county town for a wider selection of meals and city services, accepting the road journey to the selected park entrance. A property near Xiaoqikong can help a landscape-led stay, but confirm which entrance it serves and the actual room, dining and pickup. A remote countryside or resort stay needs its own facility and access review. Scenic-area, ancient-town and boutique labels do not establish a historic building, convenient park admission or a high-end room. Compare real comfort and the complete daily route.",
    sightseeingQuestion: "Should you visit Xiaoqikong, Daqikong or both?",
    sightseeingAnswer:
      "Choose Xiaoqikong for the main combination of river, forest, cascades and selected scenic stops, planning a route around the actual shuttle and walking arrangements. Consider Daqikong for a different gorge-and-karst interest after reviewing its current paths and operation. They are not two names for the same short bridge visit. A traveler wanting one comfortable landscape day may prefer a selective Xiaoqikong visit and rest rather than trying to exhaust both areas. Confirm ticket scope, entrances and transport separately from the decision about what is worth your time.",
    visitorResources: [
      {
        label: "UNESCO: South China Karst",
        href: "https://whc.unesco.org/en/list/1248/",
        scope:
          "Geological background on the serial World Heritage property, including Libo Karst. This does not establish tourist-ticket boundaries, current walking routes, water color or access to every part of the protected landscape.",
      },
      {
        label: "Libo county government",
        href: "https://www.libo.gov.cn/",
        scope:
          "County context and public notices. Check current scenic-area operation, entrances, internal transport, weather-related closures and accommodation services separately with the actual operator.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Libo stay with the actual hotel, guide, road transfers, named admissions and internal transport specified in the proposal. A private road vehicle does not mean unrestricted driving between every park viewpoint. Boat rides, special routes, cultural hosts and hotel activities are included only when explicitly agreed. Describe mobility and walking needs before choosing the park circuit and property; protected areas and local communities retain their own access rules.",
    routeAdvice:
      "Libo can provide a nature chapter alongside Zhaoxing's village architecture or a separately planned wider Guizhou route. Compare actual railway services, the exact stations and both hotel transfers before choosing the order. Guilin and Yangshuo add another karst setting with a different travel pattern and landscape emphasis. There is no published Libo product recommended here. The outline is illustrative, and the proposal should identify the selected park route, hotel and complete intercity sequence rather than assume every mentioned interest is included.",
    practicalPlanning: {
      timing:
        "Give Xiaoqikong a substantial visitor window that includes admission, any shuttle, selected walking, breaks and the exit journey. The preferred entrance and direction should follow the current route and group needs rather than an unchanging shortcut claimed online. Choose meals and rest before adding a second scenic area. Keep a fixed train departure separate from a route whose internal queues or weather restrictions may change the finish time.",
      walking:
        "Expect different combinations of paved paths, stone steps, damp surfaces and standing at scenic stops. A shuttle reduces some distance but does not make every waterfall, forest section or viewpoint step-free. Review the actual accessible stops and a shorter route for knees, balance or wheelchair needs. Water-level changes or rain can close paths or make them unsuitable; follow the operator's current instructions rather than stepping around barriers for a photograph.",
      cost: "Compare the actual room, road hours, guide, named admissions and included internal transport. A boat or other optional experience needs its own operation and charge confirmed. Near-park accommodation can change meal options and gateway transfers, so include the complete sequence in the quote. A premium should correspond to real room comfort, service or useful time, not a promise of private waterfalls, empty paths or a particular shade of water.",
    },
    attractions: [
      "Xiaoqikong / Small Seven Arches scenic area",
      "Selected Xiaoqikong forest, cascade and riverside stops",
      "Daqikong / Large Seven Arches as a separate visit",
      "Libo Karst landscape context",
    ],
    stays: [
      {
        label: "1 night: a selective landscape stop",
        advice:
          "Works only when actual arrival and departure provide a useful park window. Do not assume a late train arrival leaves time for a complete circuit or that both scenic areas fit before an onward journey.",
      },
      {
        label: "2 nights: one well-paced Xiaoqikong day",
        advice:
          "Choose a manageable main route and keep the evening uncomplicated. A good hotel and meal matter after damp or tiring walking. The arrival and departure can remain travel periods rather than additional full sightseeing days.",
      },
      {
        label: "3 nights or more: add contrast or a slower stay",
        advice:
          "Consider Daqikong when its particular interest and current access justify another visit, or retain more hotel and rest time. Extra nights provide flexibility but cannot guarantee reopened paths, clear skies or unchanged water conditions.",
      },
    ],
    hotelAreas: [
      {
        name: "Libo county town",
        advice:
          "A practical starting point for meals and services, with separate drives to the selected scenic entrances. Confirm the actual room, temperature control, bathroom and gateway transfer. A town address does not make the park a short walk or every restaurant suitable for strict dietary needs.",
      },
      {
        name: "Properties near the selected Xiaoqikong entrance",
        advice:
          "Choose a specific property for its room and genuine relationship to the entrance used by your route. Check evening food, breakfast, pickup, stairs and road access. Near Xiaoqikong is not one uniform location, and hotel access does not establish park entry outside public hours.",
      },
      {
        name: "Other countryside or landscape-led stays",
        advice:
          "Consider only when the exact setting and facilities add value. Review bathroom, sleep, humidity, heating or cooling, meals and daily road service. A dramatic river photograph does not establish private water access, suitable swimming or the view from your booked room.",
      },
    ],
    tradeoffs: [
      {
        title: "Water scenery changes with weather and flow",
        advice:
          "Rain, water level, sediment and light can alter the appearance of pools and cascades. A photograph from another season may not represent the visit you will have. Choose the underlying forest and karst interest rather than a guaranteed turquoise color. Higher flow can change safety and access, so a guide should adapt within authorized routes rather than promise every stop regardless of conditions.",
      },
      {
        title: "Internal transport and a walking itinerary are different layers",
        advice:
          "Check the current shuttle stops, permitted direction and walking between selected points. A ticket that includes transport does not imply door-to-door access to every feature. Agree which stops matter most and what happens if a route becomes too tiring. The road driver outside the park cannot automatically collect the group from an internal path.",
      },
      {
        title: "The bridge name does not describe the whole experience",
        advice:
          "Small Seven Arches and Large Seven Arches are names associated with distinct scenic areas, not simply two bridge photographs on the same brief walk. Explain whether a proposed visit involves forest paths, cascades, gorge scenery, a boat or another feature, with current inclusion checked. A combined admission, if available, is not a reason to rush every section.",
      },
      {
        title: "Protected landscape and local cultural visits have separate permissions",
        advice:
          "UNESCO recognition describes a geological property, not unrestricted access to rivers, caves or surrounding villages. Do not swim, leave marked routes or enter closed areas simply because water looks inviting. Any community or household encounter should have a named setting and willing host rather than be assumed from a park ticket or a broad local-culture description.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "xingyi",
        advice:
          "Compare Libo's forest-and-river karst with Xingyi's Wanfenglin peak-and-field countryside. Both can reward a longer itinerary when the contrast justifies the full connection and useful nights. Assess Maling River Gorge separately; the physical effort is not the same as a selected village walk.",
      },
      {
        slug: "guiyang",
        advice:
          "Guiyang adds provincial collections, regional food and a distinct city base. Compare the actual dated service, both hotel transfers and Libo scenic-entrance access. A city overnight can provide useful context, but should not absorb the park day or imply every Guizhou destination is a short return excursion.",
      },
      {
        slug: "jingxi",
        advice:
          "Jingxi in western Guangxi offers a different spring, craft and gorge chapter. Compare the complete road-and-rail connection, useful nights and actual walking before choosing both. A shared karst-water interest does not make them neighboring entrances or ensure every gorge suits a gentle scenic stay.",
      },
      {
        slug: "chishui",
        advice:
          "Chishui provides a different red-sandstone and waterfall landscape in northern Guizhou. Compare the whole connection and useful nights, not just a shared provincial label. Choose both when contrasting scenery and actual walking justify the travel rather than repeat several similar water-focused days.",
      },
      {
        slug: "zhaoxing",
        advice:
          "Zhaoxing adds Dong village architecture and a separately assessed Tang'an walk, providing a different subject after Libo's forest and water. Check actual services between the relevant stations and both local road transfers; the two destinations are not interchangeable Guizhou day trips.",
      },
      {
        slug: "guilin",
        advice:
          "Guilin and Yangshuo offer a different karst experience with river and rural-stay choices. Include both regions only when the contrast and available nights justify the complete connection. Do not call all karst scenery the same, or assume a train ride alone delivers you to a Yangshuo countryside hotel.",
      },
      {
        slug: "jiuzhaigou",
        advice:
          "Jiuzhaigou presents a different mountain-valley water landscape in Sichuan with its own elevation, season and visitor system. This is a thematic comparison across regions, not a nearby extension. Choose by interests and physical needs instead of promising identical colors or the same walking conditions.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring through autumn offers different conditions for forest and water scenery, with warmth, rain and visitor demand varying across the period. Summer may bring lush surroundings as well as heat, heavy rain and route restrictions. Cooler seasons can offer another pace, but temperatures, flow and services need checking. No month guarantees clear water, full access or empty paths. Choose dates with the wider Guizhou itinerary and your tolerance for rain, humidity and walking in mind.",
    orientation:
      "Libo is a county in Qiannan Buyei and Miao Autonomous Prefecture, southern Guizhou. The county town, railway station, individual hotel and Xiaoqikong or Daqikong entrances are separate locations. Libo railway station provides a gateway with an onward road plan; an airport or another regional station has a different transfer. Use the actual ticket, property and selected scenic entrance to plan each leg rather than treating the county name as a single compact place.",
    experiences: [
      "Explore a selected Xiaoqikong route through forest, riverside scenery and karst context at a manageable walking pace",
      "Consider Daqikong for a distinct gorge interest only when its current access and additional time suit you",
      "Balance the landscape day with a comfortable property, a suitable meal and a realistic Guizhou onward journey",
    ],
    planningNotes: [
      "Name the actual park entrance, included internal transport and walking stops before comparing itineraries",
      "Review wet paths, steps and a shorter alternative rather than treating shuttle access as step-free sightseeing",
      "Choose the hotel for room comfort, food and the complete station-to-entrance sequence",
    ],
    arrival:
      "Confirm the actual railway station or airport on the ticket and include its full road transfer to the booked property. A Libo station arrival is not an arrival at a park entrance or county-town hotel. Check available services rather than assuming a direct connection from every wider route. Allow baggage, hotel access and the visitor process before promising an arrival-day circuit; a late arrival may be better used for dinner and rest.",
    gettingAround:
      "Road service connects the gateway, hotel and selected scenic entrances. Within the parks, use the currently authorized transport and walking routes, with the final pickup agreed. A private road car should not be described as unrestricted access to every internal viewpoint. Group the days by actual entrance and hotel location, and do not add unreviewed river, cave or village activities because they appear close on a map.",
    stayStrategy:
      "For two or three nights, one well-chosen base often avoids unnecessary packing. Choose county-town convenience or a particular near-park property according to the actual room, meals and daily roads. In a humid setting, sleep quality, ventilation, bathroom comfort and dry space for belongings deserve attention alongside scenery. A resort-led stay needs protected time at the property; a place used only for overnight sleep need not be selected solely for a distant landscape view.",
    firstTimerNote:
      "Libo is best approached as a varied landscape route rather than one compulsory endurance circuit. Choose the stops you most want, understand the internal transport and leave room for rest or rain. A good visit does not require both scenic areas, every optional boat or a long damp walk. The guide's value is in making the landscape understandable and the day workable, not promising unchanged water color or permission beyond the public route.",
    faqs: [
      {
        question: "How many nights should I stay in Libo?",
        answer:
          "Two nights give one full day for a selected Xiaoqikong route. Three nights add another interest or a slower pace with more flexibility. A one-night stop needs arrival and departure times that genuinely support the park visit and should not promise both scenic areas automatically.",
      },
      {
        question: "Are Xiaoqikong and Daqikong the same place?",
        answer:
          "They are different visitor areas associated with Small Seven Arches and Large Seven Arches. Xiaoqikong is the main forest-and-water route for many visitors; Daqikong offers a separate gorge interest. Confirm the current entrances, tickets, transport and routes rather than assuming one short bridge walk covers both.",
      },
      {
        question: "Where should I stay for Xiaoqikong?",
        answer:
          "Choose Libo county town for meals and services or a specific near-entrance property for its actual park relationship. Check which entrance the itinerary uses, room quality, food and gateway transfer. Near the park does not prove the hotel is convenient for every route or open entrance.",
      },
      {
        question: "Can I visit Xiaoqikong with limited mobility?",
        answer:
          "Suitability depends on the actual stops, shuttle arrangements and remaining steps or damp paths. Have the selected route, assistance, seating and hotel approach reviewed for your needs. A shuttle or private vehicle alone does not establish step-free access to every waterfall or viewpoint.",
      },
      {
        question: "Is Libo worth visiting in the rain?",
        answer:
          "Light rain and heavy rain create different situations. Scenery can remain interesting, but water levels, visibility, path safety and official access may change. Follow current instructions and choose a reduced or alternative plan when needed; do not promise every feature regardless of weather.",
      },
      {
        question: "Is Libo part of a UNESCO World Heritage Site?",
        answer:
          "Libo Karst is a component of the serial South China Karst World Heritage property. That recognition concerns a defined protected landscape, not unlimited admission to the whole county or every tourist facility. Ticket scope and visitor access need separate confirmation.",
      },
      {
        question: "Can I combine Libo and Zhaoxing?",
        answer:
          "Yes, with a checked transport sequence and separate usable days. Libo adds forested karst and water, while Zhaoxing adds Dong village context and optional rural walking. Compare actual trains and both road transfers instead of assuming a short door-to-door trip from a provincial map.",
      },
      {
        question: "Can I swim or take a boat in Xiaoqikong?",
        answer:
          "Do not assume swimming is permitted. Follow the rules for the specific protected area and current conditions. Any boat experience has its own operation, route, suitability and charge; a scenic ticket or private guide does not guarantee unrestricted water access.",
      },
    ],
    culturalStory: {
      title: "Read the water through the rock and forest",
      paragraphs: [
        "Libo's scenery becomes more legible when the guide connects water, soluble rock and forest rather than introducing each stop only by a scenic name. Look at how channels, exposed surfaces and vegetation shape a particular view, and how the water's appearance changes with conditions. A few well-chosen examples can explain more than hurrying to every stop for a photograph taken under different light.",
        "The protected landscape sits within a wider county where people live and work. Geological heritage status does not turn nearby communities into public exhibits or guarantee access to any household. If cultural interests form part of the visit, identify the place, host and purpose separately. The strongest route respects both protected visitor boundaries and local consent while allowing time to understand what makes this part of Guizhou distinct.",
      ],
    },
    foodStory: {
      title: "Use the meal to reset the pace after the park",
      paragraphs: [
        "A seated meal after forest paths and shuttle transfers can be more valuable than another rushed attraction. Guizhou's sour and spicy flavor directions offer possibilities, but the actual dish, kitchen and guests' preferences should determine the order. Ask what provides acidity, which ingredients are fermented and how much heat can be adjusted, rather than assuming every regional preparation is the same sour soup.",
        "Discuss meat, fish, broths, fermented sauces, cooking oils and shared preparation for dietary requirements. A vegetable dish does not establish a vegetarian kitchen, and a regional label does not guarantee halal suitability. Near-park properties may have fewer evening choices than town, so confirm dinner and breakfast before booking. A landscape day does not automatically include a hosted village meal or a restaurant with the right facilities for every group.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the base that serves the selected entrance",
        description:
          "Use the actual station or gateway and hotel address for the transfer. Keep the first evening local unless the arrival leaves a genuine visitor window; do not force a full park circuit after an uncertain connection.",
      },
      {
        day: "Full day 1",
        title: "Xiaoqikong with a coherent walking and shuttle plan",
        description:
          "Choose the main stops, breaks and permitted internal transport around current operation and comfort. Allow time for a meal and the actual exit journey instead of adding every optional experience.",
      },
      {
        day: "Optional extra full day",
        title: "Choose a distinct gorge visit or a slower stay",
        description:
          "Consider Daqikong when its current route and additional interest justify it, or retain time for rest and a separately reviewed local subject. Boat rides, cultural hosts and restricted routes are not assumed.",
      },
      {
        day: "Departure",
        title: "Continue with the next destination's time protected",
        description:
          "Allow the full transfer to the actual station or onward hotel. This is an illustrative outline, not a published package or a guarantee of water conditions, all paths or every mentioned activity.",
      },
    ],
  },
};
