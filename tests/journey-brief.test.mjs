import assert from "node:assert/strict";
import test from "node:test";
import { briefPayload, exactGuestCount, validateBrief } from "../lib/inquiries/brief.ts";
import { calculateJourneyPrice } from "../lib/tours/journey-price.ts";

test("guest ranges retain their meaning without fabricated exact counts", () => {
  for (const value of ["3-4", "5-6", "7+", "Not sure yet"])
    assert.equal(exactGuestCount(value), null);
  assert.equal(exactGuestCount("4"), 4);
  const payload = briefPayload({
    name: "Guest",
    whatsapp: "+447700900000",
    timing: "Next year",
    guests: "7+",
    notes: "Family trip",
  });
  assert.equal(payload.adults, null);
  assert.match(payload.notes, /Travellers: 7\+/);
});

test("field errors identify every missing required value", () => {
  assert.deepEqual(
    Object.keys(validateBrief({ name: "", whatsapp: "", timing: "", guests: "", notes: "" })),
    ["name", "whatsapp", "timing", "guests"],
  );
});

test("one price calculator preserves four-person basis and option supplements", () => {
  assert.equal(
    calculateJourneyPrice(2680, { pace: "essential", freeDayService: "open", guests: "4" }),
    2680,
  );
  assert.equal(
    calculateJourneyPrice(2680, {
      pace: "considered",
      freeDayService: "local-culture",
      guests: "4",
    }),
    3045,
  );
  assert.equal(
    calculateJourneyPrice(2680, {
      pace: "considered",
      freeDayService: "food-journey",
      guests: "4",
    }),
    3055,
  );
  assert.equal(
    calculateJourneyPrice(2680, {
      pace: "considered",
      freeDayService: "food-journey",
      guests: "7+",
    }),
    undefined,
  );
});
