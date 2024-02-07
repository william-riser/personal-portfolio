import React, { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setIsScrolled(prevScrollPos < currentScrollPos && currentScrollPos > 0);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className={`z-10 fixed top-0 left-0 w-full py-4 transition-all duration-300 ${
        isScrolled ? "bg-gray-800 opacity-0" : "bg-gray-800 opacity-100"
      }`}
    >
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-white xs:text-center sm:text-center md:text-left lg:text-left xl:text-left">
          William Riser
        </h1>
        <nav>
          <ul className="text-white flex space-x-4">
            <li className="hover:bg-slate-600 rounded-md px-2 py-1">
              <a href="#home">Home</a>
            </li>
            <li className="hover:bg-slate-600 rounded-md px-2 py-1">
              <a href="#education">Education</a>
            </li>
            <li className="hover:bg-slate-600 rounded-md px-2 py-1">
              <a href="#skills">Skills</a>
            </li>
            <li className="hover:bg-slate-600 rounded-md px-2 py-1">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
