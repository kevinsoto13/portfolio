import React from "react";
import {
  SiJavascript,
  SiVuedotjs,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiFirebase,
  SiPostgresql,
  SiCss3,
  SiSass,
  SiHtml5,
  SiExpress,
  SiN8N,
} from "react-icons/si";

interface AboutProps {
  darkMode: boolean;
}

const techIcons: Record<string, React.ReactNode> = {
  JavaScript: <SiJavascript className="text-yellow-500 text-2xl" />,
  Vue: <SiVuedotjs className="text-green-500 text-2xl" />,
  React: <SiReact className="text-cyan-400 text-2xl" />,
  Node: <SiNodedotjs className="text-green-600 text-2xl" />,
  TypeScript: <SiTypescript className="text-blue-500 text-2xl" />,
  Firebase: <SiFirebase className="text-orange-500 text-2xl" />,
  PostgreSQL: <SiPostgresql className="text-blue-700 text-2xl" />,
  CSS: <SiCss3 className="text-blue-400 text-2xl" />,
  SASS: <SiSass className="text-pink-500 text-2xl" />,
  HTML: <SiHtml5 className="text-orange-600 text-2xl" />,
  Express: <SiExpress className="text-gray-500 text-2xl" />,
  N8N: <SiN8N className="text-red-500 text-2xl" />,
};

const About: React.FC<AboutProps> = ({ darkMode }) => (
  <section
    id="about"
    className={`py-20 ${
      darkMode ? "bg-gray-800/50" : "bg-gray-50"
    } transition-colors duration-300`}
  >
    <div className="container mx-auto px-6">
      {/* Título */}
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>

      {/* Texto + Imagen en paralelo */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        {/* Texto */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Hello! I'm a passionate Front-End Developer with a strong interest in building modern and scalable web applications.
          </h3>
          <p
            className={`text-lg mb-6 leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            While my main focus is creating clean, responsive, and intuitive user interfaces, I’ve also worked on several full-stack projects where I gained valuable experience with backend development.
          </p>
          <p
            className={`text-lg leading-relaxed ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            I love writing clean code, following best practices, and delivering user-friendly digital experiences that combine both functionality and design.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex justify-center">
          <div
            className={`relative w-80 h-80 ${
              darkMode
                ? "bg-gradient-to-br from-blue-500 to-purple-600"
                : "bg-gradient-to-br from-blue-400 to-purple-500"
            } rounded-full flex items-center justify-center shadow-2xl`}
          >
            <img
              src="/ks-min.png"
              alt="Kevin Soto"
              className="w-90 h-90 object-contain rounded-full"
              loading="lazy"
              style={{ objectPosition: "center bottom" }}
            />
          </div>
        </div>
      </div>

      {/* Skills (abajo ocupando todo el ancho) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {Object.keys(techIcons).map((tech) => (
          <div
            key={tech}
            className={`${
              darkMode ? "bg-gray-700" : "bg-white"
            } p-3 rounded-lg flex items-center gap-2 justify-center font-semibold shadow-md transition-transform hover:scale-105`}
          >
            {techIcons[tech]}
            <span>{tech}</span>
          </div>
        ))}
      </div>

      {/* Certifications */}
<div className="mt-20">
  <h3 className="text-2xl font-bold mb-8 text-center">Certifications</h3>
  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
    <a
      href="https://pub.coderhouse.com/legacy-certificates/6811e428395778cf5f777ce6?lang=es"
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform ${
        darkMode ? "bg-gray-700" : "bg-white"
      }`}
    >
      <img
        src="/certificado1.jpg"
        alt="Certificado React Coderhouse"
        className="w-full h-48 object-cover"
      />
      <p className="p-3 text-center font-medium">
        React
      </p>
    </a>

    <a
      href="https://pub.coderhouse.com/certificates/f737ea62-43dd-4656-8af1-41c1e93a32c4?v=1"
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform ${
        darkMode ? "bg-gray-700" : "bg-white"
      }`}
    >
      <img
        src="/certificado2.jpg"
        alt="Certificado JavaScript Coderhouse"
        className="w-full h-48 object-cover"
      />
      <p className="p-3 text-center font-medium">
        JavaScript 
      </p>
    </a>

    <a
      href="https://pub.coderhouse.com/legacy-certificates/67805aafe9330b55412d1ec4?lang=es"
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform ${
        darkMode ? "bg-gray-700" : "bg-white"
      }`}
    >
      <img
        src="/certificado3.jpg"
        alt="Certificado Desarrollo Web Coderhouse"
        className="w-full h-48 object-cover"
      />
      <p className="p-3 text-center font-medium">
        Desarrollo Web
      </p>
    </a>
  </div>
</div>

    </div>
  </section>
);

export default About;
