import React from "react";
import { useInView } from "react-intersection-observer";

const Skills: React.FC = () => {
  const [ref, inView] = useInView();

  return (
    <div className="flex justify-center">
      <div
        id="skills"
        ref={ref}
        className={` mx-auto p-8 bg-white shadow-md rounded-md my-8  w-4/5 ${
          inView ? "opacity-100 translate-y-0" : "translate-y-10"
        }`}
      >
                <div className="container mx-auto px-4 flex flex-col items-center text-center">

        <h2 className="text-4xl font-bold mb-4">Skills</h2>

        <div className="mb-4">
          <h3 className="text-2xl font-bold">Languages</h3>
          <p className="text-gray-600 text-xl">
            Java <br />
            Kotlin <br />
            JavaScript <br />
          </p>
          <h3 className="text-2xl font-bold pt-4">Technologies</h3>
          <p className="text-gray-600 text-xl">
            React <br />
            Node.js <br />
            HTML <br />
            CSS <br />
            Git
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
