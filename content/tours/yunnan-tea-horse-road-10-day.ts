import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

const yunnanImage = (
  src: string,
  alt: string,
  width: number,
  height: number,
  objectPosition?: string,
): MediaAsset => ({
  src: `/tours/luxury-yunnan-private-tour/${src}`,
  alt,
  width,
  height,
  objectPosition,
});

export const yunnanTeaHorseRoadAsset = {
  hero: yunnanImage(
    "jade-dragon.jpg",
    "Jade Dragon Snow Mountain rising above northwest Yunnan",
    1920,
    864,
    "center 45%",
  ),
  erhai: yunnanImage(
    "erhai-landscape.jpg",
    "Erhai Lake and mountain scenery near Dali in Yunnan",
    1920,
    1281,
  ),
  shaxiDay: yunnanImage(
    "hero.jpg",
    "Traditional village architecture and fields in the Shaxi Valley",
    1920,
    396,
  ),
  shaxiNight: yunnanImage(
    "shaxi-night.jpg",
    "Historic timber architecture illuminated at night in Shaxi",
    1920,
    1281,
  ),
  lijiangNight: yunnanImage(
    "lijiang-night.jpg",
    "Traditional rooftops illuminated at night in Lijiang Old Town",
    1920,
    972,
  ),
  jadeDragon: yunnanImage(
    "jade-dragon.jpg",
    "Snow-covered peaks of Jade Dragon Snow Mountain near Lijiang",
    1920,
    864,
  ),
  tigerLeapingGorge: yunnanImage(
    "tiger-leaping-gorge.jpg",
    "The Jinsha River passing through Tiger Leaping Gorge in Yunnan",
    1920,
    1280,
  ),
  songzanlin: yunnanImage(
    "songzanlin.jpg",
    "Ganden Sumtseling Monastery above the highland landscape near Shangri-La",
    1920,
    1280,
  ),
  dukezong: yunnanImage(
    "dukezong.jpg",
    "Traditional rooftops in Dukezong Old Town in Shangri-La",
    1920,
    1440,
  ),
} satisfies Record<string, MediaAsset>;

const hotelByPlace = {
  dali: "Selected luxury lakeside or heritage stay in Dali · 3 nights",
  shaxi: "Selected restored courtyard or boutique retreat in Shaxi · 2 nights",
  lijiang: "Selected luxury heritage or mountain-view stay in Lijiang · 2 nights",
  shangriLa: "Selected premium highland lodge in Shangri-La · 2 nights",
};

export const yunnanTeaHorseRoad10DayTour: Tour = {
  slug: "luxury-yunnan-private-tour",
  publishedAt: "2026-08-20",
  updatedAt: "2026-08-20",
  title: "Yunnan, Along the Tea Horse Road",
  subtitle:
    "A 10-day private highland journey through Dali, Shaxi, Lijiang and Shangri-La, shaped by living cultures, remarkable landscapes and boutique stays with a strong sense of place.",
  duration: "10 Days / 9 Nights",
  route: "Dali, Shaxi, Lijiang, Shangri-La",
  styles: ["Luxury", "Culture", "Nature", "Food", "Photography"],
  hero: {
    eyebrow: "AVIORA signature Yunnan journey",
    image: yunnanTeaHorseRoadAsset.hero,
    primary: { label: "Explore the 10 Days", href: "#itinerary" },
    secondary: { label: "See Price & Inclusions", href: "#price" },
  },
  seo: {
    title: "10-Day Luxury Yunnan Private Tour | Tea Horse Road",
    description:
      "Travel privately through Dali, Shaxi, Lijiang and Shangri-La on a 10-day luxury Yunnan tour with boutique stays and expert local access.",
    keywords: [
      "luxury Yunnan tour",
      "Yunnan private tour",
      "Dali Lijiang Shangri-La itinerary",
      "Tea Horse Road tour",
      "private Yunnan cultural journey",
      "luxury China nature tour",
    ],
  },
  overview: {
    pitch:
      "Follow one of China's great cultural corridors from the shores of Erhai to the Tibetan plateau. The route is slow enough to hear the stories behind the scenery, and private enough to change when weather, altitude or curiosity asks for a different day.",
    facts: [
      {
        label: "Duration",
        value: "10 days / 9 nights",
        helper: "Dali 3 nights, Shaxi 2, Lijiang 2 and Shangri-La 2.",
      },
      {
        label: "Best For",
        value: "Couples, friends and repeat visitors",
        helper: "For travelers drawn to culture, landscapes, tea, design and photography.",
      },
      {
        label: "Pacing",
        value: "Balanced, with altitude-aware choices",
        helper: "Three private overland sectors and no same-day sightseeing races.",
      },
      {
        label: "Hotels",
        value: "Luxury boutique and heritage stays",
        helper: "Two rooms are included in the published four-guest price basis.",
      },
      {
        label: "Private Service",
        value: "Guides, premium vehicle and local hosts",
        helper: "No compulsory shopping and no fixed group timetable.",
      },
    ],
  },
  planningSupport: {
    eyebrow: "The highland design",
    title: "The route gains altitude gradually, and never treats comfort as an afterthought.",
    description:
      "The journey begins around 1,970 metres in Dali before progressing through Shaxi and Lijiang to Shangri-La at roughly 3,200 metres. We review health considerations, walking preference and weather before confirming the final daily plan.",
    items: [
      {
        label: "Dali",
        value: "About 1,970 m",
        helper: "Three nights to arrive, settle and explore around Erhai.",
      },
      {
        label: "Shaxi",
        value: "About 2,100 m",
        helper: "Two nights inside the historic market-town rhythm.",
      },
      {
        label: "Lijiang",
        value: "About 2,400 m",
        helper: "Two nights with a mountain day selected around conditions.",
      },
      {
        label: "Shangri-La",
        value: "About 3,200 m",
        helper: "Two nights, with a lower-effort plan always available.",
      },
    ],
    note: "Altitude affects people differently. This itinerary is not medical advice; travelers with relevant health concerns should consult a qualified clinician before booking.",
  },
  highlights: [
    {
      title: "A Bai courtyard, opened through conversation",
      description:
        "Meet a Bai cultural practitioner in or near Xizhou for a private three-course tea ritual, then work beside a tie-dye artisan to create a personal textile rather than watching a staged demonstration.",
      category: "Culture",
      image: yunnanTeaHorseRoadAsset.erhai,
    },
    {
      title: "Shaxi after the day visitors leave",
      description:
        "Stay for the quiet hours around Sideng Square, trace the caravan story with a local historian and share a private courtyard dinner shaped around the valley's seasonal produce.",
      category: "Luxury",
      image: yunnanTeaHorseRoadAsset.shaxiNight,
    },
    {
      title: "From Naxi cosmology to the Tibetan plateau",
      description:
        "Sit with a Dongba cultural specialist in Lijiang, cross Tiger Leaping Gorge by private road and reach Shangri-La gradually for monastery interpretation and a respectfully hosted highland table.",
      category: "Culture",
      image: yunnanTeaHorseRoadAsset.songzanlin,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrive in Dali, where the highlands begin gently",
      destination: "Dali",
      summary:
        "Meet your private driver at Dali airport or railway station and settle beside Erhai or within a carefully chosen heritage setting. The afternoon remains intentionally light: rest, walk briefly by the water or meet your guide over tea for an unhurried route briefing. Effort budget: Low.",
      image: yunnanTeaHorseRoadAsset.erhai,
      hotel: hotelByPlace.dali,
      meals: ["Welcome tea", "Optional light dinner"],
      transport: "Private Dali arrival transfer",
      activities: [
        {
          title: "A protected arrival",
          description:
            "Airport or station timing, luggage and the direct hotel transfer are managed without placing a major sight after the journey in.",
        },
        {
          title: "Private highland briefing",
          description:
            "Meet your guide over tea to review weather, walking levels, altitude and the cultural interests that should shape the next nine days.",
        },
      ],
      guideNote: "No major touring is scheduled on arrival day.",
      coordinates: { latitude: 25.6065, longitude: 100.2676 },
    },
    {
      day: 2,
      title: "Erhai, Xizhou and the living language of Bai design",
      destination: "Dali and Xizhou",
      summary:
        "Reach Xizhou before its busiest hours and read the painted facades, courtyards and village lanes with a Bai cultural practitioner. A private three-course tea ritual and a hands-on tie-dye session turn architecture and pattern into a personal encounter. Finish with an unhurried lakeside lunch. Effort budget: Medium.",
      image: yunnanTeaHorseRoadAsset.erhai,
      hotel: hotelByPlace.dali,
      meals: ["Breakfast", "Selected lakeside or courtyard lunch"],
      transport: "Private vehicle and private guide",
      activities: [
        {
          title: "Xizhou before the crowd builds",
          description:
            "Explore selected lanes and courtyards with context on Bai trade, family life and architectural symbolism rather than following a shopping route.",
        },
        {
          title: "Private three-course tea",
          description:
            "Join a Bai host or cultural practitioner for san dao cha, with time to understand how its bitter, sweet and lingering tastes carry social meaning.",
        },
        {
          title: "Make with a working tie-dye artisan",
          description:
            "Choose, bind and dye a small textile beside an artisan whose time and knowledge are privately contracted and fairly compensated.",
        },
      ],
      guideNote:
        "The final host and studio are named in the proposal; private homes and working spaces remain subject to consent and availability.",
      coordinates: { latitude: 25.8526, longitude: 100.1334 },
    },
    {
      day: 3,
      title: "Tea, mountains and an afternoon that still belongs to you",
      destination: "Dali",
      summary:
        "Spend the morning with a tea specialist exploring leaf, water and the trade routes that connected Yunnan to Tibet and beyond. Continue to a scenic private picnic or chef-prepared countryside lunch, then keep the afternoon free for a spa, a gentle Cangshan foothill walk or quiet time by Erhai. Effort budget: Low to medium.",
      image: yunnanTeaHorseRoadAsset.erhai,
      hotel: hotelByPlace.dali,
      meals: ["Breakfast", "Private picnic or selected countryside lunch"],
      transport: "Private vehicle matched to the selected option",
      activities: [
        {
          title: "Tea as the beginning of the route",
          description:
            "Compare several Yunnan teas with a private specialist and learn how origin, age and preparation altered their value along the old caravan network.",
        },
        {
          title: "A table placed in the landscape",
          description:
            "Pause for a carefully prepared picnic or reserved countryside table, selected for food and setting rather than social-media spectacle.",
        },
        {
          title: "Your Dali afternoon",
          description:
            "Choose a light foothill walk, independent old-town time, a hotel spa or complete rest before the journey north.",
        },
      ],
      guideNote:
        "Tea content is adapted for enthusiasts and newcomers; tasting does not require buying tea.",
      coordinates: { latitude: 25.6895, longitude: 100.1549 },
    },
    {
      day: 4,
      title: "Follow the old road north to Shaxi",
      destination: "Dali to Shaxi",
      summary:
        "Travel north by premium private vehicle, breaking the drive at a chosen village, market or preserved section of the old caravan route. Arrive in Shaxi with time to settle into a restored courtyard stay before a first walk through Sideng Square in the softer evening light. Effort budget: Low to medium.",
      image: yunnanTeaHorseRoadAsset.shaxiDay,
      hotel: hotelByPlace.shaxi,
      meals: ["Breakfast", "Selected lunch en route"],
      transport:
        "Private overland transfer from Dali to Shaxi, approximately 3 to 4 hours plus stops",
      activities: [
        {
          title: "A transfer day with a reason to remember it",
          description:
            "The en-route stop is selected close to travel for market timing, road conditions and genuine local relevance.",
        },
        {
          title: "Shaxi at the gentler hour",
          description:
            "Enter Sideng Square after the day-trip rhythm begins to fade and learn how theater, temple, shops and mule caravans once shared the same civic space.",
        },
      ],
      guideNote:
        "Drive time varies with road and weather conditions; no rigid dinner timing is imposed.",
      coordinates: { latitude: 26.3197, longitude: 99.8514 },
    },
    {
      day: 5,
      title: "Stone grottoes, caravan stories and Shaxi after dark",
      destination: "Shaxi and Shibaoshan",
      summary:
        "Begin at Shibaoshan when conditions are calm, choosing a focused grotto and temple route rather than trying to cover the entire mountain. Return for a slow afternoon in the valley, then meet a local historian or long-term preservation practitioner before a private seasonal courtyard dinner. Effort budget: Medium, with a lower-walking alternative.",
      image: yunnanTeaHorseRoadAsset.shaxiNight,
      hotel: hotelByPlace.shaxi,
      meals: ["Breakfast", "Selected lunch", "Private courtyard dinner"],
      transport: "Private vehicle and private guide",
      activities: [
        {
          title: "Shibaoshan, selectively explored",
          description:
            "See a chosen sequence of Buddhist grottoes, forest paths and temple architecture with walking calibrated to ability and weather.",
        },
        {
          title: "A private Tea Horse Road salon",
          description:
            "Sit with a historian, preservation practitioner or deeply knowledgeable local voice over maps, photographs and tea to understand what the caravan era changed here.",
        },
        {
          title: "Courtyard dinner after the square quiets",
          description:
            "Share a privately arranged seasonal menu in a heritage setting, with dietary preferences discussed before the journey.",
        },
      ],
      guideNote:
        "Shibaoshan includes steps and uneven ground. A valley culture and countryside plan is available when the mountain route is unsuitable.",
      coordinates: { latitude: 26.356, longitude: 99.833 },
    },
    {
      day: 6,
      title: "From quiet Shaxi to Lijiang's hidden courtyards",
      destination: "Shaxi to Lijiang",
      summary:
        "Leave after breakfast for the private drive to Lijiang. After check-in and rest, enter the old town on a route timed around visitor flow, moving away from the loudest commercial lanes into quieter waterways, family courtyards and the city's layered Naxi story. Effort budget: Low to medium.",
      image: yunnanTeaHorseRoadAsset.lijiangNight,
      hotel: hotelByPlace.lijiang,
      meals: ["Breakfast", "Selected lunch en route"],
      transport: "Private overland transfer from Shaxi to Lijiang, approximately 2.5 to 3 hours",
      activities: [
        {
          title: "A humane transfer",
          description:
            "Departure and rest stops are selected around the group rather than a fixed coach schedule.",
        },
        {
          title: "Lijiang beyond the busiest lanes",
          description:
            "Follow water, timber and courtyard architecture with a guide who can explain how local life and tourism now coexist.",
        },
      ],
      guideNote:
        "Old-town paving is uneven and vehicle access is limited; luggage handling and the final hotel approach are planned in advance.",
      coordinates: { latitude: 26.8721, longitude: 100.2299 },
    },
    {
      day: 7,
      title: "Naxi cosmology beneath Jade Dragon Snow Mountain",
      destination: "Lijiang and Baisha",
      summary:
        "Meet a Dongba cultural specialist for a private introduction to Naxi pictographic writing, ritual objects and cosmology, then continue toward Baisha and the mountain landscape. Choose a scenic foothill route and elegant picnic, or a higher-elevation cableway plan only when health, weather and ticket conditions support it. Effort budget: Medium; high-altitude option available.",
      image: yunnanTeaHorseRoadAsset.jadeDragon,
      hotel: hotelByPlace.lijiang,
      meals: ["Breakfast", "Private picnic or selected Baisha lunch"],
      transport: "Private vehicle and private guide",
      activities: [
        {
          title: "Private Dongba culture session",
          description:
            "Explore selected pictographs, stories and ritual objects with a qualified local practitioner or specialist, with interpretation matched to your interests.",
        },
        {
          title: "Baisha and the mountain horizon",
          description:
            "Use an older village base to understand Naxi history and see Jade Dragon Snow Mountain without making extreme altitude the only measure of the day.",
        },
        {
          title: "Choose the mountain level",
          description:
            "Select a gentle foothill and meadow experience or a cableway-based high-altitude visit after reviewing health, weather, ticket availability and crowd conditions.",
        },
      ],
      guideNote:
        "The highest cableway reaches very high elevation and is never treated as compulsory. Ticketing and operating conditions are reconfirmed for the date.",
      coordinates: { latitude: 27.099, longitude: 100.175 },
    },
    {
      day: 8,
      title: "Through Tiger Leaping Gorge to the Tibetan plateau",
      destination: "Lijiang to Shangri-La",
      summary:
        "Travel north through one of Yunnan's most dramatic landscapes, stopping at a gorge viewpoint selected for safe access and current conditions. Continue gradually toward Shangri-La, check into the highland lodge and leave the evening free for warmth, hydration and rest. Effort budget: Low to medium.",
      image: yunnanTeaHorseRoadAsset.tigerLeapingGorge,
      hotel: hotelByPlace.shangriLa,
      meals: ["Breakfast", "Selected lunch en route", "Light arrival dinner"],
      transport:
        "Private overland transfer from Lijiang to Shangri-La, approximately 4.5 to 6 hours including the gorge stop",
      activities: [
        {
          title: "Tiger Leaping Gorge without a forced hike",
          description:
            "Take in the Jinsha River and mountain walls from the most suitable accessible viewpoint; a longer walking route is added only by prior design.",
        },
        {
          title: "A deliberate highland arrival",
          description:
            "Check-in, hydration, a light meal and an early night take priority over sightseeing after reaching roughly 3,200 metres.",
        },
      ],
      guideNote:
        "Road, weather and access conditions can change. The route and viewpoint are confirmed close to travel.",
      coordinates: { latitude: 27.191, longitude: 100.091 },
    },
    {
      day: 9,
      title: "Songzanlin, highland life and a final table together",
      destination: "Shangri-La",
      summary:
        "Begin slowly and visit Ganden Sumtseling Monastery with private interpretation focused on place, practice and respectful visitor behavior. The afternoon can include a short wetland viewpoint, a craft encounter or complete lodge rest. Rejoin for a hosted highland dinner arranged with consent and fair compensation. Effort budget: Low to medium.",
      image: yunnanTeaHorseRoadAsset.songzanlin,
      hotel: hotelByPlace.shangriLa,
      meals: ["Breakfast", "Selected lunch", "Hosted farewell dinner"],
      transport: "Private vehicle and private guide",
      activities: [
        {
          title: "Songzanlin with context",
          description:
            "Explore the monastery at a measured pace with a guide able to interpret its living religious setting, architecture and appropriate etiquette.",
        },
        {
          title: "An afternoon chosen at altitude",
          description:
            "Select a short landscape outing, a privately contracted craft visit or complete lodge time after seeing how everyone feels that morning.",
        },
        {
          title: "A respectfully hosted highland table",
          description:
            "Share a private dinner with a local host or cultural practitioner in an agreed setting, with dietary needs and cultural boundaries arranged in advance.",
        },
      ],
      guideNote:
        "No private home or religious access is promised until the host and date are confirmed in writing.",
      coordinates: { latitude: 27.8615, longitude: 99.7047 },
    },
    {
      day: 10,
      title: "Depart Shangri-La, or continue deeper into Yunnan",
      destination: "Shangri-La",
      summary:
        "Keep the final morning light and transfer privately to Diqing Shangri-La airport with the correct check-in buffer. Travelers continuing to Meili, Kunming or another China gateway receive a separately designed onward plan rather than an improvised connection. Effort budget: Low.",
      image: yunnanTeaHorseRoadAsset.dukezong,
      meals: ["Breakfast"],
      transport: "Private Shangri-La airport transfer",
      activities: [
        {
          title: "Protected departure",
          description:
            "Flight status, pickup, luggage and airport timing are reconfirmed by the local team.",
        },
        {
          title: "Optional Yunnan extension",
          description:
            "Add Meili Snow Mountain, a longer tea chapter or a Kunming connection through a separately paced extension.",
        },
      ],
      guideNote:
        "The published journey ends in Shangri-La; domestic flights and post-tour accommodation are quoted around the international itinerary.",
      coordinates: { latitude: 27.8297, longitude: 99.7008 },
    },
  ],
  accommodations: [
    {
      name: "Dali luxury lakeside or heritage stay",
      destination: "Dali",
      description:
        "Three nights selected for a strong sense of place, quiet rooms, reliable breakfast, room comfort and efficient access to Erhai, Xizhou and the northbound road.",
      roomStyle: "Luxury room or higher, with the exact property and category named in writing",
      highlights: [
        "3-night continuity",
        "Two-room basis",
        "Quiet-room request",
        "Strong local setting",
      ],
      image: yunnanTeaHorseRoadAsset.erhai,
    },
    {
      name: "Shaxi restored courtyard retreat",
      destination: "Shaxi",
      description:
        "Two nights in a carefully inspected boutique stay that allows travelers to experience Shaxi before and after the day visitors, while balancing heritage atmosphere with dependable comfort.",
      roomStyle: "Best suitable boutique category, named in the written proposal",
      highlights: [
        "Inside the valley rhythm",
        "Heritage character",
        "Heating reviewed",
        "Luggage plan",
      ],
      image: yunnanTeaHorseRoadAsset.shaxiNight,
    },
    {
      name: "Lijiang luxury heritage or mountain-view stay",
      destination: "Lijiang",
      description:
        "Two nights selected around quietness, service, vehicle access and the preferred balance between old-town atmosphere and mountain outlook.",
      roomStyle: "Luxury room or suite option, named in the written proposal",
      highlights: [
        "Quiet setting",
        "Private transfer access",
        "Mountain or heritage option",
        "Room audit",
      ],
      image: yunnanTeaHorseRoadAsset.lijiangNight,
    },
    {
      name: "Shangri-La premium highland lodge",
      destination: "Shangri-La",
      description:
        "Two nights in a premium lodge such as a suitable Songtsam property or an equivalent confirmed for the dates, selected for warmth, service response, comfortable rooms and sensible access at altitude.",
      roomStyle: "Premium lodge room or higher, named and confirmed in writing",
      highlights: [
        "Altitude-aware service",
        "Heating reviewed",
        "Lodge rest time",
        "Two-room basis",
      ],
      image: yunnanTeaHorseRoadAsset.songzanlin,
    },
  ],
  included: [
    "9 nights in selected luxury boutique, heritage and highland hotels, based on four guests sharing two rooms",
    "Daily hotel breakfast, selected lunches, private picnic or countryside table, Shaxi courtyard dinner and Shangri-La farewell dinner as confirmed in the proposal",
    "Private English-speaking guides and private premium vehicle on confirmed touring and transfer days",
    "Private Dali arrival transfer and Shangri-La departure transfer",
    "Confirmed entrance tickets and listed site transport arrangements",
    "Private Bai three-course tea, tie-dye artisan session, Yunnan tea specialist session, Tea Horse Road salon and Dongba culture session, or a written equivalent when a named practitioner is unavailable",
    "The altitude-aware route design, weather alternatives, restaurant reservations and China-based journey support",
    "No compulsory shopping stops",
  ],
  excluded: [
    "International flights and domestic flights to Dali or from Shangri-La",
    "Travel insurance, visas and personal medical expenses",
    "Meals, drinks and room-service charges not stated as included",
    "Hotel spa treatments, laundry and personal purchases",
    "Jade Dragon Snow Mountain high cableway unless specifically included in the written proposal",
    "Meili Snow Mountain, Kunming or other pre- and post-tour extensions",
    "Tips and gratuities unless specifically included in the written proposal",
  ],
  optionalExperiences: [
    {
      title: "Meili Snow Mountain private extension",
      description:
        "Continue beyond Shangri-La for three or four nights with a carefully staged highland route, scenic lodges and weather-dependent mountain viewing.",
      badges: ["High altitude", "3-4 nights"],
      image: yunnanTeaHorseRoadAsset.jadeDragon,
    },
    {
      title: "Private Yunnan photography specialist",
      description:
        "Add a photographer-guide for selected dawn, village, architecture and landscape sessions, with permissions and cultural boundaries planned in advance.",
      badges: ["Private", "Photography"],
      image: yunnanTeaHorseRoadAsset.tigerLeapingGorge,
    },
    {
      title: "Signature lodge and suite upgrade",
      description:
        "Prioritize the strongest available Songtsam-level lodges, larger rooms, suites and private dining where the upgrade materially improves the journey.",
      badges: ["Signature", "Quoted to dates"],
      image: yunnanTeaHorseRoadAsset.songzanlin,
    },
  ],
  transportation: {
    title: "One continuous private road journey, with no airport hopping inside Yunnan",
    description:
      "Dali, Shaxi, Lijiang and Shangri-La form a logical northbound sequence. A dedicated private vehicle keeps luggage with the group, allows meaningful stops and makes it possible to change pace as altitude and weather change.",
    items: [
      {
        label: "Dali to Shaxi",
        value: "About 3-4 hours",
        helper: "Private vehicle plus a selected cultural or landscape stop.",
      },
      {
        label: "Shaxi to Lijiang",
        value: "About 2.5-3 hours",
        helper: "Private door-to-door transfer with rest stops.",
      },
      {
        label: "Lijiang to Shangri-La",
        value: "About 4.5-6 hours",
        helper: "Includes a weather- and access-aware Tiger Leaping Gorge stop.",
      },
      {
        label: "Vehicle standard",
        value: "Premium private vehicle",
        helper: "Final size confirmed around four guests and their luggage.",
      },
    ],
  },
  routeMap: {
    title: "Four places, each revealing a different layer of Yunnan",
    description:
      "The route moves north in a single line, gaining altitude gradually and staying two or three nights in every base.",
    stops: [
      {
        name: "Dali",
        days: "Days 1-3 · 3 nights",
        description: "Erhai, Bai culture, private tea and a soft beginning to the highlands.",
        coordinates: { latitude: 25.6065, longitude: 100.2676 },
      },
      {
        name: "Shaxi",
        days: "Days 4-5 · 2 nights",
        description: "A former caravan market town experienced beyond day-trip hours.",
        coordinates: { latitude: 26.3197, longitude: 99.8514 },
      },
      {
        name: "Lijiang",
        days: "Days 6-7 · 2 nights",
        description: "Naxi cultural depth, Baisha and the Jade Dragon mountain landscape.",
        coordinates: { latitude: 26.8721, longitude: 100.2299 },
      },
      {
        name: "Shangri-La",
        days: "Days 8-10 · 2 nights",
        description: "Tiger Leaping Gorge, Tibetan highland culture and Songzanlin Monastery.",
        coordinates: { latitude: 27.8297, longitude: 99.7008 },
      },
    ],
  },
  gallery: [
    yunnanTeaHorseRoadAsset.erhai,
    yunnanTeaHorseRoadAsset.shaxiDay,
    yunnanTeaHorseRoadAsset.shaxiNight,
    yunnanTeaHorseRoadAsset.lijiangNight,
    yunnanTeaHorseRoadAsset.jadeDragon,
    yunnanTeaHorseRoadAsset.tigerLeapingGorge,
    yunnanTeaHorseRoadAsset.songzanlin,
    yunnanTeaHorseRoadAsset.dukezong,
  ],
  faqs: [
    {
      question: "What does the US$6,680 starting price assume?",
      answer:
        "It is an indicative per-person starting price based on four guests sharing two rooms, traveling outside peak holiday periods. The corresponding group starting total is US$26,720. Final pricing depends on dates, exact hotels and room categories, guide and host availability, transport and selected upgrades.",
    },
    {
      question: "Is this a luxury Yunnan tour or a standard sightseeing package?",
      answer:
        "It is designed as a premium private journey: boutique and heritage stays, a dedicated private vehicle, private guiding, carefully contracted cultural encounters, selected meals, no compulsory shopping and a route that protects the quiet hours in each place. Exact hotels and practitioners are named before booking.",
    },
    {
      question: "How serious is the altitude in Shangri-La?",
      answer:
        "Shangri-La is roughly 3,200 metres above sea level, and altitude affects people differently. The route gains height gradually, the first highland evening is protected and Day 9 can be reduced to lodge rest. This is not medical advice; guests with relevant health conditions should consult a qualified clinician before booking.",
    },
    {
      question: "Do we have to take the high cableway at Jade Dragon Snow Mountain?",
      answer:
        "No. The day is designed with a foothill, Baisha and scenic landscape version that does not depend on extreme altitude. A high cableway visit is included only when the travelers request it and health, weather, operating conditions and ticket availability all support the choice.",
    },
    {
      question: "When is the best time for this Yunnan journey?",
      answer:
        "Spring and autumn often offer the most comfortable overall balance, but Yunnan conditions vary by elevation. Summer brings greener landscapes and a greater rain risk; winter can be clear and atmospheric but colder, especially in Shangri-La. We price and adjust the route for the actual month.",
    },
    {
      question: "Are the private cultural visits guaranteed?",
      answer:
        "No individual host, private home, artisan, specialist or religious access is represented as confirmed until the date and terms are agreed in writing. If a named practitioner is unavailable, AVIORA proposes an equivalent experience for approval rather than quietly substituting a retail demonstration.",
    },
    {
      question: "Can this journey work for travelers who prefer less walking?",
      answer:
        "Yes, within practical limits. Old-town paving, Shibaoshan and monastery areas still include uneven ground or steps, but routes can be shortened and the mountain day can remain at lower altitude. We review daily walking, balance and rest needs before confirmation.",
    },
    {
      question: "Are flights included?",
      answer:
        "Flights to Dali and from Shangri-La are not included in the published starting price because the correct sectors depend on the international itinerary. AVIORA can quote and coordinate them with the private transfers once the gateway plan is known.",
    },
  ],
  related: {
    tours: [
      {
        title: "China in Motion: Chengdu, Chongqing & Zhangjiajie",
        description:
          "A more contemporary regional journey pairing Sichuan food, pandas, city energy and extraordinary mountain scenery.",
        tags: ["Nature", "Food", "Private"],
        image: yunnanTeaHorseRoadAsset.tigerLeapingGorge,
        route: "Chengdu · Chongqing · Zhangjiajie",
        duration: "11 days / 10 nights",
        href: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour",
      },
      {
        title: "China, Considered: Beijing, Xi'an & Shanghai",
        description:
          "The flagship first-China route for travelers who want iconic history with a measured pace and premium support.",
        tags: ["First-time China", "Luxury"],
        image: yunnanTeaHorseRoadAsset.lijiangNight,
        route: "Beijing · Xi'an · Shanghai",
        duration: "12 days / 11 nights",
        href: "/tours/china-at-an-easier-pace-12-day-private-tour",
      },
    ],
    destinations: [],
  },
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=Private%20Yunnan%20Tea%20Horse%20Road%20Proposal&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20a%20private%20proposal%20for%20the%2010-day%20Yunnan%20Tea%20Horse%20Road%20journey.%0A%0ATravel%20month%20or%20dates%3A%0ATravellers%3A%0ARooms%3A%0AHotel%20preference%3A%0AAltitude%20or%20walking%20considerations%3A%0ASpecial%20interests%3A%0A",
    whatsappHref:
      "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20private%20proposal%20for%20Yunnan%2C%20Along%20the%20Tea%20Horse%20Road%20%2810%20days%3A%20Dali%2C%20Shaxi%2C%20Lijiang%20and%20Shangri-La%29.%20We%20are%20considering%20four%20guests%20and%20two%20rooms.%20Please%20advise%20on%20dates%2C%20hotels%20and%20altitude-aware%20pacing.",
    scheduleCallHref: "tel:+447985052302",
    defaultMessage:
      "I am interested in the 10-day private Yunnan Tea Horse Road journey. Please recommend the right hotel level, room setup and altitude-aware plan for our group.",
  },
};
