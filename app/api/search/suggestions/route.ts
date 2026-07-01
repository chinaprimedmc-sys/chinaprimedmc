import { NextRequest, NextResponse } from "next/server";

import { getDiscoveryIndex, getSmartSuggestions } from "@/content/discovery";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q") ?? "";
  const index = await getDiscoveryIndex();
  const suggestions = getSmartSuggestions(index, query).slice(0, 6);

  return NextResponse.json({ ok: true, suggestions });
}
