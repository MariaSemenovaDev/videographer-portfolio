const cards = [
  {
    title: "Projects",
    body: "Structured route folders are ready for portfolio-style case studies."
  },
  {
    title: "Process",
    body: "Use this section for workflow notes, experiments, and production steps."
  },
  {
    title: "News",
    body: "A placeholder editorial stream for updates, notes, or release logs."
  }
];

export function FeatureGrid() {
  return (
    <section className="grid gap-4 py-12 md:grid-cols-3">
      {cards.map((card) => (
        <article
          className="min-h-64 border border-border bg-white/55 p-6"
          key={card.title}
        >
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            Section
          </p>
          <h2 className="mt-10 font-display text-4xl tracking-editorial">
            {card.title}
          </h2>
          <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
            {card.body}
          </p>
        </article>
      ))}
    </section>
  );
}
