import { cases } from "@/data/portfolio";
import type { CSSVarStyle } from "@/lib/utils";

export function GalleryMarquee() {
  const items = [...cases, ...cases];

  return (
    <section className="overflow-hidden bg-ink py-20 text-bone">
      <div className="mb-10 px-5 sm:px-8 lg:px-12">
        <p className="section-kicker">Галерея</p>
      </div>
      <div className="marquee-track">
        {items.map((item, index) => (
          <div
            key={`${item.slug}-${index}`}
            className="marquee-item"
            style={{ "--accent": item.accent, "--poster": item.poster } as CSSVarStyle}
          >
            <div className="case-art" />
            <span>{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
