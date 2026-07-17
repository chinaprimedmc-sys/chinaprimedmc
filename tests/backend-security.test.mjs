import assert from "node:assert/strict";
import test from "node:test";

process.env.ADMIN_SESSION_SECRET = "test-session-secret-that-is-longer-than-32-characters";
process.env.ADMIN_USERNAME = "admin";
process.env.ADMIN_PASSWORD = "correct-horse-battery-staple";

const session = await import("../lib/admin/session.ts");
const { inquirySchema } = await import("../lib/inquiries/schema.ts");

test("admin sessions verify and reject tampering", async () => {
  const cookie = await session.createAdminSession("admin");
  assert.equal((await session.verifyAdminSession(cookie))?.username, "admin");
  assert.equal(await session.verifyAdminSession(`${cookie}x`), null);
});

test("admin credentials require exact values", () => {
  assert.equal(session.adminCredentialsMatch("admin", "correct-horse-battery-staple"), true);
  assert.equal(session.adminCredentialsMatch("admin", "incorrect"), false);
});

test("inquiry validation requires selected contact details", () => {
  const base = {
    sourcePage: "/start-planning",
    travelerType: "couple",
    adults: 2,
    children: 0,
    travelingWithSeniors: false,
    destinations: ["Beijing"],
    budgetTier: "luxury",
    styles: [],
    name: "Test Traveler",
    email: "",
    whatsapp: "",
    phone: "",
    contactMethods: ["email"],
  };
  assert.equal(inquirySchema.safeParse(base).success, false);
  assert.equal(inquirySchema.safeParse({ ...base, email: "traveler@example.com" }).success, true);
});

test("honeypot values are rejected", () => {
  const result = inquirySchema.safeParse({
    sourcePage: "/start-planning",
    travelerType: "solo",
    adults: 1,
    children: 0,
    travelingWithSeniors: false,
    destinations: [],
    budgetTier: "comfortable",
    styles: [],
    name: "Test Traveler",
    email: "traveler@example.com",
    whatsapp: "",
    phone: "",
    contactMethods: ["email"],
    website: "spam.example",
  });
  assert.equal(result.success, false);
});
