import { expect, test, type Page } from "@playwright/test";

const formId = "944e4a41-6e38-4e00-b6ee-eb2b6846998b";
const embed = "https://js-na2.hsforms.net/forms/embed/247485719.js";

/** Provider fixture only: no request is submitted to HubSpot and no real lead is created. */
async function mockHubSpot(page: Page, initialMessage = "") {
  await page.route(embed, (route) =>
    route.fulfill({
      contentType: "application/javascript",
      body: `(() => {
      const host = document.querySelector('.hs-form-frame');
      const frame = document.createElement('iframe');
      frame.title = 'Enquiry form fixture';
      frame.srcdoc = '<label>Message<textarea aria-label="Message"></textarea></label>';
      frame.onload = () => {
        const input = frame.contentDocument.querySelector('textarea');
        input.value = ${JSON.stringify(initialMessage)};
        window.HubSpotFormsV4 = { getFormFromEvent: () => ({
          getFormFieldValues: async () => [{ name: '0-1/message', value: input.value }],
          setFieldValue: (name, value) => { input.value = value; },
          setExtraSubmissionMetadata: (metadata) => { window.__fixtureMetadata = metadata; }
        }) };
        window.dispatchEvent(new CustomEvent('hs-form-event:on-ready', { detail: { formId: '${formId}', instanceId: 'fixture' } }));
      };
      host.append(frame);
    })();`,
    }),
  );
}

function planningUrl() {
  return (
    "/start-planning?" +
    new URLSearchParams({
      journeys: JSON.stringify(["Pandas & tea", "Gentle China"]),
      preference: "Slow mornings",
    })
  );
}

test("HubSpot receives trip notes when its existing message field is available", async ({
  page,
}) => {
  await mockHubSpot(page);
  await page.goto(planningUrl());
  await expect(
    page.getByText("These notes have been added to the message field.", { exact: false }),
  ).toBeVisible();
  await expect(
    page.frameLocator(".hs-form-frame iframe").getByRole("textbox", { name: "Message" }),
  ).toHaveValue(/Pandas & tea/);
  await page.getByText("Review trip notes", { exact: true }).click();
  await expect(
    page.getByRole("textbox", { name: "Trip notes to include with your enquiry" }),
  ).toHaveValue(/Slow mornings/);
  const href = await page.getByRole("link", { name: "WhatsApp these notes" }).getAttribute("href");
  expect(new URL(href!).searchParams.get("text")).toContain("Gentle China");
});

test("prefill preserves an existing message and retains complete manual sharing options", async ({
  page,
}) => {
  await mockHubSpot(page, "Please keep my own request");
  await page.goto(planningUrl());
  await expect(page.locator('[data-hubspot-status="ready"]')).toBeVisible();
  await expect(
    page.frameLocator(".hs-form-frame iframe").getByRole("textbox", { name: "Message" }),
  ).toHaveValue("Please keep my own request");
  await page.getByText("Review trip notes", { exact: true }).click();
  await expect(page.getByRole("button", { name: "Copy trip notes" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Email these notes" })).toHaveAttribute(
    "href",
    /Slow%20mornings/,
  );
});

test("blocked HubSpot script presents a retry and direct contact without claiming success", async ({
  page,
}) => {
  await page.route(embed, (route) => route.abort());
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(planningUrl());
  await expect(page.locator('[data-hubspot-status="load-error"]')).toBeVisible();
  await expect(page.getByRole("button", { name: "Reload enquiry form" })).toBeVisible();
  await page.getByText("Review trip notes", { exact: true }).click();
  await expect(page.getByRole("link", { name: "Email these notes" })).toBeVisible();
  await expect(page.getByText("Your enquiry has been submitted.", { exact: false })).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(
    true,
  );
});

test("only this HubSpot instance's success event displays the submitted state", async ({
  page,
}) => {
  await mockHubSpot(page);
  await page.goto("/start-planning");
  await expect(page.locator('[data-hubspot-status="ready"]')).toBeVisible();
  await page.evaluate((id) => {
    window.dispatchEvent(
      new CustomEvent("hs-form-event:on-submission:success", {
        detail: { formId: id, instanceId: "another-instance" },
      }),
    );
  }, formId);
  await expect(page.locator('[data-hubspot-status="ready"]')).toBeVisible();
  await page.evaluate((id) => {
    window.dispatchEvent(
      new CustomEvent("hs-form-event:on-submission:success", {
        detail: { formId: id, instanceId: "fixture" },
      }),
    );
  }, formId);
  await expect(page.locator('[data-hubspot-status="submitted"]')).toBeVisible();
  await expect(
    page.getByText("A China specialist normally replies within 24 hours.", { exact: false }),
  ).toBeVisible();
});

for (const width of [320, 390, 430]) {
  test(`planning stays readable at ${width}px and trip notes do not block the form`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 844 });
    await mockHubSpot(page);
    await page.goto(planningUrl());
    const disclosure = page
      .locator("details")
      .filter({ has: page.getByText("Review trip notes", { exact: true }) });
    await expect(disclosure).not.toHaveAttribute("open");
    await page.getByRole("link", { name: "Tell us about your trip", exact: false }).click();
    await expect(page.locator("#planning-enquiry")).toBeInViewport();
    const frame = page.locator(".hs-form-frame iframe");
    await expect(frame).toBeAttached();
    expect((await frame.boundingBox())!.y).toBeLessThan((await disclosure.boundingBox())!.y);
    await expect(page.locator(".hs-form-frame iframe")).toBeInViewport();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(
      true,
    );
    const target = await page
      .getByRole("link", { name: "Tell us about your trip", exact: false })
      .boundingBox();
    expect(target!.height).toBeGreaterThanOrEqual(48);
    await page.getByText("Review trip notes", { exact: true }).click();
    await expect(
      page.getByRole("textbox", { name: "Trip notes to include with your enquiry" }),
    ).toBeVisible();
  });
}

for (const path of ["/about", "/company", "/about/founder"]) {
  test(`${path} fits a narrow phone with usable section navigation`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 740 });
    await page.goto(path);
    const nav = page.getByRole("navigation", { name: "About AVIORA pages" });
    await nav.scrollIntoViewIfNeeded();
    for (const link of await nav.getByRole("link").all()) {
      expect((await link.boundingBox())!.height).toBeGreaterThanOrEqual(48);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(
      true,
    );
    if (path === "/about/founder") {
      const photo = page.locator('img[src*="founder-chongqing"]');
      const box = await photo.boundingBox();
      expect(box!.width).toBeLessThanOrEqual(280);
      expect(box!.height / box!.width).toBeCloseTo(1.5, 1);
    }
  });
}

test("shared enquiry places HubSpot before supporting feedback on a phone", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await mockHubSpot(page);
  await page.goto("/contact");
  const enquiry = page.locator("[data-enquiry-inline]");
  await enquiry.scrollIntoViewIfNeeded();
  const frame = enquiry.locator(".hs-form-frame iframe");
  await expect(frame).toBeAttached();
  const evidence = enquiry.getByRole("complementary", {
    name: "Planning expectations and guest feedback",
  });
  expect((await frame.boundingBox())!.y).toBeLessThan((await evidence.boundingBox())!.y);
  expect(await enquiry.evaluate((node) => getComputedStyle(node).backgroundColor)).toBe(
    "rgb(255, 255, 255)",
  );
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(
    true,
  );
});

for (const width of [320, 390]) {
  test(`journey detail exposes price, daily controls and enquiry at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 844 });
    await mockHubSpot(page);
    await page.goto("/tours/beijing-xian-shanghai-private-10-day-tour");
    const overview = page.getByRole("region", { name: "Journey at a glance" });
    await expect(overview).toBeVisible();
    await expect(overview.getByText("Starting price", { exact: true })).toBeVisible();
    await expect(overview.getByText("From USD 3,290", { exact: true })).toBeVisible();
    const nav = page.getByRole("navigation", { name: "Journey sections" });
    await nav.getByRole("link", { name: "Daily itinerary" }).click();
    await page.getByRole("button", { name: "Collapse all days", exact: true }).click();
    await expect(page.locator("[data-day-item] details[open]")).toHaveCount(0);
    await page.getByRole("button", { name: "Expand all days", exact: true }).click();
    await expect(page.locator("[data-day-item] details[open]")).toHaveCount(10);
    await page
      .getByRole("navigation", { name: "Jump to a day" })
      .getByRole("button", { name: "Day 5", exact: true })
      .click();
    await expect(page.locator("#day-5 summary")).toBeFocused();
    await overview.getByRole("link", { name: "Ask about this journey" }).click();
    await expect(page.locator("#enquire")).toBeInViewport();
    await expect(page.locator("#enquire .hs-form-frame iframe")).toBeAttached();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(
      true,
    );
  });
}
