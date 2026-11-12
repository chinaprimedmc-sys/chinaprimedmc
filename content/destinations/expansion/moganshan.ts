import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/moganshan.svg",
  alt: "Moganshan stay-planning diagram comparing the mountain scenic area, Yucun and surrounding village hotels; original schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const moganshanGuide: ExpandedDestination = {
  id: "moganshan",
  name: "Moganshan",
  region: "east",
  kicker: "Bamboo hills, villa history and a stay worth slowing down for",
  description:
    "Plan a considered Moganshan retreat with a clear choice between the historic mountain, village hotels and a countryside resort, plus practical advice on walking, weather and the complete transfer.",
  stay: "2–3 nights",
  bestFor: "Design-led countryside stays, bamboo walks and a quieter break from the city",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["huzhou", "hangzhou", "shanghai", "suzhou", "anji"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Moganshan Travel Guide: Where to Stay & How to Plan",
    seoTitle: "Moganshan Travel Guide: Where to Stay & How to Plan",
    seoDescription:
      "Compare Moganshan mountain, Yucun and village stays, with advice on two or three nights, bamboo walks, Deqing transfers and choosing Moganshan or Anji.",
    answer:
      "Moganshan (莫干山), also called Mount Mogan, is a mountain and countryside destination in Deqing County, Huzhou, Zhejiang. It suits travelers looking for bamboo-covered hills, historic summer-villa architecture and a well-chosen rural hotel between city visits. The ticketed mountain scenic area, Yucun at the foot of the hills and the surrounding village hotels are different places to base a stay. Choose the actual property and purpose first: walking and villa history, a comfortable resort break, or village surroundings. A hotel marketed as being in Moganshan may be outside the mountain scenic area and require a separate road journey to its sights.",
    stayAnswer:
      "Two nights give you one full day: enough for a selected mountain visit or a slower hotel-and-village day. Three nights provide two full days, a better balance if you want both sightseeing and time to enjoy the property. One night can work with a convenient arrival, but packing, check-in and the road journey may consume much of the break. If your aim is simply to see bamboo, a long detour and an expensive hotel may add less value than extending an existing Hangzhou stay.",
    hotelAnswer:
      "Choose inside the mountain scenic area for proximity to its villa landscape and walking, Yucun for a village-center base with nearby food and services, or a specific hotel in the surrounding countryside for its rooms, grounds and quieter setting. Laoling and Houwu are useful location names to investigate, not guarantees of the same atmosphere or access. Compare the exact address, road approach, restaurant, room heating or cooling, noise and walking from the door. For a premium stay, usable outdoor space, good sleep and a worthwhile rainy-day experience matter more than the word boutique.",
    sightseeingQuestion: "Should you choose Moganshan or Anji?",
    sightseeingAnswer:
      "Choose Moganshan when historic mountain villas and a particular village hotel or countryside resort are central to the trip. Consider Anji when a specific bamboo-landscape visit, rural property or activity there better fits your interests. Neither name guarantees solitude, a private forest or a luxury experience. Compare a named base and a realistic day plan in each place, including the complete road journey. Combining both on a short break can spend the time you wanted for rest on another transfer; choose one unless the second stay offers a clearly different experience.",
    visitorResources: [
      {
        label: "Deqing County government",
        href: "https://www.deqing.gov.cn/",
        scope:
          "County-level public information and administrative context. The portal is mainly in Chinese. Confirm current mountain visitor arrangements, local road notices and the precise hotel location through the relevant authority or operator; a county reference does not verify an individual property's facilities.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Compare the actual service to Deqing and the full road transfer to the property. Deqing and Deqing West are distinct stations; do not substitute one station name for another on a pickup instruction.",
      },
    ],
    serviceScope:
      "A tailored proposal can specify the actual hotel and room, station or airport pickup, selected mountain route, guide time and meals. Agree whether scenic admission, required local transport and any parking or vehicle arrangements are included. A cooking session, tea visit, cycling guide, spa treatment, pool or children's activity needs its own availability and terms. Private guiding does not establish access to occupied villas, hotel interiors or village homes. Share walking ability, children's ages, room preferences and your ideal balance of activities and downtime before choosing a property.",
    routeAdvice:
      "Use Moganshan as a deliberate countryside stay alongside Hangzhou or Shanghai, rather than a compulsory stop on every East China route. Suzhou adds classical gardens and a different architectural subject. Compare actual trains or a complete road transfer, preserving time at both ends. No matching published Moganshan itinerary is recommended here. Use the illustrative three-night outline to request a tailored stay, with named accommodation, a realistic walking route and a clear distinction between included services and optional experiences.",
    practicalPlanning: {
      timing:
        "For a three-night stay, keep one full day for a selected mountain route and the other for the property, a local walk or another genuine interest. Check how the scenic area handles your actual arrival point and any local transport before fixing the day. Avoid scheduling a long walk immediately before a train: descending, collecting luggage and reaching the correct station are separate tasks. Weekend or holiday traffic can change the value of a brief visit.",
      walking:
        "Bamboo paths, villa lanes and forest routes can involve steps, slopes, uneven surfaces and slippery stone after rain. Choose a named route with an agreed start, finish and pickup; a hotel advertising hiking does not identify the actual trail or its maintenance. For limited mobility, assess the room-to-restaurant route as well as the outing. A hillside view can come with a steep final approach, stairs and luggage handling even when the main road is accessible by car.",
      cost: "Compare the same room category, occupancy, bedding, meals and cancellation terms. Add station transfers, scenic admission, applicable local transport and any guide or activity fees. Confirm whether the pool is usable for your dates and whether a spa, children's session or bike is included. A villa rented as a whole and an individual room have different privacy and staffing arrangements. Spending more makes sense when it buys the actual setting, comfort and time you will use.",
    },
    attractions: [
      "Moganshan scenic area and its historic summer-villa landscape",
      "A selected route around Sword Pond / Jianchi, matched to steps and conditions",
      "Yucun / 庾村 for village-center orientation and a meal",
      "Laoling or Houwu countryside, on an agreed local route",
      "Bamboo woodland walks chosen for current access and walking ability",
      "A specific tea or local food interest when a suitable host is available",
    ],
    stays: [
      {
        label: "1 night: a tightly focused escape",
        advice:
          "Choose one property and one purpose. If arrival is late, use the hotel and leave sightseeing out. A mountain visit, long village walk and leisurely resort stay rarely fit meaningfully between check-in and the following day's departure. Compare whether the short stay justifies both road transfers.",
      },
      {
        label: "2 nights: one full day and a clear priority",
        advice:
          "Use the full day for either a selected scenic-area route with some hotel time, or a genuinely slow countryside day. Keep arrival and departure flexible. This works well when a particular property is the reason to come and you accept that not every nearby interest needs visiting.",
      },
      {
        label: "3 nights: mountain context and time to unwind",
        advice:
          "Two full days allow a mountain-and-villa outing and a separate day for a shorter walk, food interest or the hotel. Leave room for rain and the group's energy. Additional nights suit guests who enjoy the property itself; they do not require filling the itinerary with increasingly distant attractions.",
      },
    ],
    hotelAreas: [
      {
        name: "Inside the mountain scenic area",
        advice:
          "Consider for the historic villa atmosphere and access to selected mountain walks. Confirm the exact building, room condition, approach, luggage handling and any visitor or vehicle arrangements. Historic character does not establish modern soundproofing, step-free access, air conditioning or a view from every room. Check meal availability if you want an easy evening without another journey.",
      },
      {
        name: "Yucun and the lower village center",
        advice:
          "Useful when a walkable cluster of food and services matters more than a secluded hillside setting. Inspect the address and actual evening noise, especially near busy lanes or public gathering areas. Staying at the foot of the hills does not mean you can walk comfortably to every mountain attraction. Plan the scenic-area visit as a separate outing.",
      },
      {
        name: "Laoling, Houwu and surrounding countryside hotels",
        advice:
          "Choose the individual property for its outlook, grounds and room quality, with an honest account of the local village and approach road. Some stays are self-contained; others need a car for meals or a substantial drive for sightseeing. Ask whether the advertised walk starts at the hotel, who maintains it and where it ends. Nearby construction, shared spaces and road noise can matter more than a broad village label.",
      },
      {
        name: "Deqing town or a station-oriented base",
        advice:
          "A practical option when the rail schedule or city services dominate the visit. Compare the tradeoff clearly: easier onward travel may come at the cost of the countryside atmosphere you came for. A Deqing address alone does not describe a Moganshan retreat, and being near a station does not establish a short transfer to the selected mountain entrance.",
      },
    ],
    tradeoffs: [
      {
        title: "Distinguish the mountain visit from the countryside stay",
        advice:
          "The scenic area gives a selected introduction to villa history and mountain paths; a rural hotel gives a particular setting and daily rhythm. They can complement each other, but they are not interchangeable purchases. Ask where the property actually sits and what the mountain outing involves from there. An attractive room among bamboo may be a good reason to visit even if the ticketed sights are not your priority.",
      },
      {
        title: "Make a luxury or boutique label earn its place",
        advice:
          "Request the actual room category and layout, bed arrangement, bathroom, climate control, terrace privacy and access to shared facilities. A beautiful freestanding bath does not answer how the room feels on a damp evening. Confirm heating, ventilation, bedding and restaurant hours. If a pool is important, check its dates, temperature arrangements and access conditions rather than relying on summer photography. Whole-villa use, shared grounds and individually booked rooms offer different privacy.",
      },
      {
        title: "Choose a walk for its route rather than its photograph",
        advice:
          "Sword Pond and other named mountain interests can involve a different amount of descending and climbing from an easy village lane. Set a distance, gradient, surface and turnaround point that fit the group. A private guide can explain the landscape and help choose a sensible route, but does not remove steps or establish unrestricted access through woodland. Use open, agreed paths and adjust for rain or local restrictions.",
      },
      {
        title: "A quiet retreat needs a date and a room position",
        advice:
          "Weekend demand, holiday traffic, group bookings and nearby events can change the atmosphere. A weekday stay can be worth comparing, but quietness is never assured by a rural postcode. Ask about adjacent rooms, dining areas, outdoor music and current work near the property. For couples or light sleepers, a smaller room in a suitable location may be better than a larger category beside shared activity space.",
      },
      {
        title: "Use rainy weather to test the hotel choice",
        advice:
          "Imagine spending a wet afternoon indoors before booking. Is there comfortable seating beyond the bed, enough daylight, food available and something the group will enjoy without a drive? A spa or activity room counts only if it is available and suitable for your dates. Keep a shorter village outing as an option, and avoid turning a forest walk into a fixed obligation in poor conditions. The best fallback may be an unhurried lunch and a good room.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "huzhou",
        advice:
          "Huzhou city can add old-city lanes and a cultural visit, while the southern Taihu shore offers another kind of hotel stay. Neither is automatically needed before a Moganshan retreat. Compare Huzhou and Deqing gateways using actual dated services and the full road approach, and add a city or lake night only when it has its own purpose.",
      },
      {
        slug: "anji",
        advice:
          "Compare Anji for a particular countryside property, bamboo route or local tea interest. Choose one base for a short retreat, or give each stay a distinct purpose and enough nights. Anji's Yucun / 余村 is different from Moganshan's Yucun / 庾村; use the Chinese address and exact map pin when planning a visit or transfer.",
      },
      {
        slug: "hangzhou",
        advice:
          "Combine West Lake and Longjing tea-country interests with a separate countryside stay when both have enough time. Moganshan lies in Deqing County, not in Hangzhou's West Lake district. Compare the complete car journey with the actual rail service and both station transfers; rail time alone does not describe the connection.",
      },
      {
        slug: "shanghai",
        advice:
          "A Moganshan break can add bamboo hills and hotel downtime after Shanghai's architecture and city life. Choose a useful arrival time rather than a late check-in followed by an early departure. Compare a door-to-door road journey with the train plus the final countryside transfer, including luggage and weekend traffic.",
      },
      {
        slug: "suzhou",
        advice:
          "Suzhou's classical gardens provide a distinct cultural contrast to a rural hotel stay. Keep them as separate bases with a realistic transport day. Do not reduce Suzhou to a hurried garden stop merely to add another countryside night, or assume all lower-Yangtze destinations are equally convenient to link.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are often good starting points for walks and time outdoors, with layers and a flexible plan for rain. Summer brings lush growth but also humidity, rain and demand for pool-focused stays; hillside shade is not a promise of cool weather in every room. Winter can suit a quiet hotel break when heating, meals and indoor comfort are strong, but some outdoor facilities may not be useful. Check the actual dates against public holidays and the property's operation. Do not plan around a guaranteed bamboo-shoot meal, empty trail or a particular view in mist.",
    orientation:
      "Think in three layers: the mountain scenic area, the lower village center around Yucun, and the wider countryside where many hotels use the Moganshan name. The destination is in Deqing County within Huzhou, Zhejiang, rather than a district of Shanghai or Hangzhou. Your hotel address determines the arrival, local driving and daily walks. Yucun / 庾村 is also distinct from Yucun / 余村 in Anji: English spelling alone can conceal different Chinese names and locations. Send the Chinese address or an exact map pin when arranging a visit.",
    experiences: [
      "Explore a selected mountain route with summer-villa history and bamboo woodland explained in context",
      "Choose a countryside property for the actual room, outlook, meals and time to enjoy the setting",
      "Combine a short village walk and regional meal with a slower break between East China cities",
    ],
    planningNotes: [
      "Locate the hotel precisely: mountain scenic area, Yucun and countryside properties create different stays",
      "Confirm the exact Deqing station, road approach, luggage handling and any local visitor transport",
      "Compare room comfort, dining and a rainy-day plan before paying a premium for design or a pool photograph",
    ],
    arrival:
      "Deqing is a useful railway gateway to investigate; Deqing and Deqing West are different stations. Check the actual service, arrival time and full drive to the property before choosing a train. Hangzhou Xiaoshan Airport is another option when the onward road journey works; a Shanghai airport arrival requires its own much longer transfer assessment. Agree the ticketed station or terminal, vehicle, luggage and any child seat. A hotel described as near Moganshan can still be on a different approach road from the place you intend to visit.",
    gettingAround:
      "Use a planned road transfer for arrival and any outing that starts beyond comfortable walking distance. Agree the scenic-area arrival point and current local transport arrangements rather than assuming a private car can drive or wait anywhere. On a hotel day, a shorter local route can be preferable to keeping a driver and guide on standby. Cycling needs a suitable route, equipment and ability review; a road that looks scenic in a photograph may have gradients, traffic and limited space to stop.",
    stayStrategy:
      "Choose the experience before the hotel shortlist. For villa history and mountain walks, review a base inside the scenic area; for village-center convenience, look closely at Yucun; for a restorative stay, compare named countryside properties. Then check the exact room, stairs, heating or cooling, restaurant and shared spaces. Keep one base for two or three nights. Moving between nearby hotels consumes check-in time and is worthwhile only when the second setting offers something you will actually use.",
    firstTimerNote:
      "Moganshan works best when the accommodation and pace are part of the reason to come. It is less convincing as a compulsory mountain tick between Shanghai and Hangzhou. Choose one good walk and one meaningful cultural or food interest, then protect time to read, eat and enjoy the surroundings. If a guest prefers major monuments and full sightseeing days, another city or an extra day in Hangzhou may be the better fit.",
    faqs: [
      {
        question: "Where is Moganshan, and is it part of Hangzhou?",
        answer:
          "Moganshan, also called Mount Mogan, is in Deqing County, Huzhou, Zhejiang. It is not in Hangzhou's West Lake district. Hangzhou can be a useful connecting city, but the actual road transfer or train plus final drive must be planned to the specific hotel.",
      },
      {
        question: "How many nights do you need in Moganshan?",
        answer:
          "Two nights give one full day for a clear priority. Three nights give two full days, allowing a selected mountain outing and a separate slower hotel or village day. A one-night visit works best with convenient arrival and departure times and modest sightseeing expectations.",
      },
      {
        question: "Should I stay inside Moganshan scenic area or in a village hotel?",
        answer:
          "Choose inside the scenic area for the historic mountain setting and selected walks, a Yucun base for nearby services, or a named countryside hotel for its grounds and room experience. Check exact access, steps, meals, comfort and noise. A Moganshan hotel name does not establish that it is inside the ticketed area.",
      },
      {
        question: "Is Moganshan or Anji better for a luxury countryside break?",
        answer:
          "Moganshan suits an interest in historic villas and a particular village or resort stay. Anji may suit a specific bamboo-landscape route or property better. Compare the actual room, location, daily plan and complete transfer in each place. A destination label alone does not establish luxury, privacy or quietness.",
      },
      {
        question: "Are Yucun in Moganshan and Yucun in Anji the same place?",
        answer:
          "No. Moganshan's Yucun is 庾村, while the Anji village commonly written Yucun is 余村. Similar English spelling can lead to the wrong hotel or transfer. Use the Chinese place name, exact address or map pin and confirm the intended county before booking.",
      },
      {
        question: "Can I visit Moganshan as a day trip from Shanghai?",
        answer:
          "Assess the full return journey and the actual time left for your chosen route. A day trip can leave little time for the countryside stay that makes Moganshan appealing. Two or three nights are usually more convincing for a hotel-led retreat; a day visit needs a focused purpose and a realistic transport plan.",
      },
      {
        question: "Which train station should I use for Moganshan?",
        answer:
          "Compare the actual service to Deqing and the road transfer to the hotel. Deqing and Deqing West are separate stations, so use the full name printed on the ticket for pickup. Choose by the complete journey, including arrival time and final road access, rather than the shortest rail time alone.",
      },
      {
        question: "Is Moganshan suitable for travelers who cannot walk far?",
        answer:
          "It can suit a carefully chosen hotel stay with short outings, but mountain paths, villa lanes and some properties involve steps and slopes. Check the actual room-to-restaurant route and vehicle access as well as sightseeing. A scenic drive or hillside view does not establish step-free access.",
      },
      {
        question: "What should I check before booking a Moganshan boutique hotel?",
        answer:
          "Confirm the exact room, bedding, bathroom, climate control, terrace privacy, stairs, luggage handling, meals and current surroundings. Ask whether pools or activities are usable and included for your dates. Test the choice against a rainy afternoon indoors; design photographs alone do not describe the complete stay.",
      },
    ],
    culturalStory: {
      title: "Read the villa landscape as history, not a style label",
      paragraphs: [
        "Moganshan became known as a summer retreat in the late nineteenth and early twentieth centuries, and its mountain villas give the landscape a history beyond bamboo scenery. Their settings, materials and relationship to the hillside make an interesting subject for a selected walk. The houses reflect a changing resort culture and different periods of use; a present-day building may be restored, adapted or occupied. Good interpretation distinguishes those layers rather than describing every attractive villa as untouched history.",
        "A public lane, a visitor site and a hotel interior have different access. Choose the buildings and viewpoints that can be meaningfully discussed on the agreed route, respecting residents and occupied properties. Around the mountain, village life and regional food add another perspective to the resort story. A modest, well-explained encounter is enough; the value does not depend on promising private villa entry, a resident's home or an exclusive cultural host.",
      ],
    },
    foodStory: {
      title: "Make local food part of the stay, with the season in mind",
      paragraphs: [
        "Bamboo shoots are a useful starting point for the region's cooking, but fresh shoots, preserved shoots and dried preparations are different ingredients with different seasons and textures. Ask what is being served rather than treating every shoot dish as freshly harvested that morning. A meal can also introduce local vegetables, tofu and carefully chosen meat or freshwater fish dishes. A short menu explained well is more rewarding than ordering a long list of rural specialties without knowing the portions or preparation.",
        "For a remote hotel, confirm dinner hours, advance-order requirements and whether the restaurant serves guests throughout the stay. Check stocks, sauces, shared preparation and fish bones when planning for allergies, vegetarians or children. Tea can be a quiet part of the afternoon without turning into a compulsory purchase; tasting, a plantation visit and a hosted learning session require different arrangements. Clear food planning is part of countryside comfort, especially on a wet evening when another drive is unappealing.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the right property and leave the afternoon open",
        description:
          "Transfer from the named station or airport, accounting for the final road approach. Settle in, check the walking routes and confirm dinner. Take a short local stroll only if timing and conditions make it worthwhile; do not attach a fixed mountain circuit to a late arrival.",
      },
      {
        day: "Full day 1",
        title: "A selected mountain and villa route",
        description:
          "Use the agreed visitor access and local transport for a route matched to steps, weather and historical interest. Include a seated meal and return with time to enjoy the hotel. Sword Pond or another named route is a choice to assess, not an automatic addition regardless of mobility.",
      },
      {
        day: "Full day 2",
        title: "Enjoy the countryside without another checklist",
        description:
          "Choose a shorter village walk, a suitable food or tea interest, or simply time at the property. Check any hosted activity in advance and keep it optional. If rain changes the day, use the hotel's comfort and dining rather than forcing a forest outing.",
      },
      {
        day: "Departure",
        title: "Continue to the next city with the full journey allowed",
        description:
          "Leave room for luggage collection, the road transfer and the exact train or flight. Hangzhou, Shanghai or Suzhou can form a next chapter when the actual transport works. This three-night outline is illustrative, not a published product or a promise of included optional services.",
      },
    ],
  },
};
