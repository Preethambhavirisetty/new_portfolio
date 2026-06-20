import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestHighlight from "./components/LatestHighlight";
import FunShowcase from "./components/FunShowcase";
import About from "./components/About";
import PullQuote from "./components/PullQuote";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-cream text-ink font-body selection:bg-ink selection:text-cream">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <LatestHighlight />
        <FunShowcase />
        <section id="about">
          <About />
        </section>
        <PullQuote />
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
