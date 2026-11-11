import { ArrowRight } from "@/components/icons/symbols";
import { TrackedLink } from "@/components/cta/tracked-link";
import { OptimizedImage } from "@/components/media/optimized-image";
import type { DestinationPlanningGuide } from "@/content/destinations/planning-guides";
import type { JourneyCatalogItem } from "@/content/tours/catalog";
import { getJourneyPricePresentation } from "@/lib/tours/journey-pricing";

export function DestinationJourneyCard({
  journey,
  product,
  destinationSlug,
}: {
  journey: JourneyCatalogItem;
  product: DestinationPlanningGuide["products"][number];
  destinationSlug: string;
}) {
  const price = getJourneyPricePresentation(journey);
  const comparisons = [
    { label: "Best for", value: product.comparison.bestFor },
    { label: "Time at this stop", value: product.comparison.localPlan },
    { label: "What to know", value: product.comparison.importantChoice },
  ];

  return (
    <article className="overflow-hidden rounded-[1.25rem] border border-black/10">
      {journey.visualStatus !== "pending" ? (
        <div className="relative aspect-[16/7] overflow-hidden">
          <OptimizedImage
            src={journey.image.src}
            alt={journey.image.alt}
            fill
            sizes="(min-width:768px) 45vw, 100vw"
            frameClassName="absolute inset-0 h-full w-full"
            className="object-cover"
            style={{ objectPosition: journey.image.objectPosition }}
          />
        </div>
      ) : null}
      <div className="p-6">
        <p className="text-xs font-semibold text-[var(--color-muted)] uppercase">
          Total trip length: {journey.durationLabel}
        </p>
        <h3 className="mt-3 text-xl font-semibold">{journey.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[var(--color-copy)]">{journey.routeLabel}</p>
        <dl className="mt-5 divide-y divide-black/8 border-y border-black/8">
          {comparisons.map((item) => (
            <div key={item.label} className="py-4">
              <dt className="text-sm font-semibold">{item.label}</dt>
              <dd className="mt-2 leading-7 text-[var(--color-copy)]">{item.value}</dd>
            </div>
          ))}
        </dl>
        <p
          className="mt-5 text-sm leading-6 text-[var(--color-copy)]"
          aria-label={price.accessibleText}
        >
          {price.displayText}
        </p>
        <details className="mt-4 text-sm leading-6 text-[var(--color-copy)]">
          <summary className="cursor-pointer font-semibold">Why choose this route?</summary>
          <p className="mt-3">{product.reason}</p>
        </details>
        <TrackedLink
          href={`${journey.href}?from_destination=${encodeURIComponent(destinationSlug)}`}
          trackingLabel={product.label}
          trackingPlacement={`destination-${destinationSlug}-products`}
          journeySlug={journey.slug}
          className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold underline underline-offset-4"
        >
          {product.label}
          <ArrowRight className="size-4 shrink-0" />
        </TrackedLink>
      </div>
    </article>
  );
}
