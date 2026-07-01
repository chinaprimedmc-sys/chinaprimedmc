import { GalleryLayout } from "@/components/layout";
import { OptimizedImage } from "@/components/media/optimized-image";
import type { MediaAsset } from "@/types/component-library";

type GridGalleryProps = {
  images: MediaAsset[];
  mode?: "grid" | "editorial" | "masonry";
};

export function GridGallery({ images, mode = "grid" }: GridGalleryProps) {
  return (
    <GalleryLayout mode={mode}>
      {images.map((image, index) => (
        <OptimizedImage
          key={`${image.src}-${index}`}
          src={image.src}
          alt={image.alt}
          width={image.width ?? 900}
          height={image.height ?? 700}
          sizes="(min-width:1024px) 33vw, 100vw"
          frameClassName="aspect-[4/3] rounded-[1.5rem]"
          className="h-full w-full transition duration-700 hover:scale-[1.035]"
        />
      ))}
    </GalleryLayout>
  );
}
