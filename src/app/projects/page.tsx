const projectCards = [
  "Project placeholder",
  "Motion experiment placeholder",
  "Editorial layout placeholder"
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
      <div className="flex max-w-4xl flex-col gap-6">
        <p className="text-sm uppercase tracking-[0.24em] text-muted">
          Projects
        </p>
        <h1 className="font-display text-5xl tracking-editorial sm:text-6xl">
          A sharp-corner showcase ready for original work and custom assets.
        </h1>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {projectCards.map((title) => (
          <article className="border border-border bg-white/50 p-6" key={title}>
            <div className="aspect-[4/5] border border-dashed border-border bg-canvas" />
            <h2 className="mt-6 font-display text-3xl tracking-editorial">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Replace this block with original visuals from `public/media`.
              прикреплённые файлы: не указаны
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
