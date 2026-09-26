import Link from "next/link";

import { AddToTripButton, FavoriteButton } from "@/features/discovery/discovery-actions";
import { OptimizedImage } from "@/components/media/optimized-image";
import { Badge } from "@/components/ui/badge";
import type { DiscoveryItem } from "@/types/discovery";

export function DiscoveryCard({ item }: { item: DiscoveryItem }) {
  const categoryIsDuplicate = item.category?.toLowerCase() === item.type;

  return (
    <article className="border-border flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-white">
      {item.image ? (
        <Link href={item.href}>
          <OptimizedImage
            src={item.image.src}
            alt={item.image.alt}
            width={item.image.width ?? 900}
            height={item.image.height ?? 680}
            sizes="(min-width:1024px) 280px, 100vw"
            objectPosition={item.image.objectPosition}
            frameClassName="aspect-[4/3]"
            className="h-full w-full"
          />
        </Link>
      ) : null}
      <div className="grid min-h-[12rem] gap-4 p-4 md:gap-5 md:p-6">
        <div>
          <div className="mb-3 flex flex-wrap gap-2 md:mb-4">
            <Badge>{item.type}</Badge>
            {item.category && !categoryIsDuplicate ? (
              <Badge className="bg-foreground/4 text-muted">{item.category}</Badge>
            ) : null}
          </div>
          <Link href={item.href}>
            <h2 className="line-clamp-2 text-xl leading-snug font-semibold">{item.title}</h2>
          </Link>
          <p className="text-muted mt-2 line-clamp-3 text-base leading-7">{item.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <FavoriteButton item={item} />
          <AddToTripButton item={item} />
          <Link href={item.href} className="ml-auto text-base font-semibold">
            Open
          </Link>
        </div>
      </div>
    </article>
  );
}
