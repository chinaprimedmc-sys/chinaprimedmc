import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/fujian-tulou.svg",
  alt: "Fujian Tulou planning diagram comparing a focused day excursion, a village overnight and a longer two-area visit; schematic rather than a map or photograph",
  width: 1600,
  height: 1200,
};

export const fujianTulouGuide: ExpandedDestination = {
  id: "fujian-tulou",
  name: "Fujian Tulou",
  region: "south",
  kicker: "Earthen architecture & village life beyond the viewpoint",
  description:
    "Choose a named Fujian Tulou cluster and understand its buildings and living spaces, with a realistic decision between a Xiamen excursion and a carefully checked village stay.",
  stay: "Full excursion or 1–2 nights",
  bestFor: "Vernacular architecture and rural cultural travel",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["dabu", "meizhou", "xiamen", "quanzhou", "hongcun"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Fujian Tulou Travel Guide: Clusters, Visits & Stays",
    seoTitle: "Fujian Tulou Guide: Clusters & Village Stays",
    seoDescription:
      "Choose a Fujian Tulou cluster in Nanjing or Yongding. Compare a Xiamen day trip with village stays, building access, walking and heritage-hotel comfort.",
    answer:
      "Fujian Tulou describes a tradition of substantial earthen communal buildings and a UNESCO-listed collection of examples across different places, not one village or a single circular attraction. Choose a named cluster in the Nanjing or Yongding area, then allow time to understand layout, construction and the lives connected with the buildings. A viewpoint, a courtyard visit and a village overnight offer different experiences. Not all tulou are round, and not every building or upper gallery is open to visitors.",
    stayAnswer:
      "A full excursion from Xiamen can introduce a selected cluster when the complete road journey and walking suit the group. One night nearby adds a village evening and morning while reducing the need to return to the city the same day. Two nights provide a full regional day and more time at the property. Add another area only when the architectural contrast and road plan justify it; more buildings do not automatically make a better visit.",
    hotelAnswer:
      "Keep your Xiamen hotel when a selective day excursion and fewer check-ins are priorities. Choose a village-edge or nearby contemporary property when local time matters but straightforward facilities are important. Stay within an adapted historic building only after reviewing the exact room, bathroom, stairs, sound, temperature control and luggage approach. A hotel described as Tulou may be nearby rather than inside a traditional building, and an atmospheric room is not necessarily a luxury resort.",
    sightseeingQuestion: "Should you visit Nanjing or Yongding tulou?",
    sightseeingAnswer:
      "Choose a specific cluster rather than the county name alone. Tianluokeng in Nanjing can suit an interest in the arrangement of different building forms; Hongkeng or Gaobei in Yongding offer other architectural examples and village contexts. Compare what you will actually see, where you start and finish, and the walking involved. A focused visit to one area is usually more useful than a rushed cross-region circuit intended to collect every famous building.",
    visitorResources: [
      {
        label: "UNESCO: Fujian Tulou",
        href: "https://whc.unesco.org/en/list/1113/",
        scope:
          "Background on the listed buildings and their architectural significance. This does not establish current admission, open interiors, upper-floor access, private hosts or accommodation standards.",
      },
      {
        label: "Fujian provincial government, English portal",
        href: "https://www.fujian.gov.cn/english/",
        scope:
          "Regional background and public information. Confirm the named cluster's current visitor arrangements, road transfers and individual hotel or host separately.",
      },
    ],
    serviceScope:
      "We can discuss a private Tulou visit with the named cluster, guiding, road transfers, admissions and any overnight property specified in the proposal. Your guide helps interpret construction and community history while respecting residents. A ticket does not grant entry to every room, a private guide does not guarantee an upper-floor view, and a hosted meal or cultural encounter requires consent and clear arrangements.",
    routeAdvice:
      "Plan Fujian Tulou as a tailored rural chapter from Xiamen or within a wider Fujian itinerary. Begin with the group’s comfort with road travel and walking, then select the actual cluster and whether a local night improves the stay. We do not currently recommend a published Tulou package on this page. Your proposal should identify each site, hotel, transfer, meal and host rather than treating every option below as included.",
    practicalPlanning: {
      timing:
        "Calculate the complete drive from the actual Xiamen or regional hotel, not a generic city-center estimate. Give the selected cluster time for a viewpoint where suitable, buildings and a meal. Leave room for winding-road comfort and breaks. An overnight helps when you want village time; it does not make every other cluster a nearby addition. Keep fixed flights and long-distance train departures separate from an ambitious final village visit.",
      walking:
        "Village routes can involve uneven stone, thresholds, slopes and steps. Some viewpoints require additional walking, while galleries and historic interiors may have stairs or access restrictions. Review the actual route and hotel room floor for mobility needs. A ground-floor courtyard visit can differ substantially from a viewpoint-plus-upper-floor program; private transport does not remove those barriers.",
      cost: "Compare the named clusters, admissions, guide expertise, full road mileage and service hours, room category, meals and luggage assistance. A city-return excursion and a village overnight have different costs and comforts. Establish whether any local host, special interior permission or additional viewpoint is actually included. A premium quote cannot guarantee private residential access or the facilities of a major-city hotel.",
    },
    attractions: [
      "Tianluokeng Tulou cluster",
      "Hongkeng Tulou cluster",
      "Gaobei Tulou cluster",
      "Selected Fujian earthen-building villages",
    ],
    stays: [
      {
        label: "Full excursion: one selected area",
        advice:
          "Keep the city hotel and choose a coherent cluster visit, with the full return drive and meal accounted for. Avoid combining many distant areas to make the list sound more comprehensive.",
      },
      {
        label: "1 night: a village evening and morning",
        advice:
          "Choose a property that adds comfort and local time. Check room access and meals before booking; an overnight does not guarantee empty courtyards or unrestricted building access.",
      },
      {
        label: "2 nights: architectural depth or a slower stay",
        advice:
          "Use the full day for a distinct second interest or deeper village time, including road travel. Add another area only when it contributes something you want to understand.",
      },
    ],
    hotelAreas: [
      {
        name: "Xiamen as the excursion base",
        advice:
          "Choose for one city hotel, broader dining and a simpler overall stay. Compare the actual pickup address and complete road day. A well-planned excursion still needs comfort with substantial travel and should not be described as a brief urban outing.",
      },
      {
        name: "Village-edge or nearby contemporary accommodation",
        advice:
          "Consider for local time with a specific standard of room and road access. Verify the actual cluster served, meals, bathroom, temperature control and luggage. Nearby does not establish that every entrance is walkable.",
      },
      {
        name: "An adapted historic-building stay",
        advice:
          "Choose for the actual property and room rather than a generic promise to sleep in a tulou. Check stairs, bathrooms, privacy, ventilation, sound and seasonal comfort. Confirm which spaces are shared and how luggage reaches the room, especially with children or older relatives.",
      },
    ],
    tradeoffs: [
      {
        title: "Choose forms and village context, not just a famous name",
        advice:
          "Round, square and other building forms show different spatial choices. Tianluokeng's grouping and the examples in Hongkeng or Gaobei can serve different architectural questions. Ask which buildings are proposed and what is currently accessible instead of treating Nanjing and Yongding as two single attractions.",
      },
      {
        title: "A scenic route and a UNESCO component are different labels",
        advice:
          "Tourism areas can combine listed buildings, other villages, viewpoints and commercial stops. Ask what the itinerary actually includes. A broadly marketed Tulou route should not imply that every stop is part of the UNESCO property or that one admission covers the whole region.",
      },
      {
        title: "Respect the building as a lived-in place",
        advice:
          "A courtyard can be open while rooms and galleries remain private or restricted. Follow instructions and ask before photographing residents or entering doorways. A host encounter is a separate invitation, not something purchased automatically with a scenic ticket.",
      },
      {
        title: "Overnight atmosphere needs a comfort check",
        advice:
          "An older building may have shared spaces, stairs, sound and limited room configurations. A contemporary nearby hotel can be the better fit while retaining a substantive architectural visit. Choose sleep and access on evidence rather than assuming historic surroundings equal premium hospitality.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "dabu",
        advice:
          "Dabu’s dedicated guide compares Tai’an Lou, Hua’e Lou and selected Baihou subjects, with a Huliao base or a selective excursion. Choose a clear architectural difference and the full roads before adding another house. Dabu lies in Guangdong; a tulou reference does not place its buildings within the Fujian World Heritage property.",
      },
      {
        slug: "meizhou",
        advice:
          "Meizhou adds a distinct Hakka regional-history, weilong-house and food interest. Its guide compares city and countryside rooms and explains why weilongwu and Fujian tulou are not interchangeable terms. Choose named buildings and complete transport before adding the stay; shared regional themes do not establish a short local connection or private household access.",
      },
      {
        slug: "xiamen",
        advice:
          "Xiamen provides a city base and regional gateway. Plan Gulangyu and the Tulou area as separate substantial interests, with the actual ferry, road and hotel arrangements. Do not combine a distant cluster with a tight island-return or flight deadline.",
      },
      {
        slug: "quanzhou",
        advice:
          "Quanzhou adds maritime history and a living religious landscape. Compare the complete hotel-to-hotel connection rather than assuming the shared province makes every link short. Allow separate cultural days when both places matter.",
      },
      {
        slug: "hongcun",
        advice:
          "Hongcun offers a different vernacular-architecture perspective in Anhui through its water system and village layout. Compare whether the contrast justifies a larger regional journey, and avoid describing all rural communities or building traditions as the same.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit village walks, with rain and variable temperatures still possible. Summer can be hot and wet; winter makes room heating and indoor comfort important. Road conditions, holidays and the actual property can affect the visit. Choose a useful route and comfortable base rather than promising clear viewpoints, empty buildings or a fixed seasonal scene.",
    orientation:
      "Fujian Tulou is a regional architectural subject and a distributed heritage listing, not one town. Nanjing here means the Fujian county associated with clusters such as Tianluokeng, not the major city of Nanjing in Jiangsu. Yongding is another area with different clusters. Use actual village and property names to plan roads, admissions and accommodation.",
    experiences: [
      "Explore a selected cluster with time to understand earthen construction, building forms and community layout",
      "Combine a suitable viewpoint with confirmed public interiors rather than assuming upper-floor access",
      "Stay nearby when a carefully checked room and a village evening add to the cultural visit",
    ],
    planningNotes: [
      "Name the cluster and buildings rather than booking from a broad Tulou label",
      "Review the full road day, walking and room access before choosing a city return or overnight",
      "Keep public admission separate from resident consent and any privately hosted experience",
    ],
    arrival:
      "Choose the gateway from the actual ticket and named cluster. A road transfer from Xiamen is one option; any regional rail arrival still requires the correct station-to-village journey. Confirm the hotel and luggage approach before booking transport. A late arrival is not the right basis for an extensive village walk or a fixed host appointment, and a county name alone is insufficient for precise pickup planning.",
    gettingAround:
      "Road transport links cluster areas and hotels, with walking within the selected villages. Some lanes, courtyards and inn entrances are not directly vehicle-accessible. Agree pickup points, breaks and service hours, and check any local transport separately. Moving between Nanjing and Yongding interests needs a real road plan rather than being treated as walking between neighboring buildings.",
    stayStrategy:
      "Choose the overnight for the actual room and useful local time. Check the bathroom, heating or cooling, noise, privacy, luggage and meals. A nearby modern property can offer a stronger comfort fit than a room within a historic building. Keep hotel changes proportionate to the wider Fujian trip and allow time to enjoy whichever base you select.",
    firstTimerNote:
      "Tulou are not all circular and should not be reduced to aerial photographs. Construction, internal organization and the village setting explain their interest. A careful ground-level visit can be valuable without climbing private galleries or sleeping inside a traditional building.",
    faqs: [
      {
        question: "Are all Fujian tulou round?",
        answer:
          "No. The tradition includes round, square and other forms. A good visit can explain those differences through selected buildings and their village setting rather than treating one circular image as the whole subject.",
      },
      {
        question: "Should I choose Nanjing or Yongding tulou?",
        answer:
          "Choose a named cluster by architectural interest and the full road plan. Tianluokeng in Nanjing and Hongkeng or Gaobei in Yongding offer different examples. With limited time, one coherent area is better than a rushed circuit across several.",
      },
      {
        question: "Is Nanjing Tulou near the city of Nanjing?",
        answer:
          "The Nanjing relevant to this guide is a county in Fujian, not Nanjing city in Jiangsu. Use the actual cluster, hotel and station names when arranging travel to avoid confusing different destinations with the same romanized name.",
      },
      {
        question: "Can I visit Fujian Tulou from Xiamen in one day?",
        answer:
          "A full excursion to a selected area can work when the complete road journey and walking suit the group. Compare it with a local overnight if village time and the hotel are part of the interest. It is not a short city outing.",
      },
      {
        question: "Can I sleep inside a tulou?",
        answer:
          "Discuss a specific available property and room. Confirm whether it is actually within an adapted historic building, and check bathrooms, stairs, privacy, sound, temperature control and luggage. A nearby property may offer a better practical fit.",
      },
      {
        question: "Can visitors go upstairs in the buildings?",
        answer:
          "Only where current access and permission allow it. Courtyard admission does not automatically open galleries or private rooms. Follow local instructions and do not promise upper-floor views before confirming the actual building arrangement.",
      },
      {
        question: "Are tulou visits suitable for limited mobility?",
        answer:
          "Suitability depends on the selected courtyard route, viewpoints, lanes and hotel. Uneven paving, thresholds, slopes and stairs can remain. Review actual barriers individually; a private vehicle and compact building layout do not establish step-free access.",
      },
    ],
    culturalStory: {
      title: "Understand the building through its organization",
      paragraphs: [
        "The interest of a tulou lies in more than its external shape. A guide can connect earthen walls, courtyards, circulation and household spaces with the particular building's history, explaining what can be seen and what remains private. Comparing a few forms with good interpretation can be more revealing than crossing the region for repeated viewpoints.",
        "These buildings and villages should not be presented as an empty architectural stage or as proof that all residents share one identity or practice. Follow the story of the actual place and the people who choose to receive visitors. Ask permission for photographs and keep an invited meal or conversation separate from ordinary public entry.",
      ],
    },
    foodStory: {
      title: "Plan village meals around the full road day",
      paragraphs: [
        "A regional excursion needs a comfortable meal break rather than an improvised stop after hours of travel. Discuss local cooking, spice preferences and portion sizes before choosing the venue. A village lunch can add context to the day without being described as a private family invitation when it is an ordinary restaurant reservation.",
        "For a rural overnight, confirm breakfast, dinner and dietary requirements with the actual property. Meat stocks, cooking fats and shared preparation can matter even in vegetable dishes, and small kitchens may have fewer alternatives at short notice. A privately hosted cooking or meal session requires an agreed host, menu and consent; it is not an automatic benefit of sleeping near a tulou.",
      ],
    },
    itinerary: [
      {
        day: "Arrival or excursion start",
        title: "Travel to the selected cluster",
        description:
          "Use the actual hotel-to-village road plan with appropriate breaks. Check admission and the day's open areas before adding stops.",
      },
      {
        day: "Main visit",
        title: "Architecture and village context",
        description:
          "Explore selected buildings and a suitable viewpoint, with time for interpretation and a meal. Respect private spaces and current upper-floor rules.",
      },
      {
        day: "Optional overnight",
        title: "Stay for the property and local time",
        description:
          "Settle into the confirmed room and enjoy a village evening. Add a second cluster only when the onward road plan and architectural interest justify it.",
      },
      {
        day: "Return or departure",
        title: "Complete the regional connection",
        description:
          "Allow the actual road journey to the city hotel, station or airport. This outline illustrates choices rather than a published package with every variant included.",
      },
    ],
  },
};
