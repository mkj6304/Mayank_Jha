// Updated Hero.jsx - No 3D / group-hover effects
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from "../assets/img.jpg";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section
      id="home"
      className="bg-gray-900 text-white py-20 px-6 relative overflow-hidden"
    >
      {/* Floating Background Blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-yellow-500 opacity-20 blur-3xl rounded-full animate-pulse z-0"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-purple-400 opacity-20 blur-3xl rounded-full animate-pulse z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-yellow-300">
            Hello, I'm Mayank Jha
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Full-Stack Developer · ML Engineer · AI Innovator
          </p>
          <p className="text-gray-400 mb-8 max-w-md">
            Building scalable web apps, RESTful APIs, and ML-driven features — end-to-end, production-ready.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
            <a
              href="https://github.com/mkj6304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-yellow-300 transition"
            >
              github.com/mkj6304
            </a>
            <span className="text-gray-600">·</span>
            <a
              href="https://linkedin.com/in/mayank-jha-361573298"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-yellow-300 transition"
            >
              linkedin.com/in/mayank-jha-361573298
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-yellow-300 text-purple-800 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400 shadow hover:scale-105 transition"
            >
              Explore Projects
            </a>
            <a
              href="https://github.com/mkj6304"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-yellow-300 text-yellow-300 px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 hover:text-purple-800 shadow hover:scale-105 transition"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 flex justify-center" data-aos="fade-left">
          <img
            src={profileImage}
            alt="Mayank Jha"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 border-yellow-300 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
