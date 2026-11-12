import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/langmusi.svg",
  alt: "Original Langmusi planning schematic distinguishing Gansu-side Sertri Monastery, Sichuan-side Kirti or Ge'erdi Monastery, a separately assessed valley walk and actual town accommodation; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const langmusiGuide: ExpandedDestination = {
  id: "langmusi",
  name: "Langmusi",
  region: "northwest",
  kicker: "Two monastery settings, one carefully chosen local stay",
  description:
    "Understand Langmusi across its Gansu–Sichuan boundary, with clear Sertri and Kirti monastery choices, valley-walking decisions and realistic hotel expectations.",
  stay: "2 local nights for a focused full day; 3 for a distinct second interest",
  bestFor:
    "Specific monastery interpretation, town-and-valley walks and selective Gansu–Sichuan routes",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["gannan", "xiahe", "zoige", "songpan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Langmusi Travel Guide: Monasteries, Walks & Hotels",
    seoTitle: "Langmusi Guide: Monasteries & Where to Stay",
    seoDescription:
      "Plan Langmusi with Sertri and Kirti / Ge'erdi monastery choices, a suitable valley walk, two-night hotel advice, altitude and Gansu–Sichuan routes.",
    answer:
      "Langmusi offers a town-and-monastery stay on the Gansu–Sichuan boundary, around 3,300 meters high. Choose between Sertri Monastery on the Gansu side and Kirti, also called Ge'erdi, on the Sichuan side, or allow time for both. Two local nights give one focused day without crowding a long arrival drive. Match the room and any valley walk to the wider ascent plan. The provincial boundary here is distinct from entry into the Tibet Autonomous Region.",
    stayAnswer:
      "Two nights give one full day for a considered monastery-led visit and an appropriate contrasting interest. Three nights can support a separately assessed valley walk or another distinct subject, with more flexibility for weather and rest. One night is a selective road stop: useful time depends on the real arrival and departure, not the number of names printed in the itinerary. Count Xiahe, Zoige and gateway nights separately. Additional nights create time but do not guarantee acclimatization, site access or private cultural encounters.",
    hotelAnswer:
      "Choose the exact town property and full Chinese address, including which side of the provincial boundary it occupies. Compare the booked room's quiet, heating, hot water, bathroom, stairs, breakfast and vehicle access before monastery proximity or decorative style. Nearby restaurants and a practical pickup can matter after a long road day. A monastery-view photograph does not prove the view from your category, and a high price does not establish international resort service. For an outlying lodge or camp, assess actual facilities, dinner, road access and sleeping elevation as a separate decision.",
    sightseeingQuestion: "Should I visit Sertri, Kirti / Ge'erdi or a nearby valley?",
    sightseeingAnswer:
      "Choose by the subject and actual visitor arrangement, rather than treating the two monastery names as interchangeable. Sertri offers the Gansu-side institutional setting; Kirti / Ge'erdi is a distinct Sichuan-side institution with its own surroundings and rules. A permitted valley walk, sometimes described in travel material as Namo Gorge, is another route and effort decision. If visiting both institutions, ask what different history and visible features the guide will explain. One well-interpreted visit with time to observe can be more rewarding than rushing two interiors and an unassessed walk.",
    visitorResources: [
      {
        label: "Gannan prefecture government",
        href: "https://www.gnzrmzf.gov.cn/",
        scope:
          "Official regional context and dated notices for the Gansu side, mainly in Chinese. Confirm actual Luqu roads, monastery visitor arrangements and properties with the responsible local parties. Gannan information alone does not establish the Sichuan-side route or entry to every religious space.",
      },
      {
        label: "Aba prefecture government",
        href: "https://www.abazhou.gov.cn/",
        scope:
          "Official context and public notices for Aba / Ngawa, including Zoige on the Sichuan side. Check the exact site, current path conditions, traveler arrangements and accommodation separately. A prefectural tourism overview does not supply a booking, private host or permission beyond public visitor routes.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel and altitude illness",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General guidance on ascent and altitude illness, not personal clearance. Review all sleeping elevations and higher road or walking points with an appropriately qualified clinician where needed. A town walk, private car, good fitness or oxygen-equipped room does not make the complete itinerary suitable for everyone.",
      },
    ],
    serviceScope:
      "A useful proposal identifies the exact monastery or monasteries, permitted visitor routes, private guide and any institution-arranged interpretation, room category, complete road days, meals and actual walking plan. Establish current local access and check-in arrangements for the actual travelers and dates. Private teaching, ceremonies, family hospitality, riding, longer hiking and drone use require their own appropriate confirmation where available. Paying for a guide does not open restricted halls or private life. Funerary activity is not offered as visitor entertainment, and no specific ritual or religious encounter is promised.",
    routeAdvice:
      "Langmusi can connect a focused Xiahe monastery stay with a separate Zoige landscape chapter, while Songpan offers another town and gateway option. Share your dates, actual gateways, available nights, cultural interests, walking needs and room expectations for a tailored route. We can assess whether both monasteries and a valley walk add value, then allow time for the roads and the complete sleeping-elevation profile. The illustrative local outline helps frame that discussion; final services require a specific proposal.",
    practicalPlanning: {
      timing:
        "Keep a substantial road arrival modest, then plan the full local day around current religious visitor arrangements, meals and guest energy. A festival or religious calendar can change demand and access without supplying a guaranteed performance. Leave the order flexible if weather or an interior visit changes. A valley outing needs its actual turnaround and return time; do not attach it casually before a long onward drive. Use the whole departure journey when judging a flight or train connection.",
      walking:
        "Monastery routes can involve slopes, thresholds, steps and standing at roughly 3,300 meters. Check each actual visitor route and the final walk from the vehicle. A valley path can add uneven ground, stones, mud, stream-related obstacles or exposed sections, depending on the chosen route and current conditions. Establish length, climbing, footwear, guide support, toilets and a shorter option after assessment. An easy-looking photograph does not establish the whole path, and less walking does not remove the altitude exposure.",
      cost: "Compare the precise room, heating and meals; complete vehicle days; guide language and hours; each named admission; and any institution-led interpretation. A second monastery visit should add understanding rather than duplicate a generic commentary. Longer walking, riding or a named host requires its own confirmed service basis. Clarify changes if a site or route is unavailable. Premium value should appear in comfort, explanation and useful time, not an unsubstantiated exclusive-access or luxury-lodge claim.",
    },
    attractions: [
      "Sertri Monastery on the Gansu side, with the actual current visitor route identified",
      "Kirti / Ge'erdi Monastery on the Sichuan side as a distinct institution",
      "A selected town-and-river walk that respects private property and worship",
      "A suitable Namo Gorge or other named valley route only after current conditions and effort are assessed",
      "Lawful landscape viewpoints chosen for safe access and the actual light",
      "A separately confirmed specialist cultural subject, without a promise of rituals or private teaching",
    ],
    stays: [
      {
        label: "1 night / a selective road stop",
        advice:
          "Choose a focused visit when the actual arrival and onward journey leave useful hours. A late room arrival and early departure do not supply an in-depth two-monastery day. Keep meals and rest reliable and do not make an essential interior visit depend on an optimistic drive.",
      },
      {
        label: "2 nights / one complete local day",
        advice:
          "Give the selected institution real interpretation time, a proper meal and a complementary town or landscape interest. Visiting both monasteries can be researched when current access and effort fit, but should not become a compulsory race. Keep the next road stage separate.",
      },
      {
        label: "3 nights / a distinct second interest",
        advice:
          "Add an assessed valley walk, photography interest or available cultural subject with a clear purpose. Use the extra flexibility for conditions and guest needs rather than fill time with unconfirmed riding or private-host promises. More nights do not guarantee acclimatization or access.",
      },
    ],
    hotelAreas: [
      {
        name: "Gansu-side town property / a named practical address",
        advice:
          "Compare the actual walk or transfer to Sertri, dinner, pickup, quiet and room warmth. Specify the complete Chinese address and booked category. Being on the Gansu side does not establish entry arrangements at the monastery or prove that the room overlooks it.",
      },
      {
        name: "Sichuan-side town property / a separate location choice",
        advice:
          "Assess the actual access to Kirti / Ge'erdi and any selected walking start, alongside bathroom, hot water, temperature control, noise and meals. Proximity is useful only when it supports the real itinerary. A provincial-side label alone says little about comfort or the visitor experience.",
      },
      {
        name: "Town-edge lodge or camp / assessed individually",
        advice:
          "Establish the room or sleeping space, heating, bathroom, power, food, staffing, traveler registration and final road. A remote-looking image is not proof of privacy, reliable services or a suitable hiking base. Choose it for a real benefit that remains worthwhile in poor visibility.",
      },
      {
        name: "Xiahe or Zoige county town / different overnight chapters",
        advice:
          "They may support a coherent wider route, but are not interchangeable with a Langmusi night. Count the entire transfer and actual local hours. A broad Gannan or grassland hotel label should not conceal a substantial drive to the institution or valley you want to visit.",
      },
    ],
    tradeoffs: [
      {
        title: "Langmusi is not the name of just one monastery",
        advice:
          "Sertri and Kirti / Ge'erdi refer to different institutions on opposite provincial sides. Use the full site name when comparing admissions, guiding and photographs. A general promise to visit Langmusi does not tell you which public areas or interiors are included, and one site's rules should not be assumed to apply to the other.",
      },
      {
        title: "Two monasteries need two clear reasons",
        advice:
          "Ask what distinct history, architecture, institutional life or visitor route each contributes. If time or energy is limited, one thoughtful visit and a contrasting local walk can provide more understanding than repeating similar stops. Neither institution owes visitors a ceremony, personal conversation or unrestricted photography.",
      },
      {
        title: "A valley walk is a separate route decision",
        advice:
          "Descriptions such as Namo Gorge can cover different lengths and stopping points in travel accounts. Identify the actual start, finish, current access, elevation and effort. A short approach does not establish the suitability of a longer hike, stream crossing or horse activity. Agree a turnaround and a worthwhile alternative before setting out.",
      },
      {
        title: "Provincial geography is not a permit guarantee",
        advice:
          "This is a Gansu–Sichuan setting outside Tibet Autonomous Region, not an international border crossing. Do not apply TAR arrangements indiscriminately, or infer that every local road and institution is open to every traveler. Check the actual documents, dates, sites and hotel with the responsible parties, including any farther continuation.",
      },
      {
        title: "The sleeping altitude applies even on a modest cultural day",
        advice:
          "The town setting is around 3,300 meters, with variation by property and higher road or walking stages possible. Review previous nights and the whole onward route. A private vehicle or oxygen provision does not establish protection from altitude illness. Seek appropriate individual advice and respond to concerning symptoms instead of pushing higher to complete the checklist.",
      },
      {
        title: "Religious and funerary practices are not entertainment",
        advice:
          "Respect worship, privacy and instructions about photography. Do not enter or approach sensitive activities to obtain a dramatic image, even if an online account presents them as a highlight. Cultural explanation can be valuable without observation of a private rite. A responsible proposal should never depend on a promised funeral or invitation that participants have not given.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "gannan",
        advice:
          "Use the Gannan regional guide to compare a selective multi-base journey with a focused local stay. Hezuo, Xiahe and Zhagana are different reasons to travel and require their own nights and roads. A regional map does not make all of them convenient Langmusi excursions.",
      },
      {
        slug: "xiahe",
        advice:
          "Xiahe adds Labrang's distinct institution and a separate town stay, often around 2,900 meters. Allow the actual road and local time, explaining why both cultural chapters are worthwhile. A night at a lower town does not guarantee readiness for Langmusi or remove the need to review the complete ascent.",
      },
      {
        slug: "zoige",
        advice:
          "Zoige / Ruoergai adds a different Sichuan landscape chapter with Huahu wetland and Tangke's Yellow River viewpoint as separate choices. Count full roads, sleeping elevations and actual visitor routes. A Langmusi visit on the county's edge does not establish a complete Zoige wetland stay.",
      },
      {
        slug: "songpan",
        advice:
          "Songpan provides an old-town contrast and possible regional rail connections after a substantial separately planned journey. Use the exact operating service, station transfer and route profile. It is not a short local airport-or-station substitute merely because both places appear in a northern Sichuan itinerary.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The warmer part of the year is a useful starting point for combining religious history with a selected valley walk, while rain and variable visibility still affect paths. Spring and autumn bring different temperatures and conditions; winter needs a distinct road, heating and service assessment. Festival periods can change room demand and visitor access, but religious activity is not a guaranteed show. Choose the specific institutions and walking route, then assess the actual dates. No season guarantees clear peaks, empty streets or access to all interiors.",
    orientation:
      "Langmusi is used as a travel name across a provincial boundary. The Gansu side belongs to Luqu County in Gannan; the Sichuan side lies in Zoige / Ruoergai County in Aba / Ngawa. Sertri and Kirti / Ge'erdi are distinct monastic institutions. A hotel, temple entrance and valley walking start can all have different addresses. Use full Chinese names and specify the site rather than rely on a regional search label or assume the entire setting has one admission and one visitor policy.",
    experiences: [
      "Understand one named monastery through the actual public and interior routes available",
      "Compare the other institution only when it adds a distinct subject and useful time",
      "Choose a suitable town or valley walk with its real route and effort assessed",
    ],
    planningNotes: [
      "Name Sertri or Kirti / Ge’erdi and the actual provincial side in the proposal",
      "Check the room, sleeping altitude and full arrival and onward road stages",
      "Keep valley hiking, riding, private teaching and household visits separately confirmed",
    ],
    arrival:
      "Start with the previous hotel or actual operating gateway service, then plan the whole road to the booked property. Lanzhou, a dated Gannan Xiahe flight or a Songpan-region rail service creates different journeys and should not be treated as arrival in Langmusi itself. Include meals, current conditions, driver arrangements and the complete ascent. Keep the first evening modest and leave essential site visits for a useful local window. Do not connect a long mountain-road return tightly to a flight using an ideal driving estimate.",
    gettingAround:
      "Confirm the actual vehicle approach, walking to the intended entrance and the route between selected interests. Being in a small town does not make every monastery path level or every valley route short. Follow institution-specific access and photography rules, respect worship and avoid private land. Agree meals, toilets, seating, footwear, pickup and a shorter option. A guide adds value through interpretation and practical judgment, not the ability to override closures or grant private access.",
    stayStrategy:
      "Two town nights protect one focused full day; three need another distinct interest or useful flexibility. Compare specific rooms on either side of the boundary by quiet, heating, bathroom, meals and access. The full address matters more than choosing a side in the abstract. A lodge or camp is a separate facilities and route decision. More nights, a premium price and room oxygen do not guarantee acclimatization or the service standard expected at an international resort.",
    firstTimerNote:
      "Ask which monastery the itinerary means, what the guide will explain and exactly where the proposed walk begins and ends. Then compare the booked room and the complete roads before and after the stay. These details make Langmusi a meaningful chapter, rather than a vague temple label placed between long driving days or a promise of cultural access that has not been arranged.",
    faqs: [
      {
        question: "Is Langmusi in Gansu or Sichuan?",
        answer:
          "The commonly used travel name spans both. Sertri is on the Gansu side in Luqu County, while Kirti / Ge'erdi is on the Sichuan side in Zoige / Ruoergai County. Use the exact monastery and hotel address. This provincial boundary is not an international border or a crossing into Tibet Autonomous Region.",
      },
      {
        question: "Are Sertri and Kirti / Ge'erdi the same monastery?",
        answer:
          "No. They are distinct institutions with different settings and visitor arrangements. A general Langmusi label does not identify which one is included. If visiting both, ask what distinct subject each contributes and confirm current public and interior access separately.",
      },
      {
        question: "How many nights should I stay in Langmusi?",
        answer:
          "Two local nights provide one focused full day between road journeys. Three can add a separately assessed valley walk or another distinct interest. One night is a selective stop whose value depends on actual arrival and departure. Count Xiahe, Zoige and gateway nights separately.",
      },
      {
        question: "Which side of Langmusi is best for accommodation?",
        answer:
          "Choose the actual property and room rather than a side in the abstract. Compare the intended monastery or walking start, quiet, heating, bathroom, meals and pickup. The full Chinese address and booked category are more informative than a general monastery-view or boutique label.",
      },
      {
        question: "Is the Namo Gorge walk easy?",
        answer:
          "That depends on the exact route and present conditions. Confirm the start, finish, terrain, climbing and turnaround, with appropriate footwear, support and a shorter alternative. A short approach or a flat photograph does not establish the difficulty of a longer valley outing or any stream-related obstacle.",
      },
      {
        question: "What is Langmusi's altitude?",
        answer:
          "The town setting is around 3,300 meters above sea level, with variation by property. Selected roads and walks may go higher. Review all sleeping nights and daytime high points with suitable individual health advice. Fitness, a car and hotel oxygen do not guarantee protection from altitude illness.",
      },
      {
        question: "Can I combine Langmusi with Xiahe and Zoige?",
        answer:
          "It can be researched as a selective Gansu–Sichuan journey with full road stages and useful nights at each base. Labrang, Langmusi's institutions and the Zoige wetland or river landscape are different subjects. Do not count the same travel day as a full sightseeing day in every place.",
      },
      {
        question: "Can foreign travelers visit Langmusi?",
        answer:
          "Confirm current eligibility, actual routes, site access and hotel check-in arrangements for the travelers and dates. Do not automatically apply Tibet Autonomous Region procedures to this Gansu–Sichuan setting, or infer universal permission from that geographical distinction. Additional or changed routes need their own review.",
      },
      {
        question: "Does a private tour include ceremonies or funerary practices?",
        answer:
          "No such inclusion should be assumed. Worship, private teaching and personal rites are different from public sightseeing and require appropriate boundaries and consent. Funerary activity is not sold as visitor entertainment. A private guide does not guarantee a ritual, private invitation or unrestricted photography.",
      },
    ],
    culturalStory: {
      title: "Let each institution keep its own identity",
      paragraphs: [
        "The first useful distinction in Langmusi is that one destination name does not describe one monastery. Sertri and Kirti / Ge'erdi deserve their own names, histories and explanations of what is visible to visitors. A good guide separates an institutional setting from the broader religious tradition and from stories repeated in travel accounts. The town and valley can also be understood through their present use, not just their appeal as a mountain backdrop.",
        "Religious places are lived institutions with boundaries. Observe quietly, ask before portraits and follow the rules of the actual hall or public space. Private instruction, a household invitation and a sensitive rite are not benefits that come automatically with a paid guide. Avoid treating people as photographic subjects without consent or funerary activity as an attraction. Respectful distance and precise explanation can create a richer understanding without privileged access.",
      ],
    },
    foodStory: {
      title: "Make town meals support the cultural and walking day",
      paragraphs: [
        "Choose a proper breakfast before walking, a realistic lunch window and a warm dinner after the road journey. Noodles, rice, vegetables and a suitable meat or tofu dish can provide practical shared choices where available. Ask the actual kitchen about its specialties, ingredients and portions rather than assume every restaurant serves one standard regional menu. An unhurried meal can also provide a useful break between two institutions with substantial standing and walking.",
        "Clarify wheat, dairy, meat stock, nuts, sauces and shared preparation where dietary needs matter. Tea and yogurt vary by preparation; a vegetable dish may contain animal ingredients. Serious allergies, halal requirements or strict diets need a confirmed venue and workable alternative, especially at an outlying property. Arrange late food and early breakfast in advance. A family-hosted meal requires a willing host and separate service agreement, not an assumption based on the town's cultural identity.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / after the separately planned road journey",
        title: "Settle into the actual town room",
        description:
          "Allow the full drive, meals, current conditions and final approach. Keep the evening modest, check the next day's arrangements and take a short local orientation only when the actual time and guest needs support it. Xiahe or other gateway nights are separate from this outline.",
      },
      {
        day: "Full day 1 / a considered monastery-led visit",
        title: "Choose clear interpretation and useful time",
        description:
          "Visit the named institution through its permitted route, with a proper meal and rest. A second institution or modest town interest can complement the day when access and effort fit. Do not require both interiors and a long valley walk simply to complete a list.",
      },
      {
        day: "Full day 2 / for a three-night stay",
        title: "Add a distinct and assessed local subject",
        description:
          "Use a suitable valley route or another genuinely available interest with the exact start, finish, weather and support checked. A shorter alternative should remain worthwhile. No private host, horse ride, religious encounter or clear mountain view is guaranteed by the additional night.",
      },
      {
        day: "Departure / the real next road stage",
        title: "Continue with the whole route accounted for",
        description:
          "Allow the complete transfer to Xiahe, Zoige or another separately confirmed base, reviewing sleeping elevations and actual connections. This outline is illustrative, not a published package, medical plan or guarantee of hotels, access, rituals or present trail conditions.",
      },
    ],
  },
};
