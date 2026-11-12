import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/huizhou.svg",
  alt: "Original Huizhou Guangdong planning schematic separating West Lake city culture, Luofu Mountain and Huidong coastal stays; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const huizhouGuide: ExpandedDestination = {
  id: "huizhou",
  name: "Huizhou",
  region: "south",
  kicker: "A lake-city pause, mountain culture or a carefully chosen coastal stay",
  description:
    "Choose Huizhou's city culture, Luofu Mountain or a Huidong beach base, with practical comparisons of hotels, walking, weather and full transfers.",
  stay: "2–3 nights for one focused chapter",
  bestFor: "Lake-city walks, selected cultural interests and property-led coastal breaks",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["heyuan", "qingyuan", "shenzhen", "guangzhou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Huizhou Travel Guide: West Lake, Luofu & Coastal Stays",
    seoTitle: "Huizhou Guide: West Lake, Coast & Hotels",
    seoDescription:
      "Plan Huizhou in Guangdong: compare West Lake city stays, Luofu Mountain, Xunliao Bay and Shuangyue Bay hotels, full transfers and weather-aware coastal time.",
    answer:
      "Huizhou (惠州) is a large prefecture-level city in eastern Guangdong, distinct from historic Huizhou (徽州) in Anhui. Choose one main chapter: West Lake and Su Dongpo-related city culture, a separately planned Luofu Mountain visit in Boluo, or a property-led coastal stay in Huidong. Xunliao Bay and Shuangyue Bay are different coastal bases, not hotel districts beside the city lake. Two nights give one full day; three suit a slower stay or a second coherent subject. A Huizhou address alone does not tell you whether the hotel serves the city, a mountain route or a beach holiday.",
    stayAnswer:
      "Two city nights can provide a relaxed West Lake and cultural day between arrival and departure. Three allow another genuinely different interest or more time to rest. For the coast, two or three nights make sense only when the full gateway road, actual property, meals and weather plan justify the stay. A focused day trip can suit a specific city or mountain purpose when the complete return works. Combining city, Luofu and several bays needs a larger itinerary; the municipality's size should not turn a short break into constant transfers.",
    hotelAnswer:
      "Start with the purpose, then the exact address. A Huicheng city property can serve West Lake, dining and Su Dongpo context. A Luofu-area stay belongs to a different mountain and road plan. On the Huidong coast, compare a specific Xunliao or Shuangyue Bay property by the booked room, beach approach, meals, pool operation, noise and indoor comfort. A sea-view apartment and a staffed resort are different services. Check housekeeping, reception, breakfast, lift demand and the actual operator before assuming that attractive room photographs establish a high-end stay.",
    sightseeingQuestion: "Should I choose Huizhou West Lake, Luofu Mountain or the coast?",
    sightseeingAnswer:
      "Choose the city for manageable lake-side routes, Su Dongpo's time in Huizhou and local meals. Choose Luofu for a specific Daoist or mountain-walking interest, with the actual route and remaining steps assessed. Choose the coast when the room, beach setting and genuine hotel time are central. Xunliao and Shuangyue Bay need separate property and road comparisons. A short break gains more from one convincing base than from trying to reach every attraction under the Huizhou name. A sea view does not establish safe swimming, a quiet beach or a working watersports service.",
    visitorResources: [
      {
        label: "Huizhou municipal government",
        href: "https://www.huizhou.gov.cn/",
        scope:
          "Regional context and dated public notices, primarily in Chinese. Check the actual district or county, institution, public route and property. Municipal tourism descriptions do not confirm a particular beach's swimming conditions, mountain transport, room amenities or a private cultural arrangement.",
      },
      {
        label: "Hong Kong Observatory: tropical cyclone information",
        href: "https://www.hko.gov.hk/en/informtc/informtc.htm",
        scope:
          "Regional storm information useful for understanding changing coastal conditions. Follow the responsible mainland authorities, local beach notices and actual transport and property operators for the Huizhou plan. A regional forecast is not an opening notice or clearance for swimming or a boat trip.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated services and exact stations, followed by the complete road to the chosen hotel. Huizhou's city and coastal gateways need different comparisons; a station in the municipality does not place guests at the lake, Luofu entrance or beach resort.",
      },
    ],
    serviceScope:
      "A proposal should name the chosen chapter, actual room and operator, gateway, complete transfers, guiding language, selected public routes, meals and any activities. For a serviced apartment, specify who handles reception, cleaning, towels and problems during the stay. A mountain guide, cultural interpreter, boat or watersports operator needs its own confirmed scope. Private service does not reserve an empty beach, open a religious interior or authorize swimming under unsuitable conditions. Agree a useful indoor or city alternative when coastal weather changes the intended day.",
    routeAdvice:
      "Shenzhen can provide a modern-city chapter or practical connection to a selected Huizhou base, with the full dated journey compared. Guangzhou adds Cantonese food and trading history, but it is another substantial city stay rather than a neighboring hotel district. Avoid adding a bay simply because a business trip ends in the Pearl River Delta. No matching published Huizhou product is recommended here. Share gateways, dates, room expectations, walking needs, appetite for driving and whether the purpose is culture, mountains or hotel downtime to develop a coherent tailored route.",
    practicalPlanning: {
      timing:
        "Count the actual station or airport road, check-in, meal and return before describing a short escape. Coastal weekends and public holidays can change road pressure, restaurant waits and resort noise. A quieter weekday can help without guaranteeing empty facilities. For Luofu, use the actual visitor route, transport and last return services; for West Lake, choose a manageable section rather than assume the whole lake must be circled. Keep uncertain outdoor plans separate from a tight flight or train departure.",
      walking:
        "A selected city-lake route can be gentler than a mountain outing, but check its exact steps, bridge approaches, paving, shade, seats and toilets. Luofu's longer walks or summit ambitions need separate fitness and access assessment; a cableway does not establish a step-free day. Beach access may involve stairs, sand, wet surfaces or long apartment corridors. Heat and humidity can make modest distances tiring, so assess the complete day and room approach for the actual guests.",
      cost: "Compare the actual room category, hotel versus apartment service, complete transfers, meals, guide hours, pool or other facility access and current activity terms. A low room rate may omit breakfast, daily housekeeping or practical reception support. A sea-view premium buys a defined outlook, not safe bathing or privacy. Check weather-related change rules for accommodation and any boat or activity separately, rather than assume every service follows the same cancellation policy.",
    },
    attractions: [
      "A selected Huizhou West Lake public route in the city",
      "Su Dongpo-related interpretation, including Dongpo Memorial Hall when available",
      "Shuidong Street and the river-city setting as a distinct urban subject",
      "Luofu Mountain with a defined permitted temple or walking route",
      "A property-led Xunliao Bay stay assessed for real comfort and beach access",
      "A separate Shuangyue Bay base with current coastal conditions reviewed",
    ],
    stays: [
      {
        label: "Focused day trip / one clear purpose",
        advice:
          "Choose a specific city or mountain interest and count the full return from the actual base. Do not add a distant beach merely because it shares the city name. A short coastal property inspection or drive-through is not a relaxed resort day.",
      },
      {
        label: "2 nights / one useful local day",
        advice:
          "Works as a starting point for a city chapter or a carefully chosen coastal property. Protect food, rest and the main purpose between the real roads. A late arrival and early departure leave little beach or cultural time, so compare actual transport before booking a room-only offer.",
      },
      {
        label: "3 nights / slower pacing or a second distinct subject",
        advice:
          "Can add a different cultural interest, more hotel time or separation of a mountain outing from arrival. Keep one coherent base when possible. A split city-and-coast stay needs enough useful time in each place to justify the transfer, new check-in and different daily roads.",
      },
    ],
    hotelAreas: [
      {
        name: "Huicheng city / West Lake and local meals",
        advice:
          "Compare the exact room with the chosen lake route, cultural venue and dinner. Check street noise, pedestrian access, pickup, bathroom and temperature control. West Lake is a useful city orientation point, not a guarantee that every hotel bearing its name has a lake view or an easy public walking route.",
      },
      {
        name: "Luofu Mountain area in Boluo / a specific mountain purpose",
        advice:
          "Assess the actual property, entrance road, meals, room comfort and day route. A mountain hotel should offer value beyond proximity on a map. Do not assume religious teaching, cableway admission, medicinal services or a summit route comes with the room.",
      },
      {
        name: "Xunliao Bay in Huidong / a defined coastal property",
        advice:
          "Choose by the actual beach approach, booked view, service model, meals, noise, pool operation and indoor alternative. A staffed resort and individually managed apartment have different responsibilities. Ask how crowded public areas and nearby construction or evening activity affect the specific room.",
      },
      {
        name: "Shuangyue Bay in Huidong / another coastal base",
        advice:
          "Check the precise shore, room operator, road, food and usable facilities rather than choose from an aerial image of the bay. A high-floor view is not direct beach access. Confirm the actual swimming arrangements and weather rules; neither a beautiful coastline nor a hotel pool establishes safe sea bathing.",
      },
    ],
    tradeoffs: [
      {
        title: "Huizhou in Guangdong is not historic Huizhou in Anhui",
        advice:
          "English spelling can conceal two unrelated destinations: 惠州 in Guangdong and 徽州 associated with southern Anhui's cultural region. Use the province, Chinese characters and full hotel address in bookings. West Lake here is also distinct from Hangzhou's more internationally familiar lake; shared English labels should not substitute for precise planning.",
      },
      {
        title: "A lake-city visit becomes richer with a specific cultural thread",
        advice:
          "Su Dongpo's period in Huizhou offers a way to connect place, writing and local memory. Ask which documented episode, text or surviving site the interpretation concerns. Memorial displays, rebuilt structures and historic setting should be described individually, rather than imply every attractive lakeside building is unchanged from the poet's lifetime.",
      },
      {
        title: "Luofu is another route, not a short walk behind the city hotel",
        advice:
          "Choose a manageable public temple or forest route and state the physical ambition. A summit hike, cableway-assisted outing and cultural visit are different days. Clarify the remaining stairs, operation and descent before adding the mountain to a short city break. Private guiding does not grant closed-trail access or private religious teaching.",
      },
      {
        title: "A coastal apartment and a resort solve different needs",
        advice:
          "A spacious room with a view may suit self-directed guests, while others need staffed reception, dependable meals, housekeeping and useful facilities in poor weather. Ask who operates the booked unit and handles problems. Evaluate the actual service rather than infer hotel standards from a development's brand, exterior photograph or beach address.",
      },
      {
        title: "Sea view, beach access and swimming are three separate questions",
        advice:
          "Check where the room looks, how guests reach the public beach and whether supervised or otherwise suitable swimming is available under current rules. Wind, waves, currents and storms can change the plan. Boats and watersports need a permitted suitable operator; a private guide cannot authorize an activity when local conditions or notices rule it out.",
      },
      {
        title: "A restful escape needs a property that works when the sky changes",
        advice:
          "Compare indoor space, food, room comfort and actual open facilities rather than rely on a sunny pool photograph. Coastal weather can affect the value of a brief stay sharply. Choose a clear cancellation and alternative plan, and do not promise blue water, sunset, quiet beaches or an operating pool simply because the dates fall in a warm month.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "heyuan",
        advice:
          "Heyuan adds a different inland reservoir landscape at Wanlü Lake, city dinosaur-museum interests and selected Hakka village context. Choose the actual room and visitor pier, then compare complete connections with the chosen Huizhou district. A lake-view hotel does not establish a cruise, shore access or swimming.",
      },
      {
        slug: "qingyuan",
        advice:
          "Qingyuan offers a different northern Guangdong countryside, tea or resort decision. Compare the actual purpose and full road before adding another hotel-led break. Yingde and Lianzhou are separate regional chapters, while a shared provincial label does not make their facilities or activities equivalent to Huizhou's coast.",
      },
      {
        slug: "shenzhen",
        advice:
          "Shenzhen adds design, modern city life and a different choice of urban bases. Compare the complete journey to the actual Huizhou room rather than a city-to-city map line. A Shenzhen business or leisure product does not automatically include Huizhou lake, mountain or beach services.",
      },
      {
        slug: "guangzhou",
        advice:
          "Guangzhou adds Cantonese food and trading history. Choose useful city nights and compare the full connection to the specific Huizhou chapter. A Pearl River Delta label does not make West Lake, Luofu and every Huidong bay a compact extension to a Guangzhou hotel stay.",
      },
    ],
  },
  editorial: {
    bestTime:
      "For city walking, compare spring and autumn dates with the actual temperature, rain and holiday calendar. Summer can be hot and humid, and coastal storm conditions may change roads, sea activity and outdoor facilities. Winter can suit a city or hotel-led stay, but should not be sold as a guaranteed warm-water beach season. Review the specific property's pool and service operation rather than infer it from the climate. A workable itinerary has a useful purpose beyond one expected beach photograph.",
    orientation:
      "Huizhou spans a large part of eastern Guangdong, with Huicheng city, Boluo's Luofu Mountain and Huidong coastal bases requiring separate roads. Huizhou West Lake is in the city; Xunliao and Shuangyue Bay are coastal choices in Huidong. This guide provides regional and base decisions, not complete coverage of every subordinate county, town, beach or mountain route. Historic Huizhou in Anhui is a different place. Use full Chinese addresses and actual station and venue names in the travel plan.",
    experiences: [
      "Connect a manageable West Lake route with a clearly explained Su Dongpo cultural subject",
      "Choose a specific Luofu route or one coastal property for a distinct local purpose",
      "Enjoy comfortable meals and downtime without spending the short break crossing the municipality",
    ],
    planningNotes: [
      "Choose city, mountain or coast first, then compare actual gateways and hotel addresses",
      "Assess the booked room's operator, service, noise, meals and poor-weather comfort",
      "Keep sea view, beach approach, swimming and activities as separate verified arrangements",
    ],
    arrival:
      "Compare actual dated services into the relevant airport or station with the complete road to the chosen property. A Huizhou city arrival, a southern transport hub and a Huidong-side gateway can create very different journeys. Station names and service patterns should be checked at booking rather than taken from an old account. For arrivals through Shenzhen or Guangzhou, include both terminal logistics and the full road or rail chain. Keep the essential cultural visit or coastal activity away from uncertain arrival and protect the onward departure margin.",
    gettingAround:
      "A retained vehicle can connect selected sites, but does not make all three regional chapters practical in a short day. Plan each route's real entrance, parking, walking, food and pickup. On the coast, compare restaurant access and whether guests can manage independently from the actual property. For mountains and beaches, follow public notices and permitted routes. A guide's presence is not evidence of safe swimming, boat operation, closed-trail access or entry to a working or religious space.",
    stayStrategy:
      "For two or three nights, choose one main base that makes the purpose easy to enjoy. Move hotels only when a distinct second chapter earns enough usable time. Higher-end planning should improve sleep, language support, transport, food and room reliability, not just buy the highest floor or a coastal marketing label. Be explicit about the difference between a resort-led rest, a cultural city stay and a mountain outing so the proposal can meet real expectations.",
    firstTimerNote:
      "Ask where you will actually spend the full day after arrival. If the answer is West Lake, a distant sea-view room may add unnecessary driving. If it is hotel downtime beside the coast, city sightseeing need not be forced into the stay. If it is Luofu, define the route before choosing the room. Huizhou works best when the base follows the purpose rather than the broad destination name.",
    faqs: [
      {
        question: "Is Huizhou in Guangdong the same as Huizhou in Anhui?",
        answer:
          "No. This guide covers 惠州 in Guangdong. Historic 徽州 in Anhui is a different cultural region. Use the province, Chinese characters and full hotel address to prevent confusion when arranging transport and stays.",
      },
      {
        question: "Should I stay near Huizhou West Lake or at the coast?",
        answer:
          "Choose the city for West Lake, cultural context and city meals. Choose a specific Huidong coastal property when beach setting and hotel time are the purpose. They require different roads and should not be treated as equivalent hotel districts.",
      },
      {
        question: "How many nights should I spend in Huizhou?",
        answer:
          "Two nights give one full day for one focused chapter; three can provide a slower rhythm or another coherent interest. Combining city, mountain and several coastal bases needs more time. Count complete arrival and departure roads before judging the useful stay.",
      },
      {
        question: "Should I choose Xunliao Bay or Shuangyue Bay?",
        answer:
          "Compare actual properties, beach approach, room service, food, noise, full gateway road and weather alternatives. The bay name alone does not establish better water, quieter surroundings or higher service. A sea-view apartment and a staffed resort are different choices.",
      },
      {
        question: "Can I swim at a Huizhou beach?",
        answer:
          "Only choose swimming when the specific beach, current conditions, public rules and appropriate supervision or facilities support it. Follow local notices. A sea-view room, attractive photograph or private guide does not establish safe or permitted bathing.",
      },
      {
        question: "Can I visit Luofu Mountain without a long hike?",
        answer:
          "A selected lower cultural route may suit, but check the actual entrance, steps, slopes, toilets, seating and current transport. A cableway-assisted outing is different from a summit hike and still may involve walking. Describe the guests' needs before selecting the route.",
      },
      {
        question: "Is a Huizhou extension included in your Guangzhou–Shenzhen tour?",
        answer:
          "No Huizhou extension should be assumed from that product's regional setting. No matching published Huizhou tour is recommended here. A lake, mountain or coastal stay requires a tailored plan specifying rooms, roads, visits and inclusions.",
      },
    ],
    culturalStory: {
      title: "A lake route needs a story more precise than a famous name",
      paragraphs: [
        "Su Dongpo's association with Huizhou can give a lake-city visit a cultural thread, but a good explanation should identify the particular writing, episode or memorial being discussed. Ask what the visitor can see today and how it relates to the historical account. A pleasant route then becomes a way to connect local memory with the city rather than a sequence of plaques bearing an unfamiliar poet's name.",
        "The region also offers different cultural settings beyond the lake. Luofu's religious landscape calls for its own explanation and respectful public visiting, while city streets reveal another scale of everyday life. Avoid treating a recreated building, a memorial institution and an active place of worship as the same kind of evidence. Understanding those differences makes a small selection of visits richer without requiring entry to private life or closed interiors.",
      ],
    },
    foodStory: {
      title: "City dining and coastal seafood need different plans",
      paragraphs: [
        "Huizhou's meals can introduce local Cantonese and Hakka influences through the actual kitchen rather than a single imposed menu. Ask which dishes are well prepared, how portions are shared and whether salt-baked chicken, stuffed tofu or another available specialty fits the guests' appetite. On the coast, seafood selection is another conversation: clarify the species, live or prepared weight, price basis and cooking charge before ordering instead of infer value from a large display.",
        "Review shellfish, fish, meat stocks, soy, wheat, peanuts, sesame, eggs and shared preparation as relevant. A coastal location does not certify freshness or allergy capacity, and a vegetable dish may contain animal stock. Serious allergies, coeliac needs or strict diets require the actual kitchen's confirmed ability and an alternative. For an apartment stay, agree breakfast and the evening meal options before arrival rather than discover the difference from a full-service hotel after dark.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / one selected base",
        title: "Reach the actual city, mountain or coastal property",
        description:
          "Complete the full gateway journey, check the quoted room and settle meals. Review current weather, public operation and the following day's purpose. A modest local look can fit, but the main visit should not depend on a perfectly punctual arrival.",
      },
      {
        day: "Full local day",
        title: "Let one chapter shape the day",
        description:
          "For the city, combine a manageable lake route with a selected cultural subject and lunch. For Luofu, follow the agreed permitted route and return plan. For the coast, protect actual hotel time and use only suitable confirmed activities. These are alternatives, not one ambitious municipal circuit.",
      },
      {
        day: "Departure or a third night",
        title: "Add useful time without adding unnecessary roads",
        description:
          "Allow breakfast, bags and the complete onward connection. A third night can add a coherent interest or slower property time. A new regional base needs its own useful stay. This outline is illustrative, not a published package or guarantee of rooms, beach conditions, swimming, views or private access.",
      },
    ],
  },
};
