// Updated Skills.jsx without react-icons dependency
import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "PHP",
  "Express.js",
  "MongoDB",
  "Python",
  "Git",
  "Database"
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-950 text-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 bg-gray-800 text-yellow-200 font-semibold text-lg rounded-xl shadow-md hover:shadow-yellow-400/20 transition transform hover:-translate-y-1"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
