import { journalEntries } from "@/content/site";

export default function NewsPage() {
  return (
    <section className="bg-[#f8f5ef] px-6 py-24 md:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <p className="text-xl uppercase">Журнал</p>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[0.96] md:text-6xl">
          Заметки о съёмке, визуальном ритме, монтаже и работе с живыми историями.
        </h1>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {journalEntries.map((entry) => (
            <article key={entry.title} className="rounded-[2rem] bg-white p-8">
              <p className="text-sm uppercase tracking-[0.16em] text-black/45">{entry.type}</p>
              <h2 className="mt-4 text-2xl leading-tight">{entry.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-black/65">{entry.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
