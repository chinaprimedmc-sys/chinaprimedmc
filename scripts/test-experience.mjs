import assert from "node:assert/strict";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require(
  process.env.PLAYWRIGHT_PATH ||
    "/Users/Admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright",
);
const base = process.env.PREVIEW_URL || "http://127.0.0.1:3148";
const browser = await chromium.launch({
  headless: true,
  executablePath:
    process.env.CHROME_PATH || "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  args: ["--no-sandbox"],
});
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const errors = [];
page.on("pageerror", (error) => errors.push(error.message));
async function go(path) {
  const response = await page.goto(base + path, { waitUntil: "domcontentloaded" });
  assert.equal(response.status(), 200, path);
  await page.waitForTimeout(1000);
  const reject = page.getByRole("button", { name: "Reject All", exact: true });
  if (await reject.isVisible()) await reject.click();
}
const slugs = () =>
  page
    .locator("[data-journey-slug]")
    .evaluateAll((items) => items.map((item) => item.dataset.journeySlug));
try {
  await go("/");
  const publicSlugs = await slugs();
  assert.equal(publicSlugs.length, 19);
  const filteredUrl = page.url();
  await page.locator('[data-finder="home"] header a').click();
  await page.waitForTimeout(1000);
  assert.deepEqual([...(await slugs())].sort(), [...publicSlugs].sort());
  await page.getByRole("button", { name: /^Multi-city journeys/ }).click();
  const multiSlugs = await slugs();
  assert.ok(multiSlugs.every((slug) => publicSlugs.includes(slug)));
  await page.goBack();
  await page.waitForTimeout(700);
  assert.deepEqual([...(await slugs())].sort(), [...publicSlugs].sort());
  await go("/search?type=tour");
  assert.deepEqual([...(await slugs())].sort(), [...publicSlugs].sort());
  assert.equal(await page.locator('input[type="search"]').count(), 1);
  await go("/tours");
  assert.deepEqual([...(await slugs())].sort(), [...publicSlugs].sort());
  await page.getByRole("button", { name: "Filters", exact: true }).click();
  await page.getByRole("dialog").waitFor();
  await page.keyboard.press("Escape");
  await page.waitForTimeout(250);
  assert.equal(await page.evaluate(() => document.activeElement.textContent.trim()), "Filters");
  console.log(
    "PASS filters: homepage/directory/search, refresh, history, legacy, dialog focus",
    filteredUrl,
  );

  const detail = "/tours/first-china-beautifully-paced";
  await go(detail);
  assert.ok((await page.locator("body").innerText()).includes("Beijing · Xi'an · Shanghai · 9 Days"));
  assert.ok((await page.locator("body").innerText()).includes("US$3,190"));
  await page.getByRole("button", { name: "Expand all days" }).click();
  assert.ok(await page.getByRole("button", { name: "Collapse all days" }).isVisible());
  console.log("PASS first journey detail, price, enquiry and accordion");

  await go("/tours");
  const allJourneySlugs = await slugs();
  assert.equal(allJourneySlugs.length, 19);
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const slug of allJourneySlugs) {
      await go(`/tours/${slug}`);
      const layout = await page.evaluate(() => {
        const title = document.querySelector("h1");
        const lineHeight = Number.parseFloat(getComputedStyle(title).lineHeight);
        return {
          titleLines: Math.round(title.getBoundingClientRect().height / lineHeight),
          overflow: document.documentElement.scrollWidth - innerWidth,
        };
      });
      assert.ok(layout.titleLines <= (width === 390 ? 3 : 2), `Long title: ${slug} at ${width}px`);
      assert.ok(layout.overflow <= 1, `Horizontal overflow: ${slug} at ${width}px`);
      assert.ok(await page.locator("#included details").count(), `Missing full price details: ${slug}`);
    }
  }
  console.log("PASS all 19 public journeys: title density, price detail and mobile/desktop layout");

  await page.setViewportSize({ width: 390, height: 844 });
  await go("/tours");
  assert.ok(await page.getByRole("button", { name: /Find my journey/ }).isVisible());
  await page.getByRole("button", { name: /Find my journey/ }).click();
  const firstQuestion = page.getByRole("heading", { name: "How long can you get away?" });
  assert.ok(await firstQuestion.isVisible());
  await page.getByRole("button", { name: /One day/ }).click();
  await page.waitForTimeout(180);
  assert.equal(await page.getByRole("button", { name: /One day/ }).getAttribute("aria-pressed"), "true");
  assert.ok(await firstQuestion.isVisible(), "Selected answer should remain readable before advancing");
  await page.getByRole("heading", { name: "Who’s coming with you?" }).waitFor();
  await page.getByRole("button", { name: "Previous question" }).click();
  assert.ok(await firstQuestion.isVisible());
  assert.ok(
    (await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)) <= 1,
    "Journey Match should not introduce horizontal overflow",
  );
  await page.getByRole("button", { name: "Close journey finder" }).click();
  await page.getByRole("button", { name: /Browse all 19 journeys/ }).click();
  assert.ok(await page.getByRole("button", { name: /Match my journey/ }).isVisible());
  const compactCard = await page.locator("[data-journey-slug]").first().evaluate((card) => ({
    mediaHeight: card.querySelector("a")?.getBoundingClientRect().height,
    height: card.getBoundingClientRect().height,
    text: card.innerText,
  }));
  assert.ok(compactCard.mediaHeight <= 200, "Mobile placeholder should not dominate the card");
  assert.ok(compactCard.height <= 500, "Mobile journey comparison should stay compact");
  assert.match(compactCard.text, /Per person · based on four guests/);
  await go("/");
  await page.getByRole("button", { name: "Open navigation menu" }).click();
  await page.getByRole("dialog", { name: "Site navigation" }).waitFor();
  assert.equal(await page.evaluate(() => getComputedStyle(document.body).overflow), "hidden");
  await page.keyboard.press("Escape");
  await page.waitForTimeout(250);
  assert.equal(
    await page.evaluate(() => document.activeElement.getAttribute("aria-label")),
    "Open navigation menu",
  );
  console.log("PASS mobile journey match motion, modal scroll lock and focus restoration");

  await go("/start-planning");
  await page.locator('form button[type="submit"]').click();
  assert.equal(await page.locator('form [aria-invalid="true"]').count(), 4);
  await page.waitForTimeout(150);
  assert.equal(await page.evaluate(() => document.activeElement.name), "name");
  console.log("PASS enquiry errors and first-error focus");

  for (const width of [375, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      "/",
      "/tours",
      detail,
      "/start-planning",
      "/destinations",
      "/destinations/beijing",
      "/journal",
      "/search?query=Beijing",
      "/about",
      "/contact",
      "/faq",
      "/journal/best-places-to-visit-china-first-time",
      "/reviews",
      "/china-dmc",
      "/terms",
      "/privacy",
      "/cookies",
    ]) {
      await go(path);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth + 1,
      );
      assert.equal(overflow, false, `Horizontal overflow: ${width} ${path}`);
    }
    console.log("PASS route and viewport matrix", width);
  }
  assert.deepEqual(errors, []);
} finally {
  await browser.close();
}
