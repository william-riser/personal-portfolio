import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

interface HeaderProps {
  sections: string[];
}

const Header: React.FC<HeaderProps> = ({ sections }) => {
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
        isScrolled ? "bg-gray-800 opacity-0" : "bg-header opacity-100"
      }`}
    >
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-white xs:text-center sm:text-center md:text-left lg:text-left xl:text-left">
          William Riser
        </h1>
        <nav>
          <ul className="text-white flex space-x-4">
            {sections.map((section, index) => (
              <li key={index} className="hover:bg-slate-600 rounded-md px-2 py-1">
                <Link
                  to={section.toLowerCase()} // Use the lowercase version of the section as the id
                  smooth={true}
                  duration={500}
                  offset={-50}
                  spy={true}
                  activeClass="active"
                >
                  {section}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
