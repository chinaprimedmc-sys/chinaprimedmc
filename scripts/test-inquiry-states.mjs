import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_PATH || "/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const browser = await chromium.launch({ headless: true, executablePath: process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" });
try {
  const page = await browser.newPage();
  // Keep the journey-offer invitation from auto-opening mid-test.
  await page.addInitScript(() => localStorage.setItem("aviora-journey-offer-seen-v1", "1"));
  await page.route("**/challenges.cloudflare.com/**", (route) => route.abort());
  await page.goto((process.env.PREVIEW_URL || "http://127.0.0.1:3148") + "/start-planning", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1000);
  const reject = page.getByRole("button", { name: "Reject All", exact: true });
  if (await reject.isVisible()) await reject.click();
  await page.getByRole("button", { name: "Retry", exact: true }).waitFor();
  console.log("PASS blocked security script exposes retry");
  await page.evaluate(() => {
    let callbacks;
    window.turnstile = {
      render: (_container, options) => { callbacks = options; window.testVerificationReady = () => options.callback("mock-token"); return "mock-widget"; },
      reset: () => callbacks?.callback("mock-retry-token"),
      remove: () => {},
    };
  });
  await page.getByRole("button", { name: "Retry", exact: true }).click();
  await page.getByText("Preparing secure submission...", { exact: true }).waitFor();
  await page.locator('input[name="name"]').fill("Test traveller");
  await page.locator('input[name="whatsapp"]').fill("+447700900000");
  let submitted;
  let requests = 0;
  await page.route("**/api/inquiries", async (route) => {
    requests++;
    submitted = route.request().postDataJSON();
    await route.fulfill({ status: 200, contentType: "application/json", body: JSON.stringify({ success: true, ok: true }) });
  });
  await page.locator('form button[type="submit"]').click();
  assert.equal(requests, 0);
  await page.getByText(/Security verification is not ready/).waitFor();
  await page.evaluate(() => window.testVerificationReady());
  await page.getByText("Secure submission ready.", { exact: true }).waitFor();
  await page.locator('form button[type="submit"]').click();
  await page.getByRole("heading", { name: "Thank you. We have your request." }).waitFor();
  assert.equal(requests, 1);
  assert.equal(submitted.adults, null);
  assert.equal(submitted.name, "Test traveller");
  assert.equal(submitted.whatsapp, "+447700900000");
  console.log("PASS loading blocks submission, verification recovers, success gives next steps; API mocked only");
} finally { await browser.close(); }
