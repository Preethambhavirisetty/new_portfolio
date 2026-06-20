import { projects, testimonials } from "../constants";

const rotations = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

const Projects = () => {
  return (
    <div className="section-container !py-24">
      <p className="mb-10 text-center font-display text-2xl italic text-ink">
        Let's take a ride shall we!
      </p>

      <div className="grid gap-5 md:grid-cols-4">
        {projects.map((project, i) => (
          <a
            key={project.name}
            href={project.source_code_link}
            target="_blank"
            rel="noreferrer"
            className={`group block rounded-sm bg-white p-3 pb-5 shadow-[0_22px_60px_rgba(24,22,18,0.08)] transition-transform hover:-translate-y-1 ${rotations[i % rotations.length]}`}
          >
            <img src={project.image} alt={project.name} className="h-44 w-full rounded-sm object-cover" />
            <div className="pt-4">
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted">{project.eyebrow}</p>
              <h3 className="mt-2 font-display text-2xl leading-none text-ink">{project.name}</h3>
              <p className="mt-3 text-[12px] leading-5 text-ink/60">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-cream px-2 py-1 text-[10px] text-ink/55">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-28">
        <p className="mb-10 text-center font-display text-2xl italic text-ink">
          Hear from the people I have worked with
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-sm bg-white p-6 shadow-[0_18px_50px_rgba(24,22,18,0.05)]">
              <p className="text-[12px] leading-6 text-ink/65">{item.quote}</p>
              <div className="mt-7 flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-ink font-display text-xs text-cream">
                  {item.name.slice(0, 1)}
                </span>
                <span>
                  <span className="block text-[12px] font-semibold text-ink">{item.name}</span>
                  <span className="block text-[10px] text-muted">{item.role}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
