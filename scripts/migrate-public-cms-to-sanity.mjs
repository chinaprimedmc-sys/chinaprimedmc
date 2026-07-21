import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { readFile } from "node:fs/promises";

const projectRoot = new URL("../", import.meta.url);
const env = parseEnv(await readFile(new URL(".env.local", projectRoot), "utf8"));
const tokenPath = process.argv[2];
const skipR2Upload = process.argv.includes("--skip-r2-upload");

if (!tokenPath) throw new Error("Pass the temporary Sanity token file path.");

const sanityToken = (await readFile(tokenPath, "utf8")).trim();
const required = [
  "SUPABASE_URL",
  "SUPABASE_SERVICE_ROLE_KEY",
  "NEXT_PUBLIC_SANITY_PROJECT_ID",
  "NEXT_PUBLIC_SANITY_DATASET",
  "CLOUDFLARE_R2_ACCOUNT_ID",
  "CLOUDFLARE_R2_ACCESS_KEY_ID",
  "CLOUDFLARE_R2_SECRET_ACCESS_KEY",
  "CLOUDFLARE_R2_BUCKET",
  "NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL",
];

for (const key of required) {
  if (!env[key]) throw new Error(`Missing ${key}.`);
}

const supabaseHeaders = {
  apikey: env.SUPABASE_SERVICE_ROLE_KEY,
  Authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`,
};
const supabaseBase = `${env.SUPABASE_URL.replace(/\/$/, "")}/rest/v1`;
const publicUrl = env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL.replace(/\/$/, "");
const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${env.CLOUDFLARE_R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  forcePathStyle: true,
  credentials: {
    accessKeyId: env.CLOUDFLARE_R2_ACCESS_KEY_ID,
    secretAccessKey: env.CLOUDFLARE_R2_SECRET_ACCESS_KEY,
  },
});

const [journeys, media] = await Promise.all([
  readSupabase("cms_journeys?select=*,hero_image:cms_media_assets!cms_journeys_hero_image_id_fkey(*)&order=sort_order.asc"),
  readSupabase("cms_media_assets?select=*&order=created_at.asc"),
]);

const mediaBySource = new Map();
for (const asset of media) {
  const key = skipR2Upload
    ? `${asset.id}-${safeFileName(asset.file_name)}`
    : `cms/migrated/${asset.id}-${safeFileName(asset.file_name)}`;
  if (!skipR2Upload) {
    const sourceResponse = await fetch(asset.url);
    if (!sourceResponse.ok) throw new Error(`Could not download ${asset.file_name}.`);

    const body = Buffer.from(await sourceResponse.arrayBuffer());
    await r2.send(
      new PutObjectCommand({
        Bucket: env.CLOUDFLARE_R2_BUCKET,
        Key: key,
        Body: body,
        ContentType: asset.mime_type,
        CacheControl: "public, max-age=31536000, immutable",
      }),
    );
    process.stdout.write(`Uploaded ${asset.file_name}\n`);
  }
  mediaBySource.set(asset.url, toR2Image(asset, key));
}

const destinationNames = new Set(
  journeys.flatMap((journey) => extractDestinations(journey.route)),
);
const destinationMutations = [...destinationNames].map((name) => ({
  createIfNotExists: {
    _id: `destination-${slugify(name)}`,
    _type: "destination",
    name,
    slug: { _type: "slug", current: slugify(name) },
    region: inferRegion(name),
    headline: `Private ${name} journeys, designed around your pace.`,
    summary: `${name} can be included in a private China journey with clear local logistics, thoughtful pacing and experiences selected around the traveler rather than a fixed group schedule.`,
    recommendedStay: "2-3 nights",
    bestTime: "Spring and autumn",
    highlights: [],
    featured: ["Beijing", "Shanghai", "Chengdu", "Xi'an"].includes(name),
    sortOrder: 100,
    seoTitle: `Private ${name} Tours and Tailor-Made China Travel | AVIORA`,
    seoDescription: `Plan private ${name} travel with AVIORA, including local guides, flexible pacing, private transfers and a China itinerary shaped around your interests.`,
    noIndex: false,
  },
}));

const journeyMutations = journeys.map((journey) => ({
  createOrReplace: {
    _id: `drafts.journey-${journey.slug}`,
    _type: "journey",
    title: journey.title,
    slug: { _type: "slug", current: journey.slug },
    subtitle: journey.subtitle,
    summary: journey.summary,
    route: journey.route,
    durationLabel: journey.duration_label,
    price: journey.price,
    bestFor: journey.best_for,
    intro: journey.content?.intro || journey.summary,
    days: (journey.content?.days || []).map((day, index) => ({
      _type: "journeyDay",
      _key: `day-${index + 1}`,
      day: day.day,
      city: day.city,
      title: day.title,
      description: day.description,
    })),
    heroImage: mediaBySource.get(journey.hero_image?.url),
    gallery: uniqueImages(journey.content)
      .map((image, index) => {
        const migrated = mediaBySource.get(image.src);
        return migrated
          ? { ...migrated, _key: `gallery-${index + 1}`, alt: image.alt || migrated.alt }
          : null;
      })
      .filter(Boolean),
    styles: [journey.content?.style, journey.content?.category].filter(Boolean),
    destinations: extractDestinations(journey.route).map((name, index) => ({
      _type: "reference",
      _key: `destination-${index + 1}`,
      _ref: `destination-${slugify(name)}`,
    })),
    featured: journey.slug === "first-china-beautifully-paced",
    sortOrder: journey.sort_order,
    seoTitle: journey.seo_title,
    seoDescription: journey.seo_description,
    noIndex: false,
  },
}));

const singletonMutations = [
  {
    createOrReplace: {
      _id: "drafts.homePage",
      _type: "homePage",
      heroEyebrow: "AVIORA · Private China journeys",
      heroTitle: "China, beautifully within reach.",
      heroCopy:
        "Private China journeys with the wonder kept in, and the friction quietly designed out.",
      heroImage: mediaBySource.get(journeys[0]?.hero_image?.url),
      featuredJourneys: journeys.slice(0, 6).map((journey, index) => ({
        _type: "reference",
        _key: `journey-${index + 1}`,
        _ref: `drafts.journey-${journey.slug}`,
      })),
    },
  },
  {
    createOrReplace: {
      _id: "drafts.siteSettings",
      _type: "siteSettings",
      siteTitle: "AVIORA | China Prime DMC",
      defaultSeoDescription:
        "Plan private China journeys with AVIORA, a licensed inbound operator offering thoughtful pacing, local support and no forced shopping.",
      whatsapp: "+447985052302",
      email: "chinaprimedmc@gmail.com",
    },
  },
];

const mutations = [...destinationMutations, ...journeyMutations, ...singletonMutations];

const mutationResponse = await fetch(
  `https://${env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2025-02-19/data/mutate/${env.NEXT_PUBLIC_SANITY_DATASET}?returnIds=true`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${sanityToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ mutations }),
  },
);

if (!mutationResponse.ok) {
  throw new Error(`Sanity migration failed: ${mutationResponse.status} ${await mutationResponse.text()}`);
}

const result = await mutationResponse.json();
process.stdout.write(`Created ${result.results?.length || mutations.length} Sanity drafts.\n`);

async function readSupabase(path) {
  const response = await fetch(`${supabaseBase}/${path}`, { headers: supabaseHeaders });
  if (!response.ok) throw new Error(`Supabase read failed: ${response.status}`);
  return response.json();
}

function parseEnv(source) {
  return Object.fromEntries(
    source
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter((line) => line && !line.startsWith("#"))
      .map((line) => {
        const separator = line.indexOf("=");
        return [line.slice(0, separator), line.slice(separator + 1)];
      }),
  );
}

function safeFileName(value) {
  return value.toLowerCase().replace(/[^a-z0-9._-]+/g, "-");
}

function toR2Image(asset, key) {
  return {
    _type: "r2Image",
    url: `${publicUrl}/${key}`,
    key,
    alt: asset.alt_text,
    objectPosition: asset.object_position || "50% 50%",
    width: asset.width,
    height: asset.height,
    mimeType: asset.mime_type,
    sizeBytes: asset.size_bytes,
  };
}

function uniqueImages(content = {}) {
  const images = [
    ...(content.heroImages || []),
    ...(content.mobileHeroImages || []),
    ...(content.moments || []).map((moment) => moment.image),
  ].filter((image) => image?.src);
  return [...new Map(images.map((image) => [image.src, image])).values()];
}

function extractDestinations(route) {
  return route
    .split(/[·•,|→&]/)
    .map((name) => name.trim())
    .filter(Boolean)
    .map((name) => name.replace(/^Xi’an$/i, "Xi'an"));
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function inferRegion(name) {
  if (["Chengdu", "Yunnan", "Guilin"].includes(name)) return "Southwest China";
  if (["Shanghai", "Suzhou", "Hangzhou"].includes(name)) return "East China";
  if (["Xi'an", "Dunhuang", "Kashgar"].includes(name)) return "Northwest China";
  return "North China";
}
