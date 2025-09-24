import React from "react";
import { Moon, Sun } from "lucide-react";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const scrollToTop = () => {
    const el = document.getElementById("top");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 w-full ${
        darkMode ? "bg-black/90" : "bg-white/90"
      } backdrop-blur-md z-50`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Nombre */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={scrollToTop}
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="w-10 h-10 object-cover rounded-full hover:scale-110 transition-transform duration-300"
          />
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              Kevin Soto
            </h1>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Systems Engineer
            </p>
          </div>
        </div>

        {/* Redes + Dark Mode */}
        <div className="flex items-center gap-4">
          {/* LinkedIn */}
          <a
            href="www.linkedin.com/in/kevin-soto-9b6712136" // 👉 reemplaza con tu link real
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform hover:scale-110 ${
              darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"
            }`}
          >
            <FaLinkedin size={22} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/kevinsoto13"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform hover:scale-110 ${
              darkMode ? "text-gray-300" : "text-gray-800"
            }`}
          >
            <FaGithub size={22} />
          </a>

          {/* CV */}
          {/* <a
            href="https://www.doyoubuzz.com/kevin-soto-orta"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-transform hover:scale-110 ${
              darkMode ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-black"
            }`}
          >
            <FaFileAlt size={22} />
          </a> */}

          {/* Botón Dark Mode */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
            }`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
