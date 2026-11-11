import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import sharp from "sharp";
const tour = "/tours/china-family-tour-with-pandas-12-day-private-tour";
test("route preview is present in server HTML without client execution", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(tour);
  await expect(page.locator("[data-route-map] svg")).toBeAttached();
  await expect(page.locator("[data-route-map] svg title")).toContainText("Beijing");
  await context.close();
});
test("route map loads on demand, stays within mobile width and can close", async ({
  page,
  browserName,
}) => {
  const errors: string[] = [];
  const mapRequests: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("request", (request) => {
    if (request.url().startsWith("https://tiles.openfreemap.org/")) mapRequests.push(request.url());
  });
  await page.goto(tour);
  const map = page.locator("[data-route-map]");
  await map.scrollIntoViewIfNeeded();
  await expect(map.locator("svg")).toBeVisible();
  await expect
    .poll(() =>
      map
        .locator("svg img")
        .evaluate(
          (image) =>
            (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0,
        ),
    )
    .toBe(true);
  expect(mapRequests).toHaveLength(0);
  if (browserName === "chromium") {
    const accessibility = await new AxeBuilder({ page }).include("[data-route-map]").analyze();
    expect(accessibility.violations).toEqual([]);
  }
  await map.getByRole("button", { name: "Explore the route map" }).click();
  await expect(map.locator("[data-map-ready=true]")).toBeVisible({ timeout: 20000 });
  await expect(map.locator("svg")).toBeHidden();
  await expect(map.locator(".maplibregl-marker")).toHaveCount(4);
  await expect(map.locator(".maplibregl-marker").last()).toContainText("Shanghai");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(
    true,
  );
  await map.getByRole("button", { name: "Close interactive map" }).click();
  await expect(map.locator("[data-interactive-route-map]")).toHaveCount(0);
  expect(errors).toEqual([]);
});
test("social image metadata resolves to a complete branded JPEG", async ({ page, request }) => {
  await page.goto(tour);
  const source = await page.locator('meta[property="og:image"]').getAttribute("content");
  expect(source).toContain("/og/generated/tours-");
  const response = await request.get(new URL(source!).pathname);
  expect(response.status()).toBe(200);
  const metadata = await sharp(await response.body()).metadata();
  expect([metadata.width, metadata.height, metadata.format]).toEqual([1200, 630, "jpeg"]);
});

test("unavailable basemap preserves the local geographic overview", async ({ page }) => {
  await page.route("https://tiles.openfreemap.org/**", (route) => route.abort());
  await page.goto(tour);
  const map = page.locator("[data-route-map]");
  await map.scrollIntoViewIfNeeded();
  await map.getByRole("button", { name: "Explore the route map" }).click();
  await expect(map.getByRole("status")).toContainText("unavailable", { timeout: 20000 });
  await expect(map.locator("svg")).toBeVisible();
  await expect(map.locator("svg img")).toHaveAttribute("src", "/maps/china-geographic-context.svg");
  await map.getByRole("button", { name: "Close interactive map" }).click();
  await expect(map.getByRole("status")).toHaveCount(0);
});
