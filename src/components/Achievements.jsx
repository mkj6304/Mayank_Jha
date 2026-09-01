import React from "react";

const achievements = [
  "🏆 Batch Topper 2026 – CSE (AI), BIT Durg – CPI: 9.1",
  "🏆 Winner – Young Engineer's Award 2025",
  "🏆 Winner – BITSHINE 2025 (GlideMate Smart Wheelchair)",
  "🥈 Grand Finalist – Smart India Hackathon 2025 (Oceanography Project – OASIS)",
  "🎯 Finalist – E-Summit IIIT NR Hackathon 2024",
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-gray-950 text-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 text-center mb-10">
          Achievements
        </h2>
        <ul className="space-y-6">
          {achievements.map((item, index) => (
            <li
              key={index}
              className="bg-gray-800 px-6 py-4 rounded-lg shadow text-yellow-200 hover:bg-gray-700 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
