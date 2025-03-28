import React from "react";
import { useInView } from "react-intersection-observer";

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      name: "X Finance",
      description:
        "A tool that analyzes real-time tweet data to generate summaries of stock performance and public consensus using the X API and X.ai API. Built with React, Tailwind, and Flask. Made for the inaugural X Developer Challenge in San Francisco.",
      tech: ["React", "TypeScript", "Tailwind", "Python", "Flask"], 
      link: "https://github.com/anish-sahoo/XDevChallenge",
    },
    {
      name: "Lingua Link",
      description:
        "A language learning platform connecting users worldwide through text and video calls, with AI chat options to sharpen language skills.",
      tech: ["React", "Tailwind", "WebRTC", "Firebase"],
      link: "https://github.com/william-riser/LinguaLink",
    },
    {
      name: "EasyClassPlanner",
      description:
        "A web app that helps students optimize their class schedules using recursive backtracking based on preferences.",
      tech: ["React", "TypeScript", "Rust"],
      link: "https://easyclassplanner.com",
    },
    {
      name: "Three Trios",
      description: "Turn based card game implemented using object oriented principles including MVC, command, callback. Wrote comprehensive JUnit tests with 100% coverage to ensure robust functionality and smooth integration.",
      tech: ["Java", "JUnit", "Swing"],
    },
    {
      name: "Basketball Scouting",
      description: "Full-stack application allowing users to create profiles, search for basketball players, and view detailed player statistics. Implemented full CRUD operations for seamless database interaction and efficient profile management.",
      tech: ["SQLite", "React", "Express", "Tailwind CSS"],
      link: "https://github.com/william-riser/BasketballScouting",
    },
    {
      name: "Carbon Foodprint",
      description: "A tool designed to gamify users' food choices by tracking their carbon footprint. Users can create profiles, add receipts, and view their carbon footprint score compared to others.",
      tech: ["MongoDB", "OpenAI API", "TypeScript", "React"],
      link: "https://github.com/william-riser/yhack"
    }
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`min-h-screen bg-gradient-to-b from-gray-100 to-blue-50 flex flex-col justify-center items-center py-16 px-4 md:px-8 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl text-center w-full">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 mb-8">
          My Projects
        </h2>
        {/* <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Here are some of my favorite projects that I've worked on. To see 
          the full list, check out my GitHub!
        </p> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap mb-4 justify-center">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600 text-white text-xs md:text-sm px-3 py-1 rounded-full mr-2 mb-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block  bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
