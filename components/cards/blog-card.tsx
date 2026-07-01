import Link from "next/link";

import { OptimizedImage } from "@/components/media/optimized-image";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";
import type { ComponentVariant, MediaAsset } from "@/types/component-library";

type BlogCardProps = {
  title: string;
  excerpt: string;
  href: string;
  image?: MediaAsset;
  category?: string;
  date?: string;
  variant?: ComponentVariant;
  className?: string;
};

export function BlogCard({
  title,
  excerpt,
  href,
  image,
  category,
  date,
  variant = "medium",
  className,
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group ring-border grid overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 transition hover:-translate-y-1 hover:shadow-xl",
        variant === "featured" && "md:grid-cols-2",
        className,
      )}
    >
      {image ? (
        <OptimizedImage
          src={image.src}
          alt={image.alt}
          width={image.width ?? 900}
          height={image.height ?? 680}
          sizes="(min-width:1024px) 33vw, 100vw"
          frameClassName="aspect-[4/3]"
          className="h-full w-full transition duration-700 group-hover:scale-[1.04]"
        />
      ) : null}
      <div className="grid content-between gap-6 p-5 md:p-6">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {category ? <Badge>{category}</Badge> : null}
            {date ? <Badge className="bg-foreground/4 text-muted">{date}</Badge> : null}
          </div>
          <h3 className="text-2xl leading-tight font-semibold tracking-[-0.02em]">{title}</h3>
          <p className="text-muted mt-3 text-sm leading-6">{excerpt}</p>
        </div>
        <span className="text-sm font-semibold">Read the guide</span>
      </div>
    </Link>
  );
}
