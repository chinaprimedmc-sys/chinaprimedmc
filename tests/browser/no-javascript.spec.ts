import { expect, test } from "@playwright/test";

test.use({ javaScriptEnabled: false });

// HTML text can exist inside a hidden React streaming segment while visitors
// still see only skeletons. Verify the composed page with scripting disabled.
for (const path of [
  "/",
  "/tours",
  "/tours/china-family-tour-with-pandas-12-day-private-tour",
  "/journal/the-ultimate-guide-to-traveling-in-china-with-kids",
  "/china-family-tours",
  "/destinations/beijing",
]) {
  test(`${path} exposes readable content and navigation without JavaScript`, async ({ page }) => {
    const response = await page.goto(path, { waitUntil: "load" });
    expect(response?.status()).toBe(200);
    const main = page.getByRole("main");
    await expect(main).toHaveCount(1);
    await expect(main.locator("h1")).toBeVisible();
    // Desktop and mobile headers each include a home link; responsive CSS hides
    // one copy. Require usable navigation, not visibility of the desktop copy.
    const links = main.locator('a[href^="/"]:visible');
    expect(await links.count()).toBeGreaterThan(0);
    await expect(links.first()).toBeVisible();
    expect((await main.innerText()).trim().split(/\s+/).length).toBeGreaterThan(120);

    if (path.startsWith("/tours/")) {
      const days = main.locator("[data-day-item]");
      expect(await days.count()).toBeGreaterThan(1);
      const lastDay = days.last().locator("details");
      await lastDay.locator("summary").click();
      await expect(lastDay).toHaveAttribute("open", "");
      await expect(lastDay.locator("p").first()).toBeVisible();
    }
  });
}
