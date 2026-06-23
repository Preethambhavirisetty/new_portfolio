import { forwardRef } from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";

const Projects = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      className="scroll-section grid-texture relative flex w-full flex-col overflow-hidden bg-cream px-6 py-16 sm:px-12 lg:px-20"
    >
      <div
        aria-hidden
        className="gradient-blob gradient-blob-b -right-32 top-0 h-[28rem] w-[28rem] bg-gradient-to-bl from-sunset/25 to-deep/15"
      />
      <div
        aria-hidden
        className="gradient-blob gradient-blob-c -bottom-32 -left-24 h-[26rem] w-[26rem] bg-gradient-to-tr from-deep/20 to-sunset/15"
      />
      <div
        aria-hidden
        className="gradient-blob gradient-blob-a left-1/3 top-1/2 h-64 w-64 bg-gradient-to-br from-sunset/15 to-deep/15 opacity-60"
      />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col">
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm text-sunset"
          >
            <span className="text-deep/40">~/work $</span> ls
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-3 font-display text-4xl font-medium text-deep sm:text-6xl"
          >
            Selected work
          </motion.h2>
        </div>

        <div className="scroll-area mt-10 min-h-0 flex-1 overflow-y-auto pr-1">
          <div className="grid gap-6 pb-2 sm:grid-cols-2">
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
                className="group flex flex-col overflow-hidden rounded-2xl border border-deep/10 bg-deep/[0.03] backdrop-blur-sm transition-colors hover:border-sunset/50"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-52"
                  />
                  <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-cream/80 text-deep transition-colors group-hover:bg-sunset group-hover:text-cream">
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
                <div className="flex flex-1 flex-col p-6">
                  <p className="font-mono text-xs text-sunset">
                    {String(index + 1).padStart(2, "0")} // {project.eyebrow}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium text-deep group-hover:text-sunset">
                    {project.name}
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-deep/70">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-deep/10 px-2.5 py-1 font-mono text-[11px] text-deep/50"
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
