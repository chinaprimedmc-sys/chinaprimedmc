import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/songpan.svg",
  alt: "Original Songpan planning schematic separating an old-town stay, Huanglong's higher scenic route and a distinct Jiuzhaigou park chapter; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const songpanGuide: ExpandedDestination = {
  id: "songpan",
  name: "Songpan",
  region: "southwest",
  kicker: "Give the old town its own place in the mountain journey",
  description:
    "Plan Songpan for its walled-town setting, borderland history and a considered northern Sichuan route, with honest altitude, station transfers and hotel trade-offs.",
  stay: "1–2 nights for the town; additional mountain chapters need separate time",
  bestFor: "Borderland history, a smaller-town stay and thoughtful northern Sichuan routing",
  interests: ["heritage", "city", "landscape", "food"],
  relatedDestinationIds: ["huanglong", "jiuzhaigou", "chengdu", "zoige", "hongyuan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Songpan Travel Guide: Old Town, Altitude & Where to Stay",
    seoTitle: "Songpan Guide: Old Town, Altitude & Hotels",
    seoDescription:
      "Plan Songpan Old Town, one or two nights, hotel areas and exact rail transfers. Compare Chuanzhusi, Huanglong and a separate Jiuzhaigou stay.",
    answer:
      "Songpan (松潘) is a county and historic town in Aba Tibetan and Qiang Autonomous Prefecture, northern Sichuan. The old town, historically associated with Songzhou, offers a walled urban setting and a useful introduction to the region's trading and political history. It is also a possible overnight chapter on a Huanglong or Jiuzhaigou journey, but neither scenic area is an extension of the town walk. The town is roughly 2,800–2,900 meters above sea level, so a short urban stay still involves altitude exposure. One night can provide a purposeful arrival and town visit; two create a full day for a deeper local interest or a separately planned excursion. Choose Songpan for what it adds, rather than simply because a transport gateway carries a nearby destination's name.",
    stayAnswer:
      "One night suits travelers whose actual arrival leaves time for the old town and a relaxed dinner before continuing. Two nights allow a full local day, or a suitable separate outing without attaching it to a rushed arrival. A Huanglong scenic day and a Jiuzhaigou park day require their own travel and visiting time; they should not be compressed into that same full day. Additional nights are worthwhile only with a distinct interest, useful rest or a coherent regional sequence. They do not guarantee acclimatization or make a higher excursion suitable for every guest.",
    hotelAnswer:
      "Compare a room in or near Songpan Old Town with a vehicle-accessible property outside the busiest lanes, then assess Chuanzhusi as a different town and gateway base. Check the exact address, sleeping elevation, heating, hot water, bathroom, stairs or lift, noise and meal arrangements. A traditional-looking facade does not establish comfortable interiors. Old-town charm can mean a longer luggage approach or street noise; a modern room farther out may improve sleep but reduce evening walkability. Chuanzhusi's higher setting and different transfers should be explicit. Neither a county-wide address nor an oxygen-equipped room establishes the best base for the guest.",
    sightseeingQuestion: "Should I stay in Songpan or Chuanzhusi for Huanglong and Jiuzhaigou?",
    sightseeingAnswer:
      "Choose Songpan when you want the historic town to be part of the stay. Compare Chuanzhusi when the actual gateway and onward roads make its location useful, while checking its higher sleeping elevation and the specific room. For Jiuzhaigou, a separate park-area stay can protect a full scenic day instead of repeating long road journeys. For Huanglong, review the complete ascent, walking and return before choosing a base. The best hotel sequence balances guest suitability, sleep, useful time and transport; it is not necessarily the property with the shortest advertised drive to one attraction.",
    visitorResources: [
      {
        label: "Songpan county government",
        href: "https://www.songpan.gov.cn/",
        scope:
          "Local administrative and cultural background and dated notices, mainly in Chinese. Verify the actual visitor arrangements, wall access, roads and named excursion with the responsible venue or provider. A county reference does not establish current hotel availability or a consented cultural visit.",
      },
      {
        label: "UNESCO: Huanglong Scenic and Historic Interest Area",
        href: "https://whc.unesco.org/en/list/638/",
        scope:
          "Background on the protected Huanglong property in the wider county. It does not designate Songpan Old Town itself as World Heritage or confirm current access to a particular pool route, Mounigou section or cableway.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains, full station names and ticket procedures. Songpan and Huanglongjiuzhai are distinct stations; compare the actual hotel and onward transfer rather than assume the destination name identifies the right train.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel and altitude illness",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General travel-health guidance, not individual clearance. Review sleeping elevations and higher outings with an appropriately qualified clinician where needed. A vehicle, an extra night or hotel oxygen equipment does not eliminate altitude risk.",
      },
    ],
    serviceScope:
      "A proposal should identify the hotel and room, sleeping elevation, actual rail or airport gateway, full road transfers, selected town route, guiding language and admissions. State whether wall access, an outlying scenic visit or any specialist activity is included. A religious visit needs current opening, respectful conduct and any required permission; a village address does not establish an invitation into homes. Horse riding or trekking requires a separately assessed provider, route, equipment, animal welfare and emergency arrangements. No special access, hosted encounter, mountain safety guarantee or riding service is implied by this guide.",
    routeAdvice:
      "Start with the desired regional sequence: Chengdu for city culture and food, Songpan for a purposeful town stay, Huanglong only after suitability review, and Jiuzhaigou with its own park day and base. Do not make a higher scenic stop compulsory because it lies within a familiar route outline. Our published Chengdu and Jiuzhaigou itinerary does not establish a Songpan stay, Huanglong visit or return to Chengdu as included services. No matching published Songpan product is recommended here. Share the actual dates, previous sleeping elevations, walking needs, gateways and onward bookings for a tailored plan.",
    practicalPlanning: {
      timing:
        "A town visit can be flexible, but the wider journey depends on the dated train, complete road legs, weather and current site operation. Keep arrival modest and allow the real time needed for food and rest. A village, waterfall area or grassland direction is a separate outing, not a short addition inferred from a county map. Avoid combining an uncertain arrival, Huanglong's upper route and a late transfer to Jiuzhaigou into one supposedly comfortable day. Winter brings cold and possible ice; warmer months still require rain and temperature-change planning.",
      walking:
        "Assess old-town paving, steps, thresholds and the actual wall or gate approach. A selected street walk can be easier than a wall climb, but it still takes place at elevation. Confirm seating, toilets, vehicle pickup and a shorter alternative. Outlying boardwalks, waterfall routes and riding or trekking have different physical demands and need their own assessment. Stop and obtain appropriate help for concerning altitude symptoms rather than continue upward to finish a sightseeing list. Private road transport and a short walk are not proof that an ascent is suitable.",
      cost: "Compare the exact room and comfort, guiding, complete transfers, admissions, meals and any separately arranged excursion. A cheaper gateway hotel may add repeated road time or compromise warmth and sleep. A premium should buy a suitable room, clear cultural interpretation and a well-paced sequence. If riding or a hosted visit is proposed, obtain the actual service, duration, consent, equipment and contingency arrangements instead of an undefined cultural experience. Dated prices and cancellation terms belong in the proposal, with weather and operation changes addressed.",
    },
    attractions: [
      "Songpan Old Town / Songzhou for a selected gate, streets and historical orientation",
      "A permitted wall section when current access and the guest's mobility support it",
      "A local meal and a quieter neighborhood walk beyond the busiest souvenir stretch",
      "Chuanzhusi as a different gateway town, with a named cultural interest if appropriate",
      "A separately researched Mounigou outing, distinguishing Zhaga Waterfall and Erdaohai sections",
      "Huanglong as a separate higher scenic day, subject to route and suitability review",
      "Jiuzhaigou as a separate park chapter with its own base and full visiting time",
    ],
    stays: [
      {
        label: "1 night / an old-town chapter in a wider route",
        advice:
          "Choose a train or road arrival that leaves useful time for a selected town walk, dinner and rest. Leave the next morning's transfer realistic. If arrival is late and departure early, describe it honestly as a gateway night rather than a meaningful Songpan visit.",
      },
      {
        label: "2 nights / a full day with a defined purpose",
        advice:
          "Deepen the town's history and daily setting, or choose one properly assessed excursion. Keep time for meals and a comfortable return. A longer stay is strongest when the local subject interests the guest, rather than an automatic extra night sold as guaranteed altitude preparation.",
      },
      {
        label: "A regional sequence / count each scenic chapter separately",
        advice:
          "Assign Huanglong its own suitable day and Jiuzhaigou its own park stay. Compare the whole hotel and road sequence before booking. A separate Jiuzhaigou base may serve the trip better than several long return journeys from Songpan, even if staying in one room initially looks simpler.",
      },
    ],
    hotelAreas: [
      {
        name: "In or beside Songpan Old Town / history and an evening walk",
        advice:
          "Choose for useful time in the town, with the exact final luggage approach checked. Assess room heating, hot water, bathroom, noise and stairs rather than rely on courtyard styling. Ask whether nearby dining suits the group and whether early departure arrangements are practical.",
      },
      {
        name: "Outside the busiest old-town lanes / road access and sleep",
        advice:
          "A vehicle-accessible property can suit luggage, a quieter room or a practical departure. Check the actual distance and route into town, meal options and the room's condition. Being outside an old gate does not itself establish tranquility, lift access or better comfort.",
      },
      {
        name: "Chuanzhusi / a distinct gateway decision",
        advice:
          "Compare the exact hotel with the actual station, airport and scenic transfers. The town sits around 3,000 meters, with property-level variation, so it should not be described as a lower-altitude equivalent of Songpan. Confirm sleeping elevation, warmth and meals. A regional airport or station name does not place the hotel beside the arrival exit.",
      },
      {
        name: "A separate Jiuzhaigou-area property / protect the park day",
        advice:
          "Choose the exact room and approach to the park, not simply a county label. This is another accommodation chapter with its own road journey and elevation. Compare useful park time and sleep against a long daily return to Songpan; a resort photograph is not evidence of a convenient entrance transfer.",
      },
    ],
    tradeoffs: [
      {
        title: "The town, county and scenic areas are different planning units",
        advice:
          "Songpan County contains more than the old town. Huanglong's county location does not make it part of a short street walk, while Jiuzhaigou is a separate destination. Choose each for its actual value and allocate the road and visiting time. A guide mentioning a nearby name is not a complete plan for that place.",
      },
      {
        title: "An old wall needs its construction and repair history explained",
        advice:
          "Songzhou's history reaches further back than the visible walls' later construction and repair phases. Explain selected gates and masonry without claiming every surface survives unchanged from the Tang dynasty. Distinguish historic fabric, restoration and modern visitor presentation. Princess Wencheng-related imagery expresses a historical narrative; it is not direct proof of every detail of a particular local legend.",
      },
      {
        title: "Sleeping lower than a scenic viewpoint is not a safety guarantee",
        advice:
          "Songpan town is roughly 2,800–2,900 meters; Chuanzhusi and higher scenic routes add different exposures. Review the entire arrival, sleeping and daytime profile. Oxygen in a room, a cableway and a fixed number of nights are not medical clearance. The best route may omit a higher outing rather than assume everyone can adjust on schedule.",
      },
      {
        title: "Mounigou is not one interchangeable waterfall-and-lake stop",
        advice:
          "Zhaga Waterfall and Erdaohai refer to different sections and visitor routes. Establish the section, current access, season, walking and transport before suggesting a visit. The attraction name alone does not confirm both are operating or conveniently combined. Compare the actual experience with the guest's interests instead of adding a second landscape day by default.",
      },
      {
        title: "A horse trek is a specialist choice, not an automatic town activity",
        advice:
          "Older travel accounts often connect Songpan with horse trekking, but they do not prove a present-day provider or route is available. Assess current permission, guide competence, animal condition, helmets, guest experience, weather, altitude, lodging and emergency support. A short ride and a multi-day trek need different preparation; neither should be sold as effortless access to untouched culture.",
      },
      {
        title: "A smaller town can offer depth without promising isolation",
        advice:
          "Commercial streets, local work and tourism coexist. Time a considered walk and explain what guests see rather than promise an empty ancient town or private community encounter. Premium value can lie in a warm quiet room, a knowledgeable guide and enough time to listen, with any hosted visit established through actual consent.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "hongyuan",
        advice:
          "Hongyuan offers a separate grassland chapter focused on Moon Bay, current Emutang conditions or a specifically chosen property. Review the actual road and higher sleeping profile before fixing nights. This is a different brief from Zoige’s Huahu wetland, not an interchangeable grassland add-on to a Songpan town day.",
      },
      {
        slug: "zoige",
        advice:
          "Zoige / Ruoergai adds a distinct plateau grassland and wetland chapter to the north, with Huahu and Tangke’s Yellow River viewpoint treated separately. Allocate real road time and suitable nights, checking the higher sleeping profile and named room facilities. It is not a short grassland detour automatically included in a Songpan stay.",
      },
      {
        slug: "huanglong",
        advice:
          "Huanglong adds travertine terraces and forest on a separate higher scenic route. Review the full ascent, current cableway and remaining walking, then compare the actual hotel sequence. Staying in Songpan does not make the park medically suitable or guarantee its operation.",
      },
      {
        slug: "jiuzhaigou",
        advice:
          "Jiuzhaigou adds a distinct valley-and-lake park with shared internal transport and selected boardwalks. Protect a full park day and a suitable local base. A Songpan town visit, Huanglong outing and Jiuzhaigou circuit should not be treated as one interchangeable mountain day.",
      },
      {
        slug: "chengdu",
        advice:
          "Chengdu adds Sichuan food, neighborhoods and a separately planned panda visit before or after the mountains. Confirm dated rail services, the exact arrival station and both road transfers. A return to Chengdu is an actual travel leg, not an automatic inclusion in every regional itinerary.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose the season for the actual town and mountain brief. Warmer months can suit a mix of street walking and selected landscape days, with rain, cool evenings and variable mountain conditions. Autumn colors belong to particular places and dates, not a guaranteed regional photograph. Winter requires dependable room heating, warm breaks and a realistic view of ice, roads and scenic operation. Check the intended excursion separately; an open town does not establish an open waterfall section, cableway or trekking route.",
    orientation:
      "Songpan Old Town, the wider county and Chuanzhusi are different places within the regional plan. Huanglong is a separate scenic approach, and Jiuzhaigou needs its own road journey and park chapter. Songpan railway station and Huanglongjiuzhai railway station are distinct gateways. Jiuzhai Huanglong Airport is another arrival point, not either park entrance. Use the full Chinese hotel address and actual gateway rather than a broad northern Sichuan label. Exact sleeping elevations matter alongside transfer convenience.",
    experiences: [
      "Read a selected old gate and streets through Songzhou's trading and political history",
      "Spend an unhurried town evening with a warm room and a well-chosen local meal",
      "Choose a separate mountain chapter through actual roads, altitude and remaining walking",
    ],
    planningNotes: [
      "Compare Songpan and Chuanzhusi through exact hotels, sleeping elevations and full transfers",
      "Keep Huanglong, Jiuzhaigou and any Mounigou section as distinct visiting decisions",
      "Confirm current providers and consent before proposing riding, trekking or a hosted encounter",
    ],
    arrival:
      "Use the dated booking to identify Songpan or Huanglongjiuzhai station, or the actual flight to Jiuzhai Huanglong Airport. Compare the full journey to the selected hotel and onward destination. A station bearing two scenic names is not arrival inside either park, and an airport arrival may introduce a different elevation profile. Avoid setting a maximum-effort scenic day around an uncertain transport window. Confirm luggage, meals, pickup and the next day's route in writing; a late arrival may justify a simple evening rather than a rushed attraction.",
    gettingAround:
      "Walk a selected old-town route with seating and a clear pickup where needed. Use a coherent road plan for Chuanzhusi, a named Mounigou section or a regional connection, with visitor transport and admissions identified separately. A private vehicle does not remove steps, extend opening hours or authorize entry to residential or religious spaces. Agree where luggage stays if the day ends at another hotel. For limited mobility, assess the actual path and room access; town-level descriptions are too broad to prove suitability.",
    stayStrategy:
      "Keep the room comfortable and the sequence purposeful. One night can add a rewarding town chapter when useful hours remain; two need a local interest, selected outing or rest that the guest wants. Prioritize heating, hot water, quiet, bathroom and meals before atmospheric styling. Compare a separate Jiuzhaigou stay when it protects the park day. More nights, a premium room or supplemental oxygen equipment should not be marketed as guaranteed altitude adaptation. Review the entire route rather than optimize one transfer in isolation.",
    firstTimerNote:
      "Ask what the Songpan stop contributes beyond a place to sleep. A historic-town walk and a comfortable meal may be exactly right between larger scenic chapters. If there is no useful town time, compare a different base openly. For any higher outing, ask about the sleeping elevation, remaining walking, current operation and an alternative. A good regional plan can leave a famous park out when that better suits the guests.",
    faqs: [
      {
        question: "Is Songpan worth visiting or just a stop for Huanglong?",
        answer:
          "It is worth a purposeful stay for the walled-town setting and northern Sichuan's borderland history. Allow useful hours for a selected walk and meal. If the schedule only permits a late arrival and early departure, treat it as a gateway night and compare the actual room and transfers with other bases.",
      },
      {
        question: "How many nights should I stay in Songpan?",
        answer:
          "One night can serve a well-timed town visit within a wider route. Two create a full local day or a separately assessed outing. Huanglong and Jiuzhaigou require their own scenic time and transfers. Extra nights provide flexibility but do not guarantee acclimatization.",
      },
      {
        question: "What is Songpan's altitude?",
        answer:
          "The town is roughly 2,800–2,900 meters above sea level, with variation by location. Chuanzhusi is around 3,000 meters and the wider route can rise higher. Confirm the actual hotel's sleeping elevation and full ascent profile rather than apply one town figure to the whole county.",
      },
      {
        question: "Should I use Songpan station or Huanglongjiuzhai station?",
        answer:
          "Compare the actual dated trains and complete transfers to your hotel and next destination. They are different stations. The best choice depends on the whole sequence, not simply a name that resembles your main attraction. Neither station is inside Huanglong or Jiuzhaigou park.",
      },
      {
        question: "Is Songpan Old Town a UNESCO World Heritage Site?",
        answer:
          "Do not transfer Huanglong's World Heritage designation to Songpan Old Town. Huanglong is a protected scenic property in the wider county; the town's walls, streets and history are a separate visitor subject. Explain the visible construction and restoration phases rather than imply UNESCO recognition covers the whole county.",
      },
      {
        question: "Can I visit Huanglong and Jiuzhaigou from Songpan in one day?",
        answer:
          "Plan separate scenic days. Huanglong adds a higher walking route and its own road journey; Jiuzhaigou deserves a full park day with a suitable base. The shared regional gateway does not make them one attraction. Choose one when useful time or suitability does not support both.",
      },
      {
        question: "Can I arrange horse trekking in Songpan?",
        answer:
          "Only after confirming a current provider, permitted route, guide, equipment, animal welfare and support suitable for the guest. Historic travel accounts do not establish present availability. A short ride and a multi-day highland trek are different services; no riding activity is included by this destination guide.",
      },
      {
        question: "Does the published Chengdu and Jiuzhaigou tour include Songpan?",
        answer:
          "A Songpan stay is not established as an inclusion and no matching Songpan product is recommended here. Any town stop or overnight needs a separately confirmed route and services. Use the related Jiuzhaigou guide for its actual itinerary scope, then request changes explicitly rather than infer them from regional proximity.",
      },
    ],
    culturalStory: {
      title: "A borderland town deserves more than a gate photograph",
      paragraphs: [
        "Songpan's historical Songzhou identity places it within a long story of routes, administration, trade and relations across the eastern Tibetan Plateau. The visible town is the result of different periods, repairs and current uses. A focused walk can connect a gate, wall section and street pattern while explaining which details are historic, restored or modern. Tang-era narratives and later walls should not be collapsed into one unchanged ancient scene. Princess Wencheng imagery can open a discussion of historical memory, with legend and documented evidence kept distinct.",
        "The wider Aba setting includes Tibetan, Qiang, Hui and Han communities with different traditions and contemporary lives. These names should introduce questions, not a claim that one brief outing represents every culture. Religious buildings and homes have their own rules and owners. Ask before photographing people or entering spaces, and arrange any hosted encounter through actual consent. An ordinary street, a carefully explained detail and time to listen can offer more understanding than a staged promise of untouched authenticity.",
      ],
    },
    foodStory: {
      title: "Make the meal warm, clear and appropriate to the day",
      paragraphs: [
        "Choose a restaurant for its actual kitchen and menu rather than assume every venue serves the same Tibetan or Sichuan meal. Depending on the place, a group might compare a noodle dish, a meat preparation and seasonal vegetables, with portions and spice explained. Yak products or dairy can be interesting when genuinely offered, but they are optional tastes rather than a test of cultural participation. A good breakfast, an unrushed dinner and a workable lunch arrangement can matter more on a mountain journey than collecting expensive regional ingredients.",
        "Clarify meat and broth, dairy, wheat, soy, chili, nuts and shared preparation where relevant. A vegetable dish may contain meat stock; a regional or restaurant label alone does not prove religious or allergy requirements can be met. Confirm serious dietary needs with the kitchen and keep an alternative, especially outside the main town. Food, butter tea and supplemental oxygen should not be presented as preventing altitude illness. Meal planning supports comfort and enjoyment; individual health concerns need appropriate professional advice.",
      ],
    },
    itinerary: [
      {
        day: "Arrival afternoon",
        title: "Reach the actual town base and keep the first walk modest",
        description:
          "Complete the station or airport transfer, check the room and take a selected gate-and-street introduction if arrival and guest condition allow. Use dinner for a clear local menu and an unhurried evening. Do not make a higher scenic route compulsory on the arrival day.",
      },
      {
        day: "Optional full local day",
        title: "Deepen one subject rather than fill a regional checklist",
        description:
          "Choose a more detailed town-history walk or one separately researched outing, with current operation, roads and walking assessed. A Mounigou plan must name the actual section. Retain time for meals and a comfortable return instead of adding Huanglong, grasslands and a ride to the same day.",
      },
      {
        day: "Onward chapter",
        title: "Continue to a separately planned park or actual gateway",
        description:
          "Follow the confirmed road and hotel sequence for Huanglong when suitable, Jiuzhaigou with its own park day, or an actual onward train. Review sleeping elevations and useful hours again if the order changes. This one-to-two-night town outline is illustrative, not a package, medical ascent plan or promise of riding, private cultural access or scenic operation.",
      },
    ],
  },
};
