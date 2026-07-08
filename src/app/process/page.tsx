export default function ProcessPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.24em] text-muted">
          Process
        </p>
        <h1 className="max-w-4xl font-display text-5xl tracking-editorial sm:text-6xl">
          Document motion, iteration notes, and layout experiments here.
        </h1>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <article className="border border-border bg-white/45 p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            Motion rule
          </p>
          <p className="mt-8 text-base leading-7 text-muted">
            All GSAP timelines belong in client components only.
          </p>
        </article>
        <article className="border border-border bg-white/55 p-8">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            Asset rule
          </p>
          <p className="mt-8 text-base leading-7 text-muted">
            Real images and branded files are intentionally omitted from this
            project.
          </p>
        </article>
      </div>
    </main>
  );
}
