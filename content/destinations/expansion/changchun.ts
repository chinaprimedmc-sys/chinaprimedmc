import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/changchun.svg",
  alt: "Changchun planning diagram comparing a central history stay, film heritage and a separately chosen Jingyuetan landscape visit; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const changchunGuide: ExpandedDestination = {
  id: "changchun",
  name: "Changchun",
  region: "northeast",
  kicker: "Modern history, Chinese cinema & a deliberately paced Jilin stay",
  description:
    "Choose Changchun for twentieth-century history and film heritage, with a separate decision about Jingyuetan, practical hotel-area advice and time for a northeastern meal.",
  stay: "2–3 nights",
  bestFor: "Modern history, cinema and a deeper northeastern city route",
  interests: ["heritage", "city", "food"],
  relatedDestinationIds: ["changbai-mountain", "shenyang", "harbin", "beijing"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Changchun Travel Guide: History, Film & Where to Stay",
    seoTitle: "Changchun Travel Guide: History, Film & Hotels",
    seoDescription:
      "Plan Changchun with Puyi's former palace context, film-heritage choices, Jingyuetan routes, hotel areas and exact airport or station transfers.",
    answer:
      "Changchun (长春) is Jilin Province's capital in northeast China. It suits travelers interested in twentieth-century history, Chinese cinema and the development of a modern northeastern city. The former residence and court complex used by Puyi during the Japanese-controlled Manchukuo period is now a historical museum, commonly called the Museum of the Imperial Palace of Manchukuo. It is not a Qing palace equivalent to Beijing's Forbidden City. Film heritage provides another distinctive subject, while Jingyuetan offers a separate forest-and-reservoir landscape. Changchun, Jilin city and Changbai Mountain are different places, despite their frequent appearance in the same provincial travel search.",
    stayAnswer:
      "Two nights usually leave one full day for a principal historical visit and a selected film or city interest. Three nights create two full days, allowing a separate Jingyuetan route, a provincial collection or a slower split between museums. One night works only when actual arrival and departure leave a useful window. A connection onward to Changbai Mountain needs its own transport, accommodation and usable mountain days; the city stay should not be presented as a complete mountain holiday.",
    hotelAnswer:
      "Compare an actual Renmin Square or Chongqing Road address for central city services, a specific Hongqi Street-area hotel for a film-focused plan, and a southern Nanhu-area property for the room and setting you intend to use. Jingyue and Jingyuetan properties serve a different landscape-led purpose, often with more driving for central history. These are broad areas rather than interchangeable hotel zones. A premium choice should improve quiet sleep, temperature control, bathroom comfort, dining and pickup, with time to enjoy the room instead of a schedule filled only with transfers.",
    sightseeingQuestion: "Should you prioritize Puyi's former palace or Changchun's film heritage?",
    sightseeingAnswer:
      "Choose the former palace museum for Puyi, Japanese occupation and the Manchukuo regime, with a guide who can distinguish the site's history from an ordinary imperial-palace narrative. Choose the Changchun Film Studio historic-site museum for a different subject: filmmaking, studio history and Chinese screen culture. A film-heritage museum, a working production area and a film-themed amusement attraction are different experiences. Pick the actual venue and its current visitor offer before booking. With two full days, the subjects can be separated; with one, choose a main focus and avoid rushing through difficult history.",
    visitorResources: [
      {
        label: "Changchun municipal government, English portal",
        href: "https://en.changchun.gov.cn/",
        scope:
          "Municipal orientation and public information. Confirm the actual museum, historic site, film venue, Jingyuetan route and accommodation services with the relevant institution or operator for your date.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Check the date, actual train and full station names; Changchun, Changchun West and gateways serving Changbai Mountain are not interchangeable transfer instructions.",
      },
    ],
    serviceScope:
      "A tailored Changchun proposal can identify the hotel and room, selected museums and neighborhoods, guiding, road hours and named admissions. Historical interpretation should be matched to the group's interests and language needs. Film specialists, working sets, private archives, workshops, ski instruction and particular outdoor activities require separate availability and inclusion. Share mobility needs, cold tolerance, children's ages and the exact onward transport before agreeing the sequence.",
    routeAdvice:
      "Changchun can add a specific modern-history and cinema chapter between separately planned northeastern stays. Shenyang introduces early Qing history; Harbin adds a different railway-city story and date-dependent ice attractions. Beijing provides another international gateway and capital context. No matching published Changchun product is recommended here. Use the illustrative outline to discuss a tailored stay. If Changbai Mountain is the real priority, compare its actual gateway and visitor area directly instead of adding a Changchun stop without useful city time.",
    practicalPlanning: {
      timing:
        "Choose the principal museum and its actual admission window first. Pair it with a selected complementary visit and a seated meal, leaving enough attention for the material. A southern landscape visit needs its own road and walking plan rather than a short gap after several museums. In winter, keep outdoor sections shorter and identify real warm indoor breaks before fixing departure times.",
      walking:
        "Museum standing, thresholds and historical-building stairs differ from city pavements and forest paths. Review the accessible areas of the actual institution, not simply whether the entrance has a ramp. Jingyuetan has many possible distances and surfaces; choose a named start, finish and return plan. Snow, ice or wet leaves can change suitability. A private car does not make internal paths accessible or provide pickup at every lakeside point.",
      cost: "Compare the actual room and address, guide hours, named admissions, road service and onward rail or flight. Film museum entry, a theme attraction and a specialist appointment are different purchases. At Jingyuetan, any visitor transport, equipment, lesson or seasonal activity needs its own operation and charge confirmed. Premium value should come from comfort, interpretation and a coherent day rather than an unverified promise of private film access or guaranteed snow sports.",
    },
    attractions: [
      "Museum of the Imperial Palace of Manchukuo / Puyi's former palace",
      "Changchun Film Studio historic-site museum, subject to current visitor access",
      "Selected central-city streets and modern historical context",
      "Jingyuetan forest-and-reservoir landscape on a chosen route",
      "Jilin Provincial Museum as a separate collection-led interest",
      "Nanhu Park on a manageable city route",
    ],
    stays: [
      {
        label: "1 night: choose one principal subject",
        advice:
          "Works only when the actual trains or flights provide a substantial visitor window. Prioritize modern history or film heritage with a meal, rather than promising every museum and Jingyuetan. A late arrival followed by an early departure is a transfer stop, not a full city visit.",
      },
      {
        label: "2 nights: one focused full day",
        advice:
          "Give the principal institution useful time and choose one complementary city or film subject. Keep the arrival and departure realistic. The difficult history at the former palace deserves attention and a break rather than an endless sequence of brief museum stops.",
      },
      {
        label: "3 nights or more: separate history and a second interest",
        advice:
          "Add a named Jingyuetan route, a provincial collection or a slower film-and-city day. Choose an actual reason for the additional time. An onward mountain journey still needs its own overnight and weather-aware visiting plan rather than being treated as spare time in the city stay.",
      },
    ],
    hotelAreas: [
      {
        name: "Renmin Square, Chongqing Road and central addresses",
        advice:
          "A starting point for city services, meals and road transfers in several directions. Review the exact block, room noise, pickup and the journey to the museum entrance. A central label does not put the former palace, film museum and Jingyuetan within one short walk.",
      },
      {
        name: "Hongqi Street and film-heritage-oriented stays",
        advice:
          "Choose the actual hotel for its relationship to your selected venue and evening dining. Check the building, road access, quietness and temperature control. Proximity to a film institution does not provide working-set entry, private screenings or a meeting with filmmakers.",
      },
      {
        name: "Nanhu and southern-city properties",
        advice:
          "Consider for a particular room, park setting or daily route. Establish the real access to the park and the road journey to historical institutions. Different sides of a large park create different walking and pickup arrangements; a lake image does not establish a view from the booked room.",
      },
      {
        name: "Jingyue and Jingyuetan landscape-led properties",
        advice:
          "Choose for a specific hotel and time in the forest-and-reservoir area. Check dining, seasonal facilities, actual entrance and the transfer back to central sights. A landscape address is not a guarantee of direct trail access, open sports activities or a short airport journey.",
      },
    ],
    tradeoffs: [
      {
        title: "Puyi's Changchun court is not a surviving Qing capital",
        advice:
          "Puyi had been the last Qing emperor, but his Changchun residence belongs to the later Manchukuo period under Japanese control. That chronology is essential to understanding the site. Its rooms and exhibitions should be interpreted through occupation, political power and personal circumstances rather than marketed as a generic royal-luxury experience. Discuss the subject's suitability for children and leave time afterward to absorb it.",
      },
      {
        title: "Name the film venue and the experience you want",
        advice:
          "A historic studio museum can introduce production methods and the institution's history; it is not automatically access to current filming. A film-themed amusement visit serves a different purpose again. Clarify exhibition language, any guided interpretation and the actual areas open to visitors. A private driver or general guide does not establish backstage access, a filmmaker meeting or an English-language screening.",
      },
      {
        title: "Jingyuetan is a route choice, not one short viewpoint",
        advice:
          "A short forest walk, a longer lakeside route and a seasonal sporting activity need different time, equipment and physical ability. Choose a manageable section and actual transport plan before setting a return train. The landscape is not a guarantee of safe ice access, suitable swimming, open ski facilities or a particular snow condition. Follow current operator instructions and keep an alternative interest available.",
      },
      {
        title: "Changchun, Jilin city and Changbai Mountain need different plans",
        advice:
          "Jilin is both a province name and the name of a separate city. Changbai Mountain is another landscape with its own gateways, visitor areas, weather and accommodation. A provincial map or a rail connection does not establish a short excursion from the Changchun hotel. Choose each stop for a clear purpose, using the actual station and final road transfer before committing nights.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "changbai-mountain",
        advice:
          "Changbai Mountain adds volcanic scenery, forest time and a separate hotel stay. Choose the north or west side first, then compare the complete dated connection to the room. Give it useful full days with a poor-weather alternative; Changchun city sightseeing does not cover the mountain.",
      },
      {
        slug: "shenyang",
        advice:
          "Shenyang adds the early Qing court and a distinct imperial-tomb landscape, giving a useful historical contrast to Changchun's twentieth-century subjects. Check the actual train, station pair and both hotel transfers. Separate nights are worthwhile only when each city retains useful visiting time.",
      },
      {
        slug: "harbin",
        advice:
          "Harbin adds railway-city architecture and, on suitable dates, separately confirmed ice and snow attractions. Changchun's film and modern-history interests create a different chapter. Winter pacing and actual seasonal operation need their own review in each city rather than a generic snow itinerary.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing offers an imperial-capital context and an international gateway, with the Forbidden City and Great Wall requiring their own days. Explain the historical distinction between a Qing palace and Puyi's later Changchun residence. Compare the complete train or flight connection before setting the direction.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring through early autumn generally offers more scope for city and forest walks, with summer rain and temperature changes still possible. Winter is cold, and icy surfaces can change the suitability of outdoor routes. Choose reliable hotel heating, suitable footwear and a shorter outdoor schedule. A winter sports activity needs its own operating dates and conditions; it should not be inferred from a snowy city photograph. Museum access and a useful indoor alternative remain important in every season.",
    orientation:
      "Changchun's historical, film and landscape interests occupy different parts of a large city. The former palace museum, the film-studio heritage area, Nanhu and the southeastern Jingyue/Jingyuetan area should be grouped by actual geography and interest. Longjia Airport, Changchun station and Changchun West create different transfer patterns again. Use exact addresses and gateway names rather than treating a provincial capital as one compact museum district.",
    experiences: [
      "Understand Puyi's later court through the specific context of occupation and the Manchukuo period",
      "Choose a film-heritage visit with clear interpretation of the actual museum and its open areas",
      "Enjoy a manageable city-park or Jingyuetan route with a warm regional meal and time to rest",
    ],
    planningNotes: [
      "Distinguish Changchun station, Changchun West and Longjia Airport before arranging pickup",
      "Select the actual film venue and Jingyuetan route rather than booking from a broad theme label",
      "Treat Changbai Mountain as a separate journey with its own gateway, hotel and visiting days",
    ],
    arrival:
      "Changchun Longjia International Airport uses code CGQ. Changchun railway station and Changchun West are different rail gateways. Airport-area rail connections, when suitable for the actual schedule, still need station access and a final hotel transfer. Send the full ticket details, luggage and hotel address. Jilin city and the stations serving a Changbai Mountain trip are not alternate names for arrival at a Changchun city hotel.",
    gettingAround:
      "Road transfers connect the principal areas, while each institution or landscape has its own walking. The metro or light rail can work for some independent city time, with actual station access, weather and luggage considered. Agree pickup at the real permitted point, particularly in cold weather. Within Jingyuetan, distinguish the private road vehicle from any internal visitor transport; do not assume the driver can follow every forest or waterside path.",
    stayStrategy:
      "Use one base for a short city introduction. Three nights create room to separate the difficult historical subject from another museum, film or landscape interest. Review room quietness, bathroom, heating or cooling, breakfast, nearby meals and practical pickup. An outlying hotel is worthwhile when its setting and time there matter to the holiday; it is less persuasive when every day begins and ends with a long city transfer.",
    firstTimerNote:
      "Changchun makes the most sense when you can name the subject you want to understand. Modern history and cinema provide strong reasons for a stop, while Jingyuetan adds a different pace. Avoid adding the city only because it lies on a transport route to a mountain or another capital. One well-explained institution, a complementary visit and a comfortable meal can give a clearer impression than several rushed entrances.",
    faqs: [
      {
        question: "Is Changchun worth visiting in northeast China?",
        answer:
          "Yes for travelers interested in twentieth-century history, Chinese cinema or a deeper regional city journey. It is a specific choice rather than an essential stop for every first visit to China. Include it when those interests and the actual transport leave useful time, not just because it appears along the route.",
      },
      {
        question: "How many days do you need in Changchun?",
        answer:
          "One full day, usually with two nights, suits a selected historical and film-or-city introduction. Three nights provide two full days for a separate landscape, collection or slower museum day. One night depends on favorable travel times and requires a narrow focus.",
      },
      {
        question: "Is Puyi's palace in Changchun a Qing imperial palace?",
        answer:
          "The Changchun complex relates to Puyi's later Manchukuo court under Japanese control, after the Qing dynasty had ended. Although Puyi had been the last Qing emperor, this is a different historical setting from Beijing's Forbidden City or Shenyang's early Qing palace. That distinction should guide the interpretation.",
      },
      {
        question: "Can I visit a working film studio in Changchun?",
        answer:
          "A historic film-studio museum and a working production area are different visitor experiences. Confirm the actual venue and current public access. Museum admission does not automatically include filming, backstage areas, private screenings or meetings with film professionals.",
      },
      {
        question: "Where should I stay in Changchun?",
        answer:
          "Compare an actual central Renmin Square or Chongqing Road address, a Hongqi Street-area hotel for film interests, or a particular southern Nanhu property. Jingyue/Jingyuetan suits a more landscape-led stay. Choose by room comfort, dining and complete daily transfers rather than a broad district name alone.",
      },
      {
        question: "Can you visit Jingyuetan with limited walking?",
        answer:
          "A shorter selected visit may be possible, but the route, actual entrance, surfaces, transport and seating need review. A large forest-and-reservoir area does not have one uniform level of access. Snow and ice can change suitability, and an internal vehicle does not guarantee step-free paths everywhere.",
      },
      {
        question: "Are Changchun, Jilin and Changbai Mountain the same destination?",
        answer:
          "No. Changchun is the provincial capital; Jilin also names a separate city within Jilin Province. Changbai Mountain is another landscape with its own gateways and accommodation. Use the actual city, station and visitor area on every booking and allow separate useful visiting time.",
      },
      {
        question: "Which airport and railway stations serve Changchun?",
        answer:
          "Flights use Changchun Longjia International Airport, code CGQ. Changchun station and Changchun West are different railway stations. Match pickup to the full ticket and hotel address, including luggage, boarding and the final road transfer when comparing options.",
      },
    ],
    culturalStory: {
      title: "Two different ways to understand the twentieth century",
      paragraphs: [
        "Puyi's former court requires careful chronology. A visitor who knows only that he was China's last emperor can easily mistake the complex for another surviving Qing capital. The Changchun site belongs to a later period of occupation and the Manchukuo regime. Its buildings and exhibitions should be read through that setting, distinguishing displayed interpretation from what can be established about individual rooms and events. Leave space for questions rather than turning a difficult history into a royal-photo itinerary.",
        "Film heritage opens another conversation: how stories were made, which technologies and crafts supported production, and how an institution shaped Chinese cinema. Choose the actual museum offer and explain a few examples in the visitors' language. That does not require a promised meeting with a filmmaker or access to a working set. Together, the historical and cinema subjects can create a coherent city stay while retaining their different periods and purposes.",
      ],
    },
    foodStory: {
      title: "Choose a warming meal around the group's tastes",
      paragraphs: [
        "Changchun is a useful place to enjoy northeastern dumplings, stews and dishes using suancai, fermented cabbage. Ask about the filling, broth and portion size before ordering. A few selected dishes with a seated break often work better after a museum than an ambitious tasting circuit. Regional identity does not require everyone to eat the same meat or strongly flavored specialty; make the meal informative and comfortable.",
        "Vegetable-looking dishes may contain meat stock, and dumpling fillings can include seafood or pork. Discuss wheat, soy, sesame, sauces and shared equipment where relevant to allergies or dietary restrictions. The guide can help explain choices, but the actual kitchen needs to understand strict requirements. In winter, convenient warm dining and a clear pickup point are part of the experience rather than details to solve after the group is already cold.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the actual city base",
        description:
          "Transfer from Longjia Airport or the named railway station. Keep dinner convenient and add only a short neighborhood introduction that fits the actual arrival, daylight and weather.",
      },
      {
        day: "Full day 1",
        title: "Modern history with time for explanation",
        description:
          "Build the day around the former palace museum, its current visitor access and the group's interest. Add a seated lunch and one selected complementary city or film subject if the time and attention allow, rather than racing through several institutions.",
      },
      {
        day: "Additional full day",
        title: "Film heritage, a collection or a landscape route",
        description:
          "Choose a deeper film-heritage or provincial collection visit, or a named Jingyuetan route matched to the season and walking ability. A three-night stay normally provides this second full day. Do not promise all three subjects or unconfirmed seasonal activities.",
      },
      {
        day: "Departure",
        title: "Continue with the exact northeastern connection",
        description:
          "Allow the complete airport or station transfer before a separately planned Shenyang, Harbin or Beijing stay. A Changbai Mountain extension needs its own gateway and useful visiting days. This outline is illustrative, not a published package or a promise that every option is included.",
      },
    ],
  },
};
