import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "HospiSync",
    description: "AI-based hospital system optimizing OPD queues, admissions, and inventory flow.",
    link: "https://hospisync-frontend.vercel.app/",
  },
  {
    title: "Every-News",
    description: "A real-time news website showing category-wise news for free using external News API.",
    link: "https://every-news.vercel.app/",
  },
  {
    title: "MediChecker",
    description: "AI-powered platform to monitor medicine quality using IoT sensors and blockchain.",
    link: "#",
  },
  {
    title: "Smart Wheelchair (GlideMate)",
    description: "Voice & gesture-controlled smart wheelchair with obstacle detection and mobility tracking.",
    link: "#",
  },
  {
    title: "LinguaQuest",
    description: "AI system to generate Q&A from multilingual PDFs, enhancing academic accessibility.",
    link: "#",
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
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-yellow-500/30 hover:scale-105 transform transition duration-300 ease-in-out group relative overflow-hidden"
              data-aos="zoom-in"
              data-aos-delay={`${index * 150}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300 blur-sm" />
              <h3 className="text-2xl font-semibold mb-2 text-yellow-200 relative z-10">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 relative z-10">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-200 font-medium transition relative z-10"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
