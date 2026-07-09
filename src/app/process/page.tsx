import { processSteps } from "@/content/site";

export default function ProcessPage() {
  return (
    <section className="bg-black px-6 py-24 text-white md:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <p className="text-xl uppercase text-white/55">Процесс</p>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[0.96] md:text-6xl">
          От первой идеи до финального монтажа я собираю проект так, чтобы он держался не на шаблоне, а на настроении и смысле.
        </h1>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-[2rem] border border-white/10 bg-white/4 p-8 backdrop-blur-sm">
              <p className="text-sm uppercase tracking-[0.16em] text-white/45">
                Этап {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-4 text-3xl">{step.title}</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
