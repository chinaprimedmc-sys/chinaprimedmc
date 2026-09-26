import { cn } from "@/lib/utils/cn";
type HeroTrustPillsProps = {
  items: string[];
  className?: string;
  mode?: "list" | "ticker";
  tone?: "dark" | "light";
};
export function HeroTrustPills({ items, className, tone = "dark" }: HeroTrustPillsProps) {
  return (
    <ul
      className={cn(
        "mx-auto mt-6 flex max-w-full flex-wrap justify-center gap-2",
        tone === "dark" ? "text-white" : "text-foreground",
        className,
      )}
      aria-label="Journey assurances"
    >
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-current/30 px-3 py-2 text-sm font-medium"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
