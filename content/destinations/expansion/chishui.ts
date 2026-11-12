import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/chishui.svg",
  alt: "Chishui planning schematic comparing a city base, separate waterfall or Danxia routes and a selected bamboo or town interest; original diagram, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const chishuiGuide: ExpandedDestination = {
  id: "chishui",
  name: "Chishui",
  region: "southwest",
  kicker: "Red cliffs, waterfalls and enough time to enjoy the forest",
  description:
    "Plan Chishui in northern Guizhou around selected Danxia and waterfall routes, a practical hotel and realistic walking, with bamboo landscapes and historic towns treated as distinct choices.",
  stay: "3–4 nights",
  bestFor: "Waterfalls, red-rock landscapes and a quieter northern Guizhou stay",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["chongqing", "libo", "zhenyuan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Chishui Travel Guide: Danxia, Waterfalls & Where to Stay",
    seoTitle: "Chishui Travel Guide: Danxia & Waterfalls",
    seoDescription:
      "Plan 3–4 nights in Chishui, Guizhou: compare waterfall and Danxia routes, city or rural hotels, bamboo interests, steps, wet weather and road transfers.",
    answer:
      "Chishui (赤水) is a county-level city within Zunyi in northern Guizhou, known for red sandstone landscapes, waterfalls and forest. Its Danxia component belongs to the serial UNESCO China Danxia property, but the destination is not one park with one entrance. Choose three nights for two full days, selecting a substantial waterfall route and a different cliff, forest or town interest. A city hotel, a rural property and each scenic entrance create different road and walking patterns. Come for the landscape at a manageable pace rather than assume every waterfall, bamboo site and historic town fits into one day.",
    stayAnswer:
      "Three nights give two useful full days for contrasting routes with proper meals and rest. Four nights allow another distinct subject or more weather flexibility. Two can suit one focused scenic day when the actual road arrival and departure work, but should not promise all the main waterfalls and Danxia routes. A nearby-on-the-map gateway may still mean a substantial road transfer. More nights should improve the experience and hotel time, not repeat similar waterfall walks merely to extend the list.",
    hotelAnswer:
      "Choose a Chishui city hotel for meal choices, practical services and a base for selected day routes. Choose a named rural property only when its exact position, room comfort and dinner justify it. Near one waterfall does not mean near every scenic entrance. Check bathroom, temperature control, humidity, soundproofing, stairs, luggage and staffing. A forest setting or a room advertised as scenic does not establish a quiet private retreat, a view of the main falls or extensive resort facilities.",
    sightseeingQuestion: "Should you choose Chishui Waterfall, Sidonggou or Foguangyan?",
    sightseeingAnswer:
      "Choose the Chishui Great Waterfall route for a substantial waterfall interest, assessing the current path and return climb. Sidonggou offers another stream-and-waterfall setting; include it when the actual route adds something useful rather than repeats the first day. Foguangyan provides a red-cliff and waterfall combination with its own approach and steps. These are separate visits, not stops along one continuous boardwalk. Confirm present access, operator transport and walking before deciding whether two of them genuinely suit your stay.",
    visitorResources: [
      {
        label: "UNESCO: China Danxia",
        href: "https://whc.unesco.org/en/list/1335/",
        scope:
          "Background on the serial World Heritage property and its components, including Chishui. Recognition is not a single destination ticket, a complete visitor map or evidence that every forest, trail and waterfall is open. Confirm actual scenic boundaries and operations separately.",
      },
      {
        label: "Chishui municipal government",
        href: "https://www.gzchishui.gov.cn/",
        scope:
          "City background and public notices, mainly in Chinese. Use the responsible operator for current scenic access, local transport, road conditions and activity arrangements. A destination reference does not verify hotel standards, river activities, hosts or dated transport.",
      },
      {
        label: "Zunyi municipal government",
        href: "https://www.zunyi.gov.cn/",
        scope:
          "Wider municipal context for northern Guizhou. Chishui and Zunyi's urban center are different places with their own transfers. Regional promotion does not establish a short local connection, a particular site's opening or inclusion in a published journey.",
      },
    ],
    serviceScope:
      "A tailored Chishui proposal should specify the hotel and room, gateway, actual scenic entrances, guiding language, admissions, road transfers and meals. Identify local shuttles or other visitor transport separately, with remaining steps and boarding clear. Bamboo interpretation, a privately hosted subject, cycling or a river activity needs its own provider and suitability checks. Private guiding does not open closed trails, remove slippery surfaces or make a public scenic service exclusive. Agree a worthwhile wet-weather alternative rather than fill changes with unwanted shopping.",
    routeAdvice:
      "Chishui can form a northern Guizhou landscape chapter through a suitable actual gateway, potentially alongside Chongqing when the full road and rail sequence works. Libo offers a different karst landscape in another part of Guizhou; Zhenyuan adds a separate historic river-town stay. Neither is a local Chishui day trip by default. No matching published Chishui product is recommended here. Request a proposal using the illustrative three-night outline, stating which scenery matters most, walking and stair tolerance, room needs and how much daily driving is comfortable.",
    practicalPlanning: {
      timing:
        "Give a major scenic route its own useful part of the day, including the drive, admission, local transport, remaining walk and lunch. A main waterfall descent can create a return climb that deserves time. Do not add several separate entrances merely because an early stop looks short. Check actual opening and return-transport cutoffs, and leave essential onward flights or trains clear of a distant final walk. A fourth night can add flexibility without guaranteeing water volume or clear weather.",
      walking:
        "Forest and waterfall paths can involve sustained stairs, slopes, spray, wet paving and uneven surfaces. Review the actual circuit and return, not only the main viewpoint photograph. A shuttle or lift, if currently offered, has its own access and may leave steps. Check handrails, seating, toilets and vehicle meeting points. Keep to permitted paths and respect closures or barriers near cliffs and water. A private driver cannot remove the final scenic approach.",
      cost: "Compare the exact room, breakfast, guide language, full road hours, scenic admissions and local transport. Similar destination names may refer to different tickets or services, so list the actual entrances. Optional activities, a specialist host and hotel facilities require a separate basis. A lower quote may omit transport within a scenic area or provide a different room. Paying more should improve comfort, interpretation and useful time rather than imply special waterfall access or control of weather.",
    },
    attractions: [
      "The Chishui Great Waterfall route, also encountered under Shizhangdong in travel material",
      "Foguangyan for a selected red-cliff and waterfall chapter",
      "Sidonggou as a distinct stream-and-waterfall route when its actual walking adds value",
      "A selected bamboo-forest interest with current access and interpretation checked",
      "Bing'an or Datong as a separately chosen historic-town subject",
      "A named rural or city property with realistic dining and daily road access",
    ],
    stays: [
      {
        label: "2 nights: one clear scenic priority",
        advice:
          "Use a focused full day and convenient road timing. Choose one main route with useful explanation and rest. Do not promise every major waterfall, a bamboo forest and several towns between arrival and departure.",
      },
      {
        label: "3 nights: two contrasting days",
        advice:
          "Pair a substantial waterfall route with a different red-cliff, forest or town subject. Check that the second day offers a real contrast. One well-placed base can save packing and keep changes practical when weather affects the sequence.",
      },
      {
        label: "4 nights: another distinct interest or easier pace",
        advice:
          "Add a carefully chosen subject, more property time or flexibility rather than repeat similar walks. The hotel and alternative plan should remain worthwhile in rain. Extra nights do not guarantee the falls' appearance, uncrowded paths or private access.",
      },
    ],
    hotelAreas: [
      {
        name: "Chishui city / meals and practical services",
        advice:
          "Compare the actual room, noise, bathroom, temperature control, breakfast and pickup. A city base can serve different day routes, with road time included. The wider Zunyi name does not put a hotel in Chishui, and an urban address does not establish a short journey to every scenic entrance.",
      },
      {
        name: "A named rural property / a specific setting and route",
        advice:
          "Choose the exact address for its actual room and position, then check dinner, humidity, heating or cooling, luggage and staffing. Being near one attraction may add travel to another. A forest photograph or large terrace does not prove a private guest view or full-service hospitality.",
      },
      {
        name: "A historic-town stay / character with practical conditions",
        advice:
          "Consider only when the room, bathroom, quiet, stairs and vehicle approach suit the guests. A town visit does not require an overnight, and an attractive old building may have a different service model from a modern hotel. Confirm actual evening meals and access with luggage.",
      },
    ],
    tradeoffs: [
      {
        title: "Danxia is not the same landscape as Guilin-style limestone karst",
        advice:
          "Chishui's red sandstone landforms require their own explanation. The color and shapes are not simply another version of every Chinese mountain landscape. UNESCO China Danxia is a serial property across different locations, not one continuous Chishui visitor park. Choose the actual local route rather than assume every recognized component is nearby or included in one ticket.",
      },
      {
        title: "Different waterfalls need a reason to share the itinerary",
        advice:
          "The Great Waterfall, Sidonggou and Foguangyan have separate access and walking patterns. Two waterfall days can be rewarding for an enthusiast, but may be repetitive for a mixed-interest group. Compare the visual subject, effort and whole road plan. A well-explained cliff or town chapter may add more than another descent and climb.",
      },
      {
        title: "Water volume and comfortable access are different questions",
        advice:
          "Rain can change the appearance of falls and also affect spray, paths, roads or operating decisions. More water is not automatically a better visitor day. Use current conditions and operator notices rather than promise a dramatic cascade from a season alone. Respect barriers and retain a worthwhile alternative if a route is unsuitable or closed.",
      },
      {
        title: "A bamboo forest is not automatically a hands-on craft experience",
        advice:
          "A landscape walk, ecology explanation, craft workshop and commercial showroom provide different subjects. Confirm the actual host, language, access and content before advertising a private making session. A forest ticket or nearby shop does not establish production access or a no-pressure learning visit. The experience should be worthwhile without a required purchase.",
      },
      {
        title: "Bing'an and Datong are distinct town choices",
        advice:
          "Choose a named town for a particular historical or streetscape interest, with current visitor access and remaining walking clear. Old-town character does not mean every building is original, every courtyard public or every shop a traditional workshop. Select one useful contrast rather than add several similar stops simply because they appear in the regional list.",
      },
      {
        title: "Chishui, Zunyi and distant Guizhou stops need full-journey comparisons",
        advice:
          "Chishui is part of the wider Zunyi area but is not Zunyi's urban center. Libo and Zhenyuan are different chapters elsewhere in Guizhou. Compare actual stations, road transfers and useful nights instead of treating a provincial label as evidence of proximity. An existing Guizhou itinerary does not include every destination automatically.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "chongqing",
        advice:
          "Chongqing adds a distinct urban and food chapter and may fit a northern Guizhou sequence through actual dated connections. Compare both station or airport transfers and the Chishui road journey. A Chongqing city product does not automatically include Chishui hotels, admissions or guiding.",
      },
      {
        slug: "libo",
        advice:
          "Libo offers a contrasting karst-water landscape in another part of Guizhou. Choose both when the visual contrast and useful nights justify the full transfer. It is not a neighboring scenic entrance, and two nature chapters need different route, walking and weather assessments.",
      },
      {
        slug: "zhenyuan",
        advice:
          "Zhenyuan adds a separate historic river-town stay. Compare the full road-and-rail pattern, hotel and useful time before combining them. A shared Guizhou label does not make a waterfall day and an ancient-town evening one compact excursion.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit forest and town walks, with rain and changing temperatures still possible. Summer can be hot and wet, affecting roads, spray and path conditions. Cooler periods require good room heating and a realistic outdoor plan. Waterfall appearance follows actual weather and catchment conditions, not only a promotional month. Check current forecasts, operator notices and holiday demand near departure; a dramatic flow or an empty path is not guaranteed by the season.",
    orientation:
      "Chishui is in northern Guizhou within the wider Zunyi area, near the Sichuan boundary. Its city, rural hotels, waterfall entrances, bamboo interests and historic towns are different points. Chishui also names the river; a reference to the river or a wider historical route does not identify the intended scenic entrance. Use full Chinese property and venue names for transport, tickets and pickup rather than assuming every Chishui attraction shares one gate.",
    experiences: [
      "Understand a selected red-rock and waterfall route with its actual walking clear",
      "Add a contrasting forest or historic-town chapter rather than duplicate every waterfall",
      "Stay at a checked city or rural property with useful meals, sleep and realistic daily roads",
    ],
    planningNotes: [
      "Choose actual scenic entrances before deciding the hotel and gateway",
      "Assess the return climb, wet surfaces, local transport and current operating cutoffs",
      "Keep UNESCO context, public admissions and any genuinely hosted activity separate",
    ],
    arrival:
      "Compare actual dated air or rail services through the proposed gateway with the full road transfer to the chosen Chishui hotel. Chongqing, Luzhou or another arrival requires its own assessment; a map pin or airport name does not establish the best connection. Do not assume a rail ticket to the wider Zunyi area ends near the scenic entrance. Send the actual ticket and Chinese hotel address, protecting essential paid appointments from uncertain arrival.",
    gettingAround:
      "A planned vehicle is useful for dispersed scenic and town chapters. List actual stops, start and finish, meals and remaining walks. Local visitor transport has its own hours, boarding and inclusions and is not an unlimited private vehicle inside every scenic area. Wet paths and road conditions can change the order. Cycling or river activities, if requested, need separate operator, suitability and current access checks.",
    stayStrategy:
      "One base generally works for three or four nights if its actual position serves the selected routes. Choose city services or a particular rural setting deliberately. Compare room temperature control, humidity, quiet, bathroom and dinner, and avoid paying for a scenic property left unused by an overloaded circuit. A short town visit can add contrast without requiring another hotel move. The property should remain comfortable when rain changes the outdoor day.",
    firstTimerNote:
      "Start with the landscape you most want to understand, then add one real contrast. Chishui does not become better simply because the itinerary contains more waterfall names. A coherent route, clear geology, suitable walking and a comfortable meal can provide a rich day. Good planning makes the road and return climb visible before the destination photographs set unrealistic expectations.",
    faqs: [
      {
        question: "How many nights should I spend in Chishui?",
        answer:
          "Three nights give two full days for contrasting routes. Four add a distinct interest or easier pace. Two can work for one focused day with convenient transport. Count the complete road arrival and departure rather than assume they are extra scenic days.",
      },
      {
        question: "Should I choose Chishui Waterfall, Sidonggou or Foguangyan?",
        answer:
          "Choose the actual subject and walking. The Great Waterfall is a substantial waterfall route, Sidonggou another stream-and-waterfall setting, and Foguangyan a red-cliff and waterfall combination. They have separate access. Two similar routes should add real value rather than just more steps.",
      },
      {
        question: "Is Chishui part of the UNESCO China Danxia property?",
        answer:
          "Its Danxia component belongs to the serial China Danxia property. The designation is not one visitor park or ticket and does not establish current opening of every local forest, waterfall or trail. Use the actual operator for dated arrangements.",
      },
      {
        question: "Can I visit Chishui without lots of stairs?",
        answer:
          "Assess selected routes individually, including the return climb, local transport, seating and toilets. Waterfall viewpoints can involve wet steps and slopes even when the drive is easy. A private car cannot remove every scenic approach; describe knees, balance and walking limits before choosing the circuit.",
      },
      {
        question: "Is rainy weather better for Chishui waterfalls?",
        answer:
          "Not automatically. Rain can change water volume while making paths, spray, roads or access less suitable. Use current conditions and operator notices rather than promise the best view from a wet month. A comfortable alternative matters if a route closes or becomes unsuitable.",
      },
      {
        question: "Should I stay in Chishui city or the countryside?",
        answer:
          "Choose city for actual room and dining options or a named rural property for a particular setting. Compare the full daily roads, bathroom, temperature control, humidity, quiet and meals. Near one waterfall does not mean near every entrance or guarantee a room view.",
      },
      {
        question: "Is Chishui close to Libo or Zhenyuan?",
        answer:
          "They are separate Guizhou chapters requiring a full transport comparison and useful nights. A shared provincial label does not make them local day trips. Check the actual gateway, road-and-rail sequence and both hotel transfers before combining them.",
      },
      {
        question: "Does this page recommend a published Chishui tour?",
        answer:
          "No matching published product is recommended. The outline illustrates a possible stay. Request a proposal with dates, scenery interests, room standards and walking needs; the actual providers, admissions, transport and inclusions require confirmation.",
      },
    ],
    culturalStory: {
      title: "Connect the landforms with present-day places",
      paragraphs: [
        "Chishui's Danxia landscape has a geological story distinct from its town and river history. A useful guide explains what can be seen in the actual red cliffs, water and forest rather than repeat a generic mountain description. UNESCO context helps place the landforms within a wider serial property, but it does not make all nearby sites identical or equally accessible.",
        "A selected visit to Bing'an or Datong can add a different human-scale chapter through streets, buildings and current use. Distinguish historical fabric, restoration and contemporary shops. Residents, private interiors and working spaces have their own boundaries. Any hosted explanation or craft session should be genuinely arranged, not inferred from an old-town label or advertised as exclusive access without evidence.",
      ],
    },
    foodStory: {
      title: "Make meals a comfortable part of the scenic day",
      paragraphs: [
        "Plan a seated lunch or an agreed rural meal before setting a long waterfall route. The actual kitchen may offer regional dishes, vegetables, rice and noodle options; describe ingredients and portions rather than impose one compulsory local banquet. A small rural property can require dinner in advance, while a city base provides different choices. Do not leave a tired group to find a suitable meal after the return climb.",
        "Clarify chili, pork, fish, soy, wheat, eggs, stocks, sauces and shared preparation as relevant to the menu. A mild dish may still contain meat stock, and a forest setting does not establish serious-allergy capacity. Confirm alternatives and drinking water ahead. Any privately hosted meal, tasting or food workshop is a separate arrangement rather than an automatic benefit of a scenic visit.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the actual base and review the routes",
        description:
          "Complete the agreed gateway and road transfer, settle in and confirm meals. Review openings, weather, local transport and remaining steps for the main day. Add a short local interest only when the actual arrival leaves useful time.",
      },
      {
        day: "Full day 1",
        title: "One substantial waterfall or red-cliff route",
        description:
          "Choose the actual entrance and circuit for the guests, including the return climb and lunch. Allow time for interpretation and rest rather than race through several separate scenic areas. Respect barriers and current operator instructions.",
      },
      {
        day: "Full day 2",
        title: "A genuinely contrasting chapter",
        description:
          "Use another scenic subject, a bamboo interest or a selected historic town when it adds a different perspective. Keep the property and meals useful. A fourth night can add flexibility or a distinct confirmed activity without guaranteeing weather or water volume.",
      },
      {
        day: "Departure",
        title: "Allow the complete road and onward connection",
        description:
          "Use the actual gateway and transfer, avoiding an essential distant walk before fixed transport. This three-night outline is illustrative, not a published product or guarantee of open trails, dramatic falls, private hosts or exclusive scenic transport.",
      },
    ],
  },
};
