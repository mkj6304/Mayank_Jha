import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-center py-6 border-t border-gray-800 mt-10 text-gray-500 text-sm">
      <p>© {new Date().getFullYear()} Mayank Jha. All rights reserved.</p>
      <a
        href="#home"
        className="text-yellow-300 hover:underline block mt-2 transition duration-200"
      >
        ↑ Back to top
      </a>
    </footer>
  );
};

export default Footer;
