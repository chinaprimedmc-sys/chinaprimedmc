import type { ExpandedDestination } from "./types";

export const lijiangGuide: ExpandedDestination = {
  id: "lijiang",
  name: "Lijiang",
  region: "southwest",
  kicker: "Naxi heritage & mountain horizons",
  description:
    "Explore Lijiang’s lanes with Naxi cultural context, choose a hotel that protects your sleep and decide which mountain or gorge outing truly suits your trip.",
  stay: "2–4 nights",
  bestFor: "Heritage stays and mountain scenery",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["baisha", "heqing", "shaxi", "shangri-la", "dali"],
  assets: {
    hero: {
      src: "/tours/luxury-yunnan-private-tour/lijiang-night.jpg",
      alt: "Roofs and illuminated lanes in Lijiang Old Town",
      width: 1920,
      height: 972,
    },
    gallery: [
      {
        src: "/tours/luxury-yunnan-private-tour/lijiang-night.jpg",
        alt: "Lijiang Old Town illuminated after dark",
        width: 1920,
        height: 972,
      },
      {
        src: "/tours/luxury-yunnan-private-tour/jade-dragon.jpg",
        alt: "Jade Dragon Snow Mountain near Lijiang",
        width: 1920,
        height: 864,
      },
      {
        src: "/tours/luxury-yunnan-private-tour/tiger-leaping-gorge.jpg",
        alt: "The Jinsha River in Tiger Leaping Gorge",
        width: 1920,
        height: 1280,
      },
    ],
  },
  planning: {
    title: "Lijiang Private Tours & Travel Guide",
    seoTitle: "Lijiang Travel Guide: Old Town, Hotels & Altitude",
    seoDescription:
      "Plan Lijiang with advice on Old Town hotels, Naxi culture, walking and mountain outings. Compare stay lengths and a private route through Dali and Shangri-La.",
    answer:
      "Lijiang suits travelers who want an atmospheric old-town stay with a deeper introduction to Naxi culture and a choice of mountain excursions. Its historic lanes are easy to enjoy at a gentle pace, but the snow mountain and Tiger Leaping Gorge are separate outings with different demands. Build the stay around what interests you, rather than treating every famous place as an essential stop.",
    stayAnswer:
      "Allow two nights for one full day centered on Old Town and a cultural visit. Three nights give two full days, allowing one separate mountain or gorge outing when suitable. Four nights provide more room for quieter neighborhoods, rest and changing weather. More time does not make a high-altitude excursion suitable for everyone.",
    hotelAnswer:
      "Choose the edge of Dayan Old Town for walking access with easier vehicle connections, Shuhe for an alternative historic setting, or a resort outside the old towns for space and hotel facilities. Check evening noise, luggage delivery, steps, heating and the exact pickup point. A room described as a heritage courtyard may have a very different layout from a full-service hotel.",
    sightseeingQuestion: "Should you visit Jade Dragon Snow Mountain or Tiger Leaping Gorge?",
    sightseeingAnswer:
      "Choose Jade Dragon Snow Mountain if the specific mountain route, elevation and transport suit you; not every ticket leads to the same experience. Choose Tiger Leaping Gorge for river-and-canyon scenery, distinguishing a road-based viewpoint visit from a hiking itinerary. Both take planning beyond Old Town, and neither is an automatic add-on to a short city day.",
    visitorResources: [
      {
        label: "UNESCO: Old Town of Lijiang",
        href: "https://whc.unesco.org/en/list/811/",
        scope:
          "Heritage background on the Old Town. This does not establish current mountain tickets, gorge access, hotel standards or operating conditions.",
      },
    ],
    serviceScope:
      "We help choose a Lijiang base and sequence cultural visits, road transfers and any mountain outing around your interests and walking comfort. Your written proposal specifies accommodation, private guiding, vehicle service, tickets and arranged hosts. A cultural meeting depends on the named host’s availability; scenic-area transport, queues and opening decisions remain under local management.",
    routeAdvice:
      "Our ten-day Yunnan journey includes two Lijiang nights between Shaxi and Shangri-La. It works as part of a continuous journey through contrasting landscapes and cultures. If Lijiang itself is a priority, discuss adding a night: the sample stay should not be read as several complete days for Old Town, the snow mountain and a gorge hike.",
    practicalPlanning: {
      timing:
        "Keep one main excursion per full day. Jade Dragon Snow Mountain requires time for road travel, entry and the selected scenic transport; Tiger Leaping Gorge has its own road and walking arrangements. If continuing north, distinguish a planned gorge stop along the route from a dedicated hiking day.",
      walking:
        "Old-town cobbles, bridges, thresholds and steps can be tiring with luggage or limited balance. Higher mountain routes introduce a separate elevation issue. Share stair, walking and health concerns in advance; a private vehicle cannot reach every courtyard, and oxygen availability is not proof that a route is medically suitable.",
      cost: "Compare hotel category and location, luggage assistance, private service hours and the exact excursion tickets. A low-cost city visit and a day with mountain transport are different products. Check meals, performances, workshops and any airport or railway transfer separately rather than assuming every Lijiang quote contains them.",
    },
    attractions: [
      "Lijiang Old Town",
      "Shuhe",
      "Baisha",
      "Jade Dragon Snow Mountain",
      "Tiger Leaping Gorge",
    ],
    stays: [
      {
        label: "2 nights: heritage first",
        advice:
          "Use the single full day for Old Town and a focused cultural visit. Keep arrival and departure light instead of forcing in a mountain outing.",
      },
      {
        label: "3 nights: add one excursion",
        advice:
          "Two full days can separate local culture from one mountain or gorge visit, chosen around interests and physical demands.",
      },
      {
        label: "4 nights: more depth and breathing room",
        advice:
          "Add time for Baisha, a properly arranged cultural session or a rest day. Use a longer stay to improve the experience, not simply to collect more attractions.",
      },
    ],
    hotelAreas: [
      {
        name: "Dayan Old Town and its edges",
        advice:
          "Useful for first-time sightseeing and dining. Ask about evening noise and the distance from the vehicle drop-off to your room. A property near an accessible edge can be more convenient than a celebrated address deep in the lanes.",
      },
      {
        name: "Shuhe and Baisha surroundings",
        advice:
          "Consider these for a different village or old-town atmosphere. They are not interchangeable bases: restaurant choice, crowd patterns and transfers vary. Check the property address against the actual visits you want.",
      },
      {
        name: "Resorts outside the old towns",
        advice:
          "Choose for larger rooms, grounds or hotel facilities when time at the property matters. Confirm how you will reach dinners and Old Town; a mountain view does not make every visit convenient.",
      },
    ],
    tradeoffs: [
      {
        title: "Distinguish a cultural encounter from a performance",
        advice:
          "If Dongba traditions or Naxi history interest you, ask who will interpret them, what the visit involves and whether it is private. A staged show, a museum visit and time with a cultural specialist answer different interests.",
      },
      {
        title: "Name the mountain route before comparing prices",
        advice:
          "Different scenic routes and transport choices involve different elevations, walks and views. Review the actual sequence, physical demands and fallback before purchasing; “snow mountain included” is too broad to assess.",
      },
      {
        title: "A gorge viewpoint is not the hiking trail",
        advice:
          "Tiger Leaping Gorge can involve a short viewing visit, demanding stairs or a separate hiking route. State which experience you want and review access and weather. Do not assume a transfer-day stop delivers the same experience as a dedicated trek.",
      },
      {
        title: "A good night’s sleep is part of the itinerary",
        advice:
          "Discuss sound insulation, nearby nightlife, heating, bathroom layout and stairs before choosing a heritage hotel. For a premium trip, practical comfort and reliable access deserve as much attention as courtyard photographs.",
      },
    ],
    products: [
      {
        slug: "luxury-yunnan-private-tour",
        label: "Explore the 10-day Dali, Shaxi, Lijiang & Shangri-La journey",
        reason:
          "The route gives Lijiang two nights within a ten-day Yunnan journey, linking local cultural interpretation with stays in Dali, Shaxi and Shangri-La. Choose it for the complete progression; add Lijiang time if several excursions matter to you. Review the highland sections and the exact included visits in the itinerary.",
        comparison: {
          bestFor: "A cultural Yunnan journey with several distinct overnight bases.",
          localPlan: "Two Lijiang nights in the ten-day sample route.",
          importantChoice:
            "Do not assume the snow mountain and a dedicated gorge hike are both included; review the listed route and altitude demands.",
        },
      },
    ],
    articles: [
      {
        slug: "where-to-stay-yunnan-private-tour",
        label: "Choose heritage hotels for access and comfort",
      },
      { slug: "yunnan-altitude-private-tour", label: "Assess Lijiang and the higher Yunnan stops" },
      {
        slug: "luxury-yunnan-private-tour-10-days",
        label: "See how Lijiang fits the wider Yunnan journey",
      },
    ],
    connections: [
      {
        slug: "baisha",
        advice:
          "Baisha adds a focused mural and village interest north of Dayan. The existing Yunnan journey includes a Lijiang and Baisha day, but specific mural admissions, a Baisha hotel and Yuhu are separate decisions. Choose a clear cultural subject and useful explanation window rather than make the village a rushed stop after a high-elevation outing.",
      },
      {
        slug: "heqing",
        advice:
          "Heqing adds a defined Xinhua silvercraft interest and a separately assessed Caohai wetland route south of Lijiang. Compare an excursion from your actual room with a useful local overnight, keeping a maker appointment and any purchases explicit. It is a separately agreed extension, not included merely because the published route stays in Lijiang; preserve full airport or onward transfer time.",
      },
      {
        slug: "shaxi",
        advice:
          "Shaxi brings a smaller valley setting and courtyard stays before Lijiang. Plan it as an overnight chapter if slower village life matters, rather than squeezing it between several excursions.",
      },
      {
        slug: "shangri-la",
        advice:
          "Shangri-La adds Tibetan cultural context and a higher sleeping elevation. Review personal suitability and arrival pacing before continuing; it is an optional route choice rather than a compulsory finale.",
      },
      {
        slug: "dali",
        advice:
          "Dali adds Erhai scenery and Bai village culture. Shaxi can give the journey between the two cities a distinct overnight chapter; compare the complete route and hotel moves rather than treating every stop as a quick detour.",
      },
    ],
    mediaCredits: [
      {
        label: "Lijiang Old Town photograph by Chensiyuan",
        href: "https://commons.wikimedia.org/wiki/File:1_lijiang_old_town_night.jpg",
        license: "CC BY-SA 4.0",
        licenseHref: "https://creativecommons.org/licenses/by-sa/4.0/",
      },
      {
        label: "Jade Dragon Snow Mountain photograph by CEphoto, Uwe Aranas",
        href: "https://commons.wikimedia.org/wiki/File:Lijiang_Yunnan_China_Jade-Dragon-Snow-Mountain-01.jpg",
        license: "CC BY-SA 3.0",
        licenseHref: "https://creativecommons.org/licenses/by-sa/3.0/",
      },
      {
        label: "Tiger Leaping Gorge photograph by CEphoto, Uwe Aranas",
        href: "https://commons.wikimedia.org/wiki/File:Yunnan_China_Tiger-Leaping-Gorge-04.jpg",
        license: "CC BY-SA 3.0",
        licenseHref: "https://creativecommons.org/licenses/by-sa/3.0/",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn often offer pleasant conditions for lower-level walks, but mountain visibility and access vary. Summer rain affects outdoor plans; winter needs warm layers and suitable room heating. Choose dates around the experiences you value, with an alternative to a weather-dependent mountain day.",
    orientation:
      "Dayan Old Town, Shuhe, Baisha and the mountain departure points are different locations. Start with your hotel and one main interest per day. Lijiang’s old-town atmosphere and its high mountain excursions should not be assessed as one uniform walking experience.",
    experiences: [
      "Explore Old Town lanes and waterways with an introduction to Naxi history",
      "Choose Shuhe or Baisha for a focused visit beyond the busiest central lanes",
      "Plan one suitable mountain or gorge outing with its route and physical demands explained",
    ],
    planningNotes: [
      "Check luggage handling and the vehicle meeting point before choosing an old-town hotel",
      "Distinguish a gorge viewpoint visit from a hiking itinerary",
      "Assess mountain elevation separately from ordinary city walking",
    ],
    arrival:
      "Lijiang has an airport and railway station outside the historic core. Confirm which arrival point serves your booking and where the vehicle can reach your hotel. Road journeys to Shaxi, Dali or Shangri-La need a full transfer plan, including stops and luggage, rather than a sightseeing checklist attached to a departure day.",
    gettingAround:
      "Use walking for a compact old-town area and private road transport between separate neighborhoods or excursion starting points. Pedestrian lanes may require luggage assistance. Mountain lifts, park vehicles and viewpoint paths follow local systems; private guiding helps you navigate them but does not replace their operating rules.",
    stayStrategy:
      "For a short stay, one carefully chosen hotel is usually easier than moving between Dayan and Shuhe. Check how the next departure affects your final night. An early transfer and a late-night old-town plan rarely support a relaxed start.",
    firstTimerNote:
      "The city is already at elevation, and nearby excursions may go considerably higher. Tell the planner about relevant health concerns and consult a clinician when altitude may affect you. A slower schedule helps pacing but is not a guarantee of acclimatization.",
    faqs: [
      {
        question: "How many days do I need in Lijiang?",
        answer:
          "Allow one full day for Old Town and a focused cultural visit, usually with two nights. Three nights give two full days and room for one separate mountain or gorge outing. Add more time if you want several excursions without rushing.",
      },
      {
        question: "Is Lijiang suitable for travelers who want less walking?",
        answer:
          "A selective visit can work, but cobbles, bridges, stairs and pedestrian-only lanes matter. Choose an accessible hotel approach and shorter walks. Assess mountain and gorge routes separately; neither is automatically suitable because vehicle transport is available.",
      },
      {
        question: "Is Tiger Leaping Gorge a day trip or an overnight hike?",
        answer:
          "Both kinds of itinerary exist, but they are different experiences. A viewpoint visit may fit a road journey when access and timing allow. A hiking route needs a dedicated assessment of distance, conditions, accommodation and fitness.",
      },
      {
        question: "Does every Lijiang private tour include Jade Dragon Snow Mountain?",
        answer:
          "No. Inclusion depends on the specific itinerary and tickets. Ask which route and transport are proposed, how much walking is involved and what happens if weather or operating conditions prevent the visit.",
      },
      {
        question: "Should I stay in Dayan or Shuhe?",
        answer:
          "Dayan is useful for central Old Town sightseeing and dining; Shuhe provides a different old-town setting. Neither guarantees quiet. Compare the exact property, evening noise, steps and vehicle access against your plans.",
      },
      {
        question: "Is Lijiang a good starting point for Shangri-La?",
        answer:
          "It can be part of a northbound Yunnan route, but the transfer and elevation change need planning. Our ten-day journey places the two in sequence. That sequence is a route choice, not assurance that higher-altitude travel is suitable for every guest.",
      },
    ],
    culturalStory: {
      title: "Give Naxi heritage more than a passing glance",
      paragraphs: [
        "Lijiang’s heritage includes its relationship between settlement, water and everyday life. A useful walk explains how the lanes and waterways shape the town, then makes room for the Naxi history behind its familiar images. The UNESCO listing provides background; a guide should connect that background to what you can actually see.",
        "Dongba cultural traditions deserve a careful introduction rather than a promise of an exotic encounter. Ask what a session covers and who will host it. Respect private spaces, religious practice and photography preferences; a booked cultural visit does not imply unrestricted access to someone’s home or ceremonies.",
      ],
    },
    foodStory: {
      title: "Choose meals for the day you are having",
      paragraphs: [
        "Rice noodles, local vegetable dishes and regional hotpots can introduce the food of northwest Yunnan. Preserved meat, mushrooms and dairy may appear in dishes that look unfamiliar, so describe dietary requirements before ordering. A dish name alone does not establish vegetarian or allergy suitability.",
        "A mountain or gorge day has different lunch options from an evening in Old Town. Arrange the practical meal first, including timing, safe preparation and dietary fit. Save a more elaborate dinner for a day when you can enjoy it without another long transfer or an early departure looming.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle in and keep the evening local",
        description:
          "Transfer to the agreed drop-off and arrange luggage assistance if needed. Choose a short walk and dinner near the hotel.",
      },
      {
        day: "Full day 1",
        title: "Old Town and a focused cultural visit",
        description:
          "Explore selected lanes with historical context. Add Shuhe or Baisha if the transfer fits your interests and pace, leaving time for a meal and rest.",
      },
      {
        day: "Optional full day",
        title: "One separately planned excursion",
        description:
          "Choose a suitable snow-mountain route or a gorge visit. Review the tickets, walking and elevation in advance; keep a lower-level alternative.",
      },
      {
        day: "Departure",
        title: "Continue through Yunnan",
        description:
          "Plan your onward transfer or airport journey around confirmed arrangements. A northbound gorge stop needs its own access and timing check.",
      },
    ],
  },
};
