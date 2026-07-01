import { permanentRedirect } from "next/navigation";

type LegacyTourPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyTourPage({ params }: LegacyTourPageProps) {
  const { slug } = await params;

  permanentRedirect(`/journey/${slug}`);
}
