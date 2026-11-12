import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/haining.svg",
  alt: "Original Haining planning schematic separating Yanguan tide viewing from Xiashi city culture, with dated forecast, managed access and day-visit versus overnight choices; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const hainingGuide: ExpandedDestination = {
  id: "haining",
  name: "Haining",
  region: "east",
  kicker: "Plan for the tide, and give the rest of the day a purpose",
  description:
    "Compare a Haining day trip with a Yanguan overnight, using current tide forecasts and managed viewing arrangements, then add historic-town or Xiashi literary interests that suit the route.",
  stay: "A forecast-led day visit or 1 night; 2 nights for a broader cultural stay",
  bestFor: "Qiantang tidal-bore interpretation, Yanguan heritage and a considered literary detour",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["jiaxing", "hangzhou", "shanghai", "wuzhen"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Haining Travel Guide: Qiantang Tide, Yanguan & Stays",
    seoTitle: "Haining Travel Guide: Tide, Yanguan & Stays",
    seoDescription:
      "Plan Haining and Yanguan around current Qiantang tide forecasts. Compare day trips, overnight bases, Xiashi culture and exact rail and road transfers.",
    answer:
      "Haining (海宁) is a county-level city within the wider Jiaxing municipality in northern Zhejiang. Its best-known visitor interest is the Qiantang River tidal bore, often viewed from managed facilities around Yanguan (盐官) on the river's northern bank. The bore is an incoming tidal wave moving upstream, not a scheduled show or an ordinary river cruise. Start with a dated official forecast and the current viewing arrangements, then build the day around the permitted location and transfer. Yanguan's heritage interests and Xiashi (硖石), associated with the poet Xu Zhimo, give the visit a second subject. Haining city, Yanguan and Haining West railway station are different places; a municipal hotel label does not identify the best base for all three.",
    stayAnswer:
      "Choose a day trip when the dated viewing window, managed access and complete return journey fit comfortably from Hangzhou, Jiaxing or Shanghai. Stay one night when the tide schedule, a particular Yanguan property or time for a cultural visit makes it worthwhile. Two nights need a broader purpose, such as a deliberately slower heritage stay and a separate Xiashi visit. Another night does not guarantee a larger tide or a better view. If conditions or current restrictions make viewing unsuitable, keep a worthwhile cultural alternative or leave Haining for a future trip rather than spend the day waiting for an uncertain spectacle.",
    hotelAnswer:
      "Choose a Yanguan-area property for the actual heritage setting and practical route to a confirmed viewing facility. Choose central Haining around the Xiashi interests when city culture, meals and room convenience matter more. Check the exact room, road approach, stairs or lifts, sound insulation, climate control and dining. A river-facing room is not necessarily a usable tide viewpoint; a hotel terrace does not automatically have permitted access or a clear sightline. Haining West is a separate railway gateway, so a station-area hotel should be assessed for the complete sightseeing and dinner journeys, not booked as though it were beside Yanguan.",
    sightseeingQuestion: "Is it worth staying overnight in Haining to see the Qiantang tidal bore?",
    sightseeingAnswer:
      "Stay when the actual forecast window and a comfortable room make the evening or following morning useful, or when you want time for Yanguan and a separate cultural interest. A well-planned day trip can be enough if the complete journeys fit. An overnight provides scheduling room, not control over the river. Forecasts, weather, river conditions and local management still determine what can be seen and where visitors may stand. Compare the full plan, including what you will do if viewing changes, rather than pay for a night solely on the promise of a spectacular wave.",
    visitorResources: [
      {
        label: "Haining municipal government",
        href: "https://www.haining.gov.cn/",
        scope:
          "Starting point for local background and current municipal or visitor notices, mainly in Chinese. Seek dated viewing and site information from the relevant authorities and actual operator. General destination information does not establish a particular tide window, hotel view or included visit.",
      },
      {
        label: "Zhejiang Provincial Department of Water Resources",
        href: "https://slt.zj.gov.cn/",
        scope:
          "Official starting point for provincial water information and links to current hydrological notices. Use the relevant dated Qiantang tide forecast and local instructions; this reference page itself is not a forecast, an admission ticket or permission to approach the river.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated trains and exact station names. Haining and Haining West are different locations and service choices. Include both terminal transfers and the final road to the chosen Yanguan or city address when comparing rail with a direct road journey.",
      },
    ],
    serviceScope:
      "A tailored Haining plan should specify the dated viewing assessment, managed facility, guide language, current admission arrangements, complete transfers and a cultural or indoor alternative. Explain the walking, standing, seating and crowd-management conditions relevant to the group. For an overnight, name the property and room category. Private guiding does not provide exclusive riverfront access, permission to cross barriers or a guaranteed tide. A boat, private platform, workshop or literary specialist is not implied by this guide and needs its own lawful, confirmed arrangement. Tide viewing must remain within current permitted facilities and staff instructions.",
    routeAdvice:
      "Tell us the dates you can travel, your starting hotel, available nights, mobility and whether the tide, Yanguan heritage or literary history is the main interest. We can compare a day trip with an overnight and explain how much schedule flexibility the plan needs. Keep Hangzhou's West Lake and tea interests, or Jiaxing's South Lake and Yuehe, as distinct chapters. No matching published Haining itinerary is listed here. A wider China, Shanghai or Hangzhou product includes tide viewing, Yanguan, admissions or accommodation only when its actual itinerary and service scope say so.",
    practicalPlanning: {
      timing:
        "Use the official forecast for the actual date and named viewing location, then recheck current access and arrival instructions. Tide times and appearance vary with lunar cycles, weather, river flow and the particular stretch of river. An old timetable or a social-media clip is not a booking basis. Well-known autumn viewing periods can attract large crowds; they are not the only dates to assess. Allow for road controls, entry, walking and the return journey, and change the plan if the forecast or local management requires it. Do not combine a fixed tide window with a tight onward train or flight.",
      walking:
        "Assess the managed viewing facility's actual approach, steps, standing time, seats, toilets, crowd flow and exit route. Keep children and mobility needs central to the choice. Remain within designated areas, behind barriers and under staff instructions; never descend onto the riverbed, mudflats or waterside embankments for a closer photograph. A quiet-looking river before the bore is not evidence of a safe approach. Yanguan streets and Xiashi interiors need their own route assessment, with shorter walks and indoor breaks where suitable.",
      cost: "Compare the same starting address, viewing facility, guide time, vehicle or rail plus road transfers, current admissions and cultural visits. For an overnight, add the exact room, breakfast, dining and cancellation terms. Clarify what happens to the route and booked services if access changes or the tide is disappointing. Premium value is careful timing, interpretation, comfortable logistics and a worthwhile alternative, not claims of a bigger wave, an exclusive riverbank or a hotel view that has not been checked.",
    },
    attractions: [
      "The Qiantang tidal bore from an operating, permitted viewing facility suited to the actual date",
      "Yanguan heritage interests, with historic fabric distinguished from restoration and modern visitor development",
      "The Sea God Temple / Haishen Miao when its current route and opening suit the visit",
      "Xiashi and Xu Zhimo's former residence for a separate modern-literary subject",
      "A selective city or town walk that fits the actual viewing window",
      "A seated local meal and a comfortable room when an overnight adds value",
      "Jiaxing or Hangzhou as a contrasting next chapter rather than another stop squeezed into the tide window",
    ],
    stays: [
      {
        label: "Day visit / fit the route to the actual viewing window",
        advice:
          "Start with the forecast and permitted facility, then include a manageable Yanguan visit and a meal if time allows. Compare direct road transport with the exact train and final transfer. The best order may change by date; do not force a fixed morning-to-afternoon template onto the river.",
      },
      {
        label: "1 night / useful flexibility and an unhurried cultural visit",
        advice:
          "Choose this when a real room, the timing and the evening or next morning improve the experience. Confirm the route to viewing, dinner and luggage handling. Keep an alternative cultural plan so the stay remains worthwhile if the river or access does not deliver the hoped-for view.",
      },
      {
        label: "2 nights / a broader Yanguan and Xiashi stay",
        advice:
          "Add a separate literary or cultural chapter and time to enjoy the property. Two nights are not necessary just to see one tide, and repeated viewing should have a clear reason. Check actual open sites and journeys before promising a full second day of heritage interiors or specialist access.",
      },
    ],
    hotelAreas: [
      {
        name: "Yanguan vicinity / heritage and the confirmed viewing plan",
        advice:
          "Choose the exact address and room for the town stay you want, then verify access to the designated viewing facility. Check road restrictions, luggage, evening meals and noise from visitor areas. A recently developed heritage-style property can be comfortable, but should not be described as an original historic residence without evidence.",
      },
      {
        name: "Central Haining and Xiashi / city and literary interests",
        advice:
          "Can suit guests who want Xu Zhimo-related history, a city meal and a practical urban room. Compare the complete road journey to Yanguan and the actual tide window. A central city hotel is not automatically the nearest base for viewing, and sightseeing nearby must still follow current opening hours.",
      },
      {
        name: "Hangzhou base or railway-area room / compare the full day",
        advice:
          "Keeping the Hangzhou hotel can avoid a luggage move when a day trip fits. A Haining West-area room may serve a train but needs a separate assessment for meals and heritage visits. Price the actual transfers and useful hours; a short rail segment or a station-side bed does not by itself make the trip easier.",
      },
    ],
    tradeoffs: [
      {
        title: "A forecast is a planning tool, not a performance guarantee",
        advice:
          "Match the dated forecast to the named viewing point and current instructions. The bore's height, form and visibility depend on conditions; a dramatic clip from another date or location is not what you have booked. A good proposal explains the uncertainty and the alternative instead of promising a particular wave.",
      },
      {
        title: "Yanguan history and contemporary visitor areas need different descriptions",
        advice:
          "Choose a heritage subject such as the Sea God Temple and explain documented history, repair and present-day use. Wider visitor streets, hotels or themed programs may include substantial modern development. Judge them for their actual value rather than treating every facade as original or every performance as an unchanged local ritual.",
      },
      {
        title: "Xiashi adds a literary subject rather than another tide stop",
        advice:
          "Xu Zhimo's former residence gives a way into modern Chinese poetry and the author's life. Agree the depth and language of interpretation, check current access and allow the full journey from Yanguan. A short introductory visit is different from a specialist literary session, which requires a confirmed provider.",
      },
      {
        title: "A private vehicle helps with timing but cannot control access",
        advice:
          "Road management, parking and pedestrian approaches can change on busy dates. Name the real pickup and meeting arrangements rather than promise door-to-river access. Private transport and guiding do not override barriers, capacity limits or staff instructions, and cannot turn an unsuitable viewing situation into a suitable one.",
      },
      {
        title: "Haining is not a substitute name for Hangzhou or Jiaxing city",
        advice:
          "Haining is a separate county-level city within Jiaxing municipality. Yanguan, Xiashi, Haining station and Haining West each require their own address. Compare the complete itinerary rather than assume a Hangzhou booking includes Haining or that a Jiaxing city hotel is beside the viewing facilities.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "jiaxing",
        advice:
          "Jiaxing city adds South Lake's historical context, Yuehe canal-side streets and a different city meal. It is not the same place as Haining or Yanguan. Compare a separate city night with a direct onward journey and protect the dated viewing window from an overfilled sightseeing day.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou offers West Lake, Longjing tea and a useful existing hotel base when a Haining day trip fits. Compare complete road transport with dated rail and final transfers. A Haining outing should preserve meaningful Hangzhou time and needs a separate viewing assessment rather than being an automatic half-day add-on.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai adds a contrasting urban chapter and international gateways. A Haining day trip from Shanghai must leave enough time for the full journeys, managed entry and the actual tide window. Compare an overnight when it improves the route, and keep flight departures separate from uncertain viewing and return-road conditions.",
      },
      {
        slug: "wuzhen",
        advice:
          "Wuzhen offers a separate canal-town property and Dongzha/Xizha visit in Tongxiang. Compare that overnight with a Yanguan stay rather than put both hotel changes around one fixed tide window. Add both only when the interests and available nights justify the complete transfers.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Assess the actual travel dates and official forecasts rather than choose a month from a generic best-time list. Autumn tide-viewing occasions are well known and can be very busy, but relevant forecasts should be checked for other dates too. Summer needs shade, cooling and a realistic standing-time assessment; winter can be cold and windy by the river. Weather and river conditions can change visibility and access in any season. Yanguan and literary interests should provide a worthwhile second reason to come, not just fill time before an uncertain wave.",
    orientation:
      "Haining lies within the wider Jiaxing municipality in northern Zhejiang. Yanguan is a separate town on the northern side of the Qiantang River; Xiashi is associated with the central-city and literary chapter. Haining and Haining West railway stations are distinct gateways. Hangzhou and Jiaxing city are other bases again. The English phrases Qiantang tidal bore and Qiantang River tide describe the river phenomenon, not one fixed attraction entrance, so every proposal needs a named permitted viewing location and date.",
    experiences: [
      "Understand the Qiantang tidal bore from a permitted facility using the current dated plan",
      "Read Yanguan's heritage alongside its restoration and contemporary visitor setting",
      "Add a separate Xiashi literary visit or a relaxed meal when it improves the journey",
    ],
    planningNotes: [
      "Choose the date and managed viewing point before fixing the day's order",
      "Separate Yanguan, Xiashi and the exact railway station in every transfer",
      "Agree a worthwhile alternative and never treat a hotel view as guaranteed tide access",
    ],
    arrival:
      "Compare a direct road journey from the actual Hangzhou, Jiaxing or Shanghai hotel with dated trains and both terminal transfers. Haining station and Haining West station are different places and service patterns; the right choice depends on the final Yanguan or city address. Local rail or intercity options may suit some routes, but the last transfer, luggage and actual entry arrangements still matter. For an overnight, establish where the vehicle stops and how bags reach the room. Allow for busy-date road management and do not make a tight train or flight connection depend on the viewing window ending exactly as expected.",
    gettingAround:
      "Use the actual permitted viewing facility and a clear meeting point, accounting for pedestrian access, standing time and the exit after the crowd disperses. Travel between Yanguan and Xiashi is a separate road chapter, not a continuous historic-town walk. Check current site opening, steps, toilets, seats and indoor breaks for each. Follow barriers and staff instructions even when others move closer to the river. Do not improvise a riverbed, mudflat or unapproved embankment route for photography, and do not assume a private car can reach a restricted riverside pickup point.",
    stayStrategy:
      "Choose the base for the real visit: Yanguan for its heritage setting and practical viewing route, central Haining for Xiashi interests, or the existing Hangzhou hotel when a day trip works. Check the exact room, noise, climate control, bathroom, breakfast and dinner options. An overnight can reduce time pressure but does not reserve a tide or an exclusive viewpoint. Two nights need cultural depth or property time beyond waiting for another wave. If those interests do not appeal and the viewing plan is weak, omit the stay.",
    firstTimerNote:
      "Start with the river as a natural phenomenon and the practical conditions of seeing it. A clear explanation of why a bore forms and why its appearance varies can make a modest view more interesting than a promise of a dramatic wall of water. Then decide whether Yanguan's heritage, Xiashi's literary history or the chosen room gives the rest of the visit enough value. The strongest plan remains worthwhile when the river does not match a video.",
    faqs: [
      {
        question: "Where is Haining, and is Yanguan the same place?",
        answer:
          "Haining is a county-level city within Jiaxing municipality in northern Zhejiang. Yanguan is a separate town within Haining, associated with Qiantang tidal-bore viewing and heritage interests. Xiashi, the railway stations and individual hotels are other locations. Use the exact Chinese address rather than the city name alone for pickup.",
      },
      {
        question: "When is the best time to see the Qiantang tidal bore?",
        answer:
          "Use the dated official forecast for the named viewing point and recheck current access. Lunar cycles, weather, river conditions and location affect timing and appearance. Famous autumn dates can be crowded and are not the only dates worth assessing. A generic month or an old tide table cannot establish your actual visit.",
      },
      {
        question: "Can you guarantee a large tide at Yanguan?",
        answer:
          "No. A forecast supports planning but does not guarantee wave size, visibility or access. A good itinerary names the permitted facility, explains the current assessment and includes a worthwhile alternative. A private guide, vehicle or overnight room does not control the river or override local management.",
      },
      {
        question: "Can I visit Haining on a day trip from Hangzhou?",
        answer:
          "Yes, when the actual viewing window and complete journeys fit comfortably. Compare direct road transport with dated rail services and the final transfer to the chosen facility. Leave time for entry, walking and a meal. An overnight is useful only when its room, timing or cultural interests justify moving hotels.",
      },
      {
        question: "Should I stay in Yanguan or central Haining?",
        answer:
          "Choose Yanguan for the actual heritage setting and practical access to the confirmed viewing plan. Choose the city for Xiashi literary interests, meals and a suitable urban room. Check the exact address and full transfers. A river-view room is not a guaranteed tide viewpoint, and neither base is interchangeable with Haining West station.",
      },
      {
        question: "What is the difference between Haining and Haining West stations?",
        answer:
          "They are distinct railway stations with different locations and services. Select the dated train using the actual hotel, Yanguan visit or Xiashi interests and include both terminal transfers. Send the full ticket name for pickup; a fast rail segment alone does not identify the best door-to-door route.",
      },
      {
        question: "What can I do in Haining if tide viewing changes?",
        answer:
          "Choose a current open Yanguan heritage visit, a separately planned Xiashi literary stop or time at a property you actually want to use. Sea God Temple access and Xu Zhimo's former residence need their own confirmation. A good alternative should match your interests, not be an unannounced shopping substitute.",
      },
      {
        question:
          "Is Qiantang tide viewing suitable for children or travelers with limited mobility?",
        answer:
          "It depends on the exact managed facility, walking and standing demands, crowd conditions and available seats, toilets and exits. Assess those details for the actual group before booking. Remain in designated areas and follow staff instructions. A private vehicle or nearby hotel does not automatically make an unsuitable viewing route accessible.",
      },
    ],
    culturalStory: {
      title: "The river is one chapter; the town and the poetry are others",
      paragraphs: [
        "The Qiantang bore forms as an incoming tide moves into an estuary and river whose shape helps concentrate the flow. Its speed, shape and appearance vary with the place and conditions, which is why interpretation and a dated local plan matter more than matching an online photograph. At Yanguan, the Sea God Temple, or Haishen Miao (海神庙), offers a separate way to discuss the cultural importance of the river and efforts to understand or live with water. Explain religious and historical traditions as such, and distinguish the actual surviving fabric, repairs and present-day visitor arrangements.",
        "Xiashi adds a different kind of history through Xu Zhimo's former residence (徐志摩故居) and the poet's place in modern Chinese literature. A useful introduction might connect his writing and biography to the spaces visitors can actually enter, without assuming every guest already knows the poems. This is a separate journey and subject from Yanguan. Contemporary heritage-style streets or themed programs should be described for what they are; an attractive facade is not evidence of original fabric, and a scheduled show is not automatically an unchanged community tradition.",
      ],
    },
    foodStory: {
      title: "Plan a proper meal around the viewing window",
      paragraphs: [
        "The tide's timing can make lunch awkward, so agree where and when the group will sit down rather than rely on snacks beside a busy entrance. Haining's yanqiu (宴球), a local banquet-style ball dish, is one option to ask a kitchen about: fish, pork, egg, starch and seasoning can vary with the preparation. Check the actual version, portion sizes and accompaniments. Add vegetables and other dishes the kitchen handles well instead of assuming that a riverside menu means ingredients were caught in the Qiantang.",
        "For dietary requests, ask about fish, pork, shellfish, egg, soy, wheat, broth and shared equipment. A dish's name or main ingredient cannot establish suitability for a serious allergy or vegetarian diet. Confirm whether the restaurant can meet the need and keep an alternative if it cannot. For a Yanguan overnight, check dinner hours and the return route before reserving a room around an appealing evening photograph. A food stop does not imply a cooking class, private host or compulsory shopping visit.",
      ],
    },
    itinerary: [
      {
        day: "Before the visit",
        title: "Set the day using the actual forecast and permitted location",
        description:
          "Check the dated official forecast, current access and facility arrangements. Compare the full journey from the actual hotel, agree walking and standing needs, and choose a cultural alternative. Confirm the room only when the overnight itself adds value.",
      },
      {
        day: "Visit day / order varies with the tide",
        title: "Leave enough time for managed entry and an unhurried exit",
        description:
          "Reach the designated facility according to current instructions and remain within permitted areas. Explain the natural process and what conditions may change. Put a seated meal and selected Yanguan heritage visit before or after viewing as the actual schedule allows, rather than follow a fixed generic timetable.",
      },
      {
        day: "Optional overnight or second cultural chapter",
        title: "Let the room and the additional interest justify staying",
        description:
          "Use a confirmed property and relaxed dinner, or plan Xiashi and Xu Zhimo's former residence with current opening and full road travel in mind. If viewing changes, use the agreed alternative rather than improvise unapproved river access or substitute a shopping stop.",
      },
      {
        day: "Departure",
        title: "Protect the onward connection",
        description:
          "Collect luggage and leave a proper buffer for the exact railway station or next hotel. This outline illustrates choices, not a published package or a tide timetable. It guarantees neither wave appearance nor rooms, boats, specialist hosts, private platforms, priority entry or attraction inclusions.",
      },
    ],
  },
};
