import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/tongli.svg",
  alt: "Original Tongli planning schematic comparing a Suzhou day trip with an overnight, Retreat and Reflection Garden with canal walks, and hotel room access; not a photograph or geographic map",
  width: 1600,
  height: 1200,
};

export const tongliGuide: ExpandedDestination = {
  id: "tongli",
  name: "Tongli",
  region: "east",
  kicker: "A garden, a canal walk and time to notice the details",
  description:
    "Plan Tongli around Retreat and Reflection Garden, a selective canal walk and the right room, with honest comparisons of a Suzhou day trip, an overnight and other water towns.",
  stay: "A day visit or 1 night; 2 nights for a deliberate slow stay",
  bestFor: "Garden design, Jiangnan canal architecture and a considered extension to Suzhou",
  interests: ["heritage", "landscape", "food"],
  relatedDestinationIds: ["zhouzhuang", "suzhou", "wuzhen", "shanghai"],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Tongli Travel Guide: Garden, Day Trips & Where to Stay",
    seoTitle: "Tongli Travel Guide: Day Trip or Overnight?",
    seoDescription:
      "Plan a Tongli day trip or overnight near Suzhou: Retreat and Reflection Garden, canal walks, hotel access, Shanghai transfers and comparisons with Wuzhen.",
    answer:
      "Tongli, near Suzhou, pairs an unhurried canal walk with Retreat and Reflection Garden, also called Tuisi Garden. The garden is part of the UNESCO-listed Classical Gardens of Suzhou; the listing does not cover the whole town. A day visit from Suzhou is enough for this introduction. Stay one night when a comfortable room, dinner and a morning walk justify moving hotels. Choose Tongli for the garden and waterside streets, allowing time to enjoy both.",
    stayAnswer:
      "Choose a day visit if you are already settled in Suzhou and want the garden, a canal route and lunch without moving luggage. One night can suit travelers who value a quieter pace after the main sightseeing day, provided arrival and departure leave time to enjoy it. Two nights need a reason beyond the standard introductory walk: perhaps the property itself, drawing or photography at a relaxed pace, or a confirmed cultural activity. A late arrival followed by an early departure delivers little of the overnight benefit. Count usable hours rather than assume another hotel night always makes the trip richer.",
    hotelAnswer:
      "First decide whether you want a room within the historic walking area or a property outside it with a simpler road approach. For an old-town guesthouse, check the precise building and room: stairs, bathroom, heating or cooling, sound insulation, bed and the final luggage walk. A canal view can also face passing voices, restaurant activity or early deliveries. An outside property may offer larger rooms or easier pickup, but the actual trip to dinner and the morning walk matters. Verify admission and re-entry separately from the room booking. A hotel marketed as Tongli or Wujiang is not necessarily within walking distance of Tuisi Garden.",
    sightseeingQuestion: "Is Tongli worth visiting if I am already seeing Suzhou gardens?",
    sightseeingAnswer:
      "Yes, when the smaller garden and water-town setting add a distinct subject to the route. At Tuisi Garden, compare the relationship between rooms, pond, covered paths and changing views with a garden already seen in Suzhou. Then use a selected canal walk to understand how bridges, lanes and waterside buildings relate to daily movement. If your Suzhou stay is very short, protecting time for a main garden and an urban neighborhood may be the better choice. Tongli should earn its place through the guest's interests, not appear automatically as one more ancient town on a checklist.",
    visitorResources: [
      {
        label: "UNESCO: Classical Gardens of Suzhou",
        href: "https://whc.unesco.org/en/list/813/",
        scope:
          "Reference for the serial World Heritage property and its garden components, including Retreat and Reflection Garden. The designation does not cover all Tongli streets or establish current admission, opening, private access or guided arrangements.",
      },
      {
        label: "Suzhou Wujiang District government",
        href: "https://www.wujiang.gov.cn/",
        scope:
          "Administrative and local background, mainly in Chinese. Consult current visitor notices and the actual operator for dated opening, ticket scope, events and transport. District information is not evidence that a specific room or experience is available.",
      },
      {
        label: "China Railway passenger service",
        href: "https://www.12306.cn/en/index.html",
        scope:
          "Official starting point for dated trains and exact station names. A train to Suzhou or Suzhou North does not arrive in Tongli. Compare both station transfers, luggage and road travel before choosing rail from Shanghai.",
      },
    ],
    serviceScope:
      "A tailored plan should specify the actual Tongli route, garden admission, guide language, hotel room if staying, pickup point and complete transfers. Explain which interiors are included and how their current hours shape the visit. A boat ride needs its own operating route, boarding assessment and private or shared format; it is not implied by a walking tour. Private guiding provides interpretation and flexible pacing, not exclusive streets, resident-home access or permission to photograph people. Any workshop or specialist meeting must be arranged with a willing provider and described by its actual content. No particular host or activity is promised by this guide.",
    routeAdvice:
      "Suzhou's gardens and neighborhoods plus one water town often make a more varied journey than several similar excursions. Choose Tongli when Tuisi Garden is central to the appeal, and Shanghai for a contrasting city stay. For a tailored proposal, share your dates, city base, garden interests, pace, luggage and room needs. We can compare a day trip with one overnight and specify the actual transfers, admission and guiding, separately from an existing Shanghai or Suzhou tour.",
    practicalPlanning: {
      timing:
        "Put the garden visit within its confirmed opening hours and leave time for a meal and a canal route. Public-lane access, paid interiors, boat operation and evening programs can follow different schedules. An early or late walk may feel different from a busy daytime visit, but does not guarantee solitude. Weekends and public holidays can change traffic and visitor numbers. In hot or wet weather, shorten the exposed route and use a proper indoor break rather than repeatedly cross bridges to complete an inflexible circuit.",
      walking:
        "Plan for bridge steps, thresholds, uneven paving and slippery surfaces after rain. The cumulative number of crossings matters more than the apparent size of the town. Check the chosen garden route, seating, toilets and any step-free alternatives individually. A private vehicle cannot reach every pedestrian lane or waterside room. Boat boarding may involve steps and balance, so it is not automatically a substitute for walking. Guests with limited mobility should receive a shorter, specifically assessed route and a hotel with a workable final approach.",
      cost: "Compare like-for-like proposals: exact pickup and return addresses, vehicle or rail plus local transport, guide time, current admissions and any separately booked boat or activity. For an overnight, add the room category, breakfast, luggage handling and entry or re-entry arrangements. A low headline day-trip cost can omit the pieces that determine comfort. Premium value should be evident in good interpretation, well-timed visits, a suitable room and a coherent day, rather than claims of exclusive canals or a compulsory shopping stop.",
    },
    attractions: [
      "Retreat and Reflection Garden / Tuisi Garden for spatial design and pond-side views",
      "A selected canal and bridge route rather than every lane in the historic area",
      "The Three Bridges area as a place to discuss movement and local symbolism",
      "An operating historic-house or cultural interior chosen for its actual subject",
      "An optional canal boat with boarding and route confirmed separately",
      "A comfortable evening meal and morning walk when an overnight adds value",
      "Suzhou's city gardens and neighborhoods as a complementary stay",
    ],
    stays: [
      {
        label: "A day visit from Suzhou / keep the city hotel",
        advice:
          "Give the garden proper attention, follow a manageable canal route and sit down for lunch. Compare direct road transport with metro and a final local transfer from the actual hotel. Avoid adding a second distant water town merely because the vehicle is already booked.",
      },
      {
        label: "1 night / protect the evening and morning",
        advice:
          "Arrive with enough time for the chosen interiors, settle into the confirmed room and enjoy dinner without a return drive. Leave a useful morning before moving on. Clarify luggage, entry and breakfast so the hotel change supports the slower pace rather than consumes it.",
      },
      {
        label: "2 nights / a purposeful slower break",
        advice:
          "Choose this for a property you want to use, sustained drawing or photography, or a genuinely arranged cultural interest. Leave time unprogrammed. The standard garden and canal introduction does not require two full sightseeing days or repeated admissions to similar interiors.",
      },
    ],
    hotelAreas: [
      {
        name: "Historic walking area / the room and approach come first",
        advice:
          "A small waterside or courtyard property can support evening and morning walks. Verify exact room position, bathroom, stairs, temperature control, restaurant noise and how luggage reaches the door. Historic character is valuable when it comes with the comfort the guest actually needs.",
      },
      {
        name: "Outside the historic core / compare door-to-door convenience",
        advice:
          "Look at the actual address, room, road access and trip to the desired entrance. Easier vehicle access can be useful with substantial luggage or limited mobility, but a near-Tongli description alone proves little. Establish how dinner, return transport and morning entry will work.",
      },
      {
        name: "Suzhou city base / visit without moving rooms",
        advice:
          "Stay in the Suzhou neighborhood that suits the wider garden and city itinerary, then make Tongli a selective excursion. The historic city and Jinji Lake are different starting points, and Suzhou North station is another location again. Compare the complete day from the real hotel, not a generic city-center pin.",
      },
    ],
    tradeoffs: [
      {
        title: "Tongli or Wuzhen depends on what the stay is for",
        advice:
          "Tongli works particularly well with a Suzhou garden itinerary and a focused Tuisi Garden visit. Wuzhen's Dongzha and Xizha offer a different managed visitor setting, with Xizha often chosen around an overnight property and evening atmosphere. Compare the exact room and full transport route rather than label one town universally more authentic, quiet or luxurious.",
      },
      {
        title: "Tongli or Zhouzhuang is a choice, not an obligation to see both",
        advice:
          "Tongli's garden gives a clear reason for travelers interested in Jiangnan design. Zhouzhuang offers another water-town route with its own bridges and houses. Choose using the specific sites, current arrangements and complete journey. Crowding varies with dates and time; neither town can be promised empty or permanently less commercial.",
      },
      {
        title: "A garden designation does not describe the whole town",
        advice:
          "Explain Tuisi Garden as a component of the Classical Gardens of Suzhou World Heritage property. The wider town includes residential, commercial and restored fabric with different histories. This distinction helps guests understand what they are seeing instead of treating every bridge or guesthouse as UNESCO-protected garden architecture.",
      },
      {
        title: "A canal view and a quiet room are separate requests",
        advice:
          "Waterside life brings voices, activity and sometimes deliveries or restaurant noise. Ask which direction the actual room faces and how it is insulated. A quieter room away from the most photographed lane may deliver a better night's sleep. Do not buy a view at the expense of the bathroom, bed or access you need.",
      },
      {
        title: "A boat and a walk reveal different things",
        advice:
          "A boat can change the perspective on bridge spans and waterside facades, while walking allows a closer look at rooms, thresholds and lane connections. Choose the actual operating route rather than assume a ride covers every important sight. Guests should know boarding demands, seating, weather contingencies and whether other passengers share the boat.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "zhouzhuang",
        advice:
          "Zhouzhuang offers a historic-house and canal-boat alternative to Tongli's Tuisi Garden focus. Compare the actual interiors and route rather than add both towns automatically. A short journey may be stronger with one chosen water town and enough time in Suzhou; include another only when the difference and complete transfer justify it.",
      },
      {
        slug: "suzhou",
        advice:
          "Use Suzhou as a city base for selected classical gardens and canal neighborhoods, then compare Tongli as an excursion or a deliberate overnight. Explain the design differences between Tuisi Garden and the actual city garden visited. Leave enough time for the city itself rather than spend every day commuting to towns.",
      },
      {
        slug: "wuzhen",
        advice:
          "Compare Tongli's garden-led visit with Wuzhen's Dongzha/Xizha choices and a named overnight property. Include both only when their differences and the available days justify another transfer. Wuzhen lies in Zhejiang, not within Suzhou's Wujiang District, and requires a separate complete journey.",
      },
      {
        slug: "shanghai",
        advice:
          "Shanghai adds metropolitan architecture, neighborhoods and international gateways. A Tongli day trip needs a selective route and the full return journey; an overnight needs luggage and the next destination planned. Compare direct road travel with rail through the actual Suzhou station plus both local transfers.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn can suit garden and canal walks, with rain and busy holiday dates still possible. Summer calls for shade, cooling and shorter outdoor stretches; canals do not remove heat or humidity. Winter can be cold and damp, so room heating and warm indoor breaks matter. Seasonal plants and water reflections depend on conditions. Choose the dates for the wider itinerary and check holiday traffic rather than promise a particular blossom, misty morning or uncrowded photograph.",
    orientation:
      "Tongli is in Wujiang District within Suzhou, Jiangsu, and is separate from Suzhou's historic city center. Tongli metro station is not the garden entrance; allow for the final local journey. Suzhou railway station and Suzhou North railway station are different gateways. Retreat and Reflection Garden, Tuisi Garden and Tuisi Yuan refer to the same garden, not three attractions. Wuzhen and Zhouzhuang are separate towns rather than other districts of Tongli.",
    experiences: [
      "Read the pond, covered paths and framed views of Tuisi Garden with time to look closely",
      "Follow a selected canal route connecting bridges, lanes and waterside architecture",
      "Choose a good meal and a comfortable room when the evening and morning justify staying",
    ],
    planningNotes: [
      "Decide between a Suzhou day visit and an overnight using complete travel times",
      "Separate garden admission, public-lane access and any boat or cultural activity",
      "Verify the actual room, stairs, sound insulation and final luggage approach",
    ],
    arrival:
      "From Suzhou, compare a complete road pickup with the metro and final local transfer; the better choice depends on the hotel, mobility, luggage and time of day. From Shanghai, price and time the full road route against a train to the named Suzhou station followed by road transport. Tongli metro station and a railway station are not interchangeable arrival points. For an overnight, agree where the vehicle stops, who handles luggage and where check-in takes place. Keep timed garden entry separate from an uncertain international arrival or a tight train connection.",
    gettingAround:
      "Walk a coherent part of the historic area with planned breaks, rather than double back across bridges to collect every marked sight. Check where a vehicle may stop before naming a pickup point. Canal boats, when operating, have defined routes and boarding conditions; they do not replace every necessary walk. In rain, the same short route can be more demanding on slick paving. Give guests a simple way to shorten the walk and still meet their guide, vehicle or dinner booking.",
    stayStrategy:
      "Keep the Suzhou hotel for a day visit unless Tongli's actual room and unhurried evening offer enough benefit to justify moving. For one night, arrive early enough to enjoy the chosen interiors and allow a morning after breakfast. For two nights, explain the additional purpose and leave space to use the property. A waterside address is not a luxury standard: sleep, bathroom, temperature control, service and luggage access determine comfort more reliably than an attractive exterior photograph.",
    firstTimerNote:
      "Begin with what you most want to understand: garden design, canal-town architecture or a slower overnight. Build the route around that priority, then select a contrasting next chapter in Suzhou or Shanghai. Shopping streets and busy visitor moments are part of the present-day setting. Thoughtful interpretation can make the visit rewarding without claiming that the town is untouched or that every local person is part of a tourism experience.",
    faqs: [
      {
        question: "Where is Tongli, and is it in Suzhou?",
        answer:
          "Tongli is a town in Suzhou's Wujiang District, Jiangsu. It is outside the historic city center, with a separate journey from the actual hotel or railway station. Use 同里 and the full hotel or attraction address to avoid confusing the town with a station or a property elsewhere in Wujiang.",
      },
      {
        question: "Is Tongli a UNESCO World Heritage town?",
        answer:
          "Retreat and Reflection Garden, also called Tuisi Garden, is a component of the UNESCO-listed Classical Gardens of Suzhou. That does not mean the whole town, all its bridges or its hotels share the same World Heritage designation. Garden admission and current opening must be checked separately.",
      },
      {
        question: "Can I visit Tongli on a day trip from Suzhou?",
        answer:
          "Yes. A selective day can combine Tuisi Garden, a canal walk and lunch while keeping the city hotel. Include the complete journey from your actual base, current opening and walking needs. One town with time to enjoy it is usually more coherent than a rushed circuit of several similar places.",
      },
      {
        question: "Is a Tongli day trip from Shanghai practical?",
        answer:
          "It can be with a focused visit and enough time for the complete return journey. Compare direct road transport with rail through the exact Suzhou station plus both local transfers. A fast train segment alone does not describe the day, and airport connections need their own buffer.",
      },
      {
        question: "Should I stay overnight in Tongli?",
        answer:
          "Stay when a comfortable room, dinner and a useful morning matter to you. A day trip is a sensible alternative if you are settled in Suzhou. Late check-in and an early departure may remove most of the benefit; an overnight also does not guarantee empty streets.",
      },
      {
        question: "Is Tongli or Wuzhen better for a first visit?",
        answer:
          "Tongli is a strong fit for a Suzhou trip with a particular interest in Tuisi Garden and canal architecture. Wuzhen offers different Dongzha/Xizha visitor areas and overnight-property choices. Compare the actual route, room and interests rather than assume one town is always quieter or more authentic.",
      },
      {
        question: "Should I choose Tongli or Zhouzhuang?",
        answer:
          "Choose Tongli when the garden is an important part of the day. Compare Zhouzhuang using the particular houses, bridge route and complete transport it would add. Both are established visitor destinations; choose for meaningful differences instead of expecting either to be an undiscovered village.",
      },
      {
        question: "Is Tongli suitable for travelers with limited mobility?",
        answer:
          "It requires a route-specific assessment. Bridge steps, thresholds, uneven paving and hotel stairs can matter, even on a short map route. Confirm toilets, rest stops, the final hotel approach and any usable alternatives. A private car or boat does not automatically make the historic area step-free.",
      },
      {
        question: "Does a Tongli hotel booking include attraction tickets?",
        answer:
          "Check the exact booked rate and guest terms. Accommodation, garden or other interior admissions, re-entry, breakfast, boats and activities are separate items unless expressly included. Establish the actual check-in point and luggage approach as well as the room's location within or outside the walking area.",
      },
    ],
    culturalStory: {
      title: "A small garden makes the wider water town easier to read",
      paragraphs: [
        "Tuisi Garden offers a concentrated way to look at Jiangnan design. Watch how a covered path changes the view of the pond, how an opening frames another space and how rooms relate to the landscape. The point is not to find the largest garden or take the same photograph at every pavilion. Comparing these choices with a selected Suzhou city garden can turn a second garden visit into a different lesson rather than a repetition.",
        "Outside the garden, bridges and lanes reveal how water and land movement connect. Pause where a canal, street and building meet, and distinguish documented historic fabric from later repair or adaptation. The Three Bridges area also offers a way into local symbolism, while stories about customs should be explained as traditions rather than historical proof of every detail. Homes remain homes: interpretation and photography should respect the people using the streets today.",
      ],
    },
    foodStory: {
      title: "Make lunch part of the visit, not a pause in the transfer schedule",
      paragraphs: [
        "Choose a small selection of dishes suited to the actual season and kitchen, rather than order every regional specialty. Jiangnan menus may include freshwater fish, vegetables and braised meat with a sweeter balance than some visitors expect. Ask about bones, portion sizes and preparation before ordering, especially when sharing with children. A waterside table can be attractive, but comfortable seating, shade or heating and a well-paced meal make the stop useful.",
        "For dietary requests, ask about broth, pork, fish, shellfish, soy, wheat and shared preparation equipment instead of judging a dish by its main ingredient. Vegetables and tofu are not automatically vegetarian. Serious allergies require a kitchen that can explain its preparation and an alternative if it cannot. A food demonstration, retail tasting and cooking class are different activities; any promised host or hands-on session needs its own confirmed arrangement, with no required purchase.",
      ],
    },
    itinerary: [
      {
        day: "Arrival or day-visit morning",
        title: "Reach the correct entrance with the garden hours in mind",
        description:
          "Complete the journey from the actual Suzhou or Shanghai base. If staying, agree luggage storage and the final room approach. Visit Tuisi Garden at an appropriate confirmed time and focus on its pond, paths and framed spaces rather than treating it as a quick photo stop.",
      },
      {
        day: "Lunch and afternoon",
        title: "Connect the garden with a selective canal walk",
        description:
          "Take a seated lunch, then follow a manageable route through chosen bridges and lanes, including the Three Bridges area if it fits. Add a current open interior for a specific subject or a separately arranged boat, leaving room for weather and rest. Day visitors return to their existing hotel.",
      },
      {
        day: "Optional overnight",
        title: "Enjoy the room and evening you chose to stay for",
        description:
          "Settle into the confirmed room and have dinner without a long return journey. Choose an evening walk according to actual access, lighting and weather. Open public lanes do not mean every garden, display or restaurant remains open late.",
      },
      {
        day: "Following morning",
        title: "Leave time for breakfast before the next chapter",
        description:
          "Use a morning walk if it suits conditions, then coordinate luggage and the exact pickup for Suzhou or Shanghai. A second night needs an additional purpose agreed in advance. This day-or-overnight outline is illustrative, not a published package or a guarantee of private canals, boats, ticket inclusions or room views.",
      },
    ],
  },
};
