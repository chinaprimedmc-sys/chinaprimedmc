import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/foshan.svg",
  alt: "Foshan planning schematic distinguishing Chancheng heritage, a Shiwan ceramics interest and a separate Shunde or wider-district chapter; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const foshanGuide: ExpandedDestination = {
  id: "foshan",
  name: "Foshan",
  region: "south",
  kicker: "Temple craftsmanship, southern martial arts and a living ceramics city",
  description:
    "Plan Foshan around its Ancestral Temple, Shiwan ceramics and a comfortable city base, distinguishing Chancheng heritage from Shunde food and the wider municipality's separate excursions.",
  stay: "A focused day trip or 2–3 nights",
  bestFor: "Lingnan craftsmanship, martial-arts context and ceramics",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: [
    "heshan-guangdong",
    "jiangmen",
    "zhaoqing",
    "guangzhou",
    "shunde",
    "kaiping",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Foshan Travel Guide: Temples, Ceramics & Where to Stay",
    seoTitle: "Foshan Travel Guide: Heritage, Ceramics & Stays",
    seoDescription:
      "Choose a Foshan day trip or overnight for the Ancestral Temple, Shiwan ceramics and martial-arts context, with Chancheng hotel and Shunde route advice.",
    answer:
      "Foshan (佛山) is a large municipality in Guangdong with a strong Lingnan cultural and craft identity. For a focused first visit, begin with Chancheng's Ancestral Temple area and decide whether Shiwan ceramics adds a second subject. Shunde is a district within Foshan with its own food-led travel choices, not another name for the city center. Nanhai, Sanshui and Gaoming create other regional routes. Choose the specific district, hotel and interests rather than assuming everything labeled Foshan lies within one old-town walk.",
    stayAnswer:
      "A day trip from Guangzhou can provide a coherent introduction to the Ancestral Temple area and one nearby interest when the full return journey fits. Two nights give one full day and an unhurried evening; three nights allow a separate ceramics or other clearly chosen chapter. Combining Chancheng, a substantial Shunde food day and a distant mountain outing needs more time and careful routing. Add nights because a subject or property deserves them, not because the municipality has many attractions on a map.",
    hotelAnswer:
      "Choose a named Chancheng property near the Ancestral Temple and useful dining streets for a heritage-led stay, or a modern hotel selected for room comfort and pickup. A different district can be right for a specific subject, but the daily transfer should be visible. Shunde accommodation serves a different food-and-culture plan. Check the exact room, noise, breakfast, climate control and pedestrian access. A Foshan address or a view of a historic roof does not establish an easy walk to every planned visit.",
    sightseeingQuestion: "Should you visit Foshan's Ancestral Temple, Shiwan or Shunde?",
    sightseeingAnswer:
      "Choose the Ancestral Temple area for Lingnan building crafts, religious history and selected martial-arts interpretation. Choose Shiwan for a properly explained ceramic collection, kiln or confirmed making interest. Choose Shunde when food and a different district's garden, village or art subject are the main purpose. These interests can complement each other, but do not automatically fit in one day. Match the route to the available time, actual host or exhibition and the group's walking ability rather than offering every Foshan name as part of a compact circuit.",
    visitorResources: [
      {
        label: "Foshan municipal government",
        href: "https://www.foshan.gov.cn/",
        scope:
          "Municipal public information and administrative context, mainly in Chinese. Confirm current Ancestral Temple visitor arrangements, collections, performances, kiln access and local notices through the responsible institution. A city reference does not establish a workshop host, martial-arts lesson or hotel service.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Use the full station and dated service, then the road transfer to the actual district and property. Foshan West and Guangzhou South are different gateways; a station serving the wider area is not necessarily convenient for a Chancheng or Shunde itinerary.",
      },
    ],
    serviceScope:
      "A tailored proposal can specify the room, exact gateway, selected heritage route, guiding, admissions, meals and any separate Shiwan or Shunde day. Name a ceramics demonstration, class, martial-arts lesson or specialist host only when the arrangement is confirmed. Public performances, a paid private session and a school visit are different services. Private transport does not open working kilns, training spaces, homes or religious areas beyond ordinary access. Share interests, mobility, experience level and the amount of hands-on activity you want before comparing the program.",
    routeAdvice:
      "Foshan can complement Guangzhou through a focused return excursion or a separate stay. Shunde merits its own guide when food is the main chapter; Kaiping adds a different emigrant-architecture and countryside subject farther along a Guangdong route. No matching published Foshan product is recommended here. The existing Guangzhou-Shenzhen business journey does not automatically include Foshan heritage. Use the illustrative two-night outline to request a tailored visit with named districts, real access and enough time to understand the chosen subject.",
    practicalPlanning: {
      timing:
        "Keep the main heritage walk geographically coherent and leave time for a meal. Check any public performance or institution schedule before choosing a fixed sequence; a show should not be the only reason the day works. A ceramics appointment deserves its own usable window rather than being squeezed between temple photographs and an onward train. Add a separate district only when the full road pattern and value are clear.",
      walking:
        "Temple thresholds, courtyards, old-street paving, gallery standing and kiln-area paths have different demands. Agree the route, seating, toilets and meeting point. A car or local transport can help between sites without reaching every doorway. Workshops may have uneven floors or active equipment, and an easy viewing visit is different from a hands-on session. Review room-to-breakfast access as well as sightseeing when mobility is limited.",
      cost: "Compare the room, complete transfers, guide language, admissions and meal basis. A public performance, private class and specialist interpretation have different inclusions and fees. For pottery, clarify materials, finishing, firing, ownership, collection and shipping before describing the session as taking home a finished piece. A premium should improve explanation, comfort or participation rather than depend on an unverified master appointment or a long list of nominally included stops.",
    },
    attractions: [
      "Foshan Ancestral Temple / Zumiao, with its religious and craft context explained",
      "Selected Wong Fei-hung and Ip Man interpretation connected to the visit",
      "Lingnan Tiandi as an adapted historic-area visitor and commercial setting",
      "Shiwan ceramics and the Nanfeng Ancient Kiln area on a defined public route",
      "A confirmed ceramic or martial-arts session with a clear topic and provider",
      "Shunde or Xiqiao Mountain as separate district-level choices, not automatic additions",
    ],
    stays: [
      {
        label: "Day trip: one strong Chancheng route",
        advice:
          "Use the Ancestral Temple area and a nearby meal or cultural subject for a coherent introduction from Guangzhou. Compare the complete return transport and useful hours. A day excursion should not quietly promise every district of Foshan or a full craft class as well as the heritage walk.",
      },
      {
        label: "2 nights: heritage with an easier evening",
        advice:
          "One full day and suitable arrival or departure time can make a comfortable Chancheng stay. Keep public performance and host access conditional on current arrangements. A quiet room and an unhurried meal can add more value than rushing to a distant second district.",
      },
      {
        label: "3 nights: a separate craft or district chapter",
        advice:
          "Use the second full day for Shiwan with a meaningful subject, a confirmed session or another distinct interest. A Shunde-led day is an alternative with its own meal and road plan. Add a hotel move only when the second base materially improves the stay.",
      },
    ],
    hotelAreas: [
      {
        name: "Chancheng / Ancestral Temple-area base",
        advice:
          "Consider when the main interest is the heritage area and nearby dining. Check the exact walk, crossings, vehicle pickup and room noise, especially near lively commercial streets. A central address can simplify evenings without guaranteeing a quiet room or direct access to every site.",
      },
      {
        name: "A modern city hotel chosen for comfort and access",
        advice:
          "Useful when room setup, sleep, breakfast and straightforward pickup are priorities. Map the actual journeys to the temple and Shiwan before comparing price. A brand name or municipal location is not enough to establish convenient daily routing. Confirm the quoted category and services rather than relying on a gallery of several room types.",
      },
      {
        name: "A base in another district for a clear purpose",
        advice:
          "A Shunde, Nanhai or other district property can work when that part of the municipality is the real focus. It is not simply another neighborhood beside the Ancestral Temple. Check the full route, meals and evening environment. Use the separate Shunde guide for a food-led stay instead of assuming a Chancheng program applies unchanged.",
      },
    ],
    tradeoffs: [
      {
        title: "The Ancestral Temple name does not mean an ordinary family clan hall",
        advice:
          "Foshan's Zumiao has a religious identity associated with Beidi, alongside its important architectural and craft interest. Explain that setting rather than translating the name into a generic ancestors' residence. Courtyards, decorative work and selected displays deserve time to look. A normal visit does not imply participation in worship or access to every religious or institutional space.",
      },
      {
        title: "Martial-arts heritage, a performance and a lesson are different visits",
        advice:
          "Wong Fei-hung and Ip Man provide recognizable starting points, but biographical interpretation is not a private lesson or a meeting with a lineage holder. A public lion-dance or martial-arts presentation, if operating, has its own schedule. A class needs a named provider, language, level, duration and suitable activity. Do not sell a famous name or the city's reputation as proof that a particular instructor or school is available.",
      },
      {
        title: "A ceramics day should have a subject beyond shopping",
        advice:
          "Shiwan can introduce material, technique, sculpture and the relationship between craft and industry. A museum, historic kiln-area visit, shop, active studio and class offer different access. Select the venue and topic first, then confirm who can explain it. A kiln's heritage value does not establish access during production, and a demonstration does not necessarily include making or firing a personal object.",
      },
      {
        title: "Adapted heritage areas can be interesting without being untouched",
        advice:
          "Lingnan Tiandi combines retained or adapted historic fabric with contemporary commercial use. A considered walk can discuss those layers and provide a convenient meal or break. It should not be described as a complete unchanged ancient village. Choose whether architecture, urban adaptation or simply an enjoyable evening is the purpose, and distinguish a public street from private interiors.",
      },
      {
        title: "Xiqiao Mountain and Shunde require a different day plan",
        advice:
          "Xiqiao lies in Nanhai and has its own road, visitor transport and walking choices; Shunde covers several food and cultural areas. Neither is an effortless extra stop on every Ancestral Temple day. Review the actual route, steps, meals and transfer before adding either. A stronger trip may keep one for a second day or choose it instead of Shiwan rather than promising all three.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "heshan-guangdong",
        advice:
          "Heshan adds Gulao water landscapes and a distinct local Wing Chun context. Compare the actual teacher or venue, language and learning format with the chosen Foshan experience rather than repeating two unexplained demonstrations. Check the full road from the specific Foshan district and whether an overnight adds real value.",
      },
      {
        slug: "jiangmen",
        advice:
          "Jiangmen adds overseas Chinese history and riverside arcades, with Xinhui chenpi as a separately arranged cultural interest. Compare the actual city and district roads before combining them with Foshan craft or Shunde meals. A regional connection does not supply a producer appointment or complete the Kaiping village route.",
      },
      {
        slug: "zhaoqing",
        advice:
          "Zhaoqing adds a different lake-and-limestone setting, a separately chosen Dinghu forest route or an identified Duan inkstone learning interest. Compare the complete station and hotel transfers, actual walking and useful nights. Private city service does not automatically include this extension, a boat or a craft host.",
      },
      {
        slug: "guangzhou",
        advice:
          "Guangzhou adds trading-city history and a wider Cantonese urban chapter. Compare a focused Foshan return outing with a separate stay by the actual hotel addresses and usable hours. The existing business itinerary does not automatically include Foshan's temple, craft or martial-arts experiences.",
      },
      {
        slug: "shunde",
        advice:
          "Use Shunde's own guide to choose Daliang, Ronggui, Beijiao or a different food-led route. It is administratively within Foshan but not one compact neighborhood beside Chancheng's heritage sites. Compare the main meal, cultural subject and full transfer before deciding whether a separate base is worthwhile.",
      },
      {
        slug: "kaiping",
        advice:
          "Kaiping adds diaolou and emigrant-village architecture in a different countryside chapter. Choose the actual village cluster and a useful overnight or full outing, with the entire road or rail connection included. It is not another temple or craft stop within Foshan city.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The cooler parts of the year are useful starting points for heritage walks and garden or village additions. Summer heat, humidity and rain need shade, pauses and flexible outdoor routes. Indoor collections and a well-planned meal can support a varied visit, but closures, reservations and current exhibitions still matter. Public performances, festivals and workshop activity require date-specific confirmation. No season guarantees an empty heritage street, a particular instructor or a scheduled show.",
    orientation:
      "Foshan's municipality includes Chancheng, Nanhai, Shunde, Sanshui and Gaoming. A first heritage introduction often centers on Chancheng, while Shiwan, a Shunde meal route or Xiqiao Mountain require their own planning. Foshan West station sits in a different part of the municipality from a Chancheng hotel; Guangzhou South is another gateway again. Use precise Chinese addresses and ticketed stations rather than assuming the city name identifies one short transfer.",
    experiences: [
      "Understand the Ancestral Temple's religious setting and Lingnan decorative craftsmanship",
      "Explore Shiwan ceramics through a defined collection, kiln-area route or confirmed session",
      "Choose a worthwhile city base and a separate district chapter only when the route adds real value",
    ],
    planningNotes: [
      "Distinguish Chancheng's heritage area from the wider municipality and Shunde's separate food routes",
      "Confirm public performances, classes, instructors and studio access individually",
      "Check the room, exact gateway, walking route and any firing or shipping terms before booking",
    ],
    arrival:
      "Compare the complete journey from the ticketed rail or air gateway to the actual hotel. Foshan West and Guangzhou South create different local transfers, and Guangzhou Baiyun Airport, code CAN, requires its own road or connecting-transport plan. Send the full ticket, luggage and Chinese address before arranging pickup. A regional rail arrival does not automatically put you beside the Ancestral Temple or in the part of Shunde where the next meal is booked.",
    gettingAround:
      "Use a coherent walking route in the selected heritage area and planned transfers for Shiwan or another district when needed. Local transport may suit a focused visit; a private vehicle can improve a multi-address day without removing steps or granting special access. Agree workshop finish times and the pickup point. Keep a meal and a shorter alternative available rather than making the day's success depend on several distant sites and one uncertain performance.",
    stayStrategy:
      "Choose one base for a two- or three-night city stay. Prioritize the room's noise, bedding, bathroom, climate control, breakfast and access to the places you will actually use. A heritage-area hotel can improve evening time; a modern property can suit comfort and road pickup. A move to another district should serve a genuinely different chapter with enough nights, not simply collect another hotel view within the same municipality.",
    firstTimerNote:
      "Foshan is most rewarding when the visit has a clear cultural question. Temple craft, martial-arts history and ceramics each offer enough substance for an informed introduction. Choose one or two, find the right interpretation and leave space to look. A city famous for a tradition does not automatically provide private access to its practitioners, and a good public visit need not pretend otherwise.",
    faqs: [
      {
        question: "Is Foshan worth a day trip from Guangzhou?",
        answer:
          "A focused Ancestral Temple-area route can work when the full return journey and useful time fit. Add a nearby interest and a meal rather than every district's highlights. A separate overnight is useful when evening time, a craft subject or a particular property improves the experience.",
      },
      {
        question: "How many nights should I spend in Foshan?",
        answer:
          "Two nights give one full day and an easier evening. Three nights allow a separate ceramics or district-level subject. A day trip is another valid format. Keep Chancheng, Shunde and a mountain excursion distinct rather than promising all of them comprehensively in a short stay.",
      },
      {
        question: "Is Shunde the same place as Foshan city center?",
        answer:
          "No. Shunde is a district within the wider Foshan municipality with several distinct food and cultural areas. Chancheng's Ancestral Temple route and a Shunde meal day have different hotel and road choices. Use the exact neighborhood and address to plan either stay.",
      },
      {
        question: "What is Foshan's Ancestral Temple?",
        answer:
          "Zumiao is a religious and architectural heritage site associated with Beidi, with important Lingnan decorative craftsmanship. The English name should not be read as simply a family clan hall. Current visitor arrangements determine which spaces and displays can be seen.",
      },
      {
        question: "Can I see a lion dance or take a kung fu lesson?",
        answer:
          "A public presentation depends on the current schedule; a lesson needs a named provider and confirmed language, level and activity. Biographical displays about Wong Fei-hung or Ip Man are different from practical instruction. A private guide does not guarantee a school, lineage holder or instructor appointment.",
      },
      {
        question: "Can I make pottery in Shiwan?",
        answer:
          "Only with a confirmed suitable class or host. A collection, shop, historic kiln route and hands-on session offer different access. Clarify materials, firing, finishing, collection and shipping before assuming you will leave with a completed object.",
      },
      {
        question: "Is Lingnan Tiandi an untouched ancient district?",
        answer:
          "It is an adapted historic-area setting with contemporary commercial use. A walk can be worthwhile for architecture, urban change and dining, but it should not be described as a complete unchanged ancient village or imply access to private interiors.",
      },
      {
        question: "Can I add Xiqiao Mountain and Shunde to the same Foshan day?",
        answer:
          "Review the full road pattern, walking, meals and available hours before combining them. They are separate district-level choices, not adjacent stops in the Ancestral Temple area. A second day or a choice between subjects can produce a better-paced visit than trying to include everything.",
      },
    ],
    culturalStory: {
      title: "Read the city's traditions through places and practitioners, not famous names alone",
      paragraphs: [
        "Foshan's temple decoration, ceramics and martial-arts heritage can reveal different relationships between skill, belief, commerce and city life. At Zumiao, the setting and craftsmanship deserve explanation beyond a building label. In Shiwan, a ceramic object can open a discussion of material and technique without turning the visit into a purchase. The subjects connect through the city but remain distinct, each benefiting from the right route and interpreter.",
        "Recognizable names such as Wong Fei-hung and Ip Man can help visitors begin asking questions, but they do not authenticate a present-day class or guarantee access to a practitioner. The same applies to a kiln's history and a contemporary studio. Choose a public visit, demonstration or lesson for what can actually be learned, respecting the working and religious spaces involved. Cultural depth comes from clear context and an appropriate arrangement rather than a promise of exclusive lineage access.",
      ],
    },
    foodStory: {
      title: "Let a Cantonese meal support the cultural day",
      paragraphs: [
        "A Foshan meal can provide a comfortable pause between a heritage walk and another subject. Choose a balanced selection of vegetables, tofu and suitable meat or fish preparations with portions and cooking explained. Zhu hou sauce is one possible regional topic, but a sauce name does not specify every ingredient or make a dish vegetarian. A thoughtful restaurant choice near the day's route can be more useful than another long drive for a supposedly compulsory specialty.",
        "Shunde offers a separate culinary chapter when food is the main purpose, and its restaurants should be planned through their own addresses and service arrangements. For either day, clarify stocks, sauces, fish bones, dairy or other allergens and shared preparation. A market browse, snack stop and seated meal have different inclusions. Keep enough time and appetite to enjoy the table instead of making every pause another required tasting.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the chosen district and settle in",
        description:
          "Transfer from the exact gateway to the booked room and keep the first meal straightforward. Add a nearby heritage-area stroll only when timing allows. A late arrival should not carry a fixed public performance or studio appointment.",
      },
      {
        day: "Full day",
        title: "A clear heritage question and time to look",
        description:
          "Explore the Ancestral Temple area with its religious, architectural and selected martial-arts context. Add a meal and a nearby interest without treating every performance as guaranteed. A Shiwan-focused day is an alternative when ceramics is the stronger purpose.",
      },
      {
        day: "Optional second full day",
        title: "A separate craft or district chapter",
        description:
          "Use a third night for a defined Shiwan subject, confirmed session or carefully routed Shunde interest. Review the full road journey and walking before adding a mountain outing. The additional day should deepen the experience rather than repeat similar retail stops.",
      },
      {
        day: "Departure",
        title: "Continue with the full local connection allowed",
        description:
          "Use the ticketed station or airport, or a separately planned Kaiping chapter with its own nights and village routes. This two-night framework with an optional third night is illustrative, not a published product or promise of private instructors, studios or religious access.",
      },
    ],
  },
};
