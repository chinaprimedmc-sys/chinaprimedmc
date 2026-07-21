import assert from "node:assert/strict";
import test from "node:test";

process.env.ADMIN_SESSION_SECRET = "test-session-secret-that-is-longer-than-32-characters";
process.env.ADMIN_USERNAME = "admin";
process.env.ADMIN_PASSWORD = "correct-horse-battery-staple";

const session = await import("../lib/admin/session.ts");
const { inquirySchema } = await import("../lib/inquiries/schema.ts");
const { validateImageUpload } = await import("../lib/security/image-upload.ts");
const { verifyTurnstileToken } = await import("../lib/security/turnstile.ts");

test("admin sessions verify and reject tampering", async () => {
  const cookie = await session.createAdminSession("admin");
  assert.equal((await session.verifyAdminSession(cookie))?.username, "admin");
  assert.equal(await session.verifyAdminSession(`${cookie}x`), null);
});

test("admin session versions support immediate revocation", async () => {
  process.env.ADMIN_SESSION_VERSION = "1";
  const cookie = await session.createAdminSession("admin");
  process.env.ADMIN_SESSION_VERSION = "2";
  assert.equal(await session.verifyAdminSession(cookie), null);
  process.env.ADMIN_SESSION_VERSION = "1";
});

test("admin credentials require exact values", () => {
  assert.equal(session.adminCredentialsMatch("admin", "correct-horse-battery-staple"), true);
  assert.equal(session.adminCredentialsMatch("admin", "incorrect"), false);
});

test("admin configuration rejects weak production credentials", () => {
  const password = process.env.ADMIN_PASSWORD;
  const nodeEnvironment = process.env.NODE_ENV;
  process.env.NODE_ENV = "production";
  process.env.ADMIN_PASSWORD = "too-short";
  assert.equal(session.adminConfigurationIsSecure(), false);
  assert.equal(session.adminCredentialsMatch("admin", "too-short"), false);
  process.env.ADMIN_PASSWORD = password;
  assert.equal(session.adminConfigurationIsSecure(), true);
  restoreEnvironment("NODE_ENV", nodeEnvironment);
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
    turnstileToken: "test-token",
  };
  assert.equal(inquirySchema.safeParse(base).success, false);
  assert.equal(inquirySchema.safeParse({ ...base, email: "traveler@example.com" }).success, true);
  assert.equal(
    inquirySchema.safeParse({ ...base, email: "traveler@example.com", turnstileToken: "" }).success,
    false,
  );
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
    turnstileToken: "test-token",
  });
  assert.equal(result.success, false);
});

test("image upload validation uses file signatures and dimensions", () => {
  const png = new Uint8Array(24);
  png.set([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  png.set([0x49, 0x48, 0x44, 0x52], 12);
  png.set([0, 0, 0, 1], 16);
  png.set([0, 0, 0, 1], 20);

  assert.deepEqual(validateImageUpload(png, "image/png"), {
    extension: "png",
    mimeType: "image/png",
    width: 1,
    height: 1,
  });
  assert.throws(() => validateImageUpload(png, "image/jpeg"), /do not match/);
  assert.throws(() => validateImageUpload(new Uint8Array([1, 2, 3]), "image/png"));
});

test("Turnstile fails closed without production configuration", async () => {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const nodeEnvironment = process.env.NODE_ENV;
  process.env.NODE_ENV = "production";
  delete process.env.TURNSTILE_SECRET_KEY;
  assert.equal(await verifyTurnstileToken("token", "127.0.0.1"), false);
  restoreEnvironment("TURNSTILE_SECRET_KEY", secret);
  restoreEnvironment("NODE_ENV", nodeEnvironment);
});

test("Turnstile verifies action and production hostname", async () => {
  const originalFetch = globalThis.fetch;
  const originalEnvironment = {
    nodeEnvironment: process.env.NODE_ENV,
    secret: process.env.TURNSTILE_SECRET_KEY,
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  };
  process.env.NODE_ENV = "production";
  process.env.TURNSTILE_SECRET_KEY = "test-secret";
  process.env.NEXT_PUBLIC_SITE_URL = "https://www.chinaprimedmc.com";

  globalThis.fetch = async () =>
    new Response(
      JSON.stringify({
        success: true,
        action: "submit-inquiry",
        hostname: "www.chinaprimedmc.com",
      }),
      { status: 200 },
    );
  assert.equal(await verifyTurnstileToken("token", "127.0.0.1"), true);
  assert.equal(await verifyTurnstileToken("token", "127.0.0.1", "www.chinaprimedmc.com"), true);
  assert.equal(await verifyTurnstileToken("token", "127.0.0.1", "attacker.example"), false);

  globalThis.fetch = async () =>
    new Response(
      JSON.stringify({ success: true, action: "wrong-action", hostname: "attacker.example" }),
      { status: 200 },
    );
  assert.equal(await verifyTurnstileToken("token", "127.0.0.1"), false);

  globalThis.fetch = originalFetch;
  restoreEnvironment("NODE_ENV", originalEnvironment.nodeEnvironment);
  restoreEnvironment("TURNSTILE_SECRET_KEY", originalEnvironment.secret);
  restoreEnvironment("NEXT_PUBLIC_SITE_URL", originalEnvironment.siteUrl);
});

function restoreEnvironment(key, value) {
  if (value === undefined) delete process.env[key];
  else process.env[key] = value;
}
