import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/xiapu.svg",
  alt: "Xiapu planning schematic distinguishing a county-town base, an actual coastal stay and a tide-aware photography route; original schematic, not a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const xiapuGuide: ExpandedDestination = {
  id: "xiapu",
  name: "Xiapu",
  region: "south",
  kicker: "A working coast, with tides and light shaping the day",
  description:
    "Choose Xiapu for a considered coastal and photography stay, comparing town and village hotels, tide-dependent views, early starts and the value of a visit without a camera.",
  stay: "3–4 nights",
  bestFor: "Coastal photography, working landscapes and a slower Fujian route",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["pingtan", "fuding", "quanzhou", "wuyishan"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Xiapu Travel Guide: Tides, Photography & Where to Stay",
    seoTitle: "Xiapu Travel Guide: Tides, Photos & Stays",
    seoDescription:
      "Plan 3–4 nights in Xiapu: compare town and coastal hotels, tidal-flat photography, sunrise routes, walking and a worthwhile stay without a camera.",
    answer:
      "Xiapu (霞浦) is a coastal county in Ningde, northeastern Fujian, known among photographers for tidal flats, aquaculture patterns and changing light. It is a working coast rather than one scenic park or a conventional beach resort. Three nights give two full days for selected coastal routes; a fourth provides another weather and tide window without guaranteeing a particular image. Choose it for an interest in the landscape and its human use, not solely to reproduce a photograph seen online. Hotel location, early-start tolerance and the actual tidal conditions matter more than a long list of viewpoints.",
    stayAnswer:
      "Allow three nights for two full days when Xiapu is a genuine interest. Four nights offer more flexibility for weather, tide and a slower coastal chapter. Two nights can support a focused introduction with convenient transport, but give limited opportunity to adjust conditions. Do not call arrival and departure two additional photography days without checking the train, transfers and usable light. More nights improve the choice of windows, not the certainty of sun, exposed mudflats or an active fishing scene.",
    hotelAnswer:
      "A county-town base can offer more dining choices and straightforward station pickup, accepting early road journeys to selected coastal locations. A named coastal or village property may put you near one part of the route, with different access, meals, noise and room standards. Xiapu covers a wider area than its town; a sea-view label does not establish a useful view of the desired tidal flat. Compare the exact room, road approach, breakfast timing and dinner before deciding. Keep one base unless moving materially improves distinct parts of a longer stay.",
    sightseeingQuestion: "Is Xiapu worth visiting if you are not a photographer?",
    sightseeingAnswer:
      "It can be, if you enjoy working coastal landscapes, selected village walks, seafood and a slower rhythm. Choose fewer stops, useful daylight and a comfortable property instead of following a pre-dawn photography circuit. If the main appeal is a swimming beach, extensive resort facilities or guaranteed blue-water views, another destination may fit better. Ask what each stop contributes without a telephoto lens or a particular tide. The plan should still offer a worthwhile day when a signature photograph is impossible.",
    visitorResources: [
      {
        label: "Xiapu county government",
        href: "https://www.xiapu.gov.cn/",
        scope:
          "Official starting point for county background and public notices. This reference does not establish current viewpoint access, photographic staging, tide predictions, private hosts, accommodation standards or a boat's suitability. Confirm each actual route and operator separately.",
      },
      {
        label: "Fujian provincial government: English portal",
        href: "https://www.fujian.gov.cn/english/",
        scope:
          "Provincial background for placing Xiapu within a wider Fujian journey. Use the responsible local authority or operator for dated visitor arrangements. General destination information is not a transport booking, weather forecast or proof of a service's availability.",
      },
    ],
    serviceScope:
      "A tailored Xiapu proposal should identify the base, actual coastal stops, expected early starts, guiding language, vehicle hours and photography support. A general destination guide and a photographer who can help with equipment or composition are different services. Set out the viewpoint access, remaining walk, any host fee and whether a proposed scene is ordinary work, a demonstration or a paid arrangement. Tide, forecast and current access should inform the final sequence. No private access to working sites, particular fishing activity, drone flight or boat trip is implied by private guiding.",
    routeAdvice:
      "Use Xiapu as a distinct coastal chapter, possibly paired with Fuding for white tea or Quanzhou for urban heritage. A coastal location does not make all Fujian stops close; compare the actual train and both hotel transfers. Wuyishan adds another landscape and tea subject with its own gateway. No matching published Xiapu product is recommended here. Request a proposal using the illustrative three-night outline, explaining whether the priority is serious photography, a comfortable coastal stay or a mixed-interest group. This determines the base, start times and alternatives.",
    practicalPlanning: {
      timing:
        "Match the intended subject to the actual tide, daylight, forecast and access rather than putting sunrise and sunset into a fixed template. Tide times move from day to day and conditions differ by location; a generic high-or-low-tide rule is insufficient. Allow time to reach and walk to the viewpoint before useful light. Protect sleep after early starts, agree vehicle duty hours and do not add a late rail departure immediately after a distant sunset stop.",
      walking:
        "Some viewpoints involve steps, slopes, uneven paths, wet surfaces or standing with equipment. Assess each actual route and the low-light approach. Tidal flats, embankments and working aquaculture areas are not unrestricted walking grounds; stay on permitted routes and do not enter mud, channels or private workspaces for a better angle. A driver cannot remove the final viewpoint climb. Give the planner the guest's walking needs and camera-bag weight before selecting stops.",
      cost: "Compare hotel room and location, vehicle start and finish, guide expertise, meals and any legitimate access, demonstration or boat charges. Identify which arrangements are private, shared or simply access to a public place. A photography premium should correspond to named expertise and useful field support, not a promise of weather or an unpublished secret location. For seafood, agree species, weight or portion, preparation and price basis before ordering; a coastal menu does not establish a fixed included banquet.",
    },
    attractions: [
      "Selected tidal-flat viewpoints around Beiqi, with current access and tide considered",
      "A chosen Dongbi or Sansha coastal chapter, distinct from the county-town base",
      "A Shajiang-area landscape route when its actual conditions and access suit the visit",
      "Permitted village streets and shoreline viewpoints chosen for the guests' interests",
      "A properly explained working-coast subject without assumed access to production areas",
      "A coastal meal with actual ingredients, portions and price basis agreed",
    ],
    stays: [
      {
        label: "2 nights: a selective coastal introduction",
        advice:
          "Choose one full day and a small number of useful stops. This can suit a mixed itinerary when transport is favorable. Do not promise several sunrise opportunities, every famous image and a full village route from a short stay with only one complete day.",
      },
      {
        label: "3 nights: two full days and a workable rhythm",
        advice:
          "Give distinct coastal subjects their own windows, with time for meals and rest. A photographer may choose one early start and another contrasting light period rather than staying on the road continuously. Non-photographers can follow a later, more selective route.",
      },
      {
        label: "4 nights: another conditions window",
        advice:
          "Add flexibility and a slower chapter rather than guarantee a specific result. Review the property and alternatives carefully: an additional rainy day should not mean waiting in an unsuitable room or filling the time with unwanted shopping. Moving base requires a clear route benefit.",
      },
    ],
    hotelAreas: [
      {
        name: "Xiapu county town / meals and a practical transport base",
        advice:
          "Consider for a wider choice of dinners, room categories and station transfers. Compare the full drive to each selected viewpoint, especially before dawn. Ask about quiet rooms, blackout curtains, early breakfast or a packed option and the actual pickup point. A town base is practical, not automatically scenic.",
      },
      {
        name: "Dongbi or Sansha area / a specific coastal setting",
        advice:
          "Select the named property for its actual outlook and route position. Verify room orientation, privacy, nearby construction or road noise, stairs and dinner. A beautiful terrace photograph may show a shared space or a different category. Being near one coastal subject does not remove all transfers to other parts of Xiapu.",
      },
      {
        name: "A smaller village property / close to one chosen subject",
        advice:
          "Book only when the host, room, bathroom, temperature control, luggage access and meal plan meet the guests' needs. Confirm late or early staffing and how transport reaches the property. Village character does not establish full-service hospitality, quiet at all hours or unrestricted access to residents' work.",
      },
    ],
    tradeoffs: [
      {
        title: "The right tide depends on the photograph you want",
        advice:
          "Different views depend on different combinations of water, exposed ground, light and activity. High tide is not universally better than low tide, and a table for one location cannot settle every stop. Discuss the subject first, then use appropriate current predictions, forecast and local observation. Do not guarantee a reflection, exposed pattern or fishing scene from a date alone.",
      },
      {
        title: "An iconic photograph may not show an ordinary visitor moment",
        advice:
          "A long lens, elevated angle, particular light or arranged human activity can change the scene considerably. Ask whether a proposed activity is routine work, a demonstration or paid staging, and whether participants consent. If you prefer documentary travel, say so. Do not describe a commissioned scene as an unplanned glimpse of daily life or imply that every visitor will see it.",
      },
      {
        title: "A private guide and a photography specialist are different bookings",
        advice:
          "Confirm the actual person's language, local route knowledge and ability to support the guest's equipment or technique. General cultural guiding does not establish camera instruction, and a driver who knows viewpoints is not automatically an interpreter. Agree the learning aim, group size and pace. Mixed-interest groups may need fewer long waits rather than a technically intensive field session.",
      },
      {
        title: "A coastal holiday is not automatically a beach holiday",
        advice:
          "The tidal-flat and aquaculture landscapes that attract photographers differ from a resort beach with confirmed swimming conditions. A sea-facing hotel does not guarantee sand, safe water access or extensive facilities. For non-photographers, assess the room, meals and daylight route on their own merits instead of selling every shoreline as a luxury beach escape.",
      },
      {
        title: "Working landscapes require permission and practical boundaries",
        advice:
          "Nets, poles, channels, farms, boats and village lanes are used by people earning a living. Do not move equipment, enter platforms or walk on mud for a composition. Portraits, private workspaces and any hosted explanation need consent. Drone operation requires its own current legal, local and site checks; an aerial image on a brochure is not permission to fly.",
      },
      {
        title: "Boat or island additions are separate decisions",
        advice:
          "An offshore or boat-based extension has different weather, operator, boarding, safety and return requirements from a land-based viewpoint day. Confirm the named route and suitability rather than adding a generic fishing-boat experience. A private car plan does not include a vessel. If the boat cannot run, agree an alternative that still fits the guests' actual interests.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "pingtan",
        advice:
          "Pingtan offers a different island-and-beach setting alongside Xiapu's working coast and tidal landscapes. Choose each base for its actual subject and allow complete transfers. An extra coastal stop should add a distinct experience; neither place guarantees particular light, calm seas or a bioluminescent spectacle.",
      },
      {
        slug: "fuding",
        advice:
          "Fuding adds white tea and a different mountain-or-coast choice in northeastern Fujian. Compare the actual stations or road route and both hotel transfers. Give a tea host a useful, confirmed appointment rather than fitting the session immediately after an uncertain sunrise or train connection.",
      },
      {
        slug: "quanzhou",
        advice:
          "Quanzhou provides a contrasting urban, religious and maritime-history chapter. It is not another Xiapu viewpoint. Choose useful nights in each place and compare the full rail-and-road journey, keeping an essential heritage or food appointment away from arrival uncertainty.",
      },
      {
        slug: "wuyishan",
        advice:
          "Wuyishan adds rock tea, river scenery and selected mountain walking. Compare the complete route rather than assuming a shared Fujian location makes it a short extension. Two landscape chapters need distinct value, suitable physical demands and their own weather alternatives.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose dates around the landscape interest, likely conditions and tolerance for heat, rain and early starts, then refine the route with current information. Spring and autumn can be comfortable periods, but light and visibility are never guaranteed. Summer may bring heat, heavy rain and typhoon-related disruption; winter can be cool and windy on exposed viewpoints. Aquaculture and working scenes change with actual activity, not only the month. A good stay should retain value without a specific sky or a staged scene.",
    orientation:
      "Xiapu is a county within Ningde in northeastern Fujian. The county town, railway station, Dongbi or Sansha stays and different tidal-flat viewpoints are separate points. A location advertised simply as Xiapu may be well placed for one subject and inconvenient for another. Ningde city is not the same arrival as Xiapu town. Use named viewpoints, the actual property and the exact station to build the daily road sequence.",
    experiences: [
      "Read a selected coastal landscape through tide, aquaculture patterns and changing light",
      "Choose a photography session with its expertise, access and any arranged activity clearly identified",
      "Enjoy a slower village-and-food chapter that remains worthwhile without a signature photograph",
    ],
    planningNotes: [
      "Compare town and coast by the exact room, early-start transfer and dinner options",
      "Set the sequence using actual tides, weather, daylight and current permitted access",
      "Agree photography support, host consent and a worthwhile alternative before booking",
    ],
    arrival:
      "Use the exact Xiapu rail ticket and confirm the station-to-hotel road transfer. Ningde and Fuding are different rail arrivals, and an airport serving a wider Fujian or southern Zhejiang gateway still requires an onward journey. Compare actual dated services and the final road segment rather than choosing an airport by apparent map proximity. A late train may leave no useful coastal light; do not attach an essential sunset stop to an uncertain arrival. Send the booking details and full hotel address for pickup.",
    gettingAround:
      "A planned vehicle is useful for a selected circuit of dispersed coastal points. Agree the actual stops, early or late hours and remaining approach walks. A private vehicle day is not unlimited driving between every famous sunrise and sunset location. Weather and tide may justify changing the order. Some local roads and viewpoint approaches can be narrow or stepped, so verify luggage, seating and mobility needs instead of relying on a generic accessible-coast description.",
    stayStrategy:
      "Choose the base after identifying the main subjects and the group's appetite for early starts. For a short first stay, one practical hotel can save packing and simplify weather changes. A coastal property is worthwhile when the actual room, meals and outlook justify it, not solely because its gallery contains a famous view. Protect sleep, a proper breakfast and useful downtime between light windows. A mixed-interest couple should not both be required to follow a specialist photographer's schedule.",
    firstTimerNote:
      "Start with two or three distinct subjects, not a catalogue of viewpoint names. Ask how the place looks at the expected tide and what the visit offers without ideal light. A well-explained working landscape, a comfortable meal and time to watch conditions change can be more rewarding than rushing between similar platforms. The aim is a good coastal visit; a successful photograph is an outcome, not a booking guarantee.",
    faqs: [
      {
        question: "How many nights do I need in Xiapu?",
        answer:
          "Three nights give two full days for selected coastal subjects; four provide another conditions window and a slower pace. Two can suit a focused introduction with convenient transport. Extra nights improve flexibility but do not guarantee sunshine, exposed tidal patterns or particular working activity.",
      },
      {
        question: "Is high tide or low tide better for Xiapu photography?",
        answer:
          "It depends on the intended subject and viewpoint. Water, exposed ground, light and actual activity contribute differently to each scene. Use appropriate current predictions and local observation for the chosen location. A general tide rule or a date alone cannot promise a reflection, pattern or fishing scene.",
      },
      {
        question: "Should I stay in Xiapu town or near Dongbi?",
        answer:
          "Town can offer more dining and practical transport options, with drives to the coast. A Dongbi or Sansha property may suit a particular outlook or subject, but needs its exact room, road access and meals checked. Choose from the planned route and sleep requirements rather than a sea-view label.",
      },
      {
        question: "Is Xiapu worth visiting without a camera?",
        answer:
          "It can suit guests who enjoy working coasts, selected village walks and seafood. Use a later, more selective route rather than a pre-dawn photography circuit. If a swimming beach and full resort facilities are the priority, compare other destinations. The stay should have value without reproducing an online photograph.",
      },
      {
        question: "Are Xiapu's famous fishing scenes always natural daily activity?",
        answer:
          "Not necessarily. A photograph may depend on a particular lens, angle, timing or arranged activity. Ask whether the proposed scene is routine work, a demonstration or paid staging, and how consent is handled. Do not represent a commissioned scene as an accidental encounter with everyday life.",
      },
      {
        question: "Can I walk onto the tidal flats or fly a drone?",
        answer:
          "Do not assume either is permitted. Mud, channels and working areas are not unrestricted visitor paths. Stay on agreed permitted routes. Drone use needs separate current legal, local and site checks; a guide or brochure image does not establish permission or safe operation.",
      },
      {
        question: "Does a private Xiapu guide include photography instruction?",
        answer:
          "Only when the actual expertise and service are agreed. A general guide, driver and photography specialist provide different support. Confirm language, equipment knowledge, learning aim, group pace and any arranged activity. No specialist, private workspace or particular image is included merely through the word private.",
      },
      {
        question: "Can I combine Xiapu with Fuding white tea?",
        answer:
          "Yes, as separately planned chapters when dated transport and an actual tea host fit. Include both hotel transfers and useful time for the session. A tasting, garden visit and live processing are different arrangements; the season and producer's work determine what is genuinely possible.",
      },
    ],
    culturalStory: {
      title: "See the coast as a place of work as well as a composition",
      paragraphs: [
        "Xiapu's visual appeal comes partly from the relationship between water, shoreline and human use. Aquaculture structures and fishing-related patterns are not simply decorative props. A thoughtful explanation asks what a place is used for and how activity changes, without inventing a timeless routine or treating every distant figure as part of a visitor performance. The same viewpoint can tell different stories under different conditions.",
        "Village streets and working areas remain someone's everyday environment. Ask before portraits, keep access clear and arrange any hosted conversation with genuine consent. If an activity is commissioned for photography, explain it honestly and agree the participant and fee. Understanding how an image is made can deepen the visit; disguising a demonstration as spontaneous life does the opposite.",
      ],
    },
    foodStory: {
      title: "Let the actual catch and kitchen guide a coastal meal",
      paragraphs: [
        "A seafood meal can add a useful perspective on a working coast, but the menu and available species vary. Ask what is available, how it will be prepared and whether the price is by weight, portion or dish. A simply cooked fish or shellfish dish with vegetables and rice may be more enjoyable than a large banquet between photography stops. Guests who do not eat seafood need a real alternative agreed in advance.",
        "Clarify shellfish and fish allergies, bones, sauces, stocks, shared equipment and the suitability of raw or lightly cooked preparations for the actual guests. A fresh-seafood claim is not an allergy assurance or a reason to overlook food handling. Agree dinner timing around sunset plans so the visit does not end with tired guests choosing hurriedly from an unfamiliar tank or menu.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle in and review the conditions",
        description:
          "Use the actual station-to-hotel transfer, confirm room and meals, and review tide, weather and current access for the next day. Add a nearby daylight interest only when the arrival leaves useful time. Do not make the stay depend on catching sunset straight off the train.",
      },
      {
        day: "Full day 1",
        title: "One coastal subject in its useful window",
        description:
          "Choose an early or later light period for a specific landscape, with the approach and any arranged activity explained. Protect breakfast, rest and lunch. A mixed-interest group can follow a shorter daylight route rather than spend every window waiting with equipment.",
      },
      {
        day: "Full day 2",
        title: "A contrasting coastal chapter",
        description:
          "Select another subject only when it adds a different perspective and current conditions suit. Include a village or food interest and time at the property. A fourth night allows another window or slower day without guaranteeing the desired image.",
      },
      {
        day: "Departure",
        title: "Leave time for the real onward connection",
        description:
          "Allow the complete hotel-to-station transfer and avoid an essential distant viewpoint before departure. This three-night outline is illustrative, not a published product or a guarantee of light, tide, fishing activity, photographic expertise, boat operation or private access.",
      },
    ],
  },
};
