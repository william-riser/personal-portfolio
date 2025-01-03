import profile from "/public/images/profile.jpg";

const Landing: React.FC = () => {

  const redirect = (url: string) => {
    return () => {
      window.open(url, "_blank");
    };
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex justify-center items-center"
    >
      <div className="flex flex-col items-center text-center space-y-8 px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800">
          Hey there, I'm
          <span className="text-blue-600"> William</span> 👋
        </h1>
        <img
          src={profile}
          alt="profile picture"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-xl ring-4 ring-blue-500 transform hover:scale-105 transition-transform duration-300"
        />
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
          A second-year Computer Science student at{" "}
          <span className="font-semibold text-blue-500">
            Northeastern University
          </span>{" "}
          with a concentration in <span onClick={redirect(`https://catalog.northeastern.edu/undergraduate/computer-information-science/computer-science/bscs/#ARIN`)} className="cursor-pointer text-blue-600">Artificial 
            Intelligence</span>.
          I love exploring new ideas at hackathons, working on
          fun side projects, and collaborating with teams.
        </p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
          >
            See My Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg shadow-md hover:bg-gray-400 transition-colors duration-200"
          >
            Get in Touch
          </a>
          <a
            href="/public/docs/William_Riser_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors duration-200"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
