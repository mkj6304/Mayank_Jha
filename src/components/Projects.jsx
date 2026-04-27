import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "HospiSync",
    tech: "MERN, Flask, ML",
    description:
      "Automated hospital OPD, admissions, and inventory workflows, improving operational efficiency by 25%. Integrated Flask-based ML API for intelligent bed allocation with 90% prediction accuracy. Built dashboards supporting 500+ concurrent patient records.",
    link: "https://hospisync-frontend.vercel.app/",
    github: null,
    tag: "2025",
  },
  {
    title: "MediFlow",
    tech: "Full Stack, ML",
    description:
      "ML-based medicine and supply-chain validation system processing 10k+ reports. Automated quality analysis, reducing manual verification time by 40%.",
    link: "https://github.com/mkj6304/MediFlow",
    github: "https://github.com/mkj6304/MediFlow",
    tag: "2025",
  },
  {
    title: "OASIS – Oceanographic AI-based Surveillance & Insight System",
    tech: "SIH, AI/ML",
    description:
      "AI-driven oceanography analytics platform using satellite, sensor, and historical ocean data. Implements anomaly detection and trend prediction models for early ocean health warnings with interactive dashboards for researchers and policy-level decision making.",
    link: "#",
    github: null,
    tag: "2025",
  },
  {
    title: "GlideMate – Smart Wheelchair with Voice Navigation",
    tech: "Arduino, IoT",
    description:
      "Arduino-based smart wheelchair using ultrasonic sensors and voice commands. Supports natural commands with 90%+ accuracy. Won BITSHINE 2025 Innovation Award.",
    link: "https://github.com/mkj6304/GlideMate",
    github: "https://github.com/mkj6304/GlideMate",
    tag: "Jan 2025",
  },
  {
    title: "Askify – AI-Powered Document QA Platform",
    tech: "OpenAI API, OCR",
    description:
      "AI-based QnA generator using OpenAI API and multilingual OCR. Supports 10+ languages and handles PDFs up to 100+ pages.",
    link: "https://github.com/mkj6304/Askify",
    github: "https://github.com/mkj6304/Askify",
    tag: "Feb 2025",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl font-bold text-center mb-12 text-yellow-300"
          data-aos="fade-down"
        >
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transform transition duration-300 ease-in-out group relative overflow-hidden flex flex-col"
              data-aos="zoom-in"
              data-aos-delay={`${index * 150}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm" />
              <div className="flex items-center justify-between mb-2 relative z-10">
                <span className="text-xs text-purple-300 font-medium">{project.tag}</span>
                <span className="text-xs text-gray-500 font-medium">{project.tech}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-200 relative z-10">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 relative z-10 flex-grow">{project.description}</p>
              <div className="flex gap-4 relative z-10">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white font-medium transition text-sm"
                  >
                    GitHub →
                  </a>
                )}
                {project.link && project.link !== project.github && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-200 font-medium transition text-sm"
                  >
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
