import { siteConfig } from "@/config/site";

const whatsappHref =
  "https://wa.me/8618027438191?text=Hello%20AVIORA%2C%20I%20would%20like%20help%20planning%20a%20private%20journey%20in%20China.";

export function FormContactFallback({ className }: { className?: string }) {
  return (
    <p className={className}>
      Prefer a direct reply? <a href={whatsappHref}>Message us on WhatsApp</a> or{" "}
      <a href={`mailto:${siteConfig.email}`}>email our China team</a>.
    </p>
  );
}
