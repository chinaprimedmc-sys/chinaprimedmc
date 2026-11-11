import { hubspotForm } from "@/lib/hubspot";

export type HubSpotField = { name: string; value: unknown };
export type HubSpotInstance = {
  getFormFieldValues?: () => Promise<HubSpotField[]>;
  setFieldValue?: (name: string, value: string) => void | Promise<void>;
  setExtraSubmissionMetadata?: (metadata: Record<string, string>) => void;
};

export type HubSpotFormsV4 = {
  getFormFromEvent: (event: Event) => HubSpotInstance | undefined;
};

/** Only use a message field returned by HubSpot itself. Never invent CRM properties. */
export async function attachPlanningContext(form: HubSpotInstance, summary: string) {
  if (!summary) return false;
  try {
    form.setExtraSubmissionMetadata?.({ aviora_planning_context: summary });
  } catch {
    // Metadata is supplemental; a copyable brief and direct-contact links remain available.
  }
  if (!form.getFormFieldValues || !form.setFieldValue) return false;
  try {
    const fields = await form.getFormFieldValues();
    const message = fields.find(
      (field) => field.name === "message" || field.name === "0-1/message",
    );
    if (!message) return false;
    if (message.value != null && typeof message.value !== "string") return false;
    const current = typeof message.value === "string" ? message.value : "";
    if (current.includes(summary)) return true;
    // Preserve visitor input. A nonempty message may already be a recovered draft.
    if (current.trim()) return false;
    await form.setFieldValue(message.name, summary);
    const updated = await form.getFormFieldValues();
    return updated.some((field) => field.name === message.name && field.value === summary);
  } catch {
    return false;
  }
}

/** Legacy messages must come from this embed's iframe and a HubSpot HTTPS origin. */
export function readHubSpotMessage(
  event: Pick<MessageEvent, "origin" | "source" | "data">,
  frameWindows: Array<Window | null>,
) {
  if (!event.source || !frameWindows.some((frame) => frame && frame === event.source)) return null;
  if (!/^https:\/\/([a-z0-9-]+\.)*(hsforms\.(net|com)|hubspot\.com)$/.test(event.origin))
    return null;
  const data = event.data;
  if (
    !data ||
    typeof data !== "object" ||
    data.type !== "hsFormCallback" ||
    data.id !== hubspotForm.formId
  )
    return null;
  if (data.eventName === "onFormReady") return "ready";
  // onFormSubmit is before acceptance and must never display a success message.
  if (data.eventName === "onFormSubmitted") return "submitted";
  return null;
}

export function isCurrentHubSpotEvent(event: Event, instanceId?: string) {
  const detail = (event as CustomEvent<{ formId?: unknown; instanceId?: unknown }>).detail;
  return detail?.formId === hubspotForm.formId && (!instanceId || detail.instanceId === instanceId);
}
