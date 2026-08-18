"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

import styles from "@/components/home/home-redesign.module.css";

const storyAutoplayMs = 3500;
const storyResumeDelayMs = 4000;
const storyButtonTransitionMs = 400;
const storyDragTransitionMs = 350;

function normalizeStoryIndex(index: number, count: number) {
  return ((index % count) + count) % count;
}

type StoryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

export type HomeStory = {
  id: string;
  label: string;
  title: string;
  images: StoryImage[];
};

export function HomeStoryExperience({ stories }: { stories: HomeStory[] }) {
  const reduceMotion = useReducedMotion();

  function goToStory(index: number) {
    const target = document.getElementById(stories[index]?.id ?? "");
    target?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }

  return (
    <>
      {stories.map((story, index) => (
        <section
          key={story.id}
          id={story.id}
          className={styles.storyExperience}
          data-theme={story.id}
          aria-label={`${story.title} in China`}
        >
          <div className={`${styles.container} ${styles.storyStage}`}>
            <StorySlide
              story={story}
              preloadFirstImage={index === 0}
              reduceMotion={Boolean(reduceMotion)}
              themeControls={
                <StoryThemeControls stories={stories} activeIndex={index} onSelect={goToStory} />
              }
            />
          </div>
        </section>
      ))}
    </>
  );
}

function StorySlide({
  story,
  preloadFirstImage,
  reduceMotion,
  themeControls,
}: {
  story: HomeStory;
  preloadFirstImage: boolean;
  reduceMotion: boolean;
  themeControls?: ReactNode;
}) {
  return (
    <motion.article
      className={styles.storySlide}
      data-theme={story.id}
      aria-labelledby={`${story.id}-title`}
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: 0.36, once: true }}
      transition={{ duration: reduceMotion ? 0 : 1.24, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.header
        className={styles.storyPanelHeader}
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.36, once: true }}
        transition={{
          duration: reduceMotion ? 0 : 1.02,
          delay: reduceMotion ? 0 : 0.12,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <motion.h2 id={`${story.id}-title`}>{story.title}</motion.h2>
      </motion.header>

      <motion.div
        className={styles.storyCarouselMotion}
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{
          duration: reduceMotion ? 0 : 1.08,
          delay: reduceMotion ? 0 : 0.24,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        <StoryCarousel
          images={story.images}
          preloadFirstImage={preloadFirstImage}
          reduceMotion={reduceMotion}
          themeControls={themeControls}
        />
      </motion.div>
    </motion.article>
  );
}

function StoryThemeControls({
  stories,
  activeIndex,
  onSelect,
}: {
  stories: HomeStory[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className={styles.storyThemeDock}>
      <nav className={styles.storyProgress} aria-label="Experience themes">
        {stories.map((story, index) => (
          <button
            type="button"
            key={story.id}
            data-active={activeIndex === index}
            aria-current={activeIndex === index ? "step" : undefined}
            onClick={() => onSelect(index)}
          >
            <span aria-hidden="true" />
            {story.label}
          </button>
        ))}
      </nav>
      <Link
        href="#selected-journeys"
        className={styles.storySkipLink}
        aria-label="Skip ahead to featured journeys"
      >
        {activeIndex === stories.length - 1 ? "Find your journey" : "View journeys"}
        <ArrowRight aria-hidden="true" />
      </Link>
    </div>
  );
}

function StoryCarousel({
  images,
  preloadFirstImage,
  reduceMotion,
  themeControls,
}: {
  images: StoryImage[];
  preloadFirstImage: boolean;
  reduceMotion: boolean;
  themeControls?: ReactNode;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [fullscreenOpen, setFullscreenOpen] = useState(false);
  const [fullscreenDirection, setFullscreenDirection] = useState<-1 | 1>(1);
  const positionRef = useRef(0);
  const pauseUntilRef = useRef(0);
  const fullscreenRef = useRef(false);
  const dragRef = useRef<{
    pointerId: number;
    startX: number;
    lastX: number;
    startTime: number;
    startPosition: number;
  } | null>(null);
  const fullscreenDragRef = useRef<{ pointerId: number; startX: number } | null>(null);
  const positionAnimationRef = useRef<{
    from: number;
    to: number;
    start: number;
    duration: number;
  } | null>(null);
  const cardRefs = useRef<Array<HTMLElement | null>>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  const count = images.length;

  function pauseAfterInteraction() {
    pauseUntilRef.current = performance.now() + storyResumeDelayMs;
  }

  function animateToPosition(target: number, duration: number) {
    if (reduceMotion) {
      positionRef.current = target;
      positionAnimationRef.current = null;
      setActiveIndex(normalizeStoryIndex(Math.round(target), count));
      return;
    }

    positionAnimationRef.current = {
      from: positionRef.current,
      to: target,
      start: performance.now(),
      duration,
    };
  }

  function move(direction: -1 | 1) {
    if (fullscreenRef.current) setFullscreenDirection(direction);
    const target = Math.round(positionRef.current) + direction;
    animateToPosition(target, storyButtonTransitionMs);
    pauseAfterInteraction();
  }

  function setFullscreen(nextOpen: boolean) {
    fullscreenRef.current = nextOpen;
    setFullscreenOpen(nextOpen);
    if (!nextOpen) pauseAfterInteraction();
  }

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsNearViewport(Boolean(entry?.isIntersecting)),
      { rootMargin: "700px 0px", threshold: 0.01 },
    );
    observer.observe(carousel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const cards = cardRefs.current;
    if (count < 2 || !isNearViewport) return;

    let frame = 0;
    let previousTime = performance.now();

    function renderCards() {
      const half = count / 2;
      cards.forEach((card, index) => {
        if (!card) return;
        let offset = index - positionRef.current;
        if (offset > half) offset -= count;
        if (offset < -half) offset += count;
        const distance = Math.abs(offset);
        const visible = distance <= 1.42;
        card.style.setProperty("--story-x", `${offset * 31}vw`);
        card.style.setProperty("--story-z", `${distance * -40}px`);
        card.style.setProperty("--story-rotate", `${offset * -10}deg`);
        card.style.setProperty("--story-scale", "1");
        card.style.setProperty("--story-mobile-x", `${offset * 62}vw`);
        card.style.setProperty("--story-mobile-z", `${distance * -90}px`);
        card.style.setProperty("--story-mobile-rotate", `${offset * -14}deg`);
        card.style.setProperty("--story-mobile-scale", String(Math.max(0.82, 1 - distance * 0.14)));
        card.style.setProperty(
          "--story-opacity",
          visible ? String(Math.max(0, 1 - distance * 0.42)) : "0",
        );
        card.style.setProperty("--story-layer", String(10 - Math.round(distance)));
      });
    }

    function tick(now: number) {
      const delta = Math.min(64, now - previousTime);
      previousTime = now;

      const animation = positionAnimationRef.current;
      if (animation) {
        const progress = Math.min(1, (now - animation.start) / animation.duration);
        const eased = 1 - Math.pow(1 - progress, 3);
        positionRef.current = animation.from + (animation.to - animation.from) * eased;
        if (progress >= 1) {
          positionRef.current = animation.to;
          positionAnimationRef.current = null;
        }
      } else if (
        !reduceMotion &&
        !dragRef.current &&
        !fullscreenRef.current &&
        now >= pauseUntilRef.current
      ) {
        positionRef.current += delta / storyAutoplayMs;
      }

      if (Math.abs(positionRef.current) > count * 100) {
        positionRef.current %= count;
      }

      const nextIndex = normalizeStoryIndex(Math.round(positionRef.current), count);
      setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
      renderCards();
      frame = window.requestAnimationFrame(tick);
    }

    renderCards();
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [count, isNearViewport, reduceMotion]);

  useEffect(() => {
    if (!fullscreenOpen) return;

    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  useEffect(() => {
    if (!fullscreenOpen || count < 2) return;
    const neighbors = [
      normalizeStoryIndex(activeIndex - 1, count),
      normalizeStoryIndex(activeIndex + 1, count),
    ];
    neighbors.forEach((index) => {
      const preload = new Image();
      preload.src = images[index]!.src.replace(/\.avif$/, "-1280.webp");
    });
  }, [activeIndex, count, fullscreenOpen, images]);

  function handlePointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if ((event.target as HTMLElement).closest("button, a")) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    positionAnimationRef.current = null;
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      lastX: event.clientX,
      startTime: performance.now(),
      startPosition: positionRef.current,
    };
    setIsDragging(true);
  }

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    drag.lastX = event.clientX;
    const spacing = Math.max(220, window.innerWidth * (window.innerWidth < 768 ? 0.62 : 0.31));
    positionRef.current = drag.startPosition - (event.clientX - drag.startX) / spacing;
  }

  function finishPointerDrag(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.startX;
    const elapsed = Math.max(1, performance.now() - drag.startTime);
    const velocity = deltaX / elapsed;
    const intentionalSwipe = Math.abs(deltaX) >= 42 || Math.abs(velocity) >= 0.35;
    const target = intentionalSwipe
      ? Math.round(drag.startPosition) + (deltaX < 0 ? 1 : -1)
      : Math.round(positionRef.current);

    dragRef.current = null;
    setIsDragging(false);
    animateToPosition(target, storyDragTransitionMs);
    if (intentionalSwipe) pauseAfterInteraction();
  }

  function handleFullscreenPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if ((event.target as HTMLElement).closest("button")) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    fullscreenDragRef.current = { pointerId: event.pointerId, startX: event.clientX };
  }

  function handleFullscreenPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const drag = fullscreenDragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    fullscreenDragRef.current = null;
    const deltaX = event.clientX - drag.startX;
    if (Math.abs(deltaX) >= 48) move(deltaX < 0 ? 1 : -1);
  }

  const activeImage = images[activeIndex] ?? images[0]!;
  const fullscreenAvif = activeImage.src.replace(/\.avif$/, "-1280.avif");
  const fullscreenWebp = activeImage.src.replace(/\.avif$/, "-1280.webp");

  return (
    <Dialog.Root open={fullscreenOpen} onOpenChange={setFullscreen}>
      <div ref={carouselRef} className={styles.storyCarousel3d} data-dragging={isDragging}>
        <div
          className={styles.storyCarousel3dStage}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishPointerDrag}
          onPointerCancel={finishPointerDrag}
        >
          {images.map((image, index) => {
            let offset = index - activeIndex;
            const half = images.length / 2;
            if (offset > half) offset -= images.length;
            if (offset < -half) offset += images.length;
            const distance = Math.abs(offset);
            const cardStyle = {
              "--story-x": `${offset * 31}vw`,
              "--story-z": `${distance * -40}px`,
              "--story-rotate": `${offset * -10}deg`,
              "--story-scale": "1",
              "--story-mobile-x": `${offset * 62}vw`,
              "--story-mobile-z": `${distance * -90}px`,
              "--story-mobile-rotate": `${offset * -14}deg`,
              "--story-mobile-scale": String(Math.max(0.82, 1 - distance * 0.14)),
              "--story-opacity": distance <= 1.42 ? String(Math.max(0, 1 - distance * 0.42)) : "0",
              "--story-layer": String(10 - Math.round(distance)),
            } as CSSProperties;
            const fallbackSrc = image.src.replace(/\.avif$/, ".webp");
            const smallSrc = image.src.replace(/\.avif$/, "-384.avif");
            const smallFallbackSrc = fallbackSrc.replace(/\.webp$/, "-384.webp");
            const imageSizes =
              "(max-width: 767px) 55vw, (min-width: 1440px) 384px, (min-width: 1024px) 27vw, 15rem";

            return (
              <figure
                key={image.src}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className={styles.storyCarouselCard}
                data-active={offset === 0}
                aria-hidden={offset !== 0}
                style={cardStyle}
              >
                {offset === 0 || (isNearViewport && distance <= 1.42) ? (
                  <picture className={styles.storyImageFrame}>
                    <source
                      srcSet={`${smallSrc} 384w, ${image.src} 640w`}
                      sizes={imageSizes}
                      type="image/avif"
                    />
                    <img
                      src={smallFallbackSrc}
                      srcSet={`${smallFallbackSrc} 384w, ${fallbackSrc} 640w`}
                      sizes={imageSizes}
                      alt={offset === 0 ? image.alt : ""}
                      width={image.width}
                      height={image.height}
                      loading={preloadFirstImage && index === 0 ? "eager" : "lazy"}
                      fetchPriority={preloadFirstImage && index === 0 ? "high" : "auto"}
                      decoding="async"
                      className={styles.storyImage}
                      onError={(event) => {
                        event.currentTarget.style.opacity = "0";
                      }}
                    />
                  </picture>
                ) : (
                  <span className={styles.storyImagePlaceholder} aria-hidden="true" />
                )}
              </figure>
            );
          })}
        </div>

        <div className={styles.storyCarouselToolbar} aria-label="Photograph controls">
          <button
            type="button"
            className={`${styles.storyCarouselNav} ${styles.storyCarouselNavPrevious}`}
            aria-label="Previous photograph"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => move(-1)}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <span className={styles.storyCarouselCounter} aria-live="polite">
            {String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          <button
            type="button"
            className={`${styles.storyCarouselNav} ${styles.storyCarouselNavNext}`}
            aria-label="Next photograph"
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => move(1)}
          >
            <ChevronRight aria-hidden="true" />
          </button>
          <span className={styles.storyCarouselToolbarDivider} aria-hidden="true" />
          <button
            type="button"
            className={styles.storyFullscreenButton}
            aria-label={`Open photograph ${activeIndex + 1} full screen`}
            onClick={() => setFullscreen(true)}
          >
            <Maximize2 aria-hidden="true" />
          </button>
        </div>

        <div className={styles.storyCarouselMeta}>
          <div className={styles.storyCarouselCaption} aria-live="polite">
            <p>{activeImage.caption}</p>
          </div>
          {themeControls}
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className={styles.storyFullscreenOverlay} />
        <Dialog.Content
          className={styles.storyFullscreen}
          onPointerDown={handleFullscreenPointerDown}
          onPointerUp={handleFullscreenPointerUp}
          onPointerCancel={() => {
            fullscreenDragRef.current = null;
          }}
        >
          <Dialog.Title className={styles.storyFullscreenTitle}>
            Photograph {activeIndex + 1} of {count}
          </Dialog.Title>
          <header className={styles.storyFullscreenHeader}>
            <span>
              {String(activeIndex + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
            <Dialog.Close
              className={styles.storyFullscreenClose}
              aria-label="Close full screen gallery"
            >
              <X aria-hidden="true" />
            </Dialog.Close>
          </header>

          <div className={styles.storyFullscreenStage}>
            <AnimatePresence initial={false}>
              <motion.picture
                key={activeImage.src}
                className={styles.storyFullscreenPicture}
                initial={
                  reduceMotion ? false : { opacity: 0, scale: 0.992, x: fullscreenDirection * 22 }
                }
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={
                  reduceMotion
                    ? undefined
                    : { opacity: 0, scale: 0.995, x: fullscreenDirection * -14 }
                }
                transition={{
                  opacity: { duration: reduceMotion ? 0 : 0.46, ease: "easeOut" },
                  scale: { duration: reduceMotion ? 0 : 0.62, ease: [0.16, 1, 0.3, 1] },
                  x: { duration: reduceMotion ? 0 : 0.58, ease: [0.16, 1, 0.3, 1] },
                }}
              >
                <source srcSet={fullscreenAvif} type="image/avif" />
                {/* eslint-disable-next-line @next/next/no-img-element -- Full-screen uses pre-generated AVIF/WebP assets. */}
                <img
                  src={fullscreenWebp}
                  alt={activeImage.alt}
                  width={1280}
                  height={1707}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0";
                  }}
                />
              </motion.picture>
            </AnimatePresence>
            <button
              type="button"
              className={`${styles.storyFullscreenNav} ${styles.storyFullscreenPrevious}`}
              aria-label="Previous full screen photograph"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() => move(-1)}
            >
              <ChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              className={`${styles.storyFullscreenNav} ${styles.storyFullscreenNext}`}
              aria-label="Next full screen photograph"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={() => move(1)}
            >
              <ChevronRight aria-hidden="true" />
            </button>
          </div>

          <footer className={styles.storyFullscreenFooter}>{activeImage.caption}</footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
