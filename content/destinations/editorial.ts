import type { ExplorerDestination } from "@/content/destinations/explorer";

export type DestinationEditorial = {
  bestTime: string;
  orientation: string;
  experiences: [string, string, string];
  planningNotes: [string, string, string];
  arrival: string;
  gettingAround: string;
  stayStrategy: string;
  firstTimerNote: string;
  faqs: Array<{ question: string; answer: string }>;
  culturalStory: { title: string; paragraphs: [string, string] };
  foodStory: { title: string; paragraphs: [string, string] };
  itinerary: Array<{ day: string; title: string; description: string }>;
};

const editorial: Record<string, DestinationEditorial> = {
  beijing: {
    bestTime:
      "April to May and September to October usually bring the most comfortable walking weather. Summer is hot and busy; winter is cold but often quieter and visually striking.",
    orientation:
      "Beijing is not a compact monument district. The Forbidden City, hutongs, Summer Palace and Great Wall sit across a very large urban area, so a good private plan protects one major story at a time instead of stacking distant sights into the same day.",
    experiences: [
      "Read the Forbidden City as an imperial city, not a sequence of photo stops",
      "Give the Great Wall its own day, with the section chosen around mobility and crowd tolerance",
      "Balance monumental Beijing with hutong lanes, temple parks and neighborhood food",
    ],
    planningNotes: [
      "Reserve the Forbidden City and other high-demand sites before arrival",
      "Expect security checks and extensive walking even with private transport",
      "Choose the Great Wall section according to fitness, season and preferred cable-car access",
    ],
    arrival:
      "Beijing Capital Airport and Beijing Daxing Airport both serve international arrivals. High-speed rail connects Beijing with Xi'an and Shanghai; the correct station matters because the terminals are far apart.",
    gettingAround:
      "The metro is extensive, but a private vehicle is valuable when combining large sites, traveling with luggage, or managing children and older parents. Vehicles cannot remove the walking inside palace and temple complexes.",
    stayStrategy:
      "For a first visit, stay within practical reach of the historic center rather than choosing a hotel only for a skyline view. Three nights cover the essentials; four or five create a calmer Great Wall day and more local texture.",
    firstTimerNote:
      "Do not judge distances by the map alone. Beijing blocks, security zones and attraction entrances can turn a short-looking transfer into a substantial part of the day.",
    faqs: [
      {
        question: "How many days do first-time visitors need in Beijing?",
        answer:
          "Plan at least three full sightseeing days. Four or five nights are more comfortable if the Great Wall, Forbidden City, hutongs and Summer Palace all matter to you.",
      },
      {
        question: "Which Great Wall section is best for international visitors?",
        answer:
          "Mutianyu suits many first-time visitors because it combines restored scenery with cable-car options. The best choice still depends on mobility, season, photography goals and crowd tolerance.",
      },
      {
        question: "Can Beijing work for families and senior travelers?",
        answer:
          "Yes. The route should limit major sites per day, use private transfers strategically and account honestly for long walking distances inside attractions.",
      },
    ],
    culturalStory: {
      title: "An imperial capital still lived at neighborhood scale",
      paragraphs: [
        "Beijing served as the political center of the Ming and Qing dynasties, and its old city was organized around a powerful north-south axis. The Forbidden City, Temple of Heaven and historic gates were not isolated monuments: together they expressed how the state, ritual and urban life were ordered.",
        "That monumental history still sits beside a more intimate Beijing. Hutong lanes, courtyard homes and public parks reveal how residents use shared space, exercise, eat and socialize. A valuable visit moves between both scales, because the city makes more sense when imperial architecture and everyday life are read together.",
      ],
    },
    foodStory: {
      title: "Northern flavors, shared tables and food with history",
      paragraphs: [
        "Beijing food is shaped by northern wheat, imperial kitchens and migration from across China. Roast duck is the famous ritual meal, but noodles, dumplings, sesame pastries and seasonal home-style dishes often reveal more about daily life.",
        "International travelers benefit from ordering with context: portion sizes are usually designed for sharing, meal timing can affect the day, and dietary needs should be translated clearly. A guide can choose a restaurant for the group rather than treating one famous dish as the entire food story.",
      ],
    },
    itinerary: [
      {
        day: "Day 1",
        title: "Imperial Beijing",
        description:
          "Forbidden City and central-axis context, with a measured neighborhood evening.",
      },
      {
        day: "Day 2",
        title: "Temple and local life",
        description:
          "Temple of Heaven at a better hour, followed by hutongs or a hands-on cultural experience.",
      },
      {
        day: "Day 3",
        title: "The Great Wall",
        description:
          "A dedicated private day at the section best matched to mobility, season and crowd tolerance.",
      },
      {
        day: "Day 4",
        title: "A quieter final chapter",
        description:
          "Summer Palace, specialist interest or a slower departure according to flight time.",
      },
    ],
  },
  xian: {
    bestTime:
      "March to May and September to early November usually offer comfortable conditions for archaeological sites and city walking. Summer can be hot, while winter is colder and often less crowded.",
    orientation:
      "Xi'an is where a first China itinerary gains historical depth. The Terracotta Army lies outside the center, while the City Wall, old lanes and food districts form a separate urban chapter. Two full days prevent the city from becoming a single museum stop.",
    experiences: [
      "See the Terracotta Army with the Qin dynasty story explained before entering the main pits",
      "Walk or cycle an appropriate section of the City Wall near softer morning or evening light",
      "Explore the Muslim Quarter through food, mosque history and Xi'an's Silk Road connections",
    ],
    planningNotes: [
      "Allow a half day for the Terracotta Army including the road transfer",
      "Discuss halal and other dietary requirements before a food-focused visit",
      "Use high-speed rail to connect with Beijing when the wider route allows it",
    ],
    arrival:
      "Xi'an is commonly reached by high-speed rail from Beijing or by domestic flight. Xi'an North is the main high-speed rail station; the airport and archaeological sites are outside the central sightseeing area.",
    gettingAround:
      "Metro works well for parts of central Xi'an. Private transport is most useful for the Terracotta Army and for joining distant stops without losing the day to transfers.",
    stayStrategy:
      "Stay near the City Wall or a convenient metro connection for evening access and simpler transfers. Two or three nights suit most first-time routes; add time if archaeology, food or Tang history is a major interest.",
    firstTimerNote:
      "The Terracotta Army is not in central Xi'an. Combining it with too many city attractions creates a rushed day and leaves little time to understand the site.",
    faqs: [
      {
        question: "Is one day enough for Xi'an?",
        answer:
          "One day can cover the Terracotta Army but not Xi'an well. Two full days allow one archaeological day and one city day for the wall, historic neighborhoods and food culture.",
      },
      {
        question: "Should I fly or take the train from Beijing to Xi'an?",
        answer:
          "High-speed rail is often the simpler city-to-city choice once airport travel and security time are included. The right option depends on the complete route and available train times.",
      },
      {
        question: "Is Xi'an suitable for Muslim travelers?",
        answer:
          "Xi'an has a significant Muslim heritage and many halal food options. A well-briefed guide can add historical context and confirm suitable meals instead of relying only on a busy market walk.",
      },
    ],
    culturalStory: {
      title: "China's ancient capital and the eastern threshold of the Silk Road",
      paragraphs: [
        "Known historically as Chang'an, Xi'an was the capital of several dynasties and one of the great cities of the ancient world. The Terracotta Army belongs to the unification story of the Qin, while later Tang-era history connects the city to trade, religion and cultural exchange across Eurasia.",
        "The surviving City Wall gives modern visitors an unusually clear sense of urban form. Inside and around it, mosques, markets, temples and newer districts show that Xi'an is not frozen in one dynasty. The city's value comes from seeing multiple historical layers rather than treating the warriors as its only reason to visit.",
      ],
    },
    foodStory: {
      title: "A wheat-based food culture shaped by migration and trade",
      paragraphs: [
        "Xi'an is known for hand-pulled and hand-torn noodles, flatbreads, dumplings and richly seasoned lamb dishes. These foods reflect northern agriculture as well as the city's long position on routes connecting China with Central Asia.",
        "The Muslim Quarter is culturally significant, but it is also busy and commercial. A useful food walk distinguishes spectacle from substance, explains halal traditions and includes places where the cooking, not only the crowd, carries the story.",
      ],
    },
    itinerary: [
      {
        day: "Day 1",
        title: "The Qin dynasty",
        description:
          "Terracotta Army with historical framing, followed by a calm return to central Xi'an.",
      },
      {
        day: "Day 2",
        title: "The living ancient city",
        description:
          "City Wall, mosque and food traditions, with an evening chosen around energy levels.",
      },
      {
        day: "Day 3",
        title: "A deeper Xi'an",
        description:
          "Add Tang history, a museum or a specialist archaeological site before the onward train.",
      },
    ],
  },
  shanghai: {
    bestTime:
      "March to May and October to November are usually comfortable for walking. Summer is hot and humid, while winter is cool and often manageable with layered clothing.",
    orientation:
      "Shanghai works as an easy international arrival, a modern contrast to the historic capitals, or a protected final stop before flying home. Its value lies beyond the skyline: former concession streets, local markets and river history explain how the city became modern China.",
    experiences: [
      "Walk the Bund with the river's trading history and Pudong's transformation in view",
      "Explore former concession streets, lane neighborhoods and local food at street level",
      "Use an evening river view or rooftop selectively rather than chasing every skyline angle",
    ],
    planningNotes: [
      "Check whether your flight uses Pudong or Hongqiao airport",
      "Protect the final Shanghai night before a long-haul departure when the route includes domestic travel",
      "Choose hotel location around the experiences you want, not simply the tallest view",
    ],
    arrival:
      "Pudong handles most long-haul international flights; Hongqiao is closer to central Shanghai and shares a transport hub with a major high-speed rail station. Always verify the airport and terminal before departure.",
    gettingAround:
      "Shanghai's metro is efficient and extensive. Private transfers remain useful with luggage, for airport movements and when a tailored neighborhood route would otherwise require repeated changes.",
    stayStrategy:
      "The Bund and former concession area provide different atmospheres. Two full days give a useful introduction; three or four nights allow neighborhoods, food and a day trip or a less hurried final departure.",
    firstTimerNote:
      "Pudong and Hongqiao are not interchangeable. A transfer planned for the wrong airport can create a serious departure problem.",
    faqs: [
      {
        question: "How many days should I spend in Shanghai?",
        answer:
          "Two full days cover the Bund, central neighborhoods and modern skyline. Three or four nights work better if Shanghai is your arrival city, departure buffer or base for a nearby excursion.",
      },
      {
        question: "Which Shanghai airport should international visitors use?",
        answer:
          "Most intercontinental flights use Pudong, while Hongqiao handles many domestic and regional services. Use the airport printed on the confirmed ticket, not a general Shanghai airport assumption.",
      },
      {
        question: "Is Shanghai a good first stop in China?",
        answer:
          "Yes. It offers strong international air access, an efficient metro and a relatively gentle introduction to mobile payments, food and contemporary city life.",
      },
    ],
    culturalStory: {
      title: "A Chinese port city that continually rewrites itself",
      paragraphs: [
        "Shanghai's modern identity grew from its position on the Huangpu River and its role in global trade. The Bund's banks and trading houses face Pudong's towers across the water, turning one riverfront into a visible timeline of economic change.",
        "The city becomes more human away from the skyline. Lilong lane housing, former concession streets, temples, markets and neighborhood parks reveal how local life adapted through dramatic political and commercial change. Shanghai is most rewarding when modern ambition and lived-in streets share the itinerary.",
      ],
    },
    foodStory: {
      title: "Delicate seasoning, river produce and neighborhood breakfast culture",
      paragraphs: [
        "Shanghai cooking tends to be sweeter and more restrained than Sichuan food, with soy-braised dishes, freshwater ingredients and seasonal vegetables. Xiaolongbao are well known, but breakfast stalls and neighborhood shops often provide the clearest introduction.",
        "A food route should be planned around freshness and geography. Rather than crossing the city for one famous shop, combine tastings with markets, lanes and architecture so food explains the neighborhood around it.",
      ],
    },
    itinerary: [
      {
        day: "Day 1",
        title: "River and skyline",
        description: "Bund history, Pudong's rise and a well-timed evening beside the Huangpu.",
      },
      {
        day: "Day 2",
        title: "Shanghai at street level",
        description: "Former concession streets, local food, markets and residential lanes.",
      },
      {
        day: "Day 3",
        title: "Old city and personal interests",
        description:
          "Yu Garden area plus design, art, Jewish heritage or a slower neighborhood route.",
      },
    ],
  },
  chengdu: {
    bestTime:
      "March to June and September to November are generally comfortable. Chengdu can be cloudy and humid, but its tea houses, food and city life work in every season with sensible daily timing.",
    orientation:
      "Chengdu deserves more than a panda morning. The strongest stay combines an early conservation-base visit with tea-house life, Sichuan food and enough unscheduled time to feel the city's relaxed social rhythm.",
    experiences: [
      "Visit giant pandas early, when they are more likely to be active and visitor pressure is lower",
      "Share covered-bowl tea in People's Park with a guide who can explain local social life",
      "Explore Sichuan flavor through markets and meals adjusted to your preferred heat level",
    ],
    planningNotes: [
      "Choose the panda base before fixing the rest of the day's geography",
      "Brief allergies, vegetarian needs and spice tolerance in advance",
      "Use three to five days depending on whether Leshan or a wider Sichuan route is included",
    ],
    arrival:
      "Chengdu Tianfu handles many international and domestic flights, while Shuangliu remains an important airport. High-speed rail provides easy links to Chongqing and several Sichuan destinations.",
    gettingAround:
      "The metro is useful in central Chengdu. Private transfers make the panda morning and optional Leshan day more reliable, especially when opening times and road distance matter.",
    stayStrategy:
      "Choose a central base with practical access to food, parks and evening walks. Three nights suit a focused city stay; four or five days create room for food, tea, rest and a Leshan option.",
    firstTimerNote:
      "There is more than one panda facility around Chengdu. Travel time, breeding focus and expected visitor volume differ, so the name and location should be confirmed before booking.",
    faqs: [
      {
        question: "How many days are enough for Chengdu?",
        answer:
          "Three days work for pandas, city life and Sichuan food. Four or five days are better for a slower pace, a cooking or market experience, and an optional Leshan day.",
      },
      {
        question: "What time should I visit the pandas?",
        answer:
          "Morning is usually best because pandas tend to be more active around feeding time and the temperature is often more comfortable.",
      },
      {
        question: "Can Sichuan food be arranged for travelers who do not eat very spicy food?",
        answer:
          "Yes. Sichuan cuisine is broader than extreme heat. Explain spice tolerance and dietary restrictions before the trip so appropriate dishes and restaurants can be selected.",
      },
    ],
    culturalStory: {
      title: "A Sichuan capital where public life moves at a social pace",
      paragraphs: [
        "Chengdu has been an important Sichuan center for more than two millennia, but visitors often remember its present-day rhythm as strongly as its history. Tea houses, parks and food streets are social infrastructure: places to meet, talk, play cards, listen to performances and let the day unfold.",
        "Panda conservation adds a globally recognized chapter, yet it should not eclipse the city. Irrigation history, Shu culture, religious sites and neighborhood life explain why Chengdu feels distinct from China's eastern megacities. The best itinerary protects both the panda morning and the slower urban afternoon.",
      ],
    },
    foodStory: {
      title: "Sichuan food is about aroma and balance, not only heat",
      paragraphs: [
        "Sichuan cuisine builds flavor through chilies, fermented bean paste, pickles, aromatics and the citrus-like numbing quality of Sichuan pepper. Hotpot is one expression, while cold dishes, fish-fragrant seasoning, smoked ingredients and careful vegetable cooking show its range.",
        "Foreign visitors should state allergies, spice tolerance and dietary restrictions before restaurants are chosen. A split hotpot or thoughtfully ordered shared meal can preserve the regional character without turning dinner into an endurance test.",
      ],
    },
    itinerary: [
      {
        day: "Day 1",
        title: "Pandas at the right hour",
        description: "An early conservation-base visit followed by a light, unhurried afternoon.",
      },
      {
        day: "Day 2",
        title: "Tea and city life",
        description:
          "People's Park, neighborhood history and a Sichuan table planned around your group.",
      },
      {
        day: "Day 3",
        title: "Taste and choose",
        description:
          "Market, cooking or specialist culture, with space rather than another long transfer.",
      },
      {
        day: "Day 4",
        title: "Leshan or deeper Chengdu",
        description:
          "Choose the Giant Buddha day only when it fits your interests and walking comfort.",
      },
    ],
  },
  chongqing: {
    bestTime:
      "March to May and October to November are generally easiest for walking. Summer is hot and humid, but evening light and river views can be especially dramatic.",
    orientation:
      "Chongqing is a vertical river city, not a conventional flat downtown. Streets that appear adjacent on a map may sit on different levels, and the best itinerary uses bridges, lifts, rail and viewpoints as part of the story.",
    experiences: [
      "See the layered city reveal itself from daylight through blue hour",
      "Cross the Yangtze by cableway or follow the monorail through Chongqing's vertical geography",
      "Share a hotpot dinner with broth, ingredients and spice level planned around the group",
    ],
    planningNotes: [
      "Expect slopes, stairs and entrances on surprising building levels",
      "Use private transport strategically rather than trying to drive door to door everywhere",
      "Plan one coherent evening route instead of collecting disconnected viral viewpoints",
    ],
    arrival:
      "Chongqing has a major international airport and several rail stations. High-speed trains from Chengdu are frequent, but the exact arrival station affects the final road transfer.",
    gettingAround:
      "Metro and monorail are part of the experience, while private transport helps connect districts. Walking routes require local knowledge because ordinary map directions may not show vertical level changes clearly.",
    stayStrategy:
      "Choose the hotel around river access, night plans and walking comfort. Two full days introduce the city; three nights allow food, neighborhoods and viewpoints without turning every evening into a late finish.",
    firstTimerNote:
      "A location can be physically close but vertically difficult to reach. Elevation, bridge access and building entrances matter as much as distance.",
    faqs: [
      {
        question: "How many days do I need in Chongqing?",
        answer:
          "Two full days cover the essential city geography and one strong evening. Three days are better for food, neighborhoods and a more relaxed pace.",
      },
      {
        question: "Is Chongqing difficult for older travelers?",
        answer:
          "It can be demanding because of slopes and stairs, but a private route can use vehicles, lifts and carefully selected viewpoints to reduce unnecessary walking.",
      },
      {
        question: "Can Chongqing hotpot be made less spicy?",
        answer:
          "Yes. Split pots and mild broths are widely available, but preferences and dietary restrictions should be communicated before the restaurant is chosen.",
      },
    ],
    culturalStory: {
      title: "A mountain-and-river city built in three dimensions",
      paragraphs: [
        "Chongqing grew where the Yangtze and Jialing rivers meet, and its steep terrain shaped a city of bridges, stairways, elevated roads and buildings entered from different levels. Wartime history and later industrial growth added further layers to its strong urban identity.",
        "The city is often photographed as a futuristic spectacle, but its culture is equally grounded in resilience, direct social energy and close neighborhood life. Markets, hillside streets and river crossings help visitors understand why Chongqing feels unlike flatter Chinese cities.",
      ],
    },
    foodStory: {
      title: "Hotpot as a social ritual in a humid river city",
      paragraphs: [
        "Chongqing hotpot uses a deeply aromatic broth, traditionally rich with chilies and rendered fat, into which diners cook ingredients together. The shared pot reflects the city's sociable, energetic character as much as it reflects a taste for heat.",
        "A good introduction explains broth choice, cooking times, dipping sauces and ingredient ordering. Mild or divided pots are legitimate planning choices for international groups; the aim is participation and flavor, not proving tolerance.",
      ],
    },
    itinerary: [
      {
        day: "Day 1",
        title: "Learn the vertical city",
        description:
          "River confluence, layered streets and a blue-hour route that explains the geography.",
      },
      {
        day: "Day 2",
        title: "Transit, neighborhoods and hotpot",
        description: "Cableway or monorail, street-level life and a properly guided shared dinner.",
      },
      {
        day: "Day 3",
        title: "Choose a deeper chapter",
        description:
          "Dazu Rock Carvings, local neighborhoods or a slower open day before Zhangjiajie.",
      },
    ],
  },
  leshan: {
    bestTime:
      "Spring and autumn are usually comfortable. River conditions, rain and holiday crowds can influence whether a boat view or walking route is the better choice.",
    orientation:
      "Leshan is most useful as a focused cultural day from Chengdu. The Giant Buddha is experienced differently from the river and from the cliff-side walking route, so the plan should match mobility, weather and crowd conditions.",
    experiences: [
      "Understand why the Giant Buddha was carved at the meeting of three rivers",
      "Choose a river view or walking approach based on mobility and conditions",
      "Pair monumental heritage with Leshan's distinctive local food traditions",
    ],
    planningNotes: [
      "Treat Leshan as a full private day rather than a quick photo stop",
      "Confirm whether steps and cliff-side paths suit every traveler",
      "Keep the Chengdu alternative open if weather or mobility makes the visit unsuitable",
    ],
    arrival:
      "Leshan is commonly visited from Chengdu by high-speed rail plus local transfer or by private vehicle. The complete door-to-door plan matters more than the train time alone.",
    gettingAround:
      "The heritage area requires either a boat segment or walking with substantial steps. Private transfers simplify the connection between station, river, heritage entrances and meal stops.",
    stayStrategy:
      "Most international visitors use Leshan as a day trip from a Chengdu hotel. One overnight can make sense when adding Mount Emei or when a slower regional pace is important.",
    firstTimerNote:
      "The boat view and walking route are not the same experience. The boat gives scale with less walking; the land route offers closer detail but may involve queues and steep steps.",
    faqs: [
      {
        question: "Can I visit Leshan as a day trip from Chengdu?",
        answer:
          "Yes. It is a practical full-day private excursion when station transfers, tickets and the viewing method are planned in advance.",
      },
      {
        question: "Is the Leshan Giant Buddha suitable for senior travelers?",
        answer:
          "The boat view can reduce the walking burden. The cliff-side route includes many steps and should be assessed against individual mobility and current site conditions.",
      },
      {
        question: "Should I stay overnight in Leshan?",
        answer:
          "A day trip suits most Chengdu itineraries. Stay overnight if you are continuing to Mount Emei or want a deliberately slower regional journey.",
      },
    ],
    culturalStory: {
      title: "A monumental Buddhist work shaped by river danger and devotion",
      paragraphs: [
        "The Leshan Giant Buddha was begun in the eighth century during the Tang dynasty. Carved into a red sandstone cliff at the meeting of the Min, Dadu and Qingyi rivers, the figure was intended to calm dangerous waters and protect those who traveled through them.",
        "Its meaning comes from more than scale. The engineering of drainage channels, the relationship between sculpture and cliff, and the continuing religious significance all deserve explanation. Seeing the Buddha from the river emphasizes landscape; walking near the figure reveals craft and physical detail.",
      ],
    },
    foodStory: {
      title: "A Sichuan river city with a food identity of its own",
      paragraphs: [
        "Leshan's food culture includes bobo chicken, sweet-skinned duck, tofu dishes and small snacks that differ from the meals most visitors associate with Chengdu. The city is known within Sichuan as a serious eating destination.",
        "A day trip becomes much richer when lunch is treated as part of the place rather than a pause between transfers. Restaurant choice should still reflect hygiene expectations, dietary needs and the group's preferred level of adventure.",
      ],
    },
    itinerary: [
      {
        day: "Morning",
        title: "Travel from Chengdu",
        description:
          "Use private road transport or coordinated rail and transfer according to the final schedule.",
      },
      {
        day: "Midday",
        title: "Understand the Giant Buddha",
        description:
          "Choose river view, land route or a combination based on conditions and mobility.",
      },
      {
        day: "Afternoon",
        title: "Taste Leshan",
        description: "Add a locally planned meal before returning to the same Chengdu hotel.",
      },
    ],
  },
  jiuzhaigou: {
    bestTime:
      "Late spring through autumn offers the broadest access. October is famous for color and can also be extremely busy; winter is quieter but requires a cold-weather plan and current access checks.",
    orientation:
      "Jiuzhaigou is a high-altitude landscape journey, not a casual add-on to Chengdu. Transport, acclimatization, park buses and walking choices need to be designed together so the lakes and forests remain the focus.",
    experiences: [
      "Follow the valley's sequence of clear lakes, waterfalls and forest without racing between stops",
      "Use changing light and park transport to choose a realistic daily route",
      "Understand the Tibetan and Qiang cultural context of northern Sichuan respectfully",
    ],
    planningNotes: [
      "Allow a light arrival day before the main park visit",
      "Discuss altitude, mobility and health considerations before confirmation",
      "Check current transport schedules and park access rather than relying on old itineraries",
    ],
    arrival:
      "Travel options from Chengdu may include high-speed rail connections, road transfers or flights depending on current schedules. Door-to-door travel still takes substantial time and should be treated as a journey day.",
    gettingAround:
      "Inside the national park, visitors use the park's shared shuttle system and walk between selected stops. A private guide can improve sequencing but cannot replace mandatory park transport rules.",
    stayStrategy:
      "Stay close enough to the park entrance to protect the morning. A three- or four-night regional plan allows arrival, a full park day and weather or pacing flexibility.",
    firstTimerNote:
      "Jiuzhaigou sits at altitude. Even travelers who are comfortable walkers at sea level should keep the arrival day light and avoid overpacking the first park day.",
    faqs: [
      {
        question: "How many days do I need for Jiuzhaigou?",
        answer:
          "Allow at least three nights in the region so the arrival transfer, a full park day and departure are not compressed into an exhausting schedule.",
      },
      {
        question: "Can a private vehicle drive inside Jiuzhaigou National Park?",
        answer:
          "No. Visitors generally use the park's own shuttle buses. Private service is valuable for transfers, planning and guiding outside the restricted transport system.",
      },
      {
        question: "Will altitude be a problem in Jiuzhaigou?",
        answer:
          "Many visitors travel comfortably, but altitude affects people differently. Keep the arrival light and discuss medical or mobility concerns with an appropriate professional before travel.",
      },
    ],
    culturalStory: {
      title: "A protected valley where water, forest and highland cultures meet",
      paragraphs: [
        "Jiuzhaigou means 'Valley of Nine Villages,' referring to Tibetan villages historically located in the region. Its famous blue and green lakes are formed by mineral-rich water, fallen trees and travertine barriers, creating an unusual sequence of color and clarity.",
        "The landscape should not be separated from its human setting. Tibetan and Qiang cultures, conservation rules and the realities of rebuilding after earthquakes all form part of the contemporary destination. Respectful travel avoids turning local identity into decorative scenery.",
      ],
    },
    foodStory: {
      title: "Mountain travel requires practical expectations around food",
      paragraphs: [
        "Food in the wider region may draw on Sichuan, Tibetan and Qiang traditions, with yak products, barley, preserved ingredients and warming dishes appearing alongside familiar Chinese options. Tourist-area quality varies considerably.",
        "Meals should be planned for comfort, dietary safety and the day's altitude demands. Travelers with strict needs benefit from advance briefing and realistic expectations rather than assuming the same restaurant range available in Chengdu.",
      ],
    },
    itinerary: [
      {
        day: "Day 1",
        title: "Arrive and acclimatize",
        description:
          "Treat the regional transfer as a journey day and keep the evening deliberately light.",
      },
      {
        day: "Day 2",
        title: "Jiuzhaigou National Park",
        description:
          "Use park shuttles and selected walks to follow lakes, falls and forest without racing.",
      },
      {
        day: "Day 3",
        title: "A second landscape choice",
        description:
          "Choose a gentler valley day or Huanglong only after weather and altitude are assessed.",
      },
    ],
  },
  zhangjiajie: {
    bestTime:
      "April to May and September to November are often comfortable, but mountain visibility changes quickly. Mist can be atmospheric; heavy rain or low cloud may require a different sequence.",
    orientation:
      "Zhangjiajie is a region with several distinct scenic areas, not one viewpoint. Wulingyuan, Yuanjiajie, Tianzi Mountain, Golden Whip Stream and Tianmen Mountain require different bases and transport logic.",
    experiences: [
      "See the sandstone pillars from contrasting cliff-top and valley perspectives",
      "Use cableways, lifts and park shuttles intelligently to manage walking load",
      "Spend time in the forest and streams instead of reducing the region to one famous platform",
    ],
    planningNotes: [
      "Choose Wulingyuan or Zhangjiajie City according to the next day's sightseeing area",
      "Keep one flexible window for weather-dependent mountain views",
      "Discuss steps, heights and cableway comfort before fixing the route",
    ],
    arrival:
      "Zhangjiajie has a regional airport and rail connections. Arrival in Zhangjiajie City does not mean you are already at the Wulingyuan park entrances; the final transfer must be included.",
    gettingAround:
      "Private vehicles handle airport, station, hotel and park-gate transfers. Inside major scenic areas, travelers use regulated park buses, cableways and lifts shared with other visitors.",
    stayStrategy:
      "Wulingyuan is practical for the national forest park, while Zhangjiajie City suits Tianmen Mountain and transport connections. Three to four nights, sometimes split between bases, reduce backtracking.",
    firstTimerNote:
      "A hotel labeled 'Zhangjiajie' may be far from the entrance needed the next morning. Confirm the exact base, not only the city name.",
    faqs: [
      {
        question: "Should I stay in Wulingyuan or Zhangjiajie City?",
        answer:
          "Use Wulingyuan for national forest park days and Zhangjiajie City for Tianmen Mountain and many transport connections. A split stay can be the most efficient choice.",
      },
      {
        question: "How many days are enough for Zhangjiajie?",
        answer:
          "Three full sightseeing days provide a strong introduction. Four nights offer better weather flexibility and a more manageable walking pace.",
      },
      {
        question: "Is Zhangjiajie suitable for travelers with limited mobility?",
        answer:
          "Some major viewpoints are accessible with cableways, lifts and shuttle buses, but steps and queues remain. The route must be selected around the traveler's specific mobility needs.",
      },
    ],
    culturalStory: {
      title: "A landscape shaped by geology, weather and Tujia culture",
      paragraphs: [
        "Zhangjiajie's quartz-sandstone pillars were shaped over immense periods by uplift, water and erosion. Their vertical forms look otherworldly, yet the region is a real ecological system of forest, streams and changing mountain weather rather than a single cinematic viewpoint.",
        "The wider area is also home to Tujia and other communities whose history predates modern tourism. A thoughtful guide separates genuine regional context from staged claims, while helping visitors understand how park development, conservation and local livelihoods interact.",
      ],
    },
    foodStory: {
      title: "Hunan flavors after a day in the mountains",
      paragraphs: [
        "Local cooking belongs to the broader Hunan tradition, known for fresh chilies, smoked ingredients, pickled vegetables and direct, savory flavors. Meals can feel particularly restorative after cool or wet mountain days.",
        "Spice tolerance should be discussed before ordering, and mountain-area restaurant choices should balance regional character with consistency. The most useful guide orders a coherent shared meal instead of presenting unfamiliar dishes without explanation.",
      ],
    },
    itinerary: [
      {
        day: "Day 1",
        title: "Yuanjiajie and Tianzi Mountain",
        description: "Use lifts, shuttles and cableways for the main cliff-top pillar landscapes.",
      },
      {
        day: "Day 2",
        title: "Golden Whip Stream",
        description:
          "Experience the forest and sandstone from the valley rather than another high platform.",
      },
      {
        day: "Day 3",
        title: "Tianmen Mountain",
        description:
          "Move to the city base for the cableway, cliff route and Tianmen Cave when conditions allow.",
      },
      {
        day: "Day 4",
        title: "Weather buffer or chosen extension",
        description: "Keep flexibility for photography, Grand Canyon or a slower mountain day.",
      },
    ],
  },
};

export function getDestinationEditorial(destination: ExplorerDestination): DestinationEditorial {
  const content = editorial[destination.id];
  if (!content) throw new Error(`Missing destination editorial for ${destination.id}.`);
  return content;
}
