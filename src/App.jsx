import { useRef } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SectionNav from "./components/SectionNav";
import useActiveSection from "./hooks/useActiveSection";

const SECTIONS = ["Home", "Work", "Contact"];

const App = () => {
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const sectionRefs = [heroRef, projectsRef, contactRef];

  const activeIndex = useActiveSection(sectionRefs);

  const handleNavigate = (index) => {
    sectionRefs[index].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="scroll-container">
      <SectionNav sections={SECTIONS} activeIndex={activeIndex} onNavigate={handleNavigate} />
      <Hero ref={heroRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
};

export default App;
