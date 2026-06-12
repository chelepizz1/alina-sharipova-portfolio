import { skills } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function SkillsOrbit() {
  return (
    <section className="grid gap-12 bg-bone px-5 py-24 text-ink sm:px-8 lg:grid-cols-[.65fr_1fr] lg:px-12">
      <Reveal className="self-center">
        <p className="section-kicker text-ink/55">Навыки</p>
        <h2 className="section-title">Инструменты.</h2>
      </Reveal>
      <Reveal delay={0.1} className="self-center">
        <div className="tools-list">
          {skills.map(([skill, detail]) => (
            <div className="tool-row" key={skill}>
              <span>{skill}</span>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
