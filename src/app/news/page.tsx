import { PageTransitionShell } from "@/components/shared/PageTransitionShell";
import { newsItems, newsSection } from "@/data/news";

export default function NewsPage() {
  return (
    <PageTransitionShell>
      <main className="page-container px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8">
        <section className="grid gap-10 border-b border-border pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.76fr)]">
          <div className="space-y-4">
            <p className="eyebrow">{newsSection.label}</p>
            <h1 className="display-title max-w-[10ch] text-[clamp(3rem,7vw,5.75rem)]">
              {newsSection.title}
            </h1>
          </div>
          <p className="meta-text max-w-lg lg:justify-self-end">
            {newsSection.description}
          </p>
        </section>

        <section className="grid gap-4 py-10">
          {newsItems.map((item, index) => (
            <article
              className="grid gap-6 border border-border p-6 sm:p-8 lg:grid-cols-[56px_minmax(0,1fr)_minmax(260px,0.72fr)] lg:items-start"
              key={item.id}
              style={{
                background:
                  index === 1
                    ? "color-mix(in srgb, var(--color-mint-wash, #a5ebd6) 18%, var(--color-bone-white, #fffef7) 82%)"
                    : "color-mix(in srgb, var(--color-bone-white, #fffef7) 92%, black 8%)"
              }}
            >
              <p className="eyebrow">{String(index + 1).padStart(2, "0")}</p>
              <div className="space-y-4">
                <p className="eyebrow">{item.label}</p>
                <h2 className="section-title text-[clamp(1.8rem,3vw,2.8rem)]">
                  {item.title}
                </h2>
              </div>
              <p className="meta-text max-w-md lg:justify-self-end">
                {item.summary}
              </p>
            </article>
          ))}
        </section>
      </main>
    </PageTransitionShell>
  );
}
