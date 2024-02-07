import React from "react";
import { useInView } from 'react-intersection-observer';

const EducationInfo: React.FC = () => {
  const [ref, inView] = useInView();

  return (
    <div id="education"
      ref={ref}
      className={`max-w-2xl mx-auto p-8 bg-white shadow-md rounded-md my-8 ${
        inView ? '' : 'translate-y-10'
      } `}
    >
      <h2 className="text-4xl font-bold mb-4">Education</h2>

      <div className="mb-4">
        <h3 className="text-2xl font-bold">Northeastern University</h3>
        <p className="text-gray-600 text-xl">
          Bachelor of Science in Computer Science | 2027
        </p>
        <p className="text-gray-600 pl-2">Boston, MA</p>
        <h4 className="text-xl font-bold">Coursework:</h4>
        <p className="text-gray-600 pl-4">
          CS2500 - Fundamentals of Computer Science 1 <br />
          CS1800 - Discrete Structures
        </p>
      </div>
    </div>
  );
};

export default EducationInfo;
