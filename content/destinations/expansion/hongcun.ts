import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/hongcun.svg",
  alt: "Hongcun stay-planning diagram comparing the historic village, village-edge hotels and a wider rural base; schematic rather than a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const hongcunGuide: ExpandedDestination = {
  id: "hongcun",
  name: "Hongcun",
  region: "east",
  kicker: "Huizhou architecture & a village worth understanding",
  description:
    "Explore Hongcun through its water system, lanes and merchant-era buildings, with a carefully checked village stay and enough time beyond the busiest photo stops.",
  stay: "1–3 nights",
  bestFor: "Village architecture and slower cultural stays",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["xuancheng", "huangshan", "hangzhou", "jingdezhen", "xidi"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Hongcun Travel Guide: Village Stays & Huizhou Culture",
    seoTitle: "Hongcun Travel Guide: Village Stays & Culture",
    seoDescription:
      "Plan Hongcun for Huizhou architecture and slower village time. Compare historic inns, village-edge hotels, Xidi and a separate Huangshan mountain chapter.",
    answer:
      "Hongcun is a historic village in Yi County, Anhui, known for its water system and Huizhou architecture. South Lake, Moon Pond and the lanes between houses are most rewarding when you understand how the village works, rather than stopping only for reflections. Stay nearby when an evening, a quieter walk and the character of a chosen hotel matter to the trip. Hongcun and Huangshan Mountain are different destinations with a road transfer between them.",
    stayAnswer:
      "A daytime visit can introduce the main layout and selected buildings without a hotel move. One night adds an evening and morning, while two nights give a full day for a slower architectural visit and time at the property. Three nights can suit a wider village interest or a separate Xidi visit. Do not assume an overnight guarantees empty lanes, unrestricted re-entry or access to every historic house.",
    hotelAnswer:
      "Choose an inn inside the historic village for immediate atmosphere only after checking the exact room, stairs, noise and luggage approach. A village-edge property may simplify road access and provide more contemporary facilities, but verify the walk and ticket arrangements. A rural hotel elsewhere in Yi County offers another setting with separate transfers. The label Hongcun does not establish that a property is inside the village or conveniently walkable to it.",
    sightseeingQuestion: "Is Hongcun worth an overnight stay or is a day visit enough?",
    sightseeingAnswer:
      "Choose a day visit if architecture is one interest within a short regional trip and you prefer to keep a comfortable base elsewhere. Stay overnight if the hotel and village evening are part of the experience you want. The best reason to stay is time and atmosphere, not a promise of exclusive access or no other visitors. A small historic inn needs a more detailed comfort check than a photograph can provide.",
    visitorResources: [
      {
        label: "UNESCO: Ancient Villages in Southern Anhui — Xidi and Hongcun",
        href: "https://whc.unesco.org/en/list/1002/",
        scope:
          "Background on the listed villages and their cultural significance. This does not verify current admission, re-entry rules, open houses, workshop hosts or accommodation quality.",
      },
      {
        label: "Huangshan municipal government",
        href: "https://www.huangshan.gov.cn/",
        scope:
          "Regional background and public announcements. Confirm the actual village entrance, ticket conditions, hotel access and private arrangements separately for your dates.",
      },
    ],
    serviceScope:
      "We can discuss a private Hongcun visit or stay with the selected hotel, transfers, guide and any agreed cultural encounter specified in the proposal. The guide helps explain water, architecture and village history while respecting residents and private spaces. A heritage label does not grant entry to every building. Workshops, private hosts and photography arrangements require their own consent and confirmation.",
    routeAdvice:
      "Plan Hongcun as a tailored Huizhou village chapter before or after Huangshan, or as a cultural stay without a mountain ascent. Choose the actual property and usable time before adding Xidi or another village. This page does not currently recommend a published Hongcun package. Your proposal should state hotel location, admission, luggage access, guiding and which buildings or experiences form the visit; the outline below is illustrative.",
    practicalPlanning: {
      timing:
        "Give the village a useful window rather than the remaining hour after a demanding mountain day. Start with the water system and street layout, then choose a few buildings and time for a meal. Morning or evening may change the atmosphere but does not guarantee an empty village. If adding Xidi, give the transfer and a second substantial architectural visit enough space to be worthwhile.",
      walking:
        "Village routes can involve uneven stone paving, narrow lanes, thresholds, bridges and steps inside buildings or inns. Wet surfaces can be slippery. Ask about the selected route, room floor and distance luggage must be carried from the vehicle. A largely level-looking village is not automatically step-free, and a road vehicle cannot follow every lane.",
      cost: "Compare admission and re-entry conditions, actual room category, meals, luggage assistance, guide time and hotel-to-hotel transfers. Historic architecture and contemporary hotel comfort are different qualities. A privately arranged craft or food session needs its own host, duration and inclusion list; it should not be assumed from a village ticket or an inn booking.",
    },
    attractions: [
      "South Lake in Hongcun",
      "Moon Pond",
      "Hongcun water system",
      "Huizhou village architecture",
    ],
    stays: [
      {
        label: "Day visit: a focused village introduction",
        advice:
          "Use the main layout and selected buildings to understand the place. Keep transport and a meal realistic rather than trying to fit every nearby village into the same outing.",
      },
      {
        label: "1 night: evening and morning atmosphere",
        advice:
          "Choose a property you want to sleep in, check access and enjoy a local evening. Arrival and departure timing decide how much village time remains; one night is not a full extra day.",
      },
      {
        label: "2–3 nights: a cultural stay",
        advice:
          "Allow time for the village, the hotel and a separately selected interest such as Xidi. Additional nights should improve depth and comfort rather than create repeated near-identical photo stops.",
      },
    ],
    hotelAreas: [
      {
        name: "Inside the historic village",
        advice:
          "Consider for stepping into the lanes from the property. Check vehicle distance, luggage help, room stairs, bathroom privacy, temperature control and sound. Confirm admission and re-entry rather than assuming a room reservation replaces a village ticket.",
      },
      {
        name: "Hongcun's edge and nearby road-accessible properties",
        advice:
          "Consider when straightforward pickup and contemporary facilities matter. Verify the actual entrance walk and evening return, not just a claimed distance to Hongcun. A village-edge stay can be a better fit than a historic inn for some guests.",
      },
      {
        name: "A wider Yi County rural base",
        advice:
          "Choose for a particular hotel setting and time on the property. Plan separate transfers to Hongcun and other villages, with meals arranged. A rural base is valuable when the stay itself interests you, not when it is described vaguely as convenient for everything.",
      },
    ],
    tradeoffs: [
      {
        title: "Understand the water before collecting views",
        advice:
          "South Lake and Moon Pond are part of a wider village water story. Ask the guide to connect them with channels, lanes and buildings, then choose viewpoints that help explain the layout. Reflections depend on light, weather and activity; no private plan can reserve an empty pond for photographs.",
      },
      {
        title: "Compare Hongcun and Xidi by interest",
        advice:
          "Hongcun offers an introduction shaped strongly by its water layout; Xidi provides a different village arrangement and architectural sequence. Both form the UNESCO listing, but they are separate visits with separate logistics. Choose one carefully or give both sufficient time rather than treating the second as a quick duplicate.",
      },
      {
        title: "A restored inn needs a room-level review",
        advice:
          "Ask about bed access, stairs, bathrooms, ventilation, heating, damp, sound and the luggage route. Historic charm should not obscure sleep or access needs. A high price or courtyard photograph alone cannot establish that the room will suit older travelers, children or a longer stay.",
      },
      {
        title: "Keep working and private spaces respected",
        advice:
          "Residents' homes, workshops and study spaces are not automatically attractions. Confirm hosts, language, photography and any fee before an encounter. A meaningful craft session should identify what you will see or do and distinguish learning from retail.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "xuancheng",
        advice:
          "Xuancheng's wider region can add a real Jing County paper collection or confirmed learning session, with the city literary route optional. Compare that materials-focused interest with another village night. A paper venue, Taohuatan, Zhaji and Hongcun have different locations and room decisions; choose one meaningful countryside chapter rather than promise all of them around a short workshop.",
      },
      {
        slug: "xidi",
        advice:
          "Xidi adds a different architectural sequence and carved details. Choose it when a second village deepens your interest, allowing the road transfer and a full visit. Shared UNESCO status does not imply one ticket or access to every building.",
      },
      {
        slug: "jingdezhen",
        advice:
          "Add Jingdezhen when porcelain history or a thoughtfully arranged class is a distinct interest. Allow the full road-and-rail connection and keep private studio appointments away from uncertain arrivals. A village stay and a ceramics city need separate usable time.",
      },
      {
        slug: "huangshan",
        advice:
          "Combine village culture with mountain scenery on separate usable days. Choose the hotel sequence and luggage arrangement before ascending, then allow time after descent to reach the village without a rushed visit. A mountain ticket and a village ticket are different components.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake and tea landscapes. Compare the actual rail station and both road transfers rather than assuming the village is next to the high-speed line. Keep an onward train separate from a tightly timed final host encounter.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit village walks, with rain and busy travel periods still possible. Summer can be hot and humid; winter makes heating and room dryness especially important in historic properties. Seasonal fields and colors vary by location and year. Choose a comfortable stay and a flexible walking plan instead of promising a particular reflection, bloom or empty lane.",
    orientation:
      "Hongcun is a village in Yi County within the wider Huangshan region. The village entrance, South Lake, Moon Pond, individual inns and road-accessible hotels are different planning points. Xidi is another village, while Huangshan Mountain needs its own gateway and route. Map the actual hotel sequence before treating all of them as one compact base.",
    experiences: [
      "Explore Hongcun's water layout and selected buildings with time to understand Huizhou village life",
      "Stay at a carefully checked property and enjoy a local evening without promising an empty village",
      "Choose Xidi or a confirmed cultural encounter when it adds a different architectural or human perspective",
    ],
    planningNotes: [
      "Confirm room stairs, luggage distance, bathroom and temperature control",
      "Check village admission and re-entry separately from the hotel booking",
      "Give the mountain and village separate usable time rather than a compressed combined day",
    ],
    arrival:
      "Most visitors reach Hongcun by road from a regional railway station, airport, mountain gateway or another hotel. Huangshan North is a rail gateway, not the village entrance. Share the exact train or flight and accommodation address so the complete transfer can be planned. Check where the vehicle stops and who helps with luggage before choosing an inn inside the lanes.",
    gettingAround:
      "Walk selected village routes and arrange road transfers for other villages or the mountain gateway. Historic lanes can limit vehicle access, and a short straight-line distance may conceal thresholds or a longer luggage approach. Any boat, workshop or cultural activity needs its own confirmation rather than being assumed from the village setting.",
    stayStrategy:
      "Decide whether the priority is a historic room, practical road access or a quieter rural hotel. Each can work, but they offer different evenings and logistics. Review the exact room and meal options, especially for more than one night. Leave enough unscheduled time to benefit from an overnight instead of touring elsewhere throughout the stay.",
    firstTimerNote:
      "Hongcun is a lived-in historic village, not a film set reserved for visitors. Architectural understanding and respectful observation make the visit worthwhile even when the famous views are busy. Ask before entering private doorways or photographing residents and treat a hosted encounter as a separate invitation.",
    faqs: [
      {
        question: "Is Hongcun the same place as Huangshan?",
        answer:
          "No. Hongcun is a village in the wider Huangshan region; Huangshan Mountain is a separate scenic destination with its own gateway, transport and walking. Allow a road transfer and separate usable time for each.",
      },
      {
        question: "How long should I spend in Hongcun?",
        answer:
          "A focused daytime visit can introduce the layout and selected buildings. One night adds evening and morning time; two nights allow a full village day and a slower hotel stay. Add more only for a distinct regional interest.",
      },
      {
        question: "Should I stay inside Hongcun or outside the village?",
        answer:
          "Stay inside for immediate atmosphere if the exact room and luggage approach suit you. Choose a village-edge property for easier road access or particular facilities. Verify stairs, noise, bathroom and meals rather than assuming one setting is always better.",
      },
      {
        question: "Should I visit Hongcun or Xidi?",
        answer:
          "Choose Hongcun for an introduction strongly shaped by its water layout, or Xidi for another architectural and village sequence. Both can be worthwhile with enough time. They are separate places, so compare the full route instead of treating them as one quick stop.",
      },
      {
        question: "Does a Hongcun hotel booking include village admission?",
        answer:
          "Do not assume it does. Confirm the current ticket, registration and re-entry arrangements with the actual booking. A property described as Hongcun may also be outside the historic village.",
      },
      {
        question: "Is Hongcun suitable for travelers with limited mobility?",
        answer:
          "Suitability depends on the selected lanes, buildings and hotel room. Uneven paving, thresholds, bridges and stairs can remain. Check the vehicle-to-room approach and the actual walking route individually rather than relying on a village's compact size.",
      },
    ],
    culturalStory: {
      title: "Connect houses, water and village organization",
      paragraphs: [
        "Hongcun becomes more interesting when South Lake, Moon Pond and the water channels are explained together with the lanes and buildings. Huizhou architecture offers clues to household life, commerce and social organization, but a useful visit looks closely at particular examples rather than applying one story to every facade. Select a few buildings and leave room for questions.",
        "The village's heritage status does not make every interior public. People still live and work here, and some doorways lead to private spaces. Respect instructions, ask permission for photographs and let a separately agreed host determine how a cultural encounter proceeds. The strongest experience is thoughtful interpretation and consent, not a claim of access unavailable to everyone else.",
      ],
    },
    foodStory: {
      title: "Use meals to understand the region at your pace",
      paragraphs: [
        "Huizhou cooking can introduce preserved flavors, local produce and preparations different from the food on a major-city itinerary. Some characteristic dishes have strong aromas or unfamiliar textures, so explain preferences before ordering. A simple meal suited to the group may be more enjoyable than a performance of every famous regional dish.",
        "Village and rural hotel kitchens can have limited alternatives at short notice. Discuss allergies, vegetarian requirements, stocks and cooking fats in advance, and confirm breakfast as well as dinner. A private kitchen session requires an agreed host and clear activity; a normal restaurant meal should not be described as a home invitation or craft workshop.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the chosen village base",
        description:
          "Complete the road transfer and luggage approach, settle into the actual room and keep the first walk local. Confirm admission and evening meal arrangements.",
      },
      {
        day: "Full day",
        title: "Understand Hongcun before adding another village",
        description:
          "Explore the water system and selected buildings with breaks and a suitable meal. Leave time for the property or an agreed cultural encounter rather than treating the village only as a morning photo stop.",
      },
      {
        day: "Optional extra day",
        title: "A distinct architectural or rural interest",
        description:
          "With another night, consider Xidi or a different confirmed interest. Include transport and interpretation rather than adding another similar stop for its name alone.",
      },
      {
        day: "Departure",
        title: "Continue to the mountain or onward gateway",
        description:
          "Use the actual hotel and ticket to calculate the transfer. A Huangshan ascent requires its own timing, baggage and walking plan; this village outline does not automatically include it.",
      },
    ],
  },
};
