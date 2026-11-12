import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/daocheng-yading.svg",
  alt: "Original Daocheng Yading planning schematic distinguishing Riwa, Daocheng town and Yading village, with shorter scenic paths and the separate upper-lake hike; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const daochengYadingGuide: ExpandedDestination = {
  id: "daocheng-yading",
  name: "Daocheng Yading",
  region: "southwest",
  kicker: "Choose the route and sleeping base before the mountain photograph",
  description:
    "Plan Yading around the actual walking and overnight elevations: compare Riwa, Daocheng and Yading village, then choose a shorter scenic visit or a separately assessed upper-lake hike.",
  stay: "3 nights can provide one scenic day and flexibility; longer for distinct suitable interests",
  bestFor:
    "Sacred mountain landscapes and travelers suited to a carefully planned high-altitude visit",
  interests: ["landscape", "heritage"],
  relatedDestinationIds: ["litang", "kangding", "shangri-la", "chengdu"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Daocheng Yading Travel Guide: Routes, Altitude & Hotels",
    seoTitle: "Yading Guide: Routes, Altitude & Hotels",
    seoDescription:
      "Plan Daocheng Yading with Riwa versus village stays, short-route choices, Luorong Pasture and upper-lake hiking, plus full transfers and altitude trade-offs.",
    answer:
      "Visit Daocheng Yading in western Sichuan for a sacred mountain landscape, choosing the walking route before flights and accommodation. Shorter valley visits and the demanding upper-lake trails involve very different effort; park transport leaves substantial walking and altitude exposure. Three nights at a suitable base can allow a scenic day and flexibility, subject to the wider ascent plan. Daocheng town, Riwa and Yading village have different sleeping elevations and access. Leaving the upper trail out can be the better choice.",
    stayAnswer:
      "Three nights can provide an arrival, one selected park day, a flexible or gentler day and a separate departure, when the actual transport fits. Two nights leave one full scenic day and less room for weather or changed plans. Four nights need a distinct second interest, a genuinely useful additional visit or a slower stay the guest wants. A second park day is optional, not a requirement to complete both the short and long routes. Check dated admission and re-entry rules before assuming another visit is included. Extra nights provide time; they do not guarantee acclimatization or make the upper lakes suitable.",
    hotelAnswer:
      "Start by comparing Riwa / Shangri-La Town near the scenic approach, Daocheng town farther along the regional road sequence and Yading village within the managed scenic setting. Riwa is roughly 2,900 meters, Daocheng town around 3,700–3,800 meters and Yading village roughly 3,900 meters, with variation by property. A room closer to a view can therefore mean a higher sleeping night, not automatically a better stay. Confirm the exact hotel, elevation, heating, hot water, bathroom, meals, luggage approach and vehicle access. A premium Riwa room may serve sleep and flexibility better than a basic higher room; compare current evidence rather than view photographs alone.",
    sightseeingQuestion:
      "Should I choose Yading's shorter route, Luorong Pasture or the Milk Lake hike?",
    sightseeingAnswer:
      "For a selective introduction, compare a permitted Chonggu Temple-area visit and the shorter uphill Pearl Lake / Zhuoma La Tso route, noting that shorter does not mean flat or low. Luorong Pasture adds a separate higher meadow setting reached through its actual visitor-transport and walking arrangement. The continuation toward Milk Lake and Five-Color Lake is a substantially more demanding high-altitude hike and may be unavailable under current conditions. Do not make those lakes the condition for a successful Yading visit. Decide from the whole ascent, health, walking ability, current access and return margin, with a satisfying shorter alternative agreed in advance.",
    visitorResources: [
      {
        label: "Garzê Tibetan Autonomous Prefecture government",
        href: "https://www.gzz.gov.cn/",
        scope:
          "Regional administrative, cultural and public-service background, mainly in Chinese. Confirm current Yading entry, trail operation, scenic transport, roads and visitor conditions with the responsible venue and providers. A prefecture description does not establish access to every lake or a property's precise sleeping elevation.",
      },
      {
        label: "Sichuan provincial government",
        href: "https://www.sc.gov.cn/",
        scope:
          "Provincial context and dated public notices. A regional airport or road reference is not an operating-flight confirmation, current journey estimate or authority to enter closed paths. Check the specific venue and carrier before fixing the route.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel and altitude illness",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General guidance on ascent and high-altitude travel, not individual medical clearance. Review previous sleeping nights, airport arrival, daytime high points and the proposed room sequence with an appropriately qualified clinician where needed. A scenic shuttle, electric vehicle or oxygen-equipped room does not remove altitude risk.",
      },
    ],
    serviceScope:
      "A proposal should name every hotel and sleeping elevation, dated gateway, complete road transfers, park entry and re-entry terms, scenic-bus arrangement, any electric-vehicle service, guide role and the actual paths left on foot. Specify meals, water, toilets, turnaround criteria and the practical alternative if an upper route is closed or unsuitable. A private car does not establish private scenic-bus access or permission to drive to the lakes. A horse service, specialist trek, drone flight, religious interior or hosted encounter requires separate current permission and confirmed arrangements. No summit ascent, medical clearance, guaranteed mountain view or upper-lake access is implied by this destination guide.",
    routeAdvice:
      "Choose the Yading walking route and sleeping sequence before deciding how it connects with Kangding, Litang or Chengdu. Share your dates, gateways, previous sleeping elevations, recent walking experience and room needs for a tailored assessment. Litang sits around 4,000 meters and is not automatically the right transit night. Shangri-La city in Yunnan is a different place from Riwa's Shangri-La Town in Sichuan. Your proposal should show complete road days and a worthwhile alternative if upper trails are unsuitable.",
    practicalPlanning: {
      timing:
        "Build the park day backward from the actual last return transport and chosen route, including entry, bus, possible electric vehicle, remaining walk, meals and rests. Do not use a fast hiker's time as the whole group's schedule. A higher trail can be closed, weather-affected or subject to current visitor limits; check before committing. Keep arrival and departure separate from a maximum-effort day. A late flight or a road arrival in the county does not create a full day inside the park, and a queue or missed connection can change what is sensible.",
      walking:
        "Compare the actual path rather than the label short route or long route. Chonggu-area paths, the climb toward Pearl Lake, Luorong's meadow route and the upper-lake ascent involve different gradients and exposure. Wet stone, steps, uneven ground, snow or ice can affect effort and descent. Downhill walking may strain knees even when the ascent feels manageable. Identify turnaround points, seating, toilets and return transport. Symptoms or unsuitable conditions call for appropriate help and a changed plan, not continuing higher because a lake appeared in the itinerary.",
      cost: "Compare exact room, heating and meals; complete road transfers; park admission and repeat-entry conditions; public scenic transport; any electric vehicle; and guiding scope. A cheap entrance headline does not price the whole day. An in-park room changes luggage, meals, access and sleeping elevation, not only the view. Agree the service and cancellation implications of weather, closure or a route change. A premium should buy a suitable base, accurate interpretation, realistic timing and clear support, not private access to protected terrain or a guarantee of reaching the highest lake.",
    },
    attractions: [
      "The sacred peaks Xiannairi / Chenrezig, Yangmaiyong / Jampayang and Xianuoduoji / Chanadorje viewed from permitted places when visibility allows",
      "Chonggu Temple area through the actual visitor arrangement, respecting worship and current access",
      "Pearl Lake / Zhuoma La Tso as a shorter but still uphill high-altitude route",
      "Luorong Pasture as a distinct meadow and mountain-view subject",
      "Milk Lake and Five-Color Lake only through an open, individually suitable upper trail",
      "A selected Riwa or Daocheng-area interest when it genuinely adds value to the wider route",
      "Litang or Yunnan Shangri-La as separately planned cultural stays",
    ],
    stays: [
      {
        label: "2 nights / one focused scenic day",
        advice:
          "Choose the main route before the room and protect a full day between arrival and departure. This can support a selective visit when the transport and ascent plan suit, but it leaves less flexibility for weather or changed operation. It should not depend on completing the upper lakes regardless of conditions.",
      },
      {
        label: "3 nights / one park day and useful flexibility",
        advice:
          "Keep a full scenic day and another day that can serve rest, an appropriate local subject or a separately chosen second visit. Confirm repeat-entry and transport terms if returning. A suitable Riwa base may avoid unnecessary hotel changes, but its actual room and the entire altitude profile still need assessment.",
      },
      {
        label: "4 nights / a defined second chapter",
        advice:
          "Add time only when the guest wants a distinct second route, another researched interest or meaningful time at a suitable property. Do not prescribe extra nights as proof that everyone can hike higher. The plan should remain worthwhile if Milk Lake and Five-Color Lake are omitted.",
      },
    ],
    hotelAreas: [
      {
        name: "Riwa / Shangri-La Town, Sichuan / a scenic-gateway base",
        advice:
          "Compare exact rooms for heating, bathroom, quiet, meals and the road to the actual entrance. The town is roughly 2,900 meters, with property-level variation, and is distinct from Yunnan's Shangri-La city. A convenient gateway room can support flexibility; the park still introduces a higher day and its own transport.",
      },
      {
        name: "Daocheng town / a different regional overnight",
        advice:
          "The county town is around 3,700–3,800 meters and is not the Yading scenic entrance. Choose it for a specific road or local-interest reason, with complete transfers included. It should not be substituted for Riwa as if both have the same altitude, visitor access or useful park hours.",
      },
      {
        name: "Yading village / a higher stay inside the managed scenic setting",
        advice:
          "Assess the particular room around the village's roughly 3,900-meter setting, current access, luggage, meals and final approach. Being inside the scenic area does not mean sleeping beside Milk Lake or avoiding all visitor transport. Compare warmth, bathroom and sleeping exposure with the actual benefit of the location before treating it as an upgrade.",
      },
      {
        name: "An outlying lodge / choose the address, not the branding",
        advice:
          "Request the precise location, sleeping elevation, current room facilities, staff, meals and access in poor weather. A photograph of a mountain does not establish the booked room view or a short journey to the entrance. Compare what the guest can genuinely enjoy on site, particularly if another park day is not appropriate.",
      },
    ],
    tradeoffs: [
      {
        title: "Know which Shangri-La appears on the booking",
        advice:
          "Shangri-La Town / Riwa in Daocheng County, Sichuan, is different from Shangri-La city in Yunnan. Both names appear in travel material, but they imply different airports, hotels and long-distance roads. Use the full Chinese address and province. A familiar destination label cannot replace the exact transfer and overnight plan.",
      },
      {
        title: "The park's shorter route is still a high mountain outing",
        advice:
          "The Chonggu area is roughly 3,900 meters and Pearl Lake around 4,100 meters, with variation along the route. Shorter refers to the relative itinerary, not a low-level accessible walk. Review the climb, surfaces, remaining steps and descent before recommending it. A selective permitted visit may be rewarding without reaching the lake.",
      },
      {
        title: "Luorong Pasture is not arrival at the upper lakes",
        advice:
          "Luorong lies around 4,100–4,200 meters. Even when the relevant electric-vehicle service operates, the continuation toward Milk Lake around 4,600 meters and Five-Color Lake around 4,700 meters is a separate demanding hike. Check current trail operation, actual ascent, turnaround and guest suitability. Do not market the electric vehicle as effortless access to those lakes.",
      },
      {
        title: "The lower sleeping base and higher daytime route need separate decisions",
        advice:
          "Riwa can offer a lower overnight than Daocheng town or Yading village, but that does not remove the park day's exposure. A direct high-airport arrival introduces another profile. Review each night's elevation and the highest daytime points, not just a single destination number. Oxygen equipment and a fixed number of nights are not medical clearance.",
      },
      {
        title: "A sacred mountain view is different from a summit or pilgrimage circuit",
        advice:
          "The three principal peaks hold religious significance and have different Tibetan and Chinese names. A public scenic visit provides selected views and paths; it is not a summit-climbing arrangement or a complete pilgrimage circuit. Respect worship, route closures and protected ground. Specialist journeys require their own assessed permissions and support, not an extension inferred from a day ticket.",
      },
      {
        title: "A horse ride is not a substitute for route suitability",
        advice:
          "If a current horse service is proposed, establish its permitted section, availability, provider, equipment, animal welfare and the guest's ability to mount and ride. It may not cover the whole wanted route and does not lower the altitude. Do not rely on an unconfirmed horse to make an otherwise unsuitable upper-lake itinerary work.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "litang",
        advice:
          "Litang adds a distinct monastery and Renkang cultural chapter rather than another part of Yading park. Its roughly 4,000-meter town overnight needs separate suitability review. Compare the actual road, useful visitor time and room sequence before using it as a transit stay.",
      },
      {
        slug: "kangding",
        advice:
          "Kangding offers a valley-city or separately chosen higher rural chapter on a broader Sichuan route. Identify exact hotels and road high points; a Kangding label does not establish one sleeping elevation. Give the connection its real travel days instead of treating a map line as a short park transfer.",
      },
      {
        slug: "shangri-la",
        advice:
          "Shangri-La city in Yunnan adds Songzanlin and a different cultural setting. It is not Riwa's Shangri-La Town in Sichuan. Plan the complete road, any intervening nights and sleeping profile as a separate chapter; existing Yunnan tours do not include Yading by implication.",
      },
      {
        slug: "chengdu",
        advice:
          "Chengdu can provide Sichuan city culture and food before or after the mountains. Compare the full road journey with an actual dated Daocheng Yading flight and airport transfers. A regional flight needs its own arrival-elevation and contingency review, and a Chengdu return is an explicit service rather than a default inclusion.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring, summer and autumn offer different vegetation, water and mountain conditions, with rain, cloud and cold possible even in the warmer season. Autumn color can be attractive but is not identical across elevations or guaranteed on a fixed date. Winter and shoulder periods can bring snow, ice and changed services or trail access. Check the actual intended route rather than infer upper-lake access from an open scenic entrance. Popular holiday periods can affect rooms and visitor flow. Choose a trip that remains worthwhile when peaks are clouded or a demanding route is unavailable.",
    orientation:
      "Daocheng town, Riwa / Shangri-La Town, Yading village and the scenic paths are distinct places. Public scenic transport serves a defined road system; Zhaguanbeng, Chonggu and Luorong refer to different stages or subjects, not interchangeable drop-off names. Daocheng Yading Airport is another high-elevation gateway with a substantial separate road sequence. Use exact Chinese hotel and entrance addresses and province names, particularly when the words Shangri-La appear. A single Yading altitude figure cannot describe every room, transport stage and viewpoint.",
    experiences: [
      "Understand the sacred peaks from a suitable permitted valley or meadow route",
      "Choose a shorter Chonggu-area visit or a distinct Luorong outing for its actual rewards",
      "Use the right sleeping base, a dependable room and a flexible pace to make the mountain chapter work",
    ],
    planningNotes: [
      "Distinguish Daocheng town, Sichuan Riwa, Yading village and Yunnan Shangri-La",
      "Separate scenic-bus and electric-vehicle access from the walking left to the lakes",
      "Confirm current upper-trail access and suitability without making the highest viewpoint compulsory",
    ],
    arrival:
      "Use the dated flight to Daocheng Yading Airport or the actual preceding road base to construct the whole arrival. The airport is above 4,000 meters and introduces a different exposure from the eventual room. Confirm current flight operation, complete road transfer, meals and useful arrival time. A road sequence through high passes also needs assessment, not an automatic claim of gradual adaptation. Keep a full scenic outing separate from uncertain arrival and preserve an appropriate onward margin rather than attach a lake hike to a departure flight.",
    gettingAround:
      "Separate the regional private vehicle, public scenic bus, any electric-vehicle service and paths on foot. Name each stage and the actual return arrangements. A hotel inside the scenic setting does not grant private driving to every viewpoint. Review luggage and current access rules if sleeping in Yading village, and repeat-entry terms if staying outside. On foot, follow designated routes and closures. A group with mixed walking ability needs a specifically agreed split or shorter plan and clear meeting points, not an assumption everyone can reach the same upper lake.",
    stayStrategy:
      "Choose the sleeping elevation and room before optimizing a photograph or one shorter transfer. Riwa may provide a useful gateway base; Daocheng town and Yading village serve different road, comfort and elevation briefs. Compare heating, bathroom, meals, quiet, stairs and current service in the exact room. Three nights can support one full park day and flexibility when the arrival works, while a second park day needs its own purpose and access terms. More nights, hotel oxygen or a premium label should not be sold as guaranteed adaptation.",
    firstTimerNote:
      "Ask whether the trip would still be rewarding without Milk Lake and Five-Color Lake. A suitable valley visit, meadow landscape, clear cultural interpretation and comfortable base can already create a strong journey. If the whole proposal depends on reaching the highest viewpoint, request a realistic alternative before booking. The operator should explain the actual walking and transport and be willing to shorten or omit a route when that is the better answer for the guest.",
    faqs: [
      {
        question: "Where should I stay for Yading: Daocheng, Riwa or Yading village?",
        answer:
          "Compare exact rooms and the whole sequence. Riwa / Shangri-La Town is roughly 2,900 meters, Daocheng town around 3,700–3,800 meters and Yading village roughly 3,900 meters, with variation by address. They have different transfers and services. A higher room inside the scenic setting is not automatically the best choice for sleep or guest suitability.",
      },
      {
        question: "Is Shangri-La Town near Yading the same as Shangri-La in Yunnan?",
        answer:
          "No. Riwa / Shangri-La Town is in Daocheng County, Sichuan. Shangri-La city is in Yunnan, with different hotels, gateways and roads. Use the full Chinese address and province to confirm which place appears in a booking or proposal.",
      },
      {
        question: "How many nights do I need for Daocheng Yading?",
        answer:
          "Three nights can provide one scenic day and another flexible or gentler day between arrival and departure. Two leave less flexibility; four need a distinct second interest or useful slower pace. Confirm repeat-entry terms for a second park visit. No fixed number of nights guarantees acclimatization.",
      },
      {
        question: "Can I visit Yading without hiking to Milk Lake?",
        answer:
          "Yes. Compare a selected Chonggu-area visit, the shorter but uphill Pearl Lake route or a suitable Luorong outing through current visitor arrangements. These still involve altitude and remaining walking. A rewarding trip does not require the upper lakes, and a shorter permitted route may be the right choice.",
      },
      {
        question: "Does Yading's electric vehicle take me to Milk Lake and Five-Color Lake?",
        answer:
          "No. The relevant meadow service, when operating, does not remove the demanding continuation toward the upper lakes. Luorong is around 4,100–4,200 meters, while Milk Lake and Five-Color Lake are roughly 4,600 and 4,700 meters. Check actual operation, remaining ascent, descent and individual suitability.",
      },
      {
        question: "Are the upper lakes open all year?",
        answer:
          "Do not assume so. Weather, snow, ice, conservation and current management can change access or visitor arrangements. An open park entrance does not establish an open upper trail. Verify the intended route close to travel and agree a worthwhile alternative before booking.",
      },
      {
        question: "Can I visit Yading straight after flying into Daocheng Yading Airport?",
        answer:
          "Do not treat airport arrival as a ready-made scenic day. The high-elevation airport, substantial road transfer, entry stages, walking and guest condition require review. Keep a demanding visit separate from uncertain arrival, and seek appropriate professional advice on the whole ascent rather than rely on a private car or oxygen equipment.",
      },
      {
        question: "Is a horse a reliable alternative to the upper-lake hike?",
        answer:
          "Only assess a specific currently permitted service, section and provider, with equipment, animal welfare and guest suitability established. Availability is not guaranteed, and a horse may not cover the whole route. Riding does not reduce altitude exposure and should not be used to rescue an otherwise unsuitable itinerary.",
      },
    ],
    culturalStory: {
      title: "Read a sacred mountain landscape beyond its best-known photograph",
      paragraphs: [
        "Yading's three principal sacred peaks are commonly identified in Chinese as Xiannairi, Yangmaiyong and Xianuoduoji, with Tibetan renderings including Chenrezig, Jampayang and Chanadorje. The names carry religious meaning rather than simply identify three photo backdrops. A guide can connect the visible valley, Chonggu's setting and the way people understand the mountains, while distinguishing interpretation from religious participation. A public scenic ticket is not permission for a summit ascent or every pilgrimage route.",
        "The wider region is also home to contemporary communities whose work, homes and worship should be respected. Ask before portraits and follow site-specific rules, especially around religious spaces. Accommodation and transport development shape the visitor experience alongside the protected landscape. Explain those present conditions honestly instead of promise untouched Shangri-La. Time to observe a meadow, understand a name and take a manageable walk can provide deeper value than a hurried attempt to reproduce every famous lake image.",
      ],
    },
    foodStory: {
      title: "Plan the park day's food as carefully as its transport",
      paragraphs: [
        "Agree an actual breakfast, lunch or packed-food plan and a warm dinner at the chosen base. Confirm where food and water can be obtained on the selected current route rather than assume every meadow or lake has a suitable kitchen. Choose practical portions and food the guest enjoys. Yak-meat, noodle or dairy preparations can add local interest when genuinely offered, but they are optional tastes, not a condition for understanding the place. Avoid making a full hiking day depend on a late, unconfirmed meal.",
        "Discuss dairy, wheat, barley, meat stock, soy, nuts and shared preparation where dietary requirements matter. A vegetable dish is not proof of a vegan kitchen, and a small scenic service may have fewer alternatives than a gateway-town restaurant. Serious allergies or religious requirements need confirmed provision before the park day. Food, butter tea and supplemental oxygen should not be marketed as preventing altitude illness. Meals support comfort; individual medical concerns need appropriate professional assessment.",
      ],
    },
    itinerary: [
      {
        day: "Day 1 / arrival",
        title: "Reach the selected sleeping base without a compulsory park visit",
        description:
          "Complete the assessed flight-and-road or overland sequence, check the room and settle in with a suitable meal. Confirm current scenic operation and the actual next-day transport stages. A short local introduction can be optional; a lake hike should not be attached to uncertain arrival.",
      },
      {
        day: "Day 2 / selected scenic day",
        title: "Follow the route that suits the guests and current conditions",
        description:
          "Use the confirmed entry and public transport, then the agreed Chonggu-area, Pearl Lake or Luorong brief. Review weather and guest condition before continuing, with turnaround and return services understood. Any upper-lake continuation needs its own current access and suitability assessment rather than becoming an automatic upgrade.",
      },
      {
        day: "Day 3 / flexibility or a distinct suitable interest",
        title: "Keep the second day useful without requiring a harder hike",
        description:
          "Choose rest, a researched local subject or a separately planned second park visit when appropriate. Confirm repeat entry and transport if returning. The day is not a promise that everyone can progress from a short route to the upper lakes after one night.",
      },
      {
        day: "Day 4 / onward travel",
        title: "Leave through the actual terminal or next overnight base",
        description:
          "Coordinate the complete road journey, flight or separately assessed regional chapter. Keep departure clear of a maximum-effort scenic outing. This three-night outline is illustrative, not a published package, medical ascent schedule or guarantee of lake access, horses, mountain visibility or room facilities.",
      },
    ],
  },
};
