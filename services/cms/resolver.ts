import { getTourBySlug, tours } from "@/content/tours";
import { getDestinationBySlug } from "@/content/destinations";
import { destinationAsset } from "@/content/destinations/assets";
import { readCmsDatabase } from "@/services/cms/storage";
import type {
  CatalogDestination,
  CatalogExperience,
  CatalogJourney,
  ExperienceCategory,
} from "@/types/catalog";
import type { CmsDestinationRecord, CmsExperienceRecord, CmsJourneyRecord } from "@/types/cms";
import type { Destination, DestinationHighlight } from "@/types/destination";
import type {
  RelatedDestination,
  Tour,
  TourAccommodation,
  TourHighlight,
  TourItineraryDay,
  TourRouteStop,
  TourStyle,
} from "@/types/tour";

export async function getCmsCatalog() {
  const database = await readCmsDatabase();
  const destinations = database.destinations.map(destinationToCatalog);
  const experiences = database.experiences.map(experienceToCatalog);
  const journeys = database.journeys.map(journeyToCatalog);

  return { database, destinations, experiences, journeys };
}

export async function getFeaturedCmsDestinations(limit = 3) {
  const { destinations } = await getCmsCatalog();
  return rankCatalog(destinations).slice(0, limit);
}

export async function getFeaturedCmsExperiences(limit = 3) {
  const { experiences } = await getCmsCatalog();
  return rankCatalog(experiences).slice(0, limit);
}

export async function getFeaturedCmsJourneys(limit = 3) {
  const { journeys } = await getCmsCatalog();
  return rankCatalog(journeys).slice(0, limit);
}

export async function getCmsDestinationDetail(slug: string) {
  const { database } = await getCmsCatalog();
  const record = database.destinations.find((destination) => destination.slug === slug);

  if (!record) {
    return undefined;
  }

  const legacy = getDestinationBySlug(slug);

  if (legacy) {
    return legacy;
  }

  return buildDestinationDetail(record, database.experiences, database.journeys);
}

export async function getCmsJourneyDetail(slug: string) {
  const { database } = await getCmsCatalog();
  const record = database.journeys.find((journey) => journey.slug === slug);

  if (!record) {
    return undefined;
  }

  const legacy = getTourBySlug(slug);

  if (legacy) {
    return legacy;
  }

  return buildJourneyDetail(record);
}

export async function getCmsExperience(slug: string) {
  const { database } = await getCmsCatalog();
  return database.experiences.find((experience) => experience.slug === slug);
}

export async function getCmsDestinationRelationships(slug: string) {
  const { database, experiences, journeys } = await getCmsCatalog();
  const destination = database.destinations.find((item) => item.slug === slug);

  return {
    experiences: destination
      ? experiences.filter((experience) => destination.experienceSlugs.includes(experience.slug))
      : [],
    journeys: destination
      ? journeys.filter((journey) => destination.journeySlugs.includes(journey.slug))
      : [],
  };
}

export async function getCmsExperienceRelationships(slug: string) {
  const { destinations, journeys, database } = await getCmsCatalog();
  const experience = database.experiences.find((item) => item.slug === slug);

  return {
    destinations: experience
      ? destinations.filter((destination) => experience.destinationSlugs.includes(destination.slug))
      : [],
    journeys: experience
      ? journeys.filter((journey) => experience.journeySlugs.includes(journey.slug))
      : [],
  };
}

export function destinationToCatalog(record: CmsDestinationRecord): CatalogDestination {
  return {
    slug: record.slug,
    name: record.name,
    region: record.region,
    type: record.destinationType,
    summary: record.summary,
    image: record.image,
    visibility: record.visibility,
    experienceSlugs: record.experienceSlugs,
    journeySlugs: record.journeySlugs,
  };
}

export function experienceToCatalog(record: CmsExperienceRecord): CatalogExperience {
  return {
    slug: record.slug,
    title: record.title,
    category: record.category,
    summary: record.summary,
    whatYouWillDo: record.whatYouWillDo,
    duration: record.duration,
    suitableFor: record.suitableFor,
    image: record.image,
    destinationSlugs: record.destinationSlugs,
    journeySlugs: record.journeySlugs,
    visibility: record.visibility,
    seo: {
      title: record.seoTitle ?? record.title,
      description: record.seoDescription ?? record.summary,
    },
  };
}

export function journeyToCatalog(record: CmsJourneyRecord): CatalogJourney {
  return {
    slug: record.slug,
    title: record.title,
    category: record.category,
    summary: record.summary,
    image: record.image,
    duration: record.duration,
    route: record.route,
    styles: record.styles.filter(Boolean) as TourStyle[],
    destinationSlugs: record.destinationSlugs,
    experienceSlugs: record.experienceSlugs,
    visibility: record.visibility,
  };
}

function buildDestinationDetail(
  record: CmsDestinationRecord,
  allExperiences: CmsExperienceRecord[],
  allJourneys: CmsJourneyRecord[],
): Destination {
  const experiences = allExperiences.filter((experience) =>
    record.experienceSlugs.includes(experience.slug),
  );
  const journeys = allJourneys.filter((journey) => record.journeySlugs.includes(journey.slug));
  const inquiryHref = `mailto:chinaprimedmc@gmail.com?subject=Private%20${encodeURIComponent(
    record.name,
  )}%20Journey%20Inquiry`;

  return {
    slug: record.slug,
    name: record.name,
    region: record.region,
    hero: {
      eyebrow: "Destination guide",
      tagline: `${record.name}, shaped for private travel.`,
      summary: record.summary,
      image: record.image,
      primary: { label: "Explore Related Journeys", href: "#suggested-journeys" },
      secondary: { label: `Plan ${record.name}`, href: inquiryHref },
    },
    seo: {
      title: record.seoTitle ?? `Private ${record.name} Travel`,
      description: record.seoDescription ?? record.summary,
      keywords: [`private ${record.name} travel`, `${record.name} China journey`],
    },
    quickFacts: [
      { label: "Location", value: record.region, helper: "Connected to private China routes." },
      { label: "Best Season", value: "Spring and autumn", helper: "Adjust by season and comfort." },
      { label: "Recommended Stay", value: "2-4 nights", helper: "Flexible by route." },
      { label: "Travel Style", value: record.destinationType, helper: "Private and tailor-made." },
      {
        label: "Suitable For",
        value: "Couples, families, first-timers",
        helper: "Designed by pace.",
      },
      {
        label: "Visa Notes",
        value: "Route dependent",
        helper: "Depends on nationality and route.",
      },
    ],
    whyVisit: {
      title: `${record.name} gives your China journey a clear chapter.`,
      body: record.summary,
      image: record.image,
    },
    bestTime: {
      title: `When to visit ${record.name}.`,
      summary:
        "Spring and autumn are usually the easiest starting points. The final route can adapt by comfort, weather, and photography goals.",
      seasons: [
        { label: "Spring", value: "Comfortable", helper: "Good for first-time private travel." },
        {
          label: "Summer",
          value: "Possible",
          helper: "Use smarter timing and lighter afternoons.",
        },
        { label: "Autumn", value: "Strong choice", helper: "Often best for pacing and light." },
        { label: "Winter", value: "Selective", helper: "Works when planned around comfort." },
      ],
    },
    highlights: experiences.slice(0, 3).map((experience): DestinationHighlight => ({
      title: experience.title,
      description: experience.summary,
      category: mapExperienceCategoryToHighlight(experience.category),
      image: experience.image,
    })),
    experiences: experiences.slice(0, 3).map((experience) => ({
      title: experience.title,
      description: experience.summary,
      badges: [experience.category, experience.duration],
      image: experience.image,
    })),
    hotels: [],
    tours: journeys.slice(0, 3).map((journey) => ({
      title: journey.title,
      description: journey.summary,
      tags: [journey.category, ...journey.styles.slice(0, 2)],
      image: journey.image,
      route: journey.route,
      duration: journey.duration,
      style: journey.category,
      href: `/journey/${journey.slug}`,
    })),
    gallery: [record.image, ...experiences.slice(0, 2).map((experience) => experience.image)],
    tips: [
      {
        title: "Keep the destination in proportion to the whole route.",
        description:
          "A strong route gives each destination a purpose instead of adding stops by fame.",
        category: "Transportation",
      },
      {
        title: "Let pacing decide the order of visits.",
        description: "Private planning protects energy, meals, photography light, and rest.",
        category: "Safety",
      },
      {
        title: "Use related experiences to make the place memorable.",
        description: "One well-chosen experience often matters more than a long attraction list.",
        category: "Packing",
      },
    ],
    faqs: [
      {
        question: `How many days should I spend in ${record.name}?`,
        answer: "The right stay depends on route, season, traveler age, and comfort level.",
      },
      {
        question: `Can ${record.name} work for families or older parents?`,
        answer: "Yes, with private transfers, realistic walking blocks, and flexible meals.",
      },
    ],
    related: {
      journeys: journeys.slice(0, 3).map((journey) => ({
        title: journey.title,
        description: journey.summary,
        tags: [journey.category, ...journey.styles.slice(0, 2)],
        image: journey.image,
        route: journey.route,
        duration: journey.duration,
        style: journey.category,
        href: `/journey/${journey.slug}`,
      })),
      experiences: experiences.slice(0, 3).map((experience) => ({
        title: experience.title,
        description: experience.summary,
        badges: [experience.category, experience.duration],
        image: experience.image,
      })),
      articles: [
        {
          title: `How to include ${record.name} in a private China journey`,
          excerpt: "A planning note on route rhythm, season, comfort, and content relationships.",
          category: "Travel planning",
          image: record.image,
          href: "/journal/how-to-plan-a-first-private-trip-to-china",
        },
      ],
    },
  };
}

function buildJourneyDetail(record: CmsJourneyRecord): Tour {
  const base = tours[0];
  const styles = record.styles.filter(Boolean) as TourStyle[];
  const stops = parseRouteStops(record.route);
  const routeStops = buildRouteStops(stops);
  const generatedItinerary = buildItineraryDays(record, stops);
  const generatedHighlights = buildJourneyHighlights(record, stops, styles);
  const generatedAccommodations = buildAccommodations(stops);
  const profile =
    journeyEditorialProfiles[record.slug] ??
    buildBriefDrivenJourneyProfile(record, journeyEditorialBriefs[record.slug], stops, styles);
  const highlights = profile?.highlights ?? generatedHighlights;
  const heroImage = profile?.heroImage ?? record.image;
  const itinerary = ensureUniqueItineraryImages(
    profile?.itinerary ?? generatedItinerary,
    record,
    stops,
    heroImage,
  );
  const accommodations = profile?.accommodations ?? generatedAccommodations;
  const gallery = buildUniqueJourneyGallery(
    profile?.gallery ?? [
      heroImage,
      ...stops.map((stop) => getPlaceContent(stop).image),
      ...highlights.map((highlight) => highlight.image),
    ],
    itinerary,
    heroImage,
    stops,
  );
  const relatedDestinations = buildRelatedDestinations(stops);

  return {
    ...base,
    slug: record.slug,
    title: record.title,
    subtitle: profile?.subtitle ?? record.summary,
    duration: record.duration,
    route: record.route,
    styles,
    hero: {
      ...base.hero,
      image: heroImage,
    },
    seo: {
      title: record.seoTitle ?? `${record.title} | Private China Journey`,
      description: record.seoDescription ?? record.summary,
      keywords: [record.title, "private China journey", record.route],
    },
    overview: {
      ...base.overview,
      pitch: profile?.overviewPitch ?? record.summary,
      facts: profile?.facts ?? [
        { label: "Duration", value: record.duration },
        { label: "Route", value: record.route },
        { label: "Travel Style", value: styles.join(", ") || record.category },
        { label: "Pace", value: inferPace(styles, record.duration) },
        { label: "Suitable For", value: inferSuitableFor(styles) },
        { label: "Budget Guide", value: inferBudgetGuide(styles) },
      ],
    },
    highlights,
    itinerary,
    accommodations,
    optionalExperiences: profile?.optionalExperiences ?? buildOptionalExperiences(stops, styles),
    transportation: {
      title: "How the route moves",
      description:
        profile?.transportationDescription ??
        "Private car, high-speed rail, and selected flights are chosen by comfort, distance, and the rhythm of the route.",
      items: [
        {
          label: "Private car",
          value: "For city touring and scenic days",
          helper: "Flexible timing and easier luggage handling.",
        },
        {
          label: "High-speed rail",
          value: "When it protects comfort",
          helper: "Best for efficient city-to-city movement.",
        },
        {
          label: "Domestic flight",
          value: "Used selectively",
          helper: "Only when distance makes rail or driving too tiring.",
        },
      ],
    },
    routeMap: {
      ...base.routeMap,
      title: `${record.title} route logic`,
      description: profile?.routeMapDescription ?? record.summary,
      stops: routeStops,
    },
    gallery,
    faqs: profile?.faqs ?? buildJourneyFaqs(record, styles),
    related: {
      tours: base.related.tours,
      destinations: relatedDestinations,
    },
    inquiry: {
      ...base.inquiry,
      emailHref: `mailto:chinaprimedmc@gmail.com?subject=${encodeURIComponent(
        `Customize ${record.title}`,
      )}&body=${encodeURIComponent(
        `Hi China Prime DMC,\n\nI am interested in ${record.title}.\n\nTravelers:\nDates:\nPreferred hotel level:\nRoute changes:\nKey concerns:\n\nPlease suggest pacing, hotels, and route options.`,
      )}`,
      defaultMessage: `I am interested in ${record.title}. Please suggest pacing, hotels, and route options.`,
    },
  };
}

type PlaceContent = {
  name: string;
  image: TourHighlight["image"];
  chapter: string;
  highlight: string;
  experience: string;
  hotelMood: string;
  href?: string;
  coordinates?: { latitude: number; longitude: number };
};

type JourneyEditorialProfile = {
  subtitle?: string;
  heroImage?: TourHighlight["image"];
  overviewPitch?: string;
  facts?: Tour["overview"]["facts"];
  highlights?: TourHighlight[];
  itinerary?: TourItineraryDay[];
  accommodations?: TourAccommodation[];
  optionalExperiences?: Tour["optionalExperiences"];
  transportationDescription?: string;
  routeMapDescription?: string;
  gallery?: TourHighlight["image"][];
  faqs?: Tour["faqs"];
};

const asset = destinationAsset;

const journeyEditorialProfiles: Record<string, JourneyEditorialProfile> = {
  "classic-china-icons-12-days": {
    subtitle:
      "China's essential first journey, edited for comfort: imperial Beijing, ancient Xi'an, karst Guilin, and a polished Shanghai finale.",
    heroImage: asset.goldenTriangleBeijing,
    overviewPitch:
      "Built from the proven first-China arc used by leading inbound specialists, then slowed down for private travelers who want meaning over mileage.",
    facts: [
      {
        label: "Length",
        value: "12 Days / 11 Nights",
        helper: "Enough time for the classic icons without racing.",
      },
      { label: "Route", value: "Beijing, Xi'an, Guilin, Yangshuo, Shanghai" },
      {
        label: "Pace",
        value: "Balanced and private",
        helper: "Major sights in the morning, softer afternoons where possible.",
      },
      { label: "Best For", value: "First-time visitors, couples, families" },
      { label: "Best Time", value: "March-May, September-November" },
      {
        label: "Budget Guide",
        value: "From US$400 pp/day",
        helper: "Premium private planning; luxury upgrades available.",
      },
    ],
    highlights: [
      {
        title: "Beijing with context, not a checklist",
        description:
          "Forbidden City, Temple of Heaven, hutong life, and a Great Wall day timed around light and crowd flow.",
        category: "Culture",
        image: asset.beijingForbiddenCity,
      },
      {
        title: "Xi'an's ancient capital layer",
        description:
          "The Terracotta Warriors, old city walls, and Muslim Quarter flavor give the route historical weight and human texture.",
        category: "Culture",
        image: asset.xianTerracotta,
      },
      {
        title: "Guilin and Yangshuo as the scenic pause",
        description:
          "Karst rivers, countryside roads, and softer village moments keep the journey from becoming only museums and cities.",
        category: "Nature",
        image: asset.liRiverBright,
      },
      {
        title: "Shanghai as the elegant landing",
        description:
          "Art Deco streets, riverfront skyline, design-led dining, and an easy international departure finish the story cleanly.",
        category: "Luxury",
        image: asset.shanghaiBund,
      },
    ],
    itinerary: [
      day(
        1,
        "Arrive in Beijing",
        "Beijing",
        "Private airport welcome, hotel check-in, and a light orientation dinner if your flight time allows.",
        asset.goldenTriangleBeijing,
        [
          activity(
            "Arrival",
            "Meet your China Prime guide",
            "Review the route, hotel rhythm, and any dietary or family needs before the trip begins.",
          ),
          activity(
            "Evening",
            "Easy first look",
            "Keep the evening relaxed: a neighborhood walk, simple dinner, or quiet recovery.",
          ),
        ],
        "Airport arrival and private transfer",
      ),
      day(
        2,
        "Imperial Beijing, paced with breathing room",
        "Beijing",
        "Explore Tiananmen Square, the Forbidden City, and hutong life with stories that make the palace feel human.",
        asset.beijingForbiddenCity,
        [
          activity(
            "Morning",
            "Forbidden City storytelling",
            "Move through the imperial axis with historical context and carefully chosen pauses.",
          ),
          activity(
            "Afternoon",
            "Hutong texture",
            "Visit a quieter neighborhood lane, local home context, or tea break depending on energy.",
          ),
        ],
      ),
      day(
        3,
        "The Great Wall without the rush",
        "Beijing",
        "A private Great Wall day chosen around season, walking comfort, and better photography light.",
        asset.greatWallBright,
        [
          activity(
            "Morning",
            "Great Wall walk",
            "Use a scenic section with the right balance of beauty, access, and crowd control.",
          ),
          activity(
            "Afternoon",
            "Return at an easier rhythm",
            "Add a village lunch or scenic stop, then keep the evening light.",
          ),
        ],
        "Private vehicle",
      ),
      day(
        4,
        "Temple morning and high-speed rail to Xi'an",
        "Xi'an",
        "Begin at the Temple of Heaven, then take the train to Xi'an for the ancient-capital chapter.",
        asset.templeOfHeaven,
        [
          activity(
            "Morning",
            "Temple of Heaven",
            "See morning park life and imperial ritual architecture before leaving Beijing.",
          ),
          activity(
            "Afternoon",
            "Rail to Xi'an",
            "Travel by high-speed rail with luggage support and private transfers on both ends.",
          ),
        ],
        "High-speed rail",
      ),
      day(
        5,
        "Terracotta Warriors and old-city life",
        "Xi'an",
        "Understand the Terracotta Army with strong guiding, then return to the city for walls, food, and evening atmosphere.",
        asset.xianTerracotta,
        [
          activity(
            "Morning",
            "Terracotta Warriors",
            "Focus on scale, craft, and the story of China's first emperor.",
          ),
          activity(
            "Afternoon",
            "City Wall and Muslim Quarter",
            "Choose cycling, walking, or a gentler wall viewpoint, then taste Xi'an's street-food texture.",
          ),
        ],
      ),
      day(
        6,
        "Fly to Guilin, settle into the landscape",
        "Guilin",
        "Move south to Guangxi and let the route soften into rivers, karst hills, and a slower hotel evening.",
        asset.liRiverBright,
        [
          activity(
            "Morning",
            "Flight to Guilin",
            "Use a direct flight when schedules protect comfort.",
          ),
          activity(
            "Afternoon",
            "Guilin orientation",
            "A light scenic visit or riverside walk depending on arrival time.",
          ),
        ],
        "Flight and private transfer",
      ),
      day(
        7,
        "Li River scenery to Yangshuo",
        "Yangshuo",
        "Travel through the most recognizable karst scenery, then settle into Yangshuo's countryside pace.",
        asset.yangshuoYulongRiver,
        [
          activity(
            "Morning",
            "Li River chapter",
            "Enjoy the river landscape with timing chosen around weather and crowds.",
          ),
          activity(
            "Afternoon",
            "Yangshuo countryside",
            "Arrive at a quieter base for village paths, views, and a slower evening.",
          ),
        ],
        "Private transfer or river route",
      ),
      day(
        8,
        "Yangshuo countryside, gently active",
        "Yangshuo",
        "A flexible soft-adventure day with biking, market texture, river views, or cooking depending on the travelers.",
        asset.yangshuoCounty,
        [
          activity(
            "Morning",
            "Countryside paths",
            "Easy cycling or private vehicle touring through villages and karst fields.",
          ),
          activity(
            "Afternoon",
            "Local experience",
            "Choose a cooking class, calligraphy, farm visit, or simply a calm scenic afternoon.",
          ),
        ],
      ),
      day(
        9,
        "Fly to Shanghai",
        "Shanghai",
        "Leave the countryside and arrive in China's most polished international city.",
        asset.shanghaiSkyline,
        [
          activity(
            "Morning",
            "Transfer to airport",
            "Keep the morning simple and luggage flow easy.",
          ),
          activity(
            "Evening",
            "Bund first look",
            "A skyline walk or rooftop drink if arrival timing and energy feel right.",
          ),
        ],
        "Flight and private transfer",
      ),
      day(
        10,
        "Shanghai old and new",
        "Shanghai",
        "Read Shanghai through garden architecture, former concession streets, riverfront views, and contemporary city life.",
        asset.shanghaiBund,
        [
          activity(
            "Morning",
            "Old Shanghai",
            "Visit Yu Garden or an old-city lane with context, avoiding the most crowded windows.",
          ),
          activity(
            "Afternoon",
            "French Concession and design streets",
            "Architecture, boutiques, coffee stops, and flexible dining planning.",
          ),
        ],
      ),
      day(
        11,
        "A flexible final day in Shanghai",
        "Shanghai",
        "Use the last full day for art, food, shopping, water towns, or rest before the flight home.",
        asset.shanghaiTower,
        [
          activity(
            "Morning",
            "Choose your Shanghai",
            "Art museum, market, Jewish heritage, water town, or family-friendly add-on.",
          ),
          activity(
            "Evening",
            "Farewell dinner",
            "Finish with a polished dinner plan that matches your style.",
          ),
        ],
      ),
      day(
        12,
        "Depart Shanghai",
        "Shanghai",
        "Private transfer to the airport with timing built around international departure comfort.",
        asset.shanghaiSkyline,
        [
          activity(
            "Departure",
            "Easy airport transfer",
            "Your guide coordinates luggage, timing, and final details.",
          ),
        ],
        "Private airport transfer",
      ),
    ],
    accommodations: [
      stay(
        "Beijing central heritage hotel",
        "Beijing",
        "A refined base near the imperial axis, chosen to reduce city transfer friction.",
        asset.beijingForbiddenCity,
      ),
      stay(
        "Xi'an old-city hotel",
        "Xi'an",
        "A comfortable stay with easy access to the city wall and evening food streets.",
        asset.xianCityWall,
      ),
      stay(
        "Yangshuo countryside retreat",
        "Yangshuo",
        "A scenic base where the landscape is part of the stay, not just a day trip.",
        asset.yangshuoYulongRiver,
      ),
      stay(
        "Shanghai design hotel",
        "Shanghai",
        "A polished finale near dining, riverfront walks, and international departure logistics.",
        asset.shanghaiBund,
      ),
    ],
    optionalExperiences: [
      option(
        "Private dumpling or noodle kitchen in Xi'an",
        "Turn Xi'an's food culture into an easy, hands-on evening without making dinner feel like a performance.",
        ["Food", "Private"],
        asset.xianCityWall,
      ),
      option(
        "Yangshuo cooking or calligraphy session",
        "A soft cultural layer that works especially well for couples and families after the river scenery.",
        ["Culture", "Family"],
        asset.yangshuoCounty,
      ),
      option(
        "Shanghai architecture evening",
        "Add a more polished finale with Art Deco context, river views, and dinner planning.",
        ["Luxury", "Evening"],
        asset.shanghaiBund,
      ),
    ],
    gallery: [
      asset.goldenTriangleBeijing,
      asset.greatWallBright,
      asset.xianTerracotta,
      asset.liRiverBright,
      asset.yangshuoYulongRiver,
      asset.shanghaiBund,
    ],
    routeMapDescription:
      "A classic north-to-south-to-east arc: imperial scale, ancient capital, karst landscape, then modern Shanghai.",
    transportationDescription:
      "High-speed rail connects Beijing and Xi'an comfortably; flights protect time between Xi'an, Guilin, and Shanghai; private vehicles handle all local touring.",
  },
  "china-with-kids-pandas-and-rivers": {
    subtitle:
      "A playful private China journey for families: Beijing icons, Chengdu pandas, Yangshuo countryside, and Shanghai comfort.",
    heroImage: asset.familyYangshuoCountryside,
    overviewPitch:
      "Designed for families who want children to remember China as alive, generous, and fun, not as a long list of monuments.",
    facts: [
      { label: "Length", value: "11 Days / 10 Nights" },
      { label: "Route", value: "Beijing, Chengdu, Yangshuo, Shanghai" },
      { label: "Pace", value: "Easy, playful, private" },
      { label: "Best For", value: "Families with children, multi-generation trips" },
      { label: "Best Time", value: "March-May, September-November" },
      {
        label: "Budget Guide",
        value: "From US$400 pp/day",
        helper: "Premium family pacing with private guides.",
      },
    ],
    highlights: [
      {
        title: "Big China moments, child-sized pacing",
        description:
          "The Forbidden City and Great Wall are planned with shorter blocks, snack windows, and flexible exits.",
        category: "Family",
        image: asset.greatWallJinshanling,
      },
      {
        title: "Panda morning in Chengdu",
        description:
          "Visit when pandas are usually more active, then keep the afternoon gentle with parks, tea, or food.",
        category: "Family",
        image: asset.familyChengduPanda,
      },
      {
        title: "Yangshuo as the outdoor chapter",
        description:
          "Karst scenery, easy biking, river views, and countryside moments give children space to move.",
        category: "Nature",
        image: asset.familyYangshuoCountryside,
      },
      {
        title: "Shanghai made easy",
        description:
          "A clean final city chapter with skyline views, family-friendly dining, and simple departure logistics.",
        category: "Culture",
        image: asset.shanghaiSkyline,
      },
    ],
    itinerary: [
      day(
        1,
        "Arrive in Beijing",
        "Beijing",
        "Meet your guide, settle in, and keep the first evening intentionally simple.",
        asset.beijingForbiddenCity,
        [
          activity(
            "Arrival",
            "Family welcome",
            "Confirm allergies, snacks, room setup, and daily pacing before touring begins.",
          ),
        ],
        "Airport arrival and private transfer",
      ),
      day(
        2,
        "Forbidden City and hutong life",
        "Beijing",
        "A child-friendly palace morning followed by neighborhood texture and time to decompress.",
        asset.beijingForbiddenCity,
        [
          activity(
            "Morning",
            "Imperial stories",
            "Use stories, objects, and breaks to make the Forbidden City feel understandable.",
          ),
          activity(
            "Afternoon",
            "Hutong or park moment",
            "A rickshaw, local home visit, kite stop, or quiet hotel break depending on age.",
          ),
        ],
      ),
      day(
        3,
        "Great Wall family day",
        "Beijing",
        "A scenic Wall section with private timing, realistic walking, and no forced shopping.",
        asset.greatWallJinshanling,
        [
          activity(
            "Morning",
            "Walk the Wall",
            "Choose the route length around children, grandparents, and weather.",
          ),
          activity(
            "Afternoon",
            "Return slowly",
            "Lunch, photo stops, or an early hotel return if the day has already landed.",
          ),
        ],
        "Private vehicle",
      ),
      day(
        4,
        "Fly to Chengdu",
        "Chengdu",
        "Shift from monuments to Sichuan's softer rhythm with parks, noodles, and early bedtime if needed.",
        asset.kuanzhaiAlley,
        [
          activity("Morning", "Travel to Chengdu", "Use the easiest flight timing available."),
          activity(
            "Afternoon",
            "Chengdu orientation",
            "A light old-street walk, snack stop, or hotel pool/rest time.",
          ),
        ],
        "Flight and private transfer",
      ),
      day(
        5,
        "Pandas and Chengdu parks",
        "Chengdu",
        "Visit the panda base at the right hour, then keep the rest of the day gentle and local.",
        asset.familyChengduPanda,
        [
          activity(
            "Morning",
            "Panda base",
            "Go early for better animal activity and a cooler, calmer visit.",
          ),
          activity(
            "Afternoon",
            "Tea-house or park life",
            "Let children see Chengdu's local rhythm without another heavy sight.",
          ),
        ],
      ),
      day(
        6,
        "Fly to Guilin, continue to Yangshuo",
        "Yangshuo",
        "Move into the karst landscape and settle into a countryside stay.",
        asset.yangshuoYulongRiver,
        [
          activity("Morning", "Flight south", "Private transfer support keeps the move easy."),
          activity(
            "Afternoon",
            "Yangshuo arrival",
            "Simple countryside orientation and early dinner.",
          ),
        ],
        "Flight and private transfer",
      ),
      day(
        7,
        "Yangshuo countryside adventure",
        "Yangshuo",
        "A flexible outdoor day: easy biking, river scenery, village paths, or a cooking class.",
        asset.familyYangshuoCountryside,
        [
          activity(
            "Morning",
            "Countryside ride or drive",
            "Choose cycling, sidecar, or private vehicle based on age and weather.",
          ),
          activity(
            "Afternoon",
            "Hands-on local moment",
            "Cooking, calligraphy, market visit, or quiet scenic time.",
          ),
        ],
      ),
      day(
        8,
        "Li River and karst views",
        "Guilin",
        "Enjoy the landscape without overloading the day, then return to Guilin for the next flight.",
        asset.liRiverBright,
        [
          activity(
            "Morning",
            "River scenery",
            "Use the best available river or scenic transfer option for the season.",
          ),
          activity("Afternoon", "Guilin reset", "Keep the evening simple before Shanghai."),
        ],
        "Private transfer",
      ),
      day(
        9,
        "Fly to Shanghai",
        "Shanghai",
        "Arrive in a more familiar international city with skyline views and easy food choices.",
        asset.shanghaiSkyline,
        [
          activity(
            "Afternoon",
            "Arrival and hotel time",
            "Keep the transition gentle after the countryside.",
          ),
          activity("Evening", "Bund lights", "A short skyline walk if everyone has energy."),
        ],
        "Flight and private transfer",
      ),
      day(
        10,
        "Shanghai your way",
        "Shanghai",
        "Choose a family-focused day: aquarium, museum, garden, food walk, Disney add-on, or a slower city route.",
        asset.shanghaiBund,
        [
          activity(
            "Morning",
            "Old and new Shanghai",
            "A light garden or city walk with plenty of breaks.",
          ),
          activity(
            "Afternoon",
            "Family choice",
            "Design the afternoon around ages, weather, and attention span.",
          ),
        ],
      ),
      day(
        11,
        "Depart Shanghai",
        "Shanghai",
        "Private airport transfer and departure support.",
        asset.shanghaiSkyline,
        [
          activity(
            "Departure",
            "Smooth goodbye",
            "Your guide handles timing and airport transfer details.",
          ),
        ],
        "Private airport transfer",
      ),
    ],
    accommodations: [
      stay(
        "Beijing family-friendly central hotel",
        "Beijing",
        "Connecting rooms or suite options near the main sights reduce daily friction.",
        asset.beijingForbiddenCity,
      ),
      stay(
        "Chengdu relaxed city hotel",
        "Chengdu",
        "A softer base for pandas, parks, and easy meals.",
        asset.kuanzhaiAlley,
      ),
      stay(
        "Yangshuo countryside retreat",
        "Yangshuo",
        "Views, space, and a slower rhythm make this the emotional center for many families.",
        asset.familyYangshuoCountryside,
      ),
      stay(
        "Shanghai polished family base",
        "Shanghai",
        "A comfortable final hotel with easy dining and departure logistics.",
        asset.shanghaiSkyline,
      ),
    ],
    optionalExperiences: [
      option(
        "Panda keeper-style learning session",
        "Add a deeper educational layer when available and age-appropriate.",
        ["Family", "Animals"],
        asset.familyChengduPanda,
      ),
      option(
        "Yangshuo family cooking class",
        "A low-pressure hands-on meal that works well after an outdoor morning.",
        ["Food", "Family"],
        asset.yangshuoCounty,
      ),
      option(
        "Shanghai child-friendly add-on",
        "Aquarium, science museum, Disney day, or a quieter garden route depending on your children.",
        ["Family", "Flexible"],
        asset.shanghaiBund,
      ),
    ],
    gallery: [
      asset.familyYangshuoCountryside,
      asset.greatWallJinshanling,
      asset.familyChengduPanda,
      asset.yangshuoCounty,
      asset.liRiverBright,
      asset.shanghaiSkyline,
    ],
    routeMapDescription:
      "A family-first route that alternates big sights with animals, nature, and easier city comfort.",
    transportationDescription:
      "Flights are used to reduce fatigue; private vehicles protect snack stops, luggage, naps, and flexible returns.",
  },
  "guilin-yangshuo-soft-adventure": {
    subtitle:
      "A nature-forward Guangxi journey with Li River scenery, Longji rice terraces, and Yangshuo countryside at an easy private pace.",
    heroImage: asset.liRiverBright,
    overviewPitch:
      "A compact scenic journey for travelers who want China's landscape drama without committing to hard trekking.",
    highlights: [
      {
        title: "Li River scenery",
        description:
          "Karst peaks, river light, and one of China's most recognizable natural landscapes.",
        category: "Nature",
        image: asset.liRiverBright,
      },
      {
        title: "Longji rice terraces",
        description:
          "Mountain terraces and village paths add a rural chapter when season and walking comfort fit.",
        category: "Photography",
        image: asset.longjiRiceTerraces,
      },
      {
        title: "Yangshuo countryside",
        description:
          "Soft adventure with biking, river views, village roads, and flexible local experiences.",
        category: "Family",
        image: asset.yangshuoCounty,
      },
    ],
    itinerary: [
      day(
        1,
        "Arrive in Guilin",
        "Guilin",
        "Private arrival and an easy riverside orientation.",
        asset.liRiverBright,
        [
          activity(
            "Arrival",
            "Settle into Guangxi",
            "Keep the first day light so the scenery can unfold naturally.",
          ),
        ],
        "Airport or rail arrival",
      ),
      day(
        2,
        "Longji rice terraces",
        "Longji",
        "Travel into the terrace country for village paths, viewpoints, and seasonal landscape color.",
        asset.longjiRiceTerraces,
        [
          activity(
            "Morning",
            "Terrace viewpoints",
            "Choose walking length based on comfort and weather.",
          ),
          activity(
            "Afternoon",
            "Village texture",
            "Meet the rural side of Guangxi without rushing the drive.",
          ),
        ],
        "Private vehicle",
      ),
      day(
        3,
        "Li River to Yangshuo",
        "Yangshuo",
        "Move through the karst landscape toward Yangshuo, using the best river or scenic transfer option for the season.",
        asset.yangshuoYulongRiver,
        [
          activity("Morning", "River scenery", "Let the landscape be the main event."),
          activity(
            "Afternoon",
            "Countryside arrival",
            "Check into a scenic stay and slow the evening down.",
          ),
        ],
      ),
      day(
        4,
        "Yangshuo soft adventure",
        "Yangshuo",
        "Easy cycling, sidecar touring, market texture, or a cooking class, all adjusted to weather and energy.",
        asset.yangshuoCounty,
        [
          activity(
            "Morning",
            "Village paths",
            "Explore the countryside by bike, foot, sidecar, or private vehicle.",
          ),
          activity(
            "Afternoon",
            "Hands-on local moment",
            "Cooking, calligraphy, farm visit, or river views.",
          ),
        ],
      ),
      day(
        5,
        "Karst light and flexible day",
        "Yangshuo",
        "A second day protects weather flexibility and gives photographers better odds for morning or late-day light.",
        asset.familyYangshuoCountryside,
        [
          activity(
            "Morning",
            "Photo-aware scenery",
            "Plan around mist, light, and seasonal river conditions.",
          ),
          activity(
            "Afternoon",
            "Rest or add-on",
            "Choose a short hike, cave, village, or hotel time.",
          ),
        ],
      ),
      day(
        6,
        "Depart Guilin",
        "Guilin",
        "Private transfer back to Guilin for onward rail or flight.",
        asset.liRiverBright,
        [
          activity(
            "Departure",
            "Smooth onward connection",
            "Timing is built around your next city or international route.",
          ),
        ],
        "Private transfer",
      ),
    ],
    gallery: [
      asset.liRiverBright,
      asset.longjiRiceTerraces,
      asset.yangshuoYulongRiver,
      asset.yangshuoCounty,
      asset.familyYangshuoCountryside,
    ],
  },
  "zhangjiajie-avatar-peaks-private": {
    subtitle:
      "A dramatic private nature journey through Zhangjiajie's sandstone pillars, Tianmen Mountain, and Fenghuang's riverside old town.",
    heroImage: asset.zhangjiajieAvatarPeaks,
    overviewPitch:
      "For travelers who want China's cinematic landscapes, but with timing, transfers, and viewpoint choices handled carefully.",
    highlights: [
      {
        title: "Zhangjiajie National Forest Park",
        description:
          "Sandstone pillars, high viewpoints, and forested valleys shaped around crowd-aware timing.",
        category: "Nature",
        image: asset.zhangjiajieNationalForest,
      },
      {
        title: "Tianmen Mountain",
        description:
          "Cliff roads, cableways, and big mountain views, sequenced around weather and comfort.",
        category: "Adventure",
        image: asset.tianmenMountain,
      },
      {
        title: "Fenghuang old town",
        description:
          "A softer riverside finale that adds evening atmosphere after the mountain drama.",
        category: "Culture",
        image: asset.zhangjiajieForest,
      },
    ],
    itinerary: [
      day(
        1,
        "Arrive in Zhangjiajie",
        "Zhangjiajie",
        "Private arrival and a calm setup for early scenic timing the next day.",
        asset.zhangjiajieAvatarPeaks,
        [
          activity(
            "Arrival",
            "Settle near the scenic area",
            "Review weather, walking comfort, and the best sequence for the park.",
          ),
        ],
        "Airport or rail arrival",
      ),
      day(
        2,
        "Avatar peaks and forest viewpoints",
        "Zhangjiajie",
        "Explore the national forest park with a route chosen for the season, crowds, and photography goals.",
        asset.zhangjiajieNationalForest,
        [
          activity(
            "Morning",
            "Yuanjiajie-style viewpoints",
            "Prioritize the most iconic pillar scenery before peak crowd windows.",
          ),
          activity(
            "Afternoon",
            "Scenic descent or valley walk",
            "Balance high-impact views with a manageable walking plan.",
          ),
        ],
      ),
      day(
        3,
        "Tianmen Mountain",
        "Zhangjiajie",
        "Cableway, mountain road views, and cliffside scenery with backup plans for weather.",
        asset.tianmenMountain,
        [
          activity(
            "Morning",
            "Tianmen Mountain ascent",
            "Use the clearest weather window available.",
          ),
          activity(
            "Afternoon",
            "Glass walkway or easier viewpoints",
            "Choose the level of adventure that feels right.",
          ),
        ],
      ),
      day(
        4,
        "Drive to Fenghuang",
        "Fenghuang",
        "Move from mountain scenery to a riverside old-town evening.",
        asset.zhangjiajieForest,
        [
          activity("Morning", "Private transfer", "Break the drive with practical stops."),
          activity(
            "Evening",
            "Fenghuang riverside",
            "Walk the old town when the light and atmosphere are strongest.",
          ),
        ],
        "Private vehicle",
      ),
      day(
        5,
        "Depart Fenghuang or Zhangjiajie",
        "Fenghuang",
        "A flexible departure day by rail, road, or flight depending on the next route chapter.",
        asset.zhangjiajieAvatarPeaks,
        [
          activity(
            "Departure",
            "Easy onward logistics",
            "Your route can continue to Guilin, Shanghai, Chengdu, or Beijing.",
          ),
        ],
        "Private transfer",
      ),
    ],
    gallery: [
      asset.zhangjiajieAvatarPeaks,
      asset.zhangjiajieNationalForest,
      asset.tianmenMountain,
      asset.zhangjiajieForest,
    ],
  },
  "jiuzhaigou-chengdu-nature-and-pandas": {
    subtitle:
      "A bright Sichuan journey pairing Chengdu's pandas and food culture with Jiuzhaigou's turquoise lakes and Huanglong's mountain scenery.",
    heroImage: asset.jiuzhaigouBrightLake,
    overviewPitch:
      "A nature-rich route that needs thoughtful pacing: panda timing, mountain transfers, altitude awareness, and enough rest to enjoy the color.",
    highlights: [
      {
        title: "Chengdu panda morning",
        description: "Start with China's most beloved wildlife experience at a smarter hour.",
        category: "Family",
        image: asset.familyChengduPanda,
      },
      {
        title: "Jiuzhaigou valley color",
        description:
          "Turquoise lakes, waterfalls, forests, and mountain light planned around park logistics.",
        category: "Nature",
        image: asset.jiuzhaigouValley,
      },
      {
        title: "Huanglong when conditions fit",
        description: "Mineral pools and highland scenery added with altitude and weather judgment.",
        category: "Photography",
        image: asset.huanglongPools,
      },
    ],
    itinerary: [
      day(
        1,
        "Arrive in Chengdu",
        "Chengdu",
        "A gentle arrival with Sichuan food options adjusted to comfort.",
        asset.kuanzhaiAlley,
        [
          activity(
            "Arrival",
            "Settle into Chengdu",
            "Keep the first evening relaxed before the panda morning.",
          ),
        ],
        "Airport arrival",
      ),
      day(
        2,
        "Pandas, parks, and tea",
        "Chengdu",
        "Visit the panda base early, then slow into Chengdu's parks, tea houses, and food culture.",
        asset.familyChengduPanda,
        [
          activity("Morning", "Panda base", "Early timing gives the best chance of active pandas."),
          activity(
            "Afternoon",
            "Tea-house rhythm",
            "A soft cultural afternoon that avoids overloading the day.",
          ),
        ],
      ),
      day(
        3,
        "Travel to Jiuzhaigou",
        "Jiuzhaigou",
        "Move into the mountain region with private support and a light evening for recovery.",
        asset.jiuzhaigouBrightLake,
        [
          activity(
            "Daytime",
            "Mountain transfer or flight routing",
            "The transport plan depends on current schedules and comfort.",
          ),
          activity("Evening", "Rest near the valley", "Prepare for an early scenic day."),
        ],
        "Flight or private transfer",
      ),
      day(
        4,
        "Jiuzhaigou full scenic day",
        "Jiuzhaigou",
        "A full day inside the valley, planned around the best lakes, walking comfort, and light.",
        asset.jiuzhaigouValley,
        [
          activity(
            "Morning",
            "Upper valley color",
            "Start with high-impact lakes and quieter timing where possible.",
          ),
          activity(
            "Afternoon",
            "Waterfalls and forest walks",
            "Adjust walking blocks to energy and season.",
          ),
        ],
      ),
      day(
        5,
        "Second Jiuzhaigou layer or rest",
        "Jiuzhaigou",
        "Use a second day for weather flexibility, deeper photography, or a gentler scenic route.",
        asset.jiuzhaigouLake,
        [
          activity(
            "Morning",
            "Return to favorite views",
            "Photography travelers often benefit from a second light window.",
          ),
          activity("Afternoon", "Recovery time", "Keep space for altitude and transfer fatigue."),
        ],
      ),
      day(
        6,
        "Huanglong and return toward Chengdu",
        "Chengdu",
        "Visit Huanglong if weather, road, and altitude conditions make sense; otherwise use a safer scenic alternative.",
        asset.huanglongPools,
        [
          activity(
            "Morning",
            "Huanglong mineral pools",
            "Altitude-aware walking and cableway planning when appropriate.",
          ),
          activity(
            "Afternoon",
            "Return logistics",
            "Continue toward Chengdu by the most comfortable available option.",
          ),
        ],
        "Private transfer or flight",
      ),
      day(
        7,
        "Depart Chengdu",
        "Chengdu",
        "Private airport transfer or extension to Leshan, Chongqing, Yunnan, or Shanghai.",
        asset.kuanzhaiAlley,
        [
          activity(
            "Departure",
            "Easy onward route",
            "The journey can end here or continue into a longer Southwest China itinerary.",
          ),
        ],
      ),
    ],
    gallery: [
      asset.jiuzhaigouBrightLake,
      asset.jiuzhaigouValley,
      asset.huanglongPools,
      asset.familyChengduPanda,
      asset.kuanzhaiAlley,
    ],
  },
  "shanghai-suzhou-hangzhou-elegant-east": {
    subtitle:
      "An elegant East China journey through Shanghai skyline polish, Suzhou gardens, Hangzhou's West Lake, and tea country softness.",
    heroImage: asset.shanghaiSuzhouGarden,
    overviewPitch:
      "A refined route for travelers who prefer design, gardens, food, water, and slower cultural texture over heavy monument touring.",
    highlights: [
      {
        title: "Shanghai skyline and Art Deco streets",
        description:
          "A polished opening with river views, architecture, and strong dining options.",
        category: "Luxury",
        image: asset.shanghaiBund,
      },
      {
        title: "Suzhou garden intelligence",
        description:
          "Classical gardens and canal texture explained through design, poetry, and daily life.",
        category: "Culture",
        image: asset.shanghaiSuzhouGarden,
      },
      {
        title: "Hangzhou lake and tea",
        description: "West Lake light and Longjing tea country create the route's softest chapter.",
        category: "Food",
        image: asset.westLakeBright,
      },
    ],
    itinerary: [
      day(
        1,
        "Arrive in Shanghai",
        "Shanghai",
        "Private arrival and a polished first evening near the river or former concession.",
        asset.shanghaiBund,
        [activity("Arrival", "Settle into Shanghai", "Keep the first night easy and elegant.")],
      ),
      day(
        2,
        "Shanghai architecture and riverfront",
        "Shanghai",
        "Explore old and new Shanghai through gardens, Art Deco streets, and skyline viewpoints.",
        asset.shanghaiSkyline,
        [
          activity("Morning", "Old Shanghai", "Yu Garden or old-city lanes with context."),
          activity(
            "Evening",
            "Bund and Pudong views",
            "A riverfront walk or rooftop moment at the right hour.",
          ),
        ],
      ),
      day(
        3,
        "Suzhou gardens",
        "Suzhou",
        "Travel to Suzhou for classical garden design, canals, silk texture, and a calmer Jiangnan rhythm.",
        asset.shanghaiSuzhouGarden,
        [
          activity(
            "Morning",
            "Private garden interpretation",
            "Understand why Suzhou gardens are designed as worlds in miniature.",
          ),
          activity("Afternoon", "Canal or silk layer", "Add a quieter neighborhood or craft stop."),
        ],
        "High-speed rail or private vehicle",
      ),
      day(
        4,
        "Suzhou to Hangzhou",
        "Hangzhou",
        "Move to Hangzhou and let the trip soften around water, bridges, and lake light.",
        asset.westLakeBright,
        [
          activity("Morning", "Suzhou final layer", "A second garden or old street if desired."),
          activity("Afternoon", "West Lake arrival", "Settle into a calmer lakeside rhythm."),
        ],
        "High-speed rail or private vehicle",
      ),
      day(
        5,
        "West Lake and Longjing tea",
        "Hangzhou",
        "A graceful day around lake viewpoints, tea fields, and a slower lunch.",
        asset.westLakeSunset,
        [
          activity(
            "Morning",
            "West Lake",
            "Choose quieter viewpoints and a route that avoids over-walking.",
          ),
          activity(
            "Afternoon",
            "Longjing tea country",
            "Tea culture, village lanes, and a more sensory afternoon.",
          ),
        ],
      ),
      day(
        6,
        "Return to Shanghai",
        "Shanghai",
        "Return to Shanghai for shopping, art, dining, or a final flexible afternoon.",
        asset.shanghaiBund,
        [
          activity("Morning", "Easy return", "Keep logistics smooth and luggage simple."),
          activity(
            "Evening",
            "Farewell dinner",
            "Finish with a dining plan that matches your style.",
          ),
        ],
        "High-speed rail or private vehicle",
      ),
      day(
        7,
        "Depart Shanghai",
        "Shanghai",
        "Private transfer to the airport.",
        asset.shanghaiSkyline,
        [
          activity(
            "Departure",
            "International departure",
            "Timing is built around your flight and traffic window.",
          ),
        ],
      ),
    ],
    gallery: [
      asset.shanghaiSuzhouGarden,
      asset.shanghaiBund,
      asset.westLakeBright,
      asset.westLakeSunset,
      asset.yuGarden,
    ],
  },
  "chengdu-chongqing-food-journey": {
    subtitle:
      "A flavor-led private journey through Chengdu tea-house life, Sichuan spice, Chongqing hotpot, and layered river-city nights.",
    heroImage: asset.chongqingHongyaCave,
    overviewPitch:
      "Built for food lovers who want context, comfort, and choice: bold flavors, but never a forced eating challenge.",
    highlights: [
      {
        title: "Chengdu's relaxed food rhythm",
        description: "Tea houses, parks, noodles, snacks, and spice levels handled with care.",
        category: "Food",
        image: asset.kuanzhaiAlley,
      },
      {
        title: "Pandas or culture as a soft reset",
        description: "Balance meals with a panda morning, temple, museum, or neighborhood walk.",
        category: "Family",
        image: asset.familyChengduPanda,
      },
      {
        title: "Chongqing night texture",
        description:
          "Hotpot culture, river views, mountain-city layers, and Hongya Cave after dark.",
        category: "Food",
        image: asset.chongqingHongyaCave,
      },
    ],
    itinerary: [
      day(
        1,
        "Arrive in Chengdu",
        "Chengdu",
        "Settle in and begin with an easy Sichuan dinner adjusted to your comfort level.",
        asset.kuanzhaiAlley,
        [
          activity(
            "Evening",
            "Welcome flavors",
            "A first meal that introduces Sichuan without overwhelming the table.",
          ),
        ],
      ),
      day(
        2,
        "Pandas, tea, and Chengdu snacks",
        "Chengdu",
        "Panda morning or park life, followed by tea-house rhythm and approachable local flavors.",
        asset.familyChengduPanda,
        [
          activity(
            "Morning",
            "Panda or park choice",
            "Choose wildlife, temple, or local park depending on interest.",
          ),
          activity("Afternoon", "Tea and snacks", "Understand Chengdu's slow social food culture."),
        ],
      ),
      day(
        3,
        "Chengdu food deep dive",
        "Chengdu",
        "Markets, cooking, noodles, or a private tasting route with spice and dietary needs managed clearly.",
        asset.chengduTeaHouse,
        [
          activity("Morning", "Market context", "See ingredients before they become the meal."),
          activity(
            "Evening",
            "Private tasting route",
            "A curated progression of dishes, not random street eating.",
          ),
        ],
      ),
      day(
        4,
        "High-speed rail to Chongqing",
        "Chongqing",
        "Move to Chongqing for hotpot culture, river views, and dramatic city layers.",
        asset.chongqingHongyaCave,
        [
          activity(
            "Afternoon",
            "Mountain-city orientation",
            "Viewpoints, old lanes, or riverfront texture.",
          ),
          activity(
            "Evening",
            "Hotpot with guidance",
            "Choose spice level, ingredients, and pacing with confidence.",
          ),
        ],
        "High-speed rail",
      ),
      day(
        5,
        "Chongqing neighborhoods and night views",
        "Chongqing",
        "Explore old streets, food alleys, river crossings, and a night route that feels cinematic.",
        asset.chongqingHongyaCave,
        [
          activity(
            "Morning",
            "Local neighborhood walk",
            "Ciqikou, old lanes, or market texture depending on crowd timing.",
          ),
          activity(
            "Evening",
            "River-city lights",
            "Use the best night-view sequence without exhausting the day.",
          ),
        ],
      ),
      day(
        6,
        "Depart Chongqing",
        "Chongqing",
        "Private transfer or extend to Dazu, the Yangtze, Chengdu, or Zhangjiajie.",
        asset.chongqingHongyaCave,
        [
          activity(
            "Departure",
            "Flexible onward planning",
            "This food route pairs well with a nature or river extension.",
          ),
        ],
      ),
    ],
    gallery: [
      asset.chongqingHongyaCave,
      asset.kuanzhaiAlley,
      asset.familyChengduPanda,
      asset.chengduTeaHouse,
    ],
  },
  "yunnan-slow-luxury": {
    subtitle:
      "A slower Southwest China journey through Dali, Lijiang, and Shangri-La with boutique stays, mountain light, and living culture.",
    heroImage: asset.yunnanOldTown,
    overviewPitch:
      "Yunnan works best when it is not rushed. This route gives old towns, highland scenery, and cultural texture room to breathe.",
    highlights: [
      {
        title: "Dali's lake-and-mountain ease",
        description:
          "A gentle opening with old-town lanes, craft texture, and slower lake scenery.",
        category: "Luxury",
        image: asset.daliOldTown,
      },
      {
        title: "Lijiang with quieter timing",
        description:
          "Naxi culture, old-town rooftops, and mountain views without staying in the noisiest lanes.",
        category: "Culture",
        image: asset.yunnanOldTown,
      },
      {
        title: "Shangri-La highland chapter",
        description:
          "Monastery, meadows, and Tibetan cultural texture paced with altitude awareness.",
        category: "Nature",
        image: asset.songzanlinMonastery,
      },
    ],
    itinerary: [
      day(
        1,
        "Arrive in Dali",
        "Dali",
        "Private arrival and a quiet first evening near old-town or lake scenery.",
        asset.daliOldTown,
        [activity("Arrival", "Settle into Yunnan", "Keep the first evening soft and scenic.")],
      ),
      day(
        2,
        "Dali old town and lake life",
        "Dali",
        "Explore Dali's old town, local craft, villages, and lake views at a gentle rhythm.",
        asset.daliOldTown,
        [
          activity(
            "Morning",
            "Old town and craft",
            "Focus on living texture rather than souvenir stops.",
          ),
          activity(
            "Afternoon",
            "Erhai scenery",
            "Choose a lake drive, village walk, or quiet cafe moment.",
          ),
        ],
      ),
      day(
        3,
        "Dali to Lijiang",
        "Lijiang",
        "Move north to Lijiang with mountain views and a carefully chosen boutique stay.",
        asset.yunnanOldTown,
        [
          activity("Morning", "Private transfer", "Add a village or viewpoint if timing fits."),
          activity(
            "Afternoon",
            "Lijiang first look",
            "Old-town lanes with a quieter route and dinner plan.",
          ),
        ],
        "Private vehicle or rail",
      ),
      day(
        4,
        "Lijiang and Naxi culture",
        "Lijiang",
        "A slower cultural day around old-town texture, local music, villages, or Jade Dragon Snow Mountain views.",
        asset.yunnanLijiang,
        [
          activity(
            "Morning",
            "Naxi cultural layer",
            "Choose villages, local family context, or old-town interpretation.",
          ),
          activity(
            "Afternoon",
            "Mountain-view pacing",
            "Weather decides whether scenery or culture leads the day.",
          ),
        ],
      ),
      day(
        5,
        "Lijiang at leisure",
        "Lijiang",
        "A protected slow day for photography, boutique-hotel time, or a tailored cultural add-on.",
        asset.yunnanOldTown,
        [
          activity(
            "Morning",
            "Flexible private experience",
            "Tea, market, village, photography, or rest.",
          ),
          activity(
            "Afternoon",
            "Unscheduled space",
            "Luxury in Yunnan is often time, not more stops.",
          ),
        ],
      ),
      day(
        6,
        "Drive to Shangri-La",
        "Shangri-La",
        "Travel into the highlands with optional Tiger Leaping Gorge views if comfort and conditions fit.",
        asset.songzanlinMonastery,
        [
          activity("Daytime", "Highland transfer", "Altitude and road comfort guide the route."),
          activity("Evening", "Warm highland stay", "Settle in and keep the evening low-key."),
        ],
        "Private vehicle",
      ),
      day(
        7,
        "Songzanlin Monastery and highland scenery",
        "Shangri-La",
        "Explore monastery culture, old-town texture, and meadow scenery with slower altitude-aware timing.",
        asset.songzanlinMonastery,
        [
          activity(
            "Morning",
            "Songzanlin Monastery",
            "Respectful interpretation and unhurried pacing.",
          ),
          activity(
            "Afternoon",
            "Highland views",
            "Meadows, old town, or hotel rest depending on energy.",
          ),
        ],
      ),
      day(
        8,
        "Return to Lijiang or continue onward",
        "Lijiang",
        "Travel back toward Lijiang or connect onward depending on flight schedules.",
        asset.yunnanOldTown,
        [
          activity(
            "Daytime",
            "Flexible return",
            "Keep the day realistic after the highland chapter.",
          ),
        ],
        "Private vehicle",
      ),
      day(
        9,
        "Depart Yunnan",
        "Lijiang",
        "Private airport transfer or extension to Chengdu, Shanghai, or Guilin.",
        asset.yunnanOldTown,
        [
          activity(
            "Departure",
            "Smooth onward connection",
            "Your route can continue or end with a quiet final morning.",
          ),
        ],
      ),
    ],
    gallery: [
      asset.yunnanOldTown,
      asset.daliOldTown,
      asset.songzanlinMonastery,
      asset.yunnanLijiang,
    ],
  },
  "silk-road-dunhuang-zhangye": {
    subtitle:
      "A cinematic Silk Road route across Gansu: Yellow River gateway, rainbow mountains, fortress edges, Mogao Caves, and desert light.",
    heroImage: asset.silkRoadZhangye,
    overviewPitch:
      "A route for travelers who want China beyond the classic east, with long-distance logistics made comfortable and visually rewarding.",
    highlights: [
      {
        title: "Zhangye Danxia color",
        description:
          "Rainbow landforms timed for better light and a stronger photography experience.",
        category: "Photography",
        image: asset.zhangyeDanxia,
      },
      {
        title: "Jiayuguan frontier logic",
        description:
          "The western end of the Great Wall adds historical scale between Zhangye and Dunhuang.",
        category: "Culture",
        image: asset.silkRoadZhangye,
      },
      {
        title: "Dunhuang desert and cave art",
        description:
          "Mogao Caves context and Crescent Lake scenery create the emotional peak of the route.",
        category: "Culture",
        image: asset.silkRoadDunhuang,
      },
    ],
    itinerary: [
      day(
        1,
        "Arrive in Lanzhou",
        "Lanzhou",
        "Begin at the Yellow River gateway with a practical, comfortable arrival.",
        asset.xianCityWall,
        [
          activity(
            "Arrival",
            "Settle into the Silk Road route",
            "Review the long-distance rhythm and photography goals.",
          ),
        ],
      ),
      day(
        2,
        "Lanzhou to Zhangye",
        "Zhangye",
        "Travel west by high-speed rail, then time Zhangye Danxia for stronger light if conditions allow.",
        asset.zhangyeDanxia,
        [
          activity(
            "Afternoon",
            "Zhangye Danxia",
            "Use late-day color and a clean viewpoint sequence where possible.",
          ),
        ],
        "High-speed rail",
      ),
      day(
        3,
        "Zhangye deeper landscape day",
        "Zhangye",
        "Add a second landscape layer or cultural stop around Zhangye before the route continues west.",
        asset.silkRoadZhangye,
        [
          activity(
            "Morning",
            "Landscape and temple context",
            "Balance scenic viewpoints with Silk Road history.",
          ),
          activity(
            "Afternoon",
            "Private pacing",
            "Keep space for light, weather, and longer drives.",
          ),
        ],
      ),
      day(
        4,
        "Zhangye to Jiayuguan",
        "Jiayuguan",
        "Drive or rail to Jiayuguan for frontier history and Great Wall edge-of-empire atmosphere.",
        asset.zhangyeDanxia,
        [
          activity("Morning", "Travel west", "Use the smoothest available route."),
          activity(
            "Afternoon",
            "Jiayuguan Pass",
            "Understand why this fortress mattered on the Silk Road.",
          ),
        ],
        "Private vehicle or rail",
      ),
      day(
        5,
        "Jiayuguan to Dunhuang",
        "Dunhuang",
        "Continue into desert country and arrive in Dunhuang for a softer evening.",
        asset.silkRoadDunhuang,
        [
          activity(
            "Daytime",
            "Cross desert landscapes",
            "Break the journey with practical stops and photo pauses.",
          ),
          activity(
            "Evening",
            "Dunhuang night market optional",
            "Keep it flexible after the transfer.",
          ),
        ],
        "Private vehicle or rail",
      ),
      day(
        6,
        "Mogao Caves and Dunhuang context",
        "Dunhuang",
        "Visit the Mogao Caves with strong interpretation, then use the afternoon for museum or rest.",
        asset.silkRoadDunhuang,
        [
          activity(
            "Morning",
            "Mogao Caves",
            "Focus on art, religion, trade, and preservation context.",
          ),
          activity(
            "Afternoon",
            "Dunhuang at a slower pace",
            "Museum, market, or hotel rest depending on heat and energy.",
          ),
        ],
      ),
      day(
        7,
        "Crescent Lake and desert light",
        "Dunhuang",
        "Plan desert scenery for a better light window and avoid making the day only about heat and sand.",
        asset.silkRoadDunhuang,
        [
          activity(
            "Morning",
            "Flexible cultural add-on",
            "Yumen Pass or local context if desired.",
          ),
          activity(
            "Late afternoon",
            "Crescent Lake and dunes",
            "The route is timed for atmosphere, not midday glare.",
          ),
        ],
      ),
      day(
        8,
        "Depart Dunhuang",
        "Dunhuang",
        "Private airport transfer or continue deeper into Xinjiang.",
        asset.silkRoadDunhuang,
        [
          activity(
            "Departure",
            "Onward Silk Road option",
            "Continue to Turpan, Urumqi, Kashgar, or return east.",
          ),
        ],
      ),
    ],
    gallery: [asset.silkRoadZhangye, asset.zhangyeDanxia, asset.silkRoadDunhuang],
  },
};

type JourneyEditorialBrief = {
  subtitle: string;
  overviewPitch: string;
  heroImage: TourHighlight["image"];
  bestFor: string;
  pace: string;
  budgetGuide: string;
  theme: TourStyle;
  experienceFocus: string;
  gallery: TourHighlight["image"][];
  faqAngle: string;
};

const journeyEditorialBriefs: Record<string, JourneyEditorialBrief> = {
  "luxury-china-slow-rhythm": {
    subtitle:
      "A calmer luxury China route through Beijing, Hangzhou, and Shanghai, shaped around elegant hotels, better evenings, and fewer rushed transfers.",
    overviewPitch:
      "This is a refined first-China route for travelers who value comfort, design, food, and space as much as the icons themselves.",
    heroImage: asset.westLakeMultiGeneration,
    bestFor: "Couples, luxury travelers, older parents",
    pace: "Slow, polished, comfort-led",
    budgetGuide: "From US$600 pp/day",
    theme: "Luxury",
    experienceFocus:
      "private palace context, West Lake tea country, refined dining, and skyline evenings",
    gallery: [
      asset.westLakeMultiGeneration,
      asset.beijingForbiddenCity,
      asset.westLakeBright,
      asset.shanghaiBund,
    ],
    faqAngle: "hotel tier, private pacing, and upgrade choices",
  },
  "beijing-great-wall-heritage-5-days": {
    subtitle:
      "A focused Beijing escape with imperial history, temple mornings, hutong texture, and a Great Wall day designed around light and walking comfort.",
    overviewPitch:
      "For travelers with limited time, Beijing can still feel deep when the route protects context, rest, and one unforgettable Wall experience.",
    heroImage: asset.simataiGubeiWaterTown,
    bestFor: "Short stays, stopovers, culture lovers",
    pace: "Focused and easy to moderate",
    budgetGuide: "From US$350 pp/day",
    theme: "Culture",
    experienceFocus:
      "Forbidden City storytelling, Temple of Heaven park life, hutongs, and a quieter Great Wall section",
    gallery: [
      asset.simataiGubeiWaterTown,
      asset.beijingForbiddenCity,
      asset.templeOfHeaven,
      asset.greatWallBright,
    ],
    faqAngle: "best Wall section, walking level, and Beijing stopover timing",
  },
  "huangshan-hangzhou-photography": {
    subtitle:
      "A photography-led eastern China journey with Shanghai polish, West Lake softness, Huangshan peaks, and old village texture.",
    overviewPitch:
      "This route is built around atmosphere: mist, mountains, lake light, heritage villages, and flexible decisions when weather changes.",
    heroImage: asset.huangshanClouds,
    bestFor: "Photographers, couples, nature-minded luxury travelers",
    pace: "Weather-aware and flexible",
    budgetGuide: "From US$500 pp/day",
    theme: "Photography",
    experienceFocus:
      "Bund light, West Lake mornings, Huangshan viewpoints, and ancient villages near the mountain",
    gallery: [asset.huangshanClouds, asset.westLakeBright, asset.shanghaiBund, asset.yuGarden],
    faqAngle: "weather flexibility, mountain hotel comfort, and sunrise planning",
  },
  "xian-silk-road-muslim-heritage": {
    subtitle:
      "A halal-aware heritage route from Xi'an toward the Silk Road, with prayer timing, food planning, and respectful cultural context built in.",
    overviewPitch:
      "This journey connects Hui Muslim heritage, ancient capitals, Yellow River gateways, and Dunhuang's desert culture without treating halal needs as an afterthought.",
    heroImage: asset.xianGreatMosque,
    bestFor: "Muslim travelers, families, heritage travelers",
    pace: "Balanced, halal-aware, private",
    budgetGuide: "From US$400 pp/day",
    theme: "Muslim-friendly",
    experienceFocus:
      "Xi'an Great Mosque, Muslim Quarter food, Silk Road history, Lanzhou noodles, and Dunhuang desert light",
    gallery: [
      asset.xianGreatMosque,
      asset.xianTerracotta,
      asset.silkRoadDunhuang,
      asset.zhangyeDanxia,
    ],
    faqAngle: "halal meals, prayer timing, and guide awareness",
  },
  "muslim-friendly-classic-china": {
    subtitle:
      "A first-China route with halal-aware meals, prayer timing, private guiding, and classic icons from Beijing to Guilin and Shanghai.",
    overviewPitch:
      "The classic China arc becomes much easier when food, prayer breaks, hotel location, and daily pacing are planned from the beginning.",
    heroImage: asset.guilinElephantTrunkHill,
    bestFor: "Muslim families and first-time China travelers",
    pace: "Easy, private, halal-aware",
    budgetGuide: "From US$400 pp/day",
    theme: "Muslim-friendly",
    experienceFocus:
      "Great Wall timing, Xi'an Muslim Quarter, Guilin scenery, halal meal planning, and Shanghai comfort",
    gallery: [
      asset.guilinElephantTrunkHill,
      asset.greatWallBright,
      asset.xianGreatMosque,
      asset.shanghaiBund,
    ],
    faqAngle: "halal restaurants, prayer breaks, and family comfort",
  },
  "senior-friendly-china-icons": {
    subtitle:
      "China's essential icons with shorter walking blocks, private transfers, better rest windows, and a calmer rhythm for older parents.",
    overviewPitch:
      "This is not a reduced trip. It is a better-paced version of China for travelers who want the icons without physical strain.",
    heroImage: asset.seniorTempleOfHeaven,
    bestFor: "Older parents, multi-generation families, comfort-led travelers",
    pace: "Gentle and well-spaced",
    budgetGuide: "From US$400 pp/day",
    theme: "Senior-friendly",
    experienceFocus:
      "easier palace routing, seated meal planning, panda morning, low-friction transfers, and flexible evenings",
    gallery: [
      asset.seniorTempleOfHeaven,
      asset.greatWallJinshanling,
      asset.xianTerracotta,
      asset.familyChengduPanda,
    ],
    faqAngle: "walking distance, elevators, vehicle access, and rest windows",
  },
  "women-friends-china-culture-and-style": {
    subtitle:
      "A stylish private route for friends, solo travelers, or women-led groups, mixing culture, food, shopping, photography, and polished hotels.",
    overviewPitch:
      "The journey balances iconic China with the softer pleasures of travel: neighborhoods, boutiques, tea, food, photography, and good evenings.",
    heroImage: asset.shanghaiBund,
    bestFor: "Friends, solo travelers, culture and style lovers",
    pace: "Friendly, flexible, polished",
    budgetGuide: "From US$500 pp/day",
    theme: "Luxury",
    experienceFocus:
      "Beijing heritage, Xi'an food, Shanghai design streets, Hangzhou lake light, and private guide confidence",
    gallery: [
      asset.shanghaiBund,
      asset.beijingForbiddenCity,
      asset.xianCityWall,
      asset.westLakeBright,
    ],
    faqAngle: "solo comfort, safety, shopping time, and flexible evenings",
  },
  "china-honeymoon-river-and-city": {
    subtitle:
      "A romantic private China journey with Yangshuo river scenery, Hangzhou softness, Shanghai style, and elegant pacing for two.",
    overviewPitch:
      "For couples, China works beautifully when the route alternates cinematic landscapes with graceful cities and room for unplanned time.",
    heroImage: asset.yangshuoYulongRiver,
    bestFor: "Honeymoons, anniversaries, couples",
    pace: "Romantic, scenic, unhurried",
    budgetGuide: "From US$600 pp/day",
    theme: "Luxury",
    experienceFocus:
      "Yangshuo countryside, private river moments, West Lake tea, Shanghai dining, and boutique stays",
    gallery: [
      asset.yangshuoYulongRiver,
      asset.westLakeSunset,
      asset.shanghaiBund,
      asset.liRiverBright,
    ],
    faqAngle: "romantic hotels, private dining, and slower scenic pacing",
  },
  "grand-china-21-days": {
    subtitle:
      "A sweeping private China journey from imperial Beijing to ancient Xi'an, pandas, rivers, mountains, Hangzhou, and modern Shanghai.",
    overviewPitch:
      "This is the big China arc for travelers who want range without chaos, using longer stays and smarter transitions to keep the journey human.",
    heroImage: asset.liRiverBright,
    bestFor: "Luxury travelers, retirees, long-haul explorers",
    pace: "Grand but carefully spaced",
    budgetGuide: "From US$500 pp/day",
    theme: "Luxury",
    experienceFocus:
      "imperial history, Terracotta Warriors, Chengdu pandas, Guilin and Yangshuo scenery, Hangzhou lake life, and Shanghai polish",
    gallery: [
      asset.liRiverBright,
      asset.greatWallBright,
      asset.xianTerracotta,
      asset.familyChengduPanda,
      asset.westLakeBright,
      asset.shanghaiBund,
    ],
    faqAngle: "trip length, pacing, hotel tiers, and how to avoid fatigue",
  },
  "china-by-high-speed-rail": {
    subtitle:
      "A smooth private China route using high-speed rail to connect Beijing, Xi'an, Shanghai, and Hangzhou with less airport friction.",
    overviewPitch:
      "China's rail network can make a classic trip feel efficient and grounded when station timing, luggage flow, and hotel locations are handled well.",
    heroImage: asset.shanghaiTower,
    bestFor: "Train lovers, first-time travelers, older parents",
    pace: "Efficient but comfortable",
    budgetGuide: "From US$350 pp/day",
    theme: "Culture",
    experienceFocus:
      "imperial Beijing, rail comfort, Xi'an history, Shanghai skyline, and Hangzhou lake scenery",
    gallery: [
      asset.shanghaiTower,
      asset.beijingForbiddenCity,
      asset.xianTerracotta,
      asset.westLakeBright,
    ],
    faqAngle: "rail classes, luggage support, station transfers, and travel time",
  },
  "tibet-lhasa-nyingchi-private": {
    subtitle:
      "A carefully paced highland route through Lhasa and Nyingchi, with permit planning, acclimatization, and respectful cultural depth.",
    overviewPitch:
      "Tibet requires care. This route is built around altitude, permits, spiritual sites, scenic valleys, and enough time to move respectfully.",
    heroImage: asset.songzanlinMonastery,
    bestFor: "Culture travelers, photographers, highland nature lovers",
    pace: "Altitude-aware and respectful",
    budgetGuide: "From US$600 pp/day",
    theme: "Culture",
    experienceFocus:
      "Lhasa monasteries, old-city walks, highland light, Nyingchi valleys, and permit-aware logistics",
    gallery: [asset.songzanlinMonastery, asset.jiuzhaigouValley, asset.meiliSnowMountain],
    faqAngle: "permits, altitude, oxygen support, and respectful travel",
  },
  "xinjiang-northern-landscapes": {
    subtitle:
      "A remote northern Xinjiang route for serious scenery lovers, with alpine lakes, grasslands, village texture, and long-distance logistics.",
    overviewPitch:
      "Northern Xinjiang is about scale. The reward is immense scenery, but the route must be honest about drive times and comfort tradeoffs.",
    heroImage: asset.jiuzhaigouBrightLake,
    bestFor: "Nature lovers, photographers, adventure travelers",
    pace: "Remote, scenic, logistics-heavy",
    budgetGuide: "From US$500 pp/day",
    theme: "Nature",
    experienceFocus:
      "Urumqi gateway logistics, Kanas lake scenery, Hemu village atmosphere, grasslands, and big-sky drives",
    gallery: [asset.jiuzhaigouBrightLake, asset.silkRoadZhangye, asset.zhangyeDanxia],
    faqAngle: "drive times, seasonal access, comfort expectations, and photography timing",
  },
  "southern-xinjiang-silk-road": {
    subtitle:
      "A deeper Silk Road route through Kashgar, Karakul Lake, Kuqa, and Turpan, with oasis culture and desert edges.",
    overviewPitch:
      "Southern Xinjiang feels closer to Central Asia than the classic China route, making it ideal for travelers who want markets, deserts, music, and living history.",
    heroImage: asset.silkRoadDunhuang,
    bestFor: "Culture lovers, photographers, Muslim-friendly travelers",
    pace: "Deep, cultural, privately paced",
    budgetGuide: "From US$500 pp/day",
    theme: "Culture",
    experienceFocus:
      "Kashgar old-city life, Pamir views near Karakul Lake, Kuqa cave culture, Turpan oasis history, and halal-aware planning",
    gallery: [asset.silkRoadDunhuang, asset.zhangyeDanxia, asset.xianGreatMosque],
    faqAngle: "security checks, halal food, long drives, and seasonal comfort",
  },
  "family-soft-adventure-longji-yangshuo": {
    subtitle:
      "A gentle family nature route through Guilin, Longji rice terraces, and Yangshuo countryside with room for rest and play.",
    overviewPitch:
      "This is China outdoors without making the trip too hard: rice terraces, river scenery, village roads, and flexible soft adventure.",
    heroImage: asset.longshengRiceTerraces,
    bestFor: "Families, nature lovers, first-time visitors",
    pace: "Gentle, outdoorsy, flexible",
    budgetGuide: "From US$400 pp/day",
    theme: "Family",
    experienceFocus:
      "Longji terrace walks, Li River scenery, Yangshuo biking, cooking, and countryside stays",
    gallery: [
      asset.longshengRiceTerraces,
      asset.yangshuoCounty,
      asset.liRiverBright,
      asset.familyYangshuoCountryside,
    ],
    faqAngle: "child-friendly walking, weather, rafting alternatives, and hotel location",
  },
  "teen-friendly-china-adventure": {
    subtitle:
      "A higher-energy family route with Beijing icons, Zhangjiajie's dramatic scenery, Chengdu pandas, and modern Shanghai.",
    overviewPitch:
      "Teens often need scale, movement, and variety. This route mixes history, mountains, wildlife, skyline energy, and enough private flexibility.",
    heroImage: asset.zhangjiajieGlassBridge,
    bestFor: "Families with teens, active travelers",
    pace: "Active but privately controlled",
    budgetGuide: "From US$450 pp/day",
    theme: "Adventure",
    experienceFocus:
      "Great Wall walking, Zhangjiajie viewpoints, glass bridge options, panda morning, and Shanghai skyline nights",
    gallery: [
      asset.zhangjiajieGlassBridge,
      asset.greatWallBright,
      asset.familyChengduPanda,
      asset.shanghaiSkyline,
    ],
    faqAngle: "activity level, safety, teen-friendly pacing, and backup plans",
  },
  "food-culture-beijing-xian-chengdu": {
    subtitle:
      "A flavor-rich private route through Beijing, Xi'an, and Chengdu, connecting imperial food, street flavor, Sichuan spice, and tea culture.",
    overviewPitch:
      "This route treats food as culture, not just meals, while keeping spice level, hygiene, dietary needs, and pacing under control.",
    heroImage: asset.kuanzhaiAlley,
    bestFor: "Food lovers, families, culture travelers",
    pace: "Flavor-led and comfortable",
    budgetGuide: "From US$400 pp/day",
    theme: "Food",
    experienceFocus:
      "Beijing heritage dining, Xi'an noodles and Muslim Quarter, Chengdu tea houses, Sichuan cooking, and market context",
    gallery: [
      asset.kuanzhaiAlley,
      asset.xianGreatMosque,
      asset.beijingForbiddenCity,
      asset.familyChengduPanda,
    ],
    faqAngle: "spice levels, dietary needs, halal options, and food safety",
  },
  "private-china-for-couples": {
    subtitle:
      "A stylish couples route with Beijing history, Guilin scenery, Hangzhou softness, and Shanghai evenings.",
    overviewPitch:
      "This journey is romantic without becoming staged: great hotels, strong scenery, graceful cities, and time to enjoy each other.",
    heroImage: asset.westLakeSunset,
    bestFor: "Couples, anniversaries, luxury travelers",
    pace: "Elegant and scenic",
    budgetGuide: "From US$600 pp/day",
    theme: "Luxury",
    experienceFocus:
      "private Beijing guiding, Yangshuo views, West Lake tea, Shanghai dining, and boutique hotel rhythm",
    gallery: [
      asset.westLakeSunset,
      asset.yangshuoYulongRiver,
      asset.beijingForbiddenCity,
      asset.shanghaiBund,
    ],
    faqAngle: "romantic pacing, boutique hotels, dining, and private moments",
  },
  "yangtze-chengdu-classic": {
    subtitle:
      "A comfortable classic route pairing Chengdu pandas and Sichuan culture with Chongqing and a Yangtze river chapter.",
    overviewPitch:
      "This route works for travelers who want a softer classic China journey with wildlife, river scenery, food, and easier city transitions.",
    heroImage: asset.yangtzeQutangGorge,
    bestFor: "Older parents, river travelers, classic China guests",
    pace: "Comfortable and scenic",
    budgetGuide: "From US$450 pp/day",
    theme: "Nature",
    experienceFocus:
      "Chengdu pandas, Sichuan food, Chongqing river city, Yangtze gorge scenery, and Shanghai finish",
    gallery: [
      asset.yangtzeQutangGorge,
      asset.familyChengduPanda,
      asset.chongqingHongyaCave,
      asset.shanghaiBund,
    ],
    faqAngle: "cruise standards, cabin choice, mobility, and route timing",
  },
  "beijing-xian-shanghai-essential-8-days": {
    subtitle:
      "A concise first-China route through Beijing, Xi'an, and Shanghai for travelers with limited time but high expectations.",
    overviewPitch:
      "This is the cleanest short version of China: imperial capital, ancient capital, modern skyline, and no attempt to pretend one week can cover everything.",
    heroImage: asset.xianTerracotta,
    bestFor: "First-time visitors, business add-ons, short vacations",
    pace: "Efficient and focused",
    budgetGuide: "From US$350 pp/day",
    theme: "First-time China",
    experienceFocus:
      "Forbidden City, Great Wall, Terracotta Warriors, old Xi'an, Bund skyline, and high-speed rail or flight logistics",
    gallery: [
      asset.xianTerracotta,
      asset.greatWallBright,
      asset.beijingForbiddenCity,
      asset.shanghaiBund,
    ],
    faqAngle: "short-trip tradeoffs, must-sees, and transfer choices",
  },
  "premium-mice-incentive-china": {
    subtitle:
      "A polished private incentive route for small groups, combining iconic China, reliable operations, memorable dining, and flexible add-ons.",
    overviewPitch:
      "Designed for incentive and executive groups that need the emotion of China with the control of professional ground operations.",
    heroImage: asset.shanghaiBund,
    bestFor: "MICE groups, executive incentives, B2B partners",
    pace: "Polished, efficient, operations-led",
    budgetGuide: "Quoted by group size and service level",
    theme: "Luxury",
    experienceFocus:
      "Beijing icons, Shanghai skyline, private dining, VIP transfers, branded moments, and contingency planning",
    gallery: [
      asset.shanghaiBund,
      asset.greatWallJinshanling,
      asset.beijingForbiddenCity,
      asset.shanghaiTower,
    ],
    faqAngle: "group size, branding, hotel blocks, and operational support",
  },
  "custom-china-designed-from-scratch": {
    subtitle:
      "A blank-canvas private journey for travelers who know the feeling they want, but need expert help shaping the route.",
    overviewPitch:
      "Instead of forcing you into a fixed tour, we start with travelers, season, comfort level, interests, and the emotional arc of the trip.",
    heroImage: asset.greatWallJinshanling,
    bestFor: "Luxury travelers, families, special interests",
    pace: "Designed around you",
    budgetGuide: "From US$400 pp/day, fully tailored",
    theme: "Luxury",
    experienceFocus:
      "route design, hotel tiering, private guides, seasonal logic, food preferences, and conversion from ideas into a workable journey",
    gallery: [
      asset.greatWallJinshanling,
      asset.liRiverBright,
      asset.familyChengduPanda,
      asset.westLakeBright,
      asset.shanghaiBund,
    ],
    faqAngle: "custom design process, pricing tiers, timing, and how inquiry works",
  },
};

function activity(time: string, title: string, description: string) {
  return { time, title, description };
}

function day(
  dayNumber: number,
  title: string,
  destination: string,
  summary: string,
  image: TourHighlight["image"],
  activities: TourItineraryDay["activities"],
  transport = "Private vehicle and guided local touring",
): TourItineraryDay {
  return {
    day: dayNumber,
    title,
    destination,
    summary,
    image,
    hotel: `${destination} selected stay`,
    meals: dayNumber === 1 ? ["Dinner"] : ["Breakfast"],
    transport,
    activities,
    guideNote:
      "Private pacing lets the day adjust around weather, light, crowds, and traveler energy.",
  };
}

function stay(
  name: string,
  destination: string,
  description: string,
  image: TourHighlight["image"],
): TourAccommodation {
  return {
    name,
    destination,
    description,
    roomStyle: "Premium private-route comfort",
    highlights: [
      "Location selected to reduce daily transfer friction",
      "Hotel tier can be quoted as Standard, Premium, or Luxury",
      "Matched to the route rhythm rather than chosen by name alone",
    ],
    image,
  };
}

function option(
  title: string,
  description: string,
  badges: string[],
  image: TourHighlight["image"],
) {
  return {
    title,
    description,
    badges,
    image,
  };
}

function buildBriefDrivenJourneyProfile(
  record: CmsJourneyRecord,
  brief: JourneyEditorialBrief | undefined,
  stops: string[],
  styles: TourStyle[],
): JourneyEditorialProfile | undefined {
  if (!brief) return undefined;

  const places = stops.length ? stops.map(getPlaceContent) : [getPlaceContent("china-wide")];
  const dayCount = parseDurationDays(record.duration);
  const daysPerStop = distributeDays(dayCount, places.length);
  let dayNumber = 1;
  const usedItineraryImages = new Set<string>();
  const itinerary = places.flatMap((place, placeIndex) => {
    const count = daysPerStop[placeIndex] ?? 1;

    return Array.from({ length: count }, (_, localIndex) => {
      const isArrival = localIndex === 0;
      const title = isArrival
        ? `Arrive in ${place.name} with the rhythm protected`
        : localIndex === count - 1
          ? `${place.name} at a deeper pace`
          : `${place.name} through ${brief.theme.toLowerCase()} eyes`;
      const summary = isArrival
        ? `${place.chapter} The first chapter is paced to settle in, set expectations, and avoid turning travel logistics into stress.`
        : `${place.experience} The day is edited around ${brief.experienceFocus}, with private timing instead of a checklist.`;

      return day(
        dayNumber++,
        title,
        place.name,
        summary,
        selectJourneyImage(
          place.name,
          `${record.title} ${record.route} ${title} ${summary}`,
          usedItineraryImages,
        ),
        [
          activity(
            isArrival ? "Arrival" : "Morning",
            isArrival ? `Settle into ${place.name}` : `Signature ${place.name} experience`,
            isArrival
              ? "Meet your guide, review the route, and keep the first local chapter realistic."
              : place.experience,
          ),
          activity(
            isArrival ? "Evening" : "Afternoon",
            isArrival ? "Light orientation" : "Private flexible layer",
            isArrival
              ? "Choose a calm neighborhood walk, easy meal, or quiet hotel evening depending on arrival time."
              : `Add the right amount of depth for ${brief.bestFor.toLowerCase()}, then leave space for rest, photos, or a better meal.`,
          ),
        ],
        isArrival && placeIndex > 0
          ? "Private transfer, high-speed rail, or selected flight"
          : "Private vehicle and guided local touring",
      );
    });
  });

  const highlights = [
    ...places.slice(0, 4).map((place): TourHighlight => ({
      title: place.name,
      description: place.highlight,
      category: inferHighlightCategory(styles, place.name),
      image: place.image,
    })),
    {
      title: "Designed around the right travel rhythm",
      description: brief.overviewPitch,
      category: brief.theme,
      image: brief.heroImage,
    },
  ].slice(0, 5);

  return {
    subtitle: brief.subtitle,
    heroImage: brief.heroImage,
    overviewPitch: brief.overviewPitch,
    facts: [
      { label: "Length", value: record.duration },
      { label: "Route", value: record.route },
      { label: "Pace", value: brief.pace },
      { label: "Best For", value: brief.bestFor },
      { label: "Travel Style", value: styles.join(", ") || record.category },
      { label: "Budget Guide", value: brief.budgetGuide },
    ],
    highlights,
    itinerary,
    accommodations: places
      .slice(0, 4)
      .map((place) =>
        stay(
          `${place.name} selected stay`,
          place.name,
          `${place.hotelMood} For this route, the hotel choice supports ${brief.pace.toLowerCase()} travel.`,
          place.image,
        ),
      ),
    optionalExperiences: [
      option(
        `${places[0]?.name ?? "China"} private depth upgrade`,
        `Add more context around ${brief.experienceFocus} with a specialist guide or slower half-day experience.`,
        [brief.theme, "Private"],
        places[0]?.image ?? brief.heroImage,
      ),
      option(
        "Hotel tier upgrade",
        "Quote the same route as Standard, Premium, or Luxury so travelers can compare comfort honestly.",
        ["Luxury", "Flexible"],
        brief.heroImage,
      ),
      option(
        "Photography and timing layer",
        "Adjust starts, meals, and transfers around better light, crowd flow, and traveler energy.",
        ["Photography", "Private"],
        brief.gallery[1] ?? brief.heroImage,
      ),
    ],
    transportationDescription:
      "Transport is selected by route logic, not habit: private vehicles for local control, high-speed rail when it protects comfort, and flights when distance would otherwise drain the trip.",
    routeMapDescription: `${record.title} connects ${record.route} around ${brief.experienceFocus}.`,
    gallery: uniqueAssets([
      brief.heroImage,
      ...brief.gallery,
      ...places.map((place) => place.image),
    ]),
    faqs: [
      {
        question: `Can ${record.title} be customized?`,
        answer:
          "Yes. This is a private proposal. We can adjust hotels, pacing, internal transport, experience depth, food needs, and route order.",
      },
      {
        question: `Who is this journey best for?`,
        answer: `${record.title} is best for ${brief.bestFor.toLowerCase()}. The route is paced as ${brief.pace.toLowerCase()}.`,
      },
      {
        question: `What should we decide before requesting a quote?`,
        answer: `The most useful details are dates, traveler count, preferred hotel level, walking comfort, and any priorities around ${brief.faqAngle}.`,
      },
    ],
  };
}

const placeContent: Record<string, PlaceContent> = {
  beijing: {
    name: "Beijing",
    image: destinationAsset.beijingForbiddenCity,
    chapter: "Imperial scale, hutong texture, and Great Wall timing.",
    highlight: "Private access rhythm around Beijing's imperial axis and quieter Wall timing.",
    experience:
      "Forbidden City storytelling, temple mornings, hutong life, and a carefully timed Great Wall day.",
    hotelMood: "A refined central hotel with easy access to palace, hutong, and dining chapters.",
    href: "/destination/beijing",
    coordinates: { latitude: 39.9042, longitude: 116.4074 },
  },
  "great wall": {
    name: "Great Wall",
    image: destinationAsset.greatWallBright,
    chapter: "A cinematic Wall chapter paced around light and walking comfort.",
    highlight: "A quieter Great Wall section chosen by season, fitness, and photography goals.",
    experience:
      "Private transfers, flexible walking, photo pauses, and a relaxed return without shopping stops.",
    hotelMood: "A comfortable Beijing base or scenic overnight when the route needs slower timing.",
    href: "/destination/beijing",
    coordinates: { latitude: 40.4319, longitude: 116.5704 },
  },
  "xi'an": {
    name: "Xi'an",
    image: destinationAsset.xianTerracotta,
    chapter: "Ancient capitals, city walls, Muslim Quarter flavor, and archaeological scale.",
    highlight:
      "Terracotta Warriors and old-city life explained through human stories, not a checklist.",
    experience:
      "Terracotta context, city wall views, street food texture, and space for history to land.",
    hotelMood: "A well-located city hotel that reduces transfer fatigue around the old city.",
    coordinates: { latitude: 34.3416, longitude: 108.9398 },
  },
  chengdu: {
    name: "Chengdu",
    image: destinationAsset.chengduPanda,
    chapter: "Pandas, teahouses, parks, and a softer Sichuan rhythm.",
    highlight: "A panda morning and Chengdu's slow local texture, planned at a humane pace.",
    experience: "Panda base timing, tea-house life, local food, and relaxed neighborhood moments.",
    hotelMood: "A calm Chengdu hotel near parks, dining, and easy private transfers.",
    href: "/destination/chengdu",
    coordinates: { latitude: 30.5728, longitude: 104.0668 },
  },
  chongqing: {
    name: "Chongqing",
    image: destinationAsset.chongqingHongyaCave,
    chapter:
      "Layered mountain city energy, river views, hotpot culture, and dramatic night texture.",
    highlight: "A bold food and river-city chapter balanced with private transfers and comfort.",
    experience:
      "Old neighborhoods, river viewpoints, hotpot context, and spice adjusted around your travelers.",
    hotelMood: "A river-view or central hotel that makes the vertical city easier to enjoy.",
    coordinates: { latitude: 29.563, longitude: 106.5516 },
  },
  guilin: {
    name: "Guilin",
    image: destinationAsset.liRiverBright,
    chapter: "Karst scenery, river light, and a natural pause in the route.",
    highlight: "Li River landscapes that give the journey a softer, cinematic natural chapter.",
    experience:
      "River scenery, cave or terrace options, and slower private transfers into Yangshuo.",
    hotelMood:
      "A scenic riverside or countryside stay that supports early light and quiet evenings.",
    href: "/destination/guilin",
    coordinates: { latitude: 25.2736, longitude: 110.29 },
  },
  yangshuo: {
    name: "Yangshuo",
    image: destinationAsset.yangshuoYulongRiver,
    chapter: "Countryside paths, Yulong River views, soft adventure, and village rhythm.",
    highlight:
      "Karst countryside without hard adventure, ideal for couples, families, and photographers.",
    experience: "Bamboo-raft style scenery, easy cycling, market texture, and slow rural mornings.",
    hotelMood:
      "A boutique countryside stay with views, quiet breakfasts, and flexible daily pacing.",
    href: "/destination/guilin",
    coordinates: { latitude: 24.7785, longitude: 110.4966 },
  },
  longji: {
    name: "Longji",
    image: destinationAsset.longjiRiceTerraces,
    chapter: "Rice terraces, village paths, and a more rural Guangxi chapter.",
    highlight: "Terrace landscapes that reward slower walking and seasonal timing.",
    experience:
      "Village walks, terrace viewpoints, and simple local texture without overloading the day.",
    hotelMood: "A scenic mountain lodge or comfortable Guilin base depending on walking comfort.",
    href: "/destination/guilin",
    coordinates: { latitude: 25.7593, longitude: 110.121 },
  },
  shanghai: {
    name: "Shanghai",
    image: destinationAsset.shanghaiSkyline,
    chapter: "Skyline polish, Art Deco streets, dining, design, and international comfort.",
    highlight:
      "A polished modern landing or finale with skyline evenings and elegant city contrast.",
    experience: "Architecture walks, river views, French Concession texture, and flexible dining.",
    hotelMood:
      "A stylish city hotel with easy access to riverfront, dining, and airport logistics.",
    href: "/destination/shanghai",
    coordinates: { latitude: 31.2304, longitude: 121.4737 },
  },
  hangzhou: {
    name: "Hangzhou",
    image: destinationAsset.westLakeSunset,
    chapter: "West Lake softness, tea country, gardens, and a gentler eastern China pace.",
    highlight: "Lake light, tea culture, and slower luxury moments between bigger city chapters.",
    experience: "West Lake viewpoints, Longjing tea context, garden walks, and quiet dining.",
    hotelMood: "A lake-area or resort-style stay that makes the route feel calmer.",
    coordinates: { latitude: 30.2741, longitude: 120.1551 },
  },
  suzhou: {
    name: "Suzhou",
    image: destinationAsset.shanghaiSuzhouGarden,
    chapter: "Classical gardens, canals, silk texture, and refined Jiangnan culture.",
    highlight: "Garden design and old-water-town texture at a slower, more elegant pace.",
    experience:
      "Private garden interpretation, canal walks, and easy pairing with Shanghai or Hangzhou.",
    hotelMood: "A boutique garden-style stay or Shanghai base depending on route efficiency.",
    coordinates: { latitude: 31.2989, longitude: 120.5853 },
  },
  huangshan: {
    name: "Huangshan",
    image: destinationAsset.huangshanClouds,
    chapter: "Granite peaks, pine silhouettes, old villages, and weather-shaped photography.",
    highlight: "Mountain light and village texture for travelers who plan around atmosphere.",
    experience:
      "Scenic viewpoints, cable-car planning, village walks, and flexible weather decisions.",
    hotelMood: "A mountain or nearby village stay selected around sunrise ambition and comfort.",
    coordinates: { latitude: 30.1324, longitude: 118.1664 },
  },
  zhangjiajie: {
    name: "Zhangjiajie",
    image: destinationAsset.zhangjiajieNationalForest,
    chapter: "Sandstone pillars, big viewpoints, glass bridges, and dramatic nature.",
    highlight: "Avatar-like peaks with private timing to reduce crowd and transfer fatigue.",
    experience:
      "National forest viewpoints, cableways, scenic walks, and photography-aware routing.",
    hotelMood: "A convenient scenic-area hotel that protects early starts and rest windows.",
    coordinates: { latitude: 29.1171, longitude: 110.4792 },
  },
  fenghuang: {
    name: "Fenghuang",
    image: destinationAsset.zhangjiajieForest,
    chapter: "Riverside old-town atmosphere after Zhangjiajie's mountain drama.",
    highlight: "A softer old-town chapter that balances the route after high-impact scenery.",
    experience:
      "Riverside walks, evening light, minority-culture texture, and slower photography moments.",
    hotelMood: "A character stay near the river, selected carefully for comfort and noise control.",
    coordinates: { latitude: 27.9483, longitude: 109.5996 },
  },
  jiuzhaigou: {
    name: "Jiuzhaigou",
    image: destinationAsset.jiuzhaigouValley,
    chapter: "Turquoise lakes, forests, waterfalls, and mountain color.",
    highlight: "China's clearest alpine-lake scenery, paced around altitude and park logistics.",
    experience:
      "Scenic valley touring with careful timing, rest, oxygen awareness, and photo pauses.",
    hotelMood: "A comfortable mountain-area stay chosen for recovery after scenic days.",
    coordinates: { latitude: 33.252, longitude: 103.918 },
  },
  huanglong: {
    name: "Huanglong",
    image: destinationAsset.huanglongPools,
    chapter: "Mineral pools, mountain scenery, and altitude-aware scenic planning.",
    highlight: "A striking mountain add-on when conditions and traveler comfort make sense.",
    experience:
      "Private transfer timing, altitude-aware walking, and flexible sequencing with Jiuzhaigou.",
    hotelMood: "A Jiuzhaigou or nearby base selected to reduce altitude and transfer strain.",
    coordinates: { latitude: 32.7456, longitude: 103.8286 },
  },
  yunnan: {
    name: "Yunnan",
    image: destinationAsset.yunnanOldTown,
    chapter: "Old towns, mountain horizons, minority culture, and a slower southwest mood.",
    highlight: "A softer highland route with boutique stays and living-culture texture.",
    experience:
      "Old-town walks, village culture, mountain views, tea, and flexible altitude pacing.",
    hotelMood: "Boutique stays with character, views, and enough downtime to enjoy them.",
    coordinates: { latitude: 25.0453, longitude: 102.7097 },
  },
  dali: {
    name: "Dali",
    image: destinationAsset.daliOldTown,
    chapter: "Lake scenery, old-town ease, craft texture, and a gentle Yunnan opening.",
    highlight: "A relaxed first Yunnan chapter with scenery and cultural texture.",
    experience: "Old town, lake views, villages, craft moments, and flexible slow travel.",
    hotelMood: "A boutique lake or old-town stay with calm mornings.",
    coordinates: { latitude: 25.6065, longitude: 100.2676 },
  },
  lijiang: {
    name: "Lijiang",
    image: destinationAsset.yunnanOldTown,
    chapter: "Naxi old-town texture, mountain views, and boutique Yunnan stays.",
    highlight: "A scenic-cultural Yunnan chapter that benefits from slower, quieter timing.",
    experience: "Old-town lanes, mountain-view moments, village culture, and soft walking days.",
    hotelMood: "A character boutique stay outside the noisiest lanes.",
    coordinates: { latitude: 26.8721, longitude: 100.2296 },
  },
  "shangri-la": {
    name: "Shangri-La",
    image: destinationAsset.songzanlinMonastery,
    chapter: "Highland monasteries, meadows, Tibetan cultural texture, and big skies.",
    highlight: "A highland chapter that needs careful comfort and altitude awareness.",
    experience:
      "Monastery visits, old-town texture, meadow scenery, and slower acclimatized pacing.",
    hotelMood:
      "A warm highland stay selected for comfort, heating, and oxygen support when needed.",
    coordinates: { latitude: 27.8297, longitude: 99.7008 },
  },
  dunhuang: {
    name: "Dunhuang",
    image: destinationAsset.silkRoadDunhuang,
    chapter: "Desert edges, Buddhist cave art, and Silk Road atmosphere.",
    highlight: "Mogao Cave context and desert scenery without losing comfort across big distances.",
    experience: "Cave art interpretation, desert sunset timing, and private transfer logistics.",
    hotelMood: "A comfortable Silk Road base with easy access to caves and desert viewpoints.",
    coordinates: { latitude: 40.1421, longitude: 94.6619 },
  },
  zhangye: {
    name: "Zhangye",
    image: destinationAsset.zhangyeDanxia,
    chapter: "Rainbow mountains, desert color, and big western-China landscapes.",
    highlight: "Colorful landforms timed for better light and fewer rushed transfers.",
    experience: "Danxia viewpoints, photo timing, and long-distance logistics handled privately.",
    hotelMood: "A practical regional hotel chosen for route flow and early starts.",
    coordinates: { latitude: 38.9259, longitude: 100.4498 },
  },
  jiayuguan: {
    name: "Jiayuguan",
    image: destinationAsset.silkRoadZhangye,
    chapter: "Frontier fortress, Great Wall edge-of-empire history, and Silk Road distance.",
    highlight:
      "A western frontier chapter that explains the scale and strategy of the old Silk Road.",
    experience:
      "Fortress context, Great Wall frontier atmosphere, and privately paced long-distance logistics.",
    hotelMood: "A practical regional hotel selected for route efficiency and comfort.",
    coordinates: { latitude: 39.7726, longitude: 98.2892 },
  },
  lanzhou: {
    name: "Lanzhou",
    image: destinationAsset.xianCityWall,
    chapter: "Yellow River gateway, noodle culture, and Silk Road connection point.",
    highlight: "A practical gateway that can become a food and river chapter when paced well.",
    experience: "Yellow River texture, local noodles, and efficient onward logistics.",
    hotelMood: "A comfortable city base for rail or flight connections.",
    coordinates: { latitude: 36.0611, longitude: 103.8343 },
  },
  lhasa: {
    name: "Lhasa",
    image: destinationAsset.songzanlinMonastery,
    chapter: "Tibetan spiritual landmarks, highland light, and permit-aware private planning.",
    highlight: "A culture-heavy highland chapter paced around acclimatization and respect.",
    experience:
      "Palace and monastery context, old-city walks, and altitude-sensitive daily timing.",
    hotelMood: "A comfortable highland hotel with strong recovery and logistics support.",
    coordinates: { latitude: 29.652, longitude: 91.1721 },
  },
  nyingchi: {
    name: "Nyingchi",
    image: destinationAsset.jiuzhaigouValley,
    chapter: "Forested valleys, highland scenery, and a softer Tibetan nature chapter.",
    highlight: "A scenic counterpoint to Lhasa with valleys, mountains, and gentler visual rhythm.",
    experience:
      "Valley scenery, seasonal blossoms when possible, and flexible mountain-weather planning.",
    hotelMood: "A scenic highland stay selected for comfort and route recovery.",
    coordinates: { latitude: 29.6547, longitude: 94.3623 },
  },
  yangtze: {
    name: "Yangtze",
    image: destinationAsset.yangtzeQutangGorge,
    chapter: "River gorges, cruise rhythm, and a slower classic China chapter.",
    highlight:
      "A scenic river chapter that gives the route space between city and mountain experiences.",
    experience:
      "Gorge scenery, river viewpoints, shore excursions when suitable, and comfort-aware cruise planning.",
    hotelMood: "A river cruise cabin or riverside hotel chosen honestly by comfort tier.",
    coordinates: { latitude: 30.8258, longitude: 110.9734 },
  },
  urumqi: {
    name: "Urumqi",
    image: destinationAsset.silkRoadZhangye,
    chapter: "Xinjiang gateway logistics, markets, and big-landscape access.",
    highlight: "The practical launch point for northern or southern Xinjiang routes.",
    experience:
      "Regional museum context, market texture, and preparation for longer scenic drives.",
    hotelMood: "A comfortable gateway hotel with reliable logistics.",
    coordinates: { latitude: 43.8256, longitude: 87.6168 },
  },
  kanas: {
    name: "Kanas",
    image: destinationAsset.jiuzhaigouBrightLake,
    chapter: "Alpine lakes, forests, grasslands, and remote northern Xinjiang scenery.",
    highlight: "Big nature for travelers who accept longer drives in exchange for scale.",
    experience: "Lake viewpoints, village scenery, and flexible weather-aware photography timing.",
    hotelMood: "The best available scenic-area stay, chosen honestly around comfort tradeoffs.",
    coordinates: { latitude: 48.7, longitude: 87.0333 },
  },
  hemu: {
    name: "Hemu",
    image: destinationAsset.jiuzhaigouBrightLake,
    chapter: "Remote village scenery, forested valleys, and northern Xinjiang atmosphere.",
    highlight:
      "A village-and-landscape chapter for travelers who accept remote logistics for rare scenery.",
    experience:
      "Village viewpoints, forest roads, seasonal color, and flexible weather-aware photography.",
    hotelMood: "The best available local stay, selected with clear expectations around remoteness.",
    coordinates: { latitude: 48.5847, longitude: 87.4244 },
  },
  yining: {
    name: "Yining",
    image: destinationAsset.silkRoadZhangye,
    chapter: "Ili Valley gateway, grassland access, and big western-China skies.",
    highlight: "A softer Xinjiang gateway that connects culture, grasslands, and scenic drives.",
    experience:
      "Valley scenery, local markets, seasonal flower or grassland routes, and private transfer planning.",
    hotelMood: "A comfortable gateway hotel for onward scenic days.",
    coordinates: { latitude: 43.9771, longitude: 81.518 },
  },
  kashgar: {
    name: "Kashgar",
    image: destinationAsset.silkRoadDunhuang,
    chapter: "Oasis markets, old-city texture, and Central Asian Silk Road feeling.",
    highlight: "A deeper cultural chapter for travelers who want China beyond the classic east.",
    experience: "Old-city walks, market context, food awareness, and respectful private guiding.",
    hotelMood: "A comfortable city base for oasis culture and day trips.",
    coordinates: { latitude: 39.4704, longitude: 75.9898 },
  },
  "karakul lake": {
    name: "Karakul Lake",
    image: destinationAsset.jiuzhaigouBrightLake,
    chapter: "Mountain lake scenery on the edge of the Pamir route.",
    highlight: "A dramatic landscape day that depends on weather, road comfort, and timing.",
    experience: "High-mountain views, photo stops, and careful return logistics.",
    hotelMood:
      "Usually best handled from a comfortable Kashgar base unless route goals suggest otherwise.",
    coordinates: { latitude: 38.4426, longitude: 75.0576 },
  },
  kuqa: {
    name: "Kuqa",
    image: destinationAsset.silkRoadDunhuang,
    chapter: "Oasis culture, cave heritage, desert edges, and southern Xinjiang depth.",
    highlight: "A historically rich Silk Road stop for travelers going beyond the obvious route.",
    experience: "Cave context, market texture, old-town fragments, and desert-road logistics.",
    hotelMood: "A practical oasis-city hotel chosen for route flow and comfort.",
    coordinates: { latitude: 41.7179, longitude: 82.962 },
  },
  turpan: {
    name: "Turpan",
    image: destinationAsset.silkRoadZhangye,
    chapter: "Oasis agriculture, desert heat, ancient city ruins, and Uyghur cultural texture.",
    highlight:
      "An oasis chapter that makes Silk Road trade, water, and desert survival easier to understand.",
    experience: "Karez wells, grape valleys, ancient ruins, and heat-aware touring.",
    hotelMood: "A comfortable oasis hotel with strong air-conditioning and practical logistics.",
    coordinates: { latitude: 42.9513, longitude: 89.1895 },
  },
  "china-wide": {
    name: "China-wide",
    image: destinationAsset.greatWallJinshanling,
    chapter: "A blank-canvas route shaped around your people, season, and comfort level.",
    highlight: "A custom China arc designed from interests rather than a fixed menu.",
    experience:
      "Destination selection, pacing logic, hotel tiering, and private logistics from scratch.",
    hotelMood: "Hotels selected by route purpose, comfort level, location, and daily rhythm.",
    coordinates: { latitude: 35.8617, longitude: 104.1954 },
  },
};

function buildJourneyHighlights(
  record: CmsJourneyRecord,
  stops: string[],
  styles: TourStyle[],
): TourHighlight[] {
  const primaryStops = stops.slice(0, 4);
  const stopHighlights = primaryStops.map((stop): TourHighlight => {
    const place = getPlaceContent(stop);
    return {
      title: place.name,
      description: place.highlight,
      category: inferHighlightCategory(styles, stop),
      image: place.image,
    };
  });

  return [
    ...stopHighlights,
    {
      title: "Pacing that protects the trip",
      description:
        "The route is shaped around transfer comfort, meal timing, hotel location, and the travelers' energy, not a sightseeing checklist.",
      category: styles[0] ?? "Culture",
      image: record.image,
    },
  ].slice(0, 5);
}

function buildItineraryDays(record: CmsJourneyRecord, stops: string[]): TourItineraryDay[] {
  const dayCount = parseDurationDays(record.duration);
  const usableStops = stops.length ? stops : ["China-wide"];
  const daysPerStop = distributeDays(dayCount, usableStops.length);
  let day = 1;
  const usedItineraryImages = new Set<string>();

  return usableStops.flatMap((stop, stopIndex) => {
    const place = getPlaceContent(stop);
    const count = daysPerStop[stopIndex] ?? 1;

    return Array.from({ length: count }, (_, localIndex): TourItineraryDay => {
      const isArrival = localIndex === 0;
      const isLastLocal = localIndex === count - 1;
      const currentDay = day++;

      return {
        day: currentDay,
        title: isArrival
          ? `Arrive in ${place.name} with the pace protected`
          : isLastLocal
            ? `Go deeper into ${place.name}`
            : `${place.name} at a calmer rhythm`,
        destination: place.name,
        summary:
          localIndex === 0
            ? `${place.chapter} The day is designed to settle in, understand the place, and avoid making arrival feel like another task.`
            : `${place.experience} The guide adjusts the day around weather, energy, local timing, and what matters most to your travelers.`,
        image: selectJourneyImage(
          place.name,
          `${record.title} ${record.route} ${
            isArrival
              ? `Arrive in ${place.name} with the pace protected`
              : isLastLocal
                ? `Go deeper into ${place.name}`
                : `${place.name} at a calmer rhythm`
          } ${place.experience}`,
          usedItineraryImages,
        ),
        hotel: `${place.name} private-route hotel`,
        meals: localIndex === 0 ? ["Dinner"] : ["Breakfast"],
        transport: isArrival
          ? stopIndex === 0
            ? "Airport or rail arrival, private transfer"
            : "Private transfer, rail, or selected flight"
          : "Private vehicle and guided local touring",
        activities: [
          {
            time: isArrival ? "Arrival" : "Morning",
            title: isArrival ? `Settle into ${place.name}` : `Signature ${place.name} chapter`,
            description: isArrival
              ? `Meet your guide, check the route rhythm, and keep the first day realistic.`
              : place.experience,
          },
          {
            time: isArrival ? "Evening" : "Afternoon",
            title: isArrival ? "Easy orientation" : "Flexible private pacing",
            description: isArrival
              ? "A light first look, dinner plan, or quiet hotel evening depending on arrival time."
              : "Add depth where it matters, then leave space for rest, photography, or a better meal.",
          },
        ],
        guideNote:
          localIndex === 0
            ? "Arrival days should feel reassuring, not ambitious."
            : "Private guiding lets the day bend around light, crowds, weather, and energy.",
        coordinates: place.coordinates,
      };
    });
  });
}

function buildAccommodations(stops: string[]): TourAccommodation[] {
  return uniquePlaces(stops)
    .slice(0, 4)
    .map((stop) => {
      const place = getPlaceContent(stop);
      return {
        name: `${place.name} selected stay`,
        destination: place.name,
        description: place.hotelMood,
        roomStyle: "Private-route comfort",
        highlights: [
          "Location chosen to reduce transfer friction",
          "Comfort level can be upgraded by tier",
          "Matched to the rhythm of this route",
        ],
        image: place.image,
      };
    });
}

function buildOptionalExperiences(stops: string[], styles: TourStyle[]) {
  const primaryPlaces = uniquePlaces(stops).slice(0, 3);

  return primaryPlaces.map((stop) => {
    const place = getPlaceContent(stop);
    return {
      title: `${place.name} private upgrade`,
      description: place.experience,
      badges: [inferHighlightCategory(styles, stop), "Private"],
      image: place.image,
    };
  });
}

function buildRouteStops(stops: string[]): TourRouteStop[] {
  return stops.map((stop, index) => {
    const place = getPlaceContent(stop);
    return {
      name: place.name,
      days: `Chapter ${index + 1}`,
      description: place.chapter,
      coordinates: place.coordinates,
    };
  });
}

function buildRelatedDestinations(stops: string[]): RelatedDestination[] {
  return uniquePlaces(stops)
    .map((stop) => getPlaceContent(stop))
    .filter((place) => place.href)
    .slice(0, 3)
    .map((place) => ({
      name: place.name,
      description: place.chapter,
      image: place.image,
      href: place.href ?? "/destinations",
    }));
}

function ensureUniqueItineraryImages(
  days: TourItineraryDay[],
  record: CmsJourneyRecord,
  stops: string[],
  heroImage: TourHighlight["image"],
) {
  const used = new Set<string>([heroImage.src]);

  return days.map((day) => {
    const context = `${record.title} ${record.route} ${stops.join(" ")} ${day.title} ${day.summary} ${day.activities
      .map((activity) => `${activity.title} ${activity.description}`)
      .join(" ")}`;
    const currentImage = day.image;
    const hasRepeatedImage = used.has(currentImage.src);
    const betterImage = selectJourneyImage(day.destination, context, used);

    if (!hasRepeatedImage && imageMatchesContext(currentImage, day.destination, context)) {
      used.add(currentImage.src);
      return day;
    }

    return {
      ...day,
      image: betterImage,
    };
  });
}

function buildUniqueJourneyGallery(
  initialAssets: TourHighlight["image"][],
  itinerary: TourItineraryDay[],
  heroImage: TourHighlight["image"],
  stops: string[],
) {
  const dayImages = itinerary.map((day) => day.image);
  const placeImages = stops.flatMap((stop) => imageCandidatesForPlace(getPlaceContent(stop).name));
  const allAssets = uniqueAssets([...initialAssets, ...dayImages, ...placeImages]);
  const gallery = allAssets.filter((asset) => asset.src !== heroImage.src).slice(0, 7);

  return gallery.length >= 4 ? gallery : uniqueAssets([...gallery, ...allAssets]).slice(0, 7);
}

function selectJourneyImage(
  destination: string,
  context: string,
  usedImages: Set<string>,
): TourHighlight["image"] {
  const candidates = imageCandidatesForPlace(destination);
  const scored = candidates
    .map((asset, index) => ({
      asset,
      index,
      score:
        scoreImageCandidate(asset, destination, context) - (usedImages.has(asset.src) ? 100 : 0),
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index);
  const selected = scored[0]?.asset ?? getPlaceContent(destination).image;

  usedImages.add(selected.src);
  return selected;
}

function imageMatchesContext(image: TourHighlight["image"], destination: string, context: string) {
  const candidates = imageCandidatesForPlace(destination);
  const candidateSrcs = new Set(candidates.map((asset) => asset.src));

  return candidateSrcs.has(image.src) || scoreImageCandidate(image, destination, context) > 0;
}

function scoreImageCandidate(asset: TourHighlight["image"], destination: string, context: string) {
  const haystack = normalizeStop(`${destination} ${context} ${asset.src} ${asset.alt}`);
  const rules: Array<[RegExp, number]> = [
    [/forbidden|palace|imperial|beijing|jingshan/, 12],
    [/great wall|wall|jinshanling|simatai|gubei/, 16],
    [/temple|heaven/, 13],
    [/hutong|alley|neighborhood|food|tea/, 11],
    [/terracotta|warrior|xian|city wall|mosque|muslim/, 14],
    [/panda|chengdu|sichuan|leshan/, 14],
    [/hotpot|chongqing|hongya|yangtze|gorge/, 13],
    [/li river|guilin|karst|elephant/, 15],
    [/yangshuo|yulong|countryside|cycling|village/, 16],
    [/longji|longsheng|rice terrace/, 16],
    [/bund|shanghai|skyline|pudong|tower|yu garden/, 14],
    [/hangzhou|west lake|longjing|tea/, 15],
    [/suzhou|garden|canal/, 14],
    [/huangshan|yellow mountain|cloud/, 15],
    [/zhangjiajie|avatar|tianmen|glass bridge|fenghuang/, 15],
    [/jiuzhaigou|huanglong|lake|valley|pool/, 15],
    [/dali|lijiang|yunnan|shangri-la|songzanlin|meili/, 15],
    [/dunhuang|crescent|mogao|desert|silk road/, 16],
    [/zhangye|danxia|rainbow/, 16],
    [/lhasa|potala|tibet|nyingchi|highland/, 16],
    [/xinjiang|kanas|hemu|yining|karakul|kashgar|kuqa|turpan/, 16],
  ];

  return rules.reduce((score, [rule, weight]) => score + (rule.test(haystack) ? weight : 0), 0);
}

function imageCandidatesForPlace(destination: string): TourHighlight["image"][] {
  const key = normalizeStop(destination);
  const fallback = getPlaceContent(destination).image;
  const candidatesByPlace: Record<string, TourHighlight["image"][]> = {
    beijing: [
      destinationAsset.forbiddenCityHero,
      destinationAsset.beijingForbiddenCityWide,
      destinationAsset.templeOfHeaven,
      destinationAsset.greatWallBright,
      destinationAsset.greatWallJinshanling,
      destinationAsset.gubeiWaterTown,
      destinationAsset.simataiGubeiWaterTown,
    ],
    "great wall": [
      destinationAsset.greatWallJinshanling,
      destinationAsset.greatWallBright,
      destinationAsset.simataiGubeiWaterTown,
      destinationAsset.gubeiWaterTown,
    ],
    "xi'an": [
      destinationAsset.xianTerracotta,
      destinationAsset.xianCityWall,
      destinationAsset.xianGreatMosque,
    ],
    chengdu: [
      destinationAsset.chengduPanda,
      destinationAsset.familyChengduPanda,
      destinationAsset.kuanzhaiAlley,
      destinationAsset.chengduTeaHouse,
      destinationAsset.halalChengduPanda,
      destinationAsset.leshanGiantBuddha,
    ],
    chongqing: [destinationAsset.chongqingHongyaCave, destinationAsset.yangtzeQutangGorge],
    guilin: [
      destinationAsset.liRiverBright,
      destinationAsset.guilinRiver,
      destinationAsset.guilinElephantTrunkHill,
      destinationAsset.longjiRiceTerraces,
      destinationAsset.yangshuoCounty,
      destinationAsset.yangshuoYulongRiver,
    ],
    yangshuo: [
      destinationAsset.yangshuoYulongRiver,
      destinationAsset.yangshuoCounty,
      destinationAsset.familyYangshuoCountryside,
      destinationAsset.liRiverBright,
    ],
    longji: [
      destinationAsset.longjiRiceTerraces,
      destinationAsset.longshengRiceTerraces,
      destinationAsset.yangshuoCounty,
    ],
    shanghai: [
      destinationAsset.shanghaiSkyline,
      destinationAsset.shanghaiBund,
      destinationAsset.shanghaiTower,
      destinationAsset.yuGarden,
    ],
    hangzhou: [
      destinationAsset.westLakeSunset,
      destinationAsset.westLakeBright,
      destinationAsset.westLakeMultiGeneration,
    ],
    suzhou: [
      destinationAsset.shanghaiSuzhouGarden,
      destinationAsset.yuGarden,
      destinationAsset.westLakeBright,
    ],
    huangshan: [
      destinationAsset.huangshanClouds,
      destinationAsset.westLakeBright,
      destinationAsset.shanghaiSuzhouGarden,
    ],
    zhangjiajie: [
      destinationAsset.zhangjiajieAvatarPeaks,
      destinationAsset.zhangjiajieNationalForest,
      destinationAsset.tianmenMountain,
      destinationAsset.tianmenRoad,
      destinationAsset.zhangjiajieGlassBridge,
    ],
    fenghuang: [
      destinationAsset.tianmenMountain,
      destinationAsset.zhangjiajieForest,
      destinationAsset.zhangjiajieNationalForest,
    ],
    jiuzhaigou: [
      destinationAsset.jiuzhaigouBrightLake,
      destinationAsset.jiuzhaigouValley,
      destinationAsset.huanglongPools,
    ],
    huanglong: [
      destinationAsset.huanglongPools,
      destinationAsset.jiuzhaigouValley,
      destinationAsset.jiuzhaigouBrightLake,
    ],
    yunnan: [
      destinationAsset.yunnanOldTown,
      destinationAsset.yunnanLijiang,
      destinationAsset.daliOldTown,
      destinationAsset.songzanlinMonastery,
    ],
    dali: [
      destinationAsset.daliOldTown,
      destinationAsset.yunnanOldTown,
      destinationAsset.yunnanLijiang,
    ],
    lijiang: [
      destinationAsset.yunnanOldTown,
      destinationAsset.yunnanLijiang,
      destinationAsset.meiliSnowMountain,
    ],
    "shangri-la": [
      destinationAsset.songzanlinMonastery,
      destinationAsset.meiliSnowMountain,
      destinationAsset.yunnanOldTown,
    ],
    dunhuang: [
      destinationAsset.silkRoadDunhuang,
      destinationAsset.zhangyeDanxia,
      destinationAsset.silkRoadZhangye,
    ],
    zhangye: [
      destinationAsset.zhangyeDanxia,
      destinationAsset.silkRoadZhangye,
      destinationAsset.silkRoadDunhuang,
    ],
    jiayuguan: [
      destinationAsset.silkRoadZhangye,
      destinationAsset.silkRoadDunhuang,
      destinationAsset.zhangyeDanxia,
    ],
    lanzhou: [
      destinationAsset.silkRoadZhangye,
      destinationAsset.kashgarOldCity,
      destinationAsset.zhangyeDanxia,
    ],
    lhasa: [
      destinationAsset.lhasaPotalaPalace,
      destinationAsset.songzanlinMonastery,
      destinationAsset.meiliSnowMountain,
    ],
    nyingchi: [
      destinationAsset.lhasaPotalaPalace,
      destinationAsset.jiuzhaigouValley,
      destinationAsset.xinjiangKanasLake,
    ],
    yangtze: [
      destinationAsset.yangtzeQutangGorge,
      destinationAsset.chongqingHongyaCave,
      destinationAsset.shanghaiBund,
    ],
    urumqi: [
      destinationAsset.xinjiangKanasLake,
      destinationAsset.kashgarOldCity,
      destinationAsset.silkRoadZhangye,
    ],
    kanas: [
      destinationAsset.xinjiangKanasLake,
      destinationAsset.jiuzhaigouBrightLake,
      destinationAsset.jiuzhaigouValley,
    ],
    hemu: [
      destinationAsset.xinjiangKanasLake,
      destinationAsset.jiuzhaigouBrightLake,
      destinationAsset.meiliSnowMountain,
    ],
    yining: [
      destinationAsset.xinjiangKanasLake,
      destinationAsset.kashgarOldCity,
      destinationAsset.silkRoadZhangye,
    ],
    kashgar: [
      destinationAsset.kashgarOldCity,
      destinationAsset.silkRoadDunhuang,
      destinationAsset.xinjiangKanasLake,
    ],
    "karakul lake": [
      destinationAsset.xinjiangKanasLake,
      destinationAsset.kashgarOldCity,
      destinationAsset.jiuzhaigouBrightLake,
    ],
    kuqa: [
      destinationAsset.kashgarOldCity,
      destinationAsset.silkRoadDunhuang,
      destinationAsset.zhangyeDanxia,
    ],
    turpan: [
      destinationAsset.silkRoadZhangye,
      destinationAsset.silkRoadDunhuang,
      destinationAsset.kashgarOldCity,
    ],
    "china-wide": [
      destinationAsset.forbiddenCityHero,
      destinationAsset.greatWallJinshanling,
      destinationAsset.liRiverBright,
      destinationAsset.xinjiangKanasLake,
    ],
  };

  return uniqueAssets(candidatesByPlace[key] ?? [fallback]);
}

function buildJourneyFaqs(record: CmsJourneyRecord, styles: TourStyle[]) {
  return [
    {
      question: `Can ${record.title} be customized?`,
      answer:
        "Yes. The route is a starting proposal. Hotels, pace, guiding style, internal transport, and experience depth can all be adjusted.",
    },
    {
      question: "What hotel level does this route assume?",
      answer: `The public page keeps pricing flexible. We can quote Standard, Premium, and Luxury versions depending on season and comfort level. ${inferBudgetGuide(styles)} is a useful planning reference.`,
    },
    {
      question: "Is this route private?",
      answer:
        "Yes. China Prime DMC focuses on private, no-shopping routes with local guides and logistics shaped around the travelers.",
    },
  ];
}

function getPlaceContent(stop: string): PlaceContent {
  const key = normalizeStop(stop);

  return (
    placeContent[key] ??
    placeContent[key.replace(/^the\s+/, "")] ?? {
      ...placeContent["china-wide"],
      name: toTitle(stop),
      chapter: `${toTitle(stop)} becomes a private route chapter shaped around comfort, timing, and local context.`,
      highlight: `${toTitle(stop)} is included for its route logic, atmosphere, and fit with the travelers' interests.`,
      experience: `Explore ${toTitle(stop)} with private guiding, realistic pacing, and space for the moments that matter.`,
      hotelMood: `A suitable ${toTitle(stop)} stay selected for location, comfort, and route flow.`,
    }
  );
}

function parseRouteStops(route: string) {
  return route
    .split(",")
    .map((stop) => stop.trim())
    .filter(Boolean);
}

function parseDurationDays(duration: string) {
  const match = duration.match(/\d+/);
  if (!match) return 8;
  return Math.max(1, Math.min(Number.parseInt(match[0], 10), 14));
}

function distributeDays(totalDays: number, stopCount: number) {
  const base = Math.max(1, Math.floor(totalDays / Math.max(stopCount, 1)));
  const days = Array.from({ length: stopCount }, () => base);
  let remaining = totalDays - base * stopCount;
  let cursor = 0;

  while (remaining > 0 && days.length) {
    days[cursor % days.length] += 1;
    remaining -= 1;
    cursor += 1;
  }

  return days;
}

function uniquePlaces(stops: string[]) {
  return [...new Map(stops.map((stop) => [normalizeStop(stop), stop])).values()];
}

function uniqueAssets(assets: TourHighlight["image"][]) {
  return [...new Map(assets.map((asset) => [asset.src, asset])).values()];
}

function normalizeStop(stop: string) {
  return stop.toLowerCase().replace(/&/g, "and").replace(/\s+/g, " ").trim();
}

function toTitle(value: string) {
  return value
    .split(/\s+/)
    .map((word) => (word ? `${word[0].toUpperCase()}${word.slice(1)}` : word))
    .join(" ");
}

function inferHighlightCategory(styles: TourStyle[], stop: string): TourStyle {
  const normalized = normalizeStop(stop);
  if (
    [
      "guilin",
      "yangshuo",
      "longji",
      "zhangjiajie",
      "jiuzhaigou",
      "huanglong",
      "kanas",
      "karakul lake",
    ].includes(normalized)
  ) {
    return "Nature";
  }
  if (styles.includes("Food")) return "Food";
  if (styles.includes("Photography")) return "Photography";
  if (styles.includes("Luxury")) return "Luxury";
  if (styles.includes("Family")) return "Family";
  return "Culture";
}

function inferPace(styles: TourStyle[], duration: string) {
  if (styles.includes("Senior-friendly")) return "Gentle and comfort-led";
  if (styles.includes("Family")) return "Easy, playful, private";
  if (styles.includes("Adventure")) return "Active but privately paced";
  if (duration.includes("21")) return "Grand route, carefully spaced";
  return "Balanced private rhythm";
}

function inferSuitableFor(styles: TourStyle[]) {
  if (styles.includes("Family")) return "Families and multi-generation travelers";
  if (styles.includes("Muslim-friendly")) return "Muslim travelers and halal-aware families";
  if (styles.includes("Senior-friendly")) return "Older parents and comfort-led travelers";
  if (styles.includes("Luxury")) return "Couples, luxury travelers, and travel advisors";
  if (styles.includes("Photography")) return "Photography and nature travelers";
  return "Couples, friends, and first-time visitors";
}

function inferBudgetGuide(styles: TourStyle[]) {
  if (styles.includes("Luxury")) return "From US$600 pp/day for luxury planning";
  if (styles.includes("Family") || styles.includes("Senior-friendly"))
    return "From US$400 pp/day for premium private planning";
  return "From US$220 pp/day for standard private planning";
}

function rankCatalog<
  T extends {
    visibility: { state: string; featured: boolean; rankingScore: number; manualPin?: number };
  },
>(items: T[]) {
  return [...items]
    .filter((item) => item.visibility.state === "published" && item.visibility.featured)
    .sort(
      (a, b) =>
        (a.visibility.manualPin ?? Number.POSITIVE_INFINITY) -
          (b.visibility.manualPin ?? Number.POSITIVE_INFINITY) ||
        b.visibility.rankingScore - a.visibility.rankingScore,
    );
}

function mapExperienceCategoryToHighlight(
  category: ExperienceCategory,
): DestinationHighlight["category"] {
  switch (category) {
    case "Food":
      return "Food";
    case "Nature":
      return "Nature";
    case "Luxury":
      return "Luxury";
    case "Family":
      return "Family";
    case "Culture":
    default:
      return "Culture";
  }
}
