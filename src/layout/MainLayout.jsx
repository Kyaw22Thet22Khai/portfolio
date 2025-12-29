import React from "react";

//components
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Navbar from "../components/Navbar/Navbar";
import Contact from "../components/Contact/Contact";
import Projects from "../components/Projects/Projects";

export default function MainLayout() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
