import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/deqin.svg",
  alt: "Original Deqin and Meili planning schematic distinguishing Feilaisi viewing stays, separate Yubeng trekking and Mingyong routes, and the full high-altitude road journey; not a map or photograph",
  width: 1600,
  height: 1200,
};

export const deqinGuide: ExpandedDestination = {
  id: "deqin",
  name: "Deqin & Meili Snow Mountain",
  region: "southwest",
  kicker: "Choose the mountain stay before chasing the sunrise",
  description:
    "Plan Deqin and Meili Snow Mountain around a real Feilaisi room, the full highland journey and the choice between viewing, village time and a separately assessed trek.",
  stay: "2–3 nights for a viewing stay; trekking needs a separate plan",
  bestFor:
    "Sacred mountain landscapes, Tibetan cultural context and an unhurried highland extension",
  interests: ["landscape", "heritage", "food"],
  journeyDestinationNames: ["Deqin", "Meili Snow Mountain"],
  relatedDestinationIds: ["yubeng", "cizhong", "shangri-la", "lijiang"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Deqin & Meili Snow Mountain Guide: Feilaisi and Yubeng",
    seoTitle: "Deqin & Meili Guide: Feilaisi Stays or Yubeng?",
    seoDescription:
      "Plan a Deqin and Meili Snow Mountain stay: Feilaisi hotels, Shangri-La transfers, altitude, sunrise expectations and the choice between viewing and Yubeng trekking.",
    answer:
      "Choose Deqin in northwest Yunnan for a Meili Snow Mountain viewing stay, often based around Feilaisi. Allow two or three nights, separate from time in Shangri-La, while remembering that clear peaks and golden sunrise light depend on weather. Deqin town, Feilaisi, Mingyong and Yubeng have different access and physical demands. Yubeng trekking needs its own itinerary. The sacred peak Kawagebo is a subject for respectful viewing and interpretation, rather than a summit objective.",
    stayAnswer:
      "Two nights give an arrival, one full day and a departure morning, which can suit a focused Feilaisi stay when the complete road journey and elevation profile are appropriate. Three nights create a second full day for the actual property, a different assessed outing or a slower pace. More nights provide flexibility rather than a guarantee of clear mountains or acclimatization. A Yubeng trek is not something to squeeze into that same viewing outline: its access, village nights, walking routes, weather and exit need to be planned separately. Count useful days and sleeping locations before choosing a longer circuit.",
    hotelAnswer:
      "Compare a named Feilaisi property with a specifically located mountain lodge using the exact room, orientation and access. A mountain-view label can mean a private room window, a shared terrace or an obstructed angle; establish which one you are booking. Ask which peaks the room faces: seeing morning light on the range is not the same as booking a window facing the rising sun. Feilaisi is roughly 3,400 metres above sea level, with actual properties and rooms varying. Check heating, bathroom, stairs or lift, meals, sound insulation, luggage and the final road approach. A Deqin county-town room may serve a different practical purpose and should not automatically be sold as the same panorama. Hotel oxygen or premium service does not make high-altitude travel medically suitable.",
    sightseeingQuestion: "Should I choose a Feilaisi viewing stay or a Yubeng trek?",
    sightseeingAnswer:
      "Choose Feilaisi when the priority is the mountain setting, a comfortable room, cultural context and shorter outings selected for the group. Choose Yubeng when walking itself is an important part of the holiday and the guest is suited to a separately designed highland trek. An attractive Yubeng lodge photograph says little about the access, trail, sleeping elevation or emergency exit. Routes toward the Sacred Waterfall / Shenpu and Ice Lake / Binghu are different walking commitments, not interchangeable names for one village stroll. Mingyong is another direction with its own road journey and walking assessment, not a no-effort version of either choice. A strong itinerary may recommend the viewing stay alone rather than add every famous name around Meili.",
    visitorResources: [
      {
        label: "Deqin county government",
        href: "https://www.deqin.gov.cn/",
        scope:
          "Starting point for county background and dated local notices, mainly in Chinese. Confirm current roads, attraction routes, closures and applicable visitor arrangements with the responsible operator. A county description does not establish a particular hotel view, trek or private cultural encounter.",
      },
      {
        label: "Diqing Tibetan Autonomous Prefecture government",
        href: "https://www.diqing.gov.cn/",
        scope:
          "Regional context and public notices for Diqing, including the relationship between Shangri-La and Deqin. Check exact travel-date and traveler-specific arrangements; a Yunnan location is not proof that every borderward or mountain route is open without restriction.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel",
        href: "https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General medical background on altitude and illness, not an individual assessment, prescription or approval for a particular road journey or trek. Seek qualified clinical advice about personal suitability, prevention and what to do if symptoms develop.",
      },
      {
        label: "China Meteorological Administration weather service",
        href: "https://weather.cma.cn/",
        scope:
          "Official starting point for local forecasts and warnings. County forecasts do not describe every mountain trail or viewpoint. Current site notices, road conditions and a qualified local provider's route decision remain necessary.",
      },
    ],
    serviceScope:
      "A proposal should identify every overnight location, approximate sleeping elevation, complete road sequence, actual property and room, meals, guide language and outings. A trek needs a separate route, daily ascent and descent, terrain, access and exit arrangements, and a provider equipped for the agreed activity. Clarify the actual role of any permitted local vehicle; do not imply that transport removes all walking. Current access and guest eligibility must be checked for the precise itinerary. Private guiding does not confer summit access, closed trails, private religious ceremonies or an invitation into a home. A sighting of clear peaks, sunrise color or a glacier view is never a service inclusion.",
    routeAdvice:
      "Plan Deqin and Meili as a dedicated extension beyond Shangri-La, allowing separate outward and return road days. The existing ten-day Yunnan journey ends in Shangri-La and excludes Deqin accommodation, Meili excursions and Yubeng trekking. Share your available nights, gateways, walking experience and room expectations for a tailored assessment. We can compare a Feilaisi viewing stay with a longer walking itinerary, considering the entire elevation profile. Individual medical suitability requires appropriate professional advice.",
    practicalPlanning: {
      timing:
        "Protect the road days instead of attaching a demanding walk to arrival. For a viewing stay, use the actual forecast and room orientation to choose where to look at dawn, then leave a comfortable breakfast and flexible day. A dark early start adds cold, steps and fatigue even when the viewpoint is close. Summer cloud and rain, or cold-season snow and ice, can affect different parts of the plan. Keep departure connections away from uncertain mountain-road arrivals and check current road and site notices near travel.",
      walking:
        "Review the whole route's sleeping and daytime elevations, not only the hotel figure. Feilaisi is roughly 3,400 metres; individual properties, road sections and excursions differ. Short walks can feel demanding at elevation, while Yubeng trails add sustained effort and changing terrain. A lower trailhead does not mean the entire outing stays low. Seek clinical advice before committing to the highland section. If symptoms develop, pause the sightseeing objective and seek prompt medical assessment; a fixed number of nights, oxygen availability or good general fitness is not a guarantee of safety.",
      cost: "Compare exact room category and view, heating, meals, complete road days, guide scope and any listed admissions or local transport. A viewing stay and a trek require different staffing, logistics and contingency arrangements. Identify what changes or costs apply if an optional outing cannot operate. Premium value should be evident in a suitable room, thoughtful pacing, sound interpretation and a realistic response to conditions, not a guaranteed sunrise or a vague claim of exclusive mountain access.",
    },
    attractions: [
      "Feilaisi-area views toward the Meili range from the actual chosen room or public viewpoint",
      "Kawagebo / Khawa Karpo understood through its sacred context and mountain setting",
      "A selected Deqin or nearby village interest with public access and willing hosts distinguished",
      "Mingyong as a separately assessed valley-and-mountain outing with current open route confirmed",
      "Yubeng as a distinct highland walking itinerary, not a short add-on to a viewing day",
      "A comfortable property stay with time to enjoy changing light without chasing every viewpoint",
      "Shangri-La as its own cultural and transport chapter before or after the extension",
    ],
    stays: [
      {
        label: "2 nights / one focused full day",
        advice:
          "Keep arrival light, choose the actual viewing base and leave one full day for a suitable shorter interest or rest. Plan both complete road journeys before calling this a short extension. Do not insert a Yubeng trek or several distant directions into the same day.",
      },
      {
        label: "3 nights / enjoy the mountain setting without rushing",
        advice:
          "Use the second full day for a different assessed subject, the property or flexible time. Separate an optional Mingyong direction from another main outing when that improves the pace. More nights can reduce scheduling pressure but do not establish acclimatization or guarantee mountain visibility.",
      },
      {
        label: "A separate trekking itinerary / design it from the trail outward",
        advice:
          "Choose Yubeng only after reviewing the specific access, village accommodation, day routes, elevation, physical demands and exit. Decide the required nights from that assessment rather than attach a trek to a fixed viewing package. Do not assume every guest can use the same transport or complete the same walks.",
      },
    ],
    hotelAreas: [
      {
        name: "Feilaisi viewing area / establish the actual room and panorama",
        advice:
          "Ask whether the view is from the booked room or a shared terrace, what can obstruct it and how steps and road noise affect the stay. Check bed, bathroom, heating, breakfast and a warm place to sit after dawn. A photograph with clear peaks is not evidence of the weather during your booking.",
      },
      {
        name: "A specifically located mountain lodge / setting and full logistics",
        advice:
          "Compare its true location and elevation with the intended daily route, meals, road approach and available services. A secluded property can be rewarding when you want time there, but may make every outing longer. A premium brand or oxygen facility does not replace the guest's individual altitude assessment.",
      },
      {
        name: "Deqin county town / choose for its actual purpose",
        advice:
          "A county-town base may suit a particular transport or local-interest plan. Check the actual room comfort, restaurant options and journey to the desired viewpoint. Do not describe the town and Feilaisi as interchangeable mountain-view hotel zones merely because both appear in a Deqin search.",
      },
      {
        name: "Yubeng village / accommodation within a separately planned trek",
        advice:
          "Establish the specific village location, room, heating, bathroom, meals, luggage handling and remaining access walk. Upper and lower village locations can change the day's route. Comfortable accommodation does not turn the trail or journey into a low-effort viewing excursion.",
      },
    ],
    tradeoffs: [
      {
        title: "The mountain stay should be worthwhile without golden peaks",
        advice:
          "A clear sunrise can be memorable, but cloud may conceal the range throughout a stay. Choose the room, food, interpretation and pace so that the journey has value without the hoped-for photograph. Another night gives another possible viewing window, not a guarantee that nature will cooperate.",
      },
      {
        title: "Meili is a range and a cultural landscape, not one compact attraction",
        advice:
          "Feilaisi viewing, Mingyong and Yubeng describe different experiences and access routes. Buying or discussing a scenic-area ticket does not mean all of them can be comfortably combined. Ask what the guest will actually do and understand in each place before expanding the route.",
      },
      {
        title: "Mingyong needs an honest description of the current outing",
        advice:
          "Confirm which visitor route is open, the real trailhead, transport, steps and the views possible from permitted places. A destination named after a glacier is not a promise to stand on ice or see the same foreground as an old photograph. Glacier landscapes and visitor arrangements change; do not sell unrestricted ice access.",
      },
      {
        title: "Yubeng is a walking choice, not an automatic luxury upgrade",
        advice:
          "A beautiful lodge cannot remove the demands of village access, trails, elevation and weather. Compare the actual daily walking with the guest's experience and suitability. Declining the trek can leave a stronger holiday, with a comfortable Feilaisi stay and an appropriate cultural or landscape interest instead.",
      },
      {
        title: "Road access and altitude are separate questions",
        advice:
          "An available road and a private vehicle do not make the elevation profile suitable for every traveler. Review higher daytime sections as well as sleeping locations, the full journey and access to appropriate help. Do not use a gradual-looking map route or a hotel oxygen supply as evidence that a guest will acclimatize.",
      },
      {
        title: "Respect for a sacred mountain shapes the visit",
        advice:
          "Explain Kawagebo's importance in Tibetan Buddhist traditions without reducing it to a sunrise backdrop. Follow current conduct and photography rules at religious places, and seek consent for personal encounters. Public guiding does not provide access to private practice, and this visitor plan does not propose a summit climb.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "yubeng",
        advice:
          "Yubeng is a separate village-based walking stay. Compare Upper and Lower Yubeng rooms, Sacred Waterfall or Ice Lake routes, actual village access and the complete exit. Three village nights give two full days, excluding approach stays elsewhere. A lodge booking does not remove highland walking demands.",
      },
      {
        slug: "cizhong",
        advice:
          "Cizhong offers a distinct Lancang valley village stay, Catholic church history and grape-growing traditions. Compare a real village room and full road journey with the highland stay rather than treating it as a spare-hour detour. Church access and any hosted wine visit need their own confirmed arrangements.",
      },
      {
        slug: "shangri-la",
        advice:
          "Shangri-La provides a distinct monastery, old-town and highland-stay chapter before the separate road extension to Deqin. Compare the actual sleeping and daytime elevations rather than treat one stop as a guaranteed acclimatization stage. Protect return travel and departure arrangements; the published ten-day Yunnan route ends in Shangri-La and does not include Meili.",
      },
      {
        slug: "lijiang",
        advice:
          "Lijiang adds a different old-town and regional cultural setting on a broader Yunnan route. Deqin is not a casual day excursion from a Lijiang hotel. Decide the complete sequence through the highland region, the real road days and the guest's suitability before committing to both.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Later autumn and winter are often considered for clearer mountain-viewing opportunities, with colder conditions and possible snow or ice to plan around. Spring remains changeable, and summer rain and cloud can affect views, roads and walking routes. None of these broad patterns predicts a particular dawn or trail day. Choose dates by the whole route and the guest's priorities, then check current forecasts and local notices. A trekking date and a comfortable viewing-stay date require different assessments.",
    orientation:
      "Deqin county lies in Diqing Tibetan Autonomous Prefecture, Yunnan, outside the Tibet Autonomous Region. That distinction does not establish unrestricted access to every local or onward route. Deqin county town and Feilaisi are separate locations, while Mingyong and Yubeng require their own directions and logistics. Meili Snow Mountain refers to a wider range and visitor landscape, not a single town or one all-purpose entrance. Use full hotel addresses, the actual viewpoint and a complete road sequence from Shangri-La.",
    experiences: [
      "Understand Meili and Kawagebo through respectful interpretation and changing mountain light",
      "Enjoy a real Feilaisi-area room with warmth, good meals and time to use the setting",
      "Choose a shorter outing, Mingyong direction or separate Yubeng trek by actual suitability",
    ],
    planningNotes: [
      "Separate Feilaisi viewing, Deqin town, Mingyong and Yubeng before choosing the route",
      "Review sleeping and daytime elevations, complete road days and appropriate clinical advice",
      "Confirm the exact room view and plan a worthwhile stay without guaranteed clear peaks",
    ],
    arrival:
      "Build the journey from the actual Shangri-La hotel or other agreed gateway, allowing the complete road day and current conditions. The corridor through Benzilan links a Jinsha River valley setting with the Deqin direction; a selected valley stop can add context when it suits the actual route. Confirm current roads and tunnels rather than assume an older high-pass itinerary describes the journey you will take. Do not assume a nearby airport or train arrival places the guest at a Meili viewpoint. The exact property may add another approach and luggage step after the main drive. Keep arrival light and protect onward flight or rail connections from uncertain mountain-road travel. Current guest eligibility, road operations and any later crossing into another jurisdiction need their own checks.",
    gettingAround:
      "Use a coherent road route and selected walks based on the actual base. A viewpoint near a hotel, a valley excursion and a Yubeng trail have very different demands. Confirm parking, final walking and any permitted internal transport without assuming a private car can reach every room or viewpoint. Weather can change the sensible plan even when a road remains open. Keep guests clear about what can be shortened, what needs a separate day and how the group returns to its accommodation.",
    stayStrategy:
      "Choose a viewing stay for the room and setting, with enough time to enjoy both, rather than book a single night solely to photograph dawn. Two or three nights should follow the road plan, suitable elevation profile and actual interests. A mountain lodge needs to justify any extra transfers through its setting and comfort. Yubeng accommodation belongs within a separately designed walking plan, and a county-town room should be chosen knowingly rather than substituted without explaining the difference in view and access.",
    firstTimerNote:
      "Begin by choosing the kind of holiday: mountain viewing with comfort, a cultural highland extension or a dedicated trek. These are different briefs. Be clear about weather uncertainty, elevation and road travel before choosing a room or adding famous trails. The best recommendation may be a focused Feilaisi stay, a different Yunnan route or leaving this extension for another trip, depending on the guest's time and suitability.",
    faqs: [
      {
        question: "Where is Deqin, and is it in Tibet?",
        answer:
          "Deqin is a county in Diqing Tibetan Autonomous Prefecture, Yunnan, outside the Tibet Autonomous Region. Tibetan cultural context is central to the area, but administrative and travel rules must not be conflated. Check the precise itinerary and guest eligibility; the Yunnan location does not guarantee access to every local or onward route.",
      },
      {
        question: "Are Deqin, Feilaisi and Meili Snow Mountain the same place?",
        answer:
          "No. Deqin is the county and also the name used for its town; Feilaisi is a commonly chosen viewing and accommodation area. Meili Snow Mountain is the wider mountain range and visitor landscape. Mingyong and Yubeng are further distinct directions, not alternative names for the same hotel or viewpoint.",
      },
      {
        question: "How many nights should I spend near Meili Snow Mountain?",
        answer:
          "Two nights give one full day between road journeys; three add time at the property or another suitable interest. A Yubeng trek needs a separate plan. Extra nights can improve pacing and provide possible viewing windows, but do not guarantee clear peaks or acclimatization.",
      },
      {
        question: "Where should I stay to see Meili Snow Mountain?",
        answer:
          "Compare a specific Feilaisi property or another precisely located lodge by the booked room's view, orientation, warmth, bathroom, meals and access. Determine whether the panorama is from the room or a shared space. A general Deqin address or premium room name does not establish the view or the weather.",
      },
      {
        question: "What is the altitude at Feilaisi?",
        answer:
          "Feilaisi is roughly 3,400 metres above sea level; exact properties and routes vary. Assess daytime high points and sleeping locations together. Seek qualified medical advice about your suitability. Good fitness, a private car, hotel oxygen or a set number of nights does not guarantee protection from altitude illness.",
      },
      {
        question: "Can you guarantee the golden sunrise over Meili?",
        answer:
          "No. The light known as rizhao jinshan depends on mountain visibility, cloud and conditions. A room can provide a suitable viewing direction without guaranteeing a clear dawn. Choose a stay worth enjoying even if the peaks remain hidden, and treat a spectacular sunrise as a natural possibility.",
      },
      {
        question: "Do I have to trek to enjoy Meili Snow Mountain?",
        answer:
          "No. A viewing stay near Feilaisi can focus on the setting, a comfortable property and shorter individually assessed outings. It still involves high elevation and road travel. Yubeng is a separate walking choice, and a Mingyong outing also needs its own access and physical-demand assessment.",
      },
      {
        question: "Can I visit Yubeng as a quick excursion from Feilaisi?",
        answer:
          "Do not treat it as a routine short add-on. Review the actual access, remaining walking, village accommodation, chosen trails and exit with a qualified provider. Local transport, where permitted and operating, does not remove every physical demand. Design the required days from that route rather than fit it into a spare afternoon.",
      },
      {
        question: "Can I walk on Mingyong Glacier?",
        answer:
          "A Mingyong visitor itinerary is not a promise of glacier or unrestricted ice access. Confirm the current permitted route, actual walking and views with the responsible operator. Conditions and the glacier landscape change, and old photographs do not establish what a guest can see or safely reach today.",
      },
      {
        question: "Does the ten-day Yunnan tour include Meili or Deqin?",
        answer:
          "The published ten-day route ends in Shangri-La. Deqin, a Meili viewing stay and Yubeng trekking need separate time, logistics and suitability assessment. No matching Deqin product is listed on this guide; discuss a tailored extension with exact dates, room needs and onward travel before booking.",
      },
    ],
    culturalStory: {
      title: "A sacred mountain deserves more than a sunrise label",
      paragraphs: [
        "Kawagebo / Khawa Karpo has a central place in Tibetan Buddhist understandings of this mountain landscape. A guide can explain how devotion, routes and local practice shape the way people relate to the range, without suggesting that every visitor has the same purpose. Take time to understand the names and the visible landscape instead of reducing the experience to a photograph of golden peaks. Viewing the mountain respectfully is a meaningful activity even when no demanding trek is part of the trip.",
        "At religious places and in villages, distinguish a public visit from private practice. Follow current conduct and photography rules, and arrange any hosted conversation with willing participants. A community, a monastery and a hotel cultural program are not interchangeable sources of access. Good interpretation should identify documented context and contemporary life without promising ceremonies, private homes or a particular person simply because they appear in a travel story.",
      ],
    },
    foodStory: {
      title: "Make warm, dependable meals part of the mountain stay",
      paragraphs: [
        "After a long road journey or a cold dawn, the practical quality of the meal matters. Ask the chosen property what its kitchen actually prepares well, with warm dishes, appropriate portions and meal times that fit the day. Regional barley, dairy and meat preparations may provide useful cultural context where genuinely served, but a fixed menu of supposed local specialties is less helpful than a meal suited to the guest. A secluded room also needs a reliable dinner plan and breakfast arrangement.",
        "Discuss dairy, wheat or barley, meat stock, nuts and shared equipment when allergies or dietary needs matter. A vegetable dish is not automatically vegetarian, and a remote kitchen may have fewer substitutes. Confirm preparation capability before arrival and keep a workable alternative. A hosted meal or food demonstration is a separate arrangement with an identified willing provider; no family invitation or hands-on experience is included merely by describing Tibetan food traditions.",
      ],
    },
    itinerary: [
      {
        day: "Arrival road day",
        title: "Reach the chosen base without adding a strenuous outing",
        description:
          "Complete the agreed journey from Shangri-La, with current road conditions and the full elevation profile considered. Settle into the actual room, understand the viewing area and have a comfortable meal. Do not make a demanding walk the condition for enjoying the first afternoon.",
      },
      {
        day: "First full day",
        title: "Enjoy the mountain setting and one suitable interest",
        description:
          "If conditions allow, view dawn from an appropriate room, terrace or public point, then leave time for breakfast. Choose a shorter cultural or landscape outing or time at the property according to suitability and conditions. Clear peaks are not required for the day to have value.",
      },
      {
        day: "Optional second full day",
        title: "Add a separately assessed direction or keep the slower pace",
        description:
          "With three nights, consider a properly checked Mingyong direction or another distinct local interest when appropriate. Do not insert a Yubeng trek into this viewing outline. Retain flexibility for weather, rest and the actual group rather than promise every famous stop.",
      },
      {
        day: "Departure road day",
        title: "Protect the onward journey",
        description:
          "Allow the complete return or separately agreed onward road journey, with suitable connection time and current conditions checked. This two-to-three-night viewing outline is illustrative, not a published package, medical approval or a guarantee of mountain visibility, trail access, private hosts or room views.",
      },
    ],
  },
};
