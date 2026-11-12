import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/yunhe.svg",
  alt: "Yunhe planning schematic separating county-town comfort, a named terrace-area stay and a season-aware viewpoint route; original schematic, not a geographic map or photograph",
  width: 1600,
  height: 1200,
};

export const yunheGuide: ExpandedDestination = {
  id: "yunhe",
  name: "Yunhe",
  region: "east",
  kicker: "Rice terraces with time for the landscape and a good night's sleep",
  description:
    "Plan Yunhe's rice terraces around the actual crop stage, a suitable viewpoint and a well-chosen town or mountain hotel, with walking, weather and wider Lishui routes clearly explained.",
  stay: "2–3 nights",
  bestFor: "Rice-terrace landscapes, photography and a quieter Zhejiang stay",
  interests: ["landscape", "heritage", "food"],
  relatedDestinationIds: ["lishui", "songyang", "jinyun", "yuanyang"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Yunhe Travel Guide: Rice Terraces, Seasons & Where to Stay",
    seoTitle: "Yunhe Rice Terraces Guide: Seasons & Stays",
    seoDescription:
      "Plan Yunhe rice terraces in Zhejiang: compare crop seasons, town and mountain hotels, sunrise viewpoints, walking and a useful 2–3-night stay.",
    answer:
      "Yunhe (云和) is a county within Lishui in southwestern Zhejiang, with a rice-terrace landscape separate from the county town. Choose it for time looking at cultivated hillsides, a selected walk and a slower rural stay. Two nights provide one full day; three allow another conditions window or a gentler pace. The appearance changes with water management, planting, growth and harvest, so a reflected sky, green field and golden crop are different experiences. Choose the agricultural scene you value, then check actual conditions rather than assuming every photograph can be reproduced in any month.",
    stayAnswer:
      "Two nights work for one focused landscape day when arrival and departure are convenient. Three nights give two full days, useful for a slower stay or another weather window. A day visit can introduce the terraces from another Lishui-region base, but the complete return drive and viewpoint approach determine its value. Overnight for a particular morning or evening only when the actual property and transfer improve that opportunity. More nights do not guarantee sunrise, mist or cloud below the terraces.",
    hotelAnswer:
      "Compare a Yunhe county-town hotel for meals and room choice with a named terrace-area property for a setting closer to the chosen landscape. The county town is not the rice-terrace viewpoint. For a mountain stay, verify the actual room, view direction, heating or cooling, dinner, steps and final road approach. A terrace-view photograph may come from a public platform or shared space rather than the quoted room. A city hotel in Lishui is a separate regional base, not another Yunhe hotel neighborhood.",
    sightseeingQuestion: "Should you visit Yunhe for sunrise or for a daytime terrace walk?",
    sightseeingAnswer:
      "Choose a sunrise attempt when photography and an early start genuinely matter, with the actual access, forecast and transfer confirmed. Choose a later viewpoint and a selected walk when seeing the landscape comfortably is more important than a particular sky. Neither requires a full circuit of every platform. A mountain hotel can reduce one journey but does not guarantee the weather or remove steps. For mixed-interest groups, one early outing with a relaxed later day often makes more sense than repeated pre-dawn departures.",
    visitorResources: [
      {
        label: "Yunhe county government",
        href: "https://www.yunhe.gov.cn/",
        scope:
          "County background and public notices, mainly in Chinese. Confirm current terrace-area access, local visitor transport, opening arrangements and roads with the responsible operator. This reference does not verify a crop stage, sunrise condition, private host or hotel's room quality.",
      },
      {
        label: "Lishui municipal government",
        href: "https://www.lishui.gov.cn/",
        scope:
          "Wider regional context for distinguishing Yunhe from Lishui city and other counties. A regional destination listing is not a single scenic ticket or evidence that every county is a convenient day trip from one hotel. Check actual locations and dated local arrangements.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official rail booking reference for comparing the actual gateway and dated service. A rail arrival in the wider region still needs the final road journey to Yunhe and the named property. Check the ticketed station rather than assuming a scenic destination has a station at its entrance.",
      },
    ],
    serviceScope:
      "A tailored Yunhe proposal should specify the hotel and actual room, gateway, road transfers, selected viewpoints, guiding language and remaining walks. Confirm scenic admissions and any required local visitor transport rather than assuming the private vehicle reaches each platform. State whether an early start or photography specialist is included, and agree a useful alternative for poor visibility. Farm visits, village hosts, portraits and access to working fields require consent. Private guiding does not provide unrestricted terrace access, control the crop cycle or guarantee a photographic scene.",
    routeAdvice:
      "Use Yunhe as one clear southern Zhejiang chapter, pairing it with Songyang for villages and rural architecture or Jinyun for a different rock-landscape interest when the full route works. Lishui is the regional planning layer, not proof that all those places share a convenient base. Yuanyang offers a separate rice-terrace comparison in Yunnan, with a different journey and cultural setting. No matching published Yunhe product is recommended here. Request a proposal from the illustrative two-night outline, sharing preferred scenery, walking tolerance, early-start appetite and room expectations.",
    practicalPlanning: {
      timing:
        "Choose the intended viewpoint or walk before setting departure. For early light, include the real drive, parking, admission or local transport and remaining approach in the plan. Check current opening arrangements; a sunrise image online does not establish visitor access at that hour. Protect breakfast and rest after an early start. Keep an essential distant train separate from the main landscape window rather than assuming a short photo stop will always finish on time.",
      walking:
        "Terrace viewpoints, village lanes and connecting paths can have steps, gradients, wet paving and uneven ground. A lookout and a longer terrace walk are different physical commitments. Review the precise route, handrails, seating, toilets and vehicle meeting point. Stay on permitted paths and do not walk along field edges or enter waterlogged plots for a picture. A private car or local shuttle can reduce part of the approach without making the entire visit step-free.",
      cost: "Compare the same room category, meals, scenic admissions, local visitor transport, guide time and actual road hours. Ask how an early start affects breakfast and vehicle duty. A room-view premium should refer to the quoted room, not a gallery image from elsewhere. A photography service needs genuine identified expertise rather than simply a driver and a viewpoint list. State optional host or activity fees separately, and do not make shopping a condition of a rural visit.",
    },
    attractions: [
      "A selected Yunhe rice-terrace viewpoint matched to current crop and weather conditions",
      "The Jiuqu Yunhuan terrace-viewing area when current access suits the route",
      "A Baiyingu-area route chosen for its actual walking and permitted access",
      "A selected Kenggen village chapter with residential and working areas respected",
      "A shorter daytime landscape walk as an alternative to a sunrise-focused visit",
      "A named rural property whose actual room and meals contribute to the stay",
    ],
    stays: [
      {
        label: "Day visit: a selective terrace introduction",
        advice:
          "Use one useful viewpoint or manageable walk when the full road journey leaves worthwhile time. A day visit is not automatically the best choice for sunrise, and should not be compressed between distant rural stops and a fixed train. Compare the actual guest's interest with the driving involved.",
      },
      {
        label: "2 nights: one full landscape day",
        advice:
          "Choose a base for the intended view, meals and sleep. Use a selected morning or daytime route, leaving enough room for weather changes and rest. Arrival and departure can add short interests only when their real timings permit.",
      },
      {
        label: "3 nights: another window and a slower stay",
        advice:
          "Give two full days different purposes: a chosen light window and a more relaxed walk or village chapter. The hotel should remain worthwhile if one day is wet or visibility is poor. Another night improves flexibility, not the certainty of a sea of clouds.",
      },
    ],
    hotelAreas: [
      {
        name: "Yunhe county town / room choice and meals",
        advice:
          "Consider when practical services, restaurants and straightforward pickup matter most. Compare the complete drive to the selected terrace entrance and early-start timing. Check quiet, blackout curtains, beds, breakfast and reception rather than assuming a town hotel is either unsuitable or automatically easier for the entire route.",
      },
      {
        name: "A named terrace-area property / a landscape-led stay",
        advice:
          "Review the exact room view, privacy, heating or cooling, bathroom, dinner and luggage approach. Confirm the actual route to the chosen viewpoint, including any local transport. Near the terraces does not mean every platform is walkable or that a sunrise can be seen from bed.",
      },
      {
        name: "A smaller village stay / atmosphere with practical checks",
        advice:
          "Check staffing hours, stairs, sound insulation, room temperature, meals and how close a vehicle can reach. A converted building may be memorable without offering full-service hotel standards. Choose the actual guest-room setup and host capacity, not only a picturesque exterior.",
      },
    ],
    tradeoffs: [
      {
        title: "Water, green rice and harvest color are different visits",
        advice:
          "The cultivated landscape changes with actual farming and weather. Water-filled plots, growing plants, harvest and post-harvest fields do not appear simultaneously at every terrace. Ask for current context for the chosen area and treat old promotional photographs as examples, not dated evidence. A month-based guide helps frame questions but cannot certify the scene for your stay.",
      },
      {
        title: "Sunrise and a sea of clouds are not the same promise",
        advice:
          "An early departure may be appropriate for light without producing mist or cloud below the viewpoint. Visibility, cloud layers and local conditions vary. Choose a safe permitted approach and a clear decision point if the forecast is poor. A premium hotel or photographer cannot create the sky; the rest of the visit should justify the journey.",
      },
      {
        title: "A terrace-view room and a nearby scenic hotel differ",
        advice:
          "Confirm the quoted room's orientation and what can actually be seen from it. Shared terraces, dining spaces and public platforms may appear in the same hotel gallery. Review road or village noise, privacy and construction as separate questions. Paying more makes sense only when the actual room or service provides the benefit you want.",
      },
      {
        title: "A viewpoint stop and a terrace walk have different demands",
        advice:
          "A short platform visit can still involve steps and standing, while a longer route may add slopes, uneven surfaces and less convenient pickup. Review the chosen circuit for knees, balance and weather. Do not classify a whole scenic area as easy because one platform has transport nearby. Select the route for the guest rather than make the guest follow every named point.",
      },
      {
        title: "Fields and villages are working places",
        advice:
          "Keep to permitted paths, avoid crop damage and ask before photographing people or entering homes. A public lane does not grant access to private courtyards or agricultural work. Any host, craft or cultural explanation should be genuinely arranged with consent and language clear. Do not promise a performance, family meal or hands-on farming simply because a village is on the route.",
      },
      {
        title: "Yunhe and Yuanyang are not interchangeable terrace names",
        advice:
          "Yunhe is in Zhejiang; Yuanyang is in Yunnan and belongs to a different landscape and cultural journey. Compare actual seasons, accommodation, walking, hosts and the wider itinerary instead of choosing whichever image looks greener. A short southern Zhejiang stay and a substantive Yunnan terrace chapter have different gateways and time requirements.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "lishui",
        advice:
          "Use the regional guide to decide whether urban Liandu, a river-village interest or another county adds real value. A Lishui city base has a different purpose from a terrace-area stay. Compare the complete road route and nights rather than returning to the gateway automatically after each rural day.",
      },
      {
        slug: "songyang",
        advice:
          "Songyang adds mountain settlements and contemporary rural architecture. Give its actual villages and room access a separate assessment. The shared Lishui label does not make every village and terrace a short combined outing; choose useful nights and compare the full road sequence.",
      },
      {
        slug: "jinyun",
        advice:
          "Jinyun adds the Xiandu rock landscape and separately selected architectural or quarry interests. It offers a different subject from agricultural terraces. Compare actual driving and the preferred rail gateway, avoiding a day that uses both places only as short photographic stops.",
      },
      {
        slug: "yuanyang",
        advice:
          "Yuanyang in Yunnan provides a separate terrace and cultural chapter for a different wider trip. Use its guide to compare seasonal scenes, actual hotel bases and walking. The similar rice-terrace description does not establish interchangeable conditions, communities or logistics.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Choose the agricultural appearance you value before choosing dates. Spring planting and water management, summer growth and the harvest period create different scenes, with timing varying by actual plot and conditions. Rain or mist can change visibility in any season. Summer requires attention to heat and heavy rain; winter needs good room heating and a realistic exposed-walk plan. Confirm current local conditions before departure. No fixed month guarantees water reflections, golden rice, a clear sunrise or cloud below the terraces.",
    orientation:
      "Yunhe county lies within the wider Lishui area of southwestern Zhejiang. Its town, terrace scenic area, village properties and individual viewpoints are separate locations. Names such as Jiuqu Yunhuan, Baiyingu and Kenggen refer to different parts of a chosen route, not hotel districts in Lishui city. Use the actual Chinese address, entrance and property when comparing transfers. A broad county label is not enough to judge sunrise convenience or the daily walking required.",
    experiences: [
      "Read the rice-terrace landscape through its actual agricultural stage and a well-chosen viewpoint",
      "Choose a manageable walk or an early light window matched to the group's interests",
      "Stay at a named town or mountain property with sleep, meals and road access properly considered",
    ],
    planningNotes: [
      "Compare the actual crop scene, forecast and access rather than reproduce an undated image",
      "Check the quoted room view, temperature control, dinner, steps and early-start transfer",
      "Use one substantial terrace chapter and connect other Lishui counties only when the full route works",
    ],
    arrival:
      "Lishui can be a rail gateway, but the actual dated service and final road journey determine whether it is best for the selected property. Do not assume Yunhe rice terraces have an intercity station at their entrance. Compare any other proposed gateway through the full transfer, not only the train duration. Send the ticket and Chinese hotel address for pickup, and avoid promising an essential landscape window immediately after a long or uncertain connection.",
    gettingAround:
      "A planned vehicle helps connect the county town, chosen property and selected scenic approach. Local visitor transport, when required, is a separate operating arrangement and may still leave steps or walks. Agree actual pickup points, start times, meal breaks and finish rather than buying an undefined all-day circuit. Mountain roads and poor visibility can change the rhythm. A car cannot grant access to fields, private homes or closed routes.",
    stayStrategy:
      "For two or three nights, one base usually offers more than moving between nearby properties. Choose town for a practical room-and-meals priority, or a named mountain stay when its actual setting and access improve the main experience. Protect sleep around any sunrise attempt. A higher room budget should buy verified comfort, position or service rather than an assumed view from promotional photography. A useful indoor or relaxed alternative matters when weather obscures the landscape.",
    firstTimerNote:
      "You do not need to photograph every viewpoint to appreciate Yunhe. Choose one clear landscape subject, understand the farming stage and allow time to look. Decide whether an early start adds value for your group; a comfortable later visit may be better than a tired pre-dawn outing in poor visibility. A thoughtful stay combines scenery, interpretation, meals and sleep rather than treating the hotel as a brief pause between platforms.",
    faqs: [
      {
        question: "How many nights should I spend at Yunhe rice terraces?",
        answer:
          "Two nights give one full day for a selected landscape route. Three allow another weather window or a slower stay. A day visit can work when the full return drive and approach leave useful time. Extra nights improve flexibility but do not guarantee sunrise, mist or a particular crop scene.",
      },
      {
        question: "When are Yunhe rice terraces filled with water or golden rice?",
        answer:
          "The appearance follows actual water management, planting, growth and harvest, with variation between plots and years. Ask for current context for the chosen area. A broad seasonal description is useful for planning but cannot prove the scene on your dates; promotional images may show a different stage.",
      },
      {
        question: "Should I stay in Yunhe town or near the terraces?",
        answer:
          "Town can offer practical rooms and meals, with a road journey to the landscape. A terrace-area property may better serve one early or late window but needs its exact view, room, dinner and access checked. Choose from the actual route and sleep requirements, not a county-wide hotel label.",
      },
      {
        question: "Can I see sunrise and a sea of clouds in Yunhe?",
        answer:
          "Those are weather-dependent possibilities, not booking guarantees. Confirm the actual viewpoint's access, approach and forecast before an early start. Sunrise light does not imply cloud below the terraces. Keep the rest of the stay worthwhile if visibility is poor.",
      },
      {
        question: "Can I visit Yunhe rice terraces without a long hike?",
        answer:
          "A selected viewpoint and shorter route may suit, but check remaining steps, surfaces, seating and local transport individually. The whole scenic area cannot be called step-free from one accessible-looking platform. Describe knees, balance and walking needs before choosing the actual circuit.",
      },
      {
        question: "Are Yunhe and Yuanyang the same rice terraces?",
        answer:
          "No. Yunhe is in Zhejiang and Yuanyang is in Yunnan. They have different landscapes, cultural contexts, seasons and travel requirements. Compare the wider itinerary, actual room, walking and desired agricultural scene rather than treating the names or photographic conditions as interchangeable.",
      },
      {
        question: "Can I combine Yunhe with Songyang or Jinyun?",
        answer:
          "They can form distinct chapters when useful nights and the full road sequence fit. Songyang adds villages and architecture; Jinyun adds Xiandu scenery and other separately chosen interests. Sharing the Lishui region does not make every place convenient from one base or suitable for a single checklist day.",
      },
      {
        question: "Does a terrace-area hotel include a private farming or village visit?",
        answer:
          "No such inclusion should be assumed. Confirm any host, language, consent, fee and permitted activity separately. Fields and homes remain working or private places. The hotel room, scenic admission and a meaningful community encounter are different arrangements.",
      },
    ],
    culturalStory: {
      title: "Look at a cultivated landscape rather than an empty view",
      paragraphs: [
        "The stepped fields are part of a working landscape shaped by water, cultivation and local decisions over time. A useful explanation connects what visitors can see to the actual crop stage without claiming every plot follows an identical calendar. An apparently quiet hillside may still be a workplace. The geometry that attracts a photographer is not permission to stand on a field edge, move equipment or interrupt farm work.",
        "Village visits can add human context when handled respectfully. Use public routes, ask before portraits and arrange any conversation or hosted activity with consent and a clear language plan. Do not advertise residents as a performance or imply every visitor receives a family invitation. Careful interpretation and time to observe can provide depth without inventing private access or reducing a community to a backdrop.",
      ],
    },
    foodStory: {
      title: "Make a rural meal practical as well as memorable",
      paragraphs: [
        "A country meal can be a welcome pause between terrace visits, with rice, vegetables and the kitchen's actual local dishes rather than an obligatory banquet. Ask what is available and how portions are intended to be shared. A small mountain property may require dinner to be agreed ahead, while a county-town base offers a different range of choices. Do not assume a remote room comes with late-night dining or an early breakfast before sunrise.",
        "Clarify meat stocks, pork, fish, eggs, soy, wheat, preserved ingredients and shared preparation before choosing the menu. A vegetable dish may not be vegetarian, and a rustic kitchen is not automatically able to manage a serious allergy. Agree a suitable alternative rather than relying on an untested promise. Protect meals and drinking water around early starts so the landscape day remains comfortable.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the actual town or mountain base",
        description:
          "Complete the agreed gateway transfer, settle into the quoted room and confirm dinner. Review current crop appearance, forecast and access for the main route. Add a nearby viewpoint only when timing permits, keeping an essential scene away from arrival uncertainty.",
      },
      {
        day: "Full day",
        title: "A terrace route chosen for the guests and conditions",
        description:
          "Use an early light window or a later viewpoint-and-walk sequence according to interest and access. Allow breakfast, rest and lunch. Choose a small number of complementary places rather than all named platforms, and stay on permitted paths.",
      },
      {
        day: "Optional second full day",
        title: "Another window or a slower village chapter",
        description:
          "A third night permits a different landscape period or a genuinely arranged village interest. Keep the day useful without clear sunrise or mist, and let the property and meals contribute. Do not fill poor weather with unwanted shopping or unconfirmed private encounters.",
      },
      {
        day: "Departure",
        title: "Allow the complete road and rail connection",
        description:
          "Use the actual station and transfer, avoiding an essential distant walk before a fixed departure. This two-night outline with an optional third night is illustrative, not a published product or guarantee of crop stage, cloud, room view, hosts or private field access.",
      },
    ],
  },
};
