import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/kangding.svg",
  alt: "Kangding planning schematic distinguishing the valley city, higher scenic visits and a separately assessed western Sichuan route; original diagram, not a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const kangdingGuide: ExpandedDestination = {
  id: "kangding",
  name: "Kangding",
  region: "southwest",
  kicker: "A valley city and a carefully chosen highland chapter",
  description:
    "Plan Kangding with valley-city and Xinduqiao hotel choices, Mugecuo walking and altitude context, and a realistic route toward Danba or back to Chengdu.",
  stay: "2–3 nights for a selective city-and-landscape chapter",
  bestFor: "Eastern Tibetan cultural context, mountain scenery and thoughtful road travel",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["danba", "mount-siguniang", "chengdu", "litang"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Kangding Travel Guide: Altitude, Mugecuo & Where to Stay",
    seoTitle: "Kangding Travel Guide: Altitude, Mugecuo & Hotels",
    seoDescription:
      "Plan Kangding with valley-city vs Xinduqiao stays, Mugecuo walking, Tagong context, sleeping elevations and realistic western Sichuan road connections.",
    answer:
      "Kangding (康定), historically known in English as Tatsienlu, is a county-level city and the seat of Garzê / Ganzi Tibetan Autonomous Prefecture in western Sichuan. Its valley urban center is roughly 2,500–2,600 meters above sea level, while Mugecuo scenic visits and stays around Xinduqiao or Tagong can be substantially higher. These are different routes and sleeping decisions within a broad destination, not one compact town walk. Choose two or three nights for a selective chapter, with the full road and altitude profile assessed separately. Kangding is outside the Tibet Autonomous Region; that distinction does not establish unrestricted access to every site or make a highland trip suitable for every traveler.",
    stayAnswer:
      "Two nights can give one useful day in the valley city or a selected landscape outing, depending on the actual arrival and departure. Three nights allow a second subject and a less pressured rhythm. Neither number guarantees acclimatization. Separate city nights from higher Xinduqiao or Tagong stays, and account for the highest daytime point as well as each hotel's sleeping elevation. A substantial Chengdu transfer is a travel day with selective stops, not an extra full sightseeing day. Add nights when they improve the actual route, comfort and interest rather than use them to justify a longer high-altitude checklist.",
    hotelAnswer:
      "Compare a named valley-city hotel for meals, urban services and its actual sleeping elevation with a Xinduqiao-area property for a different landscape stay and higher overnight. A Tagong-area room creates another altitude and road decision. Obtain the exact address and elevation rather than treat all Kangding accommodation alike. Check heating, hot water, bedding, bathroom, lift or stairs, luggage approach, food and nighttime noise. A mountain view is a booked room-category question. Any advertised oxygen equipment needs a clear specification, but it does not make an unsuitable ascent safe or replace an appropriate medical and descent plan.",
    sightseeingQuestion: "Should you choose Kangding city, Mugecuo or Xinduqiao and Tagong?",
    sightseeingAnswer:
      "The valley city can provide a focused introduction through selected public streets, regional food and an appropriately visited religious site. Mugecuo (木格措), also written Muge Co, is a separate higher scenic-area journey with its own transport, paths and operating conditions. Xinduqiao is a broader town-and-landscape setting often chosen for a rural stay or photography; it is not a single viewpoint with guaranteed light. Tagong / Lhagang adds another highland town and religious setting with separate roads, access and conduct. Choose a subject and a suitable elevation profile rather than assume all four belong in one easy day.",
    visitorResources: [
      {
        label: "Kangding municipal government",
        href: "https://www.kangding.gov.cn/",
        scope:
          "City context and public notices, mainly in Chinese. Confirm actual routes, sites, scenic transport and accommodation with the relevant operators. General city information does not establish a hotel's precise elevation, a dated road condition or private access to religious spaces.",
      },
      {
        label: "Garzê Tibetan Autonomous Prefecture government",
        href: "https://www.gzz.gov.cn/",
        scope:
          "Prefecture-wide background and notices. Garzê / Ganzi contains widely separated destinations and elevations. Confirm the proposed visitor-specific route, property and current local conditions rather than infer unrestricted access from a broad regional description.",
      },
      {
        label: "CDC Yellow Book: high-altitude travel and altitude illness",
        href: "https://www.cdc.gov/yellow-book/hcp/travel-air-sea/high-altitude-travel-and-altitude-illness.html",
        scope:
          "General medical reference about ascent and altitude illness. It does not assess an individual's fitness, prescribe a personal plan or certify this itinerary. Review the actual sleeping and daytime elevations with an appropriate clinician before committing to a highland route.",
      },
    ],
    serviceScope:
      "A proposal should list each overnight address and sleeping elevation, the full road sequence and high points, guide language, meals, admissions and intended walks. For Mugecuo, identify current internal transport, the actual route and remaining effort. Religious visits follow current public access, worship and photography rules; a private guide cannot arrange ceremonies or closed interiors by implication. Cultural hosts, photography specialists, riding or other outdoor activities need specific providers and consent. Confirm arrangements for the actual visitors, communication and what happens if altitude symptoms, weather or roads require changing the plan. Do not promise that hotel oxygen, a driver or a fixed number of nights removes altitude risk.",
    routeAdvice:
      "Begin with the whole western Sichuan brief: valley-city interest, a particular scenic route or a higher rural stay. Compare a return to Chengdu with a separately paced Danba chapter, and assess any Mount Siguniang connection as another mountain journey with its own passes and sleeping elevations. Do not make a circular route mandatory simply because the names fit on a map. No matching published Kangding product is recommended here. Request a tailored plan with dates, prior altitude experience, walking needs, room priorities and maximum comfortable driving. A clinician's advice should inform individual suitability; an existing Chengdu tour does not include Kangding rooms or mountain services by default.",
    practicalPlanning: {
      timing:
        "Keep the arrival day modest and compare real road conditions, driver hours, meals and final check-in. Choose one principal interest per full day and allow enough time for the journey and remaining walking. A pass photograph, Mugecuo outing and highland sunset should not automatically be attached to the same transfer day. Keep weather-sensitive scenery flexible and do not promise mountain visibility. The itinerary must be able to change if the traveler is unwell rather than continue upward to protect prepaid hotel moves.",
      walking:
        "Valley-city walks can include slopes, steps, traffic and uneven paving. Scenic paths at Mugecuo or highland viewpoints add elevation, weather exposure and different physical effort. A vehicle or scenic shuttle does not remove the remaining walking or physiological altitude load. Name actual distances, ascent, resting places, toilets and pickup, with a genuinely shorter option. A horse ride is not a substitute for mobility assessment. Guests should discuss suitability and the actual ascent profile with a clinician, not judge the trip only by the length of a walk.",
      cost: "Compare the exact room and sleeping elevation, heating, hot water, meals, vehicle, guide language and daily service hours. Specify scenic entry, internal transport and any separate host or specialist. A point-to-point transfer and a multi-day mountain circuit have different road and accommodation requirements. Establish the response and cost basis for route changes before booking. A premium should buy suitable rooms, interpretation, a workable pace and transparent logistics, not a guarantee of acclimatization, clear mountains or exclusive cultural access.",
    },
    attractions: [
      "A selected Kangding valley-city walk with the town's trading and cultural context explained",
      "An appropriately visited public religious site, with current access and conduct respected",
      "Mugecuo / 木格措 through a selected scenic route with current internal transport and effort assessed",
      "Xinduqiao / 新都桥 as a different highland landscape and accommodation decision",
      "Tagong / Lhagang / 塔公 as a separate town, religious and landscape chapter",
      "A legal public viewpoint on the agreed road route, only when conditions and timing permit",
      "Danba or Mount Siguniang as distinct onward stays with independently reviewed elevations",
    ],
    stays: [
      {
        label: "2 nights: one focused chapter",
        advice:
          "Choose a valley-city subject or a selected excursion with actual arrival and departure hours. A late arrival and early onward climb provide little useful local time. Keep the route flexible and do not present this duration as proof of acclimatization.",
      },
      {
        label: "3 nights: a distinct second interest and less rush",
        advice:
          "Add another coherent cultural or landscape subject if the elevation profile and individual circumstances support it. One suitable valley base may be enough. A higher overnight is a separate decision rather than an automatic reward for spending the first night in town.",
      },
      {
        label: "Additional highland nights: a separately assessed stay",
        advice:
          "Choose Xinduqiao or Tagong only when the specific setting, room and whole ascent plan suit. Verify daily and sleeping elevations and the complete onward road. More nights can improve pace without guaranteeing safety; avoid adding distant destinations solely to complete a regional loop.",
      },
    ],
    hotelAreas: [
      {
        name: "Kangding valley city / urban services and a particular elevation",
        advice:
          "Check the hotel's exact location and elevation, quiet, heating, bathroom, lift, pickup and meals. A central address can improve dining while bringing traffic or evening noise. A valley room is lower than many regional scenic visits but does not establish that the whole trip is low altitude.",
      },
      {
        name: "Xinduqiao area / a higher landscape-led stay",
        advice:
          "Compare the real property and sleeping elevation with daily scenic roads, dinner and morning effort. Town-center and rural addresses can offer different views and services. Verify room warmth, hot water, bedding and any advertised facilities rather than assume every photography-hotel label means a quiet luxury retreat.",
      },
      {
        name: "Tagong area / a separate highland cultural setting",
        advice:
          "Choose only for the actual local interest and a suitable whole-route elevation profile. Confirm access, the named room, heating, meals, stairs and road connection. Monastery proximity is not permission for private religious access, and a comfortable lodge cannot remove the demands of sleeping high.",
      },
    ],
    tradeoffs: [
      {
        title: "Kangding is not one elevation",
        advice:
          "The valley center is roughly 2,500–2,600 meters, while Xinduqiao is commonly around 3,400–3,500 meters and Tagong around 3,700 meters; actual properties and routes vary. Mugecuo visits can also reach well above the city. These approximate figures are orientation, not a personal ascent plan. Request precise sleeping elevations and high points, and consider the route before choosing the most attractive hotel photograph.",
      },
      {
        title: "A high airport is different from arriving in the valley",
        advice:
          "Kangding airport is around 4,300 meters above sea level, substantially higher than the valley city. A flight can create rapid exposure before any road descent. Compare actual dated operation, arrival elevation and the full hotel journey with a road approach; a shorter schedule does not necessarily make the physical transition easier. Airport oxygen or a private car should not be treated as a substitute for individual medical advice.",
      },
      {
        title: "Mugecuo is a selected route, not an easy city lake",
        advice:
          "Confirm current scenic transport, open paths, the actual lake or other points intended, weather and remaining walking. Do not infer a flat or short visit from a water photograph. A private city transfer does not override internal transport rules or make every viewpoint accessible. A shorter day can be worthwhile when it protects enjoyment and leaves room to adjust.",
      },
      {
        title: "Xinduqiao's reputation does not guarantee light or a private scene",
        advice:
          "A photography-led stay needs an actual season, legal viewpoints, realistic timing and a suitable guide. Mountain visibility, autumn colors and empty roads cannot be guaranteed. Companions may prefer a gentle walk and a comfortable afternoon to repeated waits for light. Define which purpose leads the day before committing to dawn starts and late finishes.",
      },
      {
        title: "Religious life is not a scheduled performance",
        advice:
          "A public visit can explain visible architecture and practice while following local instructions. Ceremonies, personal meetings, photography and entry into particular spaces require their own conditions. Ask before photographing people and do not promise a private ritual from a monastery name. A staged commercial program or shop visit should be described as such.",
      },
      {
        title: "Road mileage hides passes and daily strain",
        advice:
          "Assess actual road condition, weather, high points, driver hours, stops and arrival meals. A tunnel or improved road does not establish that every old pass route is necessary or that a long circuit is effortless. Choose the currently appropriate route instead of adding a high viewpoint just to reproduce a classic photograph. Protect a manageable next day after substantial travel.",
      },
      {
        title: "Oxygen facilities and a high budget are not ascent guarantees",
        advice:
          "Ask what any advertised equipment actually provides and how a changed route would work. Fitness, a private vehicle or a particular room cannot guarantee freedom from altitude illness. Symptoms require a real response rather than continuing higher for a booked activity. General high-altitude guidance and individual clinical advice should inform the plan before booking, including when a lower-elevation trip is a better choice.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "litang",
        advice:
          "Litang adds a distinct monastery and Renkang cultural chapter, with the town around 4,000 meters and some road high points above that. Review the whole route and every sleeping base rather than assume a Kangding stay makes the onward ascent suitable. Give Litang useful time or choose an alternative; it is not a compulsory transit night toward Yading.",
      },
      {
        slug: "danba",
        advice:
          "Danba adds selected Gyalrong Tibetan village architecture and tower-history interests with different valley and hillside stays. Review the exact road and whole altitude profile rather than assume a lower valley erases exposure on connecting roads. Give the village chapter useful days and choose an actual comfortable room.",
      },
      {
        slug: "mount-siguniang",
        advice:
          "Mount Siguniang adds distinct valley choices and walking demands with its own highland base and mountain approach. It is not another short Kangding outing. Assess the entire sequence, sleeping elevations and passes before combining the destinations, and omit the loop if it compromises pace or suitability.",
      },
      {
        slug: "chengdu",
        advice:
          "Chengdu provides a different lower-elevation city chapter with food, collections and selected panda visits. Compare the real road or dated flight plan and complete transfers. Existing Chengdu sightseeing products do not include Kangding, highland rooms or regional guiding simply because the city is a common gateway.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring, summer and autumn offer different landscape interests, but mountain weather can shift quickly and high areas can be cold in any season. Summer rain may affect roads and visibility. Autumn color depends on location and conditions, with frost or snow possible before a guest expects winter. Winter requires a separately reviewed route, suitable transport and operating accommodation. A season label does not guarantee open paths, dry passes or visible mountains. Choose by the actual local interest and a flexible road-and-elevation plan.",
    orientation:
      "Kangding is a county-level city in Garzê / Ganzi Tibetan Autonomous Prefecture, western Sichuan, and the prefectural seat. The valley urban center, Mugecuo scenic area, Xinduqiao and Tagong / Lhagang are different places and elevations. The airport is considerably higher than the valley city. Historical sources may use Tatsienlu for Kangding. The region is outside the Tibet Autonomous Region, but actual visitor-specific accommodation, roads, religious spaces and scenic access still need confirmation. Use exact Chinese addresses and the full elevation sequence in a written proposal.",
    experiences: [
      "Understand a selected valley-city subject through its trading and cultural context",
      "Choose a mountain or lake visit for its real route, effort and conditions",
      "Enjoy a comfortable stay within a whole western Sichuan plan that can adapt",
    ],
    planningNotes: [
      "List each hotel's sleeping elevation and the highest daytime or road exposure",
      "Separate valley-city time, Mugecuo and higher Xinduqiao or Tagong stays",
      "Choose manageable driving and confirmed local access before attaching a regional loop",
    ],
    arrival:
      "Compare the actual road approach from Chengdu with any dated flight using the full gateway and hotel address. Kangding airport is a high-elevation arrival, not arrival in the lower valley center. Allow baggage, the road descent or onward transfer and a modest first evening. A long road day should protect meals, driver hours and sleep rather than end with a compulsory high viewpoint. Confirm current transport and the traveler-specific route; do not infer an operating service or easy ascent from a map connection.",
    gettingAround:
      "Use a suitable vehicle with agreed daily hours, seat belts, luggage capacity, meals and rest stops. Define whether driving and guiding are separate roles and who provides interpretation in the required language. Scenic areas and religious sites have their own transport and access rules. No off-road drive, drone use or private-land access is implied by a mountain itinerary. Confirm communication and response arrangements for remote stretches, with a practical option to change or shorten the trip.",
    stayStrategy:
      "Begin with the whole elevation profile, then choose rooms. A valley-city base and a higher rural property offer different experiences and physiological demands, even when both are advertised as Kangding. Review warmth, hot water, quiet, stairs, dining and actual sleep elevation. Avoid nightly moves for their own sake. An appealing photograph should not override the route assessment, and a lower-elevation alternative should remain a real planning choice when circumstances change.",
    firstTimerNote:
      "Choose Kangding because its cultural setting and a specific landscape interest appeal to you, not simply because it appears on a western Sichuan checklist. Decide what you want to understand, how much driving is comfortable and what room facilities matter. Then review the entire ascent and overnight pattern. A focused city-and-landscape chapter can be more rewarding than a large circuit that leaves little time to rest or adapt.",
    faqs: [
      {
        question: "Is Kangding worth visiting from Chengdu?",
        answer:
          "Yes when its valley-city cultural context and a selected mountain landscape interest justify a separate stay. It is a substantial regional journey, not an ordinary Chengdu city excursion. Compare useful days, driving, accommodation and the entire altitude profile before choosing it.",
      },
      {
        question: "How high is Kangding, and are all hotels at the same elevation?",
        answer:
          "The valley center is roughly 2,500–2,600 meters, while Xinduqiao and Tagong stays can be substantially higher. Actual properties vary. Request exact sleeping elevations and daytime high points; a Kangding label or valley night does not establish that the entire route is low altitude or suitable for you.",
      },
      {
        question: "How many nights should I spend in Kangding?",
        answer:
          "Two nights can give one selected day and three allow a distinct second interest with less rush. The full arrival and departure determine useful time. No fixed night count guarantees acclimatization, and higher rural stays need their own assessment within the complete route.",
      },
      {
        question: "Should I stay in Kangding city or Xinduqiao?",
        answer:
          "Choose the valley city for its actual services and elevation or Xinduqiao for a different higher landscape stay when the whole plan suits. Compare precise room location, sleep elevation, heating, hot water, meals, noise and daily roads. Do not choose only by a mountain-view photograph or luxury label.",
      },
      {
        question: "Is Mugecuo a short, easy visit from Kangding?",
        answer:
          "It is a separate higher scenic-area journey. Check the actual entrance, current internal transport, intended paths, remaining steps and weather. A vehicle does not remove altitude exposure or make every route suitable for limited mobility.",
      },
      {
        question: "Is flying to Kangding easier than driving?",
        answer:
          "A flight may shorten scheduled travel but arrives at an airport around 4,300 meters, considerably above the valley city. Compare actual service, rapid exposure and the full onward road journey. Individual medical advice and the whole ascent plan matter; a short ticket duration alone does not establish an easier physical transition.",
      },
      {
        question: "Is Kangding in the Tibet Autonomous Region?",
        answer:
          "No. It is in Garzê / Ganzi Tibetan Autonomous Prefecture in Sichuan. That administrative distinction does not prove unrestricted access to every road, religious space or scenic site. Confirm the actual route and accommodation for the named travelers and dates.",
      },
      {
        question: "Can I combine Kangding, Danba and Mount Siguniang?",
        answer:
          "They can be considered as separate chapters when the full roads, useful nights and elevation profile suit. Each adds different walking and access decisions. A circular route is optional, and a smaller itinerary may provide better rest and local time than completing every named destination.",
      },
      {
        question: "Is a published Kangding private tour recommended here?",
        answer:
          "No matching published product is recommended. Request a tailored plan with dates, gateways, walking needs, room priorities and maximum comfortable driving. Ask for exact sleeping elevations, daytime high points, included services and the practical response if the route needs to change.",
      },
    ],
    culturalStory: {
      title: "A trading city is more than a mountain gateway",
      paragraphs: [
        "Kangding's history at the meeting of trading routes and cultural settings can provide a meaningful city subject before a scenic excursion. A guide should connect the particular street, building or documented account to the place guests see today, distinguishing historical sources from local storytelling and later change. The well-known song associated with Kangding can be part of that discussion without reducing the city to a romantic promotional image.",
        "The wider highland journey contains different religious spaces, settlements and livelihoods. Public access and a respectful explanation can be valuable without a private ceremony or household invitation. Ask permission for photographs and distinguish a willing host's particular perspective from a claim to represent a whole community. Good cultural interpretation depends on knowledge, consent and time for questions; it should never require residents to perform an identity for the itinerary.",
      ],
    },
    foodStory: {
      title: "Warm meals and clear ingredients support the journey",
      paragraphs: [
        "The actual town kitchen or rural property can offer a mixture of regional dishes, meat preparations, noodles and dairy-based foods. Choose a suitable seated meal and serving time rather than make every dinner a compulsory cultural banquet. A guide can explain a particular preparation and its context while leaving unfamiliar tastes optional. After a substantial road day, reliable dinner and breakfast arrangements can add more comfort than another late photo stop.",
        "Discuss meat stock, dairy, wheat, soy, nuts and shared equipment with the kitchen before leaving for a rural stay. Vegetarian requirements and serious allergies need advance preparation capacity and an alternative. Butter tea or other rich drinks should not be presented as a remedy for altitude illness. A hosted meal or cooking explanation requires consent and an agreed activity; a commercial restaurant with traditional decor is still a restaurant unless something further has actually been arranged.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Protect the full transfer and a modest evening",
        description:
          "Use the agreed gateway or road sequence and actual hotel elevation. Allow meals and rest rather than add a mandatory high scenic stop. The route should remain responsive to the traveler's condition and current roads.",
      },
      {
        day: "First full day",
        title: "Choose a coherent city or landscape subject",
        description:
          "Follow the individually appropriate plan, whether a selected valley-city introduction or a confirmed scenic route. Keep current access, remaining effort and weather explicit, with seated breaks and a realistic return. Do not promise every lake, monastery and viewpoint in one day.",
      },
      {
        day: "Optional second full day",
        title: "Deepen the stay without an automatic climb",
        description:
          "A third night can support another distinct interest or a slower day. Any higher overnight or Xinduqiao or Tagong chapter must follow the assessed whole-route plan, not a generic day-number rule. Confirm the room and actual provider for chosen experiences.",
      },
      {
        day: "Departure",
        title: "Continue only on a suitable, clearly described route",
        description:
          "Allow the complete onward road or dated flight arrangement, meals and the next sleeping elevation. This two-night outline with an optional third night is illustrative, not a published package, an individualized ascent prescription or a guarantee of acclimatization, mountain views or private cultural access.",
      },
    ],
  },
};
