import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/lanzhou.svg",
  alt: "Lanzhou planning schematic separating the Yellow River city, Gansu museum collections, a Bingling Temple excursion and actual airport or station transfers; original diagram, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const lanzhouGuide: ExpandedDestination = {
  id: "lanzhou",
  name: "Lanzhou",
  region: "northwest",
  kicker: "A Yellow River city with its own place in the Gansu journey",
  description:
    "Plan Lanzhou for Gansu history, a selected Yellow River walk and regional food, with useful hotel choices and a separately assessed Bingling Temple excursion.",
  stay: "2 city nights; 3 with a separate excursion",
  bestFor: "Gansu history, Yellow River city life and a considered regional gateway",
  interests: ["heritage", "city", "food"],
  relatedDestinationIds: ["xiahe", "tianshui", "zhangye", "xining"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Lanzhou Travel Guide: River, Museums & Where to Stay",
    seoTitle: "Lanzhou Travel Guide: River, Museums & Hotels",
    seoDescription:
      "Plan Lanzhou with Yellow River walks, Gansu Provincial Museum, hotel areas, beef noodles and full airport or station transfers. Assess Bingling separately.",
    answer:
      "Lanzhou (兰州), the capital of Gansu, stretches along the Yellow River in northwest China. It deserves more than a rushed connection when Gansu history, regional food and an urban river landscape interest you. Two city nights allow a full day for one relevant collection, a selected riverfront walk and meals. A third night can support a separately planned Bingling Temple Grottoes outing in Yongjing, outside Lanzhou. Choose the hotel after checking whether you arrive at Zhongchuan airport, Lanzhou West or Lanzhou station: these are distinct gateways, and the airport is well outside the central river city.",
    stayAnswer:
      "One night can serve a connection with a short evening introduction, but late arrival and early departure provide little city time. Two nights give one full day for a museum-and-river introduction. Three nights make sense for a separate Bingling excursion, a second substantial cultural interest or a gentler pace. Count a long onward drive to Xiahe and a corridor train as travel time, not extra Lanzhou sightseeing. If only one full day is available, choose the city or a focused out-of-town interest instead of promising both in depth.",
    hotelAnswer:
      "Compare a Chengguan address near the central river and dining areas, a Qilihe property that suits the Gansu Provincial Museum or Lanzhou West sequence, and an airport-area room for an actual flight need. Check the precise address rather than rely on a district label: Lanzhou is elongated, and road journeys across the city matter. A river-view room needs its own review of orientation, road noise, glazing and the actual view. An airport overnight and a central city stay solve different problems. For two or three nights, one comfortable city base is usually preferable to changing hotels for each attraction.",
    sightseeingQuestion: "Should you choose Lanzhou's city sights or a Bingling Temple day trip?",
    sightseeingAnswer:
      "Choose the city for a coherent introduction to Gansu: one museum matched to your interests, selected Yellow River frontage around Zhongshan Bridge, and time for food. Gansu Provincial Museum in Qilihe and the Dunhuang art institution in Lanzhou, often called Dunhuang Art Gallery, are separate venues; neither is a substitute for visiting Mogao's actual caves. Bingling is a different Buddhist-art excursion in Yongjing, with a substantial road journey and a date-specific access plan. Confirm the current road or reservoir-boat arrangement rather than assume one mandatory boat route or year-round boat operation. Give the chosen subject proper time instead of treating the grottoes as an automatic add-on to a full city day.",
    visitorResources: [
      {
        label: "Lanzhou municipal government",
        href: "https://www.lanzhou.gov.cn/",
        scope:
          "City background and public notices, mainly in Chinese. Use the actual institution for opening, exhibitions, reservations and visitor conditions, and confirm hotel and transfer arrangements separately. A city reference is not proof of current airport services or a confirmed room.",
      },
      {
        label: "UNESCO: Silk Roads, the Chang'an–Tianshan Corridor",
        href: "https://whc.unesco.org/en/list/1442/",
        scope:
          "Historical context for the serial World Heritage property that includes the Bingling Cave-Temple Complex. Bingling is in Yongjing, outside Lanzhou. Heritage status does not establish the current approach, boat operation, open caves, special access or admission scope.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services, full station names and tickets. Check Lanzhou West, Lanzhou and any airport rail proposal individually. An available intercity service does not include the final hotel transfer or prove that a short connection leaves sightseeing time.",
      },
    ],
    serviceScope:
      "A tailored Lanzhou proposal should name the gateway, hotel and room, complete transfers, selected museum and river route, guide hours and meal basis. For Bingling, state the actual current approach, terminal or road endpoint, admissions, any boat and its shared or private basis, walking, weather alternative and return. Specialist art interpretation, a special cave, private hosted meeting and a religious interior require separate confirmation. A private guide does not guarantee an empty gallery, closed-area entry, a particular object on display or a private reservoir service.",
    routeAdvice:
      "Use Lanzhou as a useful Gansu city chapter or a clearly planned gateway. Xiahe needs its own road and ascent review; Tianshui adds Maijishan sculpture; Zhangye begins a different corridor landscape chapter; Xining introduces Qinghai. Compare dated services and useful nights instead of calling these nearby excursions. No matching published Lanzhou product is recommended here. Request a tailored route with your dates, actual arrival and departure bookings, cultural interests and preferred walking pace. A proposal should explain which city experiences fit, rather than use a gateway label to conceal a night with no usable time.",
    practicalPlanning: {
      timing:
        "Build a city day around one meaningful collection and a selected river section, leaving travel across town, lunch and rest visible. Confirm reservations and opening for the actual museum and exhibition. Zhongshan Bridge and the riverside can make a useful short introduction without adding every hill or park. Keep a Bingling outing on a separate day with a full return margin; do not let weather-dependent transport determine whether an essential flight or train is missed.",
      walking:
        "Riverfront sections, bridge approaches, museum galleries and White Pagoda Mountain routes have different effort levels. Select a shorter waterfront walk and seating when preferred; a hill viewpoint is optional and involves its own ascent. Review steps, road crossings and the actual pickup. A Bingling visit adds separate paths, thresholds or steps and potentially boat boarding. Ask about current accessibility rather than infer a level route from a river photograph or assume a vehicle reaches the cave entrance.",
      cost: "Compare the exact room, river-view category if requested, meals, both gateway transfers, guide time and named admissions. Clarify reservation support even where a venue has no standard admission charge. Bingling adds a separate vehicle day and may involve different access services; specify the actual route, boat basis, fees and cancellation terms. A higher quote should show better timing, room comfort or interpretation, without implying private museum access or a special cave that has not been authorized.",
    },
    attractions: [
      "Gansu Provincial Museum in Qilihe, chosen for current relevant collections",
      "Zhongshan Bridge and a selected Yellow River waterfront walk",
      "White Pagoda Mountain / Baitashan when its actual route and ascent suit",
      "A separately selected Dunhuang art exhibition in Lanzhou, with venue and opening confirmed",
      "A beef-noodle meal and a coherent city food interest, with dietary needs reviewed",
      "Bingling Temple Grottoes in Yongjing as a distinct excursion with current access confirmed",
    ],
    stays: [
      {
        label: "1 night: a practical connection with modest city expectations",
        advice:
          "Use the actual airport or station and allow a meal and rest. A late check-in and early departure are not a full introduction. If a short river walk fits, treat it as a bonus rather than squeeze in a museum or a distant grotto outing.",
      },
      {
        label: "2 nights: one useful city day",
        advice:
          "Pair a relevant collection with selected riverfront time and food. Choose one comfortable base and include cross-city travel. This works for guests who want Gansu context before a wider route, without making the city day a checklist of every park and museum.",
      },
      {
        label: "3 nights: add Bingling or a distinct second city interest",
        advice:
          "Give the extra day a clear purpose. For Bingling, establish the actual approach and weather alternative. For another city day, select a different collection or a genuine food-and-history subject rather than repeat the same bridge view.",
      },
    ],
    hotelAreas: [
      {
        name: "Chengguan and the central river area / city evenings",
        advice:
          "Consider for selected waterfront and dining interests, but check the specific address, room orientation and road noise. Near Zhongshan Bridge does not mean every important collection is walkable. Confirm the real pickup point, glazing and bathroom rather than use a river-view label as a comfort guarantee.",
      },
      {
        name: "Qilihe and a suitable Lanzhou West connection / museum and rail balance",
        advice:
          "Choose an actual property according to the museum, station and room needs. Qilihe is a large district, not one compact hotel zone. Count journeys to the central riverfront and evening meals. Being near a high-speed station does not automatically make a hotel the best sightseeing base.",
      },
      {
        name: "Zhongchuan airport area / a flight-driven overnight",
        advice:
          "Use when a particular early flight or late arrival justifies it. Check terminal transfer, operating hours, meals and the quoted room. An airport hotel is not a central Lanzhou stay; compare the whole trip before adding a hotel change solely for a theoretical transfer saving.",
      },
    ],
    tradeoffs: [
      {
        title: "A gateway can be a destination, but only with usable time",
        advice:
          "Lanzhou's river setting, collections and food provide a reason to stay. A transport-only overnight serves another purpose and should be described honestly. Count actual arrival and departure hours before assigning sightseeing, especially when the airport journey consumes a substantial part of the available window.",
      },
      {
        title: "Choose the collection, not just a museum label",
        advice:
          "Gansu Provincial Museum and a Dunhuang art exhibition in Lanzhou offer different material and institutional contexts. Verify the venue and actual display. A replica or interpretive exhibit can be valuable when identified, but should not be presented as entry to a Mogao cave or access to every famous Gansu object.",
      },
      {
        title: "Bingling is outside the city",
        advice:
          "The grottoes are in Yongjing and need a full excursion plan. Confirm the currently available approach, road, terminal, any boat and remaining walking. Historical descriptions of a reservoir crossing do not establish today's only route, service frequency or weather resilience. Ordinary admission and any special cave are separate arrangements.",
      },
      {
        title: "River views and quiet rooms are different qualities",
        advice:
          "A room facing the water can also face road activity or evening sound. Ask about the exact category, floor, orientation, glazing and nearby uses. A set-back room may improve sleep; a broad hotel photo does not prove the view from the room being sold.",
      },
      {
        title: "The airport, Lanzhou West and Lanzhou station are distinct",
        advice:
          "Use full booking details and the real meeting point. Include station exits, luggage and the last road leg. A rail link may be useful when its dated schedule fits, but it is not an automatic through-transfer to every hotel or an argument for an unrealistically short flight connection.",
      },
      {
        title: "A noodle meal deserves its own explanation",
        advice:
          "Lanzhou beef noodles are not simply any hand-pulled noodle dish. Explain the broth, noodle choice, chili and accompanying ingredients, with the actual restaurant selected for quality and guest needs. Do not turn a premium food interest into compulsory shopping, a long viral queue or an unconfirmed kitchen demonstration.",
      },
      {
        title: "A city night does not settle a later altitude plan",
        advice:
          "Lanzhou's central city is roughly 1,500 meters above sea level, substantially below Xiahe and many Qinghai destinations. Rest here may be useful but does not certify readiness for a higher route. Review onward sleeping elevations, health and pace separately rather than sell a gateway overnight as guaranteed acclimatization.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "xiahe",
        advice:
          "Xiahe adds Labrang Monastery and a distinct Gannan cultural stay. Review the full road journey, roughly 2,900-meter town elevation, actual room and useful nights. A Lanzhou overnight does not guarantee acclimatization or make a monastery-and-grassland return day automatically appropriate.",
      },
      {
        slug: "tianshui",
        advice:
          "Tianshui adds Maijishan sculpture and a separate Qinzhou city chapter. Use dated trains and both station transfers, with the cliffside route reviewed for heights and stairs. Give it actual visiting time rather than treat a rail connection as a complete grotto day.",
      },
      {
        slug: "zhangye",
        advice:
          "Zhangye adds contrasting landforms and Buddhist heritage on the Hexi Corridor. Choose the actual train or road route and a separate base. Lanzhou collections can provide context without replacing Zhangye's park days or suggesting that both cities are one sightseeing zone.",
      },
      {
        slug: "xining",
        advice:
          "Xining introduces Qinghai culture at a higher city elevation, with Kumbum and any lake extension separately planned. Compare actual services, transfers and sleeping elevations. A short intercity segment does not justify combining every monastery and lake interest into a single day.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can be useful starting points for a city-focused stay, allowing for variable temperatures, wind and rain. Summer can be hot, with outdoor timing and water-related excursions assessed separately. Winter calls for warm layers and dependable room heating. Choose museum days by actual opening and reservations, and river time by weather and energy. For Bingling, review current approach and service conditions near departure instead of assuming a boat or cave route operates unchanged throughout the year.",
    orientation:
      "Lanzhou lies along the Yellow River in central Gansu. Chengguan's selected river and dining areas, Qilihe's museum and rail-related locations, and Zhongchuan airport are different planning points. Lanzhou West and Lanzhou station must not be confused. Bingling Temple Grottoes are in Yongjing outside the city. Use full Chinese addresses and dated bookings, then compare the complete journeys rather than the distance between broad district labels.",
    experiences: [
      "Read Gansu history through a carefully selected collection",
      "Enjoy a manageable Yellow River walk and a well-chosen noodle meal",
      "Add Bingling only with a clear art interest and a complete excursion plan",
    ],
    planningNotes: [
      "Choose the actual gateway and hotel address before allocating sightseeing time",
      "Distinguish city collections, Dunhuang exhibitions and the actual caves farther west",
      "Keep Bingling's current approach, cave access and weather alternative explicit",
    ],
    arrival:
      "Lanzhou Zhongchuan airport is outside the central river city, while Lanzhou West and Lanzhou station are separate rail arrivals. Confirm terminal or full station name, dated service, meeting point, luggage and the final hotel leg. Compare a road transfer and any proposed rail connection through their complete schedules rather than assume one is always best. Allow a meal and rest after a long arrival. A late airport landing should not carry a promised city sightseeing program.",
    gettingAround:
      "Combine road or suitable urban transport with selected walks, recognizing the elongated city layout and cross-city travel. Review the actual museum entrance, river access, bridge approaches and pickup points. White Pagoda Mountain is a separate route with its own ascent rather than a compulsory extension of a flat walk. Bingling requires a different vehicle and access plan, including any current boat arrangement; urban transport convenience does not establish the feasibility of that excursion.",
    stayStrategy:
      "Keep one city base for a short cultural stay, choosing sleep, bathroom quality, meals and the actual daily route before a generic river-view promise. Check whether Chengguan or a suitable Qilihe property better fits the museum and onward station. Use an airport overnight for a genuine flight need, with its purpose clear. A good room and an unhurried meal provide useful recovery between longer regional chapters, without implying a medical benefit for later high-altitude travel.",
    firstTimerNote:
      "Decide whether Lanzhou is a connection or a real city chapter. Both are valid, but they need different expectations. For a city stay, one worthwhile collection, a coherent river walk and good food can be more rewarding than racing between every named attraction. Add Bingling for a distinct interest in Buddhist art, giving its access and journey the attention they require. A high-end plan should make these choices easier and more comfortable, not obscure them behind a Silk Road slogan.",
    faqs: [
      {
        question: "Is Lanzhou worth visiting or only a transport stop?",
        answer:
          "It can be worth two city nights for Gansu collections, Yellow River urban scenery and food. A connection-only overnight serves a different purpose. Judge by actual usable time and your interests rather than add attractions to a late arrival and early departure.",
      },
      {
        question: "How many nights should I spend in Lanzhou?",
        answer:
          "Two nights allow one full city day; three can add Bingling or another distinct cultural interest. One night may support only a connection and meal. Count the actual airport or station journey and onward departure before calling a night a sightseeing opportunity.",
      },
      {
        question: "Where should I stay in Lanzhou?",
        answer:
          "Compare a Chengguan address for selected river and dining interests with a suitable Qilihe property for the museum and rail sequence. An airport hotel is a separate flight-driven choice. Verify the exact address, room noise and all daily road legs; district names alone are insufficient.",
      },
      {
        question: "Are Lanzhou West and Lanzhou station the same?",
        answer:
          "No. They are separate stations, and Zhongchuan airport is another gateway outside the central city. Send the full ticket or flight details for pickup and allow the final hotel transfer. Do not infer the arrival station from the city name alone.",
      },
      {
        question: "Can I visit Bingling Temple Grottoes from Lanzhou?",
        answer:
          "It is a separately planned excursion to Yongjing, with a substantial road journey and a current access check. Confirm the actual road or reservoir-boat arrangement, admissions, walking and return margin. Do not assume a fixed year-round boat service or combine it casually with a full city program.",
      },
      {
        question: "Does a Bingling visit include every cave?",
        answer:
          "No blanket promise should be made. Ordinary routes, conservation closures and any special-cave authorization differ. A proposal must state the confirmed scope. Private guiding or World Heritage status does not grant entry to restricted areas or unrestricted photography.",
      },
      {
        question: "Which museum should I visit in Lanzhou?",
        answer:
          "Gansu Provincial Museum is a starting point for regional history, subject to actual collections and opening. A Dunhuang art exhibition in Lanzhou is a separate venue and experience, potentially including replicas or interpretation. Choose the actual display; neither amounts to entering Mogao's caves.",
      },
      {
        question: "Is the Yellow River walk suitable for a gentle day?",
        answer:
          "A selected shorter section may suit, with seating, crossings, steps and pickup reviewed. Bridge approaches and hill viewpoints have different demands. Do not automatically add White Pagoda Mountain to a low-effort river outing or describe every waterfront path as step-free.",
      },
      {
        question: "Is a published Lanzhou tour recommended here?",
        answer:
          "No matching published product is recommended. Use the outline for a tailored request with dates, gateways, cultural interests, room needs and walking pace. The proposal should identify the actual museums, transfers and any separate Bingling service.",
      },
    ],
    culturalStory: {
      title: "Use the city to understand Gansu without replacing its other places",
      paragraphs: [
        "Lanzhou's river setting helps introduce the movement of people, materials and ideas through Gansu. A museum visit can make the later corridor journey more legible when objects are connected to their documented places and periods. Select the actual collection and allow explanation rather than race through galleries. Famous objects may not be on display, and an interpretive replica has a different status from an original; good guiding makes that distinction useful rather than leaving visitors to guess.",
        "Bingling offers a separate encounter with Buddhist art in a landscape outside the city. Its relationship to the wider Silk Roads can enrich the trip, but should not collapse every cave complex into one interchangeable stop. Lanzhou's contemporary neighborhoods, bridge and food culture also deserve attention on their own terms. The city is a lived urban place with modern change, not a preserved ancient caravan town or merely a waiting room for Dunhuang.",
      ],
    },
    foodStory: {
      title: "Understand Lanzhou beef noodles beyond the name",
      paragraphs: [
        "A bowl of Lanzhou beef noodles brings together broth, pulled noodles, beef and accompaniments whose balance matters as much as a noodle-pulling photograph. Ask about noodle shape, chili and serving style at the chosen shop. A morning or daytime meal can fit naturally into a city route, with timing based on the actual kitchen. Other snacks or an evening meal can broaden the food chapter without making every stop a compulsory tasting or requiring a queue at a viral address.",
        "Clarify wheat, beef stock, chili oil, herbs, sesame and shared preparation. A bowl without visible meat is not necessarily vegetarian, and a nearby mosque does not establish that every restaurant meets a guest's halal requirements. Verify the actual establishment and preparation when halal dining is important. Serious allergies require kitchen capacity and a fallback, not only a translated request. A private food demonstration or kitchen visit needs consent and a confirmed arrangement.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the actual city base and have a useful first meal",
        description:
          "Use the correct airport or station pickup and full hotel transfer. Settle in and choose a short river introduction only when arrival and energy allow. Protect dinner and sleep rather than promise a collection before its opening and timing have been checked.",
      },
      {
        day: "Full city day",
        title: "One collection, the river and local food",
        description:
          "Choose the relevant museum or exhibition, with current reservations and display confirmed. Add a selected Zhongshan Bridge and waterfront route, lunch and rest. A hill viewpoint is optional; cross-city travel is included in the day rather than hidden between stops.",
      },
      {
        day: "Optional second full day",
        title: "Bingling or a genuinely different city interest",
        description:
          "With a third night, give Bingling a complete road-and-access plan, including any actual boat and a weather alternative. Otherwise choose a different substantive city subject. Do not present the two options as simultaneous inclusions or guarantee a special cave.",
      },
      {
        day: "Departure",
        title: "Continue toward the next distinct chapter",
        description:
          "Allow the correct station or airport transfer and a useful margin. A Xiahe road journey needs its own ascent review. This two-night outline with an optional third night is illustrative, not a published product or guarantee of particular exhibits, cave access, boat operation or private hosts.",
      },
    ],
  },
};
