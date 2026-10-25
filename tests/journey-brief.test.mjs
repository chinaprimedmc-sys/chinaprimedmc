import assert from "node:assert/strict";
import test from "node:test";
import { briefPayload, exactGuestCount, validateBrief } from "../lib/inquiries/brief.ts";
import { readJourneyConfiguration } from "../lib/tours/journey-price.ts";
import {
  calculateOfferPrice,
  createJourneyOfferClaim,
  journeyOfferSummary,
} from "../lib/tours/journey-offer.ts";

test("guest ranges retain their meaning without fabricated exact counts", () => {
  for (const value of ["3-4", "5-6", "7+", "Not sure yet"])
    assert.equal(exactGuestCount(value), null);
  assert.equal(exactGuestCount("4"), 4);
  const payload = briefPayload(
    {
      name: "Guest",
      whatsapp: "+447700900000",
    },
    { guests: "7+", summary: "Family trip" },
  );
  assert.equal(payload.adults, null);
  assert.match(payload.notes, /Travellers: 7\+/);
});

test("field errors identify every missing required value", () => {
  assert.deepEqual(Object.keys(validateBrief({ name: "", whatsapp: "" })), ["name", "whatsapp"]);
  assert.deepEqual(validateBrief({ name: "Jane", whatsapp: "+447700900000" }), {});
  const withoutGuestSelection = briefPayload({ name: "Jane", whatsapp: "+447700900000" });
  assert.equal(withoutGuestSelection.adults, null);
  assert.equal(withoutGuestSelection.timing, "");
});

test("journey configuration keeps the four-guest pricing basis and rejects unknown values", () => {
  assert.deepEqual(readJourneyConfiguration(new URLSearchParams("")), { guests: "4" });
  assert.deepEqual(readJourneyConfiguration(new URLSearchParams("guests=7%2B")), {
    guests: "7+",
  });
  assert.deepEqual(readJourneyConfiguration(new URLSearchParams("guests=99")), { guests: "4" });
});

test("the offer reduces the real base price without an invented reference price", () => {
  assert.deepEqual(calculateOfferPrice(3190, 25), {
    regularFromUsd: 3190,
    discountedFromUsd: 2392.5,
    savingsUsd: 797.5,
  });
  assert.deepEqual(calculateOfferPrice(598, 25), {
    regularFromUsd: 598,
    discountedFromUsd: 448.5,
    savingsUsd: 149.5,
  });
  for (const price of [undefined, NaN, Infinity, 0, -1])
    assert.equal(calculateOfferPrice(price, 25), null);
  for (const discount of [0, -25, 100, NaN, Infinity])
    assert.equal(calculateOfferPrice(3190, discount), null);
});

test("offer claims retain private group units and do not fabricate unpriced journeys", () => {
  const journey = {
    slug: "example",
    title: "Chengdu · 1 Day",
    href: "/tours/example",
    pricingUnit: "private-group",
    basePartySize: 4,
    cardBasis: "Private group of four",
  };
  const claim = createJourneyOfferClaim({ ...journey, fromUsd: 598 });
  assert.match(journeyOfferSummary(claim), /US\$448\.50 per private group/);
  assert.equal(claim.journey.basePartySize, 4);
  const unpriced = createJourneyOfferClaim(journey);
  assert.equal(unpriced.regularFromUsd, null);
  assert.equal(unpriced.discountedFromUsd, null);
  assert.match(journeyOfferSummary(unpriced), /Price on request/);
});
