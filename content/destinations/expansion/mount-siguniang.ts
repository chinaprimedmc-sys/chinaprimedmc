import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/mount-siguniang.svg",
  alt: "Mount Siguniang planning schematic comparing Shuangqiao, Changping and Haizi valley purposes with a separate hotel and altitude decision; original diagram, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const mountSiguniangGuide: ExpandedDestination = {
  id: "mount-siguniang",
  name: "Mount Siguniang",
  region: "southwest",
  kicker: "Choose the valley and altitude profile before the mountain photograph",
  description:
    "Plan Mount Siguniang around the right valley, actual walking and a carefully checked highland base, separating scenic visits from trekking and climbing in western Sichuan.",
  stay: "3–4 nights only within an individually suitable highland route",
  bestFor: "High-mountain scenery with carefully chosen valley routes",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["danba", "chengdu", "jiuzhaigou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Mount Siguniang Guide: Valleys, Altitude & Where to Stay",
    seoTitle: "Mount Siguniang Guide: Valleys & Altitude",
    seoDescription:
      "Compare Mount Siguniang's Shuangqiao, Changping and Haizi valleys, scenic visits versus trekking, highland hotel checks and the full Chengdu road journey.",
    answer:
      "Mount Siguniang (四姑娘山), also written Siguniangshan or Four Sisters Mountain, is in Xiaojin County, Aba/Ngawa, in western Sichuan. A first visit should choose among Shuangqiao, Changping and Haizi valleys rather than assume one mountain ticket provides the same experience everywhere. The main town base is around 3,200 meters above sea level, and valley routes can go higher. Scenic transport can reduce walking without reducing the altitude reached. Come only through a suitable highland plan, with the actual sleeping and daytime elevations, individual medical considerations and response to illness reviewed before fixing sightseeing.",
    stayAnswer:
      "Three nights can provide two full days for a selective scenic stay when the wider route and individual suitability support it. Four nights allow a slower pace or another distinct route, but should not become a promise that a set number of nights guarantees acclimatization. Two nights leave limited useful time after the substantial road arrival and require careful assessment. More nights at a high base are not a universal medical solution. Choose the full sleeping profile, actual valley and guest needs first; duration follows those decisions.",
    hotelAnswer:
      "Start with the actual Siguniangshan town-area property, also encountered in older travel material as Rilong. Compare its exact address with the chosen valley entrance, room, heating, hot water, bathroom, noise, meals and sleeping elevation. A room advertised with oxygen needs details about the actual facility, instructions, availability and limitations; it does not guarantee adaptation or replace medical assessment. A property near one valley is not necessarily best for another. Danba is a separate stay and road decision, not a lower hotel district beside the same entrance.",
    sightseeingQuestion: "Should you choose Shuangqiao, Changping or Haizi Valley?",
    sightseeingAnswer:
      "Shuangqiao often suits a first scenic visit using the operator's road transport between selected stops, with remaining walks and high elevations still relevant. Changping offers a different valley route in which the chosen turnaround and walking distance matter; a short out-and-back and a long trek are not the same day. Haizi generally requires a more demanding walking plan and should not be added as another casual bus excursion. Confirm current operation, exact route and guest suitability. None of these scenic choices is a summit climb or a guarantee of seeing every named peak.",
    visitorResources: [
      {
        label: "Xiaojin county government",
        href: "https://www.xiaojin.gov.cn/",
        scope:
          "County background and public notices. Confirm current valley access, reservations, operator transport, trail conditions and any special activity requirements with the responsible authority or provider. A general destination reference does not establish medical suitability, an open trail or a mountain-guide booking.",
      },
      {
        label: "Aba prefecture government",
        href: "https://www.abazhou.gov.cn/",
        scope:
          "Regional context and public notices for Aba/Ngawa. Different counties and routes have distinct road, elevation and access conditions. This reference does not verify a dated transfer, an individual route's opening or a uniform set of arrangements for every visitor and activity.",
      },
      {
        label: "UNESCO: Sichuan Giant Panda Sanctuaries",
        href: "https://whc.unesco.org/en/list/1213/",
        scope:
          "Background on the inscribed property, whose name includes Wolong, Mount Siguniang and Jiajin Mountains. Heritage recognition does not imply routine wildlife sightings, unrestricted reserve entry, a panda-center visit or one ticket covering all components. Use actual operators for visitor arrangements.",
      },
    ],
    serviceScope:
      "A proposed stay should identify the actual room and sleeping elevation, complete road route, selected valley, expected maximum elevation, walking and turnaround, guiding language, meals and operator transport. Confirm current access and any specialist provider separately. Describe individual walking and health considerations early, obtain appropriate clinical advice and check insurance for the actual altitude and activity. Agree how illness, descent or road disruption will be handled. Scenic guiding is not mountaineering instruction, and a private car or oxygen-equipped hotel is not a guarantee of safety, access or adaptation.",
    routeAdvice:
      "Mount Siguniang can form a distinct highland chapter through Chengdu, sometimes combined with Danba when the actual road and altitude sequence are suitable. Do not treat a scenic western Sichuan loop as inherently easier than returning the same way. Jiuzhaigou is another separate mountain destination requiring its own journey, not a local extra valley. No matching published Mount Siguniang product is recommended here. Request an individually reviewed proposal using the sample outline, giving walking ability, prior altitude experience, room needs and desired activity. Existing Chengdu or Jiuzhaigou products do not include this stay by default.",
    practicalPlanning: {
      timing:
        "Keep arrival forgiving after the mountain road journey rather than schedule an essential long walk immediately. One selected valley per full day generally provides a clearer purpose than racing between entrances. Check current transport and return cutoffs, allowing time to reach the final pickup from the chosen turnaround. A long trek or pass crossing needs a separate plan, not an extension improvised because the morning was clear. Protect the complete road return before an onward flight or train.",
      walking:
        "Evaluate both effort and altitude. A short boardwalk, uneven valley path, forest section and longer trek have different demands, and snow, ice or mud can change them. Specify the actual distance, ascent, highest point, turnaround, toilets and resting options. Shuttle transport can reach high terrain while leaving modest walking; that is still a high-altitude visit. Horse services, if proposed, need separate suitability, operator and welfare checks and are not an automatic accessibility or medical solution.",
      cost: "Compare the actual room, heating, meals, guide language, complete vehicle route, valley admission and local operator transport. Identify specialist trekking or climbing services separately from a scenic guide. Check insurance limits for altitude, trekking, rescue and the exact activity rather than rely on a generic travel policy. Oxygen facilities or emergency arrangements require clear terms and limitations. Paying more can improve comfort, interpretation and planning; it cannot purchase clear peaks, eliminate altitude illness or open a closed route.",
    },
    attractions: [
      "Selected Shuangqiao Valley stops using current operator transport and suitable remaining walks",
      "A defined Changping Valley out-and-back with a realistic turnaround",
      "Haizi Valley only through a suitable separately assessed walking plan",
      "Permitted mountain viewpoints with visibility treated as weather-dependent",
      "A suitable town-area property with actual heating, room and elevation checked",
      "A cultural or food interest only when its venue and host are genuinely confirmed",
    ],
    stays: [
      {
        label: "2 nights: a tightly focused introduction",
        advice:
          "Consider only when the full road and altitude plan suit the individual traveler. Choose one main scenic priority, not all valleys. A brief stay does not remove the high sleeping elevation, and convenient transport times are not evidence of medical suitability.",
      },
      {
        label: "3 nights: two full days with clear limits",
        advice:
          "Use one selected scenic day and a second route or quieter day only when conditions and individual tolerance support it. Keep meals and rest practical. Do not treat two full days as permission to escalate to a demanding trek or assume a fixed acclimatization outcome.",
      },
      {
        label: "4 nights: a slower plan when appropriate",
        advice:
          "Add flexibility or a genuinely distinct valley interest after assessing the full route and guest. More highland nights are not universally better or a guarantee of adaptation. A suitable alternative or descent can matter more than completing every booked scenic day.",
      },
    ],
    hotelAreas: [
      {
        name: "Siguniangshan town area / the actual highland base",
        advice:
          "Check the full address, sleeping elevation, heating, bathroom, hot water, beds, quiet and meals. Older listings may use Rilong. A town property can provide practical services without being beside every valley entrance. Review the actual room rather than infer comfort from mountain-themed branding.",
      },
      {
        name: "A property chosen for Changping access / a specific route priority",
        advice:
          "Map the real door-to-entrance journey and remaining approach. Near a valley does not mean direct trail entry or step-free access, and it may add travel to Shuangqiao. Confirm room category, meals, staffing and the precise walking plan before making proximity the main reason to book.",
      },
      {
        name: "A property toward Shuangqiao access / a different daily pattern",
        advice:
          "Select only when the actual property and route justify it. Compare the transfer, dinner, room heating, noise and sleeping elevation with town alternatives. A shorter entrance drive does not lower the elevation reached by scenic transport or establish better medical support.",
      },
    ],
    tradeoffs: [
      {
        title: "Less walking does not mean lower altitude",
        advice:
          "A shuttle-assisted route may be physically easier in one sense while still taking visitors to high elevations. Assess the maximum and sleeping profile, pace and individual health separately from step count. A private driver, short boardwalk or oxygen facility does not guarantee freedom from altitude illness. Seek appropriate clinical advice and agree what happens if the guest becomes unwell.",
      },
      {
        title: "Shuangqiao is a selected scenic route, not all of Mount Siguniang",
        advice:
          "Operator transport can help connect stops, with current operation and remaining walking checked. It does not guarantee a view of all four peaks or make every platform suitable for every guest. Choose the stops for their landscape value and the day's conditions, keeping the return service and useful rest visible.",
      },
      {
        title: "Changping requires an actual turnaround, not an unlimited valley promise",
        advice:
          "A short introduction and a longer trek have different time, effort and support requirements. Specify the intended route, distance, ascent, highest point and return arrangements before departure. Do not extend farther merely because the outward walk feels comfortable; the return, weather and transport cutoffs remain. A specialist pass-crossing trek is a separate activity.",
      },
      {
        title: "Haizi and summit climbing are separate activity decisions",
        advice:
          "Haizi should be considered through a suitable walking plan rather than sold as another casual bus day. Climbing a named summit requires different expertise, current permissions where applicable, equipment, weather judgment and insurance. A scenic itinerary, generic private guide or village hotel booking does not establish those services or the guest's suitability.",
      },
      {
        title: "A famous mountain image is not a view guarantee",
        advice:
          "Cloud, precipitation, snow and seasonal conditions can obscure peaks or change access. A room with a mountain-facing window does not guarantee a clear landmark. Check the actual outlook and choose a stay that remains comfortable when visibility is poor. A photographer can help with technique and timing without creating weather or permission to leave designated routes.",
      },
      {
        title: "Oxygen-equipped rooms need clear limitations",
        advice:
          "Ask what the facility actually is, when and how it is provided, its instructions and any extra charges. Do not equate an amenity label with clinical care, guaranteed adaptation or permission to continue a strenuous day while unwell. Individual health questions belong with a qualified clinician, and the itinerary needs a practical illness and descent response beyond the room description.",
      },
      {
        title: "This Sichuan destination is distinct from the Tibet Autonomous Region",
        advice:
          "Mount Siguniang is in Aba/Ngawa in Sichuan. Do not copy a Tibet Autonomous Region permit description onto every local sightseeing visit. Equally, check actual traveler documents, current access and any special trekking, climbing or onward-region requirements. Geographic terminology does not establish universal unrestricted access.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "danba",
        advice:
          "Danba offers village architecture and tower traditions in a different county and prefecture. Compare the whole road and sleeping-elevation sequence, selected properties and useful nights. A lower valley stop is not a guaranteed acclimatization method or a reason to add an otherwise unsuitable highland stay.",
      },
      {
        slug: "chengdu",
        advice:
          "Chengdu provides city culture, food and a possible gateway. The mountain road transfer is a distinct journey with current conditions, driver hours and higher sections assessed. Protect a sensible return margin before onward transport, and do not treat existing Chengdu tours as including Mount Siguniang services.",
      },
      {
        slug: "jiuzhaigou",
        advice:
          "Jiuzhaigou offers a different lake-and-valley landscape in another part of Sichuan. It requires a separate full connection, property and altitude assessment, not a local extra day from Siguniangshan. Choose both only when the contrast, useful nights and transport justify a larger mountain itinerary.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can offer appealing landscape conditions, but snow, ice, rain and temperature changes affect actual routes. Summer can bring rain and road disruption; winter requires serious attention to cold, surfaces, heating and current access. A season suitable for a selected scenic visit is not automatically suitable for a trek or summit. Check the complete route's forecasts and notices near departure. Clear peaks, fall color and an open trail are not guaranteed by a month or a hotel category.",
    orientation:
      "Mount Siguniang is in Xiaojin County in Aba/Ngawa, western Sichuan. Siguniangshan town, also known in older travel material as Rilong, is the highland base; Shuangqiao, Changping and Haizi are distinct valleys. The four-peak mountain name is not a single summit itinerary. Danba lies in Garzê/Ganzi on a separate road chapter. Use exact entrance, property and Chinese names to avoid treating different valleys or prefectures as one continuous scenic park.",
    experiences: [
      "Choose a valley for its actual landscape, transport, remaining walking and altitude",
      "Enjoy a carefully assessed highland property with realistic heating, meals and room standards",
      "Separate a scenic introduction from any specially arranged trek or climbing activity",
    ],
    planningNotes: [
      "Review maximum and sleeping elevations, individual suitability, insurance and an illness response",
      "Choose Shuangqiao, a defined Changping route or a separately assessed Haizi plan rather than every valley",
      "Check the full mountain road, correct entrance, local transport and return cutoff before fixing the day",
    ],
    arrival:
      "Chengdu can be a gateway, followed by a substantial separately assessed road journey. Confirm the actual airport or station, current route, pass elevations, driver duty, stops and arrival time. Do not attach an essential long walk to an uncertain transfer. Other arrival proposals need the same full-journey review. Allow an appropriate margin on the return before any fixed train or flight, and assess the health and road implications of a proposed alternative route independently.",
    gettingAround:
      "Use a planned vehicle between the actual property and chosen entrances, then the responsible operator's transport and permitted walks where applicable. Local scenic transport does not operate as an unlimited private car or remove altitude. Agree the route, turnaround, rest and return cutoff. Horse riding, specialist trekking and climbing need their own suitable providers and terms. A private guide cannot open a closed trail or safely turn a scenic day into an improvised expedition.",
    stayStrategy:
      "One checked base can support a selective three- or four-night stay when the individual and wider altitude profile suit. Compare actual room heating, beds, bathroom, quiet, meals and sleeping elevation rather than a general luxury label. A different valley entrance may mean another transfer without requiring another hotel. Protect rest and flexibility, and retain the option to change the plan if the guest is unwell. Completing booked sights should never become the reason to ignore symptoms or current access restrictions.",
    firstTimerNote:
      "The first decision is whether this highland chapter suits the actual traveler, then which valley serves the desired landscape and walking. A shuttle-assisted day is still a high-altitude visit. Choose a clear route with enough explanation and comfort rather than equate a longer valley list with a better trip. A thoughtful plan makes limits, uncertainty and the practical response clear before arrival.",
    faqs: [
      {
        question: "Which Mount Siguniang valley is best for a first scenic visit?",
        answer:
          "Shuangqiao often suits a selective scenic day using current operator transport, with remaining walks and altitude still assessed. Changping requires a defined walking route and turnaround. Haizi generally needs a more demanding plan. Choose the actual route for the guest rather than assume all valleys offer the same day.",
      },
      {
        question: "Can I visit Mount Siguniang without a strenuous hike?",
        answer:
          "A selected shuttle-assisted route may reduce walking, but it can still reach high elevations and leave steps or uneven ground. Check the actual stops, maximum elevation, walking and individual suitability. Less physical effort is not a guarantee of lower altitude or freedom from altitude illness.",
      },
      {
        question: "How high is the Mount Siguniang hotel base?",
        answer:
          "The main town area is around 3,200 meters, with variation by the actual property; valley routes can go higher. Confirm the precise sleeping and daytime profile before booking. A fixed number of nights, oxygen amenity or car transfer does not guarantee acclimatization.",
      },
      {
        question: "How many nights should I stay at Mount Siguniang?",
        answer:
          "Three nights can give two full days and four allow a slower plan, only when the individual and wider route are suitable. Two nights leave limited useful time after the road arrival. Choose the actual health, altitude and route requirements first rather than use duration as a medical guarantee.",
      },
      {
        question: "Can I see all four peaks from Shuangqiao Valley?",
        answer:
          "Do not promise that from the destination name. Valleys offer different perspectives, and cloud can obscure landmarks. Choose the actual stops and current access for their landscape value. A scenic visit does not automatically provide every famous view or a summit climb.",
      },
      {
        question: "Does a Mount Siguniang tour include climbing a summit?",
        answer:
          "A scenic stay does not include mountaineering by default. Summit climbing and specialist treks require different expertise, permissions where applicable, equipment, weather decisions and insurance. Confirm the actual activity and qualified provider separately rather than infer it from a mountain destination or private guide label.",
      },
      {
        question: "Does an oxygen-equipped hotel prevent altitude illness?",
        answer:
          "No guarantee is implied. Ask what facility is actually provided and its limitations; it is not a substitute for individual clinical advice or an illness and descent plan. Do not treat a room amenity as permission to continue strenuous sightseeing while unwell.",
      },
      {
        question: "Is Mount Siguniang part of a Chengdu or Jiuzhaigou product?",
        answer:
          "No matching published Mount Siguniang product is recommended here. Existing city or other Sichuan journeys do not automatically include this road transfer, highland hotel or valley services. Request a separate proposal with the actual route, suitability, room and inclusions assessed.",
      },
    ],
    culturalStory: {
      title: "Read a mountain landscape beyond its headline photograph",
      paragraphs: [
        "The Mount Siguniang name connects several peaks, distinct valleys and a wider cultural landscape. A good guide explains the actual route, visible landforms and local place names without claiming every visitor sees the same mountain image. The UNESCO-listed Sichuan Giant Panda Sanctuaries provide conservation context, not a promise of a wild panda encounter or unrestricted reserve access. Scenic tourism and specialist mountain activity have different purposes and boundaries.",
        "Local communities and religious or residential places are not additions available on demand between viewpoints. Any cultural encounter needs a real venue, consent and useful interpretation. Respect photography instructions and distinguish a host's account, traditional story and documented context. A meaningful highland visit does not require staging a ceremony, entering homes uninvited or describing every mountain community through one generic cultural script.",
      ],
    },
    foodStory: {
      title: "Plan reliable meals rather than a compulsory highland menu",
      paragraphs: [
        "Choose food through the actual property and restaurant, with a proper meal and drinking water around scenic days. A guest may want regional dishes, familiar staples or lighter portions rather than repeated large meat meals. Dairy and strong tea preparations should be explained and optional. Confirm breakfast and lunch arrangements before entering a valley rather than assume every scenic stop provides suitable seating and food at any hour.",
        "Clarify beef, pork, dairy, wheat, eggs, soy, stocks and shared preparation as relevant to the menu. A mountain property may have limited ability to manage a serious allergy, so establish genuine capacity and alternatives ahead. Food or drink should not be presented as preventing altitude illness. Comfortable meals support the day, while individual medical suitability and any health concern require appropriate professional advice.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Complete the assessed road journey and settle in",
        description:
          "Use the actual gateway, route and stops, confirm the sleeping elevation and room facilities, and keep the evening forgiving. Follow the agreed health and illness plan rather than add an essential long walk after arrival.",
      },
      {
        day: "Full day 1",
        title: "One selected scenic valley",
        description:
          "Choose the actual Shuangqiao stops or another suitable assessed route, with current transport, remaining walks, altitude and return cutoff clear. Keep meals and rest practical, and change the day if conditions or individual wellbeing require it.",
      },
      {
        day: "Full day 2",
        title: "A distinct route only when appropriate",
        description:
          "Use a defined Changping out-and-back, a quieter alternative or another separately assessed subject. Do not escalate a scenic stay into Haizi, a long trek or a summit simply because a second day is available. A fourth night can add flexibility without guaranteeing adaptation.",
      },
      {
        day: "Departure",
        title: "Protect the full mountain return or onward chapter",
        description:
          "Follow the actual assessed road and altitude sequence with a sensible margin before fixed transport. This three-night outline is illustrative, not a published product or guarantee of acclimatization, clear peaks, open trails, rescue capacity or specialist climbing services.",
      },
    ],
  },
};
