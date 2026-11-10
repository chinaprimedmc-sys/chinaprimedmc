"use client";

import { ChevronDown } from "@/components/icons/symbols";

import styles from "./faq-list.module.css";

type FaqItem = { question: string; answer: string };

/** Native disclosures keep every answer in the HTML and work before hydration. */
export function FaqList({
  items,
  idPrefix,
  onOpen,
}: {
  items: readonly FaqItem[];
  idPrefix?: string;
  onOpen?: (item: FaqItem, index: number) => void;
}) {
  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <details
          className={styles.item}
          key={item.question}
          id={idPrefix ? `${idPrefix}-${index + 1}` : undefined}
          onToggle={(event) => {
            if (event.currentTarget.open) onOpen?.(item, index);
          }}
        >
          <summary className={styles.trigger}>
            <span>{item.question}</span>
            <span className={styles.indicator} aria-hidden="true">
              <ChevronDown size={18} />
            </span>
          </summary>
          <div className={styles.content}>
            <p>{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
