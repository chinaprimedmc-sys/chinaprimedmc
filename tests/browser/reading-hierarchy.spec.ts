import { expect, test } from "@playwright/test";

for (const slug of [
  "china-family-tour-with-pandas-12-day-private-tour",
  "beijing-xian-shanghai-private-10-day-tour",
]) {
  test(`${slug} exposes the daily plan before comparisons and keeps full details accessible`, async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`/tours/${slug}`);
    const itinerary = page.locator("#itinerary");
    await expect(itinerary).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    const top = await itinerary.evaluate((node) => node.getBoundingClientRect().top + scrollY);
    // Allow font/layout differences between engines while keeping the plan
    // within roughly three and a half phone viewports (previously about six).
    expect(top).toBeLessThan(3000);
    await expect(page.locator("[data-day-item] details[open]")).toHaveCount(1);
    await expect(page.locator("#day-2 details")).toHaveAttribute("open");
    const overview = page.getByRole("region", { name: "Journey at a glance" });
    await expect(overview.getByText("Starting price", { exact: true })).toBeVisible();
    await expect(overview.locator('p[class*="mobileBasis"]')).toContainText(/two adults/i);
    await expect(
      page.getByText("Journey highlights & service notes", { exact: true }),
    ).toBeVisible();
    const comparison = page.locator("#compare-durations");
    if (await comparison.count()) {
      expect(
        await comparison.evaluate((node) => node.getBoundingClientRect().top + scrollY),
      ).toBeGreaterThan(top);
    }
    expect(
      await page.locator("#faq").evaluate((node) => node.getBoundingClientRect().top + scrollY),
    ).toBeLessThan(
      await page.locator("#enquiry").evaluate((node) => node.getBoundingClientRect().top + scrollY),
    );
    await page.getByRole("button", { name: "Expand all days", exact: true }).click();
    await expect(page.locator("[data-day-item] details[open]")).toHaveCount(
      slug.startsWith("china-family") ? 12 : 10,
    );
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(
      true,
    );
  });
}

test("destination choices precede the long guide and detailed comparisons remain accessible", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/destinations/beijing");
  const products = page.locator("#private-journeys");
  await expect(products).toBeVisible();
  expect(
    await products.evaluate((node) => node.getBoundingClientRect().top + scrollY),
  ).toBeLessThan(3000);
  const stays = page
    .locator("details")
    .filter({ has: page.locator("summary", { hasText: "Compare stays by number of nights" }) });
  await expect(stays).not.toHaveAttribute("open");
  await stays.locator("summary").click();
  await expect(stays.locator("article").first()).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Plan your Beijing trip with us", exact: true }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("heading", { name: "Plan your private Beijing tour", exact: true }),
  ).toHaveCount(1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(
    true,
  );
});

test("homepage mobile recommendations keep portrait imagery and readable unclipped titles", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto("/");
  const featured = page.locator("#featured-journeys");
  await expect(featured).toBeVisible();
  for (const title of await featured.locator("h3").all()) {
    expect(await title.evaluate((node) => node.scrollWidth <= node.clientWidth + 1)).toBe(true);
  }
  for (const photo of await featured.locator('a[class*="journeyPhoto"]').all()) {
    const box = await photo.boundingBox();
    expect(box!.height).toBeGreaterThan(box!.width);
  }
  const serviceOverview = page.locator("#about-aviora");
  await expect(serviceOverview).not.toHaveAttribute("open");
  await serviceOverview.locator("summary").click();
  await expect(
    serviceOverview.getByRole("link", { name: "Meet AVIORA China Travel" }),
  ).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(
    true,
  );
});
