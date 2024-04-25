import React from "react";
import { useInView } from "react-intersection-observer";

const Projects: React.FC = () => {
  const [ref, inView] = useInView();

  const projects = [
    {
      name: "X Finance",
      description:
          "This was made for the X Developer Challenge. X Finance is a tool that uses X API v2 and the X.ai API to analyze real-time tweet data and generate a summary of a stock's performance and public consensus. The front end is built using React and Tailwind, and the back end uses Python Flask. When a user searches for a stock, a request is sent to the Flask server, which uses the X API to query ~5000 relevant tweets. These tweets along with price data for the stock are sent to the X.ai API, which generates a brief trend summary for the user.",
      tech: ["React", "TypeScript", "Tailwind", "Python", "Flask"],
      github: "https://github.com/william-riser/XDevChallenge",
    },
    {
      name: "Lingua Link",
      description:
          "LinguaLink is a language learning platform that allows users to connect from all over the world and converse with each other via text and video call. It also gives users the option to sharpen their skills via AI chat.",
      tech: ["React", "Tailwind", "WebRTC", "Firebase"],
      github: "https://github.com/william-riser/LinguaLink",
    },
    {
      name: "williamriser.com",
      description:
          "This is my personal website to display my projects and resume. It is built using React and Tailwind CSS.",
      tech: ["React", "Tailwind"],
      github: "https://github.com/william-riser/personal-websiteV2",
    },
  ];

  return (
      <div className="flex justify-center">
        <div
            id="projects"
            ref={ref}
            className={`py-16 bg-gray-50 transition-transform duration-300 mt-4 mx-4 rounded-lg w-4/5 ${
                inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                  <div
                      key={index}
                      className="p-6 bg-white rounded-lg shadow-md"
                  >
                    <h2 className="text-2xl font-bold mb-3">{project.name}</h2>
                    <p className="text-lg mb-4">{project.description}</p>
                    <div className="flex flex-wrap">
                      <h2 className="text-lg mr-2 mb-1">Tech Stack:</h2>
                      {project.tech.map((tech, index) => (
                          <span
                              key={index}
                              className="bg-gray-800 text-white text-sm px-2 py-1 rounded-md mr-2 mb-1"
                          >
                      {tech}
                    </span>
                      ))}
                    </div>
                    <a
                        href={project.github}
                        className="block mt-4 text-lg bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                    >
                      GitHub
                    </a>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Projects;
