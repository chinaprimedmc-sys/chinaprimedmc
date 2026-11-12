import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/xidi.svg",
  alt: "Xidi village-planning diagram comparing a daytime visit, a historic-village inn and a nearby road-accessible stay; schematic rather than a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const xidiGuide: ExpandedDestination = {
  id: "xidi",
  name: "Xidi",
  region: "east",
  kicker: "Huizhou houses, carved details & time to look closely",
  description:
    "Choose Xidi for a focused architectural visit or a carefully checked village stay, with meaningful comparisons to Hongcun and practical advice on rooms, walking and transfers.",
  stay: "Day visit or 1–2 nights",
  bestFor: "Architectural detail and slower village travel",
  interests: ["heritage", "food", "landscape"],
  relatedDestinationIds: ["hongcun", "huangshan", "wuyuan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Xidi Travel Guide: Architecture, Village Stays & Hongcun",
    seoTitle: "Xidi Travel Guide: Village Stays & Architecture",
    seoDescription:
      "Plan Xidi for Huizhou architecture and carved details. Compare a day visit or overnight, Xidi versus Hongcun, hotel access and a separate Huangshan chapter.",
    answer:
      "Xidi is a historic village in Yi County, Anhui, where Huizhou houses, lanes and carved architectural details reward close looking. Choose it when you want to understand buildings and village organization rather than only find a famous reflection. Xidi and Hongcun share a UNESCO World Heritage listing but are separate villages with different layouts. A focused visit to either can be worthwhile; seeing both needs enough time to make the second more than another entrance and photograph.",
    stayAnswer:
      "A focused daytime visit can introduce the village layout and selected buildings from a regional base. One night adds a local evening and morning if the hotel itself suits you. Two nights allow a full architectural day and a slower stay, or a separately planned interest nearby. Keep a Huangshan mountain night and transfers separate from this village allocation. More time does not guarantee private interiors, empty lanes or a named local host.",
    hotelAnswer:
      "Choose an inn within the historic village for immediate atmosphere after checking the specific room, bathroom, stairs, noise and final luggage approach. A nearby road-accessible property may offer simpler pickup and a different standard of facilities. A wider Yi County or Hongcun base can work for a day visit when you prefer fewer hotel changes. Use the actual address rather than assuming every Xidi-labeled property sits inside the historic village.",
    sightseeingQuestion: "Should you visit Xidi or Hongcun?",
    sightseeingAnswer:
      "Choose Xidi for a focused interest in Huizhou houses, lanes and carved details. Hongcun offers another architectural setting with a particularly prominent water layout around South Lake and Moon Pond. Neither is automatically better or quieter. Choose one if time is short; visit both when interpretation, transfers and breaks leave enough time to appreciate their differences rather than repeat the same general introduction.",
    visitorResources: [
      {
        label: "UNESCO: Ancient Villages in Southern Anhui — Xidi and Hongcun",
        href: "https://whc.unesco.org/en/list/1002/",
        scope:
          "Background on the listed villages and their significance. Shared heritage listing does not establish a shared ticket, current opening, access to private houses or individual hotel standards.",
      },
      {
        label: "Huangshan municipal government",
        href: "https://www.huangshan.gov.cn/",
        scope:
          "Regional public information and announcements. Confirm the actual village entrance, admission, re-entry, accommodation and private arrangements separately for your dates.",
      },
    ],
    serviceScope:
      "We can discuss Xidi as a private village visit or regional stay, with hotel, guiding, transfers and agreed admissions specified in the proposal. The guide connects selected buildings and details to village history while respecting private homes. A ticket does not open every doorway, and a cultural conversation requires a willing host. Any private meal, workshop or special photography arrangement must be confirmed separately.",
    routeAdvice:
      "Plan Xidi within a tailored Huizhou chapter, choosing a day visit or overnight according to the property and your interest in architecture. Compare Hongcun and the mountain as separate decisions before adding hotel moves. We do not currently recommend a published Xidi package on this page. The final proposal should identify your base, named village visits, room access, admissions and onward transport rather than presenting all the options below as included.",
    practicalPlanning: {
      timing:
        "Give the village enough time for a coherent walk and selected interiors where open. Pause to look at carvings and the relationship between lanes, entrances and living spaces. If adding Hongcun, allow a second useful visit and the road transfer rather than rushing two sites to claim completion. Avoid placing the main architectural walk after a demanding mountain descent.",
      walking:
        "Historic routes can involve stone paving, narrow passages, thresholds and steps at buildings or inns. Rain changes footing, and compact distances can still mean prolonged standing. Review the actual route, rest opportunities and room floor for anyone with access needs. A private road vehicle helps between destinations but does not follow every village lane.",
      cost: "Compare the named visits and admission arrangements, guide time, room category, meals, luggage assistance and hotel-to-hotel transfers. Staying inside the village and paying for a day visit from elsewhere are different choices. Check re-entry and hotel registration separately. A private host or specialist architectural session requires a defined scope, not simply a higher room rate.",
    },
    attractions: [
      "Xidi historic village",
      "Huizhou houses in Xidi",
      "Xidi lanes and carved architectural details",
    ],
    stays: [
      {
        label: "Day visit: a focused architectural introduction",
        advice:
          "Keep a base that serves the wider route and give Xidi a useful window. Select buildings and details with your guide rather than trying to enter every doorway.",
      },
      {
        label: "1 night: evening and morning in the village",
        advice:
          "Choose an actual room you want to sleep in and confirm its access. The overnight adds local time but does not promise an empty village or replace admission arrangements.",
      },
      {
        label: "2 nights: a full day and a slower stay",
        advice:
          "Allow time for close architectural looking, a proper meal and the property. Add a second village or confirmed host only when it brings a distinct perspective.",
      },
    ],
    hotelAreas: [
      {
        name: "Inside Xidi's historic village",
        advice:
          "Consider for immediate access to the lanes and a local evening. Ask about room stairs, bathroom, sound, heating or cooling and luggage from the vehicle. Historic character should not obscure sleep, privacy or access needs.",
      },
      {
        name: "Village-edge and nearby road-accessible properties",
        advice:
          "Compare when easier pickup, luggage handling or a particular room matters. Check the actual walk and entrance arrangements; nearby in a description may not mean a comfortable evening return for every guest.",
      },
      {
        name: "A wider Yi County or Hongcun base",
        advice:
          "Choose when the overall hotel and route work better with fewer moves. Include the complete Xidi road transfer and allow time for the visit. A regional base is not the same as sleeping within Xidi's lanes.",
      },
    ],
    tradeoffs: [
      {
        title: "Use detail to understand the architecture",
        advice:
          "Ask the guide to explain selected wood, brick or stone carving, room arrangements and thresholds in the buildings actually open. Close looking needs less ground covered and more interpretation. Do not claim the same symbolism or household story for every facade without evidence.",
      },
      {
        title: "A shared UNESCO listing is not one attraction",
        advice:
          "Xidi and Hongcun have separate visits, entrances and arrangements. Check the applicable ticket and transport rather than assuming one booking covers both. The reason to see both is their differences, not the need to collect every component of a listing.",
      },
      {
        title: "Choose overnight comfort as carefully as atmosphere",
        advice:
          "A restored house can involve stairs, small bathrooms, damp, sound or limited meals. Review the exact room and seasonal comfort. Some guests will enjoy a road-accessible hotel more and still gain a substantive village visit during the day.",
      },
      {
        title: "Respect the limits of a public visit",
        advice:
          "Open historic interiors, private homes and an invited host are different settings. Ask before entering, photographing people or recording a conversation. No village ticket or private guide can guarantee access to a resident's home or a working craft space.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "hongcun",
        advice:
          "Compare Hongcun's water system and layout with Xidi's architectural route when both interest you. Give each enough time and avoid unnecessary hotel changes. A shared listing does not remove the road transfer or separate entry arrangements.",
      },
      {
        slug: "huangshan",
        advice:
          "Combine villages with the mountain on separate usable days. Confirm the gateway, remaining stairs, luggage storage and descent before choosing the village hotel sequence. Xidi is not an on-mountain hotel or the same place as Tangkou.",
      },
      {
        slug: "wuyuan",
        advice:
          "Wuyuan adds another rural region in Jiangxi. Compare whether its village routes, property and seasonal interests offer enough contrast to justify the transfer. Do not add more villages merely because their architecture looks related.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit village walks, with rain and holiday crowds still possible. Summer can be hot and humid; winter makes heating and room dryness important. Choose a comfortable hotel and manageable walking plan for the actual season. Earlier or later visiting hours may change the atmosphere but do not guarantee a quiet village.",
    orientation:
      "Xidi lies in Yi County within the wider Huangshan region of Anhui. It is separate from Hongcun, Tunxi, the mountain gateway and the mountain itself. Distinguish the village entrance, actual inn and regional station when arranging a stay. A hotel marketed for the Huangshan area can be convenient for one part of the itinerary and distant from another.",
    experiences: [
      "Look closely at selected Huizhou houses and carved details with explanation grounded in the buildings you visit",
      "Walk a coherent village route with pauses rather than racing between every marked interior",
      "Choose a carefully checked overnight or a meaningful Hongcun comparison when it adds to your interests",
    ],
    planningNotes: [
      "Choose Xidi, Hongcun or both by architectural interest and usable time",
      "Verify actual room access and luggage handling before booking a historic inn",
      "Keep village admission, private host consent and mountain transport as separate arrangements",
    ],
    arrival:
      "Reach Xidi by the agreed road connection from a regional station, airport or another hotel. Huangshan North is a gateway, not the village entrance. Confirm the exact ticket, property and luggage approach before arranging pickup. If coming after a mountain stay, include descent and collection of stored bags rather than calculating only the final drive.",
    gettingAround:
      "Walking forms the visit within the village, with road transfers for Hongcun, hotels and the mountain region. Some lanes and inn entrances cannot be reached directly by the vehicle. Establish the meeting point, rest opportunities and any luggage assistance. A short distance on a map does not describe thresholds, paving or remaining steps.",
    stayStrategy:
      "Book an overnight when the specific property and village time are part of the holiday. Otherwise, a good day visit from a comfortable regional base can be the better choice. Compare sleep, room temperature, bathrooms, meals and access, leaving enough unreserved time to enjoy the stay you choose.",
    firstTimerNote:
      "Xidi rewards close observation. A carved detail, doorway or room sequence becomes more meaningful when the guide explains the building and its context. You do not need a long list of village stops to have a valuable cultural day, and you do not need to sleep in a historic house to understand its architecture.",
    faqs: [
      {
        question: "Is Xidi worth visiting as well as Hongcun?",
        answer:
          "It can be when architecture interests you and there is enough time to compare the villages. Hongcun's water layout and Xidi's houses and details provide different focuses. With a short schedule, choose one and visit it well.",
      },
      {
        question: "How long should I spend in Xidi?",
        answer:
          "A focused daytime visit can introduce the layout and selected buildings. One night adds evening and morning time, while two nights allow a full architectural day and a slower stay. Choose by the actual hotel and wider route rather than a fixed requirement to overnight.",
      },
      {
        question: "Does one ticket cover Xidi and Hongcun?",
        answer:
          "Do not infer ticket coverage from their shared UNESCO listing. Confirm the current admission and any combined arrangement for your booking. They remain separate villages with a road transfer between them.",
      },
      {
        question: "Can I stay in a traditional house in Xidi?",
        answer:
          "Discuss a specific available property and room. Confirm stairs, bathrooms, heating or cooling, noise and luggage access before booking. A historic setting does not establish the comfort level or included services of every room.",
      },
      {
        question: "Can I combine Xidi and Huangshan Mountain in one day?",
        answer:
          "A very selective combination may be possible under some circumstances, but it adds road travel and cultural walking to a mountain day. For depth or a gentler pace, use separate days and include descent, baggage and the actual hotel transfer.",
      },
      {
        question: "Is Xidi suitable for limited mobility?",
        answer:
          "It depends on the selected lanes, open buildings and room. Uneven paving, thresholds and stairs may remain. Review the actual route and vehicle-to-room approach individually; a private car does not make the historic village step-free.",
      },
    ],
    culturalStory: {
      title: "Read a village through its buildings",
      paragraphs: [
        "Xidi's houses and carved details offer a way into Huizhou's architectural traditions and household history. A useful guide connects particular materials, entrances and room arrangements with the building being visited, rather than attaching a universal meaning to every motif. Leave time to compare what changes from one space to the next and to ask how the interpretation is supported.",
        "The village remains a place where visitor routes and private life meet. An open historic room is not permission to enter the next residence. Follow instructions, ask before photographing people and keep a separately hosted encounter distinct from ordinary admission. Careful interpretation and respectful access provide more value than promises of private doors opening everywhere.",
      ],
    },
    foodStory: {
      title: "Choose a meal that fits the village day",
      paragraphs: [
        "A proper meal and a comfortable seat can improve a day of close architectural looking. Huizhou dishes may use preserved ingredients and assertive aromas, so discuss preferences rather than ordering only by regional fame. Choose a place that serves the actual route and pace instead of adding another distant stop for lunch.",
        "For an overnight, confirm breakfast and dinner with the property, including allergies and dietary requirements. Vegetable dishes can still contain meat stocks or cooking fats, and small kitchens may have fewer alternatives at short notice. A normal restaurant reservation is different from a privately hosted kitchen or family meal; describe and confirm each honestly.",
      ],
    },
    itinerary: [
      {
        day: "Arrival or day-visit start",
        title: "Reach the actual village entrance or inn",
        description:
          "Complete the agreed road transfer, admission and luggage arrangements. Keep arrival flexible when coming from a train or mountain descent.",
      },
      {
        day: "Main visit",
        title: "Architecture with time to look",
        description:
          "Follow a coherent route through selected open buildings and lanes, with explanation, breaks and a suitable meal. Respect private spaces and current visitor instructions.",
      },
      {
        day: "Optional overnight",
        title: "Stay for the property and village time",
        description:
          "Enjoy a local evening and morning if the confirmed room and meals suit you. Add Hongcun or a host only with sufficient separate time and arrangements.",
      },
      {
        day: "Departure",
        title: "Continue with the complete regional plan",
        description:
          "Allow the full transfer to the next hotel, mountain gateway or station. This outline illustrates choices rather than a published package with every option included.",
      },
    ],
  },
};
