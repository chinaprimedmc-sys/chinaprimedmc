import { cn } from "@/lib/utils/cn";

type QuickFactCardProps = {
  label: string;
  value: string;
  helper?: string;
  className?: string;
};

export function QuickFactCard({ className, helper, label, value }: QuickFactCardProps) {
  return (
    <article
      className={cn(
        "border-border bg-background/82 rounded-[1.35rem] border p-4 shadow-sm md:p-5",
        className,
      )}
    >
      <p className="text-muted text-[0.68rem] font-bold tracking-[0.14em] uppercase">{label}</p>
      <p className="mt-3 text-lg leading-tight font-semibold tracking-[-0.02em] md:text-xl">
        {value}
      </p>
      {helper ? <p className="text-muted mt-2 text-sm leading-6">{helper}</p> : null}
    </article>
  );
}
