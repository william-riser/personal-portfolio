import React, { useState } from "react";
import { Link } from "react-scroll";

interface HeaderProps {
  sections: string[];
}

const Header: React.FC<HeaderProps> = ({ sections }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle isOpen state
  };

  const closeMenu = () => {
    setIsOpen(false); // Close the menu
  };

  return (
      <header className={`z-10 fixed top-0 left-0 w-full py-4 transition-all duration-300 bg-gray-800 opacity-90`}>
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo or Title */}
          <h1 className="text-3xl font-bold text-white">William Riser</h1>

          {/* Hamburger Button */}
          <button
              className="md:hidden focus:outline-none p-2"
              onClick={toggleMenu} // Toggle isOpen state
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Navigation Menu */}
          <nav>
            <ul
                className={`text-white absolute top-full left-0 w-full bg-gray-800 md:bg-transparent pt-5 pb-4 md:static md:pt-0 md:pb-0 md:flex md:space-x-4 md:items-center transition-all transform opacity-100 ${
                    isOpen ? "translate-x-0" : "-translate-x-full opacity-0"
                }`}
            >
              {sections.map((section, index) => (
                  <li
                      key={index}
                      className="py-2 md:py-0 hover:bg-gray-700 rounded-md md:px-2"
                      onClick={(event) => {
                        event.preventDefault();
                        closeMenu();
                      }}
                  >
                    <Link
                        to={section.toLowerCase()}
                        smooth={true}
                        duration={500}
                        offset={-50}
                        spy={true}
                        activeClass="active"
                        className="block" // Add block for full-width on mobile
                        onClick={closeMenu} // Close menu on link click
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
