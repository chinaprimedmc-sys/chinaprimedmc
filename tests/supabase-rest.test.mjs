import assert from "node:assert/strict";
import test from "node:test";

const { parseSupabaseResponse } = await import("../lib/supabase/response.ts");
const { isMissingAttributionColumnError } = await import(
  "../lib/inquiries/supabase-compat.ts"
);

test("accepts successful empty Supabase responses", async () => {
  const result = await parseSupabaseResponse(new Response(null, { status: 201 }));

  assert.equal(result, undefined);
});

test("parses successful Supabase JSON responses", async () => {
  const result = await parseSupabaseResponse(
    new Response(JSON.stringify([{ id: "inquiry-1" }]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }),
  );

  assert.deepEqual(result, [{ id: "inquiry-1" }]);
});

test("preserves Supabase error details", async () => {
  await assert.rejects(
    () =>
      parseSupabaseResponse(
        new Response(JSON.stringify({ message: "permission denied" }), { status: 403 }),
      ),
    /Supabase request failed \(403\).*permission denied/,
  );
});

test("recognizes missing attribution columns across Supabase error formats", () => {
  assert.equal(
    isMissingAttributionColumnError(
      new Error(
        `Supabase request failed (400): {"code":"PGRST204","message":"Could not find the 'landing_page' column of 'inquiries' in the schema cache"}`,
      ),
    ),
    true,
  );
  assert.equal(
    isMissingAttributionColumnError(
      new Error("Supabase request failed (400): column inquiries.utm_source does not exist"),
    ),
    true,
  );
  assert.equal(
    isMissingAttributionColumnError(
      new Error("Supabase request failed (400): invalid input syntax for type uuid"),
    ),
    false,
  );
});
