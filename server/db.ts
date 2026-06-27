import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import mysql2 from "mysql2";
import { InsertUser, users, contactSubmissions, InsertContactSubmission } from "../drizzle/schema";
import { ENV } from './_core/env';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let _db: any = null;

// Parse DATABASE_URL and create a proper mysql2 pool with SSL object
function createDbConnection() {
  const rawUrl = process.env.DATABASE_URL;
  if (!rawUrl) return null;

  try {
    const parsed = new URL(rawUrl);
    const pool = mysql2.createPool({
      host: parsed.hostname,
      port: parseInt(parsed.port) || 4000,
      user: parsed.username,
      password: parsed.password,
      database: parsed.pathname.slice(1),
      ssl: { rejectUnauthorized: true },
      waitForConnections: true,
      connectionLimit: 10,
    });

    console.log('[Database] Pool created for:', parsed.hostname);
    return drizzle(pool.promise());
  } catch (error) {
    console.error('[Database] Failed to create connection pool:', error instanceof Error ? error.message : error);
    return null;
  }
}

export async function getDb() {
  if (!_db) {
    _db = createDbConnection();
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createContactSubmission(submission: InsertContactSubmission) {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available");
  }

  try {
    const result = await db.insert(contactSubmissions).values(submission);
    console.log('[Database] Contact submission saved successfully');
    return result;
  } catch (error) {
    console.error("[Database] Failed to create contact submission:", error);
    throw error;
  }
}

export async function getContactSubmissions(limit = 50, offset = 0) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get contact submissions: database not available");
    return [];
  }

  try {
    const result = await db
      .select()
      .from(contactSubmissions)
      .orderBy(desc(contactSubmissions.createdAt))
      .limit(limit)
      .offset(offset);
    return result;
  } catch (error) {
    console.error("[Database] Failed to get contact submissions:", error);
    return [];
  }
}

export async function updateContactSubmissionStatus(id: number, status: "new" | "contacted" | "archived") {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update contact submission: database not available");
    return null;
  }

  try {
    const result = await db
      .update(contactSubmissions)
      .set({ status, updatedAt: new Date() })
      .where(eq(contactSubmissions.id, id));
    return result;
  } catch (error) {
    console.error("[Database] Failed to update contact submission:", error);
    throw error;
  }
}
