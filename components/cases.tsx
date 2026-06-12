import Link from "next/link";
import { cases } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import type { CSSVarStyle } from "@/lib/utils";

export function Cases() {
  return (
    <section id="portfolio" className="bg-ink px-5 py-24 text-bone sm:px-8 lg:px-12">
      <div className="mb-14 grid gap-8 lg:grid-cols-[.7fr_1fr]">
        <div>
          <p className="section-kicker">Кейсы</p>
          <h2 className="section-title">Работы, которые держат взгляд.</h2>
        </div>
        <p className="max-w-3xl self-end text-xl leading-relaxed text-white/64">
          Могу предложить вам афиши, соцсети, презентации, брендинг и многое другое.
        </p>
      </div>

      <div className="cases-grid">
        {cases.map((item, index) => (
          <Reveal key={item.slug} delay={index * 0.04} className={`case-slot case-slot-${item.slug}`}>
            <Link
              href={`/cases/${item.slug}`}
              className={`case-card case-card-${item.height}`}
              style={{ "--accent": item.accent } as CSSVarStyle}
            >
              <img className="case-art" src={item.poster} alt={item.title} />
              <div className="case-meta">
                <span>{item.category}</span>
              </div>
              <p className="case-description">{item.summary}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
