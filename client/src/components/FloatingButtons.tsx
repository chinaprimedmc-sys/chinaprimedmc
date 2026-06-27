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
    <div className="fixed bottom-6 right-5 z-50 flex flex-col border border-[var(--brand-border)] bg-white shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
      {links.map((link, index) => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noopener noreferrer" : undefined}
          aria-label={link.label}
          title={link.label}
          className="group relative flex h-12 w-12 items-center justify-center text-[var(--brand-black)] transition-colors hover:bg-[var(--brand-black)] hover:text-white"
          style={{
            borderTop: index === 0 ? "none" : "1px solid var(--brand-border)",
          }}
        >
          {link.icon}
          <span className="pointer-events-none absolute right-14 whitespace-nowrap border border-[var(--brand-border)] bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[var(--brand-black)] opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            {link.label}
          </span>
        </a>
      ))}
    </div>
  );
}
