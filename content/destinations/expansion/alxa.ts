import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/alxa.svg",
  alt: "Original Alxa planning schematic separating Tengger near Alxa Left Banner, Badain Jaran from Alxa Right Banner and a separate Ejina chapter; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const alxaGuide: ExpandedDestination = {
  id: "alxa",
  name: "Alxa",
  region: "north",
  kicker: "Choose the desert, then the route and the room",
  description:
    "Plan Alxa around a specific desert chapter: Tengger, Badain Jaran or a separate Ejina journey, with honest comparisons of roads, rooms and remote travel.",
  stay: "2–3 nights for one focused chapter; more for a wider route",
  bestFor: "Desert landscapes, patient photography and carefully assessed remote stays",
  interests: ["landscape", "heritage"],
  relatedDestinationIds: ["yinchuan", "zhongwei", "zhangye"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Alxa Travel Guide: Tengger, Badain Jaran & Desert Stays",
    seoTitle: "Alxa Guide: Desert Routes & Where to Stay",
    seoDescription:
      "Plan Alxa or Alashan: compare Tengger, Badain Jaran and a separate Ejina journey, town hotels, desert camps, 4WD comfort and full gateway transfers.",
    answer:
      "Alxa (阿拉善), also written Alashan, is a vast league in western Inner Mongolia, not a single city, desert hotel or compact scenic area. Its main planning divisions are Alxa Left Banner, Alxa Right Banner and Ejina Banner. A Tengger Desert chapter approached from the Left Banner side, a Badain Jaran journey associated with the Right Banner and an Ejina poplar-and-history trip are different holidays. Start with one main landscape, then choose the actual base and road. Two or three nights can suit a focused chapter when the gateways work; covering all three requires a much larger route. A luxury camp label does not establish a private bathroom, gentle transfer or quiet night.",
    stayAnswer:
      "Two nights give one complete local day between arrival and departure; three can add a slower day, another landscape purpose or more room for a remote transfer. Those are starting points for one chosen chapter, not an allocation for all Alxa. A Badain Jaran interior overnight has a different vehicle and room commitment from a town hotel with a selected desert visit. Ejina needs its own journey and useful nights. Work from the full gateway roads and the proposed experience before fixing the number of nights.",
    hotelAnswer:
      "Compare a dependable town hotel with the specific desert property, not the words camp, lodge or luxury. Bayanhot in Alxa Left Banner offers one type of town base; Badain Jaran Town in Alxa Right Banner serves a different desert approach. Dalai Hob in Ejina is another distant base. For a remote room, establish the final transfer, bathroom, bed, heating or cooling, electricity, hot water, meal service and communication. Check music, event groups and generator noise as carefully as the dune view. A town room can be the better high-comfort choice when the actual camp cannot meet the guests' needs.",
    sightseeingQuestion: "Should I choose Tengger, Badain Jaran or Ejina?",
    sightseeingAnswer:
      "Choose a specific Tengger route when a selected dune experience and a Left Banner or Ningxia-side gateway fit the wider trip. Choose Badain Jaran when its enormous dunes and desert lakes justify a dedicated journey, with the actual permitted route, 4WD exposure and accommodation assessed. Choose Ejina for its distinct poplar landscapes and historical interests, with seasonal timing and long-distance access planned separately. These are not three nearby stops to combine in one excursion. Zhongwei also reaches the Tengger Desert from Ningxia, but a Zhongwei lodge or product does not automatically provide an Alxa stay.",
    visitorResources: [
      {
        label: "Alxa League government",
        href: "https://www.als.gov.cn/",
        scope:
          "Regional background and dated notices, mainly in Chinese. Check the actual banner, public route, visitor operation, road, accommodation and responsible operator. A regional tourism description is not confirmation of an interior desert crossing, camp amenities or access for the proposed travelers.",
      },
      {
        label: "UNESCO World Heritage: China",
        href: "https://whc.unesco.org/en/statesparties/cn",
        scope:
          "Reference entry point for China's World Heritage properties, including the Badain Jaran Desert property. Inscription applies to the defined property; it does not certify every Alxa camp, authorize off-road travel or establish unrestricted access to lakes and dunes.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and exact station names, then the entire onward road. A station serving a neighboring region does not place guests at a desert camp. Compare the complete route rather than infer convenient access from a regional rail map.",
      },
    ],
    serviceScope:
      "A proposal should name the chosen banner, actual route and property, all gateway and final-approach transfers, guide language, meals and included activities. For sand travel, establish the authorized operator, suitable vehicle, seat belts, passenger capacity, luggage, communications, support and turn-back plan. A private road car is not automatically a desert vehicle. A cultural host, camel ride, astronomy session or photography specialist needs a separate confirmed arrangement. Private service does not permit closed routes, protected lake access, drones, wild camping or unrestricted dune driving.",
    routeAdvice:
      "Yinchuan can make sense as a gateway or cultural chapter for a particular Left Banner plan. Zhongwei offers an alternative Ningxia desert stay that may suit guests seeking a shorter, property-led experience. Zhangye can be considered for a separately planned Badain Jaran route with its complete roads. Do not connect every place simply because they share a desert theme. No matching published Alxa tour is recommended here. Share gateways, dates, tolerance for rough driving, bathroom and room requirements, walking needs and the main reason for visiting to develop a realistic tailored itinerary.",
    practicalPlanning: {
      timing:
        "Plan the gateway road, any vehicle change, luggage transfer and final camp approach before allocating sunset time. An interior desert outing should not compete with a tight flight or rail departure. Leave room for wind, road and operating changes, and agree what happens if the desert segment cannot run. For Ejina autumn travel, compare actual seasonal reports, crowds, property availability and change terms rather than book around a single fixed date for golden leaves.",
      walking:
        "Soft sand makes short distances tiring, while exposed dune climbs involve heat, wind and difficult footing. Choose a lower-effort viewpoint when appropriate and check how far the vehicle can legitimately go. Sand-driving motion is a separate consideration from walking ability: discuss pregnancy, back or neck conditions, motion sensitivity and other relevant needs with the operator and an appropriate clinician. A remote overnight also changes access to medical help, toilets and an early return.",
      cost: "Compare the full vehicle chain, driver and guide roles, actual room, meals, admissions, support and activities. A cheap gateway transfer may omit the expensive final approach. Check single occupancy, private versus shared desert vehicles, luggage limits and cancellation terms when weather changes the route. A premium should buy demonstrable comfort and coordination; it cannot guarantee stars, empty dunes, autumn color or access beyond current rules.",
    },
    attractions: [
      "A selected authorized Tengger Desert route with a clearly identified base",
      "Badain Jaran dunes and lake landscapes on an assessed public visitor route",
      "A named desert overnight whose room and approach genuinely suit the guests",
      "Bayanhot town time as part of a focused Alxa Left Banner chapter",
      "Ejina poplar landscapes as a separate seasonal journey",
      "An individually selected Ejina historical interest, such as Khara Khoto, under current visitor arrangements",
    ],
    stays: [
      {
        label: "2 nights / one main desert purpose",
        advice:
          "Use a suitable base and one complete day for the chosen route. This can be a strong introduction when the gateway and transfer are practical. It is not enough to cover the Left Banner, Right Banner and Ejina; check whether a remote overnight replaces the town night or adds another transfer.",
      },
      {
        label: "3 nights / more room for the chosen chapter",
        advice:
          "Allow a distinct additional interest, a slower stay or more comfortable separation of gateway and desert travel. Assess the actual property for a full day rather than assume every camp offers resort facilities. Additional nights create options but do not guarantee favorable light or clear skies.",
      },
      {
        label: "A wider Alxa journey / build from complete travel days",
        advice:
          "Treat a second banner or Ejina as another substantial chapter with its own base. Count roads, useful local days and the room standard at each stop before choosing a duration. A long list of desert names is not a substitute for a workable route and worthwhile experiences between transfers.",
      },
    ],
    hotelAreas: [
      {
        name: "Bayanhot / Alxa Left Banner town base",
        advice:
          "Compare exact rooms, meals and the road to the selected Tengger interest. Town services can be useful when comfort matters more than sleeping among dunes. A Bayanhot hotel does not establish an easy approach to every part of Tengger, Badain Jaran or Ejina.",
      },
      {
        name: "Badain Jaran Town / Alxa Right Banner approach",
        advice:
          "Consider a dependable town room and a defined desert visit when a remote camp is unsuitable. Clarify the route, vehicle change, return point and travel time with the actual operator. The town and the interior desert are different overnight and support arrangements.",
      },
      {
        name: "A named interior property / a separate comfort commitment",
        advice:
          "Request evidence of the booked room and facilities, including private or shared toilet, hot water, temperature control, power hours, food, noise and communication. Check the full approach and exit if a guest needs to return early. A tent exterior, attractive bed photograph or lake view does not establish complete comfort.",
      },
      {
        name: "Dalai Hob / an Ejina journey",
        advice:
          "Assess the actual room, dining and road to the specific poplar or historical visit. Autumn demand can change value and availability sharply. This is a separate distant chapter, not another hotel district for the same Tengger outing.",
      },
    ],
    tradeoffs: [
      {
        title: "Choose a landscape purpose before choosing an activity package",
        advice:
          "A short dune walk, quiet observation, a rough-driving excursion and a camp entertainment program produce different days. Ask where time is spent and what the setting actually offers. Guests seeking stillness may prefer a simple, well-positioned visit over a package dominated by vehicles, music and repeated activities.",
      },
      {
        title: "Badain Jaran's scale comes with a transport commitment",
        advice:
          "Large dunes and lakes can justify a dedicated route, but interior travel may involve substantial time in a specialized vehicle. Request the actual surface, duration, stops and return choices. Do not describe dune driving as a gentle private transfer or assume a panoramic photograph can be reached with no physical compromise.",
      },
      {
        title: "A high-comfort stay is more than a photogenic tent",
        advice:
          "Rank sleep, bathroom, temperature, food and approach before decorative details. Ask whether nearby camps, events or generators affect quiet and how the room works in wind. Guests who need reliable city-style facilities may be better served by a town hotel with a focused desert day; that is a considered choice, not a lesser itinerary.",
      },
      {
        title: "Ejina autumn is its own seasonal trip",
        advice:
          "Poplar color changes with the year, location and conditions, while peak periods can bring crowded visitor routes and costly rooms. Choose enough useful local time and a second reason to enjoy the area. Khara Khoto history and a poplar walk are distinct subjects, not interchangeable photo stops or a guarantee of golden leaves.",
      },
      {
        title: "World Heritage status is not an off-road permission",
        advice:
          "Badain Jaran's recognized dunes and lake systems deserve careful interpretation and protection. A listing does not authorize every crossing, shoreline stop or camp. Ask which visitor route is permitted and how the operator respects the landscape. Do not drive toward a lake or climb beyond an approved route simply because another traveler posted a photograph.",
      },
      {
        title: "A private camp booking does not make the desert exclusive",
        advice:
          "Clarify what is actually private: the vehicle, guide, dining arrangement, room or entire property. Public viewpoints and neighboring camps may remain shared. Quiet conditions, clear skies and a star-filled night are possibilities, not deliverable guarantees. Any astronomy session needs a confirmed knowledgeable host and equipment, not just the word stargazing.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "yinchuan",
        advice:
          "Yinchuan adds Ningxia history, regional collections and food, and can suit a particular Alxa Left Banner gateway plan. Confirm the actual cross-region road and chosen base. A Yinchuan hotel or published Ningxia itinerary does not automatically include an Alxa desert route, vehicle or camp.",
      },
      {
        slug: "zhongwei",
        advice:
          "Zhongwei offers another way to experience the Tengger edge from Ningxia, often considered for a shorter property-led desert chapter. Compare it with the specific Alxa proposal rather than add both automatically. The existing Zhongwei product is not evidence of an included Alxa stay or Badain Jaran expedition.",
      },
      {
        slug: "zhangye",
        advice:
          "Zhangye can add geology and city history before or after a separately assessed Badain Jaran chapter. Compare the exact gateway road, useful local nights and current visitor operation. A Gansu arrival does not establish an easy day trip to every interior lake or permission for a desert crossing.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for comparing desert routes, but wind, temperature swings and the actual property's operating season matter more than a generic best-month label. Summer requires a realistic heat and shade plan; winter needs separate road, heating and service assessment. Ejina's autumn poplar interest has variable timing and concentrated demand. Desert light, stars, green lake margins and leaf color are different conditions, so choose the main purpose rather than promise all of them on one journey.",
    orientation:
      "Alxa League lies in western Inner Mongolia, China, and is also encountered as Alashan. It is separate from the country of Mongolia. Left Banner, Right Banner and Ejina are major route divisions, not adjacent resort zones. Bayanhot, Badain Jaran Town and Dalai Hob are different bases. Choose one main desert or seasonal landscape chapter for a short trip. Combining banners requires a longer route with separate bases and substantial road days. Use the full Chinese address and actual visitor entrance for each booking.",
    experiences: [
      "Read the relationship between dunes, wind-shaped landforms and the chosen desert setting",
      "Give a selected walk or viewpoint time without filling every hour with activities",
      "Choose a room and road plan that make the remoteness rewarding rather than exhausting",
    ],
    planningNotes: [
      "Choose one main banner and desert purpose before comparing gateways or nights",
      "Assess the real sand-driving exposure, final transfer, bathroom and temperature control",
      "Treat Ejina, specialized activities and any cultural host as separate confirmed arrangements",
    ],
    arrival:
      "Compare the actual dated flight, train or road gateway with the complete journey to the chosen base. Yinchuan may suit a Left Banner plan, while a Zhangye-side connection belongs to a different Badain Jaran assessment; Ejina has its own transport choices. Recheck operating services rather than infer availability from an airport or station name. Separate a normal road transfer from an authorized interior desert vehicle, including bags, pickup, support and exit. Avoid scheduling an essential sunset or remote outing immediately after an uncertain arrival.",
    gettingAround:
      "A road car, authorized desert 4WD, scenic-area vehicle and walking route are different services. Specify who operates each segment and whether it is private or shared. Ask about passenger capacity, seat belts, child suitability, breaks, toilet access, luggage and the ability to turn back. Rough-driving exposure cannot be assessed from kilometers alone. Use approved routes, follow current conservation rules and do not improvise a crossing or lakeside access. A camel ride, drone flight or long hike needs its own suitability and permission review.",
    stayStrategy:
      "Build the stay around the least flexible requirement: room comfort, motion tolerance, a particular landscape interest or a fixed onward connection. Then choose the base and one main day. For a remote overnight, assess dinner, temperature and sleep as carefully as the sunset. For a town base, allow the complete return road and do not describe it as waking among the dunes. Premium planning earns its value through honest comparisons, suitable providers and a clear alternative when weather changes the desert segment.",
    firstTimerNote:
      "Ask to see the complete journey from gateway to bed. A proposal that names only the desert can conceal a long paved road, a vehicle change, rough sand travel and a basic final room. Decide which of those you actively want and which you merely assumed were unavoidable. Then compare a simpler Tengger visit, a dedicated Badain Jaran journey or a separate Ejina chapter. The best choice is the one whose landscape, time and comfort fit your holiday.",
    faqs: [
      {
        question: "Are Alxa and Alashan the same place?",
        answer:
          "Both names are used for 阿拉善 in western Inner Mongolia, China. Alxa is a large league with Left Banner, Right Banner and Ejina divisions, not one city or hotel area. Use the specific banner, town and Chinese property address when arranging travel.",
      },
      {
        question: "Is Badain Jaran the same as the Tengger Desert?",
        answer:
          "No. They are distinct desert landscapes with different approaches and visitor arrangements. A Tengger visit from Alxa Left Banner or Zhongwei does not include Badain Jaran dunes and lakes. Choose the actual route, vehicle commitment and base before comparing nights.",
      },
      {
        question: "How many nights do I need in Alxa?",
        answer:
          "Two or three nights can suit one focused chapter when the gateways and roads work. A second banner or Ejina needs its own substantial travel and local time. Count useful full days and complete transfers rather than assume a short stay covers the whole league.",
      },
      {
        question: "Can I visit Badain Jaran without a rough desert drive?",
        answer:
          "Ask which specific public viewpoint or route can meet your needs. Interior lake and dune journeys can involve substantial specialized-vehicle travel, so their duration, motion and return options need review. If that is unsuitable, choose an honestly described lower-exposure alternative rather than promise the same interior experience.",
      },
      {
        question: "What should I check before booking a luxury desert camp in Alxa?",
        answer:
          "Check the actual room, private or shared bathroom, hot water, heating or cooling, power, meals, noise, communication and the full final approach. Clarify what is private and how an early exit works. Attractive tent photographs do not establish resort-level facilities.",
      },
      {
        question: "Can I combine Ejina poplars with Tengger in a short trip?",
        answer:
          "They belong to separate distant chapters, so first compare the full roads and useful local nights. Ejina leaf timing and peak demand need their own seasonal plan. Do not add it as a spare excursion from an Alxa Left Banner camp.",
      },
      {
        question: "Does your Zhongwei desert tour include Alxa?",
        answer:
          "An existing Zhongwei itinerary should be read by its stated locations and services. A Ningxia Tengger-edge stay does not automatically include Alxa, Badain Jaran or Ejina. No matching published Alxa tour is recommended on this page; a different route needs its own tailored proposal.",
      },
    ],
    culturalStory: {
      title: "Understand the place before borrowing a desert image",
      paragraphs: [
        "A desert is more than a blank background for an activity. Look at dune shape, the relationship between sand and surrounding terrain, and the way light changes the visible scale. In a permitted Badain Jaran visit, the dunes and lake systems invite a different explanation from a short Tengger-edge walk. A guide should develop the subject in front of you rather than repeat a generic story about the Silk Road at every stop.",
        "Alxa also has living Mongolian communities and distinct historical places. A yurt-shaped guest room, camel excursion or themed dinner is not automatically an encounter with household life. Ask who is hosting and what the visit is intended to explain. Ejina's Khara Khoto ruins introduce a separate historical subject, with interpretation of surviving evidence rather than a claim that the entire ancient city remains intact. Public heritage, working lives and personal invitations deserve different expectations.",
      ],
    },
    foodStory: {
      title: "Remote meals belong in the plan before departure",
      paragraphs: [
        "Town dining and an interior camp kitchen have different choices. Ask what is actually cooked, when dinner is served, whether lunch is prepared or carried, and what happens if the arrival changes. Lamb, noodles, breads or dairy may feature depending on the kitchen; a regional menu should not be assumed at every camp. A warm, well-timed meal and suitable breakfast are more valuable than a photogenic outdoor table that does not work in wind.",
        "Confirm wheat, dairy, meat stocks, sesame, nuts and shared preparation for the actual kitchen. A vegetable dish, a Mongolian theme or a northwest location does not establish vegetarian, halal or allergy provision. For strict needs, verify capacity and bring an agreed practical alternative before leaving the town services. Include drinking water, safe food storage, waste handling and the departure meal in the discussion rather than leave these to an improvised remote stop.",
      ],
    },
    itinerary: [
      {
        day: "Focused chapter / arrival",
        title: "Reach the chosen base without chasing the light",
        description:
          "Complete the full gateway road and any agreed vehicle change. Settle into the confirmed town room or assessed desert property, review meals and current conditions, and take a modest local look when time allows. The essential outing should not depend on a perfectly punctual arrival.",
      },
      {
        day: "Full local day",
        title: "Give one selected desert route its own time",
        description:
          "Follow the authorized route matched to the guests' motion and walking tolerance, with suitable stops, food and rest. A remote overnight, specialist photography or camel activity is included only when separately confirmed. Adjust to weather and operation without improvising access to closed dunes or lakes.",
      },
      {
        day: "Departure or a third night",
        title: "Protect the complete exit and onward connection",
        description:
          "Allow breakfast, bags, the actual desert exit and the full gateway road. Add a third night for a distinct interest or slower stay, not merely more activities. Ejina or another banner needs a new route assessment. This outline is illustrative, not a published package or guarantee of camps, vehicles, stars, leaf color or access.",
      },
    ],
  },
};
