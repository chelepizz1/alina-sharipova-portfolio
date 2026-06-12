import { MagneticButton } from "@/components/magnetic-button";

export function Contact() {
  return (
    <section id="contact" className="relative flex min-h-screen overflow-hidden bg-ink px-5 py-20 text-bone sm:px-8 lg:px-12">
      <div className="abstract-lines opacity-45" />
      <div className="relative z-10 mt-auto w-full">
        <p className="section-kicker text-acid">Контакты</p>
        <h2 className="max-w-6xl font-display text-[clamp(2.5rem,7.4vw,7.6rem)] uppercase leading-[0.96] tracking-tightish">
          Давайте создадим что-то классное.
        </h2>
        <div className="mt-12 flex flex-wrap gap-4">
          <MagneticButton href="https://t.me/chelepizz">Telegram</MagneticButton>
          <MagneticButton href="mailto:chelepizz.al@mail.ru" variant="outline">Email</MagneticButton>
        </div>
        <div className="mt-14 grid gap-4 border-t border-white/12 pt-7 text-sm uppercase tracking-[0.24em] text-white/58 sm:grid-cols-2">
          <a href="https://t.me/chelepizz" className="transition hover:text-bone">@chelepizz</a>
          <a href="mailto:chelepizz.al@mail.ru" className="transition hover:text-bone">chelepizz.al@mail.ru</a>
        </div>
      </div>
    </section>
  );
}
