import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/turpan.svg",
  alt: "Turpan planning schematic comparing an oasis city base, a selected exposed ruin route and separate eastern-basin sights; original diagram, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const turpanGuide: ExpandedDestination = {
  id: "turpan",
  name: "Turpan",
  region: "northwest",
  kicker: "Oasis history, with the heat and distances planned honestly",
  description:
    "Plan Turpan's settlement ruins, irrigation heritage and oasis food with clear choices on heat, hotel comfort, site distances and an overnight versus a day visit.",
  stay: "2 nights; 3 for a deeper, slower visit",
  bestFor: "Silk Road settlement history, oasis agriculture and considered Buddhist-art context",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["urumqi", "dunhuang", "kashgar"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Turpan Travel Guide: Ruins, Heat & Where to Stay",
    seoTitle: "Turpan Travel Guide: Ruins, Heat & Hotels",
    seoDescription:
      "Plan Turpan with Jiaohe or Gaochang ruins, karez irrigation, Bezeklik, hotel comfort and heat-aware timing. Compare an overnight with a Urumqi day visit.",
    answer:
      "Turpan (吐鲁番), also written Turfan, is an oasis destination in eastern Xinjiang. Its value lies in the relationship between settlement ruins, irrigation, agriculture and routes through the surrounding arid landscape. Two nights give one full day for a selected ruin and a contrasting oasis or museum interest; three allow a separate eastern-basin chapter at a slower pace. Summer heat can make exposed sites demanding. Choose by the actual site distances, shade and room cooling rather than promise Jiaohe, Gaochang, Bezeklik and every vineyard in one day. Turpan North station, the city and the scattered attractions are different locations.",
    stayAnswer:
      "A day visit from Urumqi can work for a limited selection when dated transport, road transfers and temperatures fit. Two nights create a full visiting day without rushing between trains and allow a more considered evening. Three nights suit travelers with a real interest in both the western ruin-and-oasis context and a separate eastern route. More time is not an invitation to stay outside through dangerous heat: the schedule must adapt to conditions. Count station journeys and the return margin before treating a short rail segment as an effortless excursion.",
    hotelAnswer:
      "For a first visit, a dependable city hotel can simplify meals, cooling and daily pickup. A characterful courtyard or vineyard-area property offers a different setting, but check the actual room, air conditioning, bathroom, shade, dust, insects, dining and road access. A station-oriented room serves a transport purpose and is not automatically convenient for the city or ruins. In hot weather, effective cooling and an agreed rest window may improve the trip more than decorative style or a nominal luxury category. Confirm actual guest check-in arrangements and the quoted room before payment.",
    sightseeingQuestion: "Should you choose Jiaohe, Gaochang, Bezeklik or a karez visit?",
    sightseeingAnswer:
      "Jiaohe / Yarkhoto is a good starting point for understanding an earthen settlement through a selected exposed walking route. Gaochang / Qocho is a separate, extensive settlement site with different historical context and visitor circulation. Bezeklik concerns a Buddhist cave complex in another setting; explain surviving material, damage and any reconstructions without promising intact murals in every cave. A karez visitor site introduces underground irrigation but is not automatically a walk through a working water network. Choose one main historical subject and one contrast for a shorter visit; reserve a separate day for a coherent eastern route if the interests and conditions justify it.",
    visitorResources: [
      {
        label: "Turpan municipal government",
        href: "https://www.tlf.gov.cn/",
        scope:
          "City background and public notices, mainly in Chinese. Confirm actual site opening, visitor routes, reservations, heat-related changes, transport and accommodation with the responsible venue or provider. General city information is not a dated access or host confirmation.",
      },
      {
        label: "UNESCO: Silk Roads, the Chang'an–Tianshan Corridor",
        href: "https://whc.unesco.org/en/list/1442/",
        scope:
          "Historical context for the serial World Heritage property including the Jiaohe and Gaochang city components. The designation should not be applied to every Turpan attraction and does not establish current admissions, internal transport, cave access or conservation permissions.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services, station names and tickets. Check Turpan North and any other proposed station individually, including both road transfers. Ticketed times use Beijing time; a train journey is not arrival at the hotel or a ruin entrance.",
      },
    ],
    serviceScope:
      "A tailored Turpan proposal should identify the actual station, hotel and room cooling, complete road service, named sites, current visitor routes, guide language and meals. State any internal vehicles, museum reservation support and selected cave access separately. A vineyard meal, cultural host, workshop or home visit requires consent and a real provider; a public visitor complex is not a private family encounter. Private guiding does not authorize entry into unstable ruins, restricted religious spaces, closed caves or working irrigation shafts. Confirm traveler documents, local access and accommodation arrangements for the actual dates.",
    routeAdvice:
      "Turpan can form a focused oasis chapter after Urumqi, before a wider eastward journey toward Dunhuang, or within a separately planned Xinjiang itinerary. Kashgar lies much farther west and adds a different city culture, not another local stop. No matching published Turpan product is recommended here. Request a route with dates, passports, actual services, heat tolerance, walking needs and whether ruins, irrigation or Buddhist art matter most. A useful plan selects complementary subjects and protects meals, cooling and onward travel rather than sell every attraction as included.",
    practicalPlanning: {
      timing:
        "In hot periods, place exposed ruin walking in a suitable cooler window when the site actually opens, and use appropriate indoor time or hotel rest for the hottest part of the day. Do not promise pre-opening entry or treat an evening return train as permission to remain outside all afternoon. Build the sequence around current conditions and the actual location of each site. State Beijing time, UTC+8, explicitly on pickups and tickets; resolve any informal local-time reference before travel.",
      walking:
        "Jiaohe and Gaochang involve exposed earthen landscapes, uneven ground and limited shade along selected routes. Internal transport, where operating, does not remove every walk. Bezeklik and other sites have their own steps, surfaces and viewing conditions. Review shade, seating, toilets, hydration and the ability to shorten the day. A private vehicle should support sensible breaks but cannot make severe heat harmless. Stop activities and obtain appropriate help if a guest feels unwell rather than complete a checklist.",
      cost: "Compare the exact room and cooling, full vehicle day, guide hours, named admissions, actual internal transport and station transfers. Clarify any hosted meal, vineyard activity, tasting or specialist interpretation separately; these are not implied by a landscape label. Check what changes when heat or a closure alters the route. A premium should buy a thoughtful sequence, comfort and useful explanation, not guaranteed private access, compulsory purchases or a promise of fully intact cave art.",
    },
    attractions: [
      "Jiaohe / Yarkhoto ruins, on a selected current visitor route",
      "Gaochang / Qocho ruins as a separate settlement-history choice",
      "A named karez visitor site, with interpretation and real working infrastructure distinguished",
      "Bezeklik / Boziklik Thousand Buddha Caves, subject to current open areas",
      "Emin Minaret / Sugong Tower and its setting, with actual visitor boundaries respected",
      "A relevant Turpan museum collection, chosen by current opening and display",
      "A selected vineyard or oasis interest with a genuine location, season and provider",
    ],
    stays: [
      {
        label: "Day visit: a limited, coherent selection",
        advice:
          "Choose when dated rail or road transport, both transfers and weather leave useful visiting time. One main ruin and one contrast may be more rewarding than a cross-basin checklist. Protect the return and do not confuse train time with the complete day.",
      },
      {
        label: "2 nights: one full oasis-history day",
        advice:
          "Use one comfortable base, a selected ruin route and a distinct irrigation, collection or city interest. Include a proper meal and cooling break when needed. The overnight creates flexibility without requiring every optional site to be visited.",
      },
      {
        label: "3 nights: add a separate eastern chapter",
        advice:
          "Consider a coherent Gaochang-and-Bezeklik interest when actual access, heat and walking suit, rather than repeat another similar ruin without explanation. Give the extra day a purpose and keep the itinerary adaptable. Hosted vineyard or cultural visits need independent confirmation.",
      },
    ],
    hotelAreas: [
      {
        name: "Turpan city / dependable meals and rest",
        advice:
          "Start with actual room cooling, quiet, bathroom, breakfast and vehicle access. Compare the route to the selected sites and station. A city base can provide more flexible meals and a reliable midday rest, but the attractions remain separate road journeys.",
      },
      {
        name: "A courtyard or vineyard-area property / setting with practical checks",
        advice:
          "Consider a named property when its atmosphere and facilities justify the location. Verify effective cooling in the quoted room, shade, food, stairs, insects and dust. A vine canopy or traditional style does not guarantee luxury service, privacy or a working-vineyard host.",
      },
      {
        name: "A station-oriented property / a specific connection need",
        advice:
          "Check which station and the actual road approach. A short transfer may help a very early departure but reduce access to meals and city interests. Avoid moving hotels solely for a theoretical saving without comparing the entire stay and luggage handling.",
      },
    ],
    tradeoffs: [
      {
        title: "Heat should shape the plan, not become a marketing spectacle",
        advice:
          "Turpan's summer climate can make exposed walking difficult. Choose suitable hours, a shorter route and an effective cooling break; change activities when conditions require. Do not use a famous hot location or ground-temperature display as an invitation to prolong exposure or claim a private car makes every guest comfortable.",
      },
      {
        title: "Jiaohe and Gaochang need different explanations",
        advice:
          "Both are settlement ruins but their layout, periods and surviving evidence differ. A traveler interested in urban archaeology may value both with proper time. A general visitor may gain more from one well-explained site and a contrasting oasis interest than from a second exposed circuit with the same generic commentary.",
      },
      {
        title: "Bezeklik is not a guarantee of complete murals",
        advice:
          "The cave complex has a history of loss, damage and dispersed material. Current open areas and interpretation require confirmation. Explain what is original, surviving or reconstructed rather than promise every celebrated image in situ. Ordinary access and any special arrangement are distinct.",
      },
      {
        title: "Karez interpretation and working irrigation are different access scopes",
        advice:
          "A visitor site can explain channels, shafts, water management and agriculture. That does not mean guests may enter an active underground system or every visible shaft. Identify the actual site and current display, and respect infrastructure, safety and land-use boundaries.",
      },
      {
        title: "A vineyard visit needs a real subject",
        advice:
          "Choose irrigation, agriculture, food or a consented host rather than a generic grape photo stop. Harvest and fruit availability vary by location and season. A commercial visitor garden, public landscape and family-hosted session are different experiences; tasting, purchases and alcohol should be optional and clearly specified.",
      },
      {
        title: "Flaming Mountains are a selected landscape stop",
        advice:
          "A roadside view and a visitor attraction have different access and interpretation. The wider landscape's color and literary associations can be explained without treating a hot photo stop as mandatory. Compare the detour and conditions with the guest's priorities before adding it to a full ruins day.",
      },
      {
        title: "The station and the city are not the same arrival",
        advice:
          "Use the full ticketed station, actual pickup and hotel address. Turpan North, other rail points and dispersed attractions require different road legs. Agree Beijing time for all formal arrangements. A convenient intercity train does not remove local transport, luggage or entry procedures.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "urumqi",
        advice:
          "Urumqi adds regional collections and a different city introduction. Compare a dated day visit with a Turpan overnight through both station transfers, site distances and heat. The two places should have distinct purposes rather than repeat generic bazaar and food stops.",
      },
      {
        slug: "dunhuang",
        advice:
          "Dunhuang extends a broader art-and-oasis journey farther east with Mogao's own reservations and access. Choose actual transport and useful nights. Bezeklik and Mogao have different surviving material and visitor experiences; explain the contrast rather than promise interchangeable cave tours.",
      },
      {
        slug: "kashgar",
        advice:
          "Kashgar introduces a separate southern Xinjiang city chapter much farther west. Use actual flights, trains or a properly paced multi-stop route, not a local excursion assumption. Both places deserve their own context, rooms and meal planning.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for exposed ruins and oasis history, with wind, dust and temperature variation still possible. Summer can be intensely hot: the route, opening hours, cooling and individual tolerance need explicit review. Vineyard interests depend on the actual crop and provider, not one promised harvest date. Winter brings different temperatures and possible reduced visitor services. Confirm forecasts, current routes and dated transport near departure rather than guarantee comfortable outdoor conditions from a season label.",
    orientation:
      "Turpan is an oasis destination in eastern Xinjiang within a larger prefecture-level city area. The central visitor base, Turpan North station, Jiaohe and the eastern Gaochang-and-Bezeklik interests are dispersed. A map showing all of them under Turpan does not make them adjacent. Use the full Chinese address, actual station and named visitor sites, then group a coherent route with Beijing-time pickups and real rest windows.",
    experiences: [
      "Read a selected earthen settlement through its surviving layout and evidence",
      "Understand oasis water management through a clearly identified karez visit",
      "Choose a separate Buddhist-art or vineyard interest without overloading the hot day",
    ],
    planningNotes: [
      "Let actual heat, shade and room cooling shape the schedule",
      "Distinguish Jiaohe, Gaochang, Bezeklik and karez rather than sell one generic ruin circuit",
      "Use full station names, Beijing time and complete road legs for a day trip or overnight",
    ],
    arrival:
      "Check the dated train and full station name, particularly Turpan North, then arrange the actual road transfer to the hotel or first named site. Other proposed stations or flights need their own current operating and location review. If arriving from Urumqi for a day visit, include luggage, entry procedures, meals and the complete return. State Beijing time explicitly. Avoid making the longest exposed walk depend on a midday arrival in hot weather.",
    gettingAround:
      "Use a vehicle between the city and scattered sites, grouping the route by geography and interest. Walking remains at ruins, caves and visitor areas even where internal transport operates. Keep a suitable cooling break, water and the option to shorten an exposed visit. Agree the actual pickup and return rather than leave guests to cross a large hot site searching for the vehicle. Private transport does not authorize restricted ruins, homes or irrigation infrastructure.",
    stayStrategy:
      "For two or three nights, keep one comfortable base with effective cooling, quiet, a suitable bathroom and reliable meals. A named courtyard or vineyard property can add atmosphere when the actual facilities and road location suit. Check the quoted room rather than rely on an attractive shaded exterior. The value of an overnight is useful timing and rest, not a requirement to extend every activity or promise a private oasis experience.",
    firstTimerNote:
      "Pick the main interest before choosing the site count. Settlement history, irrigation and Buddhist art are different subjects, each better understood with time and context. A well-chosen ruin and a contrasting oasis visit can be enough for a memorable first day. Protect comfort in hot conditions and keep shopping optional. A high-end itinerary earns its value through judgment, explanation and practical care rather than the number of entrances listed.",
    faqs: [
      {
        question: "How many nights should I spend in Turpan?",
        answer:
          "Two nights give one full day for a selected ruin and a contrasting oasis or collection interest. Three add a separate eastern route or slower pace. A day visit can work with favorable dated transport and conditions, but include both transfers and the return margin.",
      },
      {
        question: "Can I visit Turpan as a day trip from Urumqi?",
        answer:
          "It can be planned for a limited selection when actual trains or roads, local transfers and temperatures fit. A short train journey alone does not establish an easy excursion. An overnight can improve timing and rest, especially when exposed sites are the priority.",
      },
      {
        question: "Is Turpan too hot to visit in summer?",
        answer:
          "Summer heat can make exposed walking demanding and may require a different route or date for some guests. Use suitable opening windows, effective cooling and shorter outdoor visits, adapting to forecasts and individual tolerance. A private car does not make severe heat harmless.",
      },
      {
        question: "Should I choose Jiaohe or Gaochang?",
        answer:
          "Choose by historical interest, the actual visitor route, walking and the wider day's geography. They are distinct settlement sites. For a short first visit, one well-explained ruin plus an irrigation or city contrast may be more rewarding than two similar exposed circuits.",
      },
      {
        question: "Will I see intact murals in every Bezeklik cave?",
        answer:
          "No such promise should be made. Surviving material, damage, interpretation and current open areas vary. A proposal should state actual access and distinguish original material from reconstruction. It should not imply special or closed-cave access from ordinary admission.",
      },
      {
        question: "Can I walk through a working karez tunnel?",
        answer:
          "Do not assume that. A named visitor site may explain irrigation through its own display and permitted route. Active infrastructure, shafts and restricted areas have different boundaries. Confirm the actual experience rather than infer it from the word underground.",
      },
      {
        question: "Where should I stay in Turpan?",
        answer:
          "A dependable city hotel can simplify meals, cooling and pickup. A named courtyard or vineyard-area stay may suit a setting interest if its room and facilities are appropriate. A station hotel is a separate connection-driven choice. Verify the exact property and foreign-guest check-in arrangements.",
      },
      {
        question: "Is Turpan North station in the main sightseeing area?",
        answer:
          "Treat it as a separate arrival point requiring a road transfer. The city, Jiaohe and eastern sites are dispersed. Use the ticketed station name and Beijing time, with the full pickup and return planned.",
      },
      {
        question: "Is a published Turpan tour recommended here?",
        answer:
          "No matching published product is recommended. Use the illustrative outline to request a tailored plan with dates, passports, site priorities, walking and heat tolerance, and room needs. Actual access, hosts, transport and inclusions need confirmation.",
      },
    ],
    culturalStory: {
      title: "Read the oasis through settlement, water and surviving art",
      paragraphs: [
        "The strongest Turpan visit connects evidence rather than lists monuments. Settlement layout can show how people organized space; irrigation interpretation helps explain agriculture in an arid setting. Jiaohe and Gaochang require their own historical context instead of the same Silk Road paragraph repeated at two entrances. Be clear about surviving earth, conservation, restoration and later interpretation. A ruin can be compelling without imagining every vanished building or presenting uncertain details as established fact.",
        "Bezeklik adds another layer through Buddhist art and its complex history of survival, damage and dispersal. Explain what can actually be seen and distinguish it from images held elsewhere or reproduced for interpretation. A vineyard or hosted agricultural subject can bring the oasis into the present when permission and content are real. Neither heritage status nor private guiding grants access to private households, active infrastructure or closed cultural spaces.",
      ],
    },
    foodStory: {
      title: "Choose oasis food for taste, season and comfort",
      paragraphs: [
        "Pilaf, noodles, breads and fruit can each form a useful food interest when the preparation and setting suit. Grapes and raisins are associated with the oasis, but fresh fruit, harvest activity and a working-vineyard encounter depend on the actual place and date. Explain what is being served and keep quantities manageable. A shaded table or cooled dining room can be more valuable after an exposed visit than another compulsory tasting or shopping demonstration.",
        "Discuss wheat, meat stock, dairy, nuts, sesame, spice and shared preparation. Fruit, dried-fruit tastings and a vegetable dish do not establish that the whole meal meets a dietary requirement. Halal suitability and serious allergy capacity need confirmation with the actual establishment. Alcohol or wine-related activities should be optional and explicitly chosen rather than implied by a vineyard setting. A private host or kitchen visit requires consent and a confirmed arrangement.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach a comfortable base and confirm the heat-aware sequence",
        description:
          "Use the full ticketed station and agreed Beijing-time pickup. Settle into the actual room and confirm cooling, meals and the next day's site conditions. Keep exposed walking optional if arrival falls in the hottest window.",
      },
      {
        day: "Full day",
        title: "A selected ruin and an oasis contrast",
        description:
          "Choose Jiaohe or another justified main historical subject, adding a named karez or relevant collection when the route fits. Include meals, water and rest. Current opening and heat determine the sequence, not a fixed promise of early access.",
      },
      {
        day: "Optional second full day",
        title: "A separate eastern art-and-settlement chapter",
        description:
          "With a third night, choose Gaochang and Bezeklik only when interests, current access and conditions support them. A vineyard or landscape stop is optional, with its real provider and season checked. Avoid adding every eastern site to fill the day.",
      },
      {
        day: "Departure",
        title: "Protect the full onward connection",
        description:
          "Allow the actual station journey and luggage handling, keeping exposed activities clear of a tight departure. This two-night outline with an optional third night is illustrative, not a published package or guarantee of open caves, harvest, private hosts or mild weather.",
      },
    ],
  },
};
