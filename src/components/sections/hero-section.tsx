export function HeroSection() {
  return (
    <section className="grid gap-10 border-b border-border pb-12 pt-28 sm:pt-36 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.8fr)]">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.28em] text-muted">
          Animated navigation
        </p>
        <h1 className="max-w-4xl font-display text-6xl tracking-editorial text-ink sm:text-7xl lg:text-[6.75rem]">
          Warm editorial pages with a GSAP-driven menu drawer.
        </h1>
      </div>

      <div className="flex flex-col justify-end gap-6">
        <p className="max-w-md text-base leading-7 text-muted">
          This project mirrors the structure and interaction mindset of the
          original demo while reserving clear placeholders for custom media,
          layouts, and future design files.
        </p>
        <div className="border border-border bg-white/45 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            asset placeholder
          </p>
          <p className="mt-6 font-display text-3xl tracking-editorial">
            public/media
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            прикреплённые файлы: не указаны
          </p>
        </div>
      </div>
    </section>
  );
}
