import assert from "node:assert/strict";
import test from "node:test";
import { registerHooks, stripTypeScriptTypes } from "node:module";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resolve } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
registerHooks({
  resolve(specifier, context, next) {
    let path;
    if (specifier.startsWith("@/")) path = resolve(root, specifier.slice(2));
    else if (specifier.startsWith(".") && context.parentURL?.startsWith("file:"))
      path = fileURLToPath(new URL(specifier, context.parentURL));
    if (path)
      for (const c of [path + ".ts", path + "/index.ts"])
        if (existsSync(c)) return { url: pathToFileURL(c).href, shortCircuit: true };
    return next(specifier, context);
  },
  load(url, context, next) {
    if (url.endsWith(".ts"))
      return {
        format: "module",
        source: stripTypeScriptTypes(readFileSync(fileURLToPath(url), "utf8")),
        shortCircuit: true,
      };
    return next(url, context);
  },
});

const { buildPlanningContext, planningContactLinks } =
  await import("../lib/forms/planning-context.ts");
const { attachPlanningContext, readHubSpotMessage, isCurrentHubSpotEvent } =
  await import("../lib/forms/hubspot-bridge.ts");
const { hubspotForm } = await import("../lib/hubspot.ts");

test("trip notes preserve route, destination, shortlist and matching preferences", () => {
  const summary = buildPlanningContext({
    currentJourney: { slug: "china", title: "Private China" },
    destinationName: "Xi’an",
    savedJourneys: ["Pandas", "Pandas", "Family"],
    preference: "Gentle pace",
    matchSummary: "Two adults, interested in food",
  });
  for (const text of [
    "Private China",
    "Xi’an",
    "Saved journeys: Pandas; Family",
    "Gentle pace",
    "Two adults",
  ])
    assert.ok(summary.includes(text));
  assert.equal(buildPlanningContext({}), "");
});

test("trip notes are bounded and remove control characters", () => {
  const summary = buildPlanningContext({
    savedJourneys: Array.from({ length: 100 }, (_, i) => `Route ${i}`),
    preference: "a".repeat(10000) + "\nhidden",
    matchSummary: "A\u0000B\r\nC",
  });
  assert.ok(!summary.includes("Route 8"));
  assert.ok(summary.length < 3000);
  assert.ok(!summary.includes("\u0000"));
  assert.ok(summary.includes("A B  C"));
});

test("both direct contact links carry the complete brief without breaking URL parameters", () => {
  const brief = "Journey: Xi’an & Chengdu\nPreferences: A+B? #food";
  const links = planningContactLinks(brief, "team@example.com", "+86 180 2743 8191");
  assert.equal(new URL(links.whatsapp).pathname, "/8618027438191");
  assert.ok(new URL(links.whatsapp).searchParams.get("text").endsWith(brief));
  assert.ok(new URL(links.email).searchParams.get("body").endsWith(brief));
  assert.equal(new URL(links.email).searchParams.size, 2);
});

function fakeForm(fields, options = {}) {
  let metadata;
  let writes = 0;
  return {
    async getFormFieldValues() {
      return fields.map((field) => ({ ...field }));
    },
    async setFieldValue(name, value) {
      writes++;
      if (!options.ignoreWrites) fields.find((field) => field.name === name).value = value;
    },
    setExtraSubmissionMetadata(value) {
      metadata = value;
    },
    metadata: () => metadata,
    writes: () => writes,
  };
}

test("HubSpot prefill uses an existing empty message field and verifies the result", async () => {
  for (const name of ["message", "0-1/message"]) {
    const form = fakeForm([{ name, value: "" }]);
    assert.equal(await attachPlanningContext(form, "Journey: Pandas"), true);
    assert.equal((await form.getFormFieldValues())[0].value, "Journey: Pandas");
    assert.deepEqual(form.metadata(), { aviora_planning_context: "Journey: Pandas" });
  }
});

test("prefill never overwrites visitor text or creates an unknown form field", async () => {
  for (const fields of [
    [{ name: "message", value: "My own request" }],
    [{ name: "email", value: "" }],
    [{ name: "message", value: ["unexpected"] }],
  ]) {
    const form = fakeForm(fields);
    assert.equal(await attachPlanningContext(form, "Trip notes"), false);
    assert.equal(form.writes(), 0);
  }
});

test("prefill is idempotent and does not claim success without readback", async () => {
  const existing = fakeForm([{ name: "message", value: "My request\nTrip notes" }]);
  assert.equal(await attachPlanningContext(existing, "Trip notes"), true);
  assert.equal(existing.writes(), 0);
  const ignored = fakeForm([{ name: "message", value: "" }], { ignoreWrites: true });
  assert.equal(await attachPlanningContext(ignored, "Trip notes"), false);
});

test("unsupported or failing HubSpot APIs preserve the manual fallback", async () => {
  assert.equal(await attachPlanningContext({}, "Trip notes"), false);
  assert.equal(
    await attachPlanningContext(
      {
        getFormFieldValues: async () => {
          throw new Error("Unavailable");
        },
        setFieldValue() {},
      },
      "Trip notes",
    ),
    false,
  );
  const form = fakeForm([{ name: "message", value: "" }]);
  form.setExtraSubmissionMetadata = () => {
    throw new Error("Metadata unavailable");
  };
  assert.equal(await attachPlanningContext(form, "Trip notes"), true);
});

test("legacy callbacks require the configured form, trusted origin and this iframe", () => {
  const frame = {};
  const good = {
    origin: "https://forms-na2.hsforms.com",
    source: frame,
    data: { type: "hsFormCallback", id: hubspotForm.formId, eventName: "onFormSubmitted" },
  };
  assert.equal(readHubSpotMessage(good, [frame]), "submitted");
  assert.equal(readHubSpotMessage({ ...good, source: {} }, [frame]), null);
  assert.equal(
    readHubSpotMessage({ ...good, origin: "https://hsforms.com.attacker.test" }, [frame]),
    null,
  );
  assert.equal(
    readHubSpotMessage({ ...good, origin: "http://forms-na2.hsforms.com" }, [frame]),
    null,
  );
  assert.equal(
    readHubSpotMessage({ ...good, data: { ...good.data, id: "other-form" } }, [frame]),
    null,
  );
  assert.equal(readHubSpotMessage({ ...good, source: null }, [null]), null);
});

test("a pre-submit callback cannot be mistaken for an accepted enquiry", () => {
  const frame = {};
  const event = {
    origin: "https://forms.hsforms.com",
    source: frame,
    data: { type: "hsFormCallback", id: hubspotForm.formId, eventName: "onFormSubmit" },
  };
  assert.equal(readHubSpotMessage(event, [frame]), null);
  assert.equal(
    readHubSpotMessage({ ...event, data: { ...event.data, eventName: "onFormReady" } }, [frame]),
    "ready",
  );
});

test("V4 events for other HubSpot forms are ignored", () => {
  assert.equal(isCurrentHubSpotEvent({ detail: { formId: hubspotForm.formId } }), true);
  assert.equal(isCurrentHubSpotEvent({ detail: { formId: "other-form" } }), false);
  assert.equal(isCurrentHubSpotEvent({}), false);
  assert.equal(
    isCurrentHubSpotEvent({ detail: { formId: hubspotForm.formId, instanceId: "one" } }, "one"),
    true,
  );
  assert.equal(
    isCurrentHubSpotEvent({ detail: { formId: hubspotForm.formId, instanceId: "two" } }, "one"),
    false,
  );
});
