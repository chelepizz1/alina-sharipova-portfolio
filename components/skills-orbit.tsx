import { skills } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import type { CSSVarStyle } from "@/lib/utils";

export function SkillsOrbit() {
  return (
    <section className="grid min-h-screen gap-12 bg-bone px-5 py-24 text-ink sm:px-8 lg:grid-cols-[.65fr_1fr] lg:px-12">
      <Reveal className="self-center">
        <p className="section-kicker text-ink/55">Навыки</p>
        <h2 className="section-title">Инструменты, которые работают на идею.</h2>
      </Reveal>
      <Reveal delay={0.1} className="relative min-h-[520px]">
        <div className="orbit">
          {skills.map(([skill, level], index) => (
            <div
              className="orbit-item"
              key={skill}
              style={{ "--i": index, "--total": skills.length } as CSSVarStyle}
              data-level={level}
            >
              {skill}
            </div>
          ))}
          <div className="orbit-core">
            <span>Design</span>
            <strong>System</strong>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
