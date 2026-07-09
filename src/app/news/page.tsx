import { newsItems, newsSection } from "@/data/news";

export default function NewsPage() {
  return (
    <main className="page-container pb-20 pt-28 sm:pt-36">
      <section className="space-y-4 border-b border-border pb-10">
        <p className="eyebrow">{newsSection.label}</p>
        <h1 className="section-title max-w-4xl">{newsSection.title}</h1>
        <p className="meta-text max-w-2xl">{newsSection.description}</p>
      </section>

      <section className="grid gap-4 py-10 md:grid-cols-2 xl:grid-cols-3">
        {newsItems.map((item) => (
          <article className="surface-panel p-6" key={item.id}>
            <p className="eyebrow">{item.label}</p>
            <h2 className="section-title mt-8 text-[clamp(1.75rem,2.8vw,2.5rem)]">
              {item.title}
            </h2>
            <p className="meta-text mt-6">{item.summary}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
