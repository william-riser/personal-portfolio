import { Link } from 'react-router-dom';
import profile from "/public/images/profile.jpg"; 

const Home: React.FC = () => {
  const redirect = (url: string) => {
    return () => {
      window.open(url, "_blank");
    };
  };

  return (
    <section className="min-h-screen bg-wow-stone-texture bg-wow-stone-dark flex flex-col justify-center items-center p-4">
      <div className="bg-wow-stone-DEFAULT shadow-2xl rounded-lg p-6 md:p-10 max-w-3xl w-full border-4 border-wow-gold ring-2 ring-wow-gold-dark">
        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          <h1 className="text-3xl md:text-5xl font-medieval text-wow-gold-light tracking-wider">
            Hey there, I'm
            <span className="text-wow-gold"> William</span> 👋 
          </h1>

          <div className="p-1 bg-gradient-to-br from-wow-gold to-wow-gold-dark rounded-md shadow-lg">
            <img
              src={profile}
              alt="profile picture"
              className="w-32 h-32 md:w-40 md:h-40 rounded-md object-cover border-2 border-gray-900" // Inner border can be dark stone
            />
          </div>

          <p className="text-base md:text-lg text-wow-parchment max-w-2xl leading-relaxed font-lora">
            A second-year Computer Science student at{" "}
            <span onClick={redirect(`https://www.northeastern.edu/`)} className="font-semibold cursor-pointer text-wow-gold hover:text-wow-gold-light underline">
              Northeastern University
            </span>{" "}
            with a concentration in <span onClick={redirect(`https://catalog.northeastern.edu/undergraduate/computer-information-science/computer-science/bscs/#ARIN`)} className="cursor-pointer text-wow-gold hover:text-wow-gold-light underline">Artificial
              Intelligence</span>.
            I love exploring new ideas at hackathons, working on
            fun side projects, and collaborating with teams.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pt-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-wow-stone-dark text-wow-gold rounded-md shadow-lg border-2 border-wow-gold-dark hover:border-wow-gold hover:bg-wow-stone transition-all duration-200 transform hover:scale-105 font-lora font-semibold tracking-wide"
            >
              See My Projects
            </Link>

            <Link
              to="/resume"
              className="px-6 py-3 bg-wow-stone-dark text-wow-gold rounded-md shadow-lg border-2 border-wow-gold-dark hover:border-wow-gold hover:bg-wow-stone transition-all duration-200 transform hover:scale-105 font-lora font-semibold tracking-wide"
            >
              Resume
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 bg-wow-stone-dark text-wow-gold rounded-md shadow-lg border-2 border-wow-gold-dark hover:border-wow-gold hover:bg-wow-stone transition-all duration-200 transform hover:scale-105 font-lora font-semibold tracking-wide"
            >
              Get in Touch
            </Link>
            <Link
              to="/extras"
              className="px-6 py-3 bg-wow-stone-dark text-wow-gold rounded-md shadow-lg border-2 border-wow-gold-dark hover:border-wow-gold hover:bg-wow-stone transition-all duration-200 transform hover:scale-105 font-lora font-semibold tracking-wide"
              >
                Extras
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;