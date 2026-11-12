import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/xitang.svg",
  alt: "Original Xitang planning schematic comparing covered canal-side corridors and bridge walks, a Shanghai day trip or overnight, and canal views versus quiet rooms; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const xitangGuide: ExpandedDestination = {
  id: "xitang",
  name: "Xitang",
  region: "east",
  kicker: "Covered waterside walks, bridge views and a room chosen for sleep",
  description:
    "Explore Xitang's covered canal-side corridors and narrow lanes, compare a Shanghai day trip with an overnight, and choose the actual room rather than a water-town label.",
  stay: "A day visit or 1 night; 2 nights for a deliberate slower break",
  bestFor: "Jiangnan canal-town architecture, photography and an unhurried evening near Shanghai",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["pinghu", "jiaxing", "wuzhen", "tongli", "nanxun", "shanghai"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Xitang Travel Guide: Day Trips, Canal Walks & Stays",
    seoTitle: "Xitang Travel Guide: Day Trip or Overnight?",
    seoDescription:
      "Plan a Xitang day trip from Shanghai or an overnight: covered canal walks, bridge routes, quiet-room choices, Jiashan transfers and comparisons with Wuzhen.",
    answer:
      "Xitang, in Zhejiang's Jiashan County, is especially appealing for its covered canal-side walkways, bridges and narrow lanes. A Shanghai day trip can provide a satisfying introduction; stay one night for dinner and a morning walk when the room location suits your plans. Some areas have lively nightlife, so check the hotel's surroundings if sleep matters most. Build the visit around a selective walk and a good meal, adding a boat or interior for a specific interest.",
    stayAnswer:
      "Choose a day visit when the complete return journey leaves time to walk, eat and look closely without moving hotels. One night adds an evening and an unhurried morning if arrival and departure protect those hours. Two nights suit a property you want to enjoy, sustained drawing or photography, or an independently arranged cultural interest. The introductory canal walk does not require two full sightseeing days. An overnight is not automatically quieter: the precise room, neighboring businesses and sound insulation matter, especially near evening entertainment.",
    hotelAnswer:
      "Compare an old-town canal-side or courtyard room with a property that has easier road access outside the walking core. In a historic-style building, check the exact bedroom, bathroom, stairs, heating or cooling, noise and luggage approach. A canal-facing window can face passing voices, restaurants or evening music as well as reflections. Ask where the room sits relative to nightlife and how late the nearby businesses operate on your dates. An outside hotel may simplify arrival but needs a clear dinner and morning-entry plan. A Xitang or Jiashan hotel name does not establish walking distance to the route you want.",
    sightseeingQuestion: "Should I choose Xitang or Wuzhen?",
    sightseeingAnswer:
      "Choose Xitang for a focused canal-town walk shaped by covered waterfront passages, bridge views and lanes, with an overnight chosen around a suitable room. Wuzhen has different Dongzha and Xizha visitor areas and a stay often organized around a particular property and its access arrangements. Neither is always quieter, more authentic or more luxurious. Compare the actual room, the subject of the visit, evening atmosphere and full transport route. On a short Jiangnan trip, one chosen water town plus useful city time usually provides a clearer journey than several similar stops.",
    visitorResources: [
      {
        label: "Jiashan County government",
        href: "https://www.jiashan.gov.cn/",
        scope:
          "Starting point for local background and links to current visitor notices, mainly in Chinese. Confirm the actual town entrance, interior opening, ticket scope, re-entry and boat arrangements with the relevant operator. County information does not establish a particular room, host or private-access service.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated trains and full station names. Jiashan and Jiashan South are separate gateways, and neither is the ancient-town entrance. Compare both terminal transfers and luggage handling with a direct road journey from the actual Shanghai or other city hotel.",
      },
    ],
    serviceScope:
      "A tailored Xitang visit should specify the walking route, included interiors, guide language, entrance and current admissions, exact pickup and complete transfers. For an overnight, name the property and room category and explain the last luggage approach. Boats have their own operating routes, boarding demands and private or shared formats. A workshop, specialist or local host needs an agreed arrangement; it is not implied by private guiding. Public streets remain shared spaces, homes remain private, and photography of people requires consideration and consent. No particular room, boat, host or exclusive lane is promised here.",
    routeAdvice:
      "Choose Xitang for its covered waterside walks, then add a contrasting city or garden chapter rather than several similar town excursions. Share your starting hotel, dates, walking needs and preference for a day trip or overnight. We can assess a tailored route and a room location that suits your evening plans and sleep priorities. The proposal should set out Xitang transfers, admission and any boat or overnight arrangements; these are not assumed within a Shanghai city tour.",
    practicalPlanning: {
      timing:
        "Confirm current entry and ticket terms for the actual date, entrance and selected interiors. Hotel check-in, public-lane access, individual houses, boat operation and re-entry can follow different rules. Do not use an old claim about free evening entry as the basis for a booking. Early and late walks may have a different atmosphere but cannot guarantee empty streets. Weekends and holidays can affect traffic, crowding and evening noise. In hot or wet weather, use a seated indoor break and a shorter route rather than assume the covered passages make the whole day comfortable.",
      walking:
        "Covered waterfront passages offer shelter on parts of the route, not a continuous dry or step-free circuit. Expect bridge steps, thresholds, uneven paving and wet surfaces. Narrow lanes can be awkward when busy, and a boat may involve steps and balance at boarding. Assess the actual route, toilets, seats and alternatives for mobility needs. A private vehicle cannot reach every lane or waterside room. Confirm the final luggage walk and a meeting point that remains practical if the group shortens the route.",
      cost: "Compare proposals using the same starting and return addresses, guide time, vehicle or rail plus local transport, named admissions and any separately booked boat or activity. For an overnight, include the exact room, breakfast, luggage handling and entry or re-entry terms. A canal view or low headline day-trip price does not establish comfort or inclusions. Premium value should appear in clear interpretation, a coherent walk, good meal timing and a room that meets the guests' needs, rather than an exclusive-streets claim or compulsory shopping stop.",
    },
    attractions: [
      "Covered canal-side passages / langpeng for the relationship between buildings, walking and water",
      "Songzi Laifeng Bridge for a selected crossing and an explanation of its local symbolism",
      "Wolong Bridge and other chosen viewpoints when they fit a manageable route",
      "Shipi Lane for a close look at narrow urban space, when access and crowding allow",
      "Zui Garden / Zuiyuan for a small courtyard-garden chapter when open",
      "An optional operating canal boat with route and boarding confirmed separately",
      "A seated local meal and a morning walk when an overnight adds value",
    ],
    stays: [
      {
        label: "Day visit / keep the Shanghai or city hotel",
        advice:
          "Give the town a relaxed half day, plus the complete transfers: choose a coherent canal-and-bridge route, one relevant interior if desired and lunch. Compare the actual road journey with train travel and both local transfers. A focused day is better than combining several distant water towns and having little time in any of them.",
      },
      {
        label: "1 night / protect the evening and morning",
        advice:
          "Arrive with time for the selected interiors, settle into the confirmed room and have dinner without a return transfer. Leave a morning after breakfast before moving on. Ask about nearby evening music and actual sound insulation before booking a canal-facing room for peace and quiet.",
      },
      {
        label: "2 nights / a slower stay with a clear purpose",
        advice:
          "Use this for a property you want to enjoy, drawing or photography at an unhurried pace, or an arranged cultural interest. Leave time unprogrammed rather than fill it with repeated ticketed interiors or another water town. Two nights are a choice about the stay, not a sightseeing minimum.",
      },
    ],
    hotelAreas: [
      {
        name: "Historic walking core / the exact room matters",
        advice:
          "A waterside or courtyard property can make dinner and a morning walk easy. Check the building, room position, stairs, bathroom, climate control, restaurant noise and final luggage route. Ask specifically about nearby nightlife. A room farther from the most photographed canal may offer better sleep without losing the town experience.",
      },
      {
        name: "Outside the walking core / easier pickup and room access",
        advice:
          "Can suit substantial luggage, a larger room or a simpler road arrival. Map the actual walk or drive to the chosen entrance, dinner and morning route. Establish evening transport and current re-entry arrangements; outside the core is not automatically quiet, and a near-Xitang label is not a measured location.",
      },
      {
        name: "Shanghai or another city base / avoid an unnecessary hotel move",
        advice:
          "Keep the existing room when the day trip meets your interests and the full return journey fits. Compare actual hotel and station addresses rather than assume every Shanghai district has the same access. An airport-area room is a different starting point from the historic city or another rail gateway.",
      },
    ],
    tradeoffs: [
      {
        title: "Covered corridors are an architectural subject, not all-weather access",
        advice:
          "Look at how the roofed path sits between shopfronts, houses and the canal, and where bridges or lanes interrupt it. The shelter changes the experience of walking beside water, but does not remove heat, crowding, steps or slippery paving. Select the route for what guests can actually manage.",
      },
      {
        title: "A canal view and a quiet night are different requests",
        advice:
          "Canal-side activity can include dining, pedestrians, deliveries and music. Confirm the actual room and nearby businesses rather than infer quiet from a daytime photograph. A courtyard or less prominent lane may be a better match. If quiet is essential, make it a booking criterion and retain a suitable alternative.",
      },
      {
        title: "Xitang and Tongli have different reasons to visit",
        advice:
          "Xitang's covered waterside passages provide a clear architectural focus. Tongli adds Retreat and Reflection Garden within Suzhou's Wujiang District, in Jiangsu rather than Zhejiang. Choose using that difference, the city base and complete transfer. Neither needs to be added automatically after the other.",
      },
      {
        title: "Nanxun adds merchant-house interpretation rather than another name for Xitang",
        advice:
          "Nanxun is in Huzhou and offers merchant gardens, a historic library and houses with their own architectural subjects. Compare that route with Xitang's corridor-and-lane walk. A longer architecture-focused trip may justify both; a short stay often benefits more from one chosen town and contrasting city time.",
      },
      {
        title: "A bridge story is a tradition, not proof of every detail",
        advice:
          "Songzi Laifeng Bridge offers a way to explain local symbolism and stories. Distinguish documented history from folklore and present-day visitor customs. The same care applies to historic houses: explain surviving fabric, repair and current use rather than call every visible feature original or treat a story as a factual guarantee.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "pinghu",
        advice:
          "Pinghu's Mo Family Manor offers a focused household-architecture visit in place of another canal-town circuit. Pair it with an East Lake walk and lunch when that subject adds depth to the route. Compare a day visit with changing hotels; a Jiulongshan property is a separate bay-side stay rather than a convenient base beside Xitang's covered passages.",
      },
      {
        slug: "jiaxing",
        advice:
          "Jiaxing city adds South Lake's historical context, Yuehe canal-side streets and a different city meal. Xitang is in Jiashan County within the wider municipality, not a neighborhood beside South Lake. Compare a city night with a Xitang overnight using the actual room, purpose and complete transfer.",
      },
      {
        slug: "wuzhen",
        advice:
          "Compare Xitang's covered waterfront passages and actual room with Wuzhen's Dongzha/Xizha visit and property arrangements. Choose one on a short trip unless the differences genuinely justify a second town. Include the full transfer and luggage move; two towns within the wider Jiaxing municipality are not one compact visitor area.",
      },
      {
        slug: "tongli",
        advice:
          "Tongli adds a garden-led subject near Suzhou, centered on Tuisi Garden. Compare that with Xitang's corridor-and-canal setting and the actual city base. A thoughtful Jiangnan journey can use either; seeing both should add understanding rather than another version of the same bridge photograph.",
      },
      {
        slug: "nanxun",
        advice:
          "Nanxun offers merchant-house architecture, Jiaye Library and Baijianlou in Huzhou. Add it when those interests are distinct enough to justify another journey or overnight. It is not another name for Xitang or an automatically convenient excursion from the same room.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai provides a contrasting city stay and international gateways. For a Xitang day trip, compare a direct road journey with dated trains through the actual Jiashan station and both local transfers. An overnight requires a luggage plan and an onward buffer; avoid attaching an uncertain return to a tight flight departure.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit canal walks, with rain and busy holiday dates still possible. Summer needs shade, cooling and shorter outdoor sections; covered passages do not remove heat or humidity. Winter can feel cold and damp, so heating and warm indoor breaks matter. Reflections, mist and particular plants depend on conditions, not a booking promise. Choose the dates for the wider journey and ask about holiday traffic and evening activity rather than assume an early walk or weekday is always quiet.",
    orientation:
      "Xitang Ancient Town is in Jiashan County, Jiaxing, Zhejiang. It is separate from Jiaxing city, Wuzhen in Tongxiang and Nanxun in Huzhou. Jiashan railway station and Jiashan South railway station are different gateways, both requiring a final local journey. Within the town, a selected bridge-and-corridor route is more useful than treating every lane as part of one compulsory circuit. A property using the Xitang name may sit outside the desired walking area, so map the real address and pickup point.",
    experiences: [
      "Read the covered waterfront passages through the relationship between buildings, lanes and canals",
      "Choose a manageable bridge route and one close-up architectural subject rather than every photo stop",
      "Enjoy a good meal and a comfortable morning when the room justifies staying overnight",
    ],
    planningNotes: [
      "Compare a day visit with an overnight using the full journey and useful hours",
      "Confirm current admission, interior, boat and re-entry terms separately",
      "Choose the actual room for sleep, bathroom, climate control and luggage access",
    ],
    arrival:
      "From Shanghai, compare a complete road pickup with dated trains to Jiashan or Jiashan South plus both local transfers. The best option depends on the starting hotel, service, luggage and time of day. The fast rail segment does not describe the full journey. From other cities, choose the actual station and final address rather than use Jiaxing as a generic arrival pin. For an overnight, agree where the vehicle stops, how bags reach the property and where check-in happens. Keep important timed interiors separate from uncertain flight arrivals or tight onward connections.",
    gettingAround:
      "Follow a coherent walking route with breaks, limiting repeated bridge crossings. Check whether Shipi Lane and the chosen viewpoints suit the day's crowding and the group's mobility; a very narrow lane need not be included to have a rewarding visit. Covered passages do not protect every section from rain or remove thresholds. Boats have defined routes and boarding conditions, not access to every lane or hotel. Establish a practical meeting point and an easy shorter option, especially in wet weather or evening crowds.",
    stayStrategy:
      "Keep the city hotel for a day visit unless Xitang's actual room, dinner and morning add enough value to justify moving. For one night, protect useful time on both sides of check-in. For two, explain the extra purpose and leave room to enjoy the property. Ask directly about nightlife, restaurant noise, sound insulation and the exact room's outlook. Historic character and a canal photograph are not substitutes for sleep, a good bathroom and a workable luggage approach.",
    firstTimerNote:
      "Start with what makes the walk distinctive: shelter beside water, bridges connecting lanes and the way buildings face the canals. Choose a route that lets you notice those details, then decide whether an interior, boat or overnight adds something different. Shops, restaurants and busy visitor moments are part of the current town. Good interpretation does not require calling it untouched, and a rewarding visit does not require entering private homes or treating residents as photographic subjects.",
    faqs: [
      {
        question: "Where is Xitang Ancient Town?",
        answer:
          "Xitang is in Jiashan County within Jiaxing municipality, Zhejiang. It is separate from Jiaxing city and from Wuzhen in Tongxiang. Use 西塘古镇 and the actual hotel or entrance address for transfers; the municipal name alone does not identify the final destination.",
      },
      {
        question: "Can I visit Xitang on a day trip from Shanghai?",
        answer:
          "Yes, when the complete return journey leaves time for a selected canal route, lunch and any desired interior. Compare road travel with dated trains to the actual Jiashan station plus both local transfers. Avoid adding several distant water towns or basing a flight connection on the rail segment alone.",
      },
      {
        question: "Should I stay overnight in Xitang?",
        answer:
          "Stay when a suitable room, dinner and a morning walk are part of what you want. A day visit is sensible when you prefer to keep the city hotel. Check the exact room and nearby evening activity: staying overnight does not automatically mean quiet or empty canals.",
      },
      {
        question: "Is Xitang or Wuzhen better for a first visit?",
        answer:
          "Xitang offers a corridor-and-lane water-town walk; Wuzhen has different Dongzha/Xizha settings and overnight-property arrangements. Choose using the actual route, room, evening atmosphere and full journey. Neither is always more authentic, quieter or more luxurious. One chosen town is enough for many short trips.",
      },
      {
        question: "Where should I stay in Xitang for a quiet night?",
        answer:
          "Check the specific room, nearby restaurants and evening entertainment, sound insulation and early deliveries. A courtyard or less prominent lane may suit better than a canal-facing room near activity. Compare an outside property when road access and sleep matter more than stepping directly into the walking area.",
      },
      {
        question: "Which railway station should I use for Xitang?",
        answer:
          "Compare dated services to Jiashan and Jiashan South using the starting hotel and final town address. They are different stations, and both require onward local transport. Send the full ticket name for pickup and include both terminal transfers when comparing rail with a direct road journey.",
      },
      {
        question: "Do I need a ticket for Xitang, and is evening entry free?",
        answer:
          "Confirm current terms for your date, entrance and chosen interiors rather than rely on an old free-entry claim. Public lanes, individual attractions, boats and re-entry may have different arrangements. A hotel booking does not establish attraction admission or how evening access works unless the exact rate and guest terms say so.",
      },
      {
        question: "Is Xitang suitable in rain or for travelers with limited mobility?",
        answer:
          "The covered passages shelter parts of the walk, but the route still needs assessment for bridges, thresholds, wet paving, crowding and rest stops. Choose a shorter route and a suitable room approach where needed. Boat boarding is a separate question and is not automatically a step-free alternative.",
      },
    ],
    culturalStory: {
      title: "A covered passage changes the way a water town is used",
      paragraphs: [
        "Xitang's langpeng (廊棚), often described as covered waterfront corridors, offer a useful architectural question: how can a path connect buildings and trade while giving some shelter beside the canal? Look at where a roof begins and ends, how shops open onto the passage and how a bridge changes the route. The interest lies in those relationships rather than measuring the whole town by a single scenic photograph. Visible buildings can include historic fabric, repair and contemporary adaptation; explain the distinction instead of assuming every surface is original.",
        "Songzi Laifeng Bridge (送子来凤桥) and Wolong Bridge (卧龙桥) provide selected viewpoints and local stories, while Shipi Lane (石皮弄) changes the scale to a narrow passage between buildings. Include the lane only when access and crowding make it worthwhile. Zui Garden, or Zuiyuan (醉园), can add a smaller courtyard-garden subject when open, rather than another set of canal photographs. Explain bridge symbolism as tradition rather than proof of every story. Courtyards, homes and working shops retain their own boundaries: public-lane access is not permission to enter, stage a scene or photograph people without consideration.",
      ],
    },
    foodStory: {
      title: "Give lunch a comfortable place in the walk",
      paragraphs: [
        "Choose a seated meal and a manageable selection of dishes rather than eat only while moving between bridges. Menus may offer freshwater fish, braised pork and seasonal vegetables; ask about bones, portions, sweetness and the actual preparation. Rice-based cakes sold as qianshi gao (芡实糕) can provide a small local tasting, with ingredients and texture checked at the shop. These foods belong to wider regional traditions too, so avoid claiming that every Jiangnan dish is unique to Xitang or that a riverside table proves where the fish was caught.",
        "Ask about broth, pork, fish, shellfish, soy, wheat, egg and shared equipment for dietary needs. A vegetable dish, tofu dish or rice-based cake is not automatically suitable for every diet or serious allergy. If trying huangjiu, or yellow rice wine, check the actual product and serving size and keep it optional. A shop tasting, a seated food stop and a cooking class are different arrangements. Any host or hands-on session needs confirmation, with clear expectations and no compulsory purchase.",
      ],
    },
    itinerary: [
      {
        day: "Morning / arrival",
        title: "Reach the actual entrance and begin with a coherent canal route",
        description:
          "Complete the road or rail-and-road journey from the actual city hotel. Arrange luggage if staying, confirm current entry terms and choose a manageable sequence of covered passages and bridges. Leave the group time to notice how buildings and water relate rather than rush every marked viewpoint.",
      },
      {
        day: "Lunch and afternoon",
        title: "Use one additional subject to deepen the visit",
        description:
          "Take a seated lunch, then choose Zui Garden if open, a suitable lane or a separately arranged boat for a distinct purpose. Adjust for rain, heat and crowding. Day visitors keep enough time for the full return journey rather than attach another distant water town.",
      },
      {
        day: "Optional overnight",
        title: "Enjoy the room and evening you chose to stay for",
        description:
          "Settle into the confirmed room and keep dinner convenient. Choose an evening walk according to current access, weather, lighting and the atmosphere you prefer. Nearby nightlife, restaurant hours and room sound insulation should have been checked before booking a quiet stay.",
      },
      {
        day: "Following morning",
        title: "Leave time for breakfast and a considered next chapter",
        description:
          "Use a short morning walk if conditions suit, then collect luggage for Shanghai or another confirmed base. A second night needs a clear additional purpose. This outline is illustrative, not a published package or a guarantee of room views, quiet, boats, tickets, hosts or private streets.",
      },
    ],
  },
};
