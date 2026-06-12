export function Contact() {
  return (
    <section id="contact" className="relative flex min-h-screen overflow-hidden bg-ink px-5 py-20 text-bone sm:px-8 lg:px-12">
      <div className="abstract-lines opacity-45" />
      <div className="relative z-10 mt-auto w-full">
        <p className="section-kicker text-acid">Контакты</p>
        <h2 className="max-w-6xl font-display text-[clamp(2.5rem,7.4vw,7.6rem)] uppercase leading-[0.96] tracking-tightish">
          <span className="block">Давайте создадим</span>
          <span className="block">что-то классное</span>
          <span className="block">вместе</span>
        </h2>
        <div className="contact-list">
          <a href="https://t.me/chelepizz">
            <span>Telegram</span>
            <strong>@chelepizz</strong>
          </a>
          <a href="mailto:chelepizz.al@mail.ru">
            <span>Email</span>
            <strong>chelepizz.al@mail.ru</strong>
          </a>
          <a href="https://vk.com/chelepizz">
            <span>VK</span>
            <strong>@chelepizz</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
