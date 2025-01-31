import { useState, useRef } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import visibleOnScreen from "./observer";

function App() {
  const refs = [useRef()];
  const isVisible = visibleOnScreen(refs);
  return (
    <div class="portfolio">
      <Header visible={isVisible[0]}/>
      <div key={0} ref={refs[0]} className="portfolio__section-visible">
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
