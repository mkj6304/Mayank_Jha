// Updated Skills.jsx without react-icons dependency
import React from "react";

const skillGroups = [
  {
    category: "Languages",
    skills: ["C++", "Python", "C"],
  },
  {
    category: "Frontend",
    skills: ["React.js", "HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "PHP"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Vercel"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-950 text-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 text-center mb-12">Skills</h2>
        <div className="space-y-8">
          {skillGroups.map((group, gIdx) => (
            <div key={gIdx}>
              <h3 className="text-yellow-400 font-semibold text-lg mb-3 uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="bg-gray-800 text-yellow-200 font-medium px-5 py-2 rounded-xl shadow-md hover:shadow-yellow-400/20 hover:-translate-y-1 transition transform text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
