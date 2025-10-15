import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";
import resumePDF from "../../public/resume.pdf"; 
import { languages, technologies, tools } from "../assets/tech.ts"; 


const ResumePage: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

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
    <div className="min-h-screen bg-wow-stone-texture bg-wow-stone-dark font-lora text-wow-parchment selection:bg-wow-gold selection:text-wow-stone-darker">
      <nav className="p-4 fixed top-0 left-0 z-50 w-full bg-wow-stone-dark/80 backdrop-blur-sm shadow-lg border-b border-wow-gold-dark/30">
        <Link
          to="/"
          className="text-wow-gold hover:text-wow-gold-light font-semibold transition-colors duration-200 flex items-center group text-sm md:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
          Back to Home Page
        </Link>
      </nav>

      <section
        ref={ref}
        className={`min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-8 transition-all duration-1000 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-10 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-medieval text-wow-gold-light mb-6 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
              My Resume
            </h2>
            <a
              href={resumePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 bg-wow-stone-dark text-wow-gold rounded-md shadow-lg border-2 border-wow-gold-dark hover:border-wow-gold hover:bg-wow-stone focus:outline-none focus:ring-2 focus:ring-wow-gold focus:ring-opacity-50 transition-all duration-200 transform hover:scale-105 font-lora font-semibold tracking-wide text-base"
            >
              View Full Resume (PDF)
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 bg-wow-stone-darker rounded-lg shadow-xl p-6 md:p-8 border-2 border-wow-gold-dark/70">
              <h3 className="text-2xl md:text-3xl font-medieval text-wow-gold mb-6 border-b-2 border-wow-gold-dark/50 pb-3">
                Education
              </h3>
              <div className="mb-6">
                <p className="text-xl font-semibold text-wow-parchment">Northeastern University</p>
                <p className="text-lg text-wow-parchment/90">
                  Bachelor of Science in Computer Science | <strong className="text-wow-gold-light">2027</strong>
                </p>
                <p className="text-md text-wow-parchment/80 mt-1">
                  Concentration in Artificial Intelligence
                </p>
                <p className="text-sm text-wow-parchment/70">Boston, MA</p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-wow-gold mb-4">
                  Relevant Courses
                </h4>
                <ul className="space-y-2 pl-1">
                  {courses.map((course) => (
                    <li key={course} className="flex items-center text-wow-parchment/90 text-sm md:text-base">
                      <span className="text-wow-gold mr-2 text-lg leading-none select-none">&#x2022;</span> {/* Styled bullet */}
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full md:w-1/2 bg-wow-stone-darker rounded-lg shadow-xl p-6 md:p-8 border-2 border-wow-gold-dark/70 space-y-8">
              <h3 className="text-2xl md:text-3xl font-medieval text-wow-gold mb-6 border-b-2 border-wow-gold-dark/50 pb-3">
                Skills
              </h3>
              {/* Languages */}
              <div>
                <h4 className="text-xl font-semibold text-wow-gold mb-4">
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {languages.map((language) => (
                    <div
                      key={language.name}
                      className="flex items-center bg-wow-stone-dark text-wow-gold-light text-xs md:text-sm px-3 py-1.5 rounded-md border border-wow-gold-dark/50"
                    >
                      {language.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-xl font-semibold text-wow-gold mb-4">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {technologies.map((technology) => (
                    <div
                      key={technology.name}
                      className="flex items-center bg-wow-stone-dark text-wow-gold-light text-xs md:text-sm px-3 py-1.5 rounded-md border border-wow-gold-dark/50"
                    >
                      {technology.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h4 className="text-xl font-semibold text-wow-gold mb-4">
                  Tools
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {tools.map((tool) => (
                    <div
                      key={tool.name}
                      className="flex items-center bg-wow-stone-dark text-wow-gold-light text-xs md:text-sm px-3 py-1.5 rounded-md border border-wow-gold-dark/50"
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