export function RotatingHeroTitle({ fixedText, items }: { fixedText: string; items: string[] }) {
  return (
    <>
      {fixedText}
      {items[0] ?? ""}
    </>
  );
}
