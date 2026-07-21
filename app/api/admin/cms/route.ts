import { NextResponse } from "next/server";

export function GET() {
  return retiredResponse();
}

export function POST() {
  return retiredResponse();
}

function retiredResponse() {
  return NextResponse.json(
    { error: "This legacy CMS endpoint has been retired. Use Sanity Studio." },
    { status: 410 },
  );
}
