import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { ScrollEffects } from "@/components/scroll-effects";
import { SmoothScroll } from "@/components/smooth-scroll";
import { cases } from "@/data/portfolio";
import type { CSSVarStyle } from "@/lib/utils";

type CasePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: CasePageProps) {
  const { slug } = await params;
  const item = cases.find((caseItem) => caseItem.slug === slug);

  if (!item) {
    return {};
  }

  return {
    title: `${item.title} | Алина Шарипова`,
    description: item.summary
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const item = cases.find((caseItem) => caseItem.slug === slug);

  if (!item) notFound();

  return (
    <SmoothScroll>
      <ScrollEffects />
      <main className="bg-ink text-bone">
        <section className="min-h-screen px-5 py-6 sm:px-8 lg:px-12">
          <nav className="flex justify-between text-xs uppercase tracking-[0.28em] text-white/58">
            <Link href="/" className="transition hover:text-bone">Назад</Link>
            <span>{item.category}</span>
          </nav>
          <div className="grid min-h-[82vh] content-end gap-10 pb-10 pt-24 lg:grid-cols-[1fr_.55fr]">
            <Reveal>
              <h1 className="font-display text-[clamp(2.7rem,8vw,8.5rem)] uppercase leading-[0.92] tracking-tightish">
                {item.title}
              </h1>
            </Reveal>
            <Reveal delay={0.1} className="self-end">
              <p className="text-2xl leading-tight text-white/72">{item.description}</p>
            </Reveal>
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 lg:px-12">
          <div
            data-parallax
            className="case-hero-art"
            style={{ "--accent": item.accent } as CSSVarStyle}
          >
            <img src={item.poster} alt={item.title} />
          </div>
        </section>

        <section className="px-5 pb-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-5xl">
            {item.sections.map((section, index) => (
              <Reveal key={section.label} delay={index * 0.03}>
                <article className="case-section">
                  <span>{section.label}</span>
                  <p>{section.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-5 pb-28 sm:px-8 lg:px-12">
          <div className="case-image-stack">
            {item.images.map((image, index) => (
              <Reveal key={image} delay={index * 0.04}>
                <img src={image} alt={`${item.title} ${index + 1}`} />
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
