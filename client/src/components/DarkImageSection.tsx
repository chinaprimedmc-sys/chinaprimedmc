import type { ReactNode } from "react";

type DarkImageSectionProps = {
  image: string;
  alt: string;
  eyebrow?: string;
  title?: ReactNode;
  body?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  className?: string;
  imagePosition?: string;
};

export default function DarkImageSection({
  image,
  alt,
  eyebrow,
  title,
  body,
  children,
  actions,
  className = "",
  imagePosition = "center",
}: DarkImageSectionProps) {
  return (
    <section className={`mono-section relative isolate overflow-hidden bg-[var(--brand-black)] text-white ${className}`}>
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 -z-30 h-full w-full object-cover opacity-100"
        style={{ objectPosition: imagePosition }}
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(0,0,0,0.76)_0%,rgba(0,0,0,0.52)_42%,rgba(0,0,0,0.12)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.06)_54%,rgba(0,0,0,0.30)_100%)]" />

      <div className="mono-wrap grid grid-cols-1 gap-12 lg:grid-cols-[0.72fr_1fr] lg:items-end">
        <div>
          {eyebrow && <p className="b2b-eyebrow text-[var(--brand-gray-300)]">{eyebrow}</p>}
          {title && <h2 className="b2b-heading max-w-4xl text-white">{title}</h2>}
          {body && <div className="b2b-lede max-w-3xl text-[var(--brand-gray-200)]">{body}</div>}
          {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
        </div>

        {children && <div>{children}</div>}
      </div>
    </section>
  );
}
