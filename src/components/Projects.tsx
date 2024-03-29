import React from "react";
import { useInView } from "react-intersection-observer";

const Projects: React.FC = () => {
  const [ref, inView] = useInView();

  return (
    <div className="flex justify-center">
      <div
        id="projects"
        ref={ref}
        className={`py-16 bg-gray-50 transition-transform duration-300 mt-4 mx-4 rounded-lg w-4/5  ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } `}
      >
        <div className="container mx-auto px-4 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-4">Projects</h2>

          <div className="mb-6">
            <div className="mb-6 flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold">SnowJam</h3>
              <p className="text-gray-600 pl-2">December 2023</p>
              <p className="text-gray-600 text-lg w-1/3">
                A small game made for a game jam at Northeastern University. The
                game can be played at the following link:{" "}
                <a href="https://snowjam.asahoo.dev/">SnowJam</a>
              </p>

              <h4 className="text-xl font-bold">Tools:</h4>
              <p className="text-gray-600 pl-4">
                Unity Game Engine <br />
                C#
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
