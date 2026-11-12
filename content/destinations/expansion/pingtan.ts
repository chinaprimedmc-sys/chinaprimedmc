import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/pingtan.svg",
  alt: "Original Pingtan planning schematic comparing village and beach bases, two or three nights, and weather-dependent coastal activities; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const pingtanGuide: ExpandedDestination = {
  id: "pingtan",
  name: "Pingtan",
  region: "south",
  kicker: "Stone houses, open coast and an island stay with room to adapt",
  description:
    "Choose a Pingtan coast and room for the holiday you want, with practical advice on stone villages, beach walks, wind, blue tears and complete Fujian transfers.",
  stay: "2–3 nights; a selective day visit is possible",
  bestFor: "Coastal scenery, stone-house architecture and an unhurried island extension in Fujian",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["fuzhou", "xiapu", "quanzhou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Pingtan Island Travel Guide: Beaches, Villages & Hotels",
    seoTitle: "Pingtan Island Travel Guide: Beaches & Hotels",
    seoDescription:
      "Plan 2–3 nights in Pingtan, Fujian: compare beach and stone-village stays, Fuzhou transfers, weather, coastal walks and realistic blue-tears expectations.",
    answer:
      "Pingtan (平潭) is an island-county destination in Fujian, managed within the Pingtan Comprehensive Experimental Zone. Haitan is its principal island; the wider destination includes other islands and should not be treated as one compact beach resort. A first stay can combine a selected stone-house village, a manageable stretch of coast and time at a comfortable property. Two nights give one full day; three allow more flexibility without requiring every coastal viewpoint. Pingtan is particularly sensitive to wind, rain and sea conditions, so swimming, boats and the bioluminescent phenomenon known as blue tears cannot be promised from a seasonal photograph. Choose it for the coast and the stay you can enjoy even if a hoped-for natural spectacle does not occur.",
    stayAnswer:
      "Two nights suit a focused introduction with one full day for a coherent village-and-coast route. Three nights give a second day to enjoy the actual property, explore a contrasting section or adapt the order of activities to weather. One night needs favorable arrival and departure times, since a late check-in and an early train leave little island time. A day visit can work from an actual Fuzhou base when the complete return journey and a selective route fit. Staying longer may provide scheduling flexibility, but it does not guarantee calm seas, sunshine or blue tears.",
    hotelAnswer:
      "Choose the setting before choosing a sea-view label. A stone-house village property can offer architectural character and a quieter pace, but the actual room may have steps, limited vehicle access, variable insulation or a different bathroom standard from a full-service hotel. A Longfengtou or town-side base can support more dining and service options; a Tannan Bay or other beach-oriented property needs its exact position, access and facilities assessed. Confirm the view from the booked room, wind exposure, noise, heating or cooling, breakfast and wet-weather space. Beachfront does not establish safe swimming, a private beach or an accessible walk to the sand.",
    sightseeingQuestion: "Which part of Pingtan should I choose for a first visit?",
    sightseeingAnswer:
      "Begin with the kind of day you want rather than a full-island driving circuit. A village-and-northern-coast route can pair Beigang's stone-house setting with a selected coastal viewpoint such as Changjiang'ao, allowing for conditions and the actual road route. A beach-oriented stay may work better with Longfengtou or Tannan Bay and time at the chosen property. These are different areas, not adjacent stops on one short walk. Select one main direction each day, then add a suitable meal and a lower-exposure alternative. The best first visit often covers fewer places with enough time to enjoy them.",
    visitorResources: [
      {
        label: "Pingtan Comprehensive Experimental Zone official website",
        href: "https://www.pingtan.gov.cn/",
        scope:
          "Starting point for administrative background and local notices, mainly in Chinese. Confirm the current operator, access, transport, closures and any activity rules for the exact proposed route. General destination promotion does not prove a boat, room, crossing or night-time excursion is available.",
      },
      {
        label: "China Meteorological Administration weather service",
        href: "https://weather.cma.cn/",
        scope:
          "Official starting point for weather forecasts and warnings; select the relevant location and date. Local site instructions, sea conditions and activity-provider decisions still apply. A general forecast is not permission to swim, board a boat or enter a closed coastal area.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated rail services and the exact Pingtan or Fuzhou station. Pingtan railway station still requires a road transfer to the named coast, village or hotel. Compare the complete journey rather than only the fastest train segment.",
      },
    ],
    serviceScope:
      "A proposal should name the island or coastal area, exact hotel and room, full station or airport transfers, guide language and the actual daily route. Separate a beach walk from supervised swimming, a viewpoint from a boat excursion and a public village walk from a private hosted visit. Water activities require an identified operator, suitable conditions and explicit inclusion. Blue tears, a colorful sunset or a particular sea color are natural possibilities, not bookable guarantees. Hotel check-in eligibility for the named guests and current local access should be confirmed before payment. Historical cross-strait routes or promotional references do not establish an operating Taiwan connection or the guest's entry permissions.",
    routeAdvice:
      "Use Pingtan as an intentional island chapter within a Fujian journey. Fuzhou adds a provincial-city base and heritage streets; Xiapu offers a different working-coast and tidal-landscape subject; Quanzhou adds maritime history and religious architecture. These places should keep their own time rather than become a rapid chain of coastal photographs. Share your dates, actual gateway, available nights, room needs, walking tolerance and whether the priority is architecture, scenery or a beach holiday. No matching published Pingtan itinerary is recommended here. A Fuzhou or other Fujian product does not include Pingtan accommodation, transfers or water activities unless expressly listed.",
    practicalPlanning: {
      timing:
        "Use the dated forecast and current local notices to decide which coastal direction works best, keeping an alternative that does not depend on an exposed viewpoint or boat. Wind can affect comfort as well as operations. Sunrise, sunset, tide and darkness are different planning variables; a good time for one photograph may be unsuitable for another activity. Summer does not guarantee safe bathing, and storm warnings can change a route. Leave meaningful time at the property so poor outdoor conditions do not turn the whole stay into a drive between closed or uncomfortable stops.",
      walking:
        "Beach sand, village steps, uneven lanes and coastal paths create different demands. Check the actual distance and gradient from the vehicle to the room, viewpoint or restaurant. Wet stone and exposed rocks are not suitable shortcuts, particularly in poor light or rough conditions. A sea-view terrace does not establish step-free access to the beach. For limited mobility, assess the specific property, toilets, seated viewpoints and vehicle approaches, and build the visit around those options rather than promising every village and shore is easy to explore.",
      cost: "Compare the actual room category, breakfast, complete transfers, guide duration and road itinerary. Add any admissions, boat or water activity only when the operator, scope and conditions are clear. A photogenic stone-house room and a full-service beach hotel are different products, even at similar headline rates. Identify what happens to optional activities if conditions change. Premium value should be visible in comfort, a sensible route, good interpretation and workable alternatives, rather than a guaranteed bioluminescent beach or access to restricted shorelines.",
    },
    attractions: [
      "Beigang's stone-house village setting through a respectful public route",
      "A selected Changjiang'ao coastal viewpoint, with wind and access assessed",
      "Longfengtou beach area for a suitable shore walk or a convenient local base",
      "Tannan Bay as a separate beach-oriented setting chosen by actual property and conditions",
      "One additional coastal subject only when it improves the route rather than adds driving",
      "Regional food in a kitchen suited to the guest's dietary needs",
      "Fuzhou, Xiapu or Quanzhou as distinct onward chapters",
    ],
    stays: [
      {
        label: "A day visit or 1 night / be selective",
        advice:
          "Choose one coast or a village-and-viewpoint pairing from the actual gateway. Count the return journey or hotel check-in, meals and remaining walking. A short visit should not attempt a full island circuit, a late-night natural spectacle and an early departure at once.",
      },
      {
        label: "2 nights / a focused island introduction",
        advice:
          "Allow one full day between transfers, with a selected village, a coastal route and a good meal. Use arrival or departure time for the property and a nearby walk when conditions permit. Choose a base that supports the main direction rather than repeatedly cross the island.",
      },
      {
        label: "3 nights / room to enjoy the stay and adapt",
        advice:
          "Add a genuinely different coastal subject or time at a property worth using. Leave the order flexible for weather and energy. The extra night improves pacing, but should not be sold as a way to secure a blue-tears sighting or recover every missed activity after a storm.",
      },
    ],
    hotelAreas: [
      {
        name: "Beigang or another named stone-house village / architectural character",
        advice:
          "Check the exact converted building, room, bathroom, sound insulation, temperature control, luggage access and dining arrangements. A village stay can be rewarding when the accommodation works in practice. Confirm resident privacy and public routes; booking a room does not include access to neighboring homes or private courtyards.",
      },
      {
        name: "Longfengtou and town-side stays / services and local convenience",
        advice:
          "Compare the actual walk or drive to the shore, restaurants and transport. A larger property may provide more wet-weather options, but facilities and opening need confirmation. Assess room quiet and the booked view separately from a general beach-area address.",
      },
      {
        name: "Tannan Bay or another coastal property / choose the real beach relationship",
        advice:
          "Plot the actual room, road approach, sand access and dinner options. Ask about wind exposure, indoor space, stairs, breakfast and the evening return if dining elsewhere. A secluded setting can mean fewer alternatives in poor weather, and seafront does not mean private or safely swimmable water.",
      },
    ],
    tradeoffs: [
      {
        title: "Blue tears should be a possibility, not the reason the holiday succeeds",
        advice:
          "This bioluminescent phenomenon is variable in timing, location and visibility. A seasonal window or a vivid long-exposure photograph does not establish what a guest will see on a particular night. Never chase it into closed areas, rough water or unsafe rocks. Choose the coast, room and daytime visit so the trip remains worthwhile without a sighting.",
      },
      {
        title: "A scenic coast and a dependable swimming holiday are different briefs",
        advice:
          "Wind, waves, currents, current beach rules and available supervision affect bathing. Select the actual beach and conditions rather than treat every attractive bay as safe. For guests whose holiday depends on daily swimming or resort facilities, assess those requirements explicitly before recommending Pingtan.",
      },
      {
        title: "Stone-house character needs a room-level assessment",
        advice:
          "A handsome facade can conceal stairs, limited insulation or an inconvenient luggage route. The important comparison is the actual guest experience: sleep, bathroom, temperature, meals and a place to sit comfortably when the wind rises. A well-run modern room can be a better fit than a photogenic conversion with unsuitable practical details.",
      },
      {
        title: "A working village is different from a heritage-themed attraction",
        advice:
          "Beigang and other village settings should be interpreted through the specific buildings, landscape and present-day community. Haitan Ancient City is a modern heritage-themed tourism development; its name should not be used as proof of an intact ancient settlement. Explain which kind of visit is proposed so guests can choose it knowingly.",
      },
      {
        title: "Pingtan and Xiapu answer different coastal interests",
        advice:
          "Pingtan can suit a village-and-beach stay around one chosen property. Xiapu is especially relevant to working-coast, tidal and photography interests that depend on actual tide, light and routes. Neither guarantees a particular image. Combine them when their differences and the available days justify the transfers, not simply because both appear in coastal Fujian searches.",
      },
      {
        title: "A mainland island visit does not establish a cross-strait connection",
        advice:
          "Pingtan belongs in a mainland Fujian itinerary. A reference to Taiwan-facing geography or historic ferry services is not evidence of a currently operating passenger route, an available ticket or entry permission. Any Taiwan chapter needs independent transport and immigration planning, with no assumed continuation from a Pingtan hotel.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "fuzhou",
        advice:
          "Fuzhou adds Sanfang Qixiang, selected collections and a different city base before or after the coast. Compare the complete journey from the actual hotel, airport or railway station to the Pingtan property. Leave city time intact rather than make every Fuzhou night an early departure for another place.",
      },
      {
        slug: "xiapu",
        advice:
          "Xiapu adds tidal landscapes and working-coast interpretation rather than another generic beach day. Choose its actual base, tide-aware route and useful photography windows separately. An island stay and a tidal-landscape visit can complement each other, but both need conditions and transport to work.",
      },
      {
        slug: "quanzhou",
        advice:
          "Quanzhou changes the subject to maritime history, religious buildings and a real city stay. Use the exact rail stations and complete transfers when combining it with Pingtan. Give the historic city enough time rather than turn its monuments into brief stops between coastal properties.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose dates around the whole Fujian trip and a realistic tolerance for changing coastal weather. Wind can shape a day in any season; summer warmth also brings heat and the possibility of disruptive storms. Cooler periods may suit walks and stone-house architecture without resembling a tropical beach holiday. Check forecasts, warnings and local notices near travel. A blue-tears season is not a prediction for a particular beach or night, and an extra night is not a substitute for appropriate conditions.",
    orientation:
      "Pingtan is an island-county destination managed within Fujian's Pingtan Comprehensive Experimental Zone. Haitan is the main island, not a synonym for every island in the wider destination. Beigang, Changjiang'ao, Longfengtou and Tannan Bay are different coastal settings reached through an actual road plan. Pingtan railway station is another transfer point, while Fuzhou city, its airport and its railway gateways are separate places. Use the full Chinese hotel address and the precise public meeting point rather than a generic sea-view map pin.",
    experiences: [
      "Understand a stone-house village through its architecture, coastal setting and present-day community",
      "Choose a coastal walk or viewpoint for actual conditions rather than attempt every photographic stop",
      "Enjoy a comfortable property, a good local meal and enough flexibility to adapt the island day",
    ],
    planningNotes: [
      "Choose one main coastal direction per day and count all hotel and station transfers",
      "Separate sea views, safe swimming, boats and blue-tears sightings in expectations and inclusions",
      "Confirm the exact room, wind exposure, luggage approach and wet-weather alternatives",
    ],
    arrival:
      "Compare dated rail services to Pingtan with a complete road journey from the actual Fuzhou hotel or airport. A fast rail segment can still involve inconvenient transfers if the room is on a distant coast. State who meets the guests, how luggage is handled and the final approach to a village property. Do not assume every island in the wider destination is reached by the same bridge-and-road route. Keep a boat departure, fixed dinner or exposed coastal stop away from an uncertain arrival, and recheck operations when severe weather affects the region.",
    gettingAround:
      "Use a coherent road route linking the selected coastal area, meal and property, with manageable walks at each stop. A full island circuit can create repeated parking and short photo stops instead of a holiday. Clarify current parking and the final walk to a village room or viewpoint. Electric scooters and bicycles are not automatically suitable for every guest or legal on every route; road conditions, licensing and the actual arrangement need assessment. Wind, rain and darkness can make an otherwise manageable coastal walk unsuitable.",
    stayStrategy:
      "Two nights can work for a focused first visit, while three make more sense when the actual property and slower pace are part of the appeal. Choose the room and main coastal direction together. A sea-facing window is only useful if sleep, bathroom, temperature control, meals and indoor comfort also fit. Avoid moving between several island properties just to collect different views unless the change adds enough value to justify packing and transfers.",
    firstTimerNote:
      "Decide whether you want an architecture-and-coast visit, a photography trip or a swimming holiday. These briefs lead to different seasons, rooms, daily routes and feasibility checks. Begin with an island stay that will be enjoyable without a spectacular sky or bioluminescent water, then treat exceptional natural conditions as a bonus. Good planning gives guests choices when the weather changes rather than a rigid list of viewpoints.",
    faqs: [
      {
        question: "Where is Pingtan, and is Haitan the same place?",
        answer:
          "Pingtan is an island-county destination in Fujian, managed within the Pingtan Comprehensive Experimental Zone. Haitan is the principal island. The wider destination includes other islands, so confirm the exact hotel and route rather than assume every Pingtan address is reached in the same way.",
      },
      {
        question: "How many days should I spend in Pingtan?",
        answer:
          "Two nights give one full day for a selected village-and-coast route. Three allow another distinct interest, time at the property and more flexibility. One night needs useful time on both sides of check-in. Extra nights cannot guarantee calm weather or a blue-tears sighting.",
      },
      {
        question: "Can I visit Pingtan on a day trip from Fuzhou?",
        answer:
          "It can work when the complete return journey and a focused route fit the actual city base. Compare road travel with dated trains plus both local transfers. Choose one coastal direction rather than try to cover all the island, and keep a realistic plan for wind or rain.",
      },
      {
        question: "Where should I stay in Pingtan?",
        answer:
          "Choose a named village property for stone-house character, a Longfengtou or town-side base for suitable services, or a specific beach-oriented property for its actual setting. Compare room quiet, bathroom, stairs, temperature control, meals and final access. Sea view does not mean private beach, safe swimming or step-free sand access.",
      },
      {
        question: "When can I see blue tears in Pingtan?",
        answer:
          "Blue tears are a variable natural phenomenon, not a scheduled attraction. Seasonal reports cannot guarantee the location, intensity or visibility on your dates. Long-exposure photographs may differ from the view by eye. Use current local advice and safe public access, and plan a trip that remains worthwhile without a sighting.",
      },
      {
        question: "Is Pingtan good for swimming?",
        answer:
          "It depends on the actual beach, date, sea conditions, current rules and available supervision. A scenic bay or a seafront hotel does not establish safe bathing. If daily swimming is essential to your holiday, assess that requirement explicitly rather than choose Pingtan from photographs alone.",
      },
      {
        question: "Is Beigang a private cultural experience?",
        answer:
          "A public village walk can introduce stone-house architecture and the coastal setting. It does not include private homes, workshops or personal hosts unless separately arranged with willing participants. Residents' privacy, photography preferences and everyday use of the streets should shape the visit.",
      },
      {
        question: "Is Haitan Ancient City an original historic town?",
        answer:
          "It is a modern heritage-themed tourism development, so its name should not be used as evidence that it is an intact ancient settlement. Choose it for the actual contemporary visitor offer if that interests you, and distinguish it from interpreting the fabric and community of a specific stone-house village.",
      },
      {
        question: "Should I choose Pingtan or Xiapu?",
        answer:
          "Choose Pingtan for a considered island stay with coastal scenery and stone-house architecture. Choose Xiapu for its working-coast and tidal-landscape interests, planned around actual tide and light. Both are weather-sensitive. Combine them only when the different subjects and available days justify the complete journeys.",
      },
      {
        question: "Can I continue from Pingtan to Taiwan?",
        answer:
          "Do not assume a connection from geographic proximity or references to historic ferry routes. Any cross-strait travel needs a currently operating service, an actual ticket and independently verified entry eligibility. A Pingtan mainland itinerary does not establish any of those requirements.",
      },
    ],
    culturalStory: {
      title: "Read the stone house in its coastal setting",
      paragraphs: [
        "A village visit becomes more interesting when it moves beyond a row of attractive facades. Look at the material, openings, roofline and relationship between buildings and lanes. Where visible, stones weighting roof tiles offer a concrete detail to discuss in this wind-exposed setting. Consider how exposure and available resources shape coastal architecture. Ask which details belong to older fabric and which reflect restoration or adaptation for present-day use. A converted guesthouse is part of that evolving story, not evidence that the entire village has remained unchanged.",
        "Keep the people living there in the picture without turning their daily lives into a promised attraction. Use public routes, ask before photographing individuals and arrange any hosted conversation explicitly. A cafe, exhibition, retail stop and working craft space each offer a different kind of encounter. The useful question is what the guest will understand from the actual visit, not how many supposedly hidden doors the itinerary can claim to open.",
      ],
    },
    foodStory: {
      title: "Choose a coastal meal by the kitchen, not the view alone",
      paragraphs: [
        "Ask the actual restaurant to explain what it prepares well that day, with a small selection that suits the group. Seafood choices should come with clear species, preparation and charging terms before ordering; a sea-facing table does not settle those questions. Discuss bones, shells, portion sizes and whether dishes are shared. Travelers who prefer cooked vegetables, simple staples or fewer seafood dishes should still have a proper meal planned rather than a sequence of unsuitable tastings.",
        "Check shellfish, fish sauce or stock, pork, wheat, soy and shared equipment when dietary needs matter. A dish that looks vegetable-based may still contain animal ingredients. Serious allergies require a kitchen able to explain its preparation and a workable alternative if it cannot. A fishing-port visit, seafood purchase and cooking lesson are separate experiences; none is implied by a coastal drive. Keep retail purchases optional and agree any tasting or hosted meal in advance.",
      ],
    },
    itinerary: [
      {
        day: "Arrival afternoon",
        title: "Reach the room and settle into the chosen coast",
        description:
          "Complete the full station, airport or city transfer and the final luggage approach. Enjoy the property and a nearby public walk if conditions suit. Avoid making an exposed viewpoint or a hoped-for blue-tears sighting the measure of whether the arrival day succeeds.",
      },
      {
        day: "First full day",
        title: "Pair one village with a coherent coastal route",
        description:
          "Use Beigang or another specifically selected village for architectural interpretation, then a coastal subject that fits the actual wind, access and road route. Include a seated meal and time to return comfortably. Boats or water activities remain optional and separately confirmed.",
      },
      {
        day: "Optional second full day",
        title: "Enjoy another setting or simply use the property",
        description:
          "With three nights, add a contrasting beach area, another well-chosen subject or a slower day at the hotel. Adapt the order around conditions without promising every missed activity can be recovered. Open water and rough rocks are not alternatives to a closed visitor route.",
      },
      {
        day: "Departure",
        title: "Continue to a different Fujian chapter",
        description:
          "Coordinate the actual pickup, luggage and complete journey to Fuzhou, Xiapu or Quanzhou. This two-to-three-night outline is illustrative, not a published package or a guarantee of blue tears, sea conditions, swimming, private hosts, rooms or cross-strait transport.",
      },
    ],
  },
};
