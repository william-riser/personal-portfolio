import React from "react";
import { useInView } from 'react-intersection-observer';

const EducationInfo: React.FC = () => {
  const [ref, inView] = useInView();

  return (
    <div id="skills"
      ref={ref}
      className={`max-w-2xl mx-auto p-8 bg-white shadow-md rounded-md my-8  ${
        inView ? 'opacity-100 translate-y-0' : 'translate-y-10'
      }`}
    >
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
  );
};

export default EducationInfo;
