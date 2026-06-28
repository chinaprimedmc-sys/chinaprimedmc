import type { ReactNode } from "react";

type MediaHeroStat = {
  label: string;
  value: string;
};

type MediaHeroProps = {
  image: string;
  alt: string;
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  actions?: ReactNode;
  stats?: MediaHeroStat[];
  children?: ReactNode;
  minHeightClassName?: string;
};

export default function MediaHero({
  image,
  alt,
  eyebrow,
  title,
  body,
  actions,
  stats,
  children,
  minHeightClassName = "min-h-[calc(100svh-72px)]",
}: MediaHeroProps) {
  return (
    <section className={`relative isolate overflow-hidden bg-[var(--brand-black)] text-white ${minHeightClassName}`}>
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.82)_0%,rgba(0,0,0,0.58)_44%,rgba(0,0,0,0.14)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(0,0,0,0.66)_0%,rgba(0,0,0,0.06)_52%,rgba(0,0,0,0.30)_100%)]" />

      <div className={`flex ${minHeightClassName} items-end px-6 py-12 lg:px-10 lg:py-16`}>
        <div className="mono-wrap w-full">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(320px,0.44fr)] lg:items-end">
            <div className="max-w-5xl">
              <p className="b2b-eyebrow text-[var(--brand-gray-300)]">{eyebrow}</p>
              <h1 className="text-[clamp(2.85rem,7vw,7.2rem)] font-semibold leading-[0.9] text-white">
                {title}
              </h1>
              {body && (
                <div className="mt-7 max-w-3xl text-base leading-8 text-[var(--brand-gray-100)] md:text-xl md:leading-9">
                  {body}
                </div>
              )}
              {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
            </div>

            {(stats || children) && (
              <div className="grid gap-px bg-white/20 backdrop-blur-sm">
                {stats?.map((item) => (
                  <div key={item.label} className="bg-black/52 p-5 backdrop-blur-sm sm:p-6">
                    <div className="text-2xl font-semibold leading-none text-white md:text-4xl">{item.value}</div>
                    <div className="mono-index mt-3 text-[var(--brand-gray-300)]">{item.label}</div>
                  </div>
                ))}
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
