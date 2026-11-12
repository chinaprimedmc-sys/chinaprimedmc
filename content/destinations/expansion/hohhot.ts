import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/hohhot.svg",
  alt: "Hohhot planning diagram separating city temples and food, a selected grassland excursion and a separately reviewed overnight stay; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const hohhotGuide: ExpandedDestination = {
  id: "hohhot",
  name: "Hohhot",
  region: "north",
  kicker: "Temple-city history, regional food & a carefully chosen grassland chapter",
  description:
    "Give Hohhot's religious and trading history its own time, then decide whether a particular grassland route and actual accommodation add value beyond a hurried excursion.",
  stay: "2–3 city nights; longer with a grassland stay",
  bestFor: "Temple history, regional food and a considered grassland introduction",
  interests: ["heritage", "food", "landscape"],
  relatedDestinationIds: ["hulunbuir", "beijing", "datong", "yinchuan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Hohhot Travel Guide: Temples, Grasslands & Where to Stay",
    seoTitle: "Hohhot Travel Guide: Temples, Grasslands & Hotels",
    seoDescription:
      "Plan Hohhot with city-temple choices, Xilamuren vs Huitengxile context, grassland-stay checks, regional food, hotel areas and exact gateway transfers.",
    answer:
      "Hohhot (呼和浩特), also written Huhhot, is the capital of Inner Mongolia Autonomous Region in northern China. Visit for its Buddhist temple history, distinct regional food and the context it gives to a separately chosen grassland journey. Inner Mongolia is part of China and is different from the neighboring country of Mongolia. Hohhot is a city, not a grassland camp: its temples, meals and urban life deserve time of their own. Xilamuren and Huitengxile are different grassland destinations beyond the city, while Hulunbuir is a much farther regional journey rather than another nearby Hohhot excursion.",
    stayAnswer:
      "Two city nights usually give one full day for selected temples, neighborhood context and a regional meal. Three nights provide another day for a collection or a carefully assessed excursion. If a grassland overnight matters, add the actual road journey and camp nights rather than assuming it fits inside the same city stay. A short day trip can suit a landscape introduction; an overnight is valuable only when the setting, room and experience justify it. Count useful full days separately from hotel nights and long transfers.",
    hotelAnswer:
      "Compare an actual old-city or Dazhao-area property for temple-neighborhood time with a specific modern central hotel for room comfort, dining and road access. The exact street, quietness and pickup matter more than a general central label. A station-area hotel serves a particular departure need. Grassland accommodation is a separate decision: establish the exact location, room structure, bedding, bathroom, heating, hot water, meals and noise before calling it high-end. A yurt-shaped room, a tented lodge and a hosted pastoral stay are not interchangeable products.",
    sightseeingQuestion: "Should you choose Xilamuren or Huitengxile grassland?",
    sightseeingAnswer:
      "Choose the actual route and property rather than assuming either name guarantees an empty, green or traditional landscape. Xilamuren is a distinct grassland destination reached from the Hohhot side; Huitengxile lies in the Ulanqab region and has a different road and accommodation pattern. Compare current landscape conditions, road hours, crowds, the specific stay and available activities for your dates. A short introduction and a quiet overnight have different requirements. Neither is a substitute name for Hulunbuir, and neither guarantees a horse ride, a household visit or uninterrupted green scenery.",
    visitorResources: [
      {
        label: "Inner Mongolia government, English portal",
        href: "https://www.goinnermongolia.com.cn/",
        scope:
          "Regional background and visitor orientation. Verify the actual temple, collection venue, grassland location, accommodation and activities with the relevant operator for your dates; regional promotion does not establish private access or a specific camp's facilities.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway booking reference. Check actual dates and full station names, including Hohhot versus Hohhot East and any Ulanqab connection. Rail duration does not include road transfers to a hotel or grassland property.",
      },
    ],
    serviceScope:
      "A tailored proposal can identify the city hotel, selected temples, guiding, road hours, named admissions and any separate grassland stay. For an overnight, specify the property and room, meals, activity provider and what happens if weather changes the plan. Horse riding, cultural hosts, performances, specialist interpretation and off-road activities require separate availability and agreement. Private road service does not provide unrestricted access across pasture or into households. Share mobility, riding experience and dietary needs before choosing the route.",
    routeAdvice:
      "Hohhot can add a distinct city-and-landscape chapter alongside Beijing or Datong. Yinchuan adds another regional history, with different desert and Yellow River interests. These are separate stays with actual transport to compare, not one compact northern scenic loop. No matching published Hohhot product is recommended here. Use the illustrative outline to discuss a tailored visit, deciding first whether you want city history, a brief landscape introduction or a genuinely worthwhile grassland overnight.",
    practicalPlanning: {
      timing:
        "Give the city a selected temple-and-neighborhood sequence with lunch and time for interpretation. A grassland day requires the full return drive, actual venue access and a sensible meal rather than several unspecified activities squeezed between transfers. For an overnight, protect time to enjoy the setting and leave space for weather. Keep an onward train or flight separate from an activity whose finish and road return can vary.",
      walking:
        "Temple thresholds, steps and standing differ from grassland surfaces, which may be uneven, muddy or exposed to wind. Choose an actual shorter route and pickup point for limited mobility. Riding is not an easier substitute for walking: mounting, balance, horse handling and the operator's supervision need review. Do not assume a road vehicle can follow every path or that a flat-looking landscape provides a safe wheelchair route.",
      cost: "Compare the actual city room or camp unit, private bathroom, bedding, meals, road hours, guiding and named activities. A brief led horse ride, a longer riding route and professional instruction have different requirements and charges. Clarify performances, equipment and optional purchases before arrival. A premium should buy identifiable comfort, useful quiet time and well-explained experiences rather than an unverified luxury-yurt label or private ownership of open scenery.",
    },
    attractions: [
      "Dazhao Temple / Dazhao Si",
      "Xilituzhao Temple as a separate architectural and religious interest",
      "Five Pagoda Temple / Wuta Si",
      "Selected old-city streets and regional food",
      "An Inner Mongolia collection visit at the institution currently receiving visitors",
      "Xilamuren or Huitengxile as a separately selected grassland chapter",
    ],
    stays: [
      {
        label: "2 city nights: one useful urban day",
        advice:
          "Choose a principal temple and a contrasting city interest, with a proper regional meal. Keep arrival and departure realistic. This is a meaningful city stay in its own right, not evidence that a full grassland day and overnight also fit.",
      },
      {
        label: "3 city nights: add a distinct interest",
        advice:
          "Use a second day for a confirmed collection visit, slower temple time or a carefully planned grassland introduction. Compare the actual road journey before choosing a long day trip. Do not fill every hour simply because the region offers many named places.",
      },
      {
        label: "Additional grassland nights: choose the actual stay",
        advice:
          "Add separate accommodation when the property, landscape and activities justify packing and the transfer. One night may give limited time after a long drive; more nights are useful only when there is enough to enjoy. Review seasonal operation, weather alternatives, meal quality and room comfort rather than assuming every overnight is a nomadic homestay.",
      },
    ],
    hotelAreas: [
      {
        name: "Dazhao and old-city surroundings",
        advice:
          "Consider for temple context, selected walks and meals. Check the actual vehicle approach, pedestrian access, stairs, room noise and bathroom. A heritage-style facade does not prove an old building or a comfortable traditional interior, and a neighborhood label does not establish access inside religious areas.",
      },
      {
        name: "Modern central-city hotels",
        advice:
          "Compare a specific property for room comfort, breakfast, dining and convenient pickup. Check the exact journeys to the selected temples and collection venue. A skyline view or hotel brand should support the route rather than replace consideration of quietness and daily road time.",
      },
      {
        name: "Railway or airport-oriented stays",
        advice:
          "Choose for a genuine timing need, using the gateway on the actual ticket. Hohhot and Hohhot East stations are different meeting points. Airport arrangements should also be checked against the current flight ticket rather than relying on an older guide's airport name or assumed pickup location.",
      },
      {
        name: "A named grassland property",
        advice:
          "This is a separate accommodation choice, not a city hotel district. Obtain the exact location and room specification, including toilet, shower, hot water, heating, bedding, power, meals and surrounding noise. Check whether the setting is a busy visitor complex, a quieter lodge or a hosted stay; the word yurt does not answer those questions.",
      },
    ],
    tradeoffs: [
      {
        title: "Choose temples for their distinct context",
        advice:
          "Dazhao, Xilituzhao and the Five Pagoda Temple are different sites. A selected comparison can explain religious practice, architecture and the city's history without visiting every hall. Follow current rules for worship areas, photography and closed spaces. A guide can provide context but cannot promise a ceremony, personal audience or entry to a restricted religious area.",
      },
      {
        title: "A grassland photograph cannot specify your holiday",
        advice:
          "Green cover, flowers, grazing and sky conditions vary with season, rainfall and the exact location. Summer is commonly considered for green landscapes, but a month alone cannot guarantee appearance. Ask for a current, accurate description of the selected place and the actual accommodation. A cooler or dry landscape may still interest some travelers; it should not be sold using an unrelated lush summer image.",
      },
      {
        title: "Riding and cultural encounters need named arrangements",
        advice:
          "A short led ride, a longer route and a riding lesson are not the same service. Review the horse provider, helmets, supervision, age and ability requirements and weather before agreeing. A staged visitor performance is different from a hosted conversation or family visit. Identify participants and consent; do not describe every camp as an untouched pastoral household or promise access to private homes.",
      },
      {
        title: "Check the actual museum venue before fixing the day",
        advice:
          "A provincial collection can help explain a region far larger than the nearby grasslands. Confirm the institution's current visitor address, open galleries, admission process and display language before booking the transfer. Museum names and past addresses in older guides should not be treated as proof of today's entrance. Choose an actual collection subject rather than promising specific objects without current evidence.",
      },
      {
        title: "Inner Mongolia is not one short grassland circuit",
        advice:
          "Hulunbuir, Alxa desert areas, Ulanqab and the Hohhot surroundings involve different distances, landscapes and seasons. A horse-and-grassland image does not make them interchangeable. Choose one regional chapter with useful days and verified services, then compare the full onward journey. A desert stop or distant forest stay should not appear as an automatic extra to a city-and-grassland weekend.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "hulunbuir",
        advice:
          "Hulunbuir offers a separate northeastern Inner Mongolia journey through selected grasslands, Ergun or a forest chapter. It is far from Hohhot and should not be sold as another nearby excursion. Compare complete transport, useful nights and actual rural accommodation before deciding whether both regions belong in the same holiday.",
      },
      {
        slug: "beijing",
        advice:
          "Beijing adds imperial-capital history and the Great Wall to Hohhot's different temple-city and regional landscape story. Retain proper days in both places. Check the actual rail or flight gateway and both hotel transfers rather than judging the trip by a scheduled intercity duration alone.",
      },
      {
        slug: "datong",
        advice:
          "Datong adds Northern Wei cave sculpture and a different architectural sequence. Establish the actual road or rail connection and useful nights before combining the cities. Yungang, Hohhot temples and an outlying grassland stay are distinct visits, not a single continuous sightseeing day.",
      },
      {
        slug: "yinchuan",
        advice:
          "Yinchuan introduces Western Xia history, Helan rock art and a different regional food context. Treat it as a separate Ningxia chapter with its own transport and nights. Hohhot's grassland interests should not be conflated with Ningxia's desert itinerary or assumed included in a published Ningxia product.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Summer and early autumn are commonly considered for a grassland chapter, but vegetation and flowers depend on conditions and location rather than guaranteed dates. Exposed landscapes can be windy, with cool evenings even after warm days. Spring can bring wind and dust; winter is cold and many seasonal stays or activities need separate confirmation. City temples and regional food can provide a different reason to visit outside the green season. Choose suitable clothing and a property that genuinely operates for your dates.",
    orientation:
      "Hohhot is a city in central Inner Mongolia, with temples and urban neighborhoods distinct from the outlying grassland destinations. Xilamuren and Huitengxile have different access and accommodation patterns; Huitengxile belongs to the Ulanqab region. Hulunbuir is a much farther regional journey. Hohhot and Hohhot East railway stations are different gateways. The actual hotel, camp and ticket details should determine the route, not a general map label for Inner Mongolia.",
    experiences: [
      "Understand a selected Hohhot temple through its architecture, religious setting and urban history",
      "Enjoy a regional meal with clear choices about meat, dairy, grain foods and dietary needs",
      "Choose a specific grassland day or overnight for its actual landscape, comfort and thoughtfully arranged activities",
    ],
    planningNotes: [
      "Separate city nights, grassland road journeys and actual camp nights when comparing plans",
      "Obtain the exact accommodation specification and seasonal operation before calling a yurt stay high-end",
      "Match railway and airport pickup to the current ticket and actual visitor venue addresses",
    ],
    arrival:
      "Use the airport and terminal shown on the current flight ticket, confirming any changing airport arrangements before setting the road transfer. Hohhot railway station and Hohhot East are different meeting points. A Ulanqab arrival for a particular Huitengxile route creates another transfer pattern, not a generic Hohhot city pickup. Send the full ticket, luggage and actual city hotel or grassland property address before comparing the complete journey.",
    gettingAround:
      "Use planned road transfers between city sites and for the selected outlying destination. Walk manageable sections within temple and neighborhood areas, with agreed pickup. Pasture roads, visitor paths and private land have their own restrictions; a private vehicle does not establish unrestricted off-road access. For a grassland stay, agree the return arrangement and weather alternative rather than relying on informal transport after arrival.",
    stayStrategy:
      "Start with one city base and add a separate grassland property only when it changes the experience meaningfully. Review sleep, bathroom, temperature control, meals, actual activities and driving. A city hotel with a selected landscape day can be a better fit for some guests than a basic overnight. Others may value a quieter setting, but it must be supported by a real property and useful time there rather than an attractive accommodation label.",
    firstTimerNote:
      "Hohhot should not disappear behind a generic grassland promise. Its temples, city life and food provide context for the wider region. Begin with those interests, then decide what an outlying landscape day or overnight adds. Respect land use, religious spaces and hosts' consent, and choose comfort honestly. A well-explained city stay and one specific landscape experience can be more valuable than many vague cultural activities on a checklist.",
    faqs: [
      {
        question: "Is Hohhot worth visiting in Inner Mongolia?",
        answer:
          "Yes for its temple history, regional food and the context it gives to a separately chosen grassland chapter. It is a city destination in its own right, not simply a camp gateway. Choose it when those interests and the full transport plan leave useful visiting time.",
      },
      {
        question: "How many nights do you need in Hohhot?",
        answer:
          "Two city nights normally provide one full day for selected temples and a meal. Three nights add a collection or carefully assessed excursion day. A grassland overnight needs its own road journey and accommodation nights rather than being assumed within the same city stay.",
      },
      {
        question: "Is Xilamuren or Huitengxile better from Hohhot?",
        answer:
          "Choose by the actual route, season, landscape conditions and named property. Xilamuren and Huitengxile are different destinations; Huitengxile is in the Ulanqab region. Neither name guarantees quiet, green scenery or specific activities. Compare the full road journey and room before deciding.",
      },
      {
        question: "Is a grassland yurt stay a luxury hotel experience?",
        answer:
          "Not automatically. Check the actual unit, bedding, toilet, shower, hot water, heating, meals, noise and activity arrangements. A yurt-shaped room, tented lodge and hosted pastoral stay are different products. A high-end description should be supported by identifiable comfort and service.",
      },
      {
        question: "Can I visit the grassland without horse riding?",
        answer:
          "Yes, a selected landscape visit need not include riding. Choose manageable walking, viewpoints or a separately arranged hosted interest when available. Riding requires its own provider, supervision, equipment, ability and weather review; it should not be treated as mandatory or easier than walking.",
      },
      {
        question: "Is Inner Mongolia the same country as Mongolia?",
        answer:
          "No. Inner Mongolia Autonomous Region is part of China, with Hohhot as its capital. Mongolia is a separate neighboring country. Use the actual region, city and gateway on travel bookings; a Chinese destination plan does not establish arrangements for crossing an international border.",
      },
      {
        question: "Can I visit Hulunbuir on a Hohhot day trip?",
        answer:
          "Hulunbuir is a much farther regional journey, not another nearby Hohhot grassland outing. Give it its own transport, accommodation and useful days if it is the real priority. Do not substitute a generic Inner Mongolia image for the actual landscape and location being booked.",
      },
      {
        question: "Which station should I use in Hohhot?",
        answer:
          "Use the actual train and complete route to decide. Hohhot station and Hohhot East are different gateways. A Ulanqab connection can serve a different grassland sequence. Include both hotel or camp transfers, luggage and boarding rather than comparing rail duration alone.",
      },
      {
        question: "Can Hohhot suit travelers who avoid dairy or meat?",
        answer:
          "Discuss the actual restaurants and camp meals in advance. Milk tea and regional foods may contain dairy, meat stock or animal ingredients, and preparation varies. Explain allergies, vegetarian or other strict requirements to the actual kitchen; a regional dish name or a guide's presence does not guarantee suitability.",
      },
    ],
    culturalStory: {
      title: "A temple city within a much larger region",
      paragraphs: [
        "Hohhot's temples provide a way to understand religious patronage, urban development and cultural connections without treating the city as a generic gateway to open land. Choose a few architectural details and explain the specific site before moving to another. Active worship and historical interpretation require care: public visiting does not make every hall, ritual or person available for staging or photography.",
        "The grassland chapter should preserve that respect for place and people. A commercial visitor center, a performance and a hosted pastoral encounter have different purposes. Ask who is involved, what the experience actually includes and what consent has been given. Open scenery is also worked and managed land. Avoid describing contemporary communities as unchanged nomads for a visitor's benefit or promising unrestricted access across pasture.",
      ],
    },
    foodStory: {
      title: "Make the regional table a choice, not an endurance test",
      paragraphs: [
        "Hohhot can introduce lamb dishes, regional grain foods and milk tea, with recipes and serving styles varying by venue. Milk tea here may be savory rather than the sweet drink some visitors expect. Ask about the actual preparation and choose portions around the group. A warm seated meal with a few explained dishes can communicate more than an oversized banquet built around foods not everyone enjoys.",
        "Dairy, meat stock, wheat, fillings, sauces and shared equipment matter for restrictions. A vegetable-looking dish or plain tea description should not be treated as an ingredient guarantee. City restaurants and outlying camps offer different flexibility, so arrange strict needs before leaving the city. A food-focused visit should let guests understand regional choices without pressuring them to drink alcohol, eat a particular meat or take part in a ceremonial presentation.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the actual city base",
        description:
          "Transfer from the current ticket's named gateway. Keep the first meal convenient and add only a short neighborhood introduction that fits the time and weather. Do not assume a late arrival leaves a complete temple or grassland visit.",
      },
      {
        day: "Full city day",
        title: "Temples and a regional table",
        description:
          "Give a selected temple proper interpretation, then add a contrasting city interest and a seated regional meal. Check the actual collection venue if a museum is chosen. Leave time for thresholds, standing and rest rather than trying to enter every religious complex.",
      },
      {
        day: "Optional additional chapter",
        title: "A selected grassland day or separately booked overnight",
        description:
          "Choose Xilamuren or Huitengxile by actual location, season, road journey and property. Specify meals and activities, with riding optional and separately reviewed. An overnight needs additional accommodation and a return or onward transfer; it is not automatically included in two city nights.",
      },
      {
        day: "Departure",
        title: "Continue through the planned northern connection",
        description:
          "Allow the complete road transfer before the actual train or flight. Beijing, Datong or Yinchuan needs its own usable time and transport. This outline is illustrative, not a published product or a promise that every optional experience is included.",
      },
    ],
  },
};
