import { NextRequest, NextResponse } from "next/server";

import { readCmsDatabase, saveCmsRecord } from "@/services/cms/storage";
import { isCmsContentType, parseCmsRecord } from "@/services/cms/validation";

type CmsCollectionRouteProps = {
  params: Promise<{ type: string }>;
};

export async function GET(_request: NextRequest, { params }: CmsCollectionRouteProps) {
  const { type } = await params;

  if (!isCmsContentType(type)) {
    return NextResponse.json({ ok: false, message: "Invalid CMS content type." }, { status: 404 });
  }

  const database = await readCmsDatabase();

  return NextResponse.json({ ok: true, items: database[type], updatedAt: database.updatedAt });
}

export async function POST(request: NextRequest, { params }: CmsCollectionRouteProps) {
  const { type } = await params;

  if (!isCmsContentType(type)) {
    return NextResponse.json({ ok: false, message: "Invalid CMS content type." }, { status: 404 });
  }

  const payload = await request.json();
  const item = parseCmsRecord(type, payload);
  const result = await saveCmsRecord(type, item);

  if (!result.ok) {
    return NextResponse.json(result, { status: 400 });
  }

  return NextResponse.json(result);
}
