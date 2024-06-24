import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import About from './components/about/About';
import History from './components/history/History';
import Skills from './components/skills/Skills';
import Projects from './components/Projects';
import Contact from './components/contact/Contact';
import { Element } from 'react-scroll';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Element name="home">
        <Home />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="history">
        <History />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default App;