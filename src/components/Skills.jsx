import { skillGroups, projects } from "../constants";

const topTools = (() => {
  const counts = {};
  projects.forEach((p) => p.tags.forEach((t) => {
    counts[t.name] = (counts[t.name] || 0) + 1;
  }));
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)
    .map(([name]) => name);
})();

const Skills = () => {
  return (
    <div className="section-container !py-20">
      <p className="mb-4 text-center text-[11px] text-muted">Find a bit more about me</p>

      <div className="rounded-sm bg-[#f4f2ed] p-6 sm:p-9 shadow-[0_20px_70px_rgba(24,22,18,0.05)]">
        <div className="grid gap-8 lg:grid-cols-[1.45fr_1fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted">Design philosophy</p>
            <h2 className="mt-4 max-w-xl font-display text-4xl font-semibold italic leading-tight text-teal sm:text-5xl">
        Design is not just what it looks like. Design is how it works.
      </h2>
            <p className="mt-8 max-w-lg text-[13px] leading-6 text-ink/65">
              I care about systems that are easy to understand after the launch week:
              clear APIs, good boundaries, useful logs, and interfaces that do not make
              the user work harder than the software.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3">
            {Object.entries(skillGroups).map(([key, group]) => (
              <div key={key}>
                <h3 className="mb-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/60">
                  {group.label}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-[12px] text-ink/65">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-9 border-t border-ink/10 pt-6">
          <div className="flex flex-wrap gap-2">
            {topTools.map((tool) => (
              <span key={tool} className="rounded-full border border-ink/10 bg-white px-3 py-1 text-[11px] text-ink/60">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
