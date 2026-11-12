import type { ExpandedDestination } from "./types";

export const bameiGuide: ExpandedDestination = {
  id: "bamei",
  name: "Bamei",
  region: "southwest",
  kicker: "A village beyond the cave approach, with time to look beyond the arrival",
  description:
    "Plan Bamei village in southeastern Yunnan: cave-and-river access, walking and luggage, day visits versus overnight stays, rain-season choices and connections with Puzhehei.",
  stay: "A full visit from Guangnan; 1–2 village nights when the room and access fit",
  bestFor: "Karst enclosure, a distinctive river approach and an unhurried village visit",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["puzhehei", "kunming", "jianshui", "jingxi"],
  assets: {
    hero: {
      src: "/destinations/planning/bamei.svg",
      alt: "Original Bamei planning schematic comparing the cave-and-river approach, a day visit or village night, and a Guangnan base; not a map or photograph",
      width: 1600,
      height: 1200,
    },
    gallery: [
      {
        src: "/destinations/planning/bamei.svg",
        alt: "Original Bamei planning schematic comparing the cave-and-river approach, a day visit or village night, and a Guangnan base; not a map or photograph",
        width: 1600,
        height: 1200,
      },
    ],
  },
  planning: {
    title: "Bamei Village Travel Guide: Cave Boats, Stays & Puzhehei",
    seoTitle: "Bamei Village Guide: Cave Boats & Where to Stay",
    seoDescription:
      "Plan Bamei village in Yunnan: cave-boat access, walking, luggage and rain-season decisions. Compare a day visit or overnight stay and a Puzhehei connection.",
    answer:
      "Bamei in southeastern Yunnan is a Zhuang village reached through a distinctive river-and-cave landscape into a sheltered karst valley. Choose a day visit from Guangnan for simpler luggage logistics, or one or two village nights for an evening and morning in the valley. Staying depends on the actual room, meals and current entry arrangements. Expect a managed visitor destination, with an approach that requires more planning than driving directly to a hotel door.",
    stayAnswer:
      "Choose a day visit when the river-and-cave approach is your main interest or a conventional county-town hotel suits you better. One village night adds an evening and morning if arrival and departure leave usable time. Two nights allow one full day without moving luggage, but need a suitable property and a genuine wish to slow down. Count any gateway hotel nights separately: one night in Guangnan is not one night in Bamei village.",
    hotelAnswer:
      "Compare a named room inside the village with a hotel in Guangnan county town. Inside, ask about the final luggage route, steps, bathroom, dampness, heating or cooling, dining and the latest permitted return. In the county town, compare the full road journey to the actual visitor entrance with the convenience of a conventional room and onward rail access. A property advertised under Bamei may be outside the scenic village; confirm the address and route before booking.",
    sightseeingQuestion: "Should I visit Bamei for the day or stay overnight?",
    sightseeingAnswer:
      "A day visit suits travelers who want the distinctive approach and a village walk while keeping a conventional hotel base. Staying inside is worthwhile when you want the evening and morning as well as the arrival, and the room and meals meet your needs. Check whether overnight guests must follow scenic transport operating hours and how departure works. A village booking does not establish unrestricted access, private boats or a quieter village at every hour.",
    visitorResources: [
      {
        label: "Yunnan provincial government",
        href: "https://www.yn.gov.cn/",
        scope:
          "Provincial background and public-notice reference, mainly in Chinese. Current Bamei visitor access, cave-boat operation, entry procedures and overnight guest arrangements require confirmation with the responsible scenic operator and named property. This portal does not verify a particular operating route or room.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services to Guangnanxian (广南县) station and the actual departure station. Include the road transfer to the Bamei visitor entrance and the remaining scenic approach. Guangnanxian station and Bamei village are different arrival points.",
      },
    ],
    serviceScope:
      "A tailored proposal should identify the gateway, visitor entrance, current scenic transport and boat arrangements, walking sections, guide, meals and the actual room if staying inside. Describe boarding and cave conditions, luggage handling, sharing and weather cancellation terms before booking. A private driver or guide does not make scenic transport private or remove steps. Household visits, hosted cultural conversations and food activities need a willing host and separately agreed content. No private-home access or special entry is implied by a village walk.",
    routeAdvice:
      "Decide first whether the river-and-cave approach is a day experience or the beginning of a village stay. We can compare both with a Guangnan base and assess whether Puzhehei adds a worthwhile second landscape chapter. For a tailored plan, share dates, starting point, available nights, walking needs, room expectations and comfort with small boats and enclosed spaces. The proposal should explain luggage arrangements and what changes if river conditions prevent the approach.",
    practicalPlanning: {
      timing:
        "Keep the village visit clear of a tightly timed train connection. The journey includes the gateway transfer, entrance procedures, current scenic transport, boat boarding and walking before there is time to explore. A distant hotel pickup is not the start of the village walk. Confirm the last usable return and allow a seated lunch; photography stops and queues can extend the day.",
      walking:
        "Expect a combination of boat boarding and walking rather than a single ride to the hotel door. Landing places, paths and room approaches can involve wet surfaces, uneven footing or steps. Ask for the current walking sequence and the longest continuous section, not just a total distance. Guests with balance concerns, limited mobility or discomfort in enclosed spaces need the actual access assessed before committing.",
      cost: "Compare the full gateway transfers, scenic admission and included transport, guide time, meals and any village room or luggage service. Identify optional purchases separately. Ask whether re-entry and an overnight stay require additional procedures or charges, and how weather-related changes affect each booking. A higher room rate alone does not establish a reliable retreat experience.",
    },
    attractions: [
      "The permitted river-and-cave approach to Bamei / 坝美",
      "The enclosed karst valley and selected public village paths",
      "A village evening and morning when an overnight stay is suitable",
      "Zhuang village context explained without treating homes as attractions",
      "A named local meal with dietary needs discussed in advance",
    ],
    stays: [
      {
        label: "Day visit / keep a Guangnan base",
        advice:
          "Choose this for the approach, a village walk and lunch without moving overnight bags through the scenic route. Check both directions of travel and the last return. It can be the better comfort choice even for guests interested in small villages.",
      },
      {
        label: "1 village night / add the evening and morning",
        advice:
          "Useful when the room is suitable and you arrive early enough to settle in. Bring a manageable overnight bag if the property confirms secure handling of the remaining luggage elsewhere. Agree dinner, breakfast and departure before relying on an early train.",
      },
      {
        label: "2 village nights / one full day without a move",
        advice:
          "Choose this for an unhurried valley stay and time at a property you actually want to use. It adds flexibility but does not guarantee quiet, clear weather or additional cultural activities. A second night needs more justification than repeating the approach.",
      },
    ],
    hotelAreas: [
      {
        name: "Inside Bamei village / atmosphere with an access commitment",
        advice:
          "Confirm the precise room and its route from the final landing or visitor path. Check mattress, bathroom privacy, hot water, dampness, temperature control, noise, meals and luggage assistance. Ask how entry and exit work outside ordinary sightseeing hours; do not assume a boat can be summoned at will.",
      },
      {
        name: "Guangnan county town / a practical hotel base",
        advice:
          "Compare the actual room and services with a day excursion to Bamei. This avoids a village luggage transfer but adds road travel on the sightseeing day. The county town, Guangnanxian station and scenic entrance are separate points, so assess the full daily route.",
      },
      {
        name: "Near the scenic entrance / verify what the address offers",
        advice:
          "An entrance-area property may reduce the first road journey without providing a village evening. Establish whether it is inside or outside the visitor system and where you can eat. Do not pay for a supposed village stay on the strength of a destination tag alone.",
      },
    ],
    tradeoffs: [
      {
        title: "The approach is part of the experience",
        advice:
          "The transition from an enclosed cave passage to a green valley is the reason many travelers consider Bamei. It also involves boarding, low-light or enclosed sections and walking. Ask about the actual craft, seating, flotation equipment and current route. Skip the visit if the access would dominate the day with discomfort; a private guide cannot change the physical character of the cave.",
      },
      {
        title: "An overnight stay needs more than a picturesque setting",
        advice:
          "Village time can be rewarding when the room supports good sleep and meals are settled. Check the room you will book, not just courtyard or landscape photographs. An early departure or a late return may depend on the scenic transport system; clarify this before choosing a train. A conventional Guangnan hotel can be the more comfortable high-end decision.",
      },
      {
        title: "Rain changes access as well as the photographs",
        advice:
          "Rain and river levels can affect the operating approach, boarding and paths. No calendar month guarantees every boat section. Reconfirm conditions close to travel and agree a realistic alternative or change of nights before committing to nonrefundable connections. An extra village night is not a substitute for an exit plan.",
      },
      {
        title: "Bamei is a lived-in village and a visitor destination",
        advice:
          "Describe what is there today, including tourism infrastructure and commercial activity, rather than sell an untouched hidden paradise. Zhuang identity belongs to specific people and local history, not an interchangeable Yunnan performance. Public paths do not include homes, fields or ceremonies. Ask before close photographs and arrange any hosted conversation in advance.",
      },
      {
        title: "Bamei and Puzhehei add different landscape experiences",
        advice:
          "Bamei centers on the enclosed valley and approach; Puzhehei offers a broader lake-and-karst stay, seasonal lotus and separate boating or viewpoints. Combining them makes sense only when the transfer and useful nights fit. Compare road travel with any dated rail option using both station transfers; do not assume two scenic names form a quick day circuit.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "puzhehei",
        advice:
          "Compare Bamei’s cave-and-valley arrival with Puzhehei’s open lakes and seasonal lotus. For a combined trip, count hotel-to-station and onward scenic transfers or assess a complete road journey. Give each stop useful time; a train sector alone does not establish an easy village-to-village connection.",
      },
      {
        slug: "kunming",
        advice:
          "Kunming can serve as a gateway for a southeastern Yunnan trip. Check dated rail options to Guangnanxian and the exact Kunming departure station, then include the road and scenic approach to Bamei. A city hotel departure and a village arrival are the relevant endpoints.",
      },
      {
        slug: "jianshui",
        advice:
          "Jianshui adds architecture and courtyard history to a landscape-focused trip. It needs a separate full connection and enough time to enjoy the town. Choose the wider southeastern Yunnan sequence for distinct interests rather than promise a compact loop through every attraction.",
      },
      {
        slug: "jingxi",
        advice:
          "Jingxi in Guangxi is a separate cross-region comparison for karst scenery, water and village interests. Evaluate the full transport, current visitor access and hotels before extending east. Similar landscapes do not establish a short or direct transfer.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose dates for the river approach and the valley conditions you want, then reconfirm operation close to travel. The wetter part of the year can bring greener scenery as well as rain, slippery paths and changes to river access. Cooler or drier periods change the appearance and room-comfort needs; they do not guarantee uninterrupted boats. Holiday visitor levels can also alter the pace. A flexible plan and a suitable room matter more than a single best-month claim.",
    orientation:
      "Bamei village is in Guangnan County, Wenshan Zhuang and Miao Autonomous Prefecture, southeastern Yunnan. It is not Guangnan county town, Guangnanxian railway station or Puzhehei in neighboring Qiubei County. This guide covers the visitor approach, selected public village paths and accommodation decisions. It does not establish access to every cave, field, household or trail in the surrounding valley. Do not confuse this Bamei with other Chinese places using a similar romanized name.",
    experiences: [
      "Follow the operating river-and-cave approach into the karst valley",
      "Explore selected public village paths with time to understand the setting",
      "Choose a village evening or a comfortable Guangnan base for a clear reason",
    ],
    planningNotes: [
      "Assess the actual boarding, cave and walking sequence before booking",
      "Compare the complete day visit with the room and meals offered overnight",
      "Keep weather changes and the full onward connection in the plan",
    ],
    arrival:
      "For rail travel, check dated services to Guangnanxian (广南县) and identify the exact departure station. Continue by road to the correct scenic visitor entrance, followed by the current visitor transport, boat and walking sequence. These are separate legs, so allow for queues and luggage before promising a village arrival time. Puzhehei station serves a different destination; compare both complete journeys if combining the two. Settle meals and room access before planning a late arrival.",
    gettingAround:
      "Confirm the permitted visitor route and current return arrangements with the scenic operator. In the village, choose public paths suitable for the guest and leave farms, doorways and private courtyards to their residents. Check footing after rain and identify seats and toilets before extending the walk. A driver normally serves the accessible road endpoints; that does not establish vehicle access to an inside-village room. Carry only what you can manage unless assistance has been agreed.",
    stayStrategy:
      "Start with the access decision, then choose the room. For a day visit, keep a Guangnan hotel that supports sleep, dinner and the next connection. For a village night, confirm the actual bedroom, meals, luggage approach and permitted exit before paying. An atmospheric exterior cannot compensate for a damp room or an impractical departure. Two village nights work best for guests who value slower mornings and can enjoy the property without a schedule of extra attractions.",
    firstTimerNote:
      "Bamei rewards interest in the transition into the valley and the ordinary details of a village walk. Spend time looking after arrival rather than treating the cave journey as a transport inconvenience to race through. If boats, enclosed spaces or uncertain access are a poor match, choose a different landscape stop. There is no need to add a staged household visit for the day to have value.",
    faqs: [
      {
        question: "Where is Bamei village in China?",
        answer:
          "Bamei (坝美) is in Guangnan County, Wenshan prefecture, southeastern Yunnan. The village, Guangnan county town and Guangnanxian railway station are different locations. The visitor journey includes a road transfer and the current scenic approach.",
      },
      {
        question: "Is Bamei worth visiting?",
        answer:
          "Choose Bamei if the river-and-cave approach, enclosed karst valley and village time appeal. It is less suitable if small-boat boarding or enclosed passages would be uncomfortable, or if you want a resort-style stay with direct vehicle access.",
      },
      {
        question: "How do I get to Bamei from Kunming?",
        answer:
          "Check dated rail services to Guangnanxian and the actual Kunming departure station. Add the road journey to the visitor entrance and the remaining scenic transport, boat and walking sections. The rail arrival is not the village arrival.",
      },
      {
        question: "Is Bamei only accessible by boat?",
        answer:
          "The cave-and-river approach is central to the visitor experience, but confirm the current visitor system rather than rely on an old claim that a boat is the only possible access. Ask which sectors operate, where walking is required and how overnight guests enter and leave.",
      },
      {
        question: "Should I stay overnight in Bamei?",
        answer:
          "Stay when the actual room, meals and access arrangements support an enjoyable evening and morning. A day visit from Guangnan is a sound alternative if you prefer conventional hotel services or want to avoid transferring overnight bags through the scenic approach.",
      },
      {
        question: "How many nights do I need in Bamei?",
        answer:
          "One village night adds an evening and morning when arrival and departure allow. Two nights provide a full day without moving, for guests who want a slower stay. County-town gateway nights are separate and should not be described as nights inside Bamei.",
      },
      {
        question: "Can I bring a large suitcase into Bamei?",
        answer:
          "Check the current boat, walking and property luggage arrangements first. A small overnight bag can be easier, but any storage for larger bags needs a confirmed location and terms. Do not assume hotel porters, car access or unlimited boat baggage.",
      },
      {
        question: "Can rain affect a Bamei visit?",
        answer:
          "Yes. Rain, river levels and operating decisions can affect boats, boarding and paths. Confirm conditions close to travel and agree what changes if access is interrupted. Do not put the scenic return tightly against an onward train.",
      },
      {
        question: "Can I combine Bamei with Puzhehei?",
        answer:
          "They offer distinct experiences in southeastern Yunnan. Compare the full road journey or dated rail connection with both station transfers, and allow useful time at each stop. Seasonal lotus at Puzhehei and Bamei’s operating access need separate checks.",
      },
      {
        question: "Is there a published Bamei private tour here?",
        answer:
          "No matching published itinerary is listed on this page. Share dates, nights, gateway, walking needs and room preferences for a tailored assessment. An example visit outline is not a bookable package or a promise of private scenic transport.",
      },
    ],
    culturalStory: {
      title: "Look beyond the idea of a hidden paradise",
      paragraphs: [
        "Bamei is often compared with the secluded pastoral refuge in Tao Yuanming’s Peach Blossom Spring. The approach through enclosed rock into a wider valley helps explain that association. Treat it as a way of reading the landscape, rather than evidence that the village has remained outside history or modern life. Visitor infrastructure and contemporary homes belong in an honest account of the place.",
        "The village’s Zhuang context deserves specific local explanation. An informed conversation can connect settlement, language, food and the valley setting without expecting residents to stage tradition. Ask before photographing people closely and keep a public walk separate from a hosted home visit. The value of the stay can lie in careful observation and a good explanation, without a ceremony, costume session or claim of exclusive access.",
      ],
    },
    foodStory: {
      title: "Give the village meal a place in the day",
      paragraphs: [
        "A seated lunch gives the visit a natural pause after the approach and before the return. Ask the chosen kitchen what it prepares well and agree a manageable meal around vegetables, a staple and suitable protein. Guangnan’s Zhuang food traditions can provide context when someone can explain the actual dish, ingredients and occasion; do not assume every visitor restaurant serves the same local specialties or that all ingredients come from the valley.",
        "For an overnight stay, confirm dinner, breakfast and any advance ordering before arrival. State allergies and dietary needs in concrete terms, including stocks, fish, pork, wheat, soy or shared preparation as relevant. A cooking session or household meal needs a willing provider; reliable food and an unhurried table matter more than a staged banquet.",
      ],
    },
    itinerary: [
      {
        day: "Before arrival / gateway decision",
        title: "Choose the base and confirm the operating approach",
        description:
          "Compare a Guangnan hotel with a named inside-village room. Check current access, luggage, boat boarding, walking and return arrangements. Reserve enough time for the entire journey from your actual starting point.",
      },
      {
        day: "Visit / cave approach and village time",
        title: "Let the arrival introduce the landscape",
        description:
          "Follow the operating visitor route, with the agreed boarding and walking support. After reaching the valley, take a selected public village walk and a seated lunch. Leave space to observe the setting rather than rush into extra activities.",
      },
      {
        day: "Afternoon or overnight / a deliberate choice",
        title: "Return comfortably or enjoy the village evening",
        description:
          "Day visitors leave with the current return and full road transfer counted. Overnight guests settle into the confirmed room and dinner; a gentle public walk depends on daylight, weather and access. No private household visit is assumed.",
      },
      {
        day: "Departure / onward route",
        title: "Keep the exit and next connection realistic",
        description:
          "Overnight guests follow the agreed morning exit, without assuming boats operate on demand. Continue to the actual station or a separately assessed Puzhehei route. The tailored proposal should identify the transport, room, meals and changes if river conditions interrupt the visit.",
      },
    ],
  },
};
