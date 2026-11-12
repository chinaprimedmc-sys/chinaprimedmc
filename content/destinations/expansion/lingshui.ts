import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/lingshui.svg",
  alt: "Lingshui planning schematic comparing Clear Water Bay and Xiangshui Bay hotel stays, a separate island outing and a county-town food interest; original schematic, not a map or photograph",
  width: 1600,
  height: 1200,
};

export const lingshuiGuide: ExpandedDestination = {
  id: "lingshui",
  name: "Lingshui",
  region: "south",
  kicker: "A considered Hainan stay beyond the Sanya label",
  description:
    "Compare Lingshui's Clear Water Bay and Xiangshui Bay for a comfortable coastal holiday, with realistic beach expectations, island logistics, family facilities and food beyond the resort.",
  stay: "4–6 nights for a resort-led break",
  bestFor: "Considered resort stays, family downtime and selected coastal outings",
  interests: ["landscape", "food"],
  relatedDestinationIds: ["sanya", "wanning"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Lingshui Travel Guide: Clear Water Bay & Where to Stay",
    seoTitle: "Lingshui Travel Guide: Bays, Resorts & Stays",
    seoDescription:
      "Compare Clear Water Bay and Xiangshui Bay in Lingshui, with room and family checks, Boundary Island logistics, beach conditions and a relaxed Hainan plan.",
    answer:
      "Lingshui (陵水) is a county on Hainan's southeastern coast, officially Lingshui Li Autonomous County. Its resorts are often considered alongside Sanya, but the county town, Clear Water Bay and Xiangshui Bay have their own locations and daily travel patterns. Choose Lingshui for a specific property, coast and pace, not because a broader Sanya-area label guarantees a short airport transfer or the same beach experience. The hotel is a major part of the visit; selected island, town and food interests can add variety without filling every day.",
    stayAnswer:
      "Four nights provide three full days for settling into the property, an optional outing and rest. Five or six nights allow another interest or more flexibility around weather. Three nights can work with convenient travel, but leave less actual downtime. Keep one base unless the second stay supplies a meaningful contrast. An island excursion, a long coastal transfer and a different hotel every two nights can undermine the slower holiday that makes Lingshui appealing.",
    hotelAnswer:
      "Compare named properties at Clear Water Bay, also written Qingshui Bay or Qingshuiwan, and Xiangshui Bay, also written Xiangshuiwan. Check the actual room, grounds, pool operation, meals and route to the sand rather than ranking the bays by a general luxury label. A county-town property serves a different practical or food-led purpose. Confirm exact addresses: a resort marketed in the wider Sanya region may be in Lingshui, and neither a sea view nor a beachfront setting establishes safe swimming, a private beach or useful independent dinner options.",
    sightseeingQuestion: "Should you choose Clear Water Bay, Xiangshui Bay or an island visit?",
    sightseeingAnswer:
      "Choose the bay through the actual hotel and the day you want to have: room comfort, pools, suitable shore time, meals and the amount of independent activity. Clear Water Bay and Xiangshui Bay are separate resort areas, not two names for one beach. Boundary Island is a different outing with terminal, crossing and on-island arrangements. A hotel day is a valid alternative when the main aim is rest. Add an excursion because its specific activity interests you, not because a beach holiday needs a daily attraction ticket.",
    visitorResources: [
      {
        label: "Lingshui Li Autonomous County government",
        href: "https://lingshui.hainan.gov.cn/",
        scope:
          "County context and public notices, mainly in Chinese. Confirm current beach guidance, island visitor arrangements, transport and individual services with the responsible authority or operator. The county's name does not establish access to community homes, cultural ceremonies or hotel facilities.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official railway reference for dated services and the actual station. Lingshui station still needs a transfer to the booked coast or property. Sanya and Wanning arrivals create different local connections; do not select a gateway using only a broad Hainan or Sanya-area description.",
      },
      {
        label: "National Immigration Administration of China",
        href: "https://en.nia.gov.cn/",
        scope:
          "Official immigration guidance. Check the traveler's passport, arrival route and full journey before relying on a Hainan-specific entry arrangement. Island eligibility does not by itself establish permission for a mainland continuation.",
      },
    ],
    serviceScope:
      "A tailored proposal can specify the property and room, occupancy, meals, airport or station transfer and any selected town or island outing. For children, identify bedding, age or height rules, club format, actual supervision and additional charges. For an island visit, separate the road transfer, crossing, admission, internal transport and optional water activity. A private car does not make the ferry or beach private. Hotel time usually does not require a guide and vehicle waiting outside; service days should match the holiday you want.",
    routeAdvice:
      "Lingshui can provide a slower finish after a more active China route, subject to actual transport and applicable entry arrangements. Sanya and Wanning offer different bay, hotel and activity choices rather than compulsory additional stops. No matching published Lingshui product is recommended here. Request a tailored stay using the illustrative four-night framework, with the room, family needs, dinner and one useful outing specified. If there is no clear reason to change properties, protect the time already paid for at the chosen resort.",
    practicalPlanning: {
      timing:
        "Keep the first full day mainly at the hotel, learning the room-to-breakfast, pool and beach routes. Place a weather-dependent island outing in a flexible part of the stay, with an enjoyable alternative. Leave margin for crossings, queues, meals and the return transfer rather than timing the day by the boat ride alone. A departure morning is a poor place for an essential island activity when a flight or train must be caught afterward.",
      walking:
        "Check distances, lifts, slopes and any available hotel buggy service between the actual room and daily facilities. Beach sand, wet pool decks and boat boarding have different demands. For an island, ask about the terminal approach, boarding, internal transport, steps, shade, toilets and seating. A private road vehicle cannot remove all of those obstacles. Individual access needs should shape the room and outing before a general accessible-resort description is accepted.",
      cost: "Compare the actual room, view, occupancy, meals, pool access, children's charges and complete transfers. Family activities, club sessions, water parks, equipment and spa services may be separate or seasonal. An island package may exclude a particular boat service, internal transport or water activity. Ask what is included and what happens when operation is suspended. Premium value should be visible in room quality, service, useful facilities and time to enjoy them rather than a generic all-inclusive claim.",
    },
    attractions: [
      "Clear Water Bay / Qingshui Bay with a selected property's actual beach relationship",
      "Xiangshui Bay as a separate hotel and coastal choice",
      "Boundary Island / Fenjiezhou Island with current crossing and activity arrangements",
      "A selected Lingshui county-town food interest, including a suitable sour rice-noodle meal",
      "A defined coastal or fishing-community subject on a public or properly hosted route",
      "A shorter resort-side outing selected for the group's interests and walking comfort",
    ],
    stays: [
      {
        label: "3 nights: a short, single-base break",
        advice:
          "Use the two full days mainly for the property and one optional interest. This works best when the complete arrival and departure are convenient. Avoid promising comprehensive island touring and every family facility on top of rest, especially when the weather may change.",
      },
      {
        label: "4 nights: settle in and add one useful outing",
        advice:
          "Three full days allow hotel time, an optional island or town subject and a flexible day. Choose the actual bay and room carefully, then keep the schedule light enough to use them. An island activity is not compulsory if a quiet day better serves the group.",
      },
      {
        label: "5–6 nights: a slower holiday with room to adjust",
        advice:
          "Allow another distinct interest, family activity or more rest. Extra time helps with flexibility but cannot guarantee sunshine or marine operations. A split stay requires a meaningful difference in property or purpose, not simply another resort with a similar view.",
      },
    ],
    hotelAreas: [
      {
        name: "Clear Water Bay / Qingshuiwan",
        advice:
          "Choose a named property for the actual room, shore route, pools, food and family or quiet-stay priorities. Check independent dinner options and the return journey after dark rather than inferring a compact restaurant district from the bay name. Direct sand access, a sea-view room and permission to swim remain separate questions.",
      },
      {
        name: "Xiangshui Bay / Xiangshuiwan",
        advice:
          "Compare the specific property, not an assumption that this entire coast is secluded or quieter. Review room placement, noise, grounds, useful facilities and dining. Show the complete airport or station transfer and any island-terminal journey before choosing mainly on room rate or an impressive coastal photograph.",
      },
      {
        name: "Lingshui county town / an urban purpose",
        advice:
          "Consider for a specific food, practical or onward-travel reason. It is not interchangeable with a beachfront resort base. Compare the actual room and independent meals, then the road connection to selected coastal visits. A town stay can be useful without being described as a tropical luxury retreat.",
      },
      {
        name: "An island overnight / only for a clearly defined stay",
        advice:
          "Assess the actual accommodation, luggage, crossings, dinner, last services and disruption arrangements before booking. Day-visitor facilities and an overnight stay offer different experiences. Do not assume an island room means an empty beach after hours or that a private car can reach the property directly.",
      },
    ],
    tradeoffs: [
      {
        title: "The Sanya-area label can hide a different local journey",
        advice:
          "Lingshui is a separate county with several resort areas. A booking marketed around Sanya can still require a different airport transfer, dinner plan or island-terminal route. Use the full Chinese property address and bay, then compare the whole journey. Two ocean-facing hotels can create quite different holidays even when the marketing places them in the same broad region.",
      },
      {
        title: "A family hotel is not automatically suitable childcare",
        advice:
          "Check the actual ages, opening hours, sign-in requirements, supervision, language and charges for a club or activity. A playroom and a staffed session are different services, and a parent may be required to remain present. Confirm room occupancy, beds, bathroom and meal options alongside entertainment. Adult free time should not depend on unverified supervision or an attraction whose age rules do not fit the child.",
      },
      {
        title: "Boundary Island is a specific activity day, not guaranteed seclusion",
        advice:
          "Fenjiezhou Island involves a terminal, crossing and its own visitor infrastructure. A private transfer does not bypass queues, create a private boat or guarantee clear water and an empty shore. Select the activity you actually want, then assess boarding, internal movement and conditions. If the goal is simply a comfortable coastal day, the hotel may be the better choice without adding several layers of transport.",
      },
      {
        title: "Sea swimming, snorkeling and diving need different decisions",
        advice:
          "A beachfront property or island ticket does not establish a designated bathing area, visibility or suitable conditions for a particular water activity. Diving and snorkeling need a named operator, appropriate equipment, ability and health screening, with cancellation terms clear. Follow current local guidance and keep a useful land-based alternative. Do not sell a blue-water photograph as a promise of the sea during the booked stay.",
      },
      {
        title: "Wildlife and community visits should have a clear purpose",
        advice:
          "Nanwan Monkey Island is a managed attraction, not a promise of undisturbed wildlife observation or safe animal contact. Guests may reasonably prefer another outing; feeding, touching or staged interactions need not be part of a holiday. Likewise, a coastal community, public market and hosted cultural visit have different access. Do not infer a private boat, home invitation or ceremony from an ethnic or fishing-village description.",
      },
      {
        title: "A quieter holiday may need fewer hotel moves",
        advice:
          "Compare Lingshui with Sanya or Wanning through named properties and actual activities. If the second stay only changes the room's sea view, packing and transport may outweigh the benefit. A split can work when it adds a surf interest, a different family facility or a distinctly different setting with enough nights to use it. Hotel time is part of the product, not an empty space that must be filled with excursions.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "sanya",
        advice:
          "Compare Sanya's individual bays and properties with the actual Lingshui stay rather than using either place name as a quality ranking. Different room, dining or family facilities can justify a split when there are enough nights. Sanya Airport still requires a specific transfer to the booked Lingshui address.",
      },
      {
        slug: "wanning",
        advice:
          "Wanning can add a distinct surf-led plan or Xinglong coffee interest farther along the east coast. Choose it for that difference rather than another similar resort view. Compare the complete transfer, non-participants' day and actual host or lesson before creating a second base.",
      },
    ],
  },
  editorial: {
    bestTime:
      "The cooler part of the year is often considered for a warm-weather break, but cloudy, windy or cooler days remain possible and pools vary in heating. Warmer, wetter months require shade, suitable indoor alternatives and realistic expectations for showers and humidity. Typhoon-related conditions can interrupt flights, trains, boats and beach activities. Check forecasts and official notices closer to travel. No month guarantees clear sea water, an uninterrupted island crossing or the same facilities operating throughout the stay.",
    orientation:
      "Lingshui Li Autonomous County lies on Hainan's southeastern coast. The county town, Clear Water Bay and Xiangshui Bay are different bases; Boundary Island has its own access logistics. Qingshuiwan is another rendering of Clear Water Bay here, not a separate city or the Clear Water Bay area in Hong Kong. Use the Chinese property, bay and terminal names for transport. A broader Sanya-area description does not establish the county, airport transfer or the distance to a particular meal or activity.",
    experiences: [
      "Choose a coastal property through its actual room, pools, meals and daily routes rather than a general resort label",
      "Add a defined island or town interest with crossings, walking and the complete return journey reviewed",
      "Enjoy a slower Hainan chapter with children's needs, quiet time and weather alternatives planned for the actual guests",
    ],
    planningNotes: [
      "Use exact property and bay addresses to compare Clear Water Bay, Xiangshui Bay and Sanya-area marketing",
      "Check family supervision, bedding, facility operation and included benefits for the booked room and dates",
      "Treat boats, sea activities and mainland entry eligibility as separate arrangements requiring confirmation",
    ],
    arrival:
      "Sanya Phoenix Airport, code SYX, and Haikou Meilan Airport, code HAK, require different onward journeys. Compare the full road or rail connection to the actual property rather than treating either as a generic Hainan arrival. Lingshui station still requires a local transfer. Send the exact ticket, luggage, children's ages and address before arranging pickup; child seats and individual access assistance need explicit agreement. Keep dinner and the first activity flexible after an uncertain connection.",
    gettingAround:
      "Use planned road transfers for arrival and selected outings, with hotel days free where that serves the holiday. Confirm the actual terminal for an island visit and whether the return transfer remains available after delays. Resort buggies, island internal transport and public boats have their own routes and hours. A vehicle between locations does not establish access to another hotel's pools or dining facilities. For independent evenings, agree the full route and return rather than assuming every bay is easy to explore on foot.",
    stayStrategy:
      "Start with one good base for four to six nights. Review the room's quietness, bedding, bathroom, climate control, view and relationship to breakfast, pools and shore. A family room, connecting rooms and a villa are different arrangements, and a generic photo does not guarantee the configuration. For couples, assess actual room placement and atmosphere instead of assuming an adults-only environment. The higher the hotel spend, the more important it is to protect time to use what has been booked.",
    firstTimerNote:
      "Lingshui makes most sense when a specific property and a slower pace fit the overall trip. It need not supply a daily famous sight to justify the stay. Choose a comfortable room, workable meals and one or two meaningful interests, then retain flexibility. If you mainly want dense city life, independent nightlife or a packed cultural program, another destination may use limited days better than a resort chosen on photographs alone.",
    faqs: [
      {
        question: "Is Lingshui part of Sanya?",
        answer:
          "Lingshui is a separate county on Hainan's southeastern coast, although resorts may be marketed in the wider Sanya region. Use the exact Chinese property address and bay to plan transfers and outings. A Sanya-area description does not establish a city-center location or a short airport journey.",
      },
      {
        question: "Is Clear Water Bay the same as Qingshui Bay?",
        answer:
          "Yes, these are English renderings of Qingshuiwan in this Lingshui context. Use the Chinese property address to identify the actual hotel. Xiangshui Bay is a different resort area, and neither bay name alone specifies the room, shore access or daily facilities.",
      },
      {
        question: "How many nights should I stay in Lingshui?",
        answer:
          "Four nights provide three full days for settling in, an optional outing and rest. Five or six allow a slower rhythm and more flexibility. Three can work with convenient travel. A second base should add a meaningful difference rather than consume the holiday in packing and transfers.",
      },
      {
        question: "Should I choose Clear Water Bay or Xiangshui Bay?",
        answer:
          "Compare actual properties by room, pool operation, meals, shore route, noise and complete transfer. Both contain different hotel experiences, so a general bay ranking is less useful than a detailed stay comparison. A sea view does not guarantee safe swimming or private beach access.",
      },
      {
        question: "Is Lingshui suitable for a family holiday?",
        answer:
          "It can be when the specific room, facilities, meals and access suit the children. Check ages, height rules, club format, supervision, hours and charges directly. A play area is not necessarily childcare, and adult free time should not depend on unconfirmed activity access.",
      },
      {
        question: "Is Boundary Island worth a day trip from a Lingshui resort?",
        answer:
          "Choose it for a specific activity that interests you after reviewing the full terminal transfer, crossing, internal movement and current conditions. It is not automatically quieter or more relaxing than the hotel. Keep an alternative for suspended operations and avoid putting the essential outing immediately before a flight.",
      },
      {
        question: "Can I swim at every Lingshui beachfront hotel?",
        answer:
          "No. Check the actual designated area, current sea conditions and local guidance. Pool use, sea swimming, snorkeling and diving have separate requirements and operation. A beachfront address or island ticket does not establish suitable bathing or a particular water activity on your dates.",
      },
      {
        question: "Do I need a private guide every day in Lingshui?",
        answer:
          "Usually not for hotel downtime. Guiding can add value to a chosen town, cultural or food interest, while transfers serve their actual purpose. Agree service days and hours rather than paying for a full touring pattern that leaves too little time at the resort.",
      },
      {
        question: "Can a Hainan entry arrangement cover an onward mainland itinerary?",
        answer:
          "Do not assume so. Check current official immigration guidance for the passport, arrival route and entire trip before committing to mainland connections. This destination guide does not determine eligibility or replace the authority's decision on admission.",
      },
    ],
    culturalStory: {
      title: "The county is more than a resort address",
      paragraphs: [
        "Lingshui's county town and coastal communities can give a hotel holiday a more specific sense of place. A public market, a regional meal or a well-explained local subject can be enough; the stay does not need to promise private access to make it meaningful. The Li autonomous-county identity provides context, but it should not be used to imply that every resort activity represents a community tradition or that ceremonies can be arranged on demand.",
        "Choose a real venue and clarify who is involved when a hosted cultural experience matters. A commercial display, a public event, a working harbor and a private home are different settings with different permissions. Respect photography and daily work, and avoid presenting residents as scenery. A modest, accurately described outing can add depth while leaving the holiday's quieter rhythm intact.",
      ],
    },
    foodStory: {
      title: "Try the county's food on terms that suit the guest",
      paragraphs: [
        "Lingshui sour rice noodles offer a recognizable local food subject, with toppings and seasoning that vary by preparation. Ask about dried seafood, nuts, sauces and the actual level of sourness or spice rather than assuming the dish is vegetarian or identical everywhere. A small introduction can sit alongside a more familiar cooked meal. There is no need to make every guest finish a signature dish to participate in the region's food culture.",
        "For a seafood table, agree species, weight or portion, cooking and the complete price basis before ordering. Clarify shellfish, fish stocks, meat broths, dipping sauces and shared equipment. Choose a venue for seating, hygiene and clear dietary communication as well as location. At the resort, review real dinner choices and children's portions so that every evening does not become a long unplanned trip for a suitable meal.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Reach the booked bay, not a generic Sanya-area address",
        description:
          "Transfer from the exact airport or station to the actual property and settle into the booked room. Keep the first meal straightforward. A late arrival should not carry an essential island crossing or a fixed cultural-host appointment.",
      },
      {
        day: "Full day 1",
        title: "Use the property and confirm the daily arrangements",
        description:
          "Enjoy breakfast, find the practical routes to pools and shore, and review actual family-facility access. Keep sea activities conditional on current guidance. Non-participants and guests needing more rest should have a complete enjoyable day without an excursion.",
      },
      {
        day: "Full day 2",
        title: "One optional island or town interest",
        description:
          "Choose Boundary Island for a defined activity or a shorter town-and-food subject with useful interpretation. Include the entire return journey, walking and meal. A private transfer does not imply private crossing, wildlife contact or access to residential spaces.",
      },
      {
        day: "Full day 3",
        title: "Retain a quiet day and a weather alternative",
        description:
          "Use the property or an agreed shorter activity according to conditions and energy. Additional nights can add a genuinely different interest. Avoid making the final relaxed day depend on a boat operation that has not been confirmed.",
      },
      {
        day: "Departure",
        title: "Allow the complete onward connection",
        description:
          "Leave time for the actual station or airport, or continue to a separately justified Wanning or Sanya stay. Check the applicable entry arrangement for any mainland chapter. This four-night outline is illustrative, not a published package or guarantee of private shore, childcare or marine access.",
      },
    ],
  },
};
