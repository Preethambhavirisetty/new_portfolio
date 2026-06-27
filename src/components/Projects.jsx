import { forwardRef } from "react";
import { motion } from "framer-motion";
import { contactInfo, experience } from "../constants";

const ICONS = {
  Email: (
    <path
      d="M3 5h18v14H3zM3 5l9 7 9-7"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  Phone: (
    <path
      d="M5 4h4l1.5 5L8 11a11 11 0 0 0 5 5l2-2.5 5 1.5v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  LinkedIn: (
    <path
      d="M4 4h16v16H4zM8 11v5M8 8v.01M12 16v-3a2 2 0 0 1 4 0v3M12 13v3"
      stroke="currentColor"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  GitHub: (
    <path
      d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.6-.2.6-.43v-1.68c-2.5.55-3-1.07-3-1.07-.4-1.04-1-1.3-1-1.3-.8-.56.06-.55.06-.55.9.06 1.37.93 1.37.93.8 1.37 2.1.97 2.6.74.08-.58.3-.97.55-1.2-2-.22-4.1-1-4.1-4.43 0-.98.35-1.78.92-2.4-.1-.23-.4-1.15.1-2.4 0 0 .76-.24 2.5.93a8.6 8.6 0 0 1 4.55 0c1.74-1.17 2.5-.93 2.5-.93.5 1.25.2 2.17.1 2.4.57.62.92 1.42.92 2.4 0 3.44-2.1 4.2-4.1 4.42.32.28.6.82.6 1.65v2.45c0 .23.15.51.6.43A9 9 0 0 0 12 3z"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="currentColor"
    />
  ),
};

const LINKS = [
  { label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  {
    label: "Phone",
    value: contactInfo.phone,
    href: `tel:${contactInfo.phone.replace(/[^+\d]/g, "")}`,
  },
  { label: "LinkedIn", value: "preetham10022001", href: contactInfo.linkedin },
  { label: "GitHub", value: "Preethambhavirisetty", href: contactInfo.github },
];

const Projects = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      className="scroll-section brutal-surface relative flex w-full flex-col overflow-hidden px-4 py-4 text-black sm:px-6"
    >
      <div className="scroll-area relative z-10 mx-auto flex min-h-0 w-full flex-1 flex-col overflow-y-auto border border-black bg-[#f2f1ee]">
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
              className="mt-4 max-w-[12ch] font-mono text-5xl font-semibold uppercase leading-none text-black sm:text-7xl"
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid shrink-0 lg:min-h-0 lg:flex-1 lg:grid-cols-[1fr_1.2fr]"
        >
          <div className="relative flex min-h-0 flex-col justify-between border-b border-black p-5 sm:p-7 lg:border-b-0 lg:border-r">
            <div>
              <p className="font-mono text-[10px] uppercase sm:text-xs">Contact / availability</p>
              <h2 className="mt-4 max-w-[11ch] font-mono text-4xl font-semibold uppercase leading-none text-black sm:text-6xl lg:text-7xl">
                Build Next.
              </h2>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-black/70 sm:text-base">
              Open to AI engineering, backend platform, and forward-deployed product work where the system has to survive contact with production.
            </p>
          </div>

          <div className="grid content-stretch sm:grid-cols-2">
            {LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex min-h-0 min-w-0 items-center gap-4 border-b border-black p-4 text-left transition-colors hover:bg-black hover:text-[#f2f1ee] sm:border-r sm:even:border-r-0"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-current">
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    {ICONS[item.label]}
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <p className="font-mono text-[11px] uppercase text-black/50 group-hover:text-[#f2f1ee]/55">
                    {item.label}
                  </p>
                  <p className="mt-1 break-all text-sm font-semibold sm:text-base">{item.value}</p>
                </span>
              </a>
            ))}
            <div className="flex min-h-0 flex-col justify-between border-b border-black p-4 sm:col-span-2">
              <p className="font-mono text-[11px] uppercase text-black/50">Signal</p>
              <p className="text-xl font-semibold leading-tight sm:text-2xl">AI/ML Engineer in New York</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
