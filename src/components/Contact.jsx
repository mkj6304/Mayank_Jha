import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20 px-6">
      <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-300 mb-8">
          Contact <span className="text-white">Me</span>
        </h2>

        <p className="text-lg text-gray-300 mb-6">
          Let's work together! I'm available for collaboration, internships, freelance projects, and exciting ideas.
        </p>

        <div className="space-y-4 text-lg text-gray-200 mb-8">
          <div className="flex items-center justify-center gap-2">
            <span className="text-yellow-300 text-xl">📧</span>
            <a href="mailto:mayankjha632004@gmail.com" className="hover:underline">
              mayankjha632004@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="text-yellow-300 text-xl">📞</span>
            <a href="tel:+919399091115" className="hover:underline">
              +91 93990 91115
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-yellow-300 text-2xl">
          <a href="https://github.com/mkj6304" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github hover:text-white transition" />
          </a>
          <a href="https://www.linkedin.com/in/mayank-jha-361573298/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin hover:text-white transition" />
          </a>
    
          
          <a href="https://instagram.com/mayank_jha04" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram hover:text-white transition" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
