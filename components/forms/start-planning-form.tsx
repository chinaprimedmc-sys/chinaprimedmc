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
      {summary ? (
        <section className={styles.context} aria-label="Your trip notes">
          <h3>Your trip notes</h3>
          <p>
            {attached
              ? "These notes have been added to the message field. You can review and edit that message before sending."
              : "Keep your selected journeys and preferences together. Copy these notes into your form message, or send them directly by email or WhatsApp."}
          </p>
          <a href="#planning-hubspot" className={styles.formJump}>
            Continue to enquiry form <span aria-hidden="true">↓</span>
          </a>
          <details className={styles.notesDisclosure}>
            <summary>Review or copy your selected trip notes</summary>
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
            {copyStatus}
          </p>
        </section>
      ) : null}
      <div id="planning-hubspot" className={styles.formAnchor}>
        <HubSpotForm
          key={summary}
          contextSummary={summary}
          onContextAttached={(isAttached) => setAttachedSummary(isAttached ? summary : null)}
        />
      </div>
    </div>
  );
}
