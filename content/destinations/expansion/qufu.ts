import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/qufu.svg",
  alt: "Original Qufu planning schematic separating the Confucius temple, mansion and cemetery from the museum and Nishan, with old-city and countryside hotel choices; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const qufuGuide: ExpandedDestination = {
  id: "qufu",
  name: "Qufu",
  region: "east",
  kicker: "Understand the places behind a world-changing tradition",
  description:
    "Explore Qufu through the distinct purposes of its Confucius temple, Kong family mansion and cemetery, with meaningful museum choices and a comfortable pace.",
  stay: "2 nights; 1 for a focused introduction or 3 for a separate interest",
  bestFor: "Confucian history, ceremonial architecture and a thoughtful Shandong cultural stay",
  interests: ["heritage", "city", "food"],
  relatedDestinationIds: ["taian", "jinan", "qingdao", "beijing"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Qufu Travel Guide: Confucius Sites, Hotels & Itinerary",
    seoTitle: "Qufu Travel Guide: Confucius Sites & Where to Stay",
    seoDescription:
      "Plan Qufu's Confucius temple, mansion and cemetery, compare the museum and Nishan, and choose 1–3 nights with practical hotel and Qufu East transfer advice.",
    answer:
      "Qufu (曲阜) is a county-level city within Jining, Shandong, closely associated with Confucius and the Kong family. Its main historic visit is the Three Kong sites / San Kong: the Temple of Confucius, Kong Family Mansion and Cemetery of Confucius. Together they form the UNESCO-listed Temple and Cemetery of Confucius and the Kong Family Mansion in Qufu; they are not three interchangeable temples. Two nights give one full day to understand their different purposes at a measured pace. The Confucius Museum and the Nishan area are separate choices requiring their own time and transport. Qufu is most rewarding when a guide connects buildings, family institutions and ideas, rather than presents a sequence of courtyards without explaining why they matter.",
    stayAnswer:
      "One night can support a selective introduction if arrival and departure leave useful time, usually with the temple and mansion as the main focus. Two nights give a full day and room to choose how much of the cemetery and another interest genuinely suits the guest. Three nights allow a separately planned museum or Nishan chapter, more interpretation or a slower hotel stay. Do not count every outlying site as another quick stop between trains. If Qufu is only a day visit, prioritize the main subjects and the complete return journey instead of promising all historic sites, the museum and an evening program in one day.",
    hotelAnswer:
      "Compare an old-city or old-city-edge property with a modern Qufu hotel using the actual room and route to the temple and mansion. A nearby base can support evening meals and easier local starts; a larger modern property may offer different room comfort and facilities. A Nishan-area hotel belongs to a separate countryside or event-led brief and should not be presented as a convenient walking base for the Three Kong sites. Check quiet, bathroom, temperature control, lift, breakfast and road pickup. A Qufu East station hotel may serve an early departure but can cost the local time you wanted from the stay.",
    sightseeingQuestion: "How should I choose between Qufu's Confucius sites, museum and Nishan?",
    sightseeingAnswer:
      "Begin with the historic temple and mansion if this is your first visit: one explains commemoration and ceremony, the other the later Kong family's institutional and domestic world. Add the cemetery for its different landscape and lineage context when the walking and time suit the group. The Confucius Museum can provide collections and interpretation in a separate modern museum setting; verify the current venue, displays and reservations. Nishan adds a different outlying landscape and visitor setting, including contemporary cultural-tourism facilities. Choose it for the actual subject or program, not as a substitute name for the old-city temple or a guarantee of an ancient ritual.",
    visitorResources: [
      {
        label: "UNESCO: Temple and Cemetery of Confucius and the Kong Family Mansion in Qufu",
        href: "https://whc.unesco.org/en/list/704/",
        scope:
          "Reference for the World Heritage property's identity, history and component purposes. The designation does not cover every modern Confucius-themed attraction or establish current admission, open halls, ceremonies or private access.",
      },
      {
        label: "Qufu municipal government",
        href: "https://www.qufu.gov.cn/",
        scope:
          "Local administrative, cultural and visitor background, mainly in Chinese. Check current responsible operators for ticket scope, site access, museum booking, events and transport. General city information is not confirmation of a particular host, room or performance.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and exact station names. Qufu East railway station requires an onward road transfer; it is not the old-city temple entrance. Compare the actual train, both hotel transfers and luggage before choosing a day visit.",
      },
    ],
    serviceScope:
      "A proposal should name the historic sites and route, actual admissions, guide language, hotel and room, complete station transfers and meal arrangements. A strong guide should distinguish Confucius's historical context from the later institutions and buildings visible today, explaining unfamiliar terms without assuming previous study. Confirm any ceremony, performance, calligraphy class or specialist meeting separately by date, language, provider and real content. A public show is not a private scholarly encounter. Private guiding does not provide entry to closed halls, unrestricted photography or access to private family or religious activity. Any costume or staged ritual should be described as the actual contemporary visitor activity.",
    routeAdvice:
      "Use Qufu as a cultural stay within a Shandong route, with Jinan adding spring-fed city life and provincial collections, or Qingdao adding a distinct coastal and architectural chapter. Beijing can provide a different capital-history context with the actual rail and station transfers planned. Tell us whether your priority is architecture, ideas, family learning, photography or a slower stay, along with dates and walking needs. No matching published Qufu itinerary is listed here. A Beijing or other Shandong product does not automatically contain Qufu, its tickets, local guiding or a hotel night. A tailored route should give the place enough explanation and time to earn the detour.",
    practicalPlanning: {
      timing:
        "Give the main historic visit a clear block of usable time rather than place it between uncertain transfers. The temple, mansion and cemetery have their own operating and entry arrangements; the museum and any ceremony or show need separate checks. Morning or afternoon timing should reflect the actual opening, temperature and the group's pace. A staged opening ceremony, where operating, can attract visitors and change the start rather than provide a private quiet moment. Leave time for a seated meal and the full station journey, especially if departing for another city the same day.",
      walking:
        "Expect extensive courtyards, thresholds, paving and some steps even when the route looks compact. The cemetery is a separate landscape visit with distances and any currently permitted internal transport to assess. Ask about seating, toilets and a shortened route before booking for limited mobility. A private vehicle cannot drive through every courtyard or remove thresholds. In summer, shade, water and indoor breaks matter; in cold or wet conditions, the same long outdoor visit can feel more demanding. Select a coherent route rather than expect every guest to complete every area.",
      cost: "Compare exact site admissions and guide duration, full station transfers, vehicle waiting and the actual room. State whether the cemetery, museum, Nishan journey or an event is included or optional. A specialist conversation, workshop or performance requires its own identified arrangement. Premium value should be evident in clear English interpretation, pace, comfortable meals, a suitable room and helpful preparation, not an unverified promise of exclusive ceremony access. Exact ticket packages, schedules and prices need a dated proposal rather than assumptions from an older guide.",
    },
    attractions: [
      "Temple of Confucius / Kong Miao for ceremonial space and the history of commemoration",
      "Kong Family Mansion / Kong Fu for institutional and domestic context",
      "Cemetery of Confucius / Kong Lin as a separate lineage and landscape visit",
      "Confucius Museum for current collections and a modern interpretive setting",
      "An old-city walk and a proper meal that leave time to discuss what you have seen",
      "Nishan as a separately planned landscape, historic-context or contemporary-program choice",
      "Jinan, Qingdao or Beijing as distinct onward chapters",
    ],
    stays: [
      {
        label: "1 night / a focused historic introduction",
        advice:
          "Choose the temple and mansion as the main commitments, with the cemetery only when the complete day and walking suit. Favorable train times matter. A late arrival and an early departure do not create a full Qufu day simply because a hotel night is booked.",
      },
      {
        label: "2 nights / one full day with time to understand",
        advice:
          "Use the complete day for the distinct historic sites, breaks and a meal rather than a rushed collection of names. Keep arrival or departure time for an old-city interest or rest. Decide how much cemetery walking adds value instead of treating a broad ticket as a requirement to see everything.",
      },
      {
        label: "3 nights / add a different chapter",
        advice:
          "Consider the museum, a properly planned Nishan outing, deeper interpretation or a deliberately slower stay. Choose a confirmed program for its actual content and language. Do not fill the extra night with an unverified scholar meeting or add several distant activities without a workable route.",
      },
    ],
    hotelAreas: [
      {
        name: "Old city or immediate edge / a historic-sites base",
        advice:
          "Plot the real walk or drive to the temple and mansion, meal choices and vehicle pickup. A convenient address can make the evening and morning easier, but room quiet, bathroom, lift and heating or cooling still need to fit. Historic styling alone does not establish a heritage building or high service standard.",
      },
      {
        name: "Modern Qufu city hotel / facilities and road access",
        advice:
          "Compare the actual room, bed, breakfast and wanted facilities, then include the trip to the old city. A larger room or more straightforward luggage access can be worth the extra transfer. Check operating facilities and actual dining options rather than infer them from a premium label.",
      },
      {
        name: "Nishan area / a separate property or program-led stay",
        advice:
          "Choose it for the specific setting, room or confirmed activity. Establish the complete journey to the old-city sites and the timing of meals and any evening return. A countryside resort address is not an interchangeable substitute for a temple-side city base.",
      },
      {
        name: "Qufu East station area / only when the gateway justifies it",
        advice:
          "An actual early train can justify a transport-focused night, but compare the cost in old-city time and dining choice. Confirm the precise station and transfer. A high-speed rail address does not mean the main historic sites are a short walk away.",
      },
    ],
    tradeoffs: [
      {
        title: "The Three Kong sites answer three different questions",
        advice:
          "The temple concerns commemoration and ceremony, the mansion the later family's institutional and domestic role, and the cemetery lineage and remembrance within a different landscape. Explaining those differences can make the visit coherent. Simply entering three sites without interpretation does not necessarily deepen understanding.",
      },
      {
        title: "Confucius's lifetime and the buildings visible today are different periods",
        advice:
          "The sites reflect centuries of change, rebuilding and patronage after Confucius. Ask which part of the story belongs to the historical figure and which to later institutions and fabric. A precise explanation is more valuable than calling every hall his original school or home.",
      },
      {
        title: "A museum and a temple are complementary rather than substitutes",
        advice:
          "The museum can help explain objects and broader ideas, while the historic sites reveal ceremonial and institutional space. Check current displays and booking rather than promise a named object. If time is short, choose the subject that best serves the guest instead of rushing through both with no context.",
      },
      {
        title: "Nishan needs an honest brief",
        advice:
          "The area combines associations with Confucius, landscape and contemporary cultural-tourism development. Name the actual site, property or program proposed. A modern performance, architectural complex or statue should not be presented as a surviving setting from Confucius's lifetime. Travel time and any evening program belong in a separate day plan.",
      },
      {
        title: "Family learning works best with a few useful ideas",
        advice:
          "For children or guests new to the subject, begin with a small number of understandable questions about learning, family, ceremony and responsibility. Use the actual spaces to make them concrete, with breaks and room for questions. A dense list of names and dates can make even a well-chosen visit hard to follow.",
      },
      {
        title: "A ceremony or specialist encounter must be described by its real format",
        advice:
          "Confirm whether the activity is a public scheduled performance, a group lesson or a separately arranged conversation, including language and duration. Do not turn a general cultural reputation into a promised meeting with a scholar or family descendant. The visit can be valuable with a well-prepared guide and no special access.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "taian",
        advice:
          "Tai'an and Mount Tai add a distinct sacred-mountain landscape and imperial-history subject. Give the actual mountain route its own time, including remaining steps after any bus or cable assistance and a workable descent. A long ascent and all Qufu's Three Kong sites should not be compressed into a supposedly relaxed combined day.",
      },
      {
        slug: "jinan",
        advice:
          "Jinan adds spring-fed urban landscapes and provincial collections to Qufu's Confucian focus. Choose the actual rail stations and full hotel transfers, leaving time for both subjects. A connection through Jinan does not by itself create a useful city visit.",
      },
      {
        slug: "qingdao",
        advice:
          "Qingdao changes the setting to coastal city walks and architectural history. Give it its own accommodation and usable days rather than make it another quick Shandong stop. Compare dated rail services and the complete station journeys before fixing the sequence.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing provides a contrasting capital-history chapter and major transport gateways. Confirm the actual Qufu and Beijing stations, both final transfers and the time left for sightseeing. A short rail segment does not establish that an excursion fits comfortably between flights or city commitments.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit long courtyard and cemetery walks, with rain, variable temperatures and busy holiday periods still possible. Summer can be hot, so shorter outdoor blocks, water and indoor breaks matter. Winter brings cold outdoor spaces and a need for suitable clothing and room heating. A particular ceremony or festival needs its own dated check and may change visitor numbers. Choose the overall itinerary and walking comfort rather than guarantee seasonal foliage or a quiet ceremonial moment.",
    orientation:
      "Qufu is a county-level city within Jining, Shandong. The temple and mansion form a close historic-city pairing, while the cemetery is a separate visit. The Confucius Museum, Nishan area and Qufu East railway station are different places requiring their own transport. San Kong / Three Kong sites means Kong Miao, Kong Fu and Kong Lin, not three names for one temple. Use full Chinese site, hotel and station names when confirming the route.",
    experiences: [
      "Understand the temple, mansion and cemetery through their distinct ceremonial, family and lineage roles",
      "Use a few clear ideas and actual spaces to make Confucian history accessible to the group",
      "Choose a museum or Nishan chapter only when its real subject adds value to the stay",
    ],
    planningNotes: [
      "Separate the historic city, cemetery, museum, Nishan and Qufu East station in the transport plan",
      "Choose interpretation and walking scope before trying to complete every site",
      "Verify any ceremony, class or specialist meeting by its actual format and language",
    ],
    arrival:
      "Check the exact booked rail station and a complete transfer to the chosen hotel or first site. Qufu East is not the historic center, and a broad Jining gateway is another planning choice again. Compare the full journey from the actual Jinan, Qingdao or Beijing base, including luggage and both local transfers. Keep timed entry, a ceremony or an onward flight away from an uncertain arrival. For a short stay, train times that preserve usable daylight can matter more than the smallest headline journey time.",
    gettingAround:
      "Use a coherent walking route within the chosen historic sites and arranged road transport for the cemetery, museum, Nishan or station as required. Confirm where the vehicle can stop; it cannot remove courtyard walking or every threshold. The cemetery needs its own assessment of distances and current internal transport. Keep a clear meeting point and a shorter option for guests who tire, so the day can adapt without losing the meal or return transfer.",
    stayStrategy:
      "Two nights often create a more useful cultural stay than a rushed stop between trains, but the actual arrival and departure times matter. Choose an old-city base for the historic focus or a modern property for its real comfort and facilities. A Nishan stay should be intentional, with the city transfer and program understood. Premium accommodation supports the visit through sleep, warmth, bathroom, meals and service; a Confucian theme is not a substitute for those basics.",
    firstTimerNote:
      "You do not need prior study to enjoy Qufu. Ask for clear explanations of a few useful ideas, then connect them to courtyards, halls, household institutions and remembrance. Let questions guide the pace instead of trying to memorize every building. The historic sites, museum and contemporary programs offer different experiences, so choose consciously rather than assume anything carrying Confucius's name is the same kind of visit.",
    faqs: [
      {
        question: "Where is Qufu, and why is it worth visiting?",
        answer:
          "Qufu is within Jining in Shandong. Its temple, Kong family mansion and cemetery help explain the commemoration of Confucius and later family institutions through real places. It suits travelers who want cultural interpretation and architecture rather than an unexplained sequence of halls.",
      },
      {
        question: "What are the Three Kong sites in Qufu?",
        answer:
          "They are the Temple of Confucius / Kong Miao, Kong Family Mansion / Kong Fu and Cemetery of Confucius / Kong Lin. Their purposes and layouts differ. The temple and mansion form a historic-city pairing, while the cemetery is a separate landscape visit with its own time and walking needs.",
      },
      {
        question: "Are Qufu's Confucius sites UNESCO World Heritage?",
        answer:
          "The Temple and Cemetery of Confucius and the Kong Family Mansion in Qufu form a UNESCO-listed property. That does not make every modern Confucius-themed attraction, museum program or hotel part of the same property. Current access, open halls and ticket scope must be checked separately.",
      },
      {
        question: "How many nights should I spend in Qufu?",
        answer:
          "Two nights give one full day between transfers for a measured historic introduction. One night can work with useful arrival and departure times. Three support a separate museum or Nishan chapter, more explanation or a slower stay. Do not add nights simply to complete every themed attraction.",
      },
      {
        question: "Can I visit Qufu on a day trip from Jinan?",
        answer:
          "It can work with dated trains, both station transfers and a selective route. Prioritize the main subjects and a proper meal; the historic sites, museum, Nishan and an evening event should not all be assumed to fit. Compare the full day from your actual Jinan hotel.",
      },
      {
        question: "Is Qufu East station near the Confucius temple?",
        answer:
          "Treat Qufu East as a separate gateway requiring a road transfer, not an arrival inside the historic site. Use the actual train, pickup and hotel or temple entrance to plan the journey. A station-area room may suit an early departure but is a different base from the old city.",
      },
      {
        question: "Should I visit the Confucius Museum as well as the historic sites?",
        answer:
          "Choose it when current collections and interpretation add something to the guest's interests. The museum is a separate modern venue with its own booking and transfer. A temple visit explains spatial and ceremonial context; a museum provides a different encounter with objects and ideas. Limited time may call for one clear priority.",
      },
      {
        question: "Is Nishan part of the old-city Confucius temple visit?",
        answer:
          "No. Nishan is an outlying area requiring its own route and time. Specify the actual historic-context site, contemporary cultural-tourism development, property or program intended. Do not present a modern performance or monumental complex as a surviving setting from Confucius's lifetime.",
      },
      {
        question: "Is Qufu suitable for children or limited mobility?",
        answer:
          "Plan each case individually. Children can benefit from a few clear ideas, shorter blocks and breaks rather than a dense lecture. Limited mobility requires assessment of courtyard distances, steps, thresholds, toilets and the cemetery route. A private vehicle cannot remove all walking inside the historic sites.",
      },
      {
        question: "Can you arrange a private Confucian ceremony or scholar meeting?",
        answer:
          "Any such request needs a genuinely identified provider, willing participants and confirmed date, format, language and access. A public ceremony, staged show, lesson and specialist conversation are different activities. No private ceremony or scholar meeting is promised by this destination guide.",
      },
    ],
    culturalStory: {
      title: "Three places reveal how an intellectual legacy became an institution",
      paragraphs: [
        "The temple makes commemoration visible through ordered spaces, gateways and ceremonial halls. The mansion shifts attention toward the later family's institutional role and domestic setting. The cemetery introduces lineage and remembrance in a different landscape. Reading them together helps explain why Qufu became more than the place associated with a historical teacher. It also prevents a guide from describing every courtyard as if it served the same purpose.",
        "Keep the different periods clear. Confucius's lifetime, later patronage, the buildings visible today and current visitor practice are separate layers. A good explanation can connect them without suggesting every hall is an original classroom or every staged activity an unbroken ancient ritual. For a first visit, a few clear questions about learning, family and ceremony are often more memorable than a long list of dates. Leave room for guests to ask how those ideas have been interpreted differently over time.",
      ],
    },
    foodStory: {
      title: "Choose a good Shandong meal before choosing a ceremonial dining label",
      paragraphs: [
        "A comfortable meal gives time to discuss the visit and rest after the courtyards. Ask the actual kitchen for a balanced selection of Shandong dishes suited to the group, with portions, flavors and serving style explained. A restaurant advertising Kong family cuisine may offer an elaborate menu or presentation; compare the real dishes, setting and time required. It should not be assumed to recreate a documented historical banquet or provide access to a private family tradition.",
        "Check meat stock, pork, seafood, wheat, soy, nuts and shared equipment where dietary needs matter. Vegetable or tofu dishes may still include animal ingredients. Serious allergies require a kitchen that can explain its preparation and offer a workable alternative. Guests who prefer a simpler meal should not have to accept a lengthy themed banquet. Any cooking class, food demonstration or hosted dinner needs its own confirmed provider and scope, with retail purchases optional.",
      ],
    },
    itinerary: [
      {
        day: "Arrival afternoon",
        title: "Reach the real base and introduce the questions",
        description:
          "Complete the station transfer, settle into the chosen room and take a manageable old-city introduction if time permits. Use dinner or a short briefing to explain the three historic sites and the guest's interests. Keep final-entry visits away from uncertain arrival.",
      },
      {
        day: "Full-day morning",
        title: "Read the temple and mansion as different institutions",
        description:
          "Visit the selected open routes with clear explanation of ceremonial and family roles, visible buildings and later changes. Allow breaks and questions rather than turn the morning into a race through every hall. Any public ceremony is separately checked, not a guaranteed private inclusion.",
      },
      {
        day: "Afternoon",
        title: "Add the cemetery when it suits the group",
        description:
          "Take a seated lunch, then choose the cemetery route for its distinct lineage and landscape context when time and walking suit. Keep a shorter alternative for guests who prefer it. Do not append the museum and Nishan simply because they are all associated with Confucius.",
      },
      {
        day: "Departure or optional extra day",
        title: "Choose a different chapter rather than more of the same",
        description:
          "With a third night, plan the museum or a specific Nishan interest separately. Otherwise allow breakfast and the full onward station journey to Jinan, Qingdao or Beijing. This two-to-three-night outline is illustrative, not a published package or a guarantee of ceremonies, private scholars, open halls or room availability.",
      },
    ],
  },
};
