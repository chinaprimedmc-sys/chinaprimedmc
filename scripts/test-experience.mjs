import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("@playwright/test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const base = process.env.PREVIEW_URL || "http://127.0.0.1:3148";
const tour = "/tours/china-family-tour-with-pandas-12-day-private-tour";
(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: process.env.CHROME_PATH || undefined,
  });
  try {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 1050 },
      reducedMotion: "reduce",
    });
    await context.addInitScript(() =>
      localStorage.setItem(
        "aviora-cookie-consent-v2",
        JSON.stringify({
          version: 2,
          necessary: true,
          analytics: false,
          marketing: false,
          updatedAt: new Date().toISOString(),
        }),
      ),
    );
    const page = await context.newPage(),
      errors = [],
      layouts = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(base, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    const fontSources = await page.evaluate(() => {
      const sources = { Inter: [], Newsreader: [] };
      for (const sheet of document.styleSheets) {
        let rules;
        try {
          rules = sheet.cssRules;
        } catch {
          continue; // Third-party widget stylesheets may be cross-origin.
        }
        for (const rule of rules) {
          if (rule.type !== CSSRule.FONT_FACE_RULE) continue;
          const family = rule.style.getPropertyValue("font-family").replace(/["']/g, "");
          if (family in sources) sources[family].push(rule.style.getPropertyValue("src"));
        }
      }
      return sources;
    });
    assert.ok(fontSources.Inter.length > 0 && fontSources.Newsreader.length > 0);
    assert.ok(
      fontSources.Inter.every((source) => !fontSources.Newsreader.includes(source)),
      "Body and heading families must not resolve to the same cached font file",
    );
    const routes = [
      "/",
      "/tours",
      tour,
      "/tours/beijing-xian-shanghai-private-10-day-tour",
      "/fixed-itinerary-china-tours",
      "/destinations",
      "/journal",
      "/journal/the-ultimate-guide-to-traveling-in-china-with-kids",
      "/about",
      "/faq",
      "/start-planning",
    ];
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 1050 });
      for (const path of routes) {
        const response = await page.goto(base + path, { waitUntil: "domcontentloaded" });
        assert.equal(response.status(), 200, path);
        await page.waitForTimeout(70);
        const data = await page.evaluate(() => ({
          overflow: document.documentElement.scrollWidth - innerWidth,
          icons: document.querySelectorAll("svg.site-icon").length,
          photos: [
            ...document.querySelectorAll(
              "[data-journey-slug] img, [data-journey-gallery] figure img",
            ),
          ]
            .filter((i) => i.getBoundingClientRect().height > 20)
            .map((i) => {
              const r = i.getBoundingClientRect();
              return { alt: i.alt, ratio: r.width / r.height };
            }),
          mobileActions: [
            ...document.querySelectorAll(
              "[data-mobile-action-bar], [class*=mobileSticky], [class*=stickyCta]",
            ),
          ].filter((el) => el.getBoundingClientRect().height > 0).length,
        }));
        assert.ok(data.overflow <= 1, `${path} overflows ${width} by ${data.overflow}`);
        for (const photo of data.photos)
          assert.ok(Math.abs(photo.ratio - 0.75) < 0.03, `${photo.alt} ratio ${photo.ratio}`);
        assert.equal(data.mobileActions, 0, "No mobile action bar");
        layouts.push({ width, path, ...data });
      }
    }
    await page.setViewportSize({ width: 1440, height: 1050 });
    await page.goto(base, { waitUntil: "domcontentloaded" });
    const menu = page.getByRole("button", { name: "Open Journeys menu", exact: true });
    await menu.click();
    await assertExpanded(menu, true);
    const signature = page
      .locator("header")
      .getByRole("link", { name: "Signature Journeys", exact: true });
    await signature.waitFor({ state: "visible" });
    const bounds = await signature.boundingBox();
    assert.ok(bounds.y >= 55 && bounds.x >= 0, "Desktop submenu placement");
    await page.keyboard.press("Escape");
    await assertExpanded(menu, false);
    assert.equal(await menu.evaluate((el) => document.activeElement === el), true);
    await page.setViewportSize({ width: 1024, height: 1050 });
    await page.goto(base, { waitUntil: "domcontentloaded" });
    const navBoxes = await page.locator("header a,header button").evaluateAll((els) =>
      els
        .filter((el) => {
          const r = el.getBoundingClientRect();
          return r.width > 0 && r.height > 0;
        })
        .map((el) => ({
          text: el.textContent || el.getAttribute("aria-label"),
          r: el.getBoundingClientRect().toJSON(),
        })),
    );
    for (let i = 0; i < navBoxes.length; i++)
      for (let j = i + 1; j < navBoxes.length; j++) {
        const a = navBoxes[i].r,
          b = navBoxes[j].r;
        assert.ok(
          !(
            Math.min(a.right, b.right) - Math.max(a.left, b.left) > 2 &&
            Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > 2
          ),
          `Nav overlap: ${navBoxes[i].text} / ${navBoxes[j].text}`,
        );
      }
    await page.setViewportSize({ width: 390, height: 1050 });
    await page.goto(base, { waitUntil: "domcontentloaded" });
    const mobileMenu = page.getByRole("button", { name: "Open navigation menu", exact: true });
    await mobileMenu.click();
    await page.getByRole("dialog").waitFor({ state: "visible" });
    await page.keyboard.press("Escape");
    await page.getByRole("dialog").waitFor({ state: "hidden" });
    await page.goto(base + "/tours", { waitUntil: "domcontentloaded" });
    const filters = page.getByRole("group", { name: "Type of journey", exact: true });
    await filters.getByRole("button", { name: /Signature Journeys/ }).click();
    await page.waitForTimeout(120);
    assert.ok(page.url().includes("tier=signature"));
    assert.equal(
      await filters
        .getByRole("button", { name: /Signature Journeys/ })
        .getAttribute("aria-pressed"),
      "true",
    );
    await filters.getByRole("button", { name: /^All / }).click();
    assert.equal(
      await filters.getByRole("button", { name: /^All / }).getAttribute("aria-pressed"),
      "true",
    );
    await page.goto(base + tour, { waitUntil: "domcontentloaded" });
    const gallery = page.locator("[data-journey-gallery]");
    await gallery.scrollIntoViewIfNeeded();
    const next = gallery.getByRole("button", { name: "Next photos", exact: true });
    await next.waitFor();
    await page.waitForTimeout(300);
    await next.click();
    assert.ok((await gallery.locator("[role=status]").innerText()).includes("2"));
    const viewport = gallery.locator("[aria-roledescription=carousel]");
    await viewport.focus();
    await page.keyboard.press("Home");
    await page.waitForTimeout(100);
    assert.ok((await gallery.locator("[role=status]").innerText()).includes("1"));
    const trigger = gallery.getByRole("button", { name: /Enlarge photo 1:/ });
    await trigger.click();
    const dialog = page.getByRole("dialog");
    await dialog.waitFor({ state: "visible" });
    await dialog.getByRole("button", { name: "Next photo", exact: true }).click();
    assert.ok((await dialog.innerText()).includes("2 / 8"));
    await page.screenshot({ path: "/tmp/aviora-components-viewer-mobile.png" });
    await page.keyboard.press("Escape");
    await dialog.waitFor({ state: "hidden" });
    await page.waitForFunction(
      (element) => document.activeElement === element,
      await trigger.elementHandle(),
    );
    assert.equal(
      await trigger.evaluate((el) => document.activeElement === el),
      true,
      "Viewer returns focus",
    );
    const faq = page.locator("#faq details").first();
    await faq.locator("summary").click();
    assert.equal(await faq.getAttribute("open"), "");
    await faq.locator("summary").focus();
    await page.keyboard.press("Enter");
    assert.equal(await faq.getAttribute("open"), null);
    for (const [path, name, target] of [
      ["/", "home", "#featured-journeys"],
      ["/tours", "tours", "[data-journey-slug]"],
      [tour, "gallery", "[data-journey-gallery]"],
    ]) {
      for (const width of [390, 1440]) {
        await page.setViewportSize({ width, height: 1050 });
        await page.goto(base + path, { waitUntil: "domcontentloaded" });
        await page.evaluate(() => document.fonts.ready);
        await page.locator(target).first().scrollIntoViewIfNeeded();
        await page.waitForTimeout(300);
        await page.screenshot({ path: `/tmp/aviora-components-final-${name}-${width}.png` });
      }
    }
    // Keep inline streaming scripts active, but withhold the client bundle to test native controls before hydration.
    const delayed = await browser.newContext({ viewport: { width: 390, height: 1050 } });
    await delayed.route("**/_next/static/**/*.js", (route) => route.abort());
    const fallback = await delayed.newPage();
    for (const [path, selector] of [
      ["/", "#home-faq-1"],
      [tour, "#faq details"],
      ["/faq", "details"],
    ]) {
      await fallback.goto(base + path, { waitUntil: "domcontentloaded" });
      const d = fallback.locator(selector).first();
      await d.locator("summary").click();
      assert.equal(await d.getAttribute("open"), "");
      assert.equal(await d.locator("p").isVisible(), true);
    }
    await fallback.goto(base + tour, { waitUntil: "domcontentloaded" });
    const fallbackGallery = fallback.locator(
      "[data-journey-gallery] [aria-roledescription=carousel]",
    );
    await fallbackGallery.waitFor({ state: "visible" });
    assert.equal(await fallbackGallery.getAttribute("data-ready"), null);
    assert.ok(await fallbackGallery.evaluate((el) => el.scrollWidth > el.clientWidth));
    assert.equal(await fallbackGallery.evaluate((el) => getComputedStyle(el).overflowX), "auto");
    assert.deepEqual(errors, []);
    fs.writeFileSync(
      "/tmp/aviora-components-qa-results.json",
      JSON.stringify(
        {
          base,
          layouts,
          errors,
          functionalChecks: [
            "distinct body and heading font resources",
            "desktop navigation + Escape + focus",
            "1024 navigation overlap",
            "mobile dialog + Escape",
            "URL filters",
            "gallery buttons + keyboard",
            "viewer next + Escape + focus",
            "FAQ pointer + keyboard",
            "native FAQ before hydration",
            "native photo rail before hydration",
          ],
        },
        null,
        2,
      ),
    );
    console.log(
      JSON.stringify({
        layouts: layouts.length,
        errors,
        functionalChecks: 10,
        beforeHydrationChecks: 4,
      }),
    );
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
async function assertExpanded(locator, value) {
  await locator.page().waitForTimeout(100);
  assert.equal(await locator.getAttribute("aria-expanded"), String(value));
}
