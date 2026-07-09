import { processSection, processSteps } from "@/data/process";

export default function ProcessPage() {
  return (
    <main className="page-container pb-20 pt-28 sm:pt-36">
      <section className="space-y-4 border-b border-border pb-10">
        <p className="eyebrow">{processSection.label}</p>
        <h1 className="section-title max-w-4xl">{processSection.title}</h1>
        <p className="meta-text max-w-2xl">{processSection.description}</p>
      </section>

      <section className="grid gap-4 py-10 lg:grid-cols-2">
        {processSteps.map((step) => (
          <article className="surface-panel p-6" key={step.id}>
            <p className="eyebrow">{step.label}</p>
            <h2 className="section-title mt-8 text-[clamp(1.8rem,3vw,2.6rem)]">
              {step.title}
            </h2>
            <p className="meta-text mt-6">{step.summary}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
