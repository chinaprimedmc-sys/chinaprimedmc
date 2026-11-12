import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/huanglong.svg",
  alt: "Huanglong planning schematic separating a high-altitude scenic route, the actual cableway connection and a distinct Jiuzhaigou stay; original diagram, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const huanglongGuide: ExpandedDestination = {
  id: "huanglong",
  name: "Huanglong",
  region: "southwest",
  kicker: "Travertine pools, with altitude and the real walking route made clear",
  description:
    "Plan Huanglong's terraced pools in northern Sichuan with honest altitude, cableway and walking advice, comparing bases and a separate Jiuzhaigou chapter.",
  stay: "A separate scenic day within a suitable regional route",
  bestFor: "Travertine landscapes and travelers suited to a higher mountain visit",
  interests: ["landscape", "heritage"],
  relatedDestinationIds: ["jiuzhaigou", "chengdu", "mount-siguniang", "songpan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Huanglong Travel Guide: Altitude, Cableway & Route",
    seoTitle: "Huanglong Travel Guide: Altitude & Cableway",
    seoDescription:
      "Plan Huanglong with pool-route altitude, remaining walking after the cableway, hotel bases and full transfers. Compare a separate day with Jiuzhaigou.",
    answer:
      "Huanglong (黄龙) is a high-mountain scenic area in Songpan County, Aba Tibetan and Qiang Autonomous Prefecture, Sichuan. Its principal visitor interest is a valley of travertine terraces, pools and forest. The main visitor route rises from roughly 3,200 meters toward the upper Five-Color Pool area around 3,500–3,600 meters; exact elevations vary along the paths. Give Huanglong its own scenic day, subject to a suitable ascent plan and current access. The cableway reduces part of the climb but leaves walking and altitude exposure. It is a separate destination from Jiuzhaigou, not an extra section of that park or an automatic inclusion in a Jiuzhaigou tour.",
    stayAnswer:
      "Huanglong is usually planned as a separate daytime visit within a wider northern Sichuan journey rather than a fixed number of resort nights. One regional night can support a focused visit when the actual arrival, departure and altitude profile fit. Two nights may improve rest and timing; a combined Jiuzhaigou chapter needs its own park day and transfer time. More nights are not an acclimatization guarantee. Choose the sleeping bases first, review individual suitability and avoid attaching the full scenic route to a rushed transport day merely because a station carries the Huanglong name.",
    hotelAnswer:
      "Compare a property near the Huanglong scenic approach with a Songpan or Chuanzhusi-area base, or a separate Jiuzhaigou-area stay. These choices have different road journeys, sleeping elevations and meal options. A near-park room may improve one day's timing while adding high-altitude sleeping exposure; a hotel farther away is not automatically lower or medically preferable. Check the exact address and elevation, heating, hot water, lifts, bathroom, meals and vehicle approach. A room advertised with oxygen equipment is not medical supervision and does not make a particular ascent suitable.",
    sightseeingQuestion:
      "Can you visit Huanglong and Jiuzhaigou in one day, and does the cableway make Huanglong easy?",
    sightseeingAnswer:
      "Plan the two scenic areas on separate days. Jiuzhaigou deserves its own park time, while Huanglong adds a different road journey, higher elevations and another walking route. At Huanglong, choose between the currently available cableway-supported route, a shorter selected visit or leaving the area out when it does not suit. The cableway's upper connection is not arrival at every pool; remaining paths, gradients, steps and the descent require review. Walking downhill can still strain knees, and less climbing does not remove altitude exposure. A rest day is a valid alternative to adding a second mountain park.",
    visitorResources: [
      {
        label: "UNESCO: Huanglong Scenic and Historic Interest Area",
        href: "https://whc.unesco.org/en/list/638/",
        scope:
          "Background on Huanglong's natural heritage and landscape. The World Heritage property description covers a wider area than any one visitor path and does not establish current pool conditions, cableway operation, entry arrangements or permission to leave designated routes.",
      },
      {
        label: "Aba prefecture government",
        href: "https://www.abazhou.gov.cn/",
        scope:
          "Regional context and public notices, mainly in Chinese. Confirm actual Huanglong visitor routes, ticketing, seasonal access, road conditions and transport with the responsible venue and providers. A prefecture reference is not evidence that Huanglong and Jiuzhaigou are adjacent or that a particular room is available.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains, full station names and ticket procedures. A Huanglongjiuzhai station arrival still requires a road plan to the named hotel or scenic entrance. Confirm the full service and both transfers rather than equate a station name with arrival in either park.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel and altitude illness",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General ascent and travel-health guidance, not individual clearance or a guarantee that this route is suitable. Review health and the complete sleeping-elevation profile with a qualified clinician where appropriate. Cableways, private vehicles and hotel oxygen equipment do not eliminate altitude risk.",
      },
    ],
    serviceScope:
      "A Huanglong proposal should name the actual scenic route, entry and cableway arrangements, remaining walking, road transfers, guide language, hotel address and sleeping elevation. State any internal transport separately and confirm current operation. Admission does not authorize stepping onto fragile terraces, entering closed paths or using every scenic service. Review relevant health and mobility concerns before committing; private guiding is not medical clearance. Our published seven-day Chengdu and Jiuzhaigou itinerary does not include Huanglong: any addition requires separate suitability review, service confirmation and pricing, and may change nights or onward transport.",
    routeAdvice:
      "Choose Huanglong for a specific interest in travertine landscapes and only when the route suits the travelers. Combine it with a separately planned Jiuzhaigou stay when actual roads, useful days and sleeping elevations support both. Chengdu provides a different cultural and food chapter before or after the mountains. No published product including Huanglong is recommended on this page. Request a tailored addition with dates, previous sleeping elevations, walking and knee concerns, actual gateways and onward bookings. The best plan may leave Huanglong out rather than turn a flexible day into an unsuitable higher visit.",
    practicalPlanning: {
      timing:
        "Protect a separate scenic window with the full road approach, entry procedure, cableway if selected, connecting walk, pool route and return included. Match it to actual opening and weather. Do not schedule the longest route after an uncertain train arrival or before a tight flight. If the regional sequence changes, revisit sleeping elevations and useful time rather than keep the same attraction list. An extra hotel night provides flexibility but does not guarantee good conditions or acclimatization.",
      walking:
        "Assess the exact cableway-supported or walking route, including the upper connection, gradients, steps, long descent, toilets and places to shorten the visit. Wet, icy or snowy surfaces can change demands. Some guests may find sustained downhill walking more difficult than expected. Stay on permitted paths and protect the fragile terraces. At altitude, an ordinary pace may feel harder; stop and seek appropriate assessment for concerning symptoms rather than continue higher to complete a viewpoint checklist.",
      cost: "Compare named admissions, cableway direction and scope, actual internal transport, guide hours, complete road legs and hotel nights. Confirm what happens if weather or current operation changes the route. A Huanglong addition to a Jiuzhaigou booking is not merely an extra entrance ticket: it can change vehicle time, guiding, room sequence and onward travel. A premium should buy realistic timing and clear support, not an altitude-safety guarantee, exclusive pools or access beyond public paths.",
    },
    attractions: [
      "A selected permitted route through Huanglong's main travertine valley",
      "Five-Color Pool / Wucai Chi when access, walking and altitude suit",
      "Forest, stream and terrace interpretation without leaving designated paths",
      "A cableway-supported route only with current operation and remaining walking reviewed",
      "Songpan as a separately selected town interest, not an assumed extra full day",
      "Jiuzhaigou as a separate scenic destination with its own park day",
    ],
    stays: [
      {
        label: "A separate scenic day: a focused Huanglong visit",
        advice:
          "Choose a suitable regional base and actual transport pattern. Include all remaining walking and the return. A place on a map or a station bearing the name does not prove the visit fits between two fixed departures.",
      },
      {
        label: "1–2 regional nights: timing and rest, when appropriate",
        advice:
          "Compare the actual room, sleeping elevation, road journeys and meals. An additional night can reduce rushing but is not a medical prescription. Review suitability before treating a high near-park overnight as the most convenient choice.",
      },
      {
        label: "A wider Jiuzhaigou combination: distinct park days",
        advice:
          "Give each scenic area its own time and allow the connecting journey. Choose useful hotel nights and a practical departure. The existing seven-day Jiuzhaigou product leaves Huanglong outside its standard inclusions; an addition is separately arranged and priced.",
      },
    ],
    hotelAreas: [
      {
        name: "Near the Huanglong approach / timing with higher sleeping exposure",
        advice:
          "Review the exact property elevation, heating, hot water, meals and access, not simply a near-entrance label. The room should suit a cold or wet evening as well as a scenic photograph. Convenience for the entrance does not establish health suitability.",
      },
      {
        name: "Songpan or Chuanzhusi area / a distinct regional base",
        advice:
          "Compare actual addresses, elevations, dining and the complete scenic and station transfers. These are not interchangeable hotel zones, and neither should be described as automatically low altitude. Check room comfort, sleep and the route to meals.",
      },
      {
        name: "Jiuzhaigou-area accommodation / a separate park chapter",
        advice:
          "Choose for the actual Jiuzhaigou stay, with Huanglong's road journey visible. A Zhangzha or wider-valley resort is not at Huanglong's gate. Avoid using one attractive hotel to conceal long return drives or counting the same full day for both parks.",
      },
    ],
    tradeoffs: [
      {
        title: "Less climbing is not less altitude",
        advice:
          "A cableway can reduce exertion on part of the route while still taking visitors to a high setting. Review the whole ascent, sleeping elevations and personal suitability. Hotel equipment and a short scenic route do not make altitude illness impossible or justify dismissing symptoms.",
      },
      {
        title: "The cableway is a connection, not the entire visit",
        advice:
          "Name the actual direction, current operating basis and remaining paths. The upper terminal is not every pool viewpoint, and a long descent may remain. A shorter selected walk can be appropriate, but do not promise a step-free full circuit or the same views with no effort.",
      },
      {
        title: "Huanglong and Jiuzhaigou deliver different landscapes",
        advice:
          "Huanglong's terraces and mineral-deposition context differ from Jiuzhaigou's lake-and-waterfall valleys. The contrast can justify both for suitable travelers with enough time. It does not make them one park or require every guest to add the higher site.",
      },
      {
        title: "Pool appearance is not guaranteed by a season label",
        advice:
          "Water levels, flow, weather, light and conservation management affect the visible scene. Winter and shoulder-season conditions can alter paths and services. Explain the likely interest and current access without promising a particular photograph, fully filled terraces or operating cableway throughout the year.",
      },
      {
        title: "A rail arrival still needs a substantial regional plan",
        advice:
          "Check the actual station, dated service, road route, hotel and entry window. The name Huanglongjiuzhai does not mean the train arrives at either scenic entrance. Avoid attaching the whole high-altitude walk to arrival simply to make the itinerary appear efficient.",
      },
      {
        title: "Fragile terraces are viewed from permitted routes",
        advice:
          "Stay on designated paths and follow current instructions. A private guide, photography interest or premium booking does not authorize walking onto terraces, taking restricted shortcuts, using a drone or entering closed areas. Protecting the site is part of a well-run visit.",
      },
      {
        title: "A flexible Jiuzhaigou day is not automatically a Huanglong inclusion",
        advice:
          "The published seven-day route includes one main Jiuzhaigou park day and a flexible second mountain day, ending in the region. Huanglong, another park entry and a Chengdu return are separate choices. An addition needs a written service basis, actual suitability assessment and a revised complete route.",
      },
    ],
    products: [],
    articles: [
      {
        slug: "jiuzhaigou-altitude-walking-accessibility",
        label: "Review the region's altitude, walking and mobility choices",
      },
      {
        slug: "chengdu-to-jiuzhaigou-transport",
        label: "Compare the complete regional rail, road and arrival plan",
      },
    ],
    connections: [
      {
        slug: "songpan",
        advice:
          "Songpan adds a historic-town chapter rather than another pool route. Compare an old-town room with Chuanzhusi through sleeping elevation, warmth, meals and complete transfers. One purposeful town night can enrich the journey; it does not guarantee acclimatization or make the higher Huanglong route suitable.",
      },
      {
        slug: "jiuzhaigou",
        advice:
          "Give Jiuzhaigou a separate full park day and a suitable hotel base. Huanglong adds another road journey and higher scenic route, so compare health, walking and useful nights before adding it. The published Jiuzhaigou journey can be reviewed on that page; Huanglong is not included and needs a separate proposal.",
      },
      {
        slug: "chengdu",
        advice:
          "Chengdu adds pandas, tea and Sichuan food at a different pace before or after the mountain chapter. Use dated rail or flight services and full road transfers. A Huanglong visit followed by an international departure should not depend on a tight mountain-to-airport connection.",
      },
      {
        slug: "mount-siguniang",
        advice:
          "Mount Siguniang is another mountain chapter with different valleys, walking formats and substantial travel. It is not a local excursion from Huanglong. Combine only when enough time, actual roads and an individually suitable altitude profile justify both, rather than assume more high scenery always improves the trip.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring through autumn can be a starting point for a main-valley visit, but water, weather, path access and cableway services must be checked for the actual date. Summer rain can affect surfaces and roads; autumn demand can be high without guaranteeing a particular color or pool level. Winter and shoulder seasons may change the available route and services, with cold, snow or ice requiring separate planning. Choose the current feasible experience rather than promise a postcard scene or use one season rule for every northern Sichuan park.",
    orientation:
      "Huanglong's principal visitor valley is in Songpan County, Aba, northern Sichuan. Its high-altitude scenic route, nearby accommodation, Songpan and Chuanzhusi bases, Huanglongjiuzhai rail station, Jiuzhai Huanglong airport and Jiuzhaigou are distinct planning points. Use actual Chinese names and addresses, dated services, road legs and sleeping elevations. A broad Jiuzhaigou-region label should not hide the route that determines whether Huanglong is appropriate.",
    experiences: [
      "Understand travertine terraces from a selected permitted route",
      "Choose the actual walking and cableway combination with altitude visible",
      "Give a separate Jiuzhaigou or Chengdu chapter its own useful time",
    ],
    planningNotes: [
      "Review the full ascent and sleeping elevations rather than rely on hotel oxygen or cableways",
      "Confirm current route, remaining descent, weather and operation before tickets are fixed",
      "Keep Huanglong outside the standard Jiuzhaigou product inclusions unless separately agreed",
    ],
    arrival:
      "Confirm the dated train and full station, or the actual flight to Jiuzhai Huanglong airport if proposed, then the complete road transfer. Neither gateway is the scenic entrance. Review arrival elevation, the route and the sleeping base before attaching a visit. An uncertain arrival should not determine whether you can finish a long high-altitude walk. Use the full hotel address and allow the time needed for meals, luggage and rest.",
    gettingAround:
      "Private road transport serves the regional legs; scenic-area transport, the cableway and walking have their own current rules and operation. Name the actual services and the route left on foot. Review gradients, steps, descent, toilets and the ability to shorten the visit. Stay on designated paths and follow closures. A car or cableway reduces some effort without granting access to closed areas or removing altitude exposure.",
    stayStrategy:
      "Choose the complete regional hotel sequence before optimizing one shorter transfer. Near-Huanglong accommodation, Songpan or Chuanzhusi properties and a Jiuzhaigou-area resort have different purposes, elevations and road legs. Prioritize suitable sleeping elevation, effective heating, bathroom, meals and quiet. Avoid unnecessary hotel moves, but do not force one base to serve distant parks if that creates long repeat drives. Extra nights should improve rest and useful time without being sold as guaranteed acclimatization.",
    firstTimerNote:
      "Decide whether Huanglong is suitable before deciding how to fit it in. The pools can provide a strong landscape contrast, but they are not mandatory for a good Sichuan journey. Ask about the real remaining walking after the cableway and the entire altitude profile. A thoughtful operator should be comfortable recommending a shorter visit, a different day or leaving the higher park out when that is the better choice for the guests.",
    faqs: [
      {
        question: "Where is Huanglong, and is it inside Jiuzhaigou?",
        answer:
          "Huanglong is in Songpan County, Aba, Sichuan. It is a separate scenic area from Jiuzhaigou with its own roads, entry and walking route. A Jiuzhaigou booking or regional station arrival does not include admission or a full Huanglong day.",
      },
      {
        question: "What is Huanglong's visitor-route altitude?",
        answer:
          "The main valley route rises from roughly 3,200 meters toward the Five-Color Pool area around 3,500–3,600 meters, with variation by path. Review the full ascent and sleeping elevations. The wider World Heritage property contains other elevations and should not be confused with one visitor route.",
      },
      {
        question: "Does the Huanglong cableway remove the walking?",
        answer:
          "No. It reduces part of the climb but leaves connecting paths, viewpoints and potentially a sustained descent. Confirm the actual route and operation. Less exertion also does not remove altitude exposure or establish suitability for every traveler.",
      },
      {
        question: "Can I visit Huanglong and Jiuzhaigou in one day?",
        answer:
          "Plan separate scenic days. Each has its own transport and visiting time, and Huanglong adds higher elevations. A rushed combination sacrifices useful park time and may create unsuitable exertion. A shorter overall trip can choose one instead of forcing both.",
      },
      {
        question: "Where should I stay for Huanglong?",
        answer:
          "Compare actual near-park, Songpan or Chuanzhusi properties and a separate Jiuzhaigou base through sleeping elevation, room comfort, meals and full transfers. A nearby room is not automatically the best health or comfort choice. Confirm the exact address and elevation.",
      },
      {
        question: "Can I visit Huanglong straight after my train arrives?",
        answer:
          "Only consider a selected visit after checking the dated arrival, full road transfer, current opening, walking and ascent suitability. The station name does not establish feasibility. Protect rest and a return margin instead of treating an arrival day as a guaranteed full scenic day.",
      },
      {
        question: "Are the Huanglong pools and cableway available all year?",
        answer:
          "Do not assume unchanged access or operation. Season, weather, conservation work and current management can alter services and paths. Confirm the actual experience near travel; water levels and the view also vary, so a photograph is not a guarantee.",
      },
      {
        question: "Does the seven-day Chengdu and Jiuzhaigou tour include Huanglong?",
        answer:
          "No. Huanglong is separately arranged and priced after suitability and logistics review. The standard route has three Chengdu nights and three Jiuzhaigou-area nights, one main Jiuzhaigou park day and a flexible second mountain day. It ends in the region; a Chengdu return is also separate.",
      },
      {
        question: "Is a Huanglong product recommended on this page?",
        answer:
          "No published product including Huanglong is recommended. Use the outline for a tailored request. Share dates, previous sleeping elevations, walking and knee concerns, actual gateways and onward bookings so the complete route and services can be reviewed.",
      },
    ],
    culturalStory: {
      title: "Explain a living mineral landscape, not only its colors",
      paragraphs: [
        "Huanglong's terraces are best understood through water, mineral deposition, topography and the surrounding forest. Interpretation can help visitors see why pools, rims and flowing sections differ without reducing the place to one photograph. Conditions vary, and the current route reveals only part of a wider protected landscape. A World Heritage designation explains significance; it does not make every path permanently available or authorize visitors to step onto fragile formations.",
        "The wider Aba region also has Tibetan and Qiang communities and distinct histories. A scenic visit alone is not an in-depth cultural encounter or permission to enter religious or residential spaces. If a cultural subject is wanted, name the actual place, consented host and explanation separately. Good guiding respects local practice and conservation while helping guests understand the specific landscape they can legitimately visit.",
      ],
    },
    foodStory: {
      title: "Make the regional meal plan dependable",
      paragraphs: [
        "A high-mountain scenic day benefits from an agreed breakfast, practical lunch and a warm evening meal. Check what the actual hotel or scenic service can provide rather than assume a restaurant is available at every viewpoint. The location and timing matter as much as an ambitious tasting menu. A regional dish can be a pleasant addition when it suits the guests, but the meal should support rest and the walking plan rather than become another rushed obligation.",
        "Discuss wheat, dairy, meat stocks, chili, nuts and shared preparation with the actual kitchen. A vegetable dish is not proof of a vegan meal, and remote locations may have fewer alternatives. Serious dietary requirements need demonstrated capacity and a fallback. Food, water or a particular tea should not be presented as preventing or treating altitude illness; health concerns require appropriate professional assessment rather than a menu promise.",
      ],
    },
    itinerary: [
      {
        day: "Regional arrival",
        title: "Reach a suitable base with the full ascent reviewed",
        description:
          "Use the actual station or airport and agreed road route. Confirm the room, sleeping elevation, meals and current scenic operation. Keep arrival modest rather than promise the full pool route after uncertain transport.",
      },
      {
        day: "Separate scenic day",
        title: "A selected Huanglong route, when suitable",
        description:
          "Follow the confirmed visitor and cableway arrangement, allowing the upper connection, chosen pool paths, rest and return. Adjust for weather, symptoms and effort. The plan does not require every guest to reach the highest viewpoint.",
      },
      {
        day: "Separate onward chapter",
        title: "Jiuzhaigou or another clearly planned destination",
        description:
          "Continue with its own road and hotel time, keeping a Jiuzhaigou full park day separate. Alternatively leave the region through the actual gateway. This is an illustrative sequence, not a fixed package, medical ascent recommendation or guarantee of cableway service and pool appearance.",
      },
    ],
  },
};
