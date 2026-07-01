export function ProgressBar({ value }: { value: number }) {
  const normalized = Math.max(0, Math.min(100, value));
  return (
    <div
      className="bg-foreground/8 h-1 overflow-hidden rounded-full"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={normalized}
    >
      <div
        className="bg-foreground h-full rounded-full transition-all duration-300"
        style={{ width: `${normalized}%` }}
      />
    </div>
  );
}
