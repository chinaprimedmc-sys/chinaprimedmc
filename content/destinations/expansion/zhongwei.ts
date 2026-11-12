import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/zhongwei.svg",
  alt: "Zhongwei stay-planning diagram comparing a city hotel, Shapotou-area accommodation and an arranged desert lodge; schematic, not a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const zhongweiGuide: ExpandedDestination = {
  id: "zhongwei",
  name: "Zhongwei",
  region: "northwest",
  kicker: "Yellow River landscapes & a desert stay that fits",
  description:
    "Plan a Zhongwei desert stay around the actual lodge, daylight and onward journey, with clear choices between Shapotou sightseeing, city comfort and time among the dunes.",
  stay: "1–2 nights; longer for a slower stay",
  bestFor: "Desert landscapes and carefully chosen lodges",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["alxa", "yinchuan", "xian", "shanghai", "dunhuang"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Zhongwei Travel Guide: Desert Stays & Private Tours",
    seoTitle: "Zhongwei Travel Guide: Desert Hotels & Tours",
    seoDescription:
      "Compare Zhongwei city hotels, Shapotou visits and desert lodges. Plan sunset, walking, dietary needs and onward travel within a private Ningxia journey.",
    answer:
      "Zhongwei is a Ningxia city where the Yellow River and the edge of the Tengger Desert create a distinctive landscape. Visit for a selected Shapotou experience, or stay near the dunes when changing light and hotel time are the main attraction. A city hotel, riverside property and remote desert lodge offer different holidays. Choose the actual location and level of comfort before deciding how many activities to add.",
    stayAnswer:
      "One night can give an arrival afternoon, sunset and a departure morning if the transfers allow it. Two nights provide a full day and more room for Shapotou or a slower lodge stay. Three nights can suit travelers who genuinely want additional quiet time, but should follow a comfort and meal review. The published China journey includes one desert night, so it does not promise a separate full day of adventure activities.",
    hotelAnswer:
      "Choose a Zhongwei city hotel for straightforward road access and a wider range of independent meals. Compare Shapotou-area properties when a scenic-area visit is central, checking which entrance and transfers the address actually serves. Choose a desert lodge for its setting only after confirming the room, bathroom, heating or cooling, meal service and final approach. A tent-like exterior does not establish either basic camping or full resort comfort.",
    sightseeingQuestion: "Is one night in the Zhongwei desert enough?",
    sightseeingAnswer:
      "It can be enough for a brief desert chapter when arrival leaves time for check-in and the evening landscape. Two nights are better if you want a full day, more hotel time or an additional opportunity for favorable light. Neither allocation guarantees stars or a particular sunset. Work backward from the actual lodge and onward tickets before treating the departure morning as another sightseeing session.",
    visitorResources: [
      {
        label: "Zhongwei municipal government",
        href: "https://www.nxzw.gov.cn/",
        scope:
          "Local background and public notices. This does not establish current scenic-area packages, activity eligibility, lodge amenities, meal verification, weather or flight availability.",
      },
    ],
    serviceScope:
      "We organize the stay around the confirmed property, transfers, selected visits and meals listed in the proposal. Desert activities, specialist guides and astronomy equipment require specific arrangements and provider approval. Share mobility, dietary and privacy needs before choosing a lodge; a premium label does not answer those questions. The desert is a shared landscape, and a private guide does not make a public scenic area exclusive.",
    routeAdvice:
      "Our 13-day Muslim-friendly China journey follows three Yinchuan-area nights with one Zhongwei desert night, then one night in Shanghai. The desert chapter includes an agreed lodge, a selected dune-edge or nearby walk and an alcohol-free sunset dinner verified to your brief. Stargazing, a telescope, specialist hosting and any next-morning outing depend on conditions and confirmation. The onward domestic routing to Shanghai may require a connection; the final city program follows the real arrival time.",
    practicalPlanning: {
      timing:
        "Protect the arrival afternoon for reaching the actual lodge, checking in and enjoying the landscape. Ask when luggage, room access and any final vehicle change happen. An early departure or connecting flight may remove the next morning's outing. If Shapotou activities are a priority, give them a separate usable window instead of assuming they fit between sunset and checkout.",
      walking:
        "Loose sand can be more tiring than a similar distance on pavement, especially in heat or wind. Review the walk from vehicle to room, surface, shade, seated breaks and access to meals separately from optional dune walking. Buggies, camels, rafting or other activities have their own rules and suitability checks; none is necessary to appreciate a desert stay.",
      cost: "Compare the exact property and room, meal inclusions, luggage handling, final approach, private transfers, activity tickets and any specialist evening program. A scenic-area package, room-only lodge and coordinated private stay are different offers. Ask which services stop after dinner and how assistance is contacted overnight. Additional activities and changed departure gateways may alter the quote.",
    },
    attractions: ["Shapotou", "Yellow River landscapes near Zhongwei", "Tengger Desert edge"],
    stays: [
      {
        label: "1 night: a short desert chapter",
        advice:
          "Aim for a useful arrival afternoon and evening, with departure determined by the actual tickets. This is the published route's allocation, not a full adventure day plus two nights of stargazing.",
      },
      {
        label: "2 nights: one full day",
        advice:
          "Separate a selected Shapotou visit from arrival, or keep the day for the property and landscape. An extra night offers flexibility rather than a weather guarantee.",
      },
      {
        label: "3 nights or more: choose the stay carefully",
        advice:
          "Add nights when the setting, room comfort, dining and quiet time are worth them. Check what remains enjoyable in wind, cold or poor visibility before committing to a longer remote stay.",
      },
    ],
    hotelAreas: [
      {
        name: "Zhongwei city",
        advice:
          "Consider for independent meals, simpler road access and an early transport connection. You can visit a selected desert or river area separately, but a city hotel should not be sold as sleeping among dunes.",
      },
      {
        name: "Shapotou and nearby river or scenic-area properties",
        advice:
          "Compare for a planned scenic-area visit or a particular river setting. Verify the actual entrance, ticket arrangements, traffic and final hotel approach. A hotel marketed with Shapotou in its name is not proof that admission or every attraction is included.",
      },
      {
        name: "Desert lodges and dune-edge stays",
        advice:
          "Choose for the landscape and time at the property. Ask about the exact location, en-suite bathroom, room temperature, power, luggage transfer and meal options. Confirm the final approach and emergency arrangements rather than inferring them from luxury photography.",
      },
    ],
    tradeoffs: [
      {
        title: "A scenic-area visit and a lodge stay are different",
        advice:
          "Shapotou can serve a day built around its landscape and selected visitor activities. A lodge stay emphasizes where you sleep and spend the evening. Ask which site, entrance and services are included instead of assuming one reservation grants access to every nearby attraction.",
      },
      {
        title: "Keep stars as a possibility",
        advice:
          "Cloud, dust, moonlight, nearby lighting and operations affect the night sky. A telescope or astronomy guide must be confirmed separately. Choose a property and meal you would enjoy even if the sky is obscured; no private itinerary can guarantee a Milky Way view.",
      },
      {
        title: "Judge comfort by the room and approach",
        advice:
          "Confirm bathrooms, heating or cooling, sound, privacy, charging and distance to meals. Sand and luggage can complicate a short stay. A remote setting is valuable when it matches the group, not when an attractive photograph hides unsuitable access or sleeping arrangements.",
      },
      {
        title: "Choose activities individually",
        advice:
          "Ask about age, height, mobility, health and operating requirements for each optional activity with its actual provider. Agree price, duration and alternatives before arrival. A quiet walk or a seated evening with a view may suit the trip better than a bundle of adventure tickets.",
      },
    ],
    products: [
      {
        slug: "muslim-friendly-china-tour-great-wall-desert-stars",
        label: "Explore the private China journey with a Zhongwei desert night",
        reason:
          "The route adds one confirmed desert night after three Yinchuan-area nights, linking Ningxia with Beijing, Xi’an and Shanghai. Choose it when its cultural focus, verified food arrangements and brief desert chapter suit your wider holiday. Review the actual lodge, room, dinner and onward routing; a specialist sky program, adventure activities or a second desert night are not automatic inclusions.",
        comparison: {
          bestFor:
            "Travelers seeking a short, coordinated desert stay within a wider Muslim-friendly cultural journey.",
          localPlan:
            "One Zhongwei desert night after three Yinchuan-area nights; then one Shanghai night.",
          importantChoice:
            "Stars and a direct Shanghai flight are not guaranteed. Lodge, food evidence and optional activities require confirmation.",
        },
      },
    ],
    articles: [],
    connections: [
      {
        slug: "alxa",
        advice:
          "Alxa offers alternative desert chapters, from a specific Left Banner Tengger route to a dedicated Badain Jaran journey. Compare actual gateway roads, sand-driving exposure and rooms before adding another desert stay. The existing Zhongwei product does not include Alxa simply because both can involve Tengger landscapes.",
      },
      {
        slug: "dunhuang",
        advice:
          "Dunhuang adds Mogao's Buddhist cave art and a different oasis landscape in Gansu. It is a separate journey, not a nearby Zhongwei excursion or part of the published Ningxia itinerary. Include it only when the art interest and complete travel plan justify another desert chapter.",
      },
      {
        slug: "yinchuan",
        advice:
          "Give Yinchuan separate nights for rock art, history and Hui food culture, then move to the desert around check-in and daylight. Choose the actual start and end addresses before adding stops along the transfer.",
      },
      {
        slug: "xian",
        advice:
          "Xi’an adds imperial archaeology and Chinese-Islamic history. Compare flights or rail using the correct Zhongwei gateway and complete lodge transfer, with enough time between a remote stay and a fixed departure.",
      },
      {
        slug: "shanghai",
        advice:
          "Check the date-specific domestic routing, which may involve a connection. A late Shanghai arrival may leave only hotel rest and dinner; a fuller city visit needs additional time rather than a promised departure-day checklist.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can be appealing for desert light and outdoor time, with wind and large day-to-night temperature differences still possible. Summer needs heat-aware timing and shade; winter requires close attention to cold, room heating and operating services. Review the actual weather, moon phase if sky watching matters, and provider conditions before fixing the evening plan.",
    orientation:
      "Zhongwei is a city and wider travel area in Ningxia. Shapotou, river landscapes and properties marketed as desert lodges are separate addresses, sometimes with different final approaches. The Tengger Desert extends beyond the city and across regional boundaries; the name alone is not a precise location. Confirm the property and gateway rather than navigating by a broad desert label.",
    experiences: [
      "Enjoy a dune-edge evening or nearby walk selected for the group's pace and the actual lodge setting",
      "Choose a Shapotou visit for its river-and-desert landscape, with activities assessed individually",
      "Keep a weather-dependent sky watch or quiet sunrise as an opportunity rather than a guaranteed spectacle",
    ],
    planningNotes: [
      "Verify the lodge's room facilities, final approach and luggage arrangements",
      "Separate sunset and sky possibilities from confirmed services",
      "Check the actual onward airport or railway station before adding departure-day activities",
    ],
    arrival:
      "Check whether your booking uses Zhongwei's airport, Zhongwei South railway station, another station or a road transfer from Yinchuan. These are not interchangeable. Work from the actual ticket to the exact lodge, including any final vehicle change. Avoid a late, complicated arrival when the purpose is to enjoy the evening landscape; choose a simpler first night if the connection requires it.",
    gettingAround:
      "Arrange the full hotel-to-hotel transfer and the selected scenic entrance. A road vehicle may not reach every dune or lodge doorway, and final transport must be specified rather than assumed. Public scenic transport and activity providers operate under their own conditions. Clarify pickup after a visit and how the group returns if an optional activity is cancelled.",
    stayStrategy:
      "For a short stay, ease of arrival, a comfortable room and a well-arranged dinner can matter more than the longest excursion list. For two or more nights, check menu variety, indoor spaces, access and daytime comfort. Ask how the property handles wind or changed access, and what service is available after scheduled touring ends.",
    firstTimerNote:
      "A desert stay need not involve strenuous dune walking, camping or adventure sports. Choose the room and access first, then the activities. State food, prayer, privacy and mobility requirements before booking: a remote property may have fewer alternatives when a kitchen or room setup does not meet them.",
    faqs: [
      {
        question: "How many nights should I stay in Zhongwei?",
        answer:
          "One night can suit a brief desert chapter if arrival leaves an afternoon and evening. Two nights give a full day and more flexibility for a selected Shapotou visit or hotel time. Add further nights only when the property, meals and quiet setting are part of the holiday you want.",
      },
      {
        question: "Should I stay in Zhongwei city or a desert hotel?",
        answer:
          "Choose the city for simpler access and more independent dining options. Choose a desert or dune-edge property for its actual setting after checking room comfort and the final approach. Shapotou-area and riverside properties offer other settings; compare addresses rather than hotel marketing labels.",
      },
      {
        question: "Is Shapotou the same as a Tengger Desert lodge?",
        answer:
          "No. Shapotou is a scenic-area choice; a lodge is an accommodation booking at a particular address. Proximity does not establish included admission, activities or transfers. Confirm each component in the proposal.",
      },
      {
        question: "Can you guarantee stars or the Milky Way in Zhongwei?",
        answer:
          "No. Weather, dust, moonlight and local lighting affect visibility. Astronomy equipment or a specialist guide also require confirmation. Keep the stay worthwhile through its room, landscape and dinner even if the sky is obscured.",
      },
      {
        question: "Is a desert stay suitable for older travelers or limited mobility?",
        answer:
          "It may be when the specific property and approach fit. Review vehicle-to-room distance, loose sand, steps, bathroom and access to meals. Dune walking and adventure activities can be omitted; a premium label alone does not prove accessibility.",
      },
      {
        question: "Does the desert stay include halal meals?",
        answer:
          "Only arrangements verified to your stated requirements and confirmed in the proposal can be promised. Certification, ownership, ingredients, preparation and alcohol restrictions are separate checks. A remote lodge needs this review before booking because alternatives may be limited.",
      },
      {
        question: "Can I fly directly from Zhongwei to Shanghai?",
        answer:
          "Use the actual travel date and available schedule. The published journey allows the most practical confirmed domestic routing, which may require a connection. Do not assume a direct service or promise Shanghai sightseeing before the arrival time is established.",
      },
    ],
    culturalStory: {
      title: "Look beyond the dunes alone",
      paragraphs: [
        "Zhongwei's appeal lies partly in the meeting of the Yellow River landscape with the desert edge. A visit gains depth when a guide explains that contrast and the particular place you are seeing, rather than treating every dune field as the same empty backdrop. Choose a viewpoint or walk that makes sense within the actual route and leave time to observe it.",
        "The landscape also contains working communities, visitor businesses and different kinds of accommodation. Respect private land and local instructions, ask before photographing people, and keep a hosted encounter distinct from a scenic-area visit. A private itinerary should provide context and good timing, without claiming ownership or exclusive access to a public landscape.",
      ],
    },
    foodStory: {
      title: "Plan the desert meal before reaching the lodge",
      paragraphs: [
        "A sunset meal can be the most enjoyable part of a short desert stay when the timing, temperature and menu work for the group. Establish where dinner is served, how far it is from the room and what happens in wind or cold. A scenic table should still provide a comfortable place to sit and a menu the group wants after a travel day.",
        "Discuss ingredients, allergies and accepted dietary evidence with the actual provider. A barbecue, hotel buffet and privately prepared meal are different arrangements, and an alcohol-free dinner does not establish that the whole property is alcohol-free. Check breakfast as well as dinner, particularly when an early transfer limits alternatives. Our published route includes the listed, confirmed meals rather than an unlimited dining package.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the lodge with daylight to spare",
        description:
          "Complete the agreed transfer and luggage approach, settle into the room and choose a gentle walk or time near the property. Keep dinner workable if conditions change.",
      },
      {
        day: "Evening",
        title: "Landscape first, sky if conditions allow",
        description:
          "Enjoy the changing light and confirmed meal. A sky watch, telescope or specialist session is an additional confirmed arrangement where available, not a guaranteed natural display.",
      },
      {
        day: "Optional full day",
        title: "A selected Shapotou visit or a slower stay",
        description:
          "With a second night, choose a scenic-area plan or retain time at the lodge. Activity tickets, suitability and transfers are agreed separately from the room.",
      },
      {
        day: "Departure",
        title: "Protect the onward journey",
        description:
          "Add a short morning outing only if tickets and transfers support it. Reach the correct airport or station; the published one-night stop does not include this outline's optional extra day.",
      },
    ],
  },
};
