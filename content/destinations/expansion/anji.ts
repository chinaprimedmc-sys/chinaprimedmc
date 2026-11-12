import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/anji.svg",
  alt: "Anji planning diagram separating a resort stay, a selected bamboo or mountain route and a tea or village visit; original schematic, not a map or destination photograph",
  width: 1600,
  height: 1200,
};

export const anjiGuide: ExpandedDestination = {
  id: "anji",
  name: "Anji",
  region: "east",
  kicker: "Bamboo country, green tea and a well-chosen rural stay",
  description:
    "Choose Anji for a particular countryside property, bamboo landscape or tea interest, with clear advice on the county's spread-out sights, real activity demands and the best use of two or three nights.",
  stay: "2–3 nights",
  bestFor: "Countryside resorts, bamboo landscapes and a slower family or couples' break",
  interests: ["landscape", "food", "heritage"],
  relatedDestinationIds: ["moganshan", "hangzhou", "shanghai"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Anji Travel Guide: Bamboo, Tea & Where to Stay",
    seoTitle: "Anji Travel Guide: Bamboo, Tea & Where to Stay",
    seoDescription:
      "Plan two or three nights in Anji with resort and village-base advice, bamboo walks, Anji white tea, Yucun and a practical comparison with Moganshan.",
    answer:
      "Anji (安吉) is a county in Huzhou, Zhejiang, known for bamboo landscapes, Anji white tea and countryside hotels. It is a spread-out rural destination rather than one walkable bamboo forest or a single resort village. Choose a specific base and a small number of interests: a comfortable hotel stay, a named bamboo or mountain route, or a properly arranged tea visit. Dazhuhai, Yucun and other scenic areas occupy different locations. A hotel marketed as being in Anji does not establish that any of these places is close enough for an easy walk or short drive.",
    stayAnswer:
      "Two nights give one full day and work best with a strong priority: the hotel, a selected landscape outing or a particular cultural interest. Three nights allow two full days, so a sightseeing day need not consume all the time at the property. One night is a brief escape when the complete transfer is convenient. Add nights because you enjoy the setting, not because every advertised Anji attraction belongs on the same itinerary. A short rural break becomes less restful when each morning starts with another cross-county drive.",
    hotelAnswer:
      "Start with the actual hotel address and the experience you want. A self-contained countryside resort suits guests prioritizing rooms, dining and facilities; a smaller village property can suit a closer relationship to local lanes and scenery; the county town is more practical for services than a secluded retreat. Then locate your selected outing on the same map. Confirm access, noise, meals, climate control, pool operation and activities for the actual dates. Anji's county name alone says little about room quality, privacy or proximity to bamboo walks.",
    sightseeingQuestion: "Is Anji or Moganshan better for a countryside stay?",
    sightseeingAnswer:
      "Choose Anji when a particular rural property, bamboo-landscape route or Anji tea interest is the reason to travel. Choose Moganshan when its historic summer-villa landscape and a specific mountain or village stay better match your interests. Both have varied hotels and driving patterns. Compare named accommodation and one realistic full day in each destination, rather than assuming Anji is always more rural or Moganshan always more luxurious. For a two- or three-night break, one well-chosen base usually leaves more useful downtime than moving between them.",
    visitorResources: [
      {
        label: "Anji County government",
        href: "https://www.anji.gov.cn/",
        scope:
          "County-level public information and administrative context, mainly in Chinese. Check the actual scenic area, village, local road conditions and relevant public notices through the responsible authority. The portal does not verify a hotel's facilities or an activity provider's suitability.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Check the actual service to Anji and the complete road transfer to the booked hotel; the station and the county's rural attractions are separate locations. Compare other gateways only with both terminal transfers included.",
      },
    ],
    serviceScope:
      "A tailored Anji stay can specify a named property and room, exact station or airport transfer, selected outing, guide hours and meals. Tea-host availability, tasting or learning sessions, cycling, children's activities and spa services need individual confirmation. Adventure attractions have their own operators, eligibility and conditions; a private road vehicle does not make those activities private or automatically suitable. Share ages, mobility, dietary needs and the importance of pool or outdoor time before comparing hotels. No household visit, plantation access or exclusive host is implied by a rural address.",
    routeAdvice:
      "Anji can add countryside time alongside Hangzhou or Shanghai when a worthwhile hotel and complete transport connection justify the stop. Moganshan is a nearby regional alternative with a different villa-history focus, not an obligatory extra base. No matching published Anji product is recommended here. Use the illustrative three-night outline to discuss a tailored stay: choose the room first, retain one selected landscape day and protect another day for rest or a confirmed local interest.",
    practicalPlanning: {
      timing:
        "Group an outing around its actual part of the county. One substantial landscape or activity visit with a meal is usually more sensible than adding several distant attractions because they share the Anji name. Ask how long the whole visit takes, including local shuttles, walking and return access. Keep an onward train separate from an activity whose finish depends on weather, crowds or a fixed operator schedule.",
      walking:
        "Bamboo scenery can be reached through very different routes: paved visitor paths, steps, steep mountain walks or uneven village tracks. Specify which one is intended, with a start, finish and realistic turnaround. Cableways and shuttles, where operating, do not establish step-free access to every viewpoint. Check the hotel's stairs, bathroom, restaurant route and vehicle approach as well as the outing. Wet stone and muddy paths can change an otherwise manageable day.",
      cost: "Compare room category, occupancy, breakfast, dinner options and cancellation terms alongside the complete transfer. Scenic admission, internal transport and individual activity tickets may be separate. A package's headline attraction can exclude the experience a child or adult actually wants. For a higher-end stay, pay for a useful room, good food, a suitable setting and facilities you will use; a long inclusions list is less valuable when eligibility, opening and extra charges are unclear.",
    },
    attractions: [
      "Dazhuhai / China Great Bamboo Sea as a specific visitor site",
      "Yucun / 余村 as a distinct village visit",
      "A selected Tianhuangping-area landscape route",
      "Anji white tea learning or tasting with an agreed host",
      "A countryside hotel and its actual walking surroundings",
      "A named mountain or activity venue chosen for the group's ability",
    ],
    stays: [
      {
        label: "1 night: one base and modest plans",
        advice:
          "Choose an easy arrival and focus on the property or one nearby interest. A late check-in followed by an early train leaves little rural time. Do not promise a complete bamboo, tea, village and adventure itinerary between two transfers.",
      },
      {
        label: "2 nights: a useful focused break",
        advice:
          "One full day can hold a selected outing with time at the hotel, or a slower property-led day. Make the priority explicit before choosing the base. A suitable meal and an unhurried afternoon often add more than another long drive.",
      },
      {
        label: "3 nights: landscape and downtime",
        advice:
          "Use one full day for a chosen landscape route and the other for a local interest or the property. This gives room to adjust for rain and varying energy. Keep one base unless a second property offers a genuinely different stay worth packing for.",
      },
    ],
    hotelAreas: [
      {
        name: "A self-contained countryside resort",
        advice:
          "Choose for the actual room, grounds, dining and facilities rather than proximity to every sight. Ask about indoor comfort, pool seasonality, children's age rules and the route between room and main spaces. A large resort can involve considerable walking or waiting for internal transport. Establish what is included in your room category and what needs separate booking.",
      },
      {
        name: "A smaller property near the chosen village or landscape",
        advice:
          "Useful when a particular setting or short local route is the point. Match the exact address to your planned outing; a property near Yucun need not be convenient for every bamboo or mountain attraction. Confirm dinner, soundproofing, heating or cooling and luggage access. A small guesthouse and a fully staffed resort offer different levels of service even if both are described as boutique.",
      },
      {
        name: "Tianhuangping-area hillside stays",
        advice:
          "Consider when the selected mountain landscape and property are the main interest. Review winding roads, weather, steps and the actual distance to meals or the intended visitor site. A hillside hotel is not automatically within walking distance of a usable trail, and a scenic drive needs time rather than being treated as an incidental transfer.",
      },
      {
        name: "County-town or gateway-oriented hotels",
        advice:
          "A practical choice for services, a particular rail schedule or a trip with limited rural-hotel expectations. Check the complete drive to the selected interest before deciding. Easy shopping or a convenient town location may be useful, but neither creates the quiet countryside setting shown in destination marketing.",
      },
    ],
    tradeoffs: [
      {
        title: "One county name does not make a compact day-tour circuit",
        advice:
          "Locate the hotel, Anji station and each chosen outing before booking. Dazhuhai, Yucun and the wider mountain areas are separate choices, not adjacent stops implied by a bamboo-country label. Review the whole day's road pattern and remove the weakest stop. A strong morning and a relaxed afternoon can be a better use of a countryside hotel than a comprehensive-looking checklist.",
      },
      {
        title: "Anji white tea is green tea",
        advice:
          "Anji baicha is generally classified as green tea, despite the English translation white tea. Its name is associated with the pale young leaves of the tea plant, not the processing category normally meant by white tea. Tasting, seasonal field observation and participation in tea work are different experiences. Confirm the host, language, topic, season and any purchase expectation; a tea-shop stop does not automatically provide cultivation or production insight.",
      },
      {
        title: "A bamboo visit is not the same as a long woodland hike",
        advice:
          "Dazhuhai is a specific visitor destination. Other forest and mountain routes have different surfaces, steps and access. Decide whether you want a short landscape introduction, photography stops, a longer walk or simply bamboo views from a comfortable property. Ask for an actual route rather than a generic bamboo-forest promise, and do not assume attractive woodland is open for unrestricted walking.",
      },
      {
        title: "Adventure facilities need a separate decision",
        advice:
          "A venue such as Yunshang Caoyuan, often translated as Cloud Grassland, is an operated mountain leisure destination, not a quiet pasture you can freely explore. Review the actual attraction, height or age limits, health requirements, weather rules and included tickets before making it a family highlight. A dramatic platform or ride shown in marketing is not a recommendation for every guest. Those seeking a calm retreat may reasonably leave the activity venue out.",
      },
      {
        title: "Choose a family resort by the children's actual day",
        advice:
          "Check beds, bathroom layout, meal times, suitable pools and the activities each child can actually join. A kids' club may have age limits, sessions, extra charges or requirements for an accompanying adult. A private pool does not establish child-safe access or supervision. For couples, look separately at quiet room location and shared spaces; a property designed around energetic family activity may not suit a peaceful anniversary stay.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "moganshan",
        advice:
          "Compare Moganshan's historic villa landscape and village or mountain hotels with a specific Anji property and route. Choose one for a short countryside break. Combine both only when different settings and enough nights justify another transfer. Moganshan's Yucun / 庾村 and Anji's Yucun / 余村 are different villages despite similar English spelling.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou adds West Lake, urban culture and Longjing tea-country interests. Anji white tea provides a different subject, but two tea visits deserve distinct hosts and topics rather than repeat shopping stops. Compare the complete road journey or train plus both station transfers, preserving usable time in each base.",
      },
      {
        slug: "shanghai",
        advice:
          "A rural Anji stay can contrast with Shanghai's architecture and city pace. Check actual rail or road options to the booked property and avoid treating a late arrival as a full resort day. A Shanghai tour does not automatically include Anji, and a rural extension needs its own accommodation and services agreed.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring can suit tea interests and fresh growth, but the actual tea season and access depend on the host's work and weather. Autumn is another useful starting point for walking and time outdoors. Summer needs a realistic plan for heat, humidity, rain and the actual pool or water activity; winter depends more on heating, dining and indoor comfort. Mountain activity venues and seasonal facilities need date-specific checks. Weekends and public holidays can change road demand and hotel atmosphere in any season.",
    orientation:
      "Anji is a county within Huzhou, Zhejiang, with rural hotels and visitor sites spread across different roads and valleys. Dazhuhai, Yucun and Tianhuangping are different planning references, not one compact visitor neighborhood. The station, county town and countryside hotel may all be separate journeys. The Anji village written Yucun is 余村, distinct from Moganshan's 庾村. Confirm the Chinese address and exact map pin for a property or meeting point before comparing journeys.",
    experiences: [
      "Choose a named rural property with room comfort, meals and time to enjoy its grounds",
      "Explore one selected bamboo or mountain route with the actual walking and transport understood",
      "Learn what makes Anji white tea distinctive through an appropriately arranged tasting or seasonal encounter",
    ],
    planningNotes: [
      "Map the hotel and selected outing before deciding which station or road transfer to use",
      "Separate quiet landscape time, tea learning and operated adventure attractions rather than bundling them together",
      "Check seasonal facilities, meals, room layout and actual children's activity eligibility before choosing a resort",
    ],
    arrival:
      "Anji railway station is an option to investigate, but the station name does not establish proximity to your hotel. Check the actual service and final drive. Hangzhou Xiaoshan Airport or another rail gateway can work when the complete journey is sensible, including road access to the property. Send the exact ticketed arrival point, luggage and hotel address; agree child seats or mobility arrangements separately. A shorter train ride can be a worse choice if it adds an awkward final connection.",
    gettingAround:
      "Use planned road transfers for the specific outing and arrival rather than assuming rural ride availability at any hour. Agree pickup, finish and meal location for a landscape day, including any internal venue transport. On a property-led day, leave the car and guide unbooked when they add little value. Village cycling requires a reviewed route and suitable equipment; mountain roads and public lanes are not automatically leisure trails. Avoid driving across the county just to add another nominal highlight.",
    stayStrategy:
      "Choose one base for two or three nights. If the hotel is the main experience, compare its room, meals, grounds and wet-weather comfort first, then select an outing that fits the location. If a specific landscape or tea host matters most, place the hotel around that interest instead. Confirm whether the room shown in marketing is the quoted category and whether a view, terrace, pool or private space belongs to that room or a shared area.",
    firstTimerNote:
      "Anji is most rewarding when you know what you want from the countryside. A calm hotel stay, a bamboo-landscape day and an adventure-focused family break are different holidays. Choose one as the main purpose, then add only the interests that fit naturally. The quality of the room, meal and time available can matter more than the number of scenic-area names in the proposal.",
    faqs: [
      {
        question: "Where is Anji in China?",
        answer:
          "Anji is a county in Huzhou, Zhejiang. Its rural hotels, bamboo sites, villages and mountain areas are spread out. Use the exact property and planned outing to choose a gateway and transfer; Anji is not one compact resort village near every attraction.",
      },
      {
        question: "How many nights should I stay in Anji?",
        answer:
          "Two nights provide one full day for a focused countryside break. Three nights give two full days, allowing one selected outing and separate time for the hotel or a local interest. One night works best with convenient transfers and limited sightseeing expectations.",
      },
      {
        question: "Is Anji white tea actually white tea?",
        answer:
          "Anji baicha is generally classified as green tea. Its name relates to the pale young leaves of the tea plant rather than the white-tea processing category. A tasting can explain this distinction; seasonal field or production visits need a confirmed host and appropriate timing.",
      },
      {
        question: "Should I choose Anji or Moganshan?",
        answer:
          "Choose Anji for a particular rural property, bamboo route or local tea interest. Choose Moganshan for its historic villas and a specific mountain or village stay. Compare actual hotels and a realistic full day in each place; neither destination name guarantees greater luxury, quietness or convenience.",
      },
      {
        question: "Is Dazhuhai the same as all of Anji's bamboo forest?",
        answer:
          "No. Dazhuhai, often called China Great Bamboo Sea, is a specific visitor site. Other bamboo landscapes, paths and hotel settings have different access and walking demands. Choose an actual route and purpose rather than treating every bamboo photograph as the same location.",
      },
      {
        question: "Is Anji good for a luxury family holiday?",
        answer:
          "A suitable property can work well, but compare actual beds, meals, pools, activity age rules, supervision and charges. A family label does not establish that every child can join every session. Adventure attractions require their own suitability review and are separate from a relaxed hotel stay.",
      },
      {
        question: "Can I walk or cycle everywhere from an Anji resort?",
        answer:
          "Do not assume so. Hotels vary in location, slopes, road access and nearby paths. Check an actual walking or cycling route, surface, traffic and equipment. A countryside address or bicycle photograph does not establish a safe, accessible route to the attractions you want.",
      },
      {
        question: "What is the difference between Yucun in Anji and Yucun in Moganshan?",
        answer:
          "They are separate villages with different Chinese names: Anji's 余村 and Moganshan's 庾村. English spelling can look identical. Confirm the county, Chinese address and exact map pin before arranging a hotel, visit or pickup.",
      },
      {
        question: "What should I do in Anji if it rains?",
        answer:
          "Choose a property with comfortable indoor space and suitable dining, then check any indoor activities for actual operation and charges. A hosted tea session can be an option if available. Adjust outdoor routes to conditions rather than assuming mountain rides, exposed platforms or forest paths remain suitable.",
      },
    ],
    culturalStory: {
      title: "Look beyond the bamboo backdrop",
      paragraphs: [
        "Bamboo is both a landscape and a working material in Anji. A selected walk can introduce its place in local life, while a museum, workshop or hosted explanation may offer a different perspective if a suitable venue is available. Those are separate experiences: seeing bamboo does not mean observing craft production, and a retail display does not establish an artisan encounter. Choose the actual subject and venue rather than selling a vague promise of ancient rural culture.",
        "Yucun is a living village as well as a visitor destination associated with environmental change and rural development. Approach it through a selected public route and specific interpretation, not a claim that every household is part of a tourism performance. Public spaces, businesses and private homes have different boundaries. An understandable account of how the landscape is used today adds more value than calling the entire county untouched or guaranteeing access to residents' lives.",
      ],
    },
    foodStory: {
      title: "Let tea and seasonal cooking give the stay a local character",
      paragraphs: [
        "Anji white tea offers a useful subject for a thoughtful tasting: ask about the leaf, processing and preparation rather than judging only by an expensive label. A small comparative session can be worthwhile without a plantation visit or purchase. Spring field activity follows the season and the grower's work; it should not be promised as an all-year hands-on attraction. Keep the topic different from any Longjing visit in Hangzhou so each encounter adds understanding rather than another sales stop.",
        "Bamboo-shoot dishes can connect a meal to the landscape, with fresh, preserved and dried preparations clearly distinguished. Local vegetables, tofu and suitable meat or fish dishes can make a balanced shared meal. At a remote property, agree dinner hours and advance-order needs, especially for vegetarians, children or allergies. Broths, sauces and shared cooking matter as much as a dish name. Clear portions, preparation and charges make the meal more enjoyable than a long list of unexplained specialties.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the countryside base",
        description:
          "Transfer from the exact station or airport and leave time for the final road approach. Learn the property layout, confirm meals and enjoy a short local route if suitable. Do not count a late check-in as a full activity or pool day.",
      },
      {
        day: "Full day 1",
        title: "Choose one landscape subject",
        description:
          "Visit a selected bamboo or mountain route with the actual walking, internal transport and weather reviewed. Keep a seated meal and return with time at the property. An adventure venue is an alternative with separate eligibility, not an automatic extra stop.",
      },
      {
        day: "Full day 2",
        title: "Tea, village context or an unhurried hotel day",
        description:
          "Choose a confirmed tea encounter, a selected Yucun visit or time at the hotel according to location and interests. Leave room for rain and the group's energy. There is no obligation to combine all three or spend another day driving across the county.",
      },
      {
        day: "Departure",
        title: "Continue with the complete journey planned",
        description:
          "Allow the actual station or airport transfer and onward connection to Hangzhou, Shanghai or another agreed base. This three-night outline is a planning example, not a published product or assurance that optional hosts, activities or facilities are included.",
      },
    ],
  },
};
