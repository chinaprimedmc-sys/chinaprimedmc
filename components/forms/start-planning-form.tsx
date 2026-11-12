"use client";

import { useRef, useState } from "react";

import { siteConfig } from "@/config/site";
import {
  buildPlanningContext,
  planningContactLinks,
  type PlanningContext,
} from "@/lib/forms/planning-context";
import { HubSpotForm } from "./hubspot-form";
import styles from "./hubspot-form.module.css";

/** Preserve every supported journey context while keeping HubSpot as the form provider. */
export function StartPlanningForm(context: PlanningContext & { placement?: string }) {
  const summary = buildPlanningContext(context);
  const contacts = planningContactLinks(summary, siteConfig.email, siteConfig.phone);
  const notes = useRef<HTMLTextAreaElement>(null);
  const [attachedSummary, setAttachedSummary] = useState<string | null>(null);
  const attached = attachedSummary === summary;
  const [copyFeedback, setCopyFeedback] = useState({ summary: "", text: "" });
  const copyStatus = copyFeedback.summary === summary ? copyFeedback.text : "";

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopyFeedback({
        summary,
        text: "Copied. Paste these notes into your message before sending.",
      });
    } catch {
      notes.current?.focus();
      notes.current?.select();
      setCopyFeedback({
        summary,
        text: "Your notes are selected. Copy them and paste them into your message.",
      });
    }
  };

  return (
    <div>
      <div id="planning-hubspot" className={styles.formAnchor}>
        <HubSpotForm
          key={summary}
          contextSummary={summary}
          onContextAttached={(isAttached) => setAttachedSummary(isAttached ? summary : null)}
        />
      </div>
      {summary ? (
        <section className={styles.context} aria-label="Your trip notes">
          <details className={styles.notesDisclosure}>
            <summary>Review trip notes</summary>
            <p>
              {attached
                ? "Review and edit the notes in your message before sending."
                : "Copy these notes into your message, or share them by email or WhatsApp."}
            </p>
            <textarea
              ref={notes}
              value={summary}
              readOnly
              rows={Math.min(8, summary.split("\n").length + 2)}
              aria-label="Trip notes to include with your enquiry"
            />
            <div className={styles.contextActions}>
              <button type="button" onClick={copy}>
                Copy trip notes
              </button>
              <a href={contacts.email}>Email these notes</a>
              <a href={contacts.whatsapp}>WhatsApp these notes</a>
            </div>
          </details>
          <p role="status" aria-live="polite">
            {copyStatus || (attached ? "These notes have been added to the message field." : "")}
          </p>
        </section>
      ) : null}
    </div>
  );
}
