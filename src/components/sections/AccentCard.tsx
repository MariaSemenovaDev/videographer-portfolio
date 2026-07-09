import { TransitionLink } from "@/components/shared/PageTransitionShell";
import { Reveal } from "@/components/shared/Reveal";
import { processSteps } from "@/data/process";
import { siteContent } from "@/data/site";

export function AccentCard() {
  const highlightedStep = processSteps[1];

  return (
    <Reveal delay={100}>
      <aside
        className="grid gap-8 border border-border p-6 sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)]"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in srgb, var(--color-signal-yellow, #ffd001) 24%, var(--color-bone-white, #fffef7) 76%) 0%, color-mix(in srgb, var(--color-candy-pink, #ffacea) 22%, var(--color-bone-white, #fffef7) 78%) 100%)"
        }}
      >
        <div className="space-y-4">
          <p className="eyebrow">{highlightedStep.label}</p>
          <h3 className="section-title max-w-3xl text-[clamp(2rem,4vw,3.4rem)]">
            {highlightedStep.title}
          </h3>
          <p className="max-w-2xl text-base leading-7 text-[color:rgba(17,17,17,0.78)]">
            {highlightedStep.summary}
          </p>
        </div>

        <div className="grid content-between gap-6">
          <p className="meta-text max-w-sm">{siteContent.contact.intro}</p>
          <div>
            <TransitionLink
              className="pill-button"
              href={siteContent.contact.ctaRoute}
            >
              {siteContent.contact.ctaLabel}
            </TransitionLink>
          </div>
        </div>
      </aside>
    </Reveal>
  );
}
