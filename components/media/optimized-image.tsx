"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";

import { Skeleton } from "@/components/loading/skeleton";
import { cn } from "@/lib/utils/cn";

type OptimizedImageProps = ImageProps & {
  frameClassName?: string;
  objectPosition?: string;
  showSkeleton?: boolean;
};

export function OptimizedImage({
  className,
  frameClassName,
  alt,
  objectPosition,
  style,
  showSkeleton = true,
  onLoad,
  fetchPriority,
  loading,
  priority,
  ...props
}: OptimizedImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [loadedSrc, setLoadedSrc] = useState<ImageProps["src"] | null>(null);
  const optimizedSrc = getOptimizedLocalSrc(props.src);
  const loaded = loadedSrc === optimizedSrc;

  useEffect(() => {
    const image = imageRef.current;

    if (image?.complete && image.naturalWidth > 0) {
      setLoadedSrc(optimizedSrc);
    }
  }, [optimizedSrc]);

  return (
    <div className={cn("relative overflow-hidden bg-[var(--bg-secondary)]", frameClassName)}>
      {showSkeleton ? (
        <Skeleton
          className={cn(
            "absolute inset-0 z-0 transition-opacity duration-[var(--motion-duration-enter)] ease-[var(--motion-ease-out)] motion-reduce:transition-none",
            loaded ? "opacity-0" : "opacity-100",
          )}
          variant="media"
        />
      ) : null}
      <Image
        ref={imageRef}
        className={cn(
          "relative z-10 opacity-100 transition-opacity duration-[var(--motion-duration-enter)] ease-[var(--motion-ease-out)] motion-reduce:transition-none",
          "object-cover",
          className,
        )}
        alt={alt}
        fetchPriority={fetchPriority ?? (priority ? "high" : "auto")}
        loading={loading ?? (priority ? "eager" : "lazy")}
        onLoad={(event) => {
          setLoadedSrc(optimizedSrc);
          onLoad?.(event);
        }}
        style={{
          objectPosition,
          ...style,
        }}
        {...props}
        priority={priority}
        src={optimizedSrc}
      />
    </div>
  );
}

function getOptimizedLocalSrc(src: ImageProps["src"]): ImageProps["src"] {
  if (typeof src !== "string" || !src.startsWith("/")) return src;
  if (!/\.(?:png|jpe?g)$/i.test(src)) return src;
  return src.replace(/\.(?:png|jpe?g)$/i, ".webp");
}
