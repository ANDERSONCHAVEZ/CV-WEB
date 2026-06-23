import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Servicios from "./components/Servicios";
import Loader from "./components/Loader";
import Magazine from "./components/Magazine";
import SkillsSphere from './components/SkillsSphere';
import './App.css';

function App() {

  const [isLoaderFinished, setIsLoaderFinished] = useState(false);
  const [isMagazineOpen, setIsMagazineOpen] = useState(false);

  return (
    <div className="App">
      {!isLoaderFinished && <Loader onFinished={setIsLoaderFinished} />}

      {isLoaderFinished && (
      <>
        <Navbar onOpenMagazine={() => setIsMagazineOpen(true)} />
        <Magazine
        isOpen={isMagazineOpen}
        onClose={() => setIsMagazineOpen(false)}
        />
        <Hero />
        <About />
        <section id="skills">
          <SkillsSphere/>
        </section>
        <Servicios />
        <Projects />
        <section id="contacto">
          <Contact />
        </section>
      </>
      )}
    </div>
  );
}

export default App;