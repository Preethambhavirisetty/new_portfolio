import { contactInfo } from "../constants";
import BotanicalAccent from "./BotanicalAccent";

const Contact = () => {
  return (
    <div className="section-container !py-24">
      <p className="mb-10 text-center font-display text-2xl italic text-[#8b2d2b]">Get in touch!</p>

      <div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-[0.8fr_1fr] md:items-center">
        <div className="rotate-[-4deg] bg-white p-3 shadow-[0_28px_70px_rgba(24,22,18,0.16)]">
          <div className="grid aspect-[4/5] place-items-center bg-[#8d2c2a] p-7 text-center text-cream">
            <div className="text-[#f3d7b2]">
              <BotanicalAccent />
            </div>
            <div>
              <p className="font-display text-4xl leading-none">What moves the world moves you & me!</p>
              <a
                href={`mailto:${contactInfo.email}`}
                className="mt-8 inline-flex rounded-sm bg-cream px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8d2c2a]"
              >
                Tap the line
              </a>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left">
          <p className="text-[12px] leading-6 text-ink/65">
            A useful build starts with one good conversation. Reach out for backend
            systems, AI workflows, cloud deployments, or a product idea that needs a
            steady technical hand.
          </p>
          <div className="mt-8 space-y-2 text-[13px] text-ink">
            <a href={`mailto:${contactInfo.email}`} className="block hover:text-accent">
              {contactInfo.email}
            </a>
            <a href={`tel:${contactInfo.phone}`} className="block hover:text-accent">
              {contactInfo.phone}
            </a>
          </div>
          <div className="mt-7 flex justify-center gap-5 text-[12px] text-ink/60 md:justify-start">
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="hover:text-ink">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
