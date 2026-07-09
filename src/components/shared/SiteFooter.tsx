import { TransitionLink } from "@/components/shared/PageTransitionShell";
import { navigationItems } from "@/data/navigation";
import { siteContent } from "@/data/site";
import { routes } from "@/lib/routes";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="page-container grid gap-8 px-4 py-8 sm:px-6 sm:py-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:px-8">
        <div className="space-y-3">
          <TransitionLink className="eyebrow inline-block" href={routes.home}>
            Verteletskiy Video
          </TransitionLink>
          <p className="meta-text max-w-xl">
            Author-led portfolio scaffold with placeholders for films, stills,
            and future project pages.
          </p>
        </div>

        <div className="grid gap-3">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-2">
            {navigationItems.map((item) => (
              <TransitionLink
                className="meta-text"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </TransitionLink>
            ))}
          </nav>
          <a className="meta-text" href={`mailto:${siteContent.contact.email}`}>
            {siteContent.contact.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
