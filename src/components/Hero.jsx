import { forwardRef } from "react";
import { motion } from "framer-motion";
import { experience, metrics, profile, stack } from "../constants";

const Hero = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      className="scroll-section grid-texture relative flex w-full flex-col justify-center overflow-hidden bg-cream px-6 py-24 sm:px-12 lg:px-20"
    >
      <div
        aria-hidden
        className="gradient-blob gradient-blob-a -left-32 -top-32 h-[28rem] w-[28rem] bg-gradient-to-br from-sunset/30 to-deep/10"
      />
      <div
        aria-hidden
        className="gradient-blob gradient-blob-b -bottom-40 -right-24 h-[32rem] w-[32rem] bg-gradient-to-tr from-deep/25 to-sunset/15"
      />
      <div
        aria-hidden
        className="gradient-blob gradient-blob-c left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 bg-gradient-to-bl from-sunset/20 to-deep/15 opacity-70"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col"
      >
        <p className="font-mono text-sm text-sunset">
          <span className="text-deep/40">$</span> whoami
          <span className="caret ml-1 inline-block h-4 w-[2px] -translate-y-0.5 bg-sunset align-middle" />
        </p>

        <h1 className="mt-5 font-display text-6xl font-medium leading-[1.02] text-deep sm:text-8xl">
          <span className="bg-gradient-to-r from-sunset to-deep bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <p className="mt-3 font-mono text-sm uppercase tracking-[0.25em] text-deep/50">
          {profile.position} // {profile.company}
        </p>

        <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-deep/70 sm:text-lg">
          {profile.heroSummary}
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 border-y border-deep/10 py-6 sm:max-w-sm">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-display text-3xl text-deep sm:text-4xl">{metric.value}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-deep/40">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-deep/40">
          Skills
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-deep/10 bg-deep/[0.03] px-3 py-1.5 font-mono text-xs text-deep/60"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-deep/40">
          Companies
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {experience.map((role) => (
            <span
              key={role.company}
              className="rounded-full border border-deep/15 bg-deep/[0.03] px-3 py-1.5 font-mono text-xs text-deep/70"
            >
              {role.company}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs lowercase tracking-[0.3em] text-deep/30"
      >
        scroll ↓
      </motion.div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
