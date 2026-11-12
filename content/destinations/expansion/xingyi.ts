import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/xingyi.svg",
  alt: "Original Xingyi planning schematic comparing Wanfenglin countryside, Maling River Gorge and a separate Wanfeng Lake outing; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const xingyiGuide: ExpandedDestination = {
  id: "xingyi",
  name: "Xingyi",
  region: "southwest",
  kicker: "Karst peaks, valley villages and room for a slower Guizhou stay",
  description:
    "Choose Xingyi for Wanfenglin's peak-and-field landscape, with Maling River Gorge and Wanfeng Lake compared honestly and rural hotels selected for real comfort.",
  stay: "2–3 nights; 3 for two different full days",
  bestFor: "Karst countryside, relaxed village time and thoughtful landscape travel",
  interests: ["landscape", "food", "heritage"],
  relatedDestinationIds: ["guiyang", "libo", "kunming"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Xingyi Travel Guide: Wanfenglin, Walks & Hotels",
    seoTitle: "Xingyi Guide: Wanfenglin, Walks & Hotels",
    seoDescription:
      "Plan Xingyi with Wanfenglin countryside, Maling River Gorge and Wanfeng Lake compared. Choose rural or city hotels, two or three nights and suitable walking.",
    answer:
      "Xingyi (兴义) is a city in southwestern Guizhou and the seat of Qianxinan Bouyei and Miao Autonomous Prefecture. Its strongest reason for a slower visit is Wanfenglin, the 'Forest of Ten Thousand Peaks': a karst landscape of limestone hills, fields and villages. Maling River Gorge offers a separate, more enclosed landscape with its own walking demands, while Wanfeng Lake is another outing rather than the water beneath every Wanfenglin view. Two nights give one selected full day; three allow two distinct days. Choose a rural room for the countryside you want to enjoy or a city base for practical services, then build the actual routes around it.",
    stayAnswer:
      "Two nights can support one complete Wanfenglin day between arrival and departure. Three nights give two full days, allowing a distinct gorge interest or a gentler split between scenery, village time and the room. A lake outing should earn its place through the actual access and experience rather than appear automatically as a third headline. One night is selective and depends on real transport hours. Longer stays work when the hotel and countryside are part of the holiday, not simply to fill every day with another distant scenic gate.",
    hotelAnswer:
      "Compare a specific Wanfenglin-area property for peak views, quieter local hours and countryside time with a Xingyi city hotel for meals, services and the actual gateway journey. Rural properties vary in room comfort, road access and position relative to the public scenic route. Ask about sound, temperature control, bathroom, hot water, bedding, dinner, breakfast, stairs and bags. A field-facing image does not prove the booked category has that view or that village roads are silent. Wanfeng Lake accommodation serves a different purpose and should not be treated as a Wanfenglin base.",
    sightseeingQuestion: "Should I choose Wanfenglin, Maling River Gorge or Wanfeng Lake?",
    sightseeingAnswer:
      "Choose Wanfenglin for the relationship between peaks, fields and villages, using an appropriate public scenic route and local walking. Choose Maling River Gorge for gorge walls, water and a different physical day, with the exact path, steps and available transport assessed. Choose Wanfeng Lake only when a specific shoreline or operating boat experience is a real interest. Similar names do not make Wanfenglin and Wanfeng Lake one site. For a short stay, let the peak-and-field landscape lead and add a genuinely contrasting subject instead of rush through all three.",
    visitorResources: [
      {
        label: "Xingyi municipal government",
        href: "https://www.gzxy.gov.cn/",
        scope:
          "Local context and dated public notices, primarily in Chinese. Confirm actual scenic entrances, public routes, current transport and room arrangements separately. Local tourism descriptions do not establish unrestricted village access, guided activities or current gorge conditions.",
      },
      {
        label: "Qianxinan prefecture government",
        href: "https://www.qxn.gov.cn/",
        scope:
          "Regional context for Qianxinan and dated notices. Xingyi is one city within the wider prefecture; a regional travel description does not confirm every county, lake section, boat, festival or private host. Check the responsible operator for the precise visitor offer.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains and exact stations. Compare the actual ticketed gateway and full final road to the room rather than rely on older travel reports or the name Xingyi alone. Train availability, station choice and convenient arrival hours require a current search.",
      },
    ],
    serviceScope:
      "A proposal should name the room, actual arrival gateway, public scenic entrance, transport, selected walking, guide, meals and admissions. Distinguish a scenic shuttle from private road transport, a public village walk from a hosted cultural encounter, and a lake view from a boat booking. Explain the full gorge route and any lift or internal transport as an actual operating service rather than a general accessibility promise. Private guiding does not authorize farm access, household visits or closed paths. Agree a suitable lower-effort or wet-weather alternative before the visit.",
    routeAdvice:
      "Guiyang offers a city and provincial-history chapter; Libo provides a different forest-and-river karst experience rather than the same scenery repeated under another name. Kunming adds a Yunnan gateway and a distinct city context. Compare dated services and full hotel transfers before deciding the order, and give Xingyi its own useful nights. No matching published Xingyi tour is recommended here. Share dates, arrival and onward cities, walking limits and the balance you want between countryside and hotel time for a tailored plan.",
    practicalPlanning: {
      timing:
        "Give Wanfenglin a useful block of time rather than only a viewpoint stop. The public scenic route, a village walk, a meal and room time serve different purposes. Maling River Gorge needs a separate assessment of entry, walking, water and return. A lake excursion requires the actual shore, pier and operating activity named. Keep substantial outdoor routes away from a tight flight or train, and choose a worthwhile alternative when rain or current operation changes the day.",
      walking:
        "Wanfenglin can support selective countryside walking, but route surfaces, gradients, traffic and vehicle rules still matter. A path among fields is not permission to walk across crops or into a household. Maling River Gorge has a different profile of steps, wet surfaces and sustained walking; check the complete return and any current assistance. Viewpoints and rural rooms may have stairs. Discuss knees, balance, heat tolerance and other needs before treating all three landscape outings as equally gentle.",
      cost: "Compare the exact room and meals, full airport or station transfers, scenic admission and internal transport, guide preparation and the actual gorge or lake service. A field-view upgrade, bicycle, cultural host and boat are separate choices. Ask what remains payable if a guest declines a demanding route. A premium should improve sleep, suitable pacing and interpretation, not imply empty viewpoints, guaranteed flowering, private village access or a specific weather scene.",
    },
    attractions: [
      "Wanfenglin's peak-and-field landscape through appropriate public visitor routes",
      "A selected countryside or village walk respecting homes, fields and local roads",
      "Maling River Gorge through an actually open route matched to the group",
      "A defined Wanfeng Lake shore or boat interest with the actual operator confirmed",
      "A regional meal and time to understand the landscape beyond its viewpoints",
      "A rural room with a real reason to stay and a comfortable city alternative",
    ],
    stays: [
      {
        label: "1 night / a selective stop",
        advice:
          "Use only when arrival and departure leave a useful window for one main interest. Do not assume a late check-in and early train cover Wanfenglin, a gorge and a lake. Consider adding a night rather than spend the stay mostly on gateway roads.",
      },
      {
        label: "2 nights / one full landscape day",
        advice:
          "Let Wanfenglin lead, with a suitable public route, local meal and time to enjoy the room. A contrasting subject may fit actual partial days, but should not be promised regardless of transport. The hotel location should support the day rather than create repeated cross-city journeys.",
      },
      {
        label: "3 nights / two different full days",
        advice:
          "Separate countryside time from an assessed gorge or lake interest, or keep a gentler pace with more room time. Choose the second subject for genuine value and physical suitability. Extra time should improve the experience, not create a compulsory checklist of every attraction.",
      },
    ],
    hotelAreas: [
      {
        name: "Wanfenglin area / a countryside-led stay",
        advice:
          "Choose the precise property for its actual setting, room and relationship to the public routes. Check local vehicle access, luggage distance, dinner, breakfast and quiet. A boutique label does not establish room temperature control, English service or a view from every category.",
      },
      {
        name: "Xingyi city / services and gateway practicality",
        advice:
          "Useful when dining choice, established facilities or an actual arrival make the location sensible. Compare the complete drive to Wanfenglin and other visits. A city room can be comfortable without offering the village hours that justify a countryside stay.",
      },
      {
        name: "Maling River Gorge direction / only for a specific advantage",
        advice:
          "Assess the real hotel and entrance locations rather than book by a gorge-themed name. Confirm food, quiet, bags and the whole chosen walking route. Being close to one scenic gate does not automatically improve a trip centered on Wanfenglin.",
      },
      {
        name: "Wanfeng Lake direction / a separate leisure purpose",
        advice:
          "A lake property can suit guests who genuinely want that setting, provided the room, meals and shore access work. Count the roads to peak and gorge interests. A lake-view image does not establish swimming, a pier, a boat inclusion or a Wanfenglin location.",
      },
    ],
    tradeoffs: [
      {
        title: "Wanfenglin and Wanfeng Lake are not one attraction",
        advice:
          "The peak-and-field landscape and the lake create different routes, rooms and visitor experiences. Ask which place a proposal actually means and how it is reached. Similar English names should not conceal a long transfer or make a boat appear included in a countryside day.",
      },
      {
        title: "A slower landscape day can have more substance",
        advice:
          "Look at the contrast between steep limestone hills, valley floors, cultivation and settlement. A selected route with explanation and time to sit can be more rewarding than collecting every viewpoint. A good guide connects the landscape to what is visible without requiring guests to cross fields or enter private homes.",
      },
      {
        title: "The gorge is not an effortless extension of the village walk",
        advice:
          "Review the complete path, steps, wet footing, possible transport and return rather than rely on one flat-looking photograph. Water and weather influence the day, and current public instructions take precedence. Guests who prefer gentler time can choose another countryside interest without treating the trip as incomplete.",
      },
      {
        title: "Field color follows farming and weather",
        advice:
          "Rapeseed flowers, planted fields, harvest and changing light can produce different scenes, not a permanent calendar display. Confirm what is plausible close to the visit and avoid promising a precise flowering date or guaranteed morning mist. Respect working land and use public access even when a desired photograph lies beyond it.",
      },
      {
        title: "Bouyei culture needs a real context and host",
        advice:
          "The region's Bouyei identity is not a promise of costume performances or access to every home. A public village walk, a meal and a specifically hosted conversation are different experiences. If guests want deeper cultural learning, identify who will explain it, the language and the actual permission rather than describe ordinary village life as a private show.",
      },
      {
        title: "A premium rural room should work after the photograph",
        advice:
          "Assess sleep, temperature, hot water, bathroom, food and rain-day comfort alongside the view. A remote property with limited meals may add roads rather than peace. Choose the complete stay for the guests' needs, with any named host or special activity confirmed independently.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "guiyang",
        advice:
          "Guiyang provides provincial collections, regional food and a separate city stay. Compare the actual dated connection and both hotel transfers rather than treat all Guizhou destinations as neighboring outings. Keep useful Xingyi nights and avoid making the landscape day a race to the next station.",
      },
      {
        slug: "libo",
        advice:
          "Libo offers forest, water and a different karst setting through selected Xiaoqikong or Daqikong routes. Decide whether the contrast deserves another stay, then assess the full connection. Sharing a geological theme does not make the two places a short local transfer or the same physical walk.",
      },
      {
        slug: "kunming",
        advice:
          "Kunming adds a Yunnan city and gateway chapter. Research dated transport and the precise Xingyi arrival or departure point before fixing the order. Provincial proximity on a map does not establish a convenient service or enough time for full sightseeing at both ends of a travel day.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for mixed countryside and walking, though rain, temperature and visibility still matter. Flowering and crop stages vary by year and field. Summer needs a realistic rain and heat plan, particularly for gorge paths and exposed routes. Winter is a different landscape and requires an assessment of damp, cold and the room's heating. Choose dates for the experience and current conditions rather than a promise that every season looks like the same promotional photograph.",
    orientation:
      "Xingyi is the prefectural seat of Qianxinan in southwestern Guizhou. Wanfenglin, the city, Maling River Gorge and Wanfeng Lake represent separate visitor locations. The prefecture extends beyond Xingyi, while similarly named landscape products may refer to different entrances or shores. This guide covers selected Xingyi planning decisions, not every Qianxinan county, village or lake section. Use full Chinese addresses for the actual hotel, station and scenic gate.",
    experiences: [
      "Read the relationship between limestone peaks, cultivated valley floors and villages at Wanfenglin",
      "Choose a distinct gorge or lake subject only when its route and effort fit",
      "Enjoy a comfortable rural meal and room with time beyond the main viewpoint",
    ],
    planningNotes: [
      "Choose a countryside or city base around the actual full days",
      "Assess Maling River Gorge separately from gentle village time",
      "Distinguish public scenery from farm, household and hosted cultural access",
    ],
    arrival:
      "Research the actual flight or dated train and the full final road to the chosen room. Airport and station names, including specific railway gateways, must match the ticket and pickup instructions. A property using a Wanfenglin label may still need a further local approach. Keep essential scenic routes away from uncertain arrivals. Before departure, allow bags, the full road and a realistic margin at the actual gateway rather than assume the final viewpoint is close to every connection.",
    gettingAround:
      "Group the exact room, public route, meal and scenic entrance sensibly. Private road transport and regulated scenic vehicles are different services. A bicycle or electric vehicle needs its actual route, rules, ability and conditions assessed; it is not automatically included or appropriate for every guest. Agree walking, toilets, rest and pickups. Do not enter fields, yards or closed paths to shorten the route or reach a preferred photograph.",
    stayStrategy:
      "Choose two or three settled nights when Xingyi's countryside is a real interest. Compare a particular rural room with a city alternative using comfort, food and daily roads. Families may value a shorter outing and useful room time; active guests may want a separately assessed gorge. Premium planning should explain the fit and provide worthwhile alternatives, rather than promise empty landscapes or describe every village as an exclusive cultural encounter.",
    firstTimerNote:
      "Let the peak-and-field landscape have a day of its own. Then choose whether the gorge, lake or simply more countryside time adds the most to the trip. Those are different decisions, and a gentler stay is a valid choice. The best plan is not the one that lists every similarly named scenic area, but the one that gives you time to understand and enjoy the setting.",
    faqs: [
      {
        question: "Is Xingyi worth visiting in Guizhou?",
        answer:
          "Yes, for Wanfenglin's peak-and-field scenery and a slower countryside stay. A distinct gorge or lake outing can add contrast when it suits the guests. Allow useful full days rather than treat Xingyi as one quick viewpoint between long connections.",
      },
      {
        question: "How many nights should I spend in Xingyi?",
        answer:
          "Two nights give one selected full day; three allow two different days or a gentler pace. One night depends on actual transport hours. Add a lake or gorge only when the full route and physical effort improve the itinerary.",
      },
      {
        question: "Should I stay in Wanfenglin or Xingyi city?",
        answer:
          "Choose a specific Wanfenglin property for countryside time, views and local hours. A city hotel can suit services, dining and the actual gateway. Compare precise rooms, food, quiet and daily roads rather than assume every rural property is more comfortable.",
      },
      {
        question: "Are Wanfenglin and Wanfeng Lake the same place?",
        answer:
          "No. Wanfenglin is the peak-and-field landscape; Wanfeng Lake is a separate lake outing or accommodation choice. Confirm the actual entrance, shore or pier and the road between them. A Wanfenglin stay does not automatically include a boat.",
      },
      {
        question: "Is Maling River Gorge suitable for limited mobility?",
        answer:
          "It requires an actual access review of paths, steps, wet surfaces, available assistance and the full return. A lift or vehicle, where operating, does not establish that the complete visit is step-free. A gentler countryside day may be more appropriate for some guests.",
      },
      {
        question: "When can I see flowers at Wanfenglin?",
        answer:
          "Flowering depends on the crop, field, season and year's conditions. Check locally near the date rather than book on a fixed annual promise. The peaks, cultivation and villages should provide the main value even when fields differ from a promotional image.",
      },
      {
        question: "Should I choose Xingyi or Libo?",
        answer:
          "Choose Xingyi for peak-and-field countryside and a suitable rural base; choose Libo for a defined forest-and-river karst route. Compare walking, transport and useful nights. Both can fit a longer trip when their contrast justifies the complete connection.",
      },
    ],
    culturalStory: {
      title: "Look between the peaks as well as at them",
      paragraphs: [
        "Wanfenglin becomes more interesting when attention moves from the skyline to the valley floor. The contrast between steep hills, cultivation, paths and settlement gives the landscape its human scale. Ask what is being grown and how the public visitor route relates to everyday roads. A good explanation can bring a modest walk to life without a geological superlative or an off-limits photography stop.",
        "The wider region includes Bouyei and other communities whose contemporary lives extend beyond tourist images. A village is not a cultural performance available on demand. Respect households, work and photography preferences, and arrange deeper hosted learning explicitly when wanted. Public scenery, a local meal and a personal encounter can all be valuable, but should be described accurately rather than presented as the same service.",
      ],
    },
    foodStory: {
      title: "Make a local meal part of the slower day",
      paragraphs: [
        "Xingyi offers a different food introduction from simply repeating a generic Guizhou tasting menu. A local rice-noodle breakfast can be one starting point; ask what broth, meat and condiments the particular kitchen uses. Discuss chili and portion size before ordering a countryside lunch. A seated meal with useful explanation can add more to the day than another rushed viewpoint, especially after a physical gorge route.",
        "Check stocks, pork, wheat, soy, sesame, nuts and shared preparation where relevant. A rice-noodle or vegetable dish does not establish allergy, coeliac, vegetarian or halal suitability. Serious needs require the actual kitchen's confirmed capacity and an alternative. At a rural room, review both dinner and breakfast before booking; a good landscape view does not solve an unsuitable menu or a long unexpected evening road to eat.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / first night",
        title: "Settle into the chosen base",
        description:
          "Complete the actual gateway transfer, check the room and eat. A short local orientation can fit useful hours, but keep the main scenic route away from uncertain arrival. A countryside room should provide time to settle, not only somewhere to reach after dark.",
      },
      {
        day: "Full day 1",
        title: "Give Wanfenglin a complete, well-paced day",
        description:
          "Follow a suitable public scenic sequence with a selective village or countryside walk, lunch and rest. Use the actual visitor transport where required and keep farm and household access separate. Leave time for the room rather than race through every viewpoint.",
      },
      {
        day: "Full day 2 / for three nights",
        title: "Choose contrast or a gentler pace",
        description:
          "Select an assessed Maling River Gorge route, a defined lake interest or more relaxed countryside time. Confirm conditions, operation and the complete return. These are choices, not a promise to include both gorge and lake on every second day.",
      },
      {
        day: "Departure / onward Guizhou or Yunnan",
        title: "Protect the whole connection",
        description:
          "Allow breakfast, bags and the full journey to the ticketed gateway or next room. This outline is illustrative, not a published package or a guarantee of rooms, flowers, clear views, boat operation, private hosts or current activities.",
      },
    ],
  },
};
