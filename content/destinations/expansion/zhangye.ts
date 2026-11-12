import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/zhangye.svg",
  alt: "Zhangye planning diagram comparing a city hotel, accommodation near the colorful Danxia and a longer landscape stay; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const zhangyeGuide: ExpandedDestination = {
  id: "zhangye",
  name: "Zhangye",
  region: "northwest",
  kicker: "Colorful hills, sculpted rock & an oasis cultural pause",
  description:
    "Choose Zhangye's landscapes for their differences, compare a city base with a Danxia-area stay, and give the Hexi Corridor more depth than a single viewpoint stop.",
  stay: "2–3 nights",
  bestFor: "Geology, photography and a measured Gansu itinerary",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["qilian", "tianshui", "dunhuang", "xian", "jiayuguan", "xining"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Zhangye Travel Guide: Danxia, Hotels & Silk Road Trips",
    seoTitle: "Zhangye Travel Guide: Danxia & Where to Stay",
    seoDescription:
      "Compare Zhangye's colorful Danxia and Binggou, choose city or scenic-area hotels, and plan walking, photography and a realistic Gansu route to Dunhuang.",
    answer:
      "Zhangye is an oasis city in Gansu's Hexi Corridor, known internationally for the colorful hills often called the Rainbow Mountains. The colorful Danxia scenic area is outside the city, while the Giant Buddha Temple provides a different cultural interest in town. Nearby Binggou has a stronger emphasis on sculpted rock forms and is a separate visit, not another entrance to the same colorful viewpoint circuit. Choose which landscape matters to you before deciding how long to stay.",
    stayAnswer:
      "Two nights give one full day for a selected landscape visit with some city context if arrival and departure allow. Three nights provide a second full day for Binggou, another distinct interest or a slower photography schedule. One night can serve a very selective stop, but should not rely on an uncertain train arrival delivering ideal evening light. A longer stay needs a real additional subject rather than the assumption that every scenic area near Zhangye belongs in the same day.",
    hotelAnswer:
      "Choose a Zhangye city hotel for a wider range of meals, services and convenient access to the Giant Buddha Temple, accepting the separate road trip to the Danxia area. Stay nearer the colorful Danxia when the exact property and early or late touring logistics justify it; establish which entrance it actually serves. A more remote landscape property needs a room, meal and transfer review. A park-side address does not mean you can enter before opening or photograph from unrestricted positions.",
    sightseeingQuestion: "Should you visit the colorful Danxia, Binggou or both?",
    sightseeingAnswer:
      "Choose the colorful Danxia for its layered bands of color and broad viewing platforms. Choose Binggou for a different experience of eroded rock towers and forms, assessing its walking and internal visitor transport separately. Both can be rewarding, but combining them should follow your interest, weather and full transfer plan rather than the idea that all Danxia scenery is identical. A traveler who wants one memorable landscape visit may prefer to pair it with city history and a comfortable meal.",
    visitorResources: [
      {
        label: "UNESCO: Zhangye UNESCO Global Geopark",
        href: "https://www.unesco.org/en/iggp/geoparks/zhangye",
        scope:
          "Geological and geopark background. UNESCO Global Geopark designation is distinct from World Heritage status and does not establish visitor tickets, current routes or unrestricted photography access.",
      },
      {
        label: "Zhangye municipal government",
        href: "https://www.zhangye.gov.cn/",
        scope:
          "Municipal background and public notices. Confirm each scenic area's actual operator instructions, entrances, transport and seasonal availability separately.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Zhangye stay with the hotel, road vehicle, guide, specific scenic areas and internal transport stated in the proposal. A private vehicle normally connects the chosen public access points; it should not be described as unrestricted driving inside protected landscapes. Sunrise access, specialist photography positions, drone use or out-of-hours entry require their own explicit permission and cannot be inferred from private tour or luxury language.",
    routeAdvice:
      "Zhangye can be a landscape-and-culture chapter on a Gansu route that also includes Jiayuguan or Dunhuang. Give each stop its own reason and usable time. A long corridor transfer is not another full sightseeing day. There is no published Zhangye package recommended on this page; the example below is an outline for discussion. Choose the complete rail or road sequence around your arrival, landscape priorities and onward travel rather than booking hotels first and forcing the route to fit.",
    practicalPlanning: {
      timing:
        "Work from the scenic area's actual opening, entrance and last internal transport when choosing an early or late visit. Allow the road journey, admission process, viewpoint circuit and return, not just the time at a single platform. If the visit centers on photography, protect time to observe changing conditions rather than filling every hour with another park. Pair a long landscape session with a seated meal and rest instead of an ambitious second circuit.",
      walking:
        "Viewing platforms, slopes, steps and distances between stops vary by scenic area and selected route. A park shuttle reduces some travel but does not make every viewpoint step-free. Review the actual circuit for knees, balance, wheelchair access or children. Exposed sun, wind and uneven surfaces can make a modest distance tiring; carry suitable protection and allow a shorter route rather than assuming a private vehicle can reach the final platform.",
      cost: "Compare hotel position, road hours, guide service, the named scenic-area tickets and included internal transport. Specialized visitor routes, a second park, a remote property or an extended photography day may change the quote. Rail class, meals and long corridor transfers should be explicit. A premium should buy identifiable room comfort, time or service; it should not rest on guaranteed colors, empty platforms or unauthorized access.",
    },
    attractions: [
      "Zhangye colorful Danxia / Rainbow Mountains",
      "Binggou Danxia",
      "Giant Buddha Temple / Dafo Temple",
      "Selected Zhangye city and oasis interests",
    ],
    stays: [
      {
        label: "1 night: a tightly selected stop",
        advice:
          "Possible when actual arrival and departure leave a useful landscape window. Choose the colorful Danxia or another main interest, and keep expectations independent of a guaranteed sunset. Do not treat a delayed arrival as flexible access after closing.",
      },
      {
        label: "2 nights: a full landscape day and city context",
        advice:
          "Give the principal park a proper window and include the Giant Buddha Temple or a local meal where the remaining time works. A city base keeps dining simple; a scenic-area stay changes the transfer pattern.",
      },
      {
        label: "3 nights or more: choose a second subject",
        advice:
          "Add Binggou for contrasting rock forms, another separately assessed cultural interest, or more room for photography. Extra nights can provide flexibility but do not guarantee favorable weather or admission to every desired route.",
      },
    ],
    hotelAreas: [
      {
        name: "Zhangye city and the Giant Buddha Temple surroundings",
        advice:
          "A practical base for city meals and cultural time. Confirm the exact property, traffic approach, room noise and rail-station transfer. Proximity to a central temple does not make the Danxia a short walk or every hotel equally comfortable.",
      },
      {
        name: "Colorful Danxia scenic-area surroundings",
        advice:
          "Choose for the actual room and road access to your selected entrance, especially when a late landscape visit is important. Check dinner and breakfast, heating or cooling, luggage arrangements and the remaining journey to your next gateway. Nearby accommodation does not override public operating hours.",
      },
      {
        name: "Other countryside or landscape-led properties",
        advice:
          "Choose a particular property for time there, after checking real facilities and its distance from both city and chosen parks. A broad Zhangye address or attractive mountain photograph is insufficient. Confirm the room's location, meals and road service rather than assuming a full resort operation.",
      },
    ],
    tradeoffs: [
      {
        title: "The Rainbow Mountains are a landscape, not a fixed color effect",
        advice:
          "Light, cloud, moisture, season and camera processing affect how the bands appear. Avoid planning around heavily saturated online photographs or a promise that sunset is always best. A coherent route and time to observe the formations matter more than recreating an edited image. Weather can justify a different visit window when tickets and transport permit.",
      },
      {
        title: "Similar names can hide different bookings",
        advice:
          "The colorful Danxia, Binggou and other regional landscapes are not one interchangeable visitor product. Specify the actual site, entrance, route and internal transport in the proposal. Do not assume one ticket or one vehicle covers them all. UNESCO geopark recognition should not be presented as World Heritage listing for every nearby attraction.",
      },
      {
        title: "City culture gives the landscape a human setting",
        advice:
          "The Giant Buddha Temple adds a Buddhist heritage interest and a different rhythm from exposed viewing platforms. Choose time for interpretation and follow current rules for religious spaces and photography. It offers a useful counterpoint to geology, but still needs its own access and attention rather than becoming a rushed stop on the drive to a train.",
      },
      {
        title: "Mati Temple and canyon visits are separate decisions",
        advice:
          "If considering Mati Temple or Pingshanhu Grand Canyon, review the particular route, steps, confined passages or strenuous sections, seasonal roads and visitor arrangements first. They serve different cultural or hiking interests. Do not promise either as an effortless addition for someone who selected Zhangye for accessible viewpoints or a short stay.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "qilian",
        advice:
          "Qilian County offers a separate Qinghai mountain-and-monastery stay around Babao, rather than another Danxia viewpoint beside Zhangye. Assess the full crossing, higher roads, actual hotel and local nights before choosing it over a rail connection. Do not use the Qilian Mountains label to imply that every mountain route visits the county.",
      },
      {
        slug: "tianshui",
        advice:
          "Tianshui adds Maijishan Buddhist sculpture in southeastern Gansu. Give it its own base and current cliffside route assessment, comparing dated corridor connections and useful nights. It is a separate art chapter rather than a local excursion from Zhangye.",
      },
      {
        slug: "xining",
        advice:
          "Xining adds a Qinghai city chapter with museums, regional food and a separately selected Kumbum visit. A road crossing through higher mountain areas is a substantial journey with an altitude and seasonal profile; compare it with available rail options. Do not treat a Qinghai Lake detour as a short extra stop on a Zhangye transfer day.",
      },
      {
        slug: "jiayuguan",
        advice:
          "Jiayuguan adds a fortified Ming pass and a separate choice of wall sites between the landscape and cave-art chapters. Decide whether a selective stop or overnight fits the complete road or rail journey, keeping its sightseeing away from a tight park or train deadline.",
      },
      {
        slug: "dunhuang",
        advice:
          "Dunhuang adds Mogao's Buddhist art and an oasis-and-dune setting, giving the route a different subject after Zhangye's geology. Jiayuguan can be a distinct intermediate frontier-history chapter when there is enough time. Compare the actual transport and overnight sequence rather than treating Dunhuang as a Zhangye day trip.",
      },
      {
        slug: "xian",
        advice:
          "Xi'an adds imperial-capital history and can be an earlier or later chapter in a wider route. Check the complete rail or flight connection and both road transfers. A broad Silk Road label does not make the distance a local journey or justify losing each destination's useful full day.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring through autumn offers a range of conditions for landscape travel, with summer heat and strong sun requiring breaks. Spring can be windy; autumn temperatures can drop sharply between day and evening. Winter needs a separate check of opening arrangements, road conditions, internal transport and hotel services. Clear skies, particular colors and a quiet park are not guaranteed in any season. Base the decision on your wider route and tolerance for heat, wind and cold as well as photography interests.",
    orientation:
      "Zhangye city is in Gansu's Hexi Corridor, while its well-known Danxia landscapes are outside the center toward the Linze and Sunan areas. The colorful Danxia, Binggou, Mati Temple and Pingshanhu Grand Canyon are different destinations with different road approaches. Zhangye railway station, Zhangye West and Ganzhou airport are separate gateways. Confirm the exact ticket and hotel address before estimating travel time or choosing a scenic-area overnight.",
    experiences: [
      "Read the colorful hills through a well-paced official viewpoint route, allowing time to notice bands and landforms",
      "Choose Binggou for contrasting eroded forms when its walking and additional journey suit you",
      "Give Zhangye's Giant Buddha Temple and a local noodle meal time alongside the wider Silk Road landscape",
    ],
    planningNotes: [
      "Name the scenic area, entrance and included internal transport before comparing quotes",
      "Check the real station-to-hotel journey and do not assume Zhangye West is the same pickup as Zhangye station",
      "Build photography around weather and permitted access instead of guaranteed sunset colors or empty platforms",
    ],
    arrival:
      "Use the railway station or airport printed on the actual ticket. Zhangye West and Zhangye railway station require different pickups; confirm the exact meeting point and hotel transfer. For an arrival-day Danxia visit, count baggage, the drive, admission and the actual visitor window before committing to it. A late arrival may be better used for dinner and rest, with the landscape given a proper day afterward.",
    gettingAround:
      "Arrange road transfers between the city, selected parks and onward gateway. Within scenic areas, use the authorized visitor arrangements and check what walking remains from the internal transport stops. Keep time for the return route and actual pickup point. A private vehicle gives flexibility between places but does not remove park controls or make a short corridor stop equivalent to a dedicated landscape day.",
    stayStrategy:
      "For two nights, one well-chosen base often avoids a needless hotel move. Choose city convenience when evening meals and straightforward departures matter; choose the Danxia surroundings when a particular hotel and landscape schedule justify the extra planning. Verify sleep quality, bathroom, temperature control and food before equating remote with high-end. A landscape property earns its place when there is time to enjoy both the room and its setting.",
    firstTimerNote:
      "Zhangye is more rewarding when the visit distinguishes color from form and nature from culture. The colorful Danxia is one main interest, Binggou a possible contrast, and the Giant Buddha Temple a separate historical perspective. Choose the combination you want rather than collecting every attraction carrying the Zhangye name. You do not have to undertake a demanding canyon hike to enjoy the region.",
    faqs: [
      {
        question: "How many days do you need in Zhangye?",
        answer:
          "One full day, commonly with two nights, allows a selected landscape visit and some city context. Add a second full day for Binggou, another distinct interest or a slower photography schedule. A one-night stop needs the actual arrival and departure to leave sufficient time.",
      },
      {
        question: "Are Zhangye Danxia and the Rainbow Mountains the same place?",
        answer:
          "Rainbow Mountains usually refers to the colorful Danxia scenic area near Zhangye. The wider region also has other landscapes, including Binggou, so ask for the precise site, entrance and route when booking. A broad Danxia label is not enough to establish what your visit includes.",
      },
      {
        question: "Is Binggou different from the colorful Danxia?",
        answer:
          "Yes. The colorful Danxia emphasizes banded hills and broad views, while Binggou offers a different emphasis on sculpted rock formations. They are separate visits with their own access and walking arrangements. Choose both only when the contrast and available time justify it.",
      },
      {
        question: "Should I stay in Zhangye city or near the Danxia?",
        answer:
          "Choose the city for meals, services and cultural time. Choose a particular Danxia-area property when its room, facilities and access to the selected park entrance improve your stay. Verify the full onward transfer and do not assume a nearby hotel gives out-of-hours park access.",
      },
      {
        question: "Is sunset always the best time to visit Zhangye Danxia?",
        answer:
          "No single window guarantees the best colors. Weather, cloud and light vary, and public visitor hours and internal transport still apply. Plan a useful landscape session with flexibility where possible rather than promising a specific photograph or unrestricted late access.",
      },
      {
        question: "Can I visit Zhangye Danxia with limited mobility?",
        answer:
          "Suitability depends on the selected park, internal transport and actual viewing platforms. Steps, slopes and standing may remain after a shuttle ride. Ask for a route-specific review of access, seating and assistance; a private road vehicle alone does not establish step-free sightseeing.",
      },
      {
        question: "Is Zhangye a UNESCO World Heritage Site?",
        answer:
          "Zhangye has UNESCO Global Geopark recognition. That designation is different from UNESCO World Heritage status. Use the specific designation and site boundaries rather than describing every Zhangye attraction as a World Heritage Site.",
      },
      {
        question: "Can I visit Dunhuang as a day trip from Zhangye?",
        answer:
          "Plan Dunhuang as a separate corridor stop with its own travel time and nights. Mogao's visitor arrangements and the complete transport journey make it unsuitable as a casual additional Zhangye outing. Choose the route around usable days, not simply a line joining two names on a map.",
      },
    ],
    culturalStory: {
      title: "Put the colorful hills back into the corridor",
      paragraphs: [
        "The Hexi Corridor is a geography of movement as well as spectacular views. Oasis towns and routes between mountain and desert helped connect different societies and religious traditions. Zhangye's Giant Buddha Temple offers a human historical counterpoint to the geological landscape. Give the guide time to explain that relationship rather than introducing the city only as the place where a colorful photograph was taken.",
        "In the parks, look beyond a single saturated view. Follow how layers change direction, how erosion separates forms and how distance changes the reading of the landscape. Comparing a colorful viewpoint with Binggou's sculpted forms can be useful when there is sufficient time and genuine interest. Staying on designated paths protects the formations and keeps the experience grounded in what the landscape actually permits.",
      ],
    },
    foodStory: {
      title: "Let a noodle meal break up the landscape day",
      paragraphs: [
        "Zhangye offers noodle traditions that can make a relaxed meal a worthwhile part of the stop. Saozi mian pairs noodles with a savory topping or broth whose ingredients vary; cuo yu zi are small hand-shaped noodles named for their fish-like form, not necessarily fish content. Ask about the actual dough, sauce and preparation. The interesting part is the texture and local method, not the assumption that every unfamiliar noodle is the same dish.",
        "Choose a seated meal near the day's actual route instead of driving back and forth solely for a famous snack. Discuss wheat, meat, broth, oil and other allergens or dietary requirements before ordering. An apparently vegetable topping may not establish vegetarian preparation, and a northwest location does not prove halal certification. For a scenic-area overnight, confirm dinner and an appropriate breakfast rather than assuming the hotel has the same options as town.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Choose a base and a sensible first evening",
        description:
          "Transfer from the named gateway and enjoy a local meal. Include city culture only if the arrival leaves genuine time; do not make a tight train arrival carry the entire landscape visit.",
      },
      {
        day: "Full day 1",
        title: "A selected colorful Danxia circuit",
        description:
          "Use the confirmed entrance and authorized internal transport, with suitable viewing platforms and rest. Add the Giant Buddha Temple on this day only when access and the complete schedule allow; otherwise use another available city window.",
      },
      {
        day: "Optional extra full day",
        title: "Choose contrast or a slower landscape session",
        description:
          "Consider Binggou for different rock forms, a separately reviewed cultural interest or additional photography time. Canyon routes and Mati Temple are not automatic add-ons and require their own suitability checks.",
      },
      {
        day: "Departure",
        title: "Continue the corridor with time for the next place",
        description:
          "Allow the complete rail or road journey toward the next chosen stop. This is an illustrative outline, not a published package or a promise that every mentioned scenic area is included.",
      },
    ],
  },
};
