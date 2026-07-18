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
  ...props
}: OptimizedImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  const [loadedSrc, setLoadedSrc] = useState<ImageProps["src"] | null>(null);
  const loaded = loadedSrc === props.src;

  useEffect(() => {
    const image = imageRef.current;

    if (image?.complete && image.naturalWidth > 0) {
      setLoadedSrc(props.src);
    }
  }, [props.src]);

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
        onLoad={(event) => {
          setLoadedSrc(props.src);
          onLoad?.(event);
        }}
        style={{
          objectPosition,
          ...style,
        }}
        {...props}
      />
    </div>
  );
}
