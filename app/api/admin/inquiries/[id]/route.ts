import { NextResponse } from "next/server";
import { z } from "zod";

import { supabaseRest } from "@/lib/supabase/server";

const inputSchema = z.object({
  status: z.enum(["new", "contacted", "qualified", "proposal_sent", "won", "lost"]),
});

export async function PATCH(request: Request, context: { params: Promise<{ id: string }> }) {
  const { id } = await context.params;
  if (!z.uuid().safeParse(id).success)
    return NextResponse.json({ error: "Invalid ID." }, { status: 400 });
  const parsed = inputSchema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Invalid status." }, { status: 400 });
  const rows = await supabaseRest<Array<{ id: string; status: string }>>(
    `inquiries?id=eq.${id}&select=id,status`,
    {
      role: "service",
      method: "PATCH",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify(parsed.data),
      cache: "no-store",
    },
  );
  return NextResponse.json({ ok: true, inquiry: rows[0] });
}
