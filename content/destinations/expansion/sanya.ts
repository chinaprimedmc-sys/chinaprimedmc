import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/sanya.svg",
  alt: "Sanya planning diagram comparing Yalong Bay, Haitang Bay and city-oriented coastal stays; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const sanyaGuide: ExpandedDestination = {
  id: "sanya",
  name: "Sanya",
  region: "south",
  kicker: "A considered tropical stay, with the right bay and room",
  description:
    "Choose Sanya around the holiday you actually want: hotel downtime, a particular beach setting, family facilities or selected local interests, with bay-by-bay advice and realistic weather expectations.",
  stay: "4–6 nights",
  bestFor: "Tropical hotel stays, family downtime and a slower trip finish",
  interests: ["landscape", "food"],
  relatedDestinationIds: ["beihai", "wanning", "lingshui", "guangzhou", "xiamen", "guilin"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Sanya Travel Guide: Best Bays, Resorts & Where to Stay",
    seoTitle: "Sanya Travel Guide: Bays, Resorts & Where to Stay",
    seoDescription:
      "Compare Sanya's Yalong, Haitang, Sanya Bay and Dadonghai stays, with room and family-facility checks, beach conditions, weather and a relaxed Hainan plan.",
    answer:
      "Sanya (三亚) is a coastal city in southern Hainan, best approached as a hotel-and-coast stay rather than a city sightseeing checklist. Choose the bay and actual property around your priorities: usable beach time, pools, family facilities, meals, privacy or convenient access to city services. Yalong Bay, Haitang Bay, Sanya Bay and Dadonghai create different holiday patterns. A beachfront address or sea-view room does not establish safe sea swimming, a private beach or the same facilities in every season. Hainan is an island province; a Sanya stay is not a complete tour of the island.",
    stayAnswer:
      "Four nights usually provide three full days between arrival and departure, enough for settling in, hotel time and one selected outing. Five or six nights allow a slower rhythm and another distinct interest without using every morning for a transfer. Three nights can work as a short break, but long flights or an awkward connection can leave little rest. A split stay is worthwhile only when the second property or setting changes the experience enough to justify packing and the complete road transfer.",
    hotelAnswer:
      "Start with Yalong Bay for a resort-focused beach setting, Haitang Bay for a particular large hotel and its facilities, Sanya Bay for a selected property and its relation to the city or airport, or Dadonghai for a more urban beach-area stay with nearby services. These are starting points, not guarantees. Compare the exact room, actual route to the sand, pool operation, meal options, noise and transfer. Haitang Bay should be chosen with sea conditions in mind rather than assumed equivalent to a supervised bathing beach; every bay still requires current local safety checks.",
    sightseeingQuestion: "Is Yalong Bay or Haitang Bay better for your stay?",
    sightseeingAnswer:
      "Choose Yalong Bay when the selected hotel's beach relationship and a more established resort-bay setting fit your priorities. Choose Haitang Bay when a particular hotel's pools, room, dining or family facilities are the main attraction, accepting its different sea exposure and road pattern. Neither name alone establishes value or safe swimming. A room facing the water can be far from the actual beach access, and a family attraction within a hotel can require a separate booking or charge. Compare complete stays at named properties before deciding by bay reputation.",
    visitorResources: [
      {
        label: "Sanya municipal government, English portal",
        href: "https://english.sanya.gov.cn/",
        scope:
          "Municipal background and public information. Check current weather-related notices, beach guidance, individual attraction operation and hotel services with the relevant authority or operator for your dates.",
      },
      {
        label: "National Immigration Administration of China",
        href: "https://en.nia.gov.cn/",
        scope:
          "Official immigration information. Confirm the entry route applicable to your nationality, passport and full itinerary; a Hainan stay or local entry arrangement does not automatically establish eligibility to continue to mainland cities.",
      },
    ],
    serviceScope:
      "A tailored Sanya proposal can identify the actual hotel, room category, breakfast and other meals, road transfers and any selected guided outing. Childcare, kids' clubs, lessons, water activities, boat trips, special dining and spa treatments need their own availability, age rules and inclusion. Private guiding is most useful for a chosen local interest; not every hotel day needs a guide and vehicle waiting outside. Share children's ages, swimming expectations, dietary needs and room configuration before comparing properties.",
    routeAdvice:
      "Sanya can provide a slower finish after a more active China route when the actual flights and entry arrangements work. Guangzhou offers a Cantonese city chapter, Xiamen a different coastal-cultural stay, and Guilin a karst-landscape contrast. These are separate destinations, not assumed direct or daily connections. No matching published Sanya product is recommended here. Use the illustrative stay below to discuss a tailored holiday, with hotel downtime protected and actual services distinguished from optional activities.",
    practicalPlanning: {
      timing:
        "Protect the first full day for settling into the property and learning its layout. Choose at most a few outings that genuinely add value, allowing for the bay's actual road journey. Keep exposed activity early or later when appropriate to the weather and operator's hours, with a midday break. A weather-dependent boat or island visit should not be the only plan for a tightly timed final day before a flight.",
      walking:
        "Large resorts can involve substantial distances between room, breakfast, pools and beach. Check lifts, stairs, slopes, buggy arrangements where offered and the actual room location. Sand, wet decking, boat boarding and nature trails present different mobility demands. A property described as accessible needs a room-and-route review for the individual guest; a hotel vehicle does not establish wheelchair access to every pool, activity or stretch of shore.",
      cost: "Compare the exact room, view, occupancy, bedding, breakfast, meals and cancellation terms. Children's charges, club sessions, water-park access, equipment, lessons, spa and transfers can materially change the total. Check whether quoted benefits apply to your dates and room category. High-end value comes from useful facilities, good sleep, dining and time to use them, not simply a large lobby or an ocean photograph.",
    },
    attractions: [
      "Yalong Bay with a selected hotel's actual beach relationship",
      "Haitang Bay as a property-led resort choice",
      "Sanya Bay or Dadonghai on a specific coastal route",
      "Nanshan cultural and religious site as a separate outing",
      "Luhuitou on a route matched to walking and conditions",
      "A selected market or regional food interest",
    ],
    stays: [
      {
        label: "3 nights: a focused short break",
        advice:
          "Use the two full days mainly for the hotel, with one short outing only if it improves the stay. An inconvenient arrival or departure can reduce rest significantly. Choose one base and avoid promising an island excursion, cultural day and comprehensive resort experience.",
      },
      {
        label: "4 nights: a useful first resort stay",
        advice:
          "Three full days leave room to settle in, enjoy the facilities and add one selected local interest. Choose the bay and room well, then retain flexibility for weather. Arrival and departure remain travel periods rather than guaranteed extra pool or sightseeing days.",
      },
      {
        label: "5–6 nights or more: slower days and a second subject",
        advice:
          "Allow another outing, a particular activity or more hotel time without a daily sightseeing obligation. Consider a second base only if its setting and purpose are genuinely different. Additional nights improve flexibility but cannot guarantee sunshine, suitable sea conditions or every facility operating.",
      },
    ],
    hotelAreas: [
      {
        name: "Yalong Bay",
        advice:
          "A starting point for a resort-and-beach holiday. Compare the specific stretch of coast, actual beach access, room layout, pool choices and evening food. A garden room and sea-view suite in the same property can create very different stays. Follow current bathing guidance even when photographs show calm water.",
      },
      {
        name: "Haitang Bay",
        advice:
          "Choose a named property for its rooms, dining and facilities rather than sea swimming alone. Review the actual pool experience, family activities, wind exposure and road transfer. Large hotels vary in walking, crowding and included benefits; a famous property name does not answer those practical questions.",
      },
      {
        name: "Sanya Bay",
        advice:
          "A broad coastal area with varied hotel positions and different relationships to the airport and city. Establish whether a road separates the grounds from the beach and where the room faces. Consider aircraft or traffic noise, shoreline access and the real evening meal options instead of assuming every property has the same resort atmosphere.",
      },
      {
        name: "Dadonghai and urban coastal stays",
        advice:
          "Consider for nearby services and a more urban beach-area atmosphere. Check actual room quietness, road access and the route to the water. A lively neighborhood can suit independent meals, while guests seeking a self-contained, secluded hotel stay may prefer another specific property.",
      },
    ],
    tradeoffs: [
      {
        title: "Book the room and its daily routes, not just the view",
        advice:
          "Ask how the quoted room category relates to the coast, neighboring buildings, restaurants and pools. A partial sea view, a high floor and direct beach access are different features. For families, confirm actual beds, connecting-room arrangements where needed, bathroom layout and age-specific charges. Do not infer a guaranteed connection, private pool or quiet wing from a generic hotel gallery.",
      },
      {
        title: "Beachfront is a location; swimming is a separate decision",
        advice:
          "Sea conditions, designated bathing arrangements and local instructions determine whether entering the water is appropriate. Pools and sea access are not interchangeable, and lifeguard presence or supervision should be checked at the actual facility. Snorkeling, diving and boating need a named operator, suitable conditions and a separate health and ability review. Do not assume a calm hotel photograph promises the same water during your stay.",
      },
      {
        title: "Keep local visits selective and geographically sensible",
        advice:
          "Nanshan's religious and cultural setting, a Luhuitou landscape visit and a market meal offer different subjects. Their value depends on interest, actual road time, heat and walking. A long cross-city excursion is less convincing when you chose an expensive resort to rest. Agree any cultural interpretation and current visitor route rather than treating every landmark as an obligatory day-tour circuit.",
      },
      {
        title: "An island activity is not automatically a quiet escape",
        advice:
          "A visit such as Wuzhizhou involves its own terminal, boat operation, queues, weather and on-island arrangements. A private road transfer does not mean a private crossing or exclusive access to the shore. Choose the actual activity you want and account for boarding, equipment and return timing. If the aim is simply downtime, a good hotel day can be the better use of the holiday.",
      },
      {
        title: "Hainan entry arrangements must fit the complete journey",
        advice:
          "Use current official immigration guidance for the traveler's passport, arrival route and intended movements. A Hainan-specific entry option should not be assumed to permit onward travel to Guangzhou, Beijing or another mainland city. Confirm the applicable arrangement before buying the connecting itinerary. This guide does not establish eligibility or replace the authority's decision.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "beihai",
        advice:
          "Beihai offers a distinct Guangxi mainland stay for port-city history, Qiaogang food and a selected coastal property. Compare the actual room, season and complete onward transport. Weizhou Island is a separate offshore chapter, and a beach or sea-view label does not establish swimming conditions or identical resort service.",
      },
      {
        slug: "wanning",
        advice:
          "Wanning offers a separate surf-led interest at Riyue Bay and different property choices at Shimei Bay or Shenzhou Peninsula. Xinglong adds a coffee subject when the actual venue and host fit. Choose a split stay only when the contrast deserves enough nights, with the full road or rail connection included.",
      },
      {
        slug: "lingshui",
        advice:
          "Lingshui's Clear Water Bay and Xiangshui Bay are separate resort areas beyond Sanya's own bays. Compare exact rooms, meals, family facilities and full transfers rather than a broad Sanya-area label. An island outing has its own terminal and conditions, and should not be treated as an automatic hotel inclusion.",
      },
      {
        slug: "guangzhou",
        advice:
          "Guangzhou adds Cantonese food and trading-city history before or after a resort stay. Check actual flights, both hotel transfers and applicable entry arrangements. A short airport connection is not a meaningful Guangzhou visit, and a Hainan-only entry option should not be assumed valid for the mainland chapter.",
      },
      {
        slug: "xiamen",
        advice:
          "Xiamen offers Gulangyu architecture and coastal city life rather than the same self-contained resort holiday. Choose both only when the contrast and available days justify the transfer. Confirm the actual transport; their coastal locations do not establish a convenient boat or direct flight connection.",
      },
      {
        slug: "guilin",
        advice:
          "Guilin and Yangshuo add river and karst countryside interests before a slower Sanya finish. Compare the complete flight or other connection, road transfers and usable days. Retain enough countryside time, and check immigration eligibility for the entire journey before setting gateways.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The cooler part of the year is often considered for a warm-weather break, but winter can still bring cooler, cloudy or windy days and pools vary in heating. The warmer, wetter season needs realistic expectations for heat, humidity, showers and storm disruption. Typhoon-related conditions can affect flights, boats and outdoor activities. Choose a property whose room, dining and indoor alternatives you will enjoy, and check forecast and official notices closer to travel. No month guarantees uninterrupted beach weather.",
    orientation:
      "Sanya's bays spread across a substantial coastal area. Sanya Bay, Dadonghai, Yalong Bay and Haitang Bay create different hotel and road patterns rather than one compact visitor district. Sanya Phoenix Airport and the railway stations are separate gateways, and attractions may lie in a different direction from the selected bay. Haikou is another city in northern Hainan. Use the actual property address and complete transfer, not just the island name, when comparing arrival options.",
    experiences: [
      "Choose a bay and actual room around the balance of beach setting, pools, meals and private downtime",
      "Add one selected cultural, landscape or food outing with the complete road journey and walking reviewed",
      "Enjoy a slower tropical chapter with weather alternatives and family facilities confirmed for the actual guests",
    ],
    planningNotes: [
      "Check the actual room, occupancy, breakfast and included facility access before comparing hotel rates",
      "Treat sea swimming, pool use and boat activities as separate condition-dependent choices",
      "Match the airport or station and entry arrangements to the complete Hainan and mainland itinerary",
    ],
    arrival:
      "Sanya Phoenix International Airport uses code SYX. Haikou Meilan Airport, code HAK, serves a different city in northern Hainan. Sanya and Yalong Bay railway stations also create different road transfers. An island rail connection can be considered when the actual service and final hotel journey work, but Haikou is not another name for arrival in Sanya. Send the exact ticket, luggage and property address; child seats or mobility assistance need separate arrangement.",
    gettingAround:
      "Use planned road transfers for arrival and selected outings, with hotel days left free where that better suits the holiday. Resort buggies, where offered, and public activity transport have their own routes and hours. Compare a whole day's driving before combining distant attractions. Agree pickup location, service window and any child seat rather than assuming every short coastal journey is included or suitable for the same vehicle arrangement.",
    stayStrategy:
      "Start with one good base for four to six nights. Choose the bay, then compare the actual property, room and daily facilities. Confirm quietness, bedding, bathroom, climate control, breakfast, pool seasonality and the walk to key areas. A split stay adds packing and transport, so require a clear change of experience. For a premium holiday, protecting hotel time can be more valuable than buying a guided excursion every day.",
    firstTimerNote:
      "The best Sanya itinerary often contains fewer scheduled activities than a city tour. The hotel is a major part of the experience, so make its room, food and facilities do real work for the holiday. Choose one or two outings that add meaning, retain a weather alternative and leave mornings without an early departure. A full sightseeing checklist can undermine the rest you came for.",
    faqs: [
      {
        question: "How many nights should I stay in Sanya?",
        answer:
          "Four nights provide three full days for settling in, hotel time and one selected outing. Five or six nights allow a slower rhythm and another interest. Three nights can work as a short break when flights are convenient, but an awkward connection may leave little actual downtime.",
      },
      {
        question: "Is Yalong Bay or Haitang Bay better?",
        answer:
          "Choose Yalong Bay for a selected resort-and-beach setting, or Haitang Bay for a particular hotel's rooms and facilities with its different sea exposure and road pattern. Compare named properties, not bay reputation alone. Neither location guarantees safe sea swimming or identical included benefits.",
      },
      {
        question: "Can you swim in the sea at every Sanya hotel?",
        answer:
          "No. A sea view or beachfront address does not establish a designated bathing area or suitable conditions. Follow current local notices and the actual property's guidance. Check supervision, access and the conditions for each activity; use a suitable pool or another plan when the sea is inappropriate.",
      },
      {
        question: "Which Sanya area is best for a family holiday?",
        answer:
          "Start with the actual hotel's room setup, pool choices, supervised activities, dining and access needs, then compare the bay and transfer. Check children's ages, height rules, club hours, supervision, charges and seasonality. A kids' club label or family hotel name does not establish suitable childcare or included activity access.",
      },
      {
        question: "Is a sea-view room the same as direct beach access?",
        answer:
          "No. The view, room location, road crossing, grounds and actual route to the sand are separate features. Check the quoted category and the walking or buggy journey. A hotel gallery may show a different room or viewpoint from the one included in your booking.",
      },
      {
        question: "Can I combine Sanya with mainland China under Hainan entry rules?",
        answer:
          "Confirm the arrangement applicable to your passport and full itinerary through current official immigration guidance. Hainan-specific entry eligibility should not be assumed to allow mainland travel. Check before committing flights and services; this guide does not determine eligibility or guarantee admission.",
      },
      {
        question: "Are Sanya Airport and Haikou Airport interchangeable?",
        answer:
          "No. Sanya Phoenix uses code SYX; Haikou Meilan uses HAK and serves northern Hainan. Compare the complete onward transport and hotel transfer before using Haikou for a Sanya stay. The island name alone is insufficient for an arrival or pickup instruction.",
      },
      {
        question: "What can I do in Sanya if it rains?",
        answer:
          "Choose a property with room comfort, dining and indoor facilities that suit the group, then check their actual operation and any extra charges. Adjust outdoor timing around conditions and official advice. Do not assume a boat, water park, mountain route or scheduled flight remains available during storm-related disruption.",
      },
      {
        question: "Do I need a private guide every day in Sanya?",
        answer:
          "Usually not for hotel downtime. A guide can add value to a selected cultural, landscape or food visit, while airport and outing transfers can be arranged for their actual purpose. Agree the service days and hours rather than paying for a full touring pattern that leaves too little time to enjoy the resort.",
      },
    ],
    culturalStory: {
      title: "Let a local interest add depth to the hotel stay",
      paragraphs: [
        "Sanya is part of Hainan's living island culture, not only a strip of international resorts. A regional meal, a selected market visit or an appropriately explained religious site can add context without turning the holiday into daily touring. Nanshan should be approached as a religious and cultural place with its own visitor practices, not simply a scenic statue backdrop. Choose what genuinely interests the group and understand the actual visit before committing a long drive.",
        "Hainan's communities and traditions should not be reduced to a generic minority-village performance. A commercial cultural attraction, a public event and a hosted community encounter are different experiences. If a particular cultural subject matters, identify the venue, participants, consent and interpretation. This page does not promise private home access, traditional ceremonies or exclusive hosts; a thoughtful, modest encounter is more valuable than an unsupported claim of authenticity.",
      ],
    },
    foodStory: {
      title: "Choose regional dishes and clear ordering",
      paragraphs: [
        "A Sanya stay can introduce Hainanese food beyond the hotel buffet. Wenchang chicken offers a familiar regional subject, although its name refers to a different part of Hainan, not a claim that it originated in Sanya. Coconut chicken is another popular choice, with broth and ingredients to clarify. Seafood meals can be rewarding when species, preparation, weight or portion and price basis are agreed before ordering. A few well-chosen dishes are more useful than a long list of supposed must-eats.",
        "Match the venue to seating, hygiene, dietary communication and the day's route. Shellfish, fish stock, meat broth, dipping sauces and shared preparation can matter even when a dish name sounds simple. A market purchase with separate cooking charges requires a clear understanding of the full bill. Guests who avoid seafood or alcohol can still enjoy a regional meal; the guide's role is to explain choices rather than pressure everyone into one signature dish.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the actual bay and settle in",
        description:
          "Transfer from the named airport or station to the booked property. Keep dinner easy and use only the facilities whose current opening and access fit the arrival. A late landing should not carry a fixed excursion.",
      },
      {
        day: "Full day 1",
        title: "Let the hotel be the destination",
        description:
          "Enjoy breakfast, learn the room-to-pool and beach routes, and leave time for rest. Any sea activity depends on actual conditions and suitable arrangements. Confirm family facilities before relying on them for supervision or independent adult time.",
      },
      {
        day: "Full day 2",
        title: "One local subject, if it adds value",
        description:
          "Choose a cultural, landscape or food interest with the full road journey, heat and walking reviewed. Retain a seated meal and hotel time. An island activity is an alternative with its own boat and weather logistics, not another automatic stop.",
      },
      {
        day: "Full day 3",
        title: "Keep an unhurried day and a weather alternative",
        description:
          "Use the property, a selected short outing or an agreed activity according to conditions and the group's energy. Additional nights can add another distinct interest without creating a daily sightseeing obligation.",
      },
      {
        day: "Departure",
        title: "Continue with the complete transfer planned",
        description:
          "Allow the actual airport or station journey and check the entry arrangement for any onward mainland chapter. This four-night outline is illustrative, not a published product or an assurance that every optional service is included.",
      },
    ],
  },
};
