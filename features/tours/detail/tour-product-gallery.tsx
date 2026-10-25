"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { OptimizedImage } from "@/components/media/optimized-image";
import type { MediaAsset } from "@/types/component-library";

import styles from "./tour-detail-landing.module.css";

export function TourProductGallery({
  hero,
  gallery,
  hasPhotography,
}: {
  hero: MediaAsset;
  gallery: MediaAsset[];
  hasPhotography: boolean;
}) {
  const images = useMemo(
    () =>
      [hero, ...gallery]
        .filter((image, index, all) => all.findIndex((item) => item.src === image.src) === index)
        .slice(0, 6),
    [gallery, hero],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const lastManualSelection = useRef(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const selectedImage = images[selectedIndex] ?? hero;

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || images.length < 2) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      threshold: 0.15,
    });
    observer.observe(gallery);
    return () => observer.disconnect();
  }, [images.length]);

  useEffect(() => {
    if (images.length < 2 || !isVisible || isInteracting) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;
    const timer = window.setInterval(() => {
      if (document.hidden || Date.now() - lastManualSelection.current < 8000) return;
      setSelectedIndex((index) => (index + 1) % images.length);
    }, 2500);
    return () => window.clearInterval(timer);
  }, [images.length, isVisible, isInteracting]);

  if (!hasPhotography) {
    return <div className={styles.productPlaceholder}>Photography coming soon</div>;
  }

  return (
    <div
      className={styles.productGallery}
      ref={galleryRef}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setIsInteracting(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setIsInteracting(false);
      }}
      onFocusCapture={(event) => {
        if (event.target.matches(":focus-visible")) setIsInteracting(true);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false);
      }}
    >
      <div className={styles.productGalleryMain}>
        <OptimizedImage
          key={selectedImage.src}
          src={selectedImage.src}
          alt={selectedImage.alt}
          fill
          priority={selectedIndex === 0}
          sizes="(max-width: 767px) 100vw, 42vw"
          className={styles.productGalleryImage}
          frameClassName={styles.productGalleryFrame}
          objectPosition={selectedImage.objectPosition ?? "center"}
          showSkeleton={false}
          fadeIn={false}
        />
      </div>
      {images.length > 1 ? (
        <div className={styles.productGalleryThumbs} aria-label="Journey images">
          {images.map((image, index) => (
            <button
              type="button"
              key={image.src}
              className={index === selectedIndex ? styles.productGalleryThumbActive : undefined}
              aria-label={`Show journey image ${index + 1}`}
              aria-pressed={index === selectedIndex}
              onClick={() => {
                lastManualSelection.current = Date.now();
                setSelectedIndex(index);
              }}
            >
              <OptimizedImage
                src={image.src}
                alt=""
                width={112}
                height={84}
                sizes="112px"
                className={styles.productGalleryThumbImage}
                frameClassName={styles.productGalleryThumbFrame}
                objectPosition={image.objectPosition ?? "center"}
                showSkeleton={false}
                fadeIn={false}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
