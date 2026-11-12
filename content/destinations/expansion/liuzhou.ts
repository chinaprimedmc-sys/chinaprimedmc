import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/liuzhou.svg",
  alt: "Original Liuzhou planning schematic separating Liu River city time, industrial-history interpretation and luosifen food, with Sanjiang as a separate county stay; not a map or photograph",
  width: 1600,
  height: 1200,
};

export const liuzhouGuide: ExpandedDestination = {
  id: "liuzhou",
  name: "Liuzhou",
  region: "south",
  kicker: "Look beyond the noodle bowl to a working river city",
  description:
    "Explore Liuzhou through the Liu River, industrial history and luosifen. Compare city hotels, hilltop walking, two-night stays and a separate Sanjiang extension.",
  stay: "2 nights for one full city day; 3 for a distinct second interest",
  bestFor: "Food culture, industrial history and an urban contrast to rural Guangxi",
  interests: ["city", "heritage", "food", "landscape"],
  relatedDestinationIds: ["rongshui", "sanjiang", "guilin", "nanning"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Liuzhou Travel Guide: Luosifen, Liu River & City Stays",
    seoTitle: "Liuzhou Guide: Luosifen, Liu River & Hotels",
    seoDescription:
      "Plan Liuzhou for luosifen, Liu River scenery and industrial history. Compare two-night stays, central hotels, Ma'anshan walking and separate Sanjiang travel.",
    answer:
      "Liuzhou offers a different perspective on Guangxi: a working industrial city wrapped around the Liu River, with karst hills, riverside walks and a distinctive food culture. Come for a well-explained city day and a bowl of luosifen, the local rice-noodle specialty. Two nights give one full day for a collection, a neighborhood or river walk and a good meal. Sanjiang's Dong villages need a separate county excursion or stay.",
    stayAnswer:
      "Two city nights give one full day between arrival and departure. That suits a considered introduction to industrial or city history, food and the river setting. Three nights add a second full day for a different collection, a selected park route or a slower pace. One night can serve a rail connection or food-focused stop when travel hours are favorable, but should not be described as a full city stay. Sanjiang, Rongshui and other outlying county interests need their own complete journeys and useful time.",
    hotelAnswer:
      "Compare an actual Chengzhong (城中) address for your selected central streets and meals with a specifically located riverside property for its room and view. A Liunan (柳南) or station-oriented hotel may suit a particular rail sequence, while a Liudong (柳东) property serves a different part of the city. Plot the entire visit plan rather than rely on the district name. Check quietness, bathroom, cooling or heating, breakfast, pickup and the route to dinner. A river-view bedroom does not establish a continuous promenade outside the door or a short walk to every central visit.",
    sightseeingQuestion: "Should I prioritize industrial history, the Liu River or a hilltop view?",
    sightseeingAnswer:
      "Choose a named industrial-history collection when you want to understand the city beyond its food reputation. Give the river a public walking route and daylight context rather than only an evening photograph. Ma'anshan (马鞍山) can provide a higher viewpoint when the current access, remaining steps and weather suit the group; it is not an automatic requirement. One well-explained main subject, a meal and a compatible river visit can make a complete day without climbing a hill or taking a boat.",
    visitorResources: [
      {
        label: "Liuzhou municipal government",
        href: "https://www.liuzhou.gov.cn/",
        scope:
          "City background and dated public notices, mainly in Chinese. Confirm the actual museum galleries, park route, viewpoint access and river activity with the responsible institution or operator. A city overview does not establish factory access, a lift service or a scheduled evening event.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check the dated train and actual station, including onward Sanjiang or wider Guangxi travel. Add room-to-station transfers, luggage and boarding. A rail sector alone does not describe the complete trip to a village or hotel.",
      },
      {
        label: "China Meteorological Administration weather service",
        href: "https://weather.cma.cn/",
        scope:
          "Official forecast and warning starting point. Rain, heat and river conditions require local route decisions as well; a city forecast does not establish a suitable hill path or operating boat service.",
      },
    ],
    serviceScope:
      "A tailored city proposal should name the room, collection or museum, selected public routes, guide language, meals and complete road transfers. Describe the actual hill access and remaining walking if a viewpoint is included. A food visit should identify the restaurant or willing provider and its dietary capability. A museum about manufacturing is not a factory appointment: production-site access, company meetings, cooking classes and private homes require separate arrangements and are not implied by a premium guided day.",
    routeAdvice:
      "Choose Liuzhou for a city chapter that adds industrial history, river geography and food to a Guangxi journey. We can assess how a focused stay connects with Guilin, Nanning or Sanjiang, using the actual arrival and departure times. Send your dates, available nights and main interests for a tailored proposal showing the selected visits, room, walking and onward transport. Liuzhou deserves useful local time; a station stop between trains offers a much narrower experience.",
    practicalPlanning: {
      timing:
        "Give a museum its own current opening window, then group a public street or river route with a seated meal. Keep exposed walking shorter in heat and leave time to move between banks. Ma'anshan, Longtan Park and an industrial collection are different locations and commitments. Evening lights, a fountain or a cruise should only be included on confirmed current terms, not on an assumed nightly schedule. Departure boarding sits outside the sightseeing allowance.",
      walking:
        "City walking includes road crossings, gallery standing, park distances and possible changes of level. A short hill route can involve sustained steps, and a lift reference does not establish step-free access or operation on your date. Ask about shade, seats, toilets and the actual return. River steps and low paths may be unsuitable during high water or heavy rain. Enjoy the landscape from permitted public routes rather than treating an urban river as an invitation to swim.",
      cost: "Compare the actual room, guide expertise, vehicle hours, named admissions, meals and any selected lift or boat service. A food visit can be a thoughtfully explained restaurant meal without a cooking class or production tour. Separate optional purchases and company appointments from public museum interpretation. Premium value should be clear in understanding, comfort and pacing, rather than a claim of private factories, exclusive noodle recipes or guaranteed empty viewpoints.",
    },
    attractions: [
      "Liuzhou Industrial Museum / 柳州工业博物馆, with current galleries and visitor arrangements checked",
      "A selected Liu River / 柳江 public route and city-geography interpretation",
      "Ma'anshan / 马鞍山 as an optional viewpoint with current access and remaining walking assessed",
      "Longtan Park / 龙潭公园 as a separately selected landscape-and-park route",
      "A named luosifen restaurant visit with ingredients and ordering explained",
      "Selected city streets or a relevant collection, rather than an automatic factory or private-home visit",
    ],
    stays: [
      {
        label: "1 night / useful local hours or a rail connection",
        advice:
          "Choose one principal food or city interest when the arrival and departure leave time. A late arrival and early train can still justify a good room, but not a claim to have experienced a complete cultural day.",
      },
      {
        label: "2 nights / one full city day",
        advice:
          "Choose a principal collection or history subject, a compatible river route and a considered meal. Add a hill viewpoint only when the actual time, walking and conditions fit. Two nights are one full day, not two full sightseeing days.",
      },
      {
        label: "3 nights / a distinct second full day",
        advice:
          "Separate a selected park, another collection or a slower neighborhood-and-food day from the main introduction. A remote county outing needs its own full assessment; extra city nights do not make every place within the municipality nearby.",
      },
    ],
    hotelAreas: [
      {
        name: "Chengzhong and selected central streets / actual dining and visit access",
        advice:
          "Compare the named hotel with the chosen meals and walking route. Check evening noise, road crossings, breakfast and vehicle pickup. A central district can cover very different addresses; plot the actual room-to-visit sequence.",
      },
      {
        name: "A specifically located riverside property / room and bank matter",
        advice:
          "Establish what the bedroom faces, the public access outside and which bridge crossings the day needs. A view from a shared lounge is not the same as a river-view bedroom. Check sleep and dining as carefully as the skyline photograph.",
      },
      {
        name: "Liunan, station-oriented or Liudong property / a defined gateway or local need",
        advice:
          "Choose a particular address only when the room and complete transport sequence justify it. A rail-oriented room can simplify one departure while adding drives elsewhere. A business-district hotel should not be called central to every cultural visit.",
      },
    ],
    tradeoffs: [
      {
        title: "Luosifen needs an ingredient explanation, not a dare",
        advice:
          "Luosifen commonly combines rice noodles, a snail-based broth, pickled bamboo shoots and other toppings, with recipes varying by kitchen. The distinctive aroma is strongly associated with the pickled ingredients; a bowl need not contain visible snail meat. Ask about broth, chili, peanuts, soy, wheat-containing additions and shared preparation. Rice noodles do not establish a vegetarian, gluten-free or allergy-safe meal. Let guests choose spice and unfamiliar flavors without pressure.",
      },
      {
        title: "An industrial museum explains work without granting production access",
        advice:
          "Use the available objects and interpretation to understand manufacturing, transport and changing urban life. Distinguish historical exhibits, reconstructions and contemporary production. A museum visit does not include a vehicle plant, a noodle factory, a corporate meeting or a working production line. Those need a willing organization, a clear purpose and separate eligibility and access checks.",
      },
      {
        title: "A hill view should earn the effort",
        advice:
          "Compare what the actual Ma'anshan route adds with the steps, weather, queues and time involved. Check any lift operation and the walking that remains. The city can still be understood through river-level views, bridges and a well-chosen public route when climbing does not fit the guest. A famous panorama is not a reason to conceal the return descent or rush dinner.",
      },
      {
        title: "Longtan Park is a real route, not an unlimited gentle stroll",
        advice:
          "Choose the actual entrance, distance, slopes and resting points for the group. Water, vegetation and karst scenery can provide a rewarding contrast to the industrial subject, but a park label does not establish a flat, short or fully accessible outing. Wet surfaces, heat and heavy rain may change the sensible plan. Follow current access and conservation guidance.",
      },
      {
        title: "Sanjiang belongs to the wider municipality, not the city afternoon",
        advice:
          "Sanjiang's Chengyang villages offer Dong settlement architecture and a different rural stay. Assess dated transport, actual station transfers and the final village approach. Rongshui and other county interests also have their own geography and cultural context. A Liuzhou city hotel or municipal boundary does not establish easy access to every village or complete those independent destinations.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "rongshui",
        advice:
          "Rongshui adds a distinct county stay for selected village interpretation and Beijiang landscape. Choose the actual community, room and complete roads; a festival, host or Yuanbao Mountain route needs separate confirmation. It is not a city-neighborhood visit or a substitute for every Dong village interest.",
      },
      {
        slug: "sanjiang",
        advice:
          "Sanjiang adds a distinct Dong village chapter centered on Chengyang, with county-town or village rooms and complete station transfers. Give it useful local time rather than treat it as a city neighborhood. Liuzhou manufacturing history and village architecture answer different cultural questions.",
      },
      {
        slug: "guilin",
        advice:
          "Guilin and Yangshuo offer a different river-and-karst holiday. Compare actual dated services, hotel transfers and useful nights before combining the cities. The existing Li River cruise day does not include Liuzhou or a luosifen visit here.",
      },
      {
        slug: "nanning",
        advice:
          "Nanning adds Guangxi collection context and another city-food or gateway chapter. Choose the actual museum interests and whole transport sequence so the two stays complement each other. A shared regional label is not a reason to repeat similar days without a distinct purpose.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose dates by the mixture of indoor interpretation, city walking and landscape time you want. Spring and autumn can suit a mixed city day, while summer needs shorter exposed walks, water and breaks. Rain can change the river or hill sequence even when a museum is operating. Cooler months call for appropriate layers and a room that supports comfortable sleep. Blossom photographs, clear night views and a particular river level are seasonal or weather-dependent possibilities, not fixed inclusions. Check current forecasts, openings and local notices near travel.",
    orientation:
      "Liuzhou is a prefecture-level city in Guangxi, with the Liu River shaping its urban geography. The central city, railway station, Liudong, Longtan Park and hill viewpoints are different locations. Sanjiang and Rongshui are outlying counties with their own travel requirements and communities. This guide covers selected urban culture, food and public landscape routes, not the entire municipality, every factory, county village or river activity.",
    experiences: [
      "Understand a working Guangxi city through industrial-history objects and urban context",
      "Explore luosifen with ingredients, preparation and personal preferences explained",
      "Enjoy a selected Liu River or park route without making every viewpoint compulsory",
    ],
    planningNotes: [
      "Choose a main city subject and actual museum before adding landscape stops",
      "Explain luosifen broth and toppings with the kitchen rather than infer dietary suitability",
      "Keep Sanjiang and other county stays separate from a city-afternoon plan",
    ],
    arrival:
      "Compare dated rail services to the actual Liuzhou station and the full hotel transfer, including luggage and boarding at both ends. If arriving by air, use the actual flight and Liuzhou Bailian Airport transfer rather than assume the city-name arrival is central. A Guilin or Nanning gateway adds a separate intercity leg. Sanjiang onward travel needs the precise dated station and final road approach; reaching a county station does not mean reaching a Chengyang room.",
    gettingAround:
      "Use a coherent road plan between the actual hotel, museum, selected bank of the river and park or hill entrance. Bridge crossings and pickup points affect the sequence. Distinguish public river walking from a booked boat and current park routes from unrestricted hill access. A private vehicle reduces transfers but does not remove every gallery distance, stair or street crossing. Company sites and production facilities are not included simply because the vehicle can reach the gate.",
    stayStrategy:
      "One suitable city room can simplify two or three nights. Choose it against the full route, meals, sleep and departure rather than a single river-view image. A station-oriented room is useful for a real departure need; a separate county night earns its move through village or landscape time. You do not need to change hotels to make a short city stay feel varied.",
    firstTimerNote:
      "Start with curiosity about a working city and one specific question: how did manufacturing shape Liuzhou, or how does a familiar packaged noodle become a local meal? Add the river setting to understand the geography. A focused day with thoughtful interpretation can be complete without a factory appointment, a hill climb or a long list of restaurants. Guests who prefer only rural scenery may be better served by giving those nights to another Guangxi base.",
    faqs: [
      {
        question: "Is Liuzhou worth visiting in China?",
        answer:
          "Choose Liuzhou for industrial history, a working river-city setting and luosifen food culture. Two nights allow one full city day. It offers a different experience from Guilin's river scenery or a Dong village stay, rather than a compulsory stop for every Guangxi trip.",
      },
      {
        question: "How many nights should I spend in Liuzhou?",
        answer:
          "Two nights give one full city day; three allow a distinct second interest or slower pace. One night needs favorable travel hours for meaningful local time. Sanjiang and other outlying county visits need separate transport and useful days.",
      },
      {
        question: "What is luosifen, and does it contain snails?",
        answer:
          "Luosifen is a rice-noodle dish commonly served with a snail-based broth, pickled bamboo shoots and varied toppings. Visible snail meat is not necessary in every bowl. Ask the actual kitchen about broth, ingredients and preparation rather than infer the contents from the name or appearance.",
      },
      {
        question: "Is luosifen vegetarian or gluten-free?",
        answer:
          "Do not assume either. Broth may contain snail or other animal ingredients, and sauces or toppings may introduce wheat, soy, peanuts and other allergens. Rice noodles alone do not establish dietary suitability. Confirm the kitchen's actual ingredients and shared preparation, with a dependable alternative if needed.",
      },
      {
        question: "Where should I stay in Liuzhou?",
        answer:
          "Compare a specific central or riverside room against your selected meals, visits and railway transfer. A station-oriented or Liudong property serves a different sequence. Check noise, bathroom, climate control, pickup and the bedroom's actual view rather than rely on district labels.",
      },
      {
        question: "Do I need to climb Ma'anshan to enjoy Liuzhou?",
        answer:
          "No. A river-level public route, museum and thoughtful meal can make a complete day. Consider Ma'anshan only after checking actual access, remaining steps, conditions and the return. A lift reference does not establish step-free access or operation on your date.",
      },
      {
        question: "Does an industrial-history tour include a factory visit?",
        answer:
          "Not automatically. A named public museum and its current galleries are different from an operating factory or corporate appointment. Production access needs a willing organization, a defined purpose and separate arrangements; it is not implied by private guiding.",
      },
      {
        question: "Can I visit Sanjiang's Dong villages from a Liuzhou city hotel?",
        answer:
          "Assess the full dated road or rail journey, station transfers and final village approach before deciding. Sanjiang is a separate county destination, not a city neighborhood. A dedicated village stay can provide more useful time than an overly compressed excursion.",
      },
      {
        question: "Should I choose Liuzhou or Guilin?",
        answer:
          "Choose Liuzhou for industrial history, urban river geography and local food; Guilin and Yangshuo for a different karst-and-river holiday. Combine them only when transport and useful nights support both. Their shared Guangxi location does not make them interchangeable.",
      },
      {
        question: "Is there a published Liuzhou tour here?",
        answer:
          "No matching itinerary is listed. Share dates, gateways, nights and food, industrial-history or landscape interests for a tailored assessment. The example outline is not a new package or a promise of production access, a cooking class or an operating night cruise.",
      },
    ],
    culturalStory: {
      title: "A manufacturing city has a cultural story too",
      paragraphs: [
        "Liuzhou offers a useful counterpoint to a holiday told only through temples, old towns and rural scenery. Machinery, transport objects, photographs and the river city's layout can help explain how production and urban life changed together. Begin with a specific object or visible place, then connect it to work, movement and everyday experience. Distinguish historical evidence, museum reconstruction and contemporary production instead of turning manufacturing into a backdrop of impressive machines.",
        "The food story also belongs to a living city. A noodle shop, a packaged product and a public food exhibition are different ways of encountering luosifen. None automatically represents every family's recipe or the whole city. A good guide can explain what the actual kitchen does, let guests ask questions and keep shopping optional. This approach provides depth without inventing a master meeting or an exclusive production-line visit.",
      ],
    },
    foodStory: {
      title: "Make the bowl understandable before the first spoonful",
      paragraphs: [
        "Introduce luosifen through the actual bowl: rice noodles, broth, pickled bamboo shoots and the toppings chosen by the kitchen or guest. Explain how sourness, aroma, texture and chili work together, and let guests adjust what can genuinely be adjusted. A small tasting can be enough for someone unfamiliar with the flavors. The point is to make a local meal approachable, not to turn a strong aroma or high spice level into a challenge.",
        "Ask about snail or other animal ingredients in the broth, peanuts, soy, wheat-containing additions and shared utensils. A bowl with no visible meat is not automatically vegetarian, and omitting a garnish does not remove ingredients already in the stock. Agree a suitable alternative before arriving when dietary needs matter. Choose comfortable seating and reliable service; there is no need to queue at a famous shop if another well-chosen kitchen better supports the guest and the day.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / the actual city room",
        title: "Settle in and choose an approachable first meal",
        description:
          "Complete the station or airport transfer, settle luggage and have dinner suited to the guest. Confirm museum opening and the next day's route. A late arrival does not create a full food-and-river sightseeing day.",
      },
      {
        day: "Full day / industrial or city-history subject",
        title: "Use the available evidence to understand the working city",
        description:
          "Visit a named collection with current galleries confirmed, leaving time for explanation and seated breaks. A public industrial museum is not a factory appointment. Follow with a considered lunch rather than rush into several unrelated stops.",
      },
      {
        day: "Compatible afternoon or second full day",
        title: "Choose the river, park or hill by the actual group",
        description:
          "Use a selected Liu River route, a separately assessed Longtan visit or an appropriate Ma'anshan viewpoint. These are alternatives, not an obligation to do everything. With three nights, give a distinct second interest its own day.",
      },
      {
        day: "Departure / another Guangxi chapter",
        title: "Keep the complete onward connection visible",
        description:
          "Transfer to the booked gateway with luggage and boarding counted. Give Sanjiang or another county its own transport and local time. This two-to-three-night city outline is illustrative, not a published product or a promise of special production access.",
      },
    ],
  },
};
