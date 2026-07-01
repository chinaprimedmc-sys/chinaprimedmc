import Link from "next/link";

import { AddToTripButton, FavoriteButton } from "@/features/discovery/discovery-actions";
import { OptimizedImage } from "@/components/media/optimized-image";
import { Badge } from "@/components/ui/badge";
import type { DiscoveryItem } from "@/types/discovery";

export function DiscoveryCard({ item }: { item: DiscoveryItem }) {
  const categoryIsDuplicate = item.category?.toLowerCase() === item.type;

  return (
    <article className="border-border grid overflow-hidden rounded-[1.35rem] border bg-white shadow-sm md:grid-cols-[18rem_1fr] md:rounded-[1.75rem]">
      {item.image ? (
        <Link href={item.href}>
          <OptimizedImage
            src={item.image.src}
            alt={item.image.alt}
            width={item.image.width ?? 900}
            height={item.image.height ?? 680}
            sizes="(min-width:1024px) 280px, 100vw"
            objectPosition={item.image.objectPosition}
            frameClassName="aspect-[16/10] h-full md:aspect-auto"
            className="h-full w-full transition duration-700 hover:scale-[1.035]"
          />
        </Link>
      ) : null}
      <div className="grid gap-4 p-4 md:gap-5 md:p-6">
        <div>
          <div className="mb-3 flex flex-wrap gap-2 md:mb-4">
            <Badge>{item.type}</Badge>
            {item.category && !categoryIsDuplicate ? (
              <Badge className="bg-foreground/4 text-muted">{item.category}</Badge>
            ) : null}
          </div>
          <Link href={item.href}>
            <h2 className="text-xl leading-tight font-semibold tracking-[-0.025em] md:text-3xl">
              {item.title}
            </h2>
          </Link>
          <p className="text-muted mt-2 line-clamp-3 text-sm leading-6 md:mt-3 md:line-clamp-none">
            {item.description}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <FavoriteButton item={item} />
          <AddToTripButton item={item} />
          <Link href={item.href} className="ml-auto text-sm font-semibold">
            Open
          </Link>
        </div>
      </div>
    </article>
  );
}
