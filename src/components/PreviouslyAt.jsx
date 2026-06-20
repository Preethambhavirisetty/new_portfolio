import { companies } from "../constants";

const PreviouslyAt = () => {
  return (
    <div className="mt-16">
      <p className="text-center text-[11px] text-muted mb-6">Previously at</p>
      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
        {companies.map((company) => (
          <div
            key={company.name}
            className={`${company.tone} grid h-24 place-items-center rounded-md border border-ink/5 px-4 shadow-[0_18px_50px_rgba(24,22,18,0.04)]`}
          >
            <span className="font-display text-xl font-semibold text-ink/80">{company.label}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-[10px] text-muted/70">Some companies and communities I've worked with</p>
    </div>
  );
};

export default PreviouslyAt;
