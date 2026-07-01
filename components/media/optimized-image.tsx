import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils/cn";

type OptimizedImageProps = ImageProps & {
  frameClassName?: string;
  objectPosition?: string;
};

export function OptimizedImage({
  className,
  frameClassName,
  alt,
  objectPosition,
  style,
  ...props
}: OptimizedImageProps) {
  return (
    <div className={cn("relative overflow-hidden bg-neutral-100", frameClassName)}>
      <Image
        className={cn("object-cover", className)}
        alt={alt}
        style={{ objectPosition, ...style }}
        {...props}
      />
    </div>
  );
}
