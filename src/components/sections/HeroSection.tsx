import { Reveal } from "@/components/shared/Reveal";
import { TransitionLink } from "@/components/shared/PageTransitionShell";
import { MediaFrame } from "@/components/shared/media-frame";
import { siteContent } from "@/data/site";

export function HeroSection() {
  const { hero, ctaLabel, ctaRoute, featuredNote } = siteContent.home;

  return (
    <section className="grid gap-10 border-b border-border pb-14 sm:gap-12 sm:pb-18">
      <div className="page-container grid gap-8 pt-10 sm:pt-12 lg:gap-12 lg:pt-14">
        <Reveal className="space-y-5">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 className="display-title max-w-[14ch] !text-[clamp(1.8rem,3.8vw,3.4rem)] text-balance">
            {hero.title}
          </h1>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] lg:items-start">
            <p className="max-w-2xl text-base leading-7 text-muted sm:text-[1.0625rem]">
              {hero.summary}
            </p>
            <div className="flex flex-wrap gap-3 lg:justify-self-end">
              <TransitionLink className="pill-button" href={ctaRoute}>
                {ctaLabel}
              </TransitionLink>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal
        className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-border"
        delay={80}
      >
        <div className="relative min-h-[56svh] bg-[color:rgba(17,17,17,0.06)]">
          <MediaFrame
            asset={hero.secondaryAsset}
            className="h-[56svh] min-h-[26rem] w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(0,0,0,0.68)] via-[rgba(0,0,0,0.26)] to-transparent">
            <div className="page-container grid gap-4 px-4 py-6 text-[color:var(--color-bone-white,#fffef7)] sm:px-6 sm:py-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.72fr)] lg:px-8">
              <div className="space-y-3">
                <p className="eyebrow text-[color:rgba(255,254,247,0.76)]">
                  Hero Band
                </p>
                <p className="max-w-2xl text-sm leading-6 sm:text-base">
                  {hero.caption}
                </p>
              </div>
              <div className="space-y-3 lg:justify-self-end">
                {hero.metadata.map((item) => (
                  <p
                    className="border-t border-[rgba(255,254,247,0.18)] pt-3 text-sm leading-6 text-[color:rgba(255,254,247,0.8)]"
                    key={item}
                  >
                    {item}
                  </p>
                ))}
                <p className="text-xs uppercase tracking-[0.22em] text-[color:rgba(255,254,247,0.62)]">
                  {featuredNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
