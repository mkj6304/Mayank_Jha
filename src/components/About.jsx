import React from "react";
import profileImage from "../assets/img.jpg";

const summary =
  "Computer Science undergraduate with hands-on experience in full-stack development and machine learning. Skilled in building scalable web applications, designing RESTful APIs, optimizing databases, and integrating ML-driven features. Proven ability to work on end-to-end systems, improve performance, and deliver production-ready solutions through internships and real-world projects.";

const experience = [
  {
    role: "Software Engineer Intern",
    company: "Innodeed Systems Pvt Ltd",
    period: "May 2025 – Jul 2025",
    type: "Hybrid",
    points: [
      "Built MERN stack application with reusable React components, improving development speed by 15%.",
      "Optimized MongoDB queries, reducing API response time by 20%.",
      "Developed secure REST APIs with authentication, reducing downtime incidents by 10%.",
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Internshala Trainings",
    period: "May 2024 – Jul 2024",
    type: "Remote",
    points: [
      "Built responsive React.js frontends, increasing user engagement by 18%.",
      "Integrated PHP/MySQL backend, reducing page load time by 25%.",
      "Supported demo platform handling 500+ users during certification program.",
    ],
  },
];

const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Bio */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
          data-aos="fade-up"
        >
          {/* Profile Image */}
          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Mayank Jha"
              className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full border-4 border-yellow-300 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-yellow-500"
            />
          </div>

          {/* Text Section */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6">About Me</h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              I'm{" "}
              <span className="text-yellow-200 font-semibold">Mayank Kumar Jha</span>, a
              Computer Science student at Bhilai Institute of Technology, Durg (CPI: 9.1),
              graduating June 2026.
            </p>
            <div className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
              <p>{summary}</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-8 text-center">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-yellow-500/20 transition"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <h3 className="text-xl font-semibold text-yellow-200">{exp.role}</h3>
                  <span className="text-sm text-purple-300 mt-1 sm:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-400 text-sm mb-3">
                  {exp.company} &middot; {exp.type}
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
