import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/yaoli.svg",
  alt: "Original Yaoli planning schematic separating the riverside town, Raonan ceramics heritage and Wanghu forest walking; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const yaoliGuide: ExpandedDestination = {
  id: "yaoli",
  name: "Yaoli",
  region: "east",
  kicker: "A riverside town with a place in the porcelain landscape",
  description:
    "Plan Yaoli beyond a quick riverside photo: compare town walks, Raonan ceramics heritage, Wanghu forest routes and a carefully assessed rural overnight.",
  stay: "A selective day from Jingdezhen or 2 nights for a slower stay",
  bestFor: "Riverside architecture, ceramics context and gentle countryside time",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["jingdezhen", "fuliang", "wuyuan", "hongcun"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Yaoli Travel Guide: Old Town, Walks & Where to Stay",
    seoTitle: "Yaoli Guide: Old Town, Walks & Where to Stay",
    seoDescription:
      "Plan Yaoli from Jingdezhen: choose riverside lanes, Raonan ceramics heritage or Wanghu walking. Compare a day trip with two nights and rural rooms.",
    answer:
      "Yaoli (瑶里) is a town in Fuliang County, within the wider Jingdezhen area of northeastern Jiangxi. Its appeal is a riverside settlement framed by wooded hills, with architecture and nearby ceramics heritage that can give a porcelain-city journey a different scale. The old-town walk, Raonan's ceramics-history subject and the Wanghu forest area are separate visitor choices, not three names for one compact attraction. A selective day from Jingdezhen can work; two nights give one full day plus an evening and early morning when the actual room and local plan justify staying. Choose Yaoli for the relationship between settlement, landscape and production history, rather than expect a luxury resort or guaranteed pottery class.",
    stayAnswer:
      "Keep a Jingdezhen base for a focused day choosing the town and one manageable complementary interest. Stay two nights when quieter walking hours, a particular rural room or a second subject makes the overnight worthwhile. One night works with useful arrival and departure hours, but a late check-in and early departure miss most of the benefit. Three nights need a defined walking, photography or cultural interest and enough indoor comfort for poor weather. Count time at the places you care about, not just the number of scenic-area names on a pass.",
    hotelAnswer:
      "A room in or beside Yaoli's riverside settlement can make an early walk easy, but check road noise, shared-yard acoustics, privacy and the luggage route. A newer property outside the lanes may offer easier pickup and better room facilities, with a transfer back to the town. Keep your Jingdezhen room if city museums and studios still lead the trip. For any rural stay, assess the actual bedroom, bathroom, heating or cooling, bedding, hot water, dinner and breakfast. A river-view picture does not prove the booked outlook, quiet or safe access to the water.",
    sightseeingQuestion: "Should I choose Yaoli old town, Raonan or Wanghu?",
    sightseeingAnswer:
      "Choose Yaoli's old-town lanes for the river, bridges, buildings and a slower introduction to settlement history. Choose Raonan for a specifically identified public ceramics-heritage route, with the guide distinguishing historic remains, reconstructed interpretation and any actual demonstration. Choose Wanghu for a separate forest or waterfall walking interest, assessing the current route, weather and steps. For a short day, one principal subject with time for lunch is stronger than a rushed circuit of all three. A forest visit is not essential to an enjoyable town stay.",
    visitorResources: [
      {
        label: "Fuliang county government",
        href: "https://www.fuliang.gov.cn/",
        scope:
          "Official county context and dated notices, mainly in Chinese. Confirm the current Yaoli, Raonan and Wanghu visitor routes, ticket arrangements and road conditions with the responsible operator. A county overview does not establish today's demonstrations, forest access or a particular rural room.",
      },
      {
        label: "Jingdezhen municipal government",
        href: "https://www.jdz.gov.cn/",
        scope:
          "Regional cultural and administrative context. Distinguish Yaoli's town and landscape visits from Jingdezhen city museums and studio services. Publicity about ceramics does not guarantee an operating kiln, maker appointment, class or access to conservation areas.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains to the actual gateway. Include the full road transfer from the ticketed station to Yaoli and your booked property. A Jingdezhen arrival is not an arrival at the riverside town, and an onward village journey is not part of the rail time.",
      },
    ],
    serviceScope:
      "A proposal should name the town walking route, any Raonan or Wanghu component, hotel and room, exact drop-off, luggage help, guide language, admissions and meals. Explain the walking and whether a ceramics element is interpretation, a currently scheduled demonstration or a separately booked lesson. Tea hosts, domestic courtyards, production premises, firing, private meals and off-route forest access require their own willing providers or permission. Agree a shorter or indoor alternative if weather or a closure changes the reason for the visit.",
    routeAdvice:
      "Yaoli can complement Jingdezhen's city ceramics with a smaller settlement and landscape chapter. Fuliang's old county complex and tea interests are other county routes, not stops automatically included on every Yaoli transfer. Wuyuan and Hongcun offer different village comparisons and need exact onward roads and useful nights. There is no matching published Yaoli tour in the current catalog. Share dates, gateways, ceramics or walking interests, mobility needs and room priorities for a tailored plan with explicit inclusions.",
    practicalPlanning: {
      timing:
        "For a day excursion, protect a useful town walk and a proper meal before adding a second subject. Raonan needs current visitor content worth explaining; Wanghu needs a suitable outdoor window and a return plan. Overnight guests can use an early walk and later riverside time rather than repeat the busiest stretch at midday. Keep essential cultural visits away from uncertain arrival hours and leave the complete road journey before a fixed onward train.",
      walking:
        "Town routes can involve stone paving, thresholds, bridge approaches and narrow lanes. Assess the actual room-to-vehicle distance with bags. Raonan and Wanghu have different paths and physical demands; forest or waterfall walks can add steps, wet surfaces and limited seating. Ask for the route's effort and turn-back options, not just a label such as easy. Riverside paths and bridges are for the agreed public walk, not assumed swimming, stepping-stone or river-crossing activities.",
      cost: "Compare the actual room and meals, full return or onward vehicle day, guide preparation, named scenic-area components and any internal transport. Check which sites a current pass actually covers and whether you will use them. A craft lesson is a separate service from a heritage display. A premium should deliver comfortable timing, accurate explanation and a reliable room rather than a guaranteed empty town, private kiln or waterfall access in unsuitable conditions.",
    },
    attractions: [
      "Yaoli's riverside settlement through a selected public lane-and-bridge route",
      "A named publicly visitable traditional building, with its actual historical layers explained",
      "Raonan ceramics heritage through currently available remains and interpretation",
      "Wanghu forest or waterfall route only when current conditions and guest suitability support it",
      "A quiet early or later walk for guests staying nearby, without a promise of empty lanes",
      "A local seated meal arranged around the actual kitchen and day's road sequence",
      "A separate tea or ceramics session only with a confirmed suitable provider",
    ],
    stays: [
      {
        label: "Day visit / one main subject and a measured addition",
        advice:
          "Keep the city hotel and choose a coherent town-and-heritage or town-and-nature day. Include the full return road and lunch. Do not add every scenic component merely because a pass lists it; the actual journey and available content determine the useful visit.",
      },
      {
        label: "1 night / meaningful only with useful hours",
        advice:
          "An afternoon arrival and unhurried following morning can add value when the room suits you. A late arrival and early train leave little beyond a rural bed. Check dinner and the final luggage approach before deciding that an overnight simplifies the trip.",
      },
      {
        label: "2 nights / one full day and different town hours",
        advice:
          "Choose an assessed room, settle in and use the full day for a main cultural or nature subject plus a relaxed town walk. Early and later light can suit photography, but weather and crowd levels remain variable. Keep enough rest time for the countryside stay to feel different from a day excursion.",
      },
    ],
    hotelAreas: [
      {
        name: "In or beside the riverside settlement / walks from the door",
        advice:
          "Ask where the bedroom sits relative to traffic, restaurants and communal spaces. Check window privacy, enclosed bathroom, temperature control and the last luggage stretch. Traditional style and a central location do not establish quiet or original historic fabric.",
      },
      {
        name: "A newer property outside the lanes / practical pickup",
        advice:
          "Compare room facilities, meals and the full route back to the river. An outlying address can be worthwhile for comfort, but nearby is not a measured walking distance. Check road noise and the evening return rather than assume a countryside label guarantees seclusion.",
      },
      {
        name: "Jingdezhen city / retain the ceramics base",
        advice:
          "A sensible choice for one focused Yaoli day when museums and studio work remain central to the trip. Count the full return transfer, not just a map distance. Protect enough time for the town and lunch instead of combining a full city teaching session with a compressed rural circuit.",
      },
      {
        name: "Another Fuliang village / a separate local plan",
        advice:
          "Choose it for a particular room or confirmed activity and verify the road to Yaoli. A Fuliang address may belong to another part of the county. Compare whether changing rural hotels improves the actual experience enough to justify packing and transfer time.",
      },
    ],
    tradeoffs: [
      {
        title: "A scenic-area label can hide several different visits",
        advice:
          "Old-town lanes, ceramics heritage and forest walking answer different interests. Ask for the named places, the open route and the complete driving and walking sequence. A broader ticket does not make them adjacent or equally worthwhile for your group. Select by the visit you want rather than by the number of components offered.",
      },
      {
        title: "Ceramics remains are not an automatic hands-on class",
        advice:
          "At Raonan, distinguish surviving evidence, reconstructed equipment, interpretation and an operating demonstration. A class requires a willing teacher, suitable working facilities and agreed language, content and timing. Firing, collection or shipping need separate arrangements; a heritage ticket does not include them.",
      },
      {
        title: "A forest and waterfall route needs its own physical assessment",
        advice:
          "Wanghu is a different proposition from a short riverside walk. Check steps, current paths, weather, remaining daylight and the way back. In wet or unsuitable conditions, choose a shorter assessed option or another subject. A dramatic water photograph does not prove an accessible or currently open route.",
      },
      {
        title: "A lived-in town deserves more than a photograph of a doorway",
        advice:
          "Follow agreed public routes and ask before entering homes or photographing residents. Explain which buildings retain older fabric and which have been repaired, adapted or reconstructed. Commercial streets and domestic life coexist; neither a shopfront nor an open courtyard establishes a private hosted experience.",
      },
      {
        title: "Overnight comfort is a room question, not a scenery claim",
        advice:
          "Damp-weather comfort, hot water, heating or cooling, food and noise can matter more than a dramatic exterior. A good rural stay is possible only when the specific property meets the brief. If it does not, a well-planned day visit from Jingdezhen can provide better value than paying more for an untested inn.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "jingdezhen",
        advice:
          "Jingdezhen provides the city collections, kiln-history interpretation and separately arranged studio teaching that can contextualize Yaoli. Keep a city base for a selective rural day or add useful nights when the room and local interests justify it. City ceramics products do not imply a Yaoli overnight or a Raonan class.",
      },
      {
        slug: "fuliang",
        advice:
          "The Fuliang guide compares the old county complex, tea learning and other rural stays. Yaoli lies within the county but is a distinct local route; its town, Raonan and Wanghu should not silently expand a county-history and tea day. Choose which subject earns another day or whether one replaces another.",
      },
      {
        slug: "wuyuan",
        advice:
          "Wuyuan adds different village forms and seasonal landscape decisions. Compare the exact village and property with what you have already experienced in Yaoli. The full road and useful nights matter more than collecting another old-town label; flowers, colors and harvest displays are not guaranteed across all stops.",
      },
      {
        slug: "hongcun",
        advice:
          "Hongcun provides an architectural comparison in Anhui with a different village plan and visitor setting. Treat it as a separate onward chapter, with the full journey, lodging and walking assessed. A rural Jiangxi room does not make Hongcun a neighboring afternoon visit.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for combining town and countryside walking, with rain and temperatures still checked for the actual dates. Summer brings heat, humidity and possible heavy rain; forest and river conditions need separate attention. Winter puts more weight on room heating, hot water and a comfortable indoor rest. Mist, reflections, water flow and foliage are variable rather than included photographic conditions. Select a core cultural route that remains useful without a particular weather effect, and keep nature choices flexible.",
    orientation:
      "Yaoli is a town in Fuliang County within Jingdezhen's wider administrative area. The riverside settlement and scenic-area labels used in travel listings can refer to different scales. Raonan ceramics heritage and Wanghu nature routes require their own addresses and road sequence. Use full Chinese hotel and site names, not only a Yaoli search result. For one full day, choose the riverside town and one complementary ceramics or nature visit; adding several outlying stops leaves less time to explore on foot.",
    experiences: [
      "Read a riverside settlement through its public lanes, bridges and architectural layers",
      "Connect a selected Raonan heritage visit with Jingdezhen's wider ceramics story",
      "Choose one suitable nature route or slower town session instead of rushing every component",
    ],
    planningNotes: [
      "Choose the principal town, heritage or nature interest before buying a broad circuit",
      "Check the exact rural room, meals, luggage access and temperature control",
      "Treat rain, river conditions and forest steps as route choices, not minor afterthoughts",
    ],
    arrival:
      "Compare dated services to the actual Jingdezhen gateway with the full road to your Yaoli property or first entrance. A fixed onward train needs the entire return drive, bags and station margin allowed. For an overnight, agree where vehicles stop and who helps with luggage if needed. Keep essential visits away from uncertain arrival windows, and do not infer a short transfer from the shared Jingdezhen municipal name.",
    gettingAround:
      "Walk the selected public town route at a pace that allows looking, seating and a meal. Use transport for separately chosen scenic components rather than assume every place is linked by an easy lane. Check actual entrances, steps, toilet stops and pickup. A driver and a guide with ceramics or architectural knowledge are different services. In rain, adjust the route and respect closures instead of improvising along a swollen river or an unassessed forest path.",
    stayStrategy:
      "A two-night stay works when the actual room, food and local plan make the slower hours enjoyable. Keep Jingdezhen as the base when rural facilities do not meet the guests' needs or the visit is a single selected subject. Assess sleep, bathroom, temperature control and access before river-view or boutique language. High-end value is a comfortable room, thoughtful explanation and time well used, rather than a promise that the town will be empty or exclusively available.",
    firstTimerNote:
      "Ask what you would miss by returning to Jingdezhen: an early walk, a specific second subject or time at a room you want to enjoy. If the answer is unclear, a focused day may be enough. Yaoli does not need every nature and ceramics component to be worthwhile; the selected places should explain why you are there.",
    faqs: [
      {
        question: "Is Yaoli worth visiting from Jingdezhen?",
        answer:
          "It can be for riverside architecture, nearby ceramics heritage or a particular nature route. Choose a clear subject and allow the complete return journey. It adds a different scale to the porcelain-city stay, but a rushed attempt to cover every scenic component is less rewarding than a selective visit.",
      },
      {
        question: "Should I visit Yaoli for a day or stay overnight?",
        answer:
          "Keep a Jingdezhen base for one focused day. Consider two nights for one full local day, early and later town walks, and an assessed room that suits your comfort needs. One night depends on useful arrival and departure hours. Do not move solely for a rural address.",
      },
      {
        question: "Are Yaoli old town, Raonan and Wanghu the same attraction?",
        answer:
          "They are distinct visitor choices within the wider Yaoli planning area: town walking, ceramics heritage and forest or waterfall routes. Check their actual locations, current access and ticket scope. A shared scenic-area label does not mean one compact walk covers all three.",
      },
      {
        question: "Can I take a pottery class in Yaoli?",
        answer:
          "Only when a suitable provider and class are separately confirmed. Ceramics remains or a demonstration are different from a hands-on lesson. Agree teaching language, content, time and any firing or shipping; a scenic ticket does not establish those services.",
      },
      {
        question: "Is Yaoli suitable for travelers with limited mobility?",
        answer:
          "Assess the exact town route, room and vehicle approach. Paving, thresholds, bridge steps and narrow lanes can matter even on a short walk. Wanghu routes have a separate level of effort and may be omitted. A ground-floor room or private car does not by itself establish step-free access.",
      },
      {
        question: "Can I visit Yaoli in the rain?",
        answer:
          "A town visit may remain worthwhile with a suitable route and indoor rest, depending on actual conditions and operation. Forest steps, river edges and road conditions require separate review. Keep a useful alternative and follow local closures rather than assume every outdoor component remains appropriate.",
      },
      {
        question: "Does a Fuliang tour automatically include Yaoli?",
        answer:
          "No. Fuliang is a wider county, and a county-history or tea route may be in another area. Yaoli needs a named road and visitor plan, potentially replacing another subject or requiring more time. Confirm the actual places instead of relying on the county name.",
      },
      {
        question: "Are there luxury hotels in Yaoli?",
        answer:
          "Assess specific current properties rather than assume a luxury standard from a boutique, villa or river-view label. Check the booked room, bathroom, quiet, heating or cooling, meals and luggage approach. If the available room does not meet your needs, a Jingdezhen-based day visit may be the better choice.",
      },
    ],
    culturalStory: {
      title: "A smaller settlement changes the ceramics conversation",
      paragraphs: [
        "Jingdezhen's galleries and studios focus attention on objects and makers. Yaoli can shift the question toward settlement, water, resources and the landscapes around production. At a selected Raonan public route, a guide can explain what the surviving evidence shows and where later reconstruction or demonstration begins. That distinction matters more than a claim that every kiln is still working exactly as it did in the past.",
        "In the town, look at how buildings address the river and how lanes connect working and domestic spaces. The visit should acknowledge current life as well as older architectural forms. Ask before crossing a domestic threshold or taking a close photograph of a resident. Repairs, commerce and everyday use do not make a place less interesting; they help explain the actual settlement rather than an imagined untouched village.",
      ],
    },
    foodStory: {
      title: "Plan a meal that fits the road and the room",
      paragraphs: [
        "A rural meal works best when the restaurant knows the arrival time and what the guests can eat. Choose a few available dishes and a comfortable place to sit, allowing for the walking that follows. Ask about seasonal vegetables and the actual preparation of fish or meat rather than expect a fixed regional tasting menu. For an overnight, confirm dinner and breakfast before booking, especially if the property has few alternatives within a practical evening walk.",
        "Discuss chili, pork, meat stock, freshwater fish, wheat, soy-based seasonings and shared equipment as relevant. A farm-style or home-cooked label does not prove vegetarian, halal or allergy suitability. Serious dietary needs require a kitchen's confirmed capacity and a fallback. A hosted meal or cooking lesson is a separate arrangement with a willing provider, not an automatic benefit of sleeping in a village.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / first night if staying",
        title: "Settle in before choosing another outing",
        description:
          "Complete the rural transfer and agreed luggage approach. Take a modest public town walk and meal if arrival permits, keeping the main cultural or nature subject for a reliable full day. A city-based day visitor should instead begin with the main subject and allow the full return road.",
      },
      {
        day: "Full day / second night",
        title: "Pair a town walk with one distinct interest",
        description:
          "Use an early riverside walk for settlement and architecture, then a selected Raonan heritage route or a suitable Wanghu nature visit with lunch, rest and transport allowed. Do not require both outlying components. Return for a relaxed evening and a room you have chosen for actual comfort.",
      },
      {
        day: "Optional additional day / only for a longer stay",
        title: "Add depth or a confirmed local activity",
        description:
          "Choose the second distinct interest, a separately arranged teaching session or time for slower looking. Review weather and current operation before committing to forest walking. A longer stay needs a clear purpose and a useful indoor alternative, not more unconfirmed activities.",
      },
      {
        day: "Departure / Jingdezhen or the onward region",
        title: "Give the final road its real time",
        description:
          "Return to a separately planned city ceramics stay or continue to the ticketed gateway with bags, breaks and station time allowed. This outline is illustrative, not a packaged tour or guarantee of rooms, active kilns, forest routes, teachers or current services.",
      },
    ],
  },
};
