import React from "react";
import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaRobot,
  FaJsSquare,
} from "react-icons/fa";

import {
  SiC,
  SiExpress,
  SiFlask,
  SiPhp,
  SiBootstrap,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiVercel,
  SiOpenapiinitiative,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import "./Skills.css";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: <FaJava color="#f89820" /> },
      { name: "Python", icon: <FaPython color="#3776AB" /> },
      { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
      { name: "C", icon: <SiC color="#00599C" /> },
    ],
  },

  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: <FaReact color="#61DAFB" /> },
      { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
      { name: "Express.js", icon: <SiExpress color="#ffffff" /> },
      { name: "Flask", icon: <SiFlask color="#ffffff" /> },
      { name: "PHP", icon: <SiPhp color="#777BB4" /> },
      { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#38BDF8" /> },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    ],
  },

  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub color="#ffffff" /> },
      { name: "Postman", icon: <SiPostman color="#FF6C37" /> },
      { name: "VS Code", icon: <VscVscode color="#007ACC" /> },
      { name: "Vercel", icon: <SiVercel color="#ffffff" /> },
    ],
  },

  {
    title: "AI & Other Technologies",
    skills: [
      { name: "Machine Learning", icon: <FaRobot color="#FFD43B" /> },
      { name: "Generative AI", icon: "🧠" },
      { name: "Prompt Engineering", icon: "✨" },
      { name: "OpenAI API", icon: "🤖" },
      { name: "REST APIs", icon: <SiOpenapiinitiative color="#6BA539" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">

        <h2 className="skills-heading">
          Skills & Technologies
        </h2>

        {skillGroups.map((group) => (
          <div className="category" key={group.title}>

            <h3>{group.title}</h3>

            <div className="skills-grid">
              {group.skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-icon">
                    {skill.icon}
                  </div>

                  <span>{skill.name}</span>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;