import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

type SanityWebhook = {
  _type?: string;
  slug?: { current?: string } | string;
};

export async function POST(request: Request) {
  const secret = process.env.SANITY_REVALIDATE_SECRET;
  if (!secret || request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  const document = (await request.json().catch(() => null)) as SanityWebhook | null;
  if (!document?._type) {
    return NextResponse.json({ error: "Invalid Sanity payload." }, { status: 400 });
  }

  const slug = typeof document.slug === "string" ? document.slug : document.slug?.current;

  if (document._type === "journey") {
    revalidateTag("cms-journeys", "max");
    revalidatePath("/tours");
    if (slug) revalidatePath(`/tours/${slug}`);
  } else if (document._type === "blogPost") {
    revalidateTag("cms-blog-posts", "max");
    revalidatePath("/journal");
    if (slug) revalidatePath(`/journal/${slug}`);
  } else if (document._type === "destination") {
    revalidatePath("/destinations");
    if (slug) revalidatePath(`/destinations/${slug}`);
  } else if (document._type === "homePage") {
    revalidatePath("/");
  } else if (document._type === "siteSettings") {
    revalidatePath("/", "layout");
  }

  return NextResponse.json({ revalidated: true });
}
