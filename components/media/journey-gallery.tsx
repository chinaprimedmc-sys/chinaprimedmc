"use client";

import * as Dialog from "@radix-ui/react-dialog";
import useEmblaCarousel from "embla-carousel-react";
import { LazyMotion, m, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

import { ArrowLeft, ArrowRight, Plus, X } from "@/components/icons/symbols";
import { iconButtonStyles } from "@/components/ui/button-styles";
import type { MediaAsset } from "@/types/component-library";
import { motionTokens } from "@/design-system/tokens/motion";

import styles from "./journey-gallery.module.css";

const loadMotionFeatures = () => import("./motion-features").then((module) => module.default);

/** Swipe enhancement over a server-rendered photo rail; never auto-advances. */
export function JourneyGallery({
  images,
  title = "A closer look at the journey",
}: {
  images: MediaAsset[];
  title?: string;
}) {
  const id = useId();
  const reduceMotion = useReducedMotion();
  const [viewportRef, api] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [position, setPosition] = useState({ index: 0, previous: false, next: false });
  const [lightbox, setLightbox] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const selectedImage = lightbox === null ? undefined : images[lightbox];

  useEffect(() => {
    if (!api) return;
    const sync = () =>
      setPosition({
        index: api.selectedScrollSnap(),
        previous: api.canScrollPrev(),
        next: api.canScrollNext(),
      });
    const frame = requestAnimationFrame(sync);
    api.on("select", sync).on("reInit", sync);
    return () => {
      cancelAnimationFrame(frame);
      api.off("select", sync).off("reInit", sync);
    };
  }, [api]);

  if (images.length < 2) return null;

  return (
    <section
      className={styles.gallery}
      aria-labelledby={`${id}-title`}
      data-journey-gallery
      data-no-reveal
    >
      <header className={styles.header}>
        <h2 id={`${id}-title`}>{title}</h2>
        <div className={styles.controls} aria-label="Photo gallery controls">
          <button
            type="button"
            className={iconButtonStyles}
            disabled={!position.previous}
            aria-label="Previous photos"
            aria-controls={`${id}-photos`}
            onClick={() => api?.scrollPrev(Boolean(reduceMotion))}
          >
            <ArrowLeft />
          </button>
          <button
            type="button"
            className={iconButtonStyles}
            disabled={!position.next}
            aria-label="Next photos"
            aria-controls={`${id}-photos`}
            onClick={() => api?.scrollNext(Boolean(reduceMotion))}
          >
            <ArrowRight />
          </button>
        </div>
      </header>
      <div
        className={styles.viewport}
        ref={viewportRef}
        data-ready={api ? "true" : undefined}
        id={`${id}-photos`}
        role="region"
        aria-roledescription="carousel"
        aria-label="Journey photographs"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.target !== event.currentTarget || !api) return;
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
          event.preventDefault();
          const jump = Boolean(reduceMotion);
          if (event.key === "ArrowLeft") api.scrollPrev(jump);
          if (event.key === "ArrowRight") api.scrollNext(jump);
          if (event.key === "Home") api.scrollTo(0, jump);
          if (event.key === "End") api.scrollTo(api.scrollSnapList().length - 1, jump);
        }}
      >
        <div className={styles.track}>
          {images.map((image, index) => (
            <figure
              className={styles.slide}
              key={image.src}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${images.length}`}
            >
              <button
                type="button"
                className={styles.photo}
                aria-label={`Enlarge photo ${index + 1}: ${image.alt}`}
                aria-haspopup="dialog"
                onClick={(event) => {
                  lastTrigger.current = event.currentTarget;
                  setLightbox(index);
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) 78vw, (max-width: 1023px) 45vw, 27vw"
                />
                <span className={styles.enlarge} aria-hidden="true">
                  <Plus size={18} />
                </span>
              </button>
              <figcaption>{image.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <p className="sr-only" role="status" aria-live="polite">
        Photo group {position.index + 1} of {api?.scrollSnapList().length ?? images.length}
      </p>
      <Dialog.Root
        open={lightbox !== null}
        onOpenChange={(open) => {
          if (!open) setLightbox(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Overlay className={styles.overlay} />
          <Dialog.Content
            className={styles.dialog}
            aria-describedby={`${id}-caption`}
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              lastTrigger.current?.focus({ preventScroll: true });
            }}
          >
            <div className={styles.dialogHeader}>
              <Dialog.Title>Journey photographs</Dialog.Title>
              <Dialog.Close className={iconButtonStyles} aria-label="Close photo viewer">
                <X />
              </Dialog.Close>
            </div>
            {selectedImage ? (
              <LazyMotion features={loadMotionFeatures} strict>
                <m.div
                  className={styles.lightboxPhoto}
                  key={selectedImage.src}
                  initial={{ opacity: reduceMotion ? 1 : 0.6 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: reduceMotion ? 0 : motionTokens.duration.micro }}
                >
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    sizes="(max-width: 639px) 90vw, 560px"
                  />
                </m.div>
              </LazyMotion>
            ) : null}
            <div className={styles.dialogFooter}>
              <Dialog.Description id={`${id}-caption`}>{selectedImage?.alt}</Dialog.Description>
              <div className={styles.controls}>
                <button
                  type="button"
                  className={iconButtonStyles}
                  aria-label="Previous photo"
                  disabled={lightbox === null || lightbox === 0}
                  onClick={() =>
                    setLightbox((index) => (index === null ? null : Math.max(0, index - 1)))
                  }
                >
                  <ArrowLeft />
                </button>
                <span>
                  {lightbox === null ? 0 : lightbox + 1} / {images.length}
                </span>
                <button
                  type="button"
                  className={iconButtonStyles}
                  aria-label="Next photo"
                  disabled={lightbox === null || lightbox === images.length - 1}
                  onClick={() =>
                    setLightbox((index) =>
                      index === null ? null : Math.min(images.length - 1, index + 1),
                    )
                  }
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
