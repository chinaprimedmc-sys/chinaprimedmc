import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/handan.svg",
  alt: "Original Handan planning schematic separating a city museum introduction, Xiangtangshan grottoes, Guangfu ancient town and a distinct Wahuang Palace excursion; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const handanGuide: ExpandedDestination = {
  id: "handan",
  name: "Handan",
  region: "north",
  kicker: "Give northern China's less familiar art a clear place in the journey",
  description:
    "Explore Handan through Zhao history, Xiangtangshan Buddhist sculpture and a carefully chosen Guangfu or Wahuang Palace day, with practical hotel and rail advice.",
  stay: "2–3 nights for selected cultural subjects; longer for another outlying day",
  bestFor:
    "Buddhist sculpture, early Chinese history and specialist northern-China cultural routes",
  interests: ["heritage", "city", "food"],
  relatedDestinationIds: ["baoding", "shijiazhuang", "taiyuan", "beijing"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Handan Travel Guide: Xiangtangshan, Guangfu & Hotels",
    seoTitle: "Handan Guide: Grottoes, Guangfu & Hotels",
    seoDescription:
      "Plan Handan with Xiangtangshan grottoes, Zhao history, Guangfu ancient town and a separate Wahuang Palace day. Compare hotels, walking and rail arrivals.",
    answer:
      "Handan (邯郸) is a city in southern Hebei, with a much wider cultural geography than its modern center. Its strongest reasons to visit include the history of Zhao, a Warring States kingdom; the sixth-century Buddhist sculpture of Xiangtangshan; Guangfu's walled-town setting; and the separate mountain-temple visit to Wahuang Palace in She County. Choose two nights for one substantial outlying subject and a selective city introduction, or three for two different full days when transport fits. These places are not neighboring attractions within a walkable old quarter. Handan is most rewarding when a guide helps you understand a chosen historical or artistic subject, rather than when every famous name is compressed into one driving circuit.",
    stayAnswer:
      "Two nights can support a focused Xiangtangshan day with an arrival or departure city interest only if the actual hours permit it. Three nights give two full days: for example, a sculpture-led day and a separate Guangfu or collection-led day. Wahuang Palace is another outlying excursion; give it a proper day rather than attach it to both grotto groups and a departure train. Four nights may suit travelers with a defined interest in several distinct subjects. A one-night stop is more selective and should be described honestly.",
    hotelAnswer:
      "For a short visit, compare a specific central or eastern Handan hotel with good room comfort, meals and workable pickup. A Handan East station-oriented property serves a transport purpose; it is not automatically convenient for every cultural day. Staying in Guangfu can be worthwhile when the town itself deserves evening and morning time, but confirm the actual room, street noise, bathroom, temperature control and luggage access. A She County stay belongs to a separately planned western chapter. Choose by the whole route and sleep quality, not by an ancient-town or boutique label.",
    sightseeingQuestion: "Should I prioritize Xiangtangshan, Guangfu or Wahuang Palace?",
    sightseeingAnswer:
      "Choose Xiangtangshan for Buddhist sculpture, cave architecture and an evidence-based discussion of damaged and dispersed heritage. Choose Guangfu for a specific walled-town route and its associations with tai chi history, distinguishing public sightseeing from a genuinely arranged lesson. Choose Wahuang Palace for its mountain setting, layered religious buildings and Nüwa traditions, with the climb assessed. A Handan Museum visit can help frame regional history when the relevant galleries are open. These subjects complement each other, but not every pairing fits one day. Start with what you want to understand, then give the road and walking their real time.",
    visitorResources: [
      {
        label: "Handan municipal government",
        href: "https://www.handan.gov.cn/",
        scope:
          "Official municipal context and public notices, mainly in Chinese. Check the actual museum, grotto group, Guangfu sites and Wahuang Palace for current visitor arrangements. The municipal area's broad tourism description does not establish a compact day route or admission to every cave and interior.",
      },
      {
        label: "Hebei provincial government",
        href: "https://www.hebei.gov.cn/",
        scope:
          "Provincial background and public-service information. Use the relevant institution for current collections, conservation restrictions and visitor routes. A historical designation or regional overview does not confirm that a particular object, stair route, performance or host is available on your dates.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated services and exact station names. Handan East / 邯郸东 and Handan / 邯郸 are different stations. Include both final road transfers and usable arrival time; a city-name train result does not specify the pickup point or guarantee a same-day cultural excursion.",
      },
    ],
    serviceScope:
      "A proposal should identify the selected grotto group or groups, actual museum galleries or town sites, hotel and room, full transfers, guide language, admissions and meals. Specialist sculpture or archaeology interpretation needs a real available provider and agreed subject. State where access is exterior-only or subject to conservation. A tai chi lesson requires a named willing teacher, appropriate level, language support and confirmed arrangements. Private halls, research stores, archaeological working areas, religious ceremonies and photography permissions are not included simply because a visit is privately guided.",
    routeAdvice:
      "Handan can add a distinct sculpture-and-history chapter to a northern-China cultural journey. Shijiazhuang and Zhengding provide another collection and architecture pairing; Taiyuan offers different Shanxi collections and Jinci; Beijing adds imperial-capital context and broader art collections. Compare actual dated rail or road connections and give each place useful nights. There is no matching published Handan tour recommended here. Share dates, gateways, art or history priorities, walking limits and room expectations for a tailored route; an existing Beijing itinerary does not automatically include Handan or its outlying sites.",
    practicalPlanning: {
      timing:
        "Anchor the trip on the main cultural subject, checking actual entry, open areas and any museum reservation before fixing the sequence. A grotto day needs the complete road, approach, stairs, observation and lunch. Guangfu and She County have different directions and visiting rhythms; do not join them merely because both are in the wider Handan area. Keep an uncertain arrival modest and leave a realistic margin for the actual departure station. Closed galleries or restricted caves should have an alternative that still fits the reason for travel.",
      walking:
        "Assess each selected Xiangtangshan group separately: approach paths, steps, cave thresholds, standing and viewing positions can differ. Wahuang Palace is a mountain-site decision with a different stair and height exposure profile. Any operating transport option must be checked against the final walk; it does not establish step-free access. Guangfu lanes, wall access and historic premises have their own surfaces and thresholds. Agree toilets, seating, pickup, a shorter useful route and current weather before choosing the day for someone with mobility needs.",
      cost: "Compare the exact room, breakfasts, full vehicle days, guide language and specialist content, named admissions and reservation support. One grotto group and a fuller comparative visit have different scopes. Guangfu paid sites, a genuine lesson and a Wahuang excursion should be defined separately. A premium should deliver better explanation, useful timing and comfortable logistics, not guaranteed private caves, access to stored objects, a master teacher or an empty ancient town.",
    },
    attractions: [
      "North Xiangtangshan grottoes, with the current approach and accessible caves specified",
      "South Xiangtangshan as a distinct group when it adds a useful comparison",
      "Handan Museum through selected currently open galleries relevant to the chosen subject",
      "A selected Zhao-history or archaeological-landscape interest, with surviving evidence and modern interpretation distinguished",
      "Guangfu ancient town in Yongnian District through a coherent public and selected paid-site route",
      "Wahuang Palace / Wahuanggong in She County as a separate mountain-temple excursion",
      "A genuinely arranged tai chi introduction only when teacher, content and suitability are confirmed",
    ],
    stays: [
      {
        label: "1 night / one selective subject",
        advice:
          "Choose a substantial visit only when the real arrival, entry and onward journey allow enough time. A late check-in followed by an early train is a transport stop, not an in-depth cultural stay. Avoid making the main subject depend on reaching a cave or museum just before closing.",
      },
      {
        label: "2 nights / a focused grotto or regional-history chapter",
        advice:
          "Protect one full day for the principal subject, interpretation, a proper lunch and a comfortable return. A city collection can complement it only when the actual open hours fit. Do not use the duration to imply that every outlying town and mountain site is included.",
      },
      {
        label: "3 nights / two different full days",
        advice:
          "Combine a well-paced sculpture day with a distinct town or collection interest. If Wahuang is the second priority, give it its own route and physical assessment. Add a fourth night only when another substantial subject or slower pace earns the extra time.",
      },
    ],
    hotelAreas: [
      {
        name: "Central or eastern Handan / practical cultural base",
        advice:
          "Compare the actual room's quiet, bed, bathroom, lift, heating or cooling, breakfast and pickup. Map the chosen museum and outlying road days rather than assume one district name means convenience. A restful modern room can serve an art-led journey better than decorative styling without dependable facilities.",
      },
      {
        name: "Handan East station area / a deliberate connection choice",
        advice:
          "Useful when the exact train and room make it so, with dinner and the rest of the route checked. Proximity to high-speed rail does not shorten every outlying cultural excursion. Compare both the station transfer and the full sightseeing day before deciding.",
      },
      {
        name: "Guangfu / a town-led overnight",
        advice:
          "Choose it when the public town setting, a selected site or a confirmed lesson deserves evening or morning time. Establish the precise property, street activity, bathroom, stairs, luggage and vehicle approach. A historic-town address does not prove that the accommodation itself is an old building or that it offers luxury service.",
      },
      {
        name: "She County / a separate western chapter",
        advice:
          "Consider an actual property when Wahuang and other researched local interests justify staying rather than returning. Check facilities, meals and the complete onward route. It is not interchangeable with a city-center room solely because both listings use the Handan regional name.",
      },
    ],
    tradeoffs: [
      {
        title: "North and South Xiangtangshan are distinct grotto groups",
        advice:
          "The shared name does not mean one entrance, identical access or interchangeable sculptures. Choose the actual group, current cave route, road sequence and interpretive purpose. A comparative day can be worthwhile for a serious art interest, but should explain the difference rather than simply double the attraction count.",
      },
      {
        title: "Missing sculpture is part of the story",
        advice:
          "Xiangtangshan is associated particularly with Northern Qi Buddhist art in the sixth century, alongside later layers and changes. Damage and the removal of sculpture affect what survives on site. Distinguish original carving, repair, replica, interpretation and objects now elsewhere. Do not promise that a head seen in an overseas museum photograph remains in its original cave or that a digital reconstruction is an intact ancient interior.",
      },
      {
        title: "Zhao history is not an intact ancient-capital set",
        advice:
          "Handan's role as Zhao's capital is a reason for careful historical explanation. Archaeological areas, museum objects, later monuments and modern presentations provide different evidence. Identify what visitors can actually see and how it relates to the period. A famous idiom or popular story should not be treated as proof of a surviving palace or precise historical event at every named location.",
      },
      {
        title: "Guangfu town and a tai chi lesson are different experiences",
        advice:
          "The town's associations with Yang and Wu Yuxiang / Wu-Hao tai chi traditions can add context, but public sightseeing is not a class or a private teaching invitation. A lesson needs an actual teacher, content, duration, language support and a level suitable for the guest. Clarify the lineage being discussed rather than treat similarly rendered Wu traditions as identical.",
      },
      {
        title: "Wahuang's sacred tradition and its surviving fabric need separate explanation",
        advice:
          "The mountain complex in She County is associated with Nüwa. Religious tradition, early cliff inscriptions, later buildings, repair and present visitor presentation are different historical layers. A guide should explain each with appropriate evidence rather than present myth as a documented founder biography or assign one date to the whole site. The actual climb deserves its own assessment.",
      },
      {
        title: "A city base cannot remove every outlying transfer",
        advice:
          "Xiangtangshan, Guangfu and Wahuang are distributed across the wider municipal area. One well-chosen hotel can simplify a short stay, but multiple distant interests still require substantial road time. Compare a selective city-based plan with a purposeful additional overnight instead of treating the entire region as a compact old town.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "baoding",
        advice:
          "Baoding offers a different provincial-government, garden and funerary-history chapter farther north in Hebei. Choose its city sites and one outlying subject with real local nights; a train connection does not make Mancheng or the Western Qing Tombs a short add-on to a Handan grotto day. Give each archaeological or artistic subject its own explanation.",
      },
      {
        slug: "shijiazhuang",
        advice:
          "Shijiazhuang adds Hebei Museum and a separately planned Zhengding architecture day. The collections and Longxing Temple can complement a Handan sculpture interest without repeating the same subject. Use dated services, both final transfers and useful nights rather than try to cover southern Hebei from one distant hotel.",
      },
      {
        slug: "taiyuan",
        advice:
          "Taiyuan introduces Shanxi Museum and Jinci's distinct architecture and sculpture. Compare the full rail or road connection, not just proximity across a provincial boundary. Give each main site proper time, and distinguish Hebei's Handan from the different historical and architectural contexts in Shanxi.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing provides a different imperial-capital and collection chapter before or after Handan. Confirm the actual operating train, station and both hotel transfers. A rail connection can support a wider cultural journey; it does not mean an existing Beijing tour includes Xiangtangshan, Guangfu or a Handan overnight.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for a combination of city collections, grottoes and town walking, with the actual dates and weather still important. Summer heat, rain and exposed approaches can affect effort; winter needs a separate review of cold, ice and mountain-site operation. Museum access and conservation closures do not follow a simple weather calendar. Choose the principal subject, then plan the season and an appropriate alternative rather than promise empty caves or comfortable outdoor conditions throughout the year.",
    orientation:
      "Handan lies in southern Hebei in northern China. The central city, Xiangtangshan in the Fengfeng area, Guangfu in Yongnian District and Wahuang Palace in She County are distinct road and visitor decisions. Handan East and Handan station are different rail gateways. The city is not one preserved ancient quarter, and Guangfu here is not a reference to Cantonese culture or a Guangzhou neighborhood. Use the full Chinese site and property names when comparing routes and bookings.",
    experiences: [
      "Understand a selected Xiangtangshan grotto group through its surviving art and missing fragments",
      "Connect Zhao history to actual collections and archaeological interpretation",
      "Choose Guangfu or Wahuang for a distinct town or mountain-temple day",
    ],
    planningNotes: [
      "Name the grotto group and current accessible route before choosing the day",
      "Give Guangfu and She County their own road and walking assessment",
      "Compare the actual room, rail station and complete transfers rather than a municipal label",
    ],
    arrival:
      "Choose a dated service to Handan East / 邯郸东 or Handan / 邯郸 and include the transfer to the actual hotel. They are not interchangeable pickup points. Any airport proposal needs a verified operating flight and full final journey rather than an assumption based on an airport name. A convenient train can make a cultural chapter possible, but essential galleries or grotto access should not depend on an uncertain same-day arrival window. Protect the return margin before an onward fixed departure.",
    gettingAround:
      "Use a coherent road day to each selected outlying subject, with entrances, current visitor transport, steps, toilets, lunch and pickup identified. A private car does not reach every cave threshold, wall walk or mountain hall. Keep the guide's subject and actual available interpretation clear, especially when English-language specialist material is important. Photography and conservation rules apply independently of private guiding. Change the sequence when site access or weather requires it rather than rush another distant attraction.",
    stayStrategy:
      "For two or three nights, a dependable city room can support a focused plan with fewer luggage moves. A Guangfu or She County night needs its own experiential or route benefit. Assess noise, bathroom, temperature control, bed, lift, meals and the exact vehicle approach. High-end value here lies in thoughtful selection, specialist explanation where genuinely available and time to look; it should not be expressed as an unverified promise of exclusive access or a luxury heritage retreat.",
    firstTimerNote:
      "Ask which historical or artistic question the Handan stop answers, which grotto group or town route is included and how much time is spent outside the car. Then compare the full rail and hotel sequence. If the only answer is a long list of idioms, temples and ancient-town names, the trip needs a clearer focus. One well-explained site can make this less familiar city worthwhile without pretending every regional highlight is a short local walk.",
    faqs: [
      {
        question: "Is Handan worth visiting on a China cultural trip?",
        answer:
          "It can be particularly rewarding for an interest in Xiangtangshan Buddhist sculpture, Zhao history or a distinct Guangfu or Wahuang visit. Choose a clear subject and enough road and interpretation time. It is a weaker fit if you expect a compact preserved old town with every major site within walking distance.",
      },
      {
        question: "How many nights should I stay in Handan?",
        answer:
          "Two nights give one focused full day; three allow two different days. A fourth can support another substantial outlying subject or slower pace. One night is selective. Count actual arrival, open hours and departure rather than assume each hotel night supplies another complete cultural day.",
      },
      {
        question: "Are North and South Xiangtangshan the same visit?",
        answer:
          "They are distinct grotto groups with separate approaches and visitor decisions. Name the group or groups, current accessible caves and full road sequence in the proposal. A shared name does not mean one entrance, the same sculptures or identical walking demands.",
      },
      {
        question: "Why is Xiangtangshan important for Buddhist art?",
        answer:
          "It is particularly associated with Northern Qi Buddhist art of the sixth century, with later layers and a history of damage and sculpture dispersal. A thoughtful visit explains surviving carving and what is missing. Do not expect every object seen in an overseas collection or reconstruction to be present in its original cave.",
      },
      {
        question: "Can I combine Xiangtangshan, Guangfu and Wahuang Palace in one day?",
        answer:
          "Do not assume a worthwhile visit to all three fits. They are separate outlying places with real roads, walking and open hours. Choose the main subject and a coherent day, giving Wahuang's mountain setting its own assessment. A long driving circuit is not the same as useful time at each site.",
      },
      {
        question: "Can I learn tai chi in Guangfu?",
        answer:
          "A lesson can be researched separately from public town sightseeing. Confirm a real willing teacher, the tradition, level, content, duration and language support. The town's historical associations do not guarantee an available master, private teaching or a class included with ordinary admission.",
      },
      {
        question: "Is Wahuang Palace suitable for limited mobility?",
        answer:
          "Assess the actual current route, steps, slope, height exposure and any operating transport option with the guest's needs. A vehicle or cableway reference does not establish step-free access to every hall. Agree a worthwhile shorter alternative before committing to the excursion.",
      },
      {
        question: "Which Handan railway station should I use?",
        answer:
          "Choose the actual dated service and route. Handan East / 邯郸东 and Handan / 邯郸 are different stations, with different final road transfers. Give the driver the ticketed station and hotel address. The city name alone does not specify the pickup point or available sightseeing time.",
      },
    ],
    culturalStory: {
      title: "Connect evidence, loss and living tradition without flattening the differences",
      paragraphs: [
        "Handan offers several historical scales rather than one continuous ancient-city scene. Zhao history asks how archaeology and texts help reconstruct a political center. Xiangtangshan asks how surviving cave architecture and sculpture relate to damage, removal and later interpretation. Guangfu's town setting and tai chi associations raise another set of questions about place and transmission. A good guide makes these differences visible and avoids using the word ancient as a substitute for explaining what remains.",
        "Wahuang's Nüwa traditions likewise deserve respectful interpretation alongside the actual layers of inscriptions, buildings and repair. Myth, material evidence and current religious practice need not be treated as the same kind of claim. Ask before photographing worshippers or entering restricted areas. A private lesson, specialist conversation or conservation appointment requires a genuinely available participant and separate arrangement. The quality of the visit comes from accurate explanation and time to observe, not manufactured privileged access.",
      ],
    },
    foodStory: {
      title: "Use regional food to support a well-paced cultural day",
      paragraphs: [
        "A city dinner and an outlying-site lunch have different practical needs. Arrange a sensible meal window so a grotto day is not followed by an uncertain late lunch. Wu'an-style stretched noodles can be a useful local subject where genuinely offered; ask how the kitchen prepares the noodles, broth and accompaniments rather than treat one name as a fixed recipe. A few suitable dishes with vegetables and a warm staple can be more enjoyable than another compulsory regional specialty detour.",
        "Clarify wheat, meat stock, egg, dairy, nuts, sauces and shared equipment where dietary needs matter. A vegetable topping does not make a noodle broth vegetarian, and a regional label does not establish halal or allergy suitability. Serious requirements need confirmed kitchen capacity and an alternative before an outlying day. A cooking lesson or hosted meal is a separate service with a real provider, not an assumed addition to a historic-town visit.",
      ],
    },
    itinerary: [
      {
        day: "Arrival / a modest city introduction when actual hours allow",
        title: "Reach the room and establish the historical question",
        description:
          "Transfer from the ticketed station to the booked hotel, with a meal and rest. A selected museum gallery can fit only when the actual arrival and entry arrangement support it. Do not make a key object or distant cave depend on a tight arrival window.",
      },
      {
        day: "Full day 1 / the selected Xiangtangshan route",
        title: "Give the sculpture time and interpretation",
        description:
          "Visit the named grotto group or researched comparison, allowing the full road, approach, steps, observation and lunch. Explain surviving and missing material without promising closed caves. A shorter worthwhile route should remain possible if conditions or guest needs change.",
      },
      {
        day: "Full day 2 / for a three-night stay",
        title: "Choose a distinct town or mountain-temple subject",
        description:
          "Select Guangfu with a coherent town route, or Wahuang with its own road and physical assessment. A separately confirmed lesson can fit only when actually arranged. Do not require both places and a departure train simply to lengthen the list.",
      },
      {
        day: "Departure / the actual station or onward chapter",
        title: "Protect the whole connection",
        description:
          "Allow the real transfer or continue to a separately planned Shijiazhuang, Taiyuan or Beijing stay. Another full outlying day may need another night. This outline is illustrative, not a published package or a guarantee of objects, interiors, teachers, rooms or current site operation.",
      },
    ],
  },
};
