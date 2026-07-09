import { AccentCard } from "@/components/sections/AccentCard";
import { HeroSection } from "@/components/sections/HeroSection";
import { NewsGrid } from "@/components/sections/NewsGrid";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { newsSection } from "@/data/news";
import { processSection } from "@/data/process";
import { projectsSection } from "@/data/projects";
import { siteContent } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <main className="pb-20">
        <HeroSection />

        <div className="page-container grid gap-16 px-4 py-12 sm:px-6 sm:py-16 lg:gap-20 lg:px-8">
          <section className="grid gap-8">
            <SectionIntro
              description={projectsSection.description}
              eyebrow={projectsSection.label}
              title={projectsSection.title}
            />
            <ProjectGrid />
          </section>

          <AccentCard />

          <section className="grid gap-8">
            <SectionIntro
              description={siteContent.home.about}
              eyebrow={processSection.label}
              title={processSection.title}
            />
          </section>

          <section className="grid gap-8">
            <SectionIntro
              description={newsSection.description}
              eyebrow={newsSection.label}
              title={newsSection.title}
            />
            <NewsGrid />
          </section>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
