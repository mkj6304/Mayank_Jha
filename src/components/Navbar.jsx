import React from "react";

const Navbar = () => {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Achievements", href: "#achievements" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-yellow-300 tracking-widest">
          Mayank
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-gray-300 hover:text-yellow-300 transition font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
