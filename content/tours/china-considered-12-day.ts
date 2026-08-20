import { firstChinaAsset } from "@/content/tours/assets";
import type { Tour } from "@/types/tour";

const hotelByCity = {
  beijing: "Premium five-star hotel in Beijing · 5 nights",
  xian: "Premium five-star hotel in Xi'an · 3 nights",
  shanghai: "Premium five-star hotel in Shanghai · 3 nights",
};

export const chinaConsidered12DayTour: Tour = {
  slug: "china-at-an-easier-pace-12-day-private-tour",
  title: "China, Considered: Beijing, Xi'an & Shanghai",
  subtitle:
    "A premium 12-day private introduction to China, pairing its defining landmarks with local masters, private cultural encounters, excellent hotels and a genuinely realistic pace.",
  duration: "12 Days / 11 Nights",
  route: "Beijing, Xi'an, Shanghai",
  styles: ["Senior-friendly", "Luxury", "Culture", "First-time China"],
  hero: {
    eyebrow: "AVIORA flagship private journey",
    image: firstChinaAsset.beijingGreatWallCouple,
    primary: { label: "Explore the 12 Days", href: "#itinerary" },
    secondary: { label: "Request a Private Proposal", href: "#price" },
  },
  seo: {
    title: "12-Day Private China Tour at an Easier Pace",
    description:
      "A premium 12-day private Beijing, Xi'an and Shanghai journey with five-star hotels, a measured pace, first-class rail and China-based support.",
    keywords: [
      "12 day private China tour",
      "China tour for older travelers",
      "luxury Beijing Xi'an Shanghai tour",
      "senior friendly China tour",
      "slow paced China itinerary",
      "premium private China journey",
    ],
  },
  overview: {
    pitch:
      "China's essential first route, redesigned around energy and access: one meaningful focus at a time, encounters with the people who keep its traditions alive, and expert support through every complicated transition.",
    facts: [
      {
        label: "Duration",
        value: "12 days / 11 nights",
        helper: "Beijing 5 nights, Xi'an 3 nights and Shanghai 3 nights.",
      },
      {
        label: "Suitable For",
        value: "Couples, mature travellers and families planning for parents",
        helper: "The final walking plan is reviewed around your party before confirmation.",
      },
      {
        label: "Pacing",
        value: "Easy to moderate",
        helper: "High-effort visits are followed by lighter time or recovery.",
      },
      {
        label: "Hotels",
        value: "Premium five-star hotels",
        helper: "Location, room size, bathroom layout, quietness and vehicle access are reviewed.",
      },
      {
        label: "Private Service",
        value: "Guides, vehicles and China-based support",
        helper: "No compulsory shopping and no group-tour timetable.",
      },
    ],
  },
  planningSupport: {
    eyebrow: "The AVIORA pace system",
    title: "The important question is not how much fits. It is how the day feels.",
    description:
      "Before confirmation, we review walking, steps, standing time, heat exposure, transfers and recovery needs across the whole journey.",
    items: [
      { label: "High-effort days", value: "2", helper: "Great Wall and Terracotta Army." },
      { label: "Hotel changes", value: "2", helper: "Only three bases across 11 nights." },
      {
        label: "Protected recovery",
        value: "Built in",
        helper: "Arrival, transition and choice days stay lighter.",
      },
      {
        label: "Daily alternatives",
        value: "A / B / Rest",
        helper: "Private timing allows a different decision on the day.",
      },
    ],
    note: "Accessibility varies at historic sites. We describe terrain honestly and confirm the practical route for your travellers before booking.",
  },
  highlights: [
    {
      title: "Beijing beyond the monuments",
      description:
        "Share morning practice with a tai chi teacher, meet a courtyard host over tea and dumplings, and understand imperial Beijing through a specialist-led story rather than a rushed checklist.",
      category: "Senior-friendly",
      image: firstChinaAsset.beijingForbiddenCityMoat,
    },
    {
      title: "Xi'an through archaeology and craft",
      description:
        "The Terracotta Army gains another dimension through a seated encounter with a local clay artisan, while a private workshop introduces a living Silk Road craft away from the busiest streets.",
      category: "Culture",
      image: firstChinaAsset.xianTerracottaGroup,
    },
    {
      title: "Shanghai, interpreted from the inside",
      description:
        "Walk the city's Art Deco story with a specialist perspective, then choose a private kitchen experience or a chef-led farewell dinner designed around the people at your table.",
      category: "Luxury",
      image: firstChinaAsset.shanghaiHuangpuSunset,
    },
  ],
  itinerary: [
    {
      day: 1,
      title: "Arrive in Beijing without an agenda",
      destination: "Beijing",
      summary:
        "Your airport welcome, luggage flow and private transfer are managed around the actual flight. Check in, rest and choose only a short neighborhood walk or early dinner if energy allows. Effort budget: Low.",
      image: firstChinaAsset.beijingTempleOfHeavenCorridor,
      hotel: hotelByCity.beijing,
      meals: ["Hotel breakfast begins the following morning", "Optional light dinner"],
      transport: "Private airport transfer with arrival support",
      activities: [
        {
          title: "A protected arrival",
          description: "No major sightseeing is scheduled after a long-haul flight.",
        },
        {
          title: "Optional first orientation",
          description:
            "A short, level walk or quiet dinner only if the arrival time and energy suit.",
        },
      ],
      guideNote: "The first evening remains deliberately uncommitted.",
      coordinates: { latitude: 39.9042, longitude: 116.4074 },
    },
    {
      day: 2,
      title: "Temple of Heaven and Beijing at human scale",
      destination: "Beijing",
      summary:
        "Begin later than a conventional tour with a private, beginner-friendly tai chi session, then see the Temple of Heaven through its architecture and morning life. Return early enough to preserve the afternoon for rest. Effort budget: Medium.",
      image: firstChinaAsset.beijingTempleOfHeavenMorning,
      hotel: hotelByCity.beijing,
      meals: ["Breakfast", "Selected lunch"],
      transport: "Private vehicle and private guide",
      activities: [
        {
          title: "Morning tai chi with a local teacher",
          description:
            "Join a private, beginner-friendly practice in a quiet park corner before exploring the Temple of Heaven; chairs and a shorter format are available.",
        },
        {
          title: "Temple of Heaven through local eyes",
          description:
            "Meet the morning singers, dancers and chess players with a guide who can translate the human stories as well as the architecture.",
        },
      ],
      guideNote: "This day resets the body clock without wasting the first full day.",
      coordinates: { latitude: 39.8822, longitude: 116.4066 },
    },
    {
      day: 3,
      title: "The Forbidden City, with time to understand it",
      destination: "Beijing",
      summary:
        "Follow a selected palace route with a senior cultural guide or imperial-history specialist rather than trying to cover every courtyard. A seated tea and object session gives the story time to land before a light afternoon. Effort budget: Medium to high.",
      image: firstChinaAsset.beijingForbiddenCityLion,
      hotel: hotelByCity.beijing,
      meals: ["Breakfast", "Selected lunch"],
      transport: "Private vehicle, timed entry and private guide",
      activities: [
        {
          title: "A specialist-led palace narrative",
          description:
            "Follow one compelling thread through court ritual, family life, power and symbolism with a senior cultural guide or imperial-history specialist.",
        },
        {
          title: "Private tea and object session",
          description:
            "After the palace, sit down over tea with a small selection of replica objects, maps and archival images that make the morning's details tangible.",
        },
      ],
      guideNote:
        "The palace is extensive and not step-free; the exact route is reviewed before travel.",
      coordinates: { latitude: 39.9163, longitude: 116.3972 },
    },
    {
      day: 4,
      title: "Mutianyu Great Wall, one important effort",
      destination: "Beijing",
      summary:
        "Travel to Mutianyu after the commuter peak, use the most suitable cable-car access and walk only the section that feels rewarding. A countryside lunch or seasonal mountain tea creates time to absorb the landscape; nothing demanding is added that evening. Effort budget: High.",
      image: firstChinaAsset.beijingGreatWallWide,
      hotel: hotelByCity.beijing,
      meals: ["Breakfast", "Selected lunch near Mutianyu"],
      transport: "Private vehicle, private guide and suitable cable-car plan",
      activities: [
        {
          title: "Mutianyu Great Wall",
          description:
            "Chosen for scenery, cable-car options and a better private-journey experience than a rushed group stop.",
        },
        {
          title: "A table with a view, not another attraction",
          description:
            "Pause for a thoughtfully prepared countryside lunch or seasonal tea overlooking the mountains, with time to absorb the Wall rather than rush back to the vehicle.",
        },
      ],
      guideNote:
        "Uneven paving and steps remain; cable-car access reduces effort but does not remove it.",
      coordinates: { latitude: 40.4319, longitude: 116.5704 },
    },
    {
      day: 5,
      title: "A Beijing recovery and choice day",
      destination: "Beijing",
      summary:
        "Choose the Summer Palace by garden and water, enter a hutong courtyard for tea and dumpling making with a Beijing host, or protect the day entirely for rest. This also gives the Great Wall a weather buffer. Effort budget: Low.",
      image: firstChinaAsset.beijingTempleOfHeavenReflection,
      hotel: hotelByCity.beijing,
      meals: ["Breakfast", "Meals arranged around the selected option"],
      transport: "Private vehicle available for the confirmed option",
      activities: [
        {
          title: "Option A: Summer Palace by water and garden",
          description:
            "A selective lakeside route with a private boat segment when operating, avoiding the instinct to cover the entire complex.",
        },
        {
          title: "Option B: A courtyard table with a Beijing host",
          description:
            "Enter a privately arranged hutong courtyard for tea, conversation and a relaxed dumpling-making lunch with a local host or culinary teacher.",
        },
        {
          title: "Rest option",
          description:
            "Late breakfast, spa or independent time with AVIORA support still available.",
        },
      ],
      guideNote: "This day is operationally valuable as well as restorative.",
      coordinates: { latitude: 39.9999, longitude: 116.2755 },
    },
    {
      day: 6,
      title: "First-class rail to Xi'an, managed door to door",
      destination: "Beijing to Xi'an",
      summary:
        "Leave the hotel at a sensible hour. AVIORA manages luggage, station timing and boarding for the first-class high-speed train, then coordinates the Xi'an arrival team and hotel check-in. The evening remains free. Effort budget: Low to medium.",
      image: firstChinaAsset.xianTerracottaPortrait,
      hotel: hotelByCity.xian,
      meals: ["Breakfast", "Meals at leisure during the transition"],
      transport: "Private transfers plus Beijing–Xi'an first-class high-speed rail",
      activities: [
        {
          title: "A managed transition",
          description:
            "Tickets, luggage, station navigation, boarding and arrival handover are coordinated in advance.",
        },
        {
          title: "Quiet Xi'an arrival",
          description: "No major sight is tied to a journey whose exact timing may shift.",
        },
      ],
      guideNote: "Business-class rail can be quoted as an upgrade, subject to availability.",
      coordinates: { latitude: 34.3416, longitude: 108.9398 },
    },
    {
      day: 7,
      title: "Xi'an's walls, Silk Road story and living city",
      destination: "Xi'an",
      summary:
        "See Xi'an's city wall in gentler light, then meet a Shaanxi artisan in a small studio before exploring the city's Silk Road and Muslim heritage through selected food and conversation, not a crowded checklist. Effort budget: Medium.",
      image: firstChinaAsset.xianTerracottaGroup,
      hotel: hotelByCity.xian,
      meals: ["Breakfast", "Curated Xi'an lunch"],
      transport: "Private vehicle and private guide",
      activities: [
        {
          title: "City Wall at the gentler hour",
          description:
            "Take in Xi'an's scale in softer morning or late-afternoon light, using an electric cart or shortened section around comfort and weather.",
        },
        {
          title: "Private meeting with a living-heritage artisan",
          description:
            "Step into a small studio for a seated introduction to shadow puppetry, paper cutting or another Shaanxi craft, selected for the working artisan and your interests.",
        },
        {
          title: "Xi'an flavours, selected rather than sampled at random",
          description:
            "Taste a short sequence of Muslim Quarter and Shaanxi specialties with dietary preferences planned ahead and a calmer dining room reserved for lunch.",
        },
      ],
      guideNote:
        "Crowded food streets can be shortened or replaced with a calmer dining experience.",
      coordinates: { latitude: 34.261, longitude: 108.942 },
    },
    {
      day: 8,
      title: "The Terracotta Army, with the rest of the day protected",
      destination: "Xi'an",
      summary:
        "Visit the Terracotta Army at the best practical time for your dates, with drop-off, ticketing and the sequence of pits managed in advance. After lunch, sit with a local clay artisan to make a small warrior before returning to Xi'an for rest. Effort budget: High.",
      image: firstChinaAsset.xianTerracottaPit,
      hotel: hotelByCity.xian,
      meals: ["Breakfast", "Selected lunch"],
      transport: "Private vehicle and private guide",
      activities: [
        {
          title: "Terracotta Army",
          description:
            "Historical interpretation, crowd navigation and rest timing turn a large museum into a coherent visit.",
        },
        {
          title: "Make a warrior with a local clay artisan",
          description:
            "After the museum and lunch, sit with a local craftsperson to learn how clay figures are formed and finish a small warrior of your own before returning to Xi'an.",
        },
      ],
      guideNote:
        "The museum involves extensive standing and hard surfaces; mobility needs should be shared early.",
      coordinates: { latitude: 34.3841, longitude: 109.2785 },
    },
    {
      day: 9,
      title: "Fly to Shanghai without sacrificing the whole day",
      destination: "Xi'an to Shanghai",
      summary:
        "Use a sensibly timed nonstop flight rather than a very long rail day. Private teams manage both airport transfers and luggage flow; after check-in, choose a first Bund view or simply settle into the hotel. Effort budget: Low to medium.",
      image: firstChinaAsset.shanghaiPudongSkyline,
      hotel: hotelByCity.shanghai,
      meals: ["Breakfast", "Meals at leisure during the transition"],
      transport: "Private airport transfers plus nonstop Xi'an–Shanghai economy flight",
      activities: [
        {
          title: "Daytime flight strategy",
          description:
            "The flight is selected around door-to-door ease, not the cheapest departure.",
        },
        {
          title: "Optional first Bund view",
          description:
            "A short evening introduction only if the flight operates as planned and energy remains.",
        },
      ],
      guideNote:
        "A flexible fare or premium cabin can be quoted when it materially improves the journey.",
      coordinates: { latitude: 31.2304, longitude: 121.4737 },
    },
    {
      day: 10,
      title: "Shanghai across the river and through its history",
      destination: "Shanghai",
      summary:
        "Read Shanghai from the Bund's historic facades to the contemporary skyline with an architecture specialist, then pause for a hosted seasonal lunch in a restored lane house or intimate neighborhood restaurant. Private vehicle support reduces unnecessary walking. Effort budget: Medium.",
      image: firstChinaAsset.shanghaiBundNight,
      hotel: hotelByCity.shanghai,
      meals: ["Breakfast", "Selected lunch"],
      transport: "Private vehicle and private guide",
      activities: [
        {
          title: "The Bund with an architecture specialist",
          description:
            "Read the riverfront through banking halls, trading families and Art Deco detail with a specialist guide; access to a heritage interior is arranged where schedules allow.",
        },
        {
          title: "A private table in the former French Concession",
          description:
            "Pause in a restored lane house or intimate restaurant for a hosted seasonal lunch that connects Shanghai food to migration, memory and neighborhood life.",
        },
      ],
      guideNote:
        "The final sequence changes with weather, traffic and the group's preferred walking level.",
      coordinates: { latitude: 31.2401, longitude: 121.4905 },
    },
    {
      day: 11,
      title: "Your Shanghai: culture, neighborhoods or restoration",
      destination: "Shanghai",
      summary:
        "Choose a curator- or design-led cultural chapter, a market-to-table session in a private kitchen, or a deliberately slow final day with late breakfast and spa time. Rejoin for a chef-led or private-room farewell dinner designed around your table. Effort budget: Low to medium.",
      image: firstChinaAsset.shanghaiMarketVisit,
      hotel: hotelByCity.shanghai,
      meals: ["Breakfast", "Farewell dinner"],
      transport: "Private service matched to the chosen option",
      activities: [
        {
          title: "Option A: Art and architecture",
          description:
            "Meet a curator, designer or gallery specialist for a privately interpreted chapter shaped around current exhibitions and access.",
        },
        {
          title: "Option B: Market-to-table private kitchen",
          description:
            "Shop a neighborhood market with a culinary host, then prepare several Shanghainese dishes together in a private studio kitchen.",
        },
        {
          title: "Rest option",
          description:
            "Late breakfast, hotel time and a short final outing keep the day restorative.",
        },
        {
          title: "A farewell dinner designed around your table",
          description:
            "End with a chef-led tasting menu or private-room dinner, pre-arranged around dietary preferences and the journey's favorite flavors.",
        },
      ],
      guideNote:
        "The choice is confirmed close enough to travel to reflect current exhibitions and the group's energy.",
      coordinates: { latitude: 31.2208, longitude: 121.4547 },
    },
    {
      day: 12,
      title: "Depart Shanghai with the right buffer",
      destination: "Shanghai",
      summary:
        "No risky sightseeing is placed before an international departure. AVIORA confirms the airport, terminal, pickup time and luggage plan, with a private transfer and an appropriate traffic buffer. Effort budget: Low.",
      image: firstChinaAsset.shanghaiHuangpuSunset,
      meals: ["Breakfast"],
      transport: "Private airport transfer with departure support",
      activities: [
        {
          title: "Protected departure",
          description:
            "Terminal, traffic and check-in timing are reviewed rather than left to a generic pickup rule.",
        },
      ],
      guideNote:
        "A late checkout can be requested when flight timing and hotel availability make it worthwhile.",
      coordinates: { latitude: 31.1443, longitude: 121.8083 },
    },
  ],
  accommodations: [
    {
      name: "Premium Beijing hotel selection",
      destination: "Beijing",
      description:
        "Five nights in a well-located premium five-star hotel, chosen for quiet rooms, generous space, reliable breakfast, practical bathroom design and straightforward vehicle access.",
      roomStyle: "Premium room or higher, named in the written proposal",
      highlights: [
        "5-night continuity",
        "Central location",
        "Room and bathroom audit",
        "International guest capability",
      ],
      image: firstChinaAsset.beijingForbiddenCityMoat,
    },
    {
      name: "Premium Xi'an hotel selection",
      destination: "Xi'an",
      description:
        "Three nights in a premium five-star stay balancing heritage atmosphere, room comfort, breakfast quality and efficient access to the city and Terracotta Army route.",
      roomStyle: "Premium room or higher, named in the written proposal",
      highlights: [
        "3-night continuity",
        "Quiet-room request",
        "Lift access",
        "Practical touring location",
      ],
      image: firstChinaAsset.xianTerracottaPortrait,
    },
    {
      name: "Premium Shanghai hotel selection",
      destination: "Shanghai",
      description:
        "Three nights in a premium five-star hotel with a strong neighborhood or river setting, comfortable rooms and an easy final airport-transfer strategy.",
      roomStyle: "Premium room or higher, named in the written proposal",
      highlights: [
        "3-night continuity",
        "Strong location",
        "Room-category transparency",
        "Dining nearby",
      ],
      image: firstChinaAsset.shanghaiPudongCoupleNight,
    },
  ],
  included: [
    "11 nights in selected premium five-star hotels, based on four guests sharing two rooms",
    "Daily hotel breakfast and the selected lunches and farewell dinner stated in the final proposal",
    "Private English-speaking guides and private vehicles on confirmed touring days",
    "Private airport and railway-station transfers with managed handovers",
    "Beijing–Xi'an first-class high-speed rail tickets",
    "Xi'an–Shanghai nonstop economy-class domestic flight",
    "Confirmed entrance tickets and listed cable-car or site transport arrangements",
    "The private tai chi session and curated cultural encounters described in the itinerary, or an agreed equivalent when a named specialist is unavailable",
    "AVIORA itinerary design, restaurant reservations and China-based journey support",
    "No compulsory shopping stops",
  ],
  excluded: [
    "International flights to Beijing and from Shanghai",
    "Travel insurance, visas and personal medical expenses",
    "Meals, drinks and room-service charges not stated as included",
    "Hotel spa treatments, laundry and personal purchases",
    "Business-class rail, premium flight cabins, suites and exclusive venue access beyond the listed cultural encounters unless quoted",
    "Tips and gratuities unless specifically included in the written proposal",
  ],
  optionalExperiences: [
    {
      title: "Luxury hotel and room upgrade",
      description:
        "Move to Peninsula-level hotels, larger rooms, suites or club benefits where the upgrade materially improves comfort.",
      badges: ["Luxury", "Quoted to dates"],
      image: firstChinaAsset.shanghaiPudongCoupleNight,
    },
    {
      title: "Specialist cultural interpretation",
      description:
        "Add an expert-led architecture, history, art or food chapter where suitable specialists are genuinely available.",
      badges: ["Private", "Subject to availability"],
      image: firstChinaAsset.beijingTempleOfHeavenCeiling,
    },
    {
      title: "Business-class transport upgrades",
      description:
        "Upgrade the Beijing–Xi'an rail sector and domestic flight when schedule, inventory and comfort justify the additional investment.",
      badges: ["Comfort", "Optional"],
      image: firstChinaAsset.shanghaiSkyscrapersAtNight,
    },
  ],
  transportation: {
    title: "Two intercity sectors, chosen around total journey friction",
    description:
      "First-class high-speed rail works well from Beijing to Xi'an because it connects city centers with a manageable boarding process. A nonstop flight is preferred from Xi'an to Shanghai because the rail journey is long enough to consume most of the day.",
    items: [
      {
        label: "Beijing to Xi'an",
        value: "First-class high-speed rail",
        helper: "Private station transfers and boarding support.",
      },
      {
        label: "Xi'an to Shanghai",
        value: "Daytime nonstop flight",
        helper: "Selected around useful door-to-door timing.",
      },
      {
        label: "Touring days",
        value: "Private vehicle",
        helper: "Vehicle size confirmed around passengers and luggage.",
      },
      {
        label: "Luggage",
        value: "Managed handovers",
        helper: "Station and airport flow coordinated by the operating team.",
      },
    ],
  },
  routeMap: {
    title: "Three bases, with enough time to settle into each",
    description:
      "The sequence moves forward geographically and keeps hotel changes to two across the entire journey.",
    stops: [
      {
        name: "Beijing",
        days: "Days 1–5 · 5 nights",
        description: "Arrival recovery, imperial Beijing, Great Wall and a protected choice day.",
        coordinates: { latitude: 39.9042, longitude: 116.4074 },
      },
      {
        name: "Xi'an",
        days: "Days 6–8 · 3 nights",
        description: "Silk Road context, living city culture and a dedicated Terracotta Army day.",
        coordinates: { latitude: 34.3416, longitude: 108.9398 },
      },
      {
        name: "Shanghai",
        days: "Days 9–12 · 3 nights",
        description:
          "Historic and contemporary Shanghai, with a genuine choice day before departure.",
        coordinates: { latitude: 31.2304, longitude: 121.4737 },
      },
    ],
  },
  gallery: [
    firstChinaAsset.beijingGreatWallCouple,
    firstChinaAsset.beijingForbiddenCityMoat,
    firstChinaAsset.beijingTempleOfHeavenMorning,
    firstChinaAsset.beijingGreatWallWide,
    firstChinaAsset.xianTerracottaPit,
    firstChinaAsset.xianTerracottaGroup,
    firstChinaAsset.shanghaiBundNight,
    firstChinaAsset.shanghaiHuangpuSunset,
    firstChinaAsset.shanghaiMarketVisit,
    firstChinaAsset.shanghaiPudongCoupleNight,
  ],
  faqs: [
    {
      question: "Why are there five nights in Beijing?",
      answer:
        "The first night absorbs international arrival fatigue, the Great Wall receives its own day, and one protected choice day provides recovery or a weather alternative. Removing that buffer would make the flagship journey feel more like a conventional sightseeing circuit.",
    },
    {
      question: "Is this journey suitable for older travellers?",
      answer:
        "It is designed with mature travellers in mind, but historic sites still involve uneven ground, steps and standing. We review mobility, balance, heat tolerance and preferred walking time before confirming the daily route.",
    },
    {
      question: "What does the starting price assume?",
      answer:
        "The published starting price assumes four guests sharing two rooms, non-peak dates, premium five-star hotels and the listed private services. Final pricing changes with dates, hotel and room selection, party size and optional upgrades.",
    },
    {
      question: "Can we choose a rest day after arrival?",
      answer:
        "Yes. The first day is already protected, and the Beijing and Shanghai choice days can become fully restorative days without changing the core geographic route.",
    },
    {
      question: "Can adult children arrange this journey for their parents?",
      answer:
        "Yes. We can plan with the booking family while also confirming room, walking, dietary, communication and medical-access considerations directly with the travellers where appropriate.",
    },
    {
      question: "Are the named hotels guaranteed?",
      answer:
        "No hotel is represented as confirmed until availability and room category are checked for your dates. Your proposal names every property, room type, meal basis and relevant cancellation condition before booking.",
    },
    {
      question: "Can we upgrade this to a true luxury version?",
      answer:
        "Yes. Peninsula-level hotels, larger rooms or suites, top-tier guides, business-class transport and verified private experiences can be quoted as a Luxury or Signature version.",
    },
  ],
  related: {
    tours: [
      {
        title: "9-Day Beijing, Xi'an & Shanghai Private Tour",
        description:
          "A shorter expression of the same first-China route for travellers with less time.",
        tags: ["First-time China", "Private"],
        image: firstChinaAsset.shanghaiWaterfrontGroup,
        route: "Beijing · Xi'an · Shanghai",
        duration: "9 days / 8 nights",
        href: "/tours/first-china-beautifully-paced",
      },
    ],
    destinations: [],
  },
  inquiry: {
    emailHref:
      "mailto:chinaprimedmc@gmail.com?subject=China%20at%20an%20Easier%20Pace%20Private%20Proposal&body=Hello%20AVIORA%2C%0A%0AI%27d%20like%20a%20private%20proposal%20for%20the%2012-day%20China%20at%20an%20Easier%20Pace%20journey.%0A%0ATravel%20month%20or%20dates%3A%0ATravellers%3A%0ARooms%3A%0AWalking%20or%20mobility%20considerations%3A%0AHotel%20preference%3A%0A",
    whatsappHref:
      "https://wa.me/447985052302?text=Hello%20AVIORA%2C%20I%27d%20like%20a%20private%20proposal%20for%20China%20at%20an%20Easier%20Pace%20%2812%20days%2C%20Beijing%2C%20Xi%27an%20and%20Shanghai%29.%20Please%20advise%20on%20dates%2C%20hotels%20and%20the%20right%20pace%20for%20our%20travellers.",
    scheduleCallHref: "tel:+447985052302",
    defaultMessage:
      "I am interested in China at an Easier Pace. Please recommend the right hotel level, room setup and daily walking plan for our group.",
  },
};
