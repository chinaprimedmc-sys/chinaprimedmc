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

const { pageConversionContext } = await import("../lib/analytics/destination-context.ts");

test("direct destination and planning visits use public identifiers", () => {
  assert.deepEqual(pageConversionContext("/destinations/guilin"), { destination_slug: "guilin" });
  assert.deepEqual(
    pageConversionContext("/start-planning", "?destination=xian&email=private@example.com"),
    { destination_slug: "xian" },
  );
});

test("a product visit retains the originating guide without analytics storage", () => {
  assert.deepEqual(
    pageConversionContext(
      "/tours/private-mutianyu-great-wall-day-tour",
      "?from_destination=beijing&message=private",
    ),
    {
      destination_slug: "beijing",
      journey_slug: "private-mutianyu-great-wall-day-tour",
    },
  );
});

test("unknown routes and arbitrary personal query values never enter analytics", () => {
  assert.deepEqual(
    pageConversionContext("/destinations/not-published", "?email=private@example.com"),
    {},
  );
  assert.deepEqual(
    pageConversionContext("/tours/not-published", "?from_destination=private@example.com"),
    {},
  );
  assert.deepEqual(pageConversionContext("/tours/private-mutianyu-great-wall-day-tour/extra"), {});
});

test("a new guide takes precedence over a previous query and no origin is invented", () => {
  assert.deepEqual(pageConversionContext("/destinations/shanghai", "?from_destination=beijing"), {
    destination_slug: "shanghai",
  });
  assert.deepEqual(pageConversionContext("/tours/private-mutianyu-great-wall-day-tour"), {
    journey_slug: "private-mutianyu-great-wall-day-tour",
  });
});

const { destinationOriginName } = await import("../lib/content/destination-origin.ts");

test("form origin requires an actual guide-to-product recommendation", () => {
  assert.equal(destinationOriginName("beijing", "private-mutianyu-great-wall-day-tour"), "Beijing");
  assert.equal(
    destinationOriginName("shanghai", "private-mutianyu-great-wall-day-tour"),
    undefined,
  );
  assert.equal(
    destinationOriginName("not-published", "private-mutianyu-great-wall-day-tour"),
    undefined,
  );
  assert.equal(
    destinationOriginName("constructor", "private-mutianyu-great-wall-day-tour"),
    undefined,
  );
  assert.equal(
    destinationOriginName(["beijing"], "private-mutianyu-great-wall-day-tour"),
    undefined,
  );
});
