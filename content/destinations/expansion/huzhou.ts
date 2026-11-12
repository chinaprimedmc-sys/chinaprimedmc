import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/huzhou.svg",
  alt: "Original Huzhou planning schematic separating the old city, southern Taihu shore and Nanxun, with one-night city and two-night resort choices; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const huzhouGuide: ExpandedDestination = {
  id: "huzhou",
  name: "Huzhou",
  region: "east",
  kicker: "An old-city walk, a great lake and a choice of very different stays",
  description:
    "Choose between Huzhou's old-city lanes, a southern Taihu hotel and a separate Nanxun visit, with realistic rail transfers, cultural interests and time to enjoy the room.",
  stay: "1 city night or 2 nights for a considered lake stay",
  bestFor: "Jiangnan urban history, writing-brush culture and a slower southern Taihu break",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["nanxun", "moganshan", "anji", "hangzhou", "suzhou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Huzhou Travel Guide: Old City, Taihu & Where to Stay",
    seoTitle: "Huzhou Travel Guide: Old City or Taihu?",
    seoDescription:
      "Plan Huzhou's old-city lanes and southern Taihu shore. Compare hotel areas, one or two nights, Nanxun visits, writing-brush interests and station transfers.",
    answer:
      "Huzhou (湖州) is a city in northern Zhejiang on the southern side of Lake Taihu, also called Tai Lake. A worthwhile visit starts by separating three different places: the old-city streets and cultural sites, the lakeside hotel setting, and Nanxun Ancient Town farther across the municipality. Choose the city for a selective walk around historic lanes and the Feiying Pagoda area, a museum visit that fits your interests, and an introduction to the region's silk and writing-brush traditions. Choose the lake for a particular property and a slower stay. Huzhou is not Hangzhou, and its Taihu shore is not Hangzhou's West Lake. The shared regional setting does not make all these places one compact sightseeing area.",
    stayAnswer:
      "One night can suit an old-city introduction when arrival and departure leave enough time for a walk, a cultural site and a meal. Two nights make more sense for a lakeside property you want to enjoy, or a city stay with one well-chosen excursion. Three or more nights need a clear additional purpose, such as separate Nanxun time or an independently arranged craft interest, rather than more commuting from a distant hotel. If Huzhou is only a railway gateway for Moganshan or Anji, you may not need a city night at all. Compare usable hours and the actual onward road before adding a stop.",
    hotelAnswer:
      "Stay near the old-city area if the priority is walking, local meals and easy returns between visits. Choose the southern Taihu shore when the actual hotel, room and time on the property justify the extra journeys. For a lakeside booking, verify the view from the booked category, heating or cooling, dining, sound insulation and which pool or family facilities are operating on your dates. A recognizable building or lake-view label does not establish room quality, a walkable shore or access to water activities. A Nanxun guesthouse and a Moganshan hillside retreat are separate bases, even when marketed under Huzhou.",
    sightseeingQuestion: "Is Huzhou worth an overnight, or should I go straight to Nanxun?",
    sightseeingAnswer:
      "Stay in Huzhou when the old-city walk, a specific cultural visit or a lakeside property is something you actively want. Go directly to Nanxun when the main interest is silk-merchant houses, gardens and canal-side residential lanes; a Huzhou city hotel is not automatically a convenient substitute for a night there. If you have only a short Jiangnan trip, one well-chosen water town and enough time in Hangzhou or Suzhou may be stronger than adding another hotel. The right decision depends on the subject of the visit, the room and the complete transfer, rather than a requirement to collect both place names.",
    visitorResources: [
      {
        label: "Huzhou municipal government",
        href: "https://www.huzhou.gov.cn/",
        scope:
          "Starting point for municipal background and links to local culture or visitor notices, mainly in Chinese. Confirm current opening and booking with the actual site or operator. Municipal information does not prove a particular room, craft host or private visit is available.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Check dated trains and the full station name. Huzhou, Huzhou East, Nanxun and Deqing are distinct gateways, not interchangeable pickup points. Services and the complete hotel transfer must be compared for the actual itinerary.",
      },
    ],
    serviceScope:
      "A tailored proposal should name the old-city route, current cultural-site visits, guide language, hotel and room category if staying, exact railway or airport pickup and full transfers. A lake view does not include a boat, swimming, spa treatment or private shore. Any writing-brush demonstration, silk activity or specialist meeting needs a willing provider, a clear subject and a confirmed arrangement. A private guide can explain the setting and adapt the pace; this does not imply closed-door museum access, entry to residents' homes or an exclusive workshop. No host, property or activity is guaranteed by this guide.",
    routeAdvice:
      "Tell us your starting city, travel dates, available nights, preferred room style and whether old-city culture, a lake hotel or a particular craft is the priority. We can compare a city night, two lake nights or a direct transfer to Nanxun, Moganshan or Anji. Preserve the time that makes each base worthwhile rather than use one hotel to cover the entire municipality. No matching published Huzhou itinerary is listed here. A wider Shanghai, Hangzhou or China itinerary includes Huzhou only when its actual day-by-day plan and service scope say so.",
    practicalPlanning: {
      timing:
        "Put the selected museum or pagoda-area visit within its confirmed hours, then keep the old-city walk and meal more flexible. Public streets, individual interiors, religious spaces and hotel facilities can have different access rules. The southern shore is another part of the day, not a final sight to squeeze in before a train. Summer requires cooling and indoor breaks; winter lakeside wind can make a short promenade uncomfortable. Avoid fixing the plan around a sunset view, boat departure or seasonal display that conditions may not deliver.",
      walking:
        "For the old city, assess the actual lane surfaces, bridge steps, thresholds and rest stops. In the Feiying Pagoda area, distinguish access to the setting from any permitted interior or upper-level route; tower climbing is not implied. On the southern shore, verify the specific promenade and hotel approach rather than assume a continuous level waterfront. Plan shade, toilets and a shorter alternative. A private vehicle helps between areas but cannot remove every pedestrian section or make an unassessed historic interior accessible.",
      cost: "Compare the same hotel address, vehicle time, guide time, named admissions and exact rail or airport transfers. A lake resort may change dining costs and require additional transport for city meals or Nanxun. Check the actual room category, breakfasts, facilities and cancellation terms rather than comparing a building photograph or headline rate. Premium value comes from a room that meets the guest's needs, clear interpretation, manageable journeys and a plan that leaves time to use the hotel. A long drive to a nominally local activity is not automatically good value.",
    },
    attractions: [
      "Yishang Street / Yishang Jie for a selective old-city walk and local meals",
      "Xiaoxi Street / Xiaoxi Jie for a second look at historic lanes and their present-day uses",
      "Feiying Pagoda area for the distinctive pagoda-within-a-pagoda architectural idea",
      "Huzhou Museum when its current displays match the guest's cultural interests",
      "A selected southern Taihu shore walk paired with the actual hotel location",
      "Writing-brush culture, with Shanlian treated as a separate craft excursion when arranged",
      "Nanxun as a separate merchant-house and canal-town chapter",
    ],
    stays: [
      {
        label: "No city night / continue to the place you came for",
        advice:
          "If the train is only a gateway to a confirmed Moganshan, Anji or Nanxun stay, compare a direct onward transfer. Do not add a city hotel simply because the ticket says Huzhou. A short city visit must still fit the luggage, road journey and actual opening hours.",
      },
      {
        label: "1 night / an old-city introduction",
        advice:
          "Choose a hotel suited to the walk and meals, allow time for a selected cultural site and keep the next morning relaxed. A late arrival followed by an early departure is a transit night, not a complete Huzhou experience. Avoid adding a distant craft excursion to a short stop.",
      },
      {
        label: "2 nights / a lake property or one deliberate excursion",
        advice:
          "Leave enough time to enjoy the actual hotel and take one city visit, or use a city base with a single separately planned outing. Confirm facilities and dining before treating a lake stay as a family resort break. Additional nights need a clear purpose and a workable sequence of transfers.",
      },
    ],
    hotelAreas: [
      {
        name: "Old-city and central Wuxing area / culture and meals",
        advice:
          "Prioritize the real walking or short-drive route to Yishang Street, the chosen cultural sites and dinner. Check traffic noise, room layout, lifts and drop-off access. A central location can make a short stay simpler, but not every property described as downtown sits beside the lanes you plan to visit.",
      },
      {
        name: "Southern Taihu shore / choose the property first",
        advice:
          "Book for the actual room, outlook and time you want on the property. Check how the shore is reached, whether nearby dining suits you and how you return from the city in the evening. Facilities, lake visibility and quiet differ by building and room; a famous exterior is not a substitute for those details.",
      },
      {
        name: "Nanxun, Moganshan or Anji / separate destinations",
        advice:
          "Use a Nanxun room for a canal-town evening, a Moganshan property for a hillside stay, or an Anji base for a selected countryside interest. Compare the complete onward journey and luggage move. These places sit within the wider Huzhou municipality but should not be treated as hotel neighborhoods of the old city.",
      },
    ],
    tradeoffs: [
      {
        title: "Huzhou and Hangzhou answer different travel interests",
        advice:
          "Hangzhou offers West Lake, Longjing tea and a substantial city itinerary. Huzhou can add an old-city and writing-brush subject or a southern Taihu hotel. Choose the additional chapter for a specific reason. Similar English names and a shared Zhejiang setting do not make them alternative stations for the same hotel.",
      },
      {
        title: "A lake stay is not the same as a beach holiday",
        advice:
          "Taihu is a large freshwater lake. A shoreline view does not establish a bathing beach, safe swimming or water-sport availability. Judge the stay by the hotel, permitted walks and confirmed facilities. Any boat needs its own operator, route, boarding and weather assessment; a room reservation does not include it.",
      },
      {
        title: "Brush-making history and a working demonstration are different",
        advice:
          "Huzhou's hubi, or Huzhou writing-brush tradition, provides a useful cultural subject. Shanlian is a separate town associated with that craft, not a workshop lane beside every city hotel. A factory, museum display, retail shop and hands-on session offer different access and learning. Arrange the actual host and process before adding the road journey.",
      },
      {
        title: "Historic lanes include contemporary life and restoration",
        advice:
          "Explain what is documented historic fabric, what has been repaired and how buildings are used now. A food street can be enjoyable without being an unchanged historic scene. Do not promise every courtyard is open, every shop is a craft producer or every person is available for photography.",
      },
      {
        title: "Taihu is shared by a wider region",
        advice:
          "Huzhou's southern shore is different from Suzhou's eastern Taihu settings and Wuxi's northern lake attractions. A road or boat journey cannot be inferred from the shared lake name. Select the shore that fits the hotel and next destination rather than attempt to cover the whole lake from one base.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "nanxun",
        advice:
          "Nanxun adds silk-merchant houses, Jiaye Library and Baijianlou's residential canals. Compare a separate night with a selective excursion from the exact Huzhou city or lake hotel. A municipality-wide address does not describe the full journey, and a city night does not automatically provide Nanxun's evening or morning experience.",
      },
      {
        slug: "moganshan",
        advice:
          "Moganshan offers a hillside property and selected mountain interests in Deqing County. Compare Huzhou and Deqing gateways using the dated service, road approach and luggage. A city stop is optional; keep enough nights at the actual retreat to justify the move and its access arrangements.",
      },
      {
        slug: "anji",
        advice:
          "Anji offers a separate countryside stay shaped by bamboo, tea or the chosen property. Its railway station, individual hotels and activities are different locations. Compare the full journey rather than use Huzhou as a single arrival pin for the whole region. A second rural stay should add a distinct subject.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake, city culture and Longjing tea. Preserve enough time for those interests before adding Huzhou, and compare the actual train and both hotel transfers with road travel. Hangzhou, Hangzhou East and the Huzhou gateways are not interchangeable pickup instructions.",
      },
      {
        slug: "suzhou",
        advice:
          "Suzhou adds classical gardens and urban canal neighborhoods, with a different relationship to Taihu. Choose gardens and a manageable city stay rather than make another lake-view hotel compulsory. Compare the complete dated rail or road journey between the actual hotels; the lake name alone does not describe a convenient connection.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit old-city and lakeside walks, with rain, wind and busy holiday periods still possible. Summer calls for air-conditioning, shorter outdoor sections and a realistic plan for hotel facilities. Winter can be cold and damp, especially by the lake, so heating and warm indoor breaks matter. A waterfront room does not guarantee a clear horizon or sunset. Choose dates for the full Jiangnan journey and verify any seasonal event instead of making it the sole reason for the stay.",
    orientation:
      "Huzhou is both the name of a city and a wider municipality in northern Zhejiang. The central urban visit, southern Taihu shore, Nanxun District, Deqing County and Anji County need separate route decisions. Yishang Street and Xiaoxi Street belong to an old-city chapter; they are not the lanes of Nanxun Ancient Town. Feiying Pagoda is another named visit, not a generic label for every city temple. Use the exact railway station, hotel address and next destination when comparing arrival options.",
    experiences: [
      "Read the old-city lanes through buildings, waterways and a well-chosen local meal",
      "Explore a specific cultural interest at the pagoda area or a relevant museum display",
      "Enjoy a southern Taihu property when its room and setting justify an unhurried stay",
    ],
    planningNotes: [
      "Separate the old city, southern lake shore and Nanxun before choosing the hotel",
      "Check the exact railway gateway and complete onward road journey",
      "Treat boats, craft hosts and resort facilities as separately confirmed arrangements",
    ],
    arrival:
      "Compare dated services to the station that actually suits the hotel or onward destination. Huzhou station, Huzhou East and Nanxun station serve different locations; Deqing may be relevant for a Moganshan plan rather than a Huzhou city night. Include the journey from the departure hotel, station procedures, luggage and the final road transfer. For an airport arrival, specify the terminal and flight before choosing the road or rail connection. A short train segment is not the full transfer time, and a city hotel should not be added automatically between a station and a distant retreat.",
    gettingAround:
      "Group the old-city lanes and selected cultural visits into a manageable route, with a vehicle where the actual distances warrant it. Treat the southern shore as a separate excursion or hotel base. Check precise stops, toilets, seating and indoor alternatives in wet or hot weather. Individual hotels may occupy large grounds or have separate arrival buildings, so verify the room approach as well as the address. Do not assume boats connect lake hotels, that every shore section is public or that an old-city walk removes all bridge steps.",
    stayStrategy:
      "For one night, a convenient city room can offer more useful time than a distant lake property. For two lake nights, leave space to use the room, dine comfortably and walk the permitted shore instead of driving out for every meal. Compare exact categories, noise, climate control, breakfast and available facilities. If the real purpose is Nanxun, Moganshan or Anji, stay there when the room and route work. A luxury label does not make a poor location or repeated long transfers more comfortable.",
    firstTimerNote:
      "Decide what Huzhou adds that your other Jiangnan stops do not. It might be the writing-brush tradition, a particular architectural interest, a local city evening or a lakeside hotel. Build around that reason and be willing to omit the city night when another base serves the journey better. This creates a clearer trip than treating every part of the municipality as an interchangeable day excursion or relying on a hotel exterior as the main cultural experience.",
    faqs: [
      {
        question: "Is Huzhou the same place as Hangzhou?",
        answer:
          "No. Huzhou (湖州) is in northern Zhejiang by the southern side of Taihu. Hangzhou (杭州) is a different city associated with West Lake and Longjing tea. Use the Chinese names and exact station or hotel address for bookings and pickups; the similar English spelling does not indicate the same destination.",
      },
      {
        question: "What is Huzhou worth visiting for?",
        answer:
          "Choose it for a selective old-city walk, a relevant cultural visit, an introduction to writing-brush traditions or a particular southern Taihu property. Nanxun, Moganshan and Anji can add separate chapters within the wider municipality. A rewarding plan selects among them rather than assuming one city hotel is a convenient base for all of them.",
      },
      {
        question: "How many nights should I spend in Huzhou?",
        answer:
          "One night can work for a city introduction with usable time before and after check-in. Two nights suit a lake property or one deliberate excursion. If the station is only a gateway to a confirmed Nanxun, Moganshan or Anji stay, consider going straight there. Additional nights need a clear purpose.",
      },
      {
        question: "Should I stay in Huzhou city or by Taihu Lake?",
        answer:
          "Choose the city for old-town walks and convenient local meals. Choose the southern Taihu shore for the actual hotel and time you want on the property. Check room views, noise, dining, current facilities and city transfers. A lake view alone does not establish a beach, swimming or an included boat trip.",
      },
      {
        question: "Can I visit Nanxun from Huzhou?",
        answer:
          "Yes, with a separately planned journey from the actual hotel. Compare a day visit with staying in Nanxun when its merchant houses, canals, evening and morning are the main interest. Huzhou city, its lake hotels and Nanxun are different locations; municipal boundaries are not a useful measure of transfer time.",
      },
      {
        question: "Which railway station should I use for Huzhou?",
        answer:
          "Choose using the dated service and complete journey to your actual hotel or next destination. Huzhou, Huzhou East and Nanxun are distinct stations; Deqing can be relevant for Moganshan. Send the full ticket name for pickup and compare both terminal transfers with a direct road option.",
      },
      {
        question: "Can I visit a Huzhou writing-brush workshop?",
        answer:
          "Only when an actual provider and visit are confirmed. Shanlian is a separate craft destination, and a museum display, shop, working facility and hands-on activity are different experiences. Check the host, language, process, purchase expectations and road journey before adding it. The region's craft reputation does not guarantee workshop access.",
      },
      {
        question: "Can I swim or take a boat on Taihu?",
        answer:
          "Do not assume either is available from a lake-view hotel. Swimming requires a specifically permitted and suitable setting; hotel pools have their own current operating conditions. A boat needs a confirmed operator, route, boarding assessment and weather plan. Shoreline views and accommodation bookings do not establish water-activity access.",
      },
    ],
    culturalStory: {
      title: "Look beyond the lake to the things made and collected here",
      paragraphs: [
        "Huzhou's association with silk and writing brushes offers a way into Jiangnan culture beyond scenery. Hubi (湖笔) means Huzhou writing brushes; understanding one involves the materials, preparation and intended use, not simply choosing an expensive souvenir. Shanlian (善琏) is associated with brush making, but it requires its own journey and a real arrangement if visitors want to see production. A city museum display can provide a useful introduction without pretending to be a working studio. Keep learning, retail and hands-on participation distinct.",
        "In the city, Feiying Pagoda (飞英塔) offers the unusual idea of a smaller stone pagoda enclosed within a larger structure. Explain what is visible on the currently permitted route rather than promise tower access. Yishang Street (衣裳街) and Xiaoxi Street (小西街) provide another scale of observation: lanes, waterways, shopfronts and buildings adapted for contemporary use. Distinguish historic fabric from restoration and present-day commerce. A thoughtful walk can include lively food streets without describing them as unchanged scenes from the past.",
      ],
    },
    foodStory: {
      title: "Choose a meal for the actual kitchen and season",
      paragraphs: [
        "A city meal can include wontons or qianzhang bao (千张包), tofu-skin parcels commonly filled with minced meat, alongside vegetables and other dishes the kitchen handles well. Ask about the filling and broth rather than infer that tofu skin makes a dish vegetarian. A Taihu-themed menu may feature freshwater fish or shrimp, but a regional menu name does not prove the ingredients were caught in the lake. Ask about sourcing, bones, cooking style and portion sizes, then choose a balanced meal rather than every advertised specialty.",
        "Check pork, fish, shellfish, soy, wheat, egg and shared equipment when discussing dietary needs. Vegetarian-looking vegetables can use meat stock, and small kitchens may not be able to manage serious allergies. A lakeside hotel's dining location, hours and alternatives matter if other restaurants require a drive. Confirm those details before booking a stay around the idea of leisurely dinners. A food stop, cooking activity and specialist tasting need different arrangements; none requires a compulsory purchase or an unconfirmed private host.",
      ],
    },
    itinerary: [
      {
        day: "Day 1 / arrival and city introduction",
        title: "Use the actual arrival point to shape a manageable first walk",
        description:
          "Complete the transfer to the chosen city or lake hotel and arrange luggage. When timing allows, combine a selected old-city lane with the Feiying Pagoda area or a relevant open museum display. Leave room for a seated meal rather than attempt every cultural site before closing.",
      },
      {
        day: "Day 2 / city departure or lake time",
        title: "Choose the next chapter instead of covering the whole municipality",
        description:
          "One-night guests can take a short morning walk before the onward transfer. Two-night lake guests should retain time for the actual property and a permitted shore walk. Alternatively, plan a Nanxun excursion for its merchant-house subject, including the full return journey, rather than assume it fits between hotel activities.",
      },
      {
        day: "Optional specialist outing",
        title: "Add a craft interest only when the visit itself is confirmed",
        description:
          "For a longer stay, a Shanlian brush-making visit needs an agreed provider, learning focus and complete road schedule. Substitute a relevant open cultural visit or more time at the hotel if the arrangement is unavailable. Do not present a shop stop as production access or a hands-on workshop.",
      },
      {
        day: "Departure",
        title: "Continue to a distinct base with the luggage and station settled",
        description:
          "Confirm the exact next hotel or railway station and preserve time at a Moganshan, Anji, Hangzhou or Suzhou stay. This outline illustrates choices rather than a fixed package. It does not guarantee room views, museum access, craft hosts, boat services, swimming or ticket inclusions.",
      },
    ],
  },
};
