export interface CoverageCity {
  name: string;
  signature: string;
  description: string;
  highlights: string[];
}

export interface CoverageRoute {
  title: string;
  path: string;
  description: string;
}

export interface CoverageRegion {
  id: string;
  name: string;
  eyebrow: string;
  headline: string;
  summary: string;
  bestFor: string[];
  season: string;
  operatingStyle: string;
  heroImage: string;
  gallery: { src: string; alt: string; caption: string }[];
  overview: string[];
  cities: CoverageCity[];
  buyerContext: string[];
  routeIdeas: CoverageRoute[];
  operatingNotes: string[];
  seoKeywords: string[];
}

export const coverageRegions: CoverageRegion[] = [
  {
    id: "north-china",
    name: "North China Coverage",
    eyebrow: "Beijing, Great Wall, Shanxi, Inner Mongolia",
    headline: "North China programs for classic icons, ancient architecture, and wide-open northern landscapes.",
    summary: "North China is the easiest region for many global partners to sell because it gives travelers the China they already recognize: Beijing, the Great Wall, imperial history, old city lanes, and powerful cultural landmarks. It can also go much deeper, connecting Beijing with Datong, Pingyao, Chengde, and Inner Mongolia for clients who want heritage, grasslands, temples, and a more complete northern story.",
    bestFor: ["First-time China groups", "Senior-friendly culture", "Student travel", "Classic private tours", "Northern extensions"],
    season: "March-June and September-October are the cleanest seasons; winter can work for snow, temples, and lower crowds.",
    operatingStyle: "Strong guide supply, reliable high-speed rail, mature hotels, flexible Great Wall routing, and good airport access through Beijing.",
    heroImage: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-great-wall-of-china.jpg",
    gallery: [
      { src: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-great-wall-of-china.jpg", alt: "Great Wall of China near Beijing", caption: "The Great Wall remains the strongest visual anchor for first-time China programs." },
      { src: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-forbidden-city.jpg", alt: "Forbidden City in Beijing", caption: "Beijing gives groups a clear imperial narrative that foreign travelers understand immediately." },
      { src: "/programs/beijing-great-wall-gubei-5-day/china-prime-dmc-beijing-great-wall-gubei-5-day-temple-of-heaven.jpg", alt: "Temple of Heaven Beijing", caption: "Temple of Heaven works well for culture, photography, and local morning life." },
      { src: "/programs/inner-mongolia-cultural-5-day/china-prime-dmc-inner-mongolia-cultural-5-day-xilamuren-grassland.jpg", alt: "Inner Mongolia grassland", caption: "Inner Mongolia adds open landscapes and a strong regional contrast after Beijing." },
      { src: "/programs/inner-mongolia-cultural-5-day/china-prime-dmc-inner-mongolia-cultural-5-day-dazhao-temple.jpg", alt: "Dazhao Temple in Hohhot", caption: "Northern Buddhist and Mongolian heritage can deepen a standard Beijing route." },
      { src: "/programs/classic-china-beijing-xian-shanghai-12-day/china-prime-dmc-classic-china-beijing-xian-shanghai-12-day-tiananmen-square.jpg", alt: "Tiananmen Square Beijing", caption: "Beijing remains a practical gateway for long-haul arrivals and group operations." },
    ],
    overview: [
      "North China is the strongest starting point for partners selling China to travelers who have never been before. Beijing gives the region an obvious headline: the Forbidden City, the Great Wall, the Temple of Heaven, hutong neighborhoods, imperial gardens, and the political and cultural center of modern China. For foreign travelers, these names are already familiar, which makes the destination easier to explain in a brochure, sales call, or group proposal. For B2B operators, the value is not only recognition; it is operational maturity. Beijing has the air access, hotels, licensed guides, vehicle supply, restaurant variety, and attraction infrastructure needed for private FITs, small groups, student groups, senior travelers, and incentive extensions.",
      "The region becomes more interesting when Beijing is not treated as the whole story. North China can expand west into Shanxi, where Datong, Pingyao, Mount Wutai, the Yungang Grottoes, and the Hanging Monastery give travelers a very different view of Chinese civilization. These places are useful for repeat clients, culture-heavy groups, university programs, and travelers who want to understand pre-modern China through architecture, Buddhism, merchant history, and old city walls rather than only through capital-city icons.",
      "North China can also move toward Inner Mongolia, where Hohhot, grassland stays, temples, museums, desert edges, and borderland culture create a strong contrast with Beijing's urban scale. This is especially useful for families, photography clients, summer programs, and travelers looking for wide landscapes without committing to a very remote expedition. The region can be sold as classic, cultural, educational, or scenic depending on the market.",
      "For global partners, North China is a dependable base for building a first China product, a premium Beijing extension, or a deeper regional journey. The key is pacing. Beijing should not be overloaded with monuments every hour of the day; foreign travelers need time to understand what they are seeing. We recommend building programs around a clear rhythm: one major icon, one human-scale neighborhood or food experience, and one logistical buffer per day. That structure keeps the program comfortable and gives the guide space to explain why each site matters."
    ],
    cities: [
      {
        name: "Beijing",
        signature: "Imperial capital, Great Wall access, and China's clearest first-time gateway.",
        description: "Beijing is the easiest China city for many foreign travelers to understand because it connects directly to the images they already have in mind: the Great Wall, the Forbidden City, Tiananmen Square, the Temple of Heaven, hutong lanes, and imperial gardens. For B2B partners, Beijing is a strong gateway because international air access, hotel depth, guide supply, and private transfer logistics are mature. It works for luxury FITs, student groups, senior travelers, women-friendly programs, and classic escorted series.",
        highlights: ["Great Wall sections such as Mutianyu or Badaling", "Forbidden City and imperial Beijing", "Temple of Heaven morning local life", "Hutong lanes and courtyard neighborhoods", "Summer Palace lake and garden culture"],
      },
      {
        name: "Gubei Water Town and Simatai",
        signature: "A softer Great Wall extension with canals, evening lights, and scenic overnight value.",
        description: "Gubei is useful when a partner wants the Great Wall to feel less rushed. Instead of driving out and back on the same day, guests can overnight near the wall, walk canal-style lanes, photograph lantern-lit streets, and experience Simatai views by night. It is not a substitute for Suzhou or real Jiangnan canal culture, but it is a very practical Beijing extension for families, couples, and private groups who want a scenic second night outside the capital.",
        highlights: ["Simatai Great Wall views", "Lantern-lit water town streets", "Overnight pacing near the wall", "Soft walking and photography", "Good add-on for private Beijing programs"],
      },
      {
        name: "Datong",
        signature: "Buddhist caves, ancient temples, and one of North China's strongest cultural add-ons.",
        description: "Datong helps partners turn a simple Beijing trip into a deeper civilization route. The Yungang Grottoes introduce Buddhist art on a monumental scale, while the region's temples and old city areas give travelers a sense of northern China's religious and architectural history. Datong works especially well for culture-focused travelers, university groups, and repeat visitors who want more than the standard capital highlights.",
        highlights: ["Yungang Grottoes Buddhist sculpture", "Huayan Temple and historic architecture", "Northern frontier history", "Beijing rail extension potential", "Strong fit for cultural groups"],
      },
      {
        name: "Pingyao",
        signature: "A walled merchant city that makes old China easy to visualize.",
        description: "Pingyao is valuable because it gives foreign travelers a walkable historic city rather than a single monument. The intact city wall, old banking houses, courtyard compounds, and preserved streets make merchant China feel tangible. It is a good destination for photography, heritage travel, student groups, and guests who enjoy slow exploration. Operationally, it needs thoughtful hotel selection and pacing, but it rewards clients who want atmosphere.",
        highlights: ["UNESCO-listed old city", "Ancient city wall", "Merchant banking history", "Courtyard architecture", "Atmospheric evening walks"],
      },
      {
        name: "Chengde",
        signature: "Imperial retreat, mountain resort culture, and a calmer extension from Beijing.",
        description: "Chengde is a useful choice for partners who want imperial history without repeating Beijing's crowds. The Mountain Resort and surrounding temple complexes show how Qing emperors used landscape, architecture, and borderland diplomacy. It is best positioned for culture-first travelers, senior-friendly groups, and clients who appreciate slower touring. It can also support a more intellectual itinerary about empire, ethnicity, and northern geography.",
        highlights: ["Mountain Resort", "Outer Eight Temples", "Qing imperial retreat history", "Cooler summer atmosphere", "Good senior-friendly pacing"],
      },
      {
        name: "Inner Mongolia",
        signature: "Grasslands, Mongolian culture, temples, and big northern skies.",
        description: "Inner Mongolia gives a North China program a completely different visual language: grasslands, open horizons, temples, museums, and borderland culture. Hohhot works as the practical access point, while grassland or desert-style excursions can be adjusted for families, photographers, or soft adventure groups. It is best sold as a seasonal add-on, not a year-round universal product, because grassland quality and weather affect the guest experience.",
        highlights: ["Hohhot regional culture", "Dazhao Temple", "Grassland scenery", "Inner Mongolia Museum", "Summer family and photography programs"],
      },
    ],
    buyerContext: [
      "North China is ideal when a partner needs a dependable first-China product that can be sold confidently to travelers in North America, Europe, Australia, Southeast Asia, and the Middle East.",
      "It is also strong for educational programs because Beijing and Shanxi provide a clear timeline: imperial power, Buddhist art, merchant history, frontier geography, and modern China in one region.",
      "For senior travelers, the region should be planned with cable cars, shorter walking blocks, private transfers, and a balance between major sites and quieter experiences.",
      "For premium FIT clients, Beijing should include better restaurant selection, private access where possible, gallery or design stops, and a Great Wall section chosen for scenery rather than just convenience."
    ],
    routeIdeas: [
      { title: "Classic Beijing and Great Wall", path: "Beijing -> Great Wall -> Summer Palace -> hutongs", description: "A clean 4-5 day module for first-time travelers, private clients, and groups that need the essential China image without overcomplication." },
      { title: "Beijing and Shanxi Heritage", path: "Beijing -> Datong -> Pingyao -> Xi'an", description: "A deeper culture route linking imperial Beijing with Buddhist art, merchant cities, and the eastern end of the Silk Road." },
      { title: "Beijing and Inner Mongolia", path: "Beijing -> Hohhot -> grassland -> desert edge", description: "A seasonal contrast route for families, photographers, and groups that want open landscapes after capital-city touring." },
      { title: "Senior-Friendly North China", path: "Beijing -> Chengde -> selected Great Wall section", description: "A slower route with shorter transfer blocks, strong hotel control, and less aggressive sightseeing density." },
    ],
    operatingNotes: [
      "Great Wall section choice matters. Mutianyu is often better for comfort and scenery, while Badaling can work for high-volume groups with tighter logistics.",
      "Beijing attraction tickets require early planning during peak seasons, holidays, and major public events.",
      "Shanxi routes should be paced carefully because heritage towns and temples can become repetitive without a strong guide narrative.",
      "Inner Mongolia is highly seasonal. Grassland programs should be sold with realistic expectations about weather, comfort level, and landscape conditions.",
      "For Muslim-friendly groups, Beijing and Xi'an connect well, but halal restaurant planning should be handled before arrival rather than improvised on tour."
    ],
    seoKeywords: ["North China DMC", "Beijing travel trade partner", "Great Wall group tours", "China B2B destination coverage", "Shanxi heritage tours", "Inner Mongolia travel programs"],
  },
  {
    id: "east-china",
    name: "East China Coverage",
    eyebrow: "Shanghai, Suzhou, Hangzhou, Huangshan, water towns",
    headline: "East China programs for premium city stays, refined culture, gardens, canals, and soft luxury extensions.",
    summary: "East China is one of the most commercially useful regions for global partners because it combines Shanghai's international arrival power with Suzhou's gardens, Hangzhou's lake and tea culture, Huangshan's mountain scenery, and the canal-town atmosphere that many travelers imagine when they think of old China.",
    bestFor: ["Luxury FIT", "MICE extensions", "Cruise add-ons", "Senior-friendly culture", "Premium city and nature"],
    season: "March-May and September-November are strongest; summer is possible with heat management and indoor pacing.",
    operatingStyle: "Excellent rail connectivity, strong hotel choice, polished dining, good English-speaking guide supply, and flexible day-trip structure.",
    heroImage: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund.jpg",
    gallery: [
      { src: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-the-bund.jpg", alt: "Shanghai Bund skyline", caption: "Shanghai gives East China its strongest international gateway and business-travel identity." },
      { src: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-west-lake.jpg", alt: "West Lake Hangzhou", caption: "Hangzhou adds lake scenery, tea culture, temples, and a refined pace." },
      { src: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-huangshan.jpg", alt: "Huangshan Yellow Mountain", caption: "Huangshan creates a strong nature finish for clients who want more than cities." },
      { src: "/programs/shanghai-hangzhou-huangshan-9-day/china-prime-dmc-shanghai-hangzhou-huangshan-9-day-hongcun.jpg", alt: "Hongcun village Anhui", caption: "Anhui villages bring architecture, water systems, and slower cultural texture." },
      { src: "/programs/women-beijing-xian-shanghai-11-day/china-prime-dmc-women-beijing-xian-shanghai-11-day-humble-administrator-s-garden.jpg", alt: "Suzhou classical garden", caption: "Suzhou gardens are essential for travelers who want elegant Jiangnan culture." },
      { src: "/programs/women-beijing-xian-shanghai-11-day/china-prime-dmc-women-beijing-xian-shanghai-11-day-zhujiajiao.jpg", alt: "Zhujiajiao water town", caption: "Water towns work well as short, photogenic extensions from Shanghai." },
    ],
    overview: [
      "East China is one of the best regions for partners who need China to feel polished, comfortable, and easy to sell. Shanghai gives the route international familiarity: skyline, Bund architecture, design, shopping, business hotels, cruise connections, and a cosmopolitan image that foreign travelers understand quickly. It also works well as an arrival or departure city because air access and hotel choice are strong. For B2B sellers, Shanghai is a gateway that can support luxury FITs, corporate groups, incentive travel, women-friendly programs, family extensions, and first-time China itineraries.",
      "The value of East China is that Shanghai does not have to stand alone. Suzhou adds classical gardens, canals, silk history, old streets, and a softer cultural mood. Hangzhou adds West Lake, Longjing tea fields, temples, and refined scenery. Huangshan and the surrounding Anhui villages add mountains, cloud-sea landscapes, old merchant architecture, and a stronger nature component. Water towns such as Zhujiajiao, Wuzhen, or Tongli can be used selectively when clients want a photogenic canal experience without committing to a long rural route.",
      "For foreign travelers, East China needs translation. Shanghai is not just a skyline; it is a city where treaty-port history, Art Deco architecture, global finance, creative neighborhoods, and modern Chinese confidence sit side by side. Suzhou is not just a pretty garden city; its UNESCO-listed gardens show how Chinese scholars created miniature worlds with rocks, water, pavilions, poetry, and borrowed views. Hangzhou is not just a lake; it is one of China's classic places of leisure, tea, Buddhism, and landscape aesthetics. Huangshan is not just a mountain; it shaped Chinese painting and gives travelers the dramatic pine-and-granite scenery they often associate with Chinese art.",
      "Operationally, East China is highly flexible. High-speed rail makes it possible to build short modules, day trips, or longer circuits. The region can be sold as a premium extension after Beijing and Xi'an, a standalone luxury FIT journey, a MICE pre- or post-tour, or a soft cultural route for senior travelers. The main challenge is not access; it is avoiding generic sightseeing. A good East China program should balance skyline, neighborhoods, gardens, tea, water, food, and one or two quieter moments where travelers can feel the region's elegance."
    ],
    cities: [
      { name: "Shanghai", signature: "China's global city: skyline, Bund, design, dining, and business travel.", description: "Shanghai gives foreign travelers a modern entry point into China. The Bund shows the city's international past, Pudong shows its future-facing skyline, and neighborhoods such as the French Concession and Xintiandi provide walkable lifestyle content. For B2B partners, Shanghai is excellent for MICE, luxury FITs, cruise extensions, and programs that need strong hotels, high-end dining, shopping, and smooth airport logistics.", highlights: ["The Bund and Huangpu River", "Pudong skyline viewpoints", "French Concession streets", "Yu Garden and old-city context", "Premium hotel and dining options"] },
      { name: "Suzhou", signature: "Classical gardens, canals, silk, and the refined culture of Jiangnan.", description: "Suzhou helps travelers understand a softer side of China. Its gardens are not simply decorative; they are carefully designed worlds of rocks, water, buildings, and views. Foreign guests should be told why the gardens matter, how they relate to scholar culture, and why Suzhou was historically associated with wealth, silk, and beauty. It works well as a day trip or overnight extension from Shanghai.", highlights: ["Humble Administrator's Garden", "Master of Nets Garden", "Pingjiang Road", "Grand Canal and boat experiences", "Silk culture and craft stops"] },
      { name: "Hangzhou", signature: "West Lake, tea culture, temples, and one of China's most elegant leisure cities.", description: "Hangzhou is ideal for clients who want beauty without heavy monument fatigue. West Lake gives the city its emotional center, while Longjing tea areas, Lingyin Temple, and lakeside walking routes add texture. It is especially strong for luxury FITs, women-friendly programs, senior travelers, and East China routes that need a slower, more graceful pace after Shanghai.", highlights: ["West Lake", "Longjing tea fields", "Lingyin Temple", "Xixi wetland options", "Elegant hotels and slow touring"] },
      { name: "Huangshan", signature: "Yellow Mountain scenery, granite peaks, pine trees, and cloud-sea landscapes.", description: "Huangshan gives East China a dramatic nature dimension. The mountain is famous for twisted pines, stone peaks, winter snow, sunrise viewpoints, and cloud seas when conditions align. It needs careful pacing because weather, cable car queues, and walking demands can affect the experience. For the right client, it is one of China's most memorable scenic destinations.", highlights: ["Yellow Mountain viewpoints", "Cable car-supported access", "Sunrise and cloud-sea potential", "Photography-focused routing", "Nature extension from Hangzhou or Shanghai"] },
      { name: "Hongcun and Xidi", signature: "Anhui villages with white walls, black roofs, water systems, and merchant history.", description: "Hongcun and Xidi are excellent for travelers who want old architecture and village atmosphere. They help explain Hui merchant culture, clan structures, water systems, and the visual language of eastern China's historic villages. These stops are useful after Huangshan or as part of a culture-and-nature route.", highlights: ["UNESCO village streets", "Hui-style architecture", "Water reflections and photography", "Merchant-family history", "Good pairing with Huangshan"] },
      { name: "Water towns", signature: "Canals, stone bridges, old lanes, and easy Shanghai-area atmosphere.", description: "Water towns such as Zhujiajiao, Tongli, or Wuzhen can be useful, but they should be chosen carefully. Foreign travelers need to understand that these towns represent canal-based Jiangnan life, not Venice copies. They are best for photography, short cultural contrast, and clients who want a softer day outside Shanghai.", highlights: ["Canal boat rides", "Stone bridges", "Old residential lanes", "Evening light in selected towns", "Easy day-trip structure"] },
    ],
    buyerContext: [
      "East China is the strongest region for premium short modules because the travel distances are manageable and the product feels polished.",
      "It works especially well for MICE because Shanghai, Hangzhou, and Suzhou can support venue needs, executive hotels, gala dinners, and soft cultural extensions.",
      "For cruise or business travelers, East China can be packaged into two to five days without feeling logistically heavy.",
      "For luxury FIT clients, the region should emphasize hotel selection, private gardens or tea experiences, better dining, and slower pacing rather than checklist touring."
    ],
    routeIdeas: [
      { title: "Shanghai Plus Suzhou", path: "Shanghai -> Suzhou -> water town", description: "A 3-4 day premium extension for clients who want skyline, gardens, canals, and a classic East China contrast." },
      { title: "East China Elegance", path: "Shanghai -> Hangzhou -> Suzhou", description: "A refined city-and-culture route for FITs, women-friendly groups, senior travelers, and MICE add-ons." },
      { title: "Shanghai to Huangshan", path: "Shanghai -> Hangzhou -> Huangshan -> Hongcun", description: "A stronger nature-and-heritage program that adds mountain scenery and Anhui villages." },
      { title: "Post-Cruise East China", path: "Shanghai -> Zhujiajiao -> Hangzhou", description: "A short, comfortable add-on for cruise guests who want culture and scenery without long transfers." },
    ],
    operatingNotes: [
      "Avoid packing too many water towns into one itinerary; one well-chosen canal town is usually enough.",
      "Huangshan requires weather-sensitive expectation management and should not be sold as a guaranteed sunrise or cloud-sea experience.",
      "Shanghai traffic and hotel location matter for MICE and senior-friendly programs.",
      "Suzhou gardens need good interpretation; otherwise foreign guests may see them as only pretty parks.",
      "Hangzhou is best when tea culture, temples, and lake pacing are balanced rather than rushed."
    ],
    seoKeywords: ["East China DMC", "Shanghai Suzhou Hangzhou tours", "China MICE extension", "Huangshan private tour", "Suzhou garden travel", "Hangzhou West Lake program"],
  },
  {
    id: "south-china",
    name: "South China Coverage",
    eyebrow: "Guangzhou, Shenzhen, Guilin, Yangshuo, Hong Kong, Macau",
    headline: "South China programs for business gateways, Cantonese culture, karst scenery, family travel, and cruise-linked routing.",
    summary: "South China is commercially useful because it combines major gateways with some of China's easiest-to-love landscapes. Guangzhou and Shenzhen support business, trade, and Greater Bay Area access; Hong Kong and Macau support international extensions; Guilin and Yangshuo deliver the limestone peaks and river scenery that foreign travelers often imagine when they think of Chinese landscape painting.",
    bestFor: ["Greater Bay Area business", "Family travel", "Soft adventure", "Cruise extensions", "Cantonese food culture"],
    season: "October-April is most comfortable; summer works with heat planning, indoor breaks, and flexible pacing.",
    operatingStyle: "Strong air and rail access, practical cross-border extensions, mature urban hotels, and scenery-led private touring in Guilin.",
    heroImage: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-li-river.jpg",
    gallery: [
      { src: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-li-river.jpg", alt: "Li River Guilin karst scenery", caption: "Guilin and Yangshuo give South China its strongest scenic identity." },
      { src: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-yangshuo-county.jpg", alt: "Yangshuo countryside", caption: "Yangshuo works for soft adventure, families, cycling, countryside, and photography." },
      { src: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-longji-rice-terraces.jpg", alt: "Longji Rice Terraces", caption: "Longji adds minority villages and rice-terrace landscapes for stronger cultural depth." },
      { src: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-canton-tower.jpg", alt: "Canton Tower Guangzhou", caption: "Guangzhou connects Cantonese heritage with modern business-city energy." },
      { src: "/programs/guangzhou-guilin-yangshuo-6-day/china-prime-dmc-guangzhou-guilin-yangshuo-6-day-chen-clan-ancestral-hall.jpg", alt: "Chen Clan Ancestral Hall Guangzhou", caption: "Guangzhou is strong for food, trade history, and Lingnan architecture." },
      { src: "/programs/family-beijing-shanghai-guangzhou-10-day/china-prime-dmc-family-beijing-shanghai-guangzhou-10-day-chimelong-safari-park.jpg", alt: "Chimelong Safari Park Guangzhou", caption: "Family programs can use Guangzhou's theme parks and animal experiences." },
    ],
    overview: [
      "South China is often underestimated by partners who focus only on Beijing, Xi'an, and Shanghai. In practice, it is one of the most useful regions for global B2B operators because it connects several different client needs: business travel, family entertainment, food culture, soft adventure, cruise extensions, and highly visual natural scenery. Guangzhou and Shenzhen give the region its commercial strength; Guilin and Yangshuo give it emotional travel appeal; Hong Kong and Macau can be used as international entry, exit, or add-on points depending on market and flight pattern.",
      "For foreign travelers, Guilin is usually the easiest destination in South China to understand. The Li River, Yangshuo's karst peaks, Longji Rice Terraces, bamboo-raft-style experiences, countryside routes, and soft outdoor activities match the image many people have of Chinese landscape painting. It is a strong choice for families, photographers, active seniors, and clients who want nature without a strenuous expedition. The key is to manage expectations around weather, river conditions, crowds, and the difference between highly commercial scenic areas and quieter countryside experiences.",
      "Guangzhou is different. It is not always sold as a leisure headline, but it is extremely valuable for partners who understand food, trade, and the Greater Bay Area. Cantonese cuisine, dim sum, ancestral halls, river views, old neighborhoods, wholesale markets, and modern architecture can create a strong short program. Shenzhen is more contemporary: technology, design, urban parks, and border access. Hong Kong and Macau add international comfort, ferry and bridge connections, gaming or entertainment infrastructure, and familiar English-language environments for certain markets.",
      "South China works best when the route is built around contrast. A Guangzhou business or food module can flow into Guilin's scenery. A Hong Kong or Macau extension can connect into mainland China for clients who want an easier first step. A family program can combine theme parks, pandas or animals, river scenery, and high-speed rail. For B2B sellers, the region should not be presented as one thing. It is a flexible operating zone with multiple gateways and very different travel personalities."
    ],
    cities: [
      { name: "Guangzhou", signature: "Cantonese food, trade history, Lingnan culture, and Greater Bay Area access.", description: "Guangzhou is one of China's most important commercial cities and the home of Cantonese culture. Foreign travelers may know it through Cantonese food, dim sum, the Canton Fair, or its role as a trading gateway. For travel partners, Guangzhou is useful for business groups, food-focused programs, family extensions, and routes connecting to Shenzhen, Hong Kong, Macau, or Guilin.", highlights: ["Dim sum and Cantonese dining", "Chen Clan Ancestral Hall", "Canton Tower", "Pearl River night views", "Business and trade travel access"] },
      { name: "Shenzhen", signature: "China's fast-moving innovation city and a clean bridge to Hong Kong.", description: "Shenzhen is modern, young, efficient, and strongly linked to technology and design. It works best for business delegations, innovation-themed programs, school groups interested in modern China, and travelers crossing between Hong Kong and mainland China. It is not an ancient heritage city; it should be sold honestly as a place to understand China's speed and urban future.", highlights: ["Technology and innovation positioning", "Design and urban parks", "Hong Kong border access", "Contemporary China story", "Corporate and education visits"] },
      { name: "Guilin", signature: "Karst peaks, rivers, caves, and one of China's most recognizable scenic landscapes.", description: "Guilin is the scenic anchor of South China. The limestone hills, rivers, caves, and rural views are easy for foreign travelers to appreciate, even if they know little about Chinese history. It is a good destination for first-time China clients who want nature, for families who need a break from cities, and for photographers who want classic southern landscapes.", highlights: ["Li River scenery", "Reed Flute Cave options", "Karst peak viewpoints", "Longji Rice Terraces access", "Soft family-friendly touring"] },
      { name: "Yangshuo", signature: "Countryside, cycling, river activities, cafes, and relaxed scenic travel.", description: "Yangshuo adds a slower, more intimate experience after Guilin. It works well for cycling, walking, countryside drives, cooking classes, light outdoor activities, and river-focused scenery. It should be paced carefully because some areas are commercial, but with good routing it can feel relaxed and memorable. It is one of South China's best family and soft-adventure destinations.", highlights: ["Countryside cycling", "Yulong River scenery", "Cooking or market experiences", "Karst countryside photography", "Flexible soft adventure"] },
      { name: "Longji Rice Terraces", signature: "Layered mountain terraces and minority village culture near Guilin.", description: "Longji is valuable because it gives Guilin programs a cultural and landscape extension. The terraces change by season: water reflections, green growth, harvest colors, and winter patterns all produce different experiences. It is best for clients who can manage some walking and appreciate rural scenery. It also helps foreign travelers understand agricultural landscapes and minority communities beyond city China.", highlights: ["Rice terrace viewpoints", "Yao and Zhuang villages", "Seasonal photography", "Rural mountain scenery", "Good pairing with Guilin and Yangshuo"] },
      { name: "Hong Kong and Macau", signature: "International gateways, entertainment, hotels, ferries, and Greater Bay Area extensions.", description: "Hong Kong and Macau can support pre- and post-mainland travel, cruise passengers, incentive extensions, and clients who want familiar international infrastructure before entering mainland China. Hong Kong brings skyline, harbor, hiking, dim sum, and global finance; Macau brings Portuguese heritage, resorts, food culture, and entertainment. Both can connect with Guangzhou and Shenzhen when routing is planned properly.", highlights: ["International gateway access", "Harbor and skyline views", "Macau heritage and resorts", "Ferry or bridge routing", "MICE and incentive potential"] },
    ],
    buyerContext: [
      "South China is strong for Southeast Asian, Australian, Middle Eastern, and long-haul markets that want easier air routing or Hong Kong-linked itineraries.",
      "Family programs can use Guangzhou and Guilin together: theme parks and animal experiences followed by rivers, countryside, and soft outdoor activities.",
      "Business and incentive groups can use Guangzhou, Shenzhen, Hong Kong, and Macau for meetings, trade shows, factory visits, and reward travel.",
      "Guilin and Yangshuo should be sold with good visual assets because the scenery does more work than text for foreign buyers."
    ],
    routeIdeas: [
      { title: "Guangzhou and Guilin Scenic Route", path: "Guangzhou -> Guilin -> Yangshuo -> Longji", description: "A strong 6-7 day route combining Cantonese food, urban culture, rivers, countryside, and rice terraces." },
      { title: "Greater Bay Area Business Extension", path: "Hong Kong -> Shenzhen -> Guangzhou -> Macau", description: "A practical route for corporate delegations, incentive groups, and partners working around trade shows or business visits." },
      { title: "Family South China", path: "Guangzhou -> Chimelong -> Guilin -> Yangshuo", description: "A family-friendly structure that balances animals, theme park time, scenic rivers, and light countryside activity." },
      { title: "Cruise and Mainland Add-On", path: "Hong Kong -> Guangzhou -> Guilin", description: "A short mainland China extension for cruise guests or clients who want a softer entry beyond Hong Kong." },
    ],
    operatingNotes: [
      "Heat and humidity must be considered for senior travelers, families, and outdoor touring in summer.",
      "Guilin river and countryside experiences should be adjusted around weather, water levels, and crowd conditions.",
      "Hong Kong, Macau, and mainland routing requires careful visa and border-crossing communication.",
      "Guangzhou works best when food is treated as a core experience, not just a meal break.",
      "Longji requires realistic walking guidance and hotel selection depending on luggage and mobility."
    ],
    seoKeywords: ["South China DMC", "Guilin Yangshuo private tours", "Guangzhou travel trade", "Greater Bay Area MICE", "Hong Kong Macau China extension", "family China tours"],
  },
  {
    id: "southwest-china",
    name: "Southwest China Coverage",
    eyebrow: "Chengdu, Chongqing, Yunnan, Guizhou, Zhangjiajie",
    headline: "Southwest China programs for pandas, cyberpunk skylines, ethnic culture, karst villages, and cinematic mountains.",
    summary: "Southwest China is the region that makes repeat visitors say they did not know China could look and feel this different. It connects Chengdu's pandas and teahouse culture, Chongqing's dramatic cyber city skyline, Yunnan's ethnic diversity and mountain towns, Guizhou's Miao and Dong villages, and Zhangjiajie's sandstone peaks.",
    bestFor: ["Families", "Photography", "Ethnic culture", "Soft adventure", "Repeat China travelers"],
    season: "March-June and September-November are broadly strong; mountain and highland routes need local season checks.",
    operatingStyle: "More complex than the classic triangle, but high reward when flights, rail, road timing, hotel comfort, and guide quality are controlled.",
    heroImage: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave.jpg",
    gallery: [
      { src: "/programs/chongqing-chengdu-culture-food-5-day/china-prime-dmc-chongqing-chengdu-culture-food-5-day-hongya-cave.jpg", alt: "Chongqing Hongya Cave night view", caption: "Chongqing is the cyber city image many younger travelers now associate with China." },
      { src: "/programs/chongqing-jiuzhaigou-chengdu-6-day/china-prime-dmc-chongqing-jiuzhaigou-chengdu-6-day-chengdu-research-base-of-giant-panda-breeding.jpg", alt: "Chengdu panda base", caption: "Chengdu's panda base gives families and first-time visitors an easy emotional hook." },
      { src: "/programs/guizhou-ethnic-karst-6-day/china-prime-dmc-guizhou-ethnic-karst-6-day-xijiang-qianhu-miao-village.jpg", alt: "Xijiang Miao Village Guizhou", caption: "Guizhou brings minority culture, villages, music, silverwork, and mountain landscapes." },
      { src: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-zhangjiajie-national-forest-park.jpg", alt: "Zhangjiajie sandstone peaks", caption: "Zhangjiajie delivers high-impact scenery for visual campaigns and family groups." },
      { src: "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-dali-city.jpg", alt: "Dali Yunnan old town", caption: "Yunnan adds ancient towns, ethnic culture, lakes, and highland scenery." },
      { src: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-jiuzhaigou.jpg", alt: "Jiuzhaigou lakes Sichuan", caption: "Jiuzhaigou brings world-class water, forest, and mountain color to Sichuan programs." },
      { src: "/programs/southwest-china-yangtze-14-day/china-prime-dmc-southwest-china-yangtze-14-day-lijiang.jpg", alt: "Lijiang old town Yunnan", caption: "Lijiang gives Southwest China a strong cultural and photographic anchor." },
    ],
    overview: [
      "Southwest China is one of the most valuable regions for partners who want China to feel fresh, visual, and emotionally engaging. It is also one of the easiest regions to explain to foreign travelers once the right hooks are used. Chengdu means pandas, Sichuan food, teahouses, and a relaxed city rhythm. Chongqing means dramatic hills, bridges, river junctions, hotpot, and the futuristic night views that many travelers now call China's cyberpunk city. Yunnan means ethnic diversity, ancient towns, lakes, tea routes, Tibetan-influenced highlands, and mountain landscapes. Guizhou means Miao and Dong villages, silver jewelry, drum towers, festivals, waterfalls, and karst scenery. Zhangjiajie means the surreal sandstone pillars associated by many visitors with Avatar-style mountains.",
      "This region is stronger than a single-destination product. The real B2B value is in combining the pieces correctly. A family program might use Chengdu for pandas, Chongqing for city drama, and Zhangjiajie for mountains. A culture route might connect Guizhou villages with Yunnan old towns. A premium nature program might use Chengdu, Jiuzhaigou, Mount Siguniang, and Tibetan-influenced western Sichuan. A photography program might connect Chongqing night views, Zhangjiajie peaks, Fenghuang riverside lights, Guizhou villages, and Yunnan highlands.",
      "Foreign travelers need context here because many names are unfamiliar. Chengdu should not be described only as a panda city; it is a lifestyle capital where tea, food, old lanes, and slower social rhythms matter. Chongqing should not be described only as a large municipality; it is a layered mountain-and-river city where roads, trains, bridges, and buildings create an urban experience unlike Shanghai or Beijing. Yunnan should be explained as China's most ethnically diverse province, not only as Lijiang or Shangri-La. Guizhou should be sold as living culture and mountain villages, not as a secondary destination. Zhangjiajie should be explained as a national forest park landscape with park shuttles, elevators, cableways, weather considerations, and crowd management.",
      "Operationally, Southwest China is more complex than classic Beijing-Xi'an-Shanghai routing. Distances can be deceptive, mountain roads affect timing, flights may be seasonal, attraction queues can be heavy, and hotel standards vary outside major cities. But when managed properly, this is the region that creates the strongest sense of discovery. For global partners, it is ideal for clients who have already seen the classic route or for first-time travelers who want China to feel more scenic, family-friendly, and surprising."
    ],
    cities: [
      { name: "Chengdu", signature: "Pandas, Sichuan food, teahouses, and China's most relaxed major city.", description: "Chengdu is one of the easiest Southwest China cities to sell because pandas are universally understood. But the city is much more than the panda base. It is known for spicy Sichuan cuisine, teahouse culture, parks, old lanes, opera face-changing, and a slower lifestyle that contrasts with Shanghai or Beijing. It works for families, food travelers, women-friendly groups, senior travelers, and as a gateway to Jiuzhaigou, Leshan, Emei, and western Sichuan.", highlights: ["Chengdu Research Base of Giant Panda Breeding", "Sichuan hotpot and food experiences", "Teahouse culture", "Kuanzhai Alley or Jinli", "Gateway to Jiuzhaigou and western Sichuan"] },
      { name: "Chongqing", signature: "Cyber city skyline, hotpot, river views, steep streets, and dramatic night photography.", description: "Chongqing is increasingly attractive to younger travelers and visual campaigns because it looks unlike any other Chinese city. Built on hills where the Yangtze and Jialing rivers meet, it has layered roads, bridges, monorails, cliffside buildings, and neon night scenes. Foreign travelers understand it best when it is positioned as China's mountain cyber city, with food and river culture as core experiences.", highlights: ["Hongya Cave night views", "Jiefangbei city center", "Ciqikou old street", "Yangtze and Jialing river viewpoints", "Hotpot and spicy food culture"] },
      { name: "Yunnan", signature: "Ethnic diversity, ancient towns, lakes, highlands, tea routes, and mountain culture.", description: "Yunnan is China's most ethnically diverse province and one of the richest regions for culture-and-scenery programs. Dali, Lijiang, Shangri-La, Kunming, Tiger Leaping Gorge, and Meili Snow Mountain each bring a different story. It works for premium FITs, photography groups, soft adventure, wellness-style travel, and repeat visitors looking for a deeper China.", highlights: ["Dali and Erhai Lake", "Lijiang Old Town and Naxi culture", "Shangri-La Tibetan-influenced culture", "Tiger Leaping Gorge", "Meili Snow Mountain views"] },
      { name: "Guizhou", signature: "Miao and Dong villages, silverwork, drum towers, waterfalls, and karst countryside.", description: "Guizhou is one of the best provinces for travelers who want living ethnic culture. Xijiang Miao Village, Zhaoxing Dong Village, Huangguoshu Waterfall, Libo, and Fanjingshan can create a distinctive program with music, crafts, architecture, markets, and mountain scenery. It is less internationally famous than Yunnan, which can be an advantage for partners selling hidden China.", highlights: ["Xijiang Qianhu Miao Village", "Zhaoxing Dong Village", "Huangguoshu Waterfall", "Libo karst landscapes", "Fanjingshan nature and Buddhist culture"] },
      { name: "Zhangjiajie", signature: "Sandstone pillars, glass bridges, cable cars, and cinematic mountain scenery.", description: "Zhangjiajie is visually powerful and easy to market because the sandstone pillars feel unreal to foreign travelers. The destination needs careful operation: park shuttles, elevators, cable cars, weather, crowds, and walking intensity all affect the experience. It works well for families, photographers, active seniors, and China programs that need one dramatic scenic highlight.", highlights: ["Zhangjiajie National Forest Park", "Yuanjiajie and Tianzi Mountain", "Tianmen Mountain cable car", "Glass bridge options", "Fenghuang Ancient Town pairing"] },
      { name: "Jiuzhaigou and Western Sichuan", signature: "Alpine lakes, forests, Tibetan-influenced towns, and highland road scenery.", description: "Jiuzhaigou is one of China's most beautiful nature destinations, known for clear lakes, waterfalls, forests, and seasonal color. Western Sichuan adds Tibetan-influenced culture, mountain roads, grasslands, and photography value. These routes require stronger planning because elevation, road time, weather, and hotel expectations need to be explained before sale.", highlights: ["Jiuzhaigou National Park", "Huanglong Scenic Area", "Mount Siguniang", "Tibetan-influenced villages", "Highland photography routes"] },
    ],
    buyerContext: [
      "Southwest China is excellent for partners who want products that feel different from standard China itineraries while still being sellable.",
      "Chengdu and Chongqing are increasingly useful for younger markets because pandas, food, hotpot, night views, and cyber city visuals translate well on social media.",
      "Yunnan and Guizhou are strong for culture-rich programs, but they need good guide storytelling so guests understand ethnic diversity respectfully and clearly.",
      "Zhangjiajie and Jiuzhaigou require expectation management around weather, crowd flow, walking, park transport, and seasonal access."
    ],
    routeIdeas: [
      { title: "Pandas and Cyber City", path: "Chengdu -> Chongqing -> Dazu or Yangtze", description: "A compact urban Southwest route for food, pandas, night views, and modern China storytelling." },
      { title: "Yunnan Culture and Highlands", path: "Kunming -> Dali -> Lijiang -> Shangri-La", description: "A culture-and-scenery route for premium FITs, photography, and repeat China clients." },
      { title: "Guizhou Living Culture", path: "Guiyang -> Xijiang -> Zhaoxing -> Libo", description: "A strong hidden-China route built around Miao and Dong villages, crafts, music, and karst scenery." },
      { title: "Visual Southwest China", path: "Chengdu -> Zhangjiajie -> Fenghuang -> Shanghai", description: "A high-impact route for families and social-media-led campaigns where scenery matters." },
    ],
    operatingNotes: [
      "Southwest China routes should not be overscheduled; mountain transfers and park logistics need buffer time.",
      "Chongqing's best experience is often at night, so arrival timing and hotel location matter.",
      "Yunnan highland routes should be checked for altitude comfort, road time, and seasonality.",
      "Guizhou village experiences should be handled respectfully and with guides who can explain culture without turning it into a staged checklist.",
      "Zhangjiajie park days require guide-led crowd and weather decisions; fixed viewpoint promises can create disappointment."
    ],
    seoKeywords: ["Southwest China DMC", "Chengdu panda tours", "Chongqing cyber city travel", "Yunnan private tours", "Guizhou ethnic village tours", "Zhangjiajie B2B programs"],
  },
  {
    id: "northwest-china",
    name: "Northwest China Coverage",
    eyebrow: "Xi'an, Gansu, Dunhuang, Ningxia, Qinghai, Xinjiang",
    headline: "Northwest China programs for Silk Road heritage, Muslim-friendly routing, deserts, oasis cities, and frontier landscapes.",
    summary: "Northwest China is where China connects with the wider story of Asia: caravans, Buddhism, Islam, desert corridors, frontier forts, oasis cities, and mountain roads. It is one of the strongest regions for Muslim-friendly programs, repeat China travelers, educational groups, photographers, and clients who want a journey that feels truly different.",
    bestFor: ["Muslim-friendly groups", "Silk Road culture", "Photography", "Repeat travelers", "Educational programs"],
    season: "April-June and September-October are best for most routes; deep summer requires heat planning, and winter is selective.",
    operatingStyle: "High-value but logistically sensitive: long distances, domestic flights, rail segments, desert conditions, permits or local rules, and meal planning must be managed early.",
    heroImage: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-mogao-caves.jpg",
    gallery: [
      { src: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-mogao-caves.jpg", alt: "Mogao Caves Dunhuang", caption: "Dunhuang's Mogao Caves are one of the great cultural anchors of the Silk Road." },
      { src: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-crescent-lake-dunhuang.jpg", alt: "Crescent Lake Dunhuang", caption: "Desert scenery gives Northwest China a strong visual identity." },
      { src: "/programs/silk-road-gansu-ningxia-8-day/china-prime-dmc-silk-road-gansu-ningxia-8-day-zhangye-national-geopark.jpg", alt: "Zhangye Danxia landforms", caption: "Zhangye's colored mountains are powerful for photography-led itineraries." },
      { src: "/programs/xinjiang-xian-silk-road-14-day/china-prime-dmc-xinjiang-xian-silk-road-14-day-turpan.jpg", alt: "Turpan Xinjiang", caption: "Turpan brings oasis history, grape valleys, Karez systems, and desert heat." },
      { src: "/programs/southern-xinjiang-silk-road-9-day/china-prime-dmc-southern-xinjiang-silk-road-9-day-kashgar.jpg", alt: "Kashgar old city Xinjiang", caption: "Kashgar is one of the most distinctive cultural cities on China's western edge." },
      { src: "/programs/beijing-xian-shanghai-8-day/china-prime-dmc-beijing-xian-shanghai-8-day-muslim-quarter-xi-an.jpg", alt: "Xi'an Muslim Quarter", caption: "Xi'an connects the Silk Road story with Muslim heritage and food culture." },
    ],
    overview: [
      "Northwest China is the region where partners can move beyond the familiar China triangle and sell a journey with real narrative power. Xi'an introduces the eastern end of the Silk Road through the Terracotta Army, city wall, pagodas, and Muslim Quarter. Gansu carries travelers through Dunhuang, Zhangye, Jiayuguan, and the Hexi Corridor, where Buddhist caves, desert forts, rainbow landforms, and oasis history make the geography tangible. Ningxia adds Yellow River landscapes and Muslim-friendly positioning. Qinghai adds plateau scenery, Tibetan and Muslim cultural layers, and access toward western China. Xinjiang adds oasis cities, Uyghur culture, bazaars, mountains, deserts, and one of the strongest landscape contrasts in the country.",
      "This region is especially important for Muslim-friendly China travel. Xi'an, Ningxia, Gansu, and Xinjiang can support programs that include mosques, halal-aware meals, Muslim heritage, and Silk Road history. That does not mean every stop is simple; meal planning, prayer time, restaurant reliability, and hotel location need early coordination. But with the right operation, Northwest China gives Muslim travelers a meaningful China experience that is not limited to generic sightseeing.",
      "For foreign travelers, the Northwest needs good storytelling. The Mogao Caves are not just caves; they are a vast archive of Buddhist art shaped by trade, religion, and empire. Jiayuguan is not just a fort; it marks the symbolic western gate of the Great Wall. Zhangye's Danxia landforms are not only colorful mountains; they show the scale and drama of the corridor landscape. Kashgar is not just a market city; it is an oasis crossroads with Uyghur architecture, food, crafts, and Central Asian atmosphere. Turpan is not just hot desert; it is a place of ancient ruins, irrigation systems, grapes, and Silk Road survival.",
      "Operationally, Northwest China requires more discipline than classic routes. Distances are long, flights may not run daily, rail timing shapes the itinerary, desert heat can be intense, and some regions require sensitive planning and current local checks. The reward is a route that feels like a real journey. For B2B partners, this is best sold to repeat travelers, culturally curious clients, photographers, Muslim-friendly groups, and educational programs that want a China product with depth."
    ],
    cities: [
      { name: "Xi'an", signature: "Terracotta Army, ancient capital, Muslim Quarter, and the eastern start of the Silk Road.", description: "Xi'an is the most practical entry into Northwest China's story. The Terracotta Army gives global recognition, while the city wall, Big Wild Goose Pagoda, and Muslim Quarter help explain Xi'an as a former imperial capital and Silk Road terminus. It is essential for classic routes, Muslim-friendly programs, student groups, and travelers who want archaeology and food culture together.", highlights: ["Terracotta Army", "Ancient city wall", "Muslim Quarter", "Big Wild Goose Pagoda", "Shaanxi History Museum"] },
      { name: "Dunhuang", signature: "Mogao Caves, desert dunes, Buddhist art, and oasis atmosphere.", description: "Dunhuang is one of China's most important cultural destinations for serious travelers. The Mogao Caves require timed admission and careful explanation, but they can become a highlight of an entire China journey. Crescent Moon Spring and the Singing Sand Dunes add the desert image foreign travelers expect from the Silk Road.", highlights: ["Mogao Caves", "Crescent Moon Spring", "Singing Sand Dunes", "Oasis history", "Strong photography value"] },
      { name: "Zhangye", signature: "Rainbow-colored Danxia landforms and Hexi Corridor culture.", description: "Zhangye is useful because it gives the Silk Road route a bold landscape moment. The Danxia landforms are especially strong at late-day light, and the region can also include Buddhist temples, local markets, and corridor history. It works well between Dunhuang, Jiayuguan, and Lanzhou.", highlights: ["Zhangye Danxia Geopark", "Big Buddha Temple", "Late-day photography", "Hexi Corridor routing", "Gansu cultural stops"] },
      { name: "Jiayuguan", signature: "The symbolic western end of the Ming Great Wall.", description: "Jiayuguan helps foreign travelers understand frontier geography. The fort is not only a photo stop; it represents the edge of the walled empire and the transition toward desert corridors and oasis routes. It works best when guide interpretation links it to trade, defense, and movement across the Silk Road.", highlights: ["Jiayuguan Pass", "Western Great Wall story", "Desert-edge scenery", "Gansu corridor history", "Good stop between Zhangye and Dunhuang"] },
      { name: "Ningxia", signature: "Yellow River landscapes, desert experiences, and Muslim-friendly China positioning.", description: "Ningxia is valuable for partners building Muslim-friendly or lesser-known Silk Road programs. Yinchuan, Zhongwei, Shapotou, Yellow River landscapes, desert recreation, and Hui cultural context can add variety. It is less famous internationally, so it should be sold as a specialist extension rather than a generic first-China stop.", highlights: ["Yinchuan", "Shapotou", "Yellow River desert scenery", "Hui cultural context", "Muslim-friendly route potential"] },
      { name: "Xinjiang", signature: "Oasis cities, Uyghur culture, bazaars, mountains, deserts, and the far west of China.", description: "Xinjiang is one of China's most visually and culturally distinctive regions. Urumqi, Turpan, Kashgar, Karakul Lake, the Pamirs, Karez systems, old cities, bazaars, and desert routes can create an unforgettable journey. It requires careful planning, current local checks, and clear communication, but it has extraordinary value for repeat travelers, photographers, and Muslim-friendly groups.", highlights: ["Kashgar Old City", "Turpan and Karez system", "Karakul Lake", "Uyghur food and bazaar culture", "Pamir and desert landscapes"] },
    ],
    buyerContext: [
      "Northwest China is best sold to travelers who want story, scale, and cultural difference rather than only comfort and famous icons.",
      "It is one of the strongest regions for Muslim-friendly China programs when halal-aware routing and meal planning are handled carefully.",
      "Educational and university groups respond well to the region because it connects Buddhism, Islam, trade, empire, geography, and art history.",
      "Photography groups need sunrise, sunset, road timing, and weather planning; the region should not be operated like a standard city tour."
    ],
    routeIdeas: [
      { title: "Xi'an Silk Road Starter", path: "Xi'an -> Lanzhou -> Zhangye -> Dunhuang", description: "A strong introductory Silk Road route for culture-first clients who want Buddhist art, frontier history, and desert scenery." },
      { title: "Gansu and Ningxia Muslim-Friendly Route", path: "Yinchuan -> Zhongwei -> Zhangye -> Dunhuang", description: "A specialist program combining Yellow River landscapes, Hui culture, halal-aware planning, and Silk Road scenery." },
      { title: "Xinjiang Oasis Journey", path: "Urumqi -> Turpan -> Kashgar -> Tashkurgan", description: "A visually powerful route for repeat China travelers, Muslim-friendly groups, and photographers." },
      { title: "Grand Silk Road China", path: "Xi'an -> Dunhuang -> Turpan -> Kashgar", description: "A longer flagship journey connecting China's ancient capital with desert, oasis, and far-western culture." },
    ],
    operatingNotes: [
      "Northwest routes must be checked against current transport schedules, local rules, attraction ticket systems, and seasonal conditions.",
      "Halal-aware meal planning should be confirmed city by city rather than assumed across the whole region.",
      "Summer heat can be severe in desert areas; touring times should be adjusted around midday conditions.",
      "Mogao Caves and other controlled attractions require advance ticket handling and realistic backup planning.",
      "Xinjiang programs need clear pre-trip communication about distances, security procedures, food, culture, and comfort level."
    ],
    seoKeywords: ["Northwest China DMC", "Silk Road China tours", "Muslim friendly China travel", "Dunhuang Mogao Caves tour", "Xinjiang private tours", "Gansu Ningxia travel trade"],
  },
  {
    id: "central-china",
    name: "Central China Coverage",
    eyebrow: "Henan, Luoyang, Shaolin, Wuhan, Changsha, Fenghuang",
    headline: "Central China programs for civilization routes, rail-linked culture, student travel, and smart add-ons between major gateways.",
    summary: "Central China is useful for partners who want to add depth between better-known cities. Henan offers the cradle-of-civilization story through Luoyang, Shaolin, Longmen, and ancient capitals; Wuhan and Changsha work as rail and urban culture hubs; Fenghuang adds riverside heritage and minority culture when linked with Zhangjiajie or Hunan routes.",
    bestFor: ["Student groups", "Culture-heavy itineraries", "Rail-linked extensions", "Repeat travelers", "History programs"],
    season: "Spring and autumn are best; summer can be hot and humid, especially in Wuhan and Hunan.",
    operatingStyle: "Good rail logic, strong educational value, less international recognition, and best sold with clear themes rather than as standalone leisure icons.",
    heroImage: "/programs/female-friendly-cultural-china-10-day/china-prime-dmc-female-friendly-cultural-china-10-day-luoyang.jpg",
    gallery: [
      { src: "/programs/female-friendly-cultural-china-10-day/china-prime-dmc-female-friendly-cultural-china-10-day-luoyang.jpg", alt: "Luoyang city", caption: "Luoyang gives Central China a deep ancient-capital story." },
      { src: "/programs/female-friendly-cultural-china-10-day/china-prime-dmc-female-friendly-cultural-china-10-day-luoyi-ancient-city.jpg", alt: "Luoyi Ancient City Luoyang", caption: "Luoyi Ancient City works as a softer cultural evening stop in Luoyang." },
      { src: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-fenghuang-county.jpg", alt: "Fenghuang Ancient Town", caption: "Fenghuang adds riverside atmosphere and Hunan minority culture." },
      { src: "/programs/zhangjiajie-fenghuang-5-day/china-prime-dmc-zhangjiajie-fenghuang-5-day-wulingyuan.jpg", alt: "Wulingyuan Zhangjiajie", caption: "Central and Hunan routes can connect smoothly into Zhangjiajie scenery." },
      { src: "/programs/classic-china-beijing-xian-shanghai-12-day/china-prime-dmc-classic-china-beijing-xian-shanghai-12-day-big-wild-goose-pagoda.jpg", alt: "Big Wild Goose Pagoda Xi'an", caption: "Central China often connects naturally with Xi'an for ancient-capital storytelling." },
    ],
    overview: [
      "Central China is not always the first region that foreign buyers ask for, but it can add real value when a partner wants a more intelligent China route. Henan is the key cultural anchor because it contains some of the most important early centers of Chinese civilization. Luoyang, Longmen Grottoes, Shaolin Temple, Kaifeng, and Zhengzhou-area history help explain ancient capitals, Buddhism, martial culture, river plains, and the roots of Chinese state formation. These subjects are extremely useful for student groups, academic programs, and travelers who want context rather than only famous photo stops.",
      "The region also works because of rail logic. Central China sits between several major routes, making it possible to add one or two nights without building an entirely separate journey. Xi'an, Beijing, Shanghai, Wuhan, Changsha, Zhangjiajie, and Henan can be connected by high-speed rail or domestic flight depending on the route. This makes Central China useful for partners who want to create richer programs from existing classics.",
      "Foreign travelers need help understanding why Central China matters. Luoyang should be explained as one of China's ancient capitals, not just another city. Longmen should be presented as a major Buddhist art site, not simply a cave visit. Shaolin should be framed carefully: it is globally famous for kung fu, but the travel experience needs honest explanation around crowds, performance elements, temple culture, and expectations. Wuhan should be positioned as a major Yangtze River city, transport hub, university center, and food destination. Changsha brings youth culture, Hunan cuisine, nightlife, and access toward Zhangjiajie and Fenghuang.",
      "For B2B partners, Central China should rarely be sold as a generic destination list. It should be sold as a theme: civilization, Buddhism, martial arts, student learning, rail-linked China, Hunan culture, or an add-on that turns a standard route into a deeper one. When the theme is clear, the region becomes valuable; when the theme is unclear, it can feel like filler."
    ],
    cities: [
      { name: "Luoyang", signature: "Ancient capital, peony culture, and one of China's major civilization centers.", description: "Luoyang gives partners a strong ancient-capital story. It is closely associated with early dynasties, Buddhist culture, and the development of Chinese civilization. Foreign travelers may not know the name before arrival, so the guide narrative matters. Luoyang works best for culture-heavy programs, student travel, and routes linking Xi'an with Henan.", highlights: ["Ancient capital history", "Longmen Grottoes access", "Luoyi Ancient City", "Peony season", "Strong education value"] },
      { name: "Longmen Grottoes", signature: "Buddhist sculpture and one of China's major rock-carving sites.", description: "Longmen is one of the most important cultural sites in Central China. It helps travelers understand the spread of Buddhism, imperial patronage, and the scale of stone-carved religious art. It should be operated with a guide who can explain the site in plain language, because without context foreign guests may not understand its importance.", highlights: ["Buddhist cave sculpture", "UNESCO cultural value", "Imperial patronage story", "Excellent student group content", "Luoyang anchor site"] },
      { name: "Shaolin and Dengfeng", signature: "Kung fu fame, temple culture, and martial arts performance.", description: "Shaolin is globally recognizable because of kung fu, but it needs careful expectation management. The temple, performance culture, martial schools, and surrounding sacred mountain setting can be fascinating when explained well. It is useful for student groups, families, and clients interested in martial arts, Buddhism, or popular Chinese culture.", highlights: ["Shaolin Temple", "Kung fu performance", "Martial arts schools", "Songshan mountain context", "Family and student appeal"] },
      { name: "Kaifeng", signature: "Song Dynasty history, old streets, food culture, and Yellow River plain heritage.", description: "Kaifeng can enrich a Henan route by adding Song Dynasty culture, old neighborhoods, night-market energy, and a different urban texture. It is less polished internationally, so it should be used when a client wants depth rather than a luxury-forward route. It pairs well with Luoyang and Zhengzhou.", highlights: ["Song Dynasty story", "Old streets and markets", "Local food culture", "Yellow River plain context", "Good heritage extension"] },
      { name: "Wuhan", signature: "Yangtze River city, transport hub, universities, food, and modern central China.", description: "Wuhan is a practical and strategic city rather than a pure leisure icon. It can support educational visits, business travel, Yangtze routing, food-focused stops, and rail connections. It helps travelers understand a major inland metropolis and the scale of central China's urban development.", highlights: ["Yangtze River city identity", "Yellow Crane Tower", "University and education links", "Hot dry noodles and local food", "High-speed rail hub"] },
      { name: "Changsha and Fenghuang", signature: "Hunan food, youth culture, riverside heritage, and access toward Zhangjiajie.", description: "Changsha brings spicy Hunan food, nightlife, media culture, and a young urban atmosphere. Fenghuang adds a very different experience: riverside houses, bridges, evening lights, and minority-culture atmosphere. Together with Zhangjiajie, they can form a strong Hunan route for scenery and culture.", highlights: ["Hunan cuisine", "Changsha youth culture", "Fenghuang Ancient Town", "Tuojiang River views", "Good Zhangjiajie pairing"] },
    ],
    buyerContext: [
      "Central China works best when sold with a clear educational or cultural theme rather than as a generic sightseeing region.",
      "It is useful for partners building student, university, history, Buddhism, martial arts, or civilization programs.",
      "High-speed rail can make the region efficient, but station transfers and luggage handling need practical planning.",
      "Luxury FIT demand is more selective here; the region is stronger for meaning, learning, and route depth."
    ],
    routeIdeas: [
      { title: "Henan Civilization Route", path: "Zhengzhou -> Luoyang -> Longmen -> Shaolin", description: "A compact culture route for students, academics, and travelers interested in Chinese civilization and Buddhism." },
      { title: "Xi'an and Henan Ancient Capitals", path: "Xi'an -> Luoyang -> Kaifeng -> Beijing", description: "A deeper alternative to the classic route, linking ancient capitals and heritage sites by rail." },
      { title: "Hunan Culture and Scenery", path: "Changsha -> Zhangjiajie -> Fenghuang", description: "A strong visual and cultural route combining food, mountains, riverside towns, and minority atmosphere." },
      { title: "Central China Rail Add-On", path: "Shanghai -> Wuhan -> Changsha -> Guilin", description: "A practical overland or rail-linked route for partners building longer China journeys." },
    ],
    operatingNotes: [
      "Central China needs strong guide interpretation because many sites are important but less internationally familiar.",
      "Summer heat and humidity can affect walking comfort in Wuhan, Changsha, and Henan.",
      "Shaolin should be positioned honestly; performance and temple experience may differ from romanticized kung fu expectations.",
      "Rail timing should be planned around station distance, luggage, and group size.",
      "Fenghuang is atmospheric at night but can be crowded; hotel location and access need careful selection."
    ],
    seoKeywords: ["Central China DMC", "Henan cultural tours", "Luoyang Longmen Grottoes travel", "Shaolin Temple group tours", "Wuhan travel programs", "Changsha Fenghuang Zhangjiajie route"],
  },
  {
    id: "western-china",
    name: "Western China Coverage",
    eyebrow: "Tibet, Qinghai, western Sichuan, highland Yunnan",
    headline: "Western China programs for highland culture, Himalayan landscapes, sacred sites, and permit-aware routing.",
    summary: "Western China is for experienced travelers, serious photographers, spiritual culture programs, and partners who need a DMC that understands pacing, altitude, permits, road conditions, and expectation management. It includes Tibet, Qinghai, western Sichuan, and highland Yunnan routes that feel very different from coastal or classic China.",
    bestFor: ["Experienced travelers", "Photography", "Spiritual culture", "Highland landscapes", "Premium specialist groups"],
    season: "April-June and September-October are often strongest, but Tibet, Qinghai, and highland routes require route-by-route checks.",
    operatingStyle: "High reward and high responsibility: altitude, permits, road time, weather, hotel standards, and guest health must be planned carefully.",
    heroImage: "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-potala-palace.jpg",
    gallery: [
      { src: "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-potala-palace.jpg", alt: "Potala Palace Lhasa Tibet", caption: "Lhasa is the cultural and symbolic center of most Tibet programs." },
      { src: "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-jokhang.jpg", alt: "Jokhang Temple Lhasa", caption: "Jokhang and Barkhor introduce living Tibetan Buddhist practice." },
      { src: "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-nyingchi.jpg", alt: "Nyingchi Tibet landscape", caption: "Nyingchi can provide a greener and softer Tibet landscape experience." },
      { src: "/programs/tibet-lhasa-nyingchi-8-day/china-prime-dmc-tibet-lhasa-nyingchi-8-day-yarlung-tsangpo-grand-canyon.jpg", alt: "Yarlung Tsangpo Grand Canyon", caption: "Western routes need careful weather and road planning but can deliver extraordinary scenery." },
      { src: "/programs/sichuan-tibetan-nature-10-day/china-prime-dmc-sichuan-tibetan-nature-10-day-mount-siguniang.jpg", alt: "Mount Siguniang western Sichuan", caption: "Western Sichuan gives highland scenery with a different operating profile from Tibet." },
      { src: "/programs/shangri-la-meili-snow-mountain-8-day/china-prime-dmc-shangri-la-meili-snow-mountain-8-day-meili-snow-mountains.jpg", alt: "Meili Snow Mountain Yunnan", caption: "Highland Yunnan brings Tibetan-influenced culture and dramatic mountain views." },
    ],
    overview: [
      "Western China is not a casual add-on. It is a specialist operating region where the rewards are extraordinary but the planning must be serious. Tibet, Qinghai, western Sichuan, and highland Yunnan offer sacred sites, monastery culture, plateau landscapes, prayer flags, high passes, river valleys, Himalayan views, Tibetan-influenced towns, and some of the most powerful scenery in China. These routes appeal to experienced travelers, photographers, spiritual culture groups, and premium clients who want a journey that feels far from the standard city circuit.",
      "Foreign travelers need a clear explanation before they buy. Tibet is not only Potala Palace; it is a living religious and cultural landscape with pilgrimage streets, monasteries, high altitude, permit requirements, and careful pacing. Qinghai is not only a lake destination; it is a plateau region with Tibetan and Muslim cultural layers, monasteries, grasslands, and access toward the wider west. Western Sichuan is not only scenery; it is a bridge between Chengdu and Tibetan-influenced highlands, with mountain towns, valleys, monasteries, and road journeys. Highland Yunnan connects Dali, Lijiang, Shangri-La, Tiger Leaping Gorge, and Meili Snow Mountain into a softer but still dramatic highland route.",
      "For B2B partners, Western China requires honest selling. Altitude matters. Hotels can vary. Road time can be long. Weather can change plans. Some sites require permits or local approval. Guests need to understand that a highland journey is not the same as a Shanghai-Hangzhou extension. At the same time, this honesty makes the product stronger. Well-prepared travelers appreciate the difference and are more likely to value the experience.",
      "Western China can be built in different ways. A softer Tibet route might combine Lhasa with Nyingchi to reduce the sense of harsh plateau exposure. A serious Tibet route might continue toward Shigatse or Everest region when suitable. A western Sichuan route might use Chengdu, Dujiangyan, Mount Siguniang, Jiuzhaigou, and Tibetan-influenced villages. A highland Yunnan route might use Dali, Lijiang, Shangri-La, Songzanlin Monastery, Tiger Leaping Gorge, and Meili Snow Mountain. The right choice depends on client profile, health, season, budget, and appetite for road travel."
    ],
    cities: [
      { name: "Lhasa", signature: "Potala Palace, Jokhang Temple, Barkhor pilgrimage streets, and Tibetan Buddhist culture.", description: "Lhasa is the center of most Tibet programs and must be paced carefully. Foreign travelers usually recognize the Potala Palace, but they need help understanding Jokhang Temple, Barkhor pilgrimage, monastery etiquette, altitude, and the daily rhythm of religious life. Lhasa works for serious culture travelers, photographers, and spiritual-interest groups.", highlights: ["Potala Palace", "Jokhang Temple", "Barkhor circuit", "Sera or Drepung monastery options", "Careful acclimatization pacing"] },
      { name: "Nyingchi", signature: "Greener Tibet landscapes, river valleys, forests, and softer acclimatization.", description: "Nyingchi is useful for partners who want Tibet scenery with a gentler feel than high, dry plateau routes. Forests, river valleys, spring blossoms, and canyon landscapes can make the region more approachable. It can help create a softer Tibet program for guests concerned about altitude or harsh conditions.", highlights: ["Yarlung Tsangpo region", "Greener valleys", "Seasonal blossoms", "River landscapes", "Softer Tibet routing"] },
      { name: "Shigatse and Everest routes", signature: "Monasteries, high passes, Himalayan views, and serious overland travel.", description: "Shigatse and Everest-region programs are for experienced travelers who understand road time, altitude, and weather risk. When conditions are right, the route can be one of the most powerful journeys in China. It should be sold with honest expectations and careful permit planning.", highlights: ["Tashilhunpo Monastery", "Highland road scenery", "Himalayan viewpoints", "Everest-region extensions", "Specialist photography value"] },
      { name: "Qinghai", signature: "Plateau lakes, monasteries, grasslands, Muslim and Tibetan cultural layers.", description: "Qinghai can add a different western China story through Xining, Qinghai Lake, Tibetan monasteries, grasslands, and links toward Gansu or Tibet. It works for travelers interested in culture, landscape, and overland journeys, but it requires realistic pacing and seasonal planning.", highlights: ["Qinghai Lake", "Xining access", "Monastery culture", "Plateau grasslands", "Gansu or Tibet route links"] },
      { name: "Western Sichuan", signature: "Mountains, Tibetan-influenced towns, Jiuzhaigou, Mount Siguniang, and road scenery.", description: "Western Sichuan is a powerful highland alternative or complement to Tibet. Starting from Chengdu, routes can include Dujiangyan, Mount Siguniang, Jiuzhaigou, Huanglong, Kangding, or Tibetan-influenced villages. It offers dramatic scenery, but road time and weather must be managed carefully.", highlights: ["Mount Siguniang", "Jiuzhaigou and Huanglong", "Tibetan-influenced villages", "Chengdu gateway", "Photography and nature routes"] },
      { name: "Highland Yunnan", signature: "Dali, Lijiang, Shangri-La, Tiger Leaping Gorge, and Meili Snow Mountain.", description: "Highland Yunnan gives partners a softer highland product than Tibet while still offering Tibetan-influenced culture and dramatic mountains. It is excellent for premium FITs, soft adventure, photography, and travelers who want ancient towns plus alpine scenery.", highlights: ["Shangri-La", "Songzanlin Monastery", "Tiger Leaping Gorge", "Meili Snow Mountain", "Dali and Lijiang culture"] },
    ],
    buyerContext: [
      "Western China should be positioned for experienced travelers, not mass-market clients who expect easy city touring.",
      "Altitude and health notes should be included before quotation so partners do not oversell the route to unsuitable guests.",
      "Photography and spiritual culture groups can be strong fits, but they need flexible timing and guide sensitivity.",
      "Hotel and vehicle standards outside major towns should be explained clearly; overpromising luxury in remote areas creates risk."
    ],
    routeIdeas: [
      { title: "Softer Tibet Introduction", path: "Lhasa -> Nyingchi -> Lhasa", description: "A more approachable Tibet route balancing sacred sites with greener landscapes and careful acclimatization." },
      { title: "Classic Tibet Overland", path: "Lhasa -> Shigatse -> Everest region", description: "A specialist highland route for experienced travelers, photographers, and clients comfortable with altitude and road time." },
      { title: "Western Sichuan Nature", path: "Chengdu -> Mount Siguniang -> Jiuzhaigou -> Huanglong", description: "A mountain-and-lake route that uses Chengdu as a practical gateway." },
      { title: "Highland Yunnan", path: "Dali -> Lijiang -> Shangri-La -> Meili Snow Mountain", description: "A culture-and-scenery route with Tibetan-influenced texture but softer operations than deep Tibet." },
    ],
    operatingNotes: [
      "Permits, current local rules, and route feasibility must be checked before any Tibet or sensitive highland program is confirmed.",
      "Altitude pacing is not optional; arrival days should be light and long drives should be planned with comfort stops.",
      "Weather can change mountain visibility and road conditions, so photography promises must be framed carefully.",
      "Meal and hotel standards vary outside major towns and should be communicated to partners before sale.",
      "Western China routes need guides who can explain culture respectfully and manage guest behavior around religious sites."
    ],
    seoKeywords: ["Western China DMC", "Tibet private tours", "Qinghai travel programs", "western Sichuan photography tours", "highland Yunnan tours", "permit aware China travel"],
  },
];

export function findCoverageRegion(id?: string) {
  return coverageRegions.find((region) => region.id === id);
}
