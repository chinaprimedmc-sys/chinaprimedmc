import type { InputHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ChoiceProps = {
  label: string;
  helper?: string;
  children?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

export function CheckboxField({ label, helper, className, children, ...props }: ChoiceProps) {
  return (
    <label
      className={cn(
        "border-border flex min-h-12 cursor-pointer gap-3 border bg-white p-4 transition-colors duration-200 has-checked:border-neutral-950 has-checked:bg-[var(--bg-secondary)] has-focus-visible:ring-2 has-focus-visible:ring-[var(--action-focus)]",
        className,
      )}
    >
      <input type="checkbox" className="accent-foreground mt-0.5 size-5 shrink-0" {...props} />
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        {helper ? <span className="text-muted mt-1 block text-sm leading-6">{helper}</span> : null}
        {children}
      </span>
    </label>
  );
}

export function RadioField({ label, helper, className, children, ...props }: ChoiceProps) {
  return (
    <label
      className={cn(
        "border-border flex min-h-12 cursor-pointer gap-3 border bg-white p-4 transition-colors duration-200 has-checked:border-neutral-950 has-checked:bg-[var(--bg-secondary)] has-focus-visible:ring-2 has-focus-visible:ring-[var(--action-focus)]",
        className,
      )}
    >
      <input type="radio" className="accent-foreground mt-0.5 size-5 shrink-0" {...props} />
      <span>
        <span className="block text-sm font-semibold">{label}</span>
        {helper ? <span className="text-muted mt-1 block text-sm leading-6">{helper}</span> : null}
        {children}
      </span>
    </label>
  );
}
