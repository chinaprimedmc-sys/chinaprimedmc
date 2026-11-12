import { expect, test } from "@playwright/test";

const flagship = "/tours/beijing-xian-shanghai-private-10-day-tour";
const family = "/tours/china-family-tour-with-pandas-12-day-private-tour";

test("decision summary is server-rendered and service specifications use native disclosure", async ({
  browser,
  page,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto(flagship);
    const summary = page.locator("[data-decision-summary]");
    // Next streams this dynamic route behind its loading boundary. Check SSR
    // presence here; visibility and native disclosure are checked after navigation below.
    await expect(summary.getByText("Best suited to", { exact: true })).toBeAttached();
    await expect(summary.locator('nav[aria-label="Journey service scope"]')).toBeAttached();
    await expect(
      summary.getByRole("link", { name: "See all inclusions", includeHidden: true }),
    ).toHaveAttribute("href", "#included");
  } finally {
    await context.close();
  }
  await page.goto(flagship);
  await expect(page.locator("[data-decision-summary]")).toBeVisible();
  const specification = page.locator("#tour-details details");
  await expect(specification).not.toHaveAttribute("open");
  await specification.locator("summary").click();
  await expect(specification).toHaveAttribute("open", "");
  await expect(specification.locator("dd").first()).toBeVisible();
});

test("mobile route stays compact with readable numbered stops and honest guest sources", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto(family);
  const map = page.locator("[data-route-map]");
  await map.scrollIntoViewIfNeeded();
  const stage = map.locator("[data-expanded]").or(map.locator('div[class*="stage"]'));
  const box = await stage.boundingBox();
  expect(box!.height / box!.width).toBeCloseTo(330 / 640, 1);
  const stops = map.getByRole("list", { name: "Route stops in itinerary order" });
  await expect(stops.getByRole("listitem")).toHaveCount(4);
  for (const city of ["Beijing", "Xi'an", "Chengdu", "Shanghai"]) {
    await expect(stops.getByText(city, { exact: true })).toBeVisible();
  }
  await expect(
    page
      .getByText(
        "From feedback published on AVIORA’s website, about our service across different journeys.",
      )
      .first(),
  ).toBeAttached();
  const records = page.getByRole("complementary", {
    name: "Check the service behind the itinerary",
  });
  await expect(
    records.getByRole("link", { name: "Operating company & licensing details" }),
  ).toHaveAttribute("href", "/company");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(
    true,
  );
});

test("day tours use their own service scope and retain a direct daily-plan link", async ({
  page,
}) => {
  await page.goto("/tours/private-mutianyu-great-wall-day-tour");
  const summary = page.locator("[data-decision-summary]");
  await expect(summary).toBeVisible();
  await expect(
    summary.getByRole("link", { name: /Review the daily activities|See walking estimates by day/ }),
  ).toHaveAttribute("href", "#itinerary");
  await expect(summary.getByRole("link", { name: "See all exclusions" })).toHaveAttribute(
    "href",
    "#included",
  );
});
