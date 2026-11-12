import { expect, test } from "@playwright/test";

// Give each route its own page: navigating away deliberately cancels Next.js
// preloads, which must not be confused with a visitor's failed asset load.
for (const path of [
  "/",
  "/tours",
  "/tours/china-family-tour-with-pandas-12-day-private-tour",
  "/contact",
  "/reviews",
  "/terms",
]) {
  test(`${path} loads production CSS and JavaScript without asset errors`, async ({ page }) => {
    const failures: string[] = [];
    page.on("response", (response) => {
      if (response.url().includes("/_next/static/") && response.status() >= 400) {
        failures.push(`${response.status()} ${response.url()}`);
      }
    });
    page.on("requestfailed", (request) => {
      if (request.url().includes("/_next/static/")) failures.push(request.url());
    });

    const response = await page.goto(path, { waitUntil: "load" });
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1").first()).toBeVisible();
    await expect(page.getByRole("main")).toHaveCount(1);
    expect(
      await page
        .locator('link[rel="stylesheet"]')
        .evaluateAll(
          (links) =>
            links.length > 0 && links.every((link) => Boolean((link as HTMLLinkElement).sheet)),
        ),
    ).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(
      true,
    );
    expect(failures).toEqual([]);
  });
}
