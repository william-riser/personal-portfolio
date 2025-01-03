import React from "react";
import { useInView } from "react-intersection-observer";

const GetInTouch: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="contact"
      ref={ref}
      className={` bg-gradient-to-b from-gray-100 to-blue-50 flex justify-center items-center py-16 px-4 md:px-8 transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center max-w-xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Feel free to connect with me or drop me an email. I'd love to hear
          from you!
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          
          <a
            href="https://linkedin.com/in/william-riser"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-3xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.794-1.75-1.732s.784-1.732 1.75-1.732 1.75.794 1.75 1.732-.784 1.732-1.75 1.732zm13.5 12.268h-3v-5.607c0-1.336-.471-2.248-1.651-2.248-.899 0-1.434.604-1.671 1.189-.086.211-.108.508-.108.805v5.861h-3s.039-9.514 0-10.5h3v1.487c.398-.614 1.107-1.487 2.688-1.487 1.963 0 3.437 1.281 3.437 4.042v6.458z" />
            </svg>
          </a>
          <a
            href="https://github.com/william-riser"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-blue-600 hover:text-blue-700 transition-colors duration-200 text-3xl"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.235 1.838 1.235 1.07 1.835 2.809 1.305 3.495.998.108-.776.419-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.47-2.382 1.235-3.221-.123-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.289-1.552 3.296-1.23 3.296-1.23.653 1.649.241 2.873.118 3.176.768.839 1.233 1.911 1.233 3.221 0 4.609-2.807 5.623-5.479 5.921.43.37.823 1.096.823 2.21 0 1.596-.015 2.884-.015 3.276 0 .322.216.694.825.576 4.765-1.59 8.201-6.086 8.201-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
        <a
          href="mailto:riser.w@northeastern.edu"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default GetInTouch;
