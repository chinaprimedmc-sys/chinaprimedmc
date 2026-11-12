import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/zhaoxing.svg",
  alt: "Zhaoxing planning diagram comparing village-center accommodation, an edge property and a separately assessed Tang'an walk; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const zhaoxingGuide: ExpandedDestination = {
  id: "zhaoxing",
  name: "Zhaoxing",
  region: "southwest",
  kicker: "Dong village architecture, shared spaces & a considered countryside stay",
  description:
    "Stay for Zhaoxing's drum towers, covered bridges and village context, choosing a room for real comfort and a Tang'an route that fits the weather and your walking ability.",
  stay: "2–3 nights",
  bestFor: "Village architecture, cultural interpretation and rural walking",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["sanjiang", "guiyang", "zhenyuan", "guilin", "shaxi", "yuanyang", "libo"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Zhaoxing Travel Guide: Dong Village, Hotels & Tang'an",
    seoTitle: "Zhaoxing Dong Village: Hotels & Tang'an Walks",
    seoDescription:
      "Plan Zhaoxing's Dong village architecture, Tang'an walking and a comfortable rural stay. Compare hotel positions, Congjiang station transfers and cultural visits.",
    answer:
      "Zhaoxing is a Dong village destination in Liping County, southeastern Guizhou, known for its drum towers, covered wind-and-rain bridges and timber-built streets. Choose it for time to understand village space and contemporary community life, not a promise of an untouched settlement without visitors. Tang'an is a separate higher village and landscape interest, with walking routes that need their own assessment. Congjiang railway station is a transport gateway, not another name for the village or an arrival directly at your hotel door.",
    stayAnswer:
      "Two nights give one full day for a selected village route and a Tang'an outing if weather, access and walking needs support it. Three nights provide a second full day for a slower village stay or a separately agreed cultural or countryside interest. One night can suit an introduction when the actual rail tickets leave useful time, but does not guarantee a performance, host visit and terrace walk. Add time because you want to stay in the setting, not simply to wait for a staged event.",
    hotelAnswer:
      "Choose a central-village property for nearby lanes and shared spaces, checking evening sound, room privacy, stairs and luggage access. A village-edge property may offer a different outlook or pickup arrangement but needs its own dining and walking review. Tang'an or another countryside overnight is a separate decision requiring a specific verified property. A timber facade, boutique label or terrace view does not establish sound insulation, heating, cooling or a modern bathroom. Review the actual room and final approach before booking.",
    sightseeingQuestion: "Should you walk from Tang'an to Zhaoxing?",
    sightseeingAnswer:
      "Consider a locally checked route when you want countryside walking and can manage steps, slopes and potentially wet or uneven paths. A downhill direction can still challenge knees and balance. Confirm the actual trail, duration appropriate to the group, agricultural access, weather and road pickup rather than assuming every map line is a public footpath. A road-based Tang'an visit with shorter walks may be a better choice, subject to current local transport arrangements. A village stay does not require a full terrace hike.",
    visitorResources: [
      {
        label: "UNESCO Intangible Cultural Heritage: Grand song of the Dong ethnic group",
        href: "https://ich.unesco.org/en/RL/grand-song-of-the-dong-ethnic-group-00202",
        scope:
          "Background on the recognized singing tradition. Intangible heritage recognition is not World Heritage listing of the whole village and does not establish a performance schedule, private concert or specific host availability.",
      },
      {
        label: "Liping county government",
        href: "https://www.liping.gov.cn/",
        scope:
          "County background and public notices. Confirm current village entry, Tang'an transport, walking conditions, events and individual accommodation arrangements separately.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Zhaoxing stay with the actual hotel, guide, station transfers, selected routes and admissions specified in the proposal. A meaningful cultural arrangement should identify the willing host, language support, format and guest role. Private guiding does not provide permission to enter every house, rehearse with singers or photograph residents without consent. A performance, craft session or hosted meal is included only when specifically confirmed; the village itself is not reserved for your group.",
    routeAdvice:
      "Zhaoxing can fit a southeastern Guizhou route or a separately checked rail connection with the Guilin area through Congjiang station. Compare the actual services, both hotel transfers and usable days before deciding the sequence. Other Dong villages, Kaili-area interests and rice terraces each need their own purpose and route; they are not all nearby additions. There is no published Zhaoxing product recommended here. The outline is illustrative and the final proposal should state the exact base, walking and cultural arrangements.",
    practicalPlanning: {
      timing:
        "Use a village walk to explain shared spaces and settlement layout, then decide whether Tang'an belongs on the same full day or a separate one. Keep meals, weather and the final hotel approach in the schedule. A current public performance may provide one cultural introduction, but it should not determine the entire day without confirmation. Leave enough time for the actual station transfer rather than adding a final rural walk before a fixed train.",
      walking:
        "Stone lanes, timber thresholds and stairs vary by property and route. Rain can make village paths and terrace approaches slippery, while uneven steps and sustained descent can be demanding even without a high mountain. Check the exact Tang'an walk and a shorter alternative. Use agreed visitor paths, avoid crops and irrigation edges, and do not assume a private vehicle can collect you at any point along a footpath.",
      cost: "Compare the actual hotel room, luggage help, local transfers, guide hours, admissions and any cultural host or lesson. Village entry, a scheduled performance, private teaching and meals are distinct items whose current inclusion needs checking. A higher room category should correspond to verified comfort or outlook, not a guarantee of silence, an empty village or unarranged community access. Clarify the entire Congjiang station service and final vehicle-to-door leg.",
    },
    attractions: [
      "Zhaoxing drum towers and shared village spaces",
      "Wind-and-rain bridges and selected village lanes",
      "Tang'an village and appropriately selected countryside routes",
      "Confirmed Dong singing or other cultural interpretation",
    ],
    stays: [
      {
        label: "1 night: a selective village introduction",
        advice:
          "Works only with usable arrival and departure time. Choose a coherent walk and meal rather than promising a full Tang'an route and a particular performance in a short stay.",
      },
      {
        label: "2 nights: village context and a separate landscape choice",
        advice:
          "Give the village and Tang'an interests different windows with rest and meals. Choose the actual walking level and transport arrangement; a long hike is not compulsory.",
      },
      {
        label: "3 nights or more: slow the stay or arrange a real interest",
        advice:
          "Add another countryside perspective or an actual willing host with an agreed format. Extra nights do not create a spontaneous home invitation, private festival or guaranteed singing encounter.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Zhaoxing village",
        advice:
          "Consider for immediate access to lanes, meals and village spaces. Check the actual room location, evening sound, stairs, bathroom and heating or cooling. A room above a public lane may offer atmosphere without quiet sleep; establish the luggage approach from the permitted vehicle stop.",
      },
      {
        name: "Village edges and specifically selected outlook properties",
        advice:
          "Compare the individual setting with walking back for meals, road access and the room's actual view. Edge does not necessarily mean quiet, easy or full-service. Verify privacy, facilities and daily pickups rather than judging the property by a wide-angle landscape photograph.",
      },
      {
        name: "Tang'an or another separately reviewed countryside base",
        advice:
          "Choose only when a named property and its support make an overnight worthwhile. Confirm bathroom, temperature control, food, road approach and luggage help. A rewarding village visit does not prove that a suitable hotel operates there or that moving bags improves a short stay.",
      },
    ],
    tradeoffs: [
      {
        title: "Architecture is a way into community life, not just a background",
        advice:
          "Drum towers and covered bridges can help explain gathering, movement and shared space. Ask how the selected structures are used and what visitors may enter, rather than assuming every building is either a museum or open private interior. Repairs and rebuilding are part of a lived-in settlement; do not call every timber surface an untouched ancient original.",
      },
      {
        title: "A staged performance and a personal encounter are different",
        advice:
          "A public show can introduce music in a visitor setting when operating. A conversation, rehearsal visit or hosted singing session needs an actual willing group and agreed context. Neither is automatically more authentic merely because it is described as private. Name the format and give performers credit, time and choice; do not promise access to a household's cultural life through a generic tour ticket.",
      },
      {
        title: "The Tang'an route needs more than a downhill label",
        advice:
          "Review the current trail, steps, surfaces, weather, road access and local advice before deciding on a point-to-point walk. Downhill can be harder on knees than a shorter level route. A road-based visit or a selected short section may serve the interest better. Walking through a farming landscape does not authorize crossing planted fields or entering every courtyard.",
      },
      {
        title: "Singing heritage and place designations should not be confused",
        advice:
          "UNESCO recognition of Grand song of the Dong ethnic group concerns an intangible tradition, not a blanket World Heritage designation for every Dong village or building. Explain the tradition on its own terms and confirm the actual local performance if desired. A broad heritage label does not establish the repertoire, setting or availability on your date.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "sanjiang",
        advice:
          "Compare Zhaoxing with Chengyang in Sanjiang, Guangxi, for another Dong settlement and covered-bridge context. A short trip may be stronger with one chosen village base; a longer route needs contrasting subjects, useful nights and the full station-to-room connections. These are different destinations, not interchangeable names.",
      },
      {
        slug: "guiyang",
        advice:
          "Guiyang offers Guizhou collections and a different city-and-food chapter. Use the actual rail gateways and final village transfer before choosing useful nights. Museum context does not imply access to ceremonies, private homes or every cultural community represented in a display.",
      },
      {
        slug: "zhenyuan",
        advice:
          "Zhenyuan offers a distinct historic river-town chapter, with Qinglongdong architecture and room-noise choices different from Zhaoxing. Compare the actual gateways and complete transfers, giving each place useful nights. The shared Qiandongnan label does not make the towns adjacent or their cultural explanations interchangeable.",
      },
      {
        slug: "libo",
        advice:
          "Libo adds forested karst and river scenery, a different interest from village architecture and Tang'an walking. Check actual services and the complete road transfers at both ends, with a separate full day for the selected Xiaoqikong route. A broad Guizhou label does not make it a nearby village excursion.",
      },
      {
        slug: "guilin",
        advice:
          "The Guilin and Yangshuo area adds karst scenery and a different regional chapter. Compare actual trains serving Congjiang and the chosen Guilin-area station, with both road transfers. A station connection is not proof that the village hotel and a Yangshuo property are a short door-to-door journey.",
      },
      {
        slug: "shaxi",
        advice:
          "Shaxi offers a different Yunnan valley and caravan-history setting, not another name for a Dong village. This is a thematic comparison of slower stays across separate regions, requiring a dedicated transport sequence and nights rather than a nearby extension.",
      },
      {
        slug: "yuanyang",
        advice:
          "Yuanyang adds a distinct Hani agricultural landscape in southern Yunnan. Cultural context, farming seasons and routes differ from a Tang'an walk. Join them only when the complete multi-region plan justifies it, without treating different communities as interchangeable village experiences.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit village visits and selected walks, with variable rain and temperatures. Summer can be warm and wet, and rain changes the suitability of terrace paths. Winter requires a room-level heating review and clothing for cool or damp conditions. Agricultural scenery depends on the actual planting stage, not a generic green-season photograph. Check named festivals or events for their real date, local context and visitor arrangements rather than treating them as daily attractions.",
    orientation:
      "Zhaoxing lies in Liping County, Qiandongnan Miao and Dong Autonomous Prefecture in southeastern Guizhou. Tang'an is a separate higher village; Congjiang railway station serves as a gateway with an onward road and local access plan. Congjiang County, Liping town and Zhaoxing are different places. Use the exact hotel and station details before planning arrivals, luggage or a rural outing, and do not assume a broad Guizhou label means nearby destinations.",
    experiences: [
      "Read drum towers, bridges and lanes through how people gather and move within the village",
      "Choose a Tang'an visit or walk for its actual surfaces, weather and agricultural setting",
      "Give a confirmed cultural format and a regional meal time without assuming access to residents' homes",
    ],
    planningNotes: [
      "Check room sound, temperature control and the final luggage approach before choosing a timber-style guesthouse",
      "Separate public shows, actual host encounters and optional long walks in the proposal",
      "Confirm Congjiang station transfers, local vehicle access and the specific Tang'an route",
    ],
    arrival:
      "If using rail, verify the actual service to Congjiang station and the complete onward road transfer, local entry and hotel approach. The station is not the village, and a hotel pickup may involve more than one vehicle or a final walk depending on current access. A Liping or other regional gateway has a separate transfer plan. Avoid attaching a fixed performance or full rural walk to an uncertain arrival; allow a local meal and time to settle in.",
    gettingAround:
      "Use selected walking within Zhaoxing and the currently permitted local transport or road arrangement for Tang'an and the station. Establish where the main vehicle can go, which internal service is included and how luggage reaches the hotel. For a point-to-point walk, agree the actual route, guide, pickup and weather alternative. Do not assume road access at every village doorway or along every agricultural path.",
    stayStrategy:
      "For two or three nights, one carefully selected base usually provides more value than moving between nearby labels. Compare timber character and outlook with real sleep, privacy, bathroom and meal conditions. Guests who prioritize easy pickups or reduced walking should select the actual entrance and room first. If an evening program is important, confirm its location and sound implications for both visiting it and returning to a quiet room afterward.",
    firstTimerNote:
      "Zhaoxing is both a lived-in place and an established visitor destination. Its value does not require a promise that no other travelers will be present. A thoughtful guide can explain shared spaces, contemporary change and the differences among cultural formats. Choose a manageable walk and respect residents' choices; a good visit can be complete without a private home invitation, a long downhill hike or a staged portrait session.",
    faqs: [
      {
        question: "How many nights should I stay in Zhaoxing?",
        answer:
          "Two nights give a full day for village context and a Tang'an choice when conditions suit. Three nights allow a slower stay or another agreed interest. One night needs compatible train times and should stay selective rather than promise every walk, show and host visit.",
      },
      {
        question: "How do I get from Congjiang station to Zhaoxing?",
        answer:
          "Arrange the actual onward road service and current village access with the hotel or planner, including any final local transfer or walk. Confirm the exact pickup and luggage plan. Congjiang station is a gateway, not an arrival directly at the village hotel door.",
      },
      {
        question: "Where should I stay in Zhaoxing Dong village?",
        answer:
          "Compare central lanes for immediate atmosphere with a particular edge property for its actual outlook and road approach. Check sound, steps, bathroom, temperature control, meals and luggage help. A timber facade or boutique description does not establish the comfort of the booked room.",
      },
      {
        question: "Is the Tang'an to Zhaoxing walk easy?",
        answer:
          "It depends on the actual route, weather and walking ability. Downhill sections can involve steps, mud, wet stone and strain on knees. Have the current route checked locally, with suitable guidance and pickup; a shorter walk or road-based visit may be preferable.",
      },
      {
        question: "Can I hear Dong singing in Zhaoxing?",
        answer:
          "Discuss the actual available format for your date: a public visitor performance is different from a hosted conversation, rehearsal or lesson. Confirm the willing group, setting and inclusion in advance. A village ticket or private guide should not be assumed to guarantee a particular performance.",
      },
      {
        question: "Is Zhaoxing a UNESCO World Heritage Site?",
        answer:
          "Do not infer a village-wide World Heritage listing from UNESCO recognition of Grand song of the Dong ethnic group. That recognition concerns an intangible cultural tradition. Use the specific designation accurately and confirm local visits and performances separately.",
      },
      {
        question: "Can I combine Zhaoxing with Guilin or Yangshuo?",
        answer:
          "Yes, when actual rail services and the full road transfers support the route. Check the named Guilin-area station, Congjiang arrival and both hotel approaches before fixing nights. Rail time alone is not the door-to-door journey, particularly for a Yangshuo property outside town.",
      },
      {
        question: "Is Zhaoxing suitable for travelers with limited mobility?",
        answer:
          "A selected visit may work after reviewing the actual hotel, lanes, thresholds, stairs and pickup arrangements. Tang'an terrace routes add different demands and are optional. A private road vehicle does not make every guesthouse or village path step-free.",
      },
    ],
    culturalStory: {
      title: "Understand the village through its shared spaces",
      paragraphs: [
        "Drum towers and covered bridges are useful starting points for discussing community space, craft and everyday movement. Ask what the selected structure is used for and how the surrounding lanes relate to it, allowing a local account rather than assuming one explanation fits every Dong settlement. Timber architecture can be repaired, adapted and rebuilt while remaining part of contemporary life; value does not depend on calling every visible surface ancient.",
        "Music deserves the same care. Grand song is a living tradition carried by people, not an ambient soundtrack provided automatically to visitors. A public program can have value when its format is understood, while a personal encounter requires consent and a clear purpose. Avoid treating residents as performers whenever a camera appears. Good interpretation gives people and places their specificity rather than promising an exotic village unchanged by the present.",
      ],
    },
    foodStory: {
      title: "Choose a regional table that fits the day",
      paragraphs: [
        "Rice, vegetables and different meat, fermented or sour preparations provide possible directions for a meal, but the actual kitchen and menu should guide the choice. Ask how a selected dish is made and what ingredients create its flavor rather than treating every sour dish as the same regional specialty. A seated lunch can be a welcome break after a village walk, especially when the next activity involves wet paths or a road journey.",
        "Discuss allergies, spice, meat preferences, stocks and fermented ingredients before ordering. A vegetable plate does not establish vegetarian preparation, and a village setting does not guarantee halal suitability. A hosted meal is a separate arrangement, not an implied right to enter a family home. Confirm breakfast and dinner at the actual property, particularly before an early train or after a Tang'an outing.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the village through the actual gateway",
        description:
          "Meet at the named station or confirmed road gateway and allow the final hotel approach and luggage. Keep the first meal local and add a short orientation only when arrival time permits.",
      },
      {
        day: "Full day 1",
        title: "Village spaces and a suitable Tang'an choice",
        description:
          "Explore selected towers, bridges and lanes with context, then choose a road-based Tang'an visit or an appropriate checked walk if the full day and weather support it. Keep meals and return transport explicit.",
      },
      {
        day: "Optional extra full day",
        title: "Slow the stay or choose a confirmed cultural format",
        description:
          "Add a separate countryside perspective or an actual agreed host, class or program. Do not assume private home entry, a festival or spontaneous singing because an extra night is available.",
      },
      {
        day: "Departure",
        title: "Protect the station transfer and next chapter",
        description:
          "Allow packing, luggage and the full road journey to the actual departure point. This outline is illustrative, not a published package or a guarantee of a particular performance, trail or host.",
      },
    ],
  },
};
