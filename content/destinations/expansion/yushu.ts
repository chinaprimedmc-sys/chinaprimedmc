import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/yushu.svg",
  alt: "Original Yushu planning schematic distinguishing the Jiegu city base, selected religious sites and separately assessed prefecture routes; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const yushuGuide: ExpandedDestination = {
  id: "yushu",
  name: "Yushu",
  region: "northwest",
  kicker: "Tibetan religious life and a thoughtful stay on the high plateau",
  description:
    "Plan a focused Yushu city stay around Jiegu Monastery, the Gyanak Mani stone complex and suitable hotel comfort, with a modest arrival and separate wider routes.",
  stay: "3–4 city nights for a selective stay; not an acclimatization guarantee",
  bestFor: "Tibetan religious heritage, close observation and a carefully paced plateau journey",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["xining", "tongren-qinghai"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Yushu Travel Guide: Jiegu, Mani Stones & Stays",
    seoTitle: "Yushu Guide: Jiegu, Mani Stones & Stays",
    seoDescription:
      "Plan Yushu city in Qinghai: Jiegu Monastery, Gyanak Mani stones, Wencheng Temple, three- or four-night stays, hotel checks and a considered high-altitude arrival.",
    answer:
      "Yushu (玉树) can mean Yushu Tibetan Autonomous Prefecture or its county-level city in southern Qinghai. This guide focuses on the city base around Jiegu, also encountered as Jyekundo, and selected nearby religious heritage. The city is at roughly 3,700 meters, so a modest arrival and a suitable route profile matter as much as the sightseeing list. Jiegu Monastery, the Gyanak Mani stone complex at Xinzhai and Wencheng Temple offer different subjects: monastic life, devotional stone inscriptions and a place of religious memory. Test three or four city nights against the actual arrival and individual needs, leaving the first day light. Remote counties and source-region landscapes need a separate route, access assessment and overnight plan.",
    stayAnswer:
      "Three city nights provide two full days between arrival and departure; keep the arrival modest and make the subsequent program selective. Four can allow shorter outings, more rest or a distinct third interest when the guest and conditions support it. These numbers describe usable time, not a guarantee of acclimatization. A short stay with an intense schedule is a poor way to compensate for a substantial arrival. Count wider prefecture road stages separately and resist extending into remote areas solely because their names appear under Yushu on a map.",
    hotelAnswer:
      "Choose a specific Jiegu/Yushu city hotel for a dependable room, meals and straightforward pickup. Compare the actual bathroom, heating, hot water, bedding, quiet, lift and luggage access. A central address may improve dinner choices but bring traffic noise; a quieter location should still work for the full transfer and evening meal. Ask for details if oxygen equipment is advertised, including what is actually supplied and on what terms. It is not medical clearance. Confirm current check-in arrangements for the actual guests and avoid assuming an international luxury standard from a star rating.",
    sightseeingQuestion: "Should I visit Jiegu Monastery, the Mani stones or Wencheng Temple?",
    sightseeingAnswer:
      "Choose by the question you want to explore. Jiegu Monastery introduces a monastic setting, with the current public route, steps and open interiors checked. The Gyanak Mani complex at Xinzhai is particularly valuable for understanding carved devotional stones and the practice of circumambulation. Wencheng Temple adds a different religious-memory and landscape subject outside the central city. They are not interchangeable temple stops. Give each selected visit clear interpretation and room for rest rather than promise all three immediately after a high-altitude arrival. Public access does not guarantee a ceremony, monk interview or permission to photograph interiors.",
    visitorResources: [
      {
        label: "Qinghai provincial government",
        href: "https://www.qinghai.gov.cn/",
        scope:
          "Provincial background and dated notices, mainly in Chinese. Confirm the exact city or county, current traveler arrangements, roads, religious-site visitor routes and accommodation with the responsible local contacts. A regional description does not establish access throughout Yushu Prefecture.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services to a practical gateway if the wider itinerary uses rail. A train to Xining is not a direct rail arrival at Jiegu. Assess the remaining journey, overnight elevations and actual hotel before choosing between a flight-based or staged road approach.",
      },
    ],
    serviceScope:
      "A proposal should name the actual gateway, flight or road stages, overnight locations and elevations, booked room, guide language, selected public visits, meals and rest periods. Confirm current travel and check-in arrangements for the actual guests. Ask how the itinerary responds if the guest cannot continue comfortably, and seek qualified medical advice for individual altitude concerns before travel. Private guiding does not guarantee monastery interiors, ceremonies, religious participation, a monk meeting or unrestricted source-region travel. Specialist walks, wildlife trips, private hosts and remote extensions require their own verified arrangements.",
    routeAdvice:
      "Xining can offer a separate city and regional-history chapter before or after Yushu; compare current transport and the actual ascent profile rather than assume that a brief stop guarantees readiness for a higher stay. Tongren/Rebkong offers a different Regong art interest in northeastern Qinghai, not a local continuation of a Jiegu day. No matching published Yushu product is recommended here. For a tailored route, share dates, gateways, available nights, prior plateau experience, mobility needs and the religious or artistic subjects that matter most. Ask for a proposal explaining why each journey and overnight earns its place.",
    practicalPlanning: {
      timing:
        "Keep the arrival day light, with the full airport or road transfer, room and a simple meal before any optional short outing. Protect rest instead of committing to several sites on landing. For later days, select one main subject and assess the actual walking before adding another. Religious activity and site access have their own schedules; a private city guide cannot promise a ceremony. Keep a reasonable departure margin and the actual response to transport changes visible in the plan.",
      walking:
        "Jiegu's high elevation changes how ordinary walking can feel. Monastery visits may include uphill approaches, steps and standing; the Mani complex and temple route have their own surfaces and distances. Ask for route-specific details, seating, toilets, pickup and a shorter alternative. A vehicle cannot remove every approach or stair. Review individual concerns with a qualified clinician; hotel oxygen, previous fitness and a fixed number of nights do not establish that an itinerary is suitable for everyone.",
      cost: "Compare the actual room, complete transfers, guide and interpreter time, meals, admissions where applicable and the practical arrangements for changes. A named specialist should have relevant knowledge of the selected subject, not simply access to a shopping stop. Donations and purchases should remain voluntary and separate from ordinary guiding. A higher price should correspond to better pacing, interpretation, sleep and support rather than a promise of religious access or unverified luxury facilities.",
    },
    attractions: [
      "Jiegu Monastery, under the current public visitor arrangements",
      "Gyanak Mani / Jiana Mani stone complex at Xinzhai",
      "Wencheng Temple as a distinct, separately planned religious-memory visit",
      "A selected public Jiegu town walk with contemporary city context",
      "A suitable, lawfully accessible landscape stop when conditions and guest comfort support it",
    ],
    stays: [
      {
        label: "2 city nights / a very selective visit",
        advice:
          "Only one full day remains between arrival and departure. Assess whether this serves the actual arrival profile and guest rather than use it as a default fast itinerary. Keep one principal interest and leave out additional roads or strenuous approaches.",
      },
      {
        label: "3 city nights / two selective full days",
        advice:
          "A starting framework for a modest arrival and separately paced religious or stone-inscription interests. Review the actual walking and guest comfort each day. The booked duration is not proof of acclimatization or a reason to continue a demanding program regardless of conditions.",
      },
      {
        label: "4 city nights / shorter outings and a distinct additional interest",
        advice:
          "Can allow more rest, thoughtful interpretation or another checked subject without repeating similar visits. Additional time does not guarantee health, access or clear landscapes. A wider prefecture journey needs separate transport, room and eligibility planning.",
      },
    ],
    hotelAreas: [
      {
        name: "Jiegu / Yushu city services",
        advice:
          "Compare an exact central address for meals and pickup with the room's noise, bathroom, heating and lift. The booked category and reliable food matter more than a general hotel label. Clarify breakfast hours and the walk between the vehicle, reception and room.",
      },
      {
        name: "A quieter city-edge property / a specific comfort choice",
        advice:
          "Choose only when the actual room and service justify the location. Check heating, hot water, meal availability, luggage, access and every local road. A distant view of a monastery is not the same as an easy visit, and a quieter-looking photograph is not evidence of a restful night.",
      },
      {
        name: "Elsewhere in Yushu Prefecture / a separate road-stage stay",
        advice:
          "A room in another county is not an alternative city hotel for the same daily visits. Establish its own purpose, full road, overnight height, traveler arrangements and support. Do not assume a city booking confirms access or suitable services for a remote extension.",
      },
    ],
    tradeoffs: [
      {
        title: "Yushu city and Yushu Prefecture are different planning scales",
        advice:
          "A city stay can explain selected religious places and contemporary Jiegu life. Grassland, wildlife and source-region journeys require additional days and a route suited to the terrain and permitted access. Use exact destinations and Chinese addresses so a broad regional label cannot conceal an additional long road day or unassessed overnight.",
      },
      {
        title: "The Mani stones are devotional objects, not a photo prop",
        advice:
          "A mani stone carries a carved prayer, mantra or other devotional inscription. The value of the Xinzhai complex lies in understanding that practice, its setting and the people using it. Follow locally indicated circulation, keep clear of worshippers and ask before close portraits. Do not climb the piles, move stones or assume that permission for an exterior photograph includes religious interiors.",
      },
      {
        title: "Separate historical evidence from religious memory",
        advice:
          "Wencheng Temple is associated with traditions concerning Princess Wencheng. A thoughtful guide should identify the local account, explain the site's present religious meaning and distinguish tradition from documented historical evidence. A story's importance to worshippers does not require presenting every detail as established biography or every visible structure as unchanged since the original event.",
      },
      {
        title: "A monastery visit should have a clear subject",
        advice:
          "Ask what the guide will explain about the actual institution, its buildings, images and current use. An open public area, an available interior, a service and a private conversation are different arrangements. Choose a shorter, coherent explanation rather than collect religious buildings with little context, especially when the guest would benefit from rest.",
      },
      {
        title: "A horse-racing reputation is not a confirmed festival booking",
        advice:
          "Yushu is associated with equestrian gatherings, but dates, public programs and visitor arrangements need current confirmation. Do not anchor a trip to an old festival calendar or promise participation from a regional description. If an event is central to the holiday, specify the actual program, accommodation, transport and alternative before booking.",
      },
      {
        title: "A high-end trip must fit both the guest and available services",
        advice:
          "Quiet sleep, reliable heat and hot water, a manageable arrival and informed interpretation are tangible benefits. A plateau setting or oxygen label does not establish a resort standard or remove individual health concerns. Be willing to recommend a different Qinghai route if the actual rooms, elevation profile or transport burden do not fit the guest.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "xining",
        advice:
          "Xining adds regional collections, city life and a separate Kumbum Monastery decision. Check the actual flight or staged road connection and overnight profile. A stay in Qinghai's capital is worthwhile for its own subjects, but does not guarantee acclimatization for Yushu's higher city base.",
      },
      {
        slug: "tongren-qinghai",
        advice:
          "Tongren/Rebkong offers Regong thangka interpretation and a different monastery-and-workshop context. Give it its own useful time and complete transport. Shared Tibetan Buddhist interests do not make the two places neighboring stops or establish access to a particular artist or religious interior.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Research the warmer months as a starting point for town walking, then compare the exact date's temperature, rain, daylight, transport and current visitor arrangements. Nights can be cold even when the daytime plan feels mild. Winter changes heating, road and daylight considerations. A regional festival reputation does not establish an annual date or available visitor program. Choose dates for the main interests and the guest's needs rather than promise simultaneous clear landscapes, ceremonies and open interiors.",
    orientation:
      "The city base is around Jiegu in Yushu Tibetan Autonomous Prefecture, southern Qinghai. Jiegu is also encountered in English as Jyekundo; match the actual Chinese hotel and entrance addresses when planning transport. Jiegu Monastery, Xinzhai's Gyanak Mani stone complex and Wencheng Temple have different locations and approaches. The wider prefecture includes remote counties and landscapes beyond this guide's selected city focus. A city stay does not establish access to those routes or a continuation into the Tibet Autonomous Region.",
    experiences: [
      "Understand a monastery through its actual religious setting and current public route",
      "Read the meaning of carved devotional stones at the Gyanak Mani complex",
      "Explore local religious memory and contemporary city life at a considerate pace",
    ],
    planningNotes: [
      "Keep the arrival modest and review the actual overnight elevation and route profile",
      "Give each selected religious site its own subject, walking assessment and access check",
      "Separate the city stay from remote prefecture routes and unconfirmed festival programs",
    ],
    arrival:
      "Check current dated services to Yushu Batang Airport and the full transfer to the named hotel, including meals, bags and the first evening. A direct flight is a substantial altitude change, not evidence that a full sightseeing afternoon is appropriate. A staged road approach needs its own overnight heights, conditions and support assessment; long driving alone does not guarantee a suitable ascent. A train to Xining is only a gateway connection. Keep important visits away from uncertain arrival and review current travel arrangements for the actual guests before booking.",
    gettingAround:
      "Use a vehicle plan for the selected entrances, with realistic parking, walking approaches, pickup and rest. At a monastery or stone complex, the interesting part may begin after the vehicle stops. Confirm the exact route and a shorter alternative rather than assume access is level. A guide should identify public and private spaces, explain appropriate conduct and respect worship. Any remote countryside extension, specialist walk or wildlife interest requires its own assessment instead of an improvised drive after the city visits.",
    stayStrategy:
      "Test three or four city nights against the actual arrival, individual needs and selected interests. A dependable central hotel can simplify meals and changes to the day; a quieter edge property needs a strong room and practical transport. Check the booked category, heating, bathroom, hot water, lift and food before describing the stay as premium. Resolve serious dietary requirements and current guest arrangements in advance. Recommend fewer visits or a different route when that better serves the guest.",
    firstTimerNote:
      "Choose one question for each outing: how does this monastery function, what do these stones express, or how is this religious story understood here? That produces a more meaningful visit than trying to photograph every site in one day. Keep physical effort and private access separate from cultural interest: an excellent explanation does not require a strenuous climb or an unconfirmed invitation.",
    faqs: [
      {
        question: "Is Yushu the same as Jiegu or Jyekundo?",
        answer:
          "Yushu can refer to the prefecture or its county-level city. Jiegu, also encountered as Jyekundo, is the city-base reference used in this guide. The wider prefecture is much larger and its remote routes are not covered by a city hotel booking.",
      },
      {
        question: "How high is Yushu city?",
        answer:
          "The city is at roughly 3,700 meters. Check the actual hotel and route elevations and individual needs before booking. A modest arrival, qualified advice for relevant medical concerns and a suitable route matter; a fixed stay length or oxygen-equipped room does not guarantee acclimatization.",
      },
      {
        question: "How many nights should I spend in Yushu?",
        answer:
          "Test three city nights for two selective full days, or four for shorter outings and more rest. Keep arrival modest and assess the actual guest and route. These are time-planning options, not health guarantees; wider prefecture road stages require additional planning.",
      },
      {
        question: "What are the Gyanak Mani stones?",
        answer:
          "The Xinzhai complex is associated with carved devotional stones, also encountered under Jiana Mani terminology. A good visit explains inscriptions and devotional practice rather than treat the piles as a photo prop. Follow local instructions, avoid climbing or moving stones and respect worshippers.",
      },
      {
        question: "Is Wencheng Temple a separate visit from Jiegu Monastery?",
        answer:
          "Yes. They are different sites with distinct locations and subjects. Wencheng Temple is associated with local traditions concerning Princess Wencheng. Ask the guide to distinguish religious memory from documented historical evidence and check the actual approach and current access.",
      },
      {
        question: "Can I attend Yushu's horse-racing festival?",
        answer:
          "Only build around an event after the dated program and visitor arrangements are confirmed. A past calendar or general regional reputation does not guarantee the same event, access or accommodation for your dates. Agree transport and an alternative if the program changes.",
      },
      {
        question: "Can foreign travelers visit Yushu?",
        answer:
          "Confirm current arrangements for the actual passports, dates, hotels, sites and roads before booking. Do not use a city visit as evidence of access throughout the prefecture or to a Tibet continuation. This guide does not guarantee permissions or current operation.",
      },
      {
        question: "Which published Yushu tour is recommended here?",
        answer:
          "No matching published product is recommended. A tailored proposal should identify transport, overnight profile, room, guide, selected visits, meals and actual inclusions. The sample outline is not a package, festival booking or religious-access guarantee.",
      },
    ],
    culturalStory: {
      title: "Devotional stones and living institutions reward patient looking",
      paragraphs: [
        "Carved stones are more than a striking accumulation of objects. Their inscriptions and placement belong to devotional practice, and the way people move around them is part of the site's meaning. A guide should explain what can be identified in the actual setting, distinguish a prayer or mantra from decoration and allow visitors to observe without obstructing worship. There is no need to claim a precise stone count or a world-record status to make the place compelling. The relationship between individual acts and a shared sacred landscape is already a substantial subject.",
        "Yushu's religious places also sit within a contemporary city shaped by the 2010 earthquake and rebuilding. Interpretation should be clear about which buildings, materials and stories are historic, reconstructed or part of present use. That distinction does not diminish religious meaning. Nor should local traditions about a historical figure be flattened into either literal certainty or dismissal. Good guiding identifies the account and its source, respects practitioners and leaves room for careful questions about continuity and change.",
      ],
    },
    foodStory: {
      title: "A dependable meal belongs in the itinerary",
      paragraphs: [
        "Choose meals that fit the actual kitchen, appetite and day rather than treat a list of Tibetan foods as a compulsory tasting challenge. Tsampa is commonly associated with roasted barley flour; butter tea and yak-related dishes may appear on menus, but ingredients and preparations should be explained by the restaurant. Guests can try a small amount or choose another meal. A freshly prepared soup, staple and vegetables where available can be more welcome after travel than a large banquet followed by another outing.",
        "Discuss barley and wheat, dairy, meat stocks, nuts and shared preparation where relevant. A vegetable dish does not establish vegetarian or vegan cooking, and serious allergies need the kitchen's confirmed capacity and an alternative. Agree drinking water, breakfast timing and any food for a road day with the responsible provider. Alcohol should remain optional. A comfortable room and a sensible meal at the right time are practical parts of a thoughtful plateau stay, not incidental details to arrange after sightseeing.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / modest first day",
        title: "Reach the room and keep plans light",
        description:
          "Complete the actual gateway transfer, settle luggage and arrange a simple meal. Review how the guest is feeling and the next day's proposed effort. A brief optional local look is different from committing to several religious sites immediately after arrival.",
      },
      {
        day: "Full day 1 / one main cultural subject",
        title: "Let understanding set the pace",
        description:
          "Choose the Gyanak Mani complex or an appropriate Jiegu Monastery route according to interests, current access and guest comfort. Give the explanation time and keep rest and lunch visible. Another stop is optional, not required to make the day valuable.",
      },
      {
        day: "Full day 2 / a different selected interest",
        title: "Add a distinct perspective",
        description:
          "Consider the remaining religious subject or Wencheng Temple with its own full approach and interpretation. Keep historical evidence, local tradition and present practice distinct. A four-night stay can distribute these interests into shorter outings instead of adding a remote excursion.",
      },
      {
        day: "Departure / actual gateway or separately planned road stage",
        title: "Protect the onward journey",
        description:
          "Allow breakfast, bags and the complete transfer. Any wider prefecture or Tibet route is a separate assessment. This outline is illustrative, not a published package, medical clearance or guarantee of festivals, religious interiors, private hosts or current access.",
      },
    ],
  },
};
