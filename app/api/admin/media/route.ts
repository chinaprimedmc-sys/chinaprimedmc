import { NextResponse } from "next/server";

export function POST() {
  return retiredResponse();
}

export function DELETE() {
  return retiredResponse();
}

function retiredResponse() {
  return NextResponse.json(
    { error: "This legacy media endpoint has been retired. Use the R2 uploader in Sanity Studio." },
    { status: 410 },
  );
}
