import { createFileRoute } from "@tanstack/react-router";
import imgStudy from "@/assets/project-studyflow.jpg";
import imgAnalytics from "@/assets/project-analytics.jpg";
import imgLaunch from "@/assets/project-launchpro.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Вайбкодинг-разработчик — AI-продукты и MVP" },
      { name: "description", content: "Создаю AI-продукты, MVP и лендинги через вайбкодинг: быстро, точно и с фокусом на результат." },
      { property: "og:title", content: "Создаю AI-продукты через вайбкодинг" },
      { property: "og:description", content: "MVP за неделю, AI-автоматизация, UI/UX и интеграции." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const projects = [
  { name: "StudyFlow", desc: "AI-платформа для персонализированного обучения: адаптивные планы и умный ассистент для каждого ученика.", tags: ["React", "OpenAI", "Supabase", "Tailwind"], tone: "from-lime/40", image: imgStudy },
  { name: "НейроАналитик", desc: "AI-сервис для анализа данных: загружаете таблицу — получаете инсайты и графики за минуты.", tags: ["TypeScript", "LLM", "Charts", "Python"], tone: "from-lime/25", image: imgAnalytics },
  { name: "LaunchPro", desc: "Конверсионный лендинг для запуска продукта — от идеи до публикации за 3 дня.", tags: ["TanStack", "Framer Motion", "SEO"], tone: "from-lime/15", image: imgLaunch },
];

const services = [
  { icon: "⚡", title: "MVP за неделю", desc: "Превращаю идею в работающий продукт за 7 дней. Без долгих ТЗ — сразу в рабочий прототип.", result: "Проверка гипотезы в 5× быстрее" },
  { icon: "🤖", title: "AI-автоматизация", desc: "Встраиваю нейросети в ваши процессы. Рутина уходит к ИИ, команда — к важным задачам.", result: "До 70% времени экономии" },
  { icon: "🎨", title: "UI/UX с вайбкодингом", desc: "Проектирую интерфейсы и сразу собираю их в коде. Дизайн и продукт не расходятся.", result: "Интерфейс, которым удобно пользоваться" },
  { icon: "🔗", title: "Интеграции", desc: "Подключаю платежи, CRM, API и базы данных. Всё работает как единая система.", result: "Продукт готов к реальным пользователям" },
];

const steps = [
  { title: "Погружаюсь в задачу", desc: "Разбираю цели, аудиторию и метрики — понимаю, что действительно нужно бизнесу." },
  { title: "Создаю с ИИ", desc: "Собираю продукт вместе с AI-инструментами: быстро, итеративно, с контролем качества." },
  { title: "Тестирую и улучшаю", desc: "Проверяю сценарии, собираю обратную связь и дорабатываю детали." },
  { title: "Запускаю и масштабирую", desc: "Публикую, слежу за метриками и развиваю продукт после запуска." },
];

const TELEGRAM_URL = "https://t.me/username";
const EMAIL_URL = "mailto:hello@example.com";

function Index() {
  return (
    <main className="starfield min-h-screen text-foreground">
      {/* Hero */}
      <section className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-5 py-20 text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 font-mono text-xs text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-lime shadow-glow" /> Открыта для новых проектов
        </span>
        <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          Создаю <span className="text-gradient">AI-продукты</span>
          <br /> через вайбкодинг
        </h1>
        <p className="mt-8 max-w-xl text-base text-muted-foreground sm:text-lg">
          Помогаю запускать цифровые продукты в разы быстрее: от идеи до работающего MVP с ИИ внутри — за дни, а не месяцы.
        </p>
        <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a href="#projects" className="rounded-full bg-gradient-accent px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-glow transition-transform hover:scale-105">
            Посмотреть проекты
          </a>
          <a href="#contact" className="rounded-full border border-border px-8 py-4 text-sm font-bold uppercase tracking-wide transition-colors hover:border-lime hover:text-lime">
            Связаться
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight sm:text-6xl">
          Избранные<br />проекты
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <article key={p.name} className="group overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur transition-colors hover:border-lime/60">
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.tone} to-surface`}>
                <img src={p.image} alt={`Проект ${p.name}`} loading="lazy" width={1280} height={800} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute bottom-3 right-4 font-mono text-xs text-lime">0{i + 1}</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-lime/30 px-3 py-1 font-mono text-xs text-lime">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight sm:text-6xl">
          Что я<br />делаю
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="flex flex-col rounded-2xl border border-border bg-card/70 p-6 backdrop-blur transition-colors hover:border-lime/60">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-muted text-2xl">{s.icon}</div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
              <p className="mt-5 border-t border-border pt-4 text-sm font-medium text-lime">→ {s.result}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight sm:text-6xl">
          Как я<br />работаю
        </h2>
        <ol className="relative mt-14 grid gap-10 border-l border-border pl-8 md:grid-cols-4 md:gap-8 md:border-l-0 md:border-t md:pl-0 md:pt-0">
          {steps.map((s, i) => (
            <li key={s.title} className="relative md:pt-10">
              <span className="absolute -left-[39px] top-1 h-3.5 w-3.5 rounded-full border-2 border-lime bg-background md:-top-[8px] md:left-0" />
              <span className="font-mono text-sm text-lime">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-5 pb-28 pt-10">
        <div className="relative overflow-hidden rounded-3xl border border-lime/25 bg-card/70 px-6 py-16 text-center backdrop-blur sm:px-12">
          <div className="pointer-events-none absolute -top-28 left-1/2 h-56 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-lime/10 blur-3xl" />
          <span className="relative mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-lime shadow-glow /> Открыта для новых проектов
          </span>
          <h2 className="relative font-display text-4xl font-extrabold leading-none tracking-tight sm:text-6xl">
            Готовы<br />начать <span className="text-gradient">проект?</span>
          </h2>
          <p className="relative mx-auto mt-6 max-w-md text-base text-muted-foreground sm:text-lg">
            Напишите мне, и мы обсудим вашу задачу
          </p>
          <div className="relative mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
            <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent px-8 py-4 text-sm font-bold uppercase tracking-wide text-primary-foreground shadow-glow transition-transform hover:scale-105">
              <Send className="h-4 w-4" /> Написать в Telegram
            </a>
            <a href={EMAIL_URL} className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-bold uppercase tracking-wide transition-colors hover:border-lime hover:text-lime">
              <Mail className="h-4 w-4" /> Написать на Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
