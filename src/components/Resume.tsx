import React from "react";
import { useInView } from "react-intersection-observer";

const Resume: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const courses = [
    "Fundamentals of Computer Science 1 & 2",
    "Discrete Structures",
    "Database Design",
    "Mathematics of Data Models",
  ];

  const languages = ["Java", "JavaScript", "Kotlin", "TypeScript", "SQL"];

  const technologies = ["React", "Node.js", "Express", "TailwindCSS", "SQLite"];

  const tools = ["Git", "GitHub", "VSCode", "IntelliJ IDEA"];

  return (
      <div className="flex justify-center">
        <div
            id="resume"
            ref={ref}
            className={`py-8 md:py-16 bg-gray-50 transition-transform duration-300 mt-4 mx-2 sm:mx-4 rounded-lg w-full sm:w-5/6 lg:w-4/5 ${
                inView ? "lg:translate-y-0 lg:opacity-100" : "lg:translate-y-10 lg:opacity-0"
            }`}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Resume</h2>
            <div className="flex flex-col md:flex-row justify-center">
              <div className="w-full md:w-1/2 px-2 md:px-4 mb-8">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-medium mb-2">Northeastern University</h3>
                  <p className="text-base md:text-lg text-gray-700">
                    Bachelor of Science in Computer Science | 2027
                  </p>
                  <p className="text-sm text-gray-600">Boston, MA</p>
                  <div className="mt-4">
                    <h4 className="text-lg md:text-xl font-medium mb-2">Relevant Coursework:</h4>
                    <ul className="list-disc list-inside text-gray-700">
                      {courses.map((course) => (
                          <li key={course}>{course}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 px-2 md:px-4 mb-8">
                <div className="mb-6">
                  <h4 className="text-lg md:text-xl font-medium mb-2">Languages:</h4>
                  <div className="flex flex-wrap">
                    {languages.map((language) => (
                        <span key={language} className="bg-gray-700 rounded-md p-1 m-1 text-white text-sm">
                      {language}
                    </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg md:text-xl font-medium mb-2">Technologies:</h4>
                  <div className="flex flex-wrap">
                    {technologies.map((technology) => (
                        <span key={technology} className="bg-gray-700 rounded-md p-1 m-1 text-white text-sm">
                      {technology}
                    </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg md:text-xl font-medium mb-2">Tools:</h4>
                  <div className="flex flex-wrap">
                    {tools.map((tool) => (
                        <span key={tool} className="bg-gray-700 rounded-md p-1 m-1 text-white text-sm">
                      {tool}
                    </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Resume;
