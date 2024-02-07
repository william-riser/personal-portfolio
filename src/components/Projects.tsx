import React from "react";
import { useInView } from "react-intersection-observer";

const EducationInfo: React.FC = () => {
  const [ref, inView] = useInView();

  return (
    <div
      id="projects"
      ref={ref}
      className={`max-w-2xl mx-auto p-8 bg-white shadow-md rounded-md my-8 ${
        inView ? "" : "translate-y-10"
      }`}
    >
      <h2 className="text-4xl font-bold mb-4">Projects</h2>

      <div className="mb-4">
        <h3 className="text-2xl font-bold">SnowJam</h3>
        <p className="text-gray-600 pl-2">December 2023</p>
        <p className="text-gray-600 text-xl">
          A small game made for a game jam at Northeastern University. 
          The game can be played at the following link: <a href="https://snowjam.asahoo.dev/">SnowJam</a>
        </p>
        
        <h4 className="text-xl font-bold">Tools:</h4>
        <p className="text-gray-600 pl-4">
          Unity Game Engine <br />
          C#
        </p>
      </div>
    </div>
  );
};

export default EducationInfo;
