import { expect, test, type Page } from "@playwright/test";

const provider = "https://plugin-code.salesmartly.com/js/project_768088_861304_1789553723.js";
const fixture = `(() => {
  const host = document.createElement('div');
  document.body.append(host);
  const root = host.attachShadow({ mode: 'open' });
  root.innerHTML = '<div id="ss-chat-wrapper"><div class="_chat_fixture" style="position:fixed;right:20px;bottom:80px;width:300px;height:300px"></div></div>';
  window.__SS_CHAT_SHADOWROOT__ = root;
  window.__chatEvents = [];
  window.ssmEvent = { track: (name) => {
    window.__chatEvents.push(name);
    root.querySelector('#ss-chat-wrapper').className = name === 'chatOpen' ? '_open_fixture' : '';
  } };
})();`;

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() =>
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
});

async function showOptions(page: Page) {
  const toggle = page.getByRole("button", { name: "Talk to us", exact: true });
  if (await toggle.isVisible()) await toggle.click();
}

test("chat loads only on request and opens after the provider is ready", async ({ page }) => {
  let requests = 0;
  await page.route(provider, (route) => {
    requests += 1;
    return route.fulfill({ contentType: "application/javascript", body: fixture });
  });
  await page.goto("/tours");
  await showOptions(page);
  const chat = page.getByRole("button", { name: "Chat now", exact: true });
  await expect(chat).toBeVisible();
  expect(requests).toBe(0);
  await chat.click();
  await expect
    .poll(() =>
      page.evaluate(() => (window as unknown as { __chatEvents?: string[] }).__chatEvents),
    )
    .toEqual(["chatOpen"]);
  expect(requests).toBe(1);
});

test("a blocked chat provider offers WhatsApp and can retry", async ({ page }) => {
  let requests = 0;
  await page.route(provider, (route) => {
    requests += 1;
    return requests === 1
      ? route.abort()
      : route.fulfill({ contentType: "application/javascript", body: fixture });
  });
  await page.goto("/tours");
  await showOptions(page);
  await page.getByRole("button", { name: "Chat now", exact: true }).click();
  await expect(
    page.getByText("Chat could not connect. Try again or use WhatsApp.", { exact: true }),
  ).toBeVisible();
  await expect(page.getByRole("link", { name: "WhatsApp", exact: true })).toHaveAttribute(
    "href",
    /^https:\/\/wa.me\//,
  );
  await page.getByRole("button", { name: "Chat now", exact: true }).click();
  await expect
    .poll(() =>
      page.evaluate(() => (window as unknown as { __chatEvents?: string[] }).__chatEvents),
    )
    .toEqual(["chatOpen"]);
  expect(requests).toBe(2);
});
