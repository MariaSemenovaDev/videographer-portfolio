import { Reveal } from "@/components/shared/Reveal";
import { newsItems } from "@/data/news";

const accentBackgrounds = [
  "var(--color-bone-white, #fffef7)",
  "color-mix(in srgb, var(--color-candy-pink, #ffacea) 18%, var(--color-bone-white, #fffef7) 82%)",
  "color-mix(in srgb, var(--color-powder-blue, #a5c8eb) 18%, var(--color-bone-white, #fffef7) 82%)"
] as const;

export function NewsGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {newsItems.map((item, index) => (
        <Reveal delay={index * 80} key={item.id}>
          <article
            className="grid h-full gap-10 border border-border p-5 sm:p-6"
            style={{ background: accentBackgrounds[index] }}
          >
            <p className="eyebrow">{item.label}</p>
            <div className="space-y-4">
              <h3 className="section-title text-[clamp(1.5rem,2.6vw,2.2rem)]">
                {item.title}
              </h3>
              <p className="meta-text">{item.summary}</p>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}
