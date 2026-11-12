import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/datong.svg",
  alt: "Datong planning diagram separating Yungang cave art, old-city temple visits and an optional Hunyuan excursion; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const datongGuide: ExpandedDestination = {
  id: "datong",
  name: "Datong",
  region: "north",
  kicker: "Northern Wei sculpture, temple architecture & a considered Shanxi stay",
  description:
    "Give Yungang's Buddhist sculpture proper context, choose Datong's temples for their differences, and assess the Hanging Temple separately from a strenuous mountain day.",
  stay: "2–3 nights",
  bestFor: "Buddhist art, architectural history and a Beijing extension",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: [
    "wutai-mountain",
    "beijing",
    "xian",
    "dunhuang",
    "pingyao",
    "luoyang",
    "hohhot",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Datong Travel Guide: Yungang, Temples & Where to Stay",
    seoTitle: "Datong Travel Guide: Yungang & Where to Stay",
    seoDescription:
      "Plan Datong's Yungang Grottoes, old-city temples and Hanging Temple. Compare hotel areas, walking demands and a tailored Beijing or Shanxi connection.",
    answer:
      "Datong is a city in northern Shanxi, particularly rewarding for the Buddhist sculpture of the Yungang Grottoes and the architectural history of its urban temples. Yungang is a major Northern Wei cave-art site outside the city center. The Hanging Temple, also called Xuankong Si, is a separate excursion near Hunyuan rather than another stop inside Datong Old City. Choose Datong for time to understand art and architecture, with the route shaped by your walking ability and interest in the more demanding cliffside visit.",
    stayAnswer:
      "Two nights provide one full day for Yungang and a selected old-city interest when the complete access and transfers allow. Three nights give a second full day for a Hunyuan excursion or more city architecture without attaching everything to a rail arrival. One night can suit a focused Yungang visit with compatible tickets, but should not promise the caves, several temples and a full Hanging Temple day. Add time because you want another historical subject, not because every attraction must be collected.",
    hotelAnswer:
      "Choose a property in or near Datong Old City when evening meals and selected temple walks matter, checking the exact vehicle approach and room noise. A modern city hotel can provide a different balance of facilities, room layout and road access, with transfers into the historic core. A Hunyuan overnight is a separate choice for a particular excursion or property, not a requirement for every Datong visitor. Compare the actual bathroom, heating or cooling, stairs, breakfast and journey to the station before choosing by an old-town label.",
    sightseeingQuestion:
      "Should you visit Yungang Grottoes and the Hanging Temple on the same day?",
    sightseeingAnswer:
      "For a comfortable first visit, separate them when the available nights allow. Yungang needs time for the visitor approach, walking and art interpretation; the Hanging Temple requires a distinct road journey and its own access process. Combining them can produce a long day and should follow current arrangements, opening windows and the group's priorities rather than a generic checklist. A guest focused on Buddhist sculpture can instead pair Yungang with one city interest and omit the cliffside route entirely.",
    visitorResources: [
      {
        label: "UNESCO: Yungang Grottoes",
        href: "https://whc.unesco.org/en/list/1039/",
        scope:
          "Background on Yungang's Buddhist sculpture and World Heritage significance. This does not establish current cave openings, photography permission, ticket availability or private access, and does not extend the listing to every Datong attraction.",
      },
      {
        label: "Datong municipal government",
        href: "https://www.dt.gov.cn/",
        scope:
          "City background and public announcements. Verify the current visitor instructions for Yungang, each temple, the Hanging Temple and transport separately with the actual operator.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Datong stay with the named hotel, guide, road transfers, admissions and onward rail arrangements itemized in the proposal. Art and architecture interpretation should match your language and interests. A private guide does not secure closed caves, private temple access or exemption from Hanging Temple capacity and admission rules. Describe steps, balance, height sensitivity and children's needs before the route is confirmed; special access or researcher meetings need separate documented authorization.",
    routeAdvice:
      "Datong can add an art-and-architecture chapter after Beijing or form part of a longer Shanxi route toward Taiyuan and Pingyao. Choose the actual station pair, hotel transfers and usable sightseeing days before fixing the order. Xi'an and Dunhuang offer different Buddhist-art and historical comparisons through separately planned connections. There is no published Datong package recommended on this page. The outline is illustrative; a written proposal should name the sites and distinguish a Hunyuan excursion from a full Hengshan mountain day.",
    practicalPlanning: {
      timing:
        "Protect a useful Yungang window rather than attaching it to an uncertain train arrival. In the old city, choose one or two complementary sites and leave time for a meal. Treat the Hanging Temple journey as its own substantial excursion; check the current ticket, approach and visitor process before adding more climbing. A long Hunyuan day should not be assumed to fit before a tight departure from Datong South station.",
      walking:
        "Yungang involves a visitor approach and walking between selected caves, with standing and changes in surface. City temples can have thresholds and steps. The Hanging Temple's elevated, narrow and stepped passages present a different challenge, especially for height sensitivity or limited mobility. Viewing from an appropriate outside area and entering the elevated structure are different experiences. A private car cannot eliminate internal stairs or establish that every site is step-free.",
      cost: "Compare the hotel and room, guide expertise, road hours, named admissions and internal transport where needed. A Hunyuan excursion, Hengshan visit or additional specialist interpretation can change the service duration and quote. Confirm the actual Hanging Temple access category rather than assuming every ticket permits the same visit. Meals, rail class and station transfers should be stated; premium pricing should correspond to real comfort, time and interpretation, not an unsupported promise of priority or exclusive access.",
    },
    attractions: [
      "Yungang Grottoes",
      "Huayan Temple",
      "Shanhua Temple",
      "Datong Nine Dragon Screen",
      "Hanging Temple / Xuankong Si near Hunyuan",
    ],
    stays: [
      {
        label: "1 night: a focused Yungang chapter",
        advice:
          "Possible when the actual tickets leave a useful visit window. Keep city touring selective and do not attach a full Hunyuan excursion to a short arrival or departure day.",
      },
      {
        label: "2 nights: one full day and selected city time",
        advice:
          "Give Yungang the main visit and add one old-city subject with sufficient access and transfer time. An evening meal can be more rewarding than rushing through a second major institution near closing.",
      },
      {
        label: "3 nights or more: separate the cliffside excursion",
        advice:
          "Use a second full day for the Hanging Temple if its access suits you, or deepen city architecture instead. Hengshan climbing is a further decision, not an automatic extension of a temple ticket.",
      },
    ],
    hotelAreas: [
      {
        name: "Datong Old City and its edges",
        advice:
          "Consider for selected temple walks and evening dining. Check pedestrian restrictions, the actual pickup point, room sound and luggage handling. A historic setting does not prove that the hotel building is old or that the room meets your preferred comfort level.",
      },
      {
        name: "Modern Datong city accommodation",
        advice:
          "Choose a specific property for room quality, facilities and convenient road service, allowing the real drive to the old city and Yungang. Compare quietness, bathroom, temperature control and breakfast rather than treating modern as a uniform standard.",
      },
      {
        name: "Hunyuan as a separate overnight",
        advice:
          "Consider only when the actual excursion sequence and property justify a hotel move. Check meals, room conditions and the complete return or onward transfer. A nearby Hanging Temple address does not provide out-of-hours admission or guarantee access to its elevated passages.",
      },
    ],
    tradeoffs: [
      {
        title: "Yungang deserves a sculptural story of its own",
        advice:
          "The Northern Wei setting and changing sculptural styles make Yungang more than a substitute for other Chinese cave sites. Ask the guide to connect scale, posture and architectural framing with the periods represented by the accessible caves. Openings may change for conservation or visitor management; do not promise every famous image, a closed cave or interior photography. The depth of interpretation matters more than counting entrances.",
      },
      {
        title: "The Hanging Temple and Hengshan are separate commitments",
        advice:
          "Xuankong Si's cliffside structures and Hengshan's mountain routes address different interests and levels of exertion. Being in the same wider Hunyuan area does not make both a short visit. Select the actual mountain route, transport and remaining stairs separately if adding Hengshan. A guest may enjoy the temple's exterior context without choosing an elevated passage or a mountain climb.",
      },
      {
        title: "Choose city temples for contrast",
        advice:
          "Huayan and Shanhua offer different architectural ensembles and settings. Give a selected site time for spatial and historical explanation rather than treating both as identical photo stops. The Nine Dragon Screen provides another focused subject; it is not a full temple complex. Confirm current access and follow rules for active religious areas and photography.",
      },
      {
        title: "Restored city walls and old buildings need different language",
        advice:
          "Datong's present-day historic core includes extensive reconstruction and restoration alongside important surviving monuments. Do not describe every street or wall segment as untouched ancient fabric. Ask which features are original, repaired or reconstructed where reliable evidence permits. A pleasant city walk can still be worthwhile without overstating the age of everything visible.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "wutai-mountain",
        advice:
          "Mount Wutai can deepen a Buddhist-culture journey after Yungang through living temples and a different mountain setting. Give it useful nights and the complete road, with steps, sleeping elevations and any higher route assessed separately. Foguang and Nanchan are distinct architecture subjects, not assumed additions to every Taihuai walk.",
      },
      {
        slug: "hohhot",
        advice:
          "Hohhot adds a different temple-city history and regional food, with any grassland visit planned as a separate road and accommodation decision. Compare the actual train or road connection and give the city useful time. Yungang, Hohhot temples and a grassland camp are not one continuous sightseeing day.",
      },
      {
        slug: "luoyang",
        advice:
          "Luoyang's Longmen Grottoes add a different Northern Wei and Tang sculptural sequence alongside museums and successive capital histories. This is a separate Henan stay with its own transport plan, not another Datong excursion. Compare the art rather than treating all cave sites as interchangeable.",
      },
      {
        slug: "pingyao",
        advice:
          "Pingyao adds a walled merchant city, courtyard stays and separate Shuanglin or Zhenguo temple interests. Check the complete rail or road sequence and allow its own full day. The Hanging Temple near Hunyuan is not automatically an easy stop on every transfer between Datong and Pingyao.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing offers imperial sites, neighborhoods and a selected Great Wall visit before or after Datong. Compare actual trains, departure stations and both hotel transfers; the rail ride alone is not the full journey. Separate nights usually give Yungang more attention than a clock-driven excursion.",
      },
      {
        slug: "xian",
        advice:
          "Xi'an adds an earlier imperial-capital perspective and the Terracotta Army. A wider route may also consider Shanxi stops such as Pingyao, but each needs separate days and a checked transport sequence. Do not turn the connection into an assumed short local transfer.",
      },
      {
        slug: "dunhuang",
        advice:
          "Dunhuang's Mogao Caves offer a different Buddhist-art tradition with important paintings as well as sculpture. Compare historical subjects and actual visit arrangements rather than assuming one site replaces the other. This is a thematic link across northern China, requiring a dedicated transport plan and nights.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit outdoor architectural visits, with wind and temperature changes still possible. Summer needs sun protection and breaks during exposed walking. Winter can be very cold; confirm heating, suitable clothing, road conditions and any seasonal visitor arrangements before selecting a demanding excursion. Temple or cave access follows current operation, not a broad season label. Choose the art and architecture as the reason to visit rather than relying on snow, clear skies or empty courtyards.",
    orientation:
      "Datong is in northern Shanxi. Yungang lies outside the central city, while Huayan, Shanhua and the Nine Dragon Screen belong to the urban sightseeing chapter. The Hanging Temple is near Hunyuan in a different direction and needs a separate road plan. Datong and Datong South railway stations are distinct pickups; the airport adds another gateway. Use the exact ticket and hotel address instead of treating every Datong arrival as already in the old city.",
    experiences: [
      "Explore Yungang's Buddhist sculpture through a coherent Northern Wei art-history introduction",
      "Compare a selected city temple with domestic streets and the distinct Nine Dragon Screen subject",
      "Assess a Hunyuan excursion for its actual cliffside access, with a comfortable meal and hotel night in the plan",
    ],
    planningNotes: [
      "Separate Yungang and Hunyuan when available nights allow, rather than filling a transfer day with both",
      "Describe height sensitivity, steps and balance needs before choosing Hanging Temple entry",
      "Confirm the actual station, site access categories and hotel pickup rather than relying on city labels",
    ],
    arrival:
      "Use the station or airport named on your actual ticket and confirm the meeting point. Datong South and Datong railway station require different transfers. For a Beijing connection, check the actual departure station as well as the arrival. Include baggage and the final hotel approach before estimating a same-day cave visit. An old-city property can require a road pickup outside pedestrian lanes; arrange luggage help if needed.",
    gettingAround:
      "Combine planned road transfers with selected walking at the caves and city monuments. Group the old-city interests sensibly, and treat Hunyuan as a separate excursion rather than repeated cross-city driving. Check any internal transport and the exact final pickup. Private road service does not remove site controls, stairs, narrow passages or admission capacity, and the driver may not be able to reach a historic entrance directly.",
    stayStrategy:
      "For a short stay, one comfortable Datong base often makes more sense than moving hotels for a single excursion. Choose quiet sleep, reliable heating or cooling, bathroom comfort and breakfast that fits the day's departure. An old-city setting can be attractive for dinner and a stroll; a modern hotel may serve the actual room and transport needs better. A Hunyuan night should earn its place through a specific route and verified property, not simply a closer map pin.",
    firstTimerNote:
      "Datong rewards comparison: a carved Buddhist cave, a timber temple ensemble and a cliffside structure are different architectural experiences. Choose the two subjects that most interest you and allow a guide to explain how they differ. You do not have to enter an elevated passage or climb Hengshan to make the trip worthwhile. A strong visit can center on Yungang, selected city heritage and a regional meal at an unhurried pace.",
    faqs: [
      {
        question: "How many days do you need in Datong?",
        answer:
          "Two nights give one full day for a selected Yungang and city introduction. Three nights allow a second full day for Hunyuan or deeper architecture. One night needs compatible arrival and departure tickets and should remain focused rather than promise all the major sites.",
      },
      {
        question: "Can I visit Datong as a day trip from Beijing?",
        answer:
          "A very selective visit may be possible with suitable actual services, but compare the complete rail and road transfers and the site window. Separate nights usually provide a more comfortable Yungang visit. Do not assume a short advertised train ride permits Yungang, city temples and the Hanging Temple in one easy day.",
      },
      {
        question: "Should I visit Yungang Grottoes or the Hanging Temple?",
        answer:
          "Choose Yungang for a major Buddhist sculpture interest. Choose the Hanging Temple for its cliffside architectural setting if the road journey, steps and height exposure suit you. They are separate locations and can be given different days; visiting Datong does not require doing both.",
      },
      {
        question: "Is the Hanging Temple suitable for limited mobility or fear of heights?",
        answer:
          "Its elevated, narrow and stepped passages may be unsuitable. Discuss the actual access with the operator and consider an appropriate exterior view or another site instead. A private guide cannot remove the physical conditions or guarantee step-free entry into the cliffside structure.",
      },
      {
        question: "Is the Hanging Temple the same as Hengshan Mountain?",
        answer:
          "No. Xuankong Si is the Hanging Temple near Hunyuan; Hengshan adds separate mountain routes and visitor arrangements. Combining them needs its own assessment of road travel, transport, stairs and time. A temple ticket should not be assumed to include a complete mountain excursion.",
      },
      {
        question: "Where should I stay in Datong?",
        answer:
          "Compare an old-city or edge property for evening atmosphere with a specific modern hotel for facilities and road access. Check room quality, noise, temperature control, breakfast and pickup. Hunyuan is a separate overnight decision for a particular route, not the default city base.",
      },
      {
        question: "Can I photograph inside Yungang Grottoes?",
        answer:
          "Follow the current rules for the actual cave or area and do not assume interior photography or flash is allowed. Openings and restrictions can vary for conservation and visitor management. A private guide does not waive the site's instructions or provide access to closed caves.",
      },
      {
        question: "Is Datong South the same as Datong railway station?",
        answer:
          "No. They are separate stations with different pickup and transfer plans. Use the exact station and service on the ticket, and allow the full hotel or sightseeing transfer when choosing the train.",
      },
    ],
    culturalStory: {
      title: "Notice what changes between a cave and a timber hall",
      paragraphs: [
        "At Yungang, the relationship between the carved figure and its surrounding rock gives a starting point for understanding scale and sacred space. A guide can draw attention to changes in form, dress and architectural framing among accessible caves, connecting them to the Northern Wei setting. A small number of well-explained examples is more useful than hearing a cave number at every doorway without time to look.",
        "In the city, temple architecture asks a different set of questions: how the approach prepares the visitor, how a hall organizes its interior and how repaired fabric relates to the ensemble seen today. The Hanging Temple adds another architectural problem, but its physical access is a personal choice. Treat the visit as an exploration of distinct solutions and histories rather than a checklist of the oldest or most spectacular claims.",
      ],
    },
    foodStory: {
      title: "Make a Shanxi noodle meal part of the visit",
      paragraphs: [
        "Knife-cut noodles, daoxiao mian, provide a useful introduction to Shanxi's interest in flour and texture. The cutting method gives the noodles a distinctive shape and bite, while the accompanying broth or topping changes the dish. Ask about the preparation and choose a bowl or shared meal according to appetite, rather than assuming every noodle dish has the same sauce or meat. A seated lunch also gives a welcome pause between standing at the caves and another temple visit.",
        "Wheat, eggs, meat stocks, toppings and shared preparation matter for allergies and dietary restrictions. Vinegar and seasonings can be offered separately where the kitchen permits; discuss preferences before ordering. A vegetable-looking bowl is not proof of vegetarian stock, and a famous noodle name does not establish halal suitability. Choose a restaurant and meal that fit the group and the actual route, especially before a long Hunyuan drive or an early train.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the actual city base",
        description:
          "Transfer from the named station or airport and keep the first meal local. Add a short nearby walk only when the arrival leaves useful time; do not force Yungang onto an uncertain connection.",
      },
      {
        day: "Full day 1",
        title: "Yungang with a selected city contrast",
        description:
          "Give the cave visit proper interpretation and walking time, then choose one city interest if access and energy allow. Leave time for lunch rather than trying to enter every temple before closing.",
      },
      {
        day: "Optional extra full day",
        title: "Choose Hunyuan or deeper city architecture",
        description:
          "Assess the Hanging Temple's actual entry and physical demands before setting out. Hengshan climbing is a separate choice; city temples can provide another rewarding day without cliffside passages or a mountain route.",
      },
      {
        day: "Departure",
        title: "Continue through a checked northern-China route",
        description:
          "Allow the complete transfer to the actual station, airport or next overnight. Beijing and a wider Shanxi itinerary need their own usable days. This is an illustrative plan, not a published package or a promise of every optional visit.",
      },
    ],
  },
};
