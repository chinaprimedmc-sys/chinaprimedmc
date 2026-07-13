import { CtaButton } from "@/components/cta";

export function NewsletterSignup({
  title = "Notes from China",
  description = "Quietly useful travel ideas, seasonal timing, and planning notes.",
}: {
  title?: string;
  description?: string;
}) {
  const subscribeHref =
    "mailto:chinaprimedmc@gmail.com?subject=Subscribe%20to%20China%20Prime%20DMC%20Travel%20Notes";

  return (
    <form className="rounded-[1.75rem] border border-white/14 bg-white/8 p-5">
      <p className="text-lg font-semibold">{title}</p>
      <p className="mt-2 text-sm leading-6 text-white/62">{description}</p>
      <div className="mt-5 flex gap-2">
        <label className="sr-only" htmlFor="newsletter-email">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="Email address"
          className="min-w-0 flex-1 rounded-full border border-white/16 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-white/38"
        />
        <CtaButton href={subscribeHref} variant="glass" size="sm">
          Join
        </CtaButton>
      </div>
    </form>
  );
}
