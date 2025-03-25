import { useState, useRef, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/SkillsSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import visibleOnScreen from "./observer";
import Lenis from "lenis";

function App() {
  const refs = [useRef(), useRef()];
  const isVisible = visibleOnScreen(refs);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, [])

  useEffect(() => {
    console.log(isVisible[1]);
  }, isVisible[1])
  
  return (
    <div className="portfolio" data-theme={darkMode ? "dark" : "light"}>
      <Header visible={isVisible[0]} darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div key={0} ref={refs[0]} className="portfolio__section-visible" id="home">
        <About />
      </div>
      <div key={1} ref={refs[1]}>
        <Projects visible={isVisible[1]}/>
      </div>
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
