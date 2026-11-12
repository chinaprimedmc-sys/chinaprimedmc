import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/changshu.svg",
  alt: "Original Changshu planning schematic comparing Yushan and historic-city visits with Shanghu, a separate Shajiabang outing and hotel-base choices; not photography or a geographic map",
  width: 1600,
  height: 1200,
};

export const changshuGuide: ExpandedDestination = {
  id: "changshu",
  name: "Changshu",
  region: "east",
  kicker: "A Jiangnan hill, scholarly houses and room to slow down",
  description:
    "Explore Changshu through Yushan, a carefully chosen historic house or garden and Shanghu Lake, with useful comparisons of a Suzhou day trip, city night and lake-side stay.",
  stay: "A selective day visit or 1–2 nights; longer for a specific interest",
  bestFor: "Jiangnan landscape, literary and garden interests, and a slower extension from Suzhou",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["suzhou", "shanghai", "yangzhou", "yixing", "tongli"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Changshu Travel Guide: Yushan, Shanghu & Where to Stay",
    seoTitle: "Changshu Travel Guide: Yushan & Shanghu",
    seoDescription:
      "Plan Changshu's Yushan, Shanghu Lake and historic gardens. Compare a Suzhou day trip with 1–2 nights, choose a hotel base and build a tailored Jiangnan route.",
    answer:
      "Changshu (常熟) is a county-level city within Suzhou municipality in Jiangsu, distinct from Suzhou's central garden-and-canal sightseeing area. Visit for the relationship between Yushan (虞山), the historic city and Shanghu Lake (尚湖), with a selected garden or scholar's house adding cultural depth. A focused day from Suzhou can suit one main interest and lunch; one or two nights allow a more rewarding combination of city culture and landscape. Shajiabang (沙家浜) is a separate outing for wetland scenery and modern revolutionary-history interpretation. Choose Changshu because these subjects interest you, rather than assume it is simply another Suzhou garden stop.",
    stayAnswer:
      "One night gives a useful evening and a full sightseeing day when arrival and departure work well. Two nights allow separate time for Yushan and the old-city interests, then Shanghu or Shajiabang, with a proper lunch and indoor breaks. A day visit from Suzhou works better with one main chapter and a complementary stop than with all three landscapes. Add a third night for a specific cultural appointment, a property you want to enjoy or a gentler pace. Business meetings and garment sourcing need their own time; they should not be inserted into every spare sightseeing hour.",
    hotelAnswer:
      "Stay near the historic city and Yushan's city-facing side for a cultural route, convenient meals and a manageable return to the room. Choose a particular Shanghu-area property when its setting, room and time on site are part of the trip. A Shajiabang-area hotel serves that separate visit and requires different journeys to the center. Compare the actual room outlook, sound insulation, bathroom, temperature control, breakfast and vehicle approach. A lake-related name does not establish a shoreline path from the hotel, and a scenic-area address does not include every admission or activity.",
    sightseeingQuestion: "Should you choose Changshu or Suzhou for a first Jiangnan visit?",
    sightseeingAnswer:
      "Choose Suzhou first when classical garden design and historic canal neighborhoods are your main interests and time is limited. Changshu adds a different combination: a low hill close to the city, selected scholarly or garden spaces, and a separate lake landscape. It can make a thoughtful extension for travelers who want that change of scale. With a short stay, choose one city well. With more time, connect them through a clear contrast rather than repeat several gardens and change hotels just to collect another place name.",
    visitorResources: [
      {
        label: "Changshu municipal government",
        href: "https://www.changshu.gov.cn/",
        scope:
          "Reference entry point for city background and local public notices, mainly in Chinese. Check current site names, visitor routes, reservations and cultural displays with the relevant venue. A city overview does not establish access to a private residence, temple activity, garment business or wetland boat service.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check services for the travel date and the full station names, including Changshu railway station where appropriate. Compare the actual service and both road transfers with a direct hotel-to-hotel journey. A train to Suzhou, Suzhou North or another regional gateway is not an arrival at the Changshu hotel.",
      },
    ],
    serviceScope:
      "A tailored Changshu visit should identify the chosen Yushan route, historic interior or garden, lake or wetland visit, guide language and complete pickup and return. Agree the walking level and an indoor alternative before settling the day. For a stay, specify the exact property and room category. A guqin session, specialist cultural meeting, boat or garment-business appointment needs an actual willing provider and confirmed arrangements. Good private guiding should connect the landscape and cultural subjects while leaving enough time for the guest to enjoy them.",
    routeAdvice:
      "Tell us whether your priority is Yushan and local culture, a lake-side break, Shajiabang's history, or a genuine business visit. Share the starting hotel, dates, available nights and walking needs. We can compare a selective Suzhou day trip with a Changshu overnight and build a Jiangnan route whose next stop adds something different. Keep garment sourcing separate from leisure planning. Ask for a tailored proposal with the chosen stops, room, transport and included services clearly set out; no matching published Changshu package is currently listed here.",
    practicalPlanning: {
      timing:
        "Give a Yushan route its own morning or afternoon, with the actual trail, temple or viewpoint chosen in advance. Put a historic interior within its confirmed opening arrangements, then use a meal or shorter city walk to change the pace. Shanghu and Shajiabang are different outings; choose one for the next substantial chapter. Seasonal flowers, migratory birds and cultural performances need dated information. Preserve the real station transfer or return to Suzhou rather than finish a full wetland outing immediately before a fixed departure.",
      walking:
        "Yushan is a low hill, but a low elevation does not mean every route is easy: slopes, steps, uneven surfaces and the descent matter. Match the start, finish and rest points to the group, and check current vehicle access instead of assuming a car reaches each viewpoint. Historic houses and gardens can have thresholds and stairs. Lake and wetland routes may involve long exposed sections, bridges and walking beyond an internal shuttle. For mobility needs, request a named shorter route, seating and an accessible room approach.",
      cost: "Compare the same full-day route, pickup addresses, guide time, admissions, internal transport and any boat or cultural appointment. A lake-side hotel may add drives and limit nearby dining, so assess the whole stay rather than just the room rate. Separate business interpreting, supplier visits, samples and freight from a sightseeing quote. Premium value comes from a suitable room, thoughtful interpretation, comfortable pacing and clear arrangements rather than a long list of unconfirmed activities.",
    },
    attractions: [
      "A selected Yushan / Yu Mountain walk, with a route and descent matched to the group",
      "Xingfu Temple as a separate Buddhist cultural visit on the Yushan side",
      "Fangta Garden and its pagoda setting in the historic city",
      "Zeng Garden and Zhao Garden for a focused comparison of garden spaces",
      "Weng Tonghe Memorial Hall when its current open displays match the cultural interest",
      "Shanghu Lake for a separately planned landscape outing",
      "Shajiabang for a distinct wetland and modern-history chapter",
      "A local noodle meal and a considered tasting of Changshu specialties",
    ],
    stays: [
      {
        label: "Day visit / one main interest and a complementary stop",
        advice:
          "From the actual Suzhou or Shanghai hotel, compare the complete return journey first. Choose Yushan with a shorter city visit, or a focused Shanghu or Shajiabang outing. Leave time for lunch. Trying to include the hill, historic houses, both landscape areas and a market turns a useful introduction into a transfer circuit.",
      },
      {
        label: "1 night / a cultural day with an evening",
        advice:
          "Choose a base that serves the main interest and dinner. Use the full day for Yushan and one selected historic space, with a shorter arrival or departure chapter if timing permits. A late arrival and early train provide a transit night rather than the same sightseeing opportunity.",
      },
      {
        label: "2 nights / city and landscape without rushing",
        advice:
          "Give Yushan and the historic city one day, then choose Shanghu or Shajiabang for a different subject. Keep time for the room, local meals and weather flexibility. Two nights do not require two complete lake or wetland circuits; choose the contrast that matters to you.",
      },
      {
        label: "3 nights / a particular property, appointment or slower pace",
        advice:
          "Add this when a confirmed cultural interest, business appointment or hotel stay earns the time. Distinguish leisure days from sourcing work and protect some rest. More nights should improve the experience rather than create a reason to book every possible excursion.",
      },
    ],
    hotelAreas: [
      {
        name: "Historic city and the city-facing side of Yushan",
        advice:
          "A useful starting point for a mixed cultural visit, local meals and returning to the room between outings. Map the actual garden or house entrances and Yushan approach. Check nearby road noise, the room's orientation, lifts, bathroom and drop-off rather than assume every centrally named property is beside the desired sights.",
      },
      {
        name: "Shanghu area / a property with a clear landscape purpose",
        advice:
          "Choose a hotel for its actual room, dining and setting, with enough time on site to enjoy it. Confirm whether the desired public lake route requires a separate drive, admission or entrance. A view across water and access to the visitor area are different things; also compare evening meals and the return from city visits.",
      },
      {
        name: "Shajiabang area / a separate wetland and history stay",
        advice:
          "This base makes sense when Shajiabang itself is central to the trip or a particular property is the attraction. Assess the current visitor route, weather exposure, dining and full road transfers. It is not a neighborhood within the Fangta or Yushan walking area.",
      },
    ],
    tradeoffs: [
      {
        title: "Choose the hill route before choosing the walking budget",
        advice:
          "Yushan can be the main landscape subject, a shorter walk or the setting for a selected cultural visit. Those are different days. Ask for the actual start and end points, gradients and descent, then add Xingfu Temple only if the interests and route fit. A photograph from a high viewpoint does not describe the effort required for your chosen path.",
      },
      {
        title: "One well-explained historic space can be enough",
        advice:
          "Fangta's pagoda setting, Zeng Garden and Zhao Garden, and Weng Tonghe's historical subject offer different ways into the city. Choose according to what you want to understand: the townscape, garden composition or a late-Qing scholar-official's world. Avoid treating every courtyard as an obligatory repeat of a Suzhou garden.",
      },
      {
        title: "Shanghu and Shajiabang answer different questions",
        advice:
          "Shanghu is the lake-landscape choice beside the wider Yushan setting. Shajiabang combines wetland scenery with modern revolutionary-history interpretation, including associations with the opera of the same name. Choose the subject before asking about a boat or performance. A scenic-area ticket, transport, boat and live show may be separate arrangements.",
      },
      {
        title: "Scholarship and music need interpretation, not invented encounters",
        advice:
          "Changshu's Yushan name appears in traditions of painting and guqin music, giving a useful theme for a knowledgeable cultural guide. Explain the art through a relevant work, display or historical context when available. A city association is not a confirmed concert, private collection visit or meeting with a master; arrange a real session separately when it is a priority.",
      },
      {
        title: "Garment shopping and supplier sourcing are different visits",
        advice:
          "Changshu's garment trade may interest a shopper or business traveler, but retail browsing, wholesale buying and a factory appointment have different requirements. For sourcing, define product category, quantities, specifications, interpreting, appointments and later quality or shipping work. A leisure guide and private car do not establish supplier access, product authenticity or favorable trading terms.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "suzhou",
        advice:
          "Suzhou's central gardens and canal neighborhoods make a useful contrast to Changshu's hill-and-lake setting. They are different city bases within the wider municipality. Compare a selective excursion with an overnight using actual hotel addresses, and protect enough time to understand the main Suzhou garden rather than add Changshu to an already crowded day.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai provides a contrasting city chapter and international gateways. Compare a direct hotel-to-hotel road journey with dated trains to the actual Changshu station and both local transfers. A selective day trip needs a full return buffer; for a richer hill, city and lake combination, compare staying in Changshu instead of repeating the journey.",
      },
      {
        slug: "yangzhou",
        advice:
          "Yangzhou adds merchant gardens and Huaiyang food, with Slender West Lake as a separate landscape decision. It is a new city chapter, not another attraction beside Shanghu. Use the food, garden interpretation and useful nights to justify the move rather than repeat long scenic walks in every destination.",
      },
      {
        slug: "yixing",
        advice:
          "Yixing adds a distinct pottery interest around Dingshu and separately chosen countryside or bamboo landscapes. A craft session needs its own real provider and terms. Compare the complete journey and room move with keeping Changshu's slower pace; a pottery appointment and a garment-business visit require different expertise.",
      },
      {
        slug: "tongli",
        advice:
          "Tongli offers Tuisi Garden and a canal-town stay rather than Changshu's hill-and-lake setting. Choose it when that garden and evening add a useful contrast. Allow for the full transfer and luggage move, and compare going directly to the water town with changing hotels in central Suzhou first.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit the combination of hill walks, gardens and lake scenery, with rain and busy holidays still possible. Summer needs shorter exposed sections, cooling and a proper indoor break; wetland vegetation does not guarantee shade along the whole visitor route. Winter can be cold and damp, making heating and warm meals valuable. Plan flower or bird interests from current local information, not a seasonal label alone, and keep an indoor cultural choice when the hill or lake is less appealing.",
    orientation:
      "Changshu is a county-level city administered by Suzhou in Jiangsu. Its historic city, Yushan and Shanghu form related but separate visitor chapters; Shajiabang lies elsewhere within the wider municipality and needs its own road journey. Changshu railway station is not Suzhou or Suzhou North station. Send the full Chinese addresses for the hotel, entrance and pickup, and keep Yushan / 虞山 distinct from other Chinese places translated as Yu Mountain. Garment-business locations also need their own exact addresses rather than a generic market pin.",
    experiences: [
      "Connect a selected Yushan walk with the city's literary and cultural landscape",
      "Read a garden, pagoda setting or scholar's house closely instead of collecting every entrance",
      "Choose Shanghu scenery or Shajiabang's wetland and history for a distinct second chapter",
    ],
    planningNotes: [
      "Compare a selective Suzhou day trip with one or two useful Changshu nights",
      "Choose the hill route, descent and rest points before promising an easy walk",
      "Keep garment sourcing, cultural appointments and leisure sightseeing as separately defined arrangements",
    ],
    arrival:
      "Compare direct road travel from the actual Suzhou or Shanghai hotel with dated rail to Changshu railway station where a suitable service exists. Include the journey to the departure station, boarding time, luggage and the final road to the hotel or visitor entrance. Suzhou, Suzhou North and Changshu are different stations, and a short train sector is not the whole transfer. For airport arrivals or departures, use the exact terminal and flight time. A Shajiabang property and a central Changshu room can require different approaches and buffers.",
    gettingAround:
      "Group a selected Yushan approach with a manageable city cultural route, using a vehicle where it improves the day. Treat Shanghu and Shajiabang as separately planned outings rather than one continuous walk. Confirm the current entrance, internal transport, boat arrangements and pickup location when relevant. For guests who tire easily, choose fewer stops, named rest points and a shorter return. A private car helps between places but does not remove steps in gardens, walking within a managed visitor area or the descent from a hill path.",
    stayStrategy:
      "Choose the base from the actual purpose. A central room can make a mixed culture-and-food visit easier, while a particular lake-area property deserves time on site rather than a schedule of repeated drives. Assess the booked room, outlook, noise, bathroom, temperature control, breakfast and access. A two-night stay should offer two useful chapters and some rest; if the only goal is a focused cultural introduction and the complete day journey works, keeping your Suzhou hotel may be the more comfortable choice.",
    firstTimerNote:
      "Changshu works best as a deliberate contrast within Jiangnan. Begin with the hill, a selected cultural subject and a good meal; add one landscape outing if you have time. You do not need every garden, two wetlands, a market and a temple to understand why the city is interesting. Explain whether your priority is art and history, comfortable walking, time by the lake or business, and let that choice shape the route.",
    faqs: [
      {
        question: "Where is Changshu, and is it the same as Suzhou?",
        answer:
          "Changshu is a county-level city within Suzhou municipality in Jiangsu. It has its own city center, railway station and visitor routes, distinct from central Suzhou's gardens and canal neighborhoods. Use 常熟市 and the exact hotel or attraction address when planning transport.",
      },
      {
        question: "Is Changshu worth visiting for international travelers?",
        answer:
          "It can be for a thoughtful combination of Yushan, a selected historic garden or scholar's house, local food and Shanghu scenery. It suits an interest in Jiangnan beyond the main Suzhou garden circuit. If time is limited and classical gardens are the main goal, give Suzhou enough time before adding a new city.",
      },
      {
        question: "How many days do I need in Changshu?",
        answer:
          "A selective day visit can introduce one main interest and a complementary stop. One night adds an evening and useful full day when transport fits; two nights allow city culture and a separate Shanghu or Shajiabang outing at an easier pace. Count usable sightseeing hours rather than hotel nights alone.",
      },
      {
        question: "Can I visit Changshu on a day trip from Suzhou or Shanghai?",
        answer:
          "Yes, with a selective route and the full return journey included. Compare the actual starting hotel, direct road travel and dated rail plus both road transfers. Choose Yushan and a shorter cultural stop, or one focused landscape outing, rather than promise the hill, all gardens, Shanghu and Shajiabang together.",
      },
      {
        question: "Is Yushan an easy walk?",
        answer:
          "That depends on the chosen path. Yushan is a low hill, but routes can still include sustained slopes, steps, uneven ground and a tiring descent. Ask for the actual start, finish, gradients, seating and current vehicle access. A shorter cultural visit and lower walk may fit better than a summit-focused day.",
      },
      {
        question: "What is the difference between Shanghu and Shajiabang?",
        answer:
          "Shanghu is the lake-landscape choice associated with the wider Yushan setting. Shajiabang is a separate wetland visit with modern revolutionary-history interpretation and associations with the opera of the same name. Choose according to those interests, then check the specific route, internal transport, boats and current performances separately.",
      },
      {
        question: "Where should I stay in Changshu?",
        answer:
          "Start with the historic city and Yushan's city-facing side for cultural visits and nearby meals. Choose a particular Shanghu-area property for its room and landscape setting, or Shajiabang when that visit is the main purpose. Map the real entrances and dining options, and check the room category and full transfers.",
      },
      {
        question: "Can I combine Changshu sightseeing with garment sourcing?",
        answer:
          "Yes, when the business work has a separate brief and enough time. Retail shopping is different from wholesale buying or a factory appointment. Specify the product, quantities, supplier meetings and interpreting needs; confirm access and any later quality-control or freight work separately. A leisure outing does not guarantee factory visits or supplier performance.",
      },
      {
        question: "What food should I try in Changshu?",
        answer:
          "Consider a local noodle meal, including a mushroom preparation where available, or share a properly ordered beggar's chicken, jiaohua ji. Ask about advance preparation, portion size, stock, pork, alcohol and allergens. Choose for the actual kitchen and your diet rather than assume a traditional dish has one fixed recipe.",
      },
    ],
    culturalStory: {
      title: "Let the hill connect the city, its gardens and its cultural life",
      paragraphs: [
        "Yushan gives Changshu a landscape reference that can connect a walk with the city's cultural history. Traditions known by the Yushan name include painting and guqin music, but those associations are most useful when a guide relates them to an actual work, display or well-explained historical subject. At Xingfu Temple, approach a Buddhist place of worship with respect for current use and photography rules. A quiet courtyard can support a thoughtful visit without turning religious life into an arranged performance.",
        "In the historic city, choose a space that answers a different question. Fangta Garden's pagoda setting helps orient a townscape visit; Zeng Garden and Zhao Garden invite attention to the sequence of rooms, planting and framed views; the Weng Tonghe memorial offers a late-Qing scholar-official's historical context when its displays are accessible. Explain surviving fabric, later repair and present-day interpretation separately. Shanghu's stories associated with Jiang Ziya should likewise be presented as local legend rather than proof of a documented event at a particular viewing point.",
      ],
    },
    foodStory: {
      title: "A good noodle lunch can be as useful as a celebrated banquet dish",
      paragraphs: [
        "A local noodle meal can fit naturally between a Yushan visit and a selected city interior. Mushroom preparations, often described through the local xunyou mian (蕈油面) tradition, are worth asking about when the actual kitchen offers them. Check the mushrooms, stock and seasoning rather than assume the dish is vegetarian. For a longer shared meal, Changshu's association with jiaohua ji (叫花鸡), often translated as beggar's chicken, offers another subject: discuss the kitchen's actual wrapping and slow-cooking preparation, advance ordering and portion size instead of expecting a theatrical clay-opening ceremony.",
        "Build the rest of the meal around vegetables and dishes the kitchen prepares well, leaving room for different appetites rather than ordering every specialty. Explain food legends as stories, and ask about chicken, pork, alcohol, soy, wheat, mushrooms and shared equipment for dietary requests. A temple-area meal is not automatically suitable for a serious allergy or every vegetarian diet. Cooking, tasting and retail are different experiences; a cultural food stop can stay valuable with optional purchases and a straightforward, comfortable lunch.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / optional first evening",
        title: "Settle into the base that serves the visit",
        description:
          "Complete the actual station or hotel transfer and leave time for check-in. Choose a manageable city introduction or dinner according to arrival and the room location. Keep a long hill route for daylight and adequate energy rather than force it into the end of a travel day.",
      },
      {
        day: "Full day / morning",
        title: "Give Yushan a specific route and cultural focus",
        description:
          "Follow a selected walk matched to the group's gradients and descent tolerance, or choose a shorter approach and a separate Xingfu Temple visit. Leave time to look and rest. The hill's cultural associations can shape the interpretation without requiring a promised private concert or specialist meeting.",
      },
      {
        day: "Full day / lunch and afternoon",
        title: "Change scale in the historic city",
        description:
          "Take a seated noodle lunch or another suitable meal, then choose Fangta's setting, a garden or the Weng Tonghe memorial according to the actual open displays and interests. Give one place useful attention. Leave time for the return journey if visiting for the day, or enjoy an unhurried dinner if staying.",
      },
      {
        day: "Optional second day",
        title: "Choose Shanghu or Shajiabang for a different chapter",
        description:
          "Make the choice around lake scenery or wetland and modern history. Settle the actual visitor route, internal transport and any boat or performance before the day. Keep weather flexibility and a full onward transfer buffer. This is an outline for a tailored proposal; confirm the selected sites, accommodation and services for your dates.",
      },
    ],
  },
};
