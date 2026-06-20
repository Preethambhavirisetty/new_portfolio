import { projects } from "../constants";

const featured = projects[0];

const LatestHighlight = () => {
  return (
    <div className="section-container !py-20">
      <div className="mx-auto max-w-xs rounded-[1.7rem] bg-charcoal px-7 py-6 text-cream shadow-[0_28px_45px_rgba(24,22,18,0.2)]">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-cream/45">Latest Build</p>
          <h3 className="mt-2 font-display text-2xl leading-none">{featured.name}</h3>
          <p className="mt-4 text-[12px] leading-5 text-cream/60">
            Secure cloud notes with focused workflows and production-ready backend details.
          </p>
        </div>
        <a
          href="#projects"
          className="mt-6 inline-flex rounded-full bg-cream px-5 py-2 text-[11px] font-semibold text-ink"
        >
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default LatestHighlight;
