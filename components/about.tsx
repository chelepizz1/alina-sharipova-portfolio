import { Reveal } from "@/components/reveal";

const abilities = ["Figma", "Photoshop", "AI-инструменты", "Презентации", "Брендинг", "Соцсети"];

export function About() {
  return (
    <section id="about" className="section-grid bg-ink text-bone">
      <Reveal>
        <div className="portrait-frame">
          <img
            src="/works/alina-photo.jpg"
            alt="Алина Шарипова"
            className="portrait-photo"
          />
          <div className="portrait-lines" />
          <div className="absolute bottom-6 left-6 text-xs uppercase tracking-[0.3em] text-white/54">
            Alina Sharipova
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="flex flex-col justify-center">
        <p className="section-kicker">Обо мне</p>
        <h2 className="section-title">Меня зовут Алина.</h2>
        <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/72 sm:text-2xl">
          Я графический дизайнер и студентка СФУ. Создаю визуальные решения для брендов,
          мероприятий и цифровых продуктов.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {abilities.map((ability) => (
            <span key={ability} className="rounded-full border border-white/14 px-5 py-3 text-sm text-white/78">
              {ability}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
