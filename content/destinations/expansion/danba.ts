import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/danba.svg",
  alt: "Danba planning schematic separating the valley town, a named hillside village stay and the full western Sichuan road and altitude profile; original diagram, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const danbaGuide: ExpandedDestination = {
  id: "danba",
  name: "Danba",
  region: "southwest",
  kicker: "Hillside villages and tower traditions, with the road journey taken seriously",
  description:
    "Plan Danba around a selected Gyalrong Tibetan village, tower-history interest and a genuinely suitable room, distinguishing valley-town services from hillside stays and the wider mountain route.",
  stay: "3 nights within a properly paced western Sichuan route",
  bestFor: "Village architecture, cultural interpretation and slower mountain-road travel",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["kangding", "mount-siguniang", "chengdu"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Danba Travel Guide: Villages, Towers & Where to Stay",
    seoTitle: "Danba Travel Guide: Villages, Towers & Stays",
    seoDescription:
      "Plan Danba in western Sichuan: compare Jiaju, Zhonglu and valley-town stays, village walks, tower visits, road transfers and the full altitude profile.",
    answer:
      "Danba (丹巴) is a county in Garzê, also written Ganzi, in western Sichuan. Choose it for Gyalrong Tibetan village architecture, hillside landscapes and an informed introduction to local tower traditions. The valley town, Jiaju and Zhonglu are different bases and routes, not one walkable old town. Three nights give two full days after the substantial arrival journey. Start with the actual village, room and route rather than the label Tibetan homestay: a good visit depends on comfort, consent, interpretation and realistic mountain driving as much as a striking hillside photograph.",
    stayAnswer:
      "Three nights give two full days for a coherent village chapter and a different tower, landscape or cultural interest. Two nights can suit a focused introduction when the complete arrival and departure leave useful time. Do not use the road journey from Chengdu as an ordinary full sightseeing day, or compress Danba and several other mountain destinations into daily long drives. Four nights need a meaningful slower stay or a distinct confirmed interest. Fixed nights do not establish altitude acclimatization; assess the whole route independently.",
    hotelAnswer:
      "Choose the valley town for practical services and a room-and-dining priority, accepting drives to hillside villages. Choose a named Jiaju or Zhonglu property when its actual room, setting and daily access justify the hillside base. Check stairs, vehicle approach, luggage, heating, hot water, bathroom, bedding, noise and meals. A village address does not guarantee family hosting, views from every room or full-service standards. Danba town and higher village properties also have different sleeping elevations, so the exact hotel belongs in the altitude plan.",
    sightseeingQuestion: "Should you choose Jiaju, Zhonglu or a tower-history route?",
    sightseeingAnswer:
      "Jiaju and Zhonglu offer different village settings and daily routes. Choose the actual property and public walk rather than trying to visit every hillside for similar photographs. A tower-history interest can add a distinct subject through selected accessible examples, but viewing a tower and climbing inside are different arrangements. Ask what is open, what can be explained and what remaining walking is involved. A meaningful cultural encounter needs an actual consenting host and useful interpretation, not an assumption that every house is open to visitors.",
    visitorResources: [
      {
        label: "Danba county government",
        href: "https://www.danba.gov.cn/",
        scope:
          "County background and public notices, mainly in Chinese. Confirm actual roads, village visitor arrangements, individual tower access and local services with the responsible authority or host. General destination information does not verify a room, private family invitation or the suitability of a mountain route.",
      },
      {
        label: "Garzê prefecture government",
        href: "https://www.gzz.gov.cn/",
        scope:
          "Wider regional context and public notices. Garzê contains many distinct places with different road, elevation and visitor conditions. A prefecture-level reference does not establish unrestricted access, dated transport, medical suitability or a single set of rules for every traveler and site.",
      },
    ],
    serviceScope:
      "A tailored Danba proposal should name the hotel and room, sleeping elevation, complete driving sequence, selected village route, guide language and meals. Confirm actual local access, admissions, any host and tower interior separately. Set out the remaining walk, luggage approach, driver duty and a workable road or weather alternative. Discuss appropriate medical advice, travel insurance and the plan for illness before a higher-altitude route is fixed. Private service does not remove mountain-road disruption, secure every private interior or make a hotel with oxygen facilities an acclimatization guarantee.",
    routeAdvice:
      "Danba can form a distinct chapter in a western Sichuan route through Chengdu and, when appropriate, Mount Siguniang. The complete pass, road and sleeping-altitude profile matters more than map proximity. Returning by another road is not automatically easier or lower. No matching published Danba product is recommended here. Existing Chengdu, panda or Jiuzhaigou journeys do not include Danba merely because they visit Sichuan. Request a separate proposal with useful nights, walking needs, room expectations and the actual route; avoid treating the village stay as a brief stop between strenuous mountain days.",
    practicalPlanning: {
      timing:
        "Protect arrival daylight where practical and keep the first evening simple after a long drive. Select one main village chapter per day with meals and rest, rather than repeated hillside transfers. A tower or host needs a confirmed window, while weather and road work may change the sequence. Do not attach an essential flight to the same day as a long mountain return without a complete assessment and a useful margin; an apparently circular itinerary does not make delays disappear.",
      walking:
        "Village lanes can include slopes, steps, uneven surfaces and sections beyond vehicle access. A viewpoint may require a different climb from reaching the hotel. Confirm the actual route, seating, toilets, handrails and room approach. Tower interiors, if open, can have steep or confined access and are not an assumed part of every visit. Tell the planner about knees, balance and walking limits; a private car does not make hillside architecture step-free.",
      cost: "Compare the exact room, heating, meals, full vehicle route, guide language, local admissions and any genuine host fee. Identify what a village stay actually includes rather than equating a higher price with private family access. A longer road route changes driver hours and accommodation needs. Insurance, specialist activities and medical or evacuation arrangements need their own terms. A premium should improve room suitability, interpretation and planning, not promise weather, a silent village or access that has not been agreed.",
    },
    attractions: [
      "A selected public route in Jiaju village with residents and private space respected",
      "A Zhonglu village chapter chosen for its different setting and actual access",
      "Selected historic tower interests, including a Suopo-area subject when the full route fits",
      "A confirmed cultural explanation with an actual host and appropriate language support",
      "Hillside viewpoints reached by routes matched to the guest's abilities",
      "A named village property or valley-town base with meals and sleep properly checked",
    ],
    stays: [
      {
        label: "2 nights: a focused village introduction",
        advice:
          "Choose one full day and a base that genuinely suits the selected route. This works only when the complete road arrival and departure leave enough time. Do not promise several villages, every tower and a family visit between two demanding drives.",
      },
      {
        label: "3 nights: two useful days",
        advice:
          "Give village architecture one coherent day and another confirmed cultural, tower or landscape subject a separate window. Keep time for meals and the property. Select complementary experiences rather than changing hotels or collecting similar viewpoints each day.",
      },
      {
        label: "4 nights: a slower stay with a real purpose",
        advice:
          "Add time when the room, setting or a distinct host justifies it. More nights do not guarantee ceremonies, clear views, private access or adaptation to altitude. The wider route and individual suitability still require assessment independently of the village pace.",
      },
    ],
    hotelAreas: [
      {
        name: "Danba valley town / services and practical transfers",
        advice:
          "Compare the actual room, quiet, heating, hot water and dining. The town can provide a different services base from the hillside villages, with daily road travel. Check the exact location and elevation; a county label alone does not establish a low sleeping altitude or short village approach.",
      },
      {
        name: "Jiaju / a named hillside property",
        advice:
          "Choose the actual room and setting, then verify luggage, stairs, parking, bathroom, temperature control and meals. A village stay may involve ordinary community noise and work. Do not assume private use, a family meal or the same service standard across properties sharing the village name.",
      },
      {
        name: "Zhonglu / a distinct village base",
        advice:
          "Assess the specific property against the chosen walks and any other village or tower day. Confirm final road and room access, evening meals, staffing and the actual view. Higher position can mean more approach or exposure; it is not automatically a better room or easier cultural experience.",
      },
    ],
    tradeoffs: [
      {
        title: "Danba county, valley town and hillside villages are different places",
        advice:
          "A hotel advertised under Danba can occupy a different elevation and road position from the village you want. Choose the actual overnight and route, not just a county pin. Jiaju and Zhonglu should have distinct value if both are included. A private driver improves some connections without making every hillside a short flat walk.",
      },
      {
        title: "Cultural interpretation requires more than a village label",
        advice:
          "Gyalrong, also written Jiarong or Rgyalrong, provides a particular cultural context rather than a generic Tibetan-village performance. Explain the actual buildings, community practices and host's perspective without claiming all communities are identical. Public lanes, religious areas and homes have different boundaries. Consent and useful language support matter more than an advertised exclusive encounter.",
      },
      {
        title: "Seeing a tower does not establish permission or suitability to enter it",
        advice:
          "Historic towers can be appreciated through their setting and interpretation without an interior climb. Confirm current opening, structural and visitor restrictions, steps and the guest's comfort before including entry. Do not promise every tower is accessible or explain all structures through one unsupported origin story. Choose documented context and the actual site.",
      },
      {
        title: "The road profile matters even when the overnight is lower",
        advice:
          "A Danba valley stay can sit lower than other western Sichuan bases, but getting there may involve higher road sections and later nights elsewhere. Review maximum and sleeping elevations for the complete itinerary. A lower destination, car travel, fixed number of nights or oxygen-equipped hotel does not guarantee freedom from altitude illness. Seek individual clinical advice where appropriate and agree an illness response rather than treating sightseeing pace as medical protection.",
      },
      {
        title: "Mountain-road travel needs a workable alternative",
        advice:
          "Rain, snow, rockfall, road works or traffic can alter the route and useful arrival time. Compare the actual dated road plan and driver arrangements, avoiding a chain of essential host appointments after long transfers. An alternative route must be assessed for its own time and elevation, not merely described as a scenic backup. Keep the final return and onward flight sensibly separated.",
      },
      {
        title: "A village home and a high-comfort hotel offer different promises",
        advice:
          "Check bedding, bathroom, heating, sound, staff availability and food directly. A traditional exterior or designer room image does not prove full-service hospitality. A genuine family host also has work and privacy beyond tourism. Specify the actual service and consent rather than assuming luxury means an empty house, all-day hosting or access to every religious or domestic space.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "kangding",
        advice:
          "Kangding adds a valley-city cultural chapter or a separately selected Mugecuo, Xinduqiao or Tagong interest. These places have different daytime and sleeping elevations. Review the exact connecting road and whole altitude profile; a lower Danba valley stay does not erase exposure elsewhere or make every higher overnight suitable.",
      },
      {
        slug: "mount-siguniang",
        advice:
          "Mount Siguniang adds a different high-mountain landscape chapter. Review the complete road and sleeping-altitude sequence, valley choices and individual suitability before combining them. Danba is not an automatic acclimatization solution, and a shorter village walk does not remove the altitude of the next overnight.",
      },
      {
        slug: "chengdu",
        advice:
          "Chengdu provides city culture, food and a possible gateway, with a separate mountain transfer to Danba. Give the city and villages useful nights rather than promising a Danba day trip from a central hotel. Existing Chengdu products do not automatically include western Sichuan village accommodation or local hosts.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit selected village walks, but weather differs between valley, hillside and road pass. Summer rain can affect surfaces and roads; winter can bring cold, snow or ice on higher sections even when the town looks mild. Flowering and autumn color depend on actual conditions. Check current forecasts and road notices for the complete route, not just the overnight. Choose a comfortable room and useful alternative without guaranteeing a particular seasonal photograph or empty village.",
    orientation:
      "Danba is a county in Garzê/Ganzi in western Sichuan, outside the Tibet Autonomous Region. That distinction does not establish unrestricted access to every site or remove traveler-specific checks. The valley town, Jiaju, Zhonglu and Suopo-area tower interests are separate points. Use exact property and Chinese place names for routes and pickup. The wider Garzê label covers many different roads and elevations; it is not a single local sightseeing area.",
    experiences: [
      "Understand a selected Gyalrong Tibetan village through buildings, setting and respectful interpretation",
      "Choose a tower-history or distinct landscape chapter with actual access and walking clear",
      "Enjoy a named hillside or valley property chosen for real sleep, meals and practical service",
    ],
    planningNotes: [
      "Compare actual village bases, room access, heating, luggage and sleeping elevation",
      "Review the full mountain-road and altitude profile before combining Danba with other highland stays",
      "Confirm hosts, tower interiors, consent and language rather than imply private access",
    ],
    arrival:
      "Chengdu can be a gateway but requires a substantial, separately planned mountain-road journey. Confirm the actual route, conditions, driver duty, stops and daylight rather than quoting a best-case drive as a guarantee. Chengdu airports and rail stations are different pickup points. Other proposed gateways need their own full road and altitude assessment. Keep an essential village host away from uncertain arrival, and allow a suitable return margin before an onward flight.",
    gettingAround:
      "Use selected road transfers between the actual property, village and tower interests, with manageable walks beyond the vehicle. Narrow approaches, parking and local access may affect pickup. Agree rest, meals and finish time. A private vehicle does not eliminate slopes, grant residential entry or remove road-related uncertainty. Select fewer meaningful places rather than spend the day driving between similar hillside images.",
    stayStrategy:
      "One base usually works for a three-night first stay when it fits the selected subjects. A valley hotel and a hillside property offer different room, access and dining tradeoffs. Confirm the exact room and sleeping elevation instead of treating all Danba accommodation as one category. Protect useful time at the property and a forgiving arrival evening. A high budget should buy a suitable room, clear interpretation and realistic logistics rather than unsupported promises of exclusivity.",
    firstTimerNote:
      "Choose Danba because village architecture and the local cultural context interest you, not only because a list calls the area hidden. Start with one strong village route and a comfortable base. Add another subject when it deepens understanding. The full drive, altitude profile and actual host arrangements are part of the experience and should be discussed before the attractive photographs become a fixed itinerary.",
    faqs: [
      {
        question: "How many nights should I spend in Danba?",
        answer:
          "Three nights give two full days for a village chapter and a distinct cultural, tower or landscape interest. Two can work with favorable road timing. Count the substantial arrival and departure separately, and do not treat fixed nights as a guarantee of altitude acclimatization.",
      },
      {
        question: "Should I stay in Danba town, Jiaju or Zhonglu?",
        answer:
          "Choose town for a practical services priority or a named village property for its actual setting. Compare room, heating, bathroom, meals, steps, luggage and daily travel. The bases have different elevations and routes; a Danba label does not establish the same comfort or access.",
      },
      {
        question: "Are Jiaju and Zhonglu the same village?",
        answer:
          "No. They are distinct settings with their own properties and routes. Choose both only when the contrast adds value. Public lanes, homes and religious spaces have different access rules; neither village name establishes a private family invitation or a performance on request.",
      },
      {
        question: "Can visitors climb inside Danba's historic towers?",
        answer:
          "Only where current access permits and the actual interior is suitable for the guest. Viewing and entering are different arrangements. Check steps, confined access, structural or visitor restrictions and interpretation before including a climb. A private guide does not open every tower.",
      },
      {
        question:
          "Does Danba's lower valley make a western Sichuan trip safe from altitude illness?",
        answer:
          "No. Review the complete road, maximum and sleeping elevations, including higher villages and subsequent nights. A lower stop, vehicle journey or oxygen-equipped room does not guarantee acclimatization. Seek appropriate individual clinical advice and agree a response to illness before the route is fixed.",
      },
      {
        question: "Can I visit Danba as a day trip from Chengdu?",
        answer:
          "It is a substantial mountain-road journey and should be planned as a separate stay rather than an ordinary city day trip. Assess actual roads, driver hours, weather and useful village time. Existing Chengdu sightseeing products do not include Danba by default.",
      },
      {
        question: "Is Danba in the Tibet Autonomous Region?",
        answer:
          "No. It is in Garzê/Ganzi in Sichuan. Do not apply a Tibet Autonomous Region itinerary or permit description automatically to this county. Actual traveler documents, local access, current notices and any onward region still need their own checks.",
      },
      {
        question: "Does a village stay include a family meal or private cultural host?",
        answer:
          "Only when an actual arrangement is confirmed with consent, language, content and fee clear. A room booking and public village walk do not establish private home access, a ceremony or all-day family hosting. The proposal should specify what the guest is actually receiving.",
      },
    ],
    culturalStory: {
      title: "Understand buildings through their particular community context",
      paragraphs: [
        "Danba's village architecture and tower traditions deserve more than a photographic label. A thoughtful explanation connects the actual buildings, landscape and community context while distinguishing documented history, local accounts and later change. Not every tower has an identical purpose or construction story. A selected route with time for questions can reveal more than several villages described through the same short script.",
        "Homes, work and religious life continue beyond a visitor's route. Ask before portraits, enter private space only with permission and arrange a genuine host with useful interpretation. Do not reduce Gyalrong Tibetan culture to costume, a performance or a decorative house facade. Cultural depth is compatible with clear boundaries and does not require an invented personal connection or exclusive invitation.",
      ],
    },
    foodStory: {
      title: "Plan actual meals around the road and village day",
      paragraphs: [
        "Choose food through the actual kitchen and guests rather than assume every highland meal follows one menu. A shared meal may include local dishes, vegetables and familiar staples when available; dairy, meat and stronger tea preparations should be explained and optional. Agree lunch on transfer days before the group is tired and hungry, and confirm dinner at a village property instead of assuming late restaurant service.",
        "Clarify beef, pork, dairy, wheat, eggs, soy, stocks, sauces and shared preparation as relevant to the menu. A vegetable dish may use meat stock, and a remote kitchen may have limited capacity for a serious allergy. Confirm alternatives and drinking water ahead. A privately hosted meal requires its own genuine arrangement; cultural hospitality should not become compulsory food, drinking or shopping.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Complete the actual mountain-road journey",
        description:
          "Use the agreed route and stops, check the real room and keep the evening simple. Review conditions, walking and the next day's access. Essential private appointments should not depend on an uncertain arrival.",
      },
      {
        day: "Full day 1",
        title: "One coherent village chapter",
        description:
          "Choose Jiaju or Zhonglu for an explained public route, a meal and rest. Assess the remaining approach and any host separately. Avoid collecting every hillside when the actual subject is architecture and community context.",
      },
      {
        day: "Full day 2",
        title: "A distinct tower, landscape or confirmed cultural subject",
        description:
          "Add a selected interest with current access and suitable walking. Seeing a tower need not mean an interior climb. Keep the actual room and meals part of the stay rather than fill every hour with transfers.",
      },
      {
        day: "Departure",
        title: "Follow the assessed road and altitude sequence",
        description:
          "Use the actual onward route and leave useful time before fixed transport. This three-night outline is illustrative, not a published product or guarantee of road operation, acclimatization, private homes, ceremonies or tower interiors.",
      },
    ],
  },
};
