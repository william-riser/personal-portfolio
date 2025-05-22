import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import resume from "../assets/William_Riser_Resume.pdf";
import { languages, technologies, tools } from "../assets/tech.ts";

const ResumePage: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const courses = [
    "Machine Learning and Data Mining 1",
    "Artificial Intelligence",
    "Human-Computer Interaction",
    "Object-Oriented Design",
    "Algorithms",
    "Foundations of Cybersecurity",
    "Discrete Structures",
    "Database Design",
    "Mathematics of Data Models",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <nav className="p-4">
        <Link to="/" className="text-blue-600 hover:text-blue-800">
          ← Back to Home
        </Link>
      </nav>
      <section
        ref={ref}
        className={`py-16 px-4 md:px-8 transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center flex-col mb-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-2">
              Resume
            </h2>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200"
            >
              Resume PDF
            </a>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Education Section */}
            <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Northeastern University
              </h3>
              <p className="text-lg text-gray-600">
                Bachelor of Science in Computer Science | <strong>2027</strong>
              </p>
              <p className="text-md text-gray-500 mb-2">
                Concentration in Artificial Intelligence
              </p>
              <p className="text-sm text-gray-500">Boston, MA</p>
              <div className="mt-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Relevant Coursework
                </h4>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {courses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Skills Section */}
            <div className="w-full md:w-1/2 bg-white rounded-lg shadow-lg p-6 space-y-6">
              {/* Languages */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Languages
                </h4>
                <div className="flex flex-wrap gap-3">
                  {languages.map((language) => (
                    <div
                      key={language.name}
                      className="flex items-center bg-gray-700 text-white px-3 py-2 rounded-lg"
                    >
                      {language.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((technology) => (
                    <div
                      key={technology.name}
                      className="flex items-center bg-gray-700 text-white px-3 py-2 rounded-lg"
                    >
                      {technology.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Tools
                </h4>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center bg-gray-700 text-white px-3 py-2 rounded-lg"
                    >
                      {tool.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumePage; 