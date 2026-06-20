import { contactInfo } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111110] text-cream">
      <div className="section-container !py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-10 text-[10px] text-cream/35">A 2026 portfolio by Preetham Bhavirisetty.</p>
            <h2 className="font-display text-[5.5rem] font-semibold leading-[0.75] sm:text-[8rem]">
              Preetham
              <br />
              Bhavirisetty
            </h2>
          </div>

          <div className="text-left md:text-right">
            <p className="mb-8 text-[11px] leading-5 text-cream/35">
              Built for thoughtful engineering, reliable systems, and useful AI.
            </p>
            <div className="space-y-2 text-[12px] text-cream/65">
              <a href={`mailto:${contactInfo.email}`} className="block hover:text-cream">
                {contactInfo.email}
              </a>
              <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="block hover:text-cream">
                LinkedIn
              </a>
              <a href={contactInfo.github} target="_blank" rel="noreferrer" className="block hover:text-cream">
                GitHub
              </a>
              <span className="block text-cream/35">Copyright {year}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
