import React from "react";
import banner from "/public/images/banner.jpeg";

const BackgroundImage: React.FC = () => {
  return (
    <div
      id="home"
      className="bg-fixed bg-cover bg-center h-screen flex items-center justify-end"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="bg-opacity-70 bg-black p-8 text-white text-right rounded-lg sm:w-full m:w-2/5 lg:w-2/5 xl:w-2/5">
        <h1 className="text-3xl font-bold mb-4 text-center">About Me</h1>
        <p className="text-lg text-center">
          Welcome! I'm William Riser, a computer science student at Northeastern
          University. I have a passion for coding and problem-solving, and I am
          constantly seeking opportunities to expand my knowledge and skills in
          the field of computer science.
        </p>
      </div>
    </div>
  );
};

export default BackgroundImage;
