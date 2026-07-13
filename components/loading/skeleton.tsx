import { cn } from "@/lib/utils/cn";

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("bg-foreground/8 animate-pulse rounded-2xl", className)} />;
}

export function CardSkeleton() {
  return (
    <div className="border-border rounded-[1.75rem] border bg-white p-4">
      <Skeleton className="aspect-[4/3]" />
      <Skeleton className="mt-4 h-5 w-3/4" />
      <Skeleton className="mt-3 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-2/3" />
    </div>
  );
}
