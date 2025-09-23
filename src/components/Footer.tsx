import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer
      className={`mt-20 py-8 border-t ${
        darkMode ? "border-gray-700 bg-black/80" : "border-gray-200 bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Nombre + título */}
        <p
          className={`text-sm md:text-base ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          © {new Date().getFullYear()} Kevin Soto · Systems Engineer & Front-End
          Developer
        </p>

        {/* Links sociales */}
        <div className="flex gap-4 text-xl">
          <a
            // href="https://linkedin.com/in/tu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:scale-110 transition-transform ${
              darkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/kevinsoto13"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:scale-110 transition-transform ${
              darkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-black"
            }`}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
