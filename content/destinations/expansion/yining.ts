import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/yining.svg",
  alt: "Yining planning schematic distinguishing city neighborhoods, a separately planned Ili valley route and a named countryside overnight; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const yiningGuide: ExpandedDestination = {
  id: "yining",
  name: "Yining",
  region: "northwest",
  kicker: "A city introduction to Ili, with the valley given its own time",
  description:
    "Plan Yining's Kazanqi and Liuxingjie neighborhoods, food and city stays, then choose a realistic Ili route without treating Sayram Lake, Nalati and every grassland as nearby city sights.",
  stay: "2–3 city nights; longer for a separate Ili route",
  bestFor: "Living neighborhoods, regional food and considered valley journeys",
  interests: ["heritage", "food", "landscape"],
  relatedDestinationIds: ["sayram-lake", "urumqi", "kashgar", "dunhuang", "xining"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Yining Travel Guide: City Stays & Planning an Ili Route",
    seoTitle: "Yining Travel Guide: City Stays & Ili Routes",
    seoDescription:
      "Understand Yining, Ghulja and Ili: Kazanqi and Liuxingjie walks, city hotels, food and realistic routes to Sayram Lake, Nalati or the grasslands.",
    answer:
      "Yining (伊宁市), also known as Ghulja or Gulja, is the principal city and administrative center of Ili Kazakh Autonomous Prefecture in northwestern Xinjiang. It is different from neighboring Yining County (伊宁县), and Ili or Yili is not simply another name for the city. A city visit can combine Kazanqi and Liuxingjie neighborhoods, food and a selected cultural subject. The wider valley's grasslands, mountain roads and countryside stays need separate route decisions. Choose Yining for its own urban introduction, then select the landscape chapter rather than expecting every Ili photograph within a short drive of one hotel.",
    stayAnswer:
      "Two nights give one full city day; three nights allow a slower introduction and a second clearly selected interest. A broader five- to seven-night or longer Ili journey may combine city time with one or two different countryside bases when the actual roads and conditions fit. That is a planning format, not a promise to cover the whole valley. Sayram Lake, Nalati, Kalajun, Tekes and Zhaosu should not all be added to one short itinerary. Arrival and long road days reduce usable time even when they pass scenic landscapes.",
    hotelAnswer:
      "Choose a named Yining city property around the actual neighborhood visits, dinner and airport or station transfer. A small characterful stay and a modern hotel can serve different comfort and access needs; check the quoted room, noise, heating or cooling, breakfast and pickup. A grassland, lake or rural property is a separate overnight with its own road, bathroom, meals and seasonal operation to review. Confirm arrangements for the actual travelers. A broad Ili address does not establish proximity to Yining or to the landscape you intend to visit.",
    sightseeingQuestion: "Should you focus on Yining city, Sayram Lake or Ili's grasslands?",
    sightseeingAnswer:
      "Choose the city for neighborhoods, food and a properly explained cultural introduction. Choose Sayram Lake for a distinct high-lake landscape in Bortala, reached through its own route rather than treated as an urban park in Yining. Choose a Nalati, Kalajun or Zhaosu-area chapter for a specific grassland interest, with the actual base, visitor route and walking or riding reviewed. These are different places and experiences. Match one or two to the available nights and season instead of promising every lake, lavender field and pasture in one city day.",
    visitorResources: [
      {
        label: "Ili Kazakh Autonomous Prefecture government",
        href: "https://www.xjyl.gov.cn/",
        scope:
          "Prefecture-level context and public notices, mainly in Chinese. Distinguish Yining city from the wider regional geography. Confirm current venues, local roads, accommodation and individual visits with their responsible parties; the regional name does not establish a household invitation or a grassland operator.",
      },
      {
        label: "Xinjiang regional government",
        href: "https://www.xinjiang.gov.cn/",
        scope:
          "Regional public information and official notices. Current conditions and any route-specific requirements need review for the actual traveler and itinerary. This source is not a guarantee that a lake circuit, border-area outing, seasonal road or campsite is open on the intended date.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway reference. Use the full dated service and station, then the transfer to the actual hotel. A Yining arrival does not place the guest at a grassland or lake, and the existence of rail links across Xinjiang does not make all intercity journeys short or direct.",
      },
    ],
    serviceScope:
      "A tailored proposal can specify the city room, exact gateway, selected neighborhood route, guide language, meals and any separate countryside base. A public neighborhood walk, a commercial cultural presentation and a hosted home visit have different access and participants; name the real arrangement only when confirmed. For foreign travelers, review actual hotels and every intended excursion before treating the route as ready to book. Any border-area or route-specific requirements need current confirmation. A private vehicle does not remove restrictions, weather closures or the need for suitable internal transport, riding or walking arrangements.",
    routeAdvice:
      "Use Yining as one chapter of a deliberately paced Ili journey, choosing a limited number of countryside bases rather than returning to the city from every distant landscape. Kashgar offers a different southern Xinjiang oasis-city interest; Dunhuang and Xining are separate destinations farther east. No matching published Yining product is recommended here, and the existing Ningxia itinerary does not include Ili. Request a tailored route with actual nights, full road days and named visits, using the illustrative city framework before adding the wider valley.",
    practicalPlanning: {
      timing:
        "Confirm meeting times explicitly in Beijing time, UTC+8, or the clearly agreed convention; do not let an informal local reference conflict with ticketed transport. Give selected neighborhoods enough time for a meal and questions. On a countryside route, compare the whole day including entry procedures, internal transport and hotel arrival, not only the drive between map points. A long daylight window does not mean every business, host or visitor service remains available late.",
      walking:
        "City lanes, thresholds and standing differ from grassland slopes, lake exposure and higher mountain routes. Set a comfortable urban walk and seated breaks first, then assess each countryside activity separately. Scenic-area vehicles can reduce some walking without making every viewpoint step-free. Riding is not an automatic shortcut: it needs a suitable provider, horse, equipment and ability assessment. A remote overnight should also be reviewed for steps, bathroom access, temperature control and the route to meals.",
      cost: "Compare room categories, full vehicle days, guiding language, admissions, internal scenic transport and meal arrangements. A countryside stay can have fewer alternatives and more variable facilities than a city hotel. Riding, a hosted session, equipment and particular viewpoints may involve separate services or charges. Ask what happens when a road, season or activity changes. A premium route should improve comfort, interpretation and usable time rather than promise a luxury camp or private pasture without evidence.",
    },
    attractions: [
      "Kazanqi / Kazanchi, on a selected public or confirmed hosted neighborhood route",
      "Liuxingjie / Six Star Street, with present-day residential and commercial use explained",
      "A selected Ili River city-side walk with the actual access and conditions reviewed",
      "A suitable regional meal and a defined cultural or craft subject with a real provider",
      "A Huocheng-area lavender interest only when location, season and access justify it",
      "Sayram Lake, Nalati, Kalajun, Tekes or Zhaosu as separately chosen regional chapters",
    ],
    stays: [
      {
        label: "2 nights: one useful city introduction",
        advice:
          "Choose a manageable neighborhood route, a proper meal and one complementary interest. Allow the complete airport or station transfer. A short city stay should not promise every valley landscape or make a long return drive the only full day's activity.",
      },
      {
        label: "3 nights: an easier city stay with a second subject",
        advice:
          "Add a defined food, cultural or appropriately routed nearby interest rather than another similar commercial street. Keep a useful evening and enough rest after a long arrival. A second full day does not automatically make distant grasslands and Sayram Lake one comfortable combined outing.",
      },
      {
        label: "5–7 nights or more: a selected wider route",
        advice:
          "Combine Yining with one or two different countryside bases when actual travel and conditions justify them. Choose the lake, pasture or village subject first, then the nights. This is not enough by definition for all of Ili; a wider itinerary may need more time or fewer stops to remain comfortable.",
      },
    ],
    hotelAreas: [
      {
        name: "Yining city / modern comfort and access",
        advice:
          "Compare the quoted room, quiet, bathroom, climate control, breakfast and pickup with the actual sightseeing and dinner addresses. A modern hotel can support a rich local visit without a themed setting. Confirm guest arrangements for the intended travelers rather than assuming every property and booking channel serves the same needs.",
      },
      {
        name: "A neighborhood or characterful city property",
        advice:
          "Check the real walk, room privacy, noise, stairs and final luggage approach. A colorful courtyard or heritage-style facade does not establish that the building is unchanged, that the stay includes a home visit or that every room has modern facilities. Choose it for a verified improvement to the daily experience.",
      },
      {
        name: "A lake or grassland overnight / a separate base",
        advice:
          "Name the actual property, road access, sleeping elevation, bathroom, heating, meals and current season. A yurt, cabin, tent and hotel are different accommodations. Photography of the setting does not establish insulation, electricity, sanitation or private facilities. Keep a realistic alternative if the remote stay cannot meet the group's comfort needs.",
      },
      {
        name: "A county-town base on the wider route",
        advice:
          "A named property in the relevant county can provide a practical alternative to a scenic camp. Compare the full next-day transfer, dinner and room comfort. Tekes, Zhaosu and other county bases are not equivalent Yining city neighborhoods and should be assessed around the chosen landscape chapter.",
      },
    ],
    tradeoffs: [
      {
        title: "Yining, Yining County and Ili are not interchangeable addresses",
        advice:
          "Yining city and Yining County are separate administrative entities; a booking using only the shared English name can be misleading. Ili or Yili commonly describes a much wider travel region, while the prefecture's administrative scope and a visitor's valley route are not identical concepts. Use Chinese hotel and venue addresses, full stations and actual counties to establish what the itinerary covers. A regional label cannot substitute for usable route detail.",
      },
      {
        title: "Neighborhood color is an introduction, not a private cultural appointment",
        advice:
          "Kazanqi and Liuxingjie contain living neighborhoods as well as visitor-facing businesses. A public walk can be rewarding with good explanation, but does not grant access to courtyards, homes or musical gatherings. A horse carriage, performance or hosted session is a separately confirmed choice, not proof of unchanged daily life. Ask consent for photography and distinguish current commercial presentation from residential space.",
      },
      {
        title: "Sayram Lake is a different landscape chapter in Bortala",
        advice:
          "The lake is often combined with an Ili journey, but it is not within Yining city or simply another urban attraction. Check the full route, designated access, internal circulation, weather exposure and any overnight. A roadside view and a substantive lake visit have different time needs. Visiting the lake does not itself establish access to a border area, private pasture or every surrounding road.",
      },
      {
        title: "Choose among the grasslands rather than treating them as one park",
        advice:
          "Nalati, Kalajun and Zhaosu-area interests have different bases, routes and visitor arrangements. Select by landscape, walking, actual activity and the complete onward journey. A scenic-area shuttle, a local riding provider and a hosted pastoral visit are different services. Do not guarantee wildflowers, grazing scenes or a particular family's availability from a photograph or a broad season description.",
      },
      {
        title: "Lavender is a seasonal interest, not a year-round city attraction",
        advice:
          "A Huocheng-area lavender visit needs a specific location, current crop stage and access. A shop, display garden, harvested field and flowering production landscape offer different experiences. Confirm conditions near travel and retain another useful subject. A fixed calendar promise can disappoint, and a day should not depend on a bloom that has not been checked.",
      },
      {
        title: "A scenic overnight needs a comfort audit as well as a view",
        advice:
          "Ask what the sleeping arrangement actually provides: bed, bedding, bathroom, hot water, heating, electricity and dinner. Higher or more exposed settings can differ sharply from Yining city's conditions. A yurt can be a specific accommodation choice without being called a luxury camp. Review suitability, access and a fallback before using a remote night as the centerpiece of a premium route.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "sayram-lake",
        advice:
          "Sayram Lake lies in Bortala and deserves its own route and room assessment. Compare a focused lake visit with one or two local nights, using the complete road and actual public access. A Yining room does not provide lakeside sunrise access, and a lake circuit should not displace useful city time.",
      },
      {
        slug: "urumqi",
        advice:
          "Urumqi adds regional museum context and a separate urban gateway. Use dated services and both hotel transfers before deciding its role. A city introduction and an optional Tianchi outing should not consume the useful days intended for Ili countryside bases.",
      },
      {
        slug: "kashgar",
        advice:
          "Kashgar offers a different southern Xinjiang oasis-city chapter, with old-city architecture, food and craft choices distinct from Ili's valley route. Give both usable nights and confirm actual transport. A thematic regional pairing is not evidence of a short drive or daily direct flight.",
      },
      {
        slug: "dunhuang",
        advice:
          "Dunhuang introduces a separate Gansu cave-art and oasis-landscape subject farther east. Build the connection through real flights or rail and keep Mogao's booking process distinct. It is not an extra sightseeing stop within a Yining or Ili day.",
      },
      {
        slug: "xining",
        advice:
          "Xining adds Qinghai's city collections and a separate plateau-travel context. Choose it for that different interest, with its own transport, nights and higher-altitude decisions. Shared northwest geography does not make it a convenient local extension of an Ili road route.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Late spring through early autumn can support some valley and grassland interests, but flowering, grazing, road access and visitor services vary by place and year. Summer can be busy, with strong sun and a need for shade and rest. Autumn brings changing conditions; winter is a different cold-weather trip, not the same pasture itinerary with fewer people. City weather does not establish conditions at a lake or higher overnight. Choose actual dates, roads and accommodation rather than promising one season's photographs throughout the valley.",
    orientation:
      "Yining city, also called Ghulja or Gulja, is a distinct urban base within the wider Ili region. Yining County is a different entity. Kazanqi and Liuxingjie are city neighborhood interests; Sayram Lake lies in Bortala, and Nalati, Kalajun, Tekes and Zhaosu call for different regional plans. Use precise Chinese places and full addresses. A tourism map can connect names while concealing the amount of driving, internal transport and hotel movement needed to visit them well.",
    experiences: [
      "Explore selected Yining neighborhoods with architecture, current use and community context thoughtfully explained",
      "Enjoy a regional meal or a confirmed cultural subject without assuming private home or performance access",
      "Choose one or two distinct countryside chapters with actual bases, usable days and realistic accommodation",
    ],
    planningNotes: [
      "Distinguish Yining city, Yining County and the wider Ili route in every hotel and transport booking",
      "Confirm road conditions, traveler-specific arrangements, actual hosts and scenic-area services before fixing the wider itinerary",
      "Compare complete road days and remote-room facilities instead of using map proximity or landscape photographs as proof of comfort",
    ],
    arrival:
      "Yining Airport uses code YIN; the railway station creates a separate city transfer. A flight to another Xinjiang airport is a different road plan and should not be sold as arrival beside Yining's neighborhoods. Confirm the dated service, full station or airport, luggage and hotel address. Keep the essential host or onward grassland departure away from an uncertain connection. Write meeting-time convention clearly, especially when informal local references differ from Beijing time used in official transport arrangements.",
    gettingAround:
      "Combine selected city walks with planned transfers between separate areas. A vehicle may not reach every residential lane or courtyard, and a public route does not include private interiors. A wider Ili itinerary needs explicit daily driving, rest stops, meals and the actual scenic-area transport. Review riding, boating or a highland walk separately; a car and driver do not make those activities included or suitable for every participant. Do not let a long driving day quietly become a promised full sightseeing day.",
    stayStrategy:
      "Use one Yining base for the city introduction, then move only when the next subject merits its own stay. Compare modern room comfort with a characterful property using the actual category and facilities. For remote nights, inspect the practical offer rather than relying on a camp label. A more comfortable county-town hotel may be the better choice for the group. A premium itinerary should reveal the full travel burden and protect enough usable time at each base.",
    firstTimerNote:
      "The best Ili route is selective. Begin with a city introduction and decide whether a lake, a grassland walk, a riding interest or a quieter countryside stay is the real priority. You do not need every famous landscape in one trip. Reducing similar stops can improve the interpretation, meals and overnight comfort, while making the full journey more enjoyable and easier to adjust when conditions change.",
    faqs: [
      {
        question: "Are Yining, Ghulja and Ili the same place?",
        answer:
          "Ghulja or Gulja is another name for Yining city. Ili or Yili describes a wider regional context, not simply the same city. Yining County is also separate from Yining city. Use full Chinese property and venue addresses to establish the actual destination and local transfer.",
      },
      {
        question: "How many nights should I spend in Yining?",
        answer:
          "Two nights give one full city day; three allow a slower introduction and another selected interest. A wider five- to seven-night or longer route can add one or two countryside bases when the roads and conditions fit. That does not automatically cover every Ili lake and grassland.",
      },
      {
        question: "Should I visit Kazanqi or Liuxingjie?",
        answer:
          "Choose by the actual route, interpretation and available time; they offer different neighborhood settings rather than one interchangeable photo stop. A public walk does not guarantee courtyard or home access. A hosted session, carriage ride or performance needs a separate confirmed arrangement and should not be assumed part of daily residential life.",
      },
      {
        question: "Can I visit Sayram Lake, Nalati and Kalajun from one Yining base?",
        answer:
          "Review the complete individual routes and usable days before choosing a base. They are separate regional chapters, not adjacent city sights. A wider itinerary may work better with selected countryside or county-town overnights, or fewer stops, rather than repeated long return drives from Yining.",
      },
      {
        question: "Is Sayram Lake part of Yining city?",
        answer:
          "No. It is a separate high-lake landscape in Bortala, often combined with an Ili journey. It needs its own route, current access and weather review. A lake visit should not be treated as a brief urban walk or as permission to use every surrounding road or private land.",
      },
      {
        question: "When can I see lavender near Yining?",
        answer:
          "Treat lavender as a site-specific seasonal interest, often associated with the Huocheng area. Confirm the actual field, crop stage and access near travel. A shop or display garden is different from a flowering production landscape, and no fixed date guarantees the scene shown in a photograph.",
      },
      {
        question: "Is a grassland yurt stay a luxury hotel experience?",
        answer:
          "Not automatically. Check the real bed, bedding, bathroom, hot water, heating, electricity, meals and access. A yurt, tent, cabin and hotel provide different facilities. Choose a remote overnight only when it suits the group and has a realistic fallback; a scenic setting does not establish premium comfort.",
      },
      {
        question: "Can foreign travelers visit every Ili route?",
        answer:
          "Do not assume this from a general Yining city booking. Review the exact traveler, accommodation and each countryside or border-area excursion with the responsible parties for the intended dates. A private vehicle does not grant route permission or remove closures and local operating conditions.",
      },
      {
        question: "Can I combine Yining and Kashgar?",
        answer:
          "Yes, when their different city and landscape interests justify separate stays and the actual transport works. They are not nearby day-trip destinations. Confirm dated services, complete local transfers and usable nights rather than assuming a short direct connection across Xinjiang.",
      },
    ],
    culturalStory: {
      title: "Read a neighborhood through its present life as well as its architecture",
      paragraphs: [
        "Yining's city neighborhoods can introduce a region shaped by different communities, exchanges and ways of living. Colorful facades are a starting point for questions, not the whole explanation. A good route distinguishes public streets, contemporary businesses, restored settings and residential spaces, while avoiding the suggestion that every community shares one culture or exists to perform for visitors. Kazakh, Uyghur and other local histories deserve their own context rather than a generic minority label.",
        "If music, making or a hosted conversation matters, identify the people, topic, language and permissions behind the arrangement. A public walk can remain valuable without entering a home. The wider pastoral landscape also requires a real provider for any riding or hosted activity; a herd in a photograph does not establish an invitation. Thoughtful interpretation can connect city and countryside while respecting the different places and people involved.",
      ],
    },
    foodStory: {
      title: "Let a meal explain regional variety without flattening it",
      paragraphs: [
        "A Yining meal can introduce suitable breads, noodles, pilaf, dairy or meat dishes while allowing a host to explain the particular preparation and its context. Choose a few contrasting dishes rather than treating every community's food as one standard Xinjiang menu. Dairy and sweet drinks may be a useful subject for some guests, but are not compulsory. A comfortable seated meal can provide more understanding than another hurried snack stop between distant landscapes.",
        "Clarify wheat, milk, nuts, stocks, meat and shared preparation, with real alternatives for dietary requirements. Confirm halal suitability at the actual venue against the guest's needs rather than inferring it from a neighborhood or regional label. On a countryside route, establish meal timing and available choices before leaving the city. A scenic camp may have a limited kitchen, and a promised local welcome drink should not substitute for a properly planned dinner.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the actual city base",
        description:
          "Transfer from the named airport or station to the confirmed room and agree meeting-time convention. Keep the first meal straightforward. Add a short nearby introduction only if timing allows, leaving essential hosts and onward landscape travel a reliable window.",
      },
      {
        day: "Full day 1",
        title: "Neighborhoods, context and a good meal",
        description:
          "Use a selected Kazanqi or Liuxingjie route with current use and community context explained. Add a proper regional meal and another nearby interest only when it deepens the day. Private interiors, performances and hosted encounters require explicit confirmation rather than being assumed from the neighborhood name.",
      },
      {
        day: "Optional second full day",
        title: "A different city interest or carefully selected outing",
        description:
          "Use a third city night for a defined food, cultural or suitably routed nearby subject. A lavender visit needs actual seasonal conditions confirmed. Do not promise a comprehensive lake-and-grassland circuit as a spare afternoon after the city walk.",
      },
      {
        day: "Departure or separately planned valley route",
        title: "Give the next landscape its own time",
        description:
          "Continue to a selected countryside base or allow the full airport or station transfer. A wider route needs its own nights, access, physical demands and accommodation review. This two-night city outline with an optional third night is illustrative, not a published product or guarantee of bloom, private pasture or host availability.",
      },
    ],
  },
};
