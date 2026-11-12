import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/kunming.svg",
  alt: "Kunming planning schematic separating a central city stay, a full Stone Forest outing and a transport-led overnight; original schematic, not a map or destination photograph",
  width: 1600,
  height: 1200,
};

export const kunmingGuide: ExpandedDestination = {
  id: "kunming",
  name: "Kunming",
  region: "southwest",
  kicker: "A Yunnan city stay with a clear purpose, not just a connection",
  description:
    "Choose Kunming for city parks, regional food and a separately planned Stone Forest visit, with clear advice on Green Lake, Dianchi, station locations and how much time to give the provincial capital.",
  stay: "2–3 nights",
  bestFor: "Yunnan food, city culture and a thoughtful arrival or departure stay",
  interests: ["city", "food", "heritage", "landscape"],
  relatedDestinationIds: ["bamei", "puzhehei", "dali", "jianshui", "puer"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Kunming Travel Guide: Where to Stay & Stone Forest",
    seoTitle: "Kunming Travel Guide: Where to Stay & Stone Forest",
    seoDescription:
      "Plan two or three nights in Kunming with Green Lake, Dianchi and Stone Forest choices, hotel areas, regional food and the right airport or rail transfer.",
    answer:
      "Kunming (昆明), the capital of Yunnan, rewards a short stay when you give it a purpose: regional food, city parks and neighborhoods, a selected museum or a separate Stone Forest outing. Green Lake and the central city, the Dianchi lakeside and Shilin's Stone Forest create different days and hotel choices. Kunming is not only a transport stop, but it is also not necessary to spend several nights here if another part of Yunnan better matches your interests. Decide what you want to see before choosing between a central hotel, a lakeside stay or a practical connection overnight.",
    stayAnswer:
      "Two nights provide one full day for a focused city introduction. Three nights give two full days, allowing a separate Stone Forest visit without replacing all the city time. One night can work around a connection, but late arrival and early departure are not a meaningful sightseeing stay. Add a Dianchi or longer museum interest only when it earns its place; Green Lake, a meal and time to settle in can be a strong first day after an international journey.",
    hotelAnswer:
      "Choose near Green Lake or a suitable central neighborhood for city walks and dining, a named Dianchi-area property for its particular lakeside setting, or a station or airport hotel for a specific connection. These are not interchangeable bases. Check the room's noise, climate control, breakfast and vehicle access, then locate it against your actual visits. A lake view on Dianchi does not mean you are beside Green Lake, and Kunming South station is not the same pickup as Kunming station.",
    sightseeingQuestion: "Should you spend a day in Kunming city or at the Stone Forest?",
    sightseeingAnswer:
      "Choose a city day for Green Lake, a selected neighborhood or collection and a regional meal at an easy pace. Choose the Stone Forest when karst formations are a real interest and you have time for the complete return journey and visitor route. It is in Shilin Yi Autonomous County outside central Kunming, not a park that fits between two short city appointments. With two full days, keep the subjects separate. If the trip is brief, choose the stronger interest rather than compressing both into a transfer day.",
    visitorResources: [
      {
        label: "Kunming municipal government, English portal",
        href: "https://en.km.gov.cn/",
        scope:
          "City background and public visitor information. Confirm current museum exhibitions, Stone Forest visitor routes, local transport and lakeside arrangements with the responsible institution or operator. General city information does not establish a hotel's room quality or a specific activity's availability.",
      },
      {
        label: "UNESCO World Heritage Centre: South China Karst",
        href: "https://whc.unesco.org/en/list/1248/",
        scope:
          "Background on the serial World Heritage property, including the Shilin karst component. The heritage designation is not a current ticketing guide or evidence that every formation, park area or route has the same visitor access.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Use the exact station and dated service when planning a connection. Kunming and Kunming South are different stations, and neither rail time nor a city name includes the transfer to the hotel or Stone Forest visitor entrance.",
      },
    ],
    serviceScope:
      "A tailored Kunming proposal can name the hotel and room, airport or station transfer, selected city route, guide hours, meals and any separate Stone Forest day. Specify admission and applicable internal visitor transport rather than assuming they are part of every quote. Food sessions, cultural hosts, boats and special museum interpretation require individual availability. Private guiding does not imply access to closed collections, religious spaces or private homes. Share walking ability, food preferences and the full onward itinerary before choosing the base.",
    routeAdvice:
      "Kunming can connect a northern route toward Dali with a different southern route toward Jianshui or Pu'er, but those chapters should not be treated as a compact circuit. Compare the transport, nights and reason for each stop. The published northern Yunnan journey does not automatically include a Kunming stay, so no matching Kunming product is recommended here. Use the illustrative three-night outline to discuss a tailored city introduction or separately quoted extension, with the connection and sightseeing days clearly distinguished.",
    practicalPlanning: {
      timing:
        "Keep a city day geographically coherent. Green Lake and nearby interests can be one sequence; Dianchi and the Western Hills need a different assessment; Stone Forest merits a separate outing. Allow a seated meal and the whole return journey before an evening commitment. An airport layover needs an independently reviewed time window and entry eligibility rather than a promise that every connection permits a city tour.",
      walking:
        "A gentle park route, a museum visit and the Western Hills' steps are different physical days. Stone Forest paths can include uneven stone, narrow sections and stairs between formations. Agree a manageable route and resting points before choosing the outing. A shuttle or cableway, where operating, does not make every connecting path step-free. Check the hotel entrance and room access as well as the sightseeing, especially when arriving with luggage.",
      cost: "Compare the room, occupancy, breakfast, complete transfer and selected guiding days. Stone Forest admission and local transport, museum arrangements, food sessions and any boat or cableway are separate items to identify. A short rail segment to a station near an attraction can still need a road transfer and time for entry. Higher-end value comes from a comfortable room, coherent days and informed interpretation, not simply a longer list of attractions.",
    },
    attractions: [
      "Green Lake / Cuihu and a selected nearby city route",
      "Yuantong Temple, with religious practice and current visitor arrangements respected",
      "A selected old-street or market interest, such as Zhuanxin market",
      "Dianchi and Haigeng on a precisely chosen lakeside route",
      "Western Hills / Xishan, with the Longmen route's steps reviewed separately",
      "Shilin Stone Forest as a distinct karst-landscape outing",
    ],
    stays: [
      {
        label: "1 night: a connection with a limited city window",
        advice:
          "Choose the hotel around the actual arrival and departure. A short walk or meal can fit when timing allows, but a late landing and early train do not create a free city day. Do not promise Stone Forest or a long cross-city excursion simply because Kunming appears between two tickets.",
      },
      {
        label: "2 nights: one full city day",
        advice:
          "Use a comfortable central base for a park, selected cultural interest and regional food. Choose Stone Forest instead only when it is the main purpose and you accept less city time. This length can work well as an arrival stay before a different Yunnan chapter.",
      },
      {
        label: "3 nights: city and a separate full outing",
        advice:
          "Two full days allow a city introduction and Stone Forest, or a different second-day interest such as a carefully paced Dianchi and Western Hills route. Select rather than stacking all options. Keep arrival and departure as travel periods with any extra sightseeing genuinely optional.",
      },
    ],
    hotelAreas: [
      {
        name: "Green Lake / central city",
        advice:
          "A useful starting point for city walks, selected cultural sites and varied meals. Check the exact street, room position and pickup access; a central address can still mean traffic noise or a substantial walk to your preferred restaurant. Choose the quoted room and evening environment rather than assuming every Green Lake label gives the same outlook.",
      },
      {
        name: "Dianchi-area properties",
        advice:
          "Consider when the hotel's setting and a particular lakeside route are the reason to stay. Dianchi is a large lake, so identify the shore and full address. Compare room comfort, dining and transport back to central interests. A lakeside property is not automatically a swimming resort or within an easy stroll of all the viewpoints shown in its gallery.",
      },
      {
        name: "Kunming station or Kunming South connection base",
        advice:
          "Choose for the ticket you actually hold, with enough time for station access and luggage. The two stations sit in different locations; a booking described as near the railway may serve the wrong one. A connection hotel can be practical without providing the central-city atmosphere or lakeside stay described elsewhere.",
      },
      {
        name: "Airport-oriented accommodation",
        advice:
          "Useful for a particular late arrival or early flight from Kunming Changshui Airport. Check the terminal transfer, hotel service hours and breakfast rather than assuming a shuttle runs whenever needed. An airport hotel is a transport decision, not a substitute for a walkable city base when you have full days in Kunming.",
      },
    ],
    tradeoffs: [
      {
        title: "The Spring City label is a climate introduction, not a weather guarantee",
        advice:
          "Kunming is known for a relatively mild climate, but sun, rain, temperature changes and cool evenings still affect the day. The city sits at roughly 1,900 meters, so the setting differs from a tropical lowland resort. Check the season and your onward destinations rather than packing for one province-wide climate. Winter gull-viewing photographs and summer greenery also reflect particular conditions, not all-year inclusions.",
      },
      {
        title: "Choose a Stone Forest route rather than a generic ticket promise",
        advice:
          "The main visitor area and other Shilin karst interests, including Naigu, involve different routes and logistics. Ask which site, entrance, walking sections and internal transport are included. UNESCO's South China Karst is a serial heritage property, not one ticket covering every karst landscape in Yunnan. A useful visit explains the formations and leaves time to look rather than simply moving between the busiest photographic points.",
      },
      {
        title: "Dianchi, Green Lake and the Western Hills are different experiences",
        advice:
          "Green Lake is an urban park setting; Dianchi is a much larger lake; Xishan offers a mountain-and-temple route with its own steps and access. Choose the combination that fits your interest and mobility rather than treating all three as interchangeable waterfront stops. Longmen's visitor route deserves a specific walking review. A cableway photograph or a road reaching the hills does not establish easy access to every viewpoint.",
      },
      {
        title: "Markets reward explanation, not a promise of unlimited tasting",
        advice:
          "A place such as Zhuanxin market can introduce regional ingredients and everyday food shopping. Match the visit to opening patterns, crowding, hygiene and the group's interest. Some stalls sell ingredients rather than ready-to-eat food; food allergies and shared preparation need individual discussion. A guided market walk is different from a hosted cooking session or a meal with confirmed seating and dietary arrangements.",
      },
      {
        title: "Do not let a gateway connection choose the whole Yunnan itinerary",
        advice:
          "A train or flight through Kunming can be useful without requiring several extra sightseeing nights. Conversely, a city stay can be worthwhile if food, a collection or Stone Forest genuinely interests you. Keep northern Dali-Lijiang travel, southern tea-country travel and the Jianshui-Yuanyang chapter distinct in the route design. Compare the full journey and usable time rather than adding every familiar Yunnan name to one proposal.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "bamei",
        advice:
          "Bamei in Guangnan offers a cave-and-river approach and village valley in southeastern Yunnan. Compare dated trains to Guangnanxian and include the road and scenic approach. Choose a day visit from Guangnan or a named village night only after checking access, luggage, meals and the actual room.",
      },
      {
        slug: "puzhehei",
        advice:
          "Puzhehei adds a distinct southeastern Yunnan lake-and-karst stay with seasonal lotus and separate boat or viewpoint choices. Compare dated station pairs and both hotel transfers before treating it as a day excursion. Two useful local nights can provide a full landscape day; it is a separately agreed route, not included in the existing northern Yunnan journey.",
      },
      {
        slug: "dali",
        advice:
          "Dali adds Erhai scenery and Bai village interests. Check the actual train or flight connection and both hotel transfers, especially which Kunming station serves the chosen train. The published northern Yunnan journey starts with its own confirmed gateway arrangements; a Kunming pre-stay needs separate agreement.",
      },
      {
        slug: "jianshui",
        advice:
          "Jianshui adds Confucian heritage, courtyards and purple pottery in a different southern chapter. Compare the full rail or road journey and keep time there rather than reducing it to a meal stop. Any continuation to Yuanyang needs another road and terrain assessment.",
      },
      {
        slug: "puer",
        advice:
          "Pu'er adds a tea-country subject and a southern Yunnan stay. Choose whether the purpose is the Simao city area, a specific tea host or the much farther Jingmai Mountain chapter before booking the gateway. A train to Pu'er does not place you beside every tea forest in the wider prefecture.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Kunming can be considered in different seasons because the appeal is not limited to one short event. Spring and autumn are useful starting points for city walks; the wetter summer period calls for flexible outdoor plans, and winter can bring cool mornings and evenings. Strong sun and temperature changes still matter in a mild-climate city. Seasonal gull appearances around lakeside areas are not an all-year promise. Check the specific visit and onward route, since southern tea country and northern highlands can feel very different from Kunming.",
    orientation:
      "Green Lake, central neighborhoods, Dianchi, the Western Hills, Changshui Airport and the two main Kunming rail stations occupy different parts of a large city. Stone Forest is outside the central city in Shilin Yi Autonomous County. Use the full Chinese hotel address and ticketed station when planning the stay. Kunming Lake at Beijing's Summer Palace is a different place entirely; it is not Dianchi or an attraction in Kunming city.",
    experiences: [
      "Enjoy an unhurried city route with Green Lake, a selected cultural interest and regional food",
      "Explore Shilin's karst on a specifically chosen route with walking and the full transfer understood",
      "Use a comfortable Kunming stay to connect distinct Yunnan chapters without sacrificing useful days",
    ],
    planningNotes: [
      "Choose a central, Dianchi or connection hotel around the stay you actually want",
      "Keep Kunming station, Kunming South and Changshui Airport separate in every pickup instruction",
      "Treat Stone Forest and the Western Hills as specific outings with different road and walking demands",
    ],
    arrival:
      "Kunming Changshui International Airport uses code KMG. Kunming railway station and Kunming South station create different road transfers, so send the full ticket and hotel address before agreeing pickup. A service convenient for an onward train may place you far from the preferred city base. For an international layover, confirm entry eligibility and the complete usable time window separately; a connection is not automatic permission or enough time for a sightseeing excursion.",
    gettingAround:
      "Use a combination of suitable local transport and planned transfers according to the day's route. A private vehicle can be useful for Stone Forest or a selected outer-city outing, while a central walking day need not keep a driver waiting. Agree pickup points and traffic allowance. Public visitor transport, cableways and boats, where operating, have their own rules and hours. Keep a distant outing away from a tightly timed train or flight rather than relying on an optimistic map estimate.",
    stayStrategy:
      "For two or three nights, one well-chosen base is usually enough. Central Kunming suits city culture and dining; a Dianchi property suits a deliberately different setting; a connection hotel suits a ticket. Compare the room's quietness, bedding, temperature control, breakfast and vehicle access before choosing by star category. A split stay should provide a clear benefit, since packing and check-in can use the time intended for a relaxed city introduction.",
    firstTimerNote:
      "Ask what Kunming should contribute to your holiday. If the answer is regional food and a gentle start, give the city a comfortable base and a coherent day. If it is Stone Forest, protect a proper outing. If it is simply an onward connection, keep the overnight practical. There is no need to either dismiss the city as an airport or fill several days just because it is the provincial capital.",
    faqs: [
      {
        question: "Is Kunming worth visiting or only a gateway?",
        answer:
          "It can be worth a focused stay for Yunnan food, city parks, a selected cultural interest or a separate Stone Forest visit. Choose by your interests and useful days. A connection alone does not require several city nights, while late arrival and early departure do not amount to a sightseeing visit.",
      },
      {
        question: "How many nights should I spend in Kunming?",
        answer:
          "Two nights give one full day for a city introduction. Three nights allow a separate Stone Forest or other full outing. One night can be practical around a connection, but keep sightseeing expectations modest when arrival and departure consume most of the time.",
      },
      {
        question: "Should I stay near Green Lake or Dianchi?",
        answer:
          "Choose Green Lake or a suitable central neighborhood for city walks and dining. Choose a named Dianchi property for its specific setting and hotel experience, accepting different transfers. Dianchi and Green Lake are different places; a lake-view label does not specify which daily routes will be convenient.",
      },
      {
        question: "Is the Stone Forest in central Kunming?",
        answer:
          "No. It is in Shilin Yi Autonomous County outside the central city. Allow the complete journey, entry, internal transport where relevant and a walking route suited to the group. It is not a small park to insert between two short city appointments.",
      },
      {
        question: "Are Kunming and Kunming South the same station?",
        answer:
          "No. They are different stations in different locations. Use the full name on the ticket for the hotel choice and pickup instruction. A train time or a hotel described as near the railway is not enough to establish a convenient door-to-door connection.",
      },
      {
        question: "Is Kunming warm all year?",
        answer:
          "The city is known for a relatively mild climate, but rain, strong sun, temperature changes and cool evenings still matter. It sits at roughly 1,900 meters. Pack and plan for the actual season and onward destinations rather than treating the Spring City name as a weather guarantee.",
      },
      {
        question: "Are the Western Hills suitable for limited mobility?",
        answer:
          "Review the specific route, including Longmen if proposed. Steps, narrow sections, standing and connecting paths vary. A road, shuttle or cableway does not establish step-free access to every viewpoint. Choose a shorter alternative where the actual route does not suit the traveler.",
      },
      {
        question: "Is Kunming Lake the same as Dianchi?",
        answer:
          "No. Kunming Lake commonly refers to the lake at Beijing's Summer Palace. Dianchi is the large lake beside Kunming city in Yunnan, while Green Lake is a separate urban park setting. Confirm the Chinese place name and address when comparing photographs or planning visits.",
      },
    ],
    culturalStory: {
      title: "Let the city introduce a diverse province without pretending to contain it all",
      paragraphs: [
        "A Kunming walk can bring together a city park, religious heritage, local streets and regional ingredients without turning every stop into a summary of all Yunnan. Green Lake's public life, Yuantong Temple and a selected museum ask different questions. Good guiding makes the chosen subject understandable and distinguishes older fabric, restoration and contemporary use. A lively street is not necessarily an untouched historic quarter, and a cultural display is not the same as an encounter with a community.",
        "Stone Forest adds a different subject: karst landforms in a county with its own Yi cultural context. Geological interpretation, a public cultural presentation and a hosted conversation are separate experiences. Respect religious spaces, residents and photography boundaries. A thoughtful introduction does not depend on promising private homes, ceremonies or a generic minority performance; the strongest city stay gives useful context and leaves the wider province its own distinct chapters.",
      ],
    },
    foodStory: {
      title: "Choose Yunnan flavors with preparation explained",
      paragraphs: [
        "Crossing-the-bridge rice noodles are a useful introduction when the broth, ingredients and serving method are explained. The name describes a style of meal rather than one identical recipe at every restaurant. Other rice-noodle dishes and market ingredients can show different textures and preparations. Ask about meat stocks, spice, herbs and portion size; a small selection ordered well can be more rewarding than a long list of dishes labeled must-eat.",
        "Wild mushroom menus are seasonal and require knowledgeable sourcing and thorough preparation, not a promise that any photographed mushroom is edible or suitable. Use an appropriate established venue, discuss allergies and avoid treating a market ingredient as something to taste raw. Vegetarian, halal and other dietary needs deserve a venue-and-preparation review. The same applies to a hosted food session: confirm the subject and arrangements rather than assuming a guided market walk includes cooking or a private meal.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the right base and keep the evening easy",
        description:
          "Transfer from the ticketed airport or station to the selected hotel. Enjoy a straightforward meal and a short nearby walk if timing allows. A late landing should not carry a fixed cultural outing or a promise of an extra full city day.",
      },
      {
        day: "Full day 1",
        title: "A coherent city introduction",
        description:
          "Choose Green Lake, a selected cultural or neighborhood interest and a regional meal at a comfortable pace. Keep market browsing purposeful and dietary needs clear. A Dianchi-led day is an alternative route, not another automatic addition to every city stop.",
      },
      {
        day: "Full day 2",
        title: "Stone Forest, if it is the right second subject",
        description:
          "Allow the full return journey and the agreed karst route, with entry, walking and local transport reviewed. Use another well-chosen interest if karst or the physical demands do not suit the group. Leave time for dinner and rest rather than attaching a long evening transfer.",
      },
      {
        day: "Departure",
        title: "Continue to the distinct Yunnan chapter",
        description:
          "Use the correct station or airport and both road transfers when planning Dali, Jianshui or Pu'er. This three-night outline is illustrative, not a published product or a claim that Kunming is included in the existing northern Yunnan journey.",
      },
    ],
  },
};
