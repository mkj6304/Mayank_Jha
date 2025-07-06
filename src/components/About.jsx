import React from "react";
import profileImage from "../assets/img.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-900 text-gray-100 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-aos="fade-up">
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
            I'm <span className="text-yellow-200 font-semibold">Mayank Jha</span>, a dedicated software engineer and Computer Science student at Bhilai Institute of Technology, Durg (CPI: 9.08).
          </p>

          <div className="mt-6 text-gray-400 text-base md:text-lg leading-relaxed">
            <p className="mb-4">
              I'm passionate about building impactful digital products that blend design, logic, and intelligence. From AI-powered healthcare to multilingual learning tools, I focus on real-world solutions.
            </p>
            <p>
              Constantly exploring new technologies, I turn innovative ideas into elegant, responsive, and scalable software — driven by curiosity and a love for clean code.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
