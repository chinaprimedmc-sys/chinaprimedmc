import { getPublishedPriceDisclosure } from "@/content/tours/published-price-copy";
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
  updatedAt: "2026-11-12",
  title: "10-Day Luxury Yunnan Private Tour",
  subtitle:
    "A 10-day private highland journey through Dali, Shaxi, Lijiang and Shangri-La, shaped by living cultures, remarkable landscapes and boutique stays with a strong sense of place.",
  duration: "10 Days / 9 Nights",
  route: "Dali, Shaxi, Lijiang, Shangri-La",
  styles: ["Luxury", "Culture", "Nature", "Food", "Photography"],
  hero: {
    eyebrow: "AVIORA signature Yunnan journey",
    image: yunnanTeaHorseRoadAsset.hero,
    primary: { label: "Explore the 10 Days", href: "#itinerary" },
    secondary: { label: "See What Is Included", href: "#included" },
  },
  seo: {
    title: "10-Day Luxury Yunnan Private Tour",
    description:
      "Follow Yunnan’s Tea Horse Road through Dali, Shaxi, Lijiang and Shangri-La in ten days, with boutique hotels, private guides and cultural sessions confirmed for you.",
    keywords: [
      "luxury Yunnan private tour 10 days",
      "Dali Shaxi Lijiang Shangri La itinerary",
      "Yunnan Tea Horse Road private guide",
      "Yunnan altitude private tour",
    ],

    preserveCopy: true,
  },
  overview: {
    pitch:
      "Follow one of China's great cultural corridors from the shores of Erhai to the Tibetan plateau. The route is slow enough to hear the stories behind the scenery, and private enough to change when weather, altitude or curiosity asks for a different day.",
    facts: [
      {
        label: "Hotels",
        value: "Dali 3 · Shaxi 2 · Lijiang 2 · Shangri-La 2; selected boutique and highland hotels",
      },
      {
        label: "Pacing",
        value:
          "Private overland cultural journey with rising altitude and optional high mountain access",
      },
      {
        label: "Suitable for",
        value:
          "Travelers interested in regional culture, tea, artisan practice and distinctive stays who accept an overland route and increasing altitude.",
      },
    ],

    practicalities: [
      {
        label: "Best for",
        value:
          "Travelers interested in regional culture, tea, artisan practice and distinctive stays who accept an overland route and increasing altitude.",
      },
      {
        label: "Nights",
        value: "Dali 3 nights, Shaxi 2, Lijiang 2 and Shangri-La 2: 9 nights in 4 hotel bases.",
      },
      {
        label: "Gateways",
        value:
          "Arrive in Dali and depart from Diqing Shangri-La. Flights to Dali and from Shangri-La are not included in the published package.",
      },
      {
        label: "Road travel",
        value:
          "Private vehicle on the confirmed travel and sightseeing days. Dali–Shaxi, Shaxi–Lijiang and Lijiang–Shangri-La are substantial overland segments, with breaks and final times checked.",
      },
      {
        label: "Hotels",
        value:
          "Selected luxury boutique, heritage and highland stays. Exact property, category, room approach and luggage arrangements are confirmed; old-town roads may restrict vehicle access.",
      },
      {
        label: "Culture",
        value:
          "The listed Bai tea, tie-dye, tea-specialist, Tea Horse Road and Dongba sessions are privately arranged with a confirmed host or agreed equivalent.",
      },
      {
        label: "Altitude",
        value:
          "Dali and Lijiang already sit at elevation; Shangri-La is roughly 3,200 meters. Gradual sequencing does not prevent altitude illness. Seek individual medical advice if relevant.",
      },
      {
        label: "Mountain choices",
        value:
          "The highest Jade Dragon Snow Mountain cableway is optional and not included unless quoted. Gorge viewpoints and lower mountain routes still need a current access and fitness review.",
      },
      {
        label: "Meals",
        value:
          "Breakfast and specifically listed lunches, courtyard tables and farewell dining are included. Hotel spas, unlisted meals, drinks and purchases remain separate.",
      },
      {
        label: "Starting-price basis",
        value: getPublishedPriceDisclosure("luxury-yunnan-private-tour"),
      },
    ],

    answer:
      "Follow Yunnan’s Tea Horse Road in ten days from Dali through Shaxi and Lijiang to Shangri-La. Nine nights in selected boutique, heritage and highland hotels, private overland travel and listed cultural sessions are included. The route rises in altitude, with light arrival periods and optional higher mountain access. Gateway flights, the highest Jade Dragon cableway and unlisted meals or spa treatments are separate.",
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
            "Use a viewpoint selected around current access, weather and your walking ability. Viewpoint approaches can still involve steps and uneven ground; this is not a guaranteed step-free visit. A longer gorge hike requires a separately designed route.",
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
    "9 nights in selected luxury boutique, heritage and highland hotels, with rooms and occupancy confirmed for your actual party",
    "Daily hotel breakfast, selected lunches, private picnic or countryside table, Shaxi courtyard dinner and Shangri-La farewell dinner as confirmed in the proposal",
    "Private multilingual guides and private premium vehicle on confirmed touring and transfer days",
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
        helper: "Final size confirmed around your actual party and luggage.",
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
      question: "What does this private tour cost, and what is the starting-price basis?",
      answer: getPublishedPriceDisclosure("luxury-yunnan-private-tour"),
    },
    {
      question: "What makes this a luxury Yunnan tour rather than a standard sightseeing circuit?",
      answer:
        "The proposed value is nine nights in selected distinctive stays, private road travel, contracted cultural time and selected hosted meals along a coherent route. The proposal names properties, rooms, hosts and inclusions. Luxury is not a promise of a particular brand, unrestricted access or identical hotel facilities in every town.",
    },
    {
      question: "How many nights do we spend in each Yunnan town?",
      answer:
        "Three in Dali, two in Shaxi, two in Lijiang and two in Shangri-La. This gives time to stay in Shaxi rather than treat it as a roadside photo stop, while leaving light periods after higher-altitude arrival. The trip involves three hotel changes; it is not a single-resort retreat.",
    },
    {
      question: "Are flights to Dali and from Shangri-La included?",
      answer:
        "No. The published package includes the confirmed local arrival and departure transfers, not the gateway flights. Your international and domestic tickets should be coordinated with the road route before purchase. Kunming, Meili or another onward destination needs a separate extension rather than an assumed included connection.",
    },
    {
      question: "Is Shangri-La altitude safe for everyone?",
      answer:
        "No route can guarantee that. Shangri-La is around 3,200 meters, and earlier towns are also at elevation. The itinerary builds in slower arrival periods but is not medical supervision. Discuss health concerns with your clinician before booking and tell us if a lower-altitude redesign is essential; that is a different route and quote.",
    },
    {
      question: "Do we have to take the highest Jade Dragon Snow Mountain cableway?",
      answer:
        "No. The highest cableway is an optional, separately confirmed choice, subject to tickets, weather and personal suitability. The planned cultural and foothill alternatives do not require proving anything by reaching the highest point. A lower outing still has its own access, walking and elevation considerations.",
    },
    {
      question: "Are the private artisan and cultural sessions guaranteed?",
      answer:
        "The package includes the listed sessions as confirmed, but a specific named person or private home is not guaranteed before agreement. Your proposal identifies the host or an agreed equivalent, venue, duration, interpretation and any making materials. Visits respect consent and do not require buying tea, textiles or other goods.",
    },
    {
      question: "Does Tiger Leaping Gorge mean a full trekking day?",
      answer:
        "No. The route uses a viewpoint or shorter visit selected for safe access during the northbound transfer. A longer gorge hike is a separately designed activity with different time, fitness and weather requirements. Do not assume every viewpoint is step-free because the itinerary avoids a full trek.",
    },
    {
      question: "Can the vehicle take us directly to every heritage hotel door?",
      answer:
        "Not always. Old-town paving, narrow lanes and vehicle restrictions can affect the last part of the approach. The proposal should explain the actual arrival point, walking distance and any contracted luggage handling. Send mobility and luggage needs before choosing the hotel, especially in Shaxi and Lijiang.",
    },
    {
      question: "Which meals and wellness services are included?",
      answer:
        "Hotel breakfasts and the specifically listed hosted meals, picnics or reserved tables are included as confirmed. Spa treatments, room service and unlisted drinks or meals are separate. A hotel with a spa does not make this a therapeutic program. Dietary requirements must be checked with each kitchen and host.",
    },
    {
      question: "When is the best season for this private Yunnan route?",
      answer:
        "Choose by your priorities and tolerance for rain, cold, altitude and holiday crowds. The towns and mountain sections can have different conditions on the same trip. We check date-specific road, activity and hotel arrangements; no season guarantees clear peaks, flowers or an identical cultural calendar.",
    },
  ],
  related: {
    useListedTours: true,
    tours: [
      {
        title: "10-Day Qingcheng Mountain Wellness Retreat",
        description:
          "Choose a continuous seven-night mountain resort stay with confirmed cultural sessions and two treatments per guest.",
        tags: ["Wellness", "Luxury", "Nature"],
        image: {
          src: "/home/editorial/great-wall-private-china-travel.webp",
          alt: "Photography for the Qingcheng Mountain retreat is being prepared",
          width: 1920,
          height: 1080,
        },
        route: "Chengdu · Qingcheng Mountain",
        duration: "10 days / 9 nights",
        href: "/tours/qingcheng-mountain-private-wellness-retreat-10-day",
      },
      {
        title: "11-Day Chengdu, Chongqing and Zhangjiajie Tour",
        description:
          "Choose pandas, Sichuan and Chongqing city life, and sandstone scenery instead of Yunnan’s overland cultural route.",
        tags: ["Nature", "Food", "Photography"],
        image: {
          src: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour/hero-01.webp",
          alt: "International travelers looking across Zhangjiajie's sandstone peaks in soft mountain light",
          width: 1600,
          height: 1067,
          priority: true,
        },
        route: "Chengdu · Chongqing · Zhangjiajie",
        duration: "11 days / 10 nights",
        href: "/tours/chengdu-chongqing-zhangjiajie-private-11-day-tour",
      },
    ],

    destinations: [],
  },
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=Private%20Yunnan%20Tea%20Horse%20Road%20Proposal&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20a%20private%20proposal%20for%20the%2010-day%20Yunnan%20Tea%20Horse%20Road%20journey.%0A%0ATravel%20month%20or%20dates%3A%0ATravellers%3A%0ARooms%3A%0AHotel%20preference%3A%0AAltitude%20or%20walking%20considerations%3A%0ASpecial%20interests%3A%0A",
    whatsappHref:
      "https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%20am%20interested%20in%20your%2010-Day%20Luxury%20Yunnan%20Private%20Tour.%20Our%20travelers%3A%20__.%20Dates%3A%20__.%20Rooms%3A%20__.%20Please%20recommend%20the%20right%20service%20plan%20and%20quote%20for%20our%20actual%20party.",
    scheduleCallHref: "tel:+8618027438191",
    defaultMessage:
      "I am interested in the 10-day private Yunnan Tea Horse Road journey. Please recommend the right hotel level, room setup and altitude-aware plan for our group.",
  },

  planningResources: [
    {
      label: "UNESCO: Old Town of Lijiang",
      href: "https://whc.unesco.org/en/list/811/",
      officialPublisher: "UNESCO World Heritage Centre",
      description:
        "Historical background on Lijiang. The listing does not certify our hosts, hotel quality, altitude suitability or access to private homes.",
    },
    {
      label: "Yunnan altitude and route planning",
      href: "/journal/yunnan-altitude-private-tour",
      description:
        "Understand why lower mountain choices and arrival pacing still require individual health and access decisions.",
    },
  ],

  faqLimit: 13,

  inquiryChecklist: [
    "Dates and Dali arrival / Shangri-La departure plans",
    "Travelers, rooms and preferred hotel level",
    "Comfort with altitude and overland transfers",
    "Tea, artisan or cultural interests",
    "Dietary needs and preferred mountain option",
  ],

  comparison: {
    title: "An overland cultural journey or a mountain retreat?",
    intro: "Both allow time to pause, but the travel pattern and altitude are very different.",
    columns: ["Decision", "This Yunnan journey", "Qingcheng retreat"],
    rows: [
      ["Bases", "Dali, Shaxi, Lijiang and Shangri-La", "Chengdu and one mountain resort"],
      ["Movement", "Three hotel changes and regional road journeys", "One hotel change"],
      [
        "Purpose",
        "Tea, artisans, regional history and rising altitude",
        "Cultural wellbeing sessions and protected quiet time",
      ],
    ],
    href: "/tours/qingcheng-mountain-private-wellness-retreat-10-day",
    linkLabel: "Compare the alternative itinerary",
  },
};
