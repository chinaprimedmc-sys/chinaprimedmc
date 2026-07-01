import { NextRequest, NextResponse } from "next/server";

import { deleteCmsRecord, readCmsDatabase, saveCmsRecord } from "@/services/cms/storage";
import { isCmsContentType, parseCmsRecord } from "@/services/cms/validation";

type CmsItemRouteProps = {
  params: Promise<{ type: string; slug: string }>;
};

export async function GET(_request: NextRequest, { params }: CmsItemRouteProps) {
  const { type, slug } = await params;

  if (!isCmsContentType(type)) {
    return NextResponse.json({ ok: false, message: "Invalid CMS content type." }, { status: 404 });
  }

  const database = await readCmsDatabase();
  const item = database[type].find((entry) => entry.slug === slug);

  if (!item) {
    return NextResponse.json({ ok: false, message: "Content item not found." }, { status: 404 });
  }

  return NextResponse.json({ ok: true, item });
}

export async function PUT(request: NextRequest, { params }: CmsItemRouteProps) {
  const { type, slug } = await params;

  if (!isCmsContentType(type)) {
    return NextResponse.json({ ok: false, message: "Invalid CMS content type." }, { status: 404 });
  }

  const payload = await request.json();
  const item = parseCmsRecord(type, { ...payload, slug });
  const result = await saveCmsRecord(type, item);

  if (!result.ok) {
    return NextResponse.json(result, { status: 400 });
  }

  return NextResponse.json(result);
}

export async function DELETE(_request: NextRequest, { params }: CmsItemRouteProps) {
  const { type, slug } = await params;

  if (!isCmsContentType(type)) {
    return NextResponse.json({ ok: false, message: "Invalid CMS content type." }, { status: 404 });
  }

  const result = await deleteCmsRecord(type, slug);

  if (!result.ok) {
    return NextResponse.json(result, { status: 404 });
  }

  return NextResponse.json(result);
}
