import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/kashgar.svg",
  alt: "Kashgar planning schematic distinguishing an old-city stay, a confirmed craft or food interest and a separately planned Pamir extension; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const kashgarGuide: ExpandedDestination = {
  id: "kashgar",
  name: "Kashgar",
  region: "northwest",
  kicker: "An oasis city worth understanding before heading into the mountains",
  description:
    "Plan Kashgar's old-city walks, Uyghur food and craft interests with realistic hotel and transport advice, keeping a Pamir or Tashkurgan extension separate from the city stay.",
  stay: "3 nights for the city; more for a separate mountain route",
  bestFor: "Oasis-city history, food, craft and thoughtful Silk Road travel",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: ["kuqa", "turpan", "yining", "dunhuang", "xian", "tashkurgan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Kashgar Travel Guide: Old City, Food & Where to Stay",
    seoTitle: "Kashgar Travel Guide: Old City, Food & Stays",
    seoDescription:
      "Plan a Kashgar city stay with old-town hotel advice, Uyghur food, craft visits and station transfers, keeping Pamir and Tashkurgan travel separate.",
    answer:
      "Kashgar (喀什), also written Kashi, is an oasis city in western Xinjiang and the urban center of a much larger prefecture. Its strongest city visit combines selected old-city streets, Uyghur food, architecture and a well-explained craft or historical subject. The present old city includes substantial rebuilding and visitor-facing areas; it should not be described as an entirely unchanged medieval settlement. Kashgar is also a gateway for some mountain routes, but a city stay does not include Tashkurgan, every Pamir viewpoint or a border crossing. Give the city its own time and confirm the wider route separately.",
    stayAnswer:
      "Three nights give two full days for an old-city introduction, a different cultural or craft subject and unhurried meals. Two nights can provide one full city day when the flights or trains fit. Four nights may suit a deeper interest or a slower pace, but should have actual content rather than repeated shopping. A Pamir or Tashkurgan chapter needs its own route, nights, altitude and current access review. Do not treat a long mountain road day as a small extra stop after a city walk.",
    hotelAnswer:
      "Compare a named old-city or edge-of-core property with a modern Kashgar city hotel. A smaller heritage-style stay can improve evening access, but the actual room may involve stairs, noise or a final luggage approach on foot. A modern property may offer easier pickup and more predictable facilities, with a different journey to dinner and old-city walks. Confirm the booked room and guest-registration arrangements for the actual travelers. A romantic courtyard photograph is not enough to establish sleep, bathroom comfort, access or a working reservation.",
    sightseeingQuestion:
      "Should you focus on Kashgar's old city, crafts, religious heritage or a mountain extension?",
    sightseeingAnswer:
      "Start with a manageable old-city route and a properly explained meal to understand the urban setting. Add a real craft topic or a selected heritage site according to interest and confirmed access. A mosque's religious role, a mausoleum, a commercial cultural attraction and a studio provide different kinds of visits. The mountains are a separate decision with longer transport, higher elevations and potentially route-specific conditions. Choose one strong city day and a different second subject before adding the wider landscape, rather than presenting every recognizable Kashgar image as one compact tour.",
    visitorResources: [
      {
        label: "Kashgar prefecture government",
        href: "https://www.kashi.gov.cn/",
        scope:
          "Prefecture-level public information and notices, mainly in Chinese. Kashgar prefecture is wider than the city. Confirm current site access, local operating arrangements and any route-specific requirements through the responsible authority or operator; a regional reference does not establish a private host, mosque interior visit or border-route approval.",
      },
      {
        label: "Xinjiang regional government",
        href: "https://www.xinjiang.gov.cn/",
        scope:
          "Regional public information and official notices. Use current guidance applicable to the actual traveler and itinerary for local arrangements. This background reference is not confirmation that every scenic road, hotel or border-area route is available on the intended date.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Compare the actual ticketed service, station, duration and local transfer. A rail line linking Xinjiang cities does not mean every journey is a short high-speed connection, and a station arrival is not an old-city hotel arrival.",
      },
    ],
    serviceScope:
      "A tailored proposal can specify the hotel and room, exact arrival, selected city route, guiding language, admissions and meal basis. Name a craft session or hosted encounter only when the provider and format are confirmed. For foreign travelers, check the actual accommodation and each intended excursion before treating the itinerary as ready to book. A Pamir, Tashkurgan or border-area extension requires a separate current route and traveler review; a private guide or vehicle does not itself provide permission or special access. Identify the documents, responsible party and fallback arrangement where a particular route needs additional confirmation.",
    routeAdvice:
      "Kashgar can anchor a southern Xinjiang chapter, while Yining offers a different northern Xinjiang city-and-valley interest. Dunhuang and Xi'an add separate historical contexts farther east. These are substantial route choices, not nearby day excursions or assumed daily direct flights. No matching published Kashgar product is recommended here; the existing Ningxia journey does not include Xinjiang. Use the illustrative three-night city framework to request a tailored trip, with a mountain extension separately scoped rather than hidden within an old-city sightseeing day.",
    practicalPlanning: {
      timing:
        "Confirm whether meeting times use Beijing time, UTC+8, and repeat the convention in writing. Some local conversations may use a different time reference; ticketed transport and official arrangements need particular care. Leave room for the day's actual opening, prayer and meal patterns. A fixed departure should not depend on an old market timetable or an unconfirmed host. Keep the first evening simple after a long flight or train, and do not place the essential appointment on an uncertain arrival connection.",
      walking:
        "Old-city lanes, steps, thresholds, pedestrian areas and extended standing create different demands from a short distance on a map. Agree a manageable route with seating, toilets, shade and a meeting point reachable by the vehicle. Ask about the room's stairs and luggage approach. A public lane does not grant access inside a home or workshop. Any higher mountain chapter needs a separate elevation and health discussion; comfort in Kashgar city is not proof of suitability for a high pass or higher overnight.",
      cost: "Compare the actual room, complete transfers, guiding language, admissions and meal basis. A retail demonstration, specialist explanation and participatory class have different inclusions. A mountain extension adds vehicle days, accommodation and other route-specific arrangements, not simply an extra attraction ticket. Keep purchases outside the experience fee unless a particular item is specified. Provenance, making method and value need their own evidence rather than a claim that everything sold in the old city was made there.",
    },
    attractions: [
      "A selected Kashgar Old City route with rebuilding and present-day use honestly explained",
      "Id Kah Mosque and its surroundings, with current visitor access and practices confirmed",
      "A defined craft topic such as woodwork, metalwork or instrument-making with an actual provider",
      "Abakh Khoja Mausoleum / the Xiangfei visitor area as a separate historical and present-day interpretation choice",
      "A currently operating market or food route, selected by its actual location and purpose",
      "A Pamir or Tashkurgan extension only as a separately reviewed mountain itinerary",
    ],
    stays: [
      {
        label: "2 nights: one focused city day",
        advice:
          "Choose a manageable old-city introduction, a meal and one complementary interest. This format depends on convenient arrival and departure. It should not promise a comprehensive cultural program, a distant market and a full mountain excursion on top of the city walk.",
      },
      {
        label: "3 nights: two distinct city subjects",
        advice:
          "Use one full day for the old-city setting and food, then another for a defined craft or heritage interest with time to ask questions. Keep the evenings useful and the room comfortable. A second full day should deepen the visit rather than repeat a series of shops.",
      },
      {
        label: "A longer stay: separately justified interests or a mountain chapter",
        advice:
          "Add city time for a real host or slower pace, or build a separate Pamir route with its own nights and access review. Choose the actual roads and sleeping elevations before judging duration. A map label for a lake, plateau or border does not establish an available visit for every traveler.",
      },
    ],
    hotelAreas: [
      {
        name: "Old-city or edge-of-core property / walking-led stay",
        advice:
          "Check room noise, stairs, bathroom, climate control and the exact pickup point. A small courtyard property can offer atmosphere without every room having the same light, privacy or access. Confirm the actual guests and reservation rather than relying on an old review or an informal assurance.",
      },
      {
        name: "Modern Kashgar city hotel / comfort and pickup",
        advice:
          "Consider when sleep, bathroom facilities, breakfast and easy vehicle access are priorities. Map the complete trip to old-city walks and independent dinner. A city hotel can support a culturally rich visit without being described as a historic residence. Confirm the quoted room and guest arrangements for the intended dates.",
      },
      {
        name: "A mountain-route overnight / a different booking decision",
        advice:
          "Any Tashkurgan or other higher stay needs its own property, sleeping elevation, heating, bathroom, meal and route-access review. It is not another hotel neighborhood of Kashgar city. Establish whether the extension is suitable and currently feasible before comparing the accommodation as a scenic upgrade.",
      },
    ],
    tradeoffs: [
      {
        title: "The old city can be rewarding without being described as unchanged",
        advice:
          "Kashgar's present visitor landscape includes rebuilding, adaptation, commerce and residential life. Explain those layers rather than presenting every facade as untouched evidence of a medieval Silk Road town. A thoughtful walk can connect building form, streets and contemporary use. Stay on public or invited routes, respect residents and agree photographs; an attractive doorway does not constitute permission to enter or an arranged home visit.",
      },
      {
        title: "Religious heritage and commercial presentation are different settings",
        advice:
          "Id Kah is a religious site with current access and visitor practices to confirm. A mausoleum and a wider attraction marketed around a historical figure require their own explanation, separating documented history, association and contemporary visitor presentation. Do not promise worship observation, interior photography or a cultural performance without a specific arrangement. A building's visual appeal does not remove its religious or personal significance.",
      },
      {
        title: "Do not build the trip around an old Sunday-market description",
        advice:
          "A city bazaar, a shop street and a livestock market are different visits. Locations, days and visitor access can change, and older travel accounts may describe arrangements that no longer apply. Confirm a current venue and purpose before scheduling it. A respectful food or craft route can be more useful than a long drive for a market that is not operating as expected; keep a substantive alternative.",
      },
      {
        title: "Craft learning should not depend on a purchase",
        advice:
          "A real making topic needs a provider who can explain the process, language and visible work. A shop display, short demonstration and private lesson are not equivalent. Textiles or carpets sold in Kashgar may come from elsewhere, and an item described as silk, handmade or antique needs its own evidence. Agree whether sales form part of an appointment and let the visit remain worthwhile if you buy nothing.",
      },
      {
        title: "The Pamirs are a separate altitude and access decision",
        advice:
          "A road toward Tashkurgan can involve substantially higher elevations and lengthy travel beyond the city. The exact route, any stopping points, permissions, conditions and overnight need current review for the actual traveler. Reaching one lake or town does not establish access onward to a border or a crossing into another country. Do not guarantee a high plateau visit from a generic map or treat a city hotel night as acclimatization sufficient for every guest.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "kuqa",
        advice:
          "Kuqa adds ancient Kucha and Buddhist cave-art interests to a longer oasis route. Kizil lies in Baicheng County and needs its own public visitor arrangement and complete road. Give Kuqa useful nights and compare dated transport rather than treat the region as a sequence of effortless one-night stops.",
      },
      {
        slug: "tashkurgan",
        advice:
          "Tashkurgan / Taxkorgan adds a separate mountain-road chapter with Stone City, Alar grassland and individually selected lake stops. Allocate full road days and suitable local nights, reviewing the actual passport, roads, documents and sleeping profile. It does not imply Panlong access, a Khunjerab visit or an international border crossing, and it is not included in a Kashgar city stay by default.",
      },
      {
        slug: "turpan",
        advice:
          "Turpan adds a different oasis history through settlement ruins, irrigation and selected Buddhist-art interests. Compare the full flight, rail or multi-stop route and useful nights; it is far from Kashgar, not a local excursion. Heat and exposed walking require their own plan.",
      },
      {
        slug: "yining",
        advice:
          "Yining adds a different northern Xinjiang urban and valley chapter. Kashgar's oasis-city setting and Ili's landscapes can contrast well, but require real transport, separate nights and a route that does not consume every day in transit. Confirm actual services rather than assuming a short direct connection across Xinjiang.",
      },
      {
        slug: "dunhuang",
        advice:
          "Dunhuang adds Buddhist cave art and a different oasis-landscape context in Gansu. Mogao's booking and language arrangements are separate from Kashgar's city visits. Build the wider Silk Road route through actual flights or rail and give each destination usable days; it is not a nearby extension.",
      },
      {
        slug: "xian",
        advice:
          "Xi'an can provide an imperial-capital and eastern Silk Road chapter, with its own substantial sightseeing. Compare actual flights or other transport and both local transfers. A thematic historical connection does not establish an easy day excursion or a guaranteed daily direct service.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn are useful starting points for a city-led visit, allowing for variable temperatures, wind and dust. Summer requires shade, water and a less exposed midday schedule; winter can be cold and needs actual hotel heating and current site arrangements checked. Mountain routes have different seasons and conditions from the city. A pleasant urban day does not establish a clear pass or accessible highland stop. Choose dates around the whole itinerary rather than guaranteeing a market, festival, mountain view or seasonal photograph.",
    orientation:
      "Kashgar city, also called Kashi, sits within a much wider Kashgar prefecture. The old-city areas, airport, railway station and outlying heritage sites are separate locations. Tashkurgan lies on a different mountain route, not at the edge of an urban walking circuit. Use the full Chinese and local venue names in the plan, and confirm the convention for every meeting time. Ticketed transport should not be matched to an informal time reference without clarification.",
    experiences: [
      "Read selected old-city streets through architecture, rebuilding and present-day life with thoughtful interpretation",
      "Enjoy Uyghur food and a real craft interest with the actual provider, ingredients and sales expectations clear",
      "Give a separate mountain extension its own route, access, elevation and overnight review rather than squeezing it into the city stay",
    ],
    planningNotes: [
      "Confirm actual hotels, guest arrangements, sites and any route-specific requirements before finalizing the trip",
      "Write meeting times explicitly and distinguish city bazaars from old livestock-market descriptions",
      "Respect religious, residential and working spaces; public access is not a private-host appointment",
    ],
    arrival:
      "Kashgar Airport uses code KHG; the railway station has a separate city transfer. Confirm actual flights or trains rather than assuming daily direct services from every Silk Road destination. Include baggage, local formalities and the full hotel approach, and send the confirmed ticket and traveler details needed for the booked services. Keep essential reservations away from uncertain arrival timing. A long rail journey and a short flight can produce very different usable first days even when both are described simply as arriving in Kashgar.",
    gettingAround:
      "Combine selected walks with planned transfers between separate city sites. Pedestrian lanes may require a different pickup from the entrance, and local procedures can affect usable time. Agree the meeting point, comfortable walking length, seated breaks and toilets. For any mountain outing, use a separate road plan and current route confirmation; private transport does not remove closures, documentation needs or the physical demands of higher terrain.",
    stayStrategy:
      "For a three-night city visit, one well-chosen base usually gives more time than moving between several atmospheric properties. Prioritize the booked room, quiet, bathroom, heating or cooling, breakfast and vehicle approach. An extra night should support a distinct interest or a slower day. A mountain overnight is a separate route decision, not a decorative hotel upgrade, and should be judged by suitability and services rather than only scenery.",
    firstTimerNote:
      "Kashgar is best approached through a few clear questions: how does this oasis city work, what do the streets reveal today and what can a local food or craft subject help you understand? You do not need to collect every Silk Road image. A modest, accurately described visit with strong interpretation can offer more than unsupported claims of unchanged history, exclusive homes or access to every mountain road.",
    faqs: [
      {
        question: "Are Kashgar and Kashi the same place?",
        answer:
          "Kashi is the pinyin name commonly used for Kashgar. The name can refer to the city or the wider prefecture, so use the exact hotel and site addresses. A city stay does not automatically cover Tashkurgan or the prefecture's other counties and mountain routes.",
      },
      {
        question: "How many nights should I spend in Kashgar?",
        answer:
          "Three nights provide two full city days for an old-city introduction and a different cultural or craft subject. Two nights can work for a focused visit with convenient transport. A Pamir or Tashkurgan extension needs its own route, nights, access and altitude review.",
      },
      {
        question: "Should I stay in Kashgar Old City or a modern hotel?",
        answer:
          "Choose by the actual room, quiet, bathroom, stairs, luggage approach and dinner options. A heritage-style stay can improve evening access; a modern hotel may offer easier pickup and more predictable facilities. Confirm the booked guests and arrangements rather than relying on a courtyard photograph.",
      },
      {
        question: "Is Kashgar Old City an unchanged medieval town?",
        answer:
          "No. The present area includes substantial rebuilding, adaptation, commercial streets and residential life. A good visit explains those layers rather than treating every facade as untouched. Public walking access does not imply permission to enter homes or photograph residents without consent.",
      },
      {
        question: "Can I visit the Kashgar Sunday livestock market?",
        answer:
          "Do not rely on an old Sunday listing. Confirm the current venue, operating day and visitor access before scheduling it. A livestock market, city bazaar and shop street are different experiences. Keep a worthwhile food or craft alternative if the expected market is not operating or appropriate to visit.",
      },
      {
        question: "Can foreign travelers visit every route around Kashgar?",
        answer:
          "Do not assume so from general city access. Check the exact traveler, sites, accommodation and any mountain or border-area route with the responsible parties for the intended dates. A private guide or car does not itself grant route permission, and a feasible city stay does not establish every onward excursion.",
      },
      {
        question: "Is Tashkurgan an easy extra stop on a Kashgar city day?",
        answer:
          "No. It is a separate mountain-route decision involving longer travel, higher elevations and current access conditions. Review the actual road, stops and overnight before adding it. Reaching a highland town does not establish access to an international border or a crossing into another country.",
      },
      {
        question: "Which time should I use for trains and meeting my guide in Kashgar?",
        answer:
          "Use the time convention explicitly confirmed for the booking, with particular care for ticketed transport and official arrangements using Beijing time, UTC+8. Clarify any informal local time reference rather than assuming everyone means the same clock. Write the agreed meeting time and convention in the itinerary.",
      },
    ],
    culturalStory: {
      title: "Let an oasis city be a living place, not a historical stage set",
      paragraphs: [
        "Kashgar's position in wider exchange networks offers a rich starting point, but the city is not a single frozen Silk Road scene. Buildings, commerce, religious places and public streets have different histories and present-day uses. A careful guide can connect those layers while distinguishing older fabric, reconstruction and visitor presentation. The result should help a guest understand what they are seeing now, not depend on a claim that nothing has changed for centuries.",
        "Uyghur food, language and craft deserve specific explanation and respect for the people involved. A public street, shop, religious site and invited studio are different settings. Ask permission for photographs, keep buying optional and avoid promising access to domestic or religious life as part of a generic authentic experience. Good interpretation and a consenting, suitable host can create depth without turning residents into scenery.",
      ],
    },
    foodStory: {
      title: "Choose a few dishes and explain them well",
      paragraphs: [
        "Naan, polo or pilaf, laghman-style noodles and suitable grilled or cooked dishes can introduce a range of textures and cooking methods. Choose portions for the party rather than trying to eat every familiar menu name. A bread or noodle interest can be enjoyable without a private kitchen demonstration, while a seated meal gives space to explain ingredients and the differences between dishes. Respect the kitchen's working space and confirm any participation rather than assuming a visitor can join production.",
        "Clarify meat, wheat, dairy, nuts, stocks and shared preparation for dietary requirements. Halal suitability should be confirmed at the actual venue against the guest's needs, not inferred from a city or community label. Guests who avoid lamb, gluten or alcohol need real alternatives, not only removal of a main dish. A market browse is not a meal, and the day should retain comfortable seating and time to eat without pressure to shop afterward.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the city and agree the daily rhythm",
        description:
          "Transfer from the exact airport or station to the confirmed room. Clarify meeting-time convention and keep dinner easy. Add a short introduction only if arrival allows, with the essential craft or heritage visit reserved for a reliable window.",
      },
      {
        day: "Full day 1",
        title: "A manageable old-city route and a proper meal",
        description:
          "Explore selected public streets with rebuilding, architecture and current use explained. Add a suitable meal and a confirmed heritage or craft interest. Respect photography and access rules rather than assuming every doorway or religious interior forms part of the route.",
      },
      {
        day: "Full day 2",
        title: "Deepen a real interest",
        description:
          "Use a confirmed provider, collection or currently operating market for a subject that differs from the first walk. Leave questions, seating and a meal in the schedule. Do not make the day depend on an unverified Sunday-market listing or a promised private home invitation.",
      },
      {
        day: "Departure or separately planned extension",
        title: "Keep the mountain decision distinct",
        description:
          "Allow the whole airport or station transfer, or begin a separately reviewed Pamir route with its own nights, elevations and current access arrangements. This three-night city outline is illustrative, not a published product or promise of private religious access, markets or border-route permission.",
      },
    ],
  },
};
