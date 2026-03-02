import React from 'react';
import Navbar from './Components/Navbar';
import Home  from "./Pages/Home";
import About from "./Pages/About";
import Education from './Pages/Education';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import Certificates from './Pages/Certificates';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Loader from './Components/Loader';
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Loader/>
      <Navbar/>
      <Home />
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </div>
  )
}
