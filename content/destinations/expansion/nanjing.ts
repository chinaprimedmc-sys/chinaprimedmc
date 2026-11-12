import type { ExpandedDestination } from "./types";

const planningImage = {
  src: "/destinations/planning/nanjing.svg",
  alt: "Nanjing planning diagram comparing a central city base, Purple Mountain visits and a separate riverside stay; schematic, not a geographic map or destination photograph",
  width: 1600,
  height: 1200,
};

export const nanjingGuide: ExpandedDestination = {
  id: "nanjing",
  name: "Nanjing",
  region: "east",
  kicker: "Capital history, wooded tomb approaches & Jiangsu food",
  description:
    "Understand Nanjing through a few well-chosen historical layers, compare central and landscape-led hotels, and make room for regional food beyond a hurried Shanghai excursion.",
  stay: "3–4 nights",
  bestFor: "History, museums and a deeper lower-Yangtze itinerary",
  interests: ["heritage", "food", "city"],
  relatedDestinationIds: [
    "wuhu",
    "zhenjiang",
    "yangzhou",
    "liyang",
    "shanghai",
    "suzhou",
    "hangzhou",
    "wuhan",
  ],
  assets: { hero: planningImage, gallery: [planningImage] },
  planning: {
    title: "Nanjing Travel Guide: History, Hotels & Private Trips",
    seoTitle: "Nanjing Travel Guide: History & Where to Stay",
    seoDescription:
      "Plan Nanjing with hotel-area advice, Purple Mountain choices, museum and memorial guidance, local food and a tailored connection to Shanghai or Suzhou.",
    answer:
      "Nanjing is Jiangsu's provincial capital and a former Chinese capital on the Yangtze. It suits travelers who want to connect imperial history, Republican-era history, museums and everyday city life. Start with the Ming city wall and a selected Purple Mountain visit, then choose the museum or historical site that best fits your interests. This is Nanjing city in Jiangsu, not Nanjing County in Fujian, where some Fujian Tulou clusters are located. The older English spelling Nanking refers to the same Jiangsu city.",
    stayAnswer:
      "Three nights give two full days for a selective city introduction and Purple Mountain, with time for meals and a museum. Four nights provide a third day for deeper historical interests, a thoughtful memorial visit or a more relaxed pace. A Shanghai day trip is possible with suitable trains, but station transfers and large sightseeing areas make it a focused excursion rather than a complete Nanjing visit. Add nights when the history matters to you, rather than squeezing every period into one day.",
    hotelAnswer:
      "Compare Xinjiekou for central convenience, the Xuanwu Lake and northern old-city area for a different evening setting, and the Qinhuai/Confucius Temple area for waterside atmosphere with possible evening noise. A Purple Mountain property can suit time in a particular hotel and its surroundings, but needs separate journeys for city meals and museums. Confirm the exact address: a riverside or Nanjing South station hotel serves a different purpose from a central sightseeing base.",
    sightseeingQuestion: "Should you visit Ming Xiaoling or Sun Yat-sen's Mausoleum?",
    sightseeingAnswer:
      "Ming Xiaoling is the tomb complex of the Hongwu Emperor, founder of the Ming dynasty, with an approach whose stone figures and landscape reward time. Sun Yat-sen's Mausoleum explains a different, modern historical chapter and has a substantial stepped ceremonial approach. Choose by historical interest and walking ability before combining them. They are separate visits within the wider Purple Mountain area, not interchangeable names or an assurance that one ticket covers everything.",
    visitorResources: [
      {
        label: "UNESCO: Imperial Tombs of the Ming and Qing Dynasties",
        href: "https://whc.unesco.org/en/list/1004/",
        scope:
          "Background on the serial World Heritage property, which includes the Xiaoling Tomb in Nanjing. This is not a listing of every Purple Mountain attraction and does not establish current admission, reservations or accessible routes.",
      },
      {
        label: "Nanjing municipal government, English portal",
        href: "https://english.nanjing.gov.cn/",
        scope:
          "Municipal background and public information. Obtain date-specific visitor instructions from the actual museum, memorial, scenic-area or transport operator separately.",
      },
    ],
    serviceScope:
      "We can discuss a tailored Nanjing stay with the hotel, guide, vehicle hours, admissions and onward rail arrangements itemized in the proposal. Historical interpretation should match your interests and language needs. A private guide does not provide private museum access, remove public reservations or make a stepped monument accessible. Tell us about walking limits and children's ages before the sightseeing sequence is set.",
    routeAdvice:
      "Nanjing can deepen a lower-Yangtze route alongside Shanghai, Suzhou or Hangzhou. Choose it for capital history rather than as another interchangeable water-town stop. Use the actual station pair, hotel transfers and available full days to decide the order. This page does not currently recommend a published Nanjing package; the outline below is a planning example. A tailored proposal should distinguish confirmed services from optional visits and leave room for a proper local meal.",
    practicalPlanning: {
      timing:
        "Group sights by actual location and the attention they deserve. Give Purple Mountain a substantial part of a day; a vehicle cannot eliminate internal walking or turn its separate monuments into one short stop. Reserve a museum window around its own admission arrangements. Keep a memorial visit away from a rushed train departure, and do not assume an evening cruise or a temple visit will operate simply because you have spare time.",
      walking:
        "City-wall access can involve steep steps and exposed sections. The mausoleum's ceremonial stairs, the distances within landscaped sites and museum standing time present different challenges. Ask for the exact entrance, pickup point, surface and seated breaks. A drive through Purple Mountain is not equivalent to reaching each monument. In hot or wet weather, shorten outdoor sections and retain an indoor alternative that is actually open.",
      cost: "Compare hotel location and room category, guiding depth, vehicle hours, rail class, site tickets and any separate local transport. A central hotel can reduce some journeys; a landscape-led property may justify more driving if you will enjoy time there. Museum entry, exhibitions, interpretation equipment, evening activities and meals must be identified separately. Do not infer that a public museum's admission policy includes a private specialist or priority access.",
    },
    attractions: [
      "Ming Xiaoling Tomb and Sacred Way",
      "Sun Yat-sen's Mausoleum",
      "Selected Nanjing city-wall sections",
      "Nanjing Museum",
      "Qinhuai River and Confucius Temple area",
    ],
    stays: [
      {
        label: "2 nights: choose one historical focus",
        advice:
          "Use the full day for selected city history or a Purple Mountain sequence, with an evening meal near the hotel. A short stay cannot comfortably include every major museum, tomb, wall section and memorial.",
      },
      {
        label: "3 nights: city and mountain on separate days",
        advice:
          "Allow one city day and another for selected Purple Mountain visits. Fit a museum according to the reservation and your attention span, keeping an arrival or departure day realistic.",
      },
      {
        label: "4 nights or more: depth without historical overload",
        advice:
          "Add a dedicated museum or Republican-history day, a reflective memorial visit if appropriate, or more hotel time. Choose an additional subject you care about instead of repeating similar monuments.",
      },
    ],
    hotelAreas: [
      {
        name: "Xinjiekou and the central city",
        advice:
          "A useful starting point for city services, dining and journeys in several directions. Compare the actual street, room quietness, lobby pickup and traffic approach. Being near a metro entrance does not necessarily make a large hotel or station easy with luggage.",
      },
      {
        name: "Xuanwu Lake and the northern old-city surroundings",
        advice:
          "Consider for a particular lake-facing property or nearby walks. Check whether the room really has a lake view and how you reach the water. The setting does not put every attraction or Nanjing South railway station within walking distance.",
      },
      {
        name: "Qinhuai River and Confucius Temple surroundings",
        advice:
          "Choose for evening atmosphere and a nearby meal, after checking noise, pedestrian access and the vehicle meeting point. A river-area address is not proof of an undisturbed heritage stay or a room overlooking the water.",
      },
      {
        name: "Purple Mountain, riverside or other destination hotels",
        advice:
          "Choose the individual property for its room, grounds, dining and the time you will spend there. These are different locations, not one hotel district. Check daily transfers before trading a central base for a particular landscape or design experience.",
      },
    ],
    tradeoffs: [
      {
        title: "Choose a city-wall section for the actual route",
        advice:
          "Nanjing's surviving wall is not one continuously interchangeable visitor walk. Zhonghua Gate and sections near Xuanwu Lake offer different approaches and contexts. Check the selected entrance, exit, stairs and pickup, then let the guide explain the defenses and city layout. A short meaningful section can be more rewarding than a long exposed walk.",
      },
      {
        title: "A museum and a memorial ask different things of visitors",
        advice:
          "Nanjing Museum offers art and historical collections; the Memorial Hall of the Victims in Nanjing Massacre by Japanese Invaders commemorates mass suffering. They are different institutions and should not be confused in bookings. Discuss the latter's subject matter and suitability for children beforehand, allow quiet time, and follow photography and visitor instructions. It should not be sold as a quick entertainment stop.",
      },
      {
        title: "Select an interpretable history, not just famous buildings",
        advice:
          "Ming imperial history, the city's Republican period and its wartime experience need different context. Choose one or two connected themes and an appropriate guide. The Presidential Palace can serve a Republican-history interest when access fits the date; its courtyards and exhibitions add walking and should not be an automatic extra after an already full mountain day.",
      },
      {
        title: "A private vehicle does not remove internal distances",
        advice:
          "Road transfers help connect the city, but monuments may have controlled approaches, internal transport and pedestrian sections. Agree what the quoted vehicle and guide hours cover and where the driver can actually meet you. Plan a good meal and a seated break before adding another distant attraction.",
      },
    ],
    products: [],
    articles: [],
    connections: [
      {
        slug: "wuhu",
        advice:
          "Wuhu introduces a smaller-scale Yangtze trading city and the distinctive iron-painting craft. Choose it when that subject adds something to Nanjing’s capital history, allowing a useful cultural window and meal. Confirm a desired host before fixing trains, and include both station transfers rather than assume the old town is beside the platform.",
      },
      {
        slug: "zhenjiang",
        advice:
          "Zhenjiang adds a selected river hill, Xijindu's historic crossing streets and local vinegar food. Compare Jinshan, Jiaoshan and Beigushan by interest rather than plan all three. A selective day trip can work with complete transfers; an overnight should add a useful evening. Keep Jiaoshan's current crossing and return buffer separate from any fixed onward train.",
      },
      {
        slug: "yangzhou",
        advice:
          "Yangzhou adds merchant gardens, Huaiyang food and a separate Slender West Lake landscape across a deliberately planned Jiangsu connection. Allow useful nights, check the exact train or road transfer and choose a garden rather than collect every attraction. A Yangzhou overnight is a distinct chapter, not a local Purple Mountain excursion.",
      },
      {
        slug: "liyang",
        advice:
          "Liyang can add a slower Tianmu Lake or Nanshan Bamboo Sea stay after Nanjing's museums and capital history. Choose the actual property and one worthwhile outing, then compare the complete station transfers. A lake-area hotel does not automatically include boat rides, scenic tickets or hot-spring access.",
      },
      {
        slug: "wuhan",
        advice:
          "Wuhan adds Hubei's archaeological collections, Hankou trading history and a different regional food culture farther upriver. Choose it for that contrast and allow its own full days. Compare the actual stations and hotel transfers; two Yangtze cities are not automatically a short riverboat connection.",
      },
      {
        slug: "shanghai",
        advice:
          "Combine Nanjing's capital history with Shanghai's riverfront, urban neighborhoods and modern city life. A day trip gives only a selected introduction; separate nights let Nanjing stand on its own. Check the named stations and both hotel transfers before comparing services.",
      },
      {
        slug: "suzhou",
        advice:
          "Suzhou adds classical garden design and canal neighborhoods rather than another sequence of imperial monuments. Choose gardens for contrast and consider separate nights. Check whether the train uses Suzhou or Suzhou North and how that affects the actual hotel journey.",
      },
      {
        slug: "hangzhou",
        advice:
          "Hangzhou introduces West Lake and Longjing tea interests, a different pace after museum-rich city days. Give the lake or tea area usable time, and choose the complete railway and hotel connection rather than judging the route by provincial proximity alone.",
      },
    ],
  },
  editorial: {
    bestTime:
      "Spring and autumn often suit a balance of city walks and wooded approaches, although rain and temperature changes remain possible. Summer can be very hot and humid; shorten exposed wall sections and build in a midday break. Winter calls for suitable clothing, especially in wind and unheated outdoor areas. Blossom and autumn-color dates vary and can draw crowds: choose the underlying history as the reason to visit, with seasonal color as a possible addition.",
    orientation:
      "Nanjing lies on the Yangtze in Jiangsu. Its walled-city heritage, Purple Mountain attractions to the east and wider modern districts occupy distinct areas. Nanjing railway station and Nanjing South are separate gateways; Lukou airport adds another road journey. A hotel labeled Nanjing may be well outside the practical sightseeing base. Use the actual address and station, not the city name alone, to arrange pickup and daily touring.",
    experiences: [
      "Read a selected Ming wall section as part of a defended capital, with the entrance and walking length chosen for you",
      "Compare a Purple Mountain historical site with a museum collection rather than rushing through every monument",
      "Enjoy a Jiangsu meal that explains Nanjing's duck traditions and makes space for your dietary preferences",
    ],
    planningNotes: [
      "Choose historical themes and museum reservations before filling the day with additional stops",
      "Separate Nanjing station, Nanjing South and the airport when arranging transfers",
      "Discuss mausoleum stairs, wall access and memorial suitability before confirming the route",
    ],
    arrival:
      "Arrive through the airport or exact railway station shown on the ticket. The name Nanjing South does not mean a central-city hotel pickup, and Nanjing station is a different meeting point. Include luggage, station exits and the final hotel road transfer when assessing a short stay. On a Shanghai excursion, book the return around the complete sightseeing day rather than assuming the rail ride alone determines the time needed.",
    gettingAround:
      "A combination of planned road transfers and selected walks can keep the day comfortable. The metro is an option for independent city time, but luggage, station depth, walking and weather still matter. For Purple Mountain, establish any internal transport and where the road vehicle can stop. Pedestrian streets and city-wall routes can require a different exit and pickup from the entrance; make that explicit before beginning the walk.",
    stayStrategy:
      "For a first stay, choose one base and spend the saved packing time on the city. Compare central convenience with the genuine value of a particular lake, mountain or riverside property. A high-end stay depends on room quietness, bedding, bathroom, temperature control, dining and the transfer plan, not simply a view label. If the hotel itself is part of the holiday, protect time there instead of leaving at dawn and returning after dinner every day.",
    firstTimerNote:
      "Nanjing makes most sense when the historical layers are explained in sequence. Start with what interests you and the walking you can comfortably do. A thoughtful tomb approach, a well-interpreted collection and a good meal can create a fuller understanding than a checklist of entrances. This city is distinct from Fujian's Nanjing County, even though their romanized names match.",
    faqs: [
      {
        question: "How many days do you need in Nanjing?",
        answer:
          "Two full days, often with three nights, suit a selected city introduction and Purple Mountain. Add a third full day for a dedicated museum, Republican-history interest or thoughtful memorial visit. A short stay requires choosing among these rather than promising all of them.",
      },
      {
        question: "Is Nanjing worth visiting from Shanghai?",
        answer:
          "Yes, if capital history, museums or the Ming landscape interest you. It adds a different subject from Shanghai or Suzhou. A focused day trip can work with appropriate rail services and full transfers, while separate nights allow more depth and less clock-watching.",
      },
      {
        question: "Where should I stay in Nanjing for sightseeing?",
        answer:
          "Compare Xinjiekou for central convenience, Xuanwu Lake surroundings for a different setting, and Qinhuai for evening atmosphere with possible noise. Choose a Purple Mountain or riverside hotel for the specific property, accepting its separate daily transfers. Verify the actual address and room.",
      },
      {
        question: "Are Ming Xiaoling and Sun Yat-sen's Mausoleum the same place?",
        answer:
          "No. Ming Xiaoling is a Ming imperial tomb complex; Sun Yat-sen's Mausoleum relates to modern Chinese history. Both are in the wider Purple Mountain area, but their historical meaning, walking routes and visitor arrangements differ.",
      },
      {
        question: "Can I visit Nanjing with limited mobility?",
        answer:
          "A selective visit may be possible, but the actual route needs review. Mausoleum stairs, wall entrances, landscaped-site distances and museum standing can be demanding. Check step-free access, seating and pickup for each chosen venue; a private car alone does not solve these issues.",
      },
      {
        question: "Do Nanjing museums and historical sites need reservations?",
        answer:
          "Check the individual institution's current process for your date and identity document, including any separate exhibition or site arrangements. Do not assume a guide can bypass a reservation or that one booking covers every Purple Mountain monument. Confirm closures before setting the daily order.",
      },
      {
        question: "Are Nanjing and Nanking the same city?",
        answer:
          "Yes. Nanking is an older English spelling of Nanjing in Jiangsu. Nanjing County in Fujian is a different place associated with some Tulou visits. Use the province and actual station or airport on every booking.",
      },
      {
        question: "What food should I try in Nanjing?",
        answer:
          "Salted duck, known as yanshui ya, is a useful introduction, usually served as a cool or room-temperature sliced dish rather than Beijing-style roast duck. Duck-blood vermicelli soup is another local specialty with ingredients to discuss first. Choose a meal around your preferences and allergies instead of assuming every signature dish will suit you.",
      },
    ],
    culturalStory: {
      title: "Read a capital through its changing centers of power",
      paragraphs: [
        "The Ming wall and Xiaoling offer a way to understand how a capital was defended, ordered and commemorated. At a selected wall section, ask how gates and the surrounding terrain worked together; along the tomb approach, notice the arrangement of stone figures and the changing relationship between architecture and trees. These details turn a walk into a historical argument rather than a succession of photo stops.",
        "The city's later history needs another frame. Republican-era sites and wartime remembrance should be explained with care, without collapsing them into the Ming story or treating all monuments as similar attractions. Decide which subjects you want to explore and allow time to absorb them. A memorial visit is optional and requires respect for its purpose, particularly when traveling with children or guests who prefer a less emotionally demanding day.",
      ],
    },
    foodStory: {
      title: "Start with duck, then build a meal you will enjoy",
      paragraphs: [
        "Nanjing's salted duck, yanshui ya, is different from the crisp-skinned roast duck many visitors associate with Beijing. Its restrained seasoning and sliced presentation make it worth discussing as a dish in its own right. Duck-blood vermicelli soup offers another local direction, often with additional duck ingredients; ask what goes into the bowl before ordering. A seated meal with a few selected dishes can explain more than an indiscriminate snack circuit.",
        "Balance a duck dish with vegetables, rice or noodles and food that suits the group. Broths, sauces, organ meats and shared preparation matter for allergies and dietary restrictions, including when a dish sounds simple in translation. A guide can help explain choices, but preferences and strict requirements should be shared before a restaurant is selected. Qinhuai's evening setting can be enjoyable without making the busiest waterfront table the right meal for everyone.",
      ],
    },
    itinerary: [
      {
        day: "Arrival",
        title: "Settle into the actual city base",
        description:
          "Transfer from the named station or airport, then keep the first meal local. Add only a short nearby walk that fits the arrival and weather.",
      },
      {
        day: "Full day 1",
        title: "A defended capital and one chosen collection",
        description:
          "Pair a manageable city-wall section with Nanjing Museum or a selected Republican-history site, according to confirmed access. Leave time for lunch and interpretation rather than adding every institution.",
      },
      {
        day: "Full day 2",
        title: "Purple Mountain by interest and walking ability",
        description:
          "Choose Ming Xiaoling or Sun Yat-sen's Mausoleum as the main visit; combine only when the steps, internal travel and time work. Return for rest and a regional dinner.",
      },
      {
        day: "Optional extra full day",
        title: "Go deeper or slow the pace",
        description:
          "Add a separate historical subject, a carefully considered memorial visit or hotel time. A memorial is not an automatic family activity. This extra day requires an additional night or a departure that genuinely leaves enough time.",
      },
      {
        day: "Departure",
        title: "Continue with a different lower-Yangtze interest",
        description:
          "Allow the complete transfer to the booked train or flight. Suzhou, Shanghai or Hangzhou can follow with their own usable time. This outline is illustrative, not a published package or a promise that every option is included.",
      },
    ],
  },
};
