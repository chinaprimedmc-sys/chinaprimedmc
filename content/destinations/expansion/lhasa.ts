import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/lhasa.svg",
  alt: "Lhasa planning schematic separating arrival and altitude pacing, confirmed palace and religious visits, and a separately reviewed onward route; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const lhasaGuide: ExpandedDestination = {
  id: "lhasa",
  name: "Lhasa",
  region: "southwest",
  kicker: "Give the plateau capital time, context and a manageable pace",
  description:
    "Plan Lhasa around altitude-aware arrival, the Potala Palace, Jokhang and selected monastery visits, with hotel comfort, walking demands and Tibet travel arrangements clearly explained.",
  stay: "4–5 nights for a considered city stay",
  bestFor: "Tibetan Buddhist history, architecture and a carefully paced plateau visit",
  interests: ["heritage", "city", "food"],
  relatedDestinationIds: ["nyingchi", "xining", "shangri-la"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Lhasa Travel Guide: Potala Palace, Altitude & Where to Stay",
    seoTitle: "Lhasa Travel Guide: Potala, Altitude & Stays",
    seoDescription:
      "Plan a Lhasa stay with Potala Palace and Jokhang choices, altitude-aware pacing, hotel and stair checks, airport transfers and Tibet permit questions.",
    answer:
      "Lhasa (拉萨) is the capital of Tibet Autonomous Region, also called Xizang, at roughly 3,650 meters above sea level. A rewarding city visit combines Tibetan Buddhist and political history, the Potala Palace, the Jokhang and a small number of well-explained places rather than a fast circuit of every monastery. Altitude, stairs, site reservations and the travel arrangements applicable to the guest shape the itinerary. Lhasa is a city within a much wider region: Namtso, Shigatse, Everest-area routes and Nyingchi are separate chapters, not automatic additions to a city stay.",
    stayAnswer:
      "Four nights give three full days between arrival and departure; five nights allow a more flexible city program and another distinct interest. Keep arrival light and place demanding visits only when the traveler and confirmed arrangements make them appropriate. Extra nights help pacing but do not guarantee acclimatization or suitability. A short three-night visit can leave little flexibility after long connections or an uncomfortable first day. Choose the actual ascent profile, health needs and essential visits before fixing a number of nights.",
    hotelAnswer:
      "Compare a well-located old-city or edge-of-core property with a modern hotel chosen for quiet, room comfort and vehicle access. Review stairs, lifts, heating or cooling, bathroom, breakfast and the final luggage approach. A room described as oxygen-equipped needs its actual provision explained; it is not medical supervision or proof that the itinerary is safe for the guest. Confirm the booked travelers and Tibet arrangements before treating a room reservation as the whole trip. A view of the Potala does not establish easy access to its visitor route.",
    sightseeingQuestion:
      "How should you choose between the Potala Palace, Jokhang and Lhasa's monasteries?",
    sightseeingAnswer:
      "Choose the Potala for its architectural, historical and religious context, accepting a demanding stair-based visitor route and controlled access. Choose the Jokhang and a suitable Barkhor walk for a different religious and urban setting, respecting worship and current visitor rules. Norbulingka and a selected Sera or Drepung visit add different subjects; Ganden is a separate, higher outing requiring its own review. Select visits for contrast and manageable effort. A private guide cannot replace reservations, remove stairs or guarantee a particular religious activity.",
    visitorResources: [
      {
        label: "Tibet Autonomous Region government",
        href: "https://www.xizang.gov.cn/",
        scope:
          "Regional public information and official notices, mainly in Chinese. Confirm current traveler eligibility, organized arrangements, site access and route-specific requirements with the responsible parties for the intended dates. This reference is not a permit approval or guarantee that every onward route can be included.",
      },
      {
        label: "UNESCO: Historic Ensemble of the Potala Palace, Lhasa",
        href: "https://whc.unesco.org/en/list/707/",
        scope:
          "Background on the World Heritage ensemble, including the Potala Palace, Jokhang Temple and Norbulingka. The designation does not create a common visitor ticket, confirm current interiors or provide a reservation, private access or a religious host.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel and altitude illness",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General travel-health background, not an individual assessment. Discuss the actual ascent, sleeping elevations and personal health with a qualified clinician. Private guiding, a train journey and hotel oxygen equipment are not medical clearance or a guarantee of acclimatization.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for the dated ticket, station and service. A rail booking does not replace Tibet travel authorization or establish medical suitability. Include the full journey and hotel transfer rather than treating arrival at Lhasa station as an old-city arrival.",
      },
    ],
    serviceScope:
      "A tailored proposal can identify the actual room, gateway, guide language, selected visitor routes, admissions, meals and the Tibet arrangements required for the traveler. Foreign passport holders generally need organized arrangements and a Tibet Travel Permit in addition to valid permission to enter China; nationality, documents, dates and route still need current confirmation. Clarify who arranges what, which approvals remain outstanding and when bookings can be finalized. Do not assume visa exemption, a hotel booking or a private vehicle replaces the applicable authorization. Additional routes or border areas may require further arrangements and must be reviewed separately.",
    routeAdvice:
      "Lhasa can form a focused city stay or one chapter in a separately reviewed Tibet itinerary. Nyingchi offers a different valley-and-forest interest; Xining is in Qinghai and Shangri-La is in Yunnan, each with its own geography and travel conditions. No matching published Lhasa product is recommended here. The existing Yunnan itinerary does not include Tibet Autonomous Region. Use the illustrative four-night framework to request a suitable city visit, with every onward road, sleeping elevation, reservation and required arrangement shown rather than hidden inside a generic Tibet loop.",
    practicalPlanning: {
      timing:
        "Keep arrival quiet, with an easy meal and little scheduled exertion. Do not place the Potala's stair-based visit immediately after an uncertain arrival just to fit a checklist. Set the sequence around the guest's condition and actual reservations, retaining a lighter alternative. Religious events, visitor controls and current opening can change the day. If altitude symptoms develop, seek qualified assessment and revise the plan; completing the itinerary is not a reason to push onward or higher.",
      walking:
        "Ordinary walking can feel harder at Lhasa's elevation. The Potala involves substantial steps and standing; temple thresholds, uneven paving, crowds and monastery slopes add different demands. Choose the actual route, rest points, toilets and vehicle meeting location. A hotel lift does not make the sightseeing step-free. If a major interior is unsuitable, discuss what a meaningful alternative can offer without pretending it reproduces the same experience. Higher excursions need another altitude review rather than being assumed safe after a few city nights.",
      cost: "Compare room category, actual transfers, guide language, site reservations, admissions, meal basis and the services required for the approved route. A specialist explanation, access to public visitor areas and a religious encounter are different arrangements. Clarify changes and cancellation terms if a site or route cannot be confirmed. A premium should improve comfort, interpretation and usable time; it should not depend on an unverified private ceremony, restricted interior or claim that equipment removes altitude concerns.",
    },
    attractions: [
      "Potala Palace through the confirmed authorized visitor route",
      "Jokhang Temple and a manageable Barkhor public walking section",
      "Norbulingka as a distinct palace-garden and historical interest",
      "A selected Sera or Drepung monastery visit with current access confirmed",
      "A chosen museum or collection with the actual exhibition and language reviewed",
      "Ganden, Namtso or a wider Tibet chapter only as a separately reviewed outing or route",
    ],
    stays: [
      {
        label: "3 nights: a selective visit with limited flexibility",
        advice:
          "Two full days can provide a narrow introduction when the actual arrival, guest condition and reservations fit. It leaves less room to change a demanding visit. Do not promise every palace, monastery and high lake; consider whether more nights or a different trip better suits the traveler.",
      },
      {
        label: "4 nights: a considered city framework",
        advice:
          "Three full days allow distinct subjects with quieter periods and a lighter arrival. The order remains conditional on health and confirmed access. Four nights are not a medical formula for acclimatization and should not automatically trigger a higher excursion at the end.",
      },
      {
        label: "5 nights or more: depth or a separately scoped extension",
        advice:
          "Add a real museum, historical or religious subject at an appropriate pace, or plan another region with its own nights and route review. Avoid repeating similar interiors to fill time. An onward lake, pass or border chapter needs more than a spare day in the city schedule.",
      },
    ],
    hotelAreas: [
      {
        name: "Old-city or Barkhor-area base / a selected walking interest",
        advice:
          "Check the actual public route, room quietness, stairs, luggage approach and pickup. Atmospheric streets can be busy and access can differ between properties. Confirm heating, bathroom and breakfast rather than assuming a historic setting supplies modern room comfort. A central address does not remove the effort of walking at altitude.",
      },
      {
        name: "Modern Lhasa hotel / room comfort and access",
        advice:
          "Compare the quoted room, lifts, non-smoking arrangements, sleep, bathroom and meal options with the full daily transfer. Ask how any oxygen service actually works and what it excludes. A hotel facility is not a substitute for medical assessment or an emergency plan, and the best room photograph may depict another category.",
      },
      {
        name: "Gateway or onward-route accommodation / a specific purpose",
        advice:
          "An airport-oriented room or a higher route overnight is a different decision from a city cultural stay. Show the full transfer, sleeping elevation, heating, bathroom and meals. Choose it only when it serves the actual travel plan and applicable arrangements, rather than calling every property in the wider municipality a convenient Lhasa sightseeing base.",
      },
    ],
    tradeoffs: [
      {
        title: "China entry permission and Tibet travel arrangements are separate",
        advice:
          "A valid visa or visa-exempt China entry route does not by itself establish the authorization and organized arrangements applicable to Tibet Autonomous Region. Confirm the actual nationality, passport, route and dates through the responsible operator and authorities. The process for one traveler should not be copied to every document type. A permit-related promise should identify what has actually been approved and what is still pending, not rely on an assumed standard lead time.",
      },
      {
        title: "Train arrival and hotel oxygen do not guarantee acclimatization",
        advice:
          "The body responds to actual exposure and sleeping elevations, not the romance of a rail journey or a property's marketing. A train may have its own altitude profile and operating arrangements, while an oxygen-equipped room does not prevent every problem. Discuss suitability and ascent with a qualified clinician, allow a flexible arrival and take symptoms seriously. Do not offer a fixed number of nights as a promise that every guest is ready for a higher road.",
      },
      {
        title: "The Potala is a demanding visit, not a photo stop with optional stairs",
        advice:
          "The authorized interior route involves climbing, standing and controlled movement. Confirm the current visitor process and the guest's ability before making it essential. An exterior view or a different collection can be worthwhile, but is a different experience. A private guide cannot remove the physical route, guarantee every room or create unrestricted time inside a reserved visit.",
      },
      {
        title: "Religious life is not a scheduled performance for visitors",
        advice:
          "The Jokhang, Barkhor and monasteries have religious significance beyond their visual appeal. Respect the current visitor route, photography rules, worshippers and any areas not open to tourists. A Sera visit does not automatically guarantee a debate session, and observing an activity does not mean participation or a private meeting. Good interpretation explains what can responsibly be seen without promising access to personal religious practice.",
      },
      {
        title: "A UNESCO ensemble is not one ticket or one easy walk",
        advice:
          "The Potala, Jokhang and Norbulingka share a World Heritage ensemble but have different locations, visitor arrangements and physical demands. Choose them for distinct architectural and historical subjects. Do not present recognition as a single reservation, guaranteed interior access or proof that all parts fit comfortably in one day. A slower comparison can explain more than another sequence of entrances.",
      },
      {
        title: "Higher excursions need a new decision, not an automatic final-day upgrade",
        advice:
          "Ganden, Namtso and wider plateau routes can involve different elevations, exposure and long journeys. Review the exact road, walking, sleeping location and current conditions against the traveler's situation. An earlier comfortable city walk does not certify a high pass or lake day. Select a substantive city alternative when an extension is unsuitable, rather than treating the original checklist as fixed.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "nyingchi",
        advice:
          "Nyingchi adds different valleys, forest landscapes and selected cultural subjects. Choose actual bases and the complete elevation profile; lower than Lhasa does not mean sea level or medically risk-free. Current rail or road links, authorized routes and individual suitability need review before using it as an arrival strategy or onward chapter.",
      },
      {
        slug: "xining",
        advice:
          "Xining is in Qinghai, with its own collections, Kumbum visit and travel conditions. A stop there can be meaningful in its own right, but does not guarantee acclimatization or replace Tibet arrangements. Review the full onward transport and altitude profile rather than treating a rail ticket as a complete Lhasa travel plan.",
      },
      {
        slug: "shangri-la",
        advice:
          "Shangri-La is in Yunnan and offers a distinct highland cultural stay. It is not another district of Tibet Autonomous Region, and its access arrangements should not be applied to Lhasa. Include both only when the different subjects, transport and actual ascent profile justify separate time.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring through autumn can support different city and wider plateau interests, with changing temperatures, rain and busy dates depending on the month and route. Winter is a different cold-weather trip with current services and property comfort to verify. Strong sun, dry air and large day-to-night changes can matter even on a mild day. A clear city forecast does not establish road or pass conditions elsewhere. Confirm the actual sites, travel arrangements and route near booking rather than promising a religious event, lake view or particular seasonal scene.",
    orientation:
      "Lhasa city, its wider municipality, the airport and outlying monasteries are different locations. The old city and Barkhor, Potala and Norbulingka should not be assumed to form one compact step-free walk. Lhasa Gonggar Airport lies outside the central urban area and requires a separate transfer. Tibet Autonomous Region is not interchangeable with every Tibetan cultural area in Qinghai, Sichuan or Yunnan. Use the full hotel, ticket and authorized route rather than relying on a broad plateau label.",
    experiences: [
      "Understand selected palace, temple and city places through clear historical and religious interpretation",
      "Choose a comfortable room and flexible daily effort appropriate to the actual altitude and guest",
      "Add another monastery, collection or regional chapter only when its distinct value, access and physical demands fit",
    ],
    planningNotes: [
      "Confirm China entry eligibility, Tibet arrangements and site reservations as separate parts of the booking",
      "Keep arrival light and review stairs, symptoms and any higher route with appropriate professional input",
      "Respect worship, photography and public visitor boundaries rather than promising private religious access",
    ],
    arrival:
      "Lhasa Gonggar Airport uses code LXA; Lhasa railway station has a different city transfer. Confirm the actual ticket, authorization and onward meeting process with the responsible operator before travel. Include luggage, the final hotel approach and a quiet first evening. A flight can create a rapid change in sleeping elevation, while a train has its own profile and should not be sold as guaranteed acclimatization. Do not anchor a demanding site reservation to an uncertain arrival connection.",
    gettingAround:
      "Use planned transfers between separate city sites with selected manageable walks. A vehicle cannot remove palace stairs, temple thresholds or the final pedestrian approach. Agree where the guide and car can meet, how long the walking section lasts and where there is seating or a toilet. Higher monastery or lake outings require their own road and health review, current authorization and conditions; they are not merely longer versions of a city transfer.",
    stayStrategy:
      "Start with one Lhasa base for a four- or five-night city stay, then adjust the route to the guest and actual reservations. Prioritize quiet, lifts where needed, bathroom, heating or cooling, breakfast and pickup. A premium should improve the day rather than make it harder to use the room between visits. An onward overnight must be judged by actual elevation, services and suitability rather than a scenic name or presumed benefit after several city nights.",
    firstTimerNote:
      "Lhasa rewards attention more than speed. A clear account of a building, its religious setting and its place in the city can be enough for a meaningful day, especially when altitude changes ordinary effort. Tell the planner which places matter most and which physical demands are unacceptable. The program should remain useful if a demanding visit or higher extension needs to change.",
    faqs: [
      {
        question: "Do I need more than a China visa to visit Lhasa?",
        answer:
          "Foreign passport holders generally need organized Tibet travel arrangements and a Tibet Travel Permit as well as valid China entry permission. Confirm the requirements for your actual documents, dates and route with the responsible parties. Visa exemption or a hotel booking should not be assumed to replace Tibet authorization.",
      },
      {
        question: "How many nights should I spend in Lhasa?",
        answer:
          "Four or five nights can support a considered city stay with a lighter arrival and distinct full-day subjects. The suitable duration depends on ascent, health and access; no fixed number guarantees acclimatization. A shorter visit leaves less room to change demanding visits if the guest is uncomfortable.",
      },
      {
        question: "How high is Lhasa, and is a luxury hotel enough for altitude concerns?",
        answer:
          "The city is roughly 3,650 meters above sea level. A comfortable room or oxygen service does not establish medical suitability or prevent all altitude illness. Discuss the actual ascent and sleeping elevations with a qualified clinician, retain flexibility and seek qualified assessment if symptoms develop rather than pushing through the itinerary.",
      },
      {
        question: "Does taking the train to Lhasa guarantee acclimatization?",
        answer:
          "No. A rail journey has its own altitude profile and does not guarantee the body's response. Review the complete route and personal health with a qualified clinician. The train ticket also does not replace the travel arrangements and authorization applicable to the guest.",
      },
      {
        question: "Is the Potala Palace suitable if I cannot manage many stairs?",
        answer:
          "The authorized interior visit involves substantial climbing and standing. Confirm the actual route and individual ability before making it essential. An exterior view or another historical subject can be worthwhile but is different. A private guide cannot make the interior route step-free or remove controlled access.",
      },
      {
        question: "Do Potala, Jokhang and Norbulingka use one UNESCO ticket?",
        answer:
          "No. Their shared World Heritage ensemble does not create one visitor ticket or a single compact route. They have separate locations, arrangements and demands. Confirm each intended visit and select a sequence suited to the guest rather than assuming all fit comfortably in one day.",
      },
      {
        question: "Can I count on seeing monks debate at Sera?",
        answer:
          "Do not treat a particular religious activity as guaranteed. Confirm current visitor arrangements and what can appropriately be observed. A monastery visit, observation, participation and a private meeting are different matters, and photography or access rules must be respected.",
      },
      {
        question: "Can I add Namtso or Everest to a short Lhasa city stay?",
        answer:
          "Treat either as a separate route decision with actual roads, elevations, nights, current conditions and required arrangements reviewed. They are not automatic city-day extras. A comfortable Lhasa visit does not establish suitability or access for every higher lake, pass or border-area route.",
      },
      {
        question: "Is Nyingchi a lower-altitude alternative to Lhasa?",
        answer:
          "Some Nyingchi bases, including Bayi, are lower than Lhasa, but still at substantial altitude, and roads or outings can rise higher. Choose actual sleeping locations and the complete ascent profile. A lower starting point may be a planning option, not a medical guarantee or a substitute for Tibet arrangements.",
      },
    ],
    culturalStory: {
      title: "Explain the place without turning religious life into an attraction",
      paragraphs: [
        "Lhasa's major places connect architecture, political history, religious practice and the changing life of a city. A guide can help a guest distinguish those layers without assuming every visitor already understands Buddhist terms. A few explained details, a clear sense of a building's role and enough time to look can matter more than another interior. The Potala, Jokhang and Norbulingka share a heritage designation while telling different stories.",
        "The city is also a place of worship and ordinary life. A pilgrim route is not a performance, a temple threshold is not an invitation to every interior and a photograph should respect the people and rules involved. Choose public or explicitly arranged access and describe the experience accurately. Depth comes from interpretation and appropriate attention, not from promising private ceremonies, religious participation or exclusive meetings that have not been agreed.",
      ],
    },
    foodStory: {
      title: "Make the meal comfortable, specific and well timed",
      paragraphs: [
        "A Lhasa meal can introduce suitable Tibetan dishes such as momos, noodle soup or tsampa with a clear explanation of ingredients and preparation. Butter tea can be an optional cultural subject rather than a compulsory taste, and the particular meat or dairy should be identified rather than assumed. A simpler meal and a comfortable seated pause can serve an altitude-aware day better than an ambitious tasting schedule.",
        "Clarify wheat, dairy, meat broth, nuts and shared preparation for dietary requirements. Tsampa is commonly associated with roasted barley, which matters to guests avoiding gluten; a meat-free appearance does not establish a vegetarian stock. Ask for portions and alternatives that suit appetite, with non-alcoholic choices readily available. A high-end program should protect meals and rest rather than use every break for another shop or required tasting.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle in without an exertion target",
        description:
          "Complete the agreed arrival and hotel transfer, keep the meal simple and leave the day light. Review the guest's condition and confirmed arrangements before setting the next visit. A scheduled checklist should not override symptoms or qualified medical advice.",
      },
      {
        day: "Full day 1",
        title: "A manageable city introduction",
        description:
          "Choose a suitable lighter cultural subject and selected public walking when appropriate, with seating and rest. Explain the religious setting and visitor practices. Do not use this day to prove readiness for every palace stair or a higher road.",
      },
      {
        day: "Full day 2",
        title: "An essential reserved visit, if suitable",
        description:
          "Use the confirmed Potala or another major visit only when the actual guest and arrangements fit, with physical demands and controlled access clear. Retain a substantive alternative and an unhurried meal rather than promising every interior in a fixed sequence.",
      },
      {
        day: "Full day 3",
        title: "A distinct historical or religious subject",
        description:
          "Consider Norbulingka, a selected monastery or a collection according to interest, access and condition. A fifth night can add another well-chosen subject or more flexibility. A higher lake or pass is a separate route review, not an automatic final-day upgrade.",
      },
      {
        day: "Departure or separately reviewed extension",
        title: "Continue with the full route and elevation considered",
        description:
          "Allow the actual airport or station transfer, or begin a separately planned regional chapter with its own nights and required arrangements. This four-night framework is illustrative, not a published product, medical clearance or guarantee of religious access or permit approval.",
      },
    ],
  },
};
