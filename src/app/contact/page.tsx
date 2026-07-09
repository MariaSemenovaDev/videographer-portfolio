import { getFooterLinksData, getSiteMetaData } from "@/sanity/fetchers";

export default async function ContactPage() {
  const [siteMeta, footerLinks] = await Promise.all([
    getSiteMetaData(),
    getFooterLinksData(),
  ]);

  return (
    <section className="bg-[#111111] px-6 py-24 text-white md:px-10 lg:px-14">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xl uppercase text-white/55">Контакты</p>
          <h1 className="mt-6 text-4xl leading-[0.96] md:text-6xl">
            Если у вас есть дата, идея или задача для бренда, можно обсудить проект напрямую.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/72">{siteMeta.intro}</p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/4 p-8 backdrop-blur-sm md:p-10">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-white/45">Email</p>
              <a href={`mailto:${siteMeta.email}`} className="mt-3 block text-2xl transition-colors hover:text-white/70">
                {siteMeta.email}
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-white/45">Телефон</p>
              <a
                href={`tel:${siteMeta.phone.replace(/[^\d+]/g, "")}`}
                className="mt-3 block text-2xl transition-colors hover:text-white/70"
              >
                {siteMeta.phone}
              </a>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-white/45">Город</p>
              <p className="mt-3 text-2xl">{siteMeta.city}</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.16em] text-white/45">Соцсети</p>
              <div className="mt-3 flex flex-col gap-2 text-2xl">
                {footerLinks
                  .filter((link) => link.href.startsWith("http"))
                  .map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-white/70">
                      {link.label}
                    </a>
                  ))}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-sm uppercase tracking-[0.16em] text-white/45">Обычно полезно написать сразу</p>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-white/72">
              Формат съёмки, дату, город, примерный хронометраж, нужна ли только съёмка или ещё монтаж, цвет, вертикальные версии и короткие ролики для соцсетей.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
