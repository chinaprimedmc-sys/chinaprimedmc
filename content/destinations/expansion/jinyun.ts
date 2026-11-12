import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/jinyun.svg",
  alt: "Jinyun planning schematic distinguishing a county-town base, a named Xiandu stay and separate landscape, quarry or village interests; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const jinyunGuide: ExpandedDestination = {
  id: "jinyun",
  name: "Jinyun",
  region: "east",
  kicker: "Xiandu's rock landscape, with architecture and walking chosen carefully",
  description:
    "Plan Jinyun around Xiandu scenery, a well-placed hotel and a selected quarry or village chapter, distinguishing Dinghu Peak, Huangdi traditions, photography and actual walking routes.",
  stay: "2–3 nights",
  bestFor: "Rock landscapes, rural architecture and a focused southern Zhejiang stay",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["lishui", "songyang", "yunhe", "hangzhou"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Jinyun Travel Guide: Xiandu, Quarries & Where to Stay",
    seoTitle: "Jinyun Travel Guide: Xiandu, Quarries & Stays",
    seoDescription:
      "Plan 2–3 nights in Jinyun: compare Xiandu and town hotels, Dinghu Peak views, quarry spaces, village visits, walking and Jinyun West transfers.",
    answer:
      "Jinyun (缙云) is a county within Lishui in southwestern Zhejiang. Its Xiandu landscape is known for the slender rock pillar of Dinghu Peak, river views and places associated with Huangdi traditions. Come for a selected landscape route, then decide whether a converted quarry space or a distinct village adds another worthwhile subject. Two nights give one full day; three allow a separate architectural or historical chapter. The county town, Xiandu scenic area, individual quarry spaces and villages are different places, not one compact walking district.",
    stayAnswer:
      "Two nights can support a focused Xiandu visit with one full day and a comfortable arrival. Three nights give a second day for genuinely different architecture, quarry interpretation or a selected village route. A day trip can work when the complete gateway transfer leaves useful time, but should remain selective. Do not describe an evening arrival and early train as extra sightseeing days. More time is worthwhile when it improves pace and interpretation rather than adds repeated river photographs.",
    hotelAnswer:
      "Choose a named Xiandu-area property when the landscape and village evenings are the main reason to stay, checking its exact position against the actual visits. Choose a county-town hotel when room setup, dining and practical transfers matter more than a scenic setting. A small converted house may have stairs, limited vehicle access and different staffing from a full-service hotel. Confirm quiet, beds, bathroom, temperature control, breakfast and dinner. A Xiandu address does not establish a Dinghu Peak view from the quoted room.",
    sightseeingQuestion: "Should you choose Xiandu scenery, quarry spaces or a village visit?",
    sightseeingAnswer:
      "Start with Xiandu when the rock-and-river landscape is the primary interest. Add a named quarry space for its own relationship between extraction and contemporary reuse, with current public access and interpretation checked. Add a selected village such as Heyang for a separate built-heritage chapter when the route and remaining walking suit. These subjects require different explanations and journeys. Do not assume a quarry is an ancient temple, a Huangdi-related site is an archaeological proof of legend, or every famous river photograph depicts an ordinary unarranged moment.",
    visitorResources: [
      {
        label: "Jinyun county government",
        href: "https://www.jinyun.gov.cn/",
        scope:
          "Official county background and public notices. Check the responsible operator for current Xiandu access, individual quarry spaces, tickets, local visitor transport and village arrangements. A county reference does not guarantee every photographed interior or contemporary project is open to casual visitors.",
      },
      {
        label: "Lishui municipal government",
        href: "https://www.lishui.gov.cn/",
        scope:
          "Wider regional context for distinguishing Jinyun from Lishui city, Songyang and Yunhe. Regional promotion does not establish a single ticket or a short journey among all destinations. Confirm the actual property, daily road sequence and each venue's visitor arrangements.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official rail reference for dated services and actual arrival stations. Jinyun West and Jinyun are distinct station names. Confirm the service, ticket and final road transfer before using a short train duration as evidence of an easy scenic visit.",
      },
    ],
    serviceScope:
      "A tailored Jinyun proposal should identify the actual hotel and room, gateway, selected Xiandu route, admissions, any local transport and guiding language. Quarry spaces, specialist architecture interpretation and village hosts need their own current access or appointment checks. Explain what is public, what is privately arranged and whether a photographic scene involves a paid demonstration. Private guiding does not open a closed quarry, reserve a riverbank or guarantee a performance. Set out walking, pickup, meals and a useful rain alternative before booking.",
    routeAdvice:
      "Use Jinyun as a focused landscape-and-culture stay, with Songyang for a different village-and-architecture chapter or Yunhe for agricultural terraces when the full driving sequence works. Hangzhou can provide a contrasting city and West Lake stay connected through actual dated rail services. No matching published Jinyun product is recommended here. Request a proposal from the illustrative two-night outline, stating whether the priority is scenery, architecture, photography or an easier walk. Choose the hotel and gateway after identifying those priorities, not merely from the broad Lishui label.",
    practicalPlanning: {
      timing:
        "Give the main Xiandu landscape a useful part of the day, with the chosen entrances, local transport, walking and meal included. Put any timed quarry access or specialist session in a separate reliable window. A short map distance between a peak, riverbank and village does not establish a continuous visitor route. Keep an essential train clear of an uncertain photographic session or long village drive. Check public holidays and actual local events before expecting quiet streets.",
      walking:
        "A riverside viewpoint, a stepped scenic route, a quarry interior and a village lane involve different surfaces and demands. Review gradients, thresholds, stairs, low light, uneven ground, seating and toilets for each selected place. A scenic shuttle or private car may reduce road travel without removing the final approach. Respect barriers, water edges and any closed quarry spaces. For limited mobility, ask for a specific route assessment rather than accepting a county-wide easy-walking label.",
      cost: "Compare the exact room, meals, admissions, local visitor transport, guide expertise and actual vehicle hours. A specialist architecture session and general sightseeing provide different services; identify the real person and content. Any paid photographic demonstration needs a clear fee and honest description. Confirm whether quoted scenic tickets cover the selected areas rather than assuming one Xiandu name means every quarry, village and transport service is included. A higher room price should correspond to actual comfort or position, not an unverified landmark view.",
    },
    attractions: [
      "A selected Xiandu rock-and-river landscape route",
      "Dinghu Peak viewed from an actual permitted route rather than an assumed summit climb",
      "Huangdi-related cultural places with tradition and documented history distinguished",
      "A Zhutan Shan-area riverside view when actual access and conditions suit",
      "A named converted quarry space with current public access or appointment confirmed",
      "Heyang village as a separate built-heritage chapter when the full route fits",
      "A local meal or shaobing stop chosen around actual appetite and serving hours",
    ],
    stays: [
      {
        label: "Day visit: one selected landscape introduction",
        advice:
          "Choose a coherent Xiandu route when the complete rail-and-road journey leaves useful time. Do not attempt every quarry, river photograph and outlying village. Arrival and boarding requirements belong in the day rather than being ignored because the intercity train is quick.",
      },
      {
        label: "2 nights: one full Xiandu day",
        advice:
          "Stay for a less rushed landscape route and a useful evening. Keep one base and allow time for the property and meals. A short arrival or departure interest can fit only when the actual schedule supports it; it should not carry an essential paid appointment.",
      },
      {
        label: "3 nights: add a distinct architectural or village chapter",
        advice:
          "Use the second day for named quarry spaces, a confirmed interpreter or Heyang when those genuinely deepen the visit. A longer stay should offer a different subject or easier pace, not another obligatory riverbank photo. Review openings and remaining walking before choosing the addition.",
      },
    ],
    hotelAreas: [
      {
        name: "Xiandu area / a landscape-led stay",
        advice:
          "Map the actual property to the selected scenic entrance, river route and dinner. Review room view, privacy, noise, stairs and luggage access. A village location can be atmospheric while requiring a short walk from the car. Confirm breakfast timing and staffing for an early departure.",
      },
      {
        name: "Jinyun county town / room comfort and practical services",
        advice:
          "Consider for a range of dining and room choices, with planned transfers to Xiandu and any other chapter. Check the exact station and property rather than assuming a central hotel is next to Jinyun West. A town base may suit the guest well without providing a scenic room outlook.",
      },
      {
        name: "A small village or converted-house property / character with conditions",
        advice:
          "Confirm the actual room, bathroom privacy, heating or cooling, sound insulation and reception hours. A restored facade or designer interior does not establish lifts, full-service staffing or quiet. Compare vehicle access and evening meals before choosing character over practical comfort.",
      },
    ],
    tradeoffs: [
      {
        title: "Dinghu Peak is a landscape subject, not an assumed summit outing",
        advice:
          "The famous pillar is a defining part of Xiandu's scenery, but a promise to see it should not become an invented climb to its top. Specify the actual permitted view or route and its remaining steps. Other scenic paths and viewpoints require their own effort assessment. A photograph of the peak does not show the whole visitor approach or prove that every angle is publicly accessible.",
      },
      {
        title: "Huangdi traditions need a different explanation from documented archaeology",
        advice:
          "Xiandu's associations with Huangdi, often called the Yellow Emperor in English, are a cultural and traditional subject. Present legends as legends and explain actual buildings or practices on their own evidence. Do not turn a story into proof that a named event happened at the precise spot, or imply a ceremony is available on request. Current religious or ceremonial access needs respect and confirmation.",
      },
      {
        title: "Quarry reuse is not the same as untouched ancient architecture",
        advice:
          "Jinyun's quarry spaces can be interesting through their material, extraction history and later adaptation. Distinguish the original working void from contemporary design interventions. A published architectural image may show a project, event setup or space without routine visitor access. Confirm the named site, opening, interpretation and any event before building the day around it; do not claim an architect meeting or private interior without an actual arrangement.",
      },
      {
        title: "A river photograph may include a deliberately arranged scene",
        advice:
          "An image with a person, animal or agricultural prop may reflect a paid photographic setup rather than spontaneous daily work. Ask what is actually proposed, how consent and animal welfare are handled, and whether the guests want that format. A visitor can enjoy the river landscape without commissioning a scene. Do not advertise a staged image as an unplanned private encounter.",
      },
      {
        title: "Heyang village is a separate chapter, not another Xiandu courtyard",
        advice:
          "Choose it for built heritage and the present-day settlement, with the actual transfer and public route considered. Private homes and courtyards are not automatically open. A selected visit should add explanation rather than simply another old-village label, especially if Songyang is also in the itinerary. Check what makes the contrast meaningful before adding more road time.",
      },
      {
        title: "Jinyun West and Jinyun station are different arrivals",
        advice:
          "Use the actual dated train and full station name, then compare the road transfer to the hotel or first visit. Do not interchange pickup instructions or assume the station sharing the county name is next to Xiandu. A short intercity service is only one part of the hotel-to-hotel journey, and local road conditions can affect the final sequence.",
      },
      {
        title: "A Lishui regional route needs selected bases",
        advice:
          "Jinyun, Songyang, Yunhe and Longquan provide different subjects and occupy different locations. One city hotel is not automatically convenient for all of them, while moving every night can also waste time. Choose one or two real priorities, then compare the entire road and rail pattern. Regional coverage should improve the decision, not turn each county into a brief checkbox.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "lishui",
        advice:
          "Use the regional guide to distinguish Liandu city, river-village interests and separate county chapters. Jinyun has its own gateways and a different landscape route. A regional name on the hotel booking does not establish a convenient Xiandu base or enough time for every other county.",
      },
      {
        slug: "songyang",
        advice:
          "Songyang adds mountain settlements and contemporary rural architecture through actual village routes. Compare the remaining walking, property access and full county-to-county drive. If architecture is the priority, choose distinct examples and a genuinely informed interpreter rather than repeat generic village walks.",
      },
      {
        slug: "yunhe",
        advice:
          "Yunhe adds agricultural terraces with their own crop stage, light and hotel decisions. Give the landscape a useful window rather than treating it as another quick photograph after Xiandu. Compare actual road time and the next rail gateway before deciding whether to use two bases.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou provides West Lake, city culture and Longjing tea as a contrasting chapter. Check actual dated services to the right Jinyun station and both hotel transfers. A convenient rail connection can support a thoughtful stay without making all of southern Zhejiang a short city excursion.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit selected landscape and village walks, with rain and temperature changes still possible. Summer heat, humidity and heavy rain affect exposed routes, riverside conditions and road plans. Winter calls for good room heating and a manageable outdoor sequence. Mist and clear rock views are different possibilities, not fixed seasonal products. Check current forecasts, openings and events for the actual places; an architectural interior should not be assumed open merely as a rain alternative.",
    orientation:
      "Jinyun county sits within the wider Lishui area of southwestern Zhejiang. The county town, Xiandu, individual quarry spaces and Heyang village require separate location checks. Dinghu Peak is a specific landmark within the broader Xiandu landscape. Jinyun West railway station and Jinyun station are distinct gateways, and neither is another name for Lishui station. Use complete Chinese addresses and actual venue names to avoid booking a regional hotel far from the intended chapter.",
    experiences: [
      "Read Xiandu's rock-and-river landscape through a coherent route and explained cultural associations",
      "Choose a named quarry space for material and contemporary reuse when current access permits",
      "Add a distinct village or food chapter with enough time for questions, meals and rest",
    ],
    planningNotes: [
      "Choose the actual Xiandu or town property and compare room view, quiet, stairs and dinner",
      "Confirm named quarry access and distinguish legends, historic fabric and modern intervention",
      "Use the correct station and select other Lishui chapters through the full road sequence",
    ],
    arrival:
      "Check the actual train to Jinyun West or Jinyun and include the final hotel or scenic transfer. The names are not interchangeable, and Xiandu is not a railway platform. An arrival through Lishui, Hangzhou or another gateway requires a complete connection assessment. Send the ticket and Chinese hotel address for pickup. Avoid tying an essential architectural appointment or paid photographic scene to an uncertain arrival, particularly when luggage, local transport or a village approach remains.",
    gettingAround:
      "Combine selected walks with road transfers between actual chapters. Xiandu visitor transport, where required, has its own operating arrangements, while quarry or village stops may have different access points. Agree pickup, seating, rest and toilets for the actual guest. A private vehicle does not provide access to every riverbank or closed interior. Avoid repeated backtracking between town, landscape and outlying village merely to increase the number of stops.",
    stayStrategy:
      "One base usually works for a two- or three-night Jinyun stay. Choose Xiandu for a particular setting and local evenings, or town for room setup and practical services, then compare the full daily route. Ask about soundproofing, bathroom, stairs, temperature control and meals at small properties. An expensive view category should refer to the quoted room. Protect time at the hotel rather than paying for atmosphere that is never enjoyed during an overloaded circuit.",
    firstTimerNote:
      "A good Jinyun visit needs a clear main subject. Landscape, architectural reuse and village heritage can complement each other, but they do not all belong in every short stay. Start with Xiandu if that is why you came, then select one real contrast. Explain the historical layers and any arranged photographic activity honestly. A smaller, coherent route will often leave a stronger impression than many similar pictures taken between transfers.",
    faqs: [
      {
        question: "How many nights should I spend in Jinyun for Xiandu?",
        answer:
          "Two nights provide one full day for a focused landscape visit. Three allow a separate quarry, architecture or village chapter with current access confirmed. A day trip can work when the full gateway and road journey leaves useful time, but should remain selective rather than attempt every named place.",
      },
      {
        question: "Should I stay in Jinyun town or Xiandu?",
        answer:
          "Choose a named Xiandu property for its actual landscape setting and evenings, or town for room choices, dining and practical services. Compare the quoted room, noise, stairs, dinner and each day's road travel. A Xiandu address does not guarantee a Dinghu Peak view from the room.",
      },
      {
        question: "Is Dinghu Peak a climb to the top of the rock pillar?",
        answer:
          "Do not assume that from the landmark's name or photograph. Specify the actual permitted viewing route and remaining walking. Seeing the pillar, walking a scenic path and reaching another viewpoint are different activities. Current operator access and the guest's abilities should determine the chosen circuit.",
      },
      {
        question: "Are Jinyun's quarry spaces open to visitors every day?",
        answer:
          "That needs confirmation for the named space and date. Architectural photographs can show a project or event arrangement without establishing routine public access. Check opening, admission or appointment, current use and actual interpretation before making the visit essential. A private guide cannot open a closed interior.",
      },
      {
        question: "Are Xiandu's famous river scenes spontaneous daily life?",
        answer:
          "Not necessarily. A photograph may include a paid or arranged scene. Ask what is proposed, how consent and animal welfare are handled, and whether that format appeals. The river landscape can be enjoyed without commissioning a setup; arranged activity should not be sold as an accidental encounter.",
      },
      {
        question: "Are Jinyun West and Jinyun the same railway station?",
        answer:
          "No. Use the exact station on the actual dated ticket and compare the final transfer to the hotel or Xiandu. Neither name alone establishes a scenic-area arrival. Send full booking details for pickup rather than using only Jinyun or Lishui as the meeting instruction.",
      },
      {
        question: "Can Jinyun suit travelers who prefer less walking?",
        answer:
          "A shorter selected route and planned transfers may help, but check steps, thresholds, uneven ground, river approaches, quarry light and village access individually. A scenic-area or private-vehicle label does not make the day step-free. Describe mobility and rest needs before choosing the actual places.",
      },
      {
        question: "Can I combine Jinyun with Songyang and Yunhe?",
        answer:
          "They can form distinct chapters in a longer route when useful nights and the full transport pattern fit. Songyang adds villages and architecture; Yunhe adds season-dependent agricultural terraces. Do not assume all three are convenient from one base or worthwhile as short stops in one busy day.",
      },
    ],
    culturalStory: {
      title: "Separate landscape traditions, village history and contemporary reuse",
      paragraphs: [
        "Xiandu's scenery has cultural associations as well as physical form. Stories connected with Huangdi can help visitors understand how a landscape is interpreted, provided tradition is identified as tradition. The actual site, building and current practice need their own explanation. A guide should distinguish what can be documented from what belongs to legend, without diminishing either by presenting them as identical forms of evidence.",
        "Quarry spaces introduce another relationship between landscape and human work, sometimes reshaped through contemporary intervention. A village such as Heyang adds a different built and residential context. Explain those layers separately and respect current uses, access and residents. An informed visit can be valuable without claiming an architect's private invitation, a ceremonial performance or unrestricted entry to homes.",
      ],
    },
    foodStory: {
      title: "Make a shaobing stop part of a real food plan",
      paragraphs: [
        "Jinyun shaobing, often made with pork and preserved mustard greens, can be an enjoyable smaller food stop when the actual bakery and preparation suit the guests. Explain the version being served rather than assuming every filled flatbread is identical. Balance it with a proper seated meal and regional dishes chosen from the kitchen's actual menu. A snack demonstration, a bakery purchase and a hands-on class are different arrangements.",
        "Clarify wheat, pork, preserved ingredients, sauces, stocks and shared preparation. A preserved-green filling does not mean a snack is vegetarian, and removing an ingredient may not address an allergy. At a small village property, agree dinner and breakfast ahead instead of assuming full-service restaurant hours. Good food planning protects appetite, comfort and choice between walks rather than making a famous snack compulsory.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the actual town or Xiandu base",
        description:
          "Use the correct station and agreed road transfer, settle into the quoted room and enjoy a nearby meal. Review openings and conditions for the main route. A short local walk can fit when useful time remains; keep essential appointments away from arrival uncertainty.",
      },
      {
        day: "Full day",
        title: "A coherent Xiandu landscape and cultural route",
        description:
          "Choose the actual Dinghu Peak views, river section and cultural places for their distinct explanations and walking. Allow lunch, rest and any local transport. Make any paid photographic arrangement optional and transparent rather than the assumed centerpiece of the visit.",
      },
      {
        day: "Optional second full day",
        title: "A separate quarry or village chapter",
        description:
          "A third night permits named quarry spaces with confirmed access or a selected Heyang visit when it adds a different subject. Keep the full road journey and remaining steps visible. A worthwhile alternative should not depend on a closed interior becoming available.",
      },
      {
        day: "Departure",
        title: "Allow the full onward journey",
        description:
          "Use the actual station and transfer, leaving room for luggage and boarding. This two-night outline with an optional third night is illustrative, not a published product or guarantee of quarry access, named specialists, river scenes, ceremonies or private interiors.",
      },
    ],
  },
};
