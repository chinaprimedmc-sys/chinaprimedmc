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
  imageRatio?: "standard" | "landscape";
  className?: string;
  eager?: boolean;
};

export function BlogCard({
  title,
  excerpt,
  href,
  image,
  category,
  date,
  variant = "medium",
  imageRatio = "standard",
  className,
  eager = false,
}: BlogCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group ring-border grid overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 transition-[transform,box-shadow] duration-[var(--motion-duration-enter)] ease-[var(--motion-ease-out)] hover:-translate-y-1.5 hover:shadow-[0_28px_80px_rgba(43,42,37,0.14)] active:-translate-y-0.5 active:shadow-[0_18px_48px_rgba(43,42,37,0.1)] motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        variant === "featured" && "md:grid-cols-2",
        className,
      )}
    >
      {image ? (
        <div className="relative overflow-hidden">
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            width={image.width ?? 900}
            height={image.height ?? 680}
            loading={eager ? "eager" : "lazy"}
            sizes="(min-width:1024px) 33vw, 100vw"
            frameClassName={cn(
              imageRatio === "landscape" ? "aspect-video" : "aspect-[4/3]",
              variant === "featured" && "md:h-full md:aspect-auto",
            )}
            className="h-full w-full transition-transform duration-[var(--motion-duration-enter)] ease-[var(--motion-ease-out)] group-hover:scale-[1.04] group-active:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/24 via-black/6 to-transparent opacity-0 transition-opacity duration-[var(--motion-duration-enter)] ease-[var(--motion-ease-out)] group-hover:opacity-100 group-active:opacity-60 motion-reduce:transition-none" />
        </div>
      ) : null}
      <div className="grid content-between gap-6 p-5 transition-transform duration-[var(--motion-duration-enter)] ease-[var(--motion-ease-out)] group-hover:-translate-y-1.5 group-active:-translate-y-0.5 motion-reduce:transform-none motion-reduce:transition-none md:p-6">
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
