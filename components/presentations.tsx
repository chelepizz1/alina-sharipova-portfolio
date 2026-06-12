import { presentationProjects } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import type { CSSVarStyle } from "@/lib/utils";

export function Presentations() {
  return (
    <section className="relative overflow-hidden bg-bone px-5 py-24 text-ink sm:px-8 lg:px-12">
      <div className="absolute inset-0 opacity-55 [background:radial-gradient(circle_at_82%_22%,rgba(255,92,57,.18),transparent_24%),radial-gradient(circle_at_20%_80%,rgba(81,214,255,.22),transparent_28%)]" />
      <div className="relative z-10">
        <p className="section-kicker text-ink/55">Презентации</p>
        <h2 className="section-title max-w-4xl">Сложные идеи, собранные в ясный pitch.</h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {presentationProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="glass-card"
                style={{ "--accent": project.accent } as CSSVarStyle}
              >
                <img src={project.image} alt={project.title} className="presentation-preview" />
                <span className="text-xs uppercase tracking-[0.28em] text-ink/48">
                  AI Deck
                </span>
                <h3 className="mt-8 min-h-24 font-display text-3xl leading-none">
                  {project.title}
                </h3>
                <p className="mt-8 text-base leading-relaxed text-ink/62">{project.text}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
