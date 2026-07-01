import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

import { cn } from "@/lib/utils/cn";

export function FormLoadingState({ label = "Sending..." }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold">
      <Loader2 size={16} className="animate-spin" aria-hidden="true" />
      {label}
    </span>
  );
}

export function FormSuccessState({
  title,
  message,
  className,
}: {
  title: string;
  message?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5 text-emerald-950",
        className,
      )}
    >
      <CheckCircle2 size={22} aria-hidden="true" />
      <p className="mt-3 font-semibold">{title}</p>
      {message ? <p className="mt-2 text-sm leading-6 opacity-80">{message}</p> : null}
    </div>
  );
}

export function FormErrorState({
  title,
  message,
  className,
}: {
  title: string;
  message?: string;
  className?: string;
}) {
  return (
    <div
      className={cn("rounded-[1.5rem] border border-red-200 bg-red-50 p-5 text-red-950", className)}
    >
      <AlertCircle size={22} aria-hidden="true" />
      <p className="mt-3 font-semibold">{title}</p>
      {message ? <p className="mt-2 text-sm leading-6 opacity-80">{message}</p> : null}
    </div>
  );
}
