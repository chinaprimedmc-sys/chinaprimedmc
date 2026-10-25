"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { ArrowLeft, List, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./article-template.module.css";

type ReaderHeading = {
  id: string;
  title: string;
};

export function ArticleMobileReader({ headings }: { headings: ReaderHeading[] }) {
  const [progress, setProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState(headings[0]?.title ?? "Article overview");
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    if (docked) document.documentElement.dataset.journalReaderActive = "true";
    else delete document.documentElement.dataset.journalReaderActive;
    return () => {
      delete document.documentElement.dataset.journalReaderActive;
    };
  }, [docked]);

  useEffect(() => {
    const article = document.getElementById("article");
    if (!article) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = article.getBoundingClientRect();
      const total = Math.max(article.offsetHeight - window.innerHeight * 0.55, 1);
      const consumed = Math.min(Math.max(-rect.top + window.innerHeight * 0.18, 0), total);
      setProgress(Math.round((consumed / total) * 100));
      const navOffset = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--site-nav-offset"),
      );
      setDocked(rect.top <= (Number.isFinite(navOffset) ? navOffset : 64));

      const readingLine = window.innerHeight * 0.3;
      let current = headings[0];
      for (const heading of headings) {
        const element = document.getElementById(heading.id);
        if (element && element.getBoundingClientRect().top <= readingLine) current = heading;
      }
      setActiveHeading(current?.title ?? "Article overview");
    };
    const schedule = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [headings]);

  if (!headings.length) return null;

  return (
    <div
      className={styles.mobileReader}
      data-scrolled={progress > 0 ? "true" : undefined}
      data-docked={docked ? "true" : undefined}
      aria-label="Article reading tools"
    >
      <div className={styles.mobileReaderShell}>
        <div className={styles.mobileReaderBar}>
          <Link href="/journal" aria-label="Back to Journal">
            <ArrowLeft size={19} strokeWidth={1.9} aria-hidden="true" />
          </Link>
          <span className={styles.mobileReaderChapter} aria-live="polite">
            {activeHeading}
          </span>
          <Dialog.Root>
            <Dialog.Trigger className={styles.mobileContentsTrigger} aria-label="Open contents">
              <List size={19} strokeWidth={1.9} aria-hidden="true" />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className={styles.mobileContentsOverlay} />
              <Dialog.Content className={styles.mobileContentsSheet} aria-describedby={undefined}>
                <div className={styles.mobileContentsHandle} aria-hidden="true" />
                <header>
                  <div>
                    <p>In this guide</p>
                    <Dialog.Title>Jump to the answer you need</Dialog.Title>
                  </div>
                  <Dialog.Close aria-label="Close contents">
                    <X size={20} aria-hidden="true" />
                  </Dialog.Close>
                </header>
                <nav aria-label="Article contents on mobile">
                  <ol>
                    {headings.map((heading, index) => (
                      <li key={heading.id}>
                        <Dialog.Close asChild>
                          <a href={`#${heading.id}`}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <strong>{heading.title}</strong>
                          </a>
                        </Dialog.Close>
                      </li>
                    ))}
                  </ol>
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
        <span className={styles.mobileReaderTrack} aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </span>
      </div>
    </div>
  );
}
