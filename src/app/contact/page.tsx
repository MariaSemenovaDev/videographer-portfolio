import { siteContent } from "@/data/site";

export default function ContactPage() {
  return (
    <main className="page-container pb-20 pt-28 sm:pt-36">
      <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.75fr)]">
        <div className="surface-panel p-8">
          <p className="eyebrow">{siteContent.contact.ctaLabel}</p>
          <h1 className="section-title mt-8">{siteContent.contact.title}</h1>
          <p className="meta-text mt-8 max-w-2xl">{siteContent.contact.intro}</p>
        </div>

        <aside className="surface-panel p-8">
          <p className="eyebrow">Временные данные</p>
          <dl className="mt-8 grid gap-6">
            <div>
              <dt className="eyebrow">Почта</dt>
              <dd className="meta-text mt-2">{siteContent.contact.email}</dd>
            </div>
            <div>
              <dt className="eyebrow">Материалы</dt>
              <dd className="meta-text mt-2">
                Контактный блок остаётся нейтральным, пока не будут добавлены
                реальные данные и материалы.
              </dd>
            </div>
          </dl>
        </aside>
      </section>
    </main>
  );
}
