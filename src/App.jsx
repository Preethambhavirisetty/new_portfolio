import { useRef } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SectionNav from "./components/SectionNav";
import useActiveSection from "./hooks/useActiveSection";

const SECTIONS = ["Home", "Work"];

const App = () => {
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const sectionRefs = [heroRef, projectsRef];

  const activeIndex = useActiveSection(sectionRefs);

  const handleNavigate = (index) => {
    const container = containerRef.current;
    const target = sectionRefs[index].current;
    if (!container || !target) return;
    container.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  };

  return (
    <div ref={containerRef} className="scroll-container">
      <SectionNav sections={SECTIONS} activeIndex={activeIndex} onNavigate={handleNavigate} />
      <Hero ref={heroRef} />
      <Projects ref={projectsRef} />
    </div>
  );
};

export default App;
