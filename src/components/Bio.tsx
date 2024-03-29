import React from "react";
import banner from "/public/images/banner.jpeg";

const BackgroundImage: React.FC = () => {
  return (
    <section
      id="home"
      className="bg-cover bg-fixed bg-center h-screen flex items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="container mx-auto px-4 flex flex-row-reverse">
        {/* Reverse order using flex-row-reverse */}
        <div className="bg-black bg-opacity-70 p-8 text-white rounded-lg flex flex-col items-center text-center  sm:w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg">
            Welcome! I'm William Riser, a computer science student at
            Northeastern University. I have a passion for programming and
            problem-solving, and I am constantly seeking opportunities to expand
            my knowledge and skills in the field of computer science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BackgroundImage;
