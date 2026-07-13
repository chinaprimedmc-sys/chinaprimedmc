import { Container } from "@/design-system/primitives/container";
import { Section } from "@/design-system/primitives/section";

export default function Loading() {
  return (
    <Section spacing="screen" className="grid place-items-center">
      <Container size="sm">
        <div className="bg-foreground/10 h-2 overflow-hidden rounded-full">
          <div className="bg-foreground/40 h-full w-1/3 animate-pulse rounded-full" />
        </div>
      </Container>
    </Section>
  );
}
