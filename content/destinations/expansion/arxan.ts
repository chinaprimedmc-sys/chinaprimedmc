import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/arxan.svg",
  alt: "Arxan planning schematic separating city accommodation, selected national forest park walks and a separate Hulunbuir connection; original diagram, not a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const arxanGuide: ExpandedDestination = {
  id: "arxan",
  name: "Arxan",
  region: "north",
  kicker: "Forest, volcanic landscapes and time to enjoy them",
  description:
    "Choose Arxan for forest walks and volcanic scenery, comparing town and park accommodation, actual walking routes and a separately timed Hulunbuir extension.",
  stay: "3–4 nights for a selective forest-and-town stay",
  bestFor: "Forest scenery, volcanic landscapes and a quieter pace between long journeys",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["hulunbuir", "hohhot", "beijing"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Arxan Travel Guide: Forest Park, Hotels & Walking",
    seoTitle: "Arxan Travel Guide: Forest Park, Hotels & Walking",
    seoDescription:
      "Plan Arxan / Aershan with town vs forest-park stays, Tianchi walking choices, seasonal conditions, hot-spring checks and a realistic Hulunbuir connection.",
    answer:
      "Arxan (阿尔山), also written Aershan, is a county-level city in Hinggan League in northeastern Inner Mongolia, China. Choose it for forest, volcanic lakes and lava landscapes, with Arxan National Forest Park as a major but separate part of the stay. The city center, airport and different park entrances or accommodation areas are not one compact resort. Three to four nights can give two or three useful days when the actual gateways work. Choose a small number of walks and a comfortable base rather than race between every lake. Arxan is not administratively part of Hulunbuir; combining the two requires a substantial regional journey and separate nights.",
    stayAnswer:
      "Three nights can allow two selected days for forest scenery, town time and rest, subject to arrival and departure. Four nights provide more flexibility for a second park subject, a slower day or weather changes. Two nights are best treated as a narrower visit when gateways and roads leave a real full day. A park itinerary should account for hotel-to-entrance travel, ticket procedures, current internal transport and remaining walking. Add any Hulunbuir chapter separately: a long arrival drive and early departure do not create two forest days simply because a hotel is booked for two nights.",
    hotelAnswer:
      "Compare a named city-center or nearby urban property for meals, room choice and town time with a confirmed park-area stay for its actual access and setting. Yiershi is another practical location, particularly for some gateway movements, but should not be presented as the same hotel zone as central Arxan. Park accommodation may reduce a particular daily journey while offering fewer dining or room options. Check the exact address, room, heating, hot water, bedding, bathroom, stairs, food and seasonal operation. A forest view, mineral-water bath or luxury lodge standard needs evidence for the booked unit, not an assumption from the destination's name.",
    sightseeingQuestion: "Which Arxan forest park visits are worth prioritizing?",
    sightseeingAnswer:
      "Choose by landscape and effort rather than try to collect every attraction. Tianchi and Tuofengling Tianchi are different volcanic-lake visits with their own access and walking; a shared Tianchi name does not make them the same stop. Shitanglin's lava landscape offers another geological subject, while selected forest, river or lake paths can provide a gentler contrast if their actual route suits. Check the current park operating map, entrances, internal transport and open trails before fixing the day. A boardwalk does not by itself mean a level, short or wheelchair-accessible route. One well-explained lake and a contrasting landscape can make a stronger day than several rushed viewpoints.",
    visitorResources: [
      {
        label: "Arxan municipal government",
        href: "https://www.aes.gov.cn/",
        scope:
          "City context and public notices, mainly in Chinese. Confirm forest-park entry, open paths, transport and any bathing venue with the actual operator. Background information does not establish a dated ticket, accommodation facility or permitted activity.",
      },
      {
        label: "Inner Mongolia regional information portal",
        href: "https://www.goinnermongolia.com.cn/",
        scope:
          "Regional visitor background. Arxan and Hulunbuir are different administrative and travel settings; regional promotion does not verify a seamless route, fixed color dates or year-round operation of a particular property.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official reference for dated trains and full station names. Check the actual Arxan-area station on the ticket and the complete hotel transfer. Do not infer a frequent or high-speed service from a scenic railway-station photograph.",
      },
    ],
    serviceScope:
      "A proposal should name each hotel and room, actual gateway, park entry arrangement, intended paths, internal transport, guide language and meals. Explain any walking limitation and a suitable shorter alternative. A hot-spring session, guided nature walk, photography service or other specialist experience needs a real provider and separate confirmation. Private road transport does not authorize private-car access to every park road, closed trail or viewpoint. Establish the guest-specific route and accommodation arrangements, particularly for any border-area extension, without inventing a blanket permit requirement for the entire destination.",
    routeAdvice:
      "Plan Arxan as a forest chapter with enough time to enjoy it, then compare a separately chosen Hulunbuir grassland route if the total holiday allows the complete drive. The regional road connection should state useful stops, meals, actual overnight locations and the next day's effort. Hohhot and Beijing are different city chapters with dated transport to check. No matching published Arxan itinerary is recommended here. For a tailored request, share dates, full gateways, walking and step tolerance, maximum comfortable driving, room requirements and whether forests or grasslands are the main purpose. Ask for a clear explanation of what the planner would omit.",
    practicalPlanning: {
      timing:
        "Build the park day from the actual accommodation address and current entry or internal-transport arrangement. Select one principal lake or geological subject and a manageable contrast, allowing lunch, toilets, rest and return transport. Do not use the entire day for repeated transfers while describing it as leisurely walking. Autumn scenery can draw strong demand; current weather and daylight should shape the route. Keep a long onward journey on a separate day where possible and do not promise a late forest walk before an uncertain final shuttle or pickup.",
      walking:
        "Volcanic-lake viewpoints may require steps, slopes and a sustained climb. Lava and forest routes can include boardwalks, uneven surfaces and exposed or slippery sections. Review the actual route length, ascent, handrails, resting places and return method. A short-looking map line or scenic vehicle does not establish how much walking remains. Ask for a genuinely shorter option for limited mobility and reassess in rain, ice or wind. Suitable footwear, layers and a practical pace matter more than completing every named viewpoint.",
      cost: "Compare the exact room, heating and breakfast with full gateway transfers, private vehicle hours, guide language, park admission, current internal transport and named walks. Clarify any re-entry or multi-day ticket conditions with the operator rather than assume one purchase covers every day and service. Bathing, specialist interpretation and extra regional driving need separate scope. A premium should buy comfortable sleep, well-chosen routes and useful local time, with facilities that can be identified before booking.",
    },
    attractions: [
      "Arxan National Forest Park through selected currently open routes",
      "Tianchi as a specific volcanic-lake visit with its own walking assessment",
      "Tuofengling Tianchi as a different lake and access decision",
      "Shitanglin lava landscape with a chosen path and geological explanation",
      "A selected forest, river or lake walk matched to conditions and mobility",
      "Arxan town and its railway-station architecture, with current visitor access respected",
      "A specifically reviewed bathing venue, if wanted, rather than an assumed hotel inclusion",
    ],
    stays: [
      {
        label: "2 nights: one focused day when gateways fit",
        advice:
          "Choose a narrow introduction with a real full day between transfers. Confirm the actual room-to-park journey and a manageable route. This is not a promise to see every lake, enjoy a spa day and complete a distant grassland extension.",
      },
      {
        label: "3 nights: two useful days",
        advice:
          "Give the main park subject a full day and use the second for a contrasting route, town time or a slower pace. Choose the base around those visits and the gateway. A quiet afternoon or shorter walk can add more value than another lengthy transfer.",
      },
      {
        label: "4 nights: depth and weather flexibility",
        advice:
          "Use extra time for a distinct landscape subject or a more restful stay, keeping current opening and facilities in mind. A hotel move should improve access or comfort rather than merely increase variety. Hulunbuir grasslands still need their own road plan and nights beyond the Arxan chapter.",
      },
    ],
    hotelAreas: [
      {
        name: "Central Arxan / town meals and a conventional base",
        advice:
          "Choose a real hotel around room quality, dining and the intended town interests. Check heating, hot water, lift, pickup and the full park journey. A city-center room can simplify evenings while lengthening scenic days, so assess both parts of the stay.",
      },
      {
        name: "Yiershi area / a specific gateway and road pattern",
        advice:
          "Compare the actual property with the airport or station on the ticket and the selected park approach. Yiershi is not a generic label for all Arxan accommodation. Verify meals, noise, room comfort and the onward road rather than choose solely from a map pin close to one transport point.",
      },
      {
        name: "A confirmed forest-park-area property / scenery and access tradeoffs",
        advice:
          "Obtain the precise address, operating dates, guest reception confirmation and journey to the intended entrance or internal transport. Ask about bathroom, heating, bedding, power, hot water and dinner. A rural location can provide atmosphere without matching a city hotel's facilities; an inside-the-park claim does not guarantee private road access or views from the room.",
      },
    ],
    tradeoffs: [
      {
        title: "Different Tianchi visits require different decisions",
        advice:
          "Tianchi means heavenly lake and is used in many places. Within this itinerary, Tianchi and Tuofengling Tianchi are distinct visits; Xinjiang's Tianchi is another destination entirely. Name the actual lake, ascent, paths and transport. Avoid selling several viewpoints as interchangeable easy stops simply because their translated names sound similar.",
      },
      {
        title: "Park transport and a private vehicle serve different roles",
        advice:
          "Confirm which roads the booked vehicle may use and where current park transport is required or available. Account for waiting, stop order, remaining walking and the final return. A private guide can improve explanation and timing without removing public transport rules or providing access to closed trails.",
      },
      {
        title: "Town comfort and forest proximity are both valid priorities",
        advice:
          "A town room may offer more dining and dependable facilities but require longer scenic transfers. A park-area stay can improve a specific route while limiting meal choice or room comfort. Compare actual properties and whole days. Do not assume remote means exclusive or that every cabin is a high-end retreat.",
      },
      {
        title: "Autumn colors need flexibility rather than a fixed promise",
        advice:
          "Late-summer and autumn interest depends on the vegetation, elevation and weather at the chosen site. A published seasonal photograph is not proof of color on a specific date. Plan a worthwhile forest-and-geology visit regardless, and adapt the walks to actual conditions. Snow or frost can affect effort and road access before a guest expects winter.",
      },
      {
        title: "Hot springs require a venue-level check",
        advice:
          "The destination's bathing reputation does not establish the water source, privacy or facilities in your hotel room. Confirm the actual venue, shared or private format, clothing rules, water and facility information, hygiene arrangements and booking inclusion. Do not promise therapeutic benefits. Guests with medical concerns should make their own suitability decision with an appropriate clinician.",
      },
      {
        title: "The non-freezing river is a seasonal subject, not a winter safety claim",
        advice:
          "The Budong River (不冻河) name is commonly associated with sections that can remain flowing in cold weather, but it does not establish safe banks, access, weather or a guaranteed photographic scene. Use the correct local site and current visitor route. Never infer that ice nearby is safe to walk on or that a winter visit can use a summer plan unchanged.",
      },
      {
        title: "A Hulunbuir extension should earn the road time",
        advice:
          "Arxan's forests and volcanic scenery contrast with a selected Hulunbuir grassland stay, but they are separate chapters. Compare the full transfer, not simply the administrative borders or a regional loop name. A short holiday may be better spent in one area. An open-jaw itinerary can help only when actual dated transport and the vehicle arrangement support it.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "hulunbuir",
        advice:
          "Hulunbuir adds a carefully selected grassland-and-Ergun journey. Choose actual overnight locations and allow a substantial connecting road day with meals and rest. Arxan is in Hinggan League, not Hulunbuir; a shared regional-tour label should not hide the distance or add every northern forest and border stop to the same short circuit.",
      },
      {
        slug: "hohhot",
        advice:
          "Hohhot adds temple-city history and different grassland choices in central Inner Mongolia. Compare actual transport and useful nights. It is far from Arxan and should not be treated as the nearby city base for the national forest park.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing provides a different capital-and-Great-Wall chapter. Check dated flights or other proposed transport and both hotel transfers, allowing proper city time. Existing Beijing products do not include Arxan park days, rooms or road services unless separately agreed.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Summer can suit forest walks and lake scenery, with variable rain, insects and cool evenings. Autumn is often considered for changing forest colors, but the window varies by location and weather and can bring cold mornings or frost. Spring thaw can affect paths and ground conditions. Winter requires suitable clothing, vehicles, heated accommodation and a separately confirmed route; seasonal camp or park services may differ. Choose dates around a realistic landscape interest and current operation rather than guarantee fall color, deep snow or a specific flowing-river photograph.",
    orientation:
      "Arxan / Aershan is a county-level city within Hinggan League, Inner Mongolia. Its central town, Yiershi area, airport and national forest park create different transfer patterns. The park itself has multiple named sites and access decisions; a city-center hotel is not at every trailhead. Hulunbuir is a separate administrative region farther north. Use the full Chinese address, actual station or airport booking and intended park entrance when comparing transport and accommodation.",
    experiences: [
      "Understand one volcanic lake and a contrasting lava or forest landscape",
      "Stay somewhere comfortable enough to enjoy the quiet time between outings",
      "Choose a slower second subject instead of collecting every viewpoint",
    ],
    planningNotes: [
      "Separate town, Yiershi and park-area accommodation before comparing daily journeys",
      "Name the lake and actual steps, internal transport and remaining walking",
      "Give any Hulunbuir extension its own full road sequence and useful nights",
    ],
    arrival:
      "Check the actual Arxan-area airport or station on the dated booking, using full names for pickup. A regional arrival still leaves a separate transfer to the city or park-area property. Services and connections can vary by date, so do not infer availability from a general route map. Allow luggage, the real road journey, check-in and dinner before planning an arrival walk. If arriving from Hulunbuir by road, keep that day's sightseeing selective and protect the next morning's energy.",
    gettingAround:
      "Use suitable confirmed road transport for the gateway and permitted inter-site journeys, with current forest-park transport arrangements explicitly described. Select coherent walks rather than drive past every sign. A scenic shuttle stop may still leave steps, slopes or a substantial path. Follow open-route and fire-prevention instructions, with no off-road detours or drone use assumed. For winter or remote travel, establish vehicle suitability, communication, meals and the response to closures before departure.",
    stayStrategy:
      "Begin with the exact visits, then compare a town base with a park-area stay. Three or four nights do not require several hotels if one property works comfortably. A move can be worthwhile when it materially reduces repeated road time, but check the new room and meal standard first. Aim for an evening with enough time to eat and rest, not a series of late check-ins. Good heating, a dependable shower and a clear breakfast arrangement can matter more than a decorative forest-lodge label.",
    firstTimerNote:
      "Arxan is most rewarding when the trip lets you notice the differences between a volcanic lake, a lava landscape and the forest around them. Choose routes you can enjoy physically and give the guide a clear subject to explain. The best plan may include fewer stops, a shorter walk and more time in a comfortable room. If grasslands are the main holiday purpose, weigh whether the Arxan road connection adds enough value before attaching it to Hulunbuir.",
    faqs: [
      {
        question: "Are Arxan and Aershan the same place?",
        answer:
          "Yes. These are English spellings used for 阿尔山 in Inner Mongolia. Specify the actual city hotel, Yiershi address or forest-park property because the destination name alone does not identify one compact accommodation area.",
      },
      {
        question: "Is Arxan part of Hulunbuir?",
        answer:
          "No. Arxan is a county-level city in Hinggan League. Hulunbuir is a separate large administrative region. The two can be combined when the full road journey and useful nights fit, but a shared tour-region label does not make them nearby attractions within one city.",
      },
      {
        question: "How many days do I need in Arxan?",
        answer:
          "Three to four nights can provide two or three useful days for selected forest-park subjects and rest, depending on gateways. Two nights should stay focused. Include hotel-to-entrance travel, current internal transport and remaining walking rather than count hotel nights as full park days.",
      },
      {
        question: "Should I stay in Arxan town or near the forest park?",
        answer:
          "Compare the complete daily route and actual facilities. Town can simplify meals and room choice; a park-area property may reduce a particular journey but have more limited facilities. Check heating, hot water, bathroom, food, seasonal operation and exact access before choosing.",
      },
      {
        question: "Are Tianchi and Tuofengling Tianchi the same Arxan visit?",
        answer:
          "No. Treat them as different lake visits with separate access and walking. Ask which route is proposed, how much climbing remains and what the return involves. The name Tianchi is used elsewhere in China too and should never stand alone in a pickup or itinerary description.",
      },
      {
        question: "Can I drive a private car to every Arxan forest park attraction?",
        answer:
          "Do not assume that. Confirm current park traffic rules, permitted roads and internal transport with the operator for your dates. Private guiding does not override scenic-area controls or remove the walking between a stop and the actual viewpoint.",
      },
      {
        question: "When is the best time for Arxan autumn colors?",
        answer:
          "Autumn timing varies by vegetation, location and weather. Choose a date range with local advice, allowing cold mornings and possible frost, and plan worthwhile forest and geology visits even if peak color shifts. A specific photograph or month does not guarantee the scene on your dates.",
      },
      {
        question: "Does an Arxan hotel booking include hot-spring bathing?",
        answer:
          "Only if the actual room or service agreement says so. Check the venue, water and facility information, private or shared format, clothing rules and inclusion. A spa label or bathing reputation does not establish a mineral-water bath in the booked room or any health benefit.",
      },
      {
        question: "Is a published Arxan private tour recommended here?",
        answer:
          "No matching published product is recommended. Request a tailored plan with dates, actual gateways, walking and step tolerance, room needs and maximum comfortable driving. The proposal should specify included park services, actual accommodation and any separately chosen Hulunbuir extension.",
      },
    ],
    culturalStory: {
      title: "Learn to read a landscape before adding another stop",
      paragraphs: [
        "A volcanic lake and a lava landscape tell different parts of a geological story. The shape of a basin, visible rock and surrounding vegetation can become the subject of a walk when interpretation relates to what guests can actually see. Distinguish a general geological explanation from a claim about the exact age or formation of a particular feature unless supported by the relevant evidence. A good visit leaves guests with a clearer understanding rather than just another translated attraction name.",
        "Arxan's urban and railway history provides a separate human context. The station's architecture can be appreciated within current public-access rules; an operating transport building is not automatically an open museum or private photography set. Forest management and conservation also shape where visitors may go. Explain current permitted routes and present-day use honestly rather than describe every accessible path as untouched wilderness. Staying on the route is compatible with a rich visit when the subject and pace are well chosen.",
      ],
    },
    foodStory: {
      title: "Plan warm meals as carefully as viewpoints",
      paragraphs: [
        "A forest day is more comfortable when lunch and the evening meal are decided before the vehicle leaves. Ask what the actual kitchen can prepare, how long serving takes and whether the meal fits the walking schedule. Regional meat dishes, noodles or other home-style cooking can provide a satisfying introduction without a compulsory banquet. A remote property may need advance notice for dinner and breakfast, making a dependable simple meal more valuable than a long menu with uncertain availability.",
        "Discuss meat stock, dairy, wheat, soy, mushrooms and shared cooking equipment with the kitchen. A forest-food label does not establish ingredient origin, safety or dietary suitability. Choose properly sourced ingredients and avoid informal mushroom gathering or tasting. Vegetarian requests and serious allergies need preparation capacity and a practical alternative. If an itinerary includes any host or cooking session, agree the people, language and content separately; a restaurant booking alone is not a private cultural encounter.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the actual accommodation and settle in",
        description:
          "Use the booked gateway or full regional road transfer, check the room and allow a warm meal. Keep any short town walk optional. Do not make a distant timed park visit depend on an uncertain arrival.",
      },
      {
        day: "First full day",
        title: "A selected lake and a contrasting landscape",
        description:
          "Follow the confirmed park access and internal transport plan. Choose a lake route that suits the group's step tolerance, then add a manageable lava or forest subject with explanation, lunch and rest. Omit extra viewpoints if they crowd the return.",
      },
      {
        day: "Second full day",
        title: "A different subject or a deliberately slower day",
        description:
          "Use another appropriate open route, town interest or specifically booked bathing session according to weather and energy. A fourth night can provide a further useful day or flexibility. Confirm actual facilities and access rather than assume every option is included.",
      },
      {
        day: "Departure",
        title: "Continue with a realistic road or gateway plan",
        description:
          "Allow the complete station or airport journey, or a separate Hulunbuir transfer day with meals and rest. This three-to-four-night outline is illustrative, not a published package or a promise of autumn color, park transport, bathing facilities or unrestricted access.",
      },
    ],
  },
};
