import { Container } from "@/design-system/primitives/container";
import { Section } from "@/design-system/primitives/section";
import { CardSkeleton, Skeleton } from "@/components/loading/skeleton";

export default function Loading() {
  return (
    <Section spacing="screen">
      <Container size="lg">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <Skeleton className="h-3 w-28" variant="text" />
            <Skeleton className="mt-6 h-12 w-full max-w-lg" variant="text" />
            <Skeleton className="mt-4 h-12 w-4/5 max-w-md" variant="text" />
            <Skeleton className="mt-7 h-5 w-full max-w-xl" variant="text" />
            <Skeleton className="mt-3 h-5 w-5/6 max-w-lg" variant="text" />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Skeleton className="h-12 w-full sm:w-40" />
              <Skeleton className="h-12 w-full sm:w-40" />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      </Container>
    </Section>
  );
}
