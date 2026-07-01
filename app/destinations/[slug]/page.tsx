import { permanentRedirect } from "next/navigation";

type LegacyDestinationPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function LegacyDestinationPage({ params }: LegacyDestinationPageProps) {
  const { slug } = await params;

  permanentRedirect(`/destination/${slug}`);
}
