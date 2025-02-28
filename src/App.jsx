import { useState, useRef, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/SkillsSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import visibleOnScreen from "./observer";

function App() {
  const refs = [useRef()];
  const isVisible = visibleOnScreen(refs);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);
  
  return (
    <div className="portfolio" data-theme={darkMode ? "dark" : "light"}>
      <Header visible={isVisible[0]} darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div key={0} ref={refs[0]} className="portfolio__section-visible" id="home">
        <About />
      </div>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
