import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/qilian.svg",
  alt: "Original Qilian County planning schematic separating Babao town accommodation, Zhuo'er Mountain and an Arou monastery or grassland day from the wider Xining–Zhangye crossing; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const qilianGuide: ExpandedDestination = {
  id: "qilian",
  name: "Qilian",
  region: "northwest",
  kicker: "Give the mountain crossing a worthwhile place to pause",
  description:
    "Plan Qilian County around Zhuo'er Mountain, a considered Arou Monastery visit and grassland scenery, with clear town, hotel and Xining–Zhangye route choices.",
  stay: "2 local nights for one full day; 3 for a distinct second interest",
  bestFor:
    "Mountain landscapes, thoughtful monastery interpretation and slower Qinghai–Gansu routes",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["xining", "zhangye", "qinghai-lake"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Qilian Travel Guide: Zhuo'er Mountain & Where to Stay",
    seoTitle: "Qilian Guide: Mountains & Where to Stay",
    seoDescription:
      "Plan Qilian County with Zhuo'er Mountain, Arou Monastery, Babao hotel choices, altitude and full road days between Xining and Zhangye.",
    answer:
      "Qilian (祁连) in this guide means Qilian County in Haibei Tibetan Autonomous Prefecture, Qinghai, with its county seat at Babao town. It is not the whole Qilian mountain range, which extends far beyond the county across Qinghai and Gansu. Babao sits at roughly 2,800 meters, and selected visitor points and approach roads are higher. A focused stay pairs the red-rock-and-pasture landscape of Zhuo'er Mountain with a separate Arou Monastery or selected grassland interest. Two local nights provide one full day between substantial road journeys; three can support a genuinely different second day. Choose the actual road, sleeping sequence and available experiences before treating Qilian as an automatic stop on a northwest China loop.",
    stayAnswer:
      "Two nights can protect one full local day instead of placing every interest between a long arrival drive and an early departure. Three nights work when you want a separate cultural or photography day and more flexibility for weather. One night is a selective road-stage stop, not the same depth of visit. Count Xining, Zhangye, Menyuan and any Qinghai Lake nights separately. A longer stay does not guarantee acclimatization, snow-peak visibility or unrestricted access to mountain and grassland areas.",
    hotelAnswer:
      "Start with a specific Babao town hotel for a practical base, then compare a named town-edge or landscape property only when its location improves the stay. Check quiet, heating, hot water, bathroom, stairs or lift, meals, parking and actual room outlook. A grassland-view image does not establish the view from every room, and a lodge label does not prove resort service. Any remote camp or yurt stay needs its own assessment of temperature, bedding, bathroom, food, staffing and lawful access. For a premium journey, reliable rest and well-chosen local time matter more than an unverified luxury description.",
    sightseeingQuestion:
      "How should I choose between Zhuo'er Mountain, Arou Monastery and grassland scenery?",
    sightseeingAnswer:
      "Use Zhuo'er Mountain for a specific elevated landscape visit, with the actual visitor route, transport, steps and current operation established. Arou Monastery offers a different cultural subject whose value depends on clear interpretation and respectful access. Grassland scenery can form part of a considered road day or a separately chosen outing, but not every open field is public visitor land. Choose one substantial subject with a complementary interest rather than promise every viewpoint, a monastery, horseback riding and a long onward drive in the same day.",
    visitorResources: [
      {
        label: "Qinghai provincial government",
        href: "https://www.qinghai.gov.cn/",
        scope:
          "Official provincial context and dated public notices, mainly in Chinese. Use current local information for Qilian County's roads, visitor sites and responsible authorities. A province-wide tourism page does not confirm a particular trail, property, horse activity or access beyond public routes.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for actual dated trains and stations. Xining, Menyuan and Zhangye create different onward road journeys. A ticket or a station associated with the mountain region does not put you in Babao town or provide a car for the complete local route.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel and altitude illness",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-to-high-altitudes-and-extreme-environments/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General guidance on ascent and altitude illness, not individual clearance. Review actual sleeping elevations and the highest road and visitor points with an appropriately qualified clinician where needed. A green landscape, private car or hotel oxygen provision does not establish that the journey is suitable for every guest.",
      },
    ],
    serviceScope:
      "A proposal should identify the gateway, exact overnight addresses and room categories, full road days, guide language, driver arrangements, selected visitor routes, admissions and meals. Describe Zhuo'er walking and current site transport separately from the vehicle transfer. Arou interiors, religious activity, a hosted visit, horseback riding, a camp, specialist hiking or drone use require their own appropriate confirmation and conditions. Review current traveler eligibility and check-in arrangements for the actual guests and any additional route. Private transport does not authorize access to protected land, closed roads, pasture or private homes.",
    routeAdvice:
      "Qilian can become a meaningful mountain chapter between a well-paced Xining stay and a separate Zhangye geology-and-heritage stay when the full road and altitude profile fit. It is not compulsory: an actual operating rail connection between major cities creates a different trip, with less local mountain time and different final transfers. Qinghai Lake is a separate higher landscape chapter, not another attraction beside Babao. No matching published Qilian tour is recommended here. Share dates, actual gateways, previous sleeping elevations, walking needs and room priorities for a tailored route that explains every substantial transfer.",
    practicalPlanning: {
      timing:
        "Plan the entire crossing, including the chosen road, higher sections, meals, current conditions and final hotel access. Avoid fixing a long-distance departure immediately after an optimistic mountain-drive estimate. Summer is a common research starting point for greener pasture scenery; Menyuan's rapeseed flowering is a separate seasonal question, often researched around July, not a guarantee of yellow fields throughout Qilian County. Mountain light, cloud and rain change quickly. Keep an alternative that offers a worthwhile day without every peak visible.",
      walking:
        "Confirm the precise Zhuo'er visitor route and any current internal transport before assessing effort. Viewing terraces, stairs, slopes, standing and wind exposure are different from a short roadside stop. Arou's thresholds, surfaces and standing time also deserve attention. Establish toilets, seating, pickup and a shorter option. Avoid walking through working pasture, approaching livestock or using informal tracks without permission. Horse riding and higher hikes are separate activities with their own provider, equipment, guest suitability and weather assessment.",
      cost: "Compare complete vehicle days and return arrangements, the actual hotel room and meals, guide language, named admissions and any internal transport. A scenic crossing and a rail transfer between major cities buy different experiences. Specify change terms if a road, site or rural stay becomes unavailable. Premium value should be visible in rest, realistic driving, precise interpretation and a useful fallback; neither a private car nor a high room rate guarantees mountain visibility, altitude suitability or special access.",
    },
    attractions: [
      "Zhuo'er Mountain / Zhuo'er Shan through the actual currently available visitor route",
      "Arou Monastery / Arou Da Si with current visitor access and religious practice respected",
      "Babao town as the real accommodation and meal base",
      "A selected lawful grassland or mountain-road landscape stop with safe parking",
      "Views toward Niuxin Mountain when weather and the chosen viewpoint allow",
      "Menyuan's seasonal fields only as a separately planned route chapter",
    ],
    stays: [
      {
        label: "1 local night / a selective crossing stop",
        advice:
          "Prioritize a comfortable room and one realistic interest if the full road day permits it. A late check-in and early departure leave little depth. Do not describe a passing viewpoint as a complete mountain-and-monastery stay or pack essential visits into uncertain arrival light.",
      },
      {
        label: "2 local nights / one complete day",
        advice:
          "Separate the substantial road arrival from a selected Zhuo'er visit and a complementary subject when conditions and effort allow. Include a proper meal and rest. The next road leg is a separate journey rather than an assumed second full local day.",
      },
      {
        label: "3 local nights / a distinct second day",
        advice:
          "Add a well-researched cultural, landscape or walking interest with appropriate access and realistic transport. Let weather influence the order. More nights create flexibility without guaranteeing clear peaks, grassland color or readiness for a higher route; avoid filling time with repetitive viewpoints.",
      },
    ],
    hotelAreas: [
      {
        name: "Babao town / practical base with assessed room comfort",
        advice:
          "Compare quiet, heating, bathroom, meals and pickup in the actual booked property. A central address can simplify dinner and an early road departure, but confirm room noise and parking. The county name on a listing does not tell you whether the hotel is convenient for the selected visitor entrances.",
      },
      {
        name: "A named town-edge or valley-view property / a deliberate setting choice",
        advice:
          "Check the booked outlook, final approach, dinner, temperature control and next day's vehicle route. A remote-looking image does not establish privacy or a forest walking start. Choose the location for a real benefit that survives clouded peaks rather than assume a higher rate buys a better experience.",
      },
      {
        name: "A camp or yurt-style stay / a separate assessed service",
        advice:
          "Establish current operation, traveler registration, land access, bed, warmth, bathroom, food, staff and road support. A styled photograph does not prove these facilities. Do not substitute a seasonal camp for a comfortable hotel without discussing the actual service and the guests' needs.",
      },
      {
        name: "Xining, Menyuan or Zhangye / separate journey stages",
        advice:
          "Use them for an actual gateway, cultural stay or coherent road-stage night. They are not interchangeable with a Babao overnight. Check the full transfer and available local hours before choosing a nominal Qilian excursion from a distant base.",
      },
    ],
    tradeoffs: [
      {
        title: "Qilian County and the Qilian Mountains are different scales",
        advice:
          "The mountain range spans a much wider Qinghai–Gansu geography. A view of the range from another destination does not establish a visit to Babao, Zhuo'er or Arou, while a county stay does not cover every range route or protected area. Use the exact place, hotel and road names when comparing proposals and photographs.",
      },
      {
        title: "A mountain crossing and a rail connection are different journeys",
        advice:
          "Driving can create worthwhile local landscape time when enough nights and suitable conditions support it. A dated train between gateways may suit a different priority, with station transfers still required. Compare the complete experience, ascent and burden rather than assume the longest scenic road is always the premium choice.",
      },
      {
        title: "The town elevation is not the route's highest exposure",
        advice:
          "Babao is roughly 2,800 meters, while selected visitor points and mountain roads can be higher. Identify the actual daytime high points and each sleeping night. Fitness, hotel oxygen and a private vehicle do not establish protection from altitude illness. Seek appropriate health advice for the complete itinerary and let concerning symptoms change the plan.",
      },
      {
        title: "Grassland views do not include riding or unrestricted roaming",
        advice:
          "Pasture is a working and ecologically sensitive landscape. Stay on lawful visitor routes and arrange any riding with an appropriate actual provider, equipment and suitability assessment. A guide cannot promise access to every field or family. Protected habitats and closed tracks remain separate from ordinary sightseeing stops.",
      },
      {
        title: "A monastery visit needs context and respect",
        advice:
          "Arou is a living religious place rather than a performance venue. Public grounds, interiors, worship and a private conversation have different access conditions. Ask what is actually available and what the guide will explain. A paid visit does not guarantee a ceremony, photography permission or a meeting with religious practitioners.",
      },
      {
        title: "Menyuan's flowering fields are a separate seasonal subject",
        advice:
          "Do not use a yellow-field photograph to imply that every Qilian visit includes Menyuan at peak bloom. Name the actual location and road sequence, research that year's conditions and preserve useful time. A short season can increase demand; a flexible landscape plan should still make sense when the desired color or mountain backdrop is absent.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "xining",
        advice:
          "Xining adds a separate city chapter with selected collections, religious history and a comfortable base around 2,300 meters. Give it useful nights and count the full road to Qilian. A city stop can be discussed within the ascent plan but does not guarantee acclimatization for the higher road or visitor route.",
      },
      {
        slug: "zhangye",
        advice:
          "Zhangye provides a distinct Gansu stay for Danxia geology and city heritage. Compare the full mountain-road sequence, actual conditions and overnight profile before linking it to Qilian. A photo stop in the mountains should not consume the time intended for Zhangye's separately chosen visitor sites.",
      },
      {
        slug: "qinghai-lake",
        advice:
          "Qinghai Lake adds a different open-water landscape around 3,200 meters, with its own shore access, property and complete road journey. It is not a short local addition to a Babao hotel stay. Choose the exact base and useful time rather than assume all Qinghai highlights form one easy daily loop.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Summer is a common starting point for researching greener grassland scenery and a wider Qinghai–Gansu road itinerary, but wind, rain, strong sun and cold evenings still matter. Cloud may hide peaks even in a favored season. Spring and autumn need a route-specific review of temperature, services and higher roads; winter is a distinct cold-weather proposal. Menyuan's rapeseed season is another location-specific question. Choose dates for the actual experience and retain worthwhile alternatives instead of promising green pasture, yellow fields and snow peaks in one guaranteed view.",
    orientation:
      "Qilian County lies in Haibei Tibetan Autonomous Prefecture in Qinghai, and Babao is its county seat. The wider Qilian Mountains extend across Qinghai and Gansu. Zhuo'er Mountain, Arou Monastery, selected grassland roads and the viewpoints toward Niuxin Mountain are different local interests, not one all-inclusive park. Menyuan is another county-level destination on some wider routes. Use full Chinese hotel, station and visitor-site names to avoid confusing the mountain-region label with an actual Babao arrival.",
    experiences: [
      "Read Zhuo'er's contrasting landforms and pasture through a suitable visitor route",
      "Give Arou Monastery time for specific, respectful cultural explanation",
      "Make selected mountain-road stops part of a coherent journey with real local nights",
    ],
    planningNotes: [
      "Distinguish Qilian County from the mountain range and use actual overnight addresses",
      "Review higher road and visitor points separately from Babao's sleeping elevation",
      "Choose the full crossing, walking and room before adding camps, riding or seasonal fields",
    ],
    arrival:
      "Start with the actual gateway service, such as a dated Xining or Zhangye arrival, then plan the complete road to Babao. A Menyuan rail option needs its own final transfer and present connection review. Do not book on the assumption that every airport or station associated with the Qilian region serves the county town conveniently. Assess the full ascent and road conditions, include meals and keep the arrival evening light. Any proposed local flight needs an actual operating dated service, not just an airport pin on a map.",
    gettingAround:
      "Use named roads and confirmed visitor entrances with safe stopping, meals and toilets planned. A private vehicle does not remove internal site transport, stairs, standing or higher elevation. At a monastery, follow current access and photography instructions. Around pasture and protected land, remain on permitted routes and avoid disturbing livestock. A scenic detour or horse activity needs its own available provider and clear purpose rather than an informal roadside promise.",
    stayStrategy:
      "Two Babao-area nights provide a meaningful local day when the approach and onward leg are substantial. Three nights should add a distinct interest and flexibility. Compare town practicality with an actual landscape property on sleep, heating, bathroom, dinner and the full road sequence. Treat any camp as a separate service assessment. Extra nights and room oxygen do not guarantee adaptation; keep the guest's condition and complete elevation profile under review.",
    firstTimerNote:
      "Ask which Qilian is meant, where you sleep and what the route's highest stages are. Then ask how much useful time remains outside the vehicle. Those answers reveal whether the county deserves its place in your trip. A well-paced stop with clear interpretation can be more rewarding than a long loop that names every landscape while leaving little time to experience any of them.",
    faqs: [
      {
        question: "Is Qilian County the same as the Qilian Mountains?",
        answer:
          "No. This guide covers Qilian County in Qinghai, centered on Babao town and selected local visitor routes. The Qilian Mountains are a much wider range across Qinghai and Gansu. A mountain view elsewhere is not the same as visiting the county, and a county stay does not cover the entire range.",
      },
      {
        question: "How many nights should I spend in Qilian?",
        answer:
          "Two local nights give one full day between road journeys. Three can add a distinct second subject or useful weather flexibility. One night is a selective crossing stop. Count Xining, Zhangye, Menyuan and any lake nights separately rather than treating travel days as full local sightseeing days.",
      },
      {
        question: "What is Qilian's altitude?",
        answer:
          "Babao town is roughly 2,800 meters above sea level, with variation by property. Selected visitor points and approach roads can be higher. Review the full daytime and sleeping profile with appropriate individual health advice; the town number does not establish the suitability of the whole mountain journey.",
      },
      {
        question: "Where should I stay in Qilian County?",
        answer:
          "Compare an assessed Babao hotel for practical meals and pickup with a named town-edge or landscape property for a real setting advantage. Check quiet, heating, bathroom, dinner and actual room view. A seasonal camp needs a separate facilities and access assessment; a scenic label does not establish luxury service.",
      },
      {
        question: "Can Qilian be included between Xining and Zhangye?",
        answer:
          "It can be researched as a distinct mountain chapter when the actual road, season, sleeping profile and available nights fit. Count the complete driving stages and local day. Compare that experience with a dated rail connection and its transfers rather than assume every northwest itinerary should follow the same loop.",
      },
      {
        question: "Is Zhuo'er Mountain an easy visit?",
        answer:
          "Check the actual current visitor route, internal transport, stairs, slopes, standing and altitude. A car transfer or a photograph of a terrace does not establish step-free access. Agree a shorter worthwhile option and the return pickup before choosing the visit for someone with mobility or health needs.",
      },
      {
        question: "Does visiting Qilian include Menyuan's yellow flowers?",
        answer:
          "Not automatically. Menyuan is a separate location and seasonal route choice, with rapeseed flowering often researched around July. The actual year's conditions and road sequence matter. A Qilian hotel booking or a summer date does not guarantee peak color or the photographed mountain backdrop.",
      },
      {
        question: "Can I ride horses or walk anywhere on the grassland?",
        answer:
          "No unrestricted access should be assumed. Use permitted visitor routes and respect working pasture, livestock and protected land. Any riding needs an appropriate actual provider, equipment, guest suitability and current conditions assessed. A private guide or driver does not authorize entry to every field.",
      },
    ],
    culturalStory: {
      title: "Understand a mountain landscape through its particular communities",
      paragraphs: [
        "Arou Monastery and the surrounding pastoral landscape offer different ways to understand the county. The monastery deserves an explanation of its actual religious setting, buildings and visitor route rather than generic temple commentary. Pasture also has present-day owners, users and ecological responsibilities. Good interpretation connects a specific place to its history and current life without treating Tibetan, Hui and other regional communities as one decorative background.",
        "Public visitor access does not imply entry to worship, homes or working land. Ask before portraits, follow instructions inside religious spaces and avoid interrupting practice. A willing host or specialist conversation must be separately arranged. A premium cultural visit can remain modest in access while being rich in explanation; it does not require a promise of ceremonies or exclusive encounters that the provider cannot substantiate.",
      ],
    },
    foodStory: {
      title: "Make meals and rest reliable across the mountain days",
      paragraphs: [
        "Agree a proper lunch on substantial road days and dinner at the actual hotel or a suitable town restaurant. Noodles, a lamb preparation, vegetables, rice or other dishes may offer useful choices where available; ask the kitchen about the particular preparation instead of assuming one standard plateau menu. A simple warm meal at the right time can be more valuable than another viewpoint followed by a late uncertain dinner. Rural accommodation should confirm breakfast and any early departure food in advance.",
        "Clarify wheat, dairy, meat stock, sauces, nuts and shared preparation where relevant. Regional yogurt is not automatically made from yak milk, and a vegetable dish may contain animal ingredients. Halal, vegetarian or serious allergy requirements need a specific venue and confirmed kitchen capacity, not an inference from the region's communities. Tea and food are part of comfort and hospitality, not treatments or guarantees against altitude illness.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / after the separately planned road stage",
        title: "Reach the real Babao-area base",
        description:
          "Allow the complete gateway or previous-hotel journey, meals, higher road sections and current operating conditions. Keep the evening modest and check the actual room. A short landscape stop can fit when the day genuinely allows it, rather than becoming an essential promise tied to arrival time.",
      },
      {
        day: "Full day 1 / a focused local day",
        title: "Pair a suitable landscape visit with a complementary interest",
        description:
          "Use the assessed Zhuo'er route when conditions and guest needs support it. Add Arou or another selected local subject only when time, walking and actual access work. Include lunch, seated breaks and a worthwhile shorter alternative rather than require every viewpoint.",
      },
      {
        day: "Full day 2 / for a three-night stay",
        title: "Choose a distinct subject and allow weather flexibility",
        description:
          "Research a separate cultural, landscape or appropriate walking interest, changing the order when conditions suggest it. A camp, horse ride, private host or Menyuan excursion is not a default inclusion. Keep the experience worthwhile without clear peaks or peak seasonal color.",
      },
      {
        day: "Departure / a separate full onward journey",
        title: "Continue to the actual next base",
        description:
          "Allow the whole road or confirmed road-and-rail connection with the sleeping profile and guest needs reviewed. This local outline is illustrative, not a published package, medical ascent plan or guarantee of rooms, weather, site operation or access beyond public routes.",
      },
    ],
  },
};
