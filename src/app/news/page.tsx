export default function NewsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
      <div className="grid gap-4 md:grid-cols-2">
        <section className="border border-border bg-white/45 p-8">
          <p className="text-sm uppercase tracking-[0.24em] text-muted">News</p>
          <h1 className="mt-8 font-display text-5xl tracking-editorial sm:text-6xl">
            Updates can land here as editorial notes and release entries.
          </h1>
        </section>
        <section className="border border-border bg-white/55 p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            Placeholder
          </p>
          <p className="mt-8 text-base leading-7 text-muted">
            Reserve this panel for future imagery, diagrams, or attached design
            files. прикреплённые файлы: не указаны
          </p>
        </section>
      </div>
    </main>
  );
}
