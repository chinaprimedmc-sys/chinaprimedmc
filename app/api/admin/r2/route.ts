import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ error: "该上传接口已升级，请刷新后台后重试。" }, { status: 410 });
}
