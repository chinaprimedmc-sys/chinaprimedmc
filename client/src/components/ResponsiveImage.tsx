import type { ImgHTMLAttributes } from "react";

type ResponsiveImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  widths?: number[];
};

const defaultWidths = [960, 1400];

function optimizedPath(src: string, width: number, format: "avif" | "webp") {
  const extensionIndex = src.lastIndexOf(".");
  if (extensionIndex === -1) return "";
  return `${src.slice(0, extensionIndex)}-${width}.${format}`;
}

function srcSet(src: string, widths: number[], format: "avif" | "webp") {
  return widths.map((width) => `${optimizedPath(src, width, format)} ${width}w`).join(", ");
}

export default function ResponsiveImage({ src, alt, widths = defaultWidths, sizes = "100vw", ...props }: ResponsiveImageProps) {
  return (
    <picture>
      <source srcSet={srcSet(src, widths, "avif")} sizes={sizes} type="image/avif" />
      <source srcSet={srcSet(src, widths, "webp")} sizes={sizes} type="image/webp" />
      <img src={src} alt={alt} {...props} />
    </picture>
  );
}
