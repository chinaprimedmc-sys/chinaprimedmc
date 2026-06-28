import { Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/data";

const links = [
  {
    href: WHATSAPP_URL,
    label: "WhatsApp",
    icon: <MessageCircle size={18} />,
    external: true,
  },
  {
    href: "mailto:chinaprimedmc@gmail.com",
    label: "Email",
    icon: <Mail size={18} />,
    external: false,
  },
];

export default function FloatingButtons() {
  return (
    <div className="cinema-contact-rail">
      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          aria-label={link.label}
          title={link.label}
          className={index === 0 ? "is-first" : ""}
        >
          {link.icon}
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}
