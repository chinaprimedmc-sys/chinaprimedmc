import { cn } from "@/lib/utils/cn";

export function StatisticCard({
  value,
  label,
  helper,
  className,
}: {
  value: string;
  label: string;
  helper?: string;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "rounded-[1.75rem] border border-white/70 bg-white/62 p-5 shadow-[var(--shadow-glass)] backdrop-blur-2xl md:p-6",
        className,
      )}
    >
      <p className="text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{value}</p>
      <p className="mt-3 text-sm font-semibold">{label}</p>
      {helper ? <p className="text-muted mt-2 text-sm leading-6">{helper}</p> : null}
    </article>
  );
}
