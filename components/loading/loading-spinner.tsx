import { Loader2 } from "lucide-react";

export function LoadingSpinner({ label = "Loading" }: { label?: string }) {
  return (
    <div className="text-muted inline-flex items-center gap-2 text-sm font-semibold" role="status">
      <Loader2 size={17} className="animate-spin" aria-hidden="true" />
      <span>{label}</span>
    </div>
  );
}
