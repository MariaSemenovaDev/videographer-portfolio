import {
  reportageRates,
  reportageServicesNote,
  serviceExtras,
  servicePackages,
} from "@/content/site";

export default function ServicesPage() {
  return (
    <section className="bg-[#f8f5ef] px-6 py-24 md:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <p className="text-xl uppercase">Услуги</p>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[0.96] md:text-6xl">
          Свадебные пакеты, дополнительные опции и репортажная съёмка с понятным составом и прозрачной стоимостью.
        </h1>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {servicePackages.map((entry) => (
            <article key={entry.title} className="rounded-[2rem] bg-white p-8">
              <div
                className="rounded-[1.5rem] min-h-[240px] bg-[#f8f5ef]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%), url('${entry.image}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
              <p className="mt-6 text-sm uppercase tracking-[0.16em] text-black/45">
                {entry.guests}
              </p>
              <h2 className="mt-4 text-2xl leading-tight">{entry.title}</h2>
              <div className="mt-5 space-y-2 text-lg leading-relaxed text-black/65">
                {entry.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <p className="mt-8 text-2xl leading-tight">— {entry.price} —</p>
              <p className="mt-5 text-lg leading-relaxed text-black/65">{entry.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[2rem] bg-white p-8">
            <p className="text-sm uppercase tracking-[0.16em] text-black/45">Дополнительно</p>
            <div className="mt-5 space-y-3 text-lg leading-relaxed text-black/65">
              {serviceExtras.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] bg-white p-8">
            <div
              className="rounded-[1.5rem] min-h-[240px] bg-[#f8f5ef]"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%), url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1600&q=80')",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
            <p className="mt-6 text-sm uppercase tracking-[0.16em] text-black/45">Репортажная съёмка</p>
            <div className="mt-5 grid gap-4">
              {reportageRates.map((rate) => (
                <div key={rate.title} className="rounded-[1.5rem] bg-[#f8f5ef] p-6">
                  <p className="text-sm uppercase tracking-[0.16em] text-black/45">{rate.title}</p>
                  <p className="mt-3 text-2xl leading-tight">— {rate.price} / {rate.note} —</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-lg leading-relaxed text-black/65">{reportageServicesNote}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
