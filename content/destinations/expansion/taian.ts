import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/taian.svg",
  alt: "Original Tai'an and Mount Tai planning schematic separating Hongmen walking from a bus-and-cable-car route, city hotels from summit rooms, and the two railway stations; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const taianGuide: ExpandedDestination = {
  id: "taian",
  name: "Tai'an",
  region: "east",
  kicker: "Choose the mountain route that makes the history enjoyable",
  description:
    "Plan Mount Tai from a comfortable Tai'an base, with clear choices between a long stepped ascent, transport-assisted sightseeing, Dai Temple and a summit overnight.",
  stay: "2 nights; 3 when a summit stay or slower pace justifies it",
  bestFor: "Sacred-mountain history, inscriptions and a carefully matched active day in Shandong",
  interests: ["heritage", "landscape", "city"],
  relatedDestinationIds: ["qufu", "jinan", "qingdao"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Tai'an & Mount Tai Guide: Routes, Cable Car and Hotels",
    seoTitle: "Mount Tai Guide: Routes, Cable Car & Hotels",
    seoDescription:
      "Plan Mount Tai from Tai'an: Hongmen walking or bus and cable car, remaining summit steps, Dai Temple, sunrise stays and Tai'an versus Taishan railway stations.",
    answer:
      "Tai'an (泰安), also written Taian, is a city in Shandong and the main base for Mount Tai / Taishan (泰山). The mountain is a UNESCO-listed cultural and natural property, valued for its landscape, religious associations, inscriptions and long history of imperial attention. A visit can follow a sustained stepped ascent from Hongmen / Red Gate, or use the Tianwai Village bus route to Zhongtianmen / Middle Heaven Gate and a cable car toward Nantianmen / South Heaven Gate when operating. The assisted option still leaves walking and steps in the upper area; it is not a car-to-summit service. Two nights in Tai'an can protect one full mountain day. Dai Temple is a separate city visit, and a summit overnight is a distinct accommodation decision rather than a requirement.",
    stayAnswer:
      "Two nights give an arrival, one full day and a departure morning, which can work well for a carefully chosen mountain route with a comfortable city base. Use arrival or departure time for Dai Temple only when its actual opening and the complete transfers fit. Three nights can support a slower sequence or a separately planned summit overnight, with luggage and the move back down considered. A day visit from another city needs favorable schedules and a selective route; a full walking ascent should not be squeezed against a tight train connection. More nights do not guarantee a clear sunrise or open cable-car operations.",
    hotelAnswer:
      "For most comfort-led visits, compare a Tai'an city property near the useful lower mountain approaches or Dai Temple with another city hotel offering the room and services you prefer. Establish the actual entrance you will use before calling a hotel convenient. A summit room serves a different purpose: access to evening and dawn at elevation, often with practical constraints on luggage, stairs, room space, heating, bathroom and meals. Confirm the exact room rather than expect city-hotel standards from a mountain-view label. A station-area hotel may suit an actual early departure, but Tai'an and Taishan railway stations are different gateways and neither identifies the mountain entrance by itself.",
    sightseeingQuestion: "Should I walk up Mount Tai or use the bus and cable car?",
    sightseeingAnswer:
      "Choose the full Hongmen ascent when the walking itself is an important part of the holiday and the group is suited to sustained steps, changing weather and a long active day. Choose an assisted route when you want more energy for the upper landscape and cultural interpretation, while accepting the remaining steps and walking. On the commonly used Tianwai Village route, a scenic bus and the Zhongtianmen cable car are separate stages with their own operations; road and cable access do not put a guest directly at every summit sight. Decide the descent too. Walking down can be demanding on knees, and a late change of plan may leave few operating options.",
    visitorResources: [
      {
        label: "UNESCO: Mount Taishan",
        href: "https://whc.unesco.org/en/list/437/",
        scope:
          "Reference for the mixed cultural and natural World Heritage property's identity and significance. It does not establish current trail access, cable-car operation, sunrise visibility, open religious interiors or the terms of a particular mountain hotel.",
      },
      {
        label: "Tai'an municipal government",
        href: "https://www.taian.gov.cn/",
        scope:
          "Starting point for local background and official notices, mainly in Chinese. Follow current scenic-area and transport operators for the exact route, entry, weather restrictions, bus and cable operation, and last return services. General city information is not a live operational check.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains and full station names. Tai'an high-speed railway station and Taishan railway station are different locations. Include the correct road transfer and connection time rather than use the names interchangeably.",
      },
    ],
    serviceScope:
      "A proposal should name the actual mountain entrance, ascent and descent stages, expected walking, admissions, bus and cable-car inclusions, guide language and return plan. Specify the exact city or summit room, luggage storage and meal arrangements. Private guiding can help pacing and interpretation but does not remove queues, steps or weather restrictions. A private road vehicle is not permission to bypass the scenic area's visitor transport system. Religious activity, interiors and photography follow current rules. A sunrise outing, summit hotel or full walking ascent needs its own suitability assessment; no clear dawn, quiet path or operating cable car is guaranteed by this guide.",
    routeAdvice:
      "Tai'an can combine with Qufu's Confucian sites and Jinan's springs and collections to form a coherent Shandong cultural journey. Qingdao adds a different coastal city chapter when the available days justify it. Protect a full mountain day and useful time in each city rather than collect all three between short rail segments. Share dates, actual gateways, walking experience, knee or mobility concerns, room preferences and interest in sunrise or imperial history before a route is proposed. No matching published Tai'an itinerary is listed here. A tour elsewhere in Shandong does not automatically include Mount Tai entry, bus, cable car, local guiding or a hotel night.",
    practicalPlanning: {
      timing:
        "Check entry, bus and cable-car operating windows for the actual date, then work backward from the intended descent and road pickup. Leave room for queues and changes in conditions rather than build the day around the latest theoretical return. Rain, wind, snow or ice can change the sensible route and operations. A sunset or dawn plan needs separate daylight, cold, lighting and accommodation considerations. Keep a demanding mountain day away from an inflexible same-evening departure when uncertain descent or traffic could compromise the connection.",
      walking:
        "The summit around Jade Emperor Peak / Yuhuangding is roughly 1,545 metres above sea level; this is an elevation, not the amount every guest climbs. The actual effort depends on the start, transport, chosen upper route and descent. Long stair sections, uneven surfaces and remaining steps can be demanding even with cable assistance. Assess knees, balance, stamina and relevant health concerns individually. Summit weather can differ markedly from the city. For limited mobility, establish a specific feasible route or a lower-level cultural visit instead of describing the whole mountain as accessible.",
      cost: "Compare exact admissions, scenic transport stages, cable direction, guiding, city transfers and the real room category. One-way and return transport choices must match the walking plan. A summit overnight adds luggage handling, meals and different room expectations, not simply another city-hotel night. Identify optional activities and what happens if a planned stage cannot operate. Premium value comes from a route that suits the group, clear interpretation, sensible breaks and reliable logistics rather than an unverified VIP shortcut or a promised sunrise.",
    },
    attractions: [
      "Dai Temple / Dai Miao in the city for a distinct introduction to mountain-related ceremony and history",
      "Hongmen / Red Gate route for a deliberately chosen sustained stepped ascent",
      "Zhongtianmen / Middle Heaven Gate as a specific route junction and cable-car stage",
      "Nantianmen / South Heaven Gate and a selected upper-mountain route",
      "Bixia Temple area and inscriptions interpreted within their actual visitor-access rules",
      "Jade Emperor Peak / Yuhuangding when the remaining route suits the group",
      "Qufu or Jinan as separate complementary cultural stays",
    ],
    stays: [
      {
        label: "2 city nights / protect one complete mountain day",
        advice:
          "Arrive, settle in and choose a suitable main route for the full day. Use another available block for Dai Temple or rest without treating every transfer day as a second strenuous outing. Keep the city room as a comfortable base and confirm the descent and final pickup.",
      },
      {
        label: "3 nights / slow the sequence or separate another interest",
        advice:
          "Give Dai Temple and a city interest their own time or add a carefully assessed summit stay. An extra night should reduce pressure rather than encourage an unsuitable long ascent. Keep enough time after coming down for luggage, a meal and the actual onward connection.",
      },
      {
        label: "A summit overnight / choose knowingly",
        advice:
          "Book a specific room for the mountain setting and possible dawn access, with heating, bathroom, meals, stairs and final approach established. Store main luggage appropriately and pack for the actual conditions. Weather can conceal the view, and an early dark walk is a separate demand rather than a free benefit of the room.",
      },
    ],
    hotelAreas: [
      {
        name: "Tai'an city near the useful mountain approach / a practical base",
        advice:
          "Choose the address around the entrance and route you actually plan to use, then compare sleep, bathroom, breakfast, lift and road access. Near Mount Tai can describe very different starting points. Clarify the morning transfer and where the vehicle meets the group after descent.",
      },
      {
        name: "Dai Temple and a suitable city neighborhood / culture and meals",
        advice:
          "A city base can support the temple, dinner and a more relaxed arrival day. Check the actual mountain transfer rather than assume a temple-side room is at the cable-car entrance. Room quiet and services should justify the choice as much as the historic-city address.",
      },
      {
        name: "Upper-mountain accommodation / a different lodging product",
        advice:
          "Verify the exact building, room category, private or shared bathroom, warmth, water, meals and stairs. A property in the upper area is not necessarily beside the chosen dawn viewpoint. Understand luggage and the remaining route from the operating transport before accepting the booking.",
      },
      {
        name: "The named railway-station area / only for a real gateway need",
        advice:
          "A transport-focused room can suit a specific early train, but may cost the city evening or create extra transfers. Tai'an and Taishan stations are different places. Confirm which is booked before choosing accommodation or quoting a pickup.",
      },
    ],
    tradeoffs: [
      {
        title: "An assisted ascent still requires an honest walking plan",
        advice:
          "A bus and cable car reduce some climbing but leave transfers, steps, upper paths and the actual return. Ask which places the group will reach after the cable terminal and what can be shortened. Do not describe assistance as reaching the summit without walking or as a universal solution for limited mobility.",
      },
      {
        title: "The descent deserves as much thought as the ascent",
        advice:
          "A guest may enjoy climbing up but find a long stepped descent tiring or uncomfortable. Choose the actual return stages and current operating windows before setting off. An unplanned late switch from walking to cable transport may fail if service, queues or access no longer fit.",
      },
      {
        title: "A summit stay and a comfortable city stay serve different priorities",
        advice:
          "The upper room may provide useful mountain time and a possible dawn window, with tradeoffs in facilities, access and cold. A city hotel can offer a more dependable comfort brief and a well-planned daytime visit. Neither choice guarantees a clear view, so compare the whole experience instead of buy a sunrise promise.",
      },
      {
        title: "Dai Temple is not just a stop on the mountain path",
        advice:
          "It is a separate city visit that helps explain the mountain's ceremonial context through its own architecture and spaces. Give it an actual opening window and walking allowance. It can be meaningful for guests who prefer a lower-level cultural day, without pretending it reproduces the mountain landscape.",
      },
      {
        title: "Night climbing is a separate active choice",
        advice:
          "A popular idea is not automatically a good fit for this group. Darkness, fatigue, cold, weather, steps and the following day's travel all matter. Do not add an overnight climb solely to chase dawn, and do not assume all services operate through the night. A daytime route or a specifically assessed summit room may better serve the holiday.",
      },
      {
        title: "Mountain history is more than a view from the top",
        advice:
          "Inscriptions, gates, religious places and the route itself reveal different layers of meaning. Choose enough time for explanation rather than rush between cable transport and a summit photograph. Imperial rites are part of the historical story, not a promise of a private reenactment or access to current religious practice.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "qufu",
        advice:
          "Qufu adds Confucian ceremonial, family and lineage settings to Mount Tai's mountain history. Keep its temple, mansion and cemetery as their own cultural chapter. Compare exact stations and full transfers rather than attempt a long mountain route and all the Three Kong sites in one day.",
      },
      {
        slug: "jinan",
        advice:
          "Jinan adds spring-fed city life and provincial collections, useful contrasts after an active mountain day. Give the city real time and choose the actual rail gateway and hotel transfer. A connection through a Jinan station does not by itself mean the springs fit into the schedule.",
      },
      {
        slug: "qingdao",
        advice:
          "Qingdao provides a coastal city and architectural chapter within a longer Shandong journey. Plan separate accommodation and usable days, with the dated rail sequence and both final transfers checked. It should add a distinct experience rather than another short overnight solely to increase the city count.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit an active mountain day, with variable weather, cold upper areas and public-holiday crowds still possible. Summer needs heat-aware walking and attention to heavy weather; winter can bring snow, ice and operating changes. The summit can be windy and much colder than the city in any season. Check forecasts and current scenic-area notices near the date. A season associated with attractive views does not predict a clear sunrise or open transport on your particular day.",
    orientation:
      "Tai'an city is the practical base; Mount Tai / Taishan is the mountain to its north. Dai Temple is a separate city site. Hongmen, Tianwai Village, Zhongtianmen and Nantianmen identify different route points, not interchangeable entrance names. Tai'an high-speed railway station and Taishan railway station are separate gateways with different transfers. This is Mount Tai in Shandong, not Taishan city in Guangdong. Use full Chinese names for the exact station, hotel, entrance and return pickup.",
    experiences: [
      "Understand gates, inscriptions and sacred-mountain history along a route matched to the group",
      "Choose full walking or transport assistance with the remaining upper steps made clear",
      "Pair the mountain with Dai Temple and a comfortable city stay or a knowingly chosen summit room",
    ],
    planningNotes: [
      "Agree entrance, ascent, remaining walking, descent and last operating stages before booking",
      "Separate a sunrise hope from the actual value and standards of a summit stay",
      "Confirm Tai'an versus Taishan station and both complete hotel transfers",
    ],
    arrival:
      "Choose the exact train and station first, then plan the road journey to the hotel or intended mountain entrance. Tai'an and Taishan stations should not be substituted on the strength of similar English names. Compare the full journey from Jinan, Qufu or another agreed base, including luggage and both local transfers. If arrival is late or uncertain, keep the demanding mountain route for a full following day. An overnight summit plan needs its own latest workable ascent and luggage arrangement rather than assume the city arrival can always connect.",
    gettingAround:
      "Use ordinary road transfers for the city and the permitted scenic transport stages for the selected mountain route. Check exactly where a private vehicle can stop and where the visitor bus begins. Walking links between stages and upper sights remain part of the day. Identify the descent meeting point and a shorter alternative before the group starts climbing. A different entrance, cable route or overnight room changes the logistics, so it should be agreed explicitly rather than improvised as if every path reaches the same pickup.",
    stayStrategy:
      "A comfortable Tai'an city base with one protected mountain day is a strong default for guests who prioritize sleep and a measured visit. Add a summit room only when its actual setting and possible dawn access outweigh the facilities and luggage tradeoffs. Keep the return to the city and the onward journey realistic. More nights should create useful time and rest, not become a reason to include a longer ascent than the guest wants.",
    firstTimerNote:
      "Start by deciding whether the main interest is a sustained climb, sacred-mountain interpretation or the landscape with less climbing. Those are different routes, even when all appear under Mount Tai in a search. Do not buy a cable ticket or a summit room before understanding the remaining walking, descent and real accommodation. A well-matched day with time to look and learn is more valuable than reaching every marked point at the cost of comfort.",
    faqs: [
      {
        question: "Are Tai'an, Taian, Taishan and Mount Tai the same place?",
        answer:
          "Tai'an, also written Taian, is the city in Shandong. Mount Tai and Taishan refer to the mountain, while Taishan is also used in a railway-station name. Confirm the full Chinese address and intended place. Taishan city in Guangdong is a different destination entirely.",
      },
      {
        question: "How many nights do I need for Mount Tai?",
        answer:
          "Two city nights can protect one full mountain day between transfers. Three allow a slower sequence, Dai Temple time or a carefully planned summit overnight. A day visit depends on the exact transport and chosen route; a long walking ascent should not be forced against a tight evening train.",
      },
      {
        question: "Can I visit Mount Tai without climbing from the bottom?",
        answer:
          "An operating bus-and-cable route can reduce the ascent. On the commonly used Tianwai Village route, the bus reaches Zhongtianmen for a separate cable stage toward Nantianmen. Walking and steps remain in the upper area. Check the exact route, services and mobility requirements rather than assume transport reaches every summit sight.",
      },
      {
        question: "Should I use Hongmen or Tianwai Village?",
        answer:
          "Hongmen suits a deliberately chosen stepped walking ascent when the group wants and can manage it. Tianwai Village is commonly used for the scenic-bus stage toward Zhongtianmen, with possible cable assistance beyond. Choose the complete ascent and descent around stamina, interests and current operations, not the entrance name alone.",
      },
      {
        question: "Is Mount Tai suitable for limited mobility?",
        answer:
          "It requires a specific route assessment. Cable assistance does not remove all steps, distances or uneven surfaces, and the actual upper sights may remain demanding. Review toilets, rest points, transfers and a shortened option. A lower-level cultural visit such as Dai Temple may be a better individual choice after its own access assessment.",
      },
      {
        question: "Should I stay on Mount Tai for sunrise?",
        answer:
          "Choose a summit room only when its actual facilities, warmth, bathroom, stairs and final approach fit the guest. It may provide a dawn opportunity but cannot guarantee visibility. Compare it with a comfortable city base and daytime visit; the hotel move and early dark walk should add enough value to justify them.",
      },
      {
        question: "How high is Mount Tai?",
        answer:
          "Jade Emperor Peak / Yuhuangding is roughly 1,545 metres above sea level. That is the summit elevation, not the ascent every visitor completes. Effort depends on the starting point, transport, upper route and descent, with sustained steps and weather often more relevant to comfort than the number alone.",
      },
      {
        question: "Which railway station should I use for Tai'an?",
        answer:
          "Tai'an high-speed station and Taishan station are different locations. Choose using actual dated services, the hotel and the intended mountain approach, then include the full road transfer. Do not book a room or pickup on the assumption that the station names identify the same place.",
      },
      {
        question: "Can I visit Qufu and climb Mount Tai in one day?",
        answer:
          "Do not assume a comfortable full visit to both. The mountain's chosen route, walking, transport stages and descent need real time, while Qufu's sites deserve their own explanation and transfers. A selective itinerary might fit limited subjects, but a long ascent and all Three Kong sites should not be sold as a relaxed combined day.",
      },
      {
        question: "Is Dai Temple part of the climb?",
        answer:
          "Dai Temple is a separate city visit that introduces mountain-related ceremonial history and architecture. Give it its own opening and walking allowance rather than treat it as another name for a mountain entrance. It can complement the mountain or support a lower-level cultural brief without duplicating the landscape.",
      },
    ],
    culturalStory: {
      title: "The route is part of the meaning of the mountain",
      paragraphs: [
        "Mount Tai's significance is visible in the relationship between landscape and human attention. Gates, inscriptions and religious places mark different ways people have understood and approached the mountain. A guide can explain imperial rites and later visitors without suggesting every surviving feature belongs to the same period. The ascent is therefore more than a physical task: selected details can connect the view with a long history of commemoration, devotion and authority.",
        "Dai Temple introduces that context at city level through its own spaces and architecture. The mountain then adds a different scale, with changes in slope, weather and outlook. Keep the distinction between documented history, repaired fabric and current religious practice clear. Public visitor access does not mean every interior or ceremony is open for photography. A good explanation respects those boundaries and gives the guest reasons to notice more than the final summit marker.",
      ],
    },
    foodStory: {
      title: "Make the meal support the mountain day",
      paragraphs: [
        "Plan a proper breakfast and a practical meal sequence for the chosen route rather than rely on finding a convenient table at the last moment. A city dinner can introduce Shandong-style pancakes, local tofu preparations and seasonal vegetables through a small selection the actual kitchen does well. Mountain meals may serve a more practical purpose, with location, opening and dietary fit to confirm. A scenic dining label is less useful than food that arrives at a sensible time and suits the group.",
        "Discuss meat stock, pork, wheat, soy, eggs, nuts and shared equipment when dietary requests matter. Tofu and vegetable dishes are not automatically vegetarian. Serious allergies need preparation capability and a workable alternative, especially when the mountain route limits restaurant choice. Carrying suitable food and water should fit the provider's route plan and current site rules. Any themed banquet or cooking activity is a separate choice, not an obligatory way to experience the region.",
      ],
    },
    itinerary: [
      {
        day: "Arrival afternoon",
        title: "Settle into the city and confirm the real mountain route",
        description:
          "Complete the correct station transfer, leave luggage and review entrance, walking, transport and descent. Visit Dai Temple only when current opening and usable time fit; otherwise keep the arrival relaxed. Prepare clothing and a practical meal plan for the next day.",
      },
      {
        day: "Full-day morning",
        title: "Begin the agreed ascent with time for interpretation",
        description:
          "Use the selected Hongmen walking route or the confirmed bus-and-cable stages, retaining time for queues and actual walking. Explain gates, inscriptions and the landscape instead of treating the ascent as transport to a single photograph. Adjust the route to conditions and the group.",
      },
      {
        day: "Afternoon",
        title: "Choose the upper route and descend within a workable window",
        description:
          "Visit suitable upper sights with the remaining steps and return stages understood. Keep enough time for the chosen descent, pickup, a meal and rest. A summit overnight is a separate agreed accommodation plan, not an automatic late alternative if the group misses a service.",
      },
      {
        day: "Departure or optional extra day",
        title: "Continue to a different Shandong subject",
        description:
          "Allow breakfast, luggage and the full station journey toward Qufu, Jinan or Qingdao. With a third night, use the extra time for a distinct interest or a knowingly chosen summit sequence. This outline is illustrative, not a published package or a guarantee of transport operation, sunrise, private access or room availability.",
      },
    ],
  },
};
