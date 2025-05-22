import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";


const ProjectsPage: React.FC = () => {
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
    <div className="min-h-screen bg-wow-stone-texture bg-wow-stone-dark font-lora text-wow-parchment">
  
      <nav className="p-4 fixed top-0 left-0 z-50 w-full bg-wow-stone-dark/80 backdrop-blur-sm shadow-md"> {/* Sticky nav with slight transparency */}
        <Link
          to="/"
          className="text-wow-gold hover:text-wow-gold-light font-semibold transition-colors duration-200 flex items-center group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
          Back to Home Page
        </Link>
      </nav>

      <section
        ref={ref}
        className={`flex flex-col justify-center items-center pt-24 pb-16 px-4 md:px-8 transition-all duration-1000 ease-out ${ // Slower, smoother transition
          inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-12" // Slightly increased translate-y
        }`}
      >
        <div className="max-w-6xl text-center w-full">
          <h2 className="text-center text-4xl md:text-5xl font-medieval text-wow-gold-light mb-12 drop-shadow-md">
            My Completed Projects 
          </h2>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col p-6 bg-wow-stone-darker rounded-lg shadow-xl border-2 border-wow-gold-dark hover:border-wow-gold transform hover:scale-[1.03] transition-all duration-300 ease-out group" // Added 'group' for potential internal hover effects
              >
                {/* Project Name */}
                <h3 className="text-2xl font-medieval text-wow-gold mb-3 text-left group-hover:text-wow-gold-light transition-colors duration-200">
                  {project.name}
                </h3>
                {/* Project Description */}
                <p className="text-wow-parchment text-sm md:text-base leading-relaxed mb-4 text-left flex-grow"> 
                  {project.description}
                </p>
                {/* Tech Tags */}
                <div className="flex flex-wrap mb-6 justify-start text-left">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-wow-stone-dark text-wow-gold-light text-xs px-2.5 py-1 rounded-md border border-wow-gold-dark/50 mr-2 mb-2 font-lora"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link ? ( 
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto self-start px-5 py-2.5 bg-wow-stone-dark text-wow-gold rounded-md shadow-md border-2 border-wow-gold-dark hover:border-wow-gold hover:bg-wow-stone transition-all duration-200 transform hover:scale-105 font-lora font-semibold tracking-wide text-sm"
                  >
                    View Details 
                  </a>
                ) : (
                  <></>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;