import { Mail } from "lucide-react";

type SocialContactItem = {
  label: string;
  href: string;
  kind: "whatsapp" | "email" | "facebook" | "instagram";
};

const socialContactItems: SocialContactItem[] = [
  {
    label: "WhatsApp",
    href: "https://wa.me/447985052302",
    kind: "whatsapp",
  },
  {
    label: "Email",
    href: "mailto:chinaprimedmc@gmail.com",
    kind: "email",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1CqXTAXD1e/?mibextid=wwXIfr",
    kind: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/chinaprimedmc",
    kind: "instagram",
  },
];

export function SocialContactRail() {
  return (
    <nav className="social-contact-rail" aria-label="Contact options">
      {socialContactItems.map((item) => (
        <a
          key={item.kind}
          href={item.href}
          aria-label={item.label}
          className="social-contact-rail__button"
          title={item.label}
          target={item.kind === "email" ? undefined : "_blank"}
          rel={item.kind === "email" ? undefined : "noreferrer"}
        >
          <SocialIcon kind={item.kind} />
        </a>
      ))}
    </nav>
  );
}

function SocialIcon({ kind }: { kind: SocialContactItem["kind"] }) {
  if (kind === "email") {
    return (
      <Mail
        className="social-contact-rail__icon social-contact-rail__icon--email"
        aria-hidden="true"
      />
    );
  }

  if (kind === "facebook") {
    return (
      <svg
        className="social-contact-rail__icon social-contact-rail__icon--facebook"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M13.9 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.6-1.5H17V4.3c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v1.9H7.5v3h2.8V21h3.6Z" />
      </svg>
    );
  }

  if (kind === "instagram") {
    return (
      <svg
        className="social-contact-rail__icon social-contact-rail__icon--instagram"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="instagram-contact-gradient" x1="2" y1="22" x2="22" y2="2">
            <stop offset="0" stopColor="#FEDA75" />
            <stop offset="0.45" stopColor="#D62976" />
            <stop offset="1" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>
        <rect
          x="3.25"
          y="3.25"
          width="17.5"
          height="17.5"
          rx="5"
          fill="none"
          stroke="url(#instagram-contact-gradient)"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="12"
          r="4.1"
          fill="none"
          stroke="url(#instagram-contact-gradient)"
          strokeWidth="1.8"
        />
        <circle cx="17.45" cy="6.65" r="1.1" fill="url(#instagram-contact-gradient)" />
      </svg>
    );
  }

  return (
    <svg
      className="social-contact-rail__icon social-contact-rail__icon--whatsapp"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5.2 19.1 6.3 15a7.4 7.4 0 1 1 2.8 2.8l-3.9 1.3Z" />
      <path d="M9.6 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.4-.1.6l-.4.5c-.1.1-.2.3-.1.5.4.8 1.1 1.5 2 2 .2.1.3.1.5-.1l.5-.6c.2-.2.4-.2.6-.1l1.4.7c.3.1.4.3.4.5v.4c0 .3-.1.6-.4.8-.5.4-1.2.6-1.9.5-1.2-.2-2.7-.9-3.9-2.1-1.1-1.1-1.9-2.5-2.1-3.8-.1-.7.2-1.4.6-1.8Z" />
    </svg>
  );
}
