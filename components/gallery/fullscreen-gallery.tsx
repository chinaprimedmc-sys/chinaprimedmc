import { OptimizedImage } from "@/components/media/optimized-image";
import type { MediaAsset } from "@/types/component-library";

export function FullscreenGallery({ images }: { images: MediaAsset[] }) {
  return (
    <div className="grid gap-4">
      {images.map((image, index) => (
        <section key={`${image.src}-${index}`} className="relative min-h-svh overflow-hidden">
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            fill
            sizes="100vw"
            frameClassName="absolute inset-0 h-full"
            className="h-full w-full"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/18" />
        </section>
      ))}
    </div>
  );
}
