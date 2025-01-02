import React from "react";
import banner from "/public/images/banner.jpeg";

const BackgroundImage: React.FC = () => {
  return (
      <section
          id="home"
          className="bg-cover bg-fixed bg-center h-screen"
          style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-end">
          {/* Center content using flex */}
          <div className="bg-black bg-opacity-70 p-8 text-white rounded-lg max-w-md w-full text-center">
            {/* Adjust max-width and width for responsiveness */}
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
            <p className="text-base md:text-lg">
            I'm William, a sophomore studying computer science at Northeastern University with hands-on experience in web development, Java, Python, and various other programming languages and tools. I've had the opportunity to work in collaborative settings, participating in multiple hackathons and engaging in side projects that deepen my technical skills and teamwork abilities.
            </p>
          </div>
        </div>
      </section>
  );
};

export default BackgroundImage;
