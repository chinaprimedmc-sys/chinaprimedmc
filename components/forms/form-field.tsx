import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type FieldShellProps = {
  label: string;
  error?: string;
  helper?: string;
  children: ReactNode;
};

export function FieldShell({ label, helper, error, children }: FieldShellProps) {
  return (
    <label className="grid content-start gap-2">
      <span className="text-sm font-semibold">{label}</span>
      {children}
      {helper ? <span className="text-muted text-xs leading-5">{helper}</span> : null}
      {error ? <span className="text-brand-red text-xs font-medium">{error}</span> : null}
    </label>
  );
}

export function TextField({
  label,
  helper,
  error,
  className,
  ...props
}: { label: string; helper?: string; error?: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <FieldShell label={label} helper={helper} error={error}>
      <input
        className={cn(
          "border-border placeholder:text-muted/70 focus:border-foreground/35 focus:ring-foreground/5 h-12 rounded-2xl border bg-white px-4 text-sm transition outline-none focus:ring-4",
          error && "border-brand-red/55",
          className,
        )}
        aria-invalid={Boolean(error)}
        {...props}
      />
    </FieldShell>
  );
}

export function TextAreaField({
  label,
  helper,
  error,
  className,
  ...props
}: {
  label: string;
  helper?: string;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <FieldShell label={label} helper={helper} error={error}>
      <textarea
        className={cn(
          "border-border placeholder:text-muted/70 focus:border-foreground/35 focus:ring-foreground/5 min-h-32 rounded-2xl border bg-white px-4 py-3 text-sm leading-6 transition outline-none focus:ring-4",
          error && "border-brand-red/55",
          className,
        )}
        aria-invalid={Boolean(error)}
        {...props}
      />
    </FieldShell>
  );
}
