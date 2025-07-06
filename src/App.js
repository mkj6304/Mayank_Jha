import React from "react";
import "./index.css";

// Default Component Imports
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import  Certifications  from "./components/Certifications"; // ✅ correct
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Optional: Dark Mode Toggle
// import DarkModeToggle from "./components/DarkModeToggle";

function App() {
  return (
    <div className="font-sans bg-gray-950 text-white scroll-smooth">
      <Navbar />

      <main className="pt-20">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="achievements">
          <Achievements />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Uncomment below if using Dark Mode Toggle */}
      {/* <DarkModeToggle /> */}
    </div>
  );
}

export default App;
