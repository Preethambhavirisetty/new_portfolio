import resumePdf from "../assets/PreethamBhavirisetty.pdf";
import PreviouslyAt from "./PreviouslyAt";

const Hero = () => {
  return (
    <div className="section-container text-center !pt-12 sm:!pt-16 !pb-14">
      <p className="text-[12px] text-muted mb-3">I'm Preetham Bhavirisetty</p>
      <h1 className="font-display font-semibold text-[3.15rem] sm:text-7xl md:text-[5.7rem] text-ink leading-[0.86]">
        Software Engineer
        <br />
        &amp; AI Builder
      </h1>
      <p className="max-w-xl mx-auto text-muted mt-7 text-[13px] leading-6">
        I build reliable backend systems, cloud-native products, and AI workflows with
        a taste for quiet interfaces, careful execution, and production-ready details.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mt-7">
        <a href="#contact" className="rounded-full bg-accent px-5 py-3 text-[12px] font-semibold text-white shadow-modern">
          Let's work together
        </a>
        <a
          href={resumePdf}
          download="Preetham_Bhavirisetty_Resume.pdf"
          className="rounded-full bg-ink px-5 py-3 text-[12px] font-semibold text-cream shadow-modern"
        >
          Download Resume
        </a>
      </div>

      <PreviouslyAt />
    </div>
  );
};

export default Hero;
