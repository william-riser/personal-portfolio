import React from "react";
import { useInView } from "react-intersection-observer";

const EducationInfo: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <div className="flex justify-center">
      <div
        id="education"
        ref={ref}
        className={`py-16 bg-gray-50 transition-transform duration-300 mt-4 mx-4 rounded-lg w-4/5  ${
          inView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        } `}
      >
        <div className="container mx-auto px-4 flex flex-col items-center ">
          <h2 className="text-4xl font-bold mb-6">Education</h2>

          <div className="mb-6">
            <div className="mb-6">
              <h3 className="text-2xl font-medium mb-2">
                Northeastern University
              </h3>
              <p className="text-lg text-gray-700">
                Bachelor of Science in Computer Science | 2027
              </p>
              <p className="text-gray-600">Boston, MA</p>

              <div className="mt-4">
                <h4 className="text-xl font-medium mb-2">
                  Relevant Coursework:
                </h4>
                <ul className="list-disc pl-6">
                  <li className="text-gray-700">
                    CS2500 - Fundamentals of Computer Science 1
                  </li>
                  <li className="text-gray-700">
                    CS1800 - Discrete Structures
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationInfo;
