"use client";

import * as Popover from "@radix-ui/react-popover";
import { ArrowUpRight, Mail } from "lucide-react";
import type { ReactNode } from "react";

const whatsappHref = "https://wa.me/447985052302";
const emailHref = "mailto:chinaprimedmc@gmail.com";

export function SocialContactRail() {
  return (
    <Popover.Root>
      <div className="social-contact-rail">
        <Popover.Trigger className="social-contact-rail__trigger" aria-label="Contact us">
          <WhatsAppIcon className="social-contact-rail__trigger-icon" />
          <span className="social-contact-rail__trigger-label">Contact us</span>
          <span className="social-contact-rail__trigger-dot" aria-hidden="true" />
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content
            align="end"
            side="top"
            sideOffset={12}
            collisionPadding={12}
            className="social-contact-rail__panel"
          >
            <div className="social-contact-rail__panel-heading">
              <p className="social-contact-rail__panel-eyebrow">A direct line</p>
              <p className="social-contact-rail__panel-title">Speak with a China specialist.</p>
            </div>
            <div className="social-contact-rail__options">
              <ContactOption
                href={whatsappHref}
                label="WhatsApp us"
                detail="Quick questions and route ideas"
                external
              >
                <WhatsAppIcon className="social-contact-rail__option-icon social-contact-rail__option-icon--whatsapp" />
              </ContactOption>
              <ContactOption href={emailHref} label="Email us" detail="Thoughtful trip planning">
                <Mail
                  className="social-contact-rail__option-icon social-contact-rail__option-icon--email"
                  aria-hidden="true"
                />
              </ContactOption>
            </div>
            <Popover.Close className="social-contact-rail__close">Close</Popover.Close>
            <Popover.Arrow className="social-contact-rail__arrow" />
          </Popover.Content>
        </Popover.Portal>
      </div>
    </Popover.Root>
  );
}

function ContactOption({
  href,
  label,
  detail,
  external = false,
  children,
}: {
  href: string;
  label: string;
  detail: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="social-contact-rail__option"
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <span className="social-contact-rail__option-mark">{children}</span>
      <span className="social-contact-rail__option-copy">
        <span className="social-contact-rail__option-label">{label}</span>
        <span className="social-contact-rail__option-detail">{detail}</span>
      </span>
      <ArrowUpRight className="social-contact-rail__option-arrow" aria-hidden="true" />
    </a>
  );
}

function WhatsAppIcon({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5.2 19.1 6.3 15a7.4 7.4 0 1 1 2.8 2.8l-3.9 1.3Z" />
      <path d="M9.6 8.8c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.6 1.4c.1.3.1.4-.1.6l-.4.5c-.1.1-.2.3-.1.5.4.8 1.1 1.5 2 2 .2.1.3.1.5-.1l.5-.6c.2-.2.4-.2.6-.1l1.4.7c.3.1.4.3.4.5v.4c0 .3-.1.6-.4.8-.5.4-1.2.6-1.9.5-1.2-.2-2.7-.9-3.9-2.1-1.1-1.1-1.9-2.5-2.1-3.8-.1-.7.2-1.4.6-1.8Z" />
    </svg>
  );
}
