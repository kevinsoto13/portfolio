import React from "react";

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: "Quipana",
      description:
        "Enterprise-ready platform built with Vue, PrimeVue 4, TypeScript, Tailwind and Bootstrap. Dashboards, tables, forms, and reports for multiple clients.",
      tech: ["Vue", "PrimeVue 4", "TypeScript", "Tailwind", "Bootstrap"],
      link: "https://quipana.com",
      image: "quipana.jpg",
    },
    {
      title: "Product Manager",
      description:
        "Full-stack CRUD app built with the PERN stack, featuring an AI-powered chat connected via n8n. The API is tested with Supertest and documented with Swagger. Frontend end-to-end tests implemented using Playwright.",
      tech: ["PostgreSQL", "Express", "React", "Node.js", "Playwright", "n8n"],
      link: "https://rest-apis-typescript-frontend-eta-eight.vercel.app",
      image: "product-manager.jpg",
    },
    {
      title: "SportKS",
      description:
        "Android mobile app built with React Native that displays live sports matches and scores through API integration. Features user authentication system. Currently available only for Android. Credentials required for testing.",
      tech: ["React Native", "TypeScript", "API Integration", "Authentication"],
      link: "https://expo.dev/accounts/sotoorta93/projects/app-react-native/builds/d5deb393-b67a-4f10-bfb1-056310d6a1c6",
      image: "sports-app.jpg",
    },
    {
      title: "React E-commerce",
      description:
        "E-commerce app powered by Firebase. Custom UI with Sass, hooks and context.",
      tech: ["React", "Firebase", "Sass", "Context API"],
      link: "https://silly-entremet-92b88c.netlify.app",
      image: "/ecommerce.jpg",
    },
    {
      title: "Responsive Web Design",
      description:
        "Complete website built with HTML, CSS, and Sass. SEO optimized and fully responsive.",
      tech: ["HTML", "CSS", "Sass", "SEO"],
      link: "https://spontaneous-kitten-423a21.netlify.app",
      image: "responsive.jpg",
    },
    {
      title: "Veterinaria PetCity",
      description:
        "Collaborative project combining web development and e-commerce. Built with React, Sass, HTML, and CSS for jeyther.dev.",
      tech: ["React", "Sass", "HTML", "CSS"],
      link: "https://veterinaria-petcity.netlify.app/petshop",
      image: "petcity.jpg",
    },
    {
      title: "Tip Calculator",
      description: "React app to calculate tips and consumption easily.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      link: "https://rainbow-pavlova-383ecf.netlify.app",
      image: "tip-calculator.jpg",
    },
    {
      title: "Veterinary Patients Manager",
      description: "React CRUD app for managing veterinary patients.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      link: "https://dazzling-crostata-5098eb.netlify.app",
      image: "veterinary.jpg",
    },
    {
      title: "GuitarLA Store",
      description: "E-commerce demo for guitars with React.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      link: "https://soft-crisp-402ff0.netlify.app",
      image: "guitarla.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${
                darkMode ? "bg-gray-800" : "bg-white"
              } rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${
                darkMode ? "border-gray-700" : "border-gray-200"
              } overflow-hidden`} // 👈 importante
            >
              {/* Imagen preview */}
              <div className="w-full h-56 overflow-hidden p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              {/* Contenido */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  } mb-4 leading-relaxed`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`${
                        darkMode
                          ? "bg-gray-700 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      } px-3 py-1 rounded-full text-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-semibold text-blue-500 hover:text-blue-700"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
