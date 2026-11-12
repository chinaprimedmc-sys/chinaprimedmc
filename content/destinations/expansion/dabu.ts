import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/dabu.svg",
  alt: "Original Dabu planning schematic distinguishing Huliao, Tai'an Lou, Hua'e Lou and Baihou as separate route choices; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const dabuGuide: ExpandedDestination = {
  id: "dabu",
  name: "Dabu",
  region: "south",
  kicker: "Choose the Hakka buildings that answer your architectural questions",
  description:
    "Explore Dabu's Hakka architecture through Tai'an Lou, Hua'e Lou or Baihou, with a sensible Huliao base and clear choices between a Meizhou excursion and county nights.",
  stay: "1–2 county nights or a selective full-day excursion",
  bestFor: "Hakka residential architecture, village history and a slower eastern Guangdong route",
  interests: ["heritage", "food", "landscape"],
  relatedDestinationIds: ["meizhou", "fujian-tulou", "chaozhou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Dabu Travel Guide: Hakka Houses, Baihou & Stays",
    seoTitle: "Dabu Guide: Hakka Houses, Baihou & Stays",
    seoDescription:
      "Plan Dabu in Guangdong: Tai'an Lou vs Hua'e Lou, Baihou village interests, Huliao hotels and one- or two-night stays, with a selective Meizhou day-trip alternative.",
    answer:
      "Dabu (大埔县) is a county within Meizhou in northeastern Guangdong. It rewards a focused interest in Hakka residential architecture and settlement history rather than a drive to collect several old-building photographs. Huliao (湖寮) is the county-town reference for services and accommodation; Tai'an Lou (泰安楼), Hua'e Lou (花萼楼) and Baihou (百侯) are different visits, not one walkable cluster. Tai'an Lou and Hua'e Lou offer a useful comparison of enclosed residential forms, while Baihou calls for a selected village-and-building subject. One county night can support a selective visit with suitable roads; two give one full day. A full excursion from Meizhou is another option when the complete return and chosen sites leave time to understand them.",
    stayAnswer:
      "Choose a full excursion for one coherent subject when the actual Meizhou hotel, building entrance and return road fit. One Dabu night can preserve an evening and morning and reduce a same-day return, but arrival and departure still need usable windows. Two nights give one full day for selected architecture, a proper meal and a different local interest. A third night should serve a specific additional subject or slower pace. Do not assume that every building and village marketed under Dabu can be covered comfortably in a single day.",
    hotelAnswer:
      "Begin with a specific Huliao hotel for dependable meals, town services and the chosen roads. Compare the booked room's quiet, bathroom, hot water, temperature control, lift, breakfast and vehicle pickup. A named village property may suit a deliberate countryside stay, but needs its own assessment of dampness, food, stairs, luggage and indoor comfort. The most significant house to visit is not necessarily suitable accommodation. An ancestral hall, public residential courtyard and operating guesthouse are different spaces with different permissions and facilities.",
    sightseeingQuestion: "Should I choose Tai'an Lou, Hua'e Lou or Baihou?",
    sightseeingAnswer:
      "Choose Tai'an Lou for a focused enclosed-house visit associated with the Huliao area. Choose Hua'e Lou when its circular form and the separate Dadong-area journey justify the road. Baihou is better approached as a settlement with selected buildings and local histories, not a substitute name for either house. For a first visit, one carefully interpreted building plus a genuinely contrasting subject can be more rewarding than three rushed entrances. Match the current open route, actual roads and group mobility before deciding what fits. Upper galleries and private rooms are not guaranteed by an exterior visit.",
    visitorResources: [
      {
        label: "Meizhou municipal government",
        href: "https://www.meizhou.gov.cn/",
        scope:
          "Regional background and dated notices, mainly in Chinese. Confirm Dabu's exact house or village, current public visitor route, responsible operator and local roads separately. A municipal heritage description does not verify open upper floors, household hospitality or an operating accommodation property.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Compare dated services and exact stations with the complete onward road to the named Huliao hotel or selected building. A station using a county or regional name is not necessarily in the county town or convenient for every village. Use the ticket and Chinese addresses, not an assumed pickup location.",
      },
    ],
    serviceScope:
      "A tailored proposal should identify the actual base, room, gateway, full roads, guide language, named buildings, public visitor areas, admissions and meals. Ask what the guide can explain about the chosen layout, material, repairs and present use. Any resident conversation, household meal, ancestral research, specialist appointment or private interior needs a willing participant and its own confirmed scope. Private transport does not authorize entry to closed galleries, occupied rooms or ancestral spaces. Agree a worthwhile alternative if the essential building or host is unavailable, with purchases voluntary and any sales relationship clear.",
    routeAdvice:
      "Use Meizhou's broader guide to decide whether Dabu adds a distinct county chapter to the city, museum and Meixian-area house interests. Fujian Tulou provides a separate comparison with named clusters in another province; architectural similarities do not make the journey local or place Dabu buildings inside the Fujian World Heritage property. Chaozhou adds a different old-city, bridge and Teochew food subject. No matching published Dabu product is recommended here. Share your gateways, dates, available nights, architecture interests, walking needs and room expectations for a plan showing why each building earns its road time.",
    practicalPlanning: {
      timing:
        "Choose actual entrances and open areas before connecting them into a day. Huliao, Dadong and Baihou are distinct locations; include the complete roads, lunch, interpretation and rest. A building's public hours may differ from access to galleries or an individual household. Keep the essential visit away from uncertain arrival and do not add another village before departure without checking the full gateway transfer. A day excursion should have a clear priority and an honest limit on what it covers.",
      walking:
        "Assess the exact courtyard surfaces, thresholds, steps, low light, narrow passages and any permitted gallery access. Old stairs may be steep even when a building looks compact. Village walking needs actual start, finish, shade, toilets, seating and pickup. A vehicle cannot remove every final approach. Ask for a worthwhile ground-level route or shorter option when appropriate, and do not assume that admission includes climbing to every floor.",
      cost: "Compare complete vehicle and guide time, room, meals, admissions and the actual interpretation offered. A specialist architectural explanation and a brief exterior photo stop are different services. Identify any separate resident or host preparation, with consent and terms clear. Heritage-house accommodation requires its own room specification. A higher quote should improve depth, pacing and comfort rather than promise unrestricted private access or verified ancestry.",
    },
    attractions: [
      "Tai'an Lou / Taian Lou as a selected enclosed-residence visit",
      "Hua'e Lou / Hua'e Building in the Dadong area, with its separate road assessed",
      "A named Baihou village-and-building route rather than an undefined old-town circuit",
      "Huliao as the practical county-town base for meals and rest",
      "A selected Hakka meal with ingredients and preparation explained",
    ],
    stays: [
      {
        label: "Full excursion / one coherent architectural interest",
        advice:
          "Use when the actual Meizhou approach and return leave worthwhile time at the chosen building or village. Do not sell the excursion as complete Dabu coverage. A selective route with a proper meal can be stronger than a long checklist of house names.",
      },
      {
        label: "1 county night / useful evening and morning",
        advice:
          "Choose a dependable room and visiting windows that make the overnight valuable. A late arrival and early departure may only move the same driving burden between days. Review the exact next-stage road rather than choose a hotel solely for a heritage image.",
      },
      {
        label: "2 county nights / one full local day",
        advice:
          "Separate a principal building from a distinct village or architectural comparison when the roads and access work. Keep time for observation, questions, lunch and rest. Additional nights should deepen a real interest, not repeat similar entrances without context.",
      },
    ],
    hotelAreas: [
      {
        name: "Huliao county town / practical Dabu base",
        advice:
          "Compare exact properties for sleep, bathroom, hot water, climate control, breakfast and pickup, then the road to each selected visit. A town base can simplify food and weather-related changes without pretending to be a secluded rural retreat.",
      },
      {
        name: "A specific Baihou or other village property / setting-led choice",
        advice:
          "Use only when the actual room and service improve the stay. Check operation, booked category, food, dampness, sound, stairs, luggage and indoor seating. A historical village address does not establish a comfortable heritage hotel or invitation into neighboring homes.",
      },
      {
        name: "Meizhou urban area / a different excursion strategy",
        advice:
          "Retaining a Meizhou room can avoid another hotel move when a selective Dabu outing is comfortable. Count the full return and the time it leaves at the site. It is not interchangeable with a local county night for early or unhurried village time.",
      },
    ],
    tradeoffs: [
      {
        title: "Enclosed houses are not all the same architectural form",
        advice:
          "Tai'an Lou is commonly described through its square enclosed form, while Hua'e Lou offers a circular comparison. Look beyond the outline to entrances, courtyard, materials, circulation and the relationship between shared and household spaces. Do not infer identical construction from the word lou, which means building, or treat every Hakka residence as a weilong house.",
      },
      {
        title: "A Dabu tulou reference does not imply UNESCO status",
        advice:
          "The term tulou can be used in architectural discussion beyond the named Fujian World Heritage property. Dabu is in Guangdong. If heritage designation matters to the trip, identify the exact building and listing rather than transfer the status of Fujian Tulou to another province or every similar-looking enclosed residence.",
      },
      {
        title: "Baihou needs specific buildings and evidence",
        advice:
          "Ask which streets, houses and public spaces form the visit and what their stories explain. Family histories, education, trade and overseas connections should be tied to the selected place, not assigned to every facade. Distinguish restoration from older fabric and public viewing from occupied interiors. A village walk is not automatic access to a household or ancestral records.",
      },
      {
        title: "Choose one strong comparison before adding more roads",
        advice:
          "Two houses can be worth comparing if their plans or materials answer different questions. A building and a settlement can offer another useful contrast. Repeated entrances become less valuable when the guide has no distinct explanation or the day loses lunch and rest. The most photographed place is not necessarily the best fit for the guest's mobility or available time.",
      },
      {
        title: "Interpretation and a willing resident play different roles",
        advice:
          "A prepared guide can explain visible architecture and supported history without expecting a resident to host the visit. A personal conversation can add another perspective when agreed, but it does not authenticate every origin story or represent all Hakka families. Ask before portraits and keep private spaces and religious activity separate from public sightseeing.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "meizhou",
        advice:
          "Meizhou's city-and-region guide adds a museum introduction, weilong-house questions and a separate city or Yannanfei-area base decision. Dabu nights should have their own purpose within that wider trip. A parent-city label does not make the county's houses local to every Meizhou hotel.",
      },
      {
        slug: "fujian-tulou",
        advice:
          "A named Fujian Tulou cluster can provide a distinct architectural comparison with its own construction, public route and village stay. Check the full interregional journey and useful nights. Dabu's buildings are not automatically part of the Fujian UNESCO property, and shared terminology does not establish identical access or accommodation.",
      },
      {
        slug: "chaozhou",
        advice:
          "Chaozhou adds a separate old-city, bridge and Teochew food chapter. Compare complete roads and dated transport before combining it with Dabu. Choose the different cultural questions each place answers rather than repeat a generic old-street itinerary in both.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for researching village walks, with actual heat, rain and holiday demand checked for the dates. Wet weather can change footing, final approaches and room comfort. In hot periods, shorten outdoor blocks and keep shade, drinking water and seated pauses. Choose a dependable indoor alternative and verify the selected building's access rather than assume every rural site opens on the same schedule. A quieter month does not guarantee an empty courtyard or a resident host.",
    orientation:
      "Dabu is a county within Meizhou in northeastern Guangdong, with Huliao as the county-town reference. Tai'an Lou is associated with the Huliao area; Hua'e Lou involves a separate Dadong-area journey; Baihou has its own settlement and selected buildings. Use 泰安楼, 花萼楼 and 百侯 with the full address when matching entrances and pickup. Tai'an Lou is a building name, not a reference to Tai'an city in Shandong. Choose the building or ancestral locality that matters most before booking the base; a county-town room will not be equally convenient for every rural visit.",
    experiences: [
      "Read a selected enclosed residence through layout, material and present use",
      "Compare a second architectural or village subject only when it adds a clear difference",
      "Enjoy a focused county stay with a dependable room, thoughtful meal and useful local time",
    ],
    planningNotes: [
      "Choose exact buildings and current public areas before drawing the route",
      "Keep Huliao, Dadong and Baihou roads and accommodation decisions distinct",
      "Separate a house visit, a private invitation and a heritage-house overnight",
    ],
    arrival:
      "Compare the actual Meizhou hotel or ticketed gateway with the complete road to the named Dabu room and selected entrance. Dated trains should be checked on 12306 with the exact station location; a regional name does not place the platform in Huliao or beside a village. Send Chinese booking and entrance addresses for pickup. Protect the principal visit from uncertain arrival, and allow meals, bags and the complete departure stage before committing to another house.",
    gettingAround:
      "A planned vehicle connects the selected locations, with final courtyard and village routes on foot. Agree where guests begin, where the vehicle can wait, the finish and a shorter alternative. A driver, cultural guide and resident speaker have different roles. Avoid improvised entries to occupied homes or upper galleries. For a comparison day, the guide should explain a different question at each stop rather than repeat one Hakka narrative regardless of the building.",
    stayStrategy:
      "Choose between a selective excursion, one county night with useful travel windows and two nights for a complete local day. Huliao can be the practical base for meals and room choice; a village property needs a tangible advantage and a careful comfort check. Assess bathroom, climate control, dampness, sound, stairs, luggage and dinner. A building worth studying can remain a daytime visit while guests sleep elsewhere. High-end planning should improve interpretation, pacing and sleep rather than require a rustic stay that does not suit them.",
    firstTimerNote:
      "Ask what makes the chosen building different from the last one on the itinerary. A square-to-circular comparison, a change of material or a house-to-settlement contrast can justify another visit. If the answer is only another famous photograph, keep the day shorter and spend more time understanding the first place. Confirm the actual open route before assuming the most interesting floor can be visited.",
    faqs: [
      {
        question: "Where is Dabu, and is it the same as Meizhou city?",
        answer:
          "Dabu is a county within the wider Meizhou municipality in Guangdong. Huliao is the county-town reference. A hotel in Meizhou's urban area requires its own complete road to Dabu's selected buildings; the parent-city name does not make them one compact destination.",
      },
      {
        question: "What is the difference between Tai'an Lou and Hua'e Lou?",
        answer:
          "They are different enclosed residences in different locations. Tai'an Lou is commonly described through a square form in the Huliao area; Hua'e Lou offers a circular comparison in the Dadong area. Compare actual layout, material, current access and complete roads rather than choose from shape alone.",
      },
      {
        question: "Is Dabu part of the UNESCO Fujian Tulou property?",
        answer:
          "Do not transfer that designation to Dabu's buildings. Dabu is in Guangdong, while the named Fujian Tulou World Heritage property concerns designated examples in Fujian. Architectural terminology or visual similarity does not establish the same heritage listing.",
      },
      {
        question: "Can I visit Dabu on a day trip from Meizhou?",
        answer:
          "A selective excursion can work when the actual hotel, chosen entrance, full return and opening leave useful time. Choose a coherent subject rather than promise every house and village. Compare a county overnight if the return would make the day too rushed.",
      },
      {
        question: "How many nights should I stay in Dabu?",
        answer:
          "One county night can help a selective visit with suitable travel windows. Two give one full local day. A third needs a distinct additional interest or deliberate slower pace. A late arrival and early departure should not be presented as a complete cultural stay.",
      },
      {
        question: "Can I stay inside a historic Hakka house?",
        answer:
          "Only if a specific operating accommodation property and room meet the group's needs. Check bathroom, climate control, privacy, access, stairs, food and luggage. Admission to a significant residence does not establish that it is a guesthouse or that occupied rooms are open.",
      },
      {
        question: "Which published Dabu tour is recommended here?",
        answer:
          "No matching published product is recommended. A tailored proposal should identify the actual base, transport, guide, named buildings, public visitor areas, meals and any confirmed host. The sample outline is not a package or private-access promise.",
      },
    ],
    culturalStory: {
      title: "Architecture offers better questions than a checklist of shapes",
      paragraphs: [
        "An enclosed residence can be read from the threshold inward. How does the entrance control movement, where do people share space and how do individual rooms relate to the courtyard? Then examine material, ventilation, light, water and the changes visible in repairs. A square or circular outline offers a starting point, but cannot by itself explain the building's household history or construction. The guide should identify what can be seen and what is supported by records, with no need to assign one defensive or social explanation to every wall.",
        "A village route broadens the scale from one residence to streets, institutions and contemporary households. In Baihou or another selected place, the relevant stories might concern education, livelihoods, family histories or connections elsewhere, depending on the actual evidence. Residents are people using the place today, not a permanent visitor program. Public lanes do not open every room. Thoughtful interpretation respects those boundaries and distinguishes older fabric, reconstruction and present use without implying that restoration makes the story less worth understanding.",
      ],
    },
    foodStory: {
      title: "Use lunch to understand one preparation well",
      paragraphs: [
        "A Dabu meal can explore a particular Hakka preparation rather than repeat a whole regional menu already tasted in Meizhou. Ask the kitchen about its tofu, soup, preserved ingredients or a suitable rice-based snack. Explain the actual filling, cooking method and condiments before ordering. A familiar Hakka dish name does not imply the same recipe at every restaurant, and a balanced meal with vegetables and a staple may suit the day better than an oversized banquet before another village walk.",
        "Confirm meat and seafood fillings, stocks, soy, wheat, eggs, peanuts, sesame and shared preparation where relevant. Rice-based does not automatically mean gluten-free, and vegetables may use meat stock. Serious allergies and strict diets require the responsible kitchen's confirmed capacity and a practical alternative. Agree dinner at a village property and breakfast before a road stage. A well-timed meal and comfortable seating contribute directly to the quality of an architectural journey.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / or a selective excursion",
        title: "Choose the first visit around the real road",
        description:
          "Reach the named Huliao or other suitable base, settle bags and review current access. Tai'an Lou or another selected subject may fit when the actual window allows. An excursion should prioritize its principal interest and include the full return rather than imitate a local overnight plan.",
      },
      {
        day: "Full local day / two-night stay",
        title: "Make the second subject earn its place",
        description:
          "Use a confirmed Hua'e Lou, Baihou or other selected route according to the intended comparison, complete roads and guest needs. Keep enough time for interpretation, lunch and rest. These are choices, not a promise that all buildings and village interiors fit or are open together.",
      },
      {
        day: "Departure / the actual next stage",
        title: "Leave useful time for the next destination",
        description:
          "Allow breakfast, bags and the complete gateway or next-hotel transfer. Continue to Meizhou, Chaozhou or a Fujian cluster only with its own practical plan. This outline is illustrative, not a published package, heritage designation claim or guarantee of upper floors, household hosts and current access.",
      },
    ],
  },
};
