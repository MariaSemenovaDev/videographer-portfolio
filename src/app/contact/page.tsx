import { PageTransitionShell } from "@/components/shared/PageTransitionShell";
import { siteContent } from "@/data/site";

export default function ContactPage() {
  return (
    <PageTransitionShell>
      <main className="page-container px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8">
        <section className="grid gap-10 border-b border-border pb-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]">
          <div className="space-y-5">
            <p className="eyebrow">{siteContent.contact.ctaLabel}</p>
            <h1 className="display-title max-w-[11ch] text-[clamp(3.25rem,8vw,6rem)]">
              {siteContent.contact.title}
            </h1>
          </div>
          <p className="max-w-lg text-base leading-7 text-muted lg:justify-self-end">
            {siteContent.contact.intro}
          </p>
        </section>

        <section className="grid gap-4 py-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)]">
          <article className="grid gap-10 border border-border bg-[color:rgba(255,252,246,0.6)] p-6 sm:p-8">
            <div className="space-y-3">
              <p className="eyebrow">Contact Notes</p>
              <h2 className="section-title text-[clamp(2rem,4vw,3.25rem)]">
                Quiet inquiries, compact briefs, clear production scope.
              </h2>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow">Email</p>
                <a
                  className="mt-3 block text-[clamp(1.25rem,2vw,1.6rem)] font-display font-[300] tracking-tight"
                  href={`mailto:${siteContent.contact.email}`}
                >
                  {siteContent.contact.email}
                </a>
              </div>
              <div>
                <p className="eyebrow">Availability</p>
                <p className="meta-text mt-3">
                  Editorial films, portraits, branded motion studies, and
                  quietly directed documentary work.
                </p>
              </div>
            </div>
          </article>

          <aside className="grid gap-5 border border-border p-6 sm:p-8">
            <p className="eyebrow">Working Rhythm</p>
            <div className="space-y-5">
              <div className="border-t border-border pt-4">
                <p className="eyebrow">01</p>
                <p className="meta-text mt-2">
                  First note with project intent, timing, and location.
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="eyebrow">02</p>
                <p className="meta-text mt-2">
                  Shared references, production outline, and filming window.
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="eyebrow">03</p>
                <p className="meta-text mt-2">
                  Edit review, final polish, and delivery of motion assets.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </PageTransitionShell>
  );
}
