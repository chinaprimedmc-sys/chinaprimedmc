import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/mount-emei.svg",
  alt: "Original Mount Emei planning schematic separating Golden Summit, lower temple routes and mountain-foot or upper-mountain rooms; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const mountEmeiGuide: ExpandedDestination = {
  id: "mount-emei",
  name: "Mount Emei",
  region: "southwest",
  kicker: "Buddhist mountain culture, forest paths and a summit chosen with care",
  description:
    "Plan Emei Shan around a clear summit or temple interest, with honest transport, walking, altitude and hotel choices rather than a promise of sunrise above clouds.",
  stay: "2–3 nights for a focused mountain chapter",
  bestFor: "Buddhist cultural landscapes, temple interpretation and considered mountain walking",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["leshan", "chengdu", "qingcheng-mountain"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Mount Emei Travel Guide: Golden Summit, Temples & Hotels",
    seoTitle: "Mount Emei Guide: Summit, Temples & Stays",
    seoDescription:
      "Plan Emei Shan with Golden Summit or lower temple routes, two- or three-night stays, mountain-foot and summit hotels, cableway steps, altitude and Leshan.",
    answer:
      "Mount Emei (峨眉山), also written Emei Shan, is a Buddhist sacred mountain in Sichuan near Emeishan city. It forms a UNESCO World Heritage property with the Leshan Giant Buddha, but the two are separate visits. Choose whether the main purpose is Golden Summit, lower temple and forest routes, or a slower hotel-led stay. Golden Summit is at roughly 3,077 meters, so altitude, cold and remaining walking matter even when using scenic buses and a cableway. Two nights give one full day; three can separate a summit day from a lower cultural route. A clear sunrise or sea of clouds is a possibility, not a reason to promise the same experience every day.",
    stayAnswer:
      "Two nights are a useful starting point for one substantial mountain day between arrival and departure. Three give two full days, allowing a separate lower temple route, rest or a different cultural subject. One night can work for a selective visit when transport and admission leave enough useful time. A long return outing from Chengdu requires a much tighter sequence and is different from an unhurried stay. Add a Leshan visit with its own usable hours and full road rather than assume a shared heritage title makes it spare time after the summit.",
    hotelAnswer:
      "Choose an actual mountain-foot property near the relevant visitor hub for services, meals and a lower sleeping elevation. Compare an upper-mountain hotel when its exact position genuinely improves the chosen route or an early visit. Leidongping-area accommodation and a Golden Summit-area room are different decisions, with different approaches, luggage and remaining walking. A high hotel is not automatically more comfortable or suitable. Check the precise sleeping elevation, heating, hot water, bathroom, bedding, meals, power, stairs and transfer, then assess whether one settled base or a justified split stay works better.",
    sightseeingQuestion: "Should I prioritize Golden Summit or lower temples and forest walking?",
    sightseeingAnswer:
      "Choose Golden Summit when the high-mountain setting and Buddhist summit context justify the full scenic transport, queues, walking and altitude. Choose a lower route when temple interpretation, forest atmosphere and a more selective physical plan matter more than reaching the top. Baoguo Temple, Fuhu Temple, Qingyin Pavilion and Wannian Temple are different subjects and access plans; lower does not mean all are adjacent or step-free. A good itinerary explains the selected places rather than promise every temple and the summit on one day. For two full days, give each chapter its own purpose.",
    visitorResources: [
      {
        label: "UNESCO: Mount Emei Scenic Area, including Leshan Giant Buddha Scenic Area",
        href: "https://whc.unesco.org/en/list/779/",
        scope:
          "Reference for the inscribed property's cultural and natural significance. This does not establish one combined visitor ticket, a continuous short circuit, current cableway operation, religious interior access or a guaranteed summit panorama.",
      },
      {
        label: "Emeishan municipal government",
        href: "https://www.emeishan.gov.cn/",
        scope:
          "Local background and dated public notices, primarily in Chinese. Verify current scenic transport, entrances, public trails, weather-related closures and accommodation with the responsible operators. City information is not evidence that a specific room or early summit arrangement is available.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General guidance, not personal medical clearance. Review the full ascent, actual sleeping elevation, health needs and any higher walking with a qualified clinician. Scenic transport and a comfortable room do not remove altitude risk.",
      },
    ],
    serviceScope:
      "A proposal should name the actual hotel and elevation, gateway and entrance, scenic bus and cableway segments, remaining walking, guide language, meals, tickets and service hours. A retained road vehicle and the mountain's public transport are different services. Specify the public temple route and any interpretation arrangement; a private guide cannot open restricted religious areas or buy priority through every queue. Early viewing, a longer hike, specialist cultural learning and any additional activities need their own arrangements. Agree a worthwhile alternative for weather or transport changes before making the summit the only reason to come.",
    routeAdvice:
      "Leshan adds monumental Buddhist sculpture and a separate river or land-route choice. Chengdu adds city food, tea and panda interests before or after the mountain stay. Qingcheng is a different Daoist mountain and resort chapter, not another name for Emei's Buddhist landscape. No matching published Mount Emei product is recommended here. Request a tailored route with dates, gateways, walking tolerance, bridge or cableway concerns, room requirements and whether the priority is culture, hiking or summit scenery. A useful proposal explains the physical and transport commitment before adding nights.",
    practicalPlanning: {
      timing:
        "For a summit day, count the road to the correct hub, admission, scenic bus, walk to the cableway, queues, summit walking and the complete descent. A cableway journey time alone is not the excursion. Confirm the last return services and realistic turn-back point. Protect the essential mountain day from uncertain arrival, and do not attach a tight onward train to a route dependent on several operating transport segments. More nights give choices, not a guaranteed extra ticket or clear sky.",
      walking:
        "Transport-assisted routes still involve steps, slopes, standing and exposed sections. The approach from Leidongping toward the summit cableway is a separate walking segment, not a vehicle connection all the way to the cabin. Check the exact current route, distance, remaining stairs, seats, toilets and guest suitability. Wet stone, snow and ice can increase difficulty. Lower temples also have steps and uneven ground; assess them individually rather than assume lower elevation means easy access.",
      cost: "Compare the exact room, gateway roads, admission, scenic buses, cableways, guide and meals. An upper-mountain room may add luggage handling and a different final approach while offering fewer dining choices. A mountain-foot hotel with a complete day is a different product from a split stay. Ask which transport and ticket changes are refundable when operation changes. A premium should improve interpretation, comfort and coordination rather than promise sunrise, a private temple or unrestricted mountain access.",
    },
    attractions: [
      "Golden Summit, or Jinding, under current public visitor arrangements",
      "Baoguo Temple as a separately chosen mountain-foot cultural interest",
      "Fuhu Temple when its actual approach and visitor conditions suit",
      "Qingyin Pavilion and a defined permitted forest route",
      "Wannian Temple with its own transport, steps and cultural interpretation",
      "A comfortable mountain-foot stay with time to understand the wider landscape",
    ],
    stays: [
      {
        label: "1 night / a selective introduction",
        advice:
          "Can work when arrival and departure leave a realistic window for one main subject. Choose the summit or a coherent lower route rather than promise both in depth. A late check-in and early departure do not provide a full mountain day, regardless of how close the hotel appears to the scenic area.",
      },
      {
        label: "2 nights / one substantial full day",
        advice:
          "Use a suitable settled base and dedicate the full day to the chosen route. Give transport, meals and rest proper time. A mountain-foot property may offer the most practical comfort; an upper overnight needs a distinct benefit and a guest-specific altitude and facilities assessment.",
      },
      {
        label: "3 nights / separate summit and lower cultural days",
        advice:
          "Two full days allow different purposes without turning every transfer into another compulsory visit. Keep the order responsive to current operation within the actual booking rules. Longer stays need hiking, learning or hotel interests that remain worthwhile when visibility is poor.",
      },
    ],
    hotelAreas: [
      {
        name: "Mountain-foot and visitor-hub area / services and a lower base",
        advice:
          "Compare precise addresses, transport pickup, meals, room quiet, bathroom and temperature control. A foot-of-mountain label does not make every hub or temple walkable. Check how much of the summit day still remains after leaving the hotel and whether breakfast fits the agreed departure.",
      },
      {
        name: "Leidongping area / a different upper-mountain approach",
        advice:
          "Assess the actual property's elevation, room facilities, heating, meals, stairs and luggage route. This is not the same as sleeping beside the Golden Summit. Review the remaining climb or walk, cableway operation and what the stay genuinely changes for early or late mountain time.",
      },
      {
        name: "Golden Summit area / a specific high overnight commitment",
        advice:
          "Choose only when the room, sleeping altitude and actual public access suit the guests. Confirm hot water, heating, bathroom, food, luggage and the route in poor weather. A room near the summit cannot guarantee sunrise visibility, a sea of clouds or personal suitability for sleeping high.",
      },
      {
        name: "Emeishan city or a named resort / a practical town or hotel purpose",
        advice:
          "Can suit actual gateway needs, dining or a property-led stay. Compare the complete scenic-area roads and useful local time. A resort label does not establish included hot-spring bathing, medical benefit, mountain admission or a short walk to the preferred entrance.",
      },
    ],
    tradeoffs: [
      {
        title: "A summit visit is a full transport chain",
        advice:
          "Scenic bus, approach walk, cableway and summit route need to work together on the actual date. Explain both the ascent and descent, including queues, breaks and last services. A private road car does not replace all scenic transport or follow the guest to the summit. Choose the route for the experience and guest, not the impression that a cableway removes the effort.",
      },
      {
        title: "The mountain remains interesting without a clear panorama",
        advice:
          "Buddhist context, temple architecture and forest environments can provide substance beyond the famous horizon. Those alternatives still need their own access and walking assessment. Do not promise sunrise or a sea of clouds as a deliverable, and do not suggest any poor-weather route is automatically safe or open because it lies lower.",
      },
      {
        title: "Sleeping high is not the only thoughtful way to visit",
        advice:
          "An upper room can change early access logistics but introduces altitude, facilities, luggage and meal considerations. A comfortable lower hotel may better suit sleep and flexibility. Compare the actual benefits for the specific guest rather than treat the highest available room as the most luxurious or culturally meaningful option.",
      },
      {
        title: "Lower temples need distinct explanations",
        advice:
          "Select Baoguo, Fuhu, Qingyin or Wannian for the subject and route rather than treat all names as interchangeable stops. A seated cultural introduction and a longer forest walk offer different experiences. Religious interiors, ceremonies and private teaching follow their own rules and consent; buying a sightseeing ticket does not establish participation.",
      },
      {
        title: "Macaques are wildlife, not an activity inclusion",
        advice:
          "Do not plan feeding, touching or close portraits. Follow current ranger instructions, keep food and loose items secured and give animals space. A familiar tourist photograph does not make an interaction appropriate. Tell the planner about children, anxiety or other needs before choosing a route where wildlife encounters may occur.",
      },
      {
        title: "Leshan deserves its own useful visiting window",
        advice:
          "A shared UNESCO property links the subjects historically and geographically without creating one entrance or removing the road. Leshan's land and boat options have different physical and operating conditions. Combining both on a tightly timed day can reduce each to a hurried glimpse; choose a wider route only when useful hours, walking and onward transport genuinely fit.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "leshan",
        advice:
          "Leshan adds the Giant Buddha and a separate river or land-route decision. Give the actual visit and transfer useful hours before or after Emei. A Leshan product does not automatically include Emei's room, scenic transport or summit; the shared World Heritage inscription is not a combined service package.",
      },
      {
        slug: "chengdu",
        advice:
          "Chengdu provides city food, tea and panda interests as well as transport gateways. Compare the complete journey to the actual mountain base and protect a substantial Emei day. Existing Chengdu itineraries do not automatically include Emei accommodation, mountain admission or cableways.",
      },
      {
        slug: "qingcheng-mountain",
        advice:
          "Qingcheng offers a different Daoist cultural landscape and resort choice. Choose it for a distinct subject or slower stay, with the full transfer and combined walking load reviewed. Two mountain names do not justify repeating a generic temple circuit or promising the same transport and hotel conditions.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for comparing walking comfort, but summit and mountain-foot conditions can differ sharply. Summer can bring rain and busy periods; winter may involve snow, ice and altered routes or transport. Check the actual public trail, weather notices, clothing and room heating rather than assume a season makes the summit easy. Sunrise, distant mountains and cloud seas depend on conditions, while religious heritage offers a different reason to visit. Holiday demand can affect transport queues and rooms in otherwise attractive months.",
    orientation:
      "Mount Emei rises above the Sichuan Basin near Emeishan city. The mountain foot, Leidongping approach, Golden Summit and selected lower temple routes form different parts of the journey. The roughly 3,077-meter Golden Summit elevation is not the height of every stop or hotel; identify the actual sleeping level and route. This guide centers on the mountain and base choices, not every part of Emeishan city, every pilgrimage path or a technical trekking route. Leshan's Giant Buddha is a separate visitor chapter.",
    experiences: [
      "Read a Buddhist sacred mountain through specific temples, architecture and cultural context",
      "Choose summit scenery or a lower forest route with the full physical commitment understood",
      "Enjoy a settled base and slower meal instead of treating every hour as another compulsory climb",
    ],
    planningNotes: [
      "Review the actual altitude, room and remaining walking before selecting an upper overnight",
      "Count buses, approach walks, queues, cableways and the complete descent",
      "Keep Leshan, a lower temple day and any long hike as distinct planned subjects",
    ],
    arrival:
      "Compare actual dated rail or road options from Chengdu and the complete hotel transfer. Emeishan and Emei station names are not interchangeable bookings, and neither places guests at the summit or the selected room. A road connection through Leshan needs meaningful time for both the visit and mountain arrival. Keep the essential summit route away from uncertain flight or rail arrival. Confirm luggage, pickup, the exact hotel approach and any scenic vehicle change before deciding whether to stay at the foot or higher on the mountain.",
    gettingAround:
      "Separate the private road transfer, current scenic buses, cableways and actual walking segments. Check public rules, operating times and the return route before departure. A longer hiking plan is a different undertaking, requiring a named permitted route, fitness review, accommodation and turnaround choices. Do not improvise closed trails or assume a cableway outage can always be replaced by walking. Temple compounds and public paths retain their own rules, while wildlife should be observed at a respectful distance without feeding.",
    stayStrategy:
      "For two nights, choose one dependable base and a clear main day. For three, give the summit and lower cultural subject different purposes. Split the hotel only when an upper overnight adds enough value to justify bags, room conditions and sleeping altitude. High-end planning should improve interpretation, pacing, meals and sleep; it cannot ensure an empty summit or perfect sky. A monastery lodging label, a scenic hotel and a full-service resort are different accommodations and need separate evidence.",
    firstTimerNote:
      "Decide whether reaching Golden Summit is genuinely central to your visit before booking a high room. Then ask how you reach it, how much walking remains and what the day offers if visibility is poor. A meaningful temple-and-forest stay can be a complete choice, not a failed summit attempt. Equally, a summit-led itinerary deserves enough time and a suitable physical plan rather than be added casually to a Leshan day.",
    faqs: [
      {
        question: "Are Mount Emei and Emei Shan the same destination?",
        answer:
          "Yes. Both refer to 峨眉山 in Sichuan. Emeishan city, individual stations, mountain-foot hotels and Golden Summit occupy different locations, so use the full Chinese address and actual entrance when arranging transport.",
      },
      {
        question: "How many nights should I spend at Mount Emei?",
        answer:
          "Two nights give one full day for a selected mountain route; three give two for distinct summit and lower cultural purposes. One night needs convenient transport and a selective plan. Count arrival and departure roads before deciding how much useful mountain time the stay contains.",
      },
      {
        question: "Can I reach Golden Summit without much walking?",
        answer:
          "Scenic buses and a cableway reduce parts of the ascent but do not remove all walking, steps, queues or exposure. Check the approach from Leidongping, the current cableway route and remaining summit movement for the actual guest. Do not describe the whole journey as step-free.",
      },
      {
        question: "Is altitude important at Golden Summit?",
        answer:
          "Yes. Golden Summit is roughly 3,077 meters, and the actual hotel may be at another elevation. Review the full ascent, health and sleeping plan with a qualified clinician when relevant. Cableways, hotel oxygen equipment or several booked nights are not guarantees of suitability.",
      },
      {
        question: "Should I stay near the mountain foot or at the summit?",
        answer:
          "Compare the actual room, sleeping altitude, meals, luggage and full route. A lower base can provide dependable comfort; an upper stay may help a specific early visit but adds commitments. Neither guarantees sunrise visibility or a sea of clouds.",
      },
      {
        question: "Can I combine Mount Emei and Leshan in one day?",
        answer:
          "A very selective combination may be possible under suitable arrangements, but it is not two unhurried visits. A summit day has a substantial transport chain, while Leshan needs its own route and operating review. Separate useful time is a better starting point when both subjects matter.",
      },
      {
        question: "Can I see sunrise and a sea of clouds from my hotel?",
        answer:
          "Do not assume so. Visibility, cloud, weather, the actual room position and public access determine what is possible. Choose a property and itinerary that remain worthwhile without that scene, and follow current weather and route restrictions.",
      },
    ],
    culturalStory: {
      title: "A sacred mountain is more than its highest photograph",
      paragraphs: [
        "Mount Emei's cultural interest develops through the relationship between Buddhist practice, temple settings and the mountain landscape. Ask what makes the particular temple or image in front of you significant, then connect it to the route you have chosen. A guide can make a few selected places intelligible without turning the day into a procession of unfamiliar names. Public religious space remains a living setting, with worshippers and rules that deserve attention.",
        "The natural setting changes as the journey rises, but a high viewpoint should not replace that cultural explanation. Consider how transport, climate and the location of temples shape the experience of moving through the mountain. Historic significance and present-day visitor infrastructure coexist. Describe what survives, what has been maintained and what can actually be visited, without treating every building as untouched ancient fabric or every ceremony as a visitor program.",
      ],
    },
    foodStory: {
      title: "Arrange the meal before committing to the mountain day",
      paragraphs: [
        "A mountain-foot restaurant, an upper hotel kitchen and a temple-associated meal offer different choices and hours. Ask where lunch falls in the actual route, whether a warm indoor option is available and how breakfast works before an early departure. Rice, noodles, vegetables, tofu or local snacks may suit depending on the kitchen, while appetite and portion needs vary. Do not assume that a tea stop or a scenic viewpoint provides a substantial meal.",
        "Review soy, wheat, chili, Sichuan pepper, peanuts, sesame, eggs and meat stocks in the chosen dishes. A Buddhist setting does not establish every kitchen's vegan or allergy arrangements, and mild seasoning does not prevent cross-contact. Confirm capacity and a practical alternative for strict needs before reaching a limited-choice upper hotel. Carry agreed water and snacks under current rules, keep food secured around wildlife and do not feed macaques.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / mountain base",
        title: "Settle without using up the main day",
        description:
          "Complete the actual gateway journey, check the booked room and review current operation, meals and weather. A modest nearby temple introduction can fit when useful hours and energy allow. The essential summit route should not depend on a perfectly punctual arrival.",
      },
      {
        day: "Full day 1 / chosen main route",
        title: "Give the summit or a lower cultural route proper time",
        description:
          "Follow the confirmed public transport and walking sequence with explanation, food and rest. Use the actual descent and last-service plan. If a lower route is the priority, let it stand as a worthwhile cultural day rather than force an unnecessary summit addition.",
      },
      {
        day: "Optional full day 2 / a distinct contrast",
        title: "Develop another subject without repeating the first day",
        description:
          "With three nights, choose a different permitted temple-and-forest route, rest or a meaningful cultural interest. Check its actual steps and operation. The extra day creates choices but cannot promise clear weather, another summit ticket or private religious access.",
      },
      {
        day: "Departure / Leshan or Chengdu",
        title: "Protect the complete onward connection",
        description:
          "Allow breakfast, bags, any scenic exit and the full road or rail gateway. A Leshan stop needs its own useful hours and route assessment. This outline is illustrative, not a published package or guarantee of rooms, cableways, trails, wildlife encounters or sunrise conditions.",
      },
    ],
  },
};
