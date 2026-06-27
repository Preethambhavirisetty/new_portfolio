import { forwardRef } from "react";
import { motion } from "framer-motion";
import { heroSkills, highlights, metrics, profile } from "../constants";

const Hero = forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      className="scroll-section brutal-surface relative flex w-full flex-col overflow-hidden px-4 py-4 text-black sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="scroll-area relative z-10 mx-auto flex min-h-0 w-full flex-1 flex-col overflow-y-auto border border-black bg-[#f2f1ee]"
      >
        <div className="grid h-12 shrink-0 grid-cols-[1fr_auto_1fr] items-center border-b border-black text-[10px] uppercase text-black sm:text-xs">
          <div className="flex h-full items-center gap-2 border-r border-black px-3 font-mono">
            <span className="h-2 w-2 rounded-full bg-black" />
            {profile.location.label}
          </div>
          <div className="px-4 font-mono">{profile.range}</div>
          <a
            href={profile.resume}
            className="flex h-full items-center justify-end gap-2 border-l border-black px-3 font-mono hover:bg-black hover:text-[#f2f1ee]"
          >
            Resume
            <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="grid min-h-0 flex-1 grid-rows-[auto_1fr_auto] lg:grid-cols-[1fr_18rem_1fr] lg:grid-rows-[1fr_auto]">
          <div className="relative flex min-h-[13rem] flex-col justify-center border-b border-black p-5 sm:p-8 lg:min-h-0 lg:border-b-0 lg:border-r">
            <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[10px] uppercase sm:text-xs">
              <span className="edge-label">Engineer</span>
              <span className="hairline w-16" />
              <span className="h-2 w-2 rounded-full bg-black" />
            </div>
            <h1 className="mt-8 max-w-[10ch] font-mono text-[3.5rem] font-semibold uppercase leading-none text-black sm:text-[6.4rem] lg:text-[7.5rem]">
              {profile.name}
            </h1>
          </div>

          <div className="relative flex min-h-[13rem] items-center justify-center border-b border-black p-6 lg:min-h-0 lg:border-b-0 lg:border-r">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-black/20 lg:block" />
            <div className="hard-shadow relative flex h-40 w-40 items-center justify-center border border-black bg-[#f2f1ee] sm:h-52 sm:w-52">
              <span
                aria-hidden
                className="select-none font-mono text-5xl leading-none text-black grayscale sm:text-7xl"
              >
                👾
              </span>
            </div>
            <span className="edge-label absolute left-4 top-4 font-mono text-[10px] uppercase sm:text-xs">
              AI
            </span>
            <span className="edge-label absolute right-4 top-4 font-mono text-[10px] uppercase sm:text-xs">
              Cloud
            </span>
            <span className="edge-label absolute bottom-4 left-4 font-mono text-[10px] uppercase sm:text-xs">
              Infra
            </span>
            <span className="edge-label absolute bottom-4 right-4 font-mono text-[10px] uppercase sm:text-xs">
              Backend
            </span>
          </div>

          <div className="relative flex min-h-[13rem] flex-col justify-center border-b border-black p-5 sm:p-8 lg:min-h-0 lg:border-b-0">
            <div className="absolute right-5 top-5 flex items-center gap-2 font-mono text-[10px] uppercase sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-black" />
              <span className="hairline w-16" />
              <span className="edge-label">Systems</span>
            </div>
            <h2 className="mt-8 max-w-[10ch] self-end text-right font-mono text-[3.1rem] font-semibold uppercase leading-none text-black sm:text-[6rem] lg:text-[7rem]">
              Build.
            </h2>
          </div>

          <div className="grid border-b border-black lg:col-span-3 lg:grid-cols-[1.1fr_1fr_1fr] lg:border-t">
            <div className="border-b border-black p-5 sm:p-6 lg:border-b-0 lg:border-r">
              <p className="font-mono text-[10px] uppercase sm:text-xs">{profile.position}</p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-black/75 sm:text-lg">
                {profile.heroSummary}
              </p>
            </div>
            <div className="grid grid-cols-2 content-start gap-2 border-b border-black p-4 lg:border-b-0 lg:border-r sm:p-5">
              {/* {metrics.map((metric) => (
                <div key={metric.label} className="border-r border-black p-4 last:border-r-0 sm:p-5">
                  <p className="font-mono text-2xl font-semibold sm:text-3xl">{metric.value}</p>
                  <p className="mt-2 font-mono text-[10px] uppercase leading-tight text-black/55 sm:text-xs">
                    {metric.label}
                  </p>
                </div>
              ))} */}
              {heroSkills.map((skill) => (
                <span
                  key={skill}
                  className="border border-black px-2.5 py-1.5 text-center font-mono text-xs uppercase"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="p-5 sm:p-6">
              <p className="font-mono text-[10px] uppercase sm:text-xs">Current</p>
              <p className="mt-3 text-2xl font-semibold leading-tight sm:text-3xl">
                {profile.company}
              </p>
              <p className="mt-2 font-mono text-xs uppercase text-black/55">{profile.position}</p>
            </div>
          </div>

          <div className="grid min-h-0 lg:col-span-3 lg:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col justify-center border-b border-black p-5 sm:p-6 lg:border-b-0 lg:border-r">
              <p className="font-mono text-[10px] uppercase sm:text-xs">Side project</p>
              <p className="mt-3 text-base leading-relaxed text-black/75 sm:text-lg">
                Co-founder of{" "}
                <a
                  href="https://www.notelite.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-black/40 hover:decoration-black"
                >
                  notelite.org
                </a>
                , and currently improving UX based on user feedback.
              </p>
            </div>
            <div className="grid gap-0 sm:grid-cols-3">
              {highlights.map((item, index) => (
                <p
                  key={item}
                  className="border-b border-black p-5 text-sm leading-relaxed text-black/75 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
                >
                  <span className="mb-3 block font-mono text-xs text-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
