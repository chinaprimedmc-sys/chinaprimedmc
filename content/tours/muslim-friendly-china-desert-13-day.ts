import type { MediaAsset } from "@/types/component-library";
import type { Tour } from "@/types/tour";

// The product is intentionally published in a no-photography mode for now. The asset shape keeps
// the content model complete while visualStatus prevents this unpublished media from rendering.
const pendingImage: MediaAsset = {
  // A real, already-catalogued site asset satisfies the shared content contract. The pending
  // visual status ensures it is never rendered or advertised as this product's photography.
  src: "/home/editorial/great-wall-private-china-travel.webp",
  alt: "Photography for this journey will be added after the route is confirmed",
  width: 1920,
  height: 1080,
};

const hotelByPlace = {
  beijing: "Selected premium five-star Beijing hotel · 4 nights · two rooms",
  xian: "Selected premium five-star Xi'an hotel · 3 nights · two rooms",
  ningxia: "Best-available premium Ningxia stay · 3 nights · two rooms",
  zhongwei: "Premium desert lodge or strongest confirmed equivalent · 1 night · two rooms",
  shanghai: "Selected premium five-star Shanghai hotel · 1 night · two rooms",
};

export const muslimFriendlyChinaDesert13DayTour: Tour = {
  slug: "muslim-friendly-china-tour-great-wall-desert-stars",
  visualStatus: "pending",
  publishedAt: "2026-08-21",
  updatedAt: "2026-08-21",
  title: "China, From the Great Wall to Desert Stars",
  subtitle:
    "Stand on the Great Wall with a private halal picnic, make noodles in Xi'an, discover Hui Muslim food traditions in northwest China and watch the stars above the desert before a final night in Shanghai.",
  duration: "13 Days / 12 Nights",
  route: "Beijing, Xi'an, Yinchuan, Zhongwei, Shanghai",
  styles: ["Muslim-friendly", "Luxury", "Culture", "Food", "Family"],
  hero: {
    eyebrow: "AVIORA signature Muslim-friendly journey",
    image: pendingImage,
    primary: { label: "Request My Private Proposal", href: "#inquiry" },
    secondary: { label: "See the 13-Day Route", href: "#itinerary" },
  },
  seo: {
    title: "13-Day Muslim-Friendly Private China Tour",
    description:
      "A 13-day private Muslim-friendly China tour from Beijing to Xi'an, Ningxia and Shanghai, with verified dining, Silk Road heritage, a premium desert lodge and stargazing.",
    keywords: [
      "Muslim friendly China tour",
      "halal China tour",
      "private Muslim China tour",
      "China Muslim family tour",
      "Ningxia private tour",
      "Xi'an halal food tour",
      "China desert stargazing tour",
    ],
  },
  overview: {
    pitch:
      "Over thirteen days, walk through imperial courtyards, eat beside the Great Wall, shape a clay warrior, enter Xi'an's Chinese-Islamic world, read ancient marks beneath the Helan Mountains and watch the desert turn from gold to black. Every meal, prayer-aware transition and room requirement is reviewed before confirmation.",
    facts: [
      {
        label: "Duration",
        value: "13 days / 12 nights",
        helper: "Beijing 4 nights, Xi'an 3, Ningxia 3, Zhongwei 1 and Shanghai 1.",
      },
      {
        label: "Best For",
        value: "Muslim families, couples and private groups",
        helper: "For travelers who want iconic China without compromising food, faith or comfort.",
      },
      {
        label: "Pacing",
        value: "Balanced, with protected prayer and recovery windows",
        helper: "One principal experience per day, with timing adapted to your group.",
      },
      {
        label: "Hotels",
        value: "Premium city hotels and best-available desert stay",
        helper: "Two rooms for four guests; Ningxia accommodation is date-specific.",
      },
      {
        label: "Private Service",
        value: "AVIORA Muslim Journey Standard",
        helper:
          "Dietary profile, meal verification, prayer-aware planning and China-based backup support.",
      },
    ],
  },
  experienceChapters: [
    {
      location: "Beijing",
      days: "Days 1-4",
      title: "Imperial scale, then your own table beside the Great Wall",
      description:
        "Beijing begins with the monumental China you came to see, but the defining moment is more personal: a Wall day paced around your family and a meal prepared to your dietary brief.",
      see: "The Forbidden City's vermilion gates, the blue roofs of the Temple of Heaven, Great Wall ridgelines and the Chinese architecture of Niujie, Beijing's historic Muslim quarter.",
      do: "Walk the Wall at your chosen level, sit down to a private halal picnic or confirmed countryside table, take natural family portraits and explore the food traditions around Niujie Mosque.",
      feel: "The scale of China's best-known landmark, without feeling swallowed by the crowd or uncertain about the next meal and prayer window.",
    },
    {
      location: "Xi'an",
      days: "Days 5-7",
      title: "An army from the earth and a Silk Road story you can touch",
      description:
        "Xi'an connects imperial history with the Muslim traders, cooks and communities who shaped one of the world's great crossroads.",
      see: "Thousands of individually modelled Terracotta Warriors, the old city walls, the Great Mosque's layered courtyards and the movement of the Muslim Quarter.",
      do: "Shape a small clay warrior with an artisan, walk the mosque quarter and pull halal noodles or prepare paomo, Xi'an's bread-and-lamb soup, in a private kitchen session.",
      feel: "History becoming physical: clay in your hands, bread or noodles at your table and a clearer understanding of how Islam became part of the Chinese story.",
    },
    {
      location: "Yinchuan, Ningxia",
      days: "Days 8-10",
      title: "Rock art, Yellow River light and Hui Muslim hospitality",
      description:
        "After Beijing and Xi'an, you fly west to Ningxia, one of China's most important Hui Muslim regions. Here the journey shifts to dry mountain landscapes, centuries-old human marks and a food culture rarely explained to international visitors.",
      see: "The Helan Mountains against open sky, ancient images carved into rock, the softer light along the Yellow River and the working rhythm of Yinchuan, Ningxia's capital.",
      do: "Trace the stories behind the rock art and sit down with a consenting, fairly compensated host or cook from the Hui Muslim community for a verified meal or culinary encounter.",
      feel: "That you have moved beyond sightseeing into a real regional conversation, while knowing the encounter is respectful rather than staged.",
    },
    {
      location: "Zhongwei Desert",
      days: "Days 11-12",
      title: "Desert silence, an alcohol-free sunset dinner and the night sky",
      description:
        "At Zhongwei, on the edge of the Tengger Desert in northwest China, the journey deliberately slows. There is no second checklist: just the dunes, changing light, dinner and the sky after dark.",
      see: "Sand meeting the Yellow River landscape, long shadows across the dunes, a clear horizon at sunset and stars when weather and sky conditions allow.",
      do: "Walk the dune edge at your preferred level, eat an alcohol-free dinner planned to your dietary brief and stargaze with simple equipment or an available local guide.",
      feel: "The rare quiet of a China journey that finally stops moving, with one night your family is likely to talk about long after returning home.",
    },
    {
      location: "Shanghai",
      days: "Days 12-13",
      title: "From Silk Road memory to China's modern horizon",
      description:
        "Shanghai is a short, deliberate finale rather than another full destination compressed into a day. It lets the journey end with China's modern confidence in view.",
      see: "The Bund's historic facades facing the Pudong skyline, river traffic and, flight time permitting, the texture of a lived-in lane neighborhood.",
      do: "Choose a concise architecture walk, a verified farewell meal or a private kitchen chapter before a protected airport transfer.",
      feel: "The contrast of thirteen days in one final frame: imperial China, Muslim China, desert China and the future-facing city across the river.",
    },
  ],
  planningSupport: {
    eyebrow: "AVIORA Muslim Journey Standard",
    title: "A Muslim-friendly journey is a process, not a restaurant list.",
    description:
      "Before we quote, we build a practical profile around your food rules, prayer practice, room needs, family rhythm and comfort with local experiences. The team then reconfirms the details that matter in China, city by city.",
    items: [
      {
        label: "01 · Your profile",
        value: "Dietary, prayer and room brief before pricing",
        helper:
          "Halal level, allergies, prayer timing, Friday needs, beds, connecting rooms and women guide requests are recorded.",
      },
      {
        label: "02 · Meal language",
        value: "Halal-certified, Muslim-owned, no-pork and vegetarian are distinguished",
        helper: "We do not describe a meal as halal merely because it contains no pork.",
      },
      {
        label: "03 · Reconfirmation",
        value: "Restaurants and suppliers are checked again for your travel date",
        helper:
          "Menus, kitchen practice, prayer timing, Friday planning and transport are reviewed in writing.",
      },
      {
        label: "04 · Respectful access",
        value: "Mosques, homes and hosts are never treated as props",
        helper:
          "Any hosted encounter requires consent, fair compensation and a confirmed alternative if unavailable.",
      },
      {
        label: "05 · Operational backup",
        value: "A China-based team stays accountable throughout",
        helper:
          "If a restaurant, guide or route changes, we coordinate a suitable replacement rather than leaving you to solve it.",
      },
      {
        label: "06 · Honest comfort",
        value: "Ningxia and the desert are assessed on their real strengths",
        helper:
          "We state where the best available stay may not match a major-city international five-star hotel.",
      },
    ],
    note: "This is a planning and verification standard, not a blanket certification. Exact restaurants, rooms, hosts, prayer spaces, trains and desert accommodation are confirmed in your written proposal.",
  },
  highlights: [
    {
      title: "The Great Wall, with your own table in the hills",
      description:
        "Choose a quieter Wall section and a private halal picnic or countryside table, with a family photographer available so the day belongs to your group rather than the crowd.",
      category: "Muslim-friendly",
      image: pendingImage,
    },
    {
      title: "Xi'an's Silk Road story, told from inside its Muslim heritage",
      description:
        "Connect the Terracotta Army with the Great Mosque, old-city foodways and the people who made Xi'an a meeting point between China and the wider Islamic world.",
      category: "Culture",
      image: pendingImage,
    },
    {
      title: "Ningxia and the desert chapter most China tours miss",
      description:
        "Meet Hui culinary culture, read the Helan Mountain landscape and end at the Yellow River desert edge with an alcohol-free sunset dinner and stargazing.",
      category: "Nature",
      image: pendingImage,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrive in Beijing, with every requirement already briefed",
      destination: "Beijing",
      summary:
        "Your private arrival team meets the flight, handles luggage flow and takes you to the hotel. The first evening is deliberately light: settle in, review the next day's timing and confirm the practical details that make the journey feel yours.",
      image: pendingImage,
      hotel: hotelByPlace.beijing,
      meals: ["As confirmed after your dietary profile"],
      transport: "Private airport transfer, vehicle sized for four guests and luggage",
      activities: [
        {
          title: "Arrival and requirements review",
          description:
            "Your China team checks the live plan, meal notes, prayer-aware timing, room setup and the next morning's entry arrangements with you.",
        },
        {
          title: "A soft first evening",
          description:
            "Rest at the hotel or take a short, optional neighborhood introduction if your arrival time and energy allow.",
        },
      ],
      guideNote:
        "Arrival arrangements, hotel and first meal are confirmed in writing for the actual flight date.",
      coordinates: { latitude: 39.9042, longitude: 116.4074 },
    },
    {
      day: 2,
      title: "Imperial Beijing, at a prayer-aware pace",
      destination: "Beijing",
      summary:
        "Read the Forbidden City as a system of power, ritual and space, then move to the Temple of Heaven and its living park culture without forcing a second heavy museum day.",
      image: pendingImage,
      hotel: hotelByPlace.beijing,
      meals: ["Breakfast", "Verified meal according to your profile"],
      transport: "Private vehicle and English-speaking guide",
      activities: [
        {
          time: "Morning",
          title: "Forbidden City with context",
          description:
            "Follow the imperial axis with time for questions, photographs and a route adjusted around walking comfort and prayer timing.",
        },
        {
          time: "Afternoon",
          title: "Temple of Heaven and the park",
          description:
            "See the architecture of ritual, then notice the contemporary social life that gives the park its pulse.",
        },
      ],
      guideNote:
        "Entry time, site sequence, prayer pause and meal venue are checked for your dates rather than assumed from a template.",
      coordinates: { latitude: 39.8822, longitude: 116.4066 },
    },
    {
      day: 3,
      title: "The Great Wall, a private halal picnic and your family frame",
      destination: "Beijing",
      summary:
        "Give the Great Wall a full day and choose the section around your walking level, crowd tolerance and season. A private halal picnic or reserved countryside table turns the landmark into a shared memory; a family photographer can quietly document the day.",
      image: pendingImage,
      hotel: hotelByPlace.beijing,
      meals: ["Breakfast", "Private halal picnic or confirmed countryside table"],
      transport: "Private vehicle with flexible Great Wall timing",
      activities: [
        {
          title: "A Wall section chosen for you",
          description:
            "Mutianyu, Jinshanling or another practical section is recommended around conditions, walking and crowd levels, then confirmed with your party.",
        },
        {
          title: "Private picnic and family photography",
          description:
            "Eat from a meal plan checked against your dietary brief, with a photographer available for a relaxed half-day family story rather than a staged shoot.",
        },
      ],
      guideNote:
        "The photographer, exact picnic setting and Wall section are subject to date-specific confirmation; no access is represented as guaranteed before booking.",
      coordinates: { latitude: 40.4319, longitude: 116.5704 },
    },
    {
      day: 4,
      title: "Niujie: Beijing's Muslim community and culinary memory",
      destination: "Beijing",
      summary:
        "Move from imperial Beijing into Niujie, the capital's historic Muslim quarter. This is a community and food chapter, approached respectfully, with time to pray, taste and ask questions rather than perform a checklist.",
      image: pendingImage,
      hotel: hotelByPlace.beijing,
      meals: ["Breakfast", "Verified Muslim-owned or halal meal"],
      transport: "Private vehicle and neighborhood walking route",
      activities: [
        {
          title: "Niujie and the mosque quarter",
          description:
            "Explore the area's architecture, food traditions and everyday rhythm with a guide who can explain how Muslim life sits within Beijing today.",
        },
        {
          title: "A culinary conversation",
          description:
            "Choose a consent-based food or craft encounter, or keep the day focused on the mosque quarter, prayer and a carefully selected meal.",
        },
      ],
      guideNote:
        "Mosque etiquette, photography boundaries and any hosted encounter are explained before arrival. No private home or exclusive access is promised until confirmed.",
      coordinates: { latitude: 39.8898, longitude: 116.3632 },
    },
    {
      day: 5,
      title: "First-class rail to Xi'an, the Silk Road city",
      destination: "Beijing to Xi'an",
      summary:
        "Travel first class by high-speed rail with station and luggage support. On arrival, settle into Xi'an and take a gentle first walk on or near the old city wall if the group feels ready.",
      image: pendingImage,
      hotel: hotelByPlace.xian,
      meals: ["Breakfast", "Verified meal after arrival"],
      transport: "Private station transfers and first-class Beijing–Xi'an high-speed rail",
      activities: [
        {
          title: "Door-to-door rail support",
          description:
            "Your team manages station timing, tickets, luggage flow and the arrival handover so the rail sector feels like part of the journey.",
        },
        {
          title: "Xi'an first impression",
          description:
            "Choose a short old-city introduction or protected hotel time after the train, with prayer and dinner timing respected.",
        },
      ],
      guideNote:
        "Train class, departure time and final transfer details are confirmed around your dates and passports.",
      coordinates: { latitude: 34.3416, longitude: 108.9398 },
    },
    {
      day: 6,
      title: "Terracotta Warriors, then the hands behind the clay",
      destination: "Xi'an",
      summary:
        "Spend the morning with the Terracotta Army and the questions it still leaves open. Later, a private clay workshop lets you make a small warrior with an artisan, turning archaeology into something tactile and personal.",
      image: pendingImage,
      hotel: hotelByPlace.xian,
      meals: ["Breakfast", "Verified halal or Muslim-owned lunch"],
      transport: "Private vehicle and guide",
      activities: [
        {
          title: "Terracotta Army with a historical interpreter",
          description:
            "Use a focused route through the principal pits, with time for interpretation, photographs and rest rather than a rushed museum sweep.",
        },
        {
          title: "Private clay-warrior studio",
          description:
            "Work with a local artisan to shape and finish a small clay figure; the session is designed as making, not a retail stop.",
        },
      ],
      guideNote:
        "Workshop host, venue and ticketing are date-specific. No compulsory purchase is attached to the experience.",
      coordinates: { latitude: 34.384, longitude: 109.278 },
    },
    {
      day: 7,
      title: "Xi'an's Great Mosque and a private halal noodle or paomo kitchen",
      destination: "Xi'an",
      summary:
        "Read Xi'an as a meeting point between China and the Islamic world through the Great Mosque, Muslim Quarter and Silk Road history. In the afternoon, choose a private halal noodle workshop or make paomo, a local bread-and-lamb soup, with a host who explains the technique, ingredients and regional story.",
      image: pendingImage,
      hotel: hotelByPlace.xian,
      meals: ["Breakfast", "Private halal cooking session and meal"],
      transport: "Private vehicle and walking route through Xi'an's historic core",
      activities: [
        {
          title: "Great Mosque and Silk Road interpretation",
          description:
            "Approach the mosque as a living place of worship and history, with respectful dress, photography and visitor etiquette discussed in advance.",
        },
        {
          title: "Noodle or paomo workshop",
          description:
            "Choose a private kitchen session around hand-pulled noodles or Xi'an paomo, a bread-and-lamb soup prepared by tearing flatbread into the bowl. The dish and kitchen suitability are verified to your brief.",
        },
      ],
      guideNote:
        "Religious access and workshop host are subject to respectful, written confirmation. A suitable equivalent is offered if the preferred host is unavailable.",
      coordinates: { latitude: 34.2583, longitude: 108.9469 },
    },
    {
      day: 8,
      title: "Fly west to Yinchuan and enter Ningxia gently",
      destination: "Xi'an to Yinchuan",
      summary:
        "Fly west to Yinchuan, capital of the Ningxia Hui Autonomous Region in northwest China. Keep the first afternoon light: follow the Yellow River edge or settle into the hotel before a verified dinner drawing on Hui Muslim food traditions.",
      image: pendingImage,
      hotel: hotelByPlace.ningxia,
      meals: ["Breakfast", "Verified halal or Muslim-owned dinner"],
      transport:
        "Xi'an-Yinchuan economy flight when the schedule is practical, plus private airport transfers",
      activities: [
        {
          title: "A calm Ningxia arrival",
          description:
            "The transfer, check-in and meal are coordinated around prayer timing and the actual flight rather than a fixed generic schedule.",
        },
        {
          title: "Yellow River first look",
          description:
            "If energy allows, take a short sunset introduction to the river landscape and Ningxia's dry northwestern light.",
        },
      ],
      guideNote:
        "Flight times and the most suitable Yinchuan arrival plan are date-specific; domestic availability is reconfirmed before ticketing.",
      coordinates: { latitude: 38.4872, longitude: 106.2309 },
    },
    {
      day: 9,
      title: "Helan Mountain rock art and the northwest horizon",
      destination: "Yinchuan and Helan Mountain",
      summary:
        "Read the rock art and dry mountain landscape as a long human record, then choose a quiet afternoon in the vineyards, river country or hotel. The day is about scale and context, not racing between distant attractions.",
      image: pendingImage,
      hotel: hotelByPlace.ningxia,
      meals: ["Breakfast", "Verified meal according to your profile"],
      transport: "Private vehicle and guide; exact route confirmed to conditions",
      activities: [
        {
          title: "Helan Mountain rock art",
          description:
            "Explore a selected rock-art area with a guide who can connect the images to the landscape, early pastoral cultures and the region's frontier history.",
        },
        {
          title: "A slower Ningxia afternoon",
          description:
            "Choose river scenery, a cultural museum, a quiet local landscape or hotel rest after the mountain chapter.",
        },
      ],
      guideNote:
        "Rock-art access, heat, wind and walking conditions vary. A lower-effort cultural alternative is always reviewed for the date.",
      coordinates: { latitude: 38.7924, longitude: 105.979 },
    },
    {
      day: 10,
      title: "A hosted Hui table, with consent and real conversation",
      destination: "Ningxia",
      summary:
        "Meet the food and hospitality traditions of the Hui, one of China's Muslim communities, through a carefully hosted experience: a family-style meal, culinary craft, market conversation or cultural studio chosen around consent, privacy and your interests.",
      image: pendingImage,
      hotel: hotelByPlace.ningxia,
      meals: ["Breakfast", "Hosted Hui meal or verified Muslim-owned table"],
      transport: "Private vehicle and guide",
      activities: [
        {
          title: "Ningxia Hui food culture",
          description:
            "Explore Ningxia lamb, noodles, seasonal produce and spice with a Hui Muslim host or cook who is fairly compensated and comfortable sharing the story.",
        },
        {
          title: "A choice with boundaries",
          description:
            "Select a hosted table, craft encounter, market chapter or mosque-area interpretation; no private home, named host or religious access is promised before confirmation.",
        },
      ],
      guideNote:
        "The encounter proceeds only with consent and confirmed terms. If the preferred host is unavailable, AVIORA proposes an equivalent for your approval.",
      coordinates: { latitude: 38.4872, longitude: 106.2309 },
    },
    {
      day: 11,
      title: "To Zhongwei: the Yellow River meets the desert",
      destination: "Yinchuan to Zhongwei",
      summary:
        "Travel south to Zhongwei, where the Yellow River runs beside the edge of the Tengger Desert. Settle into the strongest confirmed desert lodge, then watch the light change over the dunes with an alcohol-free sunset dinner prepared around your profile.",
      image: pendingImage,
      hotel: hotelByPlace.zhongwei,
      meals: ["Breakfast", "Alcohol-free sunset dinner, verified to your brief"],
      transport: "Private vehicle; exact road and transfer timing confirmed to dates",
      activities: [
        {
          title: "A desert arrival with breathing room",
          description:
            "The route is planned around check-in, prayer and daylight rather than adding a second distant attraction to the transfer day.",
        },
        {
          title: "Sunset above the dunes",
          description:
            "Take a private dune-edge walk or remain close to the lodge, then dine without alcohol as the desert cools.",
        },
      ],
      guideNote:
        "Ningxia and desert accommodation varies more than major-city hotels; the confirmed property, room setup and facilities are named before booking.",
      coordinates: { latitude: 37.499, longitude: 105.196 },
    },
    {
      day: 12,
      title: "Desert stars, then a considered Shanghai finale",
      destination: "Zhongwei to Shanghai",
      summary:
        "Use the clearest part of the morning for a quiet desert or Yellow River experience, then take the most practical domestic connection to Shanghai. The evening is intentionally light: a riverfront first look, hotel rest or a private dinner according to arrival time.",
      image: pendingImage,
      hotel: hotelByPlace.shanghai,
      meals: ["Breakfast", "Verified Shanghai dinner or light arrival meal"],
      transport: "Private transfer and the most practical domestic flight routing to Shanghai",
      activities: [
        {
          title: "Stargazing or sunrise farewell",
          description:
            "A local astronomy guide, telescope or simple unhurried sky watch can be arranged only where conditions and the lodge support it; otherwise the dawn landscape carries the moment.",
        },
        {
          title: "Shanghai arrival without a forced checklist",
          description:
            "Meet the Bund or keep the evening restorative, depending on the actual connection, traffic and group energy.",
        },
      ],
      guideNote:
        "Stargazing depends on weather, light pollution and lodge operations. Transport is selected and quoted around the travel date.",
      coordinates: { latitude: 31.2304, longitude: 121.4737 },
    },
    {
      day: 13,
      title: "Shanghai's modern China, then a protected departure",
      destination: "Shanghai",
      summary:
        "Close the journey with one readable modern-China chapter: the Bund and Pudong skyline, a design-led lane walk or a private market-to-table experience. Your departure transfer is timed around the confirmed flight, with no risky sightseeing added before the airport.",
      image: pendingImage,
      hotel: hotelByPlace.shanghai,
      meals: ["Breakfast", "Optional verified farewell meal"],
      transport: "Private airport transfer and departure support",
      activities: [
        {
          title: "A final Shanghai perspective",
          description:
            "Choose riverfront architecture, a neighborhood story or a private kitchen finale that reflects what your group most enjoyed in China.",
        },
        {
          title: "Departure handover",
          description:
            "The team confirms terminal, pickup time, luggage capacity, traffic buffer and any prayer or meal need before you leave.",
        },
      ],
      guideNote:
        "If your international flight leaves earlier, this becomes a departure day and the Shanghai chapter can be extended to a 14-day version.",
      coordinates: { latitude: 31.1443, longitude: 121.8083 },
    },
  ],
  accommodations: [
    {
      name: "Premium Beijing city hotel",
      destination: "Beijing",
      description:
        "Four nights in a carefully selected premium hotel with quiet rooms, practical access to the imperial core and Great Wall departure route, and room categories reviewed around your group.",
      roomStyle: "Two rooms; connecting or adjacent setup requested and confirmed where available",
      highlights: [
        "4-night continuity",
        "Prayer-aware timing",
        "Quiet-room request",
        "Two-room basis",
      ],
      image: pendingImage,
    },
    {
      name: "Premium Xi'an heritage-base hotel",
      destination: "Xi'an",
      description:
        "Three nights in a premium city hotel selected for access to the historic core, reliable service after the Terracotta Army day and practical room setup.",
      roomStyle:
        "Two rooms; room location and prayer-friendly practicalities checked before confirmation",
      highlights: ["3-night continuity", "Old-city access", "Room audit", "Verified dining nearby"],
      image: pendingImage,
    },
    {
      name: "Best-available premium Ningxia stay",
      destination: "Yinchuan",
      description:
        "Three nights in Yinchuan's strongest suitable available property for the dates, assessed for cleanliness, room comfort, service response, location and practical dining access.",
      roomStyle: "Two rooms; exact property and categories named in the written proposal",
      highlights: [
        "Date-specific audit",
        "Dining access reviewed",
        "Quiet-room request",
        "Honest standard",
      ],
      image: pendingImage,
    },
    {
      name: "Premium Zhongwei desert lodge",
      destination: "Zhongwei",
      description:
        "One night at the best suitable desert lodge or strongest confirmed equivalent, chosen for the actual room condition, dinner practice, privacy, heating or cooling and access to the landscape.",
      roomStyle: "Two rooms or the strongest practical configuration confirmed to the date",
      highlights: [
        "Desert setting",
        "Alcohol-free dinner plan",
        "Stargazing potential",
        "Comfort boundaries stated",
      ],
      image: pendingImage,
    },
    {
      name: "Premium Shanghai departure-base hotel",
      destination: "Shanghai",
      description:
        "One night in a premium hotel with a clear airport-transfer plan and a location that makes a short final city chapter possible without compromising departure safety.",
      roomStyle: "Two rooms; exact room category confirmed before booking",
      highlights: [
        "Airport logic",
        "Final-night comfort",
        "Verified meal access",
        "No shopping pressure",
      ],
      image: pendingImage,
    },
  ],
  included: [
    "12 nights in selected premium city hotels plus the strongest date-specific Ningxia and desert accommodation, based on four guests sharing two rooms",
    "Daily hotel breakfast and the private or hosted meals specifically stated in the written proposal",
    "Private English-speaking guides, private vehicles and airport or station handovers on confirmed touring days",
    "First-class Beijing–Xi'an high-speed rail, an economy flight from Xi'an to Yinchuan when practical, and the best available flight routing from Zhongwei to Shanghai",
    "Confirmed entrance tickets and listed site transport arrangements",
    "AVIORA Muslim Journey Standard: dietary and prayer profile, meal verification, Friday planning where relevant, room requirements and China-based backup support",
    "Great Wall private picnic or countryside table, family photographer option, Xi'an clay studio, halal noodle or paomo workshop and Ningxia or desert hosted experiences as confirmed",
    "Alcohol-free meal planning where requested and no compulsory shopping stops",
  ],
  excluded: [
    "International flights to Beijing and from Shanghai",
    "Visa, travel insurance and personal medical expenses",
    "Meals, drinks and room-service charges not stated as included in the written proposal",
    "Premium suites, business-class rail, premium flight cabins, private aircraft or guaranteed named specialists unless quoted",
    "Any private-home, mosque-access, religious or hosted encounter not confirmed in writing",
    "Personal purchases, laundry, spa treatments and gratuities unless specifically included",
  ],
  optionalExperiences: [
    {
      title: "Private family photographer on the Great Wall",
      description:
        "Add a photographer for a relaxed half-day narrative of the Wall and your private table, with the shooting style adapted to family, couple or multigenerational groups.",
      badges: ["Private", "Quoted to date"],
      image: pendingImage,
    },
    {
      title: "14-day Shanghai extension",
      description:
        "Add a second Shanghai night for a deeper modern-city finale, market-to-kitchen experience or a more comfortable departure pattern.",
      badges: ["Recommended", "+1 night"],
      image: pendingImage,
    },
    {
      title: "Suite, business rail and signature desert upgrade",
      description:
        "Prioritize larger rooms, business-class rail, the strongest available desert lodge and additional private dining where the upgrade materially changes comfort.",
      badges: ["Signature", "Quoted to date"],
      image: pendingImage,
    },
  ],
  transportation: {
    title: "A long route, made manageable by deliberate handovers",
    description:
      "The journey uses first-class rail where it improves comfort and domestic flights where the distances are longer. A China-based team manages each airport, station, luggage and meal handover.",
    items: [
      {
        label: "Beijing to Xi'an",
        value: "First-class high-speed rail",
        helper: "Private station transfers, ticket coordination and luggage support.",
      },
      {
        label: "Xi'an to Yinchuan",
        value: "Economy-class domestic flight when practical",
        helper:
          "The most comfortable available flight and private airport transfers are selected for your date.",
      },
      {
        label: "Yinchuan to Zhongwei",
        value: "Private overland transfer",
        helper: "Road, weather and desert access are checked close to departure.",
      },
      {
        label: "Zhongwei to Shanghai",
        value: "Domestic flight routing selected for your date",
        helper:
          "The proposal names the exact airport, flight route and private transfers before you book.",
      },
    ],
  },
  routeMap: {
    title: "Five chapters, from imperial capitals to open sky",
    description:
      "The route begins with China's icons, turns west toward living Muslim heritage and ends with Ningxia's dry landscapes before a light modern-Shanghai finale.",
    stops: [
      {
        name: "Beijing",
        days: "Days 1–4 · 4 nights",
        description: "Imperial landmarks, the Great Wall, Niujie and a private halal table.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
      {
        name: "Xi'an",
        days: "Days 5–7 · 3 nights",
        description: "Terracotta Warriors, the Great Mosque and a Silk Road food chapter.",
        coordinates: { latitude: 34.3416, longitude: 108.9398 },
      },
      {
        name: "Yinchuan",
        days: "Days 8–10 · 3 nights",
        description: "Helan Mountain, Yellow River light and Ningxia Hui hospitality.",
        coordinates: { latitude: 38.4872, longitude: 106.2309 },
      },
      {
        name: "Zhongwei",
        days: "Days 11–12 · 1 night",
        description: "Tengger Desert edge, alcohol-free sunset dinner and stars.",
        coordinates: { latitude: 37.499, longitude: 105.196 },
      },
      {
        name: "Shanghai",
        days: "Days 12–13 · 1 night",
        description: "A light modern-China finale and protected departure handover.",
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
    ],
  },
  gallery: [],
  faqs: [
    {
      question: "Where are Ningxia, Yinchuan and Zhongwei?",
      answer:
        "Ningxia is a region in northwest China known for Hui Muslim culture, the Yellow River and dry mountain-and-desert landscapes. Yinchuan is its capital and your base for three nights. Zhongwei lies about 200 kilometers south, where the Yellow River meets the edge of the Tengger Desert. You reach Ningxia after Xi'an and continue from the desert to Shanghai.",
    },
    {
      question:
        "How should we arrange international flights from Europe, the USA or Southeast Asia?",
      answer:
        "Book an open-jaw journey arriving in Beijing and departing from Shanghai; you do not need to return to Beijing. International flights are not included in the published price. Share your preferred gateway flights before ticketing and AVIORA will shape the first and final days around the actual arrival, departure and terminal, including private airport pickup and drop-off. One-stop options are common from many European and US cities, while many Southeast Asian hubs have direct links to Beijing and Shanghai; schedules depend on your city and travel date.",
    },
    {
      question: "Is this suitable for a first trip to China?",
      answer:
        "Yes. Beijing, the Great Wall, Xi'an's Terracotta Warriors and Shanghai give first-time visitors China's essential contrasts. Ningxia and the desert add the part most standard first trips miss: living Hui Muslim food culture, northwest landscapes and a night beneath open sky. Private guides and managed transfers mean you do not need previous China travel experience or Chinese-language skills.",
    },
    {
      question: "What does the US$7,680 starting price include?",
      answer:
        "It is an indicative per-person starting price based on four guests sharing two rooms outside peak periods, equivalent to a group total from US$30,720. It includes the 12 nights, private guides and vehicles, first-class Beijing–Xi'an rail, domestic flights and transfers named in your proposal, planned verified meals and the listed private experiences as confirmed in writing.",
    },
    {
      question: "What exactly do you mean by Muslim-friendly?",
      answer:
        "We use the term operationally, not as a vague label. Before pricing we record your dietary rules, allergies, prayer practice, Friday needs, room setup, preferred guide gender where possible and comfort with local encounters. We distinguish halal-certified, Muslim-owned, no-pork and vegetarian options, then reconfirm the actual suppliers for your dates.",
    },
    {
      question: "Will every meal be halal-certified?",
      answer:
        "Not automatically, because halal certification and kitchen practice vary by city and venue. Your written proposal will identify what is halal-certified, Muslim-owned, no-pork or vegetarian, and any meal that requires a specific caveat. We never describe a meal as certified without checking the venue's actual status.",
    },
    {
      question: "Can you plan prayer times and Friday prayer?",
      answer:
        "Yes. We plan prayer-aware transitions, identify practical prayer options near the route and flag Friday timing in the pre-trip brief. A specific mosque, prayer room or access arrangement is only promised after it is checked for the date and confirmed respectfully in writing.",
    },
    {
      question: "Is the desert hotel a five-star international hotel?",
      answer:
        "Not necessarily. Ningxia and the desert have a smaller premium accommodation base than Beijing or Shanghai. We assess the best available property for your dates and state its actual room, heating or cooling, dining and access standard before you book, rather than presenting it as an urban international five-star equivalent.",
    },
    {
      question: "Are private homes, mosque access or named local hosts guaranteed?",
      answer:
        "No. We do not promise private homes, named specialists, exclusive mosque access or a host before consent and date-specific confirmation. Hosted encounters are fairly compensated and replaced with a suitable equivalent only after you approve the change.",
    },
    {
      question: "Can families with children or older parents take this route?",
      answer:
        "Yes, if the group is comfortable with several intercity transitions and one desert night. Private timing, room setup, walking distance and meal choices can be adapted; Helan Mountain, historic sites and desert terrain still involve uneven ground, steps or weather exposure and are reviewed before confirmation.",
    },
    {
      question: "Why is Ningxia included instead of adding Chengdu or Zhangjiajie?",
      answer:
        "Ningxia gives the journey a clear and uncommon point of difference: living Hui culture, northwest landscapes, Helan Mountain and the Yellow River desert edge. It is designed for travelers who want China beyond the standard Beijing–Xi'an–Shanghai circuit and are willing to value depth over another headline attraction.",
    },
    {
      question: "Can we extend Shanghai to 14 days?",
      answer:
        "Yes. A second Shanghai night is the recommended extension when your international flight timing, food interests or desire for a gentler finale justify it. We can add a private kitchen, design or neighborhood chapter without compressing the desert transition.",
    },
  ],
  related: {
    tours: [
      {
        title: "China, Considered: Beijing, Xi'an & Shanghai",
        description:
          "A premium first-China route for travelers who want the classic capitals with a measured pace.",
        tags: ["First-time China", "Luxury", "Private"],
        image: pendingImage,
        route: "Beijing · Xi'an · Shanghai",
        duration: "12 days / 11 nights",
        href: "/tours/china-at-an-easier-pace-12-day-private-tour",
      },
      {
        title: "Yunnan, Along the Tea Horse Road",
        description: "A cultural highland journey through Dali, Shaxi, Lijiang and Shangri-La.",
        tags: ["Culture", "Nature", "Boutique"],
        image: pendingImage,
        route: "Dali · Shaxi · Lijiang · Shangri-La",
        duration: "10 days / 9 nights",
        href: "/tours/luxury-yunnan-private-tour",
      },
    ],
    destinations: [],
  },
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=Muslim-friendly%20China%20Desert%20Stars%20Proposal&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20a%20private%20proposal%20for%20China%2C%20From%20the%20Great%20Wall%20to%20Desert%20Stars.%0A%0ATravel%20dates%20or%20month%3A%0ATravellers%20(adults%20%2F%20children)%3A%0ARooms%20and%20bed%20setup%3A%0ADietary%20and%20halal%20requirements%3A%0APrayer%20or%20Friday%20planning%3A%0AOther%20needs%3A%0A",
    whatsappHref:
      "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20private%20proposal%20for%20China%2C%20From%20the%20Great%20Wall%20to%20Desert%20Stars.%20We%20are%20considering%20four%20guests%20and%20two%20rooms.%20Please%20advise%20on%20verified%20meals%2C%20prayer-aware%20timing%2C%20Ningxia%20and%20desert%20accommodation.",
    scheduleCallHref: "tel:+447985052302",
    defaultMessage:
      "I am interested in the 13-day Muslim-friendly China journey from the Great Wall to desert stars. Please advise on verified meals, prayer-aware planning, hotels and a private quote for four guests.",
  },
};
