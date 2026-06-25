import { forwardRef } from "react";
import { motion } from "framer-motion";
import { experience, projects } from "../constants";

const Projects = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      className="scroll-section brutal-surface relative flex w-full flex-col overflow-hidden px-4 py-4 text-black sm:px-6"
    >
      <div className="relative z-10 mx-auto flex min-h-0 w-full flex-1 flex-col border border-black bg-[#f2f1ee]">
        <div className="grid shrink-0 border-b border-black lg:grid-cols-[1fr_1.2fr]">
          <div className="border-b border-black p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
              className="font-mono text-[10px] uppercase sm:text-xs"
          >
              Work / shipped systems
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
              className="dot-title mt-4 max-w-[12ch] font-mono text-5xl font-semibold uppercase leading-none sm:text-7xl"
          >
              Selected Work
          </motion.h2>
          </div>
          <div className="grid sm:grid-cols-3">
            {experience.map((role, index) => (
              <div
                key={role.company}
                className="border-b border-black p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
              >
                <p className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-lg font-semibold leading-tight">{role.company}</h3>
                <p className="mt-1 font-mono text-[10px] uppercase text-black/55 sm:text-xs">
                  {role.period}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-black/70">{role.summary}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-area min-h-0 flex-1 overflow-y-auto">
          <div className="grid lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                className="group grid min-h-[28rem] border-b border-black bg-[#f2f1ee] transition-colors hover:bg-black hover:text-[#f2f1ee] lg:border-r lg:even:border-r-0"
              >
                <div className="relative min-h-52 overflow-hidden border-b border-black bg-white">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center border border-black bg-[#f2f1ee] text-black transition-colors group-hover:bg-black group-hover:text-[#f2f1ee]">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M7 17 17 7M7 7h10v10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <p className="font-mono text-xs uppercase">
                    Case {String(index + 1).padStart(2, "0")} / {project.eyebrow}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold leading-none sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-black/70 group-hover:text-[#f2f1ee]/75">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-current px-2.5 py-1 font-mono text-[11px] uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
