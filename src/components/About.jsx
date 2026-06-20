import profilePhoto from "../assets/profile-preetham.jpeg";
import { contactInfo } from "../constants";
import CycleDiagram from "./CycleDiagram";

const About = () => {
  return (
    <div className="section-container !py-24">
      <div className="grid gap-12 md:grid-cols-[1fr_auto_1fr] md:items-start">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted">Meet a minute</p>
          <h2 className="mt-3 font-display text-5xl font-semibold leading-[0.86] text-ink">
            Who are you?
          </h2>
          <p className="mt-6 max-w-sm text-[13px] leading-6 text-ink/70">
            I am a Software Engineer focused on backend systems, cloud infrastructure,
            and AI-powered workflows. I like making complex products feel reliable,
            understandable, and quietly well-made.
          </p>

          <div className="mt-7 inline-block max-w-xs rounded-sm bg-panel px-5 py-4">
            <p className="text-[11px] leading-5 text-ink/60">
              4+ years building APIs, deployment flows, orchestration layers, and
              production services across healthcare, AI, and consumer products.
            </p>
          </div>

          <CycleDiagram />
        </div>

        <figure className="mx-auto w-64">
          <img
            src={profilePhoto}
            alt="Preetham Bhavirisetty"
            className="h-64 w-64 rotate-[-2deg] rounded-md object-cover shadow-[0_24px_55px_rgba(24,22,18,0.16)]"
          />
          <figcaption className="mt-4 text-center text-[10px] text-muted">
            Somewhere between system design and shipping.
          </figcaption>
        </figure>

        <div className="md:pt-14">
          <p className="max-w-sm text-[13px] leading-6 text-ink/70">
            My strength is moving between ambiguity and implementation: understanding
            the problem, shaping the service boundary, and building the thing with
            enough observability and restraint to survive real use.
          </p>

          <div className="mt-8 rounded-sm bg-white p-5 shadow-[0_18px_45px_rgba(24,22,18,0.05)]">
            <p className="text-[10px] uppercase tracking-[0.16em] text-muted">Code of conduct</p>
            <p className="mt-3 text-[12px] leading-5 text-ink/65">
              Start small, keep the path clear, name tradeoffs, test the important
              behavior, and leave the system easier to reason about.
            </p>
          </div>

          <div className="mt-8 flex gap-5 text-[12px] text-ink/60">
            <a href={contactInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
              LinkedIn
            </a>
            <a href={contactInfo.github} target="_blank" rel="noreferrer" className="hover:text-ink">
              GitHub
            </a>
            <a href={`mailto:${contactInfo.email}`} className="hover:text-ink">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
