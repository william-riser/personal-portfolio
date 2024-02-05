import React from "react";

const EducationInfo: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-md my-8">
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

      {/* Add more education entries as needed */}
    </div>
  );
};

export default EducationInfo;
