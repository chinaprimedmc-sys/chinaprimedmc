import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/ningbo.svg",
  alt: "Original Ningbo planning schematic comparing Tianyi Ge and city culture, museum architecture and a separate Dongqian Lake stay; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const ningboGuide: ExpandedDestination = {
  id: "ningbo",
  name: "Ningbo",
  region: "east",
  kicker: "Books, maritime exchange and architecture with a sense of place",
  description:
    "Discover Ningbo through Tianyi Ge's library culture, museum architecture and regional food, with clear choices on city hotels, temples and Dongqian Lake.",
  stay: "2–3 nights for city culture; add useful time for a lake stay",
  bestFor: "Architecture, book culture, maritime history and a slower Zhejiang route",
  interests: ["heritage", "city", "food"],
  relatedDestinationIds: ["wenzhou", "shengsi", "hangzhou", "shaoxing", "shanghai", "linhai"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Ningbo Travel Guide: Architecture, Culture & Hotels",
    seoTitle: "Ningbo Guide: Architecture, Culture & Hotels",
    seoDescription:
      "Plan Ningbo with Tianyi Ge, museum architecture and regional food. Compare city hotels with Dongqian Lake, two or three nights and Zhejiang connections.",
    answer:
      "Ningbo (宁波), written Ningpo in older English sources, is a port city in eastern Zhejiang, south of Hangzhou Bay. For a cultural visit, its strongest combination is Tianyi Ge's book-collecting tradition, Ningbo Museum's contemporary architecture, maritime history and a distinctive local table. Two nights give one selected city day; three allow two different cultural days. Dongqian Lake is a separate inland-lake base, not a sea-beach resort beside every city hotel. Choose Ningbo for these specific subjects rather than as a generic coastal stop or a substitute for Hangzhou's West Lake.",
    stayAnswer:
      "Allow two nights for one focused full day, usually choosing Tianyi Ge and a complementary city subject with a good meal. Three nights can add a substantive Ningbo Museum visit or a separately planned temple interest without squeezing everything between transfers. A Dongqian Lake stay needs enough usable time at the property and surrounding landscape to justify its location. One night is selective; more nights make sense for defined architectural, religious or regional interests rather than an assumption that every coastal attraction is nearby.",
    hotelAnswer:
      "Compare a central Haishu or Sanjiangkou-area hotel for Tianyi Ge, city meals and an evening river setting with a specific Yinzhou property when the museum or room facilities justify the address. Dongqian Lake suits a deliberate lakeside stay, with the exact shore, room and city transfers checked. These are different bases. For a premium brief, compare quiet, bed, bathroom, temperature control, breakfast, dinner and pickup. A river- or lake-view label describes a room only when that category is actually booked; it does not establish private shore access or resort services.",
    sightseeingQuestion: "Should I prioritize Tianyi Ge, Ningbo Museum, temples or Dongqian Lake?",
    sightseeingAnswer:
      "Choose Tianyi Ge for the history of collecting and preserving books in a historic architectural setting. Choose Ningbo Museum in Yinzhou for a combination of regional collections and the building designed by Wang Shu and Lu Wenyu's Amateur Architecture Studio; allow time to understand both. Tiantong Temple and the Temple of King Ashoka are separate outlying religious visits, with different routes and an active worship context. Dongqian Lake is a landscape and accommodation decision. A focused city stay does not need to include every temple and a lake circuit to feel complete.",
    visitorResources: [
      {
        label: "Ningbo municipal government",
        href: "https://www.ningbo.gov.cn/",
        scope:
          "Official city context and dated notices, primarily in Chinese. Check individual institutions, religious sites, properties and transport providers for current arrangements. A city description does not establish access to book stores, museum research areas, operating port facilities or private religious spaces.",
      },
      {
        label: "The Pritzker Architecture Prize: Wang Shu",
        href: "https://www.pritzkerprize.com/laureates/2012",
        scope:
          "Architectural background on Wang Shu and the work associated with his practice. An architectural profile is not museum visitor information or a promise of an architect-led visit. Current exhibitions, open building areas and any specialist interpretation need separate confirmation.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains and precise station names. Use Ningbo / 宁波 and the actual origin, then include the final journey to the hotel, museum or lake property. Wider municipal station names do not make every destination a short city transfer.",
      },
    ],
    serviceScope:
      "A proposal should name the hotel and room, arrival gateway, complete transfers, public library-museum route, selected galleries or temples, guide language, admissions and meals. Define whether architectural interpretation comes from a suitably prepared guide or a separately available specialist. Rare-book handling, stored collections, architect meetings, working port visits, private worship spaces and hosted meals need their own permission and arrangements where available. Agree a useful alternative if a core interior is unavailable, and distinguish a lake hotel stay from a promised boat or activity program.",
    routeAdvice:
      "Ningbo can add a material, maritime and architectural chapter after Hangzhou or Shaoxing, with Shanghai as another gateway when the actual connection fits. Linhai offers a different historic-town and city-wall subject farther south and needs its own nights and journey. Putuoshan belongs to a separate Zhoushan island and ferry plan, not an included Ningbo neighborhood outing. No matching published Ningbo tour is recommended here. Share dates, gateways, architectural and cultural interests, walking needs and room priorities for a route with clear inclusions.",
    practicalPlanning: {
      timing:
        "Place the institution that matters most in a reliable opening-hours window. Tianyi Ge rewards a thoughtful public route; Ningbo Museum deserves time for the building and selected collections rather than a brief facade stop. Keep meals and rest between subjects instead of crossing the city repeatedly. An outlying temple day or lake move needs its own complete journey. Check closures and current exhibitions before booking a specialist-led day around one interior.",
      walking:
        "Tianyi Ge's public grounds may involve thresholds, garden paving, steps and standing. A museum visit has its own internal distances and currently available lifts or accessible routes. Temple grounds can add long approaches and stairs, while lakeside paths vary by exact location. Agree the vehicle drop-off, toilets, seating and a shorter meaningful route. A privately arranged car does not make historic compounds, upper levels or every shore path step-free.",
      cost: "Compare the exact room, breakfast, complete station or airport transfers, guide language and subject preparation, named admissions and meals. A lake property can add road time to city cultural visits; a temple excursion has a different vehicle scope from a central day. A premium should buy comfortable timing, sound interpretation and reliable facilities rather than unverified rare-book access, architect encounters, private temple ceremonies or a working-port tour.",
    },
    attractions: [
      "Tianyi Ge / Tianyi Pavilion Museum through the currently open public route",
      "Ningbo Museum / Ningbo History Museum in Yinzhou, for architecture and selected collections",
      "A selected Sanjiangkou river-confluence walk and city-history introduction",
      "Laowaitan / the Old Bund, with its port-city layers and contemporary evening character explained",
      "Tiantong Temple as a separate religious and landscape visit",
      "Temple of King Ashoka / Ayuwang Temple as a distinct outlying choice",
      "Dongqian Lake through a named property or public shore route",
      "A regional meal with clear seafood, preserved-food and dietary choices",
    ],
    stays: [
      {
        label: "1 night / one selective subject",
        advice:
          "Useful when transport leaves enough time for a meaningful Tianyi Ge or museum visit and a meal. Protect the essential public route from uncertain arrival hours. A late room arrival followed by an early departure is a transport stop, not a complete cultural stay.",
      },
      {
        label: "2 nights / a focused city chapter",
        advice:
          "Give one principal institution and a complementary city walk a full day, with time to understand the subject and enjoy lunch. Add a modest arrival or departure interest only if the real hours work. Do not promise a lake resort stay and several outlying temples within the same city day.",
      },
      {
        label: "3 nights / two different cultural days",
        advice:
          "Separate the library and central-city story from a substantial museum visit or selected temple excursion. Choose a comfortable city base to avoid unnecessary packing. If moving to Dongqian Lake, account for the lost sightseeing time and protect useful hours at the property.",
      },
      {
        label: "A longer lake-led stay / make the setting worthwhile",
        advice:
          "Add time for an assessed Dongqian Lake property when rest, a particular room or an actual local activity is part of the brief. Check meals, shore access, indoor alternatives and season. Extra resort nights should deliver a real benefit rather than become a distant base for daily city transfers.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Haishu / a practical cultural base",
        advice:
          "Map the actual room against Tianyi Ge, meals and the ticketed arrival. A central label does not make every cultural site walkable. Compare quiet, bathroom, bedding, temperature control, lift and pickup; historic styling is secondary to a room that works well.",
      },
      {
        name: "Sanjiangkou and selected riverside addresses / an evening setting",
        advice:
          "Choose a specific property for the booked outlook and useful city access. Compare the walking route across bridges, evening activity and traffic noise. A river photograph does not establish a balcony, an unobstructed room view or a quiet night beside Laowaitan's restaurants and bars.",
      },
      {
        name: "Yinzhou / museum access or a particular modern hotel",
        advice:
          "Check the exact address rather than use a large district name as a proximity guarantee. Consider the museum day, dinner and full journeys to Tianyi Ge and the arrival station. A comfortable modern room can be a good choice when its facilities and daily route justify it.",
      },
      {
        name: "Dongqian Lake / a separate landscape-led stay",
        advice:
          "Assess the particular shore, room category, meals, public-path access and indoor fallback. Lake view is not sea view, and a resort listing does not establish swimming or water-sport services. Compare city transfers with how much time you intend to spend at the property before choosing it as the only base.",
      },
    ],
    tradeoffs: [
      {
        title: "Tianyi Ge is about preserving knowledge, not borrowing rare books",
        advice:
          "Use the public visitor route to understand collecting, protection and the institutional history of a private library. A visit does not imply reading-room privileges, handling original volumes or entry to conservation stores. Distinguish a historic library complex, exhibitions and the actual original objects currently displayed.",
      },
      {
        title: "Museum architecture deserves more than a facade photograph",
        advice:
          "Ningbo Museum is associated with a distinctive use of materials, including reused building elements. A prepared guide can connect form, surface and regional change without inventing an architect meeting. The building and its current collections are related but separate reasons to visit; choose the galleries and public areas that actually support the day.",
      },
      {
        title: "The Old Bund is a Ningbo place, not Shanghai's Bund",
        advice:
          "Laowaitan belongs to Ningbo's port-city geography and history, with a contemporary restaurant and nightlife layer. Explain the specific streets and surviving or altered structures rather than describe it as an interchangeable colonial waterfront. An evening stroll can be enjoyable without turning every commercial facade into a museum-quality historical claim.",
      },
      {
        title: "Tiantong and the Temple of King Ashoka are distinct visits",
        advice:
          "Choose the temple whose religious, historical or landscape subject interests you. Each needs its own route, visitor instructions and walking assessment. These are living religious places, not settings for a guaranteed private monk encounter or ceremony. Relic associations do not establish what visitors can see or photograph on the day.",
      },
      {
        title: "Dongqian Lake is a stay decision, not a beach add-on",
        advice:
          "The lake is inland and its properties occupy different settings. Choose the actual room, meals, public shore route and time to rest. A hotel transfer to the lake does not provide an ocean beach, swimming access or an included activity. For a city-heavy itinerary, a central base may give a more relaxed day than a resort address.",
      },
      {
        title: "Putuoshan and the working port need separate planning",
        advice:
          "Putuoshan is an island pilgrimage destination in the Zhoushan area, with ferry logistics, weather and its own accommodation choices. An operating port facility is a different industrial setting requiring permission. Ningbo's maritime identity does not automatically make either one an available public outing from every city hotel.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "wenzhou",
        advice:
          "Wenzhou adds a southern Zhejiang city-food chapter and separate Yandang Mountain, Nanxi River or Dongtou landscape choices. Choose the actual regional base and usable nights rather than assume all interests sit beside a city station. Compare a distinct mountain or village chapter with keeping more time for Ningbo's collections and architecture.",
      },
      {
        slug: "shengsi",
        advice:
          "Shengsi offers a separate fishing-island and coastal stay. Choose Sijiao or Shengshan–Gouqi first, then research the complete connection to the correct pier. Ningbo, Putuoshan and Shengsi are not one ferry hub; confirm the actual dated service rather than infer a direct island crossing from regional geography.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake and a separately chosen tea-country chapter. Ningbo adds library culture, museum architecture and maritime history. Compare actual rail services and both room locations, and keep Dongqian Lake distinct from Hangzhou's West Lake rather than assume the two hotel settings offer the same experience.",
      },
      {
        slug: "shaoxing",
        advice:
          "Shaoxing adds literary neighborhoods, canal walks and yellow rice wine traditions. A considered Zhejiang route can give each city a different question rather than repeat a generic old-street circuit. Include the full hotel-to-hotel journey and useful nights; Shaoxing's outlying sites are not stops automatically included in a Ningbo transfer.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai offers an international gateway and another urban and maritime-history comparison. Verify the dated connection, exact stations and final transfers. Shanghai's Bund and Ningbo's Old Bund are distinct places, and existing Shanghai tours do not include a Ningbo library or architecture extension by default.",
      },
      {
        slug: "linhai",
        advice:
          "Linhai adds a different historic-town and Taizhou city-wall chapter farther south in Zhejiang. Choose it for that specific interest and give the journey and local walking useful time. It is not another neighborhood within Ningbo, and a cultural city guide does not make the intervening regional route an included tour.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for mixed city walking, temples and a lake setting, with rain still possible. Summer can bring heat, humidity and disruptive coastal weather, so an indoor cultural subject and flexible outdoor sequence matter. Winter requires a review of room heating and damp-weather comfort rather than an assumption of a warm coastal holiday. For ferry-dependent extensions, check the current operator and conditions separately. Museum and library access depend on institution schedules as well as season.",
    orientation:
      "Ningbo is a large Zhejiang municipality, not one compact harbor attraction. Tianyi Ge, Sanjiangkou, the Yinzhou museum, eastern temple routes and Dongqian Lake occupy different parts of a visit. Cixi, Yuyao and Ninghai lie within the wider municipality but need separate local routes; a central Ningbo hotel is not equally convenient for all three. Putuoshan belongs to a different island and ferry plan in Zhoushan. Full Chinese institution and property names help distinguish the actual intended public visit from a broad city or museum label.",
    experiences: [
      "Understand book collecting and preservation through Tianyi Ge's public visitor route",
      "Read Ningbo Museum's architecture alongside a selected regional collection",
      "Choose a port-city walk and local meal, or a deliberately separate temple or lake chapter",
    ],
    planningNotes: [
      "Choose the principal institution before filling the day with distant city subjects",
      "Compare a central cultural base with the actual benefit of a Dongqian Lake stay",
      "Keep rare-book access, working-port visits and ferry extensions outside assumed inclusions",
    ],
    arrival:
      "Use the dated service to Ningbo / 宁波 station and the full booked property address. An arrival at Ningbo Lishe International Airport needs a verified operating flight and the complete final road. Compare the whole sequence from Shanghai, Hangzhou or another gateway, not just the rail or flight segment. Allow luggage, check-in and useful public opening hours. Essential galleries or a specialist interpretation session belong in a reliable full-day window rather than an uncertain arrival afternoon.",
    gettingAround:
      "Plan a coherent central day and a separately chosen museum, temple or lake sequence. Specify entrances, final walking, seating, toilets, meals and pickup. A private vehicle helps with cross-city distances but does not enter private library stores, every temple courtyard or the working port. A guide's architectural preparation should be agreed rather than inferred from the city name. Change the sequence when a core public area is unavailable, keeping the original reason for the visit in view.",
    stayStrategy:
      "Two or three city nights can support cultural depth with fewer luggage moves. A Dongqian Lake property earns a separate stay when its assessed room, setting and available time provide a real benefit. Compare sleep, bathroom, climate control, meals and complete transfers before a boutique, heritage or resort label. A high-end proposal should make the day easier and more meaningful; it need not rely on unconfirmed private access to make the destination sound worthwhile.",
    firstTimerNote:
      "Ask which Ningbo story you want to understand: books, architecture, maritime exchange, temple culture or a lake retreat. Choose one or two and plan the hotel around them. A city described only as a port or a business gateway can conceal a worthwhile cultural stop, but adding every nearby district and island can make that stop needlessly rushed.",
    faqs: [
      {
        question: "Is Ningbo worth visiting for culture rather than business?",
        answer:
          "Yes, for a defined interest in Tianyi Ge's book culture, Ningbo Museum's architecture, maritime history or selected religious sites. Two nights give one focused full day; three allow more depth. It is less compelling if added only because it is another coastal city on a rail route.",
      },
      {
        question: "How many nights should I stay in Ningbo?",
        answer:
          "Allow two nights for one selected city day or three for two different cultural days. A Dongqian Lake stay needs its own useful time and a reason to choose that base. Count arrival and departure hours honestly rather than treat every hotel night as a sightseeing day.",
      },
      {
        question: "What is Tianyi Ge and can I see its rare books?",
        answer:
          "Tianyi Ge is a historic library complex and museum associated with private book collecting and preservation. Visit through its current public route. Do not assume rare-book handling, access to stores or that a particular original volume is displayed; check the actual exhibition if that object matters to your visit.",
      },
      {
        question: "Is Ningbo Museum worth visiting for architecture?",
        answer:
          "It can be a strong choice for the building designed by Wang Shu and Lu Wenyu's Amateur Architecture Studio, with time to understand its materials and regional context. Combine that with selected current galleries. A building visit does not include a meeting with its architects or entry to every internal area.",
      },
      {
        question: "Should I stay in central Ningbo or at Dongqian Lake?",
        answer:
          "Choose a central hotel for a culture-heavy city plan and a specific Dongqian Lake property for an assessed room, setting and time to rest. Compare meals, pickup and the complete city transfers. The lake is inland; a lakeside resort is not an ocean-beach base.",
      },
      {
        question: "Can I visit Putuoshan from Ningbo?",
        answer:
          "Research it as a separate Zhoushan island and ferry journey, with dated transport, weather, walking and any island overnight assessed. It is not a neighborhood visit or an assumed inclusion in a Ningbo day. The complete route determines whether a day trip or longer chapter is sensible.",
      },
      {
        question: "Is Ningbo's Old Bund the same as Shanghai's Bund?",
        answer:
          "No. Ningbo's Laowaitan and Shanghai's Bund are in different cities with their own port histories, architecture and visitor settings. Use each place's specific context rather than treat the English waterfront label as the same attraction.",
      },
      {
        question: "What local food should I try in Ningbo?",
        answer:
          "Choose a regional meal with the seafood and preparation you actually want, and consider Ningbo tangyuan where offered. Confirm shellfish, fish stock, preserved ingredients and wheat or other dietary concerns. Sweet rice-ball fillings may contain sesame, nuts or animal fat depending on the recipe; the name alone does not establish suitability.",
      },
    ],
    culturalStory: {
      title: "A port city can also be a city of books and materials",
      paragraphs: [
        "Tianyi Ge offers a different cultural question from a palace or temple: how a collection of books is built, protected and passed on. A good public visit can connect architecture, family collecting and the practical challenge of preservation without suggesting access to working stores. Understanding which spaces and objects are available is part of the story, not a reason to substitute an invented private viewing.",
        "At Ningbo Museum, architecture provides another way to read regional change. Its reused materials can prompt a discussion of buildings, memory and modernization alongside the selected collections. Ningbo's port history adds exchange and movement to that picture. These layers work best when explained through particular places and evidence, rather than a generic account of an ancient city or a promise that every surviving waterfront structure is unchanged.",
      ],
    },
    foodStory: {
      title: "Order for the ingredients and preparations you want",
      paragraphs: [
        "Ningbo's coastal table can offer seafood, preserved flavors and dishes that differ from the meals encountered elsewhere in Zhejiang. Ask the restaurant to explain a few preparations rather than order an expensive seafood spread simply because the city is a port. Ningbo tangyuan, filled glutinous-rice balls often associated with sesame fillings, can provide a recognizable local taste when genuinely available. A regional meal should suit the guest's appetite and preferences, not become a compulsory novelty tasting.",
        "Seafood needs a clear discussion of species, shellfish, preparation and any raw or preserved ingredients. Stocks and sauces may contain fish or meat even in dishes whose main ingredient is a vegetable. Tangyuan recipes vary, including the use of animal fat, and glutinous rice does not certify a whole dish or shared kitchen as gluten-free. Serious allergies, coeliac needs or halal requirements require a specific kitchen's confirmed capacity and a workable alternative.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / first night",
        title: "Settle into the chosen city base",
        description:
          "Complete the transfer to the booked room and take a relaxed meal. A short river orientation can fit if arrival allows, with the evening character honestly matched to the guests. Leave the principal library or museum visit for reliable public opening hours.",
      },
      {
        day: "Full day 1 / books and the city",
        title: "Connect Tianyi Ge with a port-city perspective",
        description:
          "Give the available Tianyi Ge public route proper interpretation, followed by a regional meal and rest. Add a selected Sanjiangkou or Laowaitan walk for a different urban layer. Choose the route by interest and weather rather than append a distant temple after every central stop.",
      },
      {
        day: "Full day 2 / for a three-night stay",
        title: "Choose architecture or a distinct religious chapter",
        description:
          "Use a substantial Ningbo Museum visit to combine building and collections, or choose a separately planned temple route with its approach and walking assessed. A move to Dongqian Lake is another option when additional nights protect useful resort time. No plan requires all of these choices together.",
      },
      {
        day: "Departure / the actual onward route",
        title: "Protect the complete connection",
        description:
          "Reach the ticketed station or airport with the full final transfer allowed, or continue to another independently planned Zhejiang chapter. This outline is illustrative, not a published package or a guarantee of rooms, exhibitions, rare-book displays, ferry services or specialist access.",
      },
    ],
  },
};
