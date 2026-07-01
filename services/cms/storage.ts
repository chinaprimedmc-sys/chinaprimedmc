import { promises as fs } from "node:fs";
import path from "node:path";

import { createDefaultCmsDatabase } from "@/services/cms/defaults";
import type { CmsContentType, CmsDatabase, CmsRecord, CmsSaveResult } from "@/types/cms";

const cmsKey = "china-prime-dmc-cms-v1";
const localCmsPath = path.join(process.cwd(), ".cms", "cms-data.json");

type KvResponse<T> = {
  result?: T;
  error?: string;
};

function hasKvStorage() {
  return Boolean(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

function collectionForType(database: CmsDatabase, type: CmsContentType) {
  return database[type];
}

function storageMode(): "file" | "kv" {
  return hasKvStorage() ? "kv" : "file";
}

function isReadOnlyProductionRuntime() {
  return process.env.VERCEL === "1" || process.env.NODE_ENV === "production";
}

export async function readCmsDatabase(): Promise<CmsDatabase> {
  if (hasKvStorage()) {
    return readKvDatabase();
  }

  if (isReadOnlyProductionRuntime()) {
    return createDefaultCmsDatabase();
  }

  return readFileDatabase();
}

export async function saveCmsRecord(type: CmsContentType, item: CmsRecord): Promise<CmsSaveResult> {
  if (!hasKvStorage() && isReadOnlyProductionRuntime()) {
    return {
      ok: false,
      message:
        "Production CMS storage is not configured. Please add KV_REST_API_URL and KV_REST_API_TOKEN in Vercel, then redeploy.",
    };
  }

  const expectedType = type.slice(0, -1);

  if (item.type !== expectedType) {
    return { ok: false, message: `Content type mismatch. Expected ${expectedType}.` };
  }

  const database = await readCmsDatabase();
  const collection = collectionForType(database, type) as CmsRecord[];
  const nextItem = { ...item, updatedAt: new Date().toISOString() };
  const existingIndex = collection.findIndex((entry) => entry.slug === nextItem.slug);

  if (existingIndex === -1) {
    collection.push(nextItem);
  } else {
    collection[existingIndex] = nextItem;
  }

  database.updatedAt = new Date().toISOString();

  if (hasKvStorage()) {
    await writeKvDatabase(database);
  } else {
    await writeFileDatabase(database);
  }

  return { ok: true, item: nextItem, storage: storageMode() };
}

export async function deleteCmsRecord(type: CmsContentType, slug: string): Promise<CmsSaveResult> {
  if (!hasKvStorage() && isReadOnlyProductionRuntime()) {
    return {
      ok: false,
      message:
        "Production CMS storage is not configured. Please add KV_REST_API_URL and KV_REST_API_TOKEN in Vercel, then redeploy.",
    };
  }

  const database = await readCmsDatabase();
  const collection = collectionForType(database, type) as CmsRecord[];
  const existingIndex = collection.findIndex((entry) => entry.slug === slug);

  if (existingIndex === -1) {
    return { ok: false, message: "Content item not found." };
  }

  const [removed] = collection.splice(existingIndex, 1);
  database.updatedAt = new Date().toISOString();

  if (hasKvStorage()) {
    await writeKvDatabase(database);
  } else {
    await writeFileDatabase(database);
  }

  return { ok: true, item: removed, storage: storageMode() };
}

async function readFileDatabase(): Promise<CmsDatabase> {
  try {
    const raw = await fs.readFile(localCmsPath, "utf8");
    return normalizeDatabase(JSON.parse(raw));
  } catch {
    const database = createDefaultCmsDatabase();
    await writeFileDatabase(database);
    return database;
  }
}

async function writeFileDatabase(database: CmsDatabase) {
  await fs.mkdir(path.dirname(localCmsPath), { recursive: true });
  await fs.writeFile(localCmsPath, `${JSON.stringify(database, null, 2)}\n`, "utf8");
}

async function readKvDatabase(): Promise<CmsDatabase> {
  const response = await fetch(`${process.env.KV_REST_API_URL}/get/${cmsKey}`, {
    headers: {
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Unable to read CMS database from KV.");
  }

  const data = (await response.json()) as KvResponse<string | CmsDatabase | null>;

  if (!data.result) {
    const database = createDefaultCmsDatabase();
    await writeKvDatabase(database);
    return database;
  }

  return normalizeDatabase(typeof data.result === "string" ? JSON.parse(data.result) : data.result);
}

async function writeKvDatabase(database: CmsDatabase) {
  const response = await fetch(`${process.env.KV_REST_API_URL}/set/${cmsKey}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.KV_REST_API_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(JSON.stringify(database)),
  });

  if (!response.ok) {
    throw new Error("Unable to write CMS database to KV.");
  }
}

function normalizeDatabase(value: unknown): CmsDatabase {
  const defaults = createDefaultCmsDatabase();

  if (!value || typeof value !== "object") {
    return defaults;
  }

  const maybe = value as Partial<CmsDatabase>;

  return {
    version: 1,
    updatedAt: typeof maybe.updatedAt === "string" ? maybe.updatedAt : defaults.updatedAt,
    destinations: Array.isArray(maybe.destinations) ? maybe.destinations : defaults.destinations,
    experiences: Array.isArray(maybe.experiences) ? maybe.experiences : defaults.experiences,
    journeys: Array.isArray(maybe.journeys) ? maybe.journeys : defaults.journeys,
  };
}
