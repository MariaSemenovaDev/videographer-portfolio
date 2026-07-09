import { featuredProjects } from "@/content/site";

export default function WeddingsPage() {
  return (
    <section className="bg-[#f7f2ea] px-6 py-24 md:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <p className="text-xl uppercase">Свадьбы</p>
        <h1 className="mt-6 max-w-4xl text-4xl leading-[0.96] md:text-6xl">
          Свадебные фильмы о людях, интонации дня и тех деталях, из которых потом складывается живая память.
        </h1>

        <div className="mt-16 grid gap-6">
          {featuredProjects.map((project) => (
            <article key={project.slug} className="grid gap-8 rounded-[2rem] bg-white p-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div
                className="relative overflow-hidden rounded-[1.5rem] p-8 min-h-[320px] flex flex-col justify-end bg-[linear-gradient(180deg,#ece7df_0%,#d9d1c5_100%)]"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 100%), url('${project.image}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <p className="text-sm uppercase tracking-[0.16em] text-white/75">
                  {project.category} / {project.year}
                </p>
                <h2 className="mt-4 text-3xl text-white">{project.title}</h2>
                <p className="mt-8 text-sm uppercase tracking-[0.16em] text-white/75">{project.location}</p>
              </div>

              <div className="flex flex-col justify-between">
                <p className="max-w-2xl text-xl leading-relaxed text-black/65">{project.description}</p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-black/10 px-4 py-2 text-sm uppercase tracking-[0.12em] text-black/55">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
