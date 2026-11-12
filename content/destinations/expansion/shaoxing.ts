import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/shaoxing.svg",
  alt: "Shaoxing planning schematic separating Yuecheng's literary and canal walks, a yellow rice wine interest and a separate Anchang or landscape outing; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const shaoxingGuide: ExpandedDestination = {
  id: "shaoxing",
  name: "Shaoxing",
  region: "east",
  kicker: "Canals, writers and a food culture worth understanding",
  description:
    "Plan Shaoxing around its canal neighborhoods, Lu Xun's literary setting and yellow rice wine, with old-city stays and separate Anchang, East Lake or Lanting visits clearly compared.",
  stay: "A focused day trip or 2–3 nights",
  bestFor: "Literature, canal walks and regional food culture",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["ningbo", "linhai", "hangzhou", "suzhou", "lishui"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Shaoxing Travel Guide: Canals, Rice Wine & Where to Stay",
    seoTitle: "Shaoxing Travel Guide: Canals, Food & Stays",
    seoDescription:
      "Choose a Shaoxing day trip or 2–3-night stay: Lu Xun, canal walks, yellow rice wine, Anchang, old-city hotels and the right railway station.",
    answer:
      "Shaoxing (绍兴) is a city in Zhejiang whose strongest introduction combines Yuecheng's canal neighborhoods, literary places and distinctive food and yellow rice wine culture. The historic core is only part of the wider municipality: Anchang in Keqiao, Lanting and Shaoxing's East Lake need separate route decisions. Come for the connections between streets, writing and everyday life rather than expecting one enclosed ancient town. A focused day from Hangzhou can work; staying overnight gives the city its own evenings and time for a deeper subject.",
    stayAnswer:
      "A day trip can cover a selected literary-and-canal introduction with a proper meal when the complete return journey fits. Two nights give one full day and an unhurried evening. Three nights allow a separate Anchang, East Lake, Lanting or well-arranged food-and-wine chapter. Choose one of those additions for its actual interest rather than adding every water-town and garden name. A late arrival followed by an early departure should not be counted as two touring days.",
    hotelAnswer:
      "Choose a Yuecheng old-city or edge-of-core hotel for the literary and canal walks, checking the room, noise and final luggage approach. A modern Yuecheng hotel may offer easier vehicle access and more predictable room facilities. Keqiao or Shangyu can be right for a specific purpose, but are not interchangeable old-city bases. A courtyard photograph does not establish a quiet room, step-free access or nearby dinner. Map the exact property against the places you actually intend to visit before choosing by a Shaoxing address.",
    sightseeingQuestion: "Should you choose Lu Xun's neighborhood, Anchang, East Lake or Lanting?",
    sightseeingAnswer:
      "Choose Lu Xun's neighborhood and a selected canal walk for a first city introduction, allowing context rather than only queues for famous house entrances. Choose Anchang for a separate canal-town outing with its food and commercial life honestly described. East Lake offers a different landscape-and-boat subject; Lanting is most rewarding with an interest in calligraphy and its literary associations. None is a compulsory addition. Select the second subject by curiosity, walking comfort and the actual journey, not by how many famous names fit a list.",
    visitorResources: [
      {
        label: "Shaoxing municipal government",
        href: "https://www.sx.gov.cn/",
        scope:
          "Municipal context and public notices, mainly in Chinese. Confirm individual heritage reservations, exhibitions, boats, museum access and local arrangements through the responsible institution or operator. A city reference does not prove a producer appointment, a tasting host or a particular boat's suitability.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Shaoxing, Shaoxing North and Shaoxing East are different stations serving different local transfers. Use the exact dated service, hotel and intended visits; do not assume a station containing the city name is beside Yuecheng's historic core.",
      },
    ],
    serviceScope:
      "A tailored proposal can name the hotel and room, station transfers, selected literary and canal route, admissions, guide language and meal basis. A yellow rice wine museum, producer visit, shop tasting and private hosted session have different access and inclusions. Specify the actual arrangement and provide a worthwhile non-drinking alternative. Boat operations, boarding suitability and specialist hosts need separate confirmation. A private vehicle does not enter every old lane or grant access to homes, production spaces or cultural institutions beyond the agreed visit.",
    routeAdvice:
      "Shaoxing can complement Hangzhou through a focused return visit or a separate two- or three-night stay. Suzhou offers a useful contrast in classical garden design and canal urbanism; Lishui introduces a different southern Zhejiang countryside route. No matching published Shaoxing product is recommended here. Use the illustrative two-night outline to request a visit built around a clear literary, food or landscape interest. A useful proposal should explain why the selected visits belong together and show the entire hotel-to-hotel connection.",
    practicalPlanning: {
      timing:
        "Keep the main old-city day geographically coherent, with reservations checked before fixing the sequence. A famous house, a canal walk and a good meal can be more satisfying than several rushed entrances. Leave time for explanation and sitting down. Place Anchang, a substantive wine visit or a landscape outing in its own usable window, and avoid making the final train depend on an unconfirmed boat or producer appointment.",
      walking:
        "Canal edges, narrow lanes, stone bridges and historic buildings can involve steps, thresholds and uneven or slippery surfaces. A short distance on a map does not show bridge climbs or queues. For a wupeng boat, assess stepping down, low seating, balance and the actual boarding point; the traditional format may not suit everyone. A seated canal-side pause can be a worthwhile alternative. Review hotel access and toilets as well as the sightseeing route.",
      cost: "Compare the actual room, full station transfers, guide language, admissions and meal inclusions. A public museum, producer appointment, retail tasting and specialist session are different services. Ask what the wine tasting includes, whether purchases are optional and how bottles are priced or shipped. Boat routes and charges require the named operator's terms. A higher price should improve interpretation, comfort or a real arrangement rather than promise exclusive access on the strength of the city's reputation.",
    },
    attractions: [
      "Lu Xun's Native Place area with a selected literary and historical route",
      "Shen Garden / Shenyuan, interpreted through its literary associations",
      "A selected old-city canal neighborhood, such as Cangqiao Straight Street",
      "Anchang Ancient Town in Keqiao as a separate outing",
      "Shaoxing East Lake / Donghu, with its actual walking and boat arrangements",
      "Lanting / Orchid Pavilion for a calligraphy-led interest",
      "A defined yellow rice wine collection, producer or tasting subject with access confirmed",
    ],
    stays: [
      {
        label: "Day trip: one coherent introduction",
        advice:
          "Choose a literary area, a manageable canal walk and a meal, allowing the full return journey from Hangzhou or another base. Do not promise a comprehensive old-city visit, Anchang and a substantive wine appointment in the same short outing. Pick the strongest subject and give it enough time.",
      },
      {
        label: "2 nights: literature, canals and an easier evening",
        advice:
          "One full day supports a thoughtful introduction with time for explanation, food and a quieter pace. Arrival or departure may allow another small interest when timing works. An old-city evening adds value only if the actual hotel, dinner and room suit the group.",
      },
      {
        label: "3 nights: add a distinct second subject",
        advice:
          "Choose Anchang, East Lake, Lanting or a confirmed food-and-wine program for the second full day. Select by interest rather than assuming every option is equally useful. Keep the same base when it serves the complete route instead of moving hotels to collect another canal view.",
      },
    ],
    hotelAreas: [
      {
        name: "Yuecheng historic core / walk-led stay",
        advice:
          "Useful for selected literary places, canal streets and evening dining. Check the exact walking route, stairs, room noise, climate control and vehicle meeting point. Some lanes require a final luggage approach on foot. A historic setting and modern bathroom comfort are separate features to confirm.",
      },
      {
        name: "Modern Yuecheng / comfort and vehicle access",
        advice:
          "Consider a named city property when room facilities, breakfast and straightforward pickup matter most. Compare the actual drive to the heritage area and whether independent dinner is convenient. A modern hotel can support a culturally rich visit without pretending to be an old courtyard house.",
      },
      {
        name: "Keqiao or another district / purpose-specific base",
        advice:
          "Choose when Anchang, a particular property or another district's interest is the main reason for staying. Keqiao, Shangyu and the old-city core are not equivalent hotel neighborhoods. Establish the full road pattern before accepting a seemingly convenient Shaoxing address, especially if most planned visits are in Yuecheng.",
      },
    ],
    tradeoffs: [
      {
        title: "Literary context matters more than collecting famous residences",
        advice:
          "Lu Xun's neighborhood is more meaningful when a guide connects selected places with his writing and the society he described. Shen Garden has different literary associations, notably with Lu You and Tang Wan; it is not another Lu Xun site. A few well-explained places can be enough. Do not describe every building, garden layout or display as unchanged from the writer's lifetime, and check which interiors are currently accessible.",
      },
      {
        title: "Shaoxing is a city, not a single water-town attraction",
        advice:
          "Yuecheng's old neighborhoods are part of a living urban area. Anchang is a separate town with residents, trade and visitor-facing commerce, not an untouched extension of one old-city lane. A canal boat does not connect every heritage stop. Choose a manageable public route, respect private doorways and let the everyday setting be part of the experience rather than promising an empty ancient town.",
      },
      {
        title: "Yellow rice wine is a cultural subject even if you do not drink",
        advice:
          "Huangjiu is fermented rather than distilled, and should not be confused with baijiu or with a bottle sold primarily for cooking. A good visit can explain ingredients, fermentation, vessels and table use without requiring a tasting. Labels such as huadiao are not a simple age certificate or an ascending quality score. Ask what a particular bottle actually is, its sweetness, alcohol content and provenance, with purchases entirely optional.",
      },
      {
        title: "A wupeng boat is a particular ride, not automatic accessible transport",
        advice:
          "Shaoxing's recognizable black-awning boat can offer a different view of a selected waterway when operating. Low seating, stepping down and balance can make the format unsuitable for some travelers. Confirm the actual boat, boarding point, route, seating and current conditions. Do not assume it is a private cruise, a transport link to Anchang or a substitute for walking every part of the heritage area.",
      },
      {
        title: "East Lake and Lanting answer different questions",
        advice:
          "Shaoxing's East Lake is a landscape visit with its own shore and boat choices; it is not Wuhan's much larger lake of the same English name. Lanting is associated with Wang Xizhi and calligraphy, with a present-day commemorative setting rather than a promise of an intact original gathering site. Choose one for its actual subject. A landscape photograph and a literary name do not establish that both belong in an already full city day.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "ningbo",
        advice:
          "Ningbo provides a complementary Zhejiang chapter through Tianyi Ge, museum architecture and maritime history. Give the cities different questions rather than repeat a generic historic-street walk. Include the complete hotel-to-hotel journey and useful local time; a Ningbo lake property or temple excursion needs its own plan.",
      },
      {
        slug: "linhai",
        advice:
          "Linhai adds a contrasting wall-and-street chapter in Zhejiang's Taizhou region. Choose a wall section around the guest's stamina, then give Ziyang Street and a proper local meal their own time. Compare complete rail and station transfers, and avoid using a short overnight to compress both cities into generic old-town walks.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake, temples and Longjing tea, a different landscape and cultural rhythm from Shaoxing's canals and literary neighborhoods. Compare a return visit with separate nights using the exact stations and hotel transfers. A nearby regional location does not remove the final journey to Yuecheng or Anchang.",
      },
      {
        slug: "suzhou",
        advice:
          "Suzhou offers classical garden design and its own canal neighborhoods. Choose the distinct purpose in each city so the route deepens an interest rather than repeats similar-looking streets. Give the gardens and Shaoxing's literature or food their own usable time, with full transport allowed.",
      },
      {
        slug: "lishui",
        advice:
          "Lishui provides a framework for southern Zhejiang's different village, terrace and craft routes. Select the actual county and base rather than assuming the regional name covers one countryside stop. The onward journey should lead to a specific interest, not another generic water-town walk.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for city walks, allowing for rain, changing temperatures and busy holiday periods. Summer heat and humidity call for shorter exposed sections and a seated midday break. Winter can be damp and cold, making the actual room's heating important. Seasonal food displays and wine-production activity require their own dates and access. No season guarantees quiet lanes, a particular cellar visit or a boat departure.",
    orientation:
      "Yuecheng contains the main old-city introduction, while Anchang lies in Keqiao and Shangyu creates another district-level geography. Shaoxing North, Shaoxing station and Shaoxing East are different arrival choices. Use the full Chinese hotel and venue addresses, not just the shared city name. Lu Xun's literary sites, Shen Garden, East Lake and Lanting are distinct places with different subjects; a city visit should not imply they are one enclosed attraction.",
    experiences: [
      "Connect a selected Lu Xun literary route with the canal streets and daily life around it",
      "Understand yellow rice wine through a defined collection, host or meal without making drinking compulsory",
      "Choose a separate Anchang, East Lake or Lanting outing for a genuinely different second day",
    ],
    planningNotes: [
      "Choose Yuecheng or another district by the actual visits and full station transfers",
      "Confirm individual heritage access and the suitability of any black-awning boat ride",
      "Keep alcohol optional and clarify fermentation, allergens, portions and purchasing terms",
    ],
    arrival:
      "Book the actual service and station shown on the ticket, then allow the complete hotel transfer. Shaoxing North is not the same pickup as Shaoxing station, and Shaoxing East serves another part of the municipality. Hangzhou Xiaoshan Airport, code HGH, requires its own onward plan including luggage and any station connection. Keep essential reservations away from uncertain arrival timing, and send the Chinese property address before arranging the meeting point.",
    gettingAround:
      "Use walking for a selected old-city section and planned transfers for separate sites or districts. Pedestrian lanes can require pickup somewhere other than the attraction entrance. Metro or other local transport may suit independent time, but still involves walking and the final approach. A canal boat has its own route and boarding, not a general transfer function. Agree a seated break and an easier alternative rather than filling the day with repeated bridge climbs.",
    stayStrategy:
      "Choose one base for two or three nights when it supports the route. For a small historic property, review stairs, bathroom, noise and luggage access; for a modern hotel, check the drive and evening dining. A premium stay should offer a better room, thoughtful pace or stronger interpretation rather than a vague ancient-city atmosphere. If adding a second district, compare the whole road day before assuming a hotel move is necessary.",
    firstTimerNote:
      "A few stories make Shaoxing more rewarding than a long list of entrances. Begin with a writer, a canal neighborhood or a food tradition, then choose places that illuminate it. You do not need to read Chinese literature beforehand or drink rice wine to take part. Ask for clear English interpretation and an enjoyable meal, with enough time to understand what you are looking at.",
    faqs: [
      {
        question: "Is Shaoxing worth a day trip from Hangzhou?",
        answer:
          "Yes, for a focused literary-and-canal introduction when the complete return journey fits. Choose a selected old-city route and a meal rather than promising every district. Staying overnight is useful for an easier evening or a separate Anchang, landscape or food-and-wine subject.",
      },
      {
        question: "How many nights should I spend in Shaoxing?",
        answer:
          "Two nights give one full day and an unhurried evening. Three nights allow a distinct second subject such as Anchang, East Lake, Lanting or a confirmed wine program. A day trip is another valid format. Arrival and departure hours determine how much time is actually usable.",
      },
      {
        question: "Where should I stay for Shaoxing's old city?",
        answer:
          "Compare a Yuecheng heritage-area property with a modern Yuecheng hotel by the room, noise, luggage access and actual route. Keqiao or Shangyu can suit a specific purpose but are not equivalent old-city bases. Use the exact address rather than a general Shaoxing label.",
      },
      {
        question: "Is Anchang part of a walk around central Shaoxing?",
        answer:
          "No. Anchang is a separate canal-town outing in Keqiao. It needs its own transfer, useful time and meal plan. Its residential and commercial setting should be described honestly, rather than as an untouched continuation of Yuecheng's old-city lanes.",
      },
      {
        question: "Is Shaoxing wine the same as baijiu or cooking wine?",
        answer:
          "Shaoxing's huangjiu is a fermented yellow rice wine, distinct from distilled baijiu. Bottles intended for drinking and products sold mainly for cooking should not be treated as interchangeable. Ask about the actual bottle, ingredients, sweetness and alcohol content; a cultural visit need not include drinking.",
      },
      {
        question: "Can I enjoy Shaoxing if I do not drink alcohol?",
        answer:
          "Yes. Literature, canals, food and the history of fermentation can support a worthwhile visit without tasting. Specify a non-drinking program and suitable meal. Cooking with wine and fermented sauces also requires clarification if you avoid alcohol entirely; do not assume preparation removes every concern.",
      },
      {
        question: "Are Shaoxing's black-awning boats suitable for everyone?",
        answer:
          "No. The actual boat may involve stepping down, low seating and balance. Confirm boarding, route and seating against your needs before booking. A canal-side walk or seated break can provide an alternative, and the boat should not be assumed to replace road transfers between districts.",
      },
      {
        question: "Should I arrive at Shaoxing, Shaoxing North or Shaoxing East?",
        answer:
          "Choose by the dated train, actual hotel and first visit. They are different stations with different local transfers. Include luggage and the final road journey when comparing services rather than choosing the shortest rail segment or assuming every Shaoxing station serves the historic core equally well.",
      },
      {
        question: "Is Shen Garden another Lu Xun attraction?",
        answer:
          "No. Its well-known literary associations include Lu You and Tang Wan, a different subject from Lu Xun's neighborhood. Choose the interpretation that interests you and confirm current access. Similar-sounding literary names should not be combined into a single biography or historic residence.",
      },
    ],
    culturalStory: {
      title: "Let the writing change how you read the street",
      paragraphs: [
        "Shaoxing's literary interest becomes richer when the city is more than a backdrop for famous names. A selected passage, a house's social setting or the movement between lane and canal can open questions about education, trade and everyday life. Good interpretation distinguishes Lu Xun's modern literary world from the much earlier associations of Lu You, Tang Wan and Wang Xizhi. The names belong to different histories, not one generalized ancient cultural period.",
        "The streets also continue to be places where people live and work. A thoughtful route can notice that present-day life without staging it as a performance or entering private thresholds. Restored buildings, public collections and contemporary commercial lanes offer different kinds of evidence. State what a place is today, explain the associations that make it interesting and leave enough room for visitors to ask questions rather than collect residence photographs.",
      ],
    },
    foodStory: {
      title: "Fermentation deserves explanation, not a test of adventurousness",
      paragraphs: [
        "Shaoxing's food culture includes preserved vegetables, fermented flavors and the use of yellow rice wine. Meigan cai, preserved mustard greens, can provide a useful introduction through a cooked dish whose ingredients are clearly explained. A wine-infused or drunken preparation needs its own account of cooking and alcohol; the name alone does not tell you whether seafood is fully cooked. Offer comfortable alternatives instead of treating every pungent or unusual dish as compulsory.",
        "Clarify wheat or other grains in wine production, soy in sauces, fish or meat stocks and shared kitchen preparation when dietary needs matter. A dish of vegetables may include pork or a meat-based seasoning. For a tasting, specify serving size, food, drinking and non-drinking options, with no pressure to buy bottles. A well-planned meal can reveal the region's character while respecting appetite, alcohol choices and the pace of the day.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into Yuecheng or the chosen district",
        description:
          "Transfer from the exact station to the booked room and keep the first meal easy. Add a short nearby canal walk only if timing allows. Leave the essential literary or producer appointment for a dependable window rather than attaching it to a potentially delayed connection.",
      },
      {
        day: "Full day",
        title: "Literature, canals and a proper meal",
        description:
          "Use a selected Lu Xun route and a manageable canal neighborhood with clear English interpretation. Add a seated regional meal and another nearby subject only when it deepens the day. A suitable black-awning boat is optional and subject to its actual route and current operation.",
      },
      {
        day: "Optional second full day",
        title: "Choose a distinct landscape, town or food subject",
        description:
          "Use a third night for Anchang, East Lake, Lanting or a confirmed yellow rice wine program. Review the full transfer and walking before combining interests. A non-drinking cultural route should have its own substance rather than simply omit a tasting from an otherwise empty afternoon.",
      },
      {
        day: "Departure",
        title: "Continue with the whole connection allowed",
        description:
          "Leave time for the correct railway station or a separately planned Hangzhou or southern Zhejiang chapter. This two-night framework with an optional third night is illustrative, not a published product or guarantee of a particular boat, producer or private literary-site access.",
      },
    ],
  },
};
