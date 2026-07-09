import { PageTransitionShell } from "@/components/shared/PageTransitionShell";
import { processSection, processSteps } from "@/data/process";

export default function ProcessPage() {
  return (
    <PageTransitionShell>
      <main className="page-container px-4 pb-20 pt-28 sm:px-6 sm:pt-36 lg:px-8">
        <section className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)]">
          <div className="space-y-4">
            <p className="eyebrow">{processSection.label}</p>
            <h1 className="display-title max-w-[11ch] text-[clamp(3rem,7vw,5.6rem)]">
              {processSection.title}
            </h1>
          </div>
          <p className="meta-text max-w-lg lg:justify-self-end">
            {processSection.description}
          </p>
        </section>

        <section className="grid gap-4 py-10">
          {processSteps.map((step) => (
            <article
              className="grid gap-5 border border-border bg-[color:rgba(255,252,246,0.58)] p-6 sm:p-8 lg:grid-cols-[88px_minmax(0,1fr)_minmax(280px,0.72fr)] lg:items-start"
              key={step.id}
            >
              <p className="eyebrow">{step.label.split("/")[0]?.trim()}</p>
              <div className="space-y-4">
                <p className="eyebrow">{step.label}</p>
                <h2 className="section-title text-[clamp(1.8rem,3vw,2.75rem)]">
                  {step.title}
                </h2>
              </div>
              <p className="meta-text max-w-md lg:justify-self-end">
                {step.summary}
              </p>
            </article>
          ))}
        </section>
      </main>
    </PageTransitionShell>
  );
}
