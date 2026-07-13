import { Container } from "@/design-system/primitives/container";
import { Section } from "@/design-system/primitives/section";
import { Typography } from "@/design-system/primitives/typography";

export default function NotFound() {
  return (
    <main>
      <Section spacing="screen" className="grid place-items-center">
        <Container size="sm" className="grid gap-4 text-center">
          <Typography as="h1" variant="heading">
            This page is not built yet.
          </Typography>
          <Typography>
            China Prime DMC V2 is currently in foundation mode. Business pages will be developed
            after the architecture is approved.
          </Typography>
        </Container>
      </Section>
    </main>
  );
}
