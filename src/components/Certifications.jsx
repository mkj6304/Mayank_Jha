import React from "react";

const certifications = [
  {
    title: "Develop GenAI Apps with Gemini & Streamlit – Google (May 2024)",
    link: "#"
  },
  {
    title: "Introduction to Generative AI – Google (May 2024)",
    link: "#"
  },
  {
    title: "Prompt Design in Vertex AI – Google (May 2024)",
    link: "#"
  },
  {
    title: "Google Cloud Cybersecurity – Google (Mar 2025)",
    link: "#"
  },
  {
    title: "Web Development – Internshala (Jul 2024)",
    link: "#"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="bg-gray-900 text-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 text-center mb-10">
          Certifications
        </h2>

        <ul className="space-y-4">
          {certifications.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 px-6 py-4 rounded-lg shadow-md text-gray-300 hover:bg-gray-700 hover:text-yellow-300 hover:scale-[1.02] transition-all duration-300 ease-in-out"
            >
              {cert.title}
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
